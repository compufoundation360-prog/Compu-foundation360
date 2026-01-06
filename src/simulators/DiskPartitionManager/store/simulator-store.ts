import { create } from 'zustand';
import { Disk, createInitialDisk, createUsbDisk, PartitionSegment, FileSystem } from '../lib/simulator-types';

// Better ID generator to prevent collisions
const generateId = () => `id-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

interface SimulatorState {
    disks: Disk[];
    selectedSegmentId: string | null;

    // Actions
    initialize: () => void;
    selectSegment: (id: string | null) => void;
    addUsbDisk: () => void;

    // Partition Operations
    createPartition: (diskId: string, segmentId: string, sizeMB: number, letter: string, label: string, fs: FileSystem) => void;
    deletePartition: (diskId: string, segmentId: string) => void;
    formatPartition: (diskId: string, segmentId: string, label: string, fs: FileSystem) => void;
    shrinkPartition: (diskId: string, segmentId: string, sizeMBToShrink: number) => void;
    extendPartition: (diskId: string, segmentId: string, sizeMBToExtend: number) => void;
    changeLetter: (diskId: string, segmentId: string, newLetter: string) => void;
}

export const useSimulatorStore = create<SimulatorState>((set, get) => ({
    disks: [createInitialDisk()],
    selectedSegmentId: null,

    initialize: () => set({ disks: [createInitialDisk()], selectedSegmentId: null }),

    selectSegment: (id) => set({ selectedSegmentId: id }),

    addUsbDisk: () => set(state => {
        if (state.disks.some(d => d.id === "disk-1")) return state;
        return { disks: [...state.disks, createUsbDisk()] };
    }),

    createPartition: (diskId, segmentId, sizeMB, letter, label, fs) => set(state => {
        // Force integer math
        const safeSize = Math.floor(sizeMB);
        if (isNaN(safeSize) || safeSize <= 0) return state;

        const diskIndex = state.disks.findIndex(d => d.id === diskId);
        if (diskIndex === -1) return state;

        const disk = { ...state.disks[diskIndex] };
        const segIndex = disk.segments.findIndex(s => s.id === segmentId);
        if (segIndex === -1) return state;

        const originalSeg = disk.segments[segIndex];
        // Double check existence and type to prevent race conditions
        if (!originalSeg || originalSeg.type !== "Unallocated") return state;

        // Safety check for size
        if (safeSize > originalSeg.sizeMB) return state;

        // Logic: Split unallocated into [New Partition, Remaining Unallocated]
        const newPartition: PartitionSegment = {
            id: generateId(), // New ID
            type: "Primary",
            fileSystem: fs,
            label: label,
            driveLetter: letter,
            sizeMB: safeSize,
            isSystem: false,
            isBoot: false,
        };

        const remainingSize = Math.floor(originalSeg.sizeMB - safeSize);
        const newSegments = [...disk.segments];

        // Replace the unallocated block with new partition
        newSegments[segIndex] = newPartition;

        // If there is space left, insert a new unallocated block after
        if (remainingSize > 0) { // integer
            newSegments.splice(segIndex + 1, 0, {
                id: generateId(),
                type: "Unallocated",
                fileSystem: "Unformatted",
                label: "Unallocated",
                driveLetter: null,
                sizeMB: remainingSize,
            });
        }

        const newDisks = [...state.disks];
        newDisks[diskIndex] = { ...disk, segments: newSegments };
        return {
            disks: newDisks,
            selectedSegmentId: newPartition.id // Keep focus on the new partition
        };
    }),

    deletePartition: (diskId, segmentId) => set(state => {
        const diskIndex = state.disks.findIndex(d => d.id === diskId);
        if (diskIndex === -1) return state;

        const disk = { ...state.disks[diskIndex] };
        const segIndex = disk.segments.findIndex(s => s.id === segmentId);
        if (segIndex === -1) return state;

        const segmentToDelete = disk.segments[segIndex];
        if (!segmentToDelete || segmentToDelete.isSystem) return state;

        // Convert to unallocated
        const newUnallocated: PartitionSegment = {
            ...segmentToDelete,
            type: "Unallocated",
            fileSystem: "Unformatted",
            label: "Unallocated",
            driveLetter: null,
        };

        const newSegments = [...disk.segments];
        newSegments[segIndex] = newUnallocated;

        // Merge adjacent unallocated blocks
        // Using a cleaner filter/reduce approach or just multi-pass loop
        // Here we recreate the array to ensure clean state
        const mergedSegments: PartitionSegment[] = [];
        if (newSegments.length > 0) {
            let current = newSegments[0];
            for (let i = 1; i < newSegments.length; i++) {
                const next = newSegments[i];
                if (current.type === "Unallocated" && next.type === "Unallocated") {
                    current = {
                        ...current,
                        sizeMB: Math.floor(current.sizeMB + next.sizeMB),
                        label: "Unallocated" // Ensure consistent label
                    };
                } else {
                    mergedSegments.push(current);
                    current = next;
                }
            }
            mergedSegments.push(current);
        }

        const newDisks = [...state.disks];
        newDisks[diskIndex] = { ...disk, segments: mergedSegments };
        return {
            disks: newDisks,
            selectedSegmentId: mergedSegments[Math.min(segIndex, mergedSegments.length - 1)]?.id || null
        };
    }),

    formatPartition: (diskId, segmentId, label, fs) => set(state => {
        const diskIndex = state.disks.findIndex(d => d.id === diskId);
        if (diskIndex === -1) return state;

        const newDisks = [...state.disks];
        const disk = { ...newDisks[diskIndex] };
        const segIndex = disk.segments.findIndex(s => s.id === segmentId);

        if (segIndex !== -1) {
            disk.segments = [...disk.segments];
            disk.segments[segIndex] = {
                ...disk.segments[segIndex],
                label,
                fileSystem: fs
            };
            newDisks[diskIndex] = disk;
        }

        return { disks: newDisks };
    }),

    shrinkPartition: (diskId, segmentId, sizeMBToShrink) => set(state => {
        const safeShrink = Math.floor(sizeMBToShrink);
        if (isNaN(safeShrink) || safeShrink <= 0) return state;

        const diskIndex = state.disks.findIndex(d => d.id === diskId);
        if (diskIndex === -1) return state;

        const disk = { ...state.disks[diskIndex] };
        const segIndex = disk.segments.findIndex(s => s.id === segmentId);
        const segment = disk.segments[segIndex];

        if (!segment || segment.type === "Unallocated") return state;
        if (segment.sizeMB <= safeShrink) return state;

        const newSegments = [...disk.segments];

        // Reduce size
        newSegments[segIndex] = { ...segment, sizeMB: Math.floor(segment.sizeMB - safeShrink) };

        // Create unallocated space after
        const newUnallocated: PartitionSegment = {
            id: generateId(),
            type: "Unallocated",
            fileSystem: "Unformatted",
            label: "Unallocated",
            driveLetter: null,
            sizeMB: safeShrink
        };

        // Insert after current
        newSegments.splice(segIndex + 1, 0, newUnallocated);

        // Merge Logic Loop for Shrink (Safety)
        const mergedSegments: PartitionSegment[] = [];
        let current = newSegments[0];

        for (let i = 1; i < newSegments.length; i++) {
            const next = newSegments[i];
            if (current.type === "Unallocated" && next.type === "Unallocated") {
                current = { ...current, sizeMB: Math.floor(current.sizeMB + next.sizeMB) };
            } else {
                mergedSegments.push(current);
                current = next;
            }
        }
        mergedSegments.push(current);

        const newDisks = [...state.disks];
        newDisks[diskIndex] = { ...disk, segments: mergedSegments };
        return {
            disks: newDisks,
            selectedSegmentId: mergedSegments[segIndex]?.id || null
        };
    }),

    extendPartition: (diskId, segmentId, sizeMBToExtend) => set(state => {
        const safeExtend = Math.floor(sizeMBToExtend);
        if (isNaN(safeExtend) || safeExtend <= 0) return state;

        const diskIndex = state.disks.findIndex(d => d.id === diskId);
        if (diskIndex === -1) return state;

        const disk = { ...state.disks[diskIndex] };
        const segIndex = disk.segments.findIndex(s => s.id === segmentId);
        const segment = disk.segments[segIndex];
        const nextSegment = disk.segments[segIndex + 1];

        if (!nextSegment || nextSegment.type !== "Unallocated") return state;
        if (nextSegment.sizeMB < safeExtend) return state;

        const newSegments = [...disk.segments];

        // Increase current size
        newSegments[segIndex] = { ...segment, sizeMB: Math.floor(segment.sizeMB + safeExtend) };

        // Decrease next unallocated size
        const remainingUnallocated = Math.floor(nextSegment.sizeMB - safeExtend);

        if (remainingUnallocated < 1) {
            // Consumed entirely
            newSegments.splice(segIndex + 1, 1);
        } else {
            newSegments[segIndex + 1] = { ...nextSegment, sizeMB: remainingUnallocated };
        }

        const newDisks = [...state.disks];
        newDisks[diskIndex] = { ...disk, segments: newSegments };
        return {
            disks: newDisks,
            selectedSegmentId: newSegments[segIndex]?.id || null
        };
    }),

    changeLetter: (diskId, segmentId, newLetter) => set(state => {
        const diskIndex = state.disks.findIndex(d => d.id === diskId);
        if (diskIndex === -1) return state;

        const newDisks = [...state.disks];
        const disk = { ...newDisks[diskIndex] };
        const segIndex = disk.segments.findIndex(s => s.id === segmentId);

        if (segIndex !== -1) {
            disk.segments = [...disk.segments];
            disk.segments[segIndex] = { ...disk.segments[segIndex], driveLetter: newLetter };
            newDisks[diskIndex] = disk;
        }

        return { disks: newDisks };
    }),
}));

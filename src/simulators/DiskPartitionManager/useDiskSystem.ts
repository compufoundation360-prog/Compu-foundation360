import { useState, useCallback } from 'react';
import { Disk, createInitialDisk, generateId, PartitionSegment, FileSystem } from './types';
import { toast } from 'sonner';

export const useDiskSystem = () => {
    const [disks, setDisks] = useState<Disk[]>([createInitialDisk()]);
    const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(null);

    const initialize = useCallback(() => {
        setDisks([createInitialDisk()]);
        setSelectedSegmentId(null);
    }, []);

    const createPartition = useCallback((diskId: string, segmentId: string, sizeMB: number, letter: string, label: string, fs: FileSystem) => {
        setDisks(prevDisks => {
            const diskIndex = prevDisks.findIndex(d => d.id === diskId);
            if (diskIndex === -1) return prevDisks;

            const disk = { ...prevDisks[diskIndex] };
            const segIndex = disk.segments.findIndex(s => s.id === segmentId);
            if (segIndex === -1) return prevDisks;

            const originalSeg = disk.segments[segIndex];
            if (originalSeg.type !== "Unallocated") return prevDisks;

            // Split Logic
            const newPartition: PartitionSegment = {
                id: generateId(),
                type: "Primary",
                fileSystem: fs,
                label: label,
                driveLetter: letter,
                sizeMB: sizeMB,
                isSystem: false,
                isBoot: false,
            };

            const remainingSize = originalSeg.sizeMB - sizeMB;
            const newSegments = [...disk.segments];

            // 1. Replace Unallocated with New Partition
            newSegments[segIndex] = newPartition;

            // 2. Insert new Unallocated segment if space remains
            if (remainingSize > 1) {
                newSegments.splice(segIndex + 1, 0, {
                    id: generateId(),
                    type: "Unallocated",
                    fileSystem: "Unformatted",
                    label: "Unallocated",
                    driveLetter: null,
                    sizeMB: remainingSize,
                });
            }

            const newDisks = [...prevDisks];
            newDisks[diskIndex] = { ...disk, segments: newSegments };
            return newDisks;
        });
    }, []);

    const deletePartition = useCallback((diskId: string, segmentId: string) => {
        setDisks(prevDisks => {
            const diskIndex = prevDisks.findIndex(d => d.id === diskId);
            if (diskIndex === -1) return prevDisks;

            const disk = prevDisks[diskIndex];
            const segIndex = disk.segments.findIndex(s => s.id === segmentId);
            if (segIndex === -1) return prevDisks;

            const segmentToDelete = disk.segments[segIndex];
            if (segmentToDelete.isSystem) return prevDisks; // Safety

            // Convert to Unallocated
            const newUnallocated: PartitionSegment = {
                ...segmentToDelete,
                type: "Unallocated",
                fileSystem: "Unformatted",
                label: "Unallocated",
                driveLetter: null,
            };

            const newSegments = [...disk.segments];
            newSegments[segIndex] = newUnallocated;

            // Merge Logic
            let mergedSegments: PartitionSegment[] = [];
            let current = newSegments[0];

            for (let i = 1; i < newSegments.length; i++) {
                const next = newSegments[i];
                if (current.type === "Unallocated" && next.type === "Unallocated") {
                    current = { ...current, sizeMB: current.sizeMB + next.sizeMB };
                } else {
                    mergedSegments.push(current);
                    current = next;
                }
            }
            mergedSegments.push(current);

            const newDisks = [...prevDisks];
            newDisks[diskIndex] = { ...disk, segments: mergedSegments };
            return newDisks;
        });
    }, []);

    const shrinkPartition = useCallback((diskId: string, segmentId: string, sizeMBToShrink: number) => {
        setDisks(prevDisks => {
            const diskIndex = prevDisks.findIndex(d => d.id === diskId);
            if (diskIndex === -1) return prevDisks;

            const disk = prevDisks[diskIndex];
            const segIndex = disk.segments.findIndex(s => s.id === segmentId);
            const segment = disk.segments[segIndex];

            if (segment.type === "Unallocated" || segment.sizeMB <= sizeMBToShrink) return prevDisks;

            const newSegments = [...disk.segments];

            // 1. Shrink current
            newSegments[segIndex] = { ...segment, sizeMB: segment.sizeMB - sizeMBToShrink };

            // 2. Create new Unallocated
            const newUnallocated: PartitionSegment = {
                id: generateId(),
                type: "Unallocated",
                fileSystem: "Unformatted",
                label: "Unallocated",
                driveLetter: null,
                sizeMB: sizeMBToShrink
            };

            // 3. Insert it
            newSegments.splice(segIndex + 1, 0, newUnallocated);

            // 4. Merge if next is also unallocated (simplified look-ahead)
            if (newSegments[segIndex + 2]?.type === "Unallocated") {
                const nextUnallocated = newSegments[segIndex + 2];
                newSegments[segIndex + 1] = {
                    ...newUnallocated,
                    sizeMB: newUnallocated.sizeMB + nextUnallocated.sizeMB
                };
                newSegments.splice(segIndex + 2, 1);
            }

            const newDisks = [...prevDisks];
            newDisks[diskIndex] = { ...disk, segments: newSegments };
            return newDisks;
        });
    }, []);

    const extendPartition = useCallback((diskId: string, segmentId: string, sizeMBToExtend: number) => {
        setDisks(prevDisks => {
            const diskIndex = prevDisks.findIndex(d => d.id === diskId);
            if (diskIndex === -1) return prevDisks;

            const disk = prevDisks[diskIndex];
            const segIndex = disk.segments.findIndex(s => s.id === segmentId);
            const segment = disk.segments[segIndex];
            const nextSegment = disk.segments[segIndex + 1];

            if (!nextSegment || nextSegment.type !== "Unallocated") {
                toast.error("Cannot extend: No unallocated space immediately after this partition.");
                return prevDisks;
            }
            if (nextSegment.sizeMB < sizeMBToExtend) {
                toast.error("Not enough unallocated space.");
                return prevDisks;
            }

            const newSegments = [...disk.segments];

            // Grow current
            newSegments[segIndex] = { ...segment, sizeMB: segment.sizeMB + sizeMBToExtend };

            // Shrink/Remove next
            const remaining = nextSegment.sizeMB - sizeMBToExtend;
            if (remaining < 1) {
                newSegments.splice(segIndex + 1, 1);
            } else {
                newSegments[segIndex + 1] = { ...nextSegment, sizeMB: remaining };
            }

            const newDisks = [...prevDisks];
            newDisks[diskIndex] = { ...disk, segments: newSegments };
            return newDisks;
        });
    }, []);

    const formatPartition = useCallback((diskId: string, segmentId: string, label: string, fs: FileSystem) => {
        setDisks(prevDisks => {
            const diskIndex = prevDisks.findIndex(d => d.id === diskId);
            if (diskIndex === -1) return prevDisks;

            const newDisks = [...prevDisks];
            const disk = { ...newDisks[diskIndex] };
            const segIndex = disk.segments.findIndex(s => s.id === segmentId);

            if (segIndex !== -1) {
                disk.segments = [...disk.segments];
                disk.segments[segIndex] = { ...disk.segments[segIndex], label, fileSystem: fs };
                newDisks[diskIndex] = disk;
            }
            return newDisks;
        });
    }, []);

    const changeLetter = useCallback((diskId: string, segmentId: string, newLetter: string) => {
        setDisks(prevDisks => {
            const diskIndex = prevDisks.findIndex(d => d.id === diskId);
            if (diskIndex === -1) return prevDisks;

            const newDisks = [...prevDisks];
            const disk = { ...newDisks[diskIndex] };
            const segIndex = disk.segments.findIndex(s => s.id === segmentId);

            if (segIndex !== -1) {
                disk.segments = [...disk.segments];
                disk.segments[segIndex] = { ...disk.segments[segIndex], driveLetter: newLetter };
                newDisks[diskIndex] = disk;
            }
            return newDisks;
        });
    }, []);

    return {
        disks,
        selectedSegmentId,
        setSelectedSegmentId,
        initialize,
        createPartition,
        deletePartition,
        shrinkPartition,
        extendPartition,
        formatPartition,
        changeLetter
    };
};

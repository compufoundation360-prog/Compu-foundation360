
export type FileSystem = "NTFS" | "FAT32" | "exFAT" | "Unformatted";
export type PartitionType = "Primary" | "Unallocated";

export interface PartitionSegment {
    id: string;
    type: PartitionType;
    fileSystem: FileSystem;
    label: string;
    driveLetter: string | null;
    sizeMB: number;
    isSystem?: boolean; // Protect C: drive
    isBoot?: boolean;
}

export interface Disk {
    id: string;
    name: string;
    type: "HDD" | "SSD";
    totalSizeMB: number;
    isOnline: boolean;
    segments: PartitionSegment[];
}

export interface Mission {
    id: number;
    title: string;
    description: string;
    objectives: string[];
    validate: (disks: Disk[]) => boolean;
}

// Helper to calculate total used space
export const getUsedSpace = (disk: Disk) => {
    return disk.segments.reduce((acc, seg) => acc + seg.sizeMB, 0);
};

// Helper to format MB to GB/TB string
export const formatSize = (mb: number) => {
    if (mb >= 1048576) {
        return `${(mb / 1048576).toFixed(2)} TB`;
    } else if (mb >= 1024) {
        return `${(mb / 1024).toFixed(2)} GB`;
    }
    return `${Math.floor(mb)} MB`;
};

// Default Initial State
export const INITIAL_DISK_SIZE_MB = 1048576; // 1TB

// Better ID generator
const generateId = () => `id-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
const uuidv4 = generateId;

export const createInitialDisk = (): Disk => ({
    id: "disk-0",
    name: "Disk 0",
    type: "HDD",
    totalSizeMB: INITIAL_DISK_SIZE_MB,
    isOnline: true,
    segments: [
        {
            id: uuidv4(),
            type: "Unallocated",
            fileSystem: "Unformatted",
            label: "Unallocated",
            driveLetter: null,
            sizeMB: INITIAL_DISK_SIZE_MB,
        }
    ]
});

export const createUsbDisk = (): Disk => ({
    id: "disk-1",
    name: "Disk 1 (Removable)",
    type: "SSD",
    totalSizeMB: 16384, // 16GB
    isOnline: true,
    segments: [
        {
            id: uuidv4(),
            type: "Unallocated",
            fileSystem: "Unformatted",
            label: "Unallocated",
            driveLetter: null,
            sizeMB: 16384,
        }
    ]
});

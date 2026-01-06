export type FileSystem = "NTFS" | "FAT32" | "exFAT" | "Unformatted";
export type PartitionType = "Primary" | "Unallocated" | "System";

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

// Simple ID generator to replace UUID
export const generateId = () => Math.random().toString(36).substring(2, 9);

// Helper to format MB to GB/TB string
export const formatSize = (mb: number) => {
    if (mb >= 1048576) {
        return `${(mb / 1048576).toFixed(2)} TB`;
    } else if (mb >= 1024) {
        return `${(mb / 1024).toFixed(2)} GB`;
    }
    return `${Math.floor(mb)} MB`;
};

// Initial State Creator
export const INITIAL_DISK_SIZE_MB = 1024000; // ~1TB for easier math

export const createInitialDisk = (): Disk => ({
    id: "disk-0",
    name: "Disk 0",
    type: "HDD",
    totalSizeMB: INITIAL_DISK_SIZE_MB,
    isOnline: true,
    segments: [
        {
            id: generateId(),
            type: "System",
            fileSystem: "NTFS",
            label: "System Reserved",
            driveLetter: null,
            sizeMB: 500,
            isSystem: true,
            isBoot: true
        },
        {
            id: generateId(),
            type: "Primary",
            fileSystem: "NTFS",
            label: "Windows",
            driveLetter: "C",
            sizeMB: 204800, // 200 GB
            isSystem: true,
        },
        {
            id: generateId(),
            type: "Unallocated",
            fileSystem: "Unformatted",
            label: "Unallocated",
            driveLetter: null,
            sizeMB: INITIAL_DISK_SIZE_MB - 205300, // Remaining
        }
    ]
});

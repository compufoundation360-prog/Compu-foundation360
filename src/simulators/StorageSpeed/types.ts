export interface DriveSpec {
    id: string;
    name: string;
    type: string;
    speed: number;
    iops: number;
    latency: number;
    color: string;
    icon: 'hard-drive' | 'disc' | 'zap';
}

export interface SimulationState {
    isRunning: boolean;
    fileSize: number;
    startTime: number | null;
    elapsedTime: { [key: string]: number };
    completed: { [key: string]: boolean };
}

export const DRIVE_SPECS: DriveSpec[] = [
    {
        id: 'hdd',
        name: 'HDD',
        type: 'Hard Disk Drive',
        speed: 150,
        iops: 150,
        latency: 12,
        color: '#3b82f6',
        icon: 'hard-drive',
    },
    {
        id: 'sata-ssd',
        name: 'SATA SSD',
        type: 'SATA Solid State',
        speed: 550,
        iops: 95000,
        latency: 0.15,
        color: '#10b981',
        icon: 'disc',
    },
    {
        id: 'nvme',
        name: 'NVMe Gen4',
        type: 'NVMe PCIe 4.0',
        speed: 7500,
        iops: 800000,
        latency: 0.015,
        color: '#f59e0b',
        icon: 'zap',
    },
];

export const FILE_SIZES = [
    { label: '500 MB', value: 500 },
    { label: '2 GB', value: 2000 },
    { label: '10 GB', value: 10000 },
    { label: '50 GB', value: 50000 },
];

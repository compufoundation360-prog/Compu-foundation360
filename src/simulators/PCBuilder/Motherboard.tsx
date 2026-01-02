import { DropZone } from './DropZone';
import motherboardImg from '../../assets/simulator-media/schematic_motherboard.png';
import { Cpu, MemoryStick, CircuitBoard, HardDrive, Wind, Zap, Radio, Plug } from 'lucide-react';
import { usePCBuilder } from './PCBuilderContext';

export const Motherboard = () => {
    const { placedParts } = usePCBuilder();

    // Calculate real-time system info
    const getSystemInfo = () => {
        const cpu = placedParts['cpu'];
        const ramSlots = Object.entries(placedParts)
            .filter(([zone]) => zone.startsWith('ram'))
            .map(([, part]) => part)
            .filter(Boolean);
        const totalRam = ramSlots.reduce((sum, ram) => {
            const capacity = parseInt(ram.name.match(/(\d+)GB/)?.[1] || '0');
            return sum + capacity;
        }, 0);
        const gpu = placedParts['pcie-x16'];
        const m2Drives = Object.entries(placedParts)
            .filter(([zone]) => zone.startsWith('m2'))
            .map(([, part]) => part)
            .filter(Boolean);
        const sataDrives = Object.entries(placedParts)
            .filter(([zone]) => zone === 'sata')
            .map(([, part]) => part)
            .filter(Boolean);

        const storageParts: string[] = [];
        m2Drives.forEach(drive => {
            if (drive.capacity) storageParts.push(drive.capacity);
        });
        sataDrives.forEach(drive => {
            if (drive.capacity) storageParts.push(drive.capacity);
        });
        const storage = storageParts.length > 0 ? storageParts.join(' + ') : 'None';

        const info: string[] = [];
        if (cpu) info.push(`CPU: ${cpu.name}`);
        if (totalRam > 0) {
            const ramText = ramSlots.length > 1 ? `${totalRam}GB (${ramSlots.length}x)` : `${totalRam}GB`;
            info.push(`RAM: ${ramText}`);
        }
        if (gpu) info.push(`GPU: ${gpu.name}`);
        if (storage !== 'None') info.push(`Storage: ${storage}`);

        return info.length > 0 ? info.join(' | ') : 'No components installed';
    };

    return (
        // Removed bg-card, shadow, border to prevent "empty space" box effect. Now it floats.
        <div className="relative w-full max-w-[600px] aspect-[3/4] mx-auto overflow-hidden select-none">
            {/* Motherboard Background Image - utilizing bg-contain to maintain aspect ratio */}
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90 dark:opacity-100 dark:invert-[.02]"
                style={{ backgroundImage: `url(${motherboardImg})` }}
            />

            {/* Overlay Grid/Texture for tech feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* PSU / Power Connector Drop Zone - Top Right */}
            <DropZone
                id="psu"
                label="Power Supply"
                className="top-[4%] right-[4%] w-[25%] h-[12%]"
                icon={<Plug className="w-8 h-8" />}
            />

            {/* Drop Zones - Positioning is manual based on typical ATX layout estimation */}
            {/* CPU Socket - Top Center */}
            <DropZone
                id="cpu"
                label="CPU Socket"
                className="top-[15%] left-[32.5%] w-[35%] h-[22%]"
                icon={<Cpu className="w-12 h-12" />}
            />

            {/* CPU Cooler Mount - Above CPU */}
            <DropZone
                id="cooler"
                label="CPU Cooler"
                className="top-[7%] left-[32.5%] w-[35%] h-[7%]"
                icon={<Wind className="w-6 h-6" />}
            />

            {/* RAM Slots - Adjusted Width and Position */}
            <div className="absolute top-[15%] right-[11%] w-[16%] h-[35%] flex flex-row gap-[2px]">
                {/* RAM Visual: Dark heat spreader with gold contacts feel */}
                <DropZone
                    id="ram-1"
                    label="D1"
                    className="relative flex-1 h-full"
                    showPartName={false}
                    icon={<div className="h-full w-[80%] bg-slate-800 border-x border-yellow-500/30 mx-auto rounded-sm shadow-inner" />}
                />
                <DropZone
                    id="ram-2"
                    label="D2"
                    className="relative flex-1 h-full"
                    showPartName={false}
                    icon={<div className="h-full w-[80%] bg-slate-800 border-x border-yellow-500/30 mx-auto rounded-sm shadow-inner" />}
                />
                <DropZone
                    id="ram-3"
                    label="D3"
                    className="relative flex-1 h-full"
                    showPartName={false}
                    icon={<div className="h-full w-[80%] bg-slate-800 border-x border-yellow-500/30 mx-auto rounded-sm shadow-inner" />}
                />
                {/* 4th slot ignored as requested */}
            </div>

            {/* PCIe x16 Slot - Main GPU Slot (Middle/Bottom) */}
            <DropZone
                id="pcie-x16"
                label="PCIe x16 (GPU)"
                className="top-[55%] left-[10%] w-[60%] h-[10%]"
                icon={<CircuitBoard className="w-full h-8" />}
            />

            {/* PCIe x1 Slots - For WiFi, Sound Cards, etc. */}
            <div className="absolute top-[66%] left-[10%] w-[60%] h-[8%] flex flex-row gap-2">
                <DropZone
                    id="pcie-x1-1"
                    label="PCIe x1"
                    className="relative flex-1 h-full"
                    icon={<Radio className="w-4 h-4" />}
                />
                <DropZone
                    id="pcie-x1-2"
                    label="PCIe x1"
                    className="relative flex-1 h-full"
                    icon={<Radio className="w-4 h-4" />}
                />
                <DropZone
                    id="pcie-x1-3"
                    label="PCIe x1"
                    className="relative flex-1 h-full"
                    icon={<Radio className="w-4 h-4" />}
                />
            </div>

            {/* M.2 Slots - Two slots */}
            <DropZone
                id="m2-1"
                label="M.2 NVMe #1"
                className="top-[48%] left-[35%] w-[30%] h-[5%]"
                icon={<div className="w-full h-2 bg-green-500/50 rounded-full" />}
            />
            <DropZone
                id="m2-2"
                label="M.2 NVMe #2"
                className="top-[42%] left-[35%] w-[30%] h-[5%]"
                icon={<div className="w-full h-2 bg-green-500/50 rounded-full" />}
            />

            {/* SATA Ports - Bottom Right (for SSDs and HDDs) */}
            <DropZone
                id="sata"
                label="SATA Ports"
                className="bottom-[10%] right-[5%] w-[20%] h-[15%]"
                icon={<HardDrive className="w-8 h-8" />}
            />

            {/* Real-time System Info - Bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-card/90 backdrop-blur-sm text-foreground text-[10px] font-mono p-2 rounded border border-border transition-colors">
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                    <span className="text-muted-foreground">{getSystemInfo()}</span>
                </div>
                <div className="mt-1 pt-1 border-t border-border text-muted-foreground/70">
                    ASUS ROG B550-F GAMING (WIFI) REV 1.02
                </div>
            </div>
        </div>
    );
};

import { Cpu, Wind, MemoryStick, CircuitBoard, HardDrive, Radio, Zap, Plug } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const InstallationGuide = () => {
    const guides = [
        {
            icon: <Cpu className="w-5 h-5" />,
            title: "CPU (Central Processing Unit)",
            where: "CPU Socket - Top center of motherboard",
            why: "The brain of your computer. Processes all instructions and calculations.",
            which: "Must match motherboard socket (AM4 for this board). Check compatibility before purchase.",
            how: [
                "1. Lift the CPU socket lever",
                "2. Align CPU with socket (match corner markers)",
                "3. Gently place CPU (no force needed)",
                "4. Lower lever to lock CPU in place"
            ]
        },
        {
            icon: <Wind className="w-5 h-5" />,
            title: "CPU Cooler",
            where: "CPU Cooler Mount - Above CPU socket",
            why: "Prevents CPU from overheating. Required for system stability.",
            which: "Compatible with CPU socket type. Air coolers or AIO liquid coolers.",
            how: [
                "1. Apply thermal paste to CPU (pea-sized drop)",
                "2. Align cooler with mounting brackets",
                "3. Secure with screws (cross pattern)",
                "4. Connect fan to CPU_FAN header"
            ]
        },
        {
            icon: <MemoryStick className="w-5 h-5" />,
            title: "RAM (Random Access Memory)",
            where: "DIMM Slots - Right side of CPU (4 slots available)",
            why: "Temporary storage for active programs. More RAM = better multitasking.",
            which: "DDR4 RAM compatible with motherboard. Check speed (MHz) compatibility.",
            how: [
                "1. Open DIMM slot clips",
                "2. Align RAM notch with slot",
                "3. Press down firmly until clips snap",
                "4. For dual-channel: Use slots 2 & 4 (or 1 & 3)"
            ]
        },
        {
            icon: <CircuitBoard className="w-5 h-5" />,
            title: "GPU (Graphics Card)",
            where: "PCIe x16 Slot - Middle/bottom of motherboard",
            why: "Handles graphics rendering. Essential for gaming and video editing.",
            which: "PCIe x16 compatible cards. Check power requirements and case clearance.",
            how: [
                "1. Remove PCIe slot cover from case",
                "2. Align GPU with PCIe x16 slot",
                "3. Press down firmly until it clicks",
                "4. Secure with case screws",
                "5. Connect PCIe power cables from PSU"
            ]
        },
        {
            icon: <HardDrive className="w-5 h-5" />,
            title: "Storage (M.2 & SATA)",
            where: "M.2 slots (above PCIe) or SATA ports (bottom right)",
            why: "Permanent storage for OS, programs, and files. M.2 is faster than SATA.",
            which: "M.2 NVMe SSDs for speed, SATA SSDs/HDDs for capacity. Check interface compatibility.",
            how: [
                "M.2 Installation:",
                "1. Locate M.2 slot and remove screw",
                "2. Insert M.2 drive at 30° angle",
                "3. Press down and secure with screw",
                "",
                "SATA Installation:",
                "1. Connect SATA cable to drive",
                "2. Connect other end to SATA port",
                "3. Connect power cable from PSU"
            ]
        },
        {
            icon: <Radio className="w-5 h-5" />,
            title: "Expansion Cards (WiFi, Sound)",
            where: "PCIe x1 Slots - Below main PCIe slot",
            why: "Add features like WiFi, better audio, or additional ports.",
            which: "PCIe x1 compatible cards. Check if motherboard already has these features built-in.",
            how: [
                "5. Connect any required cables"
            ]
        },
        {
            icon: <Plug className="w-5 h-5" />,
            title: "PSU (Power Supply Unit)",
            where: "Power Supply Zone - Top right connector area",
            why: "Converts wall power to usable power for PC components.",
            which: "Check Total Wattage > Estimated Wattage. 80+ Gold recommended.",
            how: [
                "1. Connect 24-pin ATX cable",
                "2. Connect 8-pin CPU power",
                "3. Ensure PSU switch is ON",
                "4. Check Total Wattage sufficiency"
            ]
        }
    ];

    return (
        <div className="space-y-4">
            {guides.map((guide, index) => (
                <Card key={index}>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <div className="text-primary">{guide.icon}</div>
                            <CardTitle className="text-base">{guide.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-1">📍 Where:</p>
                            <p className="text-sm text-slate-700">{guide.where}</p>
                        </div>
                        <Separator />
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-1">❓ Why:</p>
                            <p className="text-sm text-slate-700">{guide.why}</p>
                        </div>
                        <Separator />
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-1">🔍 Which:</p>
                            <p className="text-sm text-slate-700">{guide.which}</p>
                        </div>
                        <Separator />
                        <div>
                            <p className="text-xs font-semibold text-slate-600 mb-1">🔧 How:</p>
                            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                                {guide.how.map((step, i) => (
                                    step ? (
                                        <li key={i} className={step.includes(':') ? 'font-semibold mt-2 list-none' : ''}>
                                            {step}
                                        </li>
                                    ) : null
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            ))}

            <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        Power Connections
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-slate-700 mb-2">
                        Don't forget to connect power cables from your PSU:
                    </p>
                    <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                        <li><strong>24-pin ATX:</strong> Main motherboard power (top right)</li>
                        <li><strong>8-pin CPU:</strong> CPU power (top right, near CPU)</li>
                        <li><strong>PCIe:</strong> GPU power (from PSU to graphics card)</li>
                        <li><strong>SATA Power:</strong> For SATA drives</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

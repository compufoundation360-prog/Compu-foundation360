import { usePCBuilder } from './PCBuilderContext';
import { CheckCircle2, AlertCircle, Zap, Cpu, MemoryStick, CircuitBoard, HardDrive, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { InstallationGuide } from './InstallationGuide';
import { cn } from '@/lib/utils';

export const BuildSummary = () => {
    const { placedParts, isSystemReady, validationError } = usePCBuilder();

    // Calculate total cost
    const totalCost = Object.values(placedParts).reduce((acc, part) => acc + (part?.price || 0), 0);

    // Calculate system specs
    const getSystemSpecs = () => {
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

        const storageTotal = [...m2Drives, ...sataDrives]
            .reduce((sum, drive) => {
                const capacity = parseInt(drive.capacity?.match(/(\d+)/)?.[1] || '0');
                return sum + capacity;
            }, 0);

        const storageTypes = [];
        if (m2Drives.length > 0) storageTypes.push(`${m2Drives.length}x M.2`);
        if (sataDrives.length > 0) storageTypes.push(`${sataDrives.length}x SATA`);

        const powerEstimate = Object.keys(placedParts).length * 45 + 50;
        const psu = placedParts['psu'];
        const suppliedPower = psu?.wattage || 0;
        const sufficientPower = suppliedPower >= powerEstimate;

        // Determine system type logic
        let systemType = 'Paperweight'; // Default if not functional

        if (cpu && totalRam > 0) {
            // It runs! But how well?
            const hasGpu = !!gpu;
            const highRam = totalRam >= 32;
            const decentRam = totalRam >= 16;
            const basicRam = totalRam >= 8;

            if (hasGpu && highRam) systemType = 'Beast Workstation 🚀';
            else if (hasGpu && decentRam) systemType = 'Gaming Rig 🎮';
            else if (hasGpu) systemType = 'Entry Gaming 👾';
            else if (highRam) systemType = 'Heavy Multitasking 🧠';
            else if (basicRam) systemType = 'Office / Home 📝';
            else systemType = 'Potato PC 🥔';
        } else if (Object.keys(placedParts).length > 0) {
            systemType = 'Building... 🚧';
        } else {
            systemType = 'Empty Case 📦';
        }

        return {
            cpu: cpu?.name || 'None',
            ram: totalRam > 0 ? `${totalRam} GB` : 'None',
            ramSlots: ramSlots.length,
            gpu: gpu?.name || 'None',
            storage: storageTotal > 0 ? `${storageTotal} GB` : 'None',
            storageTypes: storageTypes.join(', ') || 'None',
            power: powerEstimate,
            suppliedPower,
            sufficientPower,
            type: systemType
        };
    };

    const specs = getSystemSpecs();

    return (
        <aside className="w-full md:w-[240px] h-full md:h-[calc(100vh-2rem)] flex flex-col bg-muted/30 md:border-l border-border shrink-0 overflow-hidden">
            <div className="p-3 border-b border-border bg-background/95 backdrop-blur-md shrink-0">
                <div className="flex items-center justify-between gap-2 mb-2">
                    <h2 className="text-base font-semibold tracking-tight text-foreground">System Status</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="h-7 px-2 bg-background/90 backdrop-blur-sm hover:bg-muted shadow-sm border-border text-foreground">
                                <Info className="w-3.5 h-3.5" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>PC Component Installation Guide</DialogTitle>
                                <DialogDescription>
                                    Learn where, why, and how to install components on your motherboard
                                </DialogDescription>
                            </DialogHeader>
                            <InstallationGuide />
                        </DialogContent>
                    </Dialog>
                </div>
                <div className={cn(
                    "flex items-center gap-2 px-2 py-1.5 rounded-md text-xs font-medium transition-colors",
                    isSystemReady
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                        : "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                )}>
                    {isSystemReady ? (
                        <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Ready to Boot</span>
                        </>
                    ) : (
                        <>
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>
                                {!placedParts['psu'] ? 'Missing Power Supply' : 'Incomplete Build'}
                            </span>
                        </>
                    )}
                </div>

                {validationError && (
                    <div className="mt-2 px-2 py-1.5 rounded-md bg-destructive/10 text-destructive text-[10px] border border-destructive/20 animate-in slide-in-from-top-1">
                        {validationError}
                    </div>
                )}
            </div>

            {/* Top Half: Installed Components */}
            <div className="flex-1 min-h-0 flex flex-col border-b border-border">
                <div className="p-3 border-b border-border bg-background/50 shrink-0">
                    <h3 className="text-[10px] font-bold uppercase text-muted-foreground">Installed Components</h3>
                </div>
                <ScrollArea className="flex-1">
                    <div className="p-3">
                        {Object.entries(placedParts).length === 0 ? (
                            <div className="text-center py-6 text-muted-foreground text-xs italic">
                                No components installed yet.
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {Object.entries(placedParts).map(([zone, part]) => (
                                    part && (
                                        <div key={zone} className="flex items-start justify-between text-xs border-b border-border pb-2 last:border-0">
                                            <div className="flex flex-col flex-1 min-w-0">
                                                <span className="text-muted-foreground text-[9px] uppercase font-bold font-mono mb-0.5 truncate">{zone}</span>
                                                <span className="font-bold text-foreground text-xs leading-tight truncate">{part.name}</span>
                                                {(part.capacity || part.speed || part.interface) && (
                                                    <div className="flex flex-wrap gap-1 mt-0.5">
                                                        {part.capacity && (
                                                            <span className="text-[9px] text-muted-foreground font-medium">{part.capacity}</span>
                                                        )}
                                                        {part.speed && (
                                                            <span className="text-[9px] text-muted-foreground font-medium">{part.speed}</span>
                                                        )}
                                                        {part.interface && (
                                                            <span className="text-[9px] text-muted-foreground font-medium">{part.interface}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-foreground font-mono text-xs font-bold ml-2 shrink-0">
                                                ${part.price || 0}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </div>

            {/* Bottom Half: System Specs */}
            <div className="flex-1 min-h-0 flex flex-col">
                <div className="p-3 border-b border-border bg-background/50 shrink-0">
                    <h3 className="text-[10px] font-bold uppercase text-muted-foreground">System Specs</h3>
                </div>
                <ScrollArea className="flex-1">
                    <div className="p-3 space-y-3 pb-10">
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <Cpu className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-[9px] text-muted-foreground font-bold uppercase">CPU</div>
                                    <div className="text-xs font-bold text-foreground truncate">{specs.cpu}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <MemoryStick className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-[9px] text-muted-foreground font-bold uppercase">RAM</div>
                                    <div className="text-xs font-bold text-foreground">
                                        {specs.ram} {specs.ramSlots > 0 && `(${specs.ramSlots} slot${specs.ramSlots > 1 ? 's' : ''})`}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <CircuitBoard className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-[9px] text-muted-foreground font-bold uppercase">GPU</div>
                                    <div className="text-xs font-bold text-foreground truncate">{specs.gpu}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <HardDrive className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-[9px] text-muted-foreground font-bold uppercase">Storage</div>
                                    <div className="text-xs font-bold text-foreground">{specs.storage}</div>
                                    {specs.storageTypes !== 'None' && (
                                        <div className="text-[9px] text-muted-foreground font-medium mt-0.5">{specs.storageTypes}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Separator className="bg-border" />

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] text-muted-foreground uppercase">Total Value</span>
                                <span className="text-sm font-bold font-mono text-foreground">${totalCost}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Zap className={cn("w-3.5 h-3.5", specs.sufficientPower && specs.suppliedPower > 0 ? "text-green-500" : "text-muted-foreground")} />
                                <div className="flex-1">
                                    <div className="text-[9px] text-muted-foreground uppercase">Power (Est. / PSU)</div>
                                    <div className={cn("text-xs font-medium", !specs.sufficientPower && specs.suppliedPower > 0 ? "text-destructive font-bold" : "text-foreground")}>
                                        ~{specs.power}W / {specs.suppliedPower > 0 ? `${specs.suppliedPower}W` : 'N/A'}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-1">
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">System Type</div>
                                <div className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded inline-block">
                                    {specs.type} PC
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </aside>
    );
};

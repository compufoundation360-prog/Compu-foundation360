import React, { useState, useEffect } from "react";
import { useSimulatorStore } from "./store/simulator-store";
import { VolumeTable } from "./components/VolumeTable";
import { DiskVisualizer } from "./components/DiskVisualizer";
import { MissionSidebar } from "./components/MissionSidebar";
import { NewVolumeWizard, ShrinkWizard, FormatWizard } from "./components/Wizards";
import { PartitionSegment } from "./lib/simulator-types";
import { useToast } from "@/hooks/use-toast"; // Valid in dest
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCcw, AlertTriangle, HelpCircle, Info, ChevronRight, CaseUpper, Expand, Trash2, Disc, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

// Basic Error Boundary

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any) {
        console.error("Simulation crashed:", error);
        // FORCE UNLOCK BODY ON CRASH
        // This is the most important fix for the 'can't click anything' issue
        document.body.style.pointerEvents = 'auto';
        document.body.style.overflow = 'auto';
        const shades = document.querySelectorAll('[data-radix-focus-guard], [style*="pointer-events: none"]');
        shades.forEach(s => (s as HTMLElement).style.pointerEvents = 'auto');
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center h-screen w-full p-8 text-center bg-zinc-950 text-white z-[99999] relative">
                    <AlertTriangle className="w-16 h-16 text-destructive mb-6 animate-pulse" />
                    <h2 className="text-2xl font-bold mb-4">Simulator Critical Error</h2>
                    <p className="text-zinc-400 mb-8 max-w-md">
                        A state conflict or layout error occurred. The simulator has been halted to prevent further issues.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            variant="destructive"
                            className="font-bold px-8"
                            onClick={() => {
                                localStorage.removeItem('disk-sim-history');
                                localStorage.removeItem('simulator-store'); // Clear zustand persist if used
                                window.location.reload();
                            }}
                        >
                            Reset & Restart
                        </Button>
                        <Button variant="outline" onClick={() => window.location.href = '/'}>
                            Exit to Dashboard
                        </Button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default function DiskPartitionManagerSim() {
    return (
        <ErrorBoundary>
            <DiskPartitionManagerContent />
        </ErrorBoundary>
    );
}

function DiskPartitionManagerContent() {
    const { disks, initialize, deletePartition, extendPartition, changeLetter } = useSimulatorStore();
    const { toast } = useToast();

    // Modal State
    const [activeWizard, setActiveWizard] = useState<string | null>(null);
    const [activePrompt, setActivePrompt] = useState<{ type: string; segment: PartitionSegment; diskId: string } | null>(null);
    const [targetSegment, setTargetSegment] = useState<PartitionSegment | null>(null);
    const [targetDiskId, setTargetDiskId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [newLetter, setNewLetter] = useState<string>("");
    const [mobileActionSegment, setMobileActionSegment] = useState<PartitionSegment | null>(null);
    const [showMobileMissions, setShowMobileMissions] = useState(false);

    // Initial load
    useEffect(() => {
        if (disks.length === 0) initialize();
    }, [disks.length, initialize]);

    // Mobile detect
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const closeWizard = () => {
        setActiveWizard(null);
        setTimeout(() => setTargetSegment(null), 500);
    };

    const renderMobileMissions = () => {
        if (!showMobileMissions || !isMobile) return null;

        return (
            <div className="fixed inset-0 z-[200] md:hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowMobileMissions(false)} />
                <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-[2.5rem] p-6 pb-10 space-y-6 animate-in slide-in-from-bottom duration-500 shadow-2xl max-h-[85vh] overflow-y-auto">
                    <div className="w-16 h-1.5 bg-muted rounded-full mx-auto" onClick={() => setShowMobileMissions(false)} />

                    <div className="text-center space-y-1">
                        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">Missions</h2>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest opacity-60">Complete all tasks to master the simulator</p>
                    </div>

                    <div className="space-y-3">
                        {/* We'll pass the mobile variant to MissionSidebar or render them here for total control */}
                        <div className="bg-muted/30 rounded-3xl p-2 border border-border/50">
                            <MissionSidebar isMobileSheet={true} />
                        </div>
                    </div>

                    <Button variant="ghost" className="w-full h-14 rounded-2xl font-bold text-muted-foreground hover:bg-muted" onClick={() => setShowMobileMissions(false)}>
                        Cancel
                    </Button>
                </div>
            </div>
        );
    };

    const handleAction = (action: string, segment: PartitionSegment) => {
        const disk = disks.find(d => d.segments.some(s => s.id === segment.id));
        if (!disk) return;

        setTargetDiskId(disk.id);
        setTargetSegment(segment);

        if (action === "new_simple_volume") setActiveWizard("new");
        else if (action === "shrink") setActiveWizard("shrink");
        else if (action === "format") setActiveWizard("format");
        else if (action === "delete") {
            if (segment.isSystem) {
                toast({ title: "Access Denied", description: "Cannot delete system partitions.", variant: "destructive" });
            } else {
                setActivePrompt({ type: "delete", segment, diskId: disk.id });
            }
        }
        else if (action === "extend") setActivePrompt({ type: "extend", segment, diskId: disk.id });
        else if (action === "change_letter") {
            setNewLetter("");
            setActivePrompt({ type: "letter", segment, diskId: disk.id });
        }
        else if (action === "mobile_tap") {
            setMobileActionSegment(segment);
        }
        else {
            toast({
                title: "Information",
                description: `${action.charAt(0).toUpperCase() + action.slice(1)} is not available in this lab version.`,
            });
        }
    };

    const renderMobileActionMenu = () => {
        if (!mobileActionSegment || !isMobile) return null;

        const segment = mobileActionSegment;
        const diskId = disks.find(d => d.segments.some(s => s.id === segment.id))?.id || "";
        const isUnallocated = segment.type === "Unallocated";

        const handleMobileAction = (action: string) => {
            handleAction(action, segment);
            setMobileActionSegment(null);
        };

        return (
            <div className="fixed inset-0 z-[150] md:hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setMobileActionSegment(null)} />
                <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-3xl p-6 pb-10 space-y-6 animate-in slide-in-from-bottom duration-300 shadow-2xl">
                    <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-2" onClick={() => setMobileActionSegment(null)} />

                    <div className="space-y-1">
                        <h3 className="font-bold text-lg text-foreground">
                            {isUnallocated ? "Unallocated Space" : `Volume ${segment.driveLetter ? `(${segment.driveLetter}:)` : ""}`}
                        </h3>
                        <p className="text-xs text-muted-foreground">{segment.label} • {segment.fileSystem || "None"}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        {isUnallocated ? (
                            <Button variant="outline" className="justify-start h-12 px-4 gap-3 text-sm font-medium border-border/50 hover:bg-muted" onClick={() => handleMobileAction("new_simple_volume")}>
                                <Disc className="w-5 h-5 text-primary" /> New Simple Volume...
                            </Button>
                        ) : (
                            <>
                                <Button variant="outline" className="justify-start h-12 px-4 gap-3 text-sm font-medium border-border/50 hover:bg-muted" onClick={() => handleMobileAction("change_letter")}>
                                    <CaseUpper className="w-5 h-5 text-primary" /> Change Drive Letter...
                                </Button>
                                <Button variant="outline" className="justify-start h-12 px-4 gap-3 text-sm font-medium border-border/50 hover:bg-muted" onClick={() => handleMobileAction("format")}>
                                    <Disc className="w-5 h-5 text-destructive" /> Format...
                                </Button>
                                <Button variant="outline" className="justify-start h-12 px-4 gap-3 text-sm font-medium border-border/50 hover:bg-muted" onClick={() => handleMobileAction("extend")}>
                                    <Expand className="w-5 h-5 text-primary" /> Extend Volume...
                                </Button>
                                <Button variant="outline" className="justify-start h-12 px-4 gap-3 text-sm font-medium border-border/50 hover:bg-muted" onClick={() => handleMobileAction("shrink")}>
                                    <Minimize className="w-5 h-5 text-primary" /> Shrink Volume...
                                </Button>
                                <Button variant="outline" className="justify-start h-12 px-4 gap-3 text-sm font-medium border-border/50 hover:bg-muted text-destructive hover:text-destructive" onClick={() => handleMobileAction("delete")} disabled={segment.isSystem}>
                                    <Trash2 className="w-5 h-5" /> Delete Volume...
                                </Button>
                            </>
                        )}
                        <Button variant="ghost" className="w-full h-12 mt-2 text-muted-foreground" onClick={() => setMobileActionSegment(null)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    const renderPrompt = () => {
        if (!activePrompt) return null;
        const { type, segment, diskId } = activePrompt;
        const onCancel = () => setActivePrompt(null);

        return (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
                <div className="bg-card border border-border w-full max-w-md rounded-xl shadow-2xl relative z-10 p-6 space-y-4 animate-in fade-in zoom-in duration-200">
                    {type === "delete" && (
                        <>
                            <div className="flex items-center gap-3 text-destructive">
                                <AlertTriangle className="w-8 h-8" />
                                <h3 className="font-bold text-lg">Delete Volume?</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Are you sure you want to delete <span className="text-foreground font-bold">{segment.driveLetter || "(Unknown)"}:</span>?
                                All data will be lost.
                            </p>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                                <Button variant="destructive" onClick={() => { deletePartition(diskId, segment.id); onCancel(); }}>Delete</Button>
                            </div>
                        </>
                    )}
                    {type === "extend" && (
                        <>
                            <div className="flex items-center gap-3 text-primary">
                                <Expand className="w-8 h-8" />
                                <h3 className="font-bold text-lg">Extend Volume</h3>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Amount to extend (MB)</label>
                                <Input type="number" defaultValue={100} id="extend-amount-input" className="bg-background border-input" />
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                                <Button onClick={() => {
                                    const val = (document.getElementById("extend-amount-input") as HTMLInputElement)?.value;
                                    if (val) extendPartition(diskId, segment.id, Number(val));
                                    onCancel();
                                }}>Extend</Button>
                            </div>
                        </>
                    )}
                    {type === "letter" && (
                        <>
                            <div className="flex items-center gap-3 text-primary">
                                <CaseUpper className="w-8 h-8" />
                                <h3 className="font-bold text-lg">Change Drive Letter</h3>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Select Letter</label>
                                <Select onValueChange={setNewLetter} value={newLetter}>
                                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                                    <SelectContent>
                                        {["F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(l => (
                                            <SelectItem key={l} value={l}>{l}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                                <Button onClick={() => {
                                    if (newLetter) changeLetter(diskId, segment.id, newLetter);
                                    onCancel();
                                }}>Change</Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="h-full w-full bg-background flex flex-col overflow-hidden text-foreground font-sans">
            <header className="h-14 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-4 justify-between shrink-0 z-20 sticky top-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground shadow-lg shadow-primary/20">DM</div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight tracking-tight">Virtual Disk Manager</h1>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">System Administrator Mode</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    {isMobile && (
                        <Button variant="outline" size="sm" onClick={() => setShowMobileMissions(!showMobileMissions)} className={cn("gap-2 shadow-sm transition-all", showMobileMissions ? "bg-primary/10 border-primary/50 text-primary ring-1 ring-primary/20" : "")}>
                            <Info className="w-4 h-4" /> Missions
                        </Button>
                    )}
                    <Button variant="outline" size="sm" onClick={initialize} className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all duration-300">
                        <RotateCcw className="w-4 h-4 mr-2" /> {isMobile ? "" : "Reset Lab"}
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative">
                <div className="flex-1 flex flex-col min-w-0 bg-muted/20 overflow-y-auto">
                    <div className="p-4 md:p-6 space-y-6">
                        {/* Table View */}
                        <div className="bg-card border border-border rounded-xl p-0 shadow-sm overflow-hidden">
                            <VolumeTable />
                        </div>

                        {/* Graphical View */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-1">
                                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary/50 font-bold tracking-widest text-[10px] bg-primary animate-pulse"></span>
                                    Graphical View
                                </h2>
                                <div className="flex gap-4 text-[10px] md:text-xs text-muted-foreground font-medium">
                                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-primary rounded-sm shadow-sm ring-1 ring-primary/20"></div> Primary</div>
                                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-zinc-900 rounded-sm border border-border ring-1 ring-white/5"></div> Unallocated</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {disks.map(disk => (
                                    <div key={disk.id} className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                        <DiskVisualizer
                                            disk={disk}
                                            onAction={(action, segment) => {
                                                if (isMobile) setMobileActionSegment(segment);
                                                else handleAction(action, segment);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Desktop Only */}
                {!isMobile && (
                    <div className="w-80 border-l border-border bg-card shrink-0 hidden md:block z-10 shadow-xl shadow-black/5">
                        <MissionSidebar />
                    </div>
                )}
            </div>

            {targetSegment && (
                <>
                    <NewVolumeWizard isOpen={activeWizard === "new"} onClose={closeWizard} diskId={targetDiskId || ""} segment={targetSegment} />
                    <ShrinkWizard isOpen={activeWizard === "shrink"} onClose={closeWizard} diskId={targetDiskId || ""} segment={targetSegment} />
                    <FormatWizard isOpen={activeWizard === "format"} onClose={closeWizard} diskId={targetDiskId || ""} segment={targetSegment} />
                </>
            )}

            {renderMobileMissions()}
            {renderMobileActionMenu()}
            {renderPrompt()}
        </div>
    );
}

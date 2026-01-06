import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, AlertCircle, Info, Usb } from "lucide-react";
import { useSimulatorStore } from "../store/simulator-store";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Disk, PartitionSegment } from "../lib/simulator-types";
import { cn } from "@/lib/utils";

// --- Mock Hooks for Local Logic ---
function useMissionHistory() {
    const [data, setData] = useState<{ missionId: number, success: boolean }[]>([]);
    const [isPending, setIsPending] = useState(false);

    const refresh = () => {
        try {
            const saved = localStorage.getItem('disk-sim-history');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) setData(parsed);
            }
        } catch (e) {
            console.error("Failed to refresh history", e);
        }
    };

    useEffect(() => {
        refresh();
        const handleStorage = () => refresh();
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    const logMission = (log: { missionId: number, success: boolean, attempts: number }, options: { onSuccess: () => void }) => {
        setIsPending(true);
        setTimeout(() => {
            try {
                const saved = localStorage.getItem('disk-sim-history');
                let history = saved ? JSON.parse(saved) : [];
                if (!Array.isArray(history)) history = [];

                // Only add if not already successful or if we want to allow re-entry
                history.push(log);
                localStorage.setItem('disk-sim-history', JSON.stringify(history));
                setData(history);
                options.onSuccess();
            } catch (e) {
                console.error("Failed to log mission", e);
            } finally {
                setIsPending(false);
            }
        }, 800);
    };

    return { history: data, logMission, isPending, refresh };
}

const MISSIONS = [
    {
        id: 1,
        title: "The New Drive",
        description: "You've just installed a new 1TB hard drive. Prepare it for use by creating a primary partition.",
        objectives: [
            "Initialize Disk 0",
            "Create a New Simple Volume (Full Capacity)",
            "Assign any drive letter",
            "Format as NTFS"
        ],
        validate: (disks: Disk[]) => {
            const disk = disks.find(d => d.id === "disk-0");
            if (!disk) return false;
            // Check if there's at least one partition that isn't unallocated
            const partition = disk.segments.find(s => s.type !== "Unallocated");
            return !!(partition && partition.fileSystem === "NTFS" && partition.sizeMB > 900000);
        }
    },
    {
        id: 2,
        title: "Space Management",
        description: "The system drive is getting full. Shrink an existing partition to create room for a new one.",
        objectives: [
            "Shrink the D: drive by at least 50GB",
            "Extend the C: drive to use the newly available space"
        ],
        validate: (disks: Disk[]) => {
            const disk = disks.find(d => d.id === "disk-0");
            if (!disk) return false;
            const cDrive = disk.segments.find(s => s.driveLetter === "C" || s.label.includes("C"));
            // Valid if C > 250GB (assuming it starts smaller)
            return !!(cDrive && cDrive.sizeMB > 250000);
        }
    },
    {
        id: 3,
        title: "External Media",
        description: "Plug in a USB drive and format it for cross-platform compatibility.",
        objectives: [
            "Insert the USB Drive (Click 'Add USB' button below)",
            "Create a partition filling the whole drive",
            "Format it as FAT32 or exFAT"
        ],
        validate: (disks: Disk[]) => {
            const usb = disks.find(d => d.id === "disk-1");
            if (!usb) return false;
            const part = usb.segments.find(s => s.type !== "Unallocated");
            return !!(part && (part.fileSystem === "FAT32" || part.fileSystem === "exFAT"));
        }
    }
];

interface MissionSidebarProps {
    isMobileSheet?: boolean;
}

export function MissionSidebar({ isMobileSheet }: MissionSidebarProps) {
    const { disks, addUsbDisk } = useSimulatorStore();
    const { history, logMission, isPending, refresh } = useMissionHistory();
    const { toast } = useToast();
    const [currentMissionId, setCurrentMissionId] = useState(1);

    useEffect(() => {
        if (history && Array.isArray(history)) {
            const completedIds = history.filter(h => h && h.success).map(h => h.missionId);
            const next = MISSIONS.find(m => !completedIds.includes(m.id));
            if (next) setCurrentMissionId(next.id);
            else if (history.length > 0) setCurrentMissionId(MISSIONS.length + 1);
        }
    }, [history]);

    const isMissionCompleted = (id: number) => {
        return history && Array.isArray(history) && history.some(h => h.missionId === id && h.success);
    };

    const handleMissionSelect = (id: number) => {
        setCurrentMissionId(id);
    };

    const mission = MISSIONS.find(m => m.id === currentMissionId);

    const checkMission = () => {
        if (!mission) return;

        if (mission.id === 3 && !disks.find(d => d.id === "disk-1")) {
            toast({
                title: "Requirement Missing",
                description: "You haven't inserted the USB drive yet.",
                variant: "destructive"
            });
            return;
        }

        const success = mission.validate(disks);

        logMission({
            missionId: mission.id,
            success,
            attempts: 1
        }, {
            onSuccess: () => {
                if (success) {
                    toast({
                        title: "Mission Complete!",
                        description: "Excellent work, Administrator.",
                        className: "bg-green-600 text-white border-none"
                    });
                    refresh();
                    setCurrentMissionId(id => id + 1);
                } else {
                    toast({
                        title: "Mission Failed",
                        description: "The disk configuration does not match requirements.",
                        variant: "destructive"
                    });
                }
            }
        });
    };

    if (!mission) {
        return (
            <div className={cn(
                "h-full flex flex-col justify-center items-center text-center p-6 space-y-4",
                isMobileSheet ? "" : "bg-card border-l border-border rounded-none shadow-none"
            )}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-foreground uppercase">All Missions Complete</h2>
                <p className="text-sm text-muted-foreground mx-auto max-w-[250px]">
                    Excellent work, Administrator. You have mastered the basics of Disk Management.
                </p>
                <div className="flex gap-2 w-full max-w-xs mt-4">
                    <Button onClick={() => { localStorage.removeItem('disk-sim-history'); location.reload(); }} variant="outline" className="flex-1 rounded-xl">
                        Reset
                    </Button>
                    <Button onClick={() => location.href = '/'} className="flex-1 rounded-xl">
                        Main Dashboard
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={cn(
            "h-full flex flex-col shadow-none",
            isMobileSheet ? "bg-transparent" : "bg-card border-l border-border rounded-none"
        )}>
            <div className={cn(
                "pb-4 border-b border-border",
                isMobileSheet ? "pt-2" : "bg-muted/30 p-6"
            )}>
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] p-1.5 px-3 bg-primary/10 rounded-full">Phase {mission.id}</span>
                    {isPending && <span className="text-xs text-muted-foreground animate-pulse">Verifying...</span>}
                </div>
                <h3 className="text-2xl font-black text-foreground leading-tight">{mission.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-medium leading-relaxed">
                    {mission.description}
                </p>
            </div>

            <div className={cn("flex-1 overflow-auto space-y-6", isMobileSheet ? "py-4" : "p-6")}>
                <div className="flex gap-1.5 p-1.5 bg-muted rounded-2xl mb-2">
                    {MISSIONS.map(m => {
                        const isDone = isMissionCompleted(m.id);
                        const isActive = currentMissionId === m.id;
                        return (
                            <button
                                key={m.id}
                                onClick={() => handleMissionSelect(m.id)}
                                className={cn(
                                    "flex-1 py-1.5 px-2 rounded-md text-[10px] font-bold uppercase tracking-tight transition-all flex items-center justify-center gap-1",
                                    isActive ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:bg-background/50"
                                )}
                            >
                                {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-success" />}
                                M{m.id}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => handleMissionSelect(MISSIONS.length + 1)}
                        className={cn(
                            "flex-1 py-1.5 px-2 rounded-md text-[10px] font-bold uppercase tracking-tight transition-all",
                            currentMissionId > MISSIONS.length ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:bg-background/50"
                        )}
                    >
                        End
                    </button>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xs font-black flex items-center gap-2 text-muted-foreground uppercase tracking-widest">
                        <Info className="w-3.5 h-3.5 text-primary" /> Current Objectives
                    </h4>
                    <ul className="space-y-2.5">
                        {mission.objectives.map((obj, i) => (
                            <li key={i} className="flex gap-3 text-sm text-foreground font-semibold bg-primary/5 p-4 rounded-2xl border border-primary/10">
                                <Circle className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                                {obj}
                            </li>
                        ))}
                    </ul>
                </div>

                {mission.id === 3 && (
                    <div className="bg-amber-500/10 p-5 rounded-2xl border border-amber-500/20">
                        <h4 className="text-[10px] font-black text-amber-500 mb-2 uppercase tracking-widest flex items-center gap-2">
                            <AlertCircle className="w-3 h-3" /> Important Hint
                        </h4>
                        <p className="text-xs text-amber-500/80 font-medium leading-[1.6]">
                            Click the "Insert USB Drive" button below to simulate plugging in a hardware device. This will add a Removable Disk to your controller.
                        </p>
                    </div>
                )}
            </div>

            <div className={cn("space-y-3 mt-auto border-t border-border", isMobileSheet ? "pt-4" : "p-6 bg-muted/10")}>
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        onClick={() => {
                            if (confirm("Reset current mission progress?")) {
                                const raw = localStorage.getItem('disk-sim-history');
                                if (raw) {
                                    const history = JSON.parse(raw);
                                    const filtered = history.filter((h: any) => h.missionId !== mission.id);
                                    localStorage.setItem('disk-sim-history', JSON.stringify(filtered));
                                    refresh();
                                }
                            }
                        }}
                        variant="ghost"
                        size="sm"
                        className="text-[10px] uppercase font-bold text-muted-foreground hover:text-destructive"
                    >
                        Reset Mission
                    </Button>
                    <Button
                        onClick={() => {
                            if (confirm("Reset ALL mission progress?")) {
                                localStorage.removeItem('disk-sim-history');
                                refresh();
                                setCurrentMissionId(1);
                            }
                        }}
                        variant="ghost"
                        size="sm"
                        className="text-[10px] uppercase font-bold text-muted-foreground hover:text-destructive"
                    >
                        Reset All
                    </Button>
                </div>

                {mission.id === 3 && !disks.find(d => d.id === "disk-1") && (
                    <Button onClick={addUsbDisk} variant="outline" className="w-full h-12 rounded-xl border-dashed border-2 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all font-bold">
                        <Usb className="mr-2 h-4 w-4" /> Insert USB Drive
                    </Button>
                )}
                <Button onClick={checkMission} className="w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 bg-primary hover:bg-primary-dark text-primary-foreground transform active:scale-[0.98] transition-all">
                    Verify Lab
                </Button>
            </div>
        </div>
    );
}

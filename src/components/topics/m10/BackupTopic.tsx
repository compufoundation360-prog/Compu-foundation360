import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Cloud, HardDrive, Usb, AlertTriangle, RefreshCw, CheckCircle2, History, Database, ShieldAlert, ArrowRight } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { cn, getImageUrl } from "@/lib/utils";

export function BackupTopic() {
    // Ransomware Simulator State
    const [gameState, setGameState] = useState<"safe" | "infected" | "restored">("safe");

    return (
        <div className="space-y-24 pb-16 fade-in animate-in slide-in-from-bottom-4 duration-1000">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-600 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Module 10: Topic 10
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
                            Data <span className="text-emerald-600">Recovery</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Storage fails, computers get stolen, and malware attacks. A backup is your digital insurance policy—the only way to turn back time.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-emerald-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/backup-recovery-hero.jpg")}
                                alt="Data Backup"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <Database className="w-32 h-32 mb-6 text-emerald-500 animate-pulse" />
                                <p className="font-bold text-4xl font-mono tracking-tighter text-emerald-400">ARCHIVE READY</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Redundancy checks complete...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE GOLDEN RULE (Visual Concept) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 px-4 py-1 uppercase tracking-widest font-black text-xs">the industry standard</Badge>
                        <h2 className="text-4xl md:text-5xl font-black">The Golden 3-2-1 Rule</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Professionals never rely on one single backup. They follow this simple mathematical formula for safety.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "3", title: "Total Copies", desc: "Keep your original data plus two distinct backups of every important file.", icon: Database, color: "emerald" },
                            { step: "2", title: "Different Media", desc: "Use at least two different storage types (e.g., Internal HDD and External SSD).", icon: HardDrive, color: "blue" },
                            { step: "1", title: "Offsite Copy", desc: "Keep at least one copy in a different physical location, such as the Cloud.", icon: Cloud, color: "purple" }
                        ].map((item, i) => (
                            <Card key={i} className="p-10 rounded-[40px] border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                                <span className="absolute -top-4 -right-4 text-9xl font-black text-muted/10 group-hover:text-emerald-500/5 transition-colors">{item.step}</span>
                                <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed relative z-10">
                                    {item.desc}
                                </p>
                            </Card>
                        ))}
                    </div>

                    <Card className="p-1 text-center rounded-[40px] bg-emerald-500/5 border border-emerald-500/20 overflow-hidden">
                        <div className="p-8 md:p-12 relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]"></div>
                            <p className="text-lg md:text-xl font-medium text-emerald-900 dark:text-emerald-100 italic">
                                "If your house floods or catches fire, your local backups are destroyed. The offsite copy is your ultimate safety net."
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 3. COMPARISON (Cloud vs Local) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[50px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-left">
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30 px-4 py-1.5 font-black uppercase tracking-widest">storage mediums</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Where should you store it?</h2>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                                Each storage medium has its own lifespan and risk profile. Mix and match for the best results.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group/item">
                                    <Cloud className="w-8 h-8 text-blue-400" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg">Cloud Syncing</h4>
                                        <p className="text-sm text-slate-400 italic">Google Drive, OneDrive, iCloud</p>
                                    </div>
                                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">Automated</Badge>
                                </div>
                                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group/item">
                                    <HardDrive className="w-8 h-8 text-emerald-400" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg">Physical Drives</h4>
                                        <p className="text-sm text-slate-400 italic">Portable SSDs, External HDDs</p>
                                    </div>
                                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">Fastest Recovery</Badge>
                                </div>
                                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group/item">
                                    <Usb className="w-8 h-8 text-amber-400" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg">Flash Storage</h4>
                                        <p className="text-sm text-slate-400 italic">Thumb drives, SD Cards</p>
                                    </div>
                                    <Badge variant="outline" className="border-amber-500/30 text-amber-400 text-[10px]">Small files only</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center flex-col items-center">
                            <div className="relative w-full aspect-square max-w-md">
                                <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] animate-pulse"></div>
                                <Card className="w-full h-full rounded-[60px] border-none bg-slate-800 shadow-3xl overflow-hidden relative flex flex-col p-12 justify-center gap-8 items-center text-center group-hover:-rotate-3 transition-transform duration-700">
                                    <div className="grid grid-cols-2 gap-4 w-full">
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                            <span className="text-xs text-slate-500 font-black uppercase">Internal</span>
                                            <span className="text-2xl font-bold">1 TB</span>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                            <span className="text-xs text-slate-500 font-black uppercase">Cloud</span>
                                            <span className="text-2xl font-bold">50 GB</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-white/10"></div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-black uppercase tracking-widest text-emerald-400">Total Sync Status</h4>
                                        <div className="flex justify-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RANSOMWARE SIMULATOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-red-500/10 text-red-600 border-red-200 uppercase font-black tracking-widest text-xs">interactive simulator</Badge>
                        <h2 className="text-4xl font-black">Scenario: The Ransomware Trap</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experience why a backup is the only effective defense against data extortion.</p>
                    </div>

                    <Card className={cn(
                        "p-0 overflow-hidden border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[50px] text-white min-h-[500px] relative transition-colors duration-1000",
                        gameState === 'infected' ? 'bg-red-950/90' : gameState === 'restored' ? 'bg-emerald-950/90' : 'bg-slate-950'
                    )}>
                        <div className="p-12 flex flex-col items-center justify-center h-full min-h-[500px]">
                            {gameState === "safe" && (
                                <div className="space-y-10 text-center animate-in fade-in duration-1000">
                                    <div className="w-32 h-32 bg-blue-500/10 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center mx-auto mb-8">
                                        <Database className="w-16 h-16 text-blue-500" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black tracking-tight uppercase">System: Clean</h3>
                                        <p className="text-slate-400 max-w-md mx-auto italic">Your digital life is running smoothly. But danger is just one click away...</p>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="h-20 px-12 rounded-[24px] bg-red-600 hover:bg-red-500 text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all animate-pulse"
                                        onClick={() => setGameState("infected")}
                                    >
                                        OPEN SUSPICIOUS EMAIL
                                    </Button>
                                </div>
                            )}

                            {gameState === "infected" && (
                                <div className="space-y-8 text-center animate-in zoom-in duration-500">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-red-500/40 blur-3xl animate-pulse"></div>
                                        <div className="w-32 h-32 bg-red-600 rounded-[32px] flex items-center justify-center mx-auto relative z-10 shadow-3xl rotate-12">
                                            <ShieldAlert className="w-16 h-16 text-white" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-5xl font-black text-red-500 tracking-tighter uppercase italic">Files Locked!</h3>
                                        <div className="bg-black/60 p-6 rounded-3xl border-2 border-red-500/50 text-red-400 font-mono text-lg max-w-lg mx-auto shadow-2xl">
                                            "All your family photos and tax documents are encrypted. Send 0.5 BTC to unlock."
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
                                        <Button variant="ghost" disabled className="h-16 px-10 rounded-2xl border border-white/5 text-white/20">
                                            PAY RANSOM (ERROR)
                                        </Button>
                                        <Button
                                            className="h-16 px-12 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-xl font-black shadow-3xl animate-bounce"
                                            onClick={() => setGameState("restored")}
                                        >
                                            RESTORE FROM CLOUD
                                        </Button>
                                    </div>
                                    <p className="text-xs text-red-300 font-bold tracking-widest uppercase opacity-70">Warning: Paying ransomware doesn't guarantee your files back.</p>
                                </div>
                            )}

                            {gameState === "restored" && (
                                <div className="space-y-10 text-center animate-in zoom-in duration-700">
                                    <div className="w-40 h-40 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(16,185,129,0.5)]">
                                        <CheckCircle2 className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-black text-emerald-400 tracking-tight">DISASTER AVERTED</h3>
                                        <p className="text-emerald-100 text-lg max-w-md mx-auto leading-relaxed">
                                            Because you had an offsite backup, the ransomware attack failed. You wiped your PC and downloaded your files from the cloud.
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        onClick={() => setGameState("safe")}
                                        className="h-14 px-10 border-white/30 text-white hover:bg-white/10 rounded-2xl font-bold"
                                    >
                                        RETRY SCENARIO
                                    </Button>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </section>

            {/* 5. PRACTICAL STEPS (SYSTEM RESTORE) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    <Card className="p-10 rounded-[40px] border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                        <div className="space-y-6 relative z-10 text-left">
                            <Badge className="bg-emerald-500 text-white border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">power tip</Badge>
                            <h3 className="text-3xl font-black tracking-tight leading-none">System Restore Points</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Think of it as a <strong>"Save Game"</strong> for your Windows settings. If an update breaks your PC, you can wind back the clock.
                            </p>
                            <div className="p-5 bg-background/50 rounded-2xl border border-emerald-500/10 space-y-3">
                                <h4 className="font-bold text-sm text-emerald-600 flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4" /> Important Distinction
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed italic">
                                    Restore points only save "System Settings" and "Drivers." They won't save your lost photos. You still need a 3-2-1 backup!
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-10 rounded-[40px] border border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                        <div className="space-y-6 relative z-10 text-left">
                            <Badge className="bg-blue-600 text-white border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">quick setup</Badge>
                            <h3 className="text-3xl font-black tracking-tight leading-none">The Modern Checklist</h3>
                            <div className="space-y-3 pt-2">
                                {[
                                    "Turn on Windows File History",
                                    "Install Cloud Storage (OneDrive/Drive)",
                                    "Buy an External SSD for large files",
                                    "Perform a test restore annually"
                                ].map((step, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-white/40 dark:bg-black/20 rounded-xl border border-blue-500/5 transition-transform hover:translate-x-1 duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-sm font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 6. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t10" />
            </section>

        </div>
    );
}

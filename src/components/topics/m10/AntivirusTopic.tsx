import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileSearch, Bug, Trash2, Check, ExternalLink, ShieldCheck, Search, Activity, Cpu } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { cn, getImageUrl } from "@/lib/utils";

export function AntivirusTopic() {
    // Simulator State
    const [scanning, setScanning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [threatFound, setThreatFound] = useState(false);
    const [scanPhase, setScanPhase] = useState("idle");

    const startScan = () => {
        setScanning(true);
        setProgress(0);
        setThreatFound(false);
        setScanPhase("initializing");
    };

    useEffect(() => {
        if (scanning && progress < 100) {
            const timer = setTimeout(() => {
                setProgress(prev => {
                    const next = prev + 1;
                    if (next < 30) setScanPhase("scanning_memory");
                    else if (next < 70) setScanPhase("verifying_signatures");
                    else setScanPhase("heuristic_analysis");
                    return next;
                });
            }, 30);
            return () => clearTimeout(timer);
        } else if (scanning && progress >= 100) {
            setScanning(false);
            setThreatFound(true);
            setScanPhase("threat_detected");
        }
    }, [scanning, progress]);

    return (
        <div className="space-y-24 pb-16 fade-in animate-in slide-in-from-bottom-4 duration-1000">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-600 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Module 10: Topic 8
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
                            Digital <span className="text-blue-600">Immunity</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            An antivirus isn't just a software; it's the guardian of your digital life, constantly patrolling the borders of your data.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-blue-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/antivirus-hero.jpg")}
                                alt="Antivirus Defense"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <ShieldCheck className="w-32 h-32 mb-6 text-blue-500 animate-pulse" />
                                <p className="font-bold text-4xl font-mono tracking-tighter text-blue-400">DEFENSE ACTIVE</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Deep System Integration...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE CORE MECHANISM */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-slate-950 text-white p-12 md:p-20 rounded-[50px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30 px-4 py-1.5 font-black uppercase tracking-widest">HOW IT WORKS</Badge>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Database of Fingerprints</h2>
                                <p className="text-xl text-slate-400 leading-relaxed italic">
                                    "Antivirus software keeps a massive 'Most Wanted' list of malware signatures to identify threats instantly."
                                </p>
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <Search className="w-8 h-8 text-blue-400 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg">Signature Matching</h4>
                                            <p className="text-sm text-slate-400">Comparing your files against millions of unique hashes of known viruses.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <Activity className="w-8 h-8 text-blue-400 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg">Behavioral Analysis</h4>
                                            <p className="text-sm text-slate-400">Heuristics: Watching for "shady" behavior like a program trying to encrypt your files without permission.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative w-full aspect-square max-w-sm flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] animate-pulse"></div>
                                    <div className="w-full h-full rounded-[60px] border-2 border-white/10 flex items-center justify-center relative bg-slate-900 shadow-3xl overflow-hidden group-hover:rotate-3 transition-transform duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                                        <img
                                            src={getImageUrl("module-media/antivirus-scan-process.jpg")}
                                            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                                            alt="Scanning Process"
                                        />
                                        <FileSearch className="w-32 h-32 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE DEFENSE CYCLE */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-600 px-4 py-1">THE PROCESS</Badge>
                    <h2 className="text-4xl font-bold">The Three Gates of Defense</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your antivirus goes through these stages every time it encounters a new file.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { step: "1", title: "Scan", desc: "The software reads the file's code and compares it to known signatures.", icon: Search, color: "blue" },
                        { step: "2", title: "Detect", desc: "Flags the file if it matches a threat or shows suspicious behavior.", icon: Bug, color: "orange" },
                        { step: "3", title: "Quarantine", desc: "Isolates the file in a secure vault where it can't harm your system.", icon: Trash2, color: "red" }
                    ].map((item, i) => (
                        <Card key={i} className="p-10 rounded-[40px] border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                            <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-sm font-black bg-muted px-2 py-0.5 rounded-lg">{item.step}</span>
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* 4. INTERACTIVE SIMULATOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-blue-500/10 text-blue-600 border-blue-200 uppercase font-black tracking-widest text-xs">interactive training</Badge>
                        <h2 className="text-4xl font-black">Simulator: System Scrub</h2>
                        <p className="text-xl text-muted-foreground">Run a deep-level scan to find and isolate hidden malware.</p>
                    </div>

                    <Card className="p-0 overflow-hidden border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[50px] bg-slate-950 text-white min-h-[450px] relative">
                        {/* UI Header */}
                        <div className="p-6 bg-slate-900 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">defender_engine_x64.sys</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
                                <span className="text-[10px] font-black text-slate-500 uppercase">System Integrity: {threatFound ? 'Compromised' : scanning ? 'Analyzing' : 'Ready'}</span>
                            </div>
                        </div>

                        <div className="p-12 flex flex-col items-center justify-center h-full min-h-[400px]">
                            {!scanning && !threatFound && (
                                <div className="space-y-10 text-center animate-in fade-in duration-700">
                                    <div className="w-32 h-32 bg-blue-500/10 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center mx-auto mb-8">
                                        <ShieldCheck className="w-16 h-16 text-blue-500" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black tracking-tight uppercase">System Idle</h3>
                                        <p className="text-slate-400 max-w-md mx-auto italic">No active scan in progress. Regular scans keep your system's fingerprints updated.</p>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="h-20 px-12 rounded-[24px] bg-blue-600 hover:bg-blue-500 text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
                                        onClick={startScan}
                                    >
                                        INITIATE DEEP SCAN
                                    </Button>
                                </div>
                            )}

                            {scanning && (
                                <div className="w-full max-w-lg space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex flex-col items-center gap-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl animate-pulse"></div>
                                            <div className="w-24 h-24 rounded-3xl bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center animate-spin-slow">
                                                <Cpu className="w-12 h-12 text-blue-400" />
                                            </div>
                                        </div>
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-black tracking-widest text-blue-400 uppercase">
                                                {scanPhase === "scanning_memory" && "Scanning RAM..."}
                                                {scanPhase === "verifying_signatures" && "Signature Matching..."}
                                                {scanPhase === "heuristic_analysis" && "Heuristic Engine..."}
                                            </h3>
                                            <p className="text-slate-500 font-mono text-xs">C:\Windows\System32\drivers\host_{progress}_x{progress}.dll</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="h-4 bg-slate-900 rounded-full border border-white/5 p-1">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-300 relative shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                                style={{ width: `${progress}%` }}
                                            >
                                                <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center font-mono text-xs text-blue-300">
                                            <span className="flex items-center gap-2">
                                                <Activity className="w-3 h-3 animate-pulse" /> ENGINE ACTIVE
                                            </span>
                                            <span className="text-lg font-black">{progress}%</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {threatFound && (
                                <div className="w-full max-w-md animate-in zoom-in duration-500">
                                    <Card className="p-8 bg-black/40 border-2 border-red-500/30 rounded-[40px] shadow-[0_0_100px_rgba(239,68,68,0.2)] text-center space-y-8 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-2 bg-red-600 animate-pulse"></div>
                                        <div className="w-24 h-24 bg-red-600/10 border-2 border-red-600/30 rounded-full flex items-center justify-center mx-auto">
                                            <Bug className="w-12 h-12 text-red-500 animate-bounce" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-red-500 tracking-tighter uppercase">Threat Neutralized?</h3>
                                            <p className="text-slate-400 text-sm">Target: <span className="text-white font-mono bg-red-600 px-1 font-bold">Trojan.Win32.Miner.H</span></p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Button
                                                variant="outline"
                                                className="h-14 rounded-2xl border-white/10 hover:bg-white/5"
                                                onClick={() => { setThreatFound(false); setProgress(0); }}
                                            >
                                                IGNORE
                                            </Button>
                                            <Button
                                                className="h-14 rounded-2xl bg-red-600 hover:bg-red-500 font-bold"
                                                onClick={() => { setThreatFound(false); setProgress(0); }}
                                            >
                                                QUARANTINE
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </section>

            {/* 5. TOP RECOMMENDATIONS */}
            <section className="container mx-auto px-4 pb-14">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "Windows Defender", desc: "Native, high-performance protection that's built directly into your OS.", badge: "Built-in" },
                        { title: "Malwarebytes", desc: "Specializes in zero-day threats and sophisticated malware traditional AVs miss.", badge: "Specialist" },
                        { title: "Bitdefender", desc: "Award-winning protection with advanced privacy and cloud scanning features.", badge: "Paid Elite" }
                    ].map((tool, i) => (
                        <div key={i} className="group p-8 rounded-[32px] bg-background border border-border/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                            <Badge className="mb-4 bg-muted text-muted-foreground group-hover:bg-blue-500 group-hover:text-white transition-colors">{tool.badge}</Badge>
                            <h4 className="text-xl font-bold mb-3">{tool.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {tool.desc}
                            </p>
                            <Button variant="ghost" className="w-full rounded-xl group-hover:bg-blue-500/10 group-hover:text-blue-600 border border-transparent group-hover:border-blue-500/20">
                                Learn More <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t8" />
            </section>

        </div>
    );
}

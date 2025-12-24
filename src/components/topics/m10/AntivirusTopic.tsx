import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileSearch, Bug, Trash2, Check, ExternalLink } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";

export function AntivirusTopic() {
    // Simulator State
    const [scanning, setScanning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [threatFound, setThreatFound] = useState(false);

    const startScan = () => {
        setScanning(true);
        setProgress(0);
        setThreatFound(false);
    };

    useEffect(() => {
        if (scanning && progress < 100) {
            const timer = setTimeout(() => {
                setProgress(p => p + 2);
            }, 50);
            return () => clearTimeout(timer);
        } else if (scanning && progress >= 100) {
            setScanning(false);
            setThreatFound(true);
        }
    }, [scanning, progress]);

    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 8</Badge>
                        <h1 className="text-5xl font-black leading-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Antivirus: The Immune System
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Just like a doctor fights flu, Antivirus fights malware using deep scanning.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-blue-500/20 bg-background/50 -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 flex items-center justify-center">
                            <Check className="w-32 h-32 text-blue-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. CENTERED VISUAL (Top-Down) */}
            <section className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* IMAGE PLACEHOLDER: WIDE */}
                    <div className="w-full h-96 bg-gradient-to-b from-blue-900/10 to-purple-900/10 rounded-3xl border-2 border-dashed border-blue-300 flex flex-col items-center justify-center relative overflow-hidden">
                        <FileSearch className="w-20 h-20 text-blue-500 mb-4 animate-bounce" />
                        <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER: WIDE BANNER]</p>
                        <p className="text-xs text-muted-foreground mt-2 text-center max-w-md">Recommended: A futuristic scanner beam passing over file folders, turning red bugs into green checks.</p>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Deep System Scanning</h2>
                        <p className="text-lg text-muted-foreground">
                            Antivirus software holds a massive database of "criminal fingerprints" (virus signatures).
                            It constantly compares your files against this list to catch thieves before they steal.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. TIMELINE (Process) */}
            <section className="container mx-auto px-4 bg-muted/30 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">The Defense Cycle</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

                        <div className="relative bg-background p-6 rounded-xl border shadow-sm z-10">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">1</div>
                            <h3 className="font-bold text-lg">SCAN</h3>
                            <p className="text-sm text-muted-foreground mt-2">Checks filesystem for odd patterns.</p>
                        </div>
                        <div className="relative bg-background p-6 rounded-xl border shadow-sm z-10">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">2</div>
                            <h3 className="font-bold text-lg">DETECT</h3>
                            <p className="text-sm text-muted-foreground mt-2">Matches signature or suspicious behavior.</p>
                        </div>
                        <div className="relative bg-background p-6 rounded-xl border shadow-sm z-10">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-red-600">3</div>
                            <h3 className="font-bold text-lg">QUARANTINE</h3>
                            <p className="text-sm text-muted-foreground mt-2">Locks the virus so it can't run.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SIMULATOR (Overlay) */}
            <section className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold">Interactive: System Scan</h2>
                    <Card className="p-8 bg-slate-900 text-white shadow-2xl overflow-hidden relative">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />

                        {!scanning && !threatFound && (
                            <div className="relative z-10 py-10">
                                <Button size="lg" className="w-48 h-16 text-xl rounded-full shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse" onClick={startScan}>
                                    START SCAN
                                </Button>
                            </div>
                        )}

                        {scanning && (
                            <div className="relative z-10 py-8 space-y-4">
                                <FileSearch className="w-16 h-16 mx-auto animate-pulse text-blue-400" />
                                <div className="text-xl font-mono">Scanning System Files...</div>
                                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 transition-all duration-75" style={{ width: `${progress}%` }}></div>
                                </div>
                                <div className="text-right font-mono text-blue-300">{progress}%</div>
                            </div>
                        )}

                        {threatFound && (
                            <div className="relative z-10 py-6 space-y-6">
                                <div className="flex items-center justify-center gap-4 text-red-500">
                                    <Bug className="w-16 h-16" />
                                </div>
                                <h3 className="text-2xl font-bold text-red-400">THREAT DETECTED!</h3>
                                <div className="bg-red-500/20 border border-red-500/50 p-4 rounded text-left font-mono text-sm max-w-sm mx-auto">
                                    File: unknown_miner.exe<br />
                                    Type: Trojan.Generic<br />
                                    Status: <span className="text-white bg-red-600 px-1">ACTIVE</span>
                                </div>
                                <Button size="lg" variant="destructive" className="w-full gap-2" onClick={() => { setThreatFound(false); setProgress(0); }}>
                                    <Trash2 className="w-5 h-5" /> QUARANTINE & REMOVE
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            {/* NEW: HOW IT WORKS (INTELLECT) */}
            <section className="container mx-auto px-4">
                <div className="bg-blue-600 text-white p-12 rounded-[40px] shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px]"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                        <div className="text-left">
                            <Badge className="bg-white text-blue-600 hover:bg-white mb-4">DEEP DIVE</Badge>
                            <h3 className="text-4xl font-bold mb-6">Signatures vs. Heuristics</h3>
                            <p className="text-blue-100 text-lg leading-relaxed mb-6">
                                How does an Antivirus catch a virus that was created just 5 minutes ago?
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <h4 className="font-bold mb-1">Fingerprinting (Signatures)</h4>
                                    <p className="text-sm">Matching a file against a list of known "criminals". This is 100% accurate but only works for old viruses.</p>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <h4 className="font-bold mb-1">Behavior Analysis (Heuristics)</h4>
                                    <p className="text-sm">Looking for "shady" behavior. If a file tries to delete your system logs and hide itself, the AV blocks it even if it has never seen that file before.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-64 h-64 bg-white/5 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center">
                                <Bug className="w-32 h-32 opacity-20 animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TOOLS LIST */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6 border-l-4 border-l-blue-500">
                        <h3 className="font-bold text-lg mb-2">Windows Defender</h3>
                        <p className="text-sm text-muted-foreground">Built-in to Windows. Excellent for most users.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-purple-500">
                        <h3 className="font-bold text-lg mb-2">Malwarebytes</h3>
                        <p className="text-sm text-muted-foreground">Great for finding threats others miss. Good "Second Opinion".</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-500">
                        <h3 className="font-bold text-lg mb-2">Bitdefender</h3>
                        <p className="text-sm text-muted-foreground">Top-tier paid protection if you need extra features.</p>
                    </Card>
                </div>
            </section>

            <TopicNavigation currentModuleId={10} currentTopicId="m10-t8" />
        </div>
    );
}

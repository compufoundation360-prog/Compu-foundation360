import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ShieldAlert, Monitor, Router, CheckCircle2, XCircle, ArrowRight, Activity, Terminal, Lock, Globe } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { cn, getImageUrl } from "@/lib/utils";

export function FirewallTopic() {
    // Game State
    const [score, setScore] = useState(0);
    const [currentPacket, setCurrentPacket] = useState(0);
    const [gameStatus, setGameStatus] = useState<"playing" | "finished">("playing");
    const [feedback, setFeedback] = useState<string | null>(null);

    const packets = [
        { id: 1, name: "Google_Search.html", type: "safe", desc: "Standard web request for information." },
        { id: 2, name: "Trojan_Installer.exe", type: "threat", desc: "Suspicious executable from unknown origin." },
        { id: 3, name: "Bank_Login.https", type: "safe", desc: "Secure encrypted financial transaction." },
        { id: 4, name: "Free_Money_Script.js", type: "threat", desc: "Injected script attempting to modify cookies." },
        { id: 5, name: "System_Update.msi", type: "safe", desc: "Verified operating system patch." }
    ];

    const handleDecision = (decision: "allow" | "block") => {
        const packet = packets[currentPacket];
        const isCorrect = (decision === "allow" && packet.type === "safe") || (decision === "block" && packet.type === "threat");

        if (isCorrect) {
            setScore(s => s + 20);
            setFeedback("PASS: SECURITY POLICIES COMPLIANT");
        } else {
            setFeedback("FAIL: UNAUTHORIZED DATA BREACH");
        }

        setTimeout(() => {
            setFeedback(null);
            if (currentPacket < packets.length - 1) {
                setCurrentPacket(p => p + 1);
            } else {
                setGameStatus("finished");
            }
        }, 1200);
    };

    return (
        <div className="space-y-24 pb-16 fade-in animate-in slide-in-from-bottom-4 duration-1000">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/50 text-orange-600 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Module 10: Topic 7
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
                            Digital <span className="text-orange-600 italic font-black">Firewall</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            The silent guardian of your network. Analyzing every packet of data to ensure that only the trusted cross your border.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-orange-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/firewall-hero.jpg")}
                                alt="Network Firewall"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <ShieldAlert className="w-32 h-32 mb-6 text-orange-500 animate-pulse" />
                                <p className="font-bold text-4xl font-mono tracking-tighter text-orange-400">BORDER ACTIVE</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Real-time filtering enabled...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE CONCEPT (Gatekeeper) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <Card className="p-2 rounded-[50px] bg-slate-100 dark:bg-slate-900 border-none shadow-2xl relative overflow-hidden aspect-square flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
                        <div className="p-12 text-center space-y-6 relative z-10 transition-transform duration-500 group-hover:scale-105">
                            <div className="w-48 h-48 bg-white dark:bg-black rounded-[40px] shadow-3xl mx-auto flex items-center justify-center border-2 border-orange-500/20">
                                <p className="text-xs font-mono text-orange-500 font-bold uppercase tracking-tighter">
                                    [ FIREWALL_VISUAL.JPG ]
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg font-black uppercase text-orange-600 tracking-widest leading-none">The Invisible Guard</p>
                                <p className="text-sm text-muted-foreground italic px-8 leading-relaxed">
                                    "A firewall stands at the entry point of your network, scrutinizing every digital 'package' for hidden threats."
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-10">
                        <div className="space-y-4">
                            <Badge className="bg-orange-500/10 text-orange-600 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">operational core</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">The Digital Border</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Every time you browse a website or send an email, data is broken into small "packets." The firewall is the inspector that decides which packets are safe.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg leading-none">Trusted Traffic</h4>
                                    <p className="text-sm text-emerald-600/70 mt-1">Legitimate web requests and verified external services.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-red-500/5 rounded-3xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                                <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-600">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg leading-none">Blocked Threats</h4>
                                    <p className="text-sm text-red-600/70 mt-1">Malicious software, hackers, and unauthorized access attempts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TYPES COMPARISON */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[60px] shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full animate-pulse"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <Badge className="bg-orange-500/20 text-orange-400 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">dual defense</Badge>
                                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter italic">Two Forms of Protection</h2>
                                <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                                    Security is most effective when it is multilayered. You likely already use both types today.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Card className="p-8 bg-white/5 border-white/10 rounded-[32px] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                                    <Router className="w-10 h-10 text-blue-400 mb-6" />
                                    <h4 className="text-xl font-bold mb-3">Hardware</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed italic">
                                        Protecting the Entire Network. Built into your home router.
                                    </p>
                                </Card>
                                <Card className="p-8 bg-white/5 border-white/10 rounded-[32px] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                                    <Monitor className="w-10 h-10 text-emerald-400 mb-6" />
                                    <h4 className="text-xl font-bold mb-3">Software</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed italic">
                                        Protecting the Device. Installed on your laptop or PC.
                                    </p>
                                </Card>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-8">
                            <h3 className="text-2xl font-black uppercase tracking-widest text-orange-400">The Traffic Flow</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-800 rounded-3xl border-l-4 border-l-blue-500 group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-blue-400">⬅️ Inbound</span>
                                        <Lock className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <p className="text-sm text-slate-300 italic leading-relaxed">Prevents hackers from "knocking" on your computer's virtual ports.</p>
                                </div>
                                <div className="p-6 bg-slate-800 rounded-3xl border-l-4 border-l-orange-500 group-hover:translate-x-2 transition-transform duration-700 delay-75">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-orange-400">➡️ Outbound</span>
                                        <Activity className="w-4 h-4 text-slate-500 shadow-pulse" />
                                    </div>
                                    <p className="text-sm text-slate-300 italic leading-relaxed">Stops hidden spyware on your PC from sending your secrets to a hacker.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INTERACTIVE GAME */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="border-orange-500/30 text-orange-600 px-4 py-1 font-black text-xs uppercase tracking-widest">interactive training</Badge>
                        <h2 className="text-4xl font-black">Packet Inspector Simulator</h2>
                        <p className="text-xl text-muted-foreground">You are the security engine. Analyze incoming requests and decide: Allow or Block?</p>
                    </div>

                    <Card className="p-0 overflow-hidden border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[50px] bg-slate-950 text-white min-h-[500px] relative">
                        {gameStatus === "playing" ? (
                            <div className="flex flex-col h-full min-h-[500px]">
                                <div className="p-6 bg-slate-900 flex items-center justify-between border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <span className="font-mono text-xs text-orange-400 uppercase tracking-widest flex items-center gap-2">
                                            <Terminal className="w-3 h-3" /> kernel_security_log.sh
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-slate-500 uppercase">Detection Engine: Active</span>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="flex-1 p-12 flex flex-col items-center justify-center space-y-10">
                                    <div className="text-center space-y-4 w-full max-w-lg">
                                        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-2 px-2">
                                            <span>Analyzing Packet {currentPacket + 1}/{packets.length}</span>
                                            <span>Threat Hash: {(Math.random() * 100000).toString(16).slice(0, 8)}</span>
                                        </div>
                                        <div className="p-10 bg-slate-900 border-2 border-orange-500/30 rounded-[40px] shadow-[inset_0_0_40px_rgba(249,115,22,0.1)] relative group overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan" />
                                            <h3 className="text-3xl md:text-4xl font-black font-mono text-orange-400 tracking-tighter mb-4 animate-in fade-in zoom-in duration-500">
                                                {packets[currentPacket].name}
                                            </h3>
                                            <p className="text-slate-400 font-mono text-sm leading-relaxed mb-6">
                                                {packets[currentPacket].desc}
                                            </p>
                                            <div className="flex justify-center gap-3">
                                                <Badge className="bg-slate-800 text-slate-400 font-mono text-[10px]">SRC: 192.168.1.{Math.floor(Math.random() * 255)}</Badge>
                                                <Badge className="bg-slate-800 text-slate-400 font-mono text-[10px]">PORT: {Math.floor(Math.random() * 65535)}</Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                                        <Button
                                            size="lg"
                                            className="h-20 flex-1 rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                                            onClick={() => handleDecision("allow")}
                                            disabled={!!feedback}
                                        >
                                            ALLOW
                                        </Button>
                                        <Button
                                            size="lg"
                                            className="h-20 flex-1 rounded-3xl bg-red-600 hover:bg-red-500 text-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                                            onClick={() => handleDecision("block")}
                                            disabled={!!feedback}
                                        >
                                            BLOCK
                                        </Button>
                                    </div>

                                    {feedback && (
                                        <div className={cn(
                                            "font-black text-xl italic tracking-widest animate-in slide-in-from-top-4 py-4 px-8 rounded-2xl border-2",
                                            feedback.includes('PASS') ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' : 'text-red-400 border-red-500/30 bg-red-500/10'
                                        )}>
                                            {feedback}
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 bg-slate-900/50 text-center font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                                    Adaptive filtering logic version 10.7.04_LTS
                                </div>
                            </div>
                        ) : (
                            <div className="p-12 md:p-24 flex flex-col items-center justify-center text-center space-y-10 animate-in zoom-in duration-700">
                                <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.5)] mb-4">
                                    <ShieldCheck className="w-20 h-20 text-white" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-5xl font-black italic tracking-tighter text-emerald-500">OPTIMIZED</h3>
                                    <p className="text-xl text-slate-300 max-w-md mx-auto leading-relaxed italic">
                                        Your efficiency rating: <span className="text-white font-black">{score}%</span>. Security protocols have been successfully consolidated.
                                    </p>
                                </div>
                                <Button
                                    onClick={() => { setGameStatus("playing"); setCurrentPacket(0); setScore(0); }}
                                    className="h-16 px-12 rounded-2xl bg-white text-slate-950 hover:bg-slate-200 text-xl font-black shadow-2xl group transition-all"
                                >
                                    REBOOT ENGINE
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            {/* 6. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t7" />
            </section>

        </div>
    );
}

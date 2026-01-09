import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
    Lock,
    Unlock,
    Globe,
    Download,
    AlertTriangle,
    XCircle,
    ShieldCheck,
    Search,
    X,
    Eye,
    Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn, getImageUrl } from "@/lib/utils";
import { TopicNavigation } from "@/components/TopicNavigation";

export function SafeBrowsingTopic() {
    const navigate = useNavigate();

    // --- INTERACTIVE 1: Encryption Tunnel ---
    const [isSecure, setIsSecure] = useState(false);
    const [packetPosition, setPacketPosition] = useState(0);

    // Animation Loop for Packet
    useEffect(() => {
        const interval = setInterval(() => {
            setPacketPosition((prev) => (prev > 100 ? 0 : prev + 1));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    // --- INTERACTIVE 2: Spot the Fake Download ---
    const [downloadFeedback, setDownloadFeedback] = useState<string | null>(null);

    const handleDownloadClick = (type: "real" | "fake") => {
        if (type === "fake") {
            setDownloadFeedback("wrong");
        } else {
            setDownloadFeedback("correct");
        }
    };

    // --- INTERACTIVE 3: Pop-up Simulator ---
    const [popupClosed, setPopupClosed] = useState(false);
    const [popupMistake, setPopupMistake] = useState(false);

    return (
        <div className="space-y-20 pb-10 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/50 text-teal-600 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            Module 10: Topic 6
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                            Safe <span className="text-teal-600">Browsing</span> Habits
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            The internet is a jungle full of shortcuts and traps. Master the art of surfing without letting the sharks catch you.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-teal-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/safe-browsing-hero.jpg")}
                                alt="Safe Browsing"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <Globe className="w-32 h-32 mb-6 text-teal-500 animate-pulse" />
                                <p className="font-bold text-3xl font-mono tracking-tighter text-teal-400">SURF SECURE</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Validating SSL certificates...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. INTERACTIVE: THE ENCRYPTION TUNNEL */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-teal-500/30 text-teal-600 px-4 py-1">THE TUNNEL TEST</Badge>
                            <h2 className="text-4xl font-bold flex items-center gap-3">
                                HTTP vs HTTPS
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                See what happens to your data packets when you switch between an open pipe and an encrypted tunnel.
                            </p>
                        </div>
                        <Card className="flex items-center gap-4 bg-muted/50 p-6 rounded-[32px] border shadow-sm">
                            <span className={cn("font-black text-xs uppercase tracking-widest transition-colors", !isSecure ? "text-red-500" : "text-muted-foreground")}>Unsafe (HTTP)</span>
                            <Switch checked={isSecure} onCheckedChange={setIsSecure} className="data-[state=checked]:bg-teal-500" />
                            <span className={cn("font-black text-xs uppercase tracking-widest transition-colors", isSecure ? "text-teal-500" : "text-muted-foreground")}>Secure (HTTPS)</span>
                        </Card>
                    </div>

                    <Card className="p-10 md:p-20 border-none bg-slate-950 relative overflow-hidden min-h-[400px] flex flex-col justify-center rounded-[50px] shadow-2xl">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05),transparent)]"></div>

                        {/* The Tunnel Visualization */}
                        <div className="relative flex justify-between items-center z-10">
                            {/* User */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-24 h-24 bg-blue-500/10 border-2 border-blue-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-4xl">👤</span>
                                </div>
                                <span className="text-white font-black tracking-widest text-xs uppercase opacity-60">USER DEVICE</span>
                            </div>

                            {/* The "Cable" */}
                            <div className="flex-1 h-3 bg-slate-900 mx-12 relative rounded-full overflow-hidden border border-white/5">
                                {/* The "Tunnel" glow when secure */}
                                {isSecure && (
                                    <div className="absolute inset-0 bg-teal-500/20 blur-sm animate-pulse"></div>
                                )}

                                {/* Data Packet */}
                                <div
                                    className="absolute top-0 bottom-0 flex items-center justify-center transition-all duration-75"
                                    style={{
                                        left: `${packetPosition}%`,
                                        width: '180px',
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    <div className={cn(
                                        "px-6 py-2 rounded-xl text-sm font-mono font-black whitespace-nowrap shadow-2xl transition-all duration-300 border-2",
                                        isSecure
                                            ? "bg-teal-500 text-black border-teal-400 rotate-0 scale-110"
                                            : "bg-red-500 text-white border-red-400 -rotate-2 scale-100"
                                    )}>
                                        {isSecure ? (
                                            <span className="flex items-center gap-2">🔒 x8S7#kP9</span>
                                        ) : (
                                            <span className="flex items-center gap-2">🔓 password123</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Server */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-24 h-24 bg-purple-500/10 border-2 border-purple-500/30 rounded-[32px] flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:scale-110 transition-transform duration-500">
                                    <Globe className="text-purple-400 w-12 h-12" />
                                </div>
                                <span className="text-white font-black tracking-widest text-xs uppercase opacity-60">WEBSITE SERVER</span>
                            </div>
                        </div>

                        {/* Explanation Overlay */}
                        <div className="mt-16 text-center">
                            {isSecure ? (
                                <div className="space-y-3 animate-in fade-in zoom-in duration-500">
                                    <p className="text-teal-400 font-black text-2xl tracking-tight">ENCRYPTION ACTIVE</p>
                                    <p className="text-slate-400 max-w-lg mx-auto italic">Even if someone intercepts your data, they only see scrambled characters. Your tokens and passwords are safe.</p>
                                </div>
                            ) : (
                                <div className="space-y-3 animate-pulse">
                                    <p className="text-red-500 font-black text-2xl tracking-tight">VULNERABLE CONNECTION</p>
                                    <p className="text-slate-400 max-w-lg mx-auto italic font-bold">Your data is being transmitted in "Plain Text." Anyone on the same network can read it with simple tools.</p>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </section>


            {/* 3. DANGEROUS DOWNLOADS */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="outline" className="border-teal-500/30 text-teal-600 px-4 py-1">SPOT THE BAIT</Badge>
                    <h2 className="text-4xl font-bold">The Great Download Deception</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Malicious websites hide viruses behind big, flashy buttons. Can you identify the legitimate file link?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* FAKE BUTTON CARD */}
                    <Card
                        className={cn(
                            "p-10 flex flex-col items-center justify-center gap-6 cursor-pointer border-[6px] transition-all duration-500 rounded-[40px] relative overflow-hidden group",
                            downloadFeedback === "wrong" ? "border-red-500 bg-red-500/5" : "border-transparent bg-card hover:bg-muted/50 hover:shadow-2xl"
                        )}
                        onClick={() => handleDownloadClick("fake")}
                    >
                        <div className="w-full h-20 bg-green-500 group-hover:bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 text-2xl animate-bounce">
                            <Download className="w-8 h-8" />
                            DOWNLOAD FREE
                        </div>
                        <div className="text-center space-y-1">
                            <p className="font-black text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">Source Indication</p>
                            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-border">
                                <Search className="w-3 h-3 text-red-500" />
                                <span className="text-xs font-mono text-red-500">Ad • super-safe-downloader.exe</span>
                            </div>
                        </div>
                        {downloadFeedback === "wrong" && (
                            <div className="absolute inset-0 bg-red-600 flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-300">
                                <AlertTriangle className="w-16 h-16 mb-4 animate-bounce" />
                                <h4 className="text-2xl font-black mb-2">MALWARE DETECTED!</h4>
                                <p className="text-center opacity-90">Flashy buttons with "FREE" and "!!!" are almost always dangerous ads designed to trick your eyes.</p>
                            </div>
                        )}
                    </Card>

                    {/* REAL BUTTON CARD */}
                    <Card
                        className={cn(
                            "p-10 flex flex-col items-center justify-center gap-6 cursor-pointer border-[6px] transition-all duration-500 rounded-[40px] relative overflow-hidden group",
                            downloadFeedback === "correct" ? "border-teal-500 bg-teal-500/5" : "border-transparent bg-card hover:bg-muted/50 hover:shadow-2xl"
                        )}
                        onClick={() => handleDownloadClick("real")}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck className="w-10 h-10" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-lg text-primary hover:underline">setup_installer_v2.4.zip</h4>
                                <p className="text-sm text-muted-foreground">Checksum: SHA-256 Verified</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Badge variant="secondary" className="px-3 py-1">Mirror 1 (Global)</Badge>
                            <Badge variant="secondary" className="px-3 py-1">Direct (HTTPS)</Badge>
                        </div>
                        {downloadFeedback === "correct" && (
                            <div className="absolute inset-0 bg-teal-600 flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-300 text-center">
                                <ShieldCheck className="w-16 h-16 mb-4" />
                                <h4 className="text-2xl font-black mb-2">SECURE CHOICE!</h4>
                                <p className="opacity-90">Legitimate software downloads are usually small, descriptive, and lack flashy colors. They often show file size and version numbers.</p>
                            </div>
                        )}
                    </Card>
                </div>
            </section>


            {/* 4. INTERACTIVE: POP-UP SIMULATOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-orange-500/30 text-orange-600 px-4 py-1">INTERFACE TRAPS</Badge>
                        <h2 className="text-4xl font-bold tracking-tight">The "Fake Close" Trick</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Malicious pop-ups often design fake "X" buttons or "Cancel" buttons that are actually hidden links to install malware.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-5 bg-card border rounded-3xl hover:bg-muted/50 transition-colors">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold">The Trap X</h4>
                                    <p className="text-sm text-muted-foreground">Often, the "X" in the corner of a pop-up is part of the image, clicking it triggers the download.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-card border rounded-3xl hover:bg-muted/50 transition-colors">
                                <Shield className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold">The Safe Way</h4>
                                    <p className="text-sm text-muted-foreground">Use the browser's own tab-close shortcut (<kbd className="bg-muted px-1 rounded shadow-inner">Ctrl+W</kbd>) or the native OS "X" on the window.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="relative bg-slate-900 overflow-hidden border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[40px] h-[450px]">
                        {popupClosed ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-teal-600 text-white animate-in zoom-in duration-500">
                                <ShieldCheck className="w-24 h-24 mb-6 shadow-2xl" />
                                <h3 className="text-4xl font-black mb-4 tracking-tighter">PHANTOM BLOCKED</h3>
                                <p className="text-teal-100 text-lg">You identified the real exit and ignored the psychological traps.</p>
                                <Button variant="outline" size="lg" onClick={() => { setPopupClosed(false); setPopupMistake(false); }} className="mt-8 border-white/40 text-white hover:bg-white/10 h-14 px-8 rounded-2xl font-bold">
                                    Reset Simulator
                                </Button>
                            </div>
                        ) : (
                            <div className="h-full relative overflow-hidden bg-white">
                                {/* Chrome-like header (Legit UI) */}
                                <div className="h-10 bg-slate-200 flex items-center justify-between px-3 border-b flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Alert</span>
                                    </div>
                                    <button
                                        onClick={() => setPopupClosed(true)}
                                        className="h-6 w-6 flex items-center justify-center hover:bg-red-500 hover:text-white rounded transition-colors text-slate-600"
                                        title="Legitimate Close Button"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="p-10 flex flex-col items-center justify-center h-full text-center space-y-6 relative">
                                    {/* The Trap Pop-up */}
                                    <Card className="absolute inset-x-6 top-1/2 -translate-y-1/2 p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-2 border-red-500 rounded-3xl animate-in slide-in-from-bottom-10 space-y-6 z-10">
                                        {/* FAKE RED EXIT BUTTON (TRAP) */}
                                        <button
                                            className="absolute -top-3 -right-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
                                            onClick={() => setPopupMistake(true)}
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                                                <AlertTriangle className="w-8 h-8 text-red-600 animate-pulse" />
                                            </div>
                                            <h3 className="text-2xl font-black text-red-600 tracking-tight">PC INFECTED!</h3>
                                            <p className="text-slate-600 font-medium">3 Cryptojackers found on your hard drive. Performance is dropping!</p>
                                        </div>

                                        <Button
                                            size="lg"
                                            className="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-700 text-lg font-black shadow-xl"
                                            onClick={() => setPopupMistake(true)}
                                        >
                                            REMIVE THREAT NOW
                                        </Button>

                                        <p className="text-[10px] text-slate-400 italic">"Cancel" to dismiss this window</p>
                                        <button className="text-xs font-bold text-slate-400 hover:text-red-600" onClick={() => setPopupMistake(true)}>Cancel</button>

                                        {popupMistake && (
                                            <div className="absolute inset-0 bg-red-600 text-white flex flex-col items-center justify-center animate-in fade-in z-20 rounded-3xl p-6 text-center">
                                                <XCircle className="w-20 h-20 mb-4 animate-bounce" />
                                                <h4 className="text-2xl font-black mb-2 uppercase">YOU BEEN TRAPPED!</h4>
                                                <p className="mb-6 opacity-90">By clicking the fake "X" or the "Clean" button inside the image, you just downloaded the actual malware.</p>
                                                <Button variant="outline" onClick={() => setPopupMistake(false)} className="border-white/40 text-white hover:bg-white/10 rounded-xl px-10">
                                                    Try Again
                                                </Button>
                                            </div>
                                        )}
                                    </Card>

                                    <div className="opacity-20 blur-[2px] pointer-events-none text-left">
                                        <div className="h-4 w-48 bg-slate-200 rounded mb-4"></div>
                                        <div className="h-4 w-64 bg-slate-100 rounded mb-4"></div>
                                        <div className="h-4 w-40 bg-slate-200 rounded mb-4"></div>
                                        <div className="h-4 w-56 bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Card>
                </div>
            </section>


            {/* 5. NEW: THE PADLOCK PARADOX */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[50px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-teal-500/20 text-teal-400 border-teal-400/30 px-4 py-1.5 font-black uppercase tracking-widest">ADVANCED KNOWLEDGE</Badge>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">The Padlock Paradox</h3>
                            <p className="text-xl text-slate-400 leading-relaxed italic">
                                "Many people think the little <strong>Padlock</strong> in the address bar means 'This site is safe for me.' That is a dangerous myth."
                            </p>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                                        <Lock className="w-5 h-5 text-teal-400" />
                                    </div>
                                    <p className="text-slate-300">The padlock only means the connection is <strong>Private</strong>. No one can eavesdrop on your data while it travels.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <p className="text-slate-300">Scammers can have padlocks too. A fake bank site can be 'Private' while it steals your login. <strong>HTTPS is about privacy, not trust.</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-80 h-80 rounded-full border-4 border-dashed border-teal-500/20 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-teal-500/5 blur-3xl animate-pulse"></div>
                                <div className="w-64 h-64 bg-slate-800 rounded-[60px] flex flex-col items-center justify-center shadow-2xl transition-transform group-hover:rotate-12 duration-700">
                                    <Lock className="w-24 h-24 text-teal-500 mb-2 drop-shadow-[0_0_20px_rgba(20,184,166,0.3)]" />
                                    <span className="font-mono text-xs text-white/40 tracking-[0.3em]">SSL_VERIFIED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BROWSER WARNINGS */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight">The Red Wall of Safety</h2>
                        <p className="text-xl text-muted-foreground">Modern browsers act like bodyguards. If you see this screen, do not try to bypass it.</p>
                    </div>

                    <Card className="max-w-4xl mx-auto bg-[#c5221f] text-white p-12 md:p-20 rounded-[50px] shadow-2xl relative overflow-hidden text-left border-none group">
                        <div className="absolute top-0 left-0 right-0 bg-black/10 h-12 flex items-center px-6 gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                            </div>
                            <div className="bg-black/20 px-4 py-1 rounded-full text-[10px] font-mono flex items-center gap-2 text-white/60">
                                <Unlock className="w-3 h-3" /> https://dangerous-phishing-site.net/login
                            </div>
                        </div>

                        <div className="mt-12 space-y-8 relative z-10">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                                    <AlertTriangle className="w-12 h-12 text-white" />
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Deceptive Site Ahead</h1>
                                    <p className="text-xl text-red-50 leading-relaxed font-medium">
                                        Google Safe Browsing recently detected phishing on this site. Attackers may trick you into installing software or revealing passwords.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
                                <Button className="h-16 rounded-2xl bg-white text-red-600 hover:bg-slate-100 font-black text-xl shadow-xl transition-all active:scale-95">
                                    BACK TO SAFETY
                                </Button>
                                <Button variant="ghost" className="h-16 rounded-2xl text-white/60 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs">
                                    DETAILS (NOT RECOMMENDED)
                                </Button>
                            </div>
                        </div>

                        {/* Decorative caution stripes */}
                        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#facc15_10px,#facc15_20px)] opacity-20"></div>
                    </Card>
                </div>
            </section>

            {/* 7. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t6" />
            </section>

        </div>
    );
}

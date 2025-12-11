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
    X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
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
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 6</Badge>
                        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent pb-2 leading-tight">
                            Safe Browsing Habits
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            The internet is a jungle. Learn how to surf without getting bitten by sharks (viruses).
                            Master the art of HTTPS, safe downloads, and dodging ads.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-emerald-500/20 bg-background/50 -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/40 dark:to-emerald-900/40 flex items-center justify-center">
                            <Globe className="w-32 h-32 text-emerald-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. INTERACTIVE: THE ENCRYPTION TUNNEL */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Lock className="w-8 h-8 text-emerald-500" />
                                HTTP vs HTTPS
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                See what happens to your data when you don't use a secure connection.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-secondary/30 p-3 rounded-xl border">
                            <span className={cn("font-bold text-sm", !isSecure && "text-red-500")}>Unsafe (HTTP)</span>
                            <Switch checked={isSecure} onCheckedChange={setIsSecure} />
                            <span className={cn("font-bold text-sm", isSecure && "text-emerald-500")}>Secure (HTTPS)</span>
                        </div>
                    </div>

                    <Card className="p-10 border-2 bg-slate-950 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                        {/* The Tunnel Visualization */}
                        <div className="relative flex justify-between items-center z-10">
                            {/* User */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <span className="text-white font-mono">YOU</span>
                            </div>

                            {/* The "Cable" */}
                            <div className="flex-1 h-2 bg-gray-800 mx-8 relative rounded-full overflow-hidden">
                                {/* Data Packet */}
                                <div
                                    className="absolute top-0 bottom-0 flex items-center justify-center transition-all duration-75"
                                    style={{
                                        left: `${packetPosition}%`,
                                        width: '120px',
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    <div className={cn(
                                        "px-3 py-1 rounded text-xs font-mono font-bold whitespace-nowrap shadow-lg transition-colors border",
                                        isSecure
                                            ? "bg-emerald-500 text-black border-emerald-400"
                                            : "bg-red-500 text-white border-red-400"
                                    )}>
                                        {isSecure ? "🔒 x8s#9a1" : "🔑 password"}
                                    </div>
                                </div>
                            </div>

                            {/* Server */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                    <Globe className="text-white w-8 h-8" />
                                </div>
                                <span className="text-white font-mono">SERVER</span>
                            </div>
                        </div>

                        {/* Explanation Overlay */}
                        <div className="mt-12 text-center">
                            {isSecure ? (
                                <p className="text-emerald-400 font-bold animate-in fade-in">
                                    ✅ SECURE: Hackers only see scrambled code.
                                </p>
                            ) : (
                                <p className="text-red-500 font-bold animate-pulse">
                                    ❌ DANGER: Hackers can read your password clearly!
                                </p>
                            )}
                        </div>
                    </Card>
                </div>
            </section>


            {/* 3. DANGEROUS DOWNLOADS */}
            <section className="container mx-auto px-4 bg-secondary/5 py-16 rounded-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Spot the Fake Download Button</h2>
                <div className="max-w-3xl mx-auto text-center mb-6">
                    <p className="text-muted-foreground">Websites often hide malware in big shiny buttons. Can you find the correct one?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* FAKE BUTTON CARD */}
                    <Card
                        className={cn(
                            "p-8 flex flex-col items-center justify-center gap-4 cursor-pointer border-2 transition-all hover:scale-105",
                            downloadFeedback === "wrong" ? "border-red-500 bg-red-500/10" : "border-transparent shadow-lg"
                        )}
                        onClick={() => handleDownloadClick("fake")}
                    >
                        <div className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded shadow-xl flex items-center justify-center gap-2 text-xl animate-pulse">
                            <Download className="w-6 h-6" />
                            DOWNLOAD NOW (FREE) !!!
                        </div>
                        <span className="text-xs text-muted-foreground">Ad • fast-downloader.exe</span>
                        {downloadFeedback === "wrong" && (
                            <p className="text-red-500 font-bold mt-2 animate-in slide-in-from-top-2">
                                ⚠️ WRONG! This is an ad with a virus.
                            </p>
                        )}
                    </Card>

                    {/* REAL BUTTON CARD */}
                    <Card
                        className={cn(
                            "p-8 flex flex-col items-center justify-center gap-4 cursor-pointer border-2 transition-all hover:scale-105",
                            downloadFeedback === "correct" ? "border-emerald-500 bg-emerald-500/10" : "border-transparent shadow-lg"
                        )}
                        onClick={() => handleDownloadClick("real")}
                    >
                        <div className="text-primary hover:underline font-medium text-sm flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            setup_installer_v2.4.zip (15MB)
                        </div>
                        <span className="text-xs text-muted-foreground">Mirror 1 | Mirror 2</span>
                        {downloadFeedback === "correct" && (
                            <p className="text-emerald-500 font-bold mt-2 animate-in slide-in-from-top-2">
                                ✅ CORRECT! Real links are often small and boring.
                            </p>
                        )}
                    </Card>
                </div>
            </section>


            {/* 4. INTERACTIVE: POP-UP SIMULATOR */}
            <section className="container mx-auto px-4 pb-16">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                        <AlertTriangle className="text-orange-500" />
                        The 'Fake Close' Trick
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Pop-ups often design fake "X" buttons to trick you into clicking the ad.
                        Try to close this pop-up safely.
                    </p>

                    <div className="relative bg-white dark:bg-zinc-200 text-black rounded-lg shadow-2xl border-4 border-blue-500 w-full h-80 flex items-center justify-center overflow-hidden">
                        {popupClosed ? (
                            <div className="text-center animate-in zoom-in">
                                <ShieldCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-emerald-700">Safe!</h3>
                                <p className="text-slate-600">You ignored the fake buttons.</p>
                                <Button variant="outline" size="sm" onClick={() => { setPopupClosed(false); setPopupMistake(false); }} className="mt-4 border-slate-400">
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <div className="text-center w-full h-full relative p-6 bg-gradient-to-br from-yellow-100 to-yellow-300">
                                {/* Header */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-blue-600 flex items-center justify-between px-2">
                                    <span className="text-white text-xs font-bold">System Warning</span>
                                    {/* REAL CLOSE BUTTON */}
                                    <button
                                        onClick={() => setPopupClosed(true)}
                                        className="text-white hover:bg-red-500 px-2 rounded transition-colors"
                                        title="Close Window (Real)"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="mt-8 space-y-4">
                                    <h3 className="text-xl font-black text-red-600 uppercase">VIRUS DETECTED! (3)</h3>
                                    <p className="font-bold">Your PC is infected! Cleaning is required.</p>

                                    {/* FAKE CLOSE BUTTON (TRAP) */}
                                    <div className="absolute top-10 right-4">
                                        <button
                                            className="bg-white border shadow-sm rounded-full p-1 hover:bg-gray-100"
                                            onClick={() => setPopupMistake(true)}
                                        >
                                            <XCircle className="w-6 h-6 text-gray-400" />
                                        </button>
                                    </div>

                                    <Button size="lg" className="bg-blue-600 text-white animate-bounce shadow-xl" onClick={() => setPopupMistake(true)}>
                                        CLEAN NOW
                                    </Button>

                                    {popupMistake && (
                                        <div className="absolute inset-0 bg-red-600/90 text-white flex flex-col items-center justify-center animate-in fade-in z-20">
                                            <h4 className="text-2xl font-bold mb-2">INFECTED! 💀</h4>
                                            <p>You clicked the ad/fake button.</p>
                                            <Button variant="secondary" onClick={() => setPopupMistake(false)} className="mt-4">
                                                Try Again
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            {/* 4. NEW: BROWSER WARNINGS */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">The Red Warning Screen</h2>
                    <p className="text-muted-foreground">If you see this screen, STOP immediately.</p>

                    <Card className="max-w-3xl mx-auto bg-red-600 text-white p-8 rounded-lg shadow-2xl relative overflow-hidden text-left">
                        {/* Browser Chrome Mockup */}
                        <div className="absolute top-0 left-0 right-0 bg-red-800 h-8 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="bg-red-900 px-4 py-1 rounded text-xs flex-1 flex items-center gap-2">
                                <AlertTriangle className="w-3 h-3" /> Not Secure | dangerous-site.com
                            </div>
                        </div>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <AlertTriangle className="w-16 h-16" />
                                <div>
                                    <h1 className="text-3xl font-bold">Deceptive Site Ahead</h1>
                                    <p className="text-red-100">Attackers on dangerous-site.com may trick you into installing software or revealing passwords.</p>
                                </div>
                            </div>

                            <div className="bg-black/20 p-4 rounded text-sm">
                                <strong>What to do?</strong> Do not click "Details" or "Proceed". Close the tab immediately.
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 5. NAVIGATION */}
            <TopicNavigation currentModuleId={10} currentTopicId="m10-t6" />

        </div>
    );
}

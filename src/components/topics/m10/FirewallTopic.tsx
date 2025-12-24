import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ShieldAlert, Monitor, Router, CheckCircle2, XCircle } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";

export function FirewallTopic() {
    // Game State
    const [score, setScore] = useState(0);
    const [currentPacket, setCurrentPacket] = useState(0);
    const [gameStatus, setGameStatus] = useState<"playing" | "finished">("playing");
    const [feedback, setFeedback] = useState<string | null>(null);

    const packets = [
        { id: 1, name: "Google_Search.html", type: "safe" },
        { id: 2, name: "Trojan_Installer.exe", type: "threat" },
        { id: 3, name: "Bank_Login.https", type: "safe" },
        { id: 4, name: "Free_Money_Script.js", type: "threat" },
        { id: 5, name: "System_Update.msi", type: "safe" } // Debatable context, but let's say safe
    ];

    const handleDecision = (decision: "allow" | "block") => {
        const packet = packets[currentPacket];
        const isCorrect = (decision === "allow" && packet.type === "safe") || (decision === "block" && packet.type === "threat");

        if (isCorrect) {
            setScore(s => s + 10);
            setFeedback("Correct! Shield Holding Strong.");
        } else {
            setFeedback("Oops! Wrong decision.");
        }

        setTimeout(() => {
            setFeedback(null);
            if (currentPacket < packets.length - 1) {
                setCurrentPacket(p => p + 1);
            } else {
                setGameStatus("finished");
            }
        }, 1000);
    };

    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 7</Badge>
                        <h1 className="text-5xl font-black leading-tight bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                            Firewalls: The Digital Wall
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Your first line of defense. Blocking intruders while letting friends in.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-orange-500/20 bg-background/50 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 flex items-center justify-center">
                            <ShieldAlert className="w-32 h-32 text-orange-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. SPLIT LAYOUT (Concept) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Gatekeeper</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Think of a firewall as a security guard standing at the front door of your computer.
                            It checks every piece of data (packet) trying to enter or leave.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Allowed: Safe websites & apps</li>
                            <li className="flex items-center gap-3"><XCircle className="text-red-500" /> Blocked: Hackers & Viruses</li>
                        </ul>
                    </div>
                    {/* IMAGE PLACEHOLDER */}
                    <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl border-4 border-dashed border-orange-300 flex items-center justify-center relative overflow-hidden group">
                        <div className="text-center p-6">
                            <ShieldCheck className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                            <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER]</p>
                            <p className="text-xs text-muted-foreground mt-2">Recommended: Visual of a brick wall blocking red arrows (viruses) while green arrows pass through.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPARISON GRID (Types) */}
            <section className="container mx-auto px-4 bg-secondary/20 py-16 rounded-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Two Types of Shields</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8 text-center hover:scale-105 transition-transform border-t-4 border-t-blue-500">
                        <Router className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Hardware Firewall</h3>
                        <p className="text-muted-foreground">Built into your Router. Protects all devices in your home (Phones, PCs, TVs).</p>
                    </Card>
                    <Card className="p-8 text-center hover:scale-105 transition-transform border-t-4 border-t-green-500">
                        <Monitor className="w-12 h-12 mx-auto text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Software Firewall</h3>
                        <p className="text-muted-foreground">Installed on your Laptop (like Windows Defender). Protects that specific device.</p>
                    </Card>
                </div>
            </section>

            {/* NEW: INBOUND VS OUTBOUND */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10 items-center bg-orange-600 text-white p-10 rounded-[40px] shadow-xl">
                    <div className="text-left space-y-4">
                        <h3 className="text-3xl font-bold">Inbound vs. Outbound</h3>
                        <p className="text-orange-100 leading-relaxed">
                            A firewall is a two-way street. It doesn't just block people coming IN; it monitors what goes OUT.
                        </p>
                        <div className="mt-6 space-y-4">
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                <span className="font-bold">⬅️ Inbound (The Guard):</span> Prevents hackers from "knocking" on your computer's ports or entering your network.
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                <span className="font-bold">➡️ Outbound (The Whistleblower):</span> Stops malware (like Spyware) on your PC from sending your private data back to the hacker.
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-48 h-48 rounded-full bg-white/10 border-8 border-white/20 flex items-center justify-center animate-pulse">
                            <ShieldAlert className="w-20 h-20 text-white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INTERACTIVE GAME */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold">Mini-Game: Packet Inspector</h2>
                    <Card className="p-8 bg-black text-green-400 font-mono border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                        {gameStatus === "playing" ? (
                            <div className="space-y-8">
                                <div className="text-sm text-gray-500">INCOMING PACKET #{currentPacket + 1}</div>
                                <div className="text-3xl border p-4 rounded bg-black/50 animate-pulse">
                                    {packets[currentPacket].name}
                                </div>
                                <div className="flex justify-center gap-6">
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 w-32" onClick={() => handleDecision("allow")}>
                                        ALLOW
                                    </Button>
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 w-32" onClick={() => handleDecision("block")}>
                                        BLOCK
                                    </Button>
                                </div>
                                {feedback && <div className="text-xl font-bold text-yellow-400">{feedback}</div>}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <h3 className="text-4xl">SCAN COMPLETE</h3>
                                <div className="text-2xl">Score: {score} / 50</div>
                                <Button onClick={() => { setGameStatus("playing"); setCurrentPacket(0); setScore(0); }} variant="outline" className="border-green-500 text-green-400">
                                    Reboot Firewall
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            <TopicNavigation currentModuleId={10} currentTopicId="m10-t7" />
        </div>
    );
}

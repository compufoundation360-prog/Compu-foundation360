import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ShieldAlert,
    Mail,
    MousePointerClick,
    CheckCircle2,
    AlertTriangle,
    FileWarning,
    Smartphone,
    Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TopicNavigation } from "@/components/TopicNavigation";

export function PhishingTopic() {
    const navigate = useNavigate();

    // --- INTERACTIVE 1: Email Inspector ---
    const [revealedFlags, setRevealedFlags] = useState<string[]>([]);

    const flags = [
        { id: "sender", label: "Suspicious Sender", hint: "Look at the email address carefully." },
        { id: "urgency", label: "Urgency", hint: "They are trying to scare you." },
        { id: "link", label: "Fake Link", hint: "Hover over the button (don't click!)." }
    ];

    const handleFlagClick = (id: string) => {
        if (!revealedFlags.includes(id)) {
            setRevealedFlags([...revealedFlags, id]);
        }
    };

    // --- INTERACTIVE 2: URL Sorter ---
    const [urlIndex, setUrlIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState<"correct" | "wrong" | null>(null);

    const urls = [
        { text: "https://amazon.com", isSafe: true },
        { text: "http://pay-pal-secure-login.com", isSafe: false },
        { text: "https://google.com", isSafe: true },
        { text: "https://faceb00k.net", isSafe: false },
        { text: "http://your-bank-update.info", isSafe: false }
    ];

    const handleUrlChoice = (choiceSafe: boolean) => {
        const current = urls[urlIndex];
        const isCorrect = choiceSafe === current.isSafe;

        setShowFeedback(isCorrect ? "correct" : "wrong");
        if (isCorrect) setScore(s => s + 1);

        setTimeout(() => {
            setShowFeedback(null);
            if (urlIndex < urls.length - 1) {
                setUrlIndex(i => i + 1);
            }
        }, 1500);
    };


    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 5</Badge>
                        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent pb-2 leading-tight">
                            Phishing: The Art of Deception
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Hackers don't always "break in". Sometimes, they just ask nicely.
                            Phishing is the act of tricking you into giving up your password or money.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-orange-500/20 bg-background/50 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center">
                            <Mail className="w-32 h-32 text-orange-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE EMAIL INSPECTOR (Interactive) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <MousePointerClick className="w-8 h-8 text-orange-500" />
                                Interactive: The Email Inspector
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                Can you spot the 3 Red Flags in this fake email? Click them!
                            </p>
                        </div>
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            Found: {revealedFlags.length} / 3
                        </Badge>
                    </div>

                    {/* FAKE EMAIL INTERFACE */}
                    <Card className="border-2 border-border/60 shadow-2xl overflow-hidden bg-background relative">
                        {/* Header */}
                        <div className="bg-muted/30 p-4 border-b space-y-2">
                            <div
                                className={`p-2 rounded-md border cursor-pointer transition-all ${revealedFlags.includes("sender") ? "bg-red-500/20 border-red-500" : "hover:bg-accent border-transparent"}`}
                                onClick={() => handleFlagClick("sender")}
                            >
                                <p className="text-sm text-muted-foreground">From:</p>
                                <p className="font-mono text-sm">security@nelfix-update-team-billing.net</p>
                                {revealedFlags.includes("sender") && <p className="text-red-500 text-xs font-bold mt-1">🚩 RED FLAG: Official companies use short, clean domains (e.g., netflix.com).</p>}
                            </div>

                            <div className="p-2 border-transparent">
                                <p className="text-sm text-muted-foreground">Subject:</p>
                                <p className="font-bold">URGENT: YOUR ACCOUNT WILL BE SUSPENDED IN 24 HOURS!!</p>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-8 space-y-6">
                            <p>Dear Valued Customer,</p>

                            <div
                                className={`p-4 rounded-md border cursor-pointer transition-all ${revealedFlags.includes("urgency") ? "bg-red-500/20 border-red-500" : "hover:bg-accent border-transparent"}`}
                                onClick={() => handleFlagClick("urgency")}
                            >
                                <p>We noticed a problem with your payment. If you do not update your details immediately,
                                    we will <strong>LOCK YOUR ACCOUNT FOREVER.</strong></p>
                                {revealedFlags.includes("urgency") && <p className="text-red-500 text-xs font-bold mt-1">🚩 RED FLAG: Scammers create fake urgency to make you panic.</p>}
                            </div>

                            <div className="flex justify-center py-6">
                                <div
                                    className={`group relative inline-block cursor-pointer transition-all ${revealedFlags.includes("link") ? "ring-2 ring-red-500 rounded-lg p-1" : ""}`}
                                    onClick={() => handleFlagClick("link")}
                                >
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8">
                                        UPDATE PAYMENT NOW
                                    </Button>
                                    {/* Fake Tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        http://stealyourmoney.com/login
                                    </div>
                                </div>
                            </div>
                            {revealedFlags.includes("link") && <p className="text-red-500 text-xs font-bold text-center">🚩 RED FLAG: The button leads to a suspicious website, not the real one.</p>}

                            <p className="text-sm text-muted-foreground">Thanks,<br />The Nelfix Team</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 3. TYPES OF PHISHING */}
            <section className="container mx-auto px-4 bg-secondary/5 py-16 rounded-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Common Phishing Types</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-l-orange-500">
                        <Mail className="w-10 h-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Email Phishing</h3>
                        <p className="text-muted-foreground">The most common type. Fake emails pretending to be banks, Netflix, or Google.</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-l-blue-500">
                        <Smartphone className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Smishing (SMS)</h3>
                        <p className="text-muted-foreground">Phishing via Text Message. "Your package is delayed, click here."</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-l-green-500">
                        <Phone className="w-10 h-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Vishing (Voice)</h3>
                        <p className="text-muted-foreground">Scammers calling you. "This is Microsoft support, your PC has a virus."</p>
                    </Card>
                </div>
            </section>

            {/* 4. INTERACTIVE: URL SORTER */}
            <section className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Can you spot the fake link?</h2>

                    <Card className="p-8 border-2 border-primary/20 bg-gradient-to-b from-background to-secondary/10">
                        <div className="mb-4 text-sm font-medium text-muted-foreground">Link {urlIndex + 1} of {urls.length}</div>

                        {urlIndex < urls.length ? (
                            <div className="space-y-8 animate-in zoom-in duration-300" key={urlIndex}>
                                <div className="text-2xl md:text-4xl font-mono font-bold break-all p-4 bg-white dark:bg-black rounded-lg border shadow-inner">
                                    {urls[urlIndex].text}
                                </div>

                                <div className="flex gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white w-32"
                                        onClick={() => handleUrlChoice(true)}
                                    >
                                        Safe ✅
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-32"
                                        onClick={() => handleUrlChoice(false)}
                                    >
                                        Unsafe ❌
                                    </Button>
                                </div>

                                {showFeedback && (
                                    <div className={`text-xl font-bold ${showFeedback === "correct" ? "text-green-500" : "text-red-500"}`}>
                                        {showFeedback === "correct" ? "Correct! 🎉" : "Oops! Look Closer! 👀"}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="text-6xl">🏆</div>
                                <h3 className="text-2xl font-bold">You Scored {score} / {urls.length}</h3>
                                <Button onClick={() => { setUrlIndex(0); setScore(0); }}>Play Again</Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            {/* 4. NEW: REAL VS FAKE COMPARISON */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Real vs Fake: Spot the Difference</h2>
                    <p className="text-muted-foreground">Compare a real bank email with a fake one.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Real */}
                        <Card className="p-6 border-l-4 border-l-green-500 bg-green-500/5 text-left space-y-4">
                            <h3 className="font-bold text-green-600 flex items-center gap-2"><CheckCircle2 /> REAL Email</h3>
                            <div className="text-sm space-y-2 font-mono">
                                <p>From: support@bank.com</p>
                                <p>To: John Doe</p>
                                <p>Subject: Your Statement</p>
                            </div>
                            <div className="p-3 bg-background rounded border text-sm">
                                "Hi John, your monthly statement is ready."
                            </div>
                            <ul className="text-xs list-disc list-inside text-muted-foreground">
                                <li>Uses your real name</li>
                                <li>No urgency/threats</li>
                                <li>Link goes to bank.com</li>
                            </ul>
                        </Card>

                        {/* Fake */}
                        <Card className="p-6 border-l-4 border-l-red-500 bg-red-500/5 text-left space-y-4">
                            <h3 className="font-bold text-red-600 flex items-center gap-2"><AlertTriangle /> FAKE Email</h3>
                            <div className="text-sm space-y-2 font-mono">
                                <p>From: bank-security@gmail.com</p>
                                <p>To: Undisclosed Recipients</p>
                                <p>Subject: URGENT: ACCOUNT SUSPENDED</p>
                            </div>
                            <div className="p-3 bg-background rounded border text-sm">
                                "DEAR CUSTOMER, CLICK HERE OR LOSE MONEY!"
                            </div>
                            <ul className="text-xs list-disc list-inside text-muted-foreground">
                                <li>Generic Greeting</li>
                                <li>Panic/Urgency</li>
                                <li>Link goes to weird-site.com</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 5. NAVIGATION */}
            <TopicNavigation currentModuleId={10} currentTopicId="m10-t5" />

        </div>
    );

}

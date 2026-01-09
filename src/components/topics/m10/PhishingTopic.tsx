import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, ShieldCheck, Globe, Zap, XCircle, AlertCircle, Mail, MousePointer2 } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { cn, getImageUrl } from "@/lib/utils";

export function PhishingTopic() {
    // --- INTERACTIVE 1: Email Inspector ---
    const [revealedFlags, setRevealedFlags] = useState<string[]>([]);

    const flags = [
        { id: "sender", label: "Suspicious Sender", hint: "Look at the email address carefully: support@security-google.net (not google.com)." },
        { id: "urgency", label: "Urgency", hint: "They use 'IMMEDIATE ACTION' to stop you from thinking." },
        { id: "link", label: "Fake Link", hint: "Hovering reveals it goes to a .ru or .xyz domain." }
    ];

    const toggleFlag = (id: string) => {
        setRevealedFlags(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    // --- INTERACTIVE 2: URL Sorter ---
    const [urlFeedback, setUrlFeedback] = useState<{ id: number, status: "correct" | "wrong" } | null>(null);
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

    const urls = [
        { id: 1, url: "https://www.amazon.com/orders", type: "safe" },
        { id: 2, url: "http://secure-login-wellsfargo.com", type: "threat" },
        { id: 3, url: "https://accounts.google.com/verify", type: "safe" },
        { id: 4, url: "http://paypal-support-urgent.net", type: "threat" }
    ];

    const handleUrlCheck = (choice: "safe" | "threat") => {
        const isCorrect = choice === urls[currentUrlIndex].type;
        setUrlFeedback({ id: urls[currentUrlIndex].id, status: isCorrect ? "correct" : "wrong" });

        setTimeout(() => {
            setUrlFeedback(null);
            if (isCorrect) setCurrentUrlIndex(prev => (prev + 1) % urls.length);
        }, 1500);
    };

    return (
        <div className="space-y-24 pb-16 fade-in animate-in slide-in-from-bottom-4 duration-1000">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-400 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            Module 10: Topic 5
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
                            The <span className="text-blue-500">Phishing</span> Hook
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Phishing is the art of digital deception. Hackers don't break into your account; they convince you to hand over the keys yourself.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-blue-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/phishing-hero.jpg")}
                                alt="Phishing Deception"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <Search className="w-32 h-32 mb-6 text-blue-500 animate-pulse" />
                                <p className="font-bold text-4xl font-mono tracking-tighter text-blue-400">INSPECT ALL LINKS</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Suspicious patterns detected...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE HUMAN BUGS (Visual Included) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
                    {/* Image Column */}
                    <div className="lg:col-span-2">
                        <Card className="p-0 overflow-hidden rounded-[50px] border border-border/70 shadow-3xl group relative">
                            <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/phishing-psychology.jpg")}
                                    alt="Phishing Psychology"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full flex flex-col items-center justify-center p-12 text-center bg-slate-950">
                                    <AlertCircle className="w-24 h-24 text-blue-500/20 mb-6" />
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500/40">Deception Visualization</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent flex items-end p-8">
                                    <div className="space-y-2">
                                        <p className="text-white font-black italic text-xl">"Exploiting Human Nature."</p>
                                        <p className="text-blue-200/70 text-sm">Fear, Greed, and Curiosity are the triggers.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-3 space-y-10">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-4 py-1 uppercase tracking-widest font-black text-xs">the attack</Badge>
                            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">Psychological Triggers</h2>
                            <p className="text-xl text-muted-foreground">Phishing works because it exploits three fundamental human "bugs".</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Artificial Urgency", desc: "Creating a panic to bypass your logical brain. 'Your account will be deleted in 10 minutes!'", icon: Zap, color: "blue" },
                                { title: "Authority Masking", desc: "Impersonating CEOs, Banks, or IT Support to bypass suspicion.", icon: ShieldCheck, color: "blue" },
                                { title: "Curiosity Hooks", desc: "Using weird subjects or 'missed delivery' notices to make you click without thinking.", icon: Search, color: "blue" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-[32px] bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors group">
                                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-7 h-7 text-blue-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{item.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. INTERACTIVE: EMAIL INSPECTOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-blue-500/10 text-blue-400 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">interactive sim</Badge>
                        <h2 className="text-4xl font-black">Spot the Red Flags</h2>
                        <p className="text-muted-foreground italic">"One of these elements is a lie. Can you identify all three?"</p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[50px] border-none bg-slate-900 shadow-3xl overflow-hidden">
                        <div className="bg-slate-800 p-6 border-b border-white/5 flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase">Subject</p>
                                <p className="text-sm font-bold text-white uppercase italic">Critical Account Breach: Action Required</p>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 space-y-8 bg-white dark:bg-slate-950">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-4">
                                    {flags.map((flag) => (
                                        <Button
                                            key={flag.id}
                                            variant={revealedFlags.includes(flag.id) ? "default" : "outline"}
                                            onClick={() => toggleFlag(flag.id)}
                                            className={cn(
                                                "rounded-full px-6 h-10 uppercase font-black text-[10px] tracking-widest transition-all",
                                                revealedFlags.includes(flag.id) ? "bg-red-600 hover:bg-red-500 text-white" : "border-slate-200 dark:border-white/10"
                                            )}
                                        >
                                            {revealedFlags.includes(flag.id) ? "FLAGGED" : "INSPECT " + flag.label}
                                        </Button>
                                    ))}
                                </div>

                                <div className="p-8 rounded-[40px] bg-slate-50 dark:bg-slate-900/50 border-2 border-dashed border-slate-200 dark:border-white/5 space-y-4">
                                    <p className="text-sm font-bold text-slate-500 italic">From: support@security-google.net</p>
                                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                                        Hello User, <br /><br />
                                        We detected a login attempt from Moscow, Russia. If this wasn't you, your account is at risk.
                                        Please click the button below to verify your identity within <span className="text-red-600 font-black">10 Minutes</span> or your account will be permanently locked.
                                    </p>
                                    <Button disabled className="h-14 px-8 rounded-2xl bg-blue-600 text-white font-black opacity-50">VERIFY ACCOUNT NOW</Button>
                                </div>

                                {revealedFlags.length > 0 && (
                                    <div className="space-y-2 animate-in slide-in-from-top-4 duration-500">
                                        {revealedFlags.map(id => (
                                            <div key={id} className="flex gap-3 items-center p-3 bg-red-500/10 rounded-2xl border border-red-500/20 text-red-600 text-xs font-bold">
                                                <XCircle className="w-4 h-4" />
                                                {flags.find(f => f.id === id)?.hint}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 4. THE URL SORTER (Visual Image Container Included) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <Badge className="bg-blue-500/10 text-blue-400 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">interactive training</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">URL Inspector</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Links can wear masks. Always hover (on desktop) or long-press (on mobile) to see the true destination.
                            </p>
                        </div>

                        <Card className="p-10 rounded-[50px] border-none bg-slate-100 dark:bg-slate-900/50 shadow-2xl relative overflow-hidden group">
                            <div className="space-y-8 relative z-10">
                                <div className="text-center p-6 bg-white dark:bg-slate-950 rounded-3xl border border-border shadow-inner font-mono text-blue-500 text-lg break-all">
                                    {urls[currentUrlIndex].url}
                                </div>

                                <div className="flex gap-4">
                                    <Button
                                        onClick={() => handleUrlCheck('safe')}
                                        className="h-14 flex-1 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black shadow-xl"
                                    >
                                        Looks Safe ✅
                                    </Button>
                                    <Button
                                        onClick={() => handleUrlCheck('threat')}
                                        className="h-14 flex-1 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black shadow-xl"
                                    >
                                        Suspicious ☠️
                                    </Button>
                                </div>

                                {urlFeedback && (
                                    <div className={cn(
                                        "p-4 rounded-2xl text-center font-black animate-in zoom-in duration-300",
                                        urlFeedback.status === 'correct' ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"
                                    )}>
                                        {urlFeedback.status === 'correct' ? "EXCELLENT CATCH!" : "GOTCHA! THAT WAS MALICIOUS."}
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Image Container 2: URL Visualization */}
                    <div className="relative">
                        <Card className="p-0 overflow-hidden rounded-[50px] border border-border/70 shadow-3xl group relative">
                            <div className="aspect-square bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/url-phishing-visual.jpg")}
                                    alt="URL Phishing Visual"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full flex flex-col items-center justify-center p-12 text-center bg-slate-950">
                                    <MousePointer2 className="w-24 h-24 text-blue-500/20 mb-6" />
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500/40">URL Masking Visualization</p>
                                </div>
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                            </div>
                        </Card>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* 5. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t5" />
            </section>

        </div>
    );
}

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, AlertOctagon, XCircle, CheckCircle, MessageSquare, Briefcase, ShieldAlert, Cpu, QrCode, UserSearch, ArrowRight, Info, Landmark, ShieldCheck } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { cn, getImageUrl } from "@/lib/utils";

export function ScamsTopic() {
    // Quiz State
    const [quizAnswer, setQuizAnswer] = useState<"real" | "scam" | null>(null);

    // Scenario Toggle
    const [activeScenario, setActiveScenario] = useState<"support" | "bank">("support");

    // Support Call State
    const [supportStep, setSupportStep] = useState(0);
    const supportScript = [
        { speaker: "scammer", text: "Hello, this is Amazon Security. Someone bought an iPhone for $999 on your account." },
        { speaker: "you", text: "(Panic) What? I didn't buy that!", action: "Handle Anxiety" },
        { speaker: "scammer", text: "We can refund you, but first, download 'AnyDesk' so I can verify your bank account." },
        { speaker: "you", text: "Wait, why do you need to see my bank?", action: "Question Authority" },
        { speaker: "scammer", text: "DO IT NOW OR YOU LOSE THE MONEY! THE HACKERS ARE STEALING IT!", style: "text-red-500 font-bold" },
        { speaker: "system", text: "🚨 RED FLAG DETECTED: URGENCY & REMOTE ACCESS REQUEST", type: "warning" }
    ];

    // Bank Call State
    const [bankStep, setBankStep] = useState(0);
    const bankScript = [
        { speaker: "scammer", text: "Good afternoon. This is the fraud department from Global Bank. We've detected 'high-risk' activity on your debit card." },
        { speaker: "you", text: "Oh no, is my card blocked?", action: "Check Status" },
        { speaker: "scammer", text: "Not yet, but we need to verify your identity. I'm sending a 6-digit code to your phone. Read it back to me to confirm you are the owner." },
        { speaker: "you", text: "Wait, the SMS says 'Do not share this code with anyone, even bank staff'...", action: "Spot the Warning" },
        { speaker: "scammer", text: "That is just a standard automated message. If you don't give me the code, I cannot stop the $2,000 transfer happening right now.", style: "text-red-500 font-bold" },
        { speaker: "system", text: "🚨 CRITICAL RED FLAG: NEVER SHARE AN OTP (ONE-TIME PASSWORD). BANKS NEVER ASK FOR IT.", type: "warning" }
    ];

    return (
        <div className="space-y-24 pb-16 fade-in animate-in slide-in-from-bottom-4 duration-1000">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/50 text-red-600 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Module 10: Topic 11
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
                            The <span className="text-red-600">Deception</span> Game
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Scammers don't hack computers; they hack people. By exploiting fear and urgency, they bypass your brain's logical defenses.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-red-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/scams-hero.jpg")}
                                alt="Digital Deception"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <AlertOctagon className="w-32 h-32 mb-6 text-red-500 animate-pulse" />
                                <p className="font-bold text-4xl font-mono tracking-tighter text-red-400">THREAT DETECTED</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Psychological bypass attempt...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE SCENARIO (Interactive Dialogues) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
                    {/* Simulator Side */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-red-500/30 text-red-600 px-4 py-1 uppercase tracking-widest font-black text-xs">live simulation</Badge>
                            <h2 className="text-4xl font-black italic tracking-tighter">Recognizing Vishing</h2>
                            <p className="text-lg text-muted-foreground">Select a scenario to witness how real-time psychological manipulation works.</p>
                        </div>

                        <div className="flex gap-3 mb-4">
                            <Button
                                variant={activeScenario === 'support' ? "default" : "outline"}
                                onClick={() => { setActiveScenario('support'); setSupportStep(0); }}
                                className={cn("rounded-full px-6 h-10 uppercase tracking-widest font-black text-[10px]", activeScenario === 'support' ? "bg-red-600 hover:bg-red-500" : "border-slate-200 dark:border-slate-800")}
                            >
                                Tech Support Trap
                            </Button>
                            <Button
                                variant={activeScenario === 'bank' ? "default" : "outline"}
                                onClick={() => { setActiveScenario('bank'); setBankStep(0); }}
                                className={cn("rounded-full px-6 h-10 uppercase tracking-widest font-black text-[10px]", activeScenario === 'bank' ? "bg-red-600 hover:bg-red-500" : "border-slate-200 dark:border-slate-800")}
                            >
                                <Landmark className="w-3 h-3 mr-2" />
                                Fake Bank Call
                            </Button>
                        </div>

                        <Card className="p-0 overflow-hidden rounded-[40px] border-none shadow-2xl bg-slate-950 text-white min-h-[500px] flex flex-col">
                            <div className="p-6 bg-slate-900 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase text-slate-500">Incoming Call</p>
                                        <p className="text-sm font-bold font-mono">
                                            {activeScenario === 'support' ? "+1 (800) AMAZON-SEC" : "+1 (415) BANK-SECURITY"}
                                        </p>
                                    </div>
                                </div>
                                <Badge variant="outline" className="border-red-500/50 text-red-500 animate-pulse">Suspicious</Badge>
                            </div>

                            <div className="flex-1 p-8 overflow-y-auto space-y-6">
                                {(activeScenario === 'support' ? supportScript.slice(0, supportStep + 1) : bankScript.slice(0, bankStep + 1)).map((line, i) => (
                                    <div key={i} className={cn(
                                        "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-500",
                                        line.speaker === "you" ? "justify-end" : "justify-start"
                                    )}>
                                        <div className={cn(
                                            "max-w-[85%] p-5 rounded-[28px] text-sm shadow-xl",
                                            line.speaker === "you" ? "bg-blue-600 text-white rounded-br-none" :
                                                line.speaker === "system" ? "bg-red-500/20 border-2 border-red-500/50 text-red-400 w-full text-center font-black uppercase tracking-widest text-xs py-3" :
                                                    "bg-slate-800 text-slate-100 rounded-bl-none border border-white/5"
                                        )}>
                                            <div className="text-[10px] opacity-40 mb-1 font-black uppercase tracking-widest">
                                                {line.speaker === 'scammer' ? (activeScenario === 'support' ? 'Fake Support' : 'Fake Bank Agent') : line.speaker === 'you' ? 'Targeted Victim' : 'Security Engine'}
                                            </div>
                                            <div className={cn(line.style, "leading-relaxed")}>{line.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-slate-900/50 border-t border-white/5 flex justify-center">
                                {activeScenario === 'support' ? (
                                    supportStep < supportScript.length - 1 ? (
                                        <Button
                                            size="lg"
                                            onClick={() => setSupportStep(s => s + 1)}
                                            className="h-14 px-8 rounded-2xl bg-red-600 hover:bg-red-500 text-base font-black shadow-2xl transition-all"
                                        >
                                            {supportScript[supportStep + 1].action || "Continue"}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    ) : (
                                        <Button variant="outline" onClick={() => setSupportStep(0)} className="rounded-2xl border-white/20 text-white font-bold">REPLAY ANALYSIS</Button>
                                    )
                                ) : (
                                    bankStep < bankScript.length - 1 ? (
                                        <Button
                                            size="lg"
                                            onClick={() => setBankStep(s => s + 1)}
                                            className="h-14 px-8 rounded-2xl bg-red-600 hover:bg-red-500 text-base font-black shadow-2xl transition-all"
                                        >
                                            {bankScript[bankStep + 1].action || "Continue"}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    ) : (
                                        <Button variant="outline" onClick={() => setBankStep(0)} className="rounded-2xl border-white/20 text-white font-bold">REPLAY ANALYSIS</Button>
                                    )
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Image Container 1: The Victim Context */}
                    <div className="lg:col-span-2 space-y-6 lg:mt-24">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-slate-200 dark:border-white/5 shadow-2xl group">
                            <div className="relative w-full aspect-[3/4] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/scam-victim-context.jpg")}
                                    alt="Victim of a scam"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-8 bg-slate-100 dark:bg-slate-900">
                                    <Phone className="w-16 h-16 mb-4 text-red-500 opacity-20" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Visual: High-Pressure Environment</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                                    <p className="text-white text-sm font-medium italic leading-relaxed">
                                        "Scammers choose times when you are busy or tired to catch you off-guard."
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 3. THE SCAM RADAR (Visual Pillars) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <Badge className="bg-orange-500/10 text-orange-600 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">the anatomy of a lie</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">The Scam Radar</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Most scams rely on a combination of these three psychological triggers. If you feel all three, hang up immediately.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Artificial Urgency", desc: "They create a 'ticking clock' to prevent you from calling a friend or thinking logically.", icon: AlertOctagon, color: "red" },
                                { title: "Forced Secrecy", desc: "They insist you stay on the phone or don't tell your bank. Isolation is their weapon.", icon: ShieldAlert, color: "orange" },
                                { title: "Unusual Assets", desc: "Legitimate companies never ask for payment in Gift Cards, Bitcoin, or Wire Transfers.", icon: MessageSquare, color: "blue" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-muted/50 transition-colors group cursor-default">
                                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{item.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Container 2: Radar / Tech Visual */}
                    <div className="order-1 lg:order-2">
                        <Card className="p-0 rounded-[50px] bg-slate-100 dark:bg-slate-900 border-none shadow-2xl relative overflow-hidden aspect-square group">
                            <img
                                src={getImageUrl("module-media/scam-radar-visualization.jpg")}
                                alt="Scam Radar Visualization"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <div className="relative mb-8">
                                    <ShieldAlert className="w-32 h-32 text-red-500 animate-pulse" />
                                    <div className="absolute inset-0 border-[16px] border-red-500/10 rounded-full scale-110 animate-ping"></div>
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-[0.2em] text-red-600 mb-4">Fraud Radar Active</h4>
                                <p className="text-xs text-slate-400 italic font-mono">[ IMAGE: Digital overlay showing security scanning ]</p>
                            </div>

                            <div className="absolute top-8 left-8">
                                <Badge className="bg-red-600 text-white border-none px-4 py-1.5 shadow-xl font-black italic tracking-widest text-[10px] uppercase">Danger zone</Badge>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 4. REAL OR SCAM QUIZ */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">final challenge</Badge>
                        <h2 className="text-4xl font-black">Test Your Instincts</h2>
                        <p className="text-xl text-muted-foreground">Is this a life-changing opportunity or a life-destroying trap?</p>
                    </div>

                    <Card className="p-0 rounded-[50px] border border-border/50 text-center relative overflow-hidden group shadow-3xl">
                        <div className="grid md:grid-cols-5 min-h-[450px]">
                            {/* Visual Asset Side */}
                            <div className="md:col-span-2 relative bg-slate-950 overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/job-scam-visual.jpg")}
                                    alt="Job Scam"
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                                    onError={(e) => {
                                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-900');
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden text-white/20 p-8 text-center uppercase font-black tracking-widest text-[10px]">
                                    <Briefcase className="w-16 h-16 mx-auto mb-4" />
                                    Job Ad Visual
                                </div>
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                            </div>

                            {/* Content Side */}
                            <div className="md:col-span-3 p-12 flex flex-col items-center justify-center space-y-8 bg-card">
                                <div className="space-y-4 relative z-10 text-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 font-bold text-sm tracking-wide uppercase italic">
                                        <Briefcase className="w-4 h-4" /> Global Career Opportunity
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-lg mx-auto italic">
                                        "Earn <span className="text-emerald-600">$500/hour</span> working from your sofa! No experience. We just need you to receive payments and forward them."
                                    </h3>
                                </div>

                                {!quizAnswer ? (
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full px-6">
                                        <Button
                                            size="lg"
                                            className="h-16 flex-1 rounded-2xl bg-slate-900 hover:bg-slate-800 text-base font-black border border-white/5 transition-all"
                                            onClick={() => setQuizAnswer('real')}
                                        >
                                            ACTUAL JOB
                                        </Button>
                                        <Button
                                            size="lg"
                                            className="h-16 flex-1 rounded-2xl bg-red-600 hover:bg-red-500 text-base font-black shadow-xl transition-all"
                                            onClick={() => setQuizAnswer('scam')}
                                        >
                                            DEFINITE SCAM
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-6 animate-in zoom-in duration-500 relative z-10">
                                        {quizAnswer === 'scam' ? (
                                            <div className="space-y-2">
                                                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                                                    <CheckCircle className="w-8 h-8 text-white" />
                                                </div>
                                                <h4 className="text-2xl font-black text-emerald-600 italic tracking-tighter">PERFECT SCORE</h4>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                                                    <XCircle className="w-8 h-8 text-white" />
                                                </div>
                                                <h4 className="text-2xl font-black text-red-600 italic tracking-tighter">TRAPPED</h4>
                                            </div>
                                        )}
                                        <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                                            This is a classic <strong>"Money Mule"</strong> scam. Scammers use you to launder stolen money. You become the legal scapegoat when the police follow the trail.
                                        </p>
                                        <Button variant="link" onClick={() => setQuizAnswer(null)} className="text-blue-600 font-black h-auto p-0 hover:underline">RESET CHALLENGE</Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 5. EMERGING THREATS (Visual Grid) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[60px] shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full animate-pulse"></div>
                    <div className="relative z-10 space-y-16">
                        <div className="text-center space-y-4">
                            <Badge className="bg-red-500 text-white font-black uppercase text-[10px] tracking-widest mb-4">the next generation</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight italic">Threat Intelligence: 2025</h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                Scams are evolving using Artificial Intelligence. Being aware is your only antivirus.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { title: "AI Voice Cloning", desc: "Using a 3-second sample of your social media to clone your voice for fake kidnap calls.", icon: Cpu, color: "blue", img: "ai-clone-scam.jpg" },
                                { title: "QR Quishing", desc: "Placing fake QR stickers on parking meters that lead to malicious payment portals.", icon: QrCode, color: "orange", img: "qr-scam-visual.jpg" },
                                { title: "Pig Butchering", desc: "Building romantic trust for months to convince victims to 'invest' in fake crypto platforms.", icon: UserSearch, color: "red", img: "romance-scam-visual.jpg" }
                            ].map((threat, i) => (
                                <Card key={i} className="bg-white/5 border-white/10 p-0 rounded-[40px] text-white hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group/item overflow-hidden relative flex flex-col">
                                    <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                                        <img
                                            src={getImageUrl(`module-media/${threat.img}`)}
                                            alt={threat.title}
                                            className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover/item:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                            }}
                                        />
                                        <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-${threat.color}-500/20 backdrop-blur-md flex items-center justify-center border border-${threat.color}-500/30`}>
                                            <threat.icon className={`w-6 h-6 text-${threat.color}-500`} />
                                        </div>
                                    </div>
                                    <div className="p-10 space-y-4">
                                        <h4 className="text-2xl font-bold tracking-tight">{threat.title}</h4>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            {threat.desc}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t11" />
            </section>

        </div>
    );
}

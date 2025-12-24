import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, AlertOctagon, XCircle, CheckCircle, MessageSquare, Briefcase } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";

export function ScamsTopic() {
    // Quiz State
    const [quizAnswer, setQuizAnswer] = useState<"real" | "scam" | null>(null);

    // Fake Call State
    const [callStep, setCallStep] = useState(0);
    const callScript = [
        { speaker: "scammer", text: "Hello, this is Amazon Security. Someone bought an iPhone for $999 on your account." },
        { speaker: "you", text: "(Panic) What? I didn't buy that!", action: "Panic & Reply" },
        { speaker: "scammer", text: "We can refund you, but first, download 'AnyDesk' so I can verify your bank account." },
        { speaker: "you", text: "Wait, why do you need to see my bank?", action: "Ask Question" },
        { speaker: "scammer", text: "DO IT NOW OR YOU LOSE THE MONEY! THE HACKERS ARE STEALING IT!", style: "text-red-500 font-bold" },
        { speaker: "system", text: "🚨 RED FLAG DETECTED: URGENCY & REMOTE ACCESS REQUEST", type: "warning" }
    ];

    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO (Split) */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 11</Badge>
                        <h1 className="text-5xl font-black leading-tight bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                            Recognizing Scams
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Scammers are experts at psychology. They use fear, greed, and urgency to trick you.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-red-500/20 bg-background/50 -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 flex items-center justify-center">
                            <AlertOctagon className="w-32 h-32 text-red-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. SCENARIO (Chat UI) */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Scenario: The "Fake Support" Call</h2>
                        <p className="text-muted-foreground">Walk through a typical scam call.</p>
                    </div>
                    <Card className="p-6 bg-slate-50 dark:bg-slate-900 border-2 min-h-[400px] flex flex-col justify-between">
                        <div className="space-y-4">
                            {callScript.slice(0, callStep + 1).map((line, i) => (
                                <div key={i} className={`flex ${line.speaker === "you" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] p-4 rounded-xl text-sm ${line.speaker === "you" ? "bg-blue-500 text-white rounded-br-none" :
                                        line.speaker === "system" ? "bg-yellow-500/10 border border-yellow-500 text-yellow-600 w-full text-center font-bold" :
                                            "bg-gray-200 dark:bg-gray-800 rounded-bl-none text-foreground"
                                        }`}>
                                        <div className="text-xs opacity-50 mb-1 uppercase tracking-wider">{line.speaker}</div>
                                        <div className={line.style}>{line.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t mt-6 flex justify-center">
                            {callStep < callScript.length - 1 ? (
                                <Button size="lg" onClick={() => setCallStep(s => s + 1)} className="w-full md:w-auto">
                                    {callScript[callStep + 1].action || "Continue..."}
                                </Button>
                            ) : (
                                <Button size="lg" variant="destructive" onClick={() => setCallStep(0)}>
                                    Reset Simulation
                                </Button>
                            )}
                        </div>
                    </Card>
                </div>
            </section>

            {/* 3. RED FLAGS (Visual) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* IMAGE PLACEHOLDER */}
                    <div className="h-80 bg-gradient-to-br from-yellow-100 to-red-100 dark:from-yellow-900/20 dark:to-red-900/20 rounded-2xl border-4 border-dashed border-red-300 flex items-center justify-center relative group">
                        <div className="text-center p-6">
                            <AlertOctagon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                            <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER: ANATOMY OF A SCAM EMAIL]</p>
                            <p className="text-xs text-muted-foreground mt-2">Recommended: An image of a fake email with red circles around "Dear Customer" (Generic), "Urgent Action", and "Suspicious Link".</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The "Scam Radar"</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="bg-red-100 text-red-600 p-2 rounded"><AlertOctagon className="w-5 h-5" /></div>
                                <div>
                                    <strong className="block text-lg">Urgency</strong>
                                    <span className="text-muted-foreground">They want you to act FAST so you don't think.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-orange-100 text-orange-600 p-2 rounded"><Phone className="w-5 h-5" /></div>
                                <div>
                                    <strong className="block text-lg">Secrecy</strong>
                                    <span className="text-muted-foreground">"Don't tell anyone." They isolate you.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-blue-100 text-blue-600 p-2 rounded"><MessageSquare className="w-5 h-5" /></div>
                                <div>
                                    <strong className="block text-lg">Strange Payment Methods</strong>
                                    <span className="text-muted-foreground">Only scammers ask for Gift Cards or Bitcoin.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. QUIZ (Interaction) */}
            <section className="container mx-auto px-4 bg-muted/30 py-16">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Quiz: Real or Scam?</h2>

                    <Card className="p-8 space-y-6 bg-background border-2 shadow-lg">
                        <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest">
                            <Briefcase /> Job Offer
                        </div>
                        <div className="text-xl font-medium">
                            "Earn $500/hour working from home! No experience needed. Use your own bank account to process payments for us."
                        </div>

                        {!quizAnswer ? (
                            <div className="flex gap-4 justify-center">
                                <Button size="lg" className="bg-green-600 hover:bg-green-700 w-32" onClick={() => setQuizAnswer('real')}> REAL </Button>
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 w-32" onClick={() => setQuizAnswer('scam')}> SCAM </Button>
                            </div>
                        ) : (
                            <div className="space-y-4 animate-in zoom-in">
                                {quizAnswer === 'scam' ? (
                                    <div className="text-green-600 font-bold text-2xl flex items-center justify-center gap-2">
                                        <CheckCircle className="w-8 h-8" /> CORRECT!
                                    </div>
                                ) : (
                                    <div className="text-red-500 font-bold text-2xl flex items-center justify-center gap-2">
                                        <XCircle className="w-8 h-8" /> WRONG!
                                    </div>
                                )}
                                <p className="text-muted-foreground">
                                    This is a "Money Mule" scam. Legitimate jobs don't ask you to use your personal bank account.
                                </p>
                                <Button variant="outline" onClick={() => setQuizAnswer(null)}>Try Another</Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            {/* 5. TECH SUPPORT EXAMPLE */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-2xl font-bold">Common Scam: The "Virus Pop-up"</h2>
                    <div className="h-64 bg-red-50 border-4 border-red-500 rounded-xl relative overflow-hidden flex items-center justify-center">
                        <div className="text-center p-4">
                            <h3 className="text-3xl font-black text-red-600 mb-2">VIRUS DETECTED!!!</h3>
                            <p className="font-bold">Call Microsoft Support: +1-800-FAKE-NUM</p>
                            <p className="text-xs text-muted-foreground mt-4">(This is just a webpage, not a real virus. Close the tab.)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: EMERGING SCAMS */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-red-600 to-black text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-400/10 blur-[130px]"></div>
                    <div className="relative z-10 text-center space-y-8">
                        <Badge className="bg-white text-red-600">WATCH OUT: 2025 EDITION</Badge>
                        <h3 className="text-4xl font-black">Emerging Scams to Fear</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="bg-white/5 border-white/10 p-6 text-white text-left">
                                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">🤖 AI Voice Cloning</h4>
                                <p className="text-sm text-slate-300">Scammers use a 3-second clip of your relative's voice to fake a "kidnapping" or "accident" call. Always have a 'family safe word'.</p>
                            </Card>
                            <Card className="bg-white/5 border-white/10 p-6 text-white text-left">
                                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">🖼️ Quishing (QR Phishing)</h4>
                                <p className="text-sm text-slate-300">Fake QR codes on parking meters or restaurant menus that lead to stolen credit card forms.</p>
                            </Card>
                            <Card className="bg-white/5 border-white/10 p-6 text-white text-left">
                                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">🐖 Pig Butchering</h4>
                                <p className="text-sm text-slate-300">A long-term scam where someone befriends you on WhatsApp or dating apps, builds trust for weeks, then "helps" you invest in fake Crypto.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TopicNavigation currentModuleId={10} currentTopicId="m10-t11" />
        </div>
    );
}

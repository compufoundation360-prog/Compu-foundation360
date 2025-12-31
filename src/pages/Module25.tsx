import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Scale,
    Shield,
    Eye,
    UserCheck,
    Lock,
    Heart,
    ArrowLeft,
    ArrowRight,
    AlertTriangle,
    BookOpen,
    Brain,
    Users,
    CheckCircle2,
    Briefcase,
    CreditCard,
    ScanFace,
    Stethoscope,
    Globe,
    MousePointerClick,
    Search,
    FileWarning,
    Sprout,
    Video,
    Newspaper,
    ShieldAlert,
    TreePine,
    Mic,
    Bot,
    Terminal,
    Zap,
    Sparkles,
    Trophy,
    Cpu,
    Database,
    Rocket,
    Languages,
    Landmark,
    HeartPulse,
    Wheat,
    Building2,
    Library,
    Compass,
    Map,
    GraduationCap,
    History
} from "lucide-react";

/**
 * MODULE 25: AI ETHICS & RESPONSIBLE AI
 * Topic 25.1: Introduction to AI Ethics
 */

// Simple Image Component to handle missing images
const ImageWithFallback = ({ src, alt, className, description }: { src: string, alt: string, className?: string, description?: string }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={`flex flex-col items-center justify-center bg-muted/20 text-muted-foreground border-2 border-dashed border-muted rounded-xl p-6 text-center group-hover:border-primary/50 transition-colors ${className}`}>
                <div className="bg-primary/10 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <div className="text-2xl">🖼️</div>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-70">{alt}</p>
                {description && <p className="text-[10px] mt-1 opacity-50 max-w-[200px]">{description}</p>}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
};

const Topic1Introduction = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-ai-ethics-intro" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO SECTION - Enhanced */}
            <section className="container mx-auto px-4 pt-20 pb-10">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 text-sm uppercase tracking-widest">
                        Module 25: Foundational Ethics
                    </Badge>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
                        Introduction to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">AI Ethics</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                        It's not just about what AI <em>can</em> do, but what it <em>should</em> do.
                    </p>
                </div>
            </section>

            {/* WHAT IS AI ETHICS (Definition) - Expanded */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                The Core Definition
                            </div>
                            <h3 className="text-4xl font-bold mb-6">Defining the Rules of the Road</h3>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                AI itself is like a child—it doesn't inherently understand "good" or "bad." It simply optimizes for a goal. <strong>AI Ethics</strong> is the guidebook we give it to ensure it serves humanity safely.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-8 rounded-r-2xl shadow-sm">
                                <p className="text-2xl italic text-foreground font-medium">
                                    "AI Ethics is a set of moral principles, values, and guidelines that help humans design, build, use, and control Artificial Intelligence in a responsible way."
                                </p>
                            </div>
                        </div>
                    </div>

                    <Card className="p-2 overflow-hidden rounded-[40px] border-none shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                        {/* IMAGE CONTAINER 1: CONCEPTUAL */}
                        <div className="relative w-full aspect-[4/3] bg-background rounded-[32px] flex items-center justify-center overflow-hidden border border-border/50">
                            <img
                                src=""
                                alt="AI Ethics Conceptual Art"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback View */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]">
                                <Scale className="w-32 h-32 text-primary/20 mb-6" />
                                <p className="text-base font-medium text-muted-foreground">Image Container: Place an image representing "Human Values meets Digital Code"</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* FLOWCHART: WHERE ETHICS FITS IN */}
            <section className="container mx-auto px-4">
                <div className="relative py-16">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold">The AI Lifecycle & Ethics</h3>
                        <p className="text-muted-foreground mt-4">Ethics isn't an afterthought—it must be injected at every stage.</p>
                    </div>

                    {/* PC/Desktop View Flowchart */}
                    <div className="hidden md:flex justify-between items-center relative gap-4">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -z-10 rounded-full"></div>

                        {/* Step 1 */}
                        <div className="bg-background border-2 border-primary/20 p-6 rounded-2xl w-1/4 text-center shadow-lg relative h-48 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 absolute -top-6 border-4 border-background text-xl font-bold">1</div>
                            <h4 className="font-bold text-lg mb-2">Data Collection</h4>
                            <p className="text-sm text-muted-foreground">Is the data fair? Does it represent everyone?</p>
                            <Badge variant="secondary" className="mt-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Checking for Bias</Badge>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="text-muted-foreground/30 w-8 h-8" />

                        {/* Step 2 */}
                        <div className="bg-background border-2 border-primary/20 p-6 rounded-2xl w-1/4 text-center shadow-lg relative h-48 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 absolute -top-6 border-4 border-background text-xl font-bold">2</div>
                            <h4 className="font-bold text-lg mb-2">Training</h4>
                            <p className="text-sm text-muted-foreground">Does the model optimize for accuracy without harming safety?</p>
                            <Badge variant="secondary" className="mt-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Safety Constraints</Badge>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="text-muted-foreground/30 w-8 h-8" />

                        {/* Step 3 */}
                        <div className="bg-background border-2 border-primary/20 p-6 rounded-2xl w-1/4 text-center shadow-lg relative h-48 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 absolute -top-6 border-4 border-background text-xl font-bold">3</div>
                            <h4 className="font-bold text-lg mb-2">Deployment</h4>
                            <p className="text-sm text-muted-foreground">How does it impact real users? Who is responsible?</p>
                            <Badge variant="secondary" className="mt-4 bg-green-100 text-green-700 hover:bg-green-200">Accountability</Badge>
                        </div>
                    </div>

                    {/* Mobile View Vertical Flow */}
                    <div className="md:hidden space-y-8">
                        <div className="bg-background border border-primary/20 p-6 rounded-2xl shadow-sm">
                            <div className="text-blue-600 font-bold mb-2">Step 1: Data Collection</div>
                            <p className="text-muted-foreground">Ensure data fairness and representation.</p>
                        </div>
                        <div className="flex justify-center"><ArrowRight className="rotate-90 text-muted-foreground/30" /></div>
                        <div className="bg-background border border-primary/20 p-6 rounded-2xl shadow-sm">
                            <div className="text-purple-600 font-bold mb-2">Step 2: Training</div>
                            <p className="text-muted-foreground">Teach the model rules and safety boundaries.</p>
                        </div>
                        <div className="flex justify-center"><ArrowRight className="rotate-90 text-muted-foreground/30" /></div>
                        <div className="bg-background border border-primary/20 p-6 rounded-2xl shadow-sm">
                            <div className="text-green-600 font-bold mb-2">Step 3: Deployment</div>
                            <p className="text-muted-foreground">Monitor impact and maintain human oversight.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY AI NEEDS RULES (Grid Layout Enhanced) */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="text-center mb-16 relative z-10">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Why Do We Need Rules?</h3>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            AI is powerful, but power without control is dangerous. Here is why we can't just "let it learn."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {/* Box 1 */}
                        <div className="group bg-background p-8 rounded-3xl border hover:border-red-500/30 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <AlertTriangle className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Unfair Decisions</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                AI can incorrectly deny loans or jobs based on patterns it found, impacting real lives.
                            </p>
                        </div>
                        {/* Box 2 */}
                        <div className="group bg-background p-8 rounded-3xl border hover:border-orange-500/30 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Amplified Bias</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                AI learns from human history. If history was biased, the AI becomes a "bias amplifier."
                            </p>
                        </div>
                        {/* Box 3 */}
                        <div className="group bg-background p-8 rounded-3xl border hover:border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Brain className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Lack of Empathy</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                A machine doesn't feel guilt. It won't hesitate to crash a car or hurt feelings if the math says so.
                            </p>
                        </div>
                        {/* Box 4 */}
                        <div className="group bg-background p-8 rounded-3xl border hover:border-blue-500/30 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Massive Scale</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                A human mistake affects one person. An AI mistake can affect millions in seconds.
                            </p>
                        </div>
                        {/* Box 5 */}
                        <div className="group bg-background p-8 rounded-3xl border hover:border-purple-500/30 shadow-sm hover:shadow-xl transition-all duration-300 col-span-1 lg:col-span-2">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Lock className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">The "Black Box" Problem</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Often, even the creators don't know EXACTLY how the AI reached a decision. This power imbalance requires strict oversight.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REAL WORLD FAILURES - CAROUSEL STYLE */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <h3 className="text-4xl font-bold mb-6">When Ethics Fail</h3>
                        <p className="text-lg text-muted-foreground mb-8">
                            These aren't hypothetical scenarios. These are real things that happened when AI was deployed without ethical guardrails.
                        </p>
                        <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/50">
                            <h4 className="font-bold text-red-600 mb-2">The Cost of Error</h4>
                            <p className="text-sm">In every one of these cases, the damage could have been prevented with better ethical testing.</p>
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-6">
                        <div className="flex gap-6 items-start p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-all">
                            <div className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded text-sm shrink-0 mt-1">CASE 1</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Biased Amazon Hiring Tool (2018)</h4>
                                <p className="text-muted-foreground">An AI resume screener taught itself that "women" were less qualified because most past resumes came from men. It was scrapped.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-all">
                            <div className="bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded text-sm shrink-0 mt-1">CASE 2</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Wrongful Arrests via Facial Recognition</h4>
                                <p className="text-muted-foreground">Multiple people have been wrongfully arrested because facial recognition systems struggled to distinguish between Black faces.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-all">
                            <div className="bg-yellow-100 text-yellow-600 font-bold px-3 py-1 rounded text-sm shrink-0 mt-1">CASE 3</div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Social Media Polarization</h4>
                                <p className="text-muted-foreground">Algorithms designed only for "engagement" promoted anger and misinformation because it kept people clicking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE ALIGNMENT: CORE GOALS */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold mb-4">The 6 Pillars of Responsible AI</h3>
                    <p className="text-muted-foreground">Every ethical AI system represents these core values.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { icon: Scale, label: "Fairness", desc: "No bias" },
                        { icon: Shield, label: "Safety", desc: "Do no harm" },
                        { icon: Eye, label: "Transparency", desc: "Be explainable" },
                        { icon: UserCheck, label: "Accountability", desc: "Human responsibility" },
                        { icon: Lock, label: "Privacy", desc: "Protect data" },
                        { icon: Heart, label: "Beneficence", desc: "Help society" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-background border p-6 rounded-2xl text-center hover:bg-primary/5 transition-colors cursor-default">
                            <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                            <h4 className="font-bold text-sm">{item.label}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ANALOGY */}
            <section className="container mx-auto px-4">
                <Card className="p-8 bg-gradient-to-br from-indigo-500 to-purple-700 text-white border-none shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4 relative z-10">
                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">Simple Analogy</Badge>
                            <h3 className="text-2xl font-bold">The Traffic Laws Analogy</h3>
                            <p className="text-indigo-100 leading-relaxed">
                                Think of AI like a powerful machine driven by instructions. Just like traffic laws control vehicles to keep everyone safe, <strong>AI ethics controls intelligent machines</strong>.
                            </p>
                            <ul className="space-y-2 text-sm text-indigo-100/80">
                                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4" /> Clear rules = Machine helps everyone</li>
                                <li className="flex gap-2 items-center"><AlertTriangle className="w-4 h-4" /> No rules = Machine causes damage</li>
                            </ul>
                        </div>

                        {/* IMAGE CONTAINER - Add URL below */}
                        <div className="w-full md:w-1/3 aspect-square bg-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-white/10">
                            <img
                                src=""
                                alt="Traffic Law Analogy"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback View */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <div className="text-6xl opacity-50 mb-2">🚦</div>
                                <p className="text-xs text-indigo-200">Add Image URL here</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* WHY IT MATTERS */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h3 className="text-2xl font-bold">Why This Matters For You</h3>
                    <p className="text-muted-foreground">
                        Even if you are a student or a non-technical learner, you will interact with AI systems daily. Understanding AI Ethics helps you:
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Use AI Responsibly
                        </div>
                        <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Question Unfair Decisions
                        </div>
                        <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Protect Your Data
                        </div>
                        <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Build Trust in Tech
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER KEY TAKEAWAY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-slate-900 text-slate-200 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-primary mb-4">Key Takeaway</h4>
                        <p className="text-2xl md:text-3xl font-light italic">
                            "AI Ethics exists because powerful technology must be guided by strong human values."
                        </p>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full transform scale-50"></div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="ghost" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 opacity-50 cursor-not-allowed">
                        <ArrowLeft className="w-4 h-4" /> No Previous Topic
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p>
                        <p className="text-lg font-bold">Topic 1 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/25/topic/2")}>
                        Next: AI Bias <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.2: AI Bias
 */
const Topic2Bias = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-ai-bias" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Understanding <span className="text-red-500">AI Bias</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        When AI systems treat some people better and others worse without a valid reason.
                    </p>
                </div>
            </section>

            {/* WHAT IS AI BIAS (Definition) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-4">
                                Definition
                            </div>
                            <h3 className="text-3xl font-bold mb-4">What is AI Bias?</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                AI Bias occurs when an Artificial Intelligence system produces <strong>unfair, unequal, or discriminatory outcomes</strong> for certain individuals or groups.
                            </p>
                        </div>

                        <div className="bg-muted p-6 rounded-2xl border-l-4 border-red-500">
                            <p className="text-xl font-medium italic">
                                "If an AI system treats some people better and others worse without a valid or logical reason, it is called AI Bias."
                            </p>
                        </div>

                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-700 dark:text-yellow-400 text-sm flex gap-3">
                            <AlertTriangle className="w-5 h-5 shrink-0" />
                            <p><strong>Crucial Concept:</strong> AI has no emotions. It learns bias from <strong>humans, society, and historical data</strong>.</p>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 shadow-lg bg-muted/50">
                        {/* IMAGE CONTAINER - Add URL below */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                            <img
                                src=""
                                alt="AI Bias Concept"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback View */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <Scale className="w-20 h-20 text-red-400 mb-4 transform -rotate-12" />
                                <p className="text-sm text-muted-foreground">Add Image URL here</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* VISUAL FLOWCHART: SOURCES OF BIAS */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">The Pipeline of Prejudice</h3>
                    <p className="text-muted-foreground">How does a machine learn to be unfair? It happens in stages.</p>
                </div>

                <div className="relative">
                    {/* Desktop Flowchart */}
                    <div className="hidden md:flex justify-between items-stretch gap-4 relative z-10">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 -z-10 rounded-full"></div>

                        {/* Step 1: Data */}
                        <div className="w-1/3 bg-background border-2 border-blue-100 p-8 rounded-[2rem] shadow-lg flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                <BookOpen className="w-10 h-10 text-blue-500" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">1. Bad Data</h4>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                The root cause. If history was unfair, the data will be unfair. Missing groups or stereotypes are fed into the system.
                            </p>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Input Stage</Badge>
                        </div>

                        {/* Arrow */}
                        <div className="self-center">
                            <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                        </div>

                        {/* Step 2: Algorithm */}
                        <div className="w-1/3 bg-background border-2 border-purple-100 p-8 rounded-[2rem] shadow-lg flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                <Brain className="w-10 h-10 text-purple-500" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">2. Flawed Logic</h4>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                The rules we give the AI can be skewed. Optimizing strictly for "efficiency" might accidentally cut out valid people.
                            </p>
                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none">Processing Stage</Badge>
                        </div>

                        {/* Arrow */}
                        <div className="self-center">
                            <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                        </div>

                        {/* Step 3: Human Interaction */}
                        <div className="w-1/3 bg-background border-2 border-orange-100 p-8 rounded-[2rem] shadow-lg flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                <UserCheck className="w-10 h-10 text-orange-500" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">3. Human Blind Spots</h4>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                Developers' own subconscious biases shape the code. We build what we know, often forgetting what we don't know.
                            </p>
                            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-none">Design Stage</Badge>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden space-y-6">
                        <div className="bg-blue-50/50 border border-blue-200 p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm"><BookOpen className="w-6 h-6 text-blue-500" /></div>
                            <div>
                                <h4 className="font-bold text-blue-900">1. Bad Data</h4>
                                <p className="text-xs text-blue-700/80">Garbage in, garbage out.</p>
                            </div>
                        </div>
                        <div className="flex justify-center"><ArrowRight className="rotate-90 text-muted-foreground/30" /></div>

                        <div className="bg-purple-50/50 border border-purple-200 p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm"><Brain className="w-6 h-6 text-purple-500" /></div>
                            <div>
                                <h4 className="font-bold text-purple-900">2. Flawed Logic</h4>
                                <p className="text-xs text-purple-700/80">Poorly designed rules.</p>
                            </div>
                        </div>
                        <div className="flex justify-center"><ArrowRight className="rotate-90 text-muted-foreground/30" /></div>

                        <div className="bg-orange-50/50 border border-orange-200 p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm"><UserCheck className="w-6 h-6 text-orange-500" /></div>
                            <div>
                                <h4 className="font-bold text-orange-900">3. Human Blind Spots</h4>
                                <p className="text-xs text-orange-700/80">Creators' hidden biases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TYPES OF DATA BIAS (Grid Layout) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[3rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="text-center mb-12 relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Common Types of Data Bias</h3>
                        <p className="text-muted-foreground">Knowing the enemy is half the battle. Here are the 3 big ones.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {/* Type 1 */}
                        <div className="bg-background p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-blue-500/20">1</div>
                            <h4 className="font-bold text-xl mb-3">Historical Bias</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Data reflects the world as it <em>was</em>, not as it <em>should be</em>. If past hiring favored men, the AI learns that men are "better."
                            </p>
                            <div className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-2 rounded-lg inline-block self-start">
                                Example: Amazon's Hiring Tool
                            </div>
                        </div>

                        {/* Type 2 */}
                        <div className="bg-background p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-purple-500/20">2</div>
                            <h4 className="font-bold text-xl mb-3">Representation Bias</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Some groups are missing from the training data entirely. If you only train on sunny days, the car crashes in the rain.
                            </p>
                            <div className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-2 rounded-lg inline-block self-start">
                                Example: FaceID failures
                            </div>
                        </div>

                        {/* Type 3 */}
                        <div className="bg-background p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-orange-500/20">3</div>
                            <h4 className="font-bold text-xl mb-3">Measurement Bias</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Measuring the wrong thing. Using number of arrests as a proxy for "crime" is biased because some areas are policed more than others.
                            </p>
                            <div className="bg-orange-50 text-orange-700 text-xs font-bold px-3 py-2 rounded-lg inline-block self-start">
                                Example: Predictive Policing
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REAL WORLD EXAMPLES */}
            <section className="container mx-auto px-4">
                <h3 className="text-3xl font-bold mb-10 text-center">REAL-WORLD IMPACT</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-500" /> Hiring Systems</h4>
                        <p className="text-sm text-muted-foreground mb-3">AI rejects candidates from certain schools or genders.</p>
                        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block font-bold">Consequence: Lost Jobs</div>
                    </Card>
                    <Card className="p-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2"><CreditCard className="w-5 h-5 text-green-500" /> Loans & Credit</h4>
                        <p className="text-sm text-muted-foreground mb-3">AI denies loans to specific neighborhoods.</p>
                        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block font-bold">Consequence: Inequality</div>
                    </Card>
                    <Card className="p-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2"><ScanFace className="w-5 h-5 text-purple-500" /> Facial Recognition</h4>
                        <p className="text-sm text-muted-foreground mb-3">Higher error rates for dark skin tones.</p>
                        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block font-bold">Consequence: False Arrests</div>
                    </Card>
                    <Card className="p-6">
                        <h4 className="font-bold mb-2 flex items-center gap-2"><Stethoscope className="w-5 h-5 text-teal-500" /> Healthcare AI</h4>
                        <p className="text-sm text-muted-foreground mb-3">Misdiagnoses due to lack of diverse medical data.</p>
                        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block font-bold">Consequence: Health Risks</div>
                    </Card>
                    <Card className="p-6 md:col-span-2 lg:col-span-2 bg-slate-900 text-white border-none">
                        <h4 className="font-bold mb-2 flex items-center gap-2"><Globe className="w-5 h-5 text-blue-400" /> Social Media Amplification</h4>
                        <p className="text-sm text-slate-300 mb-3">Algorithms amplify extreme voices while suppressing others, creating echo chambers.</p>
                        <div className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded inline-block font-bold">Consequence: Social Division</div>
                    </Card>
                </div>
            </section>

            {/* ANALOGY */}
            <section className="container mx-auto px-4">
                <Card className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white border-none shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* IMAGE CONTAINER - Add URL below */}
                        <div className="w-full md:w-1/3 aspect-square bg-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-white/10">
                            <img
                                src=""
                                alt="Biased Judge Analogy"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback View */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <div className="text-6xl opacity-50 mb-2">⚖️</div>
                                <p className="text-xs text-slate-300">Add Image URL here</p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 relative z-10">
                            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none">The Judge Analogy</Badge>
                            <h3 className="text-2xl font-bold">The Unfair Judge</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Imagine a judge who listens to only one side, ignores evidence, but still claims to be fair. That judgment would be unjust.
                            </p>
                            <p className="text-lg font-medium text-white">
                                AI bias works the same way—it's a digital judge making decisions based on <span className="text-yellow-400 underline decoration-wavy">partial information</span>.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* HOW TO REDUCE BIAS */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h3 className="text-2xl font-bold">How Can We Reduce AI Bias?</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-bold text-sm border border-green-200 dark:border-green-900 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Use Diverse Data
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-bold text-sm border border-green-200 dark:border-green-900 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Test Across Groups
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-bold text-sm border border-green-200 dark:border-green-900 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Continuous Monitoring
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-bold text-sm border border-green-200 dark:border-green-900 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Keep Humans in Loop
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY TAKEAWAY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-slate-900 text-slate-200 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-red-400 mb-4">Key Takeaway</h4>
                        <p className="text-2xl md:text-3xl font-light italic">
                            "AI Bias is not just a technical issue — it is a social and ethical responsibility."
                        </p>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full transform scale-50"></div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/1")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Intro
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p>
                        <p className="text-lg font-bold">Topic 2 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-red-500/20" onClick={() => navigate("/module/25/topic/3")}>
                        Next: Fairness <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

/**
 * Topic 25.3: Fairness
 */
const Topic3Fairness = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-fairness" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        What is <span className="text-green-500">Fairness</span>?
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        Ensuring AI systems make decisions in a just, unbiased, and non-discriminatory manner.
                    </p>
                </div>
            </section>

            {/* WHAT IS FAIRNESS (Definition) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider">
                            Definition
                        </div>
                        <h3 className="text-3xl font-bold">Fairness in AI</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A fair AI system should not treat people differently based on personal or social characteristics such as <strong>gender, caste, religion, race, age, disability, or location</strong>.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-green-500 p-6 rounded-r-xl">
                            <p className="italic text-foreground/90">
                                "Decisions should be based only on relevant and valid factors related to the task."
                            </p>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 shadow-lg bg-muted/50">
                        {/* IMAGE CONTAINER - Add URL below */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                            <img
                                src=""
                                alt="Fairness Concept"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback View */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <Scale className="w-20 h-20 text-green-500 mb-4" />
                                <p className="text-sm text-muted-foreground">Add Image URL here</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* KEY PRINCIPLES: Equal Treatment vs Fair Models */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold mb-4">Core Principles</h3>
                    <p className="text-muted-foreground">Two ways to think about being "Fair".</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch relative">
                    {/* Floating VS Badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                        <div className="bg-background border-4 border-slate-100 dark:border-slate-800 rounded-full w-16 h-16 flex items-center justify-center font-black text-xl shadow-xl text-muted-foreground">VS</div>
                    </div>

                    {/* Equal Treatment */}
                    <Card className="p-8 border-t-8 border-t-blue-500 hover:shadow-xl transition-all flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 ring-4 ring-blue-50 dark:ring-blue-900/10">
                            <Users className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Equal Treatment</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                            "Treat everyone exactly the same."
                            <br />
                            Individuals in similar situations receive the same outcome, regardless of background.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl text-sm border border-blue-100 dark:border-blue-900 w-full text-left">
                            <span className="font-bold text-blue-700 block mb-1">Example:</span>
                            Evaluating two students strictly on marks, ignoring that one had no access to textbooks.
                        </div>
                    </Card>

                    {/* Fair Models */}
                    <Card className="p-8 border-t-8 border-t-purple-500 hover:shadow-xl transition-all flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 ring-4 ring-purple-50 dark:ring-purple-900/10">
                            <Brain className="w-10 h-10 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Fair Outcome (Equity)</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                            "Account for differences to ensure a fair result."
                            <br />
                            Models designed to reduce bias by acknowledging historical disadvantages.
                        </p>
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl text-sm border border-purple-100 dark:border-purple-900 w-full text-left">
                            <span className="font-bold text-purple-700 block mb-1">Example:</span>
                            A hiring AI that actively ensures diverse candidates are considered, not just those from "top" universities.
                        </div>
                    </Card>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Why Fairness Matters</h3>
                        <p className="text-muted-foreground">Unfair AI causes real-world harm.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="w-full bg-background border rounded-2xl p-6 hover:-translate-y-1 transition-transform shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-lg">Hiring Bias</h4>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                A company's AI rejected qualified women because it learned from biased historical data that favored men.
                            </p>
                        </div>

                        <div className="w-full bg-background border rounded-2xl p-6 hover:-translate-y-1 transition-transform shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                                    <ScanFace className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-lg">Recognition Errors</h4>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Facial recognition worked well for some but failed for others due to lack of diverse faces in training data.
                            </p>
                        </div>

                        <div className="w-full bg-background border rounded-2xl p-6 hover:-translate-y-1 transition-transform shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-lg">Loan Denial</h4>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                AI denied loans to people from specific regions, reinforcing existing financial social inequalities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUMMARY & IMPORTANCE */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-slate-100 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">Summary</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                    <span>Fairness ensures AI does not discriminate against any group.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                    <span>Equal treatment means applying the same rules consistency.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                    <span>Fair models require diverse data and human monitoring.</span>
                                </li>
                            </ul>
                        </div>

                        {/* IMAGE CONTAINER - Add URL below */}
                        <div className="w-full aspect-video bg-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10">
                            <img
                                src=""
                                alt="Fairness Summary Visual"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback View */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <div className="text-5xl opacity-50 mb-2">⚖️</div>
                                <p className="text-xs text-slate-400">Add Image URL here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/2")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: AI Bias
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p>
                        <p className="text-lg font-bold">Topic 3 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-green-500/20" onClick={() => navigate("/module/25/topic/4")}>
                        Next: Privacy & AI <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

/**
 * Topic 25.4: Privacy & AI
 */
const Topic4Privacy = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-privacy" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        AI & <span className="text-blue-500">Data Privacy</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        How AI systems collect, use, and protect your personal secrets.
                    </p>
                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                                Definition
                            </div>
                            <h3 className="text-3xl font-bold mb-4">What is AI Privacy?</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                AI Privacy refers to the ethical handling of <strong>personal data</strong>. It ensures that systems respect your identity and handle your information lawfully.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-blue-500 p-6 rounded-r-xl">
                            <p className="italic text-foreground/90">
                                "Without proper privacy, AI systems can lead to identity theft, surveillance, and trust issues."
                            </p>
                        </div>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 shadow-lg bg-muted/50">
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                            <img src="" alt="Privacy Concept" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <Lock className="w-20 h-20 text-blue-500 mb-4" />
                                <p className="text-sm text-muted-foreground">Add Image URL here</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* DATA COLLECTION VISUAL */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Data: The Fuel of AI</h3>
                    <p className="text-muted-foreground">AI needs data to learn, but there's a line between "Need to Know" and "Spying".</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Necessary Data */}
                    <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-3xl border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full"><CheckCircle2 className="w-6 h-6 text-green-600" /></div>
                            <h4 className="text-xl font-bold text-green-800 dark:text-green-300">Necessary Data (Good)</h4>
                        </div>
                        <p className="text-sm text-green-700/80 mb-4">Collected for a clear purpose. Essential for the app to work.</p>
                        <ul className="space-y-2 text-sm text-green-700">
                            <li>• Fitness App needing heart rate</li>
                            <li>• Maps App needing GPS location</li>
                        </ul>
                    </div>

                    {/* Excessive Data */}
                    <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-100 dark:bg-red-800 rounded-full"><AlertTriangle className="w-6 h-6 text-red-600" /></div>
                            <h4 className="text-xl font-bold text-red-800 dark:text-red-300">Excessive Data (Bad)</h4>
                        </div>
                        <p className="text-sm text-red-700/80 mb-4">Collected without need. Increases privacy risks.</p>
                        <ul className="space-y-2 text-sm text-red-700">
                            <li>• Flashlight App asking for Contacts</li>
                            <li>• Calculator App asking for Location</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* RISKS GRID */}
            <section className="container mx-auto px-4">
                <h3 className="text-3xl font-bold mb-10 text-center">Major Privacy Risks</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 border-t-4 border-t-orange-500 hover:-translate-y-1 transition-transform">
                        <div className="p-3 bg-orange-100 w-fit rounded-lg mb-4 text-orange-600"><AlertTriangle className="w-6 h-6" /></div>
                        <h4 className="font-bold text-lg mb-2">Data Leakage</h4>
                        <p className="text-sm text-muted-foreground">Weak security exposes your secrets to hackers.</p>
                    </Card>
                    <Card className="p-6 border-t-4 border-t-red-500 hover:-translate-y-1 transition-transform">
                        <div className="p-3 bg-red-100 w-fit rounded-lg mb-4 text-red-600"><Eye className="w-6 h-6" /></div>
                        <h4 className="font-bold text-lg mb-2">Surveillance</h4>
                        <p className="text-sm text-muted-foreground">Continuous tracking of your movements online and offline.</p>
                    </Card>
                    <Card className="p-6 border-t-4 border-t-purple-500 hover:-translate-y-1 transition-transform">
                        <div className="p-3 bg-purple-100 w-fit rounded-lg mb-4 text-purple-600"><UserCheck className="w-6 h-6" /></div>
                        <h4 className="font-bold text-lg mb-2">Unfair Inference</h4>
                        <p className="text-sm text-muted-foreground">AI guessing private things about you (health, beliefs) without being told.</p>
                    </Card>
                </div>
            </section>

            {/* CONSENT FLOWCHART */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-10 rounded-[3rem] relative overflow-hidden">
                    <div className="text-center mb-10 relative z-10">
                        <h3 className="text-3xl font-bold mb-4">The Cycle of Consent</h3>
                        <p className="text-slate-400">How ethical AI gets permission.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                        <div className="bg-white/10 p-6 rounded-2xl text-center w-full md:w-1/4 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl mb-4">❓</div>
                            <h4 className="font-bold">1. Ask</h4>
                            <p className="text-xs text-slate-300 mt-2">App requests data access</p>
                        </div>
                        <ArrowRight className="hidden md:block w-8 h-8 text-slate-600" />
                        <div className="bg-white/10 p-6 rounded-2xl text-center w-full md:w-1/4 backdrop-blur-sm border border-white/10">
                            <div className="text-4xl mb-4">ℹ️</div>
                            <h4 className="font-bold">2. Explain</h4>
                            <p className="text-xs text-slate-300 mt-2">Clear reason given</p>
                        </div>
                        <ArrowRight className="hidden md:block w-8 h-8 text-slate-600" />
                        <div className="bg-white/10 p-6 rounded-2xl text-center w-full md:w-1/4 backdrop-blur-sm border border-white/10 bg-green-500/20 border-green-500/30">
                            <div className="text-4xl mb-4">✅</div>
                            <h4 className="font-bold">3. Agree</h4>
                            <p className="text-xs text-green-200 mt-2">User consents freely</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY TAKEAWAY */}
            <section className="container mx-auto px-4 pb-10">
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 text-center max-w-3xl mx-auto">
                    <h4 className="text-lg font-bold uppercase tracking-widest text-blue-600 mb-2">Remember This</h4>
                    <p className="text-xl italic text-foreground/80">"Ethical AI development ensures that privacy is built into the system from the beginning, not added as an afterthought."</p>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/3")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Fairness
                    </Button>
                    <div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p><p className="text-lg font-bold">Topic 4 of 10</p></div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-blue-500/20" onClick={() => navigate("/module/25/topic/5")}>
                        Next: Transparency <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.5: Transparency & XAI
 */
const Topic5Transparency = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-transparency" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Transparency & <span className="text-cyan-500">Explainable AI</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        We shouldn't trust magic. We need to know <em>how</em> the AI made its decision.
                    </p>
                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
                                Definition
                            </div>
                            <h3 className="text-3xl font-bold mb-4">What is AI Transparency?</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Transparency means an AI system clearly communicates its decision-making process. It answers the question: <strong>"Why did the AI do that?"</strong>
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                            <p className="italic text-foreground/90">
                                "If an AI rejects a loan, the applicant deserves to know exactly why."
                            </p>
                        </div>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 shadow-lg bg-muted/50">
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                            <img src="" alt="Transparency Concept" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <Eye className="w-20 h-20 text-cyan-500 mb-4" />
                                <p className="text-sm text-muted-foreground">Add Image URL here</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* BLACK BOX VS EXPLAINABLE AI */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">The Black Box Problem</h3>
                    <p className="text-muted-foreground">Why keeping AI secrets is dangerous.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Black Box */}
                    <div className="bg-slate-900 text-slate-300 p-10 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                        <div className="bg-slate-800 p-4 rounded-full mb-6 relative z-10"><Lock className="w-10 h-10 text-slate-500" /></div>
                        <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Black-Box Model</h4>
                        <p className="mb-6 relative z-10">
                            Input goes in &rarr; ✨Magic Happens✨ &rarr; Output comes out.
                            <br /><br />
                            We see the result, but <strong>we don't see the reasoning</strong>. This is fast but risky.
                        </p>
                        <Badge variant="destructive" className="z-10">High Risk</Badge>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 font-mono text-[10px] p-2 break-all pointer-events-none">
                            0101010101010101010010100101010101010101010101010101010010101
                            010101010101010101010101010101010101010101010101010101010101
                        </div>
                    </div>

                    {/* Explainable AI (Glass Box) */}
                    <div className="bg-cyan-50 dark:bg-cyan-900/10 text-cyan-900 dark:text-cyan-100 p-10 rounded-3xl border border-cyan-200 dark:border-cyan-800 shadow-xl flex flex-col items-center text-center">
                        <div className="bg-cyan-100 dark:bg-cyan-800 p-4 rounded-full mb-6"><BookOpen className="w-10 h-10 text-cyan-600" /></div>
                        <h4 className="text-2xl font-bold mb-4">Explainable AI (XAI)</h4>
                        <p className="mb-6">
                            Input goes in &rarr; <strong>Rules are applied</strong> &rarr; Output comes out.
                            <br /><br />
                            We see <strong>exactly why</strong> the decision was made. This builds trust.
                        </p>
                        <Badge className="bg-cyan-500 hover:bg-cyan-600">Trustworthy</Badge>
                    </div>
                </div>
            </section>

            {/* WHY IT MATTERS GRID */}
            <section className="container mx-auto px-4">
                <h3 className="text-3xl font-bold mb-10 text-center">Why Explanations Matter</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="p-6 border-NONE bg-muted/50 hover:bg-muted transition-colors text-center">
                        <div className="mx-auto p-3 bg-background rounded-full w-fit mb-4 shadow-sm"><Shield className="w-6 h-6 text-green-500" /></div>
                        <h4 className="font-bold mb-1">Trust</h4>
                        <p className="text-xs text-muted-foreground">Users trust what they understand.</p>
                    </Card>
                    <Card className="p-6 border-NONE bg-muted/50 hover:bg-muted transition-colors text-center">
                        <div className="mx-auto p-3 bg-background rounded-full w-fit mb-4 shadow-sm"><Scale className="w-6 h-6 text-blue-500" /></div>
                        <h4 className="font-bold mb-1">Fairness</h4>
                        <p className="text-xs text-muted-foreground">Easier to spot hidden bias.</p>
                    </Card>
                    <Card className="p-6 border-NONE bg-muted/50 hover:bg-muted transition-colors text-center">
                        <div className="mx-auto p-3 bg-background rounded-full w-fit mb-4 shadow-sm"><CheckCircle2 className="w-6 h-6 text-purple-500" /></div>
                        <h4 className="font-bold mb-1">Safety</h4>
                        <p className="text-xs text-muted-foreground">Catch errors before damage.</p>
                    </Card>
                    <Card className="p-6 border-NONE bg-muted/50 hover:bg-muted transition-colors text-center">
                        <div className="mx-auto p-3 bg-background rounded-full w-fit mb-4 shadow-sm"><Briefcase className="w-6 h-6 text-orange-500" /></div>
                        <h4 className="font-bold mb-1">Compliance</h4>
                        <p className="text-xs text-muted-foreground">Required by law (GDPR).</p>
                    </Card>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/4")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Privacy
                    </Button>
                    <div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p><p className="text-lg font-bold">Topic 5 of 10</p></div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-cyan-500/20" onClick={() => navigate("/module/25/topic/6")}>
                        Next: Accountability <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.6: Accountability
 */
const Topic6Accountability = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-accountability" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        <span className="text-orange-500">Accountability</span> in AI
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        Who is responsible when AI makes a mistake? Propreitors, not the code.
                    </p>
                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="container mx-auto px-4">
                <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-[3rem] p-8 md:p-12 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                        Core Principle
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">The "Human in the Loop" Rule</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        AI systems cannot be punished, sued, or jailed. Therefore, <strong className="text-foreground">humans must always take ultimate responsibility</strong> for AI outcomes.
                    </p>
                </div>
            </section>

            {/* HUMAN IN THE LOOP VISUAL */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Human vs Machine Roles</h3>
                    <p className="text-muted-foreground">How they should work together.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    {/* AI Role */}
                    <div className="w-full md:w-1/3 bg-slate-100 dark:bg-slate-800 p-8 rounded-3xl border text-center">
                        <div className="text-6xl mb-4">🤖</div>
                        <h4 className="font-bold text-xl mb-2">AI Assistant</h4>
                        <p className="text-sm text-muted-foreground">Processes data, recognizes patterns, suggests options.</p>
                        <Badge variant="secondary" className="mt-4">Suggests</Badge>
                    </div>

                    <div className="text-4xl text-muted-foreground transform rotate-90 md:rotate-0">➡️</div>

                    {/* Human Role */}
                    <div className="w-full md:w-1/3 bg-orange-50 dark:bg-orange-900/10 p-8 rounded-3xl border border-orange-200 dark:border-orange-800 text-center ring-4 ring-orange-100 dark:ring-orange-900/20">
                        <div className="text-6xl mb-4">🧑‍⚕️</div>
                        <h4 className="font-bold text-xl mb-2 text-orange-900 dark:text-orange-100">Human Expert</h4>
                        <p className="text-sm text-orange-800/80 dark:text-orange-200/80">Reviews suggestions, considers context, makes final call.</p>
                        <Badge className="mt-4 bg-orange-500 hover:bg-orange-600">Decides</Badge>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CHAIN OF RESPONSIBILITY */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10"><h3 className="text-3xl font-bold">Who is Responsible?</h3></div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-background border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
                        <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 w-fit p-3 rounded-full"><Users className="w-6 h-6 text-blue-600" /></div>
                        <h4 className="font-bold text-lg mb-2">Developers</h4>
                        <p className="text-sm text-muted-foreground">Must build safe code, test for bias, and ensure the system doesn't fail unexpectedly.</p>
                    </Card>
                    <Card className="p-6 bg-background border-t-4 border-t-orange-500 shadow-md hover:shadow-lg transition-shadow">
                        <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 w-fit p-3 rounded-full"><Briefcase className="w-6 h-6 text-orange-600" /></div>
                        <h4 className="font-bold text-lg mb-2">Organizations</h4>
                        <p className="text-sm text-muted-foreground">The bank/hospital using the AI is <strong>ultimately liable</strong>. They cannot blame the software vendor.</p>
                    </Card>
                    <Card className="p-6 bg-background border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
                        <div className="mb-4 bg-green-100 dark:bg-green-900/30 w-fit p-3 rounded-full"><UserCheck className="w-6 h-6 text-green-600" /></div>
                        <h4 className="font-bold text-lg mb-2">Users</h4>
                        <p className="text-sm text-muted-foreground">Must use the tool ethically and verify the results before acting on them.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: CASE STUDY */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/30 rounded-3xl p-8 border border-border relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Scale className="w-40 h-40" /></div>
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                            Case Study
                        </div>
                        <h4 className="font-bold text-2xl mb-4">The AI Loan Denier</h4>
                        <p className="text-lg text-muted-foreground mb-6">
                            Imagine an AI system rejects a loan for a qualified applicant because of a glitch in how it calculates income.
                        </p>
                        <div className="bg-background p-6 rounded-xl border shadow-sm flex gap-4">
                            <AlertTriangle className="text-orange-500 w-8 h-8 shrink-0" />
                            <div>
                                <h5 className="font-bold mb-1">The Accountability Solution</h5>
                                <p className="text-sm text-muted-foreground">
                                    The bank cannot say "The computer said no." They must provide a <strong>Human Appeal Process</strong> where a real person reviews the data and corrects the error.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: ERROR HANDLING CYCLE */}
            <section className="container mx-auto px-4">
                <h3 className="text-3xl font-bold mb-10 text-center">The Accountability Cycle</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border shadow-sm">
                        <div className="text-4xl mb-2">🤖</div>
                        <h5 className="font-bold">1. AI Actions</h5>
                        <p className="text-xs text-muted-foreground">System suggests a decision.</p>
                        <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 bg-background rounded-full" />
                    </div>
                    <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border shadow-sm">
                        <div className="text-4xl mb-2">⚠️</div>
                        <h5 className="font-bold">2. Error Flagged</h5>
                        <p className="text-xs text-muted-foreground">User or monitoring tool spots a mistake.</p>
                        <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 bg-background rounded-full" />
                    </div>
                    <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border shadow-sm">
                        <div className="text-4xl mb-2">🧑‍⚖️</div>
                        <h5 className="font-bold">3. Human Review</h5>
                        <p className="text-xs text-muted-foreground">Expert investigates the cause.</p>
                        <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 bg-background rounded-full" />
                    </div>
                    <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border shadow-sm">
                        <div className="text-4xl mb-2">✅</div>
                        <h5 className="font-bold">4. Correction</h5>
                        <p className="text-xs text-muted-foreground">Fix is applied & system updated.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: WHY IT MATTERS (The original checklist, enhanced) */}
            <section className="container mx-auto px-4">
                <h3 className="text-3xl font-bold mb-10 text-center">Why Accountability Matters</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center gap-4 p-6 bg-background border rounded-2xl shadow-sm hover:border-primary/50 transition-colors text-center">
                        <div className="bg-primary/10 p-4 rounded-full"><Shield className="w-8 h-8 text-primary" /></div>
                        <div>
                            <h4 className="font-bold text-lg">Builds Trust</h4>
                            <p className="text-sm text-muted-foreground">People validly trust systems when they know who to blame if things break.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-background border rounded-2xl shadow-sm hover:border-primary/50 transition-colors text-center">
                        <div className="bg-primary/10 p-4 rounded-full"><AlertTriangle className="w-8 h-8 text-primary" /></div>
                        <div>
                            <h4 className="font-bold text-lg">Prevents Harm</h4>
                            <p className="text-sm text-muted-foreground">Knowing they are responsible makes developers test more thoroughly.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 bg-background border rounded-2xl shadow-sm hover:border-primary/50 transition-colors text-center">
                        <div className="bg-primary/10 p-4 rounded-full"><Scale className="w-8 h-8 text-primary" /></div>
                        <div>
                            <h4 className="font-bold text-lg">Ensures Justice</h4>
                            <p className="text-sm text-muted-foreground">Victims of AI errors deserve compensation and answers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/5")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Transparency
                    </Button>
                    <div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p><p className="text-lg font-bold">Topic 6 of 10</p></div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-orange-500/20" onClick={() => navigate("/module/25/topic/7")}>
                        Next: Safe Use <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.7: Safe Use of AI Tools
 */
const Topic7SafeUse = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-safe-use" className="space-y-24 animate-in fade-in duration-500">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Safe Use of <span className="text-green-500">AI Tools</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        AI is a powerful assistant, but only if you stay in the driver's seat.
                    </p>
                </div>
                {/* HERO IMAGE PLACEHOLDER */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ImageWithFallback
                            src="fake-url-safe-use-hero.jpg"
                            alt="Safe AI Usage Concept"
                            className="relative w-full rounded-2xl shadow-2xl bg-slate-900 aspect-video object-cover"
                            description="Illustration of a human guiding an AI robot safely."
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: THINK BEFORE YOU CLICK FLOW */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10"><h3 className="text-3xl font-bold">The "Think Before You Click" Flow</h3></div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                    <div className="p-4 bg-background border rounded-xl w-48 shadow-sm">
                        <div className="text-3xl mb-2">📩</div>
                        <div className="font-bold">1. Receive Link</div>
                    </div>
                    <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                    <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 rounded-xl w-48 shadow-sm">
                        <div className="text-3xl mb-2">✋</div>
                        <div className="font-bold">2. PAUSE</div>
                        <p className="text-xs">Don't rush!</p>
                    </div>
                    <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 border-blue-200 rounded-xl w-48 shadow-sm">
                        <div className="text-3xl mb-2">🔍</div>
                        <div className="font-bold">3. Check URL</div>
                        <p className="text-xs">Is it official?</p>
                    </div>
                    <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 border-green-200 rounded-xl w-48 shadow-sm">
                        <div className="text-3xl mb-2">👆</div>
                        <div className="font-bold">4. Decide</div>
                    </div>
                </div>
            </section>

            {/* SAFETY LISTS WITH IMAGES */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* RED LIST: DO NOT SHARE */}
                    <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Lock className="w-32 h-32" /></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-red-500 text-white p-3 rounded-xl"><AlertTriangle className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">NEVER Share</h3>
                        </div>
                        <div className="mb-6 rounded-xl overflow-hidden relative group border border-red-200">
                            <ImageWithFallback src="fake-hacker.jpg" alt="Data Privacy Risk" className="w-full h-48 object-cover bg-red-100" description="Hacker stealing sensitive data." />
                        </div>
                        <ul className="space-y-3">
                            {['Passwords & PINs', 'Bank Account Details', 'OTP / Aadhaar / PAN', 'Home Address', 'Medical Records'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-red-800 dark:text-red-200 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-red-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GREEN LIST: SAFE USAGE */}
                    <div className="bg-green-50 dark:bg-green-900/10 border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle2 className="w-32 h-32" /></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-green-600 text-white p-3 rounded-xl"><CheckCircle2 className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">Best Practices</h3>
                        </div>
                        <div className="mb-6 rounded-xl overflow-hidden relative group border border-green-200">
                            <ImageWithFallback src="fake-verify.jpg" alt="Fact Checking" className="w-full h-48 object-cover bg-green-100" description="User verifying AI output with a book." />
                        </div>
                        <ul className="space-y-3">
                            {['Verify all AI answers', 'Use for brainstorming', 'Check for bias', 'Cite AI assistance', 'Report harmful output'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-green-800 dark:text-green-200 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION: SCENARIO CARD */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">SCAM ALERT</div>
                            <h3 className="text-3xl font-bold mb-4">The "Urgent" CEO Email</h3>
                            <p className="text-slate-300 mb-6">
                                "Hey, I'm in a meeting. Transfer $5,000 to this vendor ASAP. - Sent from my iPhone"
                            </p>
                            <p className="text-sm border-l-2 border-red-500 pl-4 italic text-slate-400">
                                This is a classic <strong>CEO Fraud</strong>. AI can now write these emails perfectly, copying the CEO's style.
                            </p>
                        </div>
                        <div className="relative group rounded-xl overflow-hidden border border-slate-700">
                            <ImageWithFallback src="fake-ceo-email.jpg" alt="Phishing Email Simulation" className="w-full h-full object-cover bg-slate-800" description="Example of a fake urgent email." />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: AI HALLUCINATIONS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ImageWithFallback src="fake-hallucination.jpg" alt="AI Hallucination" className="relative w-full rounded-2xl shadow-xl bg-slate-100 aspect-square object-cover" description="AI confidently stating a false fact." />
                    </div>
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                            <Brain className="w-3 h-3" /> Critical Thinking
                        </div>
                        <h3 className="text-3xl font-bold">Beware of "Hallucinations"</h3>
                        <p className="text-lg text-muted-foreground">
                            AI doesn't "know" facts. It predicts the next word. Sometimes, it confidently invents facts, names, or events that never happened.
                        </p>
                        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 p-4 rounded-xl flex gap-4">
                            <Search className="w-6 h-6 text-yellow-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-yellow-800 dark:text-yellow-200">The 3-Source Rule</h4>
                                <p className="text-sm text-yellow-700 dark:text-yellow-300">Always verify important AI claims with 3 credible sources (Google, Books, Experts).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/6")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Accountability
                    </Button>
                    <div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p><p className="text-lg font-bold">Topic 7 of 10</p></div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-green-500/20" onClick={() => navigate("/module/25/topic/8")}>
                        Next: Ethical vs Harmful <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.8: Ethical vs Harmful Use Cases
 */
const Topic8EthicalUse = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-ethical-use" className="space-y-32 animate-in fade-in duration-500 pb-20">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Ethical vs <span className="text-red-500">Harmful Use</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        AI is a dual-use technology. The same algorithm can save lives or spread lies.
                    </p>
                </div>
                {/* HERO PLACEHOLDER */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ImageWithFallback
                            src="fake-topic8-hero.jpg"
                            alt="Dual Nature of AI"
                            className="relative w-full rounded-2xl shadow-2xl bg-slate-900 aspect-video object-cover"
                            description="Split screen showing AI in a hospital vs AI deepfake."
                        />
                    </div>
                </div>
            </section>

            {/* COMPARISON GRID */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* ETHICAL SIDE */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full"><Heart className="w-6 h-6 text-green-600" /></div>
                            <h3 className="text-2xl font-bold">Beneficial Applications</h3>
                        </div>
                        <div className="grid gap-4">
                            <Card className="p-4 flex items-start gap-4 hover:border-green-500/50 transition-colors">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg"><Stethoscope className="w-5 h-5 text-blue-600" /></div>
                                <div><h4 className="font-bold">Healthcare</h4><p className="text-sm text-muted-foreground">Diagnosing diseases earlier & accurately.</p></div>
                            </Card>
                            <Card className="p-4 flex items-start gap-4 hover:border-green-500/50 transition-colors">
                                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg"><BookOpen className="w-5 h-5 text-yellow-600" /></div>
                                <div><h4 className="font-bold">Education</h4><p className="text-sm text-muted-foreground">Personalized tutors for every student.</p></div>
                            </Card>
                            <Card className="p-4 flex items-start gap-4 hover:border-green-500/50 transition-colors">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg"><Sprout className="w-5 h-5 text-green-600" /></div>
                                <div><h4 className="font-bold">Agriculture</h4><p className="text-sm text-muted-foreground">Monitoring crops to prevent famine.</p></div>
                            </Card>
                        </div>
                    </div>

                    {/* HARMFUL SIDE */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full"><AlertTriangle className="w-6 h-6 text-red-600" /></div>
                            <h3 className="text-2xl font-bold">Harmful Misuse</h3>
                        </div>
                        <div className="grid gap-4">
                            <Card className="p-4 flex items-start gap-4 hover:border-red-500/50 transition-colors">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg"><Video className="w-5 h-5 text-purple-600" /></div>
                                <div><h4 className="font-bold">Deepfakes</h4><p className="text-sm text-muted-foreground">Impersonating people without consent.</p></div>
                            </Card>
                            <Card className="p-4 flex items-start gap-4 hover:border-red-500/50 transition-colors">
                                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg"><Newspaper className="w-5 h-5 text-orange-600" /></div>
                                <div><h4 className="font-bold">Misinformation</h4><p className="text-sm text-muted-foreground">Generating fake news at scale.</p></div>
                            </Card>
                            <Card className="p-4 flex items-start gap-4 hover:border-red-500/50 transition-colors">
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><ScanFace className="w-5 h-5 text-slate-600" /></div>
                                <div><h4 className="font-bold">Mass Surveillance</h4><p className="text-sm text-muted-foreground">Tracking citizens without privacy.</p></div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEEPFAKE SPOTLIGHT */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Warning: Synthetic Media</div>
                            <h3 className="text-3xl font-bold">Deepfakes Explained</h3>
                            <p className="text-slate-300 text-lg">
                                AI can now swap faces and voices in videos with frightening realism. While this has creative uses (movies), it is often used for fraud and harassment.
                            </p>
                            <div className="space-y-2">
                                <p className="font-bold text-purple-300">How to Spot Them:</p>
                                <ul className="list-disc pl-5 text-slate-400 space-y-1">
                                    <li>Unnatural blinking patterns (too fast/slow).</li>
                                    <li>Lip sync issues (audio doesn't match mouth).</li>
                                    <li>Visual glitches around the face edges.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative group rounded-xl overflow-hidden border border-slate-700">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <ImageWithFallback src="fake-deepfake.jpg" alt="Deepfake Grid" className="relative w-full h-full object-cover bg-slate-800" description="Grid showing real vs AI-generated faces." />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: AI FOR THE PLANET (ENVIRONMENTAL) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group overflow-hidden rounded-[2.5rem]">
                        <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <ImageWithFallback
                            src="fake-topic8-env.jpg"
                            alt="AI for Environment"
                            className="relative w-full rounded-[2rem] shadow-2xl aspect-square object-cover border-8 border-white dark:border-slate-900 group-hover:scale-105 transition-transform duration-700"
                            description="Top-down view of AI scanning a rainforest for biodiversity."
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600"><TreePine className="w-8 h-8" /></div>
                                <h3 className="text-3xl font-bold">AI for the Planet</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                                Ethical AI is a powerful ally in fighting climate change. It helps us monitor deforestation in real-time, optimize energy grids, and protect biodiversity.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-5 p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-[1.5rem] border border-emerald-100 dark:border-emerald-800/30 group hover:shadow-lg transition-all">
                                <div className="font-bold text-emerald-600 uppercase text-[10px] pt-1.5 tracking-tighter">TASK_01</div>
                                <div className="space-y-1">
                                    <p className="font-bold text-lg">Wildlife Conservation</p>
                                    <p className="text-sm text-balance text-muted-foreground leading-relaxed">Tracking endangered species via satellite to prevent illegal poaching networks.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-[1.5rem] border border-emerald-100 dark:border-emerald-800/30 group hover:shadow-lg transition-all">
                                <div className="font-bold text-emerald-600 uppercase text-[10px] pt-1.5 tracking-tighter">TASK_02</div>
                                <div className="space-y-1">
                                    <p className="font-bold text-lg">Disaster Response</p>
                                    <p className="text-sm text-balance text-muted-foreground leading-relaxed">Predicting floods and cyclones hours earlier than traditional models, saving thousands of lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: INCLUSIVE FUTURE (ACCESSIBILITY) */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-blue-600/5 to-purple-600/5 p-8 md:p-16 rounded-[3rem] border border-blue-100 dark:border-blue-900/20 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-[1.2] space-y-8 order-2 md:order-1">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600"><Mic className="w-8 h-8" /></div>
                                    <h3 className="text-4xl font-bold">Inclusive Future</h3>
                                </div>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    AI can break down barriers for people with disabilities. From converting sign language to text to describing the visual world for the blind.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="p-6 border-none shadow-xl bg-white dark:bg-slate-900 ring-1 ring-blue-50 dark:ring-blue-900/50 hover:-translate-y-2 transition-transform duration-500">
                                    <h4 className="font-bold text-blue-600 text-lg">Smart Audio</h4>
                                    <p className="text-sm text-muted-foreground pt-2 leading-relaxed">Describing surroundings through smartphone cameras for visual impairment.</p>
                                </Card>
                                <Card className="p-6 border-none shadow-xl bg-white dark:bg-slate-900 ring-1 ring-purple-50 dark:ring-purple-900/50 hover:-translate-y-2 transition-transform duration-500">
                                    <h4 className="font-bold text-purple-600 text-lg">Global Voice</h4>
                                    <p className="text-sm text-muted-foreground pt-2 leading-relaxed">Real-time local language translation for speech-impaired individuals.</p>
                                </Card>
                            </div>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                                <ImageWithFallback
                                    src="fake-topic8-access.jpg"
                                    alt="Inclusive AI"
                                    className="relative w-full rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800 rotate-2 group-hover:rotate-0 transition-transform duration-700"
                                    description="A blind person using a wearable AI camera that whispers labels of objects in their ear."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: THE RED LINE (AUTONOMOUS WEAPONS) */}
            <section className="container mx-auto px-4">
                <Card className="relative overflow-hidden border-2 border-red-500/20 bg-red-50/20 dark:bg-red-950/20 rounded-[3rem]">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none -rotate-12 translate-x-20 -translate-y-10 scale-150">
                        <ShieldAlert className="w-[400px] h-[400px] text-red-500" />
                    </div>
                    <div className="grid md:grid-cols-5 gap-0 items-center">
                        <div className="md:col-span-3 p-10 md:p-20 space-y-8 relative z-10">
                            <div className="space-y-4">
                                <Badge className="bg-red-500 text-white hover:bg-red-600 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] rounded-full">Red Alert: Warfare</Badge>
                                <h3 className="text-3xl md:text-5xl font-bold text-red-900 dark:text-red-400 leading-tight">Autonomous Weapons</h3>
                                <p className="text-lg md:text-xl text-red-800/80 dark:text-red-100/60 leading-relaxed font-light">
                                    AI-powered systems that select and engage targets without human intervention raise a terrifying ethical "Red Line." If an AI makes a lethal mistake, who is responsible?
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <div className="p-2 bg-red-500/10 w-fit rounded-lg"><Terminal className="w-5 h-5 text-red-500" /></div>
                                    <p className="font-bold text-red-700 dark:text-red-300">Loss of Control</p>
                                    <p className="text-sm text-muted-foreground/80 leading-relaxed">Machines cannot understand the moral weight of human life.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-2 bg-red-500/10 w-fit rounded-lg"><Zap className="w-5 h-5 text-red-500" /></div>
                                    <p className="font-bold text-red-700 dark:text-red-300">Fast Escalation</p>
                                    <p className="text-sm text-muted-foreground/80 leading-relaxed">Conflict can trigger at digital speeds beyond human oversight.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative h-full min-h-[400px] md:min-h-full">
                            <ImageWithFallback src="fake-topic8-war.jpg" alt="Autonomous Weapon Danger" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" description="A digital interface overlay on a drone map, highlighting target selection." />
                            <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 7: THE DUAL-USE MATRIX (CONCEPT) */}
            <section className="container mx-auto px-4 pb-12">
                <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
                    <h3 className="text-4xl font-bold tracking-tight uppercase tracking-[0.1em]">The Dual-Use Matrix</h3>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">One technology. Two possible futures. The outcome depends entirely on human intent and governance.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            title: "Facial Recognition",
                            icon: <ScanFace className="w-7 h-7" />,
                            ethical: "Finding missing persons and helping reunite lost families.",
                            harmful: "Unchecked mass surveillance and suppression of dissent.",
                            image: "fake-topic8-face.jpg"
                        },
                        {
                            title: "Generative AI",
                            icon: <Bot className="w-7 h-7" />,
                            ethical: "Democratizing education with high-quality personalized tutors.",
                            harmful: "Flooding the internet with convincing scams and fake news.",
                            image: "fake-topic8-gen.jpg"
                        }
                    ].map((item, idx) => (
                        <Card key={idx} className="overflow-hidden border-none shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 p-0 group rounded-3xl">
                            <div className="h-64 relative overflow-hidden">
                                <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" description={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                                <div className="absolute bottom-6 left-8 flex items-center gap-4 text-white">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl ring-1 ring-white/30">{item.icon}</div>
                                    <h4 className="text-2xl font-bold tracking-wide">{item.title}</h4>
                                </div>
                            </div>
                            <div className="p-8 space-y-5 bg-white dark:bg-slate-900 border-x border-b border-border/50 rounded-b-3xl text-balance">
                                <div className="flex gap-4 p-5 rounded-2xl bg-green-500/5 border border-green-500/10 group-hover:border-green-500/30 transition-colors">
                                    <div className="w-1.5 h-auto bg-green-500 rounded-full shrink-0"></div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Ethical Path</p>
                                        <p className="text-sm font-medium leading-relaxed">{item.ethical}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-2xl bg-red-500/5 border border-red-500/10 group-hover:border-red-500/30 transition-colors">
                                    <div className="w-1.5 h-auto bg-red-500 rounded-full shrink-0"></div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Harmful Path</p>
                                        <p className="text-sm font-medium leading-relaxed">{item.harmful}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/7")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Safe Use
                    </Button>
                    <div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p><p className="text-lg font-bold">Topic 8 of 10</p></div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-purple-500/20" onClick={() => navigate("/module/25/topic/9")}>
                        Next: Governance <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.9: AI Governance in India
 */
const Topic9Governance = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-governance" className="space-y-32 animate-in fade-in duration-500 pb-20">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: AI Ethics</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        AI in <span className="text-orange-500">In</span><span className="text-white dark:text-slate-200">d</span><span className="text-green-500">ia</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        Balancing innovation with safety. The Indian approach to "AI for All".
                    </p>
                </div>
                {/* HERO PLACEHOLDER */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-white/10 to-green-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ImageWithFallback
                            src="fake-topic9-hero.jpg"
                            alt="Digital India AI Network"
                            className="relative w-full rounded-2xl shadow-2xl bg-slate-900 aspect-video object-cover"
                            description="Map of India with digital connections representing AI growth."
                        />
                    </div>
                </div>
            </section>

            {/* INITIATIVES GRID */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">National Strategy</h3>
                    <p className="text-muted-foreground">The government focuses on high-impact sectors.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 w-fit p-3 rounded-xl"><Globe className="w-8 h-8 text-orange-600" /></div>
                        <h3 className="text-xl font-bold mb-2">#AIforAll</h3>
                        <p className="text-sm text-muted-foreground">Inclusive growth. Ensuring AI benefits every citizen, not just the elite.</p>
                    </Card>
                    <Card className="p-8 border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 w-fit p-3 rounded-xl"><Stethoscope className="w-8 h-8 text-blue-600" /></div>
                        <h3 className="text-xl font-bold mb-2">Healthcare First</h3>
                        <p className="text-sm text-muted-foreground">Using AI to screen for diabetic retinopathy and cancer in rural areas.</p>
                    </Card>
                    <Card className="p-8 border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        <div className="mb-4 bg-green-100 dark:bg-green-900/30 w-fit p-3 rounded-xl"><Sprout className="w-8 h-8 text-green-600" /></div>
                        <h3 className="text-xl font-bold mb-2">Smart Agriculture</h3>
                        <p className="text-sm text-muted-foreground">Helping farmers predict monsoons and pest attacks using satellite AI.</p>
                    </Card>
                </div>
            </section>

            {/* GOVERNANCE PILLARS */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-10">
                    <h3 className="text-3xl font-bold text-center mb-10">Pillars of Responsible AI</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4 group">
                            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <Shield className="w-8 h-8 text-red-600" />
                            </div>
                            <h4 className="font-bold text-lg">Safety</h4>
                            <p className="text-sm text-muted-foreground text-balance px-4">Systems must be secure, reliable, and resistant to cyber attacks.</p>
                        </div>
                        <div className="space-y-4 group">
                            <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <Scale className="w-8 h-8 text-purple-600" />
                            </div>
                            <h4 className="font-bold text-lg">Fairness</h4>
                            <p className="text-sm text-muted-foreground text-balance px-4">Equal opportunity and zero discrimination against any section of society.</p>
                        </div>
                        <div className="space-y-4 group">
                            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-lg">Trust</h4>
                            <p className="text-sm text-muted-foreground text-balance px-4">Explainable decisions and robust privacy protection at every layer.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* POLICY FLOW - VISUAL */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">How Policy is Made</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-white to-green-300 -z-10"></div>

                        <div className="bg-background border-2 border-orange-400 p-6 rounded-2xl w-full md:w-64 text-center shadow-sm">
                            <div className="font-bold text-orange-600 mb-2">STEP 1</div>
                            <div className="font-bold text-lg">Principles</div>
                            <p className="text-xs text-muted-foreground">NITI Aayog publishes strategy papers.</p>
                        </div>
                        <ArrowRight className="md:hidden text-muted-foreground rotate-90" />
                        <div className="bg-background border-2 border-blue-400 p-6 rounded-2xl w-full md:w-64 text-center shadow-sm">
                            <div className="font-bold text-blue-600 mb-2">STEP 2</div>
                            <div className="font-bold text-lg">Guidelines</div>
                            <p className="text-xs text-muted-foreground">Companies adopt voluntary safety codes.</p>
                        </div>
                        <ArrowRight className="md:hidden text-muted-foreground rotate-90" />
                        <div className="bg-background border-2 border-green-400 p-6 rounded-2xl w-full md:w-64 text-center shadow-sm">
                            <div className="font-bold text-green-600 mb-2">STEP 3</div>
                            <div className="font-bold text-lg">Regulations</div>
                            <p className="text-xs text-muted-foreground">Digital India Act (Future Laws).</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* FUTURE HORIZONS SECTION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">Future Horizons</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            India is moving towards a legal framework that makes "Responsible AI" mandatory for high-risk systems.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-800/30">
                                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs">01</div>
                                <p className="text-sm font-medium">Digital India Act: Setting the rules for the next decade of the internet.</p>
                            </div>
                            <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800/30">
                                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs">02</div>
                                <p className="text-sm font-medium">AI for Social Good: Using local languages (Bhashini AI) to bridge the digital divide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl ring-8 ring-slate-100 dark:ring-slate-900">
                        <ImageWithFallback src="fake-topic9-future.jpg" alt="Future of AI in India" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700" description="A futuristic skyline of an Indian smart city with AI overlays." />
                    </div>
                </div>
            </section>

            {/* SECTION: AIRAWAT SUPERCOMPUTING */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900 text-white rounded-[3rem] overflow-hidden p-8 md:p-16 relative">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <Cpu className="w-[600px] h-[600px] absolute -right-40 -top-40 rotate-12" />
                    </div>
                    <div className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <Badge className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Digital Infrastructure</Badge>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight">AIRAWAT: India's AI Backbone</h3>
                            <p className="text-xl text-slate-300 leading-relaxed font-light text-balance">
                                Ranked among the top supercomputers in the world, AIRAWAT provides the massive computing power needed for Indian researchers and startups to train large-scale AI models.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-xs text-orange-400 font-bold uppercase tracking-widest">Compute Power</p>
                                <p className="text-2xl font-bold">13,170 TFLOPS</p>
                            </div>
                            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-xs text-green-400 font-bold uppercase tracking-widest">Global Rank</p>
                                <p className="text-2xl font-bold">Top 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <ImageWithFallback
                            src="fake-topic9-airawat.jpg"
                            alt="AIRAWAT Supercomputer"
                            className="w-full rounded-2xl shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-700"
                            description="A high-tech server room with glowing blue and orange LEDs."
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: INDIAAI DATASETS PLATFORM */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 order-2 md:order-1 relative">
                        <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-blue-500/20 transition-all">
                                    <Database className="w-8 h-8 text-blue-500 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Dataset {i === 1 ? 'Health' : i === 2 ? 'Agri' : i === 3 ? 'Bhasha' : 'Traffic'}</h4>
                                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${40 + i * 15}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 order-1 md:order-2 space-y-8">
                        <div className="space-y-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl w-fit text-blue-600"><Database className="w-8 h-8" /></div>
                            <h3 className="text-4xl font-bold">IndiaAI Datasets Platform</h3>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Access to high-quality, curated, and de-identified non-personal datasets for Indian startups and researchers to build India-specific AI solutions.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-medium text-balance"><CheckCircle2 className="w-5 h-5 text-green-500" /> Unified Data Access</li>
                            <li className="flex items-center gap-3 font-medium text-balance"><CheckCircle2 className="w-5 h-5 text-green-500" /> Privacy First Framework</li>
                            <li className="flex items-center gap-3 font-medium text-balance"><CheckCircle2 className="w-5 h-5 text-green-500" /> Multi-sectoral Data</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION: STARTUP SPOTLIGHT */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-4xl font-bold tracking-tight">The Indian AI Renaissance</h3>
                    <p className="text-xl text-muted-foreground font-light text-balance">From LLMs to local hardware, Indian startups are leading the charge.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Sarvam AI", focus: "Full-stack LLMs", icon: <Languages />, color: "from-orange-500 to-red-500" },
                        { name: "Krutrim", focus: "India's own AI model", icon: <Brain />, color: "from-blue-600 to-indigo-600" },
                        { name: "Sarvam 2.0", focus: "Voice AI for India", icon: <Mic />, color: "from-green-500 to-emerald-500" }
                    ].map((startup, idx) => (
                        <Card key={idx} className="group relative overflow-hidden border-none shadow-2xl rounded-[2rem] hover:-translate-y-4 transition-all duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-br ${startup.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                            <div className="p-10 space-y-6 bg-white dark:bg-slate-900 group-hover:bg-transparent transition-colors duration-500">
                                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl w-fit group-hover:bg-white/20 group-hover:text-white transition-colors">
                                    {startup.icon}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-bold group-hover:text-white transition-colors">{startup.name}</h4>
                                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">{startup.focus}</p>
                                </div>
                                <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                                    Building groundbreaking Large Language Models optimized for Indian languages and computing constraints.
                                </p>
                                <div className="pt-4 flex items-center gap-2 group-hover:text-white font-bold text-xs uppercase tracking-widest cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION: BHASHINI LANGUAGE MISSION */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-orange-500/10 via-white to-green-500/10 dark:from-orange-500/5 dark:via-slate-900 dark:to-green-500/5 p-8 md:p-20 rounded-[4rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-balance">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl text-orange-600"><Languages className="w-8 h-8" /></div>
                                    <h3 className="text-4xl font-bold text-balance">Bhashini Mission</h3>
                                </div>
                                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                                    Bridging the language divide. Using AI to translate all Indian services into 22 scheduled languages in real-time.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['नमस्ते', 'నమస్కారం', 'வணக்கம்', 'नमस्कार', 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ'].map(word => (
                                    <Badge key={word} variant="secondary" className="px-4 py-2 rounded-full text-sm font-bold bg-white/50 dark:bg-slate-800 backdrop-blur-md">
                                        {word}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-[3rem] blur-2xl"></div>
                            <ImageWithFallback
                                src="fake-topic9-bhashini.jpg"
                                alt="Bhashini Voice AI"
                                className="relative w-full rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800"
                                description="A woman in a rural setting using a mobile app to translate voice in real-time."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: GLOBAL LEADERSHIP (GPAI) */}
            <section className="container mx-auto px-4 pb-12">
                <Card className="p-10 md:p-16 border-none shadow-2xl bg-slate-900 text-white rounded-[3rem] text-center space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="space-y-4 mx-auto max-w-2xl relative z-10 text-balance">
                        <div className="mx-auto w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <Landmark className="w-10 h-10" />
                        </div>
                        <h3 className="text-4xl font-bold">Global Leadership</h3>
                        <p className="text-xl text-slate-300 font-light leading-relaxed text-balance">
                            As the Chair of the <strong>Global Partnership on Artificial Intelligence (GPAI)</strong>, India is leading the dialogue on making AI inclusive, safe, and trustworthy for the rest of the world.
                        </p>
                        <div className="pt-6">
                            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 text-xs uppercase tracking-[0.3em] rounded-full">India's G20 Legacy</Badge>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION: AI FOR HEALTHCARE (SUSHRUT) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                            <HeartPulse className="w-4 h-4" /> Healthcare Mission
                        </div>
                        <h3 className="text-4xl font-bold">Project Sushrut: AI for Rural Health</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                            India is deploying AI to bring specialized diagnostics to villages where doctors are scarce. From scanning TB in X-rays to detecting cancer through mobile cameras.
                        </p>
                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl border border-red-100 dark:border-red-800/30">
                            <p className="text-sm font-medium text-red-800 dark:text-red-200 text-balance">Impact: Over 100,000 screenings in rural India using AI-powered mobile clinics.</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-red-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <ImageWithFallback
                            src="fake-topic9-health.jpg"
                            alt="AI Health Screening"
                            className="relative w-full rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
                            description="A health worker using a tablet to diagnose a patient in a village."
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: AI FOR AGRICULTURE (KRISHI-AI) */}
            <section className="container mx-auto px-4">
                <div className="bg-emerald-900 text-white rounded-[4rem] p-10 md:p-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-green-950 opacity-100"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="relative z-10 grid md:grid-cols-5 gap-12 items-center">
                        <div className="md:col-span-3 space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-green-500 text-white border-none px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Digital Farming</Badge>
                                <h3 className="text-4xl md:text-5xl font-bold leading-tight">Krishi-AI: Data for the Soul</h3>
                                <p className="text-xl text-emerald-100/80 leading-relaxed font-light text-balance">
                                    Empowering 140 million farmers. India's AI models predict monsoons, soil health, and pest outbreaks with over 90% accuracy, helping solve the problem of unpredictable harvests.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                    <Wheat className="w-6 h-6 text-green-400 mb-2" />
                                    <p className="text-sm font-bold">Pest Detection</p>
                                </div>
                                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-balance">
                                    <Sprout className="w-6 h-6 text-green-400 mb-2" />
                                    <p className="text-sm font-bold">Yield Prediction</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <ImageWithFallback
                                src="fake-topic9-agri.jpg"
                                alt="AI Sourced Farming"
                                className="w-full rounded-[2.5rem] shadow-2xl ring-8 ring-white/10"
                                description="Drone flying over a green lush field in India."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: SMART & SAFE CITIES */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <ImageWithFallback src="fake-city-1.jpg" alt="Traffic AI" className="w-full aspect-[3/4] object-cover rounded-3xl" />
                                <ImageWithFallback src="fake-city-2.jpg" alt="Safe Street" className="w-full aspect-square object-cover rounded-3xl" />
                            </div>
                            <div className="space-y-4">
                                <ImageWithFallback src="fake-city-3.jpg" alt="Smart Waste" className="w-full aspect-square object-cover rounded-3xl" />
                                <ImageWithFallback src="fake-city-4.jpg" alt="Clean Energy" className="w-full aspect-[3/4] object-cover rounded-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-8">
                        <div className="space-y-4">
                            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl w-fit"><Building2 className="w-8 h-8 text-primary" /></div>
                            <h3 className="text-4xl font-bold">Smart Cities: Ethics in Stone</h3>
                            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                                AI manages traffic flow in cities like Pune and Bangalore, reducing pollution. But India also mandates strict "Ethical Oversight" to ensure cameras protect citizens without invading privacy.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">01</div>
                                <p className="text-sm">Anonymous data collection for traffic heatmaps.</p>
                            </div>
                            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">02</div>
                                <p className="text-sm">Real-time emergency vehicle prioritization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: NATIONAL AI REGULATORY SANDBOX */}
            <section className="container mx-auto px-4">
                <Card className="p-8 md:p-16 border-2 border-dashed border-primary/20 bg-primary/5 rounded-[3rem] text-center space-y-8">
                    <div className="mx-auto w-24 h-24 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl flex items-center justify-center">
                        <Shield className="w-12 h-12 text-primary animate-pulse" />
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h3 className="text-3xl md:text-5xl font-bold">The Regulatory Sandbox</h3>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed text-balance">
                            India allows startups to test high-risk AI models in a "Controlled Environment" before public release. This ensures that safety issues are caught early, without stopping innovation.
                        </p>
                    </div>
                    <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest text-primary/60">
                        <span>Phase 1: Validation</span>
                        <span className="text-2xl opacity-30">→</span>
                        <span>Phase 2: Monitoring</span>
                        <span className="text-2xl opacity-30">→</span>
                        <span>Phase 3: Approval</span>
                    </div>
                </Card>
            </section>

            {/* SECTION: INDIC ETHICS (CULTURAL) */}
            <section className="container mx-auto px-4 pb-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <ImageWithFallback
                            src="fake-indic-ethics.jpg"
                            alt="Indian Cultural Ethics"
                            className="w-full rounded-[3rem] shadow-2xl"
                            description="Ancient Indian scriptures shown next to a digital AI head."
                        />
                        <div className="absolute -bottom-6 -right-6 p-8 bg-white dark:bg-slate-900 shadow-xl rounded-3xl border border-border">
                            <Library className="w-8 h-8 text-orange-500 mb-2" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ancient to Modern</p>
                            <p className="font-bold">Bridging 5000 Years</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold">Indic Ethics: Dharma in Code</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                            India's approach to AI draws from the concept of <strong>Dharma</strong> (Righteous Action) and <strong>Sarvodaya</strong> (Welfare for All). It is not just about logic, but about the social duty of the machine to serve humanity fairly.
                        </p>
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="flex items-center gap-4 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 text-balance">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <p className="text-sm font-medium">Equitable Wealth: Preventing AI from concentrating power.</p>
                            </li>
                            <li className="flex items-center gap-4 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 text-balance">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <p className="text-sm font-medium">Inclusivity: Design for the most vulnerable first.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/8")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Ethical vs Harmful
                    </Button>
                    <div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p><p className="text-lg font-bold">Topic 9 of 10</p></div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-orange-500/20" onClick={() => navigate("/module/25/topic/10")}>
                        Next: Activities <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

/**
 * Topic 25.10: Hands-On Ethics Activities
 */
const Topic10Activities = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-activities" className="space-y-32 animate-in fade-in duration-500 pb-20">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Module 25: Closing</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        <span className="text-purple-500">Ethics</span> in Action
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        Knowledge is power, but action is impact. Here is how you can practice Responsible AI today.
                    </p>
                </div>
                {/* HERO PLACEHOLDER */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ImageWithFallback
                            src="fake-topic10-hero.jpg"
                            alt="AI Ethics Discussion"
                            className="relative w-full rounded-2xl shadow-2xl bg-slate-900 aspect-video object-cover"
                            description="Group of diverse people discussing AI impact on a digital board."
                        />
                    </div>
                </div>
            </section>

            {/* ACTIVITIES GRID */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16"><h3 className="text-3xl font-bold">Hands-On Challenges</h3></div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Activity 1 */}
                    <Card className="p-8 border-none shadow-xl bg-gradient-to-br from-purple-500/5 to-indigo-500/5 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-1000"><Brain className="w-32 h-32" /></div>
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl w-fit mb-6"><CheckCircle2 className="w-8 h-8 text-purple-600" /></div>
                        <h4 className="text-2xl font-bold mb-4">Challenge 1: Spot the Bias</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Analyze this: An AI resume screener rejects all candidates who live in a specific ZIP code because historical data shows "low performance" from that area.
                        </p>
                        <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-purple-100 dark:border-purple-900/20 italic text-sm">
                            <strong>Discussion:</strong> Is this fair? What hidden bias is the AI amplifying here?
                        </div>
                    </Card>

                    {/* Activity 2 */}
                    <Card className="p-8 border-none shadow-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-1000"><Search className="w-32 h-32" /></div>
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl w-fit mb-6"><BookOpen className="w-8 h-8 text-blue-600" /></div>
                        <h4 className="text-2xl font-bold mb-4">Challenge 2: Fact Checker</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Ask an AI about a recent news event in your city. Compare its answer with 3 different news sources.
                        </p>
                        <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-blue-100 dark:border-blue-900/20 italic text-sm">
                            <strong>Goal:</strong> Learn to treat AI as a "Co-Pilot," not a "Sole Pilot." Always verify.
                        </div>
                    </Card>
                </div>
            </section>

            {/* KEY TAKEAWAYS CHECKLIST */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-10 md:p-16 border border-border/50">
                    <h3 className="text-3xl font-bold text-center mb-12">The Ethical AI Checklist</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-balance">
                        {[
                            { title: "Human in the Loop", desc: "Never let AI make a final decision without human review." },
                            { title: "Transparency", desc: "Always be open about when you are using AI-generated content." },
                            { title: "Inclusion", desc: "Check if your AI tools work equally well for everyone." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex items-center gap-2 text-primary font-bold"><Sparkles className="w-4 h-4" /> {item.title}</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: THE GLOBAL ETHICS MAP */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
                                <Map className="w-4 h-4" /> Global Landscape
                            </div>
                            <h3 className="text-4xl font-bold">The World's Approach</h3>
                            <p className="text-xl text-slate-300 leading-relaxed text-balance">
                                AI Ethics is a global conversation. Every region is building its own "Guardrails" for the future.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4">
                                    <Badge className="bg-blue-600">EU</Badge>
                                    <div>
                                        <p className="font-bold">The AI Act</p>
                                        <p className="text-sm text-slate-400">Strict rules based on risk levels (High, Medium, Low).</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4 text-balance">
                                    <Badge className="bg-orange-600">IN</Badge>
                                    <div>
                                        <p className="font-bold">Digital India Act</p>
                                        <p className="text-sm text-slate-400">Focus on inclusion, safety, and bridging the language divide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                            <ImageWithFallback
                                src="fake-global-ethics.jpg"
                                alt="Global Ethics Map"
                                className="relative rounded-3xl shadow-2xl border border-white/10"
                                description="A digital world map showing connections between global AI hubs."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: CAREER ROADMAP */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-2xl w-fit"><GraduationCap className="w-8 h-8 text-purple-600" /></div>
                            <h3 className="text-4xl font-bold">AI Ethics as a Career</h3>
                            <p className="text-xl text-muted-foreground text-balance">
                                Demand for "AI Ethics Officers" is growing by 40% every year. Companies like Google, Microsoft, and TCS now have dedicated teams.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Learn the Tech", desc: "Understand how AI/ML models actually work." },
                                { step: "2", title: "Study Philosophy", desc: "Read about fairness and social impact." },
                                { step: "3", title: "Get Certified", desc: "Look for courses by IAPP or AI Ethics Lab." }
                            ].map(item => (
                                <div key={item.step} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0 font-bold text-xs">{item.step}</div>
                                    <div>
                                        <p className="font-bold">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute -inset-4 bg-purple-500/10 rounded-[3rem] blur-2xl"></div>
                        <Card className="relative p-10 border-none shadow-2xl bg-white dark:bg-slate-800 rounded-[3rem] text-center space-y-6">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto flex items-center justify-center"><Briefcase className="w-10 h-10 text-purple-600" /></div>
                            <h4 className="text-2xl font-bold">Average Salary</h4>
                            <div className="text-5xl font-black text-purple-600">₹25L+</div>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">In Top Tech Firms</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION: ETHICS TOOLKIT */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-3xl font-bold">Your Ethics Toolkit</h3>
                    <p className="text-muted-foreground">Free tools to test and improve AI systems.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Fairness 360", org: "IBM", desc: "Detect and mitigate bias in datasets." },
                        { name: "InterpretML", org: "Microsoft", desc: "Understand the 'Black Box' of AI decisions." },
                        { name: "What-If Tool", org: "Google", desc: "Test how AI models perform under different scenarios." }
                    ].map((tool, idx) => (
                        <Card key={idx} className="p-8 border-none shadow-xl hover:shadow-primary/10 transition-shadow rounded-[2.5rem] bg-white dark:bg-slate-900 group">
                            <Compass className="w-10 h-10 text-primary mb-6 group-hover:rotate-45 transition-transform duration-500" />
                            <h4 className="text-xl font-bold mb-1">{tool.name}</h4>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">By {tool.org}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION: THE 10-TOPIC RETROSPECTIVE */}
            <section className="container mx-auto px-4 pb-12">
                <div className="text-center mb-12"><h3 className="text-3xl font-bold">The Journey You've Completed</h3></div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center gap-2 group hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">{i + 1}</div>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Topic</p>
                            <p className="text-xs font-bold group-hover:text-primary transition-colors">
                                {i === 0 ? "Introduction" : i === 1 ? "Bias" : i === 2 ? "Fairness" : i === 3 ? "Privacy" : i === 4 ? "Transparency" : i === 5 ? "Accountability" : i === 6 ? "Safe Use" : i === 7 ? "Ethical Use" : i === 8 ? "Governance" : "Finale"}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE PLEDGE */}
            <section className="container mx-auto px-4">
                <div className="bg-indigo-600 text-white rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-100"></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                    <div className="relative z-10 space-y-10">
                        <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-3xl shadow-2xl ring-4 ring-white/10">✋</div>
                        <h4 className="text-4xl md:text-5xl font-bold tracking-tight">The Responsible AI Pledge</h4>
                        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                            "I pledge to use AI as a tool for creation, not deception. I will verify outputs, respect data privacy, and ensure my AI use helps rather than harms."
                        </p>
                        <Button variant="secondary" size="lg" className="rounded-full px-12 py-8 text-xl font-bold shadow-2xl hover:scale-110 active:scale-95 transition-all bg-white text-indigo-600 hover:bg-slate-50" onClick={() => alert("Welcome to the community of Ethical AI users! 🚀")}>
                            I Accept the Pledge
                        </Button>
                    </div>
                </div>
            </section>

            {/* FINAL NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/25/topic/9")}>
                        <ArrowLeft className="w-4 h-4" /> Previous: Governance
                    </Button>
                    <div className="text-center group cursor-pointer" onClick={() => navigate("/module/25")}>
                        <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-fit mx-auto mb-2 group-hover:scale-125 transition-transform"><Trophy className="w-6 h-6 text-yellow-600" /></div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 25</p>
                        <p className="text-lg font-bold">COMPLETED</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-12 shadow-lg shadow-green-500/20 bg-green-600 hover:bg-green-700 text-white" onClick={() => navigate("/")}>
                        Back to Home <CheckCircle2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

// Main Module Wrapper
const Module25 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    // Default to Topic 1 if no topicId
    useEffect(() => {
        if (!topicId) {
            navigate("/module/25/topic/1", { replace: true });
        }
    }, [topicId, navigate]);

    // Simple routing switch
    const renderTopic = () => {
        switch (topicId) {
            case "1": return <Topic1Introduction />;
            case "2": return <Topic2Bias />;
            case "3": return <Topic3Fairness />;
            case "4": return <Topic4Privacy />;
            case "5": return <Topic5Transparency />;
            case "6": return <Topic6Accountability />;
            case "7": return <Topic7SafeUse />;
            case "8": return <Topic8EthicalUse />;
            case "9": return <Topic9Governance />;
            case "10": return <Topic10Activities />;
            // Placeholders for future topics
            default: return <Topic1Introduction />;
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {renderTopic()}
        </div>
    );
};

export default Module25;

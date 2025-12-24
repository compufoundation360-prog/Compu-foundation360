import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Laptop, Smartphone, Wifi, Brain, Shield,
    BookOpen, Search, Chrome, Globe, Lock, Search as SearchIcon,
    MousePointer, Bookmark, RefreshCw, ArrowLeft, ArrowRight,
    Filter, Mic, Image as ImageIcon, MoreVertical, X, Check,
    Mail, Paperclip, Send, Trash, Calendar, Clock, MapPin, Users,
    Cloud, Folder, File, Share, Eye, Edit, AlertCircle, MessageCircle,
    CheckSquare, Square, AlignLeft, AtSign, Video, MicOff, PhoneOff,
    CreditCard, QrCode, DollarSign, Wallet, ShieldCheck, Download, Archive, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TopicNavigation } from "@/components/TopicNavigation";

// --- TOPIC 1: INTRO TO DIGITAL LITERACY ---
function Topic1_IntroDigitalLiteracy() {
    const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION - SPLIT LAYOUT (Module 12 Style) */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 13 • Topic 1
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Introduction to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Digital Literacy</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            It's not just about turning on a computer. It's the survival kit for living, working, and learning in the modern world.
                        </p>
                    </div>

                    {/* Right: Hero Visual (Glass Card) */}
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>

                        {/* Main Visual */}
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-primary/20 shadow-2xl overflow-hidden p-6 rounded-3xl">
                                <div className="flex items-center gap-4 mb-6 border-b border-border pb-4">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                                        <div className="font-bold text-2xl">ID</div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Digital Citizen</h3>
                                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            Verified Online
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-muted p-4 rounded-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Search className="text-primary" size={20} />
                                            <span className="font-medium">Information</span>
                                        </div>
                                        <Badge variant="secondary">Expert</Badge>
                                    </div>
                                    <div className="bg-muted p-4 rounded-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Shield className="text-primary" size={20} />
                                            <span className="font-medium">Safety</span>
                                        </div>
                                        <Badge variant="secondary">Secure</Badge>
                                    </div>
                                    <div className="bg-muted p-4 rounded-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Globe className="text-primary" size={20} />
                                            <span className="font-medium">Communication</span>
                                        </div>
                                        <Badge variant="secondary">Pro</Badge>
                                    </div>
                                </div>
                            </Card>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground font-bold px-6 py-2 rounded-full shadow-lg transform rotate-[-5deg] animate-bounce">
                                100% Ready!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE SWISS ARMY KNIFE */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-primary text-primary">Core Concept</Badge>
                    <h2 className="text-3xl font-bold mb-4">The 'Swiss Army Knife' of Skills 🛠️</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Digital literacy isn't just one thing. It's a combination of three powerful tools you use every day.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-8 border-t-4 border-primary hover:border-primary hover:shadow-lg transition-all group bg-card">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">1. FIND (Research)</h3>
                        <p className="text-muted-foreground">
                            Finding the <strong>truth</strong> in a sea of noise. Knowing the difference between a fact and an opinion.
                        </p>
                    </Card>

                    <Card className="p-8 border-t-4 border-primary hover:border-primary hover:shadow-lg transition-all group bg-card">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Edit size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">2. CREATE (Make)</h3>
                        <p className="text-muted-foreground">
                            Using tools to <strong>build</strong>. Writing clear emails, making spreadsheets, and designing presentations.
                        </p>
                    </Card>

                    <Card className="p-8 border-t-4 border-primary hover:border-primary hover:shadow-lg transition-all group bg-card">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">3. PROTECT (Safety)</h3>
                        <p className="text-muted-foreground">
                            Keeping your data <strong>locked</strong>. Managing passwords and knowing when NOT to click.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION: CAREER IMPACT */}
            <section className="container mx-auto px-4 bg-muted/30 py-16 rounded-[3rem] my-10 border border-border">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-primary text-primary">Career Impact</Badge>
                    <h2 className="text-3xl font-bold mb-4">Why Employers Care</h2>
                    <p className="text-muted-foreground">The skills that got you hired 10 years ago are now obsolete.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                    {/* OLD WAY */}
                    <Card className="p-8 bg-muted border-dashed border-2 border-border opacity-60 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-muted-foreground mb-6 flex items-center gap-2">
                            <Archive size={24} /> The Old Resume
                        </h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex gap-2 items-center"><X size={16} /> Filing Paper Documents</li>
                            <li className="flex gap-2 items-center"><X size={16} /> Typing Speed (WPM)</li>
                            <li className="flex gap-2 items-center"><X size={16} /> Making Phone Calls</li>
                        </ul>
                    </Card>

                    {/* NEW WAY */}
                    <Card className="p-8 bg-card shadow-xl border-2 border-primary relative overflow-hidden transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">HIRED</div>
                        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <Rocket size={24} /> The Modern Resume
                        </h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex gap-2 items-center"><Check size={16} className="text-primary" /> Cloud Collaboration (Drive/Teams)</li>
                            <li className="flex gap-2 items-center"><Check size={16} className="text-primary" /> Fact-Checking Information</li>
                            <li className="flex gap-2 items-center"><Check size={16} className="text-primary" /> Adaptability to AI Tools</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* NEW SECTION 1: THE BS DETECTOR (Visual) */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Visual: Clickbait vs Real */}
                        <div className="grid gap-4">
                            {/* Fake Card */}
                            <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-xl flex gap-4 items-center opacity-70">
                                <div className="bg-destructive/10 w-16 h-16 rounded-lg flex items-center justify-center text-2xl text-destructive">👽</div>
                                <div>
                                    <div className="text-xs font-bold text-destructive mb-1">SPONSORED CONTENT</div>
                                    <div className="font-bold text-sm">"Alien Baby Found in Walmart! Doctors Shocked!"</div>
                                </div>
                            </div>
                            {/* Real Card */}
                            <div className="bg-card border-l-4 border-primary shadow-lg p-6 rounded-r-xl flex gap-4 items-center transform md:translate-x-8">
                                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                                    <Globe className="text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-muted-foreground mb-1">VERIFIED SOURCE</div>
                                    <div className="font-bold text-lg">"New Study on Digital Habits"</div>
                                    <div className="text-xs text-muted-foreground mt-1">Source: Technology Research Institute</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Badge variant="secondary" className="mb-4">Real World Skill</Badge>
                        <h2 className="text-3xl font-bold mb-4">The "BS Detector" 🕵️‍♀️</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            The internet is full of noise. A key part of digital literacy is knowing what to ignore.
                        </p>
                        <p className="text-muted-foreground">
                            If a headline is screaming in ALL CAPS or sounds too crazy to be true... it probably is.
                        </p>
                    </div>
                </div>
            </section>

            {/* NEW SECTION 2: NETIQUETTE (Visual) */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="secondary" className="mb-4">Social Skills</Badge>
                        <h2 className="text-3xl font-bold mb-4">Netiquette: Digital Manners 🎩</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            There are unwritten rules for how to behave online. It's called "Netiquette" (Network Etiquette).
                        </p>
                        <p className="text-muted-foreground">
                            Typing in ALL CAPS looks like you are screaming. Being polite gets you better answers.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Visual: Chat Interface */}
                        <div className="bg-card p-6 rounded-3xl border border-border max-w-md mx-auto">
                            <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
                                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-xs font-mono ml-auto opacity-50">Team Chat</span>
                            </div>
                            <div className="space-y-4">
                                {/* Bad Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold text-destructive">BAD</div>
                                    <div className="bg-destructive/10 text-destructive p-3 rounded-2xl rounded-tl-none text-sm font-medium">
                                        SEND ME THE FILE NOW!!!!! WHY IS IT LATE?????
                                    </div>
                                </div>
                                <div className="flex justify-center my-2">
                                    <span className="text-[10px] text-muted-foreground font-mono">VS</span>
                                </div>
                                {/* Good Message */}
                                <div className="flex gap-3 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">PRO</div>
                                    <div className="bg-primary/10 text-primary p-3 rounded-2xl rounded-tr-none text-sm font-medium">
                                        Hi! Could you please send the updated file when you have a moment? Thanks!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: INTERACTIVE CHECK - Updated Colors */}
            <section className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-2xl font-bold mb-8 text-center">Interactive: Literacy Check</h2>
                <Card className="p-8 bg-card border border-border">
                    <div className="text-center mb-6">
                        <div className="text-4xl mb-2">📧</div>
                        <h3 className="font-bold text-lg">Scenario</h3>
                        <p className="text-muted-foreground">
                            You receive an email from <span className="font-mono bg-muted px-1 rounded">boss@company-update.net</span> asking for your password to update the system.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setQuizAnswer("WRONG")}
                            className={`p-4 rounded-xl border-2 transition-all ${quizAnswer === 'WRONG' ? 'border-destructive bg-destructive/10' : 'border-border hover:bg-muted'}`}
                        >
                            <div className="font-bold mb-1">Reply Immediately</div>
                            <div className="text-xs text-muted-foreground">"It's my boss, I must hurry!"</div>
                        </button>
                        <button
                            onClick={() => setQuizAnswer("CORRECT")}
                            className={`p-4 rounded-xl border-2 transition-all ${quizAnswer === 'CORRECT' ? 'border-primary bg-primary/10' : 'border-border hover:bg-muted'}`}
                        >
                            <div className="font-bold mb-1">Check Sender</div>
                            <div className="text-xs text-muted-foreground">"Wait, that email looks weird..."</div>
                        </button>
                    </div>

                    {quizAnswer && (
                        <div className={`mt-6 p-4 rounded-lg font-bold text-center animate-in fade-in slide-in-from-bottom-2 ${quizAnswer === 'CORRECT' ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}`}>
                            {quizAnswer === 'CORRECT'
                                ? "✅ Correct! Digital Literacy means noticing that the domain 'company-update.net' is FAKE."
                                : "❌ Incorrect. This is a phishing scam. A digitally literate person would verify the source first."}
                        </div>
                    )}
                </Card>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t1" />
            </div>
        </div>
    );
}




// --- MAIN MODULE 13 COMPONENT (ROUTER) ---
function Module13() {
    const { topicId } = useParams();

    if (!topicId || topicId === "1" || topicId === "m13-t1") return <Topic1_IntroDigitalLiteracy />;
    if (topicId === "2" || topicId === "m13-t2") return <Topic2_WebBrowsers />;
    if (topicId === "3" || topicId === "m13-t3") return <Topic3_SearchSkills />;
    if (topicId === "4" || topicId === "m13-t4") return <Topic4_EmailBasics />;
    if (topicId === "5" || topicId === "m13-t5") return <Topic5_CalendarTools />;
    if (topicId === "6" || topicId === "m13-t6") return <Topic6_CloudDrive />;
    if (topicId === "7" || topicId === "m13-t7") return <Topic7_OnlineForms />;
    if (topicId === "8" || topicId === "m13-t8") return <Topic8_VideoConference />;
    if (topicId === "9" || topicId === "m13-t9") return <Topic9_DigitalPayments />;
    if (topicId === "10" || topicId === "m13-t10") return <Topic10_SafetyRecap />;

    // Fallback
    return <Topic1_IntroDigitalLiteracy />;
}

// --- TOPIC 4: EMAIL BASICS ---
function Topic4_EmailBasics() {
    const [emailStep, setEmailStep] = useState<"compose" | "sent">("compose");
    const [subject, setSubject] = useState("");
    const [hasAttachment, setHasAttachment] = useState(false);

    const handleSend = () => {
        if (!subject) return; // Simple validation
        setEmailStep("sent");
        setTimeout(() => {
            setEmailStep("compose");
            setSubject("");
            setHasAttachment(false);
        }, 3000);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide uppercase mb-6">
                        Module 13 • Topic 4
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                        Your Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Passport</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                        Email is your ID card for the entire internet. It's how you unlock apps, apply for jobs, and talk to the world.
                    </p>

                    {/* IMAGE CONTAINER */}
                    <div className="max-w-2xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 transform hover:scale-105 transition-transform duration-700">
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-64 md:h-96 flex items-center justify-center relative">
                            {/* Abstract decorative elements */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <Mail size={120} className="text-white drop-shadow-2xl relative z-10" />
                            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-yellow-400 rounded-full blur-[50px] opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: ANATOMY */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Anatomy of an Address</h2>
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 font-mono text-xl md:text-3xl bg-slate-900 text-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-indigo-400 font-bold">john.doe</span>
                        <span className="text-xs font-sans text-slate-400 uppercase tracking-widest">Username</span>
                    </div>
                    <span className="text-slate-500 text-4xl">@</span>
                    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-pink-400 font-bold">gmail</span>
                        <span className="text-xs font-sans text-slate-400 uppercase tracking-widest">Service</span>
                    </div>
                    <span className="text-slate-500 text-4xl">.</span>
                    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-emerald-400 font-bold">com</span>
                        <span className="text-xs font-sans text-slate-400 uppercase tracking-widest">Domain</span>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE: THE COMPOSER */}
            <section className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl font-bold mb-8 text-center">Interactive: The Composer</h2>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    {/* Window Header */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <span className="font-bold text-slate-700 dark:text-slate-200">New Message</span>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        </div>
                    </div>

                    {/* Window Body */}
                    {emailStep === 'compose' ? (
                        <div className="p-6 space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase">To</label>
                                <div className="p-2 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                    boss@company.com
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase">Subject</label>
                                <input
                                    type="text"
                                    className="w-full p-2 bg-transparent border-b border-slate-200 dark:border-slate-700 outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="Enter subject..."
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="h-32 p-2 text-slate-500 text-sm">
                                Hi Team, please find the attached report for the project.
                                <br /><br />
                                Best,<br />John
                            </div>

                            {/* Attachment Area */}
                            {hasAttachment && (
                                <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                                    <Paperclip size={14} /> report_final.pdf <button onClick={() => setHasAttachment(false)} className="hover:text-red-500"><X size={14} /></button>
                                </div>
                            )}

                            <div className="pt-4 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
                                <button
                                    onClick={() => setHasAttachment(true)}
                                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors"
                                    title="Attach File"
                                >
                                    <Paperclip size={20} />
                                </button>
                                <Button
                                    onClick={handleSend}
                                    disabled={!subject}
                                    className={`rounded-full px-8 ${!subject ? 'opacity-50 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30'}`}
                                >
                                    Send <Send size={16} className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="h-80 flex flex-col items-center justify-center bg-indigo-500 text-white animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                                <Mail size={40} className="text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Sent!</h3>
                            <p className="opacity-80">Your digital letter is on its way.</p>
                        </div>
                    )}
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t4" />
            </div>
        </div>
    );
}

// --- TOPIC 5: CALENDAR TOOLS ---
function Topic5_CalendarTools() {
    const [events, setEvents] = useState<string[]>([]);
    const [isAddingRequest, setIsAddingRequest] = useState(false);
    const [newEventTitle, setNewEventTitle] = useState("");

    const handleAddEvent = () => {
        if (!newEventTitle) return;
        setEvents([...events, newEventTitle]);
        setNewEventTitle("");
        setIsAddingRequest(false);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-semibold tracking-wide uppercase mb-6">
                        Module 13 • Topic 5
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                        Master Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Time</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                        Never miss a birthday, meeting, or deadline again. Digital calendars run your life so you don't have to remember everything.
                    </p>

                    {/* IMAGE CONTAINER (3D Calendar Placeholder) */}
                    <div className="max-w-md mx-auto relative perspective-1000 group cursor-pointer">
                        <div className="absolute inset-0 bg-rose-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-slate-100 dark:border-slate-700 transform group-hover:rotate-y-12 transition-transform duration-700 p-8">
                            {/* Calendar Header */}
                            <div className="text-rose-500 font-bold text-xl mb-2">DECEMBER</div>
                            <div className="text-slate-800 dark:text-white font-black text-9xl leading-none mb-4">25</div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                                <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: EVENTS VS REMINDERS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8 border-t-8 border-blue-500 hover:scale-105 transition-transform">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Event</h3>
                        <p className="text-muted-foreground mb-4">"Be Somewhere"</p>
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-sm font-mono text-slate-600 dark:text-slate-300">
                            • Doctor's Appt<br />
                            • Team Meeting<br />
                            • Birthday Party
                        </div>
                    </Card>
                    <Card className="p-8 border-t-8 border-yellow-500 hover:scale-105 transition-transform">
                        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Reminder</h3>
                        <p className="text-muted-foreground mb-4">"Do Something"</p>
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-sm font-mono text-slate-600 dark:text-slate-300">
                            • Buy Milk<br />
                            • Call Mom<br />
                            • Pay Bills
                        </div>
                    </Card>
                </div>
            </section>

            {/* INTERACTIVE: THE PLANNER */}
            <section className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold mb-8 text-center">Interactive: The Planner</h2>
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-bold text-xl">My Week</span>
                        <Button size="sm" onClick={() => setIsAddingRequest(true)} className="gap-2">
                            <span className="text-lg">+</span> Add Event
                        </Button>
                    </div>

                    {/* The Grid */}
                    <div className="grid grid-cols-5 gap-2 md:gap-4 text-center">
                        {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day) => (
                            <div key={day} className="space-y-2">
                                <div className="text-xs font-bold text-slate-400">{day}</div>
                                <div className="bg-slate-50 dark:bg-slate-800 h-64 rounded-xl border border-slate-100 dark:border-slate-700 p-2 space-y-2 relative">
                                    {/* Pre-filled events */}
                                    {day === 'MON' && (
                                        <div className="bg-blue-100 text-blue-700 text-xs p-2 rounded font-bold">
                                            Team Sync
                                        </div>
                                    )}
                                    {day === 'WED' && (
                                        <div className="bg-green-100 text-green-700 text-xs p-2 rounded font-bold">
                                            Lunch
                                        </div>
                                    )}
                                    {/* User added events show up on Friday for simplicity or just allow adding to a list */}
                                    {day === 'FRI' && events.map((evt, i) => (
                                        <div key={i} className="bg-rose-100 text-rose-700 text-xs p-2 rounded font-bold animate-in zoom-in">
                                            {evt}
                                        </div>
                                    ))}

                                    {/* "Current Time" Line */}
                                    {day === 'TUE' && <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-400 z-10"></div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Event Modal Overlay */}
                    {isAddingRequest && (
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-3xl p-4 z-20">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in">
                                <h3 className="font-bold text-lg mb-4">Add Event to Friday</h3>
                                <input
                                    autoFocus
                                    type="text"
                                    className="w-full p-3 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 outline-none focus:ring-2 ring-rose-500"
                                    placeholder="e.g. Cinema"
                                    value={newEventTitle}
                                    onChange={(e) => setNewEventTitle(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddEvent()}
                                />
                                <div className="flex gap-2">
                                    <Button variant="outline" className="flex-1" onClick={() => setIsAddingRequest(false)}>Cancel</Button>
                                    <Button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white" onClick={handleAddEvent}>Save</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t5" />
            </div>
        </div>
    );
}

// --- TOPIC 6: GOOGLE DRIVE / ONEDRIVE ---
function Topic6_CloudDrive() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            Module 13 • Topic 6
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Hard Drive in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">The Sky</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Stop emailing files to yourself. Google Drive and OneDrive let you access your documents from any computer on Earth.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>
                        <div className="flex justify-center relative z-10">
                            <Cloud size={200} className="text-cyan-500 drop-shadow-2xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: FILES & FOLDERS */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Organizer Hierarchy</h2>
                    <p className="text-muted-foreground">It works exactly like the folders on your PC, but safer.</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl w-full max-w-2xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-6 text-slate-500">
                            <div className="font-bold text-slate-800 dark:text-slate-200">My Drive</div>
                            <ArrowRight size={16} />
                            <div>Work</div>
                            <ArrowRight size={16} />
                            <div>Projects</div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-900/10 cursor-pointer">
                                <Folder size={48} className="text-yellow-400 fill-yellow-400" />
                                <span className="font-medium">2023 Reports</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-900/10 cursor-pointer">
                                <Folder size={48} className="text-slate-400 fill-slate-300" />
                                <span className="font-medium">Images</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-900/10 cursor-pointer">
                                <File size={48} className="text-blue-500" />
                                <span className="font-medium">budget.xlsx</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: PERMISSIONS EXPLAINED */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">The Power of Sharing</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 border-t-4 border-slate-400">
                        <div className="flex justify-between items-start mb-4">
                            <Eye size={32} className="text-slate-500" />
                            <Badge variant="secondary">Safe</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Viewer</h3>
                        <p className="text-muted-foreground">They can look at it, but they can't touch. Good for sharing final reports or policies.</p>
                    </Card>
                    <Card className="p-8 border-t-4 border-yellow-400">
                        <div className="flex justify-between items-start mb-4">
                            <MessageCircle size={32} className="text-yellow-500" />
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Feedback</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Commenter</h3>
                        <p className="text-muted-foreground">They can leave sticky notes on the side, but can't change the actual text.</p>
                    </Card>
                    <Card className="p-8 border-t-4 border-green-500">
                        <div className="flex justify-between items-start mb-4">
                            <Edit size={32} className="text-green-500" />
                            <Badge variant="secondary" className="bg-green-100 text-green-800">Dangerous</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Editor</h3>
                        <p className="text-muted-foreground">Full power. They can delete everything. Only give this to trusted teammates.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: COLLABORATION VISUAL */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-6">Real-Time Magic</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10">
                        The best part of Cloud Drive is that you don't need to email "Project_Final_v2_REAL_FINAL.docx". Everyone works on the same file at the same time.
                    </p>

                    {/* Fake Doc Interface */}
                    <div className="bg-white p-10 shadow-2xl rounded-xl w-full max-w-3xl border border-slate-200 text-left min-h-[300px] relative">
                        <p className="text-xl md:text-2xl font-serif text-slate-800">
                            The goal of this project is to increase digital literacy by <span className="bg-pink-200 px-1 relative">200%<span className="absolute -top-6 -right-2 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">Sarah is typing...</span></span>.
                        </p>
                        <br />
                        <p className="text-xl md:text-2xl font-serif text-slate-800">
                            We will achieve this by <span className="bg-blue-200 px-1 relative">building interactive modules<span className="absolute -top-6 -right-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full">Mike</span></span> that engage users.
                        </p>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t6" />
            </div>
        </div>
    );
}

// --- TOPIC 7: ONLINE FORMS ---
function Topic7_OnlineForms() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Module 13 • Topic 7
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Filling Out <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">The Form</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            From job applications to ordering pizza. Everything on the web asks for your details. Learn to do it fast and error-free.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-2xl border-4 border-orange-100 dark:border-slate-700 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="space-y-4">
                                <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                <div className="h-12 w-full bg-slate-100 dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-600"></div>
                                <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-full mt-6"></div>
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 border-2 border-orange-500 bg-orange-500 rounded flex items-center justify-center"><Check size={16} className="text-white" /></div>
                                    <div className="h-6 w-48 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                </div>
                                <div className="h-14 w-full bg-orange-500 rounded-xl mt-8 shadow-lg shadow-orange-500/30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: ANATOMY OF A FORM */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">The Form Toolbox</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-6 text-center hover:border-orange-500 transition-colors">
                        <AlignLeft size={40} className="mx-auto mb-4 text-slate-500" />
                        <h3 className="font-bold text-lg mb-2">Text Field</h3>
                        <p className="text-sm text-muted-foreground">For typing Names, Emails, or Addresses. Look for the blinking cursor.</p>
                    </Card>
                    <Card className="p-6 text-center hover:border-orange-500 transition-colors">
                        <Square size={40} className="mx-auto mb-4 text-slate-500" />
                        <h3 className="font-bold text-lg mb-2">Checkbox</h3>
                        <p className="text-sm text-muted-foreground">Square box. You can pick multiple options (Like toppings on a pizza).</p>
                    </Card>
                    <Card className="p-6 text-center hover:border-orange-500 transition-colors">
                        <div className="w-10 h-10 rounded-full border-4 border-slate-500 mx-auto mb-4"></div>
                        <h3 className="font-bold text-lg mb-2">Radio Button</h3>
                        <p className="text-sm text-muted-foreground">Round circle. You can pick ONLY ONE (Male or Female, Yes or No).</p>
                    </Card>
                    <Card className="p-6 text-center hover:border-orange-500 transition-colors">
                        <AtSign size={40} className="mx-auto mb-4 text-slate-500" />
                        <h3 className="font-bold text-lg mb-2">Submit</h3>
                        <p className="text-sm text-muted-foreground">The final button. Don't click it until you double-check everything!</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: THE RED ASTERISK * */}
            <section className="container mx-auto px-4">
                <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-800 text-center max-w-3xl mx-auto">
                    <div className="text-6xl font-black text-red-600 mb-4">*</div>
                    <h2 className="text-2xl font-bold mb-4">The Red Asterisk Rule</h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                        If you see this little star <span className="font-bold text-red-600">*</span> next to a question, it means <strong>REQUIRED</strong>. You strictly cannot submit the form without answering it.
                    </p>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t7" />
            </div>
        </div>
    );
}

// --- TOPIC 8: VIDEO CONFERENCING ---
function Topic8_VideoConference() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Module 13 • Topic 8
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            You're On <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Mute</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Zoom, Teams, Google Meet. The new meeting rooms. Learn the etiquette and buttons so you don't look awkward.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-slate-900 p-4 rounded-2xl shadow-2xl border-4 border-slate-700">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="h-32 bg-slate-800 rounded-lg flex items-center justify-center relative"><span className="text-slate-500">You</span><div className="absolute bottom-2 left-2 bg-black/50 p-1 rounded"><MicOff size={14} className="text-red-500" /></div></div>
                                <div className="h-32 bg-slate-800 rounded-lg flex items-center justify-center"><span className="text-slate-500">Boss</span></div>
                                <div className="h-32 bg-slate-800 rounded-lg flex items-center justify-center"><span className="text-slate-500">Team</span></div>
                                <div className="h-32 bg-slate-800 rounded-lg flex items-center justify-center"><span className="text-slate-500">Client</span></div>
                            </div>
                            <div className="flex justify-center gap-4 py-2 bg-slate-800 rounded-xl">
                                <div className="p-2 bg-red-500 rounded-full"><MicOff size={20} className="text-white" /></div>
                                <div className="p-2 bg-slate-600 rounded-full"><Video size={20} className="text-white" /></div>
                                <div className="p-2 bg-red-600 rounded-lg px-6 font-bold text-white text-xs flex items-center">LEAVE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE BUTTONS */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Don't Panic, Know the Buttons</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-lg group-hover:scale-110 transition-transform mb-4 border border-slate-200 dark:border-slate-700">
                            <Mic size={32} />
                        </div>
                        <h3 className="font-bold text-lg">Mute / Unmute</h3>
                        <p className="text-xs text-muted-foreground w-40 mx-auto">Turn off sound when you aren't speaking.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-lg group-hover:scale-110 transition-transform mb-4 border border-slate-200 dark:border-slate-700">
                            <Video size={32} />
                        </div>
                        <h3 className="font-bold text-lg">Camera</h3>
                        <p className="text-xs text-muted-foreground w-40 mx-auto">Show your face. Make sure your background is clean.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-lg group-hover:scale-110 transition-transform mb-4 border border-slate-200 dark:border-slate-700">
                            <Share size={32} />
                        </div>
                        <h3 className="font-bold text-lg">Share Screen</h3>
                        <p className="text-xs text-muted-foreground w-40 mx-auto">Show your work. Close personal tabs first!</p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CHECKLIST */}
            <section className="container mx-auto px-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[3rem]">
                    <h2 className="text-3xl font-bold mb-6 text-center">Meeting Etiquette Checklist</h2>
                    <ul className="space-y-4 max-w-2xl mx-auto text-lg">
                        <li className="flex items-center gap-3"><Check className="text-emerald-500" /> Join 2 minutes early.</li>
                        <li className="flex items-center gap-3"><Check className="text-emerald-500" /> Keep yourself muted if you are just listening.</li>
                        <li className="flex items-center gap-3"><Check className="text-emerald-500" /> Check your lighting (don't sit with a window behind you).</li>
                        <li className="flex items-center gap-3"><Check className="text-emerald-500" /> Wear pants. (Yes, seriously.)</li>
                    </ul>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t8" />
            </div>
        </div>
    );
}

// --- TOPIC 9: DIGITAL PAYMENTS ---
function Topic9_DigitalPayments() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Module 13 • Topic 9
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Money Without <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Cash</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            UPI, GPay, Credit Cards. Moving money is instant now. But speed requires safety.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 flex justify-center">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 w-64 h-80 flex flex-col items-center justify-center gap-4 rotate-6">
                                <QrCode size={120} className="text-slate-800" />
                                <div className="text-xs font-mono text-slate-400">Scan to Pay</div>
                                <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE BIG PLAYERS */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">How We Pay Today</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 border-t-8 border-purple-500">
                        <div className="flex justify-between items-start mb-4">
                            <Smartphone size={32} className="text-purple-600" />
                            <Badge>India's Favorite</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">UPI (GPay/PhonePe)</h3>
                        <p className="text-muted-foreground">Scan QR codes or type a phone number. Instant transfer directly from bank to bank.</p>
                    </Card>
                    <Card className="p-8 border-t-8 border-blue-500">
                        <div className="flex justify-between items-start mb-4">
                            <CreditCard size={32} className="text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Debit/Credit Cards</h3>
                        <p className="text-muted-foreground">The plastic card numbers (16 digits). Used for Amazon shopping or Netflix subscriptions.</p>
                    </Card>
                    <Card className="p-8 border-t-8 border-slate-500">
                        <div className="flex justify-between items-start mb-4">
                            <Wallet size={32} className="text-slate-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Net Banking</h3>
                        <p className="text-muted-foreground">Logging into your bank website directly. Used for big transfers or statements.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: SAFETY RULES */}
            <section className="container mx-auto px-4">
                <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-500 border-dashed rounded-[3rem] p-10 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-red-600 flex items-center justify-center gap-3">
                        <ShieldCheck /> The Golden Rule of UPI
                    </h2>
                    <p className="text-2xl font-bold mb-4">
                        "To RECEIVE money, you NEVER enter your PIN."
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                        If someone says "Scan this QR code to receive your lottery prize", IT IS A SCAM. You only scan or enter PIN when money is leaving your account.
                    </p>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t9" />
            </div>
        </div>
    );
}

// --- TOPIC 10: RECAP & FINALE ---
// --- TOPIC 2: USING WEB BROWSERS ---
function Topic2_WebBrowsers() {
    const [activeTab, setActiveTab] = useState("content");
    const [bookmarked, setBookmarked] = useState(false);
    const [historyOpen, setHistoryOpen] = useState(false);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 13 • Topic 2
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Using Web <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Browsers</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            A web browser is your window to the world. It's the car you drive through the internet highway.
                        </p>
                    </div>

                    {/* HERO VISUAL: Browser Window */}
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
                                {/* Browser Chrome */}
                                <div className="bg-muted border-b border-border p-3 flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-destructive/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                                    </div>
                                    <div className="bg-background rounded-md flex-1 text-center text-xs text-muted-foreground py-1 font-mono">
                                        awesome-site.com
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col items-center justify-center min-h-[200px] bg-primary/5">
                                    <Globe className="w-16 h-16 text-primary mb-4 animate-bounce" />
                                    <h3 className="font-bold text-lg">Welcome to the Web!</h3>
                                    <Button size="sm" className="mt-4" variant="outline">Start Browsing</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE BIG 3 */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-primary text-primary">Software</Badge>
                    <h2 className="text-3xl font-bold mb-4">The Big Three</h2>
                    <p className="text-muted-foreground">They all do the same thing, just different 'flavors'.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center hover:shadow-lg transition-all border-t-4 border-blue-500">
                        <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <Chrome size={32} className="text-blue-600" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Google Chrome</h3>
                        <p className="text-sm text-muted-foreground">The most popular browser. Fast and works well with Google apps.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-all border-t-4 border-green-500">
                        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <div className="font-bold text-2xl text-green-600">E</div>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Microsoft Edge</h3>
                        <p className="text-sm text-muted-foreground">Built into Windows. Fast and efficient for modern PCs.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-all border-t-4 border-orange-500">
                        <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                            <div className="font-bold text-2xl text-orange-600">Fx</div>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Mozilla Firefox</h3>
                        <p className="text-sm text-muted-foreground">Focused on privacy and speed. A great open-source choice.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: BROWSER ANATOMY (Tabs & Bookmarks) */}
            <section className="container mx-auto px-4 bg-muted/30 py-16 rounded-[3rem] border border-border">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="secondary" className="mb-4">Anatomy</Badge>
                        <h2 className="text-3xl font-bold mb-6">The Cockpit Controls ✈️</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Folder className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Tabs</h3>
                                    <p className="text-muted-foreground">Like papers on a desk. You can have many 'pages' open at once in the same window.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Bookmark className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Bookmarks</h3>
                                    <p className="text-muted-foreground">Like saving a contact in your phone. Save your favorite sites to visit them later instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Annotated Browser UI */}
                    <div className="bg-background border border-border rounded-xl shadow-xl p-4">
                        <div className="flex items-center gap-1 mb-2">
                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-t-lg text-xs font-bold border-t border-x border-primary/20">Active Tab</div>
                            <div className="bg-muted text-muted-foreground px-3 py-1 rounded-t-lg text-xs">Tab 2</div>
                            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">+</div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3 border border-border">
                            <div className="flex gap-2 text-muted-foreground">
                                <ArrowLeft size={16} /> <ArrowRight size={16} /> <RefreshCw size={16} />
                            </div>
                            <div className="bg-background flex-1 border border-border rounded px-3 py-1 text-sm text-muted-foreground flex justify-between items-center">
                                <span>google.com</span>
                                <span className="text-primary"><Bookmark size={14} fill="currentColor" /></span>
                            </div>
                        </div>
                        <div className="mt-4 h-32 bg-muted/20 border border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                            Page Content
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: HISTORY & DOWNLOADS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8 bg-card border border-border hover:border-primary transition-colors">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Browser History 👣</h3>
                        <p className="text-muted-foreground mb-4">
                            Think of Hansel and Gretel's breadcrumbs. Your browser remembers every step you take. Use <strong>Ctrl + H</strong> to see where you've been.
                        </p>
                        <Badge variant="outline">Useful to find lost pages</Badge>
                    </Card>

                    <Card className="p-8 bg-card border border-border hover:border-primary transition-colors">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <Download size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Downloads 🎒</h3>
                        <p className="text-muted-foreground mb-4">
                            Your digital backpack. Any file you save (images, docs, software) goes here. Use <strong>Ctrl + J</strong> to open your bag.
                        </p>
                        <Badge variant="outline">Files stay on your PC</Badge>
                    </Card>
                </div>
            </section>

            {/* INTERACTIVE: BROWSER SIMULATOR */}
            <section className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl font-bold mb-8 text-center">Interactive: The Browser Simulator</h2>

                <div className="bg-slate-900 rounded-t-xl p-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-2 mx-4 max-w-sm">
                        <Lock size={12} className="text-green-500" />
                        <span className="text-xs text-slate-300 font-mono">example-learning.com</span>
                        <button
                            onClick={() => setBookmarked(!bookmarked)}
                            className="ml-auto hover:scale-110 transition-transform"
                        >
                            <Bookmark size={14} className={bookmarked ? "text-yellow-400 fill-yellow-400" : "text-slate-500"} />
                        </button>
                    </div>
                    <button
                        onClick={() => setHistoryOpen(!historyOpen)}
                        className={`p-1.5 rounded-md ${historyOpen ? 'bg-primary text-primary-foreground' : 'text-slate-400 hover:bg-slate-800'}`}
                        title="History"
                    >
                        <Clock size={16} />
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700 h-[300px] relative rounded-b-xl overflow-hidden p-8">
                    {historyOpen ? (
                        <div className="animate-in slide-in-from-right">
                            <h3 className="font-bold mb-4 flex items-center gap-2"><Clock size={18} /> History</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-primary">Example Learning</span>
                                    <span className="text-muted-foreground">Just Now</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Google Search: "How to use a mouse"</span>
                                    <span className="text-muted-foreground">10:05 AM</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Wikipedia: Internet History</span>
                                    <span className="text-muted-foreground">Yesterday</span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="text-center space-y-4">
                            <h1 className="text-3xl font-bold">Welcome to Example Learning!</h1>
                            <p className="text-muted-foreground">This is a safe place to practice your skills.</p>
                            <div className="p-4 bg-muted/50 rounded-lg max-w-sm mx-auto border border-dashed border-border">
                                <p className="text-sm">
                                    <strong>Task:</strong><br />
                                    1. Click the <Bookmark size={12} className="inline" /> Star to bookmark this page.<br />
                                    2. Click the <Clock size={12} className="inline" /> Clock to check your history.
                                </p>
                            </div>
                            {bookmarked && (
                                <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full text-sm font-bold animate-in zoom-in">
                                    <Check size={16} /> Page Bookmarked!
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t2" />
            </div>
        </div>
    );
}
// --- TOPIC 3: SEARCH ENGINE SKILLS ---
function Topic3_SearchSkills() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState<"idle" | "success" | "fail">("idle");
    const [activeFilter, setActiveFilter] = useState("ALL");

    const handleSearch = () => {
        const lower = searchQuery.toLowerCase();
        // Challenege: Find baking recipes but NO chocolate
        if (lower.includes("baking") && lower.includes("-chocolate")) {
            setSearchResult("success");
        } else if (lower.includes("baking")) {
            setSearchResult("fail");
        } else {
            setSearchResult("idle");
        }
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 13 • Topic 3
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mastering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Search Skills</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Stop guessing. Start finding. The internet is a library with billions of books; here is how to use the index card.
                        </p>
                    </div>

                    {/* HERO VISUAL: Search Engine */}
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto p-8 flex flex-col items-center gap-6">
                                <h2 className="text-4xl font-bold text-slate-700 dark:text-slate-200 tracking-tighter">Google</h2>
                                <div className="w-full relative">
                                    <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                                    <div className="w-full h-11 rounded-full border border-border bg-muted/30 pl-10 pr-4 flex items-center text-muted-foreground text-sm cursor-text">
                                        how to find anything...
                                        <span className="ml-[1px] w-0.5 h-5 bg-primary animate-pulse"></span>
                                    </div>
                                    <div className="absolute right-3 top-2.5 flex gap-2">
                                        <Mic size={20} className="text-primary" />
                                        <ImageIcon size={20} className="text-primary" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="secondary" size="sm">Google Search</Button>
                                    <Button variant="secondary" size="sm">I'm Feeling Lucky</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: KEYWORDS (The Secret Code) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-primary text-primary">Keywords</Badge>
                    <h2 className="text-3xl font-bold mb-4">Speak the Robot's Language 🤖</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Search engines don't understand full sentences like humans do. They look for <strong>Keywords</strong>.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    {/* Bad Search */}
                    <Card className="p-6 border-l-4 border-destructive bg-destructive/5 opacity-70">
                        <div className="flex items-center gap-3 mb-4 text-destructive">
                            <X size={24} />
                            <h3 className="font-bold">The Wrong Way</h3>
                        </div>
                        <div className="bg-background p-4 rounded-lg border border-border mb-2 text-sm text-muted-foreground italic">
                            "Hello google my computer screen is frozen and i dont know what to do please help me fix it"
                        </div>
                        <p className="text-xs text-muted-foreground">Too many useless words. The engine gets confused.</p>
                    </Card>

                    {/* Pro Search */}
                    <Card className="p-6 border-l-4 border-primary bg-primary/5 shadow-lg transform md:-translate-y-4">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Check size={24} />
                            <h3 className="font-bold">The Pro Way</h3>
                        </div>
                        <div className="bg-background p-4 rounded-lg border border-primary mb-2 text-lg font-mono text-foreground">
                            windows 11 screen frozen fix
                        </div>
                        <p className="text-xs text-muted-foreground">Short, specific keywords. Direct hit.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: FILTERS */}
            <section className="container mx-auto px-4 bg-muted/30 py-16 rounded-[3rem] border border-border">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="secondary" className="mb-4">Filters</Badge>
                        <h2 className="text-3xl font-bold mb-6">Narrowing the Haystack 🌾</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Google gives you millions of results. Use <strong>Tabs/Filters</strong> to tell it exactly what format you want.
                        </p>
                        <div className="space-y-4">
                            <div className={`p-4 rounded-xl border cursor-pointer transition-all ${activeFilter === 'IMAGES' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:bg-muted'}`} onClick={() => setActiveFilter('IMAGES')}>
                                <div className="flex items-center gap-3 font-bold"><ImageIcon size={20} /> Images</div>
                                <p className={`text-sm mt-1 ${activeFilter === 'IMAGES' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Finds photos, clip art, and diagrams.</p>
                            </div>
                            <div className={`p-4 rounded-xl border cursor-pointer transition-all ${activeFilter === 'MAPS' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:bg-muted'}`} onClick={() => setActiveFilter('MAPS')}>
                                <div className="flex items-center gap-3 font-bold"><MapPin size={20} /> Maps</div>
                                <p className={`text-sm mt-1 ${activeFilter === 'MAPS' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Finds locations, directions, and local businesses.</p>
                            </div>
                            <div className={`p-4 rounded-xl border cursor-pointer transition-all ${activeFilter === 'NEWS' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:bg-muted'}`} onClick={() => setActiveFilter('NEWS')}>
                                <div className="flex items-center gap-3 font-bold"><File size={20} /> News</div>
                                <p className={`text-sm mt-1 ${activeFilter === 'NEWS' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Finds the latest articles and current events.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Dynamic Result Preview */}
                    <div className="bg-background border border-border rounded-xl shadow-xl p-6 min-h-[400px] flex flex-col">
                        <div className="border-b border-border pb-4 mb-4 flex gap-6 text-sm font-medium">
                            <span className={activeFilter === 'ALL' ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground cursor-pointer"} onClick={() => setActiveFilter('ALL')}>All</span>
                            <span className={activeFilter === 'IMAGES' ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground cursor-pointer"} onClick={() => setActiveFilter('IMAGES')}>Images</span>
                            <span className={activeFilter === 'MAPS' ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground cursor-pointer"} onClick={() => setActiveFilter('MAPS')}>Maps</span>
                            <span className={activeFilter === 'NEWS' ? "text-primary border-b-2 border-primary pb-4 -mb-4.5" : "text-muted-foreground cursor-pointer"} onClick={() => setActiveFilter('NEWS')}>News</span>
                        </div>

                        <div className="flex-1 animate-in fade-in zoom-in-95 duration-300">
                            {activeFilter === 'ALL' && (
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-muted rounded"></div>
                                    <div className="h-20 w-full bg-muted/50 rounded"></div>
                                    <div className="h-4 w-1/2 bg-muted rounded pt-4"></div>
                                    <div className="h-20 w-full bg-muted/50 rounded"></div>
                                </div>
                            )}
                            {activeFilter === 'IMAGES' && (
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center"><ImageIcon className="text-muted-foreground/50" /></div>
                                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center"><ImageIcon className="text-muted-foreground/50" /></div>
                                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center"><ImageIcon className="text-muted-foreground/50" /></div>
                                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center"><ImageIcon className="text-muted-foreground/50" /></div>
                                </div>
                            )}
                            {activeFilter === 'MAPS' && (
                                <div className="w-full h-full bg-blue-50 dark:bg-blue-900/10 rounded-lg flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                                    <div className="text-center">
                                        <MapPin size={40} className="text-red-500 mx-auto animate-bounce" />
                                        <span className="text-xs text-muted-foreground">You are here</span>
                                    </div>
                                </div>
                            )}
                            {activeFilter === 'NEWS' && (
                                <div className="space-y-3">
                                    <div className="p-3 border border-border rounded hover:bg-muted/50">
                                        <div className="h-3 w-1/4 bg-muted mb-2 rounded"></div>
                                        <div className="h-4 w-full bg-muted rounded mb-1"></div>
                                        <div className="h-4 w-2/3 bg-muted rounded"></div>
                                    </div>
                                    <div className="p-3 border border-border rounded hover:bg-muted/50">
                                        <div className="h-3 w-1/4 bg-muted mb-2 rounded"></div>
                                        <div className="h-4 w-full bg-muted rounded mb-1"></div>
                                        <div className="h-4 w-2/3 bg-muted rounded"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* DEEP DIVE: GOOGLE OPERATORS */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-amber-500 text-amber-500">Power Tools</Badge>
                    <h2 className="text-3xl font-bold mb-4">Search Superpowers ⚡</h2>
                    <p className="text-muted-foreground">Add special symbols to tell Google EXACTLY what to do.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6 bg-card border hover:border-primary transition-colors">
                        <div className="text-4xl font-black text-primary mb-4">""</div>
                        <h3 className="text-xl font-bold mb-2">The Quotes</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Forces Google to search for this <strong>exact phrase</strong> in this exact order.
                        </p>
                        <div className="bg-muted p-2 rounded text-xs font-mono">
                            "to be or not to be"
                        </div>
                    </Card>
                    <Card className="p-6 bg-card border hover:border-destructive transition-colors">
                        <div className="text-4xl font-black text-destructive mb-4">-</div>
                        <h3 className="text-xl font-bold mb-2">The Minus</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            <strong>Excludes</strong> a word from results. Useful for removing ambiguity.
                        </p>
                        <div className="bg-muted p-2 rounded text-xs font-mono">
                            jaguar speed -car
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-1">(Finds the animal, ignores the car)</p>
                    </Card>
                </div>
            </section>

            {/* INTERACTIVE: SEARCH CHALLENGE */}
            <section className="container mx-auto px-4 max-w-3xl mb-20">
                <h2 className="text-2xl font-bold mb-8 text-center">Challenge: The Perfect Query 🏆</h2>

                <Card className="p-8 bg-slate-900 border-none text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full"></div>
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-4 text-center">
                            Goal: Find <span className="text-primary italic">baking recipes</span> but I <span className="text-destructive font-bold underline">HATE</span> chocolate.
                        </h3>

                        <div className="bg-white rounded-full p-1 pl-4 flex items-center max-w-lg mx-auto mb-6">
                            <Search className="text-slate-400 shrink-0 mr-2" />
                            <input
                                type="text"
                                placeholder="Type your search here..."
                                className="flex-1 bg-transparent border-none text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-0"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <Button onClick={handleSearch} size="sm" className="rounded-full px-6">Search</Button>
                        </div>

                        {searchResult === 'success' && (
                            <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-xl text-center animate-in zoom-in">
                                🎉 <strong>Perfect!</strong> You used "baking" and "-chocolate". Now you'll see vanilla, strawberry, and lemon cakes only!
                            </div>
                        )}
                        {searchResult === 'fail' && (
                            <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-xl text-center animate-in shake">
                                🍫 <strong>Ouch!</strong> You found baking recipes, but you didn't exclude chocolate. Try using the <strong>minus (-)</strong> sign.
                            </div>
                        )}
                    </div>
                </Card>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t3" />
            </div>
        </div>
    );
}



// --- TOPIC 10: SAFETY RECAP & FINALE ---
function Topic10_SafetyRecap() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold tracking-wide uppercase mb-6">
                        Module 13 • Finale
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                        You Are Now <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Digital Ready</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        You've learned the browser, search, email, cloud, and payments. You have the tools to explore the world safely.
                    </p>
                </div>
            </section>

            {/* BADGE CEREMONY */}
            <section className="container mx-auto px-4 flex justify-center">
                <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-1 rounded-[3rem] shadow-2xl hover:scale-105 transition-transform duration-500">
                    <div className="bg-black/20 p-12 rounded-[2.8rem] text-center border border-white/20 backdrop-blur-sm">
                        <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-900 mx-auto mb-6 shadow-lg shadow-yellow-500/50">
                            <ShieldCheck size={64} />
                        </div>
                        <h2 className="text-4xl font-bold mb-2">License to Web</h2>
                        <p className="text-indigo-200 mb-8">Digital Literacy Module Completed</p>
                        <div className="grid grid-cols-2 gap-4 text-left text-sm text-indigo-100">
                            <div className="flex items-center gap-2"><Check size={14} /> Safe Searching</div>
                            <div className="flex items-center gap-2"><Check size={14} /> Email Pro</div>
                            <div className="flex items-center gap-2"><Check size={14} /> Cloud Organized</div>
                            <div className="flex items-center gap-2"><Check size={14} /> Payment Secure</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={13} currentTopicId="m13-t10" />
            </div>
        </div>
    );
}

export default Module13;

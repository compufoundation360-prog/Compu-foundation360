import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlertTriangle, ArrowLeft, ArrowRight, ArrowDown, AtSign, Bold, BookOpen, Bot, Briefcase, Bug as BugIcon, Calculator, CheckCircle, Clock, Cpu, CreditCard, DollarSign, Eye, EyeOff, FileSpreadsheet, FileText, Filter, Flag, Footprints, Gamepad2, Ghost, Glasses, Globe, Heart, HelpCircle, History, Italic, LayoutTemplate, Leaf, Lock, Mail, MapPin, MessageSquare, Mic, Monitor, Moon, MousePointer, MousePointer2, Move, Paperclip, PenTool, PlusCircle, Presentation, Printer, QrCode, Rocket, Scale, ScanLine, Search, Send, Settings, Share2, Shield, Skull, Smartphone, SmartphoneNfc, Smile, SwitchCamera, Table, ThumbsDown, Trash2, Type, Underline, User, Users, UserCheck, UserMinus, UserX, Wallet, Wifi, XCircle, Bell, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { TopicNavigation } from "@/components/TopicNavigation";


// --- SHARED COMPONENTS ---
const SirenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-siren"><path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" /><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z" /><path d="M21 12h1" /><path d="M18.5 4.5 18 5" /><path d="M2 12h1" /><path d="M12 2v1" /><path d="m4.929 4.929.707.707" /><path d="M12 7a5 5 0 0 0-5 5v6h10v-6a5 5 0 0 0-5-5Z" /></svg>
);



// --- TOPIC 1 COMPONENTS ---

function Topic1_DigitalCitizenship() {
    const navigate = useNavigate();

    // --- INTERACTIVE STATE: AVATAR BUILDER ---
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [showProfileResult, setShowProfileResult] = useState(false);

    const avatarItems = [
        { id: "gamertag", label: "Cool Gamer Tag", icon: <Smartphone size={20} />, risk: "low" },
        { id: "hobby", label: "Favorite Hobby", icon: <Globe size={20} />, risk: "low" },
        { id: "address", label: "Home Address", icon: <MapPin size={20} />, risk: "high" },
        { id: "password", label: "My Password", icon: <Lock size={20} />, risk: "high" },
        { id: "meancomment", label: "A Mean Comment", icon: <MessageSquare size={20} />, risk: "reputation" },
        { id: "photo", label: "Photo of House", icon: <Search size={20} />, risk: "high" },
    ];

    const handleItemClick = (id: string) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const calculateRisk = () => {
        const highRisk = selectedItems.find(i => ["address", "password", "photo"].includes(i));
        const badRep = selectedItems.find(i => i === "meancomment");
        if (highRisk || badRep) return "risky";
        return "safe";
    };

    const riskResult = calculateRisk();

    // --- INTERACTIVE STATE: SCENARIO QUIZ ---
    const [quizFeedback, setQuizFeedback] = useState<"correct" | "wrong" | "neutral" | null>(null);

    return (
        <div className="space-y-20">
            {/* SECTION 0: HERO */}
            {/* SECTION 0: HERO */}
            <section className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Module 11 • Topic 1
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Citizenship</span> Basics
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            The internet is a country with billions of citizens. Your identity, rights, and safety depend on how you act online. Are you a good citizen?
                        </p>
                    </div>

                    {/* Hero Visual Card */}
                    <Card className="p-0 overflow-hidden rounded-[32px] border-4 border-indigo-100 dark:border-indigo-900/50 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                            {/* Abstract Composition */}
                            <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 animate-pulse">
                                    <Users className="text-indigo-100 w-12 h-12 mb-2" />
                                    <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 transform translate-y-8">
                                    <Shield className="text-purple-100 w-12 h-12 mb-2" />
                                    <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                                </div>
                                <div className="col-span-2 bg-white/20 backdrop-blur-xl p-6 rounded-3xl border border-white/30 text-center shadow-lg">
                                    <Globe className="text-white w-16 h-16 mx-auto mb-4" />
                                    <p className="text-white font-bold text-lg">Global Citizen</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 1: THE CONCEPT (Online Identity) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Who are you online?</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Your online identity is more than just your username. It is a mix of what you post, what you share, and what others see.
                    </p>

                    {/* NEW IMAGE CONTAINER */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        {/* Placeholder for real image */}
                        <img
                            src="/module-media/m11-t1-identity.jpg"
                            alt="Digital Identity Illustration"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                // Fallback if image missing
                                e.currentTarget.parentElement?.classList.add('bg-indigo-100');
                            }}
                        />
                        <div className="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg">
                            <User className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                            <p className="font-bold text-indigo-900">Visualizing Your Digital Self</p>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-left border-l-4 border-indigo-500">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            <strong>Definition:</strong> Digital Citizenship refers to the responsible use of technology by anyone who uses computers, the Internet, and digital devices to engage with society on any level. It is about more than just safety—it's about knowing how to use technology to improve the world around you.
                        </p>
                    </div>
                </div>

                {/* TEXT SECTION: THE 9 ELEMENTS */}
                <div className="max-w-6xl mx-auto mb-20">
                    <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
                        <BookOpen className="text-indigo-500 w-8 h-8" />
                        The 9 Elements of Digital Citizenship
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Access */}
                        <Card className="p-6 border-t-4 border-t-blue-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Wifi className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">1. Digital Access</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Not everyone has the same opportunities. Work to ensure everyone has equal access to technology and the internet, regardless of who they are or where they live.
                            </p>
                        </Card>

                        {/* 2. Commerce */}
                        <Card className="p-6 border-t-4 border-t-green-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <CreditCard className="text-green-600 dark:text-green-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">2. Digital Commerce</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Being a smart consumer. Understanding how to buy and sell safely online, spotting scams, and knowing your consumer rights in the digital marketplace.
                            </p>
                        </Card>

                        {/* 3. Communication */}
                        <Card className="p-6 border-t-4 border-t-purple-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageSquare className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">3. Digital Communication</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Understanding the different ways we talk online (email, text, social media) and knowing which one is appropriate for the situation.
                            </p>
                        </Card>

                        {/* 4. Literacy */}
                        <Card className="p-6 border-t-4 border-t-yellow-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen className="text-yellow-600 dark:text-yellow-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">4. Digital Literacy</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                The process of teaching and learning about technology. It's not just using a phone; it's understanding how to find, evaluate, and use information effectively.
                            </p>
                        </Card>

                        {/* 5. Etiquette */}
                        <Card className="p-6 border-t-4 border-t-pink-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Heart className="text-pink-600 dark:text-pink-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">5. Digital Etiquette</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Electronic standards of conduct. Just because you *can* say something online doesn't mean you *should*. Treat others with respect.
                            </p>
                        </Card>

                        {/* 6. Law */}
                        <Card className="p-6 border-t-4 border-t-red-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Scale className="text-red-600 dark:text-red-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">6. Digital Law</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                The rules of society apply online. Hacking, stealing photos, plagiarizing work, and identity theft are all crimes with real consequences.
                            </p>
                        </Card>

                        {/* 7. Rights & Responsibilities */}
                        <Card className="p-6 border-t-4 border-t-cyan-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Shield className="text-cyan-600 dark:text-cyan-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">7. Rights & Responsibility</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                You have the right to privacy and free speech, but you also have the responsibility to use technology in an appropriate manner.
                            </p>
                        </Card>

                        {/* 8. Health */}
                        <Card className="p-6 border-t-4 border-t-teal-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Eye className="text-teal-600 dark:text-teal-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">8. Health & Wellness</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Physical and psychological well-being. Eye strain, repetitive stress syndrome, and internet addiction are real issues to watch out for.
                            </p>
                        </Card>

                        {/* 9. Security */}
                        <Card className="p-6 border-t-4 border-t-indigo-500 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Lock className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">9. Digital Security</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Electronic precautions to guarantee safety. Using strong passwords, backing up data, and protecting your identity from thieves.
                            </p>
                        </Card>
                    </div>
                </div>

                {/* The Identity Iceberg Visual */}
                <Card className="max-w-3xl mx-auto overflow-hidden border-2 border-blue-100 dark:border-blue-900 shadow-xl relative bg-gradient-to-b from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-400/50 z-10"></div> {/* Water Line */}
                    <div className="p-12 text-center space-y-12">

                        {/* Above Water */}
                        <div className="space-y-4">
                            <div className="inline-block p-4 bg-white dark:bg-slate-700/50 rounded-2xl shadow-lg transform -rotate-2">
                                <h3 className="text-2xl font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
                                    <Eye className="w-6 h-6" /> The Visible You
                                </h3>
                                <p className="text-sm text-muted-foreground">Username, Profile Pic, Public Posts</p>
                            </div>
                        </div>

                        {/* Water Label */}
                        <div className="relative z-20">
                            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
                                🌊 The Public "Water" Line 🌊
                            </Badge>
                        </div>

                        {/* Below Water */}
                        <div className="space-y-4 pt-4 opacity-90">
                            <div className="inline-block p-4 bg-indigo-900/10 dark:bg-indigo-900/40 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                                <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                                    <Search className="w-6 h-6" /> The Hidden You
                                </h3>
                                <p className="text-sm text-foreground/80">Search History, Location, IP Address, Device Info</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 2: INTERACTIVE (Builder) */}
            <section className="container mx-auto px-4 py-12 bg-slate-50 dark:bg-slate-900/50 rounded-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Construct Your Digital Avatar</h2>
                    <p className="text-muted-foreground">
                        Select the items that you think are <span className="font-bold text-green-600">SAFE</span> to put on your public profile.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                    {avatarItems.map((item) => (
                        <Card
                            key={item.id}
                            onClick={() => !showProfileResult && handleItemClick(item.id)}
                            className={`p-6 cursor-pointer border-2 transition-all hover:scale-105 ${selectedItems.includes(item.id)
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 ring-2 ring-indigo-200 dark:ring-indigo-900'
                                : 'border-transparent hover:border-slate-300'
                                } ${showProfileResult ? 'opacity-80 pointer-events-none' : ''}`}
                        >
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className={`p-4 rounded-full ${selectedItems.includes(item.id) ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
                                    {item.icon}
                                </div>
                                <span className="font-bold text-lg">{item.label}</span>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    {!showProfileResult ? (
                        <Button
                            size="lg"
                            onClick={() => selectedItems.length > 0 && setShowProfileResult(true)}
                            disabled={selectedItems.length === 0}
                            className="px-12 py-6 text-xl rounded-full shadow-lg shadow-indigo-500/20"
                        >
                            Build Identity 🚀
                        </Button>
                    ) : (
                        <div className="animate-in zoom-in-50 duration-300 max-w-lg mx-auto">
                            <Card className={`p-8 border-l-4 ${riskResult === 'risky' ? 'border-l-red-500 bg-red-50 dark:bg-red-900/10' : 'border-l-green-500 bg-green-50 dark:bg-green-900/10'}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    {riskResult === 'risky' ? <AlertTriangle className="text-red-500 w-12 h-12" /> : <CheckCircle className="text-green-500 w-12 h-12" />}
                                    <h3 className="text-2xl font-bold">
                                        {riskResult === 'risky' ? "Warning: Risky Profile" : "Great Job! Safe Profile"}
                                    </h3>
                                </div>
                                <p className="text-lg leading-relaxed mb-6">
                                    {riskResult === 'risky'
                                        ? "Sharing private info like your Address, Password, or Photos of your house is dangerous. Also, mean comments can hurt your reputation forever!"
                                        : "You selected safe items! Hobbies and Gamer Tags are great ways to share your personality without giving away private secrets."}
                                </p>
                                <Button variant="outline" onClick={() => { setShowProfileResult(false); setSelectedItems([]); }}>
                                    Try Again
                                </Button>
                            </Card>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 3: COMPARISON (Rights vs Responsibilities) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Rights Card */}
                    <Card className="p-8 border-t-8 border-t-blue-500 shadow-xl hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-10 h-10 text-blue-500" />
                            <h3 className="text-3xl font-bold">Your Rights</h3>
                        </div>
                        <ul className="space-y-4 text-lg">
                            <li className="flex gap-3 items-start"><CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" /> To be safe and secure online</li>
                            <li className="flex gap-3 items-start"><CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" /> To keep your secrets private</li>
                            <li className="flex gap-3 items-start"><CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" /> To access information freely</li>
                        </ul>
                    </Card>

                    {/* Responsibilities Card */}
                    <Card className="p-8 border-t-8 border-t-purple-500 shadow-xl hover:-translate-y-1 transition-transform bg-slate-50 dark:bg-slate-900">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-10 h-10 text-purple-500" />
                            <h3 className="text-3xl font-bold">Your Duties</h3>
                        </div>
                        <ul className="space-y-4 text-lg">
                            <li className="flex gap-3 items-start"><CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" /> To respect others' differences</li>
                            <li className="flex gap-3 items-start"><CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" /> To report bullying when you see it</li>
                            <li className="flex gap-3 items-start"><CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" /> To give credit (cite sources)</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: THE PERMANENT RECORD */}
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto bg-black text-white rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-mono font-bold mb-8 text-green-400">
                            <Footprints className="inline-block mr-4 w-12 h-12" />
                            The Internet Never Forgets
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8 text-left">
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <p className="font-mono text-xs text-slate-500 mb-2">DATE: DEC 12, 2015</p>
                                <p className="text-slate-300">"School is so boring today! #hateit"</p>
                            </div>
                            <div className="flex items-center justify-center text-4xl text-slate-600">
                                <ArrowRight className="w-10 h-10" />
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 relative">
                                <div className="absolute -top-3 -right-3 bg-red-600 text-xs px-2 py-1 rounded font-bold">VISIBLE TODAY</div>
                                <p className="font-mono text-xs text-slate-500 mb-2">DATE: TODAY</p>
                                <p className="text-slate-300">"School is so boring today! #hateit"</p>
                            </div>
                        </div>
                        <p className="text-xl text-slate-400">
                            Even if you delete a post, a screenshot or server backup may exist forever. This is your <span className="text-green-400 font-bold">Digital Footprint</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: INTERACTIVE SCENARIO QUIZ */}
            <section className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-8">What would a Good Citizen do?</h2>
                <Card className="p-8 shadow-lg border-2 border-indigo-100 dark:border-indigo-900">
                    <h3 className="text-xl font-medium mb-8 flex gap-4">
                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold h-fit shrink-0">SCENARIO</span>
                        You see a friend sharing a fake news story about a celebrity on social media. It looks like a lie, but it's getting lots of likes.
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <Button
                            variant="outline"
                            className={`h-auto p-6 text-left justify-start gap-4 hover:border-red-400 hover:bg-red-50 ${quizFeedback === 'wrong' ? 'border-red-500 bg-red-50' : ''}`}
                            onClick={() => setQuizFeedback('wrong')}
                        >
                            <Share2 className="shrink-0" />
                            <div>
                                <span className="font-bold block">Share it too</span>
                                <span className="text-sm text-muted-foreground whitespace-normal">It's funny and popular!</span>
                            </div>
                        </Button>

                        <Button
                            variant="outline"
                            className={`h-auto p-6 text-left justify-start gap-4 hover:border-green-400 hover:bg-green-50 ${quizFeedback === 'correct' ? 'border-green-500 bg-green-50' : ''}`}
                            onClick={() => setQuizFeedback('correct')}
                        >
                            <BookOpen className="shrink-0" />
                            <div>
                                <span className="font-bold block">Check the source</span>
                                <span className="text-sm text-muted-foreground whitespace-normal">Tell them privately it might be fake.</span>
                            </div>
                        </Button>
                    </div>

                    {quizFeedback && (
                        <div className={`mt-6 p-4 rounded-xl animate-in fade-in slide-in-from-top-4 ${quizFeedback === 'correct' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                            <p className="font-bold text-lg mb-1">
                                {quizFeedback === 'correct' ? "Correct! 🎉" : "Not quite. 🛑"}
                            </p>
                            <p>
                                {quizFeedback === 'correct'
                                    ? "Good citizens stop the spread of misinformation. Checking sources helps everyone!"
                                    : "Sharing fake news spreads confusion and can hurt people. Always check before you share."}
                            </p>
                        </div>
                    )}
                </Card>
            </section>

            {/* FOOTER NAV */}
            <div className="pb-12">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t1" />
            </div>
        </div>
    );
}

// --- TOPIC 2: ONLINE ETIQUETTE ---


function Topic2_OnlineEtiquette() {
    const [commentQuality, setCommentQuality] = useState<"good" | "bad" | null>(null);

    return (
        <div className="space-y-20 pb-20">
            {/* HER0 */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Digital Manners
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">Etiquette</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            The internet is a public place. Learn the golden rules of respect, kindness, and clear communication online.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-emerald-100/50 dark:bg-emerald-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center transform rotate-2 hover:rotate-0 transition-all duration-700">
                            <MessageSquare size={120} className="text-emerald-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: DEFINITION & RULES (Standardized) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">What is "Netiquette"?</h2>
                    <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-left border-l-4 border-emerald-500 shadow-md">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            <strong>Definition:</strong> "Netiquette" (Network Etiquette) is the set of professional and social rules for communicating on the internet. It includes how we speak, how we share, and how we treat others in a digital space where we cannot see their faces.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
                        <BookOpen className="text-emerald-500" />
                        The Core Rules of Netiquette
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                                <User className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Remember the Human</h4>
                            <p className="text-sm text-muted-foreground">There is a real person with feelings behind every screen. If you wouldn't say it to their face, don't type it.</p>
                        </Card>
                        <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
                            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Know Where You Are</h4>
                            <p className="text-sm text-muted-foreground">Netiquette varies by domain. Texting a friend is different from emailing a teacher. Adapt your tone.</p>
                        </Card>
                        <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
                            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Respect Time</h4>
                            <p className="text-sm text-muted-foreground">Don't spam group chats. People are busy. Post relevant information and avoid unnecessary noise.</p>
                        </Card>
                        <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-orange-500">
                            <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Forgive Mistakes</h4>
                            <p className="text-sm text-muted-foreground">Everyone was a beginner once. Be kind to "newbies" who ask simple questions or make typo errors.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* IMAGE PLACEHOLDER: TROLL VS CITIZEN DIVIDER */}
            <section className="container mx-auto px-4">
                <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-12 group">
                    {/* Placeholder Image */}
                    <img
                        src="/module-media/m11-t2-netiquette.jpg"
                        alt="Good vs Bad Netiquette Illustration"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-r', 'from-emerald-100', 'to-blue-100');
                        }}
                    />
                    <div className="z-10 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-lg">
                        <p className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            <CheckCircle className="text-green-500" /> Positive Online Vibes
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: TROLL VS CITIZEN (Refined) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Who Do You Want to Be?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="p-8 border-t-8 border-red-500 bg-red-50/50 dark:bg-red-900/10 hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                                <span className="text-4xl">😈</span> The Troll
                            </h3>
                            <ul className="space-y-3 text-red-800 dark:text-red-200">
                                <li className="flex gap-2"><XCircle className="shrink-0" /> Posts mean comments just to hurt others.</li>
                                <li className="flex gap-2"><XCircle className="shrink-0" /> SHOUTS IN ALL CAPS (it looks like yelling).</li>
                                <li className="flex gap-2"><XCircle className="shrink-0" /> Spams the chat with "spam spam spam".</li>
                            </ul>
                        </Card>

                        <Card className="p-8 border-t-8 border-green-500 bg-green-50/50 dark:bg-green-900/10 hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                                <span className="text-4xl">😇</span> The Digital Citizen
                            </h3>
                            <ul className="space-y-3 text-green-800 dark:text-green-200">
                                <li className="flex gap-2"><CheckCircle className="shrink-0" /> Is polite, even when they disagree.</li>
                                <li className="flex gap-2"><CheckCircle className="shrink-0" /> Helps others find the right answer.</li>
                                <li className="flex gap-2"><CheckCircle className="shrink-0" /> Thinks before clicking "Send".</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: COMMENT SIMULATOR */}
            <section className="container mx-auto px-4 py-12">
                <Card className="max-w-3xl mx-auto p-12 bg-slate-900 text-white rounded-[40px] text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Test Your Skills</h2>
                        <div className="bg-white/10 p-6 rounded-2xl mb-8 text-left">
                            <p className="text-sm text-slate-400 mb-2">Post by @NewGamer123:</p>
                            <p className="text-xl">"Help! I keep losing on Level 1. This game is too hard! 😢"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button
                                className="h-auto p-6 flex flex-col items-center gap-2 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50"
                                onClick={() => setCommentQuality("bad")}
                            >
                                <span className="font-bold text-lg">"You're just a NOOB! Quit the game!"</span>
                            </Button>
                            <Button
                                className="h-auto p-6 flex flex-col items-center gap-2 bg-green-500/20 hover:bg-green-500/40 border-green-500/50 border"
                                onClick={() => setCommentQuality("good")}
                            >
                                <span className="font-bold text-lg">"Don't give up! Try jumping earlier."</span>
                            </Button>
                        </div>

                        {commentQuality === 'good' && (
                            <div className="mt-8 p-4 bg-green-600 rounded-xl animate-in zoom-in">
                                <h4 className="font-bold text-xl">Great Job! 🎉</h4>
                                <p>That was helpful and encouraging. You just made someone's day better.</p>
                            </div>
                        )}
                        {commentQuality === 'bad' && (
                            <div className="mt-8 p-4 bg-red-600 rounded-xl animate-in zoom-in">
                                <h4 className="font-bold text-xl">Not Cool. 🛑</h4>
                                <p>Calling names hurts feelings and solves nothing. Try being helpful instead.</p>
                            </div>
                        )}
                    </div>
                </Card>
            </section>

            {/* SECTION 3: THE GOLDEN RULE (T.H.I.N.K) */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-8 rounded-[32px]">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Before You Post... THINK!</h2>
                        <p className="text-muted-foreground">Ask yourself these five questions.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { letter: "T", word: "True?", desc: "Is it a fact or a rumor?" },
                            { letter: "H", word: "Helpful?", desc: "Does it help anyone?" },
                            { letter: "I", word: "Inspiring?", desc: "Does it lift people up?" },
                            { letter: "N", word: "Necessary?", desc: "Does it really need to be said?" },
                            { letter: "K", word: "Kind?", desc: "Is it nice?" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-5xl font-black text-emerald-200 dark:text-emerald-900 mb-2">{item.letter}</div>
                                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{item.word}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: HANDLING CONFLICT */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10 bg-red-50 dark:bg-red-900/10 rounded-3xl shadow-xl w-full aspect-video flex items-center justify-center border-2 border-red-100 dark:border-red-900 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Shield size={80} className="text-red-400" />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold">When Things Get Heated🔥</h2>
                        <p className="text-lg text-muted-foreground">
                            Sometimes people are mean online. Here is your shield against toxicity.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="text-2xl">✋</span>
                                <div>
                                    <h4 className="font-bold">1. Don't Reply</h4>
                                    <p className="text-sm text-muted-foreground">Trolls want attention. Don't feed them.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="text-2xl">📸</span>
                                <div>
                                    <h4 className="font-bold">2. Screenshot It</h4>
                                    <p className="text-sm text-muted-foreground">Save the proof in case you need to show an adult.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="text-2xl">🚫</span>
                                <div>
                                    <h4 className="font-bold">3. Block & Report</h4>
                                    <p className="text-sm text-muted-foreground">Use the platform's tools to make them disappear.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DIGITAL BODY LANGUAGE */}
            <section className="container mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">It's Not What You Say...</h2>
                    <p className="text-muted-foreground">It's *how* you type it. Text has no tone of voice!</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 border-l-4 border-l-blue-500">
                        <div className="font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded mb-4 text-center">"Nice job."</div>
                        <h4 className="font-bold mb-2">The Period</h4>
                        <p className="text-sm text-muted-foreground">Can sound serious, cold, or sarcastic. Be careful!</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-yellow-500">
                        <div className="font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded mb-4 text-center">"NICE JOB!!!"</div>
                        <h4 className="font-bold mb-2">All Caps</h4>
                        <p className="text-sm text-muted-foreground">Looks like you are YELLING. Use sparingly for excitement.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-500">
                        <div className="font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded mb-4 text-center">"Nice job! 😄"</div>
                        <h4 className="font-bold mb-2">Emojis</h4>
                        <p className="text-sm text-muted-foreground">The best way to show you are friendly and joking.</p>
                    </Card>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t2" />
            </div>
        </div>
    );
}

// --- TOPIC 3: DATA PRIVACY ---

function Topic3_DataPrivacy() {
    const [permissions, setPermissions] = useState({ loc: true, mic: true, contacts: true });

    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Protect Yourself
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Privacy</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Your personal information is like digital gold. Companies want it. Hackers want it. Learn how to keep it safe.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-purple-100/50 dark:bg-purple-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center transform -rotate-1 hover:rotate-0 transition-all duration-700">
                            <Lock size={120} className="text-purple-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: WHAT IS PERSONAL DATA? (Enhanced) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Understanding PII</h2>
                    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl text-left border-l-4 border-purple-500 shadow-md">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            <strong>Definition:</strong> Personally Identifiable Information (PII) is any data that can be used to identify a specific person.
                            If someone puts these puzzle pieces together, they can steal your identity.
                        </p>
                    </div>
                </div>

                {/* VISUAL PII GRID */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {["Full Name", "Home Address", "Phone Number", "School Name", "Date of Birth", "Photos of House", "Parent's Work", "Passwords"].map((item, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-4 text-center hover:-translate-y-2 transition-transform group">
                            <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <Lock size={24} />
                            </div>
                            <span className="font-bold text-lg">{item}</span>
                        </div>
                    ))}
                </div>

                {/* THREATS GRID */}
                <div className="max-w-6xl mx-auto mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
                        <Shield className="text-purple-500" />
                        Types of Digital Thieves
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-t-4 border-purple-500 hover:shadow-lg">
                            <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Mail className="text-purple-500" /> Phishing</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Fake emails that look like they are from your bank or school, asking you to click a link and "verify" your password.
                            </p>
                        </Card>
                        <Card className="p-6 border-t-4 border-red-500 hover:shadow-lg">
                            <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><BugIcon className="text-red-500" /> Malware</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Malicious software (Viruses) that hides in free game downloads. It can steal files or spy on your keystrokes.
                            </p>
                        </Card>
                        <Card className="p-6 border-t-4 border-orange-500 hover:shadow-lg">
                            <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Wifi className="text-orange-500" /> Man-in-the-Middle</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Hackers sitting on public WiFi (like at a cafe) intercepting the data you send, like passwords and credit card numbers.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: PERMISSION SIMULATOR */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Smartphone /> App Permissions
                        </h3>
                        <p className="mb-6 text-slate-400">
                            You just installed a "Flashlight App". Why does it need all this? Turn OFF the permissions it doesn't need!
                        </p>

                        <div className="space-y-4 bg-black/29 p-6 rounded-2xl">
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-blue-400" /> Location
                                </div>
                                <Switch checked={permissions.loc} onCheckedChange={(v) => setPermissions({ ...permissions, loc: v })} />
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                                <div className="flex items-center gap-3">
                                    <Mic className="text-red-400" /> Microphone
                                </div>
                                <Switch checked={permissions.mic} onCheckedChange={(v) => setPermissions({ ...permissions, mic: v })} />
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                                <div className="flex items-center gap-3">
                                    <Users className="text-green-400" /> Contacts
                                </div>
                                <Switch checked={permissions.contacts} onCheckedChange={(v) => setPermissions({ ...permissions, contacts: v })} />
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            {!permissions.loc && !permissions.mic && !permissions.contacts ? (
                                <div className="text-green-400 font-bold animate-pulse">Based! A Flashlight doesn't need your data.</div>
                            ) : (
                                <div className="text-red-400 text-sm">Review carefully! Does a light need your location?</div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Privacy Paradox</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            "Free" apps are rarely free. If you don't pay with money, you often pay with your <strong>data</strong>.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Companies collect your data to build a profile about you and sell it to advertisers. That's why you see ads for things you just talked about!
                        </p>
                        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 rounded-r-xl">
                            <p className="font-bold text-yellow-800 dark:text-yellow-200">
                                Always ask: "Does this game REALLY need to know where I live?"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: PASSWORD POWER */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-bold uppercase tracking-wider mb-6">
                                <Shield size={14} /> Security Check
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Is Your Password Weak?</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-4">
                                    <XCircle className="text-red-400 shrink-0" />
                                    <div>
                                        <div className="font-mono text-lg line-through text-red-300">password123</div>
                                        <div className="text-xs text-slate-400">Too common. Hackers guess this in 0.1 seconds.</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl flex items-center gap-4">
                                    <AlertTriangle className="text-yellow-400 shrink-0" />
                                    <div>
                                        <div className="font-mono text-lg text-yellow-300">Fluffy2010</div>
                                        <div className="text-xs text-slate-400">Better, but pet names + dates are easy to find.</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-4">
                                    <CheckCircle className="text-green-400 shrink-0" />
                                    <div>
                                        <div className="font-mono text-lg text-green-300">Pjz!9#RunFast</div>
                                        <div className="text-xs text-slate-400">Strong! Mix of letters, numbers, and symbols.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Recipe for a Strong Password</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl mb-2">🔡</div>
                                    <div className="font-bold">Mix Case</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl mb-2">#️⃣</div>
                                    <div className="font-bold">Numbers</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl mb-2">$&@</div>
                                    <div className="font-bold">Symbols</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl mb-2">📏</div>
                                    <div className="font-bold">Long</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE COOKIE MONSTER */}
            <section className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-32 h-32 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-6xl shadow-inner shrink-0">
                        🍪
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">What are Digital Cookies?</h2>
                        <p className="text-amber-800 dark:text-amber-200 leading-relaxed mb-4">
                            Not the tasty kind! Digital cookies are tiny files websites save on your computer. They remember things like your login or what's in your shopping cart.
                        </p>
                        <div className="flex gap-2">
                            <Badge variant="outline" className="border-amber-500 text-amber-700 bg-amber-100">Good Cookies: Remember logins</Badge>
                            <Badge variant="outline" className="border-red-500 text-red-700 bg-red-100">Bad Cookies: Track you across the web</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: DEEP DIVE - HOW DATA IS COLLECTED */}
            <section className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="text-center">
                        <Badge variant="outline" className="mb-4 border-indigo-500 text-indigo-500">DEEP DIVE</Badge>
                        <h2 className="text-3xl font-bold mb-4">How Data is Collected: The Invisible Eye</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            It happens in two ways: What you <span className="text-green-600 font-bold">GIVE</span> willingly, and what they <span className="text-red-500 font-bold">TAKE</span> silently.
                        </p>
                    </div>

                    {/* 1. ACTIVE VS PASSIVE GRID */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Active Collection */}
                        <Card className="p-8 border-t-8 border-green-500 bg-green-50/50 dark:bg-green-900/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm text-green-600">
                                    <PenTool size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Active Data</h3>
                                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">Visible</p>
                                </div>
                            </div>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">
                                This is information you <strong>manually type</strong> into forms. You know you are engaging.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Your Name & Email</li>
                                <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Your Password</li>
                                <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Photos you upload</li>
                            </ul>
                        </Card>

                        {/* Passive Collection */}
                        <Card className="p-8 border-t-8 border-red-500 bg-red-50/50 dark:bg-red-900/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm text-red-500">
                                    <Ghost size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Passive Data</h3>
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Invisible</p>
                                </div>
                            </div>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">
                                This is data captured <strong>silently</strong> in the background without you clicking anything.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm"><Eye size={16} className="text-red-500" /> Your IP Address (Location)</li>
                                <li className="flex items-center gap-2 text-sm"><Eye size={16} className="text-red-500" /> Phone Model & Battery Level</li>
                                <li className="flex items-center gap-2 text-sm"><Eye size={16} className="text-red-500" /> How long you look at an ad</li>
                            </ul>
                        </Card>
                    </div>

                    {/* 2. THE TALE OF TWO COOKIES */}
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold mb-6 text-center">🍪 The Tale of Two Cookies</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* First Party */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-4">First-Party Cookie</Badge>
                                <h4 className="font-bold text-lg mb-2">The "Helpful" Butler</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    This cookie belongs to the site you are visiting (e.g., Amazon).
                                </p>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-sm italic text-green-800 dark:text-green-300">
                                    "I'll remember that you put those shoes in the cart so they are still there when you come back!"
                                </div>
                            </div>

                            {/* Third Party */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <Badge className="bg-red-100 text-red-700 hover:bg-red-100 mb-4">Third-Party Cookie</Badge>
                                <h4 className="font-bold text-lg mb-2">The "Stalker" Spy</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    This cookie belongs to an Ad Company (e.g., Google/Facebook) embedded on the site.
                                </p>
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-sm italic text-red-800 dark:text-red-300">
                                    "I saw you look at shoes on Site A. Now I will follow you to Site B and Site C to show you Shoe Ads."
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. TRACKING PIXELS */}
                    <div className="border-t pt-12">
                        <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                            <ScanLine className="text-purple-500" /> The Invisible Tracking Pixel
                        </h3>
                        <div className="relative bg-black text-white p-8 rounded-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px]"></div>

                            <div className="grid md:grid-cols-4 gap-4 items-center relative z-10 text-center md:text-left">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center text-center gap-2">
                                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                                        <Mail size={32} />
                                    </div>
                                    <p className="text-xs font-bold text-slate-400">STEP 1</p>
                                    <p className="text-sm">You open a Marketing Email</p>
                                </div>

                                {/* Arrow */}
                                <div className="hidden md:flex justify-center text-slate-600"><ArrowRight /></div>

                                {/* Step 2 */}
                                <div className="flex flex-col items-center text-center gap-2">
                                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-purple-400 border-2 border-dashed border-purple-500">
                                        <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                                    </div>
                                    <p className="text-xs font-bold text-slate-400">STEP 2</p>
                                    <p className="text-sm">A 1x1 invisible image loads</p>
                                </div>

                                {/* Arrow */}
                                <div className="hidden md:flex justify-center text-slate-600"><ArrowRight /></div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center text-center gap-2">
                                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-green-400">
                                        <Bot size={32} />
                                    </div>
                                    <p className="text-xs font-bold text-slate-400">STEP 3</p>
                                    <p className="text-sm">Server records: "Open at 10:05 AM"</p>
                                </div>
                            </div>

                            <div className="mt-8 bg-purple-500/20 border border-purple-500/50 p-4 rounded-xl text-center text-sm text-purple-200">
                                <strong>Translation:</strong> Companies know exactly when you opened their email, where you were, and what device you used—even if you didn't click anything!
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 5: 2FA EXPLAINED */}
            <section className="container mx-auto px-4 py-8 mb-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Double Lock Your Door (2FA)</h2>
                    <p className="text-muted-foreground">Two-Factor Authentication is the best way to stop hackers.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 -z-10 hidden md:block"></div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 z-10 box-content border-4 border-white dark:border-slate-800">
                                <Lock size={32} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">1. Password</h4>
                            <p className="text-sm text-muted-foreground">Something you KNOW.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 z-10 box-content border-4 border-white dark:border-slate-800">
                                <Smartphone size={32} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">2. Code</h4>
                            <p className="text-sm text-muted-foreground">Something you HAVE (your phone).</p>
                        </div>

                        {/* Result */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 z-10 box-content border-4 border-white dark:border-slate-800">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Access Granted</h4>
                            <p className="text-sm text-muted-foreground">Even if they steal your password, they can't get in!</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t3" />
            </div>
        </div>
    );
}

// --- TOPIC 4: SAFE SOCIAL MEDIA ---

function Topic4_SafeSocialMedia() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Social Smarts
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Safe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Socials</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Instagram, Snapchat, YouTube. They are fun, but they have traps. Learn to control your feed before it controls you.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-blue-100/50 dark:bg-blue-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center transform rotate-2 hover:rotate-0 transition-all duration-700">
                            <Share2 size={120} className="text-blue-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: THE ALGORITHM (NEW) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">How the Feed Works</h2>
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-left border-l-4 border-blue-500 shadow-md">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            <strong>Definition:</strong> The "Algorithm" is a computer program that decides what videos or posts you see.
                            It is designed to keep you glued to your screen for as long as possible by showing you things that make you react.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="p-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl mb-4">♾️</div>
                        <h3 className="font-bold text-xl mb-2">Infinite Scroll</h3>
                        <p className="text-sm text-muted-foreground">Apps don't have a "Stop" sign. You can scroll forever, losing track of time.</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl mb-4">🧼</div>
                        <h3 className="font-bold text-xl mb-2">Filter Bubbles</h3>
                        <p className="text-sm text-muted-foreground">If you click on one cat video, the app will ONLY show you cat videos. You miss out on everything else.</p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl mb-4">🎣</div>
                        <h3 className="font-bold text-xl mb-2">Clickbait</h3>
                        <p className="text-sm text-muted-foreground">Titles that lie (e.g., "YOU WON'T BELIEVE THIS!") just to get your click.</p>
                    </Card>
                </div>
            </section>

            {/* IMAGE PLACEHOLDER: SOCIAL MEDIA TRAPS */}
            <section className="container mx-auto px-4">
                <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-12 group">
                    {/* Placeholder Image */}
                    <img
                        src="/module-media/m11-t4-socials.jpg"
                        alt="Social Media Algorithm Illustration"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-r', 'from-blue-100', 'to-purple-100');
                        }}
                    />
                    <div className="z-10 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-lg">
                        <p className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            <Filter className="text-blue-500" /> Control Your Feed
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PUBLIC VS PRIVATE */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-t-8 border-red-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-100 rounded-full text-red-600"><Globe size={32} /></div>
                            <h3 className="text-2xl font-bold">Public Account</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Anyone in the world can see your photos, save them, and contact you.
                        </p>
                        <p className="text-sm font-bold text-red-500">Recommended for: Businesses & Celebrities ONLY.</p>
                    </Card>

                    <Card className="p-8 border-t-8 border-green-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-100 rounded-full text-green-600"><Lock size={32} /></div>
                            <h3 className="text-2xl font-bold">Private Account</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Only people you approve can see your posts. You are in control.
                        </p>
                        <p className="text-sm font-bold text-green-500">Recommended for: YOU!</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: RED FLAGS */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-10">Spot the Fake Profiles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "No Profile Pic", desc: "Or a generic image found on Google.", icon: <UserX /> },
                        { title: "Generic Name", desc: "Names like 'User12345' or random letters.", icon: <Type /> },
                        { title: "Asking for Money", desc: "Strangers asking for help or offering 'free' prizes.", icon: <DollarSign /> },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="text-orange-500 mb-4 bg-orange-100 p-4 rounded-full">{item.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: OVERSHARING METER (INTERACTIVE) */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-[32px] p-8 md:p-12 text-white text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-6">The "Overshare" Check</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Some things should NEVER be online. Can you spot the dangerous posts?
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                        <div className="bg-white text-slate-900 p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                <div>
                                    <div className="font-bold text-sm">Me</div>
                                    <div className="text-xs text-slate-500">Just now</div>
                                </div>
                            </div>
                            <p className="mb-4">"Loving this ice cream! 🍦 #SummerVibes"</p>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-center text-green-600 font-bold flex items-center justify-center gap-2">
                                <CheckCircle size={18} /> Safe to Post
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                <div>
                                    <div className="font-bold text-sm">Me</div>
                                    <div className="text-xs text-slate-500">Just now</div>
                                </div>
                            </div>
                            <p className="mb-4">"Home alone for the weekend! Parents are away! 🏠🎉"</p>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-center text-red-600 font-bold flex items-center justify-center gap-2">
                                <XCircle size={18} /> DANGEROUS!
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                <div>
                                    <div className="font-bold text-sm">Me</div>
                                    <div className="text-xs text-slate-500">Just now</div>
                                </div>
                            </div>
                            <p className="mb-4">"So excited for the trip! Leaving tomorrow at 6AM! ✈️"</p>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-center text-red-600 font-bold flex items-center justify-center gap-2">
                                <XCircle size={18} /> Too Much Info
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE COMPARISON TRAP */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6">
                        <h2 className="text-3xl font-bold">Real Life vs. The Feed</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            People only post their *best* moments. You don't see the bad hair days, the failed tests, or the boring afternoons.
                        </p>
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 border-l-4 border-blue-500 rounded-r-xl">
                            <p className="font-medium italic text-slate-700 dark:text-slate-300">
                                "Don't compare your Behind-the-Scenes with someone else's Highlight Reel."
                            </p>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Filter size={20} /></div>
                                <span>Photos are often edited or filtered.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Heart size={20} /></div>
                                <span>Likes do not measure your worth.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10 bg-slate-100 dark:bg-slate-800 rounded-3xl shadow-xl w-full aspect-square flex items-center justify-center border border-slate-200 dark:border-slate-700">
                            <Heart size={80} className="text-blue-300" />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce">
                            <span className="text-2xl">✨</span> Filters
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 animate-pulse">
                            <span className="text-2xl">🎬</span> Staged
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: GEO-TAGGING WARNING */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 p-8 rounded-[32px] text-white flex flex-col md:flex-row items-center gap-8 border border-slate-800">
                    <div className="bg-red-500/20 p-6 rounded-full animate-pulse">
                        <MapPin size={48} className="text-red-500" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Turn Off Location Tags! 📍</h3>
                        <p className="text-slate-400">
                            When you add a specific location (like "Central Park School") to your post, you are creating a map for strangers to find you. Keep it vague (like "NYC") or don't tag at all.
                        </p>
                    </div>
                    <div className="hidden md:block text-5xl opacity-20">🗺️</div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t4" />
            </div>
        </div>
    );
}

// --- MAIN MODULE 11 PAGE COMPONENT ---

export function Module11() {
    const { topicId } = useParams();

    // Routing
    if (topicId === "1" || topicId === "m11-t1") return <Topic1_DigitalCitizenship />;
    if (topicId === "2" || topicId === "m11-t2") return <Topic2_OnlineEtiquette />;
    if (topicId === "3" || topicId === "m11-t3") return <Topic3_DataPrivacy />;
    if (topicId === "4" || topicId === "m11-t4") return <Topic4_SafeSocialMedia />;

    if (topicId === "5" || topicId === "m11-t5") return <Topic5_UPIOnlinePaymentsSafety />;
    if (topicId === "6" || topicId === "m11-t6") return <Topic6_DigitalFootprint />;
    if (topicId === "7" || topicId === "m11-t7") return <Topic7_CyberbullyingAwareness />;
    if (topicId === "8" || topicId === "m11-t8") return <Topic8_ResponsibleDeviceUsage />;
    if (topicId === "9" || topicId === "m11-t9") return <Topic9_FakeNewsDetection />;
    if (topicId === "10" || topicId === "m11-t10") return <Topic10_EthicalBehaviorOnline />;

    // Placeholder for future topics (Bonus)
    if (topicId === "bonus" || topicId === "m11-tbonus") return <Topic_BonusFutureTech />;

    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <div className="inline-block p-6 bg-slate-100 dark:bg-slate-900 rounded-full mb-4">
                <Clock size={48} className="text-slate-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Select a Topic</h2>
            <p className="text-muted-foreground">Choose a topic from the sidebar to begin learning.</p>
        </div>
    );
}

export default Module11;

// --- TOPIC 8: RESPONSIBLE DEVICE USAGE ---

function Topic8_ResponsibleDeviceUsage() {
    const [usageStats, setUsageStats] = useState({ gaming: 4, study: 1, sleep: 7 });
    const healthScore = Math.min(100, Math.max(0, (usageStats.study * 10 + usageStats.sleep * 10 - usageStats.gaming * 5)));

    return (
        <div className="space-y-12 pb-20 fade-in animate-in slide-in-from-bottom-4 duration-700">
            {/* HERO MATCHING MODULE 2 STYLE */}
            <section className="relative overflow-hidden pt-10 pb-10">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Module 11 Topic 8
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-foreground leading-tight">
                            Responsible <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Device Usage</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Mastering the balance between digital life and real life. Be the pilot, not the passenger.
                        </p>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                        <Scale size={180} className="text-emerald-500 relative z-10 drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE DOPAMINE LOOP (Zig-Zag Left) */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
                    <Card className="p-8 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-100 dark:border-emerald-900 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Brain size={24} /></div>
                            The Dopamine Loop
                        </h3>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            Apps are engineered to keep you hooked using the <strong>"Slot Machine Effect"</strong>. Every time you swipe down to refresh, your brain releases dopamine, hoping for a reward (a like, a message, a funny video).
                        </p>
                        <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-natural-200 dark:border-natural-800">
                            <strong className="block text-sm text-emerald-700 dark:text-emerald-400 mb-1">Key Insight:</strong>
                            <span className="text-sm">Infinite scrolling removes "stopping cues," making it harder for your brain to realize it's time to stop.</span>
                        </div>
                    </Card>
                    <Card className="p-8 bg-card flex items-center justify-center border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
                        <div className="flex flex-col items-center gap-6 relative z-10">
                            <div className="p-4 bg-emerald-100 dark:bg-emerald-900 rounded-full animate-bounce">
                                <Smile size={48} className="text-emerald-600 dark:text-emerald-300" />
                            </div>
                            <ArrowDown className="text-slate-400" />
                            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full">
                                <Bell size={48} className="text-slate-600 dark:text-slate-300" />
                            </div>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Cycle Repeats</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: HEALTH IMPACTS (Zig-Zag Right) */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
                    <Card className="p-8 bg-card flex items-center justify-center border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="text-center p-4 bg-red-50 dark:bg-red-900/10 rounded-xl">
                                <Eye className="w-8 h-8 mx-auto text-red-500 mb-2" />
                                <span className="text-xs font-bold block">Eye Strain</span>
                            </div>
                            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl">
                                <Moon className="w-8 h-8 mx-auto text-orange-500 mb-2" />
                                <span className="text-xs font-bold block">No Sleep</span>
                            </div>
                            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl">
                                <Move className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                                <span className="text-xs font-bold block">Neck Pain</span>
                            </div>
                            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl">
                                <Brain className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                                <span className="text-xs font-bold block">Brain Fog</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-8 bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-100 dark:border-red-900 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg text-red-600"><AlertTriangle size={24} /></div>
                            Physical Toll
                        </h3>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            "Technostress" affects your body. The blue light from screens tricks your brain into thinking it's daytime, destroying your sleep quality (Melatonin suppression).
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle size={16} className="text-red-500" /> <strong>20-20-20 Rule:</strong> Every 20 mins, look 20 ft away for 20 secs.</li>
                            <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle size={16} className="text-red-500" /> <strong>Night Mode:</strong> Always enable warm light after sunset.</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: INTERACTIVE BALANCE CALCULATOR (Full Width Card) */}
            <section className="container mx-auto px-4">
                <Card className="p-8 md:p-12 overflow-hidden border-slate-200 dark:border-slate-800 shadow-lg relative bg-card">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Daily Balance Audit</h2>
                        <p className="text-muted-foreground">Adjust the sliders to see if your day is balanced.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold flex justify-between">
                                    <span className="flex items-center gap-2"><Gamepad2 size={16} className="text-red-500" /> Entertainment</span>
                                    <span>{usageStats.gaming} hrs</span>
                                </label>
                                <input
                                    type="range" min="0" max="12" step="1"
                                    value={usageStats.gaming}
                                    onChange={(e) => setUsageStats(prev => ({ ...prev, gaming: parseInt(e.target.value) }))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold flex justify-between">
                                    <span className="flex items-center gap-2"><BookOpen size={16} className="text-blue-500" /> Learning / Work</span>
                                    <span>{usageStats.study} hrs</span>
                                </label>
                                <input
                                    type="range" min="0" max="12" step="1"
                                    value={usageStats.study}
                                    onChange={(e) => setUsageStats(prev => ({ ...prev, study: parseInt(e.target.value) }))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold flex justify-between">
                                    <span className="flex items-center gap-2"><Moon size={16} className="text-purple-500" /> Sleep</span>
                                    <span>{usageStats.sleep} hrs</span>
                                </label>
                                <input
                                    type="range" min="0" max="12" step="1"
                                    value={usageStats.sleep}
                                    onChange={(e) => setUsageStats(prev => ({ ...prev, sleep: parseInt(e.target.value) }))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-40 h-40 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full border-4 border-slate-200 dark:border-slate-700">
                                <div className={`text-4xl font-bold ${healthScore > 60 ? 'text-emerald-500' : healthScore > 30 ? 'text-orange-500' : 'text-red-500'}`}>
                                    {healthScore}
                                </div>
                                <span className="absolute bottom-8 text-[10px] uppercase text-slate-400 font-bold">Health Score</span>
                            </div>
                            <p className="mt-4 text-center font-bold text-lg">
                                {healthScore > 80 ? "🏆 Digital Master" : healthScore > 50 ? "⚖️ Balanced" : "⚠️ Burnout Risk"}
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            <TopicNavigation currentModuleId={11} currentTopicId="m11-t8" />
        </div>
    );
}

// --- TOPIC 9: FAKE NEWS DETECTION (Revised Visuals) ---

function Topic9_FakeNewsDetection() {
    const [newsVerdict, setNewsVerdict] = useState<"fake" | "real" | null>(null);

    return (
        <div className="space-y-12 pb-20 fade-in animate-in slide-in-from-bottom-4 duration-700">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-10">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Module 11 Topic 9
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-foreground leading-tight">
                            Detecting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Fake News</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Truth is the new currency. Learn the skills to investigate, verify, and validate information online.
                        </p>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>
                        <Search size={180} className="text-orange-500 relative z-10 drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* SECTION 1: ANATOMY OF FAKE NEWS (Zig-Zag Left) */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
                    <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-100 dark:border-orange-900 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><AlertTriangle size={24} /></div>
                            The 4 Signs of a Lie
                        </h3>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            Fake news creators use specific tricks to bypass your logic and appeal to your emotions. If an article makes you extremely <span className="text-red-500 font-bold">ANGRY</span> or extremely <span className="text-green-500 font-bold">HAPPY</span>, pause and verify.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                <strong className="block text-red-600">1. Weird URL</strong>
                                .xyz, .co, .net-offers
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                <strong className="block text-red-600">2. ALL CAPS</strong>
                                YELLING = DESPERATION
                            </div>
                        </div>
                    </Card>
                    <Card className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm rotate-2 hover:rotate-0 transition-transform">
                        <div className="border-b pb-2 mb-2 flex justify-between text-[10px] text-slate-400">
                            <span>ScamNews.xyz</span>
                            <span>Just Now</span>
                        </div>
                        <h4 className="font-black text-red-600 mb-2 leading-tight uppercase">ALIENS FOUND IN NEW YORK?! 👽</h4>
                        <div className="h-20 bg-slate-100 dark:bg-slate-800 rounded mb-2"></div>
                        <div className="w-full py-2 bg-red-600 text-white text-center font-bold text-xs rounded">CLICK HERE</div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: DEEPFAKES (Zig-Zag Right) */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
                    <Card className="p-0 overflow-hidden bg-card border-slate-200 dark:border-slate-800 shadow-sm relative">
                        <div className="absolute inset-0 bg-purple-500/10"></div>
                        <div className="h-full flex flex-col items-center justify-center p-8 text-center text-purple-800 dark:text-purple-300">
                            <Bot size={64} className="mb-4" />
                            <h4 className="font-bold text-xl">AI Generated Video</h4>
                            <p className="text-sm mt-2 opacity-80">"I never said that!"</p>
                        </div>
                    </Card>
                    <Card className="p-8 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border-purple-100 dark:border-purple-900 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><ScanLine size={24} /></div>
                            Deepfakes & AI
                        </h3>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            Seeing is NO LONGER believing. Artificial Intelligence can swap faces and synthesize voices with 99% accuracy.
                        </p>
                        <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl">
                            <strong className="block text-sm text-purple-700 dark:text-purple-400 mb-2">How to Spot It:</strong>
                            <ul className="space-y-1 text-sm text-foreground/80">
                                <li className="flex items-center gap-2">👁️ Unnatural blinking patterns</li>
                                <li className="flex items-center gap-2">👄 Lip sync is slightly off</li>
                                <li className="flex items-center gap-2">🌫️ Blurry edges around face/neck</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: THE GAME (Full Width) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Investigator Challenge</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Card className="p-8 border-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-slate-300 dark:bg-slate-700"></div>
                        <div className="pl-6">
                            <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Incoming News Feed Item</p>
                            <h3 className="text-xl font-bold mb-2">"Scientists Confirm: The Moon is Made of Cheese 🧀"</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                Source: www.nasa-official-news.net.co <br />
                                Released: Today
                            </p>

                            <div className="flex gap-4">
                                <Button
                                    className={`flex-1 h-14 text-lg font-bold border-2 ${newsVerdict === 'real' ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                                    variant="ghost"
                                    onClick={() => setNewsVerdict('real')}
                                >
                                    Verify as REAL
                                </Button>
                                <Button
                                    className={`flex-1 h-14 text-lg font-bold border-2 ${newsVerdict === 'fake' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                                    variant="ghost"
                                    onClick={() => setNewsVerdict('fake')}
                                >
                                    Report as FAKE
                                </Button>
                            </div>

                            {newsVerdict && (
                                <div className={`mt-6 p-4 rounded-xl animate-in zoom-in slide-in-from-bottom-2 ${newsVerdict === 'fake' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {newsVerdict === 'fake'
                                        ? "✅ CORRECT! The URL (.net.co) is a dead giveaway. NASA's only site is nasa.gov."
                                        : "❌ INCORRECT! Look closely at the URL. Always check the official source."}
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </section>

            <TopicNavigation currentModuleId={11} currentTopicId="m11-t9" />
        </div>
    );
}

// --- TOPIC 10: ETHICAL BEHAVIOR ONLINE ---

function Topic10_EthicalBehaviorOnline() {
    return (
        <div className="space-y-12 pb-20 fade-in animate-in slide-in-from-bottom-4 duration-700">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-10">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Module 11 Topic 10
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-foreground leading-tight">
                            Ethics & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Integrity</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Digital character is what you do when no one is watching. Be a creator, not a copycat.
                        </p>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                        <Heart size={180} className="text-blue-500 relative z-10 drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE COPYRIGHT COP (Zig-Zag Left) */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
                    <Card className="p-8 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border-blue-100 dark:border-blue-900 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Shield size={24} /></div>
                            The Copy-Paste Trap
                        </h3>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            Just because it's on Google Images doesn't mean it's yours. Taking content without credit is <strong>Plagiarism</strong> (Academic) or <strong>Copyright Infringement</strong> (Legal).
                        </p>
                        <div className="flex gap-2">
                            <Badge variant="outline" className="text-red-500 border-red-200">Plagiarism 🚫</Badge>
                            <Badge variant="outline" className="text-red-500 border-red-200">Piracy 🏴‍☠️</Badge>
                            <Badge variant="outline" className="text-green-600 border-green-200">Fair Use ✅</Badge>
                        </div>
                    </Card>
                    <Card className="p-8 bg-card flex flex-col justify-center gap-3 border-slate-200 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-center mb-2">How to share ethically:</h4>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border text-sm flex gap-3 items-center">
                            <span className="font-bold text-blue-500">1.</span> Ask Permission
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border text-sm flex gap-3 items-center">
                            <span className="font-bold text-blue-500">2.</span> Give Credit (@Tag)
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border text-sm flex gap-3 items-center">
                            <span className="font-bold text-blue-500">3.</span> Use Free Assets (Pexels)
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: THE ANONYMITY TEST (Zig-Zag Right) */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
                    <Card className="p-8 bg-card flex items-center justify-center border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="relative">
                            <Ghost size={120} className="text-slate-200 dark:text-slate-800" />
                            <HelpCircle size={48} className="absolute -top-2 -right-2 text-blue-500 animate-bounce" />
                        </div>
                    </Card>
                    <Card className="p-8 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 border-indigo-100 dark:border-indigo-900 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Users size={24} /></div>
                            The "Invisible Man" Test
                        </h3>
                        <p className="text-lg text-foreground leading-relaxed mb-6">
                            <strong>"Integrity is doing the right thing when no one is watching."</strong> <br />
                            Online, you are often anonymous. This is the ultimate test of your character.
                        </p>

                        <div className="bg-white/60 dark:bg-black/40 p-4 rounded-xl border border-natural-200 dark:border-natural-800 italic text-muted-foreground text-center">
                            "If I glitch this game to win, no one knows... but *I* know I didn't verify earn it."
                        </div>
                    </Card>
                </div>
            </section>

            <TopicNavigation currentModuleId={11} currentTopicId="m11-t10" />
        </div>
    );
}

// --- BONUS: FUTURE TECH (Renamed Component) ---

function Topic_BonusFutureTech() {
    const [activeTech, setActiveTech] = useState<'ai' | 'vr' | 'iot'>('ai');
    // ... (Keep existing Future Tech content here, just wrapped in this new name)
    return (
        <div className="space-y-20 pb-20 fade-in animate-in slide-in-from-bottom-4 duration-700">
            {/* SECTION 1: HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Next Gen (Bonus)
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            The Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Is Now</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                            From AI that writes poetry to glasses that show holographic worlds. Explore the technologies shaping tomorrow.
                        </p>
                    </div>
                    {/* ... Keep rest of hero ... */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-blue-100/50 dark:bg-blue-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center hover:scale-105 transition-transform duration-700">
                            <Rocket size={120} className="text-blue-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ... Keep rest of Future Tech content ... */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12 overflow-hidden relative min-h-[600px] flex flex-col">
                    <div className="relative z-10 text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Triad</h2>
                        <p className="text-slate-400 text-lg">Click to explore the big three.</p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <button
                                onClick={() => setActiveTech('ai')}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTech === 'ai' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                Artificial Intelligence
                            </button>
                            <button
                                onClick={() => setActiveTech('vr')}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTech === 'vr' ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                VR & AR
                            </button>
                            <button
                                onClick={() => setActiveTech('iot')}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTech === 'iot' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                Automation (IoT)
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 grid md:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom-8 duration-500" key={activeTech}>
                        <div className="space-y-6">
                            {activeTech === 'ai' && (
                                <>
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                        <Bot size={40} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-purple-400">Artificial Intelligence</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Computers that can think, learn, and create. From smart assistants like Siri to self-driving cars.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-purple-500 shrink-0" /> Generates art & music
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-purple-500 shrink-0" /> Helps doctors diagnose diseases
                                        </li>
                                    </ul>
                                </>
                            )}
                            {activeTech === 'vr' && (
                                <>
                                    <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                                        <Glasses size={40} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-pink-400">VR & Augmented Reality</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Stepping inside the computer (VR) or bringing computer graphics into the real world (AR).
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-pink-500 shrink-0" /> Training surgeons without real patients
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-pink-500 shrink-0" /> Pokemon GO (AR Games)
                                        </li>
                                    </ul>
                                </>
                            )}
                            {activeTech === 'iot' && (
                                <>
                                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                                        <Wifi size={40} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-cyan-400">IoT (Internet of Things)</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Connecting everyday objects to the internet. Smart fridges, smart lights, and smart cities.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-cyan-500 shrink-0" /> Lights that turn on when you walk in
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-cyan-500 shrink-0" /> Fridges that order milk for you
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className="flex justify-center">
                            {activeTech === 'ai' && <Bot size={200} className="text-purple-500 opacity-50 animate-pulse" />}
                            {activeTech === 'vr' && <Glasses size={200} className="text-pink-500 opacity-50 animate-pulse" />}
                            {activeTech === 'iot' && <Wifi size={200} className="text-cyan-500 opacity-50 animate-pulse" />}
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-tbonus" />
            </div>
        </div>
    );
}
function Topic5_UPIOnlinePaymentsSafety() {
    const [scanStep, setScanStep] = useState(0);
    const [showScamAlert, setShowScamAlert] = useState(false);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Future Money
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Payments</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-indigo-100/50 dark:bg-indigo-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center transform rotate-2 hover:rotate-0 transition-all duration-700">
                            <SmartphoneNfc size={120} className="text-indigo-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: WHAT IS UPI? (NEW) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 border-t-8 border-blue-500 hover:-translate-y-2 transition-transform">
                        <Wallet size={48} className="text-blue-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">No Cash Needed</h3>
                        <p className="text-muted-foreground">Pay directly from your bank account using phone apps like GPay or Paytm.</p>
                    </Card>
                    <Card className="p-8 border-t-8 border-green-500 hover:-translate-y-2 transition-transform">
                        <SmartphoneNfc size={48} className="text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Instant Transfer</h3>
                        <p className="text-muted-foreground">Money moves in seconds, 24/7. No waiting for banks to open.</p>
                    </Card>
                    <Card className="p-8 border-t-8 border-purple-500 hover:-translate-y-2 transition-transform">
                        <Shield size={48} className="text-purple-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">PIN Protected</h3>
                        <p className="text-muted-foreground">Your unique 4 or 6 digit UPI PIN is the key. Keep it secret!</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: HOW UPI WORKS (INTERACTIVE FLOW) */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-center mb-10">How to Pay Safely</h2>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative max-w-4xl mx-auto">
                        <div className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${scanStep >= 0 ? 'opacity-100' : 'opacity-30'}`} onClick={() => setScanStep(0)}>
                            <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-orange-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <ScanLine size={32} />
                            </div>
                            <span className="font-bold">1. Scan QR</span>
                        </div>

                        <ArrowRight className="hidden md:block text-slate-600" />

                        <div className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${scanStep >= 1 ? 'opacity-100' : 'opacity-30'}`} onClick={() => setScanStep(1)}>
                            <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-yellow-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <UserCheck size={32} />
                            </div>
                            <span className="font-bold">2. Verify Name</span>
                        </div>

                        <ArrowRight className="hidden md:block text-slate-600" />

                        <div className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${scanStep >= 2 ? 'opacity-100' : 'opacity-30'}`} onClick={() => setScanStep(2)}>
                            <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-green-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <CheckCircle size={32} />
                            </div>
                            <span className="font-bold">3. Enter PIN</span>
                        </div>
                    </div>

                    <div className="mt-12 text-center bg-slate-800 p-6 rounded-2xl max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold mb-2">
                            {scanStep === 0 && "Step 1: Scan the Code"}
                            {scanStep === 1 && "Step 2: Check the Name!"}
                            {scanStep === 2 && "Step 3: Pay"}
                        </h3>
                        <p className="text-slate-400">
                            {scanStep === 0 && "Open your camera or app and point it at the shop's QR code."}
                            {scanStep === 1 && "CRITICAL: Look at the screen. Does it say 'Grocery Store' or 'Random Stranger'? If the name is wrong, STOP."}
                            {scanStep === 2 && "Only enter your PIN to *send* money. Never enter PIN to *receive* money."}
                        </p>
                        <Button className="mt-4 bg-orange-500 hover:bg-orange-600" onClick={() => setScanStep((prev) => (prev + 1) % 3)}>
                            Next Step
                        </Button>
                    </div>
                </div>
            </section>

            {/* SECTION 3: SAFETY DO'S AND DON'TS */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-3xl border border-green-200 dark:border-green-800">
                        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center gap-3">
                            <CheckCircle /> Safe Habits (DO)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start"><div className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-xs font-bold shrink-0">1</div> Change your PIN regularly.</li>
                            <li className="flex gap-3 items-start"><div className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-xs font-bold shrink-0">2</div> Check SMS alerts for every transaction.</li>
                            <li className="flex gap-3 items-start"><div className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-xs font-bold shrink-0">3</div> Lock your phone with a fingerprint or pattern.</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-800">
                        <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-3">
                            <XCircle /> Danger Zones (DON'T)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start"><div className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">1</div> NEVER share your PIN with anyone, not even 'bank staff'.</li>
                            <li className="flex gap-3 items-start"><div className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">2</div> NEVER enter PIN to RECEIVE money. (Scam alert!)</li>
                            <li className="flex gap-3 items-start"><div className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">3</div> Don't use public WiFi for payments.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SPOT THE SCAM */}
            <section className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold">Scam Alert Simulator</h2>
                    <p className="text-muted-foreground">Can you spot the fake request?</p>
                </div>

                <Card className="max-w-sm mx-auto p-0 overflow-hidden border-8 border-slate-800 rounded-[30px] relative shadow-2xl">
                    <div className="bg-slate-800 text-white p-4 flex items-center justify-between">
                        <span>Message</span>
                        <Settings size={16} />
                    </div>
                    <div className="bg-slate-100 p-4 h-[400px] flex flex-col gap-4 overflow-y-auto">
                        <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm">
                            <p className="font-bold text-orange-600">LUCKY WINNER!</p>
                            <p>You won ₹5000 cashback! 🤑</p>
                            <p>Click accept and enter PIN to claim now.</p>
                            <Button size="sm" variant="outline" className="mt-2 w-full border-orange-500 text-orange-600" onClick={() => setShowScamAlert(true)}>
                                Claim ₹5000
                            </Button>
                        </div>
                    </div>
                    {showScamAlert && (
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 text-center animate-in fade-in zoom-in">
                            <div className="bg-white p-6 rounded-2xl">
                                <AlertTriangle className="text-red-500 w-12 h-12 mx-auto mb-2" />
                                <h3 className="text-xl font-bold text-red-600 mb-2">SCAM DETECTED!</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Remember: You NEVER enter a PIN to receive money. Cashback is automatic.
                                </p>
                                <Button onClick={() => setShowScamAlert(false)}>I Understand</Button>
                            </div>
                        </div>
                    )}
                </Card>
            </section>

            {/* SECTION 5: SO YOU GOT SCAMMED? */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-red-400 flex items-center gap-3">
                            <SirenIcon /> Panic Mode: What to do?
                        </h2>
                        <p className="text-lg text-slate-300">
                            If you accidentally shared your details or lost money:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <span className="text-3xl">📞</span>
                                <div>
                                    <h4 className="font-bold">Call 1930</h4>
                                    <p className="text-sm text-slate-400">National Cyber Crime Helpline (India).</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <span className="text-3xl">🏦</span>
                                <div>
                                    <h4 className="font-bold">Block Accounts</h4>
                                    <p className="text-sm text-slate-400">Call your bank immediately to freeze UPI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-red-100/50 dark:bg-red-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-64 h-64 flex items-center justify-center animate-pulse">
                            <AlertTriangle size={100} className="text-red-500" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t5" />
            </div>
        </div>
    );
}



// --- TOPIC 6: DIGITAL FOOTPRINT (Refactored) ---

function Topic6_DigitalFootprint() {
    const [pathStep, setPathStep] = useState(0);

    // Timeline Data
    const timelineEvents = [
        { icon: <Smartphone size={20} />, title: "Posted a Photo", desc: "You shared a funny pic publicly.", status: "neutral" },
        { icon: <MessageSquare size={20} />, title: "Mean Comment", desc: "You left a rude reply on a video.", status: "negative" },
        { icon: <Briefcase size={20} />, title: "Job Interview", desc: "The boss searched your name...", status: "consequence" }
    ];

    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            Digital Identity
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Footprint</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Every click, post, and search leaves a mark. The internet never forgets. What does your footprint say about you?
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-teal-100/50 dark:bg-teal-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-all duration-700">
                            <Footprints size={120} className="text-teal-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: WHAT IS IT? */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Active vs. Passive</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Your footprint is made of two things: what you do on purpose, and what happens secretly.
                        </p>
                        <div className="space-y-4">
                            <Card className="p-6 border-l-4 border-teal-500">
                                <h3 className="font-bold text-lg mb-1 flex items-center gap-2"><MousePointer2 size={20} /> Active Footprint</h3>
                                <p className="text-sm text-slate-500">Things YOU share: Posts, comments, emails, uploads.</p>
                            </Card>
                            <Card className="p-6 border-l-4 border-slate-500">
                                <h3 className="font-bold text-lg mb-1 flex items-center gap-2"><Eye size={20} /> Passive Footprint</h3>
                                <p className="text-sm text-slate-500">Things SITES track: Your IP address, location, search history, clicks.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Ghost size={200} className="text-slate-200 dark:text-slate-800" />
                    </div>
                </div>
            </section>

            {/* SECTION 2: INTERACTIVE TIMELINE */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-16 overflow-hidden relative">
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">The Time Machine</h2>
                        <p className="text-slate-400 text-lg mb-12">See how a "harmless" post today affects you in 5 years.</p>

                        <div className="relative">
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2 hidden md:block"></div>
                            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                {timelineEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-500 cursor-pointer group ${pathStep >= index ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}
                                        onClick={() => setPathStep(index)}
                                    >
                                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 relative border-4 transition-colors
                                            ${pathStep >= index ? (event.status === 'negative' ? 'bg-red-500 border-red-300' : event.status === 'consequence' ? 'bg-yellow-500 border-yellow-300' : 'bg-blue-500 border-blue-300') : 'bg-slate-800 border-slate-600'}
                                        `}>
                                            {event.icon}
                                            {pathStep === index && <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>}
                                        </div>
                                        <div className={`bg-slate-800 p-6 rounded-2xl border ${pathStep === index ? 'border-white/50 shadow-2xl scale-110' : 'border-slate-700'} transition-all`}>
                                            <h4 className="font-bold text-xl mb-2">{event.title}</h4>
                                            <p className="text-sm text-slate-400">{event.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 inline-block animate-in fade-in slide-in-from-bottom-4">
                            <p className="font-mono text-yellow-400 flex items-center gap-2">
                                <AlertTriangle size={16} />
                                Tip: "The internet never forgets." Employers often check social media!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE GOOGLE SEARCH SIM */}
            <section className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Google Yourself</h2>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <div className="flex gap-4 mb-6 border-b pb-4">
                            <div className="bg-slate-100 p-3 rounded-full"><Search className="text-slate-500" /></div>
                            <div className="flex-1 bg-slate-100 rounded-full px-6 py-3 text-slate-500">Your Full Name</div>
                        </div>

                        <div className="space-y-6">
                            <div className="animate-in slide-in-from-bottom-4 duration-500">
                                <p className="text-blue-600 text-sm mb-1">www.socialmedia.com/user123</p>
                                <h3 className="text-xl text-blue-800 dark:text-blue-400 underline mb-1">User123 | Fighting online everyday</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    "I hate this school lol. Everyone is so annoying..." - Posted 2 years ago.
                                </p>
                            </div>
                            <div className="animate-in slide-in-from-bottom-4 duration-700 delay-100">
                                <p className="text-blue-600 text-sm mb-1">www.gamernews.net/forums</p>
                                <h3 className="text-xl text-blue-800 dark:text-blue-400 underline mb-1">Banned User Report: Toxic Behavior</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    This user was banned for using bad language in chat...
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 rounded-r-xl text-sm">
                            <p className="font-bold text-yellow-800 dark:text-yellow-200">
                                😲 Reality Check: Colleges and Bosses do this. What will they find?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: GHOST MODE */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-6">Clean Up Your Act</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            It's never too late to start scrubbing. Here is how to go "Ghost Mode".
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                <Trash2 className="text-red-500" />
                                <span>Delete old accounts you don't use anymore.</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                <Settings className="text-blue-500" />
                                <span>Set all profiles to "Private".</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                <UserMinus className="text-orange-500" />
                                <span>Untag yourself from embarrassing photos.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                            <div className="relative z-10 bg-white dark:bg-slate-900 rounded-full w-full h-full flex items-center justify-center border-4 border-slate-100 dark:border-slate-800 shadow-2xl">
                                <ScanLine size={80} className="text-slate-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t6" />
            </div>
        </div>
    );
}

// --- TOPIC 7: CYBERBULLYING AWARENESS ---

function Topic7_CyberbullyingAwareness() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Stand Up
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Cyberbullying</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            It's not "just a joke" if it hurts. Learn how to spot it, stop it, and support those involved.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-red-100/50 dark:bg-red-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center transform rotate-2 hover:rotate-0 transition-all duration-700">
                            <Shield size={120} className="text-red-500/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: WHAT IS IT? */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">It Comes in Many Forms</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-orange-500">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 font-bold text-2xl">🤬</div>
                        <h3 className="font-bold mb-2">Harassment</h3>
                        <p className="text-sm text-slate-500">Sending mean messages over and over again.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">🤥</div>
                        <h3 className="font-bold mb-2">Impersonation</h3>
                        <p className="text-sm text-slate-500">Pretending to be someone else to make them look bad.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-purple-500">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold text-2xl">📸</div>
                        <h3 className="font-bold mb-2">Outing / Doxing</h3>
                        <p className="text-sm text-slate-500">Sharing someone's secrets or photos without permission.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-red-500">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 font-bold text-2xl">🚪</div>
                        <h3 className="font-bold mb-2">Exclusion</h3>
                        <p className="text-sm text-slate-500">Intentionally leaving someone out of group chats to hurt them.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: BYSTANDER EFFECT */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-[40px] p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Don't Be a Bystander</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                        Most people see bullying but say nothing. They think "It's not my problem." Be an <span className="text-yellow-400 font-bold">Upstander</span> active defender!
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 w-64">
                            <ThumbsDown className="w-12 h-12 text-red-400 mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Don't Join In</h4>
                            <p className="text-sm text-slate-400">Laughing or liking the mean post hurts the victim too.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 w-64">
                            <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h4 className="font-bold mb-2">DM the Victim</h4>
                            <p className="text-sm text-slate-400">"Hey, I saw that post. Are you okay?" A little kindness helps.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 w-64">
                            <Flag className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Report It</h4>
                            <p className="text-sm text-slate-400">Tell a teacher, parent, or use the 'Report' button.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: REPORTING TUTORIAL */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">How to Report</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Every app has a way to stop bullies. It's anonymous—they won't know it was you.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-2xl text-slate-300">1</span>
                                <span>Tap the three dots (...) on the post.</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-2xl text-slate-300">2</span>
                                <span>Select <span className="text-red-500 font-bold">Report</span>.</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-2xl text-slate-300">3</span>
                                <span>Choose "It's harassment" or "Bullying".</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-80 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center">
                        <Flag size={100} className="text-slate-300 animate-bounce" />
                        <div className="absolute bottom-4 text-sm text-slate-500">Reporting keeps the community safe.</div>
                    </div>
                </div>
            </section>

            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t7" />
            </div>
        </div>
    );
}



// --- TOPIC 8: FUTURE TECH (BONUS) ---

function Topic8_FutureTech() {
    const [activeTech, setActiveTech] = useState<'ai' | 'vr' | 'iot'>('ai');

    return (
        <div className="space-y-20 pb-20">
            {/* SECTION 1: HERO */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Next Gen
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            The Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Is Now</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                            From AI that writes poetry to glasses that show holographic worlds. Explore the technologies shaping tomorrow.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-blue-100/50 dark:bg-blue-900/20 backdrop-blur-sm rounded-[40px] border-4 border-white dark:border-slate-800 w-full aspect-[4/3] flex items-center justify-center hover:scale-105 transition-transform duration-700">
                            <Rocket size={120} className="text-blue-500/50" />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-bounce hidden md:block z-20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600"><Cpu size={24} /></div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold">Processing Power</p>
                                    <p className="text-lg font-bold">1000x</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THREE PILLARS OF FUTURE TECH (INTERACTIVE) */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12 overflow-hidden relative min-h-[600px] flex flex-col">
                    <div className="relative z-10 text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Triad</h2>
                        <p className="text-slate-400 text-lg">Click to explore the big three.</p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <button
                                onClick={() => setActiveTech('ai')}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTech === 'ai' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                Artificial Intelligence
                            </button>
                            <button
                                onClick={() => setActiveTech('vr')}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTech === 'vr' ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                VR & AR
                            </button>
                            <button
                                onClick={() => setActiveTech('iot')}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTech === 'iot' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                Automation (IoT)
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 grid md:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom-8 duration-500" key={activeTech}>
                        <div className="space-y-6">
                            {activeTech === 'ai' && (
                                <>
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                        <Bot size={40} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-purple-400">Artificial Intelligence</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Computers that can think, learn, and create. From smart assistants like Siri to self-driving cars.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-purple-500 shrink-0" /> Generates art & music
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-purple-500 shrink-0" /> Helps doctors diagnose diseases
                                        </li>
                                    </ul>
                                </>
                            )}
                            {activeTech === 'vr' && (
                                <>
                                    <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                                        <Glasses size={40} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-pink-400">Virtual & Augmented Reality</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Stepping into digital worlds (VR) or bringing digital objects into the real world (AR).
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-pink-500 shrink-0" /> Virtual field trips to Mars
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-pink-500 shrink-0" /> Training surgeons safely
                                        </li>
                                    </ul>
                                </>
                            )}
                            {activeTech === 'iot' && (
                                <>
                                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                                        <Wifi size={40} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-cyan-400">Internet of Things (IoT)</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Everything is connected. Your fridge, lights, and even your shoes can talk to the internet.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-cyan-500 shrink-0" /> Smart homes that save energy
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl">
                                            <CheckCircle className="text-cyan-500 shrink-0" /> Wearables tracking health
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className="relative h-[300px] md:h-full rounded-3xl overflow-hidden flex items-center justify-center bg-slate-800">
                            {activeTech === 'ai' && <Bot size={120} className="text-purple-500/50" />}
                            {activeTech === 'vr' && <Glasses size={120} className="text-blue-500/50" />}
                            {activeTech === 'iot' && <Wifi size={120} className="text-cyan-500/50" />}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: 3D PRINTING (PROCESS) */}
            <section className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Printing the Physical World</h2>
                    <p className="text-muted-foreground text-lg">How 3D printing works in 3 simple steps.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg relative overflow-hidden group hover:border-orange-500 transition-colors">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-100 dark:bg-orange-900/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <span className="relative z-10 text-5xl font-black text-orange-200 dark:text-orange-900/50 block mb-4">01</span>
                        <h3 className="relative z-10 text-2xl font-bold mb-3">Design</h3>
                        <p className="relative z-10 text-muted-foreground">Create a digital model on a computer (CAD).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg relative overflow-hidden group hover:border-orange-500 transition-colors">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-100 dark:bg-orange-900/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <span className="relative z-10 text-5xl font-black text-orange-200 dark:text-orange-900/50 block mb-4">02</span>
                        <h3 className="relative z-10 text-2xl font-bold mb-3">Slice</h3>
                        <p className="relative z-10 text-muted-foreground">Software cuts the design into thousands of thin layers.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg relative overflow-hidden group hover:border-orange-500 transition-colors">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-100 dark:bg-orange-900/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <span className="relative z-10 text-5xl font-black text-orange-200 dark:text-orange-900/50 block mb-4">03</span>
                        <h3 className="relative z-10 text-2xl font-bold mb-3">Print</h3>
                        <p className="relative z-10 text-muted-foreground">The printer builds the object layer by layer from plastic.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: FUTURE CAREERS Cards */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Jobs of the Future</h2>
                        <p className="text-lg text-muted-foreground mb-8">65% of students today will work in jobs that don't even exist yet. Here is a sneak peek.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl">
                                <Bot className="text-teal-600" />
                                <span className="font-bold">Robot Repair tech</span>
                            </div>
                            <div className="flex items-center gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                                <Cpu className="text-purple-600" />
                                <span className="font-bold">AI Ethicist</span>
                            </div>
                            <div className="flex items-center gap-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <Smartphone className="text-blue-600" />
                                <span className="font-bold">Drone Pilot</span>
                            </div>
                            <div className="flex items-center gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <Leaf className="text-green-600" />
                                <span className="font-bold">Green Energy Engineer</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 aspect-square flex items-center justify-center border border-white/10">
                            <Briefcase size={80} className="text-slate-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CONCLUSION BANNER */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <Rocket size={48} className="mx-auto mb-6 text-yellow-300 animate-bounce" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future Needs YOU</h2>
                    <p className="text-xl text-violet-100 max-w-2xl mx-auto mb-8">
                        The technology is amazing, but it's just a tool. It takes human creativity, empathy, and wisdom to use it for good.
                    </p>
                    <div className="inline-flex gap-4">
                        <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Start Exploring
                        </Button>
                    </div>
                </div>
            </section>

            {/* FOOTER NAV */}
            <div className="pt-8">
                <TopicNavigation currentModuleId={11} currentTopicId="m11-t7" />
            </div>
        </div>
    );
}


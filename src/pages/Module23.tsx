import React, { useState, useEffect } from "react";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    Lock,
    Unlock,
    Database,
    Network,
    FileText,
    Link as LinkIcon,
    Users,
    Globe,
    Server,
    Zap,
    AlertTriangle,
    Eye,
    Key,
    Layers,
    FileCode,
    Cpu,
    Box,
    Fingerprint,
    Hash,
    ChevronDown,
    Play,
    Pause,
    RotateCcw,
    XCircle,
    Monitor,
    Clock,
    Trophy,
    Search,
    Palette,
    Gamepad2,
    Music,
    Ticket,
    Truck,
    CreditCard,
    FileSignature,
    TrendingUp,
    Skull,
    Ghost,
    Repeat,
    RefreshCw
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Helper Components ---

const getImageUrl = (name: string) => {
    return `/src/assets/module-media/${name}`;
};

const ImageWithFallback = ({
    src,
    alt,
    description,
    iconColor = "text-primary",
    bgColor = "bg-primary/20",
    className
}: {
    src: string,
    alt: string,
    description: string,
    iconColor?: string,
    bgColor?: string,
    className?: string
}) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className={`p-8 text-center text-sm text-muted-foreground flex flex-col items-center justify-center h-full space-y-4 ${className}`}>
                <div className={`${bgColor} p-6 rounded-full`}>
                    <Layers className={`w-12 h-12 ${iconColor}`} />
                </div>
                <p className="max-w-[200px]">{description}</p>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 opacity-0 ${className}`}
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
            onError={() => setHasError(true)}
        />
    );
};

const Topic1WhatIsBlockchain = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-what-is-blockchain" className="space-y-24">

            {/* SECTION 1: HERO - Matches M22 Style */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Trust Engine</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                What is <span className="text-primary">Blockchain</span>?
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            A <span className="font-semibold text-foreground">Blockchain</span> is a shared, digital record book that is stored on thousands of computers at once, making it impossible to cheat, hack, or destroy.
                        </p>

                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-foreground/70 italic text-lg">
                                "Imagine a Google Doc where everyone can write, but no one—not even Google—can delete or edit what has already been written."
                            </p>
                        </div>

                        <div className="gap-4 flex flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                                <ShieldCheck className="w-4 h-4" /> Unhackable
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full text-sm font-bold">
                                <Users className="w-4 h-4" /> Decentralized
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-full text-sm font-bold">
                                <Lock className="w-4 h-4" /> Permanent
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        {/* Visual Rep: Distributed Network */}
                        <div className="absolute inset-0 bg-blue-900/10" style={{ backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
                            <div className="relative w-64 h-64 mb-6">
                                {/* Central Cube */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] z-20">
                                    <Database className="w-10 h-10 text-white" />
                                </div>
                                {/* Satellites */}
                                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                    <div key={i} className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center z-10"
                                        style={{ transform: `rotate(${deg}deg) translate(100px) rotate(-${deg}deg)` }}>
                                        <Monitor className="w-4 h-4 text-slate-400" />
                                    </div>
                                ))}
                                {/* Connectors */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                        <line key={i} x1="50%" y1="50%" x2={`${50 + 38 * Math.cos(deg * Math.PI / 180)}%`} y2={`${50 + 38 * Math.sin(deg * Math.PI / 180)}%`} stroke="white" strokeWidth="2" strokeDasharray="4 2" />
                                    ))}
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">The Distributed Ledger</h3>
                            <p className="text-slate-400 max-w-sm text-sm">Every computer holds a copy. If one fails, the others keep the truth alive.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: THE ANALOGY (Interactive Comparison) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Concept</p>
                    <h2 className="text-3xl font-semibold text-foreground">Understanding the "Shared Ledger"</h2>
                    <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Why is this better than an Excel sheet?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Traditional */}
                    <Card className="p-8 border-l-8 border-l-red-500 bg-gradient-to-br from-red-50/50 to-transparent dark:from-red-950/10 dark:to-transparent hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-2xl text-red-600 group-hover:scale-110 transition-transform">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">The "Excel Sheet" Problem</h3>
                                <p className="text-xs font-bold uppercase text-red-500 tracking-wider">Traditional Way</p>
                            </div>
                        </div>
                        <p className="text-foreground/80 mb-6 leading-relaxed">
                            Normally, a file lives on <strong>one computer</strong>. If you send it to a friend, you send a <em>copy</em>. Now there are two versions. If you edit yours, theirs doesn't change.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm font-medium text-red-800 dark:text-red-300">
                                <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <span><strong>Version Conflict:</strong> Who has the latest file? "final_v2_edit.xlsx"?</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm font-medium text-red-800 dark:text-red-300">
                                <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <span><strong>Central Point of Failure:</strong> If the owner deletes it, it's gone for everyone.</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Blockchain */}
                    <Card className="p-8 border-l-8 border-l-green-500 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-950/10 dark:to-transparent hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <Globe className="w-32 h-32" />
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-green-900 dark:text-green-400">The Blockchain Solution</h3>
                                <p className="text-xs font-bold uppercase text-green-600 tracking-wider">New Way</p>
                            </div>
                        </div>
                        <p className="text-foreground/80 mb-6 leading-relaxed">
                            Imagine a document that updates for <strong>everyone instantly</strong>. But here's the trick: once a line is written, it turns to "digital stone". No one can ever erase it.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm font-medium text-green-800 dark:text-green-300">
                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                <span><strong>Single Source of Truth:</strong> Everyone sees the exact same data, instantly.</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm font-medium text-green-800 dark:text-green-300">
                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                <span><strong>Immutable History:</strong> You can add to it, but you can never delete from it.</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: CORE PILLARS (Enhanced Grid) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Anatomy</p>
                    <h2 className="text-3xl font-semibold text-foreground">The 3 Pillars of Blockchain</h2>
                    <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Just like a building needs pillars to stand, Blockchain needs these three rules to work.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Pillar 1: Decentralization */}
                    <Card className="p-8 border-border/50 bg-card hover:bg-muted/50 transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">1. Decentralization</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            No single boss. Instead of Amazon or a Bank holding the servers, <strong>you and I</strong> hold the servers. The network belongs to the users.
                        </p>
                        <div className="h-32 rounded-xl overflow-hidden border border-border/50 shadow-inner bg-slate-100 dark:bg-slate-900">
                            <ImageWithFallback
                                src="/assets/module-media/placeholder-decentralized.jpg"
                                alt="Decentralized Network Visual"
                                description="Visual of a mesh network with no center"
                                iconColor="text-blue-500"
                            />
                        </div>
                    </Card>

                    {/* Pillar 2: Immutability */}
                    <Card className="p-8 border-border/50 bg-card hover:bg-muted/50 transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors">2. Immutability</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            "Immutable" means "Unable to be changed". Once data goes into a block, it is cryptographically sealed. It stays there forever.
                        </p>
                        <div className="h-32 rounded-xl overflow-hidden border border-border/50 shadow-inner bg-slate-100 dark:bg-slate-900">
                            <ImageWithFallback
                                src="/assets/module-media/placeholder-stone.jpg"
                                alt="Stone Tablet Visual"
                                description="Visual of a stone tablet vs paper"
                                iconColor="text-purple-500"
                            />
                        </div>
                    </Card>

                    {/* Pillar 3: Transparency */}
                    <Card className="p-8 border-border/50 bg-card hover:bg-muted/50 transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                            <Eye className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">3. Transparency</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Since the ledger is distributed, anyone can inspect it. You can see every transaction ever made, right back to the very first one.
                        </p>
                        <div className="h-32 rounded-xl overflow-hidden border border-border/50 shadow-inner bg-slate-100 dark:bg-slate-900">
                            <ImageWithFallback
                                src="/assets/module-media/placeholder-search.jpg"
                                alt="Magnifying Glass Visual"
                                description="Visual of inspecting a transparent glass block"
                                iconColor="text-orange-500"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: HOW IT WORKS (Restyled Visual) */}
            <section className="container mx-auto px-4 mb-20">
                <div className="bg-slate-950 text-white rounded-[40px] p-8 md:p-12 overflow-hidden border border-slate-800 relative">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <Badge variant="outline" className="border-blue-500 text-blue-400 mb-4">The Mechanism</Badge>
                                <h2 className="text-4xl font-bold mb-4">Blocks & Chains</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Every time a transaction happens, it gets packaged into a "Block".
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">The Container (Block)</h4>
                                        <p className="text-slate-400 text-sm">Think of a digital box. We fill it with 500 transactions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">The Lock (Hash)</h4>
                                        <p className="text-slate-400 text-sm">Once full, the computer creates a unique digital fingerprint (Hash) for that box.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">The Chain</h4>
                                        <p className="text-slate-400 text-sm">The <strong>next</strong> box includes the fingerprint of the <strong>previous</strong> box. This links them forever.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Chain */}
                        <div className="flex flex-col gap-4 items-center">
                            {[1, 2, 3].map((id) => (
                                <div key={id} className="relative w-full max-w-sm">
                                    <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl flex items-center gap-4 relative z-10">
                                        <div className="text-4xl">📦</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs font-bold text-slate-500">BLOCK #{100 + id}</span>
                                                <span className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-900/50">HASH: 8X...99</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-3/4" />
                                            </div>
                                            {id > 1 && (
                                                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                                    <LinkIcon className="w-3 h-3" /> Linked to Block #{100 + id - 1}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Chain Link Visual */}
                                    {id < 3 && (
                                        <div className="h-8 w-1 bg-slate-700 absolute left-1/2 -translate-x-1/2 top-full -mt-2 -mb-2 z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: REAL WORLD USE CASES (Expanded) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Applications</p>
                    <h2 className="text-3xl font-semibold text-foreground">More Than Just Bitcoin</h2>
                    <p className="text-muted-foreground mt-4">
                        While Bitcoin made it famous, Blockchain is a technology that solves "Trust" in many industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-8 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950/20 dark:to-blue-900/10 border-none">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 flex items-center justify-center mb-6">
                            <RotateCcw className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-2xl mb-3 text-indigo-900 dark:text-indigo-200">Supply Chain Tracking</h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Walmart uses blockchain to track food. If lettuce has E. coli, they can trace it back to the exact farm in <strong>2.2 seconds</strong> (it used to take 7 days).
                        </p>
                        <ul className="space-y-2">
                            <li className="text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Verify Authenticity</li>
                            <li className="text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Reduce Waste</li>
                        </ul>
                    </Card>

                    <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/20 dark:to-orange-900/10 border-none">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-700 dark:text-orange-300 flex items-center justify-center mb-6">
                            <Box className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-2xl mb-3 text-orange-900 dark:text-orange-200">Smart Contracts</h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Imagine a vending machine. You put money in, you get a snack. No shopkeeper needed. Smart contracts are code that automatically execute deals when conditions are met.
                        </p>
                        <ul className="space-y-2">
                            <li className="text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Automatic Payments</li>
                            <li className="text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> No Lawyers Needed</li>
                        </ul>
                    </Card>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2 hover:border-primary/50 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Secure Voting</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2 hover:border-primary/50 transition-colors">
                        <FileCode className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Medical Records</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2 hover:border-primary/50 transition-colors">
                        <Globe className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Cross-border Pay</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2 hover:border-primary/50 transition-colors">
                        <Zap className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Energy Trading</span>
                    </div>
                </div>
            </section>

            {/* SECTION 6: HISTORY (New Section for depth) */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/30 border border-border/50 rounded-[32px] p-8 md:p-12">
                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2">History</p>
                            <h3 className="text-2xl font-bold mb-4">Who invented this?</h3>
                            <p className="text-foreground/80 leading-relaxed">
                                In 2008, a mysterious person (or group) named <strong>Satoshi Nakamoto</strong> published a paper titled <em>"Bitcoin: A Peer-to-Peer Electronic Cash System"</em>.
                            </p>
                            <p className="text-foreground/80 leading-relaxed mt-4">
                                They didn't just create money; they created the first database that could run without a master. To this day, no one knows who Satoshi really is.
                            </p>
                        </div>
                        <div className="w-24 h-24 rounded-full bg-background border-2 border-dashed border-border flex items-center justify-center">
                            <span className="text-4xl">🕵️</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION FOOTER */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                    <Button variant="ghost" className="text-muted-foreground" disabled>
                        This is the start
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                        <p className="text-lg font-bold">Concept Mastered</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/2")}>
                        Next: How Blockchain Works <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic2HowBlockchainWorks = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-how-blockchain-works" className="space-y-24">

            {/* SECTION 1: HERO - Premium Style */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Mechanics</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                How Does <span className="text-primary">Blockchain</span> Work?
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            It transforms data into trust through a rigorous 7-step process. Every piece of information must survive a gauntlet of verification before becoming history.
                        </p>

                        <div className="gap-4 flex flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                                <Cpu className="w-4 h-4" /> Mining
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full text-sm font-bold">
                                <Network className="w-4 h-4" /> P2P Network
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-full text-sm font-bold">
                                <Fingerprint className="w-4 h-4" /> Cryptography
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        {/* Visual Rep: The Block Factory */}
                        <div className="absolute inset-0 bg-amber-900/5" style={{ backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.1 }} />
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative w-64 h-64"
                            >
                                {/* Central Block */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(217,119,6,0.4)] z-20">
                                    <Box className="w-12 h-12 text-white" />
                                </div>
                                {/* Orbiting Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-amber-500/20"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-amber-500 rounded-full blur-[1px]"></div>
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-blue-500/20"
                                >
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-blue-500 rounded-full blur-[1px]"></div>
                                </motion.div>
                            </motion.div>
                            <p className="text-amber-500/80 font-mono text-sm mt-8">System Status: Operational</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: THE PROCESS MAP (Vertical Visual Steps) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Step-by-Step</p>
                    <h2 className="text-3xl font-semibold text-foreground">The Lifecycle of a Transaction</h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />

                    <div className="space-y-24 relative z-10">
                        {/* STEP 1: TRANSACTION */}
                        <div className="grid md:grid-cols-2 gap-8 items-center relative">
                            <div className="md:text-right order-2 md:order-1 pr-8">
                                <Badge variant="outline" className="border-blue-500 text-blue-500 mb-2">Step 1</Badge>
                                <h3 className="text-2xl font-bold mb-2">Transaction Created</h3>
                                <p className="text-muted-foreground">
                                    A user sends money, uploads a file, or signs a contract. This request is broadcast to the network.
                                </p>
                            </div>
                            <div className="w-14 h-14 bg-background border-4 border-blue-500 rounded-full absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                <span className="text-blue-500 font-bold">1</span>
                            </div>
                            <div className="order-1 md:order-2 pl-8 md:pl-0">
                                <div className="h-48 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card">
                                    <ImageWithFallback
                                        src="/assets/module-media/step-transaction.jpg"
                                        alt="User sending transaction"
                                        description="Visual of a person sending a digital request"
                                        iconColor="text-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: PACKAGING */}
                        <div className="grid md:grid-cols-2 gap-8 items-center relative">
                            <div className="order-2 md:order-1 pr-8 md:pr-0">
                                <div className="h-48 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card">
                                    <ImageWithFallback
                                        src="/assets/module-media/step-block.jpg"
                                        alt="Transactions entering a block"
                                        description="Visual of items being packed into a digital box"
                                        iconColor="text-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-14 h-14 bg-background border-4 border-indigo-500 rounded-full absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                <span className="text-indigo-500 font-bold">2</span>
                            </div>
                            <div className="md:text-left order-1 md:order-2 pl-8">
                                <Badge variant="outline" className="border-indigo-500 text-indigo-500 mb-2">Step 2</Badge>
                                <h3 className="text-2xl font-bold mb-2">Grouped into a Block</h3>
                                <p className="text-muted-foreground">
                                    The network grabs a bunch of pending transactions (e.g., 500 items) and packs them into a "Block".
                                </p>
                            </div>
                        </div>

                        {/* STEP 3: HASHING */}
                        <div className="grid md:grid-cols-2 gap-8 items-center relative">
                            <div className="md:text-right order-2 md:order-1 pr-8">
                                <Badge variant="outline" className="border-purple-500 text-purple-500 mb-2">Step 3</Badge>
                                <h3 className="text-2xl font-bold mb-2">Hashing & Sealing</h3>
                                <p className="text-muted-foreground">
                                    The block gets a unique, unbreakable digital fingerprint (Hash). This seals the contents.
                                </p>
                            </div>
                            <div className="w-14 h-14 bg-background border-4 border-purple-500 rounded-full absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                <span className="text-purple-500 font-bold">3</span>
                            </div>
                            <div className="order-1 md:order-2 pl-8 md:pl-0">
                                <div className="h-48 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card">
                                    <ImageWithFallback
                                        src="/assets/module-media/step-hashing.jpg"
                                        alt="Digital fingerprint lock"
                                        description="Visual of a glowing digital fingerprint"
                                        iconColor="text-purple-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* STEP 4: CONSENSUS */}
                        <div className="grid md:grid-cols-2 gap-8 items-center relative">
                            <div className="order-2 md:order-1 pr-8 md:pr-0">
                                <div className="h-48 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card">
                                    <ImageWithFallback
                                        src="/assets/module-media/step-consensus.jpg"
                                        alt="Network nodes agreeing"
                                        description="Visual of many computers turning green"
                                        iconColor="text-emerald-500"
                                    />
                                </div>
                            </div>
                            <div className="w-14 h-14 bg-background border-4 border-emerald-500 rounded-full absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                <span className="text-emerald-500 font-bold">4</span>
                            </div>
                            <div className="md:text-left order-1 md:order-2 pl-8">
                                <Badge variant="outline" className="border-emerald-500 text-emerald-500 mb-2">Step 4</Badge>
                                <h3 className="text-2xl font-bold mb-2">Network Consensus</h3>
                                <p className="text-muted-foreground">
                                    Thousands of computers (nodes) check the block. If 51% agree it's valid, it's approved.
                                </p>
                            </div>
                        </div>

                        {/* STEP 5: CHAINING */}
                        <div className="grid md:grid-cols-2 gap-8 items-center relative">
                            <div className="md:text-right order-2 md:order-1 pr-8">
                                <Badge variant="outline" className="border-amber-500 text-amber-500 mb-2">Step 5</Badge>
                                <h3 className="text-2xl font-bold mb-2">Added to the Chain</h3>
                                <p className="text-muted-foreground">
                                    The new block is connected to the previous one. It is now permanent history.
                                </p>
                            </div>
                            <div className="w-14 h-14 bg-background border-4 border-amber-500 rounded-full absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                <span className="text-amber-500 font-bold">5</span>
                            </div>
                            <div className="order-1 md:order-2 pl-8 md:pl-0">
                                <div className="h-48 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card">
                                    <ImageWithFallback
                                        src="/assets/module-media/step-chain.jpg"
                                        alt="Block chain link"
                                        description="Visual of links connecting"
                                        iconColor="text-amber-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: DEEP DIVE - BLOCK STRUCTURE */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 rounded-[40px] p-8 md:p-12 border border-slate-800 shadow-2xl">
                    <div className="text-center mb-10">
                        <Badge variant="outline" className="border-indigo-500 text-indigo-400 mb-4">Under the Hood</Badge>
                        <h2 className="text-3xl font-bold text-white">Inside a Block</h2>
                        <p className="text-slate-400">What exactly is inside that digital box?</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        <Card className="bg-slate-900 border-slate-700 p-6 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                            <Database className="w-8 h-8 text-blue-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Data</h4>
                            <p className="text-slate-400 text-sm">List of all transactions in this batch.</p>
                        </Card>
                        <Card className="bg-slate-900 border-slate-700 p-6 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                            <Clock className="w-8 h-8 text-yellow-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Timestamp</h4>
                            <p className="text-slate-400 text-sm">Exact date & time down to the millisecond.</p>
                        </Card>
                        <Card className="bg-slate-900 border-slate-700 p-6 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                            <Fingerprint className="w-8 h-8 text-purple-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Current Hash</h4>
                            <p className="text-slate-400 text-sm">The block's own unique fingerprint.</p>
                        </Card>
                        <Card className="bg-slate-900 border-slate-700 p-6 flex flex-col items-center text-center hover:bg-slate-800 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-20"><LinkIcon className="w-12 h-12 text-green-500" /></div>
                            <LinkIcon className="w-8 h-8 text-green-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Prev Hash</h4>
                            <p className="text-slate-400 text-sm">The link to the past. This makes it a chain.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: MINING */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl w-fit text-amber-600 dark:text-amber-400">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold">Step 5: The "Mining" Competition</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Before a block is sealed, the network needs to solve a complex math puzzle. This is called <strong>Mining</strong>.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 border rounded-xl bg-card">
                                <Search className="w-6 h-6 text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold">Why calculate?</h4>
                                    <p className="text-sm text-muted-foreground">It makes adding blocks "expensive" in energy, preventing spammers from flooding the network.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 border rounded-xl bg-card">
                                <Trophy className="w-6 h-6 text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold">The Reward</h4>
                                    <p className="text-sm text-muted-foreground">The first computer (Miner) to solve the puzzle gets paid in cryptocurrency (like Bitcoin).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] w-full bg-slate-950 rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950" />
                        <div className="relative z-10 text-center space-y-4 p-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 mx-auto border-4 border-dashed border-amber-500/30 rounded-full flex items-center justify-center"
                            >
                                <Cpu className="w-12 h-12 text-amber-500" />
                            </motion.div>
                            <h3 className="text-2xl font-mono text-white">Mining in Progress...</h3>
                            <div className="font-mono text-xs text-amber-400/70 bg-black/50 p-2 rounded">
                                Target: 00000000...<br />
                                Nonce: 4920215
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CONSENSUS */}
            <section className="container mx-auto px-4 bg-muted/20 py-20 rounded-[40px]">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Step 6</p>
                    <h2 className="text-3xl font-bold mb-4">Consensus: The Agreement</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        One miner finding the answer isn't enough. The rest of the network must agree.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 border-none shadow-lg text-center">
                        <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Validate</h3>
                        <p className="text-sm text-muted-foreground">Other nodes check the miner's work.</p>
                    </Card>
                    <Card className="p-8 border-none shadow-lg text-center">
                        <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 mb-4">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Agree</h3>
                        <p className="text-sm text-muted-foreground">51% or more must accept the block.</p>
                    </Card>
                    <Card className="p-8 border-none shadow-lg text-center">
                        <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-purple-600 mb-4">
                            <Network className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Update</h3>
                        <p className="text-sm text-muted-foreground">Everyone updates their ledger copy.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: FINAL STEP */}
            <section className="container mx-auto px-4">
                <div className="border border-green-500/20 bg-green-500/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">Step 7: Immutability</h2>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
                            Once approved, the block is linked to the previous one. It turns to "digital stone". To change it, you would have to re-do the mining for that block AND every block after it, which is impossible.
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                            <Lock className="w-5 h-5 mr-2" /> Transaction Secured
                        </Button>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/1")}>
                    <ArrowLeft className="w-4 h-4" /> Back: Intro
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 2 of 5</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/3")}>
                    Next: Security & Types <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

const Topic3KeyCharacteristics = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-key-characteristics" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Deep Foundations</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        The <span className="text-primary">Soul</span> of Blockchain
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        Blockchain isn't just a slow database. It's a system built on a specific philosophy. Three key rules make it the "Trust Machine".
                    </p>
                </div>
            </section>

            {/* SECTION 2: THE 3 PILLARS (Interactive Gateway) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Decentralization", icon: <Network />, color: "text-blue-500", desc: "No single boss. Power is shared." },
                        { title: "Transparency", icon: <Eye />, color: "text-purple-500", desc: "Open for everyone to see." },
                        { title: "Immutability", icon: <Lock />, color: "text-green-500", desc: "Once written, never changed." }
                    ].map((item, i) => (
                        <Card key={i} className="p-8 bg-slate-950 border-slate-800 hover:border-slate-600 transition-all hover:scale-105 group cursor-default">
                            <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 3: DEEP DIVE - DECENTRALIZATION */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><Network className="w-6 h-6" /></div>
                            <h2 className="text-3xl font-bold">1. Decentralization</h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In traditional systems (like a bank), one central server controls everything. If it goes down, everyone is stuck. In Blockchain, <strong>thousands of computers (nodes)</strong> share the load.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 border border-blue-200/20 bg-blue-500/5 rounded-xl">
                                <ShieldCheck className="w-6 h-6 text-blue-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-blue-400">No Single Point of Failure</h4>
                                    <p className="text-sm text-muted-foreground">If 100 computers break, the network keeps running on the other 9,900.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Network Structure */}
                    <Card className="p-8 bg-slate-950 border-slate-800 order-1 lg:order-2 relative overflow-hidden h-[300px] flex items-center justify-center">
                        {/* Placeholder for future detailed network diagram */}
                        <div className="absolute inset-0 z-0">
                            <ImageWithFallback
                                src="blockchain-network.png"
                                alt="Distributed Network Diagram"
                                description="Visual representation of a decentralized network"
                                className="w-full h-full object-cover opacity-20 hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-slate-950 pointer-events-none" />

                        <div className="relative z-10 w-full h-full pointer-events-none">
                            {/* Nodes animation simulated with static css for stability, complex interactive would be heavy */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] z-20" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                                <div key={i} className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full"
                                    style={{
                                        transform: `rotate(${deg}deg) translate(80px) rotate(-${deg}deg)`,
                                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                                    }}
                                />
                            ))}
                            {/* Connecting lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                                <circle cx="50%" cy="50%" r="80" stroke="currentColor" className="text-blue-800" fill="none" strokeWidth="1" />
                            </svg>
                        </div>
                        <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-blue-500/50 uppercase tracking-widest z-10">Distributed Network Topology</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: COMPARISON TABLE */}
            <section className="container mx-auto px-4">
                <Card className="overflow-hidden border-border/50">
                    <div className="grid grid-cols-3 bg-muted/50 p-4 font-bold text-center border-b border-border">
                        <div className="text-left pl-4">Feature</div>
                        <div className="text-red-500">Traditional (Centralized)</div>
                        <div className="text-green-500">Blockchain (Decentralized)</div>
                    </div>
                    {[
                        { feat: "Who is in charge?", old: "One Boss (Bank/Google)", new: "Nobody (The Protocol)" },
                        { feat: "Data Storage", old: "Single Server Farm", new: "Everywhere" },
                        { feat: "Trust", old: "Must trust the company", new: "Trust the Math" }
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 p-4 border-b border-border/50 hover:bg-muted/20 transition-colors text-sm md:text-base items-center">
                            <div className="font-medium pl-4">{row.feat}</div>
                            <div className="text-center text-muted-foreground">{row.old}</div>
                            <div className="text-center font-bold text-foreground">{row.new}</div>
                        </div>
                    ))}
                </Card>
            </section>

            {/* SECTION 5: DEEP DIVE - TRANSPARENCY */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-purple-900/10 to-slate-950 border border-purple-500/20 rounded-[40px] p-8 md:p-12">
                    <div className="grid lg:grid-cols-[1fr_auto] gap-12">
                        <div className="space-y-6">
                            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg w-fit"><Eye className="w-8 h-8" /></div>
                            <h2 className="text-3xl font-bold text-white">2. Transparency</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Imagine a bank where every transaction is written on a glass wall in the middle of the city. Anyone can see the money moving. That is a Public Blockchain.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-slate-900/50 p-4 rounded-xl border border-purple-500/10">
                                    <p className="font-bold text-purple-300 mb-1">Verify Everything</p>
                                    <p className="text-xs text-slate-400">You don't need a lawyer to audit the books. You can check the code yourself.</p>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-xl border border-purple-500/10">
                                    <p className="font-bold text-purple-300 mb-1">Fraud is Visible</p>
                                    <p className="text-xs text-slate-400">If someone tries to print fake money, the whole network sees it immediately.</p>
                                </div>
                            </div>
                        </div>

                        {/* Abstract "Glass Wall" Visual */}
                        <div className="w-full max-w-sm bg-purple-950/30 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 font-mono text-xs text-purple-200 shadow-2xl skew-y-3 relative overflow-hidden">
                            <div className="absolute inset-0 z-0 opacity-20">
                                <ImageWithFallback
                                    src="glass-ledger.png"
                                    alt="Public Ledger Visual"
                                    description="Abstract glass wall showing transactions"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between border-b border-purple-500/30 pb-2 mb-2">
                                    <span>TX_ID</span>
                                    <span>AMOUNT</span>
                                </div>
                                <div className="space-y-2 opacity-80">
                                    <div className="flex justify-between"><span>0x3a...9f</span><span className="text-green-400">+ 50 BTC</span></div>
                                    <div className="flex justify-between"><span>0x8b...2c</span><span className="text-red-400">- 12 ETH</span></div>
                                    <div className="flex justify-between"><span>0x1d...4a</span><span className="text-green-400">+ 100 SOL</span></div>
                                    <div className="flex justify-between"><span>0xe5...88</span><span className="text-red-400">- 500 USDC</span></div>
                                </div>
                                <div className="mt-4 pt-2 border-t border-purple-500/30 text-center text-purple-400 italic">
                                    Publicly Visible Ledger
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: PRIVACY CLARIFICATION */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 items-start rounded-2xl bg-muted/30 p-6 border border-border/50">
                    <div className="p-3 bg-background rounded-full shadow-sm"><AlertTriangle className="w-6 h-6 text-orange-500" /></div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Wait, if it's transparent, is my privacy gone?</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            Not exactly. It's <strong>Pseudonymous</strong>. People can see the <em>Account Translation</em>, but they don't know the <em>Account Owner</em>. It's like seeing a car's license plate: you see where it goes, but you don't know who is driving unless they tell you.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 7: DEEP DIVE - IMMUTABILITY */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Card className="p-0 overflow-hidden border-none shadow-2xl bg-slate-950 order-2 lg:order-1">
                        {/* Visual: Stone Block */}
                        <div className="bg-gradient-to-b from-stone-800 to-stone-950 p-12 text-center h-[300px] flex flex-col items-center justify-center relative">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')" }}></div>
                            <Lock className="w-16 h-16 text-stone-400 mb-6" />
                            <h3 className="text-3xl font-black text-stone-300 tracking-widest uppercase">Immutable</h3>
                            <p className="text-stone-500 mt-2 font-serif italic">"Written in Stone"</p>
                        </div>
                    </Card>

                    <div className="space-y-6 order-1 lg:order-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 text-green-500 rounded-lg"><Layers className="w-6 h-6" /></div>
                            <h2 className="text-3xl font-bold">3. Immutability</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Once data is in the blockchain, it stays there. Forever. Unlike a Word document you can edit, a block is chemically sealed with cryptography.
                        </p>

                        <h4 className="font-bold text-foreground mt-4">Why is this crucial?</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span><strong>Censorship Resistance:</strong> No government or dictator can delete history.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span><strong>Permanent Proof:</strong> You can prove you owned something in 2010, and no one can deny it.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 8: SUMMARY CARD */}
            <section className="container mx-auto px-4">
                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">The Perfect Trinity</h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        These three features work together. Without <em>Decentralization</em>, you have a normal server. Without <em>Immutability</em>, you have an untrustworthy database. Together, they create <strong>Blockchain</strong>.
                    </p>
                    <div className="flex justify-center gap-2">
                        <div className="h-2 w-20 rounded-full bg-blue-500" />
                        <div className="h-2 w-20 rounded-full bg-purple-500" />
                        <div className="h-2 w-20 rounded-full bg-green-500" />
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/2")}>
                    <ArrowLeft className="w-4 h-4" /> Back: How it Works
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 3 of 5</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/4")}>
                    Next: Cryptography <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

const Topic4CryptographyBasics = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-cryptography" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Mathematical Shield</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        Cryptography <span className="text-primary">Basics</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        Blockchain doesn't use police or banks to stay safe. It uses Math. Specifically, a branch of mathematics called Cryptography that ensures truth is impossible to fake.
                    </p>
                </div>
            </section>

            {/* SECTION 2: WHAT IS IT? */}
            <section className="container mx-auto px-4">
                <Card className="p-8 border-l-4 border-l-purple-500 bg-purple-500/5">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-purple-500/10 rounded-2xl hidden md:block">
                            <ShieldCheck className="w-10 h-10 text-purple-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">What is Cryptography?</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Simply put, it is the practice of <strong>protecting information</strong>. It turns readable data into a secret code so that only the right people can read or verify it. In Blockchain, it has three main jobs:
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mt-6">
                                <div className="bg-background/50 p-4 rounded-xl border border-border">
                                    <div className="font-bold text-foreground">1. Integrity</div>
                                    <div className="text-xs text-muted-foreground">Data hasn't been changed</div>
                                </div>
                                <div className="bg-background/50 p-4 rounded-xl border border-border">
                                    <div className="font-bold text-foreground">2. Privacy</div>
                                    <div className="text-xs text-muted-foreground">Secrets stay secret</div>
                                </div>
                                <div className="bg-background/50 p-4 rounded-xl border border-border">
                                    <div className="font-bold text-foreground">3. Authentication</div>
                                    <div className="text-xs text-muted-foreground">Proving who you are</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 3: HASHING */}
            <section className="container mx-auto px-4">
                <div className="mb-10">
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Core Concept 1</span>
                    <h2 className="text-3xl font-bold mt-2">The Digital Fingerprint (Hashing)</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Card className="p-0 overflow-hidden bg-slate-950 border-slate-800 relative min-h-[300px]">
                        {/* Placeholder for Hashing Diagram */}
                        <div className="absolute inset-0 z-0">
                            <ImageWithFallback
                                src="hashing-diagram.png"
                                alt="Hashing Process Diagram"
                                description="Input Data → Hash Function → Fixed Output"
                                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full pointer-events-none">
                            <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center">
                                <Fingerprint className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                <h4 className="text-white font-bold">SHA-256</h4>
                                <p className="text-slate-400 text-sm">The engine of Bitcoin</p>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A <strong>Hash Function</strong> takes any amount of data (a word, a book, a movie) and crushes it into a fixed-length string of characters.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-500"><RotateCcw className="w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-bold">One-Way Street</h4>
                                    <p className="text-sm text-muted-foreground">You can make the smoothie, but you can't turn the smoothie back into fruit. You can't reverse a hash.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-500"><Zap className="w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-bold">Avalanche Effect</h4>
                                    <p className="text-sm text-muted-foreground">Changing just <em>one letter</em> in the input changes the entire output hash completely.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 4: HASHING DEMO VISUAL */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 rounded-2xl p-6 md:p-8 font-mono border border-slate-800 text-sm">
                    <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-slate-500">Hash_Terminal.exe</span>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="text-green-400 mb-2">$ hash_function("Hello World")</p>
                            <p className="text-slate-300 break-all">a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</p>
                        </div>
                        <div>
                            <p className="text-green-400 mb-2">$ hash_function("Hello World.") <span className="text-slate-500"> // Added a dot</span></p>
                            <p className="text-slate-300 break-all">f4bb1975bf1f81f76412b130d220407769502677732d847817924422ce954512</p>
                        </div>
                        <div className="text-slate-500 italic">
                            {">"} Notice how the output changed completely?
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: ENCRYPTION */}
            <section className="container mx-auto px-4">
                <div className="mb-10">
                    <span className="text-purple-500 font-bold tracking-widest uppercase text-xs">Core Concept 2</span>
                    <h2 className="text-3xl font-bold mt-2">Encryption (Secrets)</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Encryption is about converting data into secret code. Blockchain uses <strong>Asymmetric Encryption</strong>, which involves a pair of keys.
                        </p>
                        <div className="grid gap-4">
                            <Card className="p-4 border-l-4 border-l-green-500 bg-background">
                                <h4 className="font-bold flex items-center gap-2"><Unlock className="w-4 h-4 text-green-500" /> Public Key</h4>
                                <p className="text-sm text-muted-foreground">Like your Email Address or Bank Account Number. Safe to share with anyone.</p>
                            </Card>
                            <Card className="p-4 border-l-4 border-l-red-500 bg-background">
                                <h4 className="font-bold flex items-center gap-2"><Key className="w-4 h-4 text-red-500" /> Private Key</h4>
                                <p className="text-sm text-muted-foreground">Like your Password or PIN. If you lose this, you lose your money forever. Never share detailed.</p>
                            </Card>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden bg-slate-950 border-slate-800 relative min-h-[300px]">
                        {/* Placeholder for Keys Diagram */}
                        <div className="absolute inset-0 z-0">
                            <ImageWithFallback
                                src="public-private-keys.png"
                                alt="Public vs Private Keys Diagram"
                                description="Visualizing the key pair relationship"
                                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full pointer-events-none">
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2 mx-auto border border-green-500/50">
                                        <Globe className="w-8 h-8 text-green-400" />
                                    </div>
                                    <span className="bg-slate-900 text-white px-2 py-1 rounded text-xs border border-slate-700">Public</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-2 mx-auto border border-red-500/50">
                                        <Key className="w-8 h-8 text-red-400" />
                                    </div>
                                    <span className="bg-slate-900 text-white px-2 py-1 rounded text-xs border border-slate-700">Private</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: THE MAILBOX ANALOGY */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-[1fr_200px] gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">The Mailbox Analogy</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Think of a mailbox on the street.
                            </p>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li>• <strong>Public Key:</strong> The slot on the front. Anyone can drop a letter in.</li>
                                <li>• <strong>Private Key:</strong> The key to the back door. Only the owner can open it to take letters out.</li>
                            </ul>
                        </div>
                        <div className="h-32 bg-blue-500/10 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                            <span className="text-6xl">📮</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: DIGITAL SIGNATURES */}
            <section className="container mx-auto px-4">
                <div className="mb-10 text-center">
                    <span className="text-green-500 font-bold tracking-widest uppercase text-xs">Core Concept 3</span>
                    <h2 className="text-3xl font-bold mt-2">Digital Signatures</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        How do we know the message actually came from you, without you revealing your secret password?
                    </p>
                </div>

                <Card className="p-0 overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 relative h-[400px]">
                    {/* Placeholder for Signature Flow Diagram */}
                    <div className="absolute inset-0 z-0">
                        <ImageWithFallback
                            src="digital-signature-flow.png"
                            alt="Digital Signature Workflow Diagram"
                            description="Signing -> Verifying Process"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Overlay Content (Fallback if image missing, or context on top) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md p-6 border-t border-border">
                        <div className="flex justify-around text-center">
                            <div>
                                <div className="font-bold text-lg text-primary">1. Sign</div>
                                <div className="text-xs text-muted-foreground">Use Private Key</div>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-primary">2. Verify</div>
                                <div className="text-xs text-muted-foreground">Use Public Key</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 8: SUMMARY GRID */}
            <section className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-8">Why this makes Blockchain Secure</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-slate-950/50 border-slate-800">
                        <Fingerprint className="w-8 h-8 text-blue-500 mb-4" />
                        <h4 className="font-bold text-white mb-2">Hashing</h4>
                        <p className="text-sm text-slate-400">Protects data from being changed (Integrity).</p>
                    </Card>
                    <Card className="p-6 bg-slate-950/50 border-slate-800">
                        <Lock className="w-8 h-8 text-purple-500 mb-4" />
                        <h4 className="font-bold text-white mb-2">Encryption</h4>
                        <p className="text-sm text-slate-400">Keeps secrets safe (Confidentiality).</p>
                    </Card>
                    <Card className="p-6 bg-slate-950/50 border-slate-800">
                        <FileCode className="w-8 h-8 text-green-500 mb-4" />
                        <h4 className="font-bold text-white mb-2">Signatures</h4>
                        <p className="text-sm text-slate-400">Proves who did it (Authentication).</p>
                    </Card>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/3")}>
                    <ArrowLeft className="w-4 h-4" /> Back: Characteristics
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 4 of 5</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/5")}>
                    Next: Wallets & Keys <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

const Topic5WhatIsCrypto = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-what-is-crypto" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Evolution of Value</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        What is <span className="text-primary">Cryptocurrency?</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        Money has changed over thousands of years and "Cryptocurrency" is its latest digital form. It exists only on the internet, secure by math, controlled by no one.
                    </p>
                </div>
            </section>

            {/* SECTION 2: BASIC DEFINITION */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">The Simple Definition</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Cryptocurrency (or "Crypto") is <strong>digital money</strong>.
                                <br /><br />
                                Unlike the Rupee or Dollar, there are no coins to carry or notes to print. It lives entirely on the <strong>Blockchain</strong>.
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><CheckCircle2 className="w-4 h-4" /></div>
                                    <span className="text-sm">Secure (Protected by Cryptography)</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><Globe className="w-4 h-4" /></div>
                                    <span className="text-sm">Global (Send anywhere instantly)</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500"><Unlock className="w-4 h-4" /></div>
                                    <span className="text-sm">Permissionless (Anyone can use it)</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 relative flex items-center justify-center">
                            {/* Visual Abstract for Digital Money */}
                            <div className="relative w-40 h-40">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                                <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full flex items-center justify-center bg-slate-950/50 backdrop-blur-sm">
                                    <span className="text-6xl font-black text-yellow-500">₿</span>
                                </div>
                                {/* Satellites */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 shadow-xl">
                                    <Lock className="w-5 h-5 text-slate-400" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 shadow-xl">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BANK VS CRYPTO (INTERACTIVE) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Old System vs. New System</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Traditional Bank */}
                    <Card className="p-8 border-l-4 border-l-slate-500 bg-background hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-xl"><Database className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Traditional Bank</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Controlled by Government & Central Bank.
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                High fees for international transfers.
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Can freeze your account (Centralized).
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Banks are closed on weekends/holidays.
                            </li>
                        </ul>
                    </Card>

                    {/* Cryptocurrency */}
                    <Card className="p-8 border-l-4 border-l-yellow-500 bg-background hover:bg-yellow-500/5 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500"><Cpu className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Cryptocurrency</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                Controlled by Code & The People (Decentralized).
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                Low fees, works globally instantly.
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                No one can freeze your wallet (Ownership).
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                Runs 24/7, 365 days a year.
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: EXAMPLES */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Major Examples</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl mb-4">₿</div>
                        <h4 className="text-lg font-bold mb-2">Bitcoin (BTC)</h4>
                        <p className="text-sm text-slate-400">The first cryptocurrency. Often called "Digital Gold". Used primarily for storing value.</p>
                    </div>
                    <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-500 font-bold text-xl mb-4">Ξ</div>
                        <h4 className="text-lg font-bold mb-2">Ethereum (ETH)</h4>
                        <p className="text-sm text-slate-400">Programmable money. Allows for apps and smart contracts to be built on top of it.</p>
                    </div>
                    <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 font-bold text-xl mb-4">₮</div>
                        <h4 className="text-lg font-bold mb-2">Stablecoins</h4>
                        <p className="text-sm text-slate-400">Tokens pegged to real money (like USDT or USDC) so their value doesn't jump up and down.</p>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/4")}>
                    <ArrowLeft className="w-4 h-4" /> Back: Cryptography
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 5 of 10</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/6")}>
                    Next: Transactions <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </div>
    );
};

const Topic6HowTransactionsWork = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-transactions" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Under the Hood</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        How <span className="text-primary">Transactions Work</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        When you send Bitcoin to a friend, you aren't actually sending a file. You are broadcasting a message to the entire world, and asking the network to write it in stone.
                    </p>
                </div>
            </section>

            {/* SECTION 2: THE 5-STEP JOURNEY (VERTICAL TIMELINE) */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">The Journey of a Coin</h2>
                <div className="max-w-4xl mx-auto space-y-8 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block opacity-30"></div>

                    {/* Step 1: Sign */}
                    <div className="relative pl-0 md:pl-24 group">
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-4 border-blue-500 rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                            <span className="text-2xl font-bold text-blue-500">1</span>
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 block md:hidden"><span className="font-bold">1</span></div>
                                <h3 className="text-xl font-bold text-blue-400">Creation & Signing</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                You open your wallet, enter your friend's address, and click "Send". Your wallet uses your <strong>Private Key</strong> to digitaly sign this message.
                            </p>
                            <div className="bg-slate-900 p-4 rounded-xl border border-dashed border-slate-700 font-mono text-xs text-slate-400">
                                Message: "Send 0.5 BTC from Alice to Bob" <br />
                                Signature: 3045022100e8... (Verified by Alice's Key)
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Broadcast */}
                    <div className="relative pl-0 md:pl-24 group">
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-4 border-blue-500/80 rounded-full items-center justify-center z-10">
                            <span className="text-2xl font-bold text-blue-500/80">2</span>
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-blue-300 mb-2">Broadcasting</h3>
                            <p className="text-muted-foreground">
                                Your wallet shouts this message to the nearest nodes (computers). They pass it on to their neighbors until the <strong>entire global network</strong> has your message in the "Mempool" (Memory Pool).
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Validation */}
                    <div className="relative pl-0 md:pl-24 group">
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-4 border-purple-500/80 rounded-full items-center justify-center z-10">
                            <span className="text-2xl font-bold text-purple-500/80">3</span>
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-purple-300 mb-2">Validation</h3>
                            <p className="text-muted-foreground mb-2">
                                Miners (or Validators) check two things:
                            </p>
                            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                                <li>Is the signature real? (Did YOU really send it?)</li>
                                <li>Do you actually have the money? (No double spending)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 4: Mining/Grouping */}
                    <div className="relative pl-0 md:pl-24 group">
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-4 border-purple-500 rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                            <span className="text-2xl font-bold text-purple-500">4</span>
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-purple-400 mb-2">Included in a Block</h3>
                            <p className="text-muted-foreground">
                                A miner picks your transaction from the waiting list (Mempool), adds it to a <strong>Block</strong> with thousands of others, and seals it with a cryptographic hash.
                            </p>
                        </div>
                    </div>

                    {/* Step 5: Confirmation */}
                    <div className="relative pl-0 md:pl-24 group">
                        <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-4 border-green-500 rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 border-b-4 border-b-green-500">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Confirmation</h3>
                            <p className="text-muted-foreground">
                                The new block is added to the blockchain. Your transaction is now part of history. It cannot be deleted or changed. Bob now sees the money in his wallet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FEES EXPLANATION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-yellow-500/5 border border-yellow-500/20 rounded-3xl p-8">
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-500 mb-4">Why is there a Fee?</h3>
                        <p className="text-lg text-foreground/80 mb-4">
                            You pay a small transaction fee (often called "Gas") to the network.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            This isn't profit for a bank. It is a reward for the <strong>Miners/Validators</strong> who spend electricity and computer power to secure your transaction.
                        </p>
                        <div className="flex gap-4">
                            <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 block w-fit">Higher Fee = Faster Speed</Badge>
                            <Badge variant="outline" className="border-slate-500 text-slate-500 block w-fit">Lower Fee = Wait Longer</Badge>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-48 h-48 bg-yellow-500/10 rounded-full flex items-center justify-center relative animate-pulse">
                            <Zap className="w-24 h-24 text-yellow-500" />
                            <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-full border border-slate-700">Gas Fee</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/5")}>
                    <ArrowLeft className="w-4 h-4" /> Back: What is Crypto?
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 6 of 10</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/7")}>
                    Next: Wallets <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </div>
    );
};

const Topic7CryptoWallets = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-wallets" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Digital Ownership</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        Wallets & <span className="text-primary">Keys</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        If there are no banks, where do you keep your money? In the world of Blockchain, you are your own bank. That means you have total control, but also total responsibility.
                    </p>
                </div>
            </section>

            {/* SECTION 2: THE CONCEPTUAL SHIFT */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">It's NOT a Wallet. It's a Keychain.</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                The term "Wallet" is actually confusing. Your coins are <strong>never</strong> inside the wallet app on your phone.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="p-2 bg-red-500/10 text-red-500 rounded-lg h-fit"><XCircle className="w-5 h-5" /></div>
                                    <p className="text-slate-400 text-sm"><strong>Misconception:</strong> "I downloaded my Bitcoin to my phone." (False. The Bitcoin is on the network.)</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="p-2 bg-green-500/10 text-green-500 rounded-lg h-fit"><CheckCircle2 className="w-5 h-5" /></div>
                                    <p className="text-slate-400 text-sm"><strong>Reality:</strong> Your wallet holds the <strong>Keys</strong> (Passwords) that let you move the Bitcoin that lives on the network.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center">
                            {/* Abstract Keychain Visual */}
                            <div className="text-center">
                                <div className="inline-flex -space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full border border-yellow-500/50 flex items-center justify-center"><Key className="w-6 h-6 text-yellow-500" /></div>
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full border border-blue-500/50 flex items-center justify-center"><Key className="w-6 h-6 text-blue-500" /></div>
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-full border border-purple-500/50 flex items-center justify-center"><Key className="w-6 h-6 text-purple-500" /></div>
                                </div>
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Key Management Tool</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: KEYS VS ADDRESSES */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">The Two Main Components</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-l-4 border-l-green-500 bg-background hover:-translate-y-1 transition-transform cursor-default">
                        <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6">
                            <Globe className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Public Address</h3>
                        <Badge variant="outline" className="mb-4 border-green-200 text-green-600 bg-green-50">Safe to Share</Badge>
                        <p className="text-muted-foreground mb-4">Think of this as your <strong>Email Address</strong> or <strong>Bank Account Number</strong>. You give this to people so they can send you money.</p>
                        <div className="bg-muted p-3 rounded font-mono text-xs text-muted-foreground break-all">
                            0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                        </div>
                    </Card>

                    <Card className="p-8 border-l-4 border-l-red-500 bg-background hover:-translate-y-1 transition-transform cursor-default">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                            <Key className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Private Key</h3>
                        <Badge variant="outline" className="mb-4 border-red-200 text-red-600 bg-red-50">TOP SECRET</Badge>
                        <p className="text-muted-foreground mb-4">Think of this as your <strong>Password</strong> or <strong>ATM PIN</strong>. It signs transactions. If someone gets this, they can steal everything.</p>
                        <div className="bg-muted p-3 rounded font-mono text-xs text-muted-foreground break-all blur-sm hover:blur-none transition-all cursor-pointer">
                            5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF (Hover to reveal)
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: TYPES OF WALLETS INTRO */}
            <section className="container mx-auto px-4 pt-10">
                <div className="mb-8">
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Storage Methods</span>
                    <h2 className="text-3xl font-bold mt-2">Hot vs. Cold Storage</h2>
                </div>
            </section>

            {/* SECTION 5: HOT WALLETS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-[1fr_300px] gap-8 items-center bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500"><Zap className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold text-orange-500">Hot Wallets</h3>
                        </div>
                        <p className="text-lg text-foreground/80 mb-4">
                            "Hot" means <strong>connected to the internet</strong>. These are apps on your phone or browser extensions (like MetaMask).
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Convenient</li>
                            <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fast Access</li>
                            <li className="flex items-center gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-orange-500" /> Vulnerable to Hacks</li>
                            <li className="flex items-center gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-orange-500" /> Good for small amounts</li>
                        </ul>
                    </div>
                    {/* Visual Placeholder: Phone Wallet */}
                    <div className="h-48 bg-slate-900 rounded-xl border border-slate-700 relative flex flex-col items-center justify-center p-4 overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-20 hover:opacity-100 transition-opacity">
                            <ImageWithFallback
                                src="hot-wallet-app.png"
                                alt="Mobile Wallet Interface"
                                description="Smartphone displaying a crypto wallet app"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 w-full max-w-[150px] aspect-[9/16] bg-black border-4 border-slate-700 rounded-2xl flex flex-col items-center justify-center shadow-xl pointer-events-none">
                            <div className="text-white text-xs font-bold">1.25 BTC</div>
                            <div className="flex gap-2 mt-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 text-center relative z-10">Mobile App Wallet</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: COLD WALLETS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-[1fr_300px] gap-8 items-center bg-blue-500/5 border border-blue-500/20 rounded-3xl p-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500"><Lock className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold text-blue-500">Cold Wallets</h3>
                        </div>
                        <p className="text-lg text-foreground/80 mb-4">
                            "Cold" means <strong>offline</strong>. Usually a physical device that looks like a USB drive (e.g., Ledger, Trezor). It is impossible to hack remotely because it is not plugged in.
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ultra Secure</li>
                            <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Hack-proof (Remote)</li>
                            <li className="flex items-center gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-orange-500" /> Less Convenient</li>
                            <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Best for Life Savings</li>
                        </ul>
                    </div>
                    {/* Visual Placeholder: Hardware Wallet */}
                    <div className="h-48 bg-slate-900 rounded-xl border border-slate-700 relative flex flex-col items-center justify-center p-4 overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-20 hover:opacity-100 transition-opacity">
                            <ImageWithFallback
                                src="hardware-wallet-ledger.png"
                                alt="Hardware Wallet Device"
                                description="USB-like physical crypto wallet"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 w-32 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-between px-3 shadow-2xl pointer-events-none">
                            <div className="w-4 h-2 bg-slate-600 rounded-sm"></div>
                            <div className="h-6 w-16 bg-black rounded flex items-center justify-center text-[8px] text-green-400 font-mono">PIN: ****</div>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 text-center relative z-10">Hardware USB Wallet</p>
                    </div>
                </div>
            </section>

            {/* SECTION 7: SEED PHRASE (CRITICAL) */}
            <section className="container mx-auto px-4">
                <div className="border border-red-500/30 bg-red-900/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
                    {/* Background Warning Stripes */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ef4444_10px,#ef4444_20px)] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ef4444_10px,#ef4444_20px)] opacity-20"></div>

                    <div className="text-center mb-8">
                        <div className="mx-auto w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                            <AlertTriangle className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-red-500 mb-2">The Golden Rule: Seed Phrases</h2>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                            When you create a wallet, it gives you 12 random words. This is your <strong>Master Key</strong>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                        <div className="bg-background p-6 rounded-2xl border border-border relative overflow-hidden">
                            {/* Seed Phrase Image Placeholder */}
                            <div className="absolute inset-0 z-0 opacity-10">
                                <ImageWithFallback
                                    src="seed-phrase-paper.png"
                                    alt="Paper Backup Sheet"
                                    description="Paper sheet with written 12 words"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative z-10">
                                <h4 className="font-bold mb-4 flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /> Example Seed Phrase</h4>
                                <div className="grid grid-cols-3 gap-2 font-mono text-sm">
                                    {["1. witch", "2. collapse", "3. practice", "4. feed", "5. shame", "6. open", "7. despair", "8. creek", "9. road", "10. again", "11. ice", "12. least"].map(word => (
                                        <div key={word} className="bg-muted p-2 rounded text-center text-muted-foreground">{word}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3 text-sm">
                                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                <span className="text-muted-foreground">NEVER screenshot it.</span>
                            </div>
                            <div className="flex gap-3 text-sm">
                                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                <span className="text-muted-foreground">NEVER save it in Notes or Email.</span>
                            </div>
                            <div className="flex gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-foreground font-bold">Write it on PAPER and hide it.</span>
                            </div>
                            <p className="text-xs text-red-400 mt-4 italic">
                                "Not your keys, not your coins." If you lose this, no one on earth can help you recover your money.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: INTERACTIVE SAFETY CHECK */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Safety Check: Would you do this?</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl">
                            <span>"Hey, I'm a support agent. I need your 12 words to fix your account."</span>
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">SCAM</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl">
                            <span>Storing your hardware wallet in a safe.</span>
                            <Badge variant="outline" className="text-green-400 border-green-500/50">SAFE</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl">
                            <span>Saving your Seed Phrase in Google Drive.</span>
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">DANGEROUS</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9: SUMMARY */}
            <section className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A wallet is just a tool to manage your keys. Hot wallets are for spending, Cold wallets are for saving. And your Seed Phrase is the most important secret you will ever own.
                </p>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/6")}>
                    <ArrowLeft className="w-4 h-4" /> Back: Transactions
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 7 of 10</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/8")}>
                    Next: NFTs <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

const Topic8NFTs = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-nfts" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Unique Assets</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        Non-Fungible <span className="text-primary">Tokens (NFTs)</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        We've talked about digital money. Now let's talk about digital <strong>items</strong>. From art to game characters, NFTs help us prove who truly owns a unique piece of the internet.
                    </p>
                </div>
            </section>

            {/* SECTION 2: FUNGIBLE VS NON-FUNGIBLE */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 bg-slate-900 border-slate-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500"><Repeat className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold">Fungible</h3>
                            <Badge variant="secondary">Interchangeable</Badge>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            One is exactly the same as another. If I lend you a ₹500 note, and you return a different ₹500 note, it doesn't matter. They are equal value.
                        </p>
                        <div className="flex justify-center gap-4 text-4xl">
                            <span>💵</span> ↔️ <span>💵</span>
                        </div>
                        <p className="text-center text-xs mt-4 text-slate-500">Currencies (Rupee, Dollar, Bitcoin) are Fungible.</p>
                    </Card>

                    <Card className="p-8 bg-slate-900 border-slate-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-500"><Fingerprint className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold">Non-Fungible</h3>
                            <Badge variant="secondary">Unique</Badge>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Each one is unique and cannot be swapped 1-for-1. The Mona Lisa is not the same as a random doodle. Your house is not the same as your neighbor's.
                        </p>
                        <div className="flex justify-center gap-4 text-4xl">
                            <span>🖼️</span> ≠ <span>🎨</span>
                        </div>
                        <p className="text-center text-xs mt-4 text-slate-500">Art, Land, and Collectibles are Non-Fungible.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: HOW IT WORKS (MINTING) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Minting: Making it Real</h3>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                                "Minting" is the process of putting a digital file (image, video, song) onto the Blockchain.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs h-fit w-fit">1</div>
                                    <p className="text-slate-400 text-sm">You execute a transaction with the file's metadata.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs h-fit w-fit">2</div>
                                    <p className="text-slate-400 text-sm">The network issues a unique <strong>Token ID</strong>.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs h-fit w-fit">3</div>
                                    <p className="text-slate-400 text-sm">This token is linked to your wallet address forever (unless you sell it).</p>
                                </li>
                            </ul>
                        </div>
                        {/* Visual: Digital Art Frame */}
                        <div className="bg-slate-900 border-8 border-slate-800 rounded-lg p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="relative aspect-square rounded bg-black overflow-hidden group">
                                <ImageWithFallback
                                    src="nft-art-monkey.png"
                                    alt="Digital Art NFT"
                                    description="A unique digital character avatar"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-300">ID: #4092</span>
                                        <span className="text-purple-400 font-bold">Owner: You</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: USE CASES */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">More Than Just JPEGs</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 mb-4"><Palette className="w-6 h-6" /></div>
                        <h4 className="font-bold mb-2">Digital Art</h4>
                        <p className="text-sm text-slate-400">Artists can sell directly to fans without galleries taking a huge cut. Proof of original creator helps avoid fakes.</p>
                    </div>
                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4"><Gamepad2 className="w-6 h-6" /></div>
                        <h4 className="font-bold mb-2">Gaming Items</h4>
                        <p className="text-sm text-slate-400">Imagine earning a "Magic Sword" in a game and being able to sell it for real money to another player. True ownership of game assets.</p>
                    </div>
                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4"><Ticket className="w-6 h-6" /></div>
                        <h4 className="font-bold mb-2">Tickets & Access</h4>
                        <p className="text-sm text-slate-400">Concert tickets that can't be counterfeited. Or membership passes to exclusive clubs or communities.</p>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/7")}>
                    <ArrowLeft className="w-4 h-4" /> Back: Wallets
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 8 of 10</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/9")}>
                    Next: Use Cases <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </div>
    );
};

const Topic9UseCases = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-use-cases" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Real World Impact</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        Beyond <span className="text-primary">Currency</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        Blockchain isn't just about money. It's a "Trust Machine". Any industry that needs transparency, security, and tracking can be revolutionized by this technology.
                    </p>
                </div>
            </section>

            {/* SECTION 2: SUPPLY CHAIN VISUAL */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500"><Truck className="w-6 h-6" /></div>
                        <h3 className="text-2xl font-bold">Supply Chain Tracking</h3>
                    </div>
                    <p className="text-muted-foreground mb-8 text-lg">
                        From farm to table, blockchain tracks every step. If you buy "Organic Coffee", you can scan a QR code and see exactly when it was picked and shipped. No lies possible.
                    </p>

                    <div className="relative pt-6 pb-6">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                            {/* Step 1 */}
                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex flex-col items-center text-center gap-3 shadow-lg">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold border-4 border-slate-900">1</div>
                                <span className="font-bold text-white">Farmer</span>
                                <span className="text-xs text-slate-400">Harvests Coffee</span>
                                <Badge variant="outline" className="text-[10px] border-green-500/50 text-green-500 bg-green-950/30">Verified</Badge>
                            </div>
                            {/* Step 2 */}
                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex flex-col items-center text-center gap-3 shadow-lg">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-900">2</div>
                                <span className="font-bold text-white">Shipping</span>
                                <span className="text-xs text-slate-400">In Transport</span>
                                <Badge variant="outline" className="text-[10px] border-blue-500/50 text-blue-500 bg-blue-950/30">GPS Tracked</Badge>
                            </div>
                            {/* Step 3 */}
                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex flex-col items-center text-center gap-3 shadow-lg">
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-900">3</div>
                                <span className="font-bold text-white">Warehouse</span>
                                <span className="text-xs text-slate-400">Quality Check</span>
                                <Badge variant="outline" className="text-[10px] border-purple-500/50 text-purple-500 bg-purple-950/30">Timestamped</Badge>
                            </div>
                            {/* Step 4 */}
                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex flex-col items-center text-center gap-3 shadow-lg">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-900">4</div>
                                <span className="font-bold text-white">Store</span>
                                <span className="text-xs text-slate-400">You Buy It</span>
                                <Badge variant="outline" className="text-[10px] border-orange-500/50 text-orange-500 bg-orange-950/30">Proven</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: OTHER USE CASES GRID */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Identity */}
                    <Card className="p-8 hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-500"><Fingerprint className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold">Digital Identity</h3>
                        </div>
                        <p className="text-muted-foreground">
                            Instead of carrying a passport, license, and social security card, you have one secure digital ID on the blockchain. You control who sees your data, not a corporation.
                        </p>
                    </Card>

                    {/* Payments */}
                    <Card className="p-8 hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-500/20 rounded-xl text-green-500"><CreditCard className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold">International Payments</h3>
                        </div>
                        <p className="text-muted-foreground">
                            Sending money from India to USA usually takes 3 days and costs high fees. With blockchain, it takes 10 minutes (or seconds) and costs pennies.
                        </p>
                    </Card>

                    {/* Smart Contracts */}
                    <Card className="p-8 hover:bg-slate-900 transition-colors md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-orange-500/20 rounded-xl text-orange-500"><FileSignature className="w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold">Smart Contracts</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            "If X happens, then do Y." <br />
                            Imagine a vending machine. You put money in → you get a drink. No shopkeeper needed. Smart contracts are digital vending machines for anything: Loans, Insurance, Property sales.
                        </p>
                        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm text-green-400">
                            if (flight_delayed == true) {"{"} <br />
                            &nbsp;&nbsp; send_refund(passenger_wallet); <br />
                            {"}"}
                        </div>
                    </Card>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/8")}>
                    <ArrowLeft className="w-4 h-4" /> Back: NFTs
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 9 of 10</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/10")}>
                    Next: Risks <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </div>
    );
};

const Topic10Risks = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-risks" className="space-y-24">

            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-red-500 font-bold mb-3">Critical Warning</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        Risks & <span className="text-red-500">Limitations</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
                        With great power comes great responsibility. Being your own bank means if you lose your keys, you lose your money. There is no "Forgot Password" button here.
                    </p>
                </div>
            </section>

            {/* SECTION 2: VOLATILITY */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-yellow-500" />
                            Extreme Volatility
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            The price of Bitcoin and other cryptos can go up 20% in a day, or crash 50% in an hour.
                        </p>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
                            <p className="text-sm text-yellow-500 font-bold">⚠️ Advice: Never invest money you cannot afford to lose.</p>
                        </div>
                    </div>
                    {/* Visual: Volatility Chart */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-48 flex items-end justify-between gap-1 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>

                        {[20, 40, 30, 60, 50, 80, 40, 90, 20, 50, 10, 30].map((h, i) => (
                            <div key={i} className="w-full bg-red-500/50 rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: SCAMS & SECURITY */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Security Risks</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 border-red-500/20 bg-red-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-red-500/20 rounded-xl text-red-500"><Skull className="w-6 h-6" /></div>
                            <h4 className="font-bold">Scams & Phishing</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Fake websites, fake giveaways ("Send 1 BTC, get 2 back"), and fake support agents are everywhere. Always double-check URLs.
                        </p>
                    </Card>
                    <Card className="p-6 border-orange-500/20 bg-orange-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-orange-500/20 rounded-xl text-orange-500"><Ghost className="w-6 h-6" /></div>
                            <h4 className="font-bold">Lost Keys</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            If you lose your Seed Phrase, your money is gone forever. Millions of Bitcoin are lost simply because people forgot their passwords.
                        </p>
                    </Card>
                    <Card className="p-6 border-slate-700 bg-slate-900">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-slate-700 rounded-xl text-slate-300"><RotateCcw className="w-6 h-6" /></div>
                            <h4 className="font-bold">No Reversals</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            If you send money to the wrong address, you cannot call the bank to cancel it. Blockchain transactions are final.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: ENVIRONMENTAL IMPACT */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Environmental Concerns</h3>
                        <p className="text-muted-foreground mb-4">
                            Some blockchains (like Bitcoin) use "Proof of Work" which consumes a lot of electricity to secure the network.
                        </p>
                        <p className="text-muted-foreground">
                            However, newer blockchains (like Ethereum) have switched to "Proof of Stake", which uses <strong>99.9% less energy</strong>. The industry is rapidly becoming greener.
                        </p>
                    </div>
                    <div className="w-32 h-32 flex items-center justify-center bg-green-900/20 rounded-full border border-green-900/50">
                        <div className="text-center">
                            <RefreshCw className="w-10 h-10 text-green-500 mx-auto mb-2 animate-spin-slow" />
                            <span className="text-xs font-bold text-green-500">Green Tech</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CONCLUSION */}
            <section className="container mx-auto px-4 text-center py-12">
                <h2 className="text-4xl font-bold mb-6">Module Complete! 🎓</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    You now understand the foundation of the future internet. Blockchain is complex, but the core idea is simple: <br />
                    <span className="text-primary font-bold">Trust through Math, not Middlemen.</span>
                </p>
            </section>

            {/* NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
                <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/23/topic/9")}>
                    <ArrowLeft className="w-4 h-4" /> Back: Use Cases
                </Button>

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 23</p>
                    <p className="text-lg font-bold">Concept 10 of 10</p>
                </div>

                <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 bg-green-600 hover:bg-green-700" onClick={() => navigate("/modules")}>
                    Finish Module <Trophy className="w-4 h-4" />
                </Button>
            </div>

        </div>
    );
};

// --- MAIN MODULE COMPONENT ---
const Module23 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    // Default to Topic 1 if no topicId is provided
    useEffect(() => {
        if (!topicId) {
            navigate("/module/23/topic/1", { replace: true });
        }
    }, [topicId, navigate]);

    return (
        <div className="min-h-screen bg-background pb-20">
            {topicId === "1" && <Topic1WhatIsBlockchain />}
            {topicId === "2" && <Topic2HowBlockchainWorks />}
            {topicId === "3" && <Topic3KeyCharacteristics />}
            {topicId === "4" && <Topic4CryptographyBasics />}
            {topicId === "5" && <Topic5WhatIsCrypto />}
            {topicId === "6" && <Topic6HowTransactionsWork />}
            {topicId === "7" && <Topic7CryptoWallets />}
            {topicId === "8" && <Topic8NFTs />}
            {topicId === "9" && <Topic9UseCases />}
            {topicId === "10" && <Topic10Risks />}
            {/* Other topics will be added here one by one */}
        </div>
    );
};



export default Module23;

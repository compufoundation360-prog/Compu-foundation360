import React, { useState } from "react";
import {
    ArrowRight,
    ArrowLeft,
    ArrowDown,
    Layers,
    Zap,
    CheckCircle2,
    Home,
    Cpu,
    HardDrive,
    Globe,
    Shield,
    Activity,
    Server,
    Smartphone,
    Info,
    Box,
    Download,
    Monitor,
    Disc,
    Plus,
    AlertTriangle,
    XCircle,
    Package,
    Clock,
    Anchor,
    Cloud,
    FileCode,
    Hammer,
    Terminal,
    Play,
    List,
    Square,
    Rocket,
    Code2,
    Target,
    User,
    Users
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Helper for Image Placeholders consistent with the project's logic
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

// --- TOPIC 1: What is Virtualization? ---
const Topic1WhatIsVirtualization = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-virtualization-intro" className="space-y-24">
            {/* SECTION 1: Introduction (The Single Machine) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Core Concept</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Introduction to Virtualization</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            <strong>Virtualization</strong> is a revolutionary technology that allows <strong>one physical computer to act like multiple computers</strong>.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            Instead of using one computer for only one task or operating system, virtualization lets a single machine run multiple virtual environments at the exact same time. Each one behaves like a completely separate real computer.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Simple Definition
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"Virtualization means creating virtual computers inside one real computer."</p>
                        </Card>
                    </div>

                    {/* Interactive Abstract Visual */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl bg-slate-950 relative aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                {/* Center Node (Physical Host) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-2xl blur-xl animate-pulse" />
                                <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary" />

                                {/* Satellite Virtual Nodes */}
                                {[0, 120, 240].map((deg, i) => (
                                    <div key={i} className="absolute top-1/2 left-1/2 w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            transform: `rotate(${deg}deg) translate(8.5rem) rotate(-${deg}deg) translate(-50%, -50%)`,
                                        }}>
                                        <Package className="w-6 h-6 text-indigo-400" />
                                    </div>
                                ))}
                                {/* Connection Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                    {[0, 120, 240].map((deg, i) => {
                                        const rad = (deg - 90) * (Math.PI / 180);
                                        const x = 128 + 136 * Math.cos(rad);
                                        const y = 128 + 136 * Math.sin(rad);
                                        return (
                                            <motion.line
                                                key={i}
                                                x1="128" y1="128"
                                                x2={x} y2={y}
                                                stroke="rgba(99, 102, 241, 0.3)"
                                                strokeWidth="3"
                                                strokeDasharray="8 8"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: [0, 1, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                                            />
                                        );
                                    })}
                                </svg>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: What is a VM? */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('vm-structure-visual.jpg')}
                                alt="Virtual Machine Architecture"
                                description="Visualizing a software-based computer with its own window, running a different OS inside the main desktop."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Unit</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">What is a Virtual Machine (VM)?</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A <strong>Virtual Machine (VM)</strong> is a <strong>software-based computer</strong> that runs inside a real computer.
                        </p>
                        <p className="text-muted-foreground">
                            Even though it is not a physical object you can touch, it works exactly like one. A VM has its own:
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                                        <Layers className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <strong>Operating System:</strong><br />
                                        It can run Windows, Linux, or macOS independently.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                                        <Server className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <strong>Isolated Applications:</strong><br />
                                        Apps installed in a VM don't affect your main computer.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                                        <Info className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <strong>Custom Settings:</strong><br />
                                        It has its own unique user profiles, network settings, and files.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm font-bold text-primary pl-4 border-l-2 border-primary">
                            Simple line: A virtual machine is a computer inside a computer.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Host vs Guest (Architecture) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Relationship</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">How Virtual Machines Work</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            In virtualization, we divide the computers into two roles: the provider and the user.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm hover:border-blue-500/50 transition-colors">
                                <div className="p-3 bg-blue-500/10 rounded-full w-fit mb-3">
                                    <Server className="w-6 h-6 text-blue-500" />
                                </div>
                                <h4 className="font-bold mb-1">The Host</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">The <strong>physical machine</strong> that provides the actual hardware power (CPU, RAM, Storage).</p>
                            </div>
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm hover:border-emerald-500/50 transition-colors">
                                <div className="p-3 bg-emerald-500/10 rounded-full w-fit mb-3">
                                    <Package className="w-6 h-6 text-emerald-500" />
                                </div>
                                <h4 className="font-bold mb-1">The Guest</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">The <strong>Virtual Machine</strong> that "rents" a portion of the host's resources to run independently.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-2xl border border-dashed border-border mt-4">
                            <p className="text-sm text-foreground/70">
                                <strong>Resource Sharing:</strong> Each VM gets its own slice of the Host's brain (CPU) and memory (RAM), ensuring they don't fight over the same space.
                            </p>
                        </div>
                    </div>

                    {/* Image Container (Right) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('host-vs-guest-diagram.jpg')}
                                alt="Host machine sharing resources"
                                description="A diagram: One Big Server (Host) pointing to 3 Smaller boxes (Guests), showing arrows for CPU, RAM, and Storage distribution."
                                iconColor="text-purple-500"
                                bgColor="bg-purple-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: The House Analogy */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-14 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase border border-blue-500/20 w-fit">
                                <Home className="w-3 h-3" /> Real-Life Example
                            </div>
                            <h2 className="text-3xl font-semibold text-white leading-tight">The "Large House" Analogy</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Think of your physical computer like a <strong>Large House</strong>.
                            </p>
                            <div className="space-y-6 mt-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-slate-900 rounded-2xl text-2xl">ðŸ </div>
                                    <div>
                                        <h4 className="font-bold text-white">The House = One Physical Computer</h4>
                                        <p className="text-sm text-slate-400">It provides the foundation, walls, and electricity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-slate-900 rounded-2xl text-2xl">ðŸ›‹ï¸</div>
                                    <div>
                                        <h4 className="font-bold text-white">The Rooms = Virtual Machines</h4>
                                        <p className="text-sm text-slate-400">Different people live in different rooms. Each room works independently, but all share the same building.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-0 overflow-hidden rounded-[40px] border border-slate-700 shadow-2xl bg-slate-900 aspect-video">
                            <ImageWithFallback
                                src={getImageUrl('virtualization-house-analogy.jpg')}
                                alt="House and Rooms analogy for VMs"
                                description="Visualizing a house structure where rooms are labeled 'Windows Room', 'Linux Room', and 'Old Games Room'."
                                iconColor="text-orange-400"
                                bgColor="bg-orange-400/10"
                            />
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Why It's Needed (Efficiency) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('efficiency-visual.jpg')}
                                alt="Solving underuse"
                                description="Visualizing one computer sitting empty vs one computer full of activity circles."
                                iconColor="text-indigo-500"
                                bgColor="bg-indigo-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Need</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Why do we need it?</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Before virtualization, computers were <strong>underused</strong>. A powerful server might only use 5% of its brainpower for one task.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-background border border-border/50 rounded-2xl shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold shrink-0">âŒ</div>
                                <p className="text-sm font-medium">Physical computers are expensive to buy and manage.</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background border border-border/50 rounded-2xl shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold shrink-0">âŒ</div>
                                <p className="text-sm font-medium">Running 10 different tasks used to require 10 different computers.</p>
                            </div>
                        </div>
                        <p className="text-foreground/70 leading-relaxed italic border-t border-border pt-4">
                            Virtualization solves this by using <strong>one computer efficiently</strong> to do the job of many.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Benefits (The Grid) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Advantages</p>
                    <h2 className="text-4xl font-semibold text-foreground leading-tight mb-4">Benefits of Virtualization</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        Virtualization provides a wide range of advantages for students and giant companies alike.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-6 shadow-sm"><Activity className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Better Usage</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">One computer can do the work of many computers simultaneously.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6 shadow-sm"><Package className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Cost Saving</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Significant savings as less hardware is required to be purchased.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6 shadow-sm"><Shield className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Easy Testing</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Safely test different operating systems and apps without risk.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6 shadow-sm"><Zap className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Isolation</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">High stability: if one virtual machine crashes, all others keep working.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Common Uses & Daily Life */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Applications</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Virtualization in Daily Life</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <p className="font-bold">Cloud Servers</p>
                                    <p className="text-sm text-muted-foreground">Websites like Google and Instagram run on massive cloud servers using VMs.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <p className="font-bold">Running Multiple OS</p>
                                    <p className="text-sm text-muted-foreground">Running Windows and Linux on the same laptop for development.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <p className="font-bold">Software Testing</p>
                                    <p className="text-sm text-muted-foreground">Companies use VMs to test software updates before sending them to users.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <p className="font-bold">Running Old Software</p>
                                    <p className="text-sm text-muted-foreground">Running classic Windows 95 software on a modern Windows 11 system.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Image Container (Right) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('daily-life-vms.jpg')}
                                alt="Virtualization everywhere"
                                description="A collection of icons: Globe, Server, Code, and Apps, showing how virtualization is the backbone of modern IT."
                                iconColor="text-cyan-500"
                                bgColor="bg-cyan-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 8: Final Summary (Student Box) */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Key Takeaways
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Creates Virtual Computers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Runs inside a real PC</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Saves Cost & Resources</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 1</p>
                        <p className="text-xl font-bold italic">Next: VMs vs Physical Machines</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/2")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};


// --- TOPIC 2: Virtual Machines (VMs) vs Physical Machines ---
const Topic2VMsVsPhysical = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-vms-vs-physical" className="space-y-24">
            {/* SECTION 1: Intro (The Difference) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Comparison Guide</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Virtual Machines vs Physical Machines</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            To truly understand virtualization, you first need to understand the difference between a real computer (<strong>Physical Machine</strong>) and its software-based counterpart (<strong>Virtual Machine</strong>).
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-blue-400 font-mono text-xs">
                                <Cpu className="w-4 h-4" /> Physical = Hardware
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 font-mono text-xs">
                                <Package className="w-4 h-4" /> Virtual = Software
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square">
                        <ImageWithFallback
                            src={getImageUrl('physical-vs-virtual-hero.jpg')}
                            alt="Physical vs Virtual Machines"
                            description="A split visual: One side showing a physical desktop tower, the other side showing multiple glowing digital windows representing VMs."
                            iconColor="text-blue-500"
                            bgColor="bg-blue-500/10"
                        />
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Physical Machine Details */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('physical-machine-parts.jpg')}
                                alt="Physical Computer Hardware"
                                description="A clear photo of a real computer setup with a screen, CPU tower, keyboard, and mouse."
                                iconColor="text-slate-500"
                                bgColor="bg-slate-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Basics</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">What is a Physical Machine?</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A <strong>Physical Machine</strong> is a real computer with physical parts that you can see and touch.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <p className="text-sm font-medium">Has its own CPU, RAM, and Storage drives.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <p className="text-sm font-medium">Requires physical space and electricity.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <p className="text-sm font-medium">Usually runs exactly one operating system at a time.</p>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-primary pl-4 border-l-2 border-primary">
                            Simple line: A physical machine is a real computer you can touch.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Virtual Machine Details */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Virtual</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">What is a Virtual Machine?</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A <strong>Virtual Machine (VM)</strong> is a computer created using software that lives inside your physical computer.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <p className="text-sm font-medium">Shares hardware (CPU/RAM) with other VMs.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <p className="text-sm font-medium">Multiple VMs can run on one physical computer.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <p className="text-sm font-medium">Can be created or deleted in seconds.</p>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-primary pl-4 border-l-2 border-primary">
                            Simple line: A virtual machine is a computer created using software.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('vm-on-one-host.jpg')}
                                alt="Many VMs on one host"
                                description="A single physical computer with three virtual desktops glowing on its screen."
                                iconColor="text-indigo-500"
                                bgColor="bg-indigo-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Comparison Table */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-foreground">Quick Comparison Table</h2>
                </div>
                <Card className="overflow-hidden border border-border/70 rounded-[32px] shadow-sm max-w-4xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-muted/50 border-b border-border/70">
                                <tr>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-primary">Feature</th>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-slate-500">Physical Machine</th>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-indigo-500">Virtual Machine</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                <tr>
                                    <td className="p-6 font-bold text-sm">Hardware</td>
                                    <td className="p-6 text-sm text-foreground/70">Real, separate components</td>
                                    <td className="p-6 text-sm text-foreground/70">Shared from host machine</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Operating System</td>
                                    <td className="p-6 text-sm text-foreground/70">Runs one OS</td>
                                    <td className="p-6 text-sm text-foreground/70">Each VM runs its own OS</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Setup Speed</td>
                                    <td className="p-6 text-sm text-foreground/70">Hours/Days (Hardware delivery)</td>
                                    <td className="p-6 text-sm text-foreground/70">Minutes (Software creation)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Isolation</td>
                                    <td className="p-6 text-sm text-foreground/70">Limited by cables</td>
                                    <td className="p-6 text-sm text-foreground/70">High (Complete software wall)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Cost</td>
                                    <td className="p-6 text-sm text-foreground/70">Expensive hardware</td>
                                    <td className="p-6 text-sm text-foreground/70">Scalable & Cost-effective</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </section>

            {/* SECTION 5: Pros & Cons (The Real World) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Physical Pros/Cons */}
                    <Card className="p-8 border-border bg-card rounded-[40px] space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl"><Server className="text-slate-500 w-6 h-6" /></div>
                                <h3 className="text-2xl font-bold">Physical Machines</h3>
                            </div>
                            <div className="grid gap-6">
                                <div className="space-y-3">
                                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Advantages</p>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-muted-foreground">â€¢ Full hardware performance</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Simple to understand (what you see is what you get)</li>
                                        <li className="text-sm text-muted-foreground">â€¢ No sharing of CPU brainpower</li>
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Disadvantages</p>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-muted-foreground">â€¢ High cost of purchase</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Wastes resources (underused)</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Hard to scale or add more</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Virtual Pros/Cons */}
                    <Card className="p-8 border-border bg-card rounded-[40px] space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl"><Package className="text-indigo-500 w-6 h-6" /></div>
                                <h3 className="text-2xl font-bold">Virtual Machines</h3>
                            </div>
                            <div className="grid gap-6">
                                <div className="space-y-3">
                                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Advantages</p>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-muted-foreground">â€¢ Excellent resource usage</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Significant hardware cost savings</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Create or delete in clicks</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Safe environment for testing</li>
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Disadvantages</p>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-muted-foreground">â€¢ Tiny performance overhead</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Dependent on the host machine</li>
                                        <li className="text-sm text-muted-foreground">â€¢ Needs virtualization software</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Office Analogy */}
            <section className="container mx-auto px-4">
                <div className="bg-indigo-950 p-8 sm:p-14 rounded-[40px] border border-indigo-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold tracking-wide uppercase border border-indigo-500/30 w-fit">
                                <Activity className="w-3 h-3" /> Real-Life Comparison
                            </div>
                            <h2 className="text-4xl font-semibold text-white leading-tight">The "Office Building" Analogy</h2>
                            <p className="text-indigo-200/70 leading-relaxed text-lg italic">
                                Think of an office setup to understand the efficiency of VMs.
                            </p>
                            <div className="space-y-8 mt-10">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-slate-900 rounded-2xl text-2xl shadow-xl flex items-center justify-center w-12 h-12">ðŸ¢</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Physical Machine = One building per company</h4>
                                        <p className="text-sm text-indigo-300/60">Very expensive! Each company needs its own parking, lobby, and elevators.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-slate-900 rounded-2xl text-2xl shadow-xl flex items-center justify-center w-12 h-12">ðŸ¬</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Virtual Machine = Many offices in one building</h4>
                                        <p className="text-sm text-indigo-300/60">Share the same lobby and elevators but work in completely separate rooms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-0 overflow-hidden rounded-[40px] border border-indigo-800 shadow-2xl bg-slate-900 aspect-video">
                            <ImageWithFallback
                                src={getImageUrl('office-building-analogy.jpg')}
                                alt="Offices inside a building analogy for VMs"
                                description="A clear visual of a modern office building where different office windows are labeled as separate companies."
                                iconColor="text-indigo-400"
                                bgColor="bg-indigo-400/10"
                            />
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Use Cases */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Deployment</p>
                    <h2 className="text-4xl font-semibold text-foreground mb-4">When to use which?</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-muted/40 rounded-3xl w-fit">
                            <Server className="w-6 h-6 text-slate-500" />
                            <h3 className="font-bold">Use Physical Machines for:</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Maximum Performance (Gaming PCs)",
                                "Heavy Hardware Tasks (Video Editing)",
                                "Critical Data that must be totally alone",
                                "High-performance processing servers"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-center p-4 bg-background border border-border/50 rounded-2xl hover:border-slate-300 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-slate-400" />
                                    <span className="text-sm font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-3xl w-fit">
                            <Package className="w-6 h-6 text-primary" />
                            <h3 className="font-bold">Use Virtual Machines for:</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Testing new software safely",
                                "Learning & Practice (Sandbox)",
                                "Cloud Hosting (Websites)",
                                "Running older apps on new systems"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-center p-4 bg-background border border-border/50 rounded-2xl hover:border-primary/50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Why Companies Prefer VMs */}
            <section className="container mx-auto px-4">
                <Card className="p-8 sm:p-14 rounded-[50px] bg-slate-900 border-none shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full" />

                    <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
                        <div className="p-3 bg-white/5 rounded-2xl w-fit mx-auto border border-white/10 shadow-xl">
                            <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-4xl font-bold text-white">Why Modern Companies Prefer VMs</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Most tech companies and giant service providers (like Netflix or Google) use thousands of Virtual Machines instead of physical ones for four key reasons:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                            {[
                                { label: "Save Money", icon: "ðŸ’°" },
                                { label: "Save Space", icon: "ðŸŒ³" },
                                { label: "Ease of Management", icon: "ðŸ› ï¸" },
                                { label: "Easy Scaling", icon: "ðŸ“ˆ" }
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="text-3xl">{item.icon}</div>
                                    <p className="text-xs font-bold text-white/70 uppercase tracking-widest">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 9: Final Topic Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <ul className="grid md:grid-cols-2 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Physical = Real & Touchable hardware</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Virtual = Software-based computer</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>VMs share hardware resources</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Physical = Full performance</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/1")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Virtualization Intro</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 50%</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/3")}>
                        Next Topic: Hypervisors <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};


// --- TOPIC 3: Hypervisors ---
const Topic3Hypervisors = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-hypervisors" className="space-y-24">
            {/* SECTION 1: Intro (What is a Hypervisor?) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Manager</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is a Hypervisor?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            A <strong>hypervisor</strong> is a core software layer that allows multiple virtual machines (VMs) to run on one physical computer.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            It acts like a traffic controller, managing the resources of the physical machine and distributing them to each virtual machine.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Simple Explanation
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"A hypervisor divides one powerful computer into many smaller virtual computers."</p>
                        </Card>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square">
                        <ImageWithFallback
                            src={getImageUrl('hypervisor-intro-visual.jpg')}
                            alt="Hypervisor Conceptual Visual"
                            description="Visualizing a software layer sitting between hardware and virtual machines, distributing resources like water pipes."
                            iconColor="text-orange-500"
                            bgColor="bg-orange-500/10"
                        />
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Why it exists (Problem vs Solution) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Without Hypervisor */}
                    <Card className="p-8 border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 rounded-[40px] space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-full text-red-600 font-bold">âŒ</div>
                            <h3 className="text-2xl font-bold">Without Hypervisor</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                <span className="text-foreground/80 font-medium">One computer ran only ONE operating system.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                <span className="text-foreground/80 font-medium">Most hardware power (CPU/RAM) sat idle and unused.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                <span className="text-foreground/80 font-medium">High cost: businesses had to buy many physical machines.</span>
                            </li>
                        </ul>
                    </Card>

                    {/* With Hypervisor */}
                    <Card className="p-8 border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-950/10 rounded-[40px] space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full text-green-600 font-bold">âœ…</div>
                            <h3 className="text-2xl font-bold">With Hypervisor</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80 font-medium">One computer runs MULTIPLE operating systems.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80 font-medium">Full use of RAM, CPU, and storage.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80 font-medium">Lower cost and much higher efficiency.</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: Responsibilities */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Functions</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">What does a Hypervisor control?</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Think of the hypervisor as the <strong>Resource Manager</strong>. It ensures every VM gets what it needs without fighting others.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {[
                                { icon: Cpu, label: "CPU Allocation", desc: "Decides processing power share" },
                                { icon: Layers, label: "Memory (RAM)", desc: "Distributes memory safely" },
                                { icon: HardDrive, label: "Storage Mgmt", desc: "Virtual hard disk control" },
                                { icon: Shield, label: "Isolation", desc: "Stops VMs from harming each other" },
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-4 rounded-2xl border border-border/50 shadow-sm flex flex-col gap-2">
                                    <item.icon className="w-6 h-6 text-primary mb-1" />
                                    <h4 className="font-bold text-sm">{item.label}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('hypervisor-controls.jpg')}
                                alt="Hypervisor Controls Dashboard"
                                description="A control panel visual showing sliders for CPU, RAM, and Storage being adjusted for different VMs."
                                iconColor="text-pink-500"
                                bgColor="bg-pink-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Types of Hypervisors */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Classification</p>
                    <h2 className="text-4xl font-semibold text-foreground">Types of Hypervisors</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">There are two main ways to run a hypervisor, depending on whether it sits directly on hardware or on an OS.</p>
                </div>

                <div className="space-y-24">
                    {/* TYPE 1 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Card className="p-8 bg-slate-900 border-slate-800 text-white rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
                            <div className="relative z-10 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wide uppercase border border-blue-500/30 w-fit">
                                    Type 1
                                </div>
                                <h3 className="text-3xl font-bold">Bare-Metal Hypervisor</h3>
                                <p className="text-slate-400 text-lg">Runs <strong>directly on physical hardware</strong>. No Windows or Linux is required underneath.</p>

                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-4">
                                    <div className="flex justify-center items-center text-xs font-mono font-bold text-slate-500 tracking-widest mb-2">ARCHITECTURE</div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-40 py-2 bg-slate-700 rounded-lg text-center text-xs text-slate-300">Virtual Machines</div>
                                        <ArrowDown className="w-4 h-4 text-slate-600" />
                                        <div className="w-40 py-3 bg-blue-600 rounded-lg text-center font-bold text-white shadow-lg shadow-blue-900/20">Hypervisor (Type 1)</div>
                                        <ArrowDown className="w-4 h-4 text-slate-600" />
                                        <div className="w-40 py-2 bg-slate-800 rounded-lg text-center text-xs text-slate-400 border border-slate-700">Physical Hardware</div>
                                    </div>
                                </div>

                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Extremely fast performance</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Very stable & secure</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Used in Data Centers & Cloud</li>
                                </ul>
                            </div>
                        </Card>

                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold">Why is Type 1 faster?</h4>
                            <p className="text-foreground/80 leading-relaxed">
                                Because there is <strong>no operating system in the middle</strong>. It talks directly to the hardware, reducing lag and overhead. This is like building a house directly on solid ground instead of on top of another building.
                            </p>
                            <div className="p-6 bg-muted rounded-3xl border border-border/50">
                                <h5 className="font-bold mb-3 text-sm uppercase tracking-wide text-primary">Key Examples</h5>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-background rounded-full border shadow-sm text-sm font-medium">VMware ESXi</span>
                                    <span className="px-3 py-1 bg-background rounded-full border shadow-sm text-sm font-medium">Microsoft Hyper-V (Server)</span>
                                    <span className="px-3 py-1 bg-background rounded-full border shadow-sm text-sm font-medium">Xen</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TYPE 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 lg:order-1">
                            <h4 className="text-2xl font-bold">What is Type 2?</h4>
                            <p className="text-foreground/80 leading-relaxed">
                                A <strong>Type 2 (Hosted) Hypervisor</strong> runs on top of your existing OS (like Windows 10 or macOS). It's just an app you install.
                            </p>
                            <div className="p-6 bg-muted rounded-3xl border border-border/50">
                                <h5 className="font-bold mb-3 text-sm uppercase tracking-wide text-primary">Key Examples</h5>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-background rounded-full border shadow-sm text-sm font-medium">VirtualBox</span>
                                    <span className="px-3 py-1 bg-background rounded-full border shadow-sm text-sm font-medium">VMware Workstation</span>
                                    <span className="px-3 py-1 bg-background rounded-full border shadow-sm text-sm font-medium">Parallels</span>
                                </div>
                            </div>
                            <p className="text-sm font-bold text-muted-foreground italic">
                                Best for: Students, learning, and testing new apps safely.
                            </p>
                        </div>

                        <Card className="p-8 bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-foreground rounded-[40px] relative overflow-hidden lg:order-2">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
                            <div className="relative z-10 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wide uppercase border border-purple-500/20 w-fit">
                                    Type 2
                                </div>
                                <h3 className="text-3xl font-bold">Hosted Hypervisor</h3>
                                <p className="text-muted-foreground text-lg">Runs <strong>inside an OS</strong>. Easiest to use for beginners.</p>

                                <div className="bg-background/50 p-6 rounded-2xl border border-border/50 space-y-4">
                                    <div className="flex justify-center items-center text-xs font-mono font-bold text-muted-foreground tracking-widest mb-2">ARCHITECTURE</div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-40 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-center text-xs">Virtual Machines</div>
                                        <ArrowDown className="w-4 h-4 text-muted-foreground" />
                                        <div className="w-40 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-center font-bold shadow-sm">Hypervisor (Type 2)</div>
                                        <ArrowDown className="w-4 h-4 text-muted-foreground" />
                                        <div className="w-40 py-2 bg-slate-300 dark:bg-slate-700 rounded-lg text-center text-xs font-bold">Host OS (Windows)</div>
                                    </div>
                                </div>

                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Easy to install (like any app)</li>
                                    <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Good for learning</li>
                                    <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Slightly slower performance</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Comparison Table */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-foreground">Type 1 vs Type 2</h2>
                </div>
                <Card className="overflow-hidden border border-border/70 rounded-[32px] shadow-sm max-w-4xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-muted/50 border-b border-border/70">
                                <tr>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-primary">Feature</th>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-blue-500">Type 1 (Bare Metal)</th>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-purple-500">Type 2 (Hosted)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                <tr>
                                    <td className="p-6 font-bold text-sm">Runs On</td>
                                    <td className="p-6 text-sm text-foreground/70">Direct Hardware</td>
                                    <td className="p-6 text-sm text-foreground/70">Host Operating System</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Performance</td>
                                    <td className="p-6 text-sm text-foreground/70">Very High (Fastest)</td>
                                    <td className="p-6 text-sm text-foreground/70">Medium (Slower)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Difficulty</td>
                                    <td className="p-6 text-sm text-foreground/70">Difficult (Pro Use)</td>
                                    <td className="p-6 text-sm text-foreground/70">Easy (Beginner Friendly)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Best For</td>
                                    <td className="p-6 text-sm text-foreground/70">Cloud, Servers, Enterprise</td>
                                    <td className="p-6 text-sm text-foreground/70">Students, Testing, Learning</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </section>

            {/* SECTION 6: Real World & Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-slate-900 text-white p-10 rounded-[40px] text-center border-2 border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 50%, #1e293b 50%, #1e293b 75%, transparent 75%, transparent)", backgroundSize: "40px 40px" }} />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Real-World Tech</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                            Hypervisors are hidden heroes. They power the entire internet cloud (AWS, Azure, Google Cloud). Every time you watch Netflix or store a file on Drive, a Type 1 Hypervisor is likely working behind the scenes.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono tracking-widest uppercase text-blue-300">
                            <div className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">Enables Virtualization</div>
                            <div className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">Manages Resources</div>
                            <div className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">Isolates Systems</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/2")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Hypervisors</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 75%</p>
                    </div>
                    {/* Placeholder for Next Topic */}
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/4")}>
                        Next Topic: VirtualBox <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};


// --- TOPIC 4: VirtualBox Basics ---
const Topic4VirtualBoxBasics = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-virtualbox-basics" className="space-y-24">
            {/* SECTION 1: Intro (The Tool) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Tool</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is VirtualBox?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            <strong>VirtualBox</strong> is free virtualization software that allows you to run <strong>another operating system inside your existing computer</strong>.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            It creates a "virtual computer" (VM) that lives in a window on your desktop. It is completely safe, isolated, and doesn't affect your main system at all.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Simple Definition
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"VirtualBox lets you run a computer inside your computer, like a game."</p>
                        </Card>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square">
                        <ImageWithFallback
                            src={getImageUrl('virtualbox-intro.jpg')}
                            alt="VirtualBox Dashboard"
                            description="A screenshot of the VirtualBox interface showing a list of virtual machines like Ubuntu and Windows 10."
                            iconColor="text-blue-500"
                            bgColor="bg-blue-500/10"
                        />
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Why Important (Benefits Grid) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Why Learn It?</p>
                    <h2 className="text-4xl font-semibold text-foreground leading-tight mb-4">Why Beginners Use VirtualBox</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        It is the standard tool for learning IT, Cybersecurity, and DevOps because it removes the risk of breaking things.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-6 shadow-sm"><CheckCircle2 className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Free & Open</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Completely free to download and use forever.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6 shadow-sm"><Shield className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Zero Risk</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Mistakes inside the VM cannot damage your real computer.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6 shadow-sm"><Download className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Easy Setup</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Installs just like any other normal application.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6 shadow-sm"><Activity className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Experiment</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Try Linux, old Windows versions, or new tools safely.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: Core Concepts (Split View) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('vm-core-concepts.jpg')}
                                alt="RAM and CPU Allocation"
                                description="Diagram showing a slider for RAM allocation (4GB/16GB) to a Virtual Machine."
                                iconColor="text-pink-500"
                                bgColor="bg-pink-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-8 lg:order-2">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Fundamentals</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">3 Core Concepts</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Before starting, you need to understand three key terms you will see in the software.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl shrink-0"><Monitor className="w-6 h-6 text-indigo-600" /></div>
                                <div>
                                    <h4 className="font-bold text-lg">1. The Virtual Machine (VM)</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Think of this as the "empty computer shell". It creates the fake hardware (screen, hard drive) waiting for an OS.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-2xl shrink-0"><Cpu className="w-6 h-6 text-pink-600" /></div>
                                <div>
                                    <h4 className="font-bold text-lg">2. Resource Allocation</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">You must lend some of your real RAM and CPU to the VM. <br /><span className="text-red-500 font-bold text-xs">Rule: Never give more than 50% of your total RAM.</span></p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl shrink-0"><Disc className="w-6 h-6 text-cyan-600" /></div>
                                <div>
                                    <h4 className="font-bold text-lg">3. The ISO File</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">This is your installation disk file (e.g., Ubuntu.iso). It's what limits the VM to be Linux, Windows, or another OS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Creation Steps (Dark Section like House Analogy) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-14 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase border border-blue-500/20 w-fit">
                                <Plus className="w-3 h-3" /> Step-by-Step
                            </div>
                            <h2 className="text-3xl font-semibold text-white leading-tight">Creating Your First VM</h2>

                            <div className="space-y-8 mt-4">
                                <div className="flex gap-4 items-start relative">
                                    <div className="absolute left-3 top-8 w-0.5 h-16 bg-slate-800" />
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">1</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Click "New" & Name It</h4>
                                        <p className="text-sm text-slate-400">Open VirtualBox and click the big "New" button. Name your VM (e.g., "Ubuntu Lab") and select "Linux".</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start relative">
                                    <div className="absolute left-3 top-8 w-0.5 h-16 bg-slate-800" />
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">2</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Allocate Memory</h4>
                                        <p className="text-sm text-slate-400">Use the slider to give it RAM. If you have 8GB, give it 2GB or 4GB. Do not enter the "Red Zone".</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">3</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Select ISO & Start</h4>
                                        <p className="text-sm text-slate-400">In Settings then in Storage, add your downloaded .iso file to the empty disk controller. Then click Start!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-0 overflow-hidden rounded-[40px] border border-slate-700 shadow-2xl bg-slate-900 aspect-square">
                            <ImageWithFallback
                                src={getImageUrl('virtualbox-creation-steps.jpg')}
                                alt="VirtualBox Creation Wizard"
                                description="Visual showing the 'Create Virtual Machine' popup window where you enter the Name and OS Type."
                                iconColor="text-blue-400"
                                bgColor="bg-blue-400/10"
                            />
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Safety Rules (Best Practices) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-amber-50 dark:bg-amber-950/20 p-8 sm:p-12 rounded-[40px] border border-amber-100 dark:border-amber-900/30">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-full text-amber-600"><AlertTriangle className="w-6 h-6" /></div>
                            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">Important Safety Rules</h2>
                        </div>
                        <p className="text-foreground/80">VirtualBox is safe, but improper configuration can slow down your main computer.</p>

                        <div className="space-y-4">
                            <Card className="p-4 border-l-4 border-l-green-500 bg-background flex gap-4 items-start shadow-sm">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-green-700 dark:text-green-500">DO: Leave RAM for Host</h4>
                                    <p className="text-xs text-muted-foreground mt-1">Always keep at least 50% RAM for your main OS.</p>
                                </div>
                            </Card>
                            <Card className="p-4 border-l-4 border-l-red-500 bg-background flex gap-4 items-start shadow-sm">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-red-700 dark:text-red-500">DON'T: Assign All CPU Cores</h4>
                                    <p className="text-xs text-muted-foreground mt-1">If you give 100% CPU to the VM, your computer will freeze.</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[250px] rounded-3xl overflow-hidden">
                        <ImageWithFallback
                            src={getImageUrl('ram-allocation-warning.jpg')}
                            alt="Visual warning about RAM allocation showing a red zone on a slider"
                            description="A slider showing the 'Green Zone' (Safe) vs 'Red Zone' (Dangerous) for RAM usage."
                            iconColor="text-amber-500"
                            bgColor="bg-amber-500/10"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 6: Limitations (Reality Check) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-3">The Reality</p>
                    <h2 className="text-3xl font-semibold text-foreground">Limitations of VirtualBox</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-slate-50 dark:bg-slate-900/50 border-none">
                        <Activity className="w-10 h-10 text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2">Hardware Dependent</h4>
                        <p className="text-sm text-muted-foreground">It can only run as fast as your physical computer allows. Slow PC = Slow VM.</p>
                    </Card>
                    <Card className="p-6 bg-slate-50 dark:bg-slate-900/50 border-none">
                        <Server className="w-10 h-10 text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2">Not for Enterprise</h4>
                        <p className="text-sm text-muted-foreground">Companies used Type 1 Hypervisors (VMware ESXi) for real servers, not VirtualBox.</p>
                    </Card>
                    <Card className="p-6 bg-slate-50 dark:bg-slate-900/50 border-none">
                        <Layers className="w-10 h-10 text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2">Slower than Bare Metal</h4>
                        <p className="text-sm text-muted-foreground">Because it runs on top of Windows/macOS, there is a slight lag compared to Type 1.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Type 2 Hypervisor</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>ISO File = OS Usage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Safe Learning Tool</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Free & Open Source</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/3")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of VirtualBox Basics</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 80%</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/5")}>
                        Next Topic: Containers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 5: What are Containers? ---
const Topic5WhatAreContainers = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-what-are-containers" className="space-y-24">
            {/* SECTION 1: Intro */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Modern Way</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What are Containers?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            A <strong>container</strong> is a lightweight way to run an application along with everything it needs. It packs the code, libraries, and settings into one single unit.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            Unlike Virtual Machines, they don't need a full operating system. This makes them incredibly fast and efficient.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-lg text-sm font-bold">
                                <Package className="w-4 h-4" /> Lightweight
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-lg text-sm font-bold">
                                <Zap className="w-4 h-4" /> Super Fast
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-video bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-2xl relative">
                                <Package className="w-12 h-12 text-white" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                            </div>
                            <h3 className="text-2xl font-bold text-white">The Container</h3>
                            <p className="text-indigo-200">"Code once, run anywhere"</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Why Introduced? (Problem vs Solution) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 sm:p-12 rounded-[40px] border border-border/50">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h3 className="text-2xl font-bold mb-4">Why do we need them?</h3>
                        <p className="text-muted-foreground">Before containers, developers faced the "It works on my machine" problem.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 relative">
                        {/* Problem */}
                        <Card className="p-8 border-l-4 border-l-red-500 bg-background/50">
                            <div className="flex items-center gap-3 mb-4">
                                <XCircle className="w-6 h-6 text-red-500" />
                                <h4 className="font-bold text-lg text-red-700 dark:text-red-400">The Problem</h4>
                            </div>
                            <ul className="space-y-3 text-sm text-foreground/80">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" />Different OS versions caused crashes.</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" />Missing libraries on the server.</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" />Setting up took hours or days.</li>
                            </ul>
                        </Card>

                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-muted rounded-full items-center justify-center border border-border z-10">
                            <ArrowRight className="w-5 h-5 text-muted-foreground" />
                        </div>

                        {/* Solution */}
                        <Card className="p-8 border-l-4 border-l-green-500 bg-background/50">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                <h4 className="font-bold text-lg text-green-700 dark:text-green-400">The Solution</h4>
                            </div>
                            <ul className="space-y-3 text-sm text-foreground/80">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />Standardized environment.</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />Includes all dependencies inside.</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />Guaranteed to run the same everywhere.</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: VM vs Container Comparison */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-foreground">VM vs Container</h2>
                    <p className="text-muted-foreground mt-2">They look similar, but work very differently.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="font-bold text-xl">Virtual Machine</div>
                            <Monitor className="text-muted-foreground w-6 h-6" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm border-b pb-2">
                                <span className="text-muted-foreground">OS</span>
                                <span className="font-medium">Full OS (Heavy)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b pb-2">
                                <span className="text-muted-foreground">Startup</span>
                                <span className="font-medium">Minutes</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b pb-2">
                                <span className="text-muted-foreground">Size</span>
                                <span className="font-medium">Gigabytes (GB)</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 border-primary/50 bg-primary/5">
                        <div className="flex items-center justify-between mb-6">
                            <div className="font-bold text-xl text-primary">Container</div>
                            <Package className="text-primary w-6 h-6" />
                        </div>
                        <div className="space-y-4 text-foreground/80">
                            <div className="flex justify-between items-center text-sm border-b border-primary/20 pb-2">
                                <span className="opacity-70">OS</span>
                                <span className="font-bold">Shares Host OS (Light)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-primary/20 pb-2">
                                <span className="opacity-70">Startup</span>
                                <span className="font-bold">Milliseconds</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-primary/20 pb-2">
                                <span className="opacity-70">Size</span>
                                <span className="font-bold">Megabytes (MB)</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Analogy (House vs Room) */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[40px] p-8 sm:p-14 text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">The Real Life Analogy ðŸ </h2>
                            <p className="text-indigo-100 text-lg leading-relaxed">
                                Think of it like housing options:
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl h-fit"><Home className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Virtual Machine = A House</h4>
                                        <p className="text-sm text-indigo-200">Fully independent. Has its own plumbing, electricity, and foundation. Heavy and expensive.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-green-400/20 text-green-300 rounded-xl h-fit"><Box className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-green-300">Container = A Hotel Room</h4>
                                        <p className="text-sm text-indigo-200">You just use the room. The plumbing and electricity (OS Kernel) are shared by the hotel (Host).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block relative h-64">
                            <ImageWithFallback
                                src={getImageUrl('vm-vs-container-analogy.jpg')}
                                alt="Visual comparison of House vs Hotel Room"
                                description="Illustration showing a standalone house (VM) vs a large building with many rooms (Containers)."
                                iconColor="text-white"
                                bgColor="bg-white/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Importance & Use Cases */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Why It Matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Why The World Uses Containers</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="p-6 flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full"><Clock className="w-6 h-6" /></div>
                        <h4 className="font-bold">Fast Deployment</h4>
                        <p className="text-xs text-muted-foreground">Start apps in seconds.</p>
                    </Card>
                    <Card className="p-6 flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full"><Anchor className="w-6 h-6" /></div>
                        <h4 className="font-bold">Portable</h4>
                        <p className="text-xs text-muted-foreground">Runs on any machine.</p>
                    </Card>
                    <Card className="p-6 flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
                        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full"><Cloud className="w-6 h-6" /></div>
                        <h4 className="font-bold">Cloud Ready</h4>
                        <p className="text-xs text-muted-foreground">Perfect for AWS/Azure.</p>
                    </Card>
                    <Card className="p-6 flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
                        <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-full"><Server className="w-6 h-6" /></div>
                        <h4 className="font-bold">Efficient</h4>
                        <p className="text-xs text-muted-foreground">Less RAM & CPU usage.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Advanced Analogy (The Cargo Ship) */}
            <section className="container mx-auto px-4">
                <div className="bg-blue-950 rounded-[40px] p-8 sm:p-14 text-white relative overflow-hidden border border-blue-800">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative h-64">
                            <ImageWithFallback
                                src={getImageUrl('container-ship-analogy.jpg')}
                                alt="Cargo Ship loaded with standard containers"
                                description="A massive cargo ship carrying hundreds of identical colorful containers."
                                iconColor="text-blue-300"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wide uppercase border border-blue-500/30 w-fit">
                                <Anchor className="w-3 h-3" /> Historical Context
                            </div>
                            <h2 className="text-3xl font-bold">Why call them "Containers"? ðŸš¢</h2>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Before 1950, loading ships was slow because every box was a different size. Then came the <strong>Standard Shipping Container</strong>.
                            </p>
                            <p className="text-blue-200 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
                                Software Containers do the same thing. They wrap your code in a "standard box" so it can be shipped to any server (ship) without breaking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Limitations (Reality Check) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-3">The Catch</p>
                    <h2 className="text-3xl font-semibold text-foreground">Limitations of Containers</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Card className="p-8 bg-background border-l-4 border-l-amber-500 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600"><AlertTriangle className="w-6 h-6" /></div>
                            <h4 className="font-bold text-lg">Shared Kernel Risks</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Since all containers share the same host OS kernel, if the kernel crashes, <strong>ALL</strong> containers crash. VMs don't have this problem.
                        </p>
                    </Card>
                    <Card className="p-8 bg-background border-l-4 border-l-slate-500 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600"><Monitor className="w-6 h-6" /></div>
                            <h4 className="font-bold text-lg">OS Dependency</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A Linux container usually cannot run directly on Windows without a helper layer (like Hyper-V). They are not 100% universal.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION 8: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Packages Apps & Deps</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Lighter than VMs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Consistent Environment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Modern Development Standard</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/4")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Containers Intro</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 90%</p>
                    </div>
                    {/* Assuming Topic 6 is Docker Basics based on typical flow */}
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/6")}>
                        Next Topic: Docker Basics <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- Main Module Component ---
// --- TOPIC 6: Docker Basics ---
const Topic6DockerBasics = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-docker-basics" className="space-y-24">
            {/* SECTION 1: Intro (What is Docker?) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Tool</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is Docker?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Docker is a <strong>containerization tool</strong> that helps you build, package, run, and manage applications inside containers.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            It removes the common problem: "It works on my system but not on yours." Docker ensures the app runs exactly the same way on every computer.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl w-fit">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> In Simple Words
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"Docker allows an application to run the same way everywhere, regardless of system differences."</p>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-blue-950">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl">ðŸ³</span>
                        </div>
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                            <p className="text-blue-200 font-bold uppercase tracking-widest">Build â€¢ Ship â€¢ Run</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Why Docker Was Created */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 rounded-[40px] space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-full text-red-600 font-bold">ðŸ›‘</div>
                            <h3 className="text-2xl font-bold">Before Docker</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                <span className="text-foreground/80 font-medium">Manual installation of dependencies.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                <span className="text-foreground/80 font-medium">Apps behaved differently on different machines.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                <span className="text-foreground/80 font-medium">Deployment was slow and error-prone.</span>
                            </li>
                        </ul>
                    </Card>

                    <Card className="p-8 border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-950/10 rounded-[40px] space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full text-green-600 font-bold">âœ…</div>
                            <h3 className="text-2xl font-bold">With Docker</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80 font-medium">Packages app with EVERYTHING it needs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80 font-medium">Consistent environment everywhere.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80 font-medium">Simplified deployment and scaling.</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: The Core Concepts (Image vs Container) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-foreground">The Core Concepts</h2>
                    <p className="text-muted-foreground mt-4">To understand Docker, you must understand these three key terms.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Concept 1: Image */}
                    <Card className="p-8 border-border bg-card rounded-[32px] hover:border-blue-500/50 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform">
                                ðŸ“œ
                            </div>
                            <h3 className="text-xl font-bold mb-2">1. Docker Image</h3>
                            <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">The Blueprint</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                A <strong>read-only template</strong>. It contains the code, runtime, libraries, and settings.
                            </p>
                            <div className="p-4 bg-muted/50 rounded-xl text-xs border border-border/50">
                                <p className="font-bold flex items-center gap-2"><Disc className="w-3 h-3" /> Analogy</p>
                                <p className="text-muted-foreground mt-1">Like a <strong>Recipe</strong> or House Blueprint. You can't "eat" the recipe directly.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Concept 2: Container */}
                    <Card className="p-8 border-border bg-card rounded-[32px] hover:border-green-500/50 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full group-hover:bg-green-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform">
                                ðŸ“¦
                            </div>
                            <h3 className="text-xl font-bold mb-2">2. Docker Container</h3>
                            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-4">The Application</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                A <strong>running instance</strong> of an image. It's lightweight, starts fast, and does the actual work.
                            </p>
                            <div className="p-4 bg-muted/50 rounded-xl text-xs border border-border/50">
                                <p className="font-bold flex items-center gap-2"><Package className="w-3 h-3" /> Analogy</p>
                                <p className="text-muted-foreground mt-1">Like the <strong>Cooked Food</strong>. You create it FROM the recipe.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Concept 3: Docker Hub */}
                    <Card className="p-8 border-border bg-card rounded-[32px] hover:border-purple-500/50 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform">
                                â˜ï¸
                            </div>
                            <h3 className="text-xl font-bold mb-2">3. Docker Hub</h3>
                            <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">The Library</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                An <strong>online cloud repository</strong>. It's like an App Store for Docker images.
                            </p>
                            <div className="p-4 bg-muted/50 rounded-xl text-xs border border-border/50">
                                <p className="font-bold flex items-center gap-2"><Cloud className="w-3 h-3" /> Example</p>
                                <p className="text-muted-foreground mt-1">Where you download official images like Node.js, Python, or MySQL.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Comparison Table */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-foreground">Image vs Container</h2>
                </div>
                <Card className="overflow-hidden border border-border/70 rounded-[32px] shadow-sm max-w-4xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-muted/50 border-b border-border/70">
                                <tr>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-primary">Feature</th>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-blue-500">Docker Image</th>
                                    <th className="p-6 text-xs uppercase tracking-widest font-bold text-green-500">Docker Container</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                <tr>
                                    <td className="p-6 font-bold text-sm">Definition</td>
                                    <td className="p-6 text-sm text-foreground/70">Blueprint / Template</td>
                                    <td className="p-6 text-sm text-foreground/70">Running Instance</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">State</td>
                                    <td className="p-6 text-sm text-foreground/70">Read-only (Static)</td>
                                    <td className="p-6 text-sm text-foreground/70">Read & Write (Active)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Action</td>
                                    <td className="p-6 text-sm text-foreground/70">Used to CREATE</td>
                                    <td className="p-6 text-sm text-foreground/70">Is CREATED from</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </section>

            {/* SECTION: Why Docker Hub Is Important */}
            <section className="container mx-auto px-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-[40px] p-8 md:p-12">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                            <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">Why Docker Hub?</h3>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">It's not just a storage; it's a productivity booster.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border-none shadow-sm bg-background/80 backdrop-blur">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-green-500" /> Saves Time
                            </h4>
                            <p className="text-sm text-muted-foreground">Don't reinvent the wheel. Download ready-made images in seconds.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-sm bg-background/80 backdrop-blur">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Hammer className="w-5 h-5 text-orange-500" /> No Build Prep
                            </h4>
                            <p className="text-sm text-muted-foreground">Skip the "building from scratch" phase. Start coding immediately.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-sm bg-background/80 backdrop-blur">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-500" /> Trusted
                            </h4>
                            <p className="text-sm text-muted-foreground">Official images (like Node, Python) are maintained and secure.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: The Workflow */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
                    <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">The Docker Workflow</h2>
                        <p className="text-slate-400 mt-4">How it works in real life, step by step.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { step: "1", title: "Select", desc: "Developer selects an image (e.g. Node.js)" },
                            { step: "2", title: "Store", desc: "Image is stored locally or on Docker Hub" },
                            { step: "3", title: "Run", desc: "Docker runs the image as a container" },
                            { step: "4", title: "Live", desc: "The application is now running!" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-blue-900/50">{item.step}</div>
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: Real World Use Cases */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Industry Standard</p>
                    <h3 className="text-3xl font-bold text-foreground">Where is Docker Used?</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { icon: Globe, label: "Web Apps", desc: "Hosting websites" },
                        { icon: Server, label: "Backend", desc: "API services" },
                        { icon: Rocket, label: "Deployment", desc: "CI/CD Pipelines" }, // Rocket not imported? check or use Plane/Zap
                        { icon: Cloud, label: "Cloud", desc: "AWS, Azure, GCP" },
                        { icon: Layers, label: "Microservices", desc: "Complex systems" },
                        { icon: Activity, label: "DevOps", desc: "Automation" },
                    ].map((item, i) => (
                        <Card key={i} className="p-6 hover:border-primary/50 transition-colors flex flex-col items-center text-center gap-3">
                            <item.icon className="w-8 h-8 text-primary/80" />
                            <div>
                                <h4 className="font-bold text-sm">{item.label}</h4>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 6: Key Takeaways */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4" /> <span>Docker manages containers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Disc className="w-4 h-4" /> <span>Image = Blueprint</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Package className="w-4 h-4" /> <span>Container = Running App</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Cloud className="w-4 h-4" /> <span>Hub = App Store</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/5")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Docker Basics</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 60%</p>
                    </div>
                    {/* Point to Topic 7 which will be Docker Commands */}
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/7")}>
                        Next Topic: Docker Commands <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 7: Docker Commands ---
// --- TOPIC 7: Docker Commands ---
const Topic7DockerCommands = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-docker-commands" className="space-y-24">
            {/* SECTION 1: Intro */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Controls</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Docker Commands</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Docker commands are the controls you use to manage containersâ€”like the steering wheel and pedals of a car.
                        </p>

                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full">
                            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-green-400" /> Basic Requirements
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Docker must be installed
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Docker Service is running
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Using Terminal / Command Prompt
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="relative z-10 font-mono text-green-400 text-lg space-y-4 p-8">
                            <div className="flex gap-3">
                                <span className="text-blue-400">$</span>
                                <span className="typing-effect">docker pull ubuntu</span>
                            </div>
                            <div className="flex gap-3 opacity-50">
                                <span className="text-blue-400">$</span>
                                <span>docker run ...</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION: Command 1 - PULL */}
            <section className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                    <h2 className="text-3xl font-bold">Command: <code className="text-blue-600 font-mono">docker pull</code></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-border bg-card rounded-[32px] space-y-6">
                        <h3 className="text-xl font-bold">Download Image</h3>
                        <p className="text-muted-foreground">Used to download a docker image from Docker Hub to your local system.</p>
                        <div className="bg-muted/50 p-4 rounded-xl border border-border italic text-sm border-l-4 border-l-blue-500">
                            "It brings an image from the internet to your computer."
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Why needed?</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Containers cannot be created without images.</li>
                            </ul>
                        </div>
                    </Card>
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 font-mono text-sm text-slate-300 shadow-xl">
                            <p className="mb-2 text-slate-500"># Syntax</p>
                            <p className="mb-6">docker pull &lt;image_name&gt;</p>
                            <p className="mb-2 text-slate-500"># Example</p>
                            <p><span className="text-blue-400">$</span> docker pull ubuntu</p>
                            <p><span className="text-blue-400">$</span> docker pull node</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Command 2 - RUN */}
            <section className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold text-xl">2</div>
                    <h2 className="text-3xl font-bold">Command: <code className="text-green-600 font-mono">docker run</code></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-border bg-card rounded-[32px] space-y-6">
                        <h3 className="text-xl font-bold">Create & Start</h3>
                        <p className="text-muted-foreground">Used to create and start a container from an image.</p>
                        <div className="bg-muted/50 p-4 rounded-xl border border-border italic text-sm border-l-4 border-l-green-500">
                            "It turns an image into a running application."
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">What happens internally?</h4>
                            <ol className="space-y-2 text-sm list-decimal list-inside text-foreground/80 marker:text-green-500 marker:font-bold">
                                <li>Checks if image exists locally.</li>
                                <li>If not, downloads it (Auto-pull).</li>
                                <li>Creates the container.</li>
                                <li>Starts the container due.</li>
                            </ol>
                        </div>
                    </Card>
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 font-mono text-sm text-slate-300 shadow-xl">
                            <p className="mb-2 text-slate-500"># Syntax</p>
                            <p className="mb-6">docker run &lt;image_name&gt;</p>
                            <p className="mb-2 text-slate-500"># Example</p>
                            <p><span className="text-green-400">$</span> docker run nginx</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30">
                            <p className="text-xs font-bold uppercase text-green-600 mb-1">Beginner Concept</p>
                            <p className="text-sm">One Image â†’ Many Containers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Command 3 - PS */}
            <section className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold text-xl">3</div>
                    <h2 className="text-3xl font-bold">Command: <code className="text-purple-600 font-mono">docker ps</code></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-border bg-card rounded-[32px] space-y-6">
                        <h3 className="text-xl font-bold">List Running</h3>
                        <p className="text-muted-foreground">Used to list running containers.</p>
                        <div className="bg-muted/50 p-4 rounded-xl border border-border italic text-sm border-l-4 border-l-purple-500">
                            "It shows which containers are currently active."
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Why useful?</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> See container IDs & Names.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Check status (Up/Exited).</li>
                            </ul>
                        </div>
                    </Card>
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 font-mono text-sm text-slate-300 shadow-xl">
                            <p className="mb-2 text-slate-500"># Syntax</p>
                            <p className="mb-6">docker ps</p>
                            <p className="mb-2 text-slate-500"># Example Output</p>
                            <div className="text-xs opacity-70 border-l mb-1 pl-2">CONTAINER ID  IMAGE  STATUS</div>
                            <div className="text-xs border-l pl-2">a1b2c3d4      nginx  Up 5s</div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 flex gap-3">
                            <Info className="w-5 h-5 text-amber-600 shrink-0" />
                            <p className="text-sm text-amber-800 dark:text-amber-200">Note: This does <strong>not</strong> show stopped containers by default.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Command 4 - STOP */}
            <section className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold text-xl">4</div>
                    <h2 className="text-3xl font-bold">Command: <code className="text-red-600 font-mono">docker stop</code></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-border bg-card rounded-[32px] space-y-6">
                        <h3 className="text-xl font-bold">Stop Container</h3>
                        <p className="text-muted-foreground">Used to stop a running container safely.</p>
                        <div className="bg-muted/50 p-4 rounded-xl border border-border italic text-sm border-l-4 border-l-red-500">
                            "Like closing an application window."
                        </div>
                    </Card>
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 font-mono text-sm text-slate-300 shadow-xl">
                            <p className="mb-2 text-slate-500"># Syntax</p>
                            <p className="mb-6">docker stop &lt;container_id&gt;</p>
                            <p className="mb-2 text-slate-500"># Example</p>
                            <p><span className="text-red-400">$</span> docker stop a1b2c3d4</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: The Lifecycle */}
            <section className="container mx-auto px-4">
                <div className="bg-secondary/5 rounded-[40px] p-10 md:p-14 border border-secondary/20">
                    <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-foreground/80">Container Lifecycle</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -z-10 -translate-y-1/2"></div>

                        <div className="flex flex-col items-center gap-3 bg-background p-4 rounded-xl border border-border shadow-sm z-10 w-40">
                            <Download className="w-6 h-6 text-blue-500" />
                            <span className="font-mono font-bold text-sm">PULL</span>
                        </div>
                        <ArrowRight className="md:hidden w-6 h-6 text-muted-foreground" />
                        <div className="flex flex-col items-center gap-3 bg-background p-4 rounded-xl border border-border shadow-sm z-10 w-40">
                            <Play className="w-6 h-6 text-green-500" />
                            <span className="font-mono font-bold text-sm">RUN</span>
                        </div>
                        <ArrowRight className="md:hidden w-6 h-6 text-muted-foreground" />
                        <div className="flex flex-col items-center gap-3 bg-background p-4 rounded-xl border border-border shadow-sm z-10 w-40">
                            <Activity className="w-6 h-6 text-purple-500" />
                            <span className="font-mono font-bold text-sm">ACTIVE</span>
                        </div>
                        <ArrowRight className="md:hidden w-6 h-6 text-muted-foreground" />
                        <div className="flex flex-col items-center gap-3 bg-background p-4 rounded-xl border border-border shadow-sm z-10 w-40">
                            <Square className="w-6 h-6 text-red-500" />
                            <span className="font-mono font-bold text-sm">STOP</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Common Mistakes / Takeaways */}
            <section className="container mx-auto px-4 pb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-amber-200 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/10 rounded-[32px]">
                        <div className="flex items-center gap-3 mb-4 text-amber-600 font-bold uppercase tracking-widest text-sm">
                            <AlertTriangle className="w-5 h-5" /> Beginner Mistakes
                        </div>
                        <ul className="space-y-3 list-disc list-inside text-sm text-foreground/80">
                            <li>Forgetting to <code>pull</code> before running.</li>
                            <li>Trying to view stopped containers without the <code>-a</code> flag.</li>
                            <li>Running too many containers and forgetting to stop them.</li>
                        </ul>
                    </Card>

                    <Card className="p-8 border-primary/20 bg-primary/5 rounded-[32px]">
                        <div className="flex items-center gap-3 mb-4 text-primary font-bold uppercase tracking-widest text-sm">
                            <CheckCircle2 className="w-5 h-5" /> Key Takeaways
                        </div>
                        <ul className="space-y-3 list-disc list-inside text-sm text-foreground/80">
                            <li>Commands are how you talk to Docker.</li>
                            <li><code>docker run</code> is the most used command.</li>
                            <li>Stopping a container saves resources but keeps data safe.</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/6")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Docker Commands</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 70%</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/8")}>
                        Next Topic: Container vs VM <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 8: Container vs VM ---
const Topic8ContainersVsVMs = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-container-vs-vm" className="space-y-24">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Deep Dive</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Container vs <span className="text-primary italic">Virtual Machine</span></h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Think both are the same? Think again. While they both isolate applications, they do it in fundamentally different ways.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl w-fit">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Info className="w-5 h-5" /> Why it matters
                            </h4>
                            <p className="text-sm text-foreground/80 italic">"Understanding the difference helps you choose the right tool for the job."</p>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-900 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                            <div className="bg-blue-500/20 rounded-2xl border border-blue-500/30 flex flex-col items-center justify-center p-4">
                                <Monitor className="w-12 h-12 text-blue-500 mb-2" />
                                <span className="text-xs font-bold uppercase text-blue-400">VM</span>
                                <span className="text-[10px] text-blue-300 opacity-60">Full OS</span>
                            </div>
                            <div className="bg-green-500/20 rounded-2xl border border-green-500/30 flex flex-col items-center justify-center p-4">
                                <Box className="w-12 h-12 text-green-500 mb-2" />
                                <span className="text-xs font-bold uppercase text-green-400">Container</span>
                                <span className="text-[10px] text-green-300 opacity-60">Shared OS</span>
                            </div>
                            <div className="col-span-2 bg-slate-800 rounded-xl p-4 flex items-center justify-center gap-4">
                                <div className="text-center">
                                    <p className="text-[10px] uppercase text-slate-500 mb-1">Heavy</p>
                                    <p className="font-bold text-blue-400">VMs</p>
                                </div>
                                <div className="w-px h-8 bg-slate-700"></div>
                                <div className="text-center">
                                    <p className="text-[10px] uppercase text-slate-500 mb-1">Fast</p>
                                    <p className="font-bold text-green-400">Containers</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION: Recalls */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-blue-100 dark:border-blue-900/20 bg-blue-50/10 rounded-[32px] space-y-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                                <Monitor className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold">What is a VM?</h3>
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            A software-based computer that includes its own <strong>full operating system</strong>, virtual CPU, RAM, and storage. It behaves like a real computer.
                        </p>
                    </Card>
                    <Card className="p-8 border-green-100 dark:border-green-900/20 bg-green-50/10 rounded-[32px] space-y-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-xl">
                                <Box className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold">What is a Container?</h3>
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            A lightweight environment that runs an application. It <strong>shares the host OS kernel</strong> and only contains the app and its dependencies.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION: Key Differences */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Speed */}
                    <Card className="p-8 border-border bg-card rounded-[40px] space-y-6 group hover:border-yellow-500/50 transition-colors">
                        <div className="inline-flex p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-3xl group-hover:scale-110 transition-transform">
                            <Zap className="w-10 h-10 text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-bold italic">Speed</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="opacity-60 uppercase tracking-widest text-[10px]">VM</span>
                                <span className="font-semibold text-red-500">Slow Boot (Minutes)</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[20%]"></div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="opacity-60 uppercase tracking-widest text-[10px]">Container</span>
                                <span className="font-semibold text-green-500">Instant (Seconds)</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full animate-pulse"></div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground italic">"Containers don't need to boot an entire OS."</p>
                    </Card>

                    {/* Memory */}
                    <Card className="p-8 border-border bg-card rounded-[40px] space-y-6 group hover:border-blue-500/50 transition-colors">
                        <div className="inline-flex p-4 bg-blue-50 dark:bg-blue-900/20 rounded-3xl group-hover:scale-110 transition-transform">
                            <HardDrive className="w-10 h-10 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold italic">Memory</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="opacity-60 uppercase tracking-widest text-[10px]">VM Usage</span>
                                <span className="font-semibold text-blue-500">High (GBs)</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-3/4"></div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="opacity-60 uppercase tracking-widest text-[10px]">Container Usage</span>
                                <span className="font-semibold text-green-500">Minimal (MBs)</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-1/4"></div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground italic">"Containers are incredibly efficient."</p>
                    </Card>

                    {/* Use Case */}
                    <Card className="p-8 border-border bg-card rounded-[40px] space-y-6 group hover:border-primary/50 transition-colors">
                        <div className="inline-flex p-4 bg-primary/5 rounded-3xl group-hover:scale-110 transition-transform">
                            <Server className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold italic">Use Case</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <p><span className="font-bold">VM:</span> Best for OS-level tasks & isolation.</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                <p><span className="font-bold">Container:</span> Best for app deployment & scaling.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="container mx-auto px-4">
                <div className="bg-secondary/5 border border-border rounded-[40px] overflow-hidden">
                    <div className="p-8 border-b border-border bg-background/50">
                        <h3 className="text-2xl font-bold">Beginner Comparison Matrix</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-muted/30">
                                <tr>
                                    <th className="p-6 font-bold text-sm uppercase tracking-widest opacity-60">Feature</th>
                                    <th className="p-6 font-bold text-sm uppercase tracking-widest opacity-60 text-blue-500 text-center">Virtual Machine</th>
                                    <th className="p-6 font-bold text-sm uppercase tracking-widest opacity-60 text-green-500 text-center">Container</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="p-6 font-bold text-sm">Startup Speed</td>
                                    <td className="p-6 text-sm text-center italic">Slow (Minutes)</td>
                                    <td className="p-6 text-sm text-center text-green-600 font-bold">Very Fast (Seconds)</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-6 font-bold text-sm">Memory Usage</td>
                                    <td className="p-6 text-sm text-center italic">High</td>
                                    <td className="p-6 text-sm text-center text-green-600 font-bold">Low</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-6 font-bold text-sm">Operating System</td>
                                    <td className="p-6 text-sm text-center italic">Full OS</td>
                                    <td className="p-6 text-sm text-center text-green-600 font-bold">Shares Host OS</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-sm">Size</td>
                                    <td className="p-6 text-sm text-center italic">Large (GBs)</td>
                                    <td className="p-6 text-sm text-center text-green-600 font-bold">Small (MBs)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Analogy Section */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-[40px] p-10 md:p-16 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="space-y-6 flex-1">
                            <h3 className="text-3xl font-bold italic underline underline-offset-[12px] decoration-blue-500">The Ultimate Analogy</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <Home className="w-10 h-10 text-blue-400 shrink-0" />
                                    <p className="text-slate-400 leading-relaxed text-lg">
                                        <strong>VM = A fully furnished house.</strong> It has its own plumbing, electricity, and foundation. Strong but heavy.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Box className="w-10 h-10 text-green-400 shrink-0" />
                                    <p className="text-slate-400 leading-relaxed text-lg">
                                        <strong>Container = A single room in an apartment.</strong> It shares the building's infrastructure but still offers its own space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Trend */}
            <section className="container mx-auto px-4">
                <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Modern Industry Trend</h3>
                            <p className="text-muted-foreground">They actually work together!</p>
                        </div>
                        <div className="bg-background p-6 rounded-3xl border border-border shadow-xl flex items-center gap-6">
                            <Monitor className="w-8 h-8 text-blue-500" />
                            <ArrowRight className="w-5 h-5 text-muted-foreground" />
                            <Box className="w-8 h-8 text-green-500" />
                            <p className="text-xs font-bold font-mono">VM Infrastructure → Containers on top</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Takeaways */}
            <section className="container mx-auto px-4 pb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-primary/20 bg-primary/5 rounded-[32px]">
                        <div className="flex items-center gap-3 mb-4 text-primary font-bold uppercase tracking-widest text-sm">
                            <CheckCircle2 className="w-5 h-5" /> Key Takeaways
                        </div>
                        <ul className="space-y-3 list-disc list-inside text-sm text-foreground/80">
                            <li>VMs are heavier but offer strong OS-level isolation.</li>
                            <li>Containers are lighter, faster, and more efficient.</li>
                            <li>Containers are the industry standard for application deployment.</li>
                            <li>Both technologies coexist in modern cloud infrastructure.</li>
                        </ul>
                    </Card>
                    <div className="flex items-center justify-center p-8 bg-slate-900 rounded-[32px] text-white text-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Ready for the Next Section?</p>
                            <h4 className="text-2xl font-bold italic mb-6">Topic 9: Real World Use Cases</h4>
                            <Rocket className="w-12 h-12 text-primary mx-auto animate-bounce" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/7")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Logic Comparison</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 80%</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/9")}>
                        Next Topic: Use Cases <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic9RealWorldUseCases = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-real-world-use-cases" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Practical Applications</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Real-World Use Cases</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Containers are not just a concept — they are the engine powering the world's most popular websites and applications.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            From small blogs to giant services like Netflix and Google, containerization has changed how software is built, tested, and delivered to users.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Quick Fact
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"Almost every modern app you use today runs inside a container."</p>
                        </Card>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square">
                        <ImageWithFallback
                            src={getImageUrl('real-world-containers.jpg')}
                            alt="Real world containers"
                            description="A digital city powered by containerized infrastructure."
                            iconColor="text-indigo-500"
                            bgColor="bg-indigo-500/10"
                        />
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Use Case 1: Web Development */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('web-dev-setup.jpg')}
                                alt="Web Development Setup"
                                description="A developer screen showing isolated containers for database, backend, and frontend."
                                iconColor="text-emerald-500"
                                bgColor="bg-emerald-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Standardization</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Web Development</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Web applications require many tools (Python, JS, Databases). Containers package <strong>everything</strong> together so it runs identically everywhere.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "No more 'works on my machine' errors",
                                "Fast setup for new developers (minutes, not days)",
                                "Easily run different database versions for different projects",
                                "Identical environments for Dev, Test, and Production"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-center p-4 bg-background border border-border/50 rounded-2xl hover:border-emerald-300 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Use Case 2: Deployment */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-14 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase border border-blue-500/20 w-fit">
                                <Rocket className="w-3 h-3" /> Seamless Lifecycle
                            </div>
                            <h2 className="text-3xl font-semibold text-white leading-tight">Application Deployment</h2>
                            <p className="text-slate-400 leading-relaxed text-lg italic">
                                Deployment used to be manual and risky. Containers make it a one-step process.
                            </p>
                            <div className="space-y-6 mt-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-slate-900 rounded-2xl text-2xl font-bold text-blue-500">01</div>
                                    <div>
                                        <h4 className="font-bold text-white">Build Once</h4>
                                        <p className="text-sm text-slate-400">Package your code and tools into one container image.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-slate-900 rounded-2xl text-2xl font-bold text-blue-500">02</div>
                                    <div>
                                        <h4 className="font-bold text-white">Run Everywhere</h4>
                                        <p className="text-sm text-slate-400">The exact same image runs on your laptop, the server, and the cloud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-0 overflow-hidden rounded-[40px] border border-slate-700 shadow-2xl bg-slate-900 aspect-video">
                            <ImageWithFallback
                                src={getImageUrl('deployment-flow.jpg')}
                                alt="Deployment Flow"
                                description="Visualizing the seamless movement from local code to cloud server using containers."
                                iconColor="text-blue-400"
                                bgColor="bg-blue-400/10"
                            />
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Use Case 3: Microservices */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Architecture</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Microservices</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Instead of one giant app (a Monolith), containers allow us to break apps into hundreds of tiny, independent services.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm">
                                <Activity className="w-8 h-8 text-purple-500 mb-3" />
                                <h4 className="font-bold mb-1">Independence</h4>
                                <p className="text-xs text-muted-foreground">Update the 'Login' service without touching the 'Payment' service.</p>
                            </div>
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm">
                                <Users className="w-8 h-8 text-indigo-500 mb-3" />
                                <h4 className="font-bold mb-1">Fault Isolation</h4>
                                <p className="text-xs text-muted-foreground">If one container crashes, the rest of the application stays online.</p>
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('microservices-viz.jpg')}
                                alt="Microservices Architecture"
                                description="An application split into User Auth, Payments, and Notifications containers."
                                iconColor="text-purple-500"
                                bgColor="bg-purple-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Why Companies Prefer Containers */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Industry Standard</p>
                    <h2 className="text-4xl font-semibold text-foreground leading-tight mb-4">Why Companies Choose Containers</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        Giant companies like Spotify and Pinterest use containers to serve millions of users perfectly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6 shadow-sm"><Zap className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Dev Speed</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Teams can ship new features 10x faster than with VMs.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-6 shadow-sm"><ArrowDown className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Cost Savings</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Run 5-10x more apps on the same server compared to VMs.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6 shadow-sm"><Layers className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Massive Scale</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Automatically add thousands of containers during busy hours.</p>
                    </Card>
                    <Card className="p-8 border-border bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6 shadow-sm"><Globe className="w-7 h-7" /></div>
                        <h3 className="font-bold text-lg mb-3">Cloud Ready</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">Built to run perfectly on AWS, Azure, and Google Cloud.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Key Takeaways */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <ul className="grid md:grid-cols-2 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Containers provide consistent environments</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Deployment is faster and safer</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Microservices improve scalability</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Drastic reduction in server costs</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* SECTION 7: Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/21/topic/8")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Use Cases</p>
                        <p className="text-xl font-bold italic">Module 21 Progress: 90%</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/21/topic/10")}>
                        Next Topic: Cloud Basics <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 10: Cloud + Container Basics ---
const Topic10CloudAndContainers = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-cloud-containers" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Modern Synergy</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Cloud + Containers</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Modern apps aren't run on personal PCs. They live in the <strong>Cloud</strong>, and Containers are the vehicles that transport them there.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    <Box className="w-10 h-10 text-primary" />
                                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">App in Box</span>
                                </div>
                                <ArrowRight className="w-6 h-6 text-primary/30 hidden sm:block" />
                                <div className="flex flex-col items-center gap-2">
                                    <Cloud className="w-10 h-10 text-primary" />
                                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Run in Sky</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-video bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="relative">
                                <Cloud className="w-32 h-32 text-cyan-500/20 absolute -top-16 -left-16 animate-pulse" />
                                <Box className="w-20 h-20 text-primary relative z-10" />
                                <Cloud className="w-24 h-24 text-blue-500/20 absolute -bottom-12 -right-12 animate-bounce" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Cloud Computing Fundamentals */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('cloud-servers-abstract.jpg')}
                                alt="Cloud servers"
                                description="A cluster of digital servers floating in a cloud network."
                                iconColor="text-cyan-500"
                                bgColor="bg-cyan-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-cyan-500 font-bold">The Foundation</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Infrastructure without Hardware</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Cloud computing means <strong>using computers over the internet</strong> instead of owning your own machine.
                        </p>
                        <p className="text-muted-foreground">
                            Providers like AWS and Azure give you the foundation to build anything without ever touching a physical server.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 text-sm font-medium">
                                    <Cloud className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                    <span><strong>Always On:</strong> Your apps are available 24/7 globally.</span>
                                </li>
                                <li className="flex items-start gap-4 text-sm font-medium">
                                    <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span><strong>Pay as you go:</strong> Only pay for the power you actually use.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Infrastructure Chain */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-14 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
                        <h2 className="text-3xl font-semibold text-white leading-tight">The Infrastructure Chain</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { step: "VMs", desc: "Cloud gives VMs", icon: <Server className="text-blue-500" /> },
                                { step: "Runtime", desc: "Containers run on VMs", icon: <Package className="text-indigo-500" /> },
                                { step: "App", desc: "Logic inside containers", icon: <Box className="text-primary" /> },
                                { step: "Access", desc: "Users connect via web", icon: <Globe className="text-cyan-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center p-6 bg-slate-900 rounded-3xl border border-slate-800 relative group">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-white mb-1">{item.step}</h4>
                                    <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
                                    {i < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Efficiency & Scale */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-8">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Scalability</p>
                        <h3 className="text-3xl font-semibold text-foreground leading-tight">Why Cloud Platforms Prefer Containers</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            Cloud providers like AWS and Azure prefer containers because they help serve <strong>millions of users</strong> with minimal resources.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Fast Startup", desc: "No OS boot wait time.", icon: <Zap className="text-amber-500" /> },
                                { title: "Resource Lean", desc: "Use 10x fewer resources.", icon: <ArrowDown className="text-emerald-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="p-5 bg-background border border-border/60 rounded-3xl shadow-sm">
                                    <div className="p-2 bg-muted rounded-xl w-fit mb-3">{item.icon}</div>
                                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square">
                        <ImageWithFallback
                            src={getImageUrl('scale-efficiency.jpg')}
                            alt="Scaling visualization"
                            description="Millions of tiny blocks representing containers scaling instantly to meet user demand."
                            iconColor="text-blue-500"
                            bgColor="bg-blue-500/10"
                        />
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Orchestration (Kubernetes) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-14 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase border border-blue-500/20 w-fit">
                                <Activity className="w-3 h-3" /> Management
                            </div>
                            <h2 className="text-3xl font-semibold text-white leading-tight">Kubernetes: The Manager</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                When you have thousands of containers, manual control is impossible. Kubernetes handles the management <strong>automatically</strong>.
                            </p>
                            <div className="space-y-4 pt-4">
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Self-Healing</h4>
                                        <p className="text-xs text-slate-400">Restarts crashed containers automatically.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Auto-Scaling</h4>
                                        <p className="text-xs text-slate-400">Adds more containers when traffic is high.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-0 overflow-hidden rounded-[40px] border border-slate-700 shadow-2xl bg-slate-900 aspect-square">
                            <ImageWithFallback
                                src={getImageUrl('kubernetes-abstraction.jpg')}
                                alt="Kubernetes System"
                                description="The manager (Kubernetes) overseeing a vast network of worker containers."
                                iconColor="text-blue-400"
                                bgColor="bg-slate-900"
                            />
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 6: The Ultimate Analogy (Manager & Workers) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Simplified</p>
                    <h2 className="text-3xl font-semibold text-foreground leading-tight">Real-Life Analogy</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Containers", role: "Workers", desc: "They do the actual work inside the office.", icon: <User className="text-indigo-500" /> },
                        { title: "Kubernetes", role: "Manager", desc: "Ensures work continues smoothly and repairs things.", icon: <Shield className="text-blue-500" /> },
                        { title: "Cloud", role: "Office Building", desc: "Provides the physical space and electricity.", icon: <Home className="text-cyan-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-card border border-border/50 rounded-[40px] text-center hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">{item.icon}</div>
                            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase mb-4">{item.role}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 7: Key Takeaways Summary */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-[40px] p-10 md:p-16 border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                    <div className="relative z-10 space-y-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-3xl font-bold text-foreground">Final Summary: <span className="text-primary italic">The Big Picture</span></h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We've moved from physical servers to logical containers. Here is why this evolution changed the world of technology forever.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Isolation",
                                    desc: "Virtualization allows multiple 'computers' to run on one physical machine without interfering with each other.",
                                    icon: <Shield className="text-blue-500" />
                                },
                                {
                                    title: "Efficiency",
                                    desc: "Containers are lightweight because they share the Host OS, allowing for 10x more density than traditional VMs.",
                                    icon: <Zap className="text-amber-500" />
                                },
                                {
                                    title: "Scalability",
                                    desc: "The Cloud provides infinite hardware on-demand, while tools like Kubernetes manage thousands of containers automatically.",
                                    icon: <Rocket className="text-indigo-500" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
                                    <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Learning Path Complete</p>
                                    <p className="text-xs text-muted-foreground">You have mastered the fundamentals of Virtualization & Containers.</p>
                                </div>
                            </div>
                            <Button size="lg" className="rounded-2xl px-12 h-14 font-bold gap-3" onClick={() => navigate("/dashboard")}>
                                Return to Dashboard <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

const Module21 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    // Use AnimatePresence for smooth transitions between topics
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={topicId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                {(() => {
                    // Normalize the topicId to handle formats like "m21-t1", "topic-1", or just "1"
                    const id = topicId?.replace(/m21-t|topic-/g, "") || "1";

                    switch (id) {
                        case "1": return <Topic1WhatIsVirtualization />;
                        case "2": return <Topic2VMsVsPhysical />;
                        case "3": return <Topic3Hypervisors />;
                        case "4": return <Topic4VirtualBoxBasics />;
                        case "5": return <Topic5WhatAreContainers />;
                        case "6": return <Topic6DockerBasics />;
                        case "7": return <Topic7DockerCommands />;
                        case "8": return <Topic8ContainersVsVMs />;
                        case "9": return <Topic9RealWorldUseCases />;
                        case "10": return <Topic10CloudAndContainers />;
                        default: return (
                            <div className="p-20 text-center space-y-6 flex flex-col items-center justify-center min-h-[60vh]">
                                <h1 className="text-4xl font-bold">Topic under construction</h1>
                                <p className="text-muted-foreground italic max-w-md">Target Topic: {topicId}</p>
                                <Button className="mt-8 rounded-2xl px-8 h-12" onClick={() => navigate("/module/21/topic/1")}>Return to Topic 1</Button>
                            </div>
                        );
                    }
                })()}
            </motion.div>
        </AnimatePresence>
    );
};

export default Module21;


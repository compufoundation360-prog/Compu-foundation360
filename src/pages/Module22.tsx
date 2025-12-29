import React, { useState, useEffect } from "react";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Cpu,
    Server,
    Smartphone,
    Monitor,
    Zap,
    Globe,
    BookOpen,
    CircuitBoard,
    LayoutGrid,
    Wifi,
    HardDrive,
    Terminal,
    Settings,
    Layers,
    Code,
    Lightbulb,
    Home,
    Tv,
    MousePointer,
    AlertTriangle,
    XCircle,
    Thermometer,
    Activity,
    Camera,
    Sun,
    Search,
    Clock,
    CalendarDays,
    Laptop,
    ChevronRight,
    Database,
    Share2,
    ShieldCheck,
    UserCheck,
    Bot,
    Package,
    Trophy
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Helper Components (Reused/Shared) ---

// Helper for Image Placeholders
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

// --- TOPIC 1: What is Raspberry Pi? ---
const Topic1WhatIsRaspberryPi = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-what-is-rpi" className="space-y-24">
            {/* SECTION 1: Intro (The Card-Sized Computer) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Revolution</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                What is <span className="text-primary">Raspberry Pi</span>?
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            A <span className="font-semibold text-foreground">Raspberry Pi</span> is a small, low-cost computer that is about the size of a <span className="border-b-2 border-primary/30">credit card</span>.
                        </p>

                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-foreground/70 italic text-lg">
                                "Even though it is very small, it works like a real computer. It runs an OS, connects to the internet, and lets you learn programming easily."
                            </p>
                        </div>

                        <div className="gap-4 flex flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                                <CheckCircle2 className="w-4 h-4" /> Low Cost
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full text-sm font-bold">
                                <CheckCircle2 className="w-4 h-4" /> Credit-Card Size
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        {/* Abstract Visual Representation of a Pi */}
                        <div className="absolute inset-0 bg-green-900/10" style={{ backgroundImage: "radial-gradient(#15803d 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
                            <div className="w-48 h-32 bg-green-700 rounded-lg shadow-[0_20px_50px_rgba(21,128,61,0.5)] flex items-center justify-center relative mb-8 border-4 border-green-800">
                                <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-600" />
                                <div className="absolute top-2 left-8 w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-600" />
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-slate-800 rounded border-2 border-slate-600 flex items-center justify-center">
                                    <Cpu className="w-6 h-6 text-slate-400" />
                                </div>
                                <CircuitBoard className="w-20 h-20 text-green-900/50" />
                                <span className="text-white font-bold font-mono absolute bottom-2 left-2 text-xs">RPi 4 Model B</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">The Tiny Giant</h3>
                            <p className="text-slate-400 max-w-sm">From learning code to building robots, this tiny board powers it all.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: "Mini Computer" Analysis */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Analysis</p>
                    <h2 className="text-3xl font-semibold text-foreground">Why do we call it a "Computer"?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Cpu, color: "text-blue-500", bg: "bg-blue-500/10", title: "Processor (CPU)", desc: "The brain that performs calculations." },
                        { icon: Layers, color: "text-purple-500", bg: "bg-purple-500/10", title: "RAM", desc: "Short-term memory for running apps." },
                        { icon: HardDrive, color: "text-amber-500", bg: "bg-amber-500/10", title: "Storage (SD Card)", desc: "Replaces the bulky Hard Disk." },
                        { icon: Wifi, color: "text-green-500", bg: "bg-green-500/10", title: "Connectivity", desc: "Has Wi-Fi, Bluetooth & Ethernet." },
                    ].map((item, i) => (
                        <Card key={i} className="p-6 border-border/50 bg-card hover:bg-muted/50 transition-all hover:-translate-y-1 duration-300">
                            <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-muted/30 border border-dashed border-border flex items-center justify-center text-center gap-4">
                    <p className="text-sm font-medium text-foreground/80">
                        <span className="font-bold text-primary">Conclusion:</span> Even though it fits in your pocket, it is a <span className="italic">fully functional computer</span>.
                    </p>
                </div>
            </section>

            {/* SECTION 3: What It Is NOT (Misconceptions) */}
            <section className="container mx-auto px-4">
                <div className="bg-red-50 dark:bg-red-950/20 p-8 sm:p-12 rounded-[40px] border border-red-100 dark:border-red-900/30">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-full text-red-600"><AlertTriangle className="w-6 h-6" /></div>
                                <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">What Raspberry Pi is NOT</h2>
                            </div>
                            <p className="text-foreground/80">Beginners often confuse it with simple toys or just basic electronic chips. Let's clear that up.</p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <p className="font-bold text-sm">NOT just a chip</p>
                                        <p className="text-xs text-muted-foreground">It's a complete system with CPU, RAM, and ports.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <p className="font-bold text-sm">NOT a Toy</p>
                                        <p className="text-xs text-muted-foreground">It's used in real factories, space stations, and smart homes.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <p className="font-bold text-sm">NOT Only for Engineers</p>
                                        <p className="text-xs text-muted-foreground">It was built specifically for students and beginners to learn.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl">
                            <ImageWithFallback
                                src={getImageUrl('rpi-not-a-toy.jpg')}
                                alt="Raspberry Pi Industrial Use"
                                description="A visual showing a Raspberry Pi controlling a 3D printer or a robot arm, proving it's a serious tool."
                                iconColor="text-red-500"
                                bgColor="bg-red-500/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Use Cases (Where is it used?) */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-end">
                    <div className="space-y-4 flex-1">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Applications</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Where is Raspberry Pi Used?</h2>
                    </div>
                    <p className="text-muted-foreground max-w-md pb-2 text-sm text-right">It's versatile enough to be a desktop PC, a robot brain, or a smart home hub.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Education */}
                    <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/10 border-none">
                        <BookOpen className="w-10 h-10 text-green-600 mb-6" />
                        <h3 className="font-bold text-xl mb-3 text-green-800 dark:text-green-300">1. Education</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                            Used in schools to teach Python, Scratch, and how OS works. It's the #1 tool for computer labs.
                        </p>
                    </Card>

                    {/* IoT */}
                    <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/10 border-none">
                        <Wifi className="w-10 h-10 text-blue-600 mb-6" />
                        <h3 className="font-bold text-xl mb-3 text-blue-800 dark:text-blue-300">2. IoT Projects</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                            Connects sensors (temp, light) to the internet. Example: Sending room temperature to your phone.
                        </p>
                    </Card>

                    {/* Embedded */}
                    <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/10 border-none">
                        <CircuitBoard className="w-10 h-10 text-orange-600 mb-6" />
                        <h3 className="font-bold text-xl mb-3 text-orange-800 dark:text-orange-300">3. Embedded Systems</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                            Hidden inside other devices like Smart Mirrors, Digital Signage boards, and Robot cars.
                        </p>
                    </Card>
                </div>

                {/* Additional Uses Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2">
                        <Home className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Home Automation</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2">
                        <Tv className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Media Centers</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2">
                        <Server className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Mini Web Servers</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-2xl text-center gap-2">
                        <Code className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Coding Labs</span>
                    </div>
                </div>
            </section>

            {/* SECTION 5: The "Brain" Analogy */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 text-white p-10 rounded-[40px] text-center border-2 border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #22c55e 25%, transparent 25%, transparent 50%, #22c55e 50%, #22c55e 75%, transparent 75%, transparent)", backgroundSize: "40px 40px" }} />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-bold tracking-wide uppercase border border-green-500/30 w-fit">
                            <Lightbulb className="w-3 h-3" /> Quick Understanding
                        </div>
                        <h2 className="text-3xl font-bold">Think of it as a "Tiny Computer Brain" ðŸ§ </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            You can connect eyes (cameras), ears (microphones), and hands (motors) to it, and program it to think and act on its own.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Why Learn It? (Benefits) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground">Why start with Raspberry Pi?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-6 border-l-4 border-l-green-500 bg-background shadow-sm hover:shadow-md transition-all">
                        <p className="text-5xl mb-4">ðŸ’°</p>
                        <h4 className="text-lg font-bold mb-2">Affordable</h4>
                        <p className="text-sm text-muted-foreground">Costs less than a video game. Perfect for students.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-blue-500 bg-background shadow-sm hover:shadow-md transition-all">
                        <p className="text-5xl mb-4">âš¡</p>
                        <h4 className="text-lg font-bold mb-2">Low Power</h4>
                        <p className="text-sm text-muted-foreground">Runs on a phone charger. You can leave it on 24/7.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-purple-500 bg-background shadow-sm hover:shadow-md transition-all">
                        <p className="text-5xl mb-4">ðŸ¤</p>
                        <h4 className="text-lg font-bold mb-2">Community</h4>
                        <p className="text-sm text-muted-foreground">Millions of users. If you get stuck, someone has likely solved it.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-orange-500 bg-background shadow-sm hover:shadow-md transition-all">
                        <p className="text-5xl mb-4">ðŸ› ï¸</p>
                        <h4 className="text-lg font-bold mb-2">Hardware-Software</h4>
                        <p className="text-sm text-muted-foreground">The best way to learn how code controls the physical world.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Project Ideas (Inspiration) */}
            <section className="container mx-auto px-4">
                <div className="bg-secondary/10 rounded-[40px] p-8 md:p-12 border border-secondary/20">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">What can YOU build?</h3>
                            <p className="text-muted-foreground">Here are some popular beginner projects to get you excited.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-background p-0 overflow-hidden border-none shadow-lg group">
                            <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                                <Tv className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-lg mb-2">Retro Gaming Console</h4>
                                <p className="text-xs text-muted-foreground">Turn it into a console that plays thousands of classic arcade games.</p>
                            </div>
                        </Card>

                        <Card className="bg-background p-0 overflow-hidden border-none shadow-lg group">
                            <div className="h-40 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white">
                                <Monitor className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-lg mb-2">Smart Mirror</h4>
                                <p className="text-xs text-muted-foreground">A mirror that displays time, weather, and news while you get ready.</p>
                            </div>
                        </Card>

                        <Card className="bg-background p-0 overflow-hidden border-none shadow-lg group">
                            <div className="h-40 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                                <Wifi className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-lg mb-2">Home Ad-Blocker</h4>
                                <p className="text-xs text-muted-foreground">Block ads on ALL devices in your house by using Pi-hole.</p>
                            </div>
                        </Card>
                    </div>
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
                            <span>Fully Functional Computer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Runs Linux OS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Excellent for Learning</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Powers Robots & IoT</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Intro</p>
                        <p className="text-xl font-bold italic">Next: The Hardware Deep Dive</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/2")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 2: Raspberry Pi Hardware ---
const Topic2RaspberryPiHardware = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-rpi-hardware" className="space-y-24">
            {/* SECTION 1: Intro (The Physical Layout) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Anatomy</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Raspberry Pi Hardware</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Software is the "Mind", but Hardware is the "Body". To use a Raspberry Pi, you must know its physical parts.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            Unlike a laptop where everything is hidden, the Pi exposes all its components. This makes it perfect for understanding how computers actually work.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl w-fit">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Cpu className="w-5 h-5" /> The Open Computer
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"Nothing is hidden. You see the brain, the memory, and the veins (circuits)."</p>
                        </Card>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        {/* Abstract Circuit Background */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0"></div>

                        <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                            <ImageWithFallback
                                src={getImageUrl('rpi-hardware-diagram.jpg')}
                                alt="Diagram of Raspberry Pi components"
                                description="A labeled diagram showing CPU, USB Ports, HDMI, GPIO Pins, and Ethernet port on a Raspberry Pi board."
                                iconColor="text-primary"
                                bgColor="bg-primary/10"
                                className="rounded-2xl shadow-2xl border-4 border-slate-800"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: The Brain (CPU) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Visual Left */}
                    <Card className="order-2 lg:order-1 p-10 bg-slate-950 border border-border/50 rounded-[40px] relative overflow-hidden flex items-center justify-center aspect-square">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[100px]"></div>
                        <div className="relative z-10 w-48 h-48 bg-slate-900/80 backdrop-blur-md rounded-3xl border border-primary/50 shadow-2xl flex flex-col items-center justify-center gap-4">
                            <Cpu className="w-20 h-20 text-primary animate-pulse" />
                            <span className="text-primary font-mono text-sm tracking-widest border px-2 py-1 rounded border-primary/30">ARMv8</span>
                        </div>
                    </Card>

                    {/* Content Right */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Core</p>
                        <h2 className="text-3xl font-semibold text-foreground">The Processor (CPU)</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Most Pis use an <strong>ARM-based processor</strong> (like in your phone), not an Intel chip (like in your laptop). It's the brain that handles everything.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <div className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors">
                                <Zap className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold mb-1">Low Power</h4>
                                <p className="text-xs text-muted-foreground">Generates very little heat compared to desktops.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors">
                                <Layers className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold mb-1">Efficient</h4>
                                <p className="text-xs text-muted-foreground">Optimized for Linux to run smoothly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Magic Pins (GPIO) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Superpower</p>
                    <h2 className="text-4xl font-semibold text-foreground">GPIO Pins</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        General Purpose Input/Output. The 40 metal pins that let code control the real world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* INPUT Card */}
                    <Card className="p-8 bg-slate-950 border border-slate-800 rounded-[32px] hover:border-green-500/50 transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full group-hover:bg-green-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20 group-hover:scale-110 transition-transform">
                                <ArrowLeft className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">INPUT (Read)</h3>
                            <p className="text-muted-foreground mb-6 h-12">The Pi "feels" the world around it.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm bg-slate-900 p-3 rounded-lg border border-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> Sensors (Heat, Light)
                                </div>
                                <div className="flex items-center gap-3 text-sm bg-slate-900 p-3 rounded-lg border border-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> Buttons & Switches
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* OUTPUT Card */}
                    <Card className="p-8 bg-slate-950 border border-slate-800 rounded-[32px] hover:border-red-500/50 transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full group-hover:bg-red-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 group-hover:scale-110 transition-transform">
                                <ArrowRight className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">OUTPUT (Write)</h3>
                            <p className="text-muted-foreground mb-6 h-12">The Pi "controls" the world around it.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm bg-slate-900 p-3 rounded-lg border border-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div> LEDs & Lights
                                </div>
                                <div className="flex items-center gap-3 text-sm bg-slate-900 p-3 rounded-lg border border-slate-800">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div> Motors & Buzzers
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Connectivity (Ports) */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/20 border border-border/50 rounded-[40px] p-10 md:p-16">
                    <h3 className="text-2xl font-bold mb-10 text-center">Standard Ports</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: MousePointer, label: "USB Ports", sub: "For Peripherals" },
                            { icon: Monitor, label: "HDMI", sub: "Video Output" },
                            { icon: Wifi, label: "Networking", sub: "Wi-Fi & Ethernet" },
                            { icon: Zap, label: "Power", sub: "USB-C Input" }
                        ].map((item, i) => (
                            <Card key={i} className="p-6 text-center bg-background border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold mb-1">{item.label}</h4>
                                <p className="text-xs text-muted-foreground">{item.sub}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Storage (SD Card) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Memory</p>
                        <h2 className="text-3xl font-semibold text-foreground">Where is the Hard Drive?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            It doesn't have one! Instead, the Pi uses a <strong>Micro SD Card</strong> as its brain.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                                <span className="text-foreground/80">Houses the Operating System (OS).</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">2</div>
                                <span className="text-foreground/80">Stores all your files and photos.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">3</div>
                                <span className="text-foreground/80">Easily swappable (Change OS in seconds).</span>
                            </li>
                        </ul>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-video bg-slate-950">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-64 bg-slate-900 border-2 border-slate-700 rounded-xl relative shadow-2xl flex flex-col items-center justify-end pb-4">
                                <div className="absolute top-0 left-0 right-0 h-1/3 border-b border-slate-700 bg-slate-800/50 rounded-t-xl"></div>
                                <span className="text-slate-500 font-bold mb-2">MicroSD</span>
                                <span className="text-primary font-bold text-2xl">32GB</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Safety Rules */}
            <section className="container mx-auto px-4">
                <div className="bg-amber-500/5 p-10 rounded-[40px] border border-amber-500/20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold tracking-wide uppercase border border-amber-500/20 w-fit mb-6">
                        <AlertTriangle className="w-3 h-3" /> Important
                    </div>
                    <h3 className="text-2xl font-bold mb-8">Handling Precautions</h3>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card className="p-6 border-l-4 border-l-green-500 bg-background text-left shadow-lg">
                            <h4 className="font-bold text-green-600 mb-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> DO: Touch the Edges</h4>
                            <p className="text-sm text-muted-foreground">Hold the board by its edges to avoid static shock.</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-red-500 bg-background text-left shadow-lg">
                            <h4 className="font-bold text-red-500 mb-1 flex items-center gap-2"><XCircle className="w-4 h-4" /> DON'T: Touch Pins While On</h4>
                            <p className="text-sm text-muted-foreground">Shorting the GPIO pins with metal or fingers can kill the Pi.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Hardware Recap
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>ARM CPU (Brain)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>GPIO (Control)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>MicroSD (Storage)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>HDMI (Display)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>USB (Peripherals)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>Wi-Fi/Ethernet</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/1")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Hardware</p>
                        <p className="text-xl font-bold italic">Next: Installation</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/3")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 3: Installing OS ---
const Topic3InstallingOS = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-install-os" className="space-y-24">
            {/* SECTION 1: Intro (The Soul) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Soul</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Installing the Operating System</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Hardware provides the body, but the <strong>Operating System (OS)</strong> provides the soul. Without it, the Pi is just a silicon stone.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-md">
                            Just like your laptop runs Windows or macOS, the Raspberry Pi needs its own OS to function. The standard choice is <strong>Raspberry Pi OS</strong> (formerly Raspbian).
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl w-fit">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Terminal className="w-5 h-5" /> Why Raspberry Pi OS?
                            </h4>
                            <p className="text-sm text-foreground/80 italic font-medium">"It is free, open-source, and specifically optimized for the Pi's hardware."</p>
                        </Card>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                            <ImageWithFallback
                                src={getImageUrl('rpi-imager-hero.jpg')}
                                alt="Raspberry Pi Imager Interface"
                                description="A visual of the official Raspberry Pi Imager tool writing an OS to a card."
                                iconColor="text-primary"
                                bgColor="bg-primary/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Prerequisites (The Checklist) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Preparation</p>
                    <h2 className="text-3xl font-semibold text-foreground">What You Need</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: CircuitBoard, title: "Raspberry Pi", desc: "Any model (Zero, 3, 4, or 5)." },
                        { icon: HardDrive, title: "Micro SD Card", desc: "Minimum 16GB (Class 10 rec)." },
                        { icon: Monitor, title: "Computer", desc: "PC or Mac to download the OS." },
                        { icon: Layers, title: "Card Reader", desc: "To plug the SD card into your PC." }
                    ].map((item, i) => (
                        <Card key={i} className="p-6 border-border/50 bg-card hover:bg-muted/50 transition-all text-center">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 3: The Tool (Imager Analysis) */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-10 rounded-[40px] border border-slate-800 relative overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-wide uppercase border border-primary/30 w-fit">
                                The Magic Wand
                            </div>
                            <h3 className="text-3xl font-bold">Raspberry Pi Imager</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Gone are the days of manual command-line flashing. The <strong>Imager</strong> is an official tool that automates existing partitions, formatting, and writing.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm text-slate-300">Auto-downloads the latest OS from the cloud.</span>
                                </li>
                                <li className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    <span className="text-sm text-slate-300">Caches the download for faster future writes.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                            <ImageWithFallback
                                src={getImageUrl('rpi-imager-icon.png')}
                                alt="Imager Icon"
                                description="Imager Icon"
                                className="w-48 h-48 mx-auto relative z-10 drop-shadow-2xl opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Step-by-Step Installation Guide */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Procedure</p>
                    <h2 className="text-3xl font-semibold text-foreground">How to Install</h2>
                    <p className="text-muted-foreground mt-4">Follow these exact steps to breathe life into your Pi.</p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary font-bold z-10">1</div>
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-border hover:border-primary/50 transition-colors">
                            <h4 className="font-bold text-lg mb-2">Download Imager</h4>
                            <p className="text-sm text-muted-foreground">Go to the official Raspberry Pi website and download the Imager for your OS (Windows, macOS, or Ubuntu).</p>
                        </Card>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-muted-foreground font-bold z-10">2</div>
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-border hover:border-primary/50 transition-colors">
                            <h4 className="font-bold text-lg mb-2">Open & Choose OS</h4>
                            <p className="text-sm text-muted-foreground mb-3">Open the tool and click <strong>CHOOSE OS</strong>. Select "Raspberry Pi OS (32-bit)" for best compatibility.</p>
                            <div className="p-3 bg-muted rounded-lg border border-border/50 text-xs font-mono">
                                Imager {'>'} Raspberry Pi OS {'>'} 32-bit Recommended
                            </div>
                        </Card>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-muted-foreground font-bold z-10">3</div>
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-l-4 border-l-red-500 hover:border-red-500 transition-colors bg-red-50/10">
                            <h4 className="font-bold text-lg mb-2">Choose Storage</h4>
                            <p className="text-sm text-muted-foreground mb-2">Insert your SD card and click <strong>CHOOSE STORAGE</strong>.</p>
                            <p className="text-xs font-bold text-red-500 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> WARNING: This will erase all data on the card!</p>
                        </Card>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-muted-foreground font-bold z-10">4</div>
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-border hover:border-primary/50 transition-colors">
                            <h4 className="font-bold text-lg mb-2">Write & Verify</h4>
                            <p className="text-sm text-muted-foreground">Click <strong>WRITE</strong>. The tool will write the OS and then automatically verify it. When done, you can remove the card.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Technical Deep Dive inside Imager */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10">
                    <Card className="p-8 bg-slate-950 border border-slate-800 rounded-[32px]">
                        <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3"><Terminal className="w-6 h-6 text-green-500" /> What happens internally?</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            The Imager performs a low-level format called a "block device write". It completely wipes the SD card structure and replaces it with a Linux file system (ext4).
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                                <span className="text-slate-300 font-mono text-sm">1. Formatting</span>
                                <span className="text-xs text-green-500 uppercase tracking-wider font-bold">Wipe</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                                <span className="text-slate-300 font-mono text-sm">2. Partitioning</span>
                                <span className="text-xs text-blue-500 uppercase tracking-wider font-bold">Structure</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                                <span className="text-slate-300 font-mono text-sm">3. Writing</span>
                                <span className="text-xs text-purple-500 uppercase tracking-wider font-bold">Copy</span>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-6">
                        <div className="p-6 rounded-[32px] bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Advanced Options (Ctrl + Shift + X)</h4>
                            <p className="text-sm text-foreground/70">
                                The Imager has a secret menu! You can pre-configure Wi-Fi, SSH hostname, and more before even writing the OS. This allows for "headless" setup (setup without a monitor).
                            </p>
                        </div>
                        <div className="p-6 rounded-[32px] bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30">
                            <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Why not manual copy?</h4>
                            <p className="text-sm text-foreground/70">
                                Simply dragging files to the SD card won't work because the Pi needs a very specific boot sector. The Imager writes raw bits to create this.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Post-Installation (What Next) */}
            <section className="container mx-auto px-4">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Success
                    </div>
                    <div className="max-w-2xl mx-auto mt-6">
                        <h3 className="text-2xl font-bold mb-4">Your SD Card is Ready!</h3>
                        <p className="text-foreground/80 mb-8">
                            If you look at the card on your computer now, it might look smaller (e.g. only 200MB). Don't panic! This is just the "Boot" partition. The rest is hidden in a Linux format that Windows/Mac can't see by default.
                        </p>
                        <ul className="inline-flex gap-8 text-sm font-bold opacity-60 uppercase tracking-widest">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Bootable</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Secure</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="p-10 border-t border-border">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Installation Complete</h2>
                            <p className="text-muted-foreground">You have successfully prepared the brain of your Raspberry Pi.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center px-6 py-4 bg-muted/50 rounded-2xl">
                                <span className="block text-2xl font-bold text-primary">100%</span>
                                <span className="text-xs uppercase tracking-wider text-muted-foreground">Software Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/2")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Installation</p>
                        <p className="text-xl font-bold italic">Module 22 Progress: 75%</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/4")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 4: Basic Pi Usage ---
const Topic4BasicPiUsage = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-basic-usage" className="space-y-24">
            {/* SECTION 1: Intro (The Awakening) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Awakening</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">First Boot & Basic Usage</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Your Raspberry Pi is no longer just a board—it's about to wake up. Unlike a laptop, it has no power button. It breathes life the moment you plug it in.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="px-4 py-2 bg-muted rounded-full border border-border text-sm font-medium flex items-center gap-2">
                                <Zap className="w-4 h-4 text-yellow-500" /> Instant On
                            </div>
                            <div className="px-4 py-2 bg-muted rounded-full border border-border text-sm font-medium flex items-center gap-2">
                                <Monitor className="w-4 h-4 text-blue-500" /> Graphical Desktop
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                            <ImageWithFallback
                                src={getImageUrl('rpi-desktop-hero.jpg')}
                                alt="Raspberry Pi Desktop Environment"
                                description="The clean, lightweight Raspberry Pi OS desktop interface."
                                iconColor="text-primary"
                                bgColor="bg-primary/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: The Physical Setup (Pre-Boot Checklist) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-foreground">The Physical Setup</h2>
                    <p className="text-muted-foreground mt-2">Connect these peripherals <strong>before</strong> you plug in the power.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 border-border hover:border-primary/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">1. Display (HDMI)</h4>
                        <p className="text-sm text-muted-foreground">Connect the HDMI cable to your monitor or TV. If using a Pi 4/5, use the port closest to the USB-C power port.</p>
                    </Card>
                    <Card className="p-6 border-border hover:border-primary/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <MousePointer className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">2. Input Devices</h4>
                        <p className="text-sm text-muted-foreground">Plug your keyboard and mouse into any of the USB ports. No drivers are needed—they just work.</p>
                    </Card>
                    <Card className="p-6 border-border hover:border-primary/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <HardDrive className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">3. The Brain (SD)</h4>
                        <p className="text-sm text-muted-foreground">Ensure your microSD card (with the OS installed) is firmly inserted into the slot on the underside.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: The Boot Sequence */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-[40px] p-10 relative overflow-hidden border border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold tracking-wide uppercase border border-yellow-500/30 w-fit">
                                Ignition
                            </div>
                            <h3 className="text-3xl font-bold">The Boot Sequence</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Now, plug in the USB-C power. The Pi wakes up immediately. Here is what you will see:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-white">Red LED (Solid)</p>
                                        <p className="text-xs text-slate-400">Indicates the Pi is receiving stable power.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-white">Green LED (Flashing)</p>
                                        <p className="text-xs text-slate-400">Indicates the Pi is "thinking"—reading data from the SD card.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Monitor className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-white">The Screen</p>
                                        <p className="text-xs text-slate-400">You may see a "Rainbow Screen" briefly, then the Raspberry Pi Desktop loads.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
                            <Zap className="w-48 h-48 text-yellow-400 relative z-10 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)] opacity-90" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: The Setup Wizard */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-8 bg-background border-border shadow-lg rounded-[40px]">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <Settings className="w-6 h-6 text-primary" /> Welcome Wizard
                            </h3>
                            <p className="text-muted-foreground text-md">
                                On the very first boot, a window appears to help you configure the essentials. Do not skip this!
                            </p>
                            <ul className="space-y-3">
                                <li className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between">
                                    <span className="font-medium">1. Localization</span>
                                    <span className="text-xs text-muted-foreground">Language & Timezone</span>
                                </li>
                                <li className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between">
                                    <span className="font-medium">2. User Account</span>
                                    <span className="text-xs text-muted-foreground">Set Username & Password</span>
                                </li>
                                <li className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between">
                                    <span className="font-medium">3. Network</span>
                                    <span className="text-xs text-muted-foreground">Connect to Wi-Fi</span>
                                </li>
                                <li className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between">
                                    <span className="font-medium">4. Update</span>
                                    <span className="text-xs text-muted-foreground">Auto-update software</span>
                                </li>
                            </ul>
                        </div>
                    </Card>

                    <div className="space-y-6">
                        <div className="p-6 rounded-[32px] bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                            <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Security Tip</h4>
                            <p className="text-sm text-foreground/70">
                                The default username used to be "pi" with password "raspberry". Now, you <strong>must</strong> create your own for safety. Choose a strong password!
                            </p>
                        </div>
                        <p className="text-lg text-foreground/80 italic">
                            "Once the wizard finishes, it will ask to restart. Click <strong>Restart</strong> to apply all changes."
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: The Desktop Interface (New Home) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold">Your New Home</h3>
                    <p className="text-muted-foreground">The Raspberry Pi OS desktop is clean, simple, and familiar.</p>
                </div>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 sm:hidden" />

                    {/* Mock Desktop UI */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 justify-between z-20 opacity-90">
                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-sm bg-red-500" /> {/* Raspberry Icon */}
                            <div className="w-20 h-2 rounded-full bg-slate-600" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-slate-400" />
                            <div className="w-8 h-4 rounded-sm bg-slate-600" />
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <ImageWithFallback
                            src={getImageUrl('rpi-wallpaper-mock.jpg')}
                            alt="Desktop Wallpaper"
                            className="w-full h-full object-cover opacity-50"
                            description="Mockup of the desktop"
                        />
                        <h2 className="absolute text-white/10 font-bold text-6xl uppercase tracking-widest select-none">Desktop</h2>
                    </div>

                    {/* Interactive Points */}
                    <div className="absolute top-12 left-4 p-4 max-w-xs bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl text-white shadow-xl z-30">
                        <h5 className="font-bold text-sm text-primary mb-1">Application Menu</h5>
                        <p className="text-xs text-slate-300">Click the Raspberry icon to find programming tools, office apps, and settings.</p>
                    </div>
                    <div className="absolute top-12 right-4 p-4 max-w-xs bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl text-white shadow-xl z-30">
                        <h5 className="font-bold text-sm text-primary mb-1">System Tray</h5>
                        <p className="text-xs text-slate-300">Quick settings for Wi-Fi, Bluetooth, and volume.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Getting Online */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6 border-blue-200 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/10 rounded-3xl flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                            <Wifi className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Wi-Fi (Wireless)</h4>
                        <p className="text-sm text-foreground/70">Top-right corner {'>'} Click Wi-Fi icon {'>'} Select Network {'>'} Password. The Pi 4 and 5 support fast 5GHz Wi-Fi.</p>
                    </Card>
                    <Card className="p-6 border-purple-200 dark:border-purple-900/30 bg-purple-50/50 dark:bg-purple-950/10 rounded-3xl flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 mb-4">
                            <Settings className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Ethernet (Wired)</h4>
                        <p className="text-sm text-foreground/70">The most stable option. Simply plug a LAN cable from your router into the Pi's Ethernet port. It connects instantly.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Summary & What's Next */}
            <section className="container mx-auto px-4 pb-12">
                <div className="p-10 border-t border-border mt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">You Are Live! 🟢</h2>
                            <p className="text-muted-foreground w-full md:w-2/3">
                                You have successfully assembled the hardware, installed the OS, and booted into the desktop. Your Raspberry Pi is now a fully functional computer.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center px-6 py-4 bg-muted/50 rounded-2xl border border-border">
                                <span className="block text-2xl font-bold text-primary">Ready</span>
                                <span className="text-xs uppercase tracking-wider text-muted-foreground">Status</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/3")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Basic Usage</p>
                        <p className="text-xl font-bold italic">Next: Basic Terminal Commands</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/5")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 5: Basic Terminal Commands ---
const Topic5BasicTerminalCommands = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const commands = [
        {
            cmd: "ls",
            title: "List Files",
            desc: "Shows all files and folders in the current directory.",
            example: "ls",
            out: "Documents  Downloads  Music  Pictures  Videos  Desktop"
        },
        {
            cmd: "cd",
            title: "Change Directory",
            desc: "Move from one folder to another. 'cd ..' moves you back one level.",
            example: "cd Documents",
            out: "(Current folder changes to Documents)"
        },
        {
            cmd: "mkdir",
            title: "Make Directory",
            desc: "Creates a new folder to organize your work.",
            example: "mkdir my_project",
            out: "(A new folder named 'my_project' is created)"
        },
        {
            cmd: "rm",
            title: "Remove Files",
            desc: "Deletes a file. Be careful! There is no recycle bin in the terminal.",
            example: "rm old_file.txt",
            out: "(The file is permanently deleted)"
        }
    ];

    return (
        <div id="topic-terminal-commands" className="space-y-24">
            {/* SECTION 1: Intro (The Power of Text) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Direct Control</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                Basic <span className="text-primary">Terminal</span> Commands
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            The <span className="font-semibold text-foreground">Terminal</span> is a text-based way to talk to your Pi. Instead of clicking, you type instructions directly to the brain.
                        </p>

                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-foreground/70 italic text-lg">
                                "Think of it like a conversation. You type a command, and the computer answers back with results."
                            </p>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-center">
                            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    <span className="ml-2 text-[10px] font-mono text-slate-400">pi@raspberrypi: ~</span>
                                </div>
                                <div className="p-6 space-y-4 font-mono text-sm">
                                    <div className="flex gap-2 text-green-400">
                                        <span>$</span>
                                        <span className="typing-effect">ls -la</span>
                                    </div>
                                    <div className="text-slate-400 text-xs">
                                        drwxr-xr-x  2 pi pi 4096 Dec 29 Documents<br />
                                        drwxr-xr-x  2 pi pi 4096 Dec 29 Projects<br />
                                        -rw-r--r--  1 pi pi  156 Dec 29 script.py
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-green-400">$</span>
                                        <span className="text-white animate-pulse">_</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Terminal className="absolute bottom-6 right-6 w-24 h-24 text-primary/10" />
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Opening the Terminal */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/30 border border-border/50 rounded-[40px] p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">How to Open Terminal</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MousePointer className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-medium">Click the black icon in the top taskbar.</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                        KB
                                    </div>
                                    <p className="text-sm font-medium">Use shortcut <kbd className="px-2 py-1 bg-muted border rounded text-xs">Ctrl + Alt + T</kbd></p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-black">
                            <ImageWithFallback
                                src={getImageUrl('rpi-terminal-screenshot.jpg')}
                                alt="Raspberry Pi Terminal"
                                description="Visual of the terminal window open on the desktop."
                                className="opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Command Simulator */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Interactive</p>
                    <h2 className="text-3xl font-bold">The "Fantastic Four" Commands</h2>
                    <p className="text-muted-foreground mt-2">Master these four to navigate your Pi like a pro.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Command List */}
                    <div className="space-y-4">
                        {commands.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentStep(i)}
                                className={cn(
                                    "w-full text-left p-6 rounded-3xl border-2 transition-all duration-300",
                                    currentStep === i
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                                        : "bg-background border-border hover:border-primary/30"
                                )}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-mono text-xl font-bold">`{c.cmd}`</span>
                                    {currentStep === i && <ArrowRight className="w-5 h-5" />}
                                </div>
                                <p className={cn("text-sm", currentStep === i ? "text-primary-foreground/90" : "text-muted-foreground")}>{c.title}</p>
                            </button>
                        ))}
                    </div>

                    {/* Simulator Display */}
                    <Card className="bg-slate-950 border-slate-800 p-8 flex flex-col h-full shadow-2xl rounded-[32px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="space-y-2">
                                <p className="text-xs uppercase tracking-widest text-primary font-bold">Explanation</p>
                                <p className="text-slate-300 leading-relaxed font-light">{commands[currentStep].desc}</p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Interactive Demo</p>
                                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl font-mono text-sm border border-white/5">
                                    <div className="flex gap-2 mb-2">
                                        <span className="text-green-500">pi@raspberrypi:~$</span>
                                        <span className="text-white">{commands[currentStep].example}</span>
                                    </div>
                                    <div className="text-slate-500 py-2 border-t border-slate-900 mt-2 italic text-xs">
                                        Output:
                                    </div>
                                    <div className="text-blue-400 font-bold">
                                        {commands[currentStep].out}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-slate-500 font-mono">System Status: Active</span>
                            </div>
                            <Terminal className="w-4 h-4 text-slate-700" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Updating the System */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-indigo-900 to-slate-950 text-white p-10 md:p-16 rounded-[40px] relative overflow-hidden shadow-2xl border border-indigo-500/30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold tracking-wide uppercase border border-primary/30 w-fit">
                                <Zap className="w-3 h-3" /> System Maintenance
                            </div>
                            <h3 className="text-3xl font-bold">Keep it Fresh & Secure</h3>
                            <p className="text-indigo-200 text-lg leading-relaxed">
                                Updating is the first thing you should do with a new Pi. It fixes bugs and keeps everything safe.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <p className="font-bold">Update the List</p>
                                        <p className="text-sm text-indigo-300">`sudo apt update` — Asks the servers what's new.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <p className="font-bold">Install the Upgrades</p>
                                        <p className="text-sm text-indigo-300">`sudo apt upgrade` — Actually installs the new updates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/5 font-mono text-xs md:text-sm">
                            <div className="flex gap-2 mb-1">
                                <span className="text-green-500">pi@raspberrypi:~$</span>
                                <span className="text-white">sudo apt update</span>
                            </div>
                            <div className="text-slate-400 mb-4">
                                Get:1 http://archive.raspberrypi.org/debian bullseye InRelease<br />
                                Reading package lists... Done
                            </div>
                            <div className="flex gap-2 mb-1">
                                <span className="text-green-500">pi@raspberrypi:~$</span>
                                <span className="text-white">sudo apt upgrade</span>
                            </div>
                            <div className="text-slate-400">
                                42 upgraded, 0 newly installed, 0 to remove.<br />
                                Do you want to continue? [Y/n] <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Terminal Recap
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-6">
                        <div className="p-4 bg-background rounded-2xl border border-border shadow-sm flex items-center gap-3">
                            <Terminal className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Text-based control</span>
                        </div>
                        <div className="p-4 bg-background rounded-2xl border border-border shadow-sm flex items-center gap-3">
                            <Settings className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">System management</span>
                        </div>
                        <div className="p-4 bg-background rounded-2xl border border-border shadow-sm flex items-center gap-3">
                            <Code className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">Faster than GUI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/4")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Terminal</p>
                        <p className="text-xl font-bold italic">Next: The GPIO Magic</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/6")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 6: GPIO Basics ---
const Topic6GPIOBasics = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-gpio-basics" className="space-y-24">
            {/* SECTION 1: Intro (The Physical Link) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Hardware Interface</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                <span className="text-primary">GPIO</span> Basics
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            <span className="font-semibold text-foreground">GPIO</span> (General Purpose Input/Output) pins are the secret weapon of the Raspberry Pi. They allow it to <span className="text-primary font-medium">talk to electronics</span>.
                        </p>

                        <div className="gap-4 flex flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full text-sm font-bold">
                                <ArrowRight className="w-4 h-4" /> Control LEDs
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full text-sm font-bold">
                                <Wifi className="w-4 h-4" /> Read Sensors
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/20 text-amber-600 rounded-full text-sm font-bold">
                                <Zap className="w-4 h-4" /> Build Robots
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                            <div className="mb-8 p-4 bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5">
                                <div className="grid grid-cols-10 grid-rows-2 gap-3">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="w-3.5 h-3.5 bg-amber-500 rounded-sm shadow-[0_0_15px_rgba(245,158,11,0.6)] border border-amber-600/50"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-bold text-white tracking-widest uppercase font-mono">40-Pin Header</h3>
                                <p className="text-slate-400 text-xs italic">The Bridge to the Physical World</p>
                            </div>
                        </div>
                        <div className="absolute bottom-8 inset-x-0 flex justify-center">
                            <div className="px-4 py-1.5 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Software Meets Hardware</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: What GPIO Means */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-8 border-none bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-xl group hover:-translate-y-2 transition-transform">
                        <LayoutGrid className="w-12 h-12 text-primary mb-6" />
                        <h4 className="text-xl font-bold mb-4">General Purpose</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">The pins aren't fixed. You decide what they do. One moment it's a switch, the next it's a flashing light.</p>
                    </Card>
                    <Card className="p-8 border-none bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20 shadow-xl group hover:-translate-y-2 transition-transform border-l-4 border-l-blue-500">
                        <ArrowLeft className="w-12 h-12 text-blue-500 mb-6" />
                        <h4 className="text-xl font-bold mb-4">Input</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed text-blue-900/80 dark:text-blue-200/80">Receiving info from the world. A button press, a motion sensor trigger, or a temperature reading.</p>
                    </Card>
                    <Card className="p-8 border-none bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20 shadow-xl group hover:-translate-y-2 transition-transform border-l-4 border-l-green-500">
                        <ArrowRight className="w-12 h-12 text-green-500 mb-6" />
                        <h4 className="text-xl font-bold mb-4">Output</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed text-green-900/80 dark:text-green-200/80">Sending info to the world. Turning on a motor, flashing an LED, or sounding a buzzer.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: The Brain Analogy */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 text-white p-12 rounded-[40px] text-center border-2 border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                            <Lightbulb className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold">Think of GPIO as "Fingers"</h3>
                        <p className="text-slate-300 text-lg leading-relaxed font-light">
                            If the CPU is the brain, the GPIO pins are the fingers. They let the Raspberry Pi <span className="text-primary font-medium">touch</span> and <span className="text-primary font-medium">feel</span> everything you connect to it.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Location & Gear */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">Where do I find them?</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Look at the top edge of your board. You'll see two rows of 20 pins each. These 40 pins are your gateway to hardware hacking.
                        </p>

                        <div className="space-y-4">
                            <h5 className="font-bold text-sm uppercase tracking-widest text-primary">Required Gear:</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-muted rounded-2xl flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm text-xs font-bold">1</div>
                                    <span className="text-sm">Jumper Wires</span>
                                </div>
                                <div className="p-4 bg-muted rounded-2xl flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm text-xs font-bold">2</div>
                                    <span className="text-sm">Breadboard</span>
                                </div>
                                <div className="p-4 bg-muted rounded-2xl flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm text-xs font-bold">3</div>
                                    <span className="text-sm">LEDs & Resistors</span>
                                </div>
                                <div className="p-4 bg-muted rounded-2xl flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm text-xs font-bold">4</div>
                                    <span className="text-sm">Sensors</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-[48px] overflow-hidden shadow-2xl">
                        <ImageWithFallback
                            src={getImageUrl('rpi-pins-closeup.jpg')}
                            alt="GPIO Pins Closeup"
                            description="Close-up photo of the 40-pin GPIO header on a Raspberry Pi."
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <p className="text-white font-bold">Pro Tip:</p>
                            <p className="text-white/70 text-sm">Always use a "Pinout Diagram" so you don't connect wires to the wrong pins!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Conceptual Example (LED Control) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold uppercase tracking-tight">How it works (The LED Example)</h3>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-border text-center">
                        <div className="text-2xl mb-2">🐍</div>
                        <h5 className="font-bold mb-2">1. Software</h5>
                        <p className="text-xs text-muted-foreground">You write a line of Python code to turn Pin 17 ON.</p>
                    </div>
                    <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-border text-center border-t-4 border-t-primary">
                        <div className="text-2xl mb-2">⚡</div>
                        <h5 className="font-bold mb-2">2. Electricity</h5>
                        <p className="text-xs text-muted-foreground">The Pi sends 3.3 volts through Pin 17.</p>
                    </div>
                    <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-border text-center">
                        <div className="text-2xl mb-2">💡</div>
                        <h5 className="font-bold mb-2">3. Hardware</h5>
                        <p className="text-xs text-muted-foreground">The power flows to the LED, and it glows!</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Safety First */}
            <section className="container mx-auto px-4">
                <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-[40px] flex flex-col items-center text-center max-w-4xl mx-auto">
                    <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Safety for your Pi</h3>
                    <div className="grid sm:grid-cols-2 gap-6 text-left w-full mt-4">
                        <Card className="p-4 border-none shadow-sm flex items-start gap-4">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                            <p className="text-sm">Never connect high voltage (like a wall socket) directly to the pins.</p>
                        </Card>
                        <Card className="p-4 border-none shadow-sm flex items-start gap-4">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                            <p className="text-sm">Always use a resistor with LEDs to prevent burning the pin out.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-left mt-6 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Input (Read)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Output (Control)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>40 Physical Pins</span>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-primary/10 max-w-xl mx-auto">
                        <p className="text-sm text-muted-foreground italic">"GPIO is what makes the Raspberry Pi a bridge between the world of code and the physical world."</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/5")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of GPIO Basics</p>
                        <p className="text-xl font-bold italic">Next: Sensors & Modules</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/7")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 7: Sensors & Modules ---
const Topic7SensorsAndModules = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-sensors-modules" className="space-y-24">
            {/* SECTION 1: Intro (Sense the World) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">IoT Fundamentals</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                Sensors & <span className="text-primary">Modules</span>
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            Sensors are the <span className="font-semibold text-foreground">eyes and ears</span> of your Pi. They collect data from the environment and turn it into information the Pi can use to make decisions.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl">
                                <Thermometer className="w-6 h-6 text-orange-500" />
                                <span className="text-sm font-bold">Temperature</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl">
                                <Activity className="w-6 h-6 text-blue-500" />
                                <span className="text-sm font-bold">Motion</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl">
                                <Camera className="w-6 h-6 text-purple-500" />
                                <span className="text-sm font-bold">Camera</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl">
                                <Sun className="w-6 h-6 text-yellow-500" />
                                <span className="text-sm font-bold">Light</span>
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <ImageWithFallback
                                    src={getImageUrl('rpi-sensor-kit.jpg')}
                                    alt="Sensor Kit"
                                    description="A collection of various electronics sensors used with Raspberry Pi."
                                    className="rounded-[32px] border-4 border-slate-800 relative z-10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                            <Layers className="w-3 h-3 text-primary" />
                            <span className="text-[10px] font-bold text-white/70 uppercase">IoT Modules</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Temperature Sensor */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 text-white rounded-[40px] p-10 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30">
                                <Thermometer className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-3xl font-bold">Temperature Sensors</h3>
                            <p className="text-lg text-slate-400 font-light leading-relaxed">
                                Measures how hot or cold something is. Used in weather stations, smart thermostats, and even to keep server rooms safe.
                            </p>
                            <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/5 font-mono text-xs">
                                <p className="text-slate-500 mb-2">// Logic Example</p>
                                <p><span className="text-orange-400">if</span> reading &gt; <span className="text-blue-400">30</span>:</p>
                                <p className="pl-4 text-green-400">start_fan()</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="w-64 h-64 bg-slate-900 rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-white/5 relative group">
                                <div className="absolute inset-0 bg-orange-500/5 rounded-full animate-pulse" />
                                <div className="text-5xl font-mono font-bold text-orange-500 group-hover:scale-110 transition-transform">24.5°C</div>
                                <p className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">Ambient Temp</p>
                                <div className="absolute top-4 right-4 bg-orange-500 text-white p-2.5 rounded-full animate-bounce shadow-lg shadow-orange-500/20">
                                    <Zap className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Motion Sensor */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 text-white rounded-[40px] p-10 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] translate-x-1/2 -translate-y-1/2 rounded-full" />
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="flex justify-center">
                            <div className="w-full max-w-sm aspect-video bg-black rounded-3xl overflow-hidden relative border border-white/10 group">
                                <motion.div
                                    animate={{
                                        opacity: [0.1, 0.3, 0.1],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-500/20 flex items-center justify-center"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/30">
                                    <Activity className="w-24 h-24" />
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-red-600/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-tighter animate-pulse shadow-xl">
                                    <div className="w-2 h-2 rounded-full bg-white mr-1" /> Monitoring
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                                <Activity className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-bold">Motion Detection</h3>
                            <p className="text-lg text-slate-400 font-light leading-relaxed">
                                Detects movement nearby. It is the core of automatic lights, security alarms, and smart doorbells.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
                                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Security</span>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
                                    <Home className="w-4 h-4 text-blue-500" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Smart Home</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Camera Module */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-200 dark:border-purple-800">
                            <Camera className="w-4 h-4" /> Visual Computing
                        </div>
                        <h3 className="text-3xl font-bold">The Pi Camera Module</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A tiny, powerful camera that connects directly to the Pi's dedicated CSI port. It transforms your Pi into a smart vision system.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h5 className="font-bold">Face Detection</h5>
                                <p className="text-sm text-muted-foreground italic leading-relaxed">Recognize people and trigger actions based on who is present.</p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="font-bold">Robotics Vision</h5>
                                <p className="text-sm text-muted-foreground italic leading-relaxed">Help robots "see" obstacles or follow paths using image processing.</p>
                            </div>
                        </div>
                    </div>

                    <Card className="p-8 bg-slate-100 dark:bg-slate-900 border-none rounded-[40px] shadow-xl overflow-hidden group">
                        <div className="relative aspect-square bg-slate-950 rounded-3xl overflow-hidden flex items-center justify-center border-4 border-slate-800 shadow-inner group-hover:border-purple-500/50 transition-colors">
                            <div className="w-24 h-24 bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
                                <div className="w-8 h-8 bg-blue-500/50 rounded-full blur-sm" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                            </div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        </div>
                        <p className="text-center mt-6 text-sm font-mono text-muted-foreground">Attached to the CSI Port</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Sensors = Input Hands</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>CSI Port for Camera</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>IoT Decision Making</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/6")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Sensors</p>
                        <p className="text-xl font-bold italic">Next: Automating Tasks</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/8")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 8: Automating Tasks ---
const Topic8AutomatingTasks = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-automating-tasks" className="space-y-24">
            {/* SECTION 1: Intro (Set it and Forget it) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Productivity Hacking</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                <span className="text-primary">Automating</span> Tasks
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light mx-auto lg:mx-0 max-w-xl">
                            Why do it manually when your Pi can do it for you? <span className="font-semibold text-foreground">Automation</span> means setting up programs to run automatically at specific times or events.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 py-2 px-4 rounded-full text-sm border border-primary/20">No Human Interaction</Badge>
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 py-2 px-4 rounded-full text-sm border border-primary/20">Reliable Repetition</Badge>
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 py-2 px-4 rounded-full text-sm border border-primary/20">Time Saving</Badge>
                        </div>
                    </div>

                    <Card className="relative p-10 bg-slate-950 text-white rounded-[48px] overflow-hidden group shadow-2xl border-none">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg font-mono text-slate-400 font-bold uppercase tracking-widest">Task Queue</h4>
                                <Clock className="w-6 h-6 text-primary animate-spin" />
                            </div>
                            <div className="space-y-3">
                                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 opacity-30 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">Completed</span>
                                    <span className="text-sm">Update System</span>
                                </div>
                                <div className="p-4 bg-primary/20 rounded-2xl border border-primary/40 flex items-center justify-between relative overflow-hidden group/item">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute inset-0 bg-primary/10"
                                    />
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary font-mono z-10">Running...</span>
                                    <span className="text-sm font-bold z-10">Backup Files</span>
                                </div>
                                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">Next @ 9:00 PM</span>
                                    <span className="text-sm">Water Plants</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Schedulers */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h3 className="text-3xl font-bold">The Schedulers</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A scheduler is like a personal assistant for your Pi. It decides <span className="text-foreground font-bold italic">When</span> a task should start and <span className="text-foreground font-bold italic">How often</span> it should repeat.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <Card className="p-8 border-none bg-muted-foreground/5 shadow-inner rounded-3xl">
                            <div className="w-12 h-12 bg-background rounded-2xl shadow-sm flex items-center justify-center mb-6">
                                <CalendarDays className="w-6 h-6 text-primary" />
                            </div>
                            <h5 className="font-bold text-xl mb-3">Time-Based</h5>
                            <p className="text-sm text-muted-foreground">"Run this program every Monday morning at 8 AM."</p>
                        </Card>
                        <Card className="p-8 border-none bg-muted-foreground/5 shadow-inner rounded-3xl">
                            <div className="w-12 h-12 bg-background rounded-2xl shadow-sm flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <h5 className="font-bold text-xl mb-3">Event-Based</h5>
                            <p className="text-sm text-muted-foreground">"Run this script whenever the Pi boots up."</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Why Python is King */}
            <section className="container mx-auto px-4 py-12">
                <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 opacity-10">
                        <Code className="w-96 h-96" />
                    </div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold leading-tight">Python Scripts: <br /><span className="text-primary italic font-serif">The Engine of Automation</span></h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Python is the favorite language on Raspberry Pi because it's human-readable and handles hardware perfectly. You write a script, and the Pi executes it letter-by-letter.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4 uppercase font-mono text-[10px] tracking-widest text-primary">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Easy to read</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Powerful libraries</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Beginner friendly</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Industry standard</li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 font-mono text-sm leading-relaxed shadow-2xl">
                            <div className="text-slate-500 mb-2"># automation_example.py</div>
                            <div className="flex gap-2">
                                <span className="text-indigo-400">import</span>
                                <span className="text-white">time</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-indigo-400">import</span>
                                <span className="text-white">RPi.GPIO as GPIO</span>
                            </div>
                            <div className="mt-4 text-slate-500 italic"># Check sensor every 10 mins</div>
                            <div className="flex gap-2">
                                <span className="text-yellow-400">while</span>
                                <span className="text-white">True:</span>
                            </div>
                            <div className="pl-6 flex gap-2">
                                <span className="text-white">record_temp()</span>
                            </div>
                            <div className="pl-6 flex gap-2">
                                <span className="text-white">time.sleep(</span>
                                <span className="text-emerald-400">600</span>
                                <span className="text-white">)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Summary Recap */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Cron & Schedulers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Python Scripting Hub</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>24/7 Reliability</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/7")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Automation</p>
                        <p className="text-xl font-bold italic">Next: Pi as a Server</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/9")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 9: Pi as a Server ---
const Topic9PiAsAServer = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-pi-server" className="space-y-24">
            {/* SECTION 1: Intro (The Gateway) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Networking Mastery</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                Pi as a <span className="text-primary">Server</span>
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light">
                            A <span className="font-semibold text-foreground">Server</span> is a computer that provides services to other devices. Despite its size, the Raspberry Pi is a robust platform for learning networking.
                        </p>

                        <div className="p-6 bg-primary/5 rounded-[32px] border border-primary/10">
                            <p className="text-muted-foreground italic leading-relaxed">
                                "Think of it like a small helper computer that stays ON 24/7 to serve files, websites, or data to your whole household."
                            </p>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
                            <div className="absolute top-6 right-6">
                                <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse border border-green-500/20 backdrop-blur-md">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Server Active
                                </div>
                            </div>

                            <div className="space-y-8 flex flex-col items-center">
                                <div className="flex items-center justify-center gap-6">
                                    <div className="w-16 h-16 bg-slate-900/80 backdrop-blur border border-white/10 rounded-2xl shadow-xl flex items-center justify-center hover:-translate-y-2 transition-transform duration-500">
                                        <Laptop className="w-8 h-8 text-blue-400/70" />
                                    </div>
                                    <div className="w-16 h-16 bg-slate-900/80 backdrop-blur border border-white/10 rounded-2xl shadow-xl flex items-center justify-center hover:-translate-y-2 transition-transform duration-500 delay-75">
                                        <Smartphone className="w-8 h-8 text-indigo-400/70" />
                                    </div>
                                </div>

                                <div className="w-32 h-1 bg-slate-800 rounded-full relative overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                                    />
                                </div>

                                <div className="w-24 h-24 bg-primary rounded-3xl shadow-[0_0_40px_rgba(var(--primary),0.3)] flex items-center justify-center relative group">
                                    <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Cpu className="w-12 h-12 text-primary-foreground" />
                                </div>

                                <div className="text-center">
                                    <p className="text-xs font-mono text-slate-500 mb-1 tracking-tighter">HOST: NODE-01</p>
                                    <p className="text-[10px] font-mono text-primary font-bold">IPV4: 192.168.1.10</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Web Server hosting */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl bg-primary/20 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="w-16 h-16 rounded-3xl bg-primary/20 flex items-center justify-center">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-3xl font-bold">Host Your Own Website</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                You can run web server software like <span className="text-primary font-bold">Apache</span> or <span className="text-primary font-bold">Nginx</span>. This allows anyone on your network to view your files as a real website.
                            </p>
                            <ul className="space-y-3 font-mono text-sm text-slate-500">
                                <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-primary" /> Learning HTML/CSS behind the scenes</li>
                                <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-primary" /> Personal dashboards (weather, stocks)</li>
                                <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-primary" /> School projects live demo</li>
                            </ul>
                        </div>
                        <Card className="bg-white/5 border-white/10 p-8 rounded-[32px] backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10 font-mono text-xs text-slate-500 uppercase tracking-[0.2em]"> Browser View</div>
                            <div className="space-y-4">
                                <div className="h-6 w-1/2 bg-white/20 rounded-full" />
                                <div className="h-24 w-full bg-white/10 rounded-2xl" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-12 w-full bg-primary/20 rounded-xl" />
                                    <div className="h-12 w-full bg-white/20 rounded-xl" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: File Server */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative h-[400px] rounded-[48px] overflow-hidden shadow-2xl group">
                        <ImageWithFallback
                            src={getImageUrl('rpi-nas-setup.jpg')}
                            alt="NAS Setup"
                            description="A Raspberry Pi with external hard drives acting as a home file server."
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                            <h5 className="font-bold text-xl uppercase tracking-tighter mb-2">NAS: Network Attached Storage</h5>
                            <p className="text-sm opacity-60">Store your music, movies, and school documents in one central location accessible from any device.</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-3xl font-bold italic">Centralize Your Data</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Stop using USB sticks. Turn your Pi into a **File Server**. You can store massive amounts of information and share it securely between your laptop, phone, and tablet.
                        </p>
                        <div className="space-y-4">
                            <Card className="p-4 border-none shadow-sm flex items-center gap-4 bg-muted/50 transition-colors hover:bg-muted">
                                <Database className="w-6 h-6 text-primary" />
                                <div className="text-sm font-medium">Backup systems for the whole family</div>
                            </Card>
                            <Card className="p-4 border-none shadow-sm flex items-center gap-4 bg-muted/50 transition-colors hover:bg-muted">
                                <Share2 className="w-6 h-6 text-primary" />
                                <div className="text-sm font-medium">Share documents instantly between rooms</div>
                            </Card>
                            <Card className="p-4 border-none shadow-sm flex items-center gap-4 bg-muted/50 transition-colors hover:bg-muted">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                <div className="text-sm font-medium">Private storage—no cloud fees!</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-10 rounded-[40px] text-center border-2 border-primary/10 shadow-inner relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Quick Recap
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-4 uppercase font-mono text-[10px] tracking-widest text-primary/70">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Apache & Nginx Hosting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>NAS File Storage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Local IP & SSH Access</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/22/topic/8")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-center flex-1">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Networking</p>
                        <p className="text-xl font-bold italic">Next: Real Projects</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/22/topic/10")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

// --- TOPIC 10: Real Projects ---
const Topic10RealProjects = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-real-projects" className="space-y-24">
            {/* SECTION 1: Intro (The Grand Finale) */}
            {/* SECTION 1: Intro (The Grand Finale) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Module Conclusion</p>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1]">
                                Bringing it all <br /><span className="text-primary italic font-serif text-gradient">Together</span>
                            </h2>
                        </div>

                        <p className="text-xl text-foreground/80 leading-relaxed font-light italic">
                            "The best way to learn is by doing. Now that you know the basics, let's explore what you can actually build."
                        </p>

                        <div className="flex items-center gap-4 p-6 bg-primary/5 border border-primary/20 rounded-3xl">
                            <Trophy className="w-10 h-10 text-primary animate-bounce" />
                            <div>
                                <h4 className="font-bold text-sm">Course Milestone Reached</h4>
                                <p className="text-xs text-muted-foreground">You are now ready to start your own DIY electronics journey.</p>
                            </div>
                        </div>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl relative aspect-square bg-slate-950">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12 text-center">
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[2px] border-white/5 rounded-full"
                            />
                            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/30 relative">
                                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full" />
                                <Rocket className="w-16 h-16 text-primary relative z-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Innovation Lab</h3>
                            <p className="text-slate-400 text-sm max-w-xs mb-8">
                                Connect code, hardware, and the cloud to solve real-world problems.
                            </p>
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <div className="w-2 h-2 rounded-full bg-primary/50" />
                                <div className="w-2 h-2 rounded-full bg-primary/20" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Project Showcase */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project 1: Smart Home */}
                    <Card className="p-8 rounded-[40px] border border-white/5 bg-slate-950 text-white shadow-2xl group hover:-translate-y-3 transition-all duration-500 overflow-hidden relative aspect-[4/5] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Home className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/30">
                                <Home className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 tracking-tight">Smart Home Control</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Automate your lifestyle! Use sensors to detect when someone enters a room and turn on lights automatically.</p>
                        </div>
                        <div className="relative z-10 space-y-2 mt-auto">
                            <div className="h-px bg-white/5 w-full mb-4" />
                            <ul className="grid grid-cols-1 gap-2 text-[10px] font-mono text-blue-400/80 uppercase tracking-widest">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Auto Lighting</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Climate Control</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Security Net</li>
                            </ul>
                        </div>
                    </Card>

                    {/* Project 2: Attendance System */}
                    <Card className="p-8 rounded-[40px] border border-primary/20 bg-slate-950 text-white shadow-2xl group hover:-translate-y-3 transition-all duration-500 overflow-hidden relative aspect-[4/5] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <UserCheck className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/30">
                                <UserCheck className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 tracking-tight">Digital Attendance</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Create a system for your school or lab using RFID cards or face detection to log student entry times.</p>
                        </div>
                        <div className="relative z-10 space-y-2 mt-auto">
                            <div className="h-px bg-white/5 w-full mb-4" />
                            <ul className="grid grid-cols-1 gap-2 text-[10px] font-mono text-primary/80 uppercase tracking-widest">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Facial Sync</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> SQL Database</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Live Logs</li>
                            </ul>
                        </div>
                    </Card>

                    {/* Project 3: Robotics Brain */}
                    <Card className="p-8 rounded-[40px] border border-white/5 bg-slate-950 text-white shadow-2xl group hover:-translate-y-3 transition-all duration-500 overflow-hidden relative aspect-[4/5] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Bot className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-400 mb-8 border border-amber-500/30">
                                <Bot className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 tracking-tight">Robotics Hub</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Turn your Pi into the brain of a robot drive wheels, read obstacle sensors, and navigate complex paths.</p>
                        </div>
                        <div className="relative z-10 space-y-2 mt-auto">
                            <div className="h-px bg-white/5 w-full mb-4" />
                            <ul className="grid grid-cols-1 gap-2 text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Motor Control</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> LiDAR Mapping</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Pathfinding</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: Why it matters */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-muted/30 rounded-[64px] p-12 lg:p-24 overflow-hidden border border-border/50">
                    <div className="space-y-8">
                        <h3 className="text-4xl font-bold leading-tight">Practical Learning <br />is the <span className="text-primary italic">Better</span> Learning</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            These projects connect everything you've learned. From typing `ls` in the terminal to writing Python logic that controls a physical motor, you are now a hardware hacker.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">✓</div>
                                <span className="font-bold">Build Confidence</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">✓</div>
                                <span className="font-bold">Solve Problems</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">✓</div>
                                <span className="font-bold">Real-World Prep</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[20px] border-primary/5 rounded-full"
                        />
                        <div className="absolute inset-10 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-3xl shadow-2xl border border-primary/20">
                            <div className="text-center p-10">
                                <Trophy className="w-24 h-24 text-primary mx-auto mb-6" />
                                <p className="text-xl font-bold uppercase tracking-[0.3em] text-primary">Mastery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Final Summary */}
            <section className="container mx-auto px-4 pb-20">
                <div className="bg-primary/5 p-12 md:p-20 rounded-[64px] text-center border-2 border-primary/10 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                        Module Mastery
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8 mt-4">
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">You've Unlocked the World of DIY Tech</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed font-light italic">
                            "From the history of Pi to building real robots, you now have the foundation to start your own DIY electronics journey. The only limit is your imagination."
                        </p>
                        <div className="flex justify-center flex-wrap gap-8 uppercase font-mono text-[10px] tracking-widest text-primary font-bold">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Hardware Mastery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Linux Proficiency</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Automation Expert</span>
                            </div>
                        </div>
                        <div className="pt-8">
                            <Button size="lg" className="h-16 px-12 rounded-3xl bg-primary text-primary-foreground hover:scale-105 transition-transform text-lg shadow-xl shadow-primary/20" onClick={() => navigate("/dashboard")}>
                                Return to Dashboard <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- Main Module 22 Component with Routing ---
const Module22 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    // Default to topic 1 if no topicId
    useEffect(() => {
        if (!topicId) {
            navigate("/module/22/topic/1", { replace: true });
        }
    }, [topicId, navigate]);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={topicId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {(() => {
                        // Normalize the topicId to handle formats like "m22-t1", "topic-1", or just "1"
                        const id = topicId?.replace(/m22-t|topic-/g, "") || "1";

                        switch (id) {
                            case "1": return <Topic1WhatIsRaspberryPi />;
                            case "2": return <Topic2RaspberryPiHardware />;
                            case "3": return <Topic3InstallingOS />;
                            case "4": return <Topic4BasicPiUsage />;
                            case "5": return <Topic5BasicTerminalCommands />;
                            case "6": return <Topic6GPIOBasics />;
                            case "7": return <Topic7SensorsAndModules />;
                            case "8": return <Topic8AutomatingTasks />;
                            case "9": return <Topic9PiAsAServer />;
                            case "10": return <Topic10RealProjects />;
                            default: return (
                                <div className="p-20 text-center space-y-6 flex flex-col items-center justify-center min-h-[60vh]">
                                    <h1 className="text-4xl font-bold">Topic under construction</h1>
                                    <p className="text-muted-foreground italic max-w-md">Target Topic: {topicId}</p>
                                    <Button className="mt-8 rounded-2xl px-8 h-12" onClick={() => navigate("/module/22/topic/1")}>Return to Topic 1</Button>
                                </div>
                            );
                        }
                    })()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Module22;

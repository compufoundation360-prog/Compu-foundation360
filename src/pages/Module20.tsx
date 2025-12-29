import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Globe, Server, Smartphone, Lock, Database, Search, FileText, Layout, RefreshCw, Zap, Layers, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import frontendBackendCollabImg from "@/assets/module-media/frontend-backend-collaboration.jpg";

const ImageWithFallback = ({ src, alt, description, iconColor = "text-primary", bgColor = "bg-primary/20", className }: { src: string, alt: string, description: string, iconColor?: string, bgColor?: string, className?: string }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className={`p-8 text-center text-sm text-muted-foreground flex flex-col items-center justify-center h-full space-y-4 ${className}`}>
                <div className={`${bgColor} p-6 rounded-full`}>
                    <Globe className={`w-12 h-12 ${iconColor}`} />
                </div>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            onError={() => setHasError(true)}
        />
    );
};

// Helper to request assets
const getImageUrl = (name: string) => {
    return `/assets/module20/${name}`;
};

const Topic1HowWebWorks = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-how-web-works" className="space-y-24">
            {/* SECTION 1: Introduction (The Invisible Conversation) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Foundation</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">The Invisible Conversation</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Every time you click a link, a complex conversation happens. It involves a <strong>Client</strong> (you), a <strong>Server</strong> (the provider), and a language called <strong>HTTP</strong>. It's the digital handshake that powers the entire internet.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Globe className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">Global Connection</h4>
                                <p className="text-sm text-muted-foreground">Connecting billions of devices instantly.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Card - Restored Network Visualization */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl bg-slate-950 relative aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black z-0" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                        {/* Abstract Network Visualization */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                {/* Center Node (Internet) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                                <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-400" />

                                {/* Satellites */}
                                {[0, 72, 144, 216, 288].map((deg, i) => (
                                    <div key={i} className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-slate-800 border border-slate-700 shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            transform: `rotate(${deg}deg) translate(8rem) rotate(-${deg}deg) translate(-50%, -50%)`,
                                        }}>
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }} />
                                    </div>
                                ))}
                                {/* Connection Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                    {[0, 72, 144, 216, 288].map((deg, i) => {
                                        const rad = (deg - 90) * (Math.PI / 180);
                                        const x = 128 + 128 * Math.cos(rad);
                                        const y = 128 + 128 * Math.sin(rad);
                                        return (
                                            <motion.line
                                                key={i}
                                                x1="128" y1="128"
                                                x2={x} y2={y}
                                                stroke="rgba(99, 102, 241, 0.2)"
                                                strokeWidth="2"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: [0, 1, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                            />
                                        );
                                    })}
                                </svg>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Client-Server Model */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('client-server.jpg')}
                                alt="Client Server Model"
                                description="A diagram showing the Restaurant analogy (Customer/Client vs Kitchen/Server)."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Architecture</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The Client & The Server</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Think of the Internet like a restaurant. You don't cook your own food; you order it.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                                        <Smartphone className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <strong>The Client (You):</strong><br />
                                        Your browser (Chrome, Phone) acting as the customer. It "Requests" content.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                                        <Server className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <strong>The Server (Kitchen):</strong><br />
                                        A powerful computer that stores files and "Serves" them when asked.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: HTTP Basics */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Language</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Speaking HTTP</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Computers need strict rules to talk. <strong>HTTP</strong> (HyperText Transfer Protocol) is that rulebook. It defines the "verbs" computers use to ask for things.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm hover:border-blue-500/50 transition-colors">
                                <span className="text-2xl mb-2 block">👀</span>
                                <h4 className="font-bold mb-1">GET</h4>
                                <p className="text-xs text-muted-foreground">Used when you want to <strong>view</strong> a page or image.</p>
                            </div>
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm hover:border-green-500/50 transition-colors">
                                <span className="text-2xl mb-2 block">📝</span>
                                <h4 className="font-bold mb-1">POST</h4>
                                <p className="text-xs text-muted-foreground">Used when you <strong>send</strong> data (like a login form).</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Container (Right) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('http-basics.jpg')}
                                alt="HTTP Basics"
                                description="A visual showing a 'GET' request and a 'POST' request conversation."
                                iconColor="text-purple-500"
                                bgColor="bg-purple-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: HTTPS (Security) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('https-security.jpg')}
                                alt="HTTPS Security"
                                description="Detailed diagram comparing HTTP (Open Postcard) vs HTTPS (Locked Briefcase)."
                                iconColor="text-emerald-500"
                                bgColor="bg-emerald-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold tracking-wide uppercase border border-emerald-500/20 w-fit">
                            <Lock className="w-3 h-3" /> Security First
                        </div>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The "S" Stands for Secure</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Standard HTTP is like sending a postcard; anyone can read it. <strong>HTTPS</strong> puts your message in a locked briefcase so only the receiver can open it.
                        </p>

                        <div className="bg-background/80 p-6 rounded-3xl border-2 border-emerald-500 shadow-xl relative mt-4">
                            <div className="absolute -top-3 left-6 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                Recommended
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-emerald-600">HTTPS</h3>
                                <Lock className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 text-center mb-2">
                                <p className="font-mono text-xs text-emerald-400 truncate">d8s#9fa!2@...</p>
                            </div>
                            <p className="text-xs text-center text-emerald-600 font-bold">Encrypted & Safe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: IP Addresses & DNS (The Address Book) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Addressing</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">IP Addresses & DNS</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Every device has an <strong>IP Address</strong> (like a phone number). But numbers are hard to remember, so we use <strong>DNS</strong> (Domain Name System) to turn "google.com" into an IP number.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-orange-500/10 rounded-lg shrink-0">
                                        <Database className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <strong>IP Address (192.168.1.1):</strong><br />
                                        The actual digital location of a server.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-indigo-500/10 rounded-lg shrink-0">
                                        <Search className="w-5 h-5 text-indigo-500" />
                                    </div>
                                    <div>
                                        <strong>DNS (The Phonebook):</strong><br />
                                        Translates "website.com" into the IP address so your browser can find it.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Container (Right) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('dns-explainer.jpg')}
                                alt="DNS and IP Address Visualization"
                                description="Visualizing a phonebook (DNS) mapping names to numbers (IP Addresses)."
                                iconColor="text-orange-500"
                                bgColor="bg-orange-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: The Web Browser (The Interpreter) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('browser-rendering.jpg')}
                                alt="Browser Rendering Process"
                                description="Showing how code (HTML/CSS) is turned into visual pixels by the browser."
                                iconColor="text-cyan-500"
                                bgColor="bg-cyan-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold tracking-wide uppercase border border-cyan-500/20 w-fit">
                            <Globe className="w-3 h-3" /> The Tool
                        </div>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The Web Browser</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Your **Browser** (Chrome, Edge, Safari) isn't just a window. It's a powerful translator. It takes the code sent by the server (HTML, CSS, JS) and paints it into the visual website you see.
                        </p>

                        <div className="grid grid-cols-1 gap-4 mt-2">
                            <div className="bg-background p-4 rounded-2xl border border-border/50 flex items-center gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 font-bold font-mono text-xs">HTML</div>
                                <p className="text-sm text-foreground/70">The Skeleton (Structure)</p>
                            </div>
                            <div className="bg-background p-4 rounded-2xl border border-border/50 flex items-center gap-4">
                                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 font-bold font-mono text-xs">CSS</div>
                                <p className="text-sm text-foreground/70">The Skin & Clothing (Style)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Data Packets (How Data Travels) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Transport</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Data Packets</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            The internet doesn't send a whole movie at once. It chops data into tiny pieces called <strong>Packets</strong>. These packets take different routes and reassemble at your device, like a LEGO set.
                        </p>
                        <div className="bg-background/50 p-6 rounded-3xl border border-border/50">
                            <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">The Journey:</p>
                            <div className="flex gap-2 items-center text-xs font-mono overflow-hidden">
                                <div className="p-2 bg-primary text-primary-foreground rounded">Pack 1</div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                <div className="p-2 bg-primary/80 text-primary-foreground rounded">Pack 2</div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                <div className="p-2 bg-primary/60 text-primary-foreground rounded">Pack 3</div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 italic">
                                *If a packet is lost, your computer asks for it again!
                            </p>
                        </div>
                    </div>

                    {/* Image Container (Right) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('data-packets.jpg')}
                                alt="Data Packet Routing"
                                description="Visualizing extensive data being broken into small packets and traveling through the web."
                                iconColor="text-teal-500"
                                bgColor="bg-teal-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 1</p>
                        <p className="text-xl font-bold italic">Next: What is a Website?</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/2")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic2WhatIsAWebsite = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-what-is-a-website" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Basics</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is a Website?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            A website is like a <strong>digital book</strong>. It's a collection of related "pages" (web pages) that share a common address. When you visit <code>google.com</code>, you are opening the cover of that book.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Layout className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">A Collection of Pages</h4>
                                <p className="text-sm text-muted-foreground">Home, About, Contact - all under one roof.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('website-structure.jpg')}
                                alt="Structure of a Website"
                                description="A diagram showing how multiple web pages link together to form a website."
                                iconColor="text-indigo-500"
                                bgColor="bg-indigo-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Web Pages (The Building Blocks) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('webpage-anatomy.jpg')}
                                alt="Anatomy of a Web Page"
                                description="Breaking down a web page into Header, Body, Footer, and Sidebar."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Unit</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The Web Page</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            If a website is the book, a <strong>Web Page</strong> is a single sheet of paper inside it. It's a single document written in HTML that your browser displays.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                                        <FileText className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <strong>Specific Address:</strong><br />
                                        Each page has a unique URL (e.g., /about, /contact).
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                                        <Layers className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <strong>Content Mixed:</strong><br />
                                        Contains text, images, videos, and buttons all mixed together.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Static Websites */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Types</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Static Websites</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A <strong>Static</strong> website shows the exact same content to every visitor. It's like a printed brochure or a PDF. It only changes if the developer manually updates the code.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm transition-colors">
                                <span className="text-2xl mb-2 block">⚡</span>
                                <h4 className="font-bold mb-1">Fast</h4>
                                <p className="text-xs text-muted-foreground">Loads instantly because there's no processing.</p>
                            </div>
                            <div className="bg-background p-5 rounded-2xl border border-border/50 shadow-sm transition-colors">
                                <span className="text-2xl mb-2 block">🛑</span>
                                <h4 className="font-bold mb-1">Unchanging</h4>
                                <p className="text-xs text-muted-foreground">Every user sees the exact same thing.</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Container (Right) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('static-site.jpg')}
                                alt="Static Website Example"
                                description="Visualizing a static site as a printed poster - same for everyone."
                                iconColor="text-gray-500"
                                bgColor="bg-gray-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Dynamic Websites (Web Apps) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('dynamic-site.jpg')}
                                alt="Dynamic Website Example"
                                description="Visualizing a personalized feed (like Instagram) - different for everyone."
                                iconColor="text-pink-500"
                                bgColor="bg-pink-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 text-xs font-bold tracking-wide uppercase border border-pink-500/20 w-fit">
                            <Zap className="w-3 h-3" /> The Modern Web
                        </div>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Dynamic Websites</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A <strong>Dynamic</strong> website (or Web App) talks to a database. It changes depending on who you are. Think of Facebook or Amazon - your feed is different from mine.
                        </p>

                        <div className="bg-background/80 p-6 rounded-3xl border-2 border-pink-500 shadow-xl relative mt-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-pink-600">User: John Doe</h3>
                                <RefreshCw className="w-5 h-5 text-pink-500" />
                            </div>
                            <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 text-center mb-2">
                                <p className="font-mono text-xs text-pink-400 truncate">Fetching latest messages...</p>
                            </div>
                            <p className="text-xs text-center text-pink-600 font-bold">Content generated on-the-fly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Static vs. Dynamic Websites */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
                    <div className="max-w-2xl text-left">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">The Two Types</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight mb-4">Static vs. Dynamic Websites</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Websites behave differently. <strong>Static</strong> sites are fixed like a printed brochure—everyone sees the same thing. <strong>Dynamic</strong> sites are intelligent—they change content based on who you are, like a personalized social media feed.
                        </p>
                    </div>

                    {/* Comparison Features - Top Right */}
                    <div className="flex flex-col sm:flex-row gap-8 lg:text-left mt-2 lg:mt-0 bg-background/50 p-6 rounded-2xl border border-border/50 shadow-sm backdrop-blur-sm">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 mb-1">
                                <FileText className="w-4 h-4 text-gray-500" />
                                <span className="block font-bold text-foreground font-mono text-sm tracking-wide uppercase">Static</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-medium">Fixed Content</p>
                            <p className="text-xs text-muted-foreground font-medium">Fast Loading</p>
                            <p className="text-xs text-muted-foreground font-medium">Simple Code</p>
                        </div>
                        <div className="w-px bg-border hidden sm:block"></div>
                        <div className="h-px bg-border w-full sm:hidden"></div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 mb-1">
                                <Zap className="w-4 h-4 text-pink-500" />
                                <span className="block font-bold text-foreground font-mono text-sm tracking-wide uppercase">Dynamic</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-medium">Interactive</p>
                            <p className="text-xs text-muted-foreground font-medium">User Accounts</p>
                            <p className="text-xs text-muted-foreground font-medium">Database Driven</p>
                        </div>
                    </div>
                </div>

                {/* Large Bottom Image Container */}
                <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl w-full aspect-[16/9] md:aspect-[21/9] bg-slate-950 relative">
                    <ImageWithFallback
                        src={getImageUrl('static-vs-dynamic.jpg')}
                        alt="Comparison: Static vs Dynamic Websites"
                        description="A detailed visual comparison showing a Static Site (Printed Poster) vs a Dynamic Web App (Interactive Dashboard)."
                        iconColor="text-indigo-500"
                        bgColor="bg-indigo-500/10"
                    />
                </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 2</p>
                        <p className="text-xl font-bold italic">Next: What is a Domain?</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/3")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic3WhatIsADomain = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-what-is-a-domain" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Identity</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is a Domain?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            A <strong>Domain</strong> is the <strong>human-friendly name</strong> of a website that people type in a browser to visit a website (e.g., <code>google.com</code>).
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <p className="text-sm text-foreground/70 mb-4">Behind every domain is a computer address (IP Address). Humans prefer names, computers prefer numbers.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="p-4 bg-background border border-border rounded-xl flex-1 text-center">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Computer Sees</p>
                                    <p className="font-mono text-lg font-bold text-primary">142.250.195.46</p>
                                </div>
                                <div className="p-4 bg-background border border-border rounded-xl flex-1 text-center">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Human Sees</p>
                                    <p className="font-mono text-lg font-bold text-emerald-600">google.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('domain-visualization.jpg')}
                                alt="Domain vs IP Visualization"
                                description="Visualizing a mask: The Domain Name covers the complex IP Address."
                                iconColor="text-indigo-500"
                                bgColor="bg-indigo-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Parts of a Domain */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('domain-parts.jpg')}
                                alt="Parts of a Domain Name"
                                description="Diagram breaking down 'example.com' into Name and Extension."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Anatomy</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Parts of a Domain Name</h2>
                        <div className="flex items-center gap-2 text-3xl sm:text-5xl font-bold font-mono my-6">
                            <span className="text-foreground">example</span>
                            <span className="text-muted-foreground">.</span>
                            <span className="text-primary">com</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 p-4 bg-muted/50 rounded-2xl border border-border/50">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 font-bold shrink-0">Name</div>
                                <p className="text-sm text-foreground/80">The specific name of the website (e.g., "google" or "amazon").</p>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-muted/50 rounded-2xl border border-border/50">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary font-bold shrink-0">Extension</div>
                                <p className="text-sm text-foreground/80">The category (.com = commercial, .edu = education, .org = organization).</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Subdomains */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/30 p-8 sm:p-12 rounded-[40px] border border-border text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">Organization</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-8">What are Subdomains?</h2>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
                        A subdomain is a separate section of a main website. It helps organize large amounts of content.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                            <p className="font-mono text-sm text-muted-foreground mb-2">Main Site</p>
                            <p className="font-bold text-lg">google.com</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <ArrowRight className="text-muted-foreground w-8 h-8 rotate-90 md:rotate-0" />
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                            <p className="font-mono text-sm text-primary mb-2">Subdomain</p>
                            <p className="font-bold text-lg">mail.google.com</p>
                        </div>
                    </div>

                    {/* Image Container inside Section */}
                    <div className="max-w-3xl mx-auto h-64 bg-muted rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                        <div className="text-4xl mb-3">🖼️</div>
                        <p className="font-medium">Image: Subdomain Hierarchy Tree Diagram</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 3</p>
                        <p className="text-xl font-bold italic">Next: DNS Lookup Process</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/4")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic4DNSLookup = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-dns-lookup" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Finder</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is DNS Lookup?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            <strong>DNS Lookup</strong> is the automatic process of finding the correct computer (server) where a website is stored. It's like looking up a friend's name in a contact list to find their phone number.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Search className="w-5 h-5" /> Why Required?
                            </h4>
                            <p className="text-sm text-foreground/80">Computers don't know "google.com". They only know IP addresses. DNS connects the two.</p>
                        </Card>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('dns-lookup-intro.jpg')}
                                alt="DNS Lookup Intro"
                                description="Visualizing a magnifying glass searching a digital directory."
                                iconColor="text-orange-500"
                                bgColor="bg-orange-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: The Step-by-Step Process */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">The Journey</p>
                    <h2 className="text-3xl font-semibold text-foreground">How DNS Works</h2>
                    <p className="text-muted-foreground mt-4">This entire process happens in less than a second.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1 h-full min-h-[400px]">
                        <div className="relative w-full h-full bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('dns-flowchart.jpg')}
                                alt="DNS Flowchart Diagram"
                                description="7-Step Flowchart: User -> Browser -> DNS Server -> IP Address -> Server -> Website."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-4 lg:order-2">
                        {[
                            { step: 1, text: "You type a domain name (google.com) in browser." },
                            { step: 2, text: "Browser asks DNS: 'Where is this website?'" },
                            { step: 3, text: "DNS searches its global records." },
                            { step: 4, text: "DNS finds the correct IP address (142.250...)." },
                            { step: 5, text: "DNS sends the IP address back to the browser." },
                            { step: 6, text: "Browser connects to that specific server." },
                            { step: 7, text: "The website loads on your screen." }
                        ].map((item) => (
                            <div key={item.step} className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl border border-border/40">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                                    {item.step}
                                </div>
                                <p className="text-sm font-medium text-foreground/90">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Real Life Example & Importance */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-emerald-500/5 p-8 rounded-[32px] border border-emerald-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-600">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Phonebook Analogy</h3>
                        </div>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            You save "Dad" in your contacts. You don't memorize his number. When you tap "Dad", the phone dials the number automatically. <strong>DNS is the internet's phonebook.</strong>
                        </p>
                        {/* Smaller Image Container */}
                        <div className="w-full h-40 bg-muted/50 rounded-2xl border-2 border-dashed border-emerald-500/30 flex flex-col items-center justify-center text-emerald-600/60">
                            <div className="text-2xl mb-2">🖼️</div>
                            <p className="text-xs font-bold">Image: Phonebook vs DNS</p>
                        </div>
                    </div>

                    <div className="bg-red-500/5 p-8 rounded-[32px] border border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-500/20 rounded-lg text-red-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-red-700 dark:text-red-400">What if DNS Fails?</h3>
                        </div>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            If DNS is down, the website won't open, even if your internet is working! You might see "DNS_PROBE_FINISHED_NXDOMAIN" errors.
                        </p>
                        {/* Smaller Image Container */}
                        <div className="w-full h-40 bg-muted/50 rounded-2xl border-2 border-dashed border-red-500/30 flex flex-col items-center justify-center text-red-600/60">
                            <div className="text-2xl mb-2">🖼️</div>
                            <p className="text-xs font-bold">Image: Browser DNS Error Screen</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary Section */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary text-primary-foreground p-8 rounded-[32px] text-center shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">One-Line Summary</h3>
                    <p className="text-xl opacity-90">"DNS Lookup finds the server address of a website so your browser can open it."</p>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 4</p>
                        <p className="text-xl font-bold italic">Next: Frontend vs Backend</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/5")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic5FrontendVsBackend = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-frontend-vs-backend" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Dual Forces</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Frontend vs Backend</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Websites are like icebergs. The <strong>Frontend</strong> is what you see above water. The <strong>Backend</strong> is the massive structure hidden underneath that keeps everything stable.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <div className="flex-1 bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20 text-center">
                                <Layout className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <h4 className="font-bold text-foreground">Frontend</h4>
                                <p className="text-xs text-muted-foreground">What you See</p>
                            </div>
                            <div className="flex-1 bg-slate-500/10 p-4 rounded-2xl border border-slate-500/20 text-center">
                                <Server className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                                <h4 className="font-bold text-foreground">Backend</h4>
                                <p className="text-xs text-muted-foreground">How it Works</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('frontend-backend-iceberg.jpg')}
                                alt="Frontend vs Backend Iceberg"
                                description="Iceberg Analogy: Frontend (Tip) vs Backend (Massive submerged part)."
                                iconColor="text-cyan-500"
                                bgColor="bg-cyan-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Comparisons */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Comparison Table */}
                    <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
                        <div className="grid grid-cols-2 bg-muted/50 p-4 text-center font-bold text-lg border-b border-border">
                            <div className="text-blue-600">Frontend (UI)</div>
                            <div className="text-slate-600">Backend (Logic)</div>
                        </div>
                        <div className="divide-y divide-border">
                            <div className="grid grid-cols-2 p-4 hover:bg-muted/20 transition-colors">
                                <div className="px-4">What users <strong>see</strong> and <strong>touch</strong>.</div>
                                <div className="px-4 border-l border-border">How things <strong>work</strong> behind scenes.</div>
                            </div>
                            <div className="grid grid-cols-2 p-4 hover:bg-muted/20 transition-colors">
                                <div className="px-4">Design, Layout, Colors, Buttons.</div>
                                <div className="px-4 border-l border-border">Rules, Calculations, Data.</div>
                            </div>
                            <div className="grid grid-cols-2 p-4 hover:bg-muted/20 transition-colors">
                                <div className="px-4">Example: The "Login" Button style.</div>
                                <div className="px-4 border-l border-border">Example: Checking if password is correct.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Real Life Analogies (Restaurant & ATM) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Restaurant Analogy */}
                    <div className="bg-orange-500/5 p-8 rounded-[40px] border border-orange-500/20">
                        <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-400 mb-6 flex items-center gap-3">
                            <span className="text-3xl">🍽️</span> The Restaurant
                        </h3>
                        <div className="bg-background/80 p-6 rounded-3xl border border-orange-500/30 mb-6 space-y-4">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Frontend (Dining Area)</span>
                                <p className="text-foreground/80 mt-1">Menu, Tables, Chairs, Decor. This is what customers see.</p>
                            </div>
                            <div className="w-full h-px bg-orange-500/20"></div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Backend (Kitchen)</span>
                                <p className="text-foreground/80 mt-1">Chefs cooking, Storage, Recipes. Customers never see this!</p>
                            </div>
                        </div>
                        {/* Image Container */}
                        <div className="w-full h-48 bg-muted/50 rounded-2xl border-2 border-dashed border-orange-500/30 flex flex-col items-center justify-center text-orange-600/60">
                            <div className="text-3xl mb-2">🖼️</div>
                            <p className="font-bold">Image: Restaurant Dining vs Kitchen</p>
                        </div>
                    </div>

                    {/* ATM Analogy */}
                    <div className="bg-emerald-500/5 p-8 rounded-[40px] border border-emerald-500/20">
                        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-3">
                            <span className="text-3xl">🏧</span> The ATM
                        </h3>
                        <div className="bg-background/80 p-6 rounded-3xl border border-emerald-500/30 mb-6 space-y-4">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Frontend (Screen)</span>
                                <p className="text-foreground/80 mt-1">Buttons, Screen, Slot. You interact with this.</p>
                            </div>
                            <div className="w-full h-px bg-emerald-500/20"></div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Backend (Bank Server)</span>
                                <p className="text-foreground/80 mt-1">Checking balance, Processing transaction. Hidden safety.</p>
                            </div>
                        </div>
                        {/* Image Container */}
                        <div className="w-full h-48 bg-muted/50 rounded-2xl border-2 border-dashed border-emerald-500/30 flex flex-col items-center justify-center text-emerald-600/60">
                            <div className="text-3xl mb-2">🖼️</div>
                            <p className="font-bold">Image: ATM Machine vs Bank Server</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-muted p-8 rounded-[32px] text-center border border-border mb-12">
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                        "Frontend looks good but does nothing without Backend. Backend works hard but is useless if users can't interact. They must work <strong>Together</strong>."
                    </p>
                </div>

                {/* Full Width Visualization Image */}
                <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl w-full aspect-[21/9] bg-slate-950 relative">
                    <ImageWithFallback
                        src={frontendBackendCollabImg}
                        alt="Frontend and Backend Collaboration Visualization"
                        description="A large visualization showing the seamless connection between the user interface (Frontend) and server logic (Backend)."
                        iconColor="text-purple-500"
                        bgColor="bg-purple-500/10"
                    />
                </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 5</p>
                        <p className="text-xl font-bold italic">Next: HTML Basics</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/6")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic6HTMLBasics = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-html-basics" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Skeleton</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is HTML?</h2>
                        <h3 className="text-xl text-muted-foreground font-mono">HyperText Markup Language</h3>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            HTML is the basic language used to create the <strong>structure</strong> of a webpage. It doesn't make things pretty (that's CSS) or interactive (that's JS), it just defines <strong>what exists</strong> on the page.
                        </p>
                        <Card className="bg-primary/5 border-primary/20 p-6 rounded-2xl">
                            <p className="text-sm text-foreground/80"><strong>Simple Analogy:</strong> Coding HTML is like building the steel frame of a house. It's the skeleton.</p>
                        </Card>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('html-blueprint.jpg')}
                                alt="HTML Blueprint Analogy"
                                description="Visualizing a House Blueprint (Structure) vs a Finished House."
                                iconColor="text-orange-500"
                                bgColor="bg-orange-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Tags and Syntax */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('html-tags.jpg')}
                                alt="Anatomy of HTML Tag"
                                description="Diagram: <Opening Tag> Content </Closing Tag>"
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">It's all about Tags</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            HTML uses <strong>Tags</strong> (words in angle brackets) to tell the browser what something is.
                        </p>

                        <div className="space-y-3 font-mono text-sm">
                            <div className="p-4 bg-slate-900 text-slate-50 rounded-xl border border-slate-700 shadow-sm flex items-center justify-between">
                                <code>&lt;h1&gt;Big Title&lt;/h1&gt;</code>
                                <span className="text-slate-400">Main Heading</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-slate-50 rounded-xl border border-slate-700 shadow-sm flex items-center justify-between">
                                <code>&lt;p&gt;Some text...&lt;/p&gt;</code>
                                <span className="text-slate-400">Paragraph</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-slate-50 rounded-xl border border-slate-700 shadow-sm flex items-center justify-between">
                                <code>&lt;img src="..." /&gt;</code>
                                <span className="text-slate-400">Image</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-slate-50 rounded-xl border border-slate-700 shadow-sm flex items-center justify-between">
                                <code>&lt;a href="..."&gt;Link&lt;/a&gt;</code>
                                <span className="text-slate-400">Clickable Link</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Big Picture (HTML vs CSS vs JS) */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/30 p-8 sm:p-12 rounded-[40px] border border-border text-center">
                    <h2 className="text-3xl font-semibold text-foreground mb-8">The Holy Trinity</h2>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
                        HTML never works alone. It has two best friends that make it complete.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                        <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                            <div className="text-orange-500 font-black text-4xl mb-2">HTML</div>
                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Structure</p>
                            <p className="text-xs text-foreground/60 mt-2">The Skeleton</p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                            <div className="text-blue-500 font-black text-4xl mb-2">CSS</div>
                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Style</p>
                            <p className="text-xs text-foreground/60 mt-2">The Clothing</p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                            <div className="text-yellow-500 font-black text-4xl mb-2">JS</div>
                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Logic</p>
                            <p className="text-xs text-foreground/60 mt-2">The Muscles</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 6</p>
                        <p className="text-xl font-bold italic">Next: CSS Basics</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/7")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic7CSSBasics = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-css-basics" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Stylist</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is CSS?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            HTML is the skeleton, but **CSS (Cascading Style Sheets)** is the skin, clothing, and makeup. It controls the **color, layout, and fonts** of a webpage.
                        </p>
                        <Card className="bg-pink-500/10 border-pink-500/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-pink-600 dark:text-pink-400 mb-2 flex items-center gap-2">
                                <Layout className="w-5 h-5" /> Design & Layout
                            </h4>
                            <p className="text-sm text-foreground/80">Without CSS, every website would look like a boring Word document from 1995.</p>
                        </Card>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('css-intro.jpg')}
                                alt="CSS Styling Visual"
                                description="Visual: A plain skeleton (HTML) transforming into a dressed person (CSS)."
                                iconColor="text-pink-500"
                                bgColor="bg-pink-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Selectors & Colors */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('css-colors.jpg')}
                                alt="CSS Colors & Selectors"
                                description="Visual of CSS code selecting a button and changing its color to blue."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Selecting & Styling</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            CSS works by **Selecting** an HTML element and applying **Properties**.
                        </p>

                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 font-mono text-sm shadow-xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-blue-400">
                                <p>h1 <span className="text-yellow-400">{`{`}</span></p>
                                <p className="pl-4 text-pink-400">color<span className="text-white">:</span> <span className="text-green-400">red</span>;</p>
                                <p className="pl-4 text-pink-400">font-size<span className="text-white">:</span> <span className="text-green-400">50px</span>;</p>
                                <p><span className="text-yellow-400">{`}`}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Box Model */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-3xl font-semibold text-foreground">The Box Model</h2>
                    <p className="text-muted-foreground mt-4">Every element on a specific website is actually a rectangular box.</p>
                </div>

                <Card className="bg-muted/30 p-8 rounded-[40px] border border-border relative overflow-hidden text-center">
                    <div className="inline-block relative">
                        {/* Margin */}
                        <div className="p-8 bg-orange-200 dark:bg-orange-900/30 border-2 border-dashed border-orange-400 rounded-xl relative">
                            <span className="absolute top-2 left-2 text-xs font-bold text-orange-600 uppercase">Margin</span>

                            {/* Border */}
                            <div className="p-8 bg-yellow-200 dark:bg-yellow-900/30 border-4 border-yellow-500 rounded-lg relative">
                                <span className="absolute top-2 left-2 text-xs font-bold text-yellow-600 uppercase">Border</span>

                                {/* Padding */}
                                <div className="p-8 bg-green-200 dark:bg-green-900/30 border-2 border-dashed border-green-400 rounded relative">
                                    <span className="absolute top-2 left-2 text-xs font-bold text-green-600 uppercase">Padding</span>

                                    {/* Content */}
                                    <div className="bg-blue-500 text-white font-bold py-4 px-8 rounded shadow-lg">
                                        Content
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-sm text-muted-foreground">"Padding is the space <em>inside</em> the fence. Margin is the space <em>outside</em> the fence."</p>
                </Card>
            </section>

            {/* Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-8 rounded-[32px] text-center border border-primary/20">
                    <h3 className="text-xl font-bold text-primary mb-2">Remember This</h3>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                        "HTML is the content (Noun). CSS is the style (Adjective)."
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 7</p>
                        <p className="text-xl font-bold italic">Next: JavaScript Basics</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/8")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic8JavaScriptBasics = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-js-basics" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Magic</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is JavaScript?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            If HTML is the skeleton and CSS is the clothing, **JavaScript** (JS) is the brain and muscle. It makes the webpage **do things** and react to your actions.
                        </p>
                        <Card className="bg-yellow-500/10 border-yellow-500/20 p-6 rounded-2xl">
                            <h4 className="font-bold text-yellow-600 dark:text-yellow-500 mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Interactive
                            </h4>
                            <p className="text-sm text-foreground/80">Without JS, a website is just a static poster. With JS, it becomes an app.</p>
                        </Card>
                    </div>

                    {/* Image Container */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('js-interaction.jpg')}
                                alt="JavaScript Interaction"
                                description="Visualizing a Magic Wand adding life (movement/action) to a static page."
                                iconColor="text-yellow-500"
                                bgColor="bg-yellow-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Events & Interaction */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container (Left) */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('js-events.jpg')}
                                alt="JavaScript Events Diagram"
                                description="Diagram: User Action (Click) -> Event Listener -> JS Code Runs -> Action Happens."
                                iconColor="text-green-500"
                                bgColor="bg-green-500/10"
                            />
                        </div>
                    </Card>

                    <div className="space-y-6 lg:order-2">
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Events: Listening for Action</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            JavaScript waits for **Events**. An event is something you do, like clicking a mouse or pressing a key.
                        </p>

                        <div className="bg-muted p-6 rounded-3xl border border-border">
                            <h3 className="font-bold mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5" /> Real Life Example: The Doorbell</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold">1</div>
                                    <p className="text-sm">You press button (<strong>Event</strong>)</p>
                                </div>
                                <div className="flex items-center justify-center h-4 border-l-2 border-dashed border-slate-300 ml-4"></div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold">2</div>
                                    <p className="text-sm">Bell rings (<strong>Action</strong>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Simple Script */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-12 rounded-[40px] border border-slate-800 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                    <h2 className="text-3xl font-semibold text-white mb-8 relative z-10">A Simple Script</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
                        A script is just a list of instructions. Here is a conceptual example:
                    </p>

                    <div className="max-w-2xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-6 text-left relative z-10 font-mono text-sm shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2 text-green-400">
                            <p><span className="text-purple-400">WHEN</span> button_is_clicked <span className="text-white">{`{`}</span></p>
                            <p className="pl-4"><span className="text-blue-400">SHOW</span> message("Hello World!");</p>
                            <p className="pl-4"><span className="text-blue-400">CHANGE</span> background_color("Blue");</p>
                            <p><span className="text-white">{`}`}</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-8 rounded-[32px] text-center border border-primary/20">
                    <h3 className="text-xl font-bold text-primary mb-2">Remember This</h3>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                        "HTML builds it. CSS styles it. JavaScript makes it <strong>Alive</strong>."
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 8</p>
                        <p className="text-xl font-bold italic">Next: Web Performance</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/9")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic9WebPerformance = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-web-performance" className="space-y-32">
            {/* SECTION 1: Introduction (What is Web Performance?) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Speed Factor</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What is Web Performance?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Web performance is simply **how fast and smoothly a website works** for you. It's the difference between a race car and a bicycle.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-fit">
                                <p className="text-emerald-600 font-bold text-sm">Fast Website</p>
                                <p className="text-xs text-muted-foreground">Happy Users 😊</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 w-fit">
                                <p className="text-red-500 font-bold text-sm">Slow Website</p>
                                <p className="text-xs text-muted-foreground">Angry Users 😡</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Container 1 */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('performance-race.jpg')}
                                alt="Fast vs Slow Website"
                                description="Visualizing a Race Car (Fast Site) vs a Bicycle (Slow Site)."
                                iconColor="text-red-500"
                                bgColor="bg-red-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Why it Matters (3 Pillars) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-foreground">Why Speed Matters</h2>
                    <p className="text-muted-foreground mt-4">Nobody likes waiting. In the digital world, even 1 second matters.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">😤</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Frustration</h3>
                        <p className="text-sm text-foreground/70">Slow websites annoy users. They feel broken and unprofessional.</p>
                    </Card>
                    <Card className="p-6 border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">🚪</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Abandonment</h3>
                        <p className="text-sm text-foreground/70">If it takes too long, people just leave (Bounce Rate).</p>
                    </Card>
                    <Card className="p-6 border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">🤝</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Trust</h3>
                        <p className="text-sm text-foreground/70">Fast sites feel reliable. Users trust them more.</p>
                    </Card>
                </div>

                {/* Image Container 2 */}
                <div className="mt-8 relative w-full h-48 bg-muted/50 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                    <div className="text-3xl mb-2">🖼️</div>
                    <p className="font-medium">Image: User Leaving a Slow Loading Screen</p>
                </div>
            </section>

            {/* SECTION 3: Loading Speed Explained */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="lg:order-2 space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Process</p>
                        <h2 className="text-3xl font-semibold text-foreground">Wait... What is Loading?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Loading isn't just one thing. It's a sequence:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>Browser downloads files</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span>Images start to appear</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                                <span>Scripts run in background</span>
                            </li>
                        </ul>
                        <p className="text-sm text-muted-foreground italic">If any one of these is huge, the whole site slows down.</p>
                    </div>

                    {/* Image Container 3 */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('loading-process.jpg')}
                                alt="Loading Bar Process"
                                description="Visualizing the loading timeline of a website."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: The Heavy Weights (What Slows it Down?) */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-foreground text-center mb-10">What Slows Us Down?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4 text-center">
                        <div className="mx-auto w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-4xl">🖼️</div>
                        <h3 className="font-bold text-lg">Huge Images</h3>
                        <p className="text-sm text-muted-foreground">Detailed photos take a long time to download.</p>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="mx-auto w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-4xl">📜</div>
                        <h3 className="font-bold text-lg">Bad Code</h3>
                        <p className="text-sm text-muted-foreground">Messy scripts confuse the browser.</p>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="mx-auto w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-4xl">📶</div>
                        <h3 className="font-bold text-lg">Internet Connection</h3>
                        <p className="text-sm text-muted-foreground">Sometimes it's just a weak signal.</p>
                    </div>
                </div>

                {/* Image Container 4 */}
                <div className="max-w-2xl mx-auto mt-10 h-64 bg-muted/50 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                    <div className="text-4xl mb-3">⚖️</div>
                    <p className="font-medium">Image: Scale Weighing Large File vs Small File</p>
                </div>
            </section>

            {/* SECTION 5: Image Optimization */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Solution 1</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Image Optimization</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Images are often the heaviest part of a site. <strong>Optimization</strong> means shrinking the file size without ruining the quality.
                        </p>
                        <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20">
                            <h4 className="font-bold text-emerald-600 mb-2 flex items-center gap-2"><Smartphone className="w-4 h-4" /> WhatsApp Example</h4>
                            <p className="text-sm text-foreground/80">When you send a photo on WhatsApp, it compresses it so it sends instantly. That's optimization!</p>
                        </div>
                    </div>

                    {/* Image Container 5 */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('image-compression.jpg')}
                                alt="Image Compression Comparison"
                                description="Visual comparison: Full Size Image (5MB) vs Optimized Image (500KB)."
                                iconColor="text-emerald-500"
                                bgColor="bg-emerald-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Caching */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-white">
                        <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-4">Solution 2</p>
                        <h2 className="text-3xl font-semibold mb-6">Caching (The Memory Trick)</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                            <strong>Caching</strong> means storing data temporarily. When you visit a site again, the browser "remembers" it from the cache instead of downloading everything again.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
                            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                                <span className="text-slate-400 text-xs font-bold uppercase">First Visit</span>
                                <p className="text-white font-bold text-xl mb-1">Slow 🐢</p>
                                <p className="text-slate-400 text-sm">Must download all files.</p>
                            </div>
                            <div className="bg-blue-600 p-6 rounded-2xl border border-blue-500 shadow-xl shadow-blue-900/50">
                                <span className="text-blue-200 text-xs font-bold uppercase">Next Visit</span>
                                <p className="text-white font-bold text-xl mb-1">Fast 🐇</p>
                                <p className="text-blue-100 text-sm">Loads from memory (Cache).</p>
                            </div>
                        </div>

                        {/* Image Container 6 */}
                        <div className="max-w-xl mx-auto mt-12 h-40 bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-600 flex flex-col items-center justify-center text-slate-500">
                            <div className="text-3xl mb-2">🖼️</div>
                            <p className="font-medium">Image: Browser Cache / Vault Analogy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Summary & Checklist */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-6 text-center">Performance Checklist</h3>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Pages load in under 2 seconds.</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Images are compressed & small.</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Buttons react instantly.</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Caching is enabled.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 9</p>
                        <p className="text-xl font-bold italic">Next: Developer Tools</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/20/topic/10")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Topic10DevTools = () => {
    const navigate = useNavigate();
    return (
        <div id="topic-devtools" className="space-y-32">
            {/* SECTION 1: Introduction (X-Ray Vision) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Under the Hood</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Browser Developer Tools</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Have you ever wanted X-Ray vision for the web? **Developer Tools (DevTools)** let you look inside any website to see the code, check speed, and fix errors.
                        </p>
                        <Card className="bg-slate-900 border-slate-800 p-6 rounded-2xl">
                            <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                                <Search className="w-5 h-5" /> Inspect Everything
                            </h4>
                            <p className="text-sm text-slate-300">You can see the HTML, CSS, and JS of <strong>any</strong> website you visit. It's built right into your browser!</p>
                        </Card>
                    </div>

                    {/* Image Container 1 */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('devtools-intro.jpg')}
                                alt="Browser with DevTools Open"
                                description="Screen split showing a Website on the left and its Code (DevTools) on the right."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Where to Find It? */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-foreground">Where is it Hiding?</h2>
                    <p className="text-muted-foreground mt-4">You don't need to install anything. It's already there.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-lg">🖱️</div>
                            <div>
                                <p className="font-bold">Method 1: The Mouse</p>
                                <p className="text-sm text-muted-foreground">Right-click anywhere + "Inspect"</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-lg">⌨️</div>
                            <div>
                                <p className="font-bold">Method 2: The Keyboard</p>
                                <p className="text-sm text-muted-foreground">Press <strong>F12</strong> or <strong>Ctrl+Shift+I</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Image Container 2 */}
                    <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                        <div className="text-3xl mb-2">🖼️</div>
                        <p className="font-medium">Image: Right Click Menu with 'Inspect' Highlighted</p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Tool 1 - Inspect Element */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Container 3 */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('devtools-inspect.jpg')}
                                alt="Inspecting an Element"
                                description="Visual: Highlighting a headline on a page and seeing the <h1> tag in the code panel."
                                iconColor="text-orange-500"
                                bgColor="bg-orange-500/10"
                            />
                        </div>
                    </Card>

                    <div className="lg:order-2 space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                            <Search className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-semibold text-foreground">Elements Tab (Inspect)</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            This is the most popular tab. You can click on any text, image, or button to see <strong>how it was built</strong>. You can even change the text to prank your friends (it only changes on <em>your</em> screen!).
                        </p>
                        <div className="p-4 bg-muted rounded-xl border-l-4 border-orange-500">
                            <p className="text-sm italic">"Great for learning how your favorite websites structure their design."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Tool 2 - Network Tab */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-semibold text-foreground">Network Tab</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            This tab shows you <strong>what is being downloaded</strong>. Every image, script, and file appears here.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> See which images are too big.</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> See how long each file takes to load.</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Spot broken links (red 404 errors).</li>
                        </ul>
                    </div>

                    {/* Image Container 4 */}
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-video bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('devtools-network.jpg')}
                                alt="Network Tab Waterfall"
                                description="Visual of the Network Tab showing a list of files and timeline bars (waterfall)."
                                iconColor="text-blue-500"
                                bgColor="bg-blue-500/10"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Tool 3 - Console */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 p-8 sm:p-12 rounded-[40px] border border-slate-800 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-semibold text-white mb-6">The Console</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        The Console is where the website talks to the developer. If something breaks, it yells here in <span className="text-red-400 font-bold">RED</span>.
                    </p>

                    {/* Image Container 5 */}
                    <div className="max-w-3xl mx-auto h-48 bg-black rounded-lg border border-slate-700 font-mono text-left p-4 overflow-hidden shadow-2xl relative">
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="text-slate-500">{`> website_loaded_successfully`}</p>
                            <p className="text-yellow-500">{`[Warning] Image 'logo.png' is taking too long.`}</p>
                            <p className="text-red-500">{`[Error] Uncaught ReferenceError: Button is not defined!`}</p>
                            <div className="flex items-center gap-2 text-blue-400 mt-4">
                                <span>{`>`}</span>
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Real Life Analogy */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="bg-muted p-8 rounded-[40px] border border-border">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🚗 Car Dashboard</h3>
                        <p className="text-foreground/80 mb-6">
                            When you drive, you don't see the engine. But if the "Check Engine" light turns on, you look at the dashboard.
                        </p>
                        <p className="font-bold text-primary">The Console = The Dashboard.</p>
                    </div>
                    {/* Image Container 6 */}
                    <div className="h-48 bg-muted/50 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                        <div className="text-3xl mb-2">🖼️</div>
                        <p className="font-medium">Image: Car Dashboard with Warning Lights</p>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Summary & Checklist */}
            <section className="container mx-auto px-4 pb-12">
                <div className="bg-primary/5 p-8 rounded-[32px] text-center border border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-4">You are now a Web Explorer!</h3>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
                        Most people just look at the web. You now know how to look <strong>underneath</strong> it.
                    </p>
                    <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Module 20 Complete</p>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">Module Complete</p>
                        <p className="text-xl font-bold italic">Back to Module Selection</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/")}>
                        Back to Home <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const Module20 = () => {
    const { topicId } = useParams();

    switch (topicId) {
        case "2": return <Topic2WhatIsAWebsite />;
        case "3": return <Topic3WhatIsADomain />;
        case "4": return <Topic4DNSLookup />;
        case "5": return <Topic5FrontendVsBackend />;
        case "6": return <Topic6HTMLBasics />;
        case "7": return <Topic7CSSBasics />;
        case "8": return <Topic8JavaScriptBasics />;
        case "9": return <Topic9WebPerformance />;
        case "10": return <Topic10DevTools />;
        default: return <Topic1HowWebWorks />;
    }
};

export default Module20;

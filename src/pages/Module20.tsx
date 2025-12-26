import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Globe, Server, Smartphone, Lock, Database, Search, FileText, Layout, RefreshCw, Zap, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

const Module20 = () => {
    const { topicId } = useParams();

    // Default to Topic 1 if no ID or unknown ID
    const currentTopic = topicId === "2" ? <Topic2WhatIsAWebsite /> : <Topic1HowWebWorks />;

    return currentTopic;
};

export default Module20;

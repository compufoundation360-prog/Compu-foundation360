
import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Cloud, Server, Upload, Download, Share2, Trash2, Globe, Lock,
    Wifi, WifiOff, RefreshCw, AlertTriangle, CheckCircle, FileText,
    Image as ImageIcon, Music, Film, Smartphone, Laptop, Database,
    Shield, Briefcase, PlayCircle, X, HelpCircle, Plus, ArrowRight,
    Search, Mail, Calendar, Youtube, HardDrive, Building, Home, Terminal, Scale, ThumbsUp, ThumbsDown, XCircle, TrendingUp, Camera,
    RotateCcw, Box, Power, Bug, Zap, Map, Truck, Key, UserCheck, Eye, DollarSign, Clock, Handshake, Leaf, Users, AlertOctagon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TopicNavigation } from "@/components/TopicNavigation";

// --- TYPES ---
interface CloudFile {
    id: string;
    name: string;
    type: 'doc' | 'image' | 'audio' | 'video';
    sizeMB: number;
    location: 'local' | 'cloud';
    isShared?: boolean;
    shareLink?: string;
}

// --- CLOUD SIMULATOR COMPONENT (Ported from HTML) ---
function CloudStorageSimulator() {
    const INITIAL_FILES: CloudFile[] = [
        { id: '1', name: 'Resume.pdf', type: 'doc', sizeMB: 2, location: 'local' },
        { id: '2', name: 'Vacation.jpg', type: 'image', sizeMB: 5, location: 'local' },
        { id: '3', name: 'Budget.xlsx', type: 'doc', sizeMB: 1, location: 'local' },
        { id: '4', name: 'Song_Demo.mp3', type: 'audio', sizeMB: 8, location: 'local' },
    ];

    const STORAGE_LIMIT_MB = 100;

    const [localFiles, setLocalFiles] = useState<CloudFile[]>(INITIAL_FILES);
    const [cloudFiles, setCloudFiles] = useState<CloudFile[]>([]);
    const [selectedFile, setSelectedFile] = useState<CloudFile | null>(null);
    const [isComputerBroken, setIsComputerBroken] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [notification, setNotification] = useState<{ msg: string, type: 'success' | 'error' | 'info' } | null>(null);
    const [showShareModal, setShowShareModal] = useState(false);

    // Helper functions
    const showNotification = (msg: string, type: 'success' | 'error' | 'info' = 'info') => {
        setNotification({ msg, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleUpload = () => {
        if (!selectedFile || selectedFile.location !== 'local') return;
        if (!isOnline) { showNotification("No Internet!", "error"); return; }
        if (isComputerBroken) { showNotification("Computer Broken!", "error"); return; }

        const usedStorage = cloudFiles.reduce((acc, f) => acc + f.sizeMB, 0);
        if (usedStorage + selectedFile.sizeMB > STORAGE_LIMIT_MB) { showNotification("Cloud Storage Full!", "error"); return; }

        if (cloudFiles.find(f => f.id === selectedFile.id)) { showNotification("File already in cloud", "info"); return; }

        const newFile = { ...selectedFile, location: 'cloud' as const };
        setCloudFiles(prev => [...prev, newFile]);
        showNotification(`Uploaded ${selectedFile.name}`, "success");
        setSelectedFile(null);
    };

    const handleDownload = () => {
        if (!selectedFile || selectedFile.location !== 'cloud') return;
        if (!isOnline) { showNotification("No Internet!", "error"); return; }
        if (isComputerBroken) { showNotification("Computer Broken!", "error"); return; }
        if (localFiles.find(f => f.id === selectedFile.id)) { showNotification("File already on computer", "info"); return; }

        const newFile = { ...selectedFile, location: 'local' as const };
        setLocalFiles(prev => [...prev, newFile]);
        showNotification(`Downloaded ${selectedFile.name}`, "success");
        setSelectedFile(null);
    };

    const breakComputer = () => {
        setIsComputerBroken(true);
        showNotification("CRITICAL FAILURE: Hard Drive Crashed!", "error");
        setSelectedFile(null);
    };

    const fixComputer = () => {
        setIsComputerBroken(false);
        setLocalFiles([]); // Lose all local files
        showNotification("Computer Repaired (Data Lost)", "info");
    };

    const FileIcon = ({ type }: { type: string }) => {
        switch (type) {
            case 'doc': return <FileText className="text-blue-500" />;
            case 'image': return <ImageIcon className="text-purple-500" />;
            case 'audio': return <Music className="text-pink-500" />;
            default: return <FileText className="text-slate-500" />;
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-[30px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
            {/* TOOLBAR */}
            <div className="bg-white dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Cloud className="text-blue-500" />
                    <span className="font-bold text-lg">CloudSim v1.0</span>
                </div>
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant={isOnline ? "default" : "destructive"}
                        className={isOnline ? "bg-green-500 hover:bg-green-600" : ""}
                        onClick={() => setIsOnline(!isOnline)}
                    >
                        {isOnline ? <Wifi size={16} className="mr-2" /> : <WifiOff size={16} className="mr-2" />}
                        {isOnline ? "Online" : "Offline"}
                    </Button>
                </div>
            </div>

            <div className="p-6 grid lg:grid-cols-2 gap-8 h-[600px]">
                {/* LEFT: LOCAL COMPUTER */}
                <div className={`p-6 rounded-2xl border-2 transition-colors flex flex-col ${isComputerBroken ? 'bg-red-50 border-red-300 dark:bg-red-900/20' : 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700'}`}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold flex items-center gap-2">
                            <Laptop size={20} /> My Computer
                        </h3>
                        {!isComputerBroken && <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-100" onClick={breakComputer}>Simulate Crash 💥</Button>}
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2">
                        {isComputerBroken ? (
                            <div className="h-full flex flex-col items-center justify-center text-center text-red-500 animate-pulse">
                                <AlertTriangle size={48} className="mb-4" />
                                <h4 className="font-bold text-xl">SYSTEM FAILURE</h4>
                                <p className="mb-4">Hard Drive Error. All local data inaccessible.</p>
                                <Button onClick={fixComputer} variant="destructive">Repair Computer</Button>
                            </div>
                        ) : (
                            localFiles.length === 0 ? (
                                <div className="text-center text-slate-400 mt-10">No files on disk.</div>
                            ) : (
                                localFiles.map(file => (
                                    <div
                                        key={file.id}
                                        onClick={() => setSelectedFile({ ...file, location: 'local' })}
                                        className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 ${selectedFile?.id === file.id && selectedFile.location === 'local' ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-slate-700' : 'border-slate-200 dark:border-slate-700'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileIcon type={file.type} />
                                            <span>{file.name}</span>
                                        </div>
                                        <span className="text-xs text-slate-400">{file.sizeMB} MB</span>
                                    </div>
                                ))
                            )
                        )}
                    </div>
                </div>

                {/* MIDDLE CONTROLS (Floating on desktop, sandwiched on mobile) */}
                {/* (Integrated into panels for cleaner layout) */}

                {/* RIGHT: CLOUD STORAGE */}
                <div className="bg-sky-50 dark:bg-sky-900/10 p-6 rounded-2xl border-2 border-sky-200 dark:border-sky-800 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                            <Cloud size={20} /> Remote Server (The Cloud)
                        </h3>
                        <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                            {cloudFiles.reduce((acc, f) => acc + f.sizeMB, 0)} / {STORAGE_LIMIT_MB} MB Used
                        </span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2 mb-4">
                        {cloudFiles.length === 0 ? (
                            <div className="text-center text-slate-400 mt-10">Cloud is empty.</div>
                        ) : (
                            cloudFiles.map(file => (
                                <div
                                    key={file.id}
                                    onClick={() => setSelectedFile({ ...file, location: 'cloud' })}
                                    className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer hover:bg-white dark:hover:bg-slate-800 ${selectedFile?.id === file.id && selectedFile.location === 'cloud' ? 'ring-2 ring-blue-500 bg-white dark:bg-slate-800' : 'border-blue-200 bg-white/50 dark:border-slate-700'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <FileIcon type={file.type} />
                                        <span>{file.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {file.isShared && <Globe size={14} className="text-green-500" />}
                                        <span className="text-xs text-slate-400">{file.sizeMB} MB</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sky-200 dark:border-sky-800">
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={!selectedFile || selectedFile.location !== 'local'}
                            onClick={handleUpload}
                        >
                            <Upload className="mr-2 h-4 w-4" /> Upload to Cloud
                        </Button>
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white"
                            disabled={!selectedFile || selectedFile.location !== 'cloud'}
                            onClick={handleDownload}
                        >
                            <Download className="mr-2 h-4 w-4" /> Download to PC
                        </Button>
                    </div>
                </div>
            </div>

            {/* NOTIFICATIONS */}
            {notification && (
                <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5 z-50 text-white font-bold 
                    ${notification.type === 'error' ? 'bg-red-600' : notification.type === 'success' ? 'bg-green-600' : 'bg-slate-800'}`}>
                    {notification.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle size={18} />}
                    {notification.msg}
                </div>
            )}
        </div>
    );
}

// --- TOPIC 1: WHAT IS CLOUD COMPUTING? ---
function Topic1_WhatIsCloud() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative pt-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                            What is <span className="text-amber-500">Cloud Computing?</span>
                        </h1>
                        <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Cloud computing is the delivery of computing services over the internet. Instead of buying individual hardware, you rent access to powerful storage and processing power from massive data centers.
                    </p>
                </div>

                {/* VISUAL: DATA CENTER */}
                <div className="mt-12 container mx-auto px-4 max-w-5xl">
                    <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card aspect-video flex items-center justify-center">
                        {/* Placeholder for Data Center Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40"></div>
                        <div className="relative z-10 text-center p-8 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                            <Server className="w-16 h-16 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-card-foreground">The Physical Cloud</h3>
                            <p className="text-sm text-muted-foreground mt-2">Millions of servers running 24/7 in secure facilities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CORE CONCEPT */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                                <Cloud className="w-6 h-6 text-amber-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">The Core Concept</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Think of it as <strong>"Something Else's Computer"</strong>. When you save a file to the Cloud, you aren't using your hard drive. You are sending data through the internet to a secure vault.
                        </p>

                        {/* Diagram */}
                        <div className="p-6 bg-card rounded-xl border border-border flex items-center gap-4 relative">
                            <div className="flex-1 text-center">
                                <Laptop className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                                <span className="text-xs font-semibold text-muted-foreground">Your Device</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center relative">
                                <div className="border-t-2 border-dashed border-border w-full absolute top-1/2 -translate-y-1/2"></div>
                                <span className="relative z-10 text-[10px] bg-background px-2 text-muted-foreground uppercase tracking-widest">Internet</span>
                            </div>

                            <div className="flex-1 text-center">
                                <Server className="w-8 h-8 mx-auto text-primary mb-2" />
                                <span className="text-xs font-semibold text-primary">Cloud Server</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative h-64 lg:h-80 bg-card rounded-3xl p-1 border border-border shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
                        <div className="relative z-10 text-center p-8">
                            <div className="w-20 h-20 mx-auto bg-muted rounded-2xl flex items-center justify-center border border-border mb-4 shadow-xl">
                                <Cloud size={40} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-xl text-card-foreground">Not Magic. Just Servers.</h3>
                            <p className="text-muted-foreground text-sm mt-2">Ideally, it's just a computer in a warehouse.</p>
                        </div>
                    </div>
                </div>
            </section>




            {/* SECTION 2: CHARACTERISTICS (GRID) */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">KEY CHARACTERISTICS</span>
                    <h2 className="text-2xl font-bold mt-2 text-foreground">Why the World Switched to Cloud</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-card text-card-foreground border border-border p-6 rounded-xl hover:border-primary/50 transition-colors text-center group shadow-sm">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">On-Demand</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Access computing power instantly. No need to wait for hardware delivery or installation.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-card text-card-foreground border border-border p-6 rounded-xl hover:border-primary/50 transition-colors text-center group shadow-sm">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Scalable</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Start small and grow infinitely. Add more storage or power with just a few clicks.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-card text-card-foreground border border-border p-6 rounded-xl hover:border-primary/50 transition-colors text-center group shadow-sm">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Reliable</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your data is redundant. If one server fails, another takes over instantly without data loss.
                        </p>
                    </div>
                </div>
            </section>



            {/* SECTION 4: LOCAL VS CLOUD */}
            <section className="container mx-auto px-4 py-12">
                <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* LOCAL */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-card-foreground">
                                <HardDrive className="text-muted-foreground" />
                                Local Computing
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-muted-foreground group">
                                    <XCircle className="w-6 h-6 text-red-500/80 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <strong className="text-card-foreground block mb-1">You Own It</strong>
                                        You handle repairs, upgrades, and security updates yourself.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-muted-foreground group">
                                    <XCircle className="w-6 h-6 text-red-500/80 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <strong className="text-card-foreground block mb-1">High Risk</strong>
                                        If your hard drive crashes or gets stolen, your data is gone forever.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-muted-foreground group">
                                    <XCircle className="w-6 h-6 text-red-500/80 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <strong className="text-card-foreground block mb-1">Limited Space</strong>
                                        You only have the storage you bought. Need more? Buy a new drive.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* CLOUD */}
                        <div className="md:border-l border-border md:pl-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
                                <Cloud className="text-primary" />
                                Cloud Computing
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-muted-foreground group">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <strong className="text-card-foreground block mb-1">You Rent It</strong>
                                        Providers handle all maintenance, security, and updates for you.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-muted-foreground group">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <strong className="text-card-foreground block mb-1">Secure & Backed Up</strong>
                                        Data is duplicated across multiple servers. Hard drive crash? No problem.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-muted-foreground group">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <strong className="text-card-foreground block mb-1">Unlimited Scale</strong>
                                        Need more space? Just click a button to upgrade instantly.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: INTERACTIVE LAB */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="bg-card border border-border rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 mb-4">INTERACTIVE LAB</Badge>
                        <h2 className="text-2xl font-bold text-card-foreground">Experience Cloud Storage</h2>
                        <p className="text-muted-foreground mt-2">See how files move from your secure Local Device to the Cloud.</p>
                    </div>
                    {/* Simulator Wrapper */}
                    <div className="rounded-xl overflow-hidden border border-border bg-background">
                        <CloudStorageSimulator />
                    </div>
                </div>
            </section>

            {/* SECTION 4: WHY IT MATTERS (Footer Style) */}
            <section className="container mx-auto px-4 max-w-3xl text-center">
                <div className="bg-card rounded-2xl p-10 border border-border relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">Why It Matters</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Without Cloud Computing, the modern internet as we know it—streaming movies, collaborating on docs, social media—would simply not exist. It is the invisible backbone of our digital lives.
                    </p>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t1" />
            </div>
        </div>
    );
}

// --- TOPIC 2: CLOUD IN DAILY LIFE ---
function Topic2_CloudDailyLife() {
    const [xrayApp, setXrayApp] = useState<string | null>(null);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative pt-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                            You are already a <span className="text-amber-500">Cloud Expert</span>
                        </h1>
                        <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        You use the cloud hundreds of times a day without even realizing it. From texting to watching movies, the cloud is the invisible engine powering your life.
                    </p>
                </div>

                {/* NETWORK VISUAL */}
                <div className="mt-12 container mx-auto px-4 max-w-3xl">
                    <div className="relative h-64 md:h-80 bg-card rounded-3xl border border-border flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

                        {/* Central Cloud */}
                        <div className="relative z-10 bg-card p-6 rounded-full shadow-xl border border-border animate-pulse">
                            <Cloud className="w-16 h-16 text-primary" />
                        </div>

                        {/* Connected Apps */}
                        <div className="absolute top-1/4 left-1/4 animate-bounce animate-duration-[3000ms]">
                            <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-xl transform -rotate-12">
                                <Mail className="w-8 h-8 text-red-500" />
                            </div>
                        </div>
                        <div className="absolute top-1/4 right-1/4 animate-bounce animate-duration-[4000ms]">
                            <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-xl transform rotate-12">
                                <ImageIcon className="w-8 h-8 text-purple-500" />
                            </div>
                        </div>
                        <div className="absolute bottom-1/4 left-1/3 animate-bounce animate-duration-[3500ms]">
                            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-xl transform -rotate-6">
                                <Music className="w-8 h-8 text-green-500" />
                            </div>
                        </div>
                        <div className="absolute bottom-1/4 right-1/3 animate-bounce animate-duration-[4500ms]">
                            <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-xl transform rotate-6">
                                <FileText className="w-8 h-8 text-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: STREAMING VS STORING (Water Concept) */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-foreground">The Big Shift: Ownership vs. Access</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Comparison Card 1 */}
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center">
                        <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
                            <HardDrive className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">The Old Way (Storing)</h3>
                        <p className="text-muted-foreground mb-4">Like carrying a jar of water.</p>
                        <ul className="text-left space-y-2 text-sm text-muted-foreground max-w-xs mx-auto">
                            <li className="flex gap-2">❌ Limited capacity</li>
                            <li className="flex gap-2">❌ Heavy to carry</li>
                            <li className="flex gap-2">❌ Runs out quickly</li>
                        </ul>
                    </div>
                    {/* Comparison Card 2 */}
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-6 relative z-10">
                            <Wifi className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-card-foreground">The Cloud Way (streaming)</h3>
                        <p className="text-muted-foreground mb-4">Like turning on a faucet.</p>
                        <ul className="text-left space-y-2 text-sm text-muted-foreground max-w-xs mx-auto relative z-10">
                            <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500" /> Unlimited supply</li>
                            <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500" /> Available instantly</li>
                            <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500" /> Pay only for what you use</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 2: REAL WORLD APPS GRID */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">REAL WORLD EXAMPLES</span>
                    <h2 className="text-2xl font-bold mt-2 text-foreground">Where It Lives</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Gmail */}
                    <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors flex gap-6 items-start group shadow-sm">
                        <div className="w-12 h-12 shrink-0 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition-colors">
                            <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-card-foreground mb-2">Gmail: Letters in the Sky</h3>
                            <p className="text-sm text-muted-foreground">
                                Your emails aren't on your phone. They're on Google's servers. That's why you can log in from a library computer and see the exact same inbox.
                            </p>
                        </div>
                    </div>

                    {/* YouTube */}
                    <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors flex gap-6 items-start group shadow-sm">
                        <div className="w-12 h-12 shrink-0 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition-colors">
                            <Youtube className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-card-foreground mb-2">YouTube: Infinite Video Store</h3>
                            <p className="text-sm text-muted-foreground">
                                You don't download videos anymore. YouTube sends you the video piece-by-piece in real time (buffering), so you can watch petabytes of content with 0GB storage.
                            </p>
                        </div>
                    </div>

                    {/* Instagram */}
                    <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors flex gap-6 items-start group shadow-sm">
                        <div className="w-12 h-12 shrink-0 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center group-hover:bg-pink-200 dark:group-hover:bg-pink-900/40 transition-colors">
                            <ImageIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-card-foreground mb-2">Instagram: Travel Light</h3>
                            <p className="text-sm text-muted-foreground">
                                You can have 10,000 photos on your profile, but they take up almost 0 space on your phone. They live in Meta's data centers.
                            </p>
                        </div>
                    </div>

                    {/* Google Drive */}
                    <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors flex gap-6 items-start group shadow-sm">
                        <div className="w-12 h-12 shrink-0 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors">
                            <HardDrive className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-card-foreground mb-2">Drive: The Invincible Backpack</h3>
                            <p className="text-sm text-muted-foreground">
                                Even if you drop your laptop in the ocean, your homework is safe. The device is temporary; the data is permanent in the cloud.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: INTERACTIVE X-RAY */}
            <section className="container mx-auto px-4 text-center">
                <div className="bg-card rounded-3xl p-8 border border-border inline-block max-w-2xl w-full">
                    <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                        <div className="text-left">
                            <h2 className="text-xl font-bold text-card-foreground">Cloud X-Ray</h2>
                            <p className="text-sm text-muted-foreground">Tap an app to see what really happens.</p>
                        </div>
                        <Smartphone className="text-muted-foreground" />
                    </div>

                    {/* App Icons */}
                    <div className="flex justify-center gap-8 mb-8">
                        <button onClick={() => setXrayApp('spotify')} className={`flex flex-col items-center gap-2 transition-transform hover:scale-110 ${xrayApp === 'spotify' ? 'scale-110' : ''}`}>
                            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"><Music className="text-white w-8 h-8" /></div>
                            <span className="text-xs font-bold text-slate-400">Spotify</span>
                        </button>
                        <button onClick={() => setXrayApp('netflix')} className={`flex flex-col items-center gap-2 transition-transform hover:scale-110 ${xrayApp === 'netflix' ? 'scale-110' : ''}`}>
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg"><PlayCircle className="text-white w-8 h-8" /></div>
                            <span className="text-xs font-bold text-slate-400">Netflix</span>
                        </button>
                        <button onClick={() => setXrayApp('photos')} className={`flex flex-col items-center gap-2 transition-transform hover:scale-110 ${xrayApp === 'photos' ? 'scale-110' : ''}`}>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg"><ImageIcon className="text-indigo-600 w-8 h-8" /></div>
                            <span className="text-xs font-bold text-slate-400">Photos</span>
                        </button>
                    </div>

                    {/* Console Output */}
                    <div className="bg-black rounded-xl p-4 font-mono text-left text-xs h-32 overflow-y-auto border border-slate-700 shadow-inner">
                        {!xrayApp && <div className="text-slate-500 italic text-center mt-10">Select an app above...</div>}
                        {xrayApp === 'spotify' && (
                            <div className="space-y-1">
                                <div className="text-green-500">$ connecting to spotify-us-east...</div>
                                <div className="text-slate-400"> &gt; Authentication: Token Verified</div>
                                <div className="text-slate-400"> &gt; Requesting song_id: 839201</div>
                                <div className="text-blue-400"> &lt; Download stream (128kbps) started</div>
                                <div className="text-white animate-pulse"> &gt; PLAYING AUDIO...</div>
                            </div>
                        )}
                        {xrayApp === 'netflix' && (
                            <div className="space-y-1">
                                <div className="text-red-500">$ connecting to netflix-cdn...</div>
                                <div className="text-slate-400"> &gt; Smart Cache: Hit</div>
                                <div className="text-slate-400"> &gt; Bandwidth Check: 100mbps (4K Ready)</div>
                                <div className="text-blue-400"> &lt; Buffer fill: 20 seconds</div>
                                <div className="text-white animate-pulse"> &gt; PLAYING STREAM...</div>
                            </div>
                        )}
                        {xrayApp === 'photos' && (
                            <div className="space-y-1">
                                <div className="text-indigo-400">$ connecting to icloud-servers...</div>
                                <div className="text-slate-400"> &gt; Indexing 5,402 items</div>
                                <div className="text-yellow-500"> ! Storage Optimized (Thumbnails only)</div>
                                <div className="text-blue-400"> &lt; Download full_res_img_29.jpg (3MB)</div>
                                <div className="text-white animate-pulse"> &gt; DISPLAYING IMAGE...</div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* SECTION 4: WHY IT MATTERS */}
            {/* SECTION 4: WHY IT MATTERS */}
            <section className="container mx-auto px-4 max-w-3xl text-center">
                <div className="bg-card rounded-2xl p-10 border border-border">
                    <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">Device Independence</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The device in your hand is just a piece of glass. Your digital life doesn't live inside it—it lives in the cloud. You can lose your phone, buy a new one, log in, and everything is right where you left it.
                    </p>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t2" />
            </div>
        </div>
    );
}

// --- TOPIC 3: CLOUD SERVICE MODELS ---
function Topic3_ServiceModels() {
    const [managerTab, setManagerTab] = useState<'iaas' | 'paas' | 'saas'>('saas');

    return (
        <div className="space-y-20 pb-20">
            {/* 1. HERO SECTION */}
            <section className="relative pt-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 mb-2">
                        THE "PIZZA" THEORY
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                        IaaS, PaaS, SaaS... <span className="text-purple-500">What?</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Cloud jargon is confusing. Let's explain it using something everyone loves: <strong>Pizza</strong>. It's all about how much control you want versus how much convenience you need.
                    </p>
                </div>
            </section>

            {/* 2. THE PIZZA ANALOGY */}
            <section className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-4 gap-4">
                    {/* On-Prem */}
                    <Card className="p-6 border-t-4 border-t-slate-500 hover:shadow-lg transition-all text-center">
                        <div className="text-4xl mb-4">🏠</div>
                        <h3 className="text-xl font-bold mb-1">Homemade</h3>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">On-Premises</p>
                        <ul className="text-xs space-y-2 text-left bg-muted p-3 rounded-lg">
                            <li className="flex gap-2">🔹 Buy Ingredients</li>
                            <li className="flex gap-2">🔹 Make Dough</li>
                            <li className="flex gap-2">🔹 Bake Pizza</li>
                            <li className="flex gap-2">🔹 Clean Up</li>
                        </ul>
                    </Card>

                    {/* IaaS */}
                    <Card className="p-6 border-t-4 border-t-blue-500 hover:shadow-lg transition-all text-center">
                        <div className="text-4xl mb-4">🛒</div>
                        <h3 className="text-xl font-bold mb-1">Take 'n Bake</h3>
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">IaaS</p>
                        <ul className="text-xs space-y-2 text-left bg-muted p-3 rounded-lg">
                            <li className="flex gap-2 text-muted-foreground line-through">Buy Ingredients</li>
                            <li className="flex gap-2 font-bold text-card-foreground">🔹 Make Dough</li>
                            <li className="flex gap-2 font-bold text-card-foreground">🔹 Bake Pizza</li>
                            <li className="flex gap-2 font-bold text-card-foreground">🔹 Clean Up</li>
                        </ul>
                    </Card>

                    {/* PaaS */}
                    <Card className="p-6 border-t-4 border-t-orange-500 hover:shadow-lg transition-all text-center">
                        <div className="text-4xl mb-4">🛵</div>
                        <h3 className="text-xl font-bold mb-1">Delivery</h3>
                        <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-4">PaaS</p>
                        <ul className="text-xs space-y-2 text-left bg-muted p-3 rounded-lg">
                            <li className="flex gap-2 text-muted-foreground line-through">Buy Ingredients</li>
                            <li className="flex gap-2 text-muted-foreground line-through">Make/Bake</li>
                            <li className="flex gap-2 font-bold text-card-foreground">🔹 Set Table</li>
                            <li className="flex gap-2 font-bold text-card-foreground">🔹 Eat</li>
                        </ul>
                    </Card>

                    {/* SaaS */}
                    <Card className="p-6 border-t-4 border-t-green-500 hover:shadow-lg transition-all text-center transform md:-translate-y-4 md:shadow-xl border-2 border-green-500/20">
                        <div className="text-4xl mb-4">🍽️</div>
                        <h3 className="text-xl font-bold mb-1">Dining Out</h3>
                        <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-4">SaaS</p>
                        <ul className="text-xs space-y-2 text-left bg-green-500/10 p-3 rounded-lg">
                            <li className="flex gap-2 text-muted-foreground line-through">Buy Ingredients</li>
                            <li className="flex gap-2 text-muted-foreground line-through">Make/Bake</li>
                            <li className="flex gap-2 text-muted-foreground line-through">Clean Up</li>
                            <li className="flex gap-2 font-bold text-green-700 dark:text-green-400">✨ Just Eat</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* 3. DEEP DIVE: IaaS */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-wider text-sm uppercase">
                            <Server className="w-4 h-4" /> Infrastructure as a Service
                        </div>
                        <h2 className="text-3xl font-bold text-card-foreground">The Raw Materials</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Think of this as renting a blank computer in the cloud. You get the hardware (CPU, RAM, Storage), but it's empty. You have to install the Operating System, the updates, and the software yourself.
                        </p>
                        <div className="flex gap-2">
                            <Badge variant="secondary">Amazon AWS (EC2)</Badge>
                            <Badge variant="secondary">Microsoft Azure</Badge>
                        </div>
                    </div>
                    <div className="w-full md:w-80 bg-slate-950 p-6 rounded-xl font-mono text-xs text-green-400 border border-slate-800 shadow-2xl">
                        <div className="border-b border-slate-800 pb-2 mb-4 text-slate-500">root@aws-server:~</div>
                        <div className="space-y-2">
                            <p>$ apt-get install apache2</p>
                            <p className="text-yellow-500">Reading package lists... Done</p>
                            <p>$ service start web-server</p>
                            <p className="text-blue-400 animate-pulse">_ Cursor waiting...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DEEP DIVE: PaaS */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-4 text-right md:text-left">
                        <div className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-wider text-sm uppercase">
                            <Database className="w-4 h-4" /> Platform as a Service
                        </div>
                        <h2 className="text-3xl font-bold text-card-foreground">The Developer's Playground</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Perfect for programmers. You don't care about Windows updates or CPU fans. You just upload your code, and the cloud "magically" runs it.
                        </p>
                        <div className="flex gap-2 justify-end md:justify-start">
                            <Badge variant="secondary">Heroku</Badge>
                            <Badge variant="secondary">Google App Engine</Badge>
                            <Badge variant="secondary">Vercel</Badge>
                        </div>
                    </div>
                    <div className="w-full md:w-80 bg-white dark:bg-slate-900 p-6 rounded-xl border border-border shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto text-orange-500">
                                <Upload className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="font-bold text-card-foreground">Deploying App...</h4>
                                <div className="h-2 bg-muted rounded-full mt-2 w-full overflow-hidden">
                                    <div className="h-full bg-orange-500 w-3/4"></div>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground">Build success. URL generated.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DEEP DIVE: SaaS */}
            <section className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 text-green-500 font-bold tracking-wider text-sm uppercase mb-2">
                        <Smartphone className="w-4 h-4" /> Software as a Service
                    </div>
                    <h2 className="text-3xl font-bold text-card-foreground">The Finished Product</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                        This is what end-users see. You don't code it, you don't install it. You just log in and use it.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                        <Mail className="w-10 h-10 text-red-500" />
                        <span className="font-bold">Gmail</span>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                        <Film className="w-10 h-10 text-red-600" />
                        <span className="font-bold">Netflix</span>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                        <VideoConferenceIcon />
                        <span className="font-bold">Zoom</span>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                        <Music className="w-10 h-10 text-green-500" />
                        <span className="font-bold">Spotify</span>
                    </div>
                </div>
            </section>

            {/* 6. INTERACTIVE: WHO MANAGES WHAT? */}
            <section className="container mx-auto px-4 max-w-4xl text-center">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6">Who Manages What?</h2>

                    <div className="flex justify-center gap-2 mb-8 p-1 bg-muted rounded-lg inline-flex">
                        <button
                            onClick={() => setManagerTab('iaas')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${managerTab === 'iaas' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            IaaS
                        </button>
                        <button
                            onClick={() => setManagerTab('paas')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${managerTab === 'paas' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            PaaS
                        </button>
                        <button
                            onClick={() => setManagerTab('saas')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${managerTab === 'saas' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            SaaS
                        </button>
                    </div>

                    <div className="space-y-2 max-w-sm mx-auto">
                        {/* Stack Layers */}
                        <div className={`p-3 rounded-lg border font-mono text-sm transition-colors ${managerTab === 'saas' ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500'}`}>
                            Applications
                        </div>
                        <div className={`p-3 rounded-lg border font-mono text-sm transition-colors ${['saas', 'paas'].includes(managerTab) ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500'}`}>
                            Data
                        </div>
                        <div className={`p-3 rounded-lg border font-mono text-sm transition-colors ${['saas', 'paas'].includes(managerTab) ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500'}`}>
                            Runtime
                        </div>
                        <div className="p-3 rounded-lg border border-green-500 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-mono text-sm">
                            Operating System
                        </div>
                        <div className="p-3 rounded-lg border border-green-500 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-mono text-sm">
                            Servers & Storage
                        </div>
                        <div className="p-3 rounded-lg border border-green-500 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-mono text-sm">
                            Networking
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-6 text-xs font-bold">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div> Vendor Manages
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full"></div> You Manage
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t3" />
            </div>
        </div>
    );
}

// Helper Icon for Zoom
function VideoConferenceIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-500"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
    )
}

// --- TOPIC 4: CLOUD DEPLOYMENT MODELS ---
// --- TOPIC 4: CLOUD DEPLOYMENT MODELS ---
function Topic4_DeploymentModels() {
    const [quizScenario, setQuizScenario] = useState(0);
    const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);

    const scenarios = [
        {
            id: 0,
            role: "Startup Founder",
            desc: "You have a new app idea. You have $0 and need to launch FAST. You don't care about sharing servers.",
            correct: "public"
        },
        {
            id: 1,
            role: "Bank CEO",
            desc: "You hold the life savings of millions of people. Security is the ONLY thing that matters. Cost is no object.",
            correct: "private"
        },
        {
            id: 2,
            role: "E-Commerce Giant",
            desc: "You have a steady store, but on Black Friday, traffic spikes 500%. You need your own secure servers but extra capacity for the sale.",
            correct: "hybrid"
        }
    ];

    const handleQuizGuess = (guess: string) => {
        if (guess === scenarios[quizScenario].correct) {
            setQuizResult('correct');
            setTimeout(() => {
                setQuizResult(null);
                setQuizScenario((prev) => (prev + 1) % scenarios.length);
            }, 1500);
        } else {
            setQuizResult('incorrect');
            setTimeout(() => setQuizResult(null), 1000);
        }
    };

    return (
        <div className="space-y-20 pb-20">
            {/* 1. HERO SECTION */}
            <section className="relative pt-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 mb-2">
                        Real Estate of the Internet
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                        Location, Location, <span className="text-orange-500">Location</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Where does your data actually live? In a shared apartment, a private mansion, or a mix of both? Let's choose your Cloud Home.
                    </p>
                </div>
            </section>

            {/* 2. PUBLIC CLOUD */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 transition-colors hover:border-orange-500/50 group">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-wider text-sm uppercase mb-4">
                                <Building className="w-4 h-4" /> Public Cloud
                            </div>
                            <h2 className="text-3xl font-bold text-card-foreground mb-4">The Apartment Complex</h2>
                            <p className="text-muted-foreground mb-6">
                                You rent a unit in a massive building (AWS, Azure, Google Cloud).
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-card-foreground"><strong>Multi-Tenancy:</strong> You share the building infrastructure (elevator, gym) with others.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-card-foreground"><strong>Super Cheap:</strong> You only pay for what you use.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-card-foreground"><strong>Noisy Neighbors:</strong> If someone else uses all the hot water (bandwidth), you might feel it.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 bg-orange-100 dark:bg-orange-900/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-orange-300 dark:border-orange-800">
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center">
                                    <span className="text-2xl">😎</span>
                                    <p className="text-xs font-bold mt-1 text-card-foreground">You</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center opacity-70">
                                    <span className="text-2xl">🤠</span>
                                    <p className="text-xs font-bold mt-1 text-card-foreground">Stranger</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center opacity-70">
                                    <span className="text-2xl">👩‍🎤</span>
                                    <p className="text-xs font-bold mt-1 text-card-foreground">Stranger</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center opacity-70">
                                    <span className="text-2xl">🤡</span>
                                    <p className="text-xs font-bold mt-1 text-card-foreground">Stranger</p>
                                </div>
                            </div>
                            <div className="absolute top-2 right-2 text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded">SHARED SERVER</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRIVATE CLOUD */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 transition-colors hover:border-slate-500/50 group">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-300 dark:border-slate-700">
                            <div className="bg-slate-900 text-white p-8 rounded-xl shadow-2xl text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
                                <Shield className="w-12 h-12 mx-auto text-slate-400 mb-2" />
                                <span className="font-bold text-lg">TOP SECRET</span>
                                <div className="mt-2 text-xs text-slate-500 font-mono">192.168.1.1</div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 text-slate-500 font-bold tracking-wider text-sm uppercase mb-4">
                                <Home className="w-4 h-4" /> Private Cloud
                            </div>
                            <h2 className="text-3xl font-bold text-card-foreground mb-4">The Private Mansion</h2>
                            <p className="text-muted-foreground mb-6">
                                You own the land, the house, and the fence. It is dedicated hardware just for you.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-card-foreground"><strong>Single-Tenancy:</strong> Just you. No strangers allowed.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-card-foreground"><strong>Max Security:</strong> Perfect for banks, hospitals, and governments.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-card-foreground"><strong>Expensive:</strong> You pay for everything, even if you aren't using all the rooms.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. HYBRID CLOUD */}
            <section className="container mx-auto px-4 text-center max-w-4xl">
                <div className="bg-gradient-to-r from-slate-900 to-orange-900 p-1 rounded-3xl">
                    <div className="bg-card rounded-[22px] p-8 md:p-12">
                        <div className="inline-flex items-center gap-2 text-purple-500 font-bold tracking-wider text-sm uppercase mb-4">
                            <ArrowRight className="w-4 h-4" /> Hybrid Cloud
                        </div>
                        <h2 className="text-3xl font-bold text-card-foreground mb-6">The Best of Both Worlds</h2>
                        <p className="text-muted-foreground mb-8">
                            Why choose? Keep your sensitive secrets in the Mansion (Private) and run your public website in the Apartment (Public). Connect them with a secure tunnel.
                        </p>

                        <div className="flex items-center justify-center gap-4 text-sm font-bold">
                            <div className="bg-slate-800 text-white px-4 py-2 rounded-lg">Private Database</div>
                            <div className="h-0.5 w-12 bg-purple-500"></div>
                            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-300">
                                <Lock className="w-4 h-4" />
                            </div>
                            <div className="h-0.5 w-12 bg-purple-500"></div>
                            <div className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-lg">Public Website</div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">Connected via Secure VPN Tunnel</p>
                    </div>
                </div>
            </section>

            {/* 5. COMPARISON GRID */}
            <section className="container mx-auto px-4 max-w-6xl">
                <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">Quick Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card border-t-4 border-t-orange-500 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-orange-500" /> Public</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Cost</span>
                                <span className="font-bold text-green-500">$ Low</span>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Security</span>
                                <span className="font-bold text-yellow-500">Medium</span>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Scalability</span>
                                <span className="font-bold text-green-500">Unlimited</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border-t-4 border-t-slate-500 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Home className="w-5 h-5 text-slate-500" /> Private</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Cost</span>
                                <span className="font-bold text-red-500">$$$ High</span>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Security</span>
                                <span className="font-bold text-green-500">High</span>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Scalability</span>
                                <span className="font-bold text-yellow-500">Limited</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border-t-4 border-t-purple-500 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5 text-purple-500" /> Hybrid</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Cost</span>
                                <span className="font-bold text-yellow-500">$$ Medium</span>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Security</span>
                                <span className="font-bold text-green-500">High</span>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Scalability</span>
                                <span className="font-bold text-green-500">High</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INTERACTIVE QUIZ: PICK YOUR MODEL */}
            <section className="container mx-auto px-4 max-w-3xl">
                <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
                    <div className="text-center mb-8">
                        <Badge className="bg-primary text-primary-foreground mb-4">INTERACTIVE QUIZ</Badge>
                        <h2 className="text-2xl font-bold text-card-foreground">Pick The Right Model</h2>
                        <p className="text-muted-foreground mt-2">Read the scenario and choose the best deployment model.</p>
                    </div>

                    <div className="bg-muted p-6 rounded-xl mb-8 relative">
                        <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-tl-xl rounded-br-xl">Because you are a...</div>
                        <h3 className="text-xl font-bold mt-4 mb-2 text-card-foreground">{scenarios[quizScenario].role}</h3>
                        <p className="text-muted-foreground">"{scenarios[quizScenario].desc}"</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <button
                            onClick={() => handleQuizGuess('public')}
                            className="p-4 rounded-xl border border-border bg-background hover:bg-orange-50 dark:hover:bg-orange-900/10 hover:border-orange-500 transition-all font-bold text-card-foreground flex flex-col items-center gap-2"
                        >
                            <Building className="text-orange-500" /> Public
                        </button>
                        <button
                            onClick={() => handleQuizGuess('private')}
                            className="p-4 rounded-xl border border-border bg-background hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-500 transition-all font-bold text-card-foreground flex flex-col items-center gap-2"
                        >
                            <Home className="text-slate-500" /> Private
                        </button>
                        <button
                            onClick={() => handleQuizGuess('hybrid')}
                            className="p-4 rounded-xl border border-border bg-background hover:bg-purple-50 dark:hover:bg-purple-900/10 hover:border-purple-500 transition-all font-bold text-card-foreground flex flex-col items-center gap-2"
                        >
                            <ArrowRight className="text-purple-500" /> Hybrid
                        </button>
                    </div>

                    {/* Feedback Overlay */}
                    {quizResult && (
                        <div className={`absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm transition-opacity ${quizResult ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="text-center">
                                {quizResult === 'correct' ? (
                                    <>
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                                        <h3 className="text-3xl font-bold text-green-600">Correct!</h3>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4 animate-shake" />
                                        <h3 className="text-3xl font-bold text-red-600">Try Again</h3>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t4" />
            </div>
        </div>
    );
}

// --- TOPIC 5: CLOUD STORAGE ---
// --- TOPIC 5: CLOUD STORAGE ---
function Topic5_CloudStorage() {
    const [files, setFiles] = useState([
        { name: "Resume.pdf", type: "doc", status: "private" },
        { name: "Family_Vacation.jpg", type: "img", status: "private" },
        { name: "Project_Budget.xlsx", type: "sheet", status: "private" }
    ]);

    const toggleShare = (index: number) => {
        const newFiles = [...files];
        newFiles[index].status = newFiles[index].status === "private" ? "public" : "private";
        setFiles(newFiles);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="text-center pt-10 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
                    <Cloud className="w-4 h-4" />
                    <span>Topic 5: Cloud Storage</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Stored in the 'Ether'
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    It's not magic. It's just someone else's computer.
                    Cloud storage lets you save files on remote servers, so you can access them from any device, anywhere in the world.
                </p>
                {/* IMAGE CONTAINER 1: HERO */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border">
                        <Database className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="font-medium text-lg">Visual: 3D Cloud over Server Rack</p>
                        <p className="text-sm text-muted-foreground mt-2">(Placeholder for Hero Image)</p>
                    </div>
                </div>
            </section>

            {/* SECTION 1: CORE CONCEPT (LOCAL VS CLOUD) */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Smartphone className="text-primary" /> Not on your Phone
                    </h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <h3 className="font-bold text-red-500 mb-2">Local Storage</h3>
                            <p className="text-sm text-muted-foreground">Files are physically stored on your device's hardware. If that hardware fails or gets lost, your data is gone forever with no backup.</p>
                        </div>
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <h3 className="font-bold text-green-500 mb-2">Cloud Storage</h3>
                            <p className="text-sm text-muted-foreground">Your files are stored in massive, secure data centers. Even if you destroy your phone, your photos and docs await you on your new device.</p>
                        </div>
                    </div>
                </div>
                {/* IMAGE CONTAINER 2: BROKEN PHONE SPLIT */}
                <div className="bg-card border border-border rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                    <div className="grid grid-cols-2 gap-8 text-center w-full">
                        <div className="space-y-4 border-r border-border pr-4">
                            <Smartphone className="w-16 h-16 text-red-500 mx-auto" />
                            <p className="text-sm font-bold text-red-500">Broken Phone = <br />Data Gone 😢</p>
                        </div>
                        <div className="space-y-4 relative pl-4">
                            <div className="absolute top-0 right-10 -mt-2">
                                <Cloud className="w-8 h-8 text-green-500" />
                            </div>
                            <Smartphone className="w-16 h-16 text-green-500 mx-auto" />
                            <p className="text-sm font-bold text-green-500">Broken Phone = <br />Data Safe 😊</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE MAGIC OF SYNC */}
            <section className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">The Magic of Synchronization</h2>
                    <p className="text-muted-foreground">Synchronization keeps your files identical across all devices. Change a document on your laptop, and the edit appears on your phone within seconds.</p>
                </div>
                {/* IMAGE CONTAINER 3: SYNC LOOP */}
                <Card className="p-10 flex flex-col items-center justify-center space-y-8 bg-card relative overflow-hidden">
                    <div className="flex items-center justify-between w-full max-w-lg relative z-10">
                        <div className="text-center">
                            <Laptop className="w-12 h-12 text-muted-foreground mb-2 mx-auto" />
                            <span className="text-xs font-bold">Laptop</span>
                        </div>
                        <div className="h-1 flex-1 bg-border mx-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary w-1/2 animate-slide-right"></div>
                        </div>
                        <div className="text-center p-4 bg-primary/10 rounded-full border border-primary/20">
                            <Cloud className="w-16 h-16 text-primary" />
                        </div>
                        <div className="h-1 flex-1 bg-border mx-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary w-1/2 animate-slide-right delay-75"></div>
                        </div>
                        <div className="text-center">
                            <Smartphone className="w-12 h-12 text-muted-foreground mb-2 mx-auto" />
                            <span className="text-xs font-bold">Phone</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center max-w-md">Visual: Continuous Data Loop</p>
                </Card>
            </section>

            {/* SECTION 3: UPLOAD VS DOWNLOAD */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* IMAGE CONTAINER 4 (Left): UPLOAD */}
                    <Card className="p-6 flex items-start gap-4">
                        <div className="p-4 bg-blue-500/10 rounded-lg">
                            <Upload className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Upload</h3>
                            <p className="text-sm text-muted-foreground">The process of copying a file from your local device to the remote server. Required to back up your data or share it with others.</p>
                        </div>
                    </Card>
                    {/* IMAGE CONTAINER 4 (Right): DOWNLOAD */}
                    <Card className="p-6 flex items-start gap-4">
                        <div className="p-4 bg-purple-500/10 rounded-lg">
                            <Download className="w-8 h-8 text-purple-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Download</h3>
                            <p className="text-sm text-muted-foreground">Retrieving a file from the server to your local device. Necessary when you want to edit offline or view a file someone sent you.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: SHARING PERMISSIONS */}
            <section className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Sharing Permissions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* IMAGE CONTAINER 5 (Part 1): PRIVATE */}
                    <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                        <Lock className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Private</h3>
                        <p className="text-xs text-muted-foreground">The default setting. Only your account can access these files. Ideal for sensitive documents like tax returns.</p>
                    </Card>
                    {/* IMAGE CONTAINER 5 (Part 2): SHARED */}
                    <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                        <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Specific People</h3>
                        <p className="text-xs text-muted-foreground">Grants access to specific email addresses. Perfect for collaboration on team projects where you need multiple editors.</p>
                    </Card>
                    {/* IMAGE CONTAINER 5 (Part 3): PUBLIC */}
                    <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                        <Globe className="w-10 h-10 text-red-500 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Public</h3>
                        <p className="text-xs text-muted-foreground">Generates a link that anyone can open. Useful for hosting images or distributing files to a large audience, but less secure.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: REAL WORLD APPS */}
            <section className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-8">Apps You Probably Use</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* IMAGE CONTAINER 6: APP LOGOS */}
                    {['Google Drive', 'Dropbox', 'iCloud', 'OneDrive'].map((app, i) => (
                        <Card key={i} className="p-6 flex flex-col items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                                {/* Placeholder for real logo */}
                                <Cloud className="text-muted-foreground opacity-50" />
                            </div>
                            <span className="font-bold text-sm">{app}</span>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 6: INTERACTIVE SIMULATOR */}
            <section className="container mx-auto px-4 max-w-3xl">
                <Card className="overflow-hidden shadow-2xl border-2 border-muted">
                    <div className="p-4 border-b border-border bg-muted/50 flex justify-between items-center">
                        <span className="font-bold text-sm flex items-center gap-2">
                            <Cloud className="w-4 h-4 text-primary" /> My Virtual Drive
                        </span>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="p-2 bg-card">
                        {files.map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg group border-b border-border/50 last:border-0">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-blue-500" size={20} />
                                    <span className="text-sm font-medium">{file.name}</span>
                                </div>
                                <Button
                                    size="sm"
                                    variant={file.status === "public" ? "default" : "outline"}
                                    onClick={() => toggleShare(i)}
                                    className="h-8 text-xs gap-2"
                                >
                                    {file.status === "public" ? <Globe size={12} /> : <Lock size={12} />}
                                    {file.status === "public" ? "Public" : "Private"}
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 bg-muted/30 text-center text-xs text-muted-foreground">
                        Click buttons to toggle permissions
                    </div>
                </Card>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t5" />
            </div>
        </div>
    );
}
// --- TOPIC 6: VIRTUAL MACHINES ---
function Topic6_VirtualMachines() {
    const [status, setStatus] = useState<'off' | 'booting' | 'running'>('off');
    const [vmLog, setVmLog] = useState<string[]>([]);
    const logContainerRef = useRef<HTMLDivElement>(null);

    const bootMachine = () => {
        if (status !== 'off') return;
        setStatus('booting');
        setVmLog([]);
        const steps = [
            "Allocating 4GB RAM...", "Mounting Virtual Disk...", "BIOS Check: OK",
            "Booting Kernel...", "Loading Drivers...", "Starting Services...", "Welcome to Ubuntu 22.04 LTS"
        ];

        let i = 0;
        const interval = setInterval(() => {
            setVmLog(prev => [...prev, steps[i]]);
            i++;
            if (i >= steps.length) {
                clearInterval(interval);
                setStatus('running');
            }
        }, 800);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="text-center pt-10 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
                    <Laptop className="w-4 h-4" />
                    <span>Topic 6: Virtual Machines</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    A Computer Inside a Computer
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Inception mode. Running software that pretends to be hardware.
                    Virtual Machines allow you to run a second operating system within your current one. It's the key technology behind cloud computing.
                </p>
                {/* IMAGE CONTAINER 1: HERO NESTED MONITOR */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group">
                    {/* Simplified Visual for Code-based implementation */}
                    <div className="relative w-3/4 h-3/4 border-4 border-slate-600 rounded-lg p-2 bg-slate-800">
                        <div className="absolute -top-6 left-2 text-xs text-slate-400">Physical Monitor</div>
                        <div className="w-full h-full bg-blue-900/20 rounded flex items-center justify-center p-8">
                            <div className="w-full h-full bg-white rounded shadow-2xl flex flex-col overflow-hidden">
                                <div className="bg-slate-200 p-2 flex gap-1 border-b">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <span className="ml-2 text-[10px] text-slate-500 font-sans">VM Window</span>
                                </div>
                                <div className="flex-1 bg-black p-4 font-mono text-green-400 text-xs">
                                    {'>'} _<br />Running Guest OS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE ANALOGY */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">The Russian Doll</h2>
                    <p className="text-lg text-muted-foreground">
                        Think of a Matryoshka doll.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Laptop className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <strong>The Host:</strong> The big outer doll. Your physical computer (Mac/PC).
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Box className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                            <div>
                                <strong>The Guest:</strong> The small inner doll. The Virtual Machine living inside.
                            </div>
                        </li>
                    </ul>
                    <p className="text-lg text-muted-foreground mt-4">
                        Just as a Matryoshka doll fits one doll inside another, a VM fits a 'Guest' computer inside your 'Host' computer. They run simultaneously but stay separate.
                    </p>
                </div>
                {/* IMAGE CONTAINER 2: RUSSIAN DOLL VISUAL */}
                <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-center min-h-[300px]">
                    <div className="relative flex items-center justify-center">
                        <div className="w-64 h-64 border-2 border-dashed border-primary rounded-xl flex items-center justify-center relative">
                            <span className="absolute -top-3 bg-card px-2 text-primary font-bold">HOST (Physical)</span>
                            <div className="w-32 h-32 bg-primary/20 rounded-lg flex items-center justify-center border border-primary relative">
                                <span className="absolute -bottom-6 text-xs text-center w-full font-bold">GUEST (Virtual)</span>
                                <Laptop size={40} className="text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: VIRTUALIZATION STACK */}
            <section className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold text-center mb-8">The "Layer Cake"</h2>
                <p className="text-center text-muted-foreground mb-8">How does one computer run inside another? It uses a middleman called a <strong>Hypervisor</strong>.</p>

                {/* IMAGE CONTAINER 3: STACK DIAGRAM */}
                <div className="max-w-lg mx-auto space-y-2">
                    <div className="p-4 bg-muted border border-border rounded-xl text-center text-sm font-bold text-muted-foreground">App Layer (Word, Chrome)<br /><span className="text-xs font-normal">Your everyday software runs here, usually unaware it's inside a virtual environment.</span></div>
                    <div className="p-4 bg-muted border-2 border-primary/50 text-primary rounded-xl text-center text-sm font-bold shadow-[0_0_15px_rgba(251,146,60,0.2)]">Guest OS (Windows)<br /><span className="text-xs font-normal text-muted-foreground">A full operating system installed virtually. It thinks it has its own dedicated hardware.</span></div>
                    <div className="p-4 bg-card border border-border rounded-xl text-center text-sm font-bold text-card-foreground">Hypervisor (The Manager)<br /><span className="text-xs font-normal text-muted-foreground">The software layer that creates and manages VMs. It allocates CPU and RAM from the physical machine.</span></div>
                    <div className="p-4 bg-slate-900 text-slate-500 rounded-xl text-center text-sm font-bold border border-slate-800">Physical Hardware (CPU)<br /><span className="text-xs font-normal">The actual physical server with chips and fans. The Hypervisor decides who gets to use these resources.</span></div>
                </div>
            </section>

            {/* SECTION 3: USE CASES */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* IMAGE CONTAINER 4: SANDBOX VISUAL */}
                <div className="bg-card border border-border rounded-xl p-10 min-h-[300px] flex flex-col items-center justify-center text-center">
                    <Shield className="w-24 h-24 text-primary mb-6" />
                    <h3 className="text-2xl font-bold">The Safety Sandbox</h3>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Why do we do this?</h2>
                    <div className="space-y-4">
                        <Card className="p-4 border-l-4 border-l-primary">
                            <h3 className="font-bold flex items-center gap-2"><Bug className="w-4 h-4" /> Safety</h3>
                            <p className="text-sm text-muted-foreground">Test a virus here. If it explodes, it stays inside the VM. Your real computer is fine.
                                A safe, isolated environment for testing that prevents damage to your main system.</p>
                        </Card>
                        <Card className="p-4 border-l-4 border-l-blue-500">
                            <h3 className="font-bold flex items-center gap-2"><Server className="w-4 h-4" /> Servers</h3>
                            <p className="text-sm text-muted-foreground">Cloud companies split one giant super-computer into 50 small rental servers. Efficient!
                                This saves massive amounts of money and electricity by utilizing the full power of a single machine.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SNAPSHOTS */}
            <section className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-2xl font-bold mb-4">Magic Feature: Snapshots</h2>
                <p className="text-muted-foreground mb-8">A Snapshot is a "Save Point". If you break the system, click Restore and time rewinds.
                    Create an instant backup of your VM's exact state. If a test goes wrong, you can revert to this moment in seconds.</p>


                {/* IMAGE CONTAINER 5: TIMELINE */}
                <div className="relative bg-card p-8 rounded-xl border border-border">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0"></div>
                    <div className="relative z-10 flex justify-between items-center px-4 md:px-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <span className="text-xs font-bold">Clean State</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-red-500">Virus Hits!</span>
                        </div>
                        <Button variant="secondary" size="sm" className="gap-2 shadow-lg">
                            <RotateCcw className="w-4 h-4" /> Undo
                        </Button>
                    </div>
                </div>
            </section>

            {/* SECTION 5: INTERACTIVE TERMINAL */}
            <section className="container mx-auto px-4 max-w-3xl">
                <Card className="bg-slate-950 border-slate-800 overflow-hidden shadow-2xl">
                    <div className="p-2 border-b border-slate-800 flex items-center justify-between bg-slate-900">
                        <span className="text-xs text-slate-400 pl-2">Hyper-V Manager</span>
                        <div className="flex gap-1 pr-2">
                            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        </div>
                    </div>
                    <div className="p-6 min-h-[250px] font-mono text-sm relative">
                        {status === 'off' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Button onClick={bootMachine} className="bg-green-600 hover:bg-green-700 text-white">
                                    <Power className="w-4 h-4 mr-2" /> Power On Virtual Machine
                                </Button>
                            </div>
                        )}
                        {status !== 'off' && (
                            <div className="text-green-400 space-y-1" ref={logContainerRef}>
                                {vmLog.map((log, i) => <div key={i}>{log}</div>)}
                                {status === 'running' && <div className="animate-pulse">_</div>}
                            </div>
                        )}
                    </div>
                </Card>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t6" />
            </div>
        </div>
    );
}


function Topic7_CloudProviders() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="text-center pt-10 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
                    <Building className="w-4 h-4" />
                    <span>Topic 7: Cloud Providers</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    The Titans of the Internet
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    You don't build your own power plant. You just plug into theirs.
                    Amazon, Microsoft, and Google own massive data centers that run most of the internet. We call them the 'Big Three'.
                </p>
                {/* IMAGE CONTAINER: MAP */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group">
                    {/* Simplified World Map Visual */}
                    <div className="relative w-3/4 h-3/4 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center">
                        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                        <div className="absolute top-[35%] left-[22%] w-3 h-3 bg-orange-500 rounded-full"></div>

                        <div className="absolute top-[25%] right-[25%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-75"></div>
                        <div className="absolute top-[28%] right-[28%] w-3 h-3 bg-blue-500 rounded-full"></div>

                        <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-green-500 rounded-full animate-ping delay-100"></div>
                        <div className="absolute top-[55%] right-[18%] w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-xs font-bold">
                        <span className="text-orange-500 flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> AWS</span>
                        <span className="text-blue-500 flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Azure</span>
                        <span className="text-green-500 flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Google Cloud</span>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE ANALOGY */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Think of Electricity</h2>
                    <p className="text-lg text-muted-foreground">
                        100 years ago, factories built their own power generators. It was expensive and messy.
                        Today, they just pay the electric company for what they use.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Cloud Providers are the <strong>"Electric Companies"</strong> of computing. You plug in, pay a bill, and get unlimited power.
                    </p>
                </div>
                {/* IMAGE CONTAINER: FACTORY VS SOCKET */}
                <div className="bg-card border border-border rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                    <div className="grid grid-cols-2 gap-8 items-center w-full max-w-lg">
                        <div className="text-center opacity-50">
                            <Building className="w-16 h-16 mx-auto mb-2 text-muted-foreground" />
                            <span className="text-xs">Old Way: Private Generator</span>
                        </div>
                        <div className="text-center relative">
                            <ArrowRight className="absolute -left-6 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary">
                                <Power className="w-12 h-12 text-primary" />
                            </div>
                            <span className="text-sm font-bold mt-2 block text-primary">New Way: Just Plug In</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: MEET THE BIG THREE */}
            <section className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Meet the "Big Three"</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* AWS */}
                    <Card className="p-6 border-t-4 border-t-orange-500 hover:shadow-lg transition-shadow">
                        <div className="h-12 flex items-center mb-4">
                            <h3 className="text-xl font-bold text-orange-500">AWS</h3>
                        </div>
                        <p className="text-sm font-bold mb-2">Amazon Web Services</p>
                        <p className="text-sm text-muted-foreground mb-4">The First Mover.</p>
                        <p className="text-xs text-muted-foreground">Market Leader. Used by Netflix, NASA, and huge corporations. Known for having the most features.</p>
                    </Card>
                    {/* AZURE */}
                    <Card className="p-6 border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
                        <div className="h-12 flex items-center mb-4">
                            <h3 className="text-xl font-bold text-blue-500">Azure</h3>
                        </div>
                        <p className="text-sm font-bold mb-2">Microsoft Azure</p>
                        <p className="text-sm text-muted-foreground mb-4">The Enterprise Choice.</p>
                        <p className="text-xs text-muted-foreground">Best for companies already using Windows and Office. Huge in the corporate world.</p>
                    </Card>
                    {/* GOOGLE CLOUD */}
                    <Card className="p-6 border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
                        <div className="h-12 flex items-center mb-4">
                            <h3 className="text-xl font-bold text-green-500">Google Cloud</h3>
                        </div>
                        <p className="text-sm font-bold mb-2">GCP</p>
                        <p className="text-sm text-muted-foreground mb-4">The Innovator.</p>
                        <p className="text-xs text-muted-foreground">King of Data and AI. Powers Spotify, Snapchat, and Pokemon GO.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION: DEEP DIVE - REGIONS & ZONES */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center bg-muted/30 p-8 rounded-xl border border-border">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">Technical Deep Dive</Badge>
                    <h2 className="text-2xl font-bold">The Physics of "Availability Zones"</h2>
                    <p className="text-muted-foreground">
                        A Cloud "Region" isn't just one building. It's a cluster of isolated data centers (Zones) miles apart.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Separate Power:</strong> If Zone A loses power, Zone B stays on.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span><strong>Flood Safe:</strong> Zones are far enough apart that a flood usually won't hit both.</span>
                        </li>
                    </ul>
                </div>
                {/* VISUAL: REGIONS DIAGRAM */}
                <div className="bg-card p-6 rounded-lg border border-border relative">
                    <div className="text-center mb-6 font-bold text-sm text-foreground">Region: US-EAST (Virginia)</div>
                    <div className="flex justify-between items-center gap-2">
                        {['Zone A', 'Zone B', 'Zone C'].map((zone, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full aspect-square bg-slate-800 rounded flex items-center justify-center border border-slate-700 relative group">
                                    <Server className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                                    <div className="absolute -bottom-3 bg-card px-2 text-[10px] border border-border rounded-full flex items-center gap-1 shadow-sm">
                                        <Zap className="w-3 h-3 text-yellow-500" /> Grid {String.fromCharCode(65 + i)}
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-bold text-muted-foreground">{zone}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/20 -z-10"></div>
                </div>
            </section>

            {/* SECTION: DEEP DIVE - CDN */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* VISUAL: CDN MAP */}
                <div className="bg-card p-8 rounded-xl border border-border flex items-center justify-center min-h-[250px] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                    <div className="flex items-center justify-between w-full relative z-10">
                        <div className="text-center opacity-50">
                            <Database className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                            <span className="text-xs block">Origin Server <br />(USA)</span>
                        </div>
                        <div className="flex-1 h-0.5 bg-slate-700 mx-4 relative">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-red-400">Slow (200ms)</span>
                        </div>
                        <div className="text-center relative">
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary animate-ping rounded-full"></div>
                            <Server className="w-16 h-16 mx-auto mb-2 text-primary" />
                            <span className="text-xs font-bold block text-primary">Edge Location <br />(Mumbai)</span>
                        </div>
                        <div className="flex-1 h-0.5 bg-primary mx-4 relative">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-green-400 font-bold">Fast (20ms)</span>
                        </div>
                        <div className="text-center">
                            <Smartphone className="w-10 h-10 mx-auto mb-2 text-foreground" />
                            <span className="text-xs block">You</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">Technical Deep Dive</Badge>
                    <h2 className="text-2xl font-bold">The Speed of "Edge Locations"</h2>
                    <p className="text-muted-foreground">
                        Light only travels so fast. If the server is in USA and you are in India, it's slow.
                    </p>
                    <p className="text-muted-foreground">
                        <strong>Solution: Content Delivery Network (CDN).</strong> <br />
                        Cloud providers copy your Netflix movie to a small "Edge Server" in your local city. You download from there, almost instantly.
                    </p>
                </div>
            </section>

            {/* SECTION 3: DEPLOY SIMULATOR */}
            <section className="container mx-auto px-4 max-w-2xl">
                <Card className="p-8 bg-slate-950 border-slate-800 text-slate-200">
                    <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-green-400" /> Server Launchpad
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">Simulate renting a computer from a data center.</p>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="border-slate-700 hover:bg-slate-800 justify-start h-auto py-2 text-left">
                                <span className="block text-xs text-slate-500">Region</span>
                                <span className="block font-mono text-sm text-orange-400">us-east-1 (Virginia)</span>
                            </Button>
                            <Button variant="outline" className="border-slate-700 hover:bg-slate-800 justify-start h-auto py-2 text-left">
                                <span className="block text-xs text-slate-500">Size</span>
                                <span className="block font-mono text-sm text-blue-400">2 CPU / 4GB RAM</span>
                            </Button>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-mono rounded-md py-6">
                            LAUNCH SERVER 🚀
                        </Button>
                        <div className="font-mono text-xs text-slate-500 p-2 bg-black/50 rounded">
                            {'>'} Waiting for user command...
                        </div>
                    </div>
                </Card>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t7" />
            </div>
        </div>
    );
}

// --- TOPIC 8: BACKUPS IN CLOUD ---
function Topic8_CloudBackups() {
    const [historyStep, setHistoryStep] = useState(2); // 0=Draft, 1=V2, 2=Final

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="text-center pt-10 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
                    <RotateCcw className="w-4 h-4" />
                    <span>Topic 8: Backups in Cloud</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    The Ultimate "Undo" Button
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Files get deleted. Coffee gets spilled. The Cloud remembers.
                    A backup isn't just a copy. It's a time machine that lets you travel back to before the disaster happened.
                </p>
                {/* IMAGE CONTAINER: BROKEN LAPTOP */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Laptop className="w-24 h-24 text-slate-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl">🔥</span>
                            </div>
                        </div>
                        <div className="h-16 w-1 border-l-2 border-dashed border-primary animate-bounce mt-2"></div>
                        <Cloud className="w-24 h-24 text-primary" />
                        <p className="mt-4 font-bold text-primary">Your Data is Safe Up Here</p>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE 3-2-1 RULE */}
            <section className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">The Golden Rule: 3-2-1</h2>
                    <p className="text-muted-foreground">Pros use this simple strategy to ensure their data is invincible.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 flex flex-col items-center text-center border-b-4 border-b-blue-500">
                        <div className="text-6xl font-black text-slate-200 mb-4">3</div>
                        <h3 className="font-bold text-lg mb-2">Copies of Data</h3>
                        <p className="text-sm text-muted-foreground">Original + 2 Backups. Never rely on just one file.</p>
                    </Card>
                    <Card className="p-8 flex flex-col items-center text-center border-b-4 border-b-purple-500">
                        <div className="text-6xl font-black text-slate-200 mb-4">2</div>
                        <h3 className="font-bold text-lg mb-2">Different Media</h3>
                        <p className="text-sm text-muted-foreground">e.g., Hard Drive + Cloud. If your house burns down, the hard drive melts too.</p>
                    </Card>
                    <Card className="p-8 flex flex-col items-center text-center border-b-4 border-b-green-500">
                        <div className="text-6xl font-black text-slate-200 mb-4">1</div>
                        <h3 className="font-bold text-lg mb-2">Offsite</h3>
                        <p className="text-sm text-muted-foreground">Keep one copy far away (The Cloud). Safe from local disasters.</p>
                    </Card>
                </div>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-muted rounded-xl">
                        <h4 className="font-bold flex items-center gap-2 mb-2"><RotateCcw className="w-4 h-4 text-primary" /> Auto-Backups</h4>
                        <p className="text-sm text-muted-foreground">Set it and forget it. Your phone uploads photos automatically while you sleep. No human memory required.</p>
                    </div>
                    <div className="p-4 bg-muted rounded-xl">
                        <h4 className="font-bold flex items-center gap-2 mb-2"><Search className="w-4 h-4 text-primary" /> Version History</h4>
                        <p className="text-sm text-muted-foreground">The best feature. It saves every 'Save'. You can restore the version of your essay from 10:00 AM, even if you deleted everything at 10:05 AM.</p>
                    </div>
                </div>
            </section>

            {/* SECTION: DEEP DIVE - GEO-REDUNDANCY */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center bg-muted/30 p-8 rounded-xl border border-border">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">Technical Deep Dive</Badge>
                    <h2 className="text-2xl font-bold">Surviving a Disaster: Geo-Redundancy</h2>
                    <p className="text-muted-foreground">
                        Standard backups survive a broken drive. <strong>Geo-Redundant Storage (GRS)</strong> survives a broken city.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Data is asynchronously replicated to a "Paired Region" hundreds of miles away. Even if an entire region goes mostly offline due to a hurricane, your data is safe in the next state.
                    </p>
                </div>
                {/* VISUAL: MAP PAIRS */}
                <div className="bg-card p-6 rounded-lg border border-border flex items-center justify-between gap-4">
                    <div className="text-center">
                        <Map className="w-12 h-12 text-slate-500 mx-auto opacity-50" />
                        <div className="font-bold text-sm mt-2">Primary Region</div>
                        <div className="text-xs text-red-400 font-bold animate-pulse">⚠️ Earthquake Risk</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="h-0.5 w-full bg-primary/50 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-2 text-[10px] text-muted-foreground border border-border rounded-full">
                                Async Copy
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary mt-1" />
                    </div>
                    <div className="text-center">
                        <Home className="w-12 h-12 text-green-500 mx-auto" />
                        <div className="font-bold text-sm mt-2">Paired Region</div>
                        <div className="text-xs text-green-500 font-bold">✅ Safe Haven</div>
                    </div>
                </div>
            </section>

            {/* SECTION: DEEP DIVE - ENCRYPTION */}
            <section className="container mx-auto px-4 max-w-4xl">
                <div className="bg-card p-8 rounded-xl border border-border flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <Badge variant="outline" className="border-primary text-primary">Technical Deep Dive</Badge>
                        <h2 className="text-2xl font-bold">Encryption: The Digital Bank Vault</h2>
                        <p className="text-muted-foreground">
                            How do we keep the data safe from hackers? We lock it.
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg"><Truck className="w-4 h-4 text-blue-500" /></div>
                                <span className="text-muted-foreground"><strong>In Transit:</strong> Wrapped in TLS 1.3 (like an armored car) while moving over the internet.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg"><Lock className="w-4 h-4 text-green-500" /></div>
                                <span className="text-muted-foreground"><strong>At Rest:</strong> Locked with AES-256 bit encryption on the disk. Mathematically impossible to crack.</span>
                            </li>
                        </ul>
                    </div>
                    {/* VISUAL: ENCRYPTION TUNNEL */}
                    <div className="flex items-center gap-2 md:gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="text-center">
                            <Laptop className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
                            <div className="text-[10px] mt-1">You</div>
                        </div>
                        <div className="flex items-center text-slate-400">
                            <div className="h-1 w-4 md:w-8 bg-current"></div>
                            <Lock className="w-4 h-4 mx-1 text-primary" />
                            <div className="h-1 w-4 md:w-8 bg-current"></div>
                        </div>
                        <div className="text-center">
                            <HardDrive className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
                            <div className="text-[10px] mt-1">Cloud Disk</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: VERSION HISTORY SIMULATOR */}
            <section className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-2xl font-bold mb-8">Time Travel: Try it Out</h2>
                <Card className="p-8 bg-card border border-border">
                    <div className="flex justify-between items-center mb-8 relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -z-10"></div>

                        {['Draft (9AM)', 'Edit (10AM)', 'Final (11AM)'].map((label, i) => (
                            <button
                                key={i}
                                onClick={() => setHistoryStep(i)}
                                className={`w-4 h-4 rounded-full ring-4 ring-card transition-all ${historyStep === i ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground'}`}
                            >
                                <div className="absolute mt-6 -ml-4 text-xs font-bold whitespace-nowrap text-muted-foreground">{label}</div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-lg min-h-[150px] flex items-center justify-center font-serif italic text-lg shadow-inner">
                        {historyStep === 0 && <span className="text-slate-400">"Once upon a time..." (Just started typing)</span>}
                        {historyStep === 1 && <span className="text-slate-500">"Once upon a time, there was a great wizard who lived in the cloud..." (Added details)</span>}
                        {historyStep === 2 && <span className="text-primary font-bold">"Once upon a time, there was a great wizard who lived in the cloud, safeguarding all the world's data." (Finished!)</span>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Click the dots to go back in time.</p>
                </Card>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t8" />
            </div>
        </div>
    );
}

// --- TOPIC 9: SECURITY IN CLOUD ---
// --- TOPIC 9: SECURITY IN CLOUD ---
function Topic9_CloudSecurity() {
    const [selectedRole, setSelectedRole] = useState<'admin' | 'editor' | 'viewer' | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleRoleCheck = (role: 'admin' | 'editor' | 'viewer') => {
        setSelectedRole(role);
        if (role === 'admin') setFeedback("❌ ERROR: Too Risky! An Intern shouldn't have full control.");
        else if (role === 'editor') setFeedback("❌ ERROR: Unsafe. Interns shouldn't be able to delete files.");
        else setFeedback("✅ CORRECT! 'Least Privilege' means giving only read access.");
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="text-center pt-10 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
                    <Lock className="w-4 h-4" />
                    <span>Topic 9: Security in Cloud</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Who Holds the Keys?
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Security isn't about building higher walls. It's about checking ID cards.
                    In the cloud, we use Roles, Permissions, and MFA to ensure only the right people get in.
                </p>
                {/* IMAGE CONTAINER: CASTLE VISUAL */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="relative w-full h-full flex items-center justify-center bg-sky-950/20">
                        {/* Castle Wall */}
                        <div className="absolute bottom-0 w-3/4 h-1/2 bg-slate-800 border-t-8 border-slate-600 rounded-t-xl flex justify-center">
                            {/* Gate */}
                            <div className="w-1/3 h-full bg-slate-900 border-x-4 border-slate-700 relative overflow-hidden">
                                <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8))]"></div>
                                <div className="absolute inset-0 grid grid-cols-4 gap-1">
                                    {[...Array(20)].map((_, i) => <div key={i} className="bg-slate-800"></div>)}
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 flex gap-12 w-full justify-center items-end">
                            <div className="flex flex-col items-center animate-bounce">
                                <div className="bg-white p-2 rounded-full mb-2"><UserCheck className="text-primary w-6 h-6" /></div>
                                <span className="bg-primary px-2 py-1 rounded text-[10px] text-primary-foreground font-bold">User</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-slate-700 p-2 rounded-full mb-2 border-2 border-red-500"><Shield className="text-red-500 w-8 h-8" /></div>
                                <span className="bg-red-500 px-2 py-1 rounded text-[10px] text-white font-bold">Firewall</span>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                                <div className="bg-yellow-500/20 p-2 rounded-full mb-2 border-2 border-yellow-500"><Database className="text-yellow-500 w-6 h-6" /></div>
                                <span className="text-[10px] font-bold text-yellow-500">Data</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: IAM ROLES */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">The Castle Hierarchy (Roles)</h2>
                    <p className="text-lg text-muted-foreground">
                        Not everyone is the King. In the cloud, this is called <strong>IAM (Identity Access Management)</strong>.
                        You assign different roles to different people based on what they need to do.
                    </p>
                </div>
                <div className="space-y-4">
                    <Card className="p-4 bg-red-500/10 border-red-500/20 flex items-center gap-4">
                        <div className="p-2 bg-red-500 rounded text-white"><Key className="w-5 h-5" /></div>
                        <div>
                            <h3 className="font-bold text-red-500">Admin (The King)</h3>
                            <p className="text-xs text-muted-foreground">Can delete everything. Full Access.</p>
                        </div>
                    </Card>
                    <Card className="p-4 bg-blue-500/10 border-blue-500/20 flex items-center gap-4 ml-8">
                        <div className="p-2 bg-blue-500 rounded text-white"><FileText className="w-5 h-5" /></div>
                        <div>
                            <h3 className="font-bold text-blue-500">Editor (The Knight)</h3>
                            <p className="text-xs text-muted-foreground">Can edit files, but not delete the server.</p>
                        </div>
                    </Card>
                    <Card className="p-4 bg-green-500/10 border-green-500/20 flex items-center gap-4 ml-16">
                        <div className="p-2 bg-green-500 rounded text-white"><Eye className="w-5 h-5" /></div>
                        <div>
                            <h3 className="font-bold text-green-500">Viewer (The Villager)</h3>
                            <p className="text-xs text-muted-foreground">Can only look. Cannot touch or change anything.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: MFA */}
            <section className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">The "Two-Key" Rule (MFA)</h2>
                    <p className="text-muted-foreground">
                        Nuclear launch codes need two keys turned at once. Your cloud account needs two proofs of ID.
                    </p>
                </div>
                <Card className="p-8 flex flex-col md:flex-row items-center justify-center gap-8 bg-card border border-border">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <Key className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-bold">1. Password</h3>
                        <p className="text-xs text-muted-foreground">"Something you know"</p>
                    </div>
                    <Plus className="w-8 h-8 text-muted-foreground" />
                    <div className="text-center">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <Smartphone className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-bold">2. Phone Code</h3>
                        <p className="text-xs text-muted-foreground">"Something you have"</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-green-500" />
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="font-bold text-green-500">Access Granted</h3>
                    </div>
                </Card>
            </section>

            {/* SECTION: DEEP DIVE - LEAST PRIVILEGE */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center bg-muted/30 p-8 rounded-xl border border-border">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">Technical Deep Dive</Badge>
                    <h2 className="text-2xl font-bold">Principle of Least Privilege</h2>
                    <p className="text-muted-foreground">
                        Security Rule #1: Give users the <strong>MINIMUM</strong> access they need to do their job.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        If an intern only needs to read a manual, do NOT make them an Admin. If their account gets hacked, the hacker could delete the entire company database. Limiting access limits damage.
                    </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="flex justify-center -space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-red-500 border-4 border-card z-30 flex items-center justify-center text-white font-bold opacity-20">A</div>
                        <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-card z-20 flex items-center justify-center text-white font-bold opacity-20">E</div>
                        <div className="w-12 h-12 rounded-full bg-green-500 border-4 border-card z-10 flex items-center justify-center text-white font-bold ring-4 ring-green-500 shadow-xl scale-110">V</div>
                    </div>
                    <p className="font-bold text-green-500">Safe Choice: Viewer</p>
                    <p className="text-xs text-muted-foreground mt-1">"He just needs to look."</p>
                </div>
            </section>

            {/* SECTION 4: INTERACTIVE SIMULATOR */}
            <section className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-2xl font-bold mb-8 text-center">Access Control Simulator</h2>
                <Card className="p-8 bg-card border border-border">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="text-xl">👨‍🎓</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">User: Intern Bob</h3>
                            <p className="text-sm text-muted-foreground">Task: Needs to read the manual, but NOT edit it.</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm font-bold mb-2">Assign Role:</p>

                        <button
                            onClick={() => handleRoleCheck('admin')}
                            className={`w-full p-4 rounded-lg border text-left flex items-center justify-between transition-all ${selectedRole === 'admin' ? 'border-red-500 bg-red-500/10' : 'border-border hover:bg-muted'}`}
                        >
                            <div className="flex items-center gap-3">
                                <Key className="w-4 h-4 text-red-500" />
                                <span className="font-bold">Admin</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Full Control</span>
                        </button>

                        <button
                            onClick={() => handleRoleCheck('editor')}
                            className={`w-full p-4 rounded-lg border text-left flex items-center justify-between transition-all ${selectedRole === 'editor' ? 'border-blue-500 bg-blue-500/10' : 'border-border hover:bg-muted'}`}
                        >
                            <div className="flex items-center gap-3">
                                <FileText className="w-4 h-4 text-blue-500" />
                                <span className="font-bold">Editor</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Can Edit/Delete Files</span>
                        </button>

                        <button
                            onClick={() => handleRoleCheck('viewer')}
                            className={`w-full p-4 rounded-lg border text-left flex items-center justify-between transition-all ${selectedRole === 'viewer' ? 'border-green-500 bg-green-500/10 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'border-border hover:bg-muted'}`}
                        >
                            <div className="flex items-center gap-3">
                                <Eye className="w-4 h-4 text-green-500" />
                                <span className="font-bold">Viewer</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Read Only</span>
                        </button>
                    </div>

                    {feedback && (
                        <div className={`mt-6 p-4 rounded-lg font-bold text-center animate-in fade-in slide-in-from-bottom-2 ${feedback.includes('CORRECT') ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                            {feedback}
                        </div>
                    )}
                </Card>
            </section>

            {/* SECTION: INFORMATIVE - SHARED RESPONSIBILITY */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-card p-8 rounded-xl border border-border flex flex-col justify-between h-full">
                    <div className="text-center mb-6">
                        <Handshake className="w-12 h-12 text-primary mx-auto mb-2" />
                        <h3 className="text-xl font-bold">The Shared Responsibility Model</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg border border-border">
                            <div className="flex items-center gap-2 mb-2 font-bold text-sm text-foreground">
                                <Users className="w-4 h-4 text-orange-500" /> Your Job (Top Layer)
                            </div>
                            <ul className="text-xs text-muted-foreground list-disc list-inside">
                                <li>Your Data (Encryption)</li>
                                <li>Who you let in (Roles)</li>
                                <li>Strong Passwords</li>
                            </ul>
                        </div>
                        <div className="flex justify-center text-muted-foreground text-xs italic">
                            🤝 Security is a partnership
                        </div>
                        <div className="p-4 bg-muted rounded-lg border border-border">
                            <div className="flex items-center gap-2 mb-2 font-bold text-sm text-foreground">
                                <Cloud className="w-4 h-4 text-blue-500" /> Provider's Job (Bottom Layer)
                            </div>
                            <ul className="text-xs text-muted-foreground list-disc list-inside">
                                <li>Physical Security (Guards)</li>
                                <li>Hardware Maintenance</li>
                                <li>Global Network Defense</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">Key Concept</Badge>
                    <h2 className="text-2xl font-bold">You Lock Your Own Door</h2>
                    <p className="text-muted-foreground">
                        Amazon will stop a thief from stealing the actual physical server computer.
                    </p>
                    <p className="text-muted-foreground">
                        But they <strong>cannot</strong> stop your intern from deleting your database if you gave them the password.
                        The cloud provider protects the "Cloud", you protect what's "IN the Cloud".
                    </p>
                </div>
            </section>

            {/* SECTION: INFORMATIVE - DDOS */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center bg-muted/30 p-8 rounded-xl border border-border">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-red-500 text-red-500">Attack Type</Badge>
                    <h2 className="text-2xl font-bold">What is a "DDoS" Attack?</h2>
                    <p className="text-muted-foreground">
                        Distributed Denial of Service. Imagine 100 fake customers crowding into a small shop so real customers can't get inside.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Hackers use millions of hijacked computers to flood a server with fake traffic until it crashes. Cloud providers have massive "Shields" to absorb this impact.
                    </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border overflow-hidden relative">
                    <div className="flex items-center justify-between relative z-10">
                        <div className="space-y-2">
                            <div className="px-2 py-1 bg-red-500 text-white text-[10px] rounded font-bold animate-pulse flex items-center gap-1"><AlertOctagon className="w-3 h-3" /> FAKE TRAFFIC</div>
                            <div className="px-2 py-1 bg-red-500 text-white text-[10px] rounded font-bold animate-pulse delay-75 flex items-center gap-1"><AlertOctagon className="w-3 h-3" /> FAKE TRAFFIC</div>
                        </div>
                        <div className="h-24 w-1 bg-slate-700 mx-4 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full ring-4 ring-blue-500/20 z-20">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div className="text-center">
                            <Server className="w-10 h-10 text-green-500 mx-auto" />
                            <span className="text-[10px] text-green-500 font-bold block mt-1">Safe Server</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t9" />
            </div>
        </div >
    );
}

// --- TOPIC 10: ADVANTAGES & LIMITS ---
// --- TOPIC 10: ADVANTAGES & LIMITS ---
function Topic10_AdvantageLimits() {
    const [calcScenario, setCalcScenario] = useState<{ choice: 'buy' | 'cloud' | null, feedback: string | null }>({ choice: null, feedback: null });

    const handleCalc = (choice: 'buy' | 'cloud') => {
        if (choice === 'buy') {
            setCalcScenario({
                choice: 'buy',
                feedback: "❌ EXPENSIVE CHOICE! You paid $5,100 for a server you only needed for one month. That's a waste of $5,050."
            });
        } else {
            setCalcScenario({
                choice: 'cloud',
                feedback: "✅ SMART CHOICE! You only paid $50. No wasted hardware. That's the power of the cloud."
            });
        }
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="text-center pt-10 pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
                    <Scale className="w-4 h-4" />
                    <span>Topic 10: Advantages vs Limitations</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    The Great Balancing Act
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Cloud is powerful, but it's not perfect.
                    For every superpower (like infinite storage), there is a kryptonite (like needing the internet).
                </p>
                {/* IMAGE CONTAINER: SCALE VISUAL */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group">
                    {/* Scale Base */}
                    <div className="relative w-1/2 h-1/2 flex justify-center items-end">
                        <div className="w-2 h-32 bg-slate-400"></div>
                        <div className="absolute top-0 w-3/4 h-2 bg-slate-400 rotate-[-5deg] transition-transform duration-1000 origin-center animate-pulse"></div>
                        {/* Left Pan (Heavy/Pros) */}
                        <div className="absolute top-2 left-0 w-24 h-24 flex flex-col items-center animate-bounce delay-700">
                            <div className="h-12 w-0.5 bg-slate-300"></div>
                            <div className="w-full h-12 bg-slate-700 rounded-b-full border-t border-slate-500 flex items-center justify-center">
                                <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg border-2 border-yellow-600"></div>
                            </div>
                            <span className="text-xs font-bold text-green-500 mt-2">Benefits</span>
                        </div>
                        {/* Right Pan (Light/Cons) */}
                        <div className="absolute -top-4 right-0 w-24 h-24 flex flex-col items-center animate-bounce">
                            <div className="h-12 w-0.5 bg-slate-300"></div>
                            <div className="w-full h-12 bg-slate-700 rounded-b-full border-t border-slate-500 flex items-center justify-center">
                                <div className="w-6 h-6 bg-slate-500 rounded animate-spin"></div>
                            </div>
                            <span className="text-xs font-bold text-red-500 mt-2">Risks</span>
                        </div>
                        <div className="absolute bottom-0 w-32 h-4 bg-slate-600 rounded-t-full"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PROS (SUPERPOWERS) */}
            <section className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-2xl font-bold mb-8 text-center text-green-500">The Superpowers (Pros)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 border-l-4 border-l-green-500 bg-green-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-green-500/20 text-green-500"><DollarSign className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Cost Savings</h3>
                        </div>
                        <p className="text-muted-foreground">"Pay for what you use. Stop buying servers." No huge upfront costs.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-500 bg-green-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-green-500/20 text-green-500"><TrendingUp className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Scalability</h3>
                        </div>
                        <p className="text-muted-foreground">"Grow from 1 user to 1 million instantly." Netflix handles millions of streams at once because of this.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-500 bg-green-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-green-500/20 text-green-500"><Globe className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Availability</h3>
                        </div>
                        <p className="text-muted-foreground">"Access from anywhere on Earth." Work from a café, a plane, or your bed.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-500 bg-green-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-green-500/20 text-green-500"><Zap className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Speed</h3>
                        </div>
                        <p className="text-muted-foreground">"Deploy in minutes, not months." Start a new company today.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: CONS (KRYPTONITE) */}
            <section className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-2xl font-bold mb-8 text-center text-red-500">The Kryptonite (Cons)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 border-l-4 border-l-red-500 bg-red-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-red-500/20 text-red-500"><WifiOff className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Internet Dependent</h3>
                        </div>
                        <p className="text-muted-foreground">"No WiFi = No Data. You are offline." If your internet cuts out, you can't work.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-red-500 bg-red-500/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-red-500/20 text-red-500"><Eye className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold">Privacy Concerns</h3>
                        </div>
                        <p className="text-muted-foreground">"You are trusting someone else." The government or hackers could potentially peek at your data.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION: DEEP DIVE - VENDOR LOCK-IN */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center bg-muted/30 p-8 rounded-xl border border-border">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">Technical Deep Dive</Badge>
                    <h2 className="text-2xl font-bold">The "Hotel California" Effect</h2>
                    <p className="text-muted-foreground">
                        Risk: <strong>Vendor Lock-in</strong>.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Once you build everything specifically for AWS, it is very hard and expensive to move to Azure. The code is different. The tools are different. "You can check out any time you like, but you can never leave."
                    </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500/5"></div>
                    <div className="text-center relative z-10 p-4 border-2 border-dashed border-orange-500 rounded-xl">
                        <Building className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                        <span className="font-bold text-orange-500">Vendor Ecosystem</span>
                        <div className="mt-2 text-xs bg-card px-2 py-1 rounded shadow text-muted-foreground">Moving Cost: $$$$$</div>
                    </div>
                </div>
            </section>



            {/* SECTION: INFORMATIVE - CAPEX vs OPEX */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-green-500 text-green-500">Business 101</Badge>
                    <h2 className="text-2xl font-bold">Renting vs Buying (CapEx vs OpEx)</h2>
                    <p className="text-muted-foreground">
                        In the old days, starting a tech company meant buying $50,000 of servers (<strong>CapEx</strong>). If you failed, you lost that money.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        In the cloud, you just rent power monthly (<strong>OpEx</strong>). If you fail, you just cancel the subscription. It lowers the risk for new businesses.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Card className="flex-1 p-6 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 border-2 text-center">
                        <div className="text-3xl mb-2">🏠</div>
                        <h3 className="font-bold text-red-600 mb-1">CapEx</h3>
                        <div className="text-xs text-muted-foreground">Buying a House</div>
                        <div className="text-xs font-bold mt-2">Huge Upfront $$$</div>
                    </Card>
                    <Card className="flex-1 p-6 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900 border-2 text-center">
                        <div className="text-3xl mb-2">🏢</div>
                        <h3 className="font-bold text-green-600 mb-1">OpEx</h3>
                        <div className="text-xs text-muted-foreground">Renting Apt</div>
                        <div className="text-xs font-bold mt-2">Monthly Fee $</div>
                    </Card>
                </div>
            </section>

            {/* SECTION: INFORMATIVE - GREEN CLOUD */}
            <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center bg-muted/30 p-8 rounded-xl border border-border">
                <div className="text-center relative">
                    <div className="absolute top-0 right-10 animate-bounce delay-1000">☀️</div>
                    <Cloud className="w-32 h-32 text-slate-200 mx-auto" fill="currentColor" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2">
                        <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded bg-slate-700 mx-1"></div>
                            <span className="text-[10px] mt-1">Efficient</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded bg-slate-700 mx-1"></div>
                            <span className="text-[10px] mt-1">Shared</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Badge variant="outline" className="border-green-600 text-green-600">Sustainability</Badge>
                    <h2 className="text-2xl font-bold">Is the Cloud Green?</h2>
                    <p className="text-muted-foreground">
                        Surprisingly, yes. One giant, efficient shared data center wastes less energy than 10,000 messy server closets in individual offices.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Major providers like Google and Microsoft are Carbon Neutral, running on massive solar and wind farms.
                    </p>
                </div>
            </section>

            {/* SECTION 4: INTERACTIVE SIMULATOR */}
            <section className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-2xl font-bold mb-8 text-center">The Cost Calculator</h2>
                <Card className="p-8 bg-card border border-border">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <span className="text-2xl">🧮</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Scenario: Project X</h3>
                            <p className="text-sm text-muted-foreground">You need a powerful server for <strong>1 month only</strong>.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-border">
                            <h4 className="font-bold mb-2">Option A: Buy Server</h4>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                                <li>Hardware: $5,000</li>
                                <li>Setup: 2 Weeks</li>
                                <li>Electric: $100</li>
                                <li className="font-bold text-foreground pt-2">Total: $5,100</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-border">
                            <h4 className="font-bold mb-2">Option B: Use Cloud</h4>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                                <li>Rental: $50 / mo</li>
                                <li>Setup: 5 Mins</li>
                                <li>Electric: $0</li>
                                <li className="font-bold text-foreground pt-2">Total: $50</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="border-red-500/50 hover:bg-red-500/10 hover:text-red-500" onClick={() => handleCalc('buy')}>
                            Pick Option A (Buy)
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-500 text-white" onClick={() => handleCalc('cloud')}>
                            Pick Option B (Cloud)
                        </Button>
                    </div>

                    {calcScenario.feedback && (
                        <div className={`mt-6 p-4 rounded-lg font-bold text-center animate-in fade-in slide-in-from-bottom-2 ${calcScenario.choice === 'cloud' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                            {calcScenario.feedback}
                        </div>
                    )}
                </Card>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={12} currentTopicId="m12-t10" />
            </div>
        </div >
    );
}

// --- HELPER ICONS ---
const KeyIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></svg>
);


// --- MAIN MODULE 12 COMPONENT (ROUTER) ---
function Module12() {
    const { topicId } = useParams();

    // Sidebar sends "1", "2", etc. Router also supports "m12-t1" if sourced elsewhere.
    if (!topicId || topicId === "1" || topicId === "m12-t1") return <Topic1_WhatIsCloud />;
    if (topicId === "2" || topicId === "m12-t2") return <Topic2_CloudDailyLife />;
    if (topicId === "3" || topicId === "m12-t3") return <Topic3_ServiceModels />;
    if (topicId === "4" || topicId === "m12-t4") return <Topic4_DeploymentModels />;
    if (topicId === "5" || topicId === "m12-t5") return <Topic5_CloudStorage />;
    if (topicId === "6" || topicId === "m12-t6") return <Topic6_VirtualMachines />;
    if (topicId === "7" || topicId === "m12-t7") return <Topic7_CloudProviders />;
    if (topicId === "8" || topicId === "m12-t8") return <Topic8_CloudBackups />;
    if (topicId === "9" || topicId === "m12-t9") return <Topic9_CloudSecurity />;
    if (topicId === "10" || topicId === "m12-t10") return <Topic10_AdvantageLimits />;

    // Fallback/Placeholder
    return <Topic1_WhatIsCloud />;
}

export default Module12;

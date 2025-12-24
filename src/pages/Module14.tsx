import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Laptop, Cpu, HardDrive, Activity, AlertTriangle, CheckCircle, XCircle,
    Trash2, RefreshCw, Power, Monitor, Settings, TrendingUp, TrendingDown,
    Zap, Battery, Thermometer, Gauge, BarChart3, ArrowRight, X, Wifi,
    WifiOff, Router, Globe, Network, Terminal, Command, Plug, Server,
    Volume2, VolumeX, Headphones, Mic, MicOff, Radio, Cable,
    Printer, FileX, Shield, ShieldAlert, Virus, Scan, Folder, Package, List,
    History, Cloud, Save, RotateCcw, Clock, Smartphone, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TopicNavigation } from "@/components/TopicNavigation";

// --- TOPIC 1: SLOW COMPUTER ISSUES ---
function Topic1_SlowComputerIssues() {
    // RAM Simulator State
    const [ramApps, setRamApps] = useState([
        { id: '1', name: 'Chrome', usage: 2500, color: 'blue' },
        { id: '2', name: 'VS Code', usage: 1200, color: 'purple' },
        { id: '3', name: 'Spotify', usage: 500, color: 'green' },
    ]);
    const totalRAM = 8000;
    const usedRAM = ramApps.reduce((sum, app) => sum + app.usage, 0);
    const ramPercentage = (usedRAM / totalRAM) * 100;

    // CPU Simulator State
    const [cpuProcesses, setCpuProcesses] = useState([
        { id: '1', name: 'System', usage: 15 },
        { id: '2', name: 'Windows Update', usage: 45 },
        { id: '3', name: 'Chrome', usage: 25 },
    ]);
    const cpuPercentage = cpuProcesses.reduce((sum, p) => sum + p.usage, 0);

    // Storage Simulator State
    const [storageData, setStorageData] = useState({
        videos: 120,
        apps: 45,
        documents: 8,
        system: 50,
        other: 27,
    });
    const totalStorage = 500;
    const usedStorage = Object.values(storageData).reduce((sum, val) => sum + val, 0);
    const storagePercentage = (usedStorage / totalStorage) * 100;

    // Background Apps State
    const [backgroundApps, setBackgroundApps] = useState([
        { id: '1', name: 'Discord', enabled: true, ram: 200, cpu: 5 },
        { id: '2', name: 'Steam', enabled: true, ram: 150, cpu: 10 },
        { id: '3', name: 'Spotify', enabled: false, ram: 0, cpu: 0 },
        { id: '4', name: 'OneDrive', enabled: true, ram: 100, cpu: 2 },
    ]);

    const addRamApp = () => {
        const newApp = {
            id: String(Date.now()),
            name: `App ${ramApps.length + 1}`,
            usage: Math.floor(Math.random() * 1500) + 300,
            color: ['blue', 'purple', 'green', 'orange', 'pink'][Math.floor(Math.random() * 5)],
        };
        setRamApps([...ramApps, newApp]);
    };

    const removeRamApp = (id: string) => {
        setRamApps(ramApps.filter(app => app.id !== id));
    };

    const toggleBackgroundApp = (id: string) => {
        setBackgroundApps(backgroundApps.map(app =>
            app.id === id ? { ...app, enabled: !app.enabled } : app
        ));
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Module 14 • Topic 1
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Slow Computer <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Issues</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Your computer is lagging? Learn to diagnose and fix the four main culprits: RAM, CPU, Storage, and Background Apps.
                        </p>
                    </div>

                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-orange-200 dark:border-orange-800 shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Gauge className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-4">Performance Dashboard</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>CPU</span>
                                            <span className={cpuPercentage > 80 ? "text-red-500 font-bold" : "text-muted-foreground"}>{cpuPercentage}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full ${cpuPercentage > 80 ? 'bg-red-500' : cpuPercentage > 50 ? 'bg-orange-500' : 'bg-green-500'}`}
                                                style={{ width: `${Math.min(cpuPercentage, 100)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>RAM</span>
                                            <span className={ramPercentage > 80 ? "text-red-500 font-bold" : "text-muted-foreground"}>{ramPercentage.toFixed(0)}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full ${ramPercentage > 80 ? 'bg-red-500' : ramPercentage > 50 ? 'bg-orange-500' : 'bg-green-500'}`}
                                                style={{ width: `${ramPercentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Storage</span>
                                            <span className={storagePercentage > 90 ? "text-red-500 font-bold" : "text-muted-foreground"}>{storagePercentage.toFixed(0)}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full ${storagePercentage > 90 ? 'bg-red-500' : storagePercentage > 70 ? 'bg-orange-500' : 'bg-green-500'}`}
                                                style={{ width: `${storagePercentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: RAM USAGE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-700 dark:text-orange-300">Issue 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">High RAM Usage</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            RAM (Random Access Memory) stores running programs temporarily. When RAM is full, your computer uses slower disk storage (swap), causing significant slowdowns.
                        </p>
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-orange-200 dark:border-orange-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Many apps open simultaneously</li>
                                    <li>• Browser with many tabs</li>
                                    <li>• Heavy applications running</li>
                                    <li>• Insufficient RAM capacity</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• System uses slow swap space</li>
                                    <li>• Applications freeze or crash</li>
                                    <li>• Sluggish multitasking</li>
                                    <li>• Overall system slowdown</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Close unused applications</li>
                                    <li>• Restart computer</li>
                                    <li>• Add more RAM modules</li>
                                    <li>• Clear browser cache</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Interactive RAM Monitor */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-orange-500" />
                                Interactive RAM Monitor
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-muted p-4 rounded-lg">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Total RAM Usage</span>
                                        <span className="font-bold">{usedRAM} MB / {totalRAM} MB ({(usedRAM / totalRAM * 100).toFixed(1)}%)</span>
                                    </div>
                                    <div className="w-full bg-background rounded-full h-6 border-2 border-orange-200 dark:border-orange-800 overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-500 via-orange-500 to-red-500 flex">
                                            <div
                                                className={`h-full ${ramPercentage > 80 ? 'bg-red-500' : ramPercentage > 50 ? 'bg-orange-500' : 'bg-green-500'}`}
                                                style={{ width: `${ramPercentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {ramApps.map((app) => (
                                        <div key={app.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full bg-${app.color}-500`}></div>
                                                <span className="font-medium">{app.name}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-muted-foreground">{app.usage} MB</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeRamApp(app.id)}
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <X className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button onClick={addRamApp} variant="outline" className="w-full">
                                    <Zap className="w-4 h-4 mr-2" />
                                    Add Application
                                </Button>
                            </div>
                        </Card>

                        {/* Step-by-Step Fix Guide */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-orange-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                                    <p className="font-bold text-lg mb-4">If RAM is high:</p>
                                    <ol className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">1.</span>
                                            <span>Open Task Manager (Ctrl+Shift+Esc)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">2.</span>
                                            <span>Click "Memory" column to sort by usage</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">3.</span>
                                            <span>Select high-memory processes and click "End Task"</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">4.</span>
                                            <span>Close unnecessary browser tabs</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">5.</span>
                                            <span>Restart computer if issues persist</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CPU USAGE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-700 dark:text-orange-300">Issue 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">High CPU Usage</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            The CPU processes all tasks. When it reaches 100% usage, your computer can't handle new requests, causing lag, fan noise, and overheating.
                        </p>
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-orange-200 dark:border-orange-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Windows updates running</li>
                                    <li>• Heavy applications</li>
                                    <li>• Background processes</li>
                                    <li>• Malware or viruses</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• System lagging/freezing</li>
                                    <li>• Loud fan noise</li>
                                    <li>• Computer overheating</li>
                                    <li>• Slow response to clicks</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• End high CPU processes</li>
                                    <li>• Disable startup programs</li>
                                    <li>• Check for malware</li>
                                    <li>• Pause Windows updates</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Interactive CPU Monitor */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-orange-500" />
                                Interactive CPU Monitor
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-muted p-6 rounded-lg text-center">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <svg className="transform -rotate-90" width="128" height="128">
                                            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted-foreground" />
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke={cpuPercentage > 80 ? '#ef4444' : cpuPercentage > 50 ? '#f97316' : '#22c55e'}
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray={`${(cpuPercentage / 100) * 351.86} 351.86`}
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className={`text-3xl font-bold ${cpuPercentage > 80 ? 'text-red-500' : cpuPercentage > 50 ? 'text-orange-500' : 'text-green-500'}`}>
                                                {cpuPercentage}%
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">CPU Usage</p>
                                </div>
                                <div className="space-y-2">
                                    {cpuProcesses.map((process) => (
                                        <div key={process.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                            <span className="font-medium">{process.name}</span>
                                            <div className="flex items-center gap-3">
                                                <div className="w-24 bg-background rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${process.usage > 50 ? 'bg-red-500' : 'bg-orange-500'}`}
                                                        style={{ width: `${process.usage}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm text-muted-foreground w-12 text-right">{process.usage}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        const newProcess = {
                                            id: String(Date.now()),
                                            name: 'Heavy Task',
                                            usage: Math.floor(Math.random() * 40) + 30,
                                        };
                                        setCpuProcesses([...cpuProcesses, newProcess]);
                                    }}
                                >
                                    <Zap className="w-4 h-4 mr-2" />
                                    Start Heavy Task
                                </Button>
                            </div>
                        </Card>

                        {/* Step-by-Step Fix Guide */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-orange-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                                    <p className="font-bold text-lg mb-4">If CPU is high:</p>
                                    <ol className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">1.</span>
                                            <span>Open Task Manager (Ctrl+Shift+Esc)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">2.</span>
                                            <span>Click "CPU" column to sort by usage</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">3.</span>
                                            <span>Right-click heavy process → "End Task"</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">4.</span>
                                            <span>Go to "Startup" tab, disable unnecessary apps</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">5.</span>
                                            <span>Run antivirus scan to check for malware</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: STORAGE FULL */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-700 dark:text-orange-300">Issue 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Storage Almost Full</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            When storage is less than 10% free, your computer slows down because it can't create temporary files, update properly, or write data efficiently.
                        </p>
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-orange-200 dark:border-orange-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Large video files</li>
                                    <li>• Accumulated downloads</li>
                                    <li>• Cache files building up</li>
                                    <li>• Too many installed programs</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Very slow file writes</li>
                                    <li>• No space for temp files</li>
                                    <li>• Windows updates fail</li>
                                    <li>• System becomes unresponsive</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Delete unused files</li>
                                    <li>• Empty Recycle Bin</li>
                                    <li>• Use Disk Cleanup tool</li>
                                    <li>• Uninstall unused programs</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Storage Visualizer */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <HardDrive className="w-5 h-5 text-orange-500" />
                                Storage Visualizer
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-muted p-6 rounded-lg text-center">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Storage Used</span>
                                        <span className="font-bold">{usedStorage} GB / {totalStorage} GB ({(usedStorage / totalStorage * 100).toFixed(1)}%)</span>
                                    </div>
                                    <div className="relative w-full h-32 bg-background rounded-lg overflow-hidden border-2 border-orange-200 dark:border-orange-800 mb-4">
                                        <div className="absolute bottom-0 left-0 w-full flex">
                                            <div className="bg-purple-500" style={{ height: '100%', width: `${(storageData.videos / totalStorage) * 100}%` }}></div>
                                            <div className="bg-blue-500" style={{ height: '100%', width: `${(storageData.apps / totalStorage) * 100}%` }}></div>
                                            <div className="bg-green-500" style={{ height: '100%', width: `${(storageData.documents / totalStorage) * 100}%` }}></div>
                                            <div className="bg-gray-500" style={{ height: '100%', width: `${(storageData.system / totalStorage) * 100}%` }}></div>
                                            <div className="bg-orange-500" style={{ height: '100%', width: `${(storageData.other / totalStorage) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 bg-purple-500 rounded"></div>
                                            <span>Videos</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{storageData.videos} GB</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                            <span>Apps</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{storageData.apps} GB</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 bg-green-500 rounded"></div>
                                            <span>Documents</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{storageData.documents} GB</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 bg-gray-500 rounded"></div>
                                            <span>System</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{storageData.system} GB</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 bg-orange-500 rounded"></div>
                                            <span>Other</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{storageData.other} GB</span>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        setStorageData({
                                            ...storageData,
                                            videos: Math.max(0, storageData.videos - 20),
                                            other: Math.max(0, storageData.other - 10),
                                        });
                                    }}
                                >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Clean Up Files
                                </Button>
                            </div>
                        </Card>

                        {/* Step-by-Step Fix Guide */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-orange-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                                    <p className="font-bold text-lg mb-4">If storage is full:</p>
                                    <ol className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">1.</span>
                                            <span>Open Disk Cleanup (search in Start menu)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">2.</span>
                                            <span>Select drive, check "Temporary files" and "Recycle Bin"</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">3.</span>
                                            <span>Click "Clean up system files" for more options</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">4.</span>
                                            <span>Go to Settings → Apps, uninstall unused programs</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">5.</span>
                                            <span>Move large files to external drive or cloud</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: BACKGROUND APPS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-700 dark:text-orange-300">Issue 4</Badge>
                        <h2 className="text-4xl font-bold mb-4">Background Apps Draining Resources</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Applications running in the background consume RAM and CPU even when you're not using them, slowing down your computer and draining battery.
                        </p>
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-orange-200 dark:border-orange-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Auto-start programs enabled</li>
                                    <li>• Apps running in background</li>
                                    <li>• Update services active</li>
                                    <li>• Sync services running</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Slower computer startup</li>
                                    <li>• Reduced available RAM</li>
                                    <li>• Increased CPU usage</li>
                                    <li>• Faster battery drain (laptops)</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Disable startup programs</li>
                                    <li>• Close background apps</li>
                                    <li>• Change app settings</li>
                                    <li>• Use Task Manager</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Background App Manager */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-orange-500" />
                                Background App Manager
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    {backgroundApps.map((app) => {
                                        const totalImpact = app.enabled ? app.ram + (app.cpu * 10) : 0;
                                        return (
                                            <div key={app.id} className="p-4 bg-muted rounded-lg">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${app.enabled ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                                            <Activity className={`w-5 h-5 ${app.enabled ? 'text-orange-500' : 'text-gray-400'}`} />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">{app.name}</p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {app.enabled ? `${app.ram} MB RAM, ${app.cpu}% CPU` : 'Disabled'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Button
                                                        variant={app.enabled ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => toggleBackgroundApp(app.id)}
                                                    >
                                                        {app.enabled ? 'Enabled' : 'Disabled'}
                                                    </Button>
                                                </div>
                                                {app.enabled && (
                                                    <div className="mt-2 pt-2 border-t border-border">
                                                        <div className="flex justify-between text-xs text-muted-foreground">
                                                            <span>Impact Score</span>
                                                            <span className="font-bold text-orange-600">{totalImpact}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Total Impact:</span>
                                        <span className="font-bold text-lg text-orange-600">
                                            {backgroundApps
                                                .filter(app => app.enabled)
                                                .reduce((sum, app) => sum + app.ram + (app.cpu * 10), 0)} points
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Step-by-Step Fix Guide */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-orange-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                                    <p className="font-bold text-lg mb-4">If background apps are running:</p>
                                    <ol className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">1.</span>
                                            <span>Open Task Manager (Ctrl+Shift+Esc)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">2.</span>
                                            <span>Click "Startup" tab to see auto-start apps</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">3.</span>
                                            <span>Right-click unnecessary apps → "Disable"</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">4.</span>
                                            <span>Go to "Processes" tab, end background processes</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-orange-600 dark:text-orange-400">5.</span>
                                            <span>Restart computer to apply changes</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* QUICK REFERENCE CARD */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Quick Reference: All Fixes at a Glance</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background/80 p-4 rounded-lg">
                                <p className="font-bold mb-2">RAM High →</p>
                                <p className="text-sm text-muted-foreground">Close apps → Restart</p>
                            </div>
                            <div className="bg-background/80 p-4 rounded-lg">
                                <p className="font-bold mb-2">CPU High →</p>
                                <p className="text-sm text-muted-foreground">End tasks → Check malware</p>
                            </div>
                            <div className="bg-background/80 p-4 rounded-lg">
                                <p className="font-bold mb-2">Storage Full →</p>
                                <p className="text-sm text-muted-foreground">Clean up → Delete files</p>
                            </div>
                            <div className="bg-background/80 p-4 rounded-lg">
                                <p className="font-bold mb-2">Background Apps →</p>
                                <p className="text-sm text-muted-foreground">Disable startup → Manage processes</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t1" />
            </div>
        </div>
    );
}

// --- TOPIC 2: INTERNET TROUBLESHOOTING ---
function Topic2_InternetTroubleshooting() {
    const [isOnline, setIsOnline] = useState(true);
    const [ipConflict, setIpConflict] = useState(false);
    const [dnsWorking, setDnsWorking] = useState(true);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Module 14 • Topic 2
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Internet <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Troubleshooting</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Fix common internet connection issues: router problems, IP conflicts, no internet access, and DNS errors.
                        </p>
                    </div>

                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-blue-200 dark:border-blue-800 shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Wifi className={`w-16 h-16 mx-auto mb-4 ${isOnline ? 'text-blue-500' : 'text-red-500'}`} />
                                    <h3 className="font-bold text-2xl mb-2">Connection Status</h3>
                                    <Badge className={isOnline ? 'bg-green-500' : 'bg-red-500'}>
                                        {isOnline ? 'Connected' : 'Disconnected'}
                                    </Badge>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">WiFi</span>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Internet</span>
                                        {isOnline ? (
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-red-500" />
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Router</span>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 1: ROUTER RESTART */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-blue-500 text-blue-700 dark:text-blue-300">Subtopic 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Router Restart</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Routers manage your internet connection. When they get overloaded or overheated, restarting them fixes most connection issues.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t2-router-restart.jpg"
                            alt="Router restart process showing unplugging and plugging back in"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Router class="w-12 h-12 text-blue-600 mx-auto mb-2" /><p class="font-bold text-blue-900">Router Restart Process</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Router overloaded with devices</li>
                                    <li>• Heat buildup from running 24/7</li>
                                    <li>• Memory leaks in router software</li>
                                    <li>• Too many simultaneous connections</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• No internet connection</li>
                                    <li>• Very slow internet speeds</li>
                                    <li>• Devices keep disconnecting</li>
                                    <li>• Can't access router settings</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Unplug router power cable</li>
                                    <li>• Wait 30 seconds</li>
                                    <li>• Plug power cable back in</li>
                                    <li>• Wait 2-3 minutes for lights</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Router className="w-5 h-5 text-blue-500" />
                                Router Status Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className={`p-6 rounded-lg border-2 ${isOnline ? 'bg-green-50 dark:bg-green-900/20 border-green-200' : 'bg-red-50 dark:bg-red-900/20 border-red-200'}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-bold">Router Status</span>
                                        {isOnline ? (
                                            <Badge className="bg-green-500">Online</Badge>
                                        ) : (
                                            <Badge className="bg-red-500">Offline</Badge>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                                            <span className="text-sm">Power Light</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'}`}></div>
                                            <span className="text-sm">Internet Light</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'}`}></div>
                                            <span className="text-sm">WiFi Light</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        setIsOnline(false);
                                        setTimeout(() => setIsOnline(true), 3000);
                                    }}
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Simulate Router Restart
                                </Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-blue-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-lg mb-4">If router needs restart:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                                        <span>Locate router power cable</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                                        <span>Unplug from power outlet</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                                        <span>Wait 30 seconds (clears memory)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">4.</span>
                                        <span>Plug power cable back in</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">5.</span>
                                        <span>Wait 2-3 minutes for all lights to turn green</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">6.</span>
                                        <span>Test internet connection on device</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 2: IP CONFLICT */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-blue-500 text-blue-700 dark:text-blue-300">Subtopic 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">IP Address Conflict</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            An IP conflict happens when two devices have the same IP address. This causes connection errors and prevents devices from accessing the internet.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t2-ip-conflict.jpg"
                            alt="Two devices showing same IP address causing conflict"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Network class="w-12 h-12 text-blue-600 mx-auto mb-2" /><p class="font-bold text-blue-900">IP Conflict Visualization</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Static IP set manually on device</li>
                                    <li>• DHCP server not working properly</li>
                                    <li>• Router assigning duplicate IPs</li>
                                    <li>• Network configuration error</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Connection errors on devices</li>
                                    <li>• Can't access internet</li>
                                    <li>• Intermittent connectivity</li>
                                    <li>• Network warnings in Windows</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Enable DHCP (automatic IP)</li>
                                    <li>• Restart router to refresh IPs</li>
                                    <li>• Release and renew IP address</li>
                                    <li>• Check router settings</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Network className="w-5 h-5 text-blue-500" />
                                IP Conflict Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className={`p-4 rounded-lg border-2 ${ipConflict ? 'bg-red-50 dark:bg-red-900/20 border-red-200' : 'bg-green-50 dark:bg-green-900/20 border-green-200'}`}>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Device 1 (Laptop)</p>
                                                <p className="text-sm text-muted-foreground font-mono">192.168.1.100</p>
                                            </div>
                                            {ipConflict ? (
                                                <Badge className="bg-red-500">Conflict!</Badge>
                                            ) : (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Device 2 (Phone)</p>
                                                <p className="text-sm text-muted-foreground font-mono">192.168.1.100</p>
                                            </div>
                                            {ipConflict ? (
                                                <Badge className="bg-red-500">Conflict!</Badge>
                                            ) : (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        setIpConflict(true);
                                        setTimeout(() => setIpConflict(false), 2000);
                                    }}
                                >
                                    <AlertTriangle className="w-4 h-4 mr-2" />
                                    Simulate IP Conflict
                                </Button>
                                {ipConflict && (
                                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                                        <p className="text-sm text-red-700 dark:text-red-300">
                                            ⚠️ Two devices have the same IP address! Fix by enabling DHCP or renewing IP.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-blue-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-lg mb-4">If IP conflict detected:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                                        <span>Open Command Prompt (Windows) or Terminal (Mac)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                                        <span>Type: <code className="bg-muted px-1 rounded">ipconfig /release</code></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                                        <span>Type: <code className="bg-muted px-1 rounded">ipconfig /renew</code></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">4.</span>
                                        <span>Go to Settings → Network & Internet</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">5.</span>
                                        <span>Enable "Obtain IP address automatically" (DHCP)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">6.</span>
                                        <span>Restart network adapter or restart computer</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 3: NO INTERNET ACCESS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-blue-500 text-blue-700 dark:text-blue-300">Subtopic 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">No Internet Access</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Connected to WiFi but no internet? This usually means your device can't reach the outside world. Learn how to diagnose and fix it.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t2-no-internet.jpg"
                            alt="WiFi connected but no internet access indicator"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><WifiOff class="w-12 h-12 text-blue-600 mx-auto mb-2" /><p class="font-bold text-blue-900">No Internet Access</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• ISP service outage</li>
                                    <li>• Modem cable unplugged</li>
                                    <li>• Wrong WiFi network connected</li>
                                    <li>• Router not connected to modem</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• WiFi shows "Connected"</li>
                                    <li>• No internet in browser</li>
                                    <li>• Apps can't load content</li>
                                    <li>• Yellow warning on WiFi icon</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Check ISP status website</li>
                                    <li>• Check modem indicator lights</li>
                                    <li>• Restart modem and router</li>
                                    <li>• Verify cable connections</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-blue-500" />
                                Connection Troubleshooter
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg border-2 bg-muted">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">WiFi Connection</span>
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">Internet Access</span>
                                            <XCircle className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">Modem Status</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="text-xs">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        // Simulate troubleshooting
                                    }}
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Run Connection Test
                                </Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-blue-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-lg mb-4">If no internet access:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                                        <span>Check WiFi icon - is it connected?</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                                        <span>Open browser, try loading a website</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                                        <span>Check modem lights - all should be green</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">4.</span>
                                        <span>Restart modem: unplug 30 seconds, plug back</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">5.</span>
                                        <span>Restart router: unplug 30 seconds, plug back</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">6.</span>
                                        <span>Check ISP website for service outages</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">7.</span>
                                        <span>Call ISP if problem persists</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 4: DNS ISSUES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-blue-500 text-blue-700 dark:text-blue-300">Subtopic 4</Badge>
                        <h2 className="text-4xl font-bold mb-4">DNS Issues</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            DNS translates website names (like google.com) into IP addresses. When DNS fails, websites won't load even though you're connected to the internet.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t2-dns-issues.jpg"
                            alt="DNS resolution process showing website name to IP address translation"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Server class="w-12 h-12 text-blue-600 mx-auto mb-2" /><p class="font-bold text-blue-900">DNS Resolution</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• DNS server down or slow</li>
                                    <li>• DNS cache corrupted</li>
                                    <li>• Wrong DNS server configured</li>
                                    <li>• Network firewall blocking DNS</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Websites won't load</li>
                                    <li>• "DNS error" messages</li>
                                    <li>• Very slow website loading</li>
                                    <li>• Timeout errors in browser</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Change to public DNS server</li>
                                    <li>• Flush DNS cache</li>
                                    <li>• Restart network adapter</li>
                                    <li>• Use Google DNS (8.8.8.8)</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Server className="w-5 h-5 text-blue-500" />
                                DNS Resolver Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg border-2 bg-muted">
                                    <div className="mb-4">
                                        <label className="text-sm font-medium mb-2 block">Enter Website URL:</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="google.com"
                                                className="flex-1 px-3 py-2 border rounded-lg bg-background"
                                                defaultValue="google.com"
                                            />
                                            <Button size="sm" onClick={() => setDnsWorking(!dnsWorking)}>
                                                Resolve
                                            </Button>
                                        </div>
                                    </div>
                                    {dnsWorking ? (
                                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
                                            <p className="text-sm font-mono text-green-700 dark:text-green-300">
                                                ✓ Resolved to: 142.250.191.46
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                                            <p className="text-sm text-red-700 dark:text-red-300">
                                                ✗ DNS Error: Unable to resolve
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => setDnsWorking(!dnsWorking)}
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Toggle DNS Status
                                </Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-blue-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-lg mb-4">If DNS issues occur:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                                        <span>Open Settings → Network & Internet</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                                        <span>Click "Change adapter options"</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                                        <span>Right-click WiFi → Properties</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">4.</span>
                                        <span>Select "Internet Protocol Version 4" → Properties</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">5.</span>
                                        <span>Select "Use the following DNS server addresses"</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">6.</span>
                                        <span>Enter: Preferred: 8.8.8.8, Alternate: 8.8.4.4</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">7.</span>
                                        <span>Open Command Prompt, type: <code className="bg-muted px-1 rounded">ipconfig /flushdns</code></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400">8.</span>
                                        <span>Restart computer</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t2" />
            </div>
        </div>
    );
}

// --- TOPIC 3: STARTUP PROBLEMS ---
function Topic3_StartupProblems() {
    const [bootStage, setBootStage] = useState<'power' | 'post' | 'bios' | 'os' | 'error'>('power');
    const [driveDetected, setDriveDetected] = useState(true);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Module 14 • Topic 3
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Startup <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Problems</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Computer won't start? Fix boot errors, BIOS issues, and drive detection problems that prevent your computer from starting properly.
                        </p>
                    </div>

                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-purple-200 dark:border-purple-800 shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Power className={`w-16 h-16 mx-auto mb-4 ${bootStage === 'error' ? 'text-red-500' : 'text-purple-500'}`} />
                                    <h3 className="font-bold text-2xl mb-2">Boot Status</h3>
                                    <Badge className={bootStage === 'error' ? 'bg-red-500' : bootStage === 'os' ? 'bg-green-500' : 'bg-purple-500'}>
                                        {bootStage === 'power' && 'Power On'}
                                        {bootStage === 'post' && 'POST'}
                                        {bootStage === 'bios' && 'BIOS'}
                                        {bootStage === 'os' && 'OS Loading'}
                                        {bootStage === 'error' && 'Error'}
                                    </Badge>
                                </div>
                                <div className="space-y-2">
                                    <div className={`flex items-center gap-2 p-2 rounded ${bootStage === 'power' ? 'bg-purple-100 dark:bg-purple-900/30' : ''}`}>
                                        <div className={`w-2 h-2 rounded-full ${bootStage !== 'power' ? 'bg-green-500' : 'bg-purple-500 animate-pulse'}`}></div>
                                        <span className="text-sm">Power On</span>
                                    </div>
                                    <div className={`flex items-center gap-2 p-2 rounded ${bootStage === 'post' ? 'bg-purple-100 dark:bg-purple-900/30' : ''}`}>
                                        <div className={`w-2 h-2 rounded-full ${bootStage === 'error' || bootStage === 'power' ? 'bg-gray-400' : 'bg-green-500'}`}></div>
                                        <span className="text-sm">POST Check</span>
                                    </div>
                                    <div className={`flex items-center gap-2 p-2 rounded ${bootStage === 'bios' ? 'bg-purple-100 dark:bg-purple-900/30' : ''}`}>
                                        <div className={`w-2 h-2 rounded-full ${bootStage === 'error' || bootStage === 'power' || bootStage === 'post' ? 'bg-gray-400' : 'bg-green-500'}`}></div>
                                        <span className="text-sm">BIOS/UEFI</span>
                                    </div>
                                    <div className={`flex items-center gap-2 p-2 rounded ${bootStage === 'os' ? 'bg-purple-100 dark:bg-purple-900/30' : ''}`}>
                                        <div className={`w-2 h-2 rounded-full ${bootStage === 'os' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                        <span className="text-sm">OS Load</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 1: BOOT ERRORS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-purple-500 text-purple-700 dark:text-purple-300">Subtopic 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Boot Errors</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Boot errors prevent your computer from starting properly. They can show as blue screens, freezing, or error messages during startup.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 dark:border-purple-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t3-boot-errors.jpg"
                            alt="Common boot error screens: blue screen, freeze, black screen"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><AlertTriangle class="w-12 h-12 text-purple-600 mx-auto mb-2" /><p class="font-bold text-purple-900">Boot Error Screens</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-purple-200 dark:border-purple-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Corrupt operating system files</li>
                                    <li>• Hardware component failure</li>
                                    <li>• Driver conflicts</li>
                                    <li>• Failed Windows updates</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Blue Screen of Death (BSOD)</li>
                                    <li>• Computer freezes on startup</li>
                                    <li>• Error codes displayed</li>
                                    <li>• Computer restarts repeatedly</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Use startup repair tool</li>
                                    <li>• Boot from recovery drive</li>
                                    <li>• Check hardware connections</li>
                                    <li>• Start in Safe Mode</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Power className="w-5 h-5 text-purple-500" />
                                Boot Process Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className="p-6 rounded-lg border-2 bg-muted min-h-[200px] flex items-center justify-center">
                                    {bootStage === 'power' && (
                                        <div className="text-center">
                                            <Power className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                                            <p className="font-bold">Power On</p>
                                        </div>
                                    )}
                                    {bootStage === 'post' && (
                                        <div className="text-center">
                                            <Activity className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                                            <p className="font-bold">POST Check</p>
                                        </div>
                                    )}
                                    {bootStage === 'bios' && (
                                        <div className="text-center">
                                            <Settings className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                                            <p className="font-bold">BIOS Loading</p>
                                        </div>
                                    )}
                                    {bootStage === 'os' && (
                                        <div className="text-center">
                                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                                            <p className="font-bold">OS Loading...</p>
                                        </div>
                                    )}
                                    {bootStage === 'error' && (
                                        <div className="text-center">
                                            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-2" />
                                            <p className="font-bold text-red-500">Boot Error!</p>
                                            <p className="text-sm text-muted-foreground mt-2">STOP: 0x0000007B</p>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        const stages: Array<'power' | 'post' | 'bios' | 'os' | 'error'> = ['power', 'post', 'bios', 'os'];
                                        const currentIndex = stages.indexOf(bootStage);
                                        if (currentIndex < stages.length - 1) {
                                            setBootStage(stages[currentIndex + 1]);
                                        } else {
                                            setBootStage('error');
                                        }
                                    }}
                                >
                                    <ArrowRight className="w-4 h-4 mr-2" />
                                    Simulate Boot Process
                                </Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                                <p className="font-bold text-lg mb-4">If boot errors occur:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">1.</span>
                                        <span>Note the error code/message on screen</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">2.</span>
                                        <span>Restart computer</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">3.</span>
                                        <span>Press F8 during boot to access Safe Mode</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">4.</span>
                                        <span>If Safe Mode works: Run System File Checker (sfc /scannow)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">5.</span>
                                        <span>If Safe Mode fails: Use recovery drive/USB</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">6.</span>
                                        <span>Run startup repair from recovery menu</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">7.</span>
                                        <span>Check hardware connections (RAM, cables)</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 2: BIOS ISSUES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-purple-500 text-purple-700 dark:text-purple-300">Subtopic 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">BIOS/UEFI Issues</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            BIOS (Basic Input/Output System) controls the initial startup. Wrong settings can prevent your computer from finding and loading the operating system.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 dark:border-purple-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t3-bios-issues.jpg"
                            alt="BIOS/UEFI interface showing boot order and settings"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Settings class="w-12 h-12 text-purple-600 mx-auto mb-2" /><p class="font-bold text-purple-900">BIOS/UEFI Interface</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-purple-200 dark:border-purple-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Wrong boot order set</li>
                                    <li>• BIOS reset to defaults</li>
                                    <li>• Corrupt BIOS firmware</li>
                                    <li>• Dead CMOS battery</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Can't find operating system</li>
                                    <li>• Black screen after BIOS</li>
                                    <li>• "No bootable device" error</li>
                                    <li>• Computer won't start</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Change boot order in BIOS</li>
                                    <li>• Set HDD/SSD as first boot device</li>
                                    <li>• Reset BIOS to defaults</li>
                                    <li>• Update BIOS firmware</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-500" />
                                BIOS Settings Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg border-2 bg-muted">
                                    <h4 className="font-bold mb-3">Boot Order</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-2 bg-background rounded border">
                                            <span className="text-sm">1. USB Drive</span>
                                            <Badge variant="outline">Current</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-2 bg-background rounded border border-purple-200">
                                            <span className="text-sm font-bold">2. Hard Disk (HDD)</span>
                                            <Badge className="bg-purple-500">Should be 1st</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-2 bg-background rounded border">
                                            <span className="text-sm">3. CD/DVD Drive</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        // Simulate fixing boot order
                                    }}
                                >
                                    <Settings className="w-4 h-4 mr-2" />
                                    Fix Boot Order
                                </Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                                <p className="font-bold text-lg mb-4">If BIOS issues occur:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">1.</span>
                                        <span>Restart computer</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">2.</span>
                                        <span>Press F2, Delete, or F12 during startup (see your screen)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">3.</span>
                                        <span>Navigate to "Boot" or "Startup" section using arrow keys</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">4.</span>
                                        <span>Set HDD/SSD as 1st boot device (use +/- keys)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">5.</span>
                                        <span>If needed: Reset to defaults (F9 or Load Defaults)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">6.</span>
                                        <span>Check date/time settings are correct</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">7.</span>
                                        <span>Save changes and exit (F10 or Save & Exit)</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SUBTOPIC 3: DRIVE NOT DETECTED */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-purple-500 text-purple-700 dark:text-purple-300">Subtopic 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Drive Not Detected</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            When your computer can't find the storage drive, it can't load the operating system. This is usually a connection problem.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 dark:border-purple-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t3-drive-not-detected.jpg"
                            alt="Hard drive connections showing SATA cable and power cable to motherboard"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><HardDrive class="w-12 h-12 text-purple-600 mx-auto mb-2" /><p class="font-bold text-purple-900">Drive Connection</p></div>';
                                }
                            }}
                        />
                    </div>

                    {/* Cause → Effect → Fix Flow */}
                    <Card className="p-8 mb-8 border-2 border-purple-200 dark:border-purple-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Loose SATA data cable</li>
                                    <li>• Drive power cable disconnected</li>
                                    <li>• Drive hardware failure</li>
                                    <li>• Wrong SATA port on motherboard</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• "No bootable device" error</li>
                                    <li>• Black screen after BIOS</li>
                                    <li>• Drive not listed in BIOS</li>
                                    <li>• Computer can't start</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Check SATA cable connections</li>
                                    <li>• Verify power cable is connected</li>
                                    <li>• Try different SATA port</li>
                                    <li>• Test drive in another computer</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <HardDrive className="w-5 h-5 text-purple-500" />
                                Drive Detection Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className={`p-6 rounded-lg border-2 ${driveDetected ? 'bg-green-50 dark:bg-green-900/20 border-green-200' : 'bg-red-50 dark:bg-red-900/20 border-red-200'}`}>
                                    <div className="text-center mb-4">
                                        <HardDrive className={`w-16 h-16 mx-auto mb-2 ${driveDetected ? 'text-green-500' : 'text-red-500'}`} />
                                        <p className="font-bold text-lg">
                                            {driveDetected ? 'Drive Detected' : 'Drive Not Detected'}
                                        </p>
                                    </div>
                                    {driveDetected ? (
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Model:</span>
                                                <span className="font-mono">ST1000DM010</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Capacity:</span>
                                                <span>1TB</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Status:</span>
                                                <Badge className="bg-green-500">Connected</Badge>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center text-red-600 dark:text-red-400">
                                            <p className="font-bold">No drives found</p>
                                            <p className="text-xs mt-2">Check connections</p>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => setDriveDetected(!driveDetected)}
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Toggle Drive Status
                                </Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-500" />
                                Step-by-Step Fix Guide
                            </h3>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                                <p className="font-bold text-lg mb-4">If drive not detected:</p>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">1.</span>
                                        <span>Turn off computer completely</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">2.</span>
                                        <span>Open computer case (desktop) or access panel (laptop)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">3.</span>
                                        <span>Check SATA data cable: Is it connected firmly to drive and motherboard?</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">4.</span>
                                        <span>Check power cable: Is it connected to the drive?</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">5.</span>
                                        <span>Try reconnecting both cables firmly</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">6.</span>
                                        <span>Try a different SATA port on motherboard</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">7.</span>
                                        <span>Close case, restart, enter BIOS to check if drive appears</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-purple-600 dark:text-purple-400">8.</span>
                                        <span>If still not detected: Drive may be dead, consider replacement</span>
                                    </li>
                                </ol>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t3" />
            </div>
        </div>
    );
}

// --- TOPIC 4: DISPLAY ISSUES ---
function Topic4_DisplayIssues() {
    const [isFlickering, setIsFlickering] = useState(false);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold tracking-wide uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Module 14 • Topic 4
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                        Display <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Issues</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                        Fix monitor and screen problems: no display, wrong resolution, flickering, and connection issues.
                    </p>
                    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200 dark:border-green-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t4-display-hero.jpg"
                            alt="Monitor with various display problem states"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Monitor class="w-12 h-12 text-green-600 mx-auto mb-2" /><p class="font-bold text-green-900">Display Issues</p></div>';
                                }
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 1: NO DISPLAY */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-green-200 dark:border-green-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                            <img
                                src="/src/assets/module-media/m14-t4-no-display.jpg"
                                alt="Black screen - no display"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Monitor class="w-12 h-12 text-green-600 mx-auto mb-2" /><p class="font-bold text-green-900">Black Screen</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <Badge variant="outline" className="mb-4 border-green-500 text-green-700 dark:text-green-300">Section 1</Badge>
                                <h2 className="text-4xl font-bold mb-4">No Display</h2>
                                <p className="text-lg text-muted-foreground">
                                    When your monitor shows nothing, it could be a power issue, connection problem, or hardware failure.
                                </p>
                            </div>
                            <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                                <h3 className="text-xl font-bold mb-4 text-center">Cause → Effect → Fix Flow</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <AlertTriangle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                                        <h4 className="font-bold text-sm mb-2">CAUSE</h4>
                                        <ul className="text-xs text-muted-foreground space-y-1 text-left">
                                            <li>• Power cable unplugged</li>
                                            <li>• Loose video cable</li>
                                            <li>• Monitor power off</li>
                                            <li>• GPU failure</li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <TrendingDown className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                        <h4 className="font-bold text-sm mb-2">EFFECT</h4>
                                        <ul className="text-xs text-muted-foreground space-y-1 text-left">
                                            <li>• Black screen</li>
                                            <li>• No signal message</li>
                                            <li>• Monitor standby</li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                        <h4 className="font-bold text-sm mb-2">FIX</h4>
                                        <ul className="text-xs text-muted-foreground space-y-1 text-left">
                                            <li>• Check power cable</li>
                                            <li>• Verify video cable</li>
                                            <li>• Press monitor power</li>
                                            <li>• Check GPU</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-green-500" />
                                    Step-by-Step Fix Guide
                                </h3>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                                    <ol className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-green-600 dark:text-green-400">1.</span>
                                            <span>Check power cable is plugged into monitor and outlet</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-green-600 dark:text-green-400">2.</span>
                                            <span>Press monitor power button to turn on</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-green-600 dark:text-green-400">3.</span>
                                            <span>Verify video cable (HDMI/VGA/DisplayPort) is connected firmly</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-green-600 dark:text-green-400">4.</span>
                                            <span>Try a different video cable if available</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-green-600 dark:text-green-400">5.</span>
                                            <span>Check if computer is actually running (fans, lights)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-green-600 dark:text-green-400">6.</span>
                                            <span>If laptop: try external monitor to test</span>
                                        </li>
                                    </ol>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CONNECTION TYPES & CABLES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-green-500 text-green-700 dark:text-green-300">Section 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Connection Types & Cables</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Different cables connect your monitor to your computer. Knowing which one to use helps fix connection problems.
                        </p>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200 dark:border-green-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t4-cable-types.jpg"
                            alt="Different cable types - HDMI, VGA, DisplayPort"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Cable class="w-12 h-12 text-green-600 mx-auto mb-2" /><p class="font-bold text-green-900">Cable Types</p></div>';
                                }
                            }}
                        />
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cable className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="font-bold mb-2">HDMI</h4>
                            <p className="text-sm text-muted-foreground mb-3">High quality, supports audio and video</p>
                            <Badge variant="outline">Modern</Badge>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cable className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h4 className="font-bold mb-2">VGA</h4>
                            <p className="text-sm text-muted-foreground mb-3">Older standard, analog signal</p>
                            <Badge variant="outline">Legacy</Badge>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cable className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h4 className="font-bold mb-2">DisplayPort</h4>
                            <p className="text-sm text-muted-foreground mb-3">High performance, gaming monitors</p>
                            <Badge variant="outline">Premium</Badge>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cable className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h4 className="font-bold mb-2">USB-C</h4>
                            <p className="text-sm text-muted-foreground mb-3">Modern laptops, single cable</p>
                            <Badge variant="outline">New</Badge>
                        </Card>
                    </div>
                    <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                        <h3 className="text-xl font-bold mb-4">Troubleshooting Cable Issues</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">• Check cable connections are tight</li>
                                <li className="flex gap-2">• Verify cable type matches ports</li>
                            </ul>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">• Inspect cable for damage</li>
                                <li className="flex gap-2">• Try different cable if available</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3 & 4: RESOLUTION + FLICKERING */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* RESOLUTION ISSUES */}
                        <div>
                            <div className="text-center mb-6">
                                <Badge variant="outline" className="mb-3 border-green-500 text-green-700 dark:text-green-300">Section 3</Badge>
                                <h2 className="text-3xl font-bold mb-4">Incorrect Resolution</h2>
                                <p className="text-muted-foreground mb-6">
                                    Wrong resolution makes everything look too big, too small, or stretched.
                                </p>
                            </div>
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-green-200 dark:border-green-800 mb-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                                <img
                                    src="/src/assets/module-media/m14-t4-wrong-resolution.jpg"
                                    alt="Wrong resolution example showing stretched or pixelated display"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="z-10 text-center p-4 bg-white/80 backdrop-blur-md rounded-xl"><Monitor class="w-10 h-10 text-green-600 mx-auto mb-2" /><p class="font-bold text-green-900 text-sm">Wrong Resolution</p></div>';
                                        }
                                    }}
                                />
                            </div>
                            <Card className="p-6 mb-6 border-2 border-green-200 dark:border-green-800">
                                <h3 className="text-lg font-bold mb-4 text-center">Cause → Effect → Fix</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-green-600" />
                                            CAUSE
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Wrong resolution selected</li>
                                            <li>• Graphics driver issue</li>
                                            <li>• Monitor not detected properly</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <TrendingDown className="w-5 h-5 text-red-500" />
                                            EFFECT
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Everything looks too big/small</li>
                                            <li>• Stretched or pixelated</li>
                                            <li>• Black borders around screen</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            FIX
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Right-click desktop → Display settings</li>
                                            <li>• Select recommended resolution</li>
                                            <li>• Update graphics drivers</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-bold mb-3">Fix Steps:</h3>
                                <ol className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">1. Right-click desktop → Display settings</li>
                                    <li className="flex gap-2">2. Scroll to "Display resolution"</li>
                                    <li className="flex gap-2">3. Select "(Recommended)" resolution</li>
                                    <li className="flex gap-2">4. Click "Keep changes"</li>
                                </ol>
                            </Card>
                        </div>

                        {/* FLICKERING ISSUES */}
                        <div>
                            <div className="text-center mb-6">
                                <Badge variant="outline" className="mb-3 border-green-500 text-green-700 dark:text-green-300">Section 4</Badge>
                                <h2 className="text-3xl font-bold mb-4">Flickering Screen</h2>
                                <p className="text-muted-foreground mb-6">
                                    Screen flickering can be annoying and may indicate a serious problem.
                                </p>
                            </div>
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-green-200 dark:border-green-800 mb-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                                <img
                                    src="/src/assets/module-media/m14-t4-flickering.jpg"
                                    alt="Flickering screen visual"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="z-10 text-center p-4 bg-white/80 backdrop-blur-md rounded-xl"><Monitor class="w-10 h-10 text-green-600 mx-auto mb-2" /><p class="font-bold text-green-900 text-sm">Flickering Screen</p></div>';
                                        }
                                    }}
                                />
                            </div>
                            <Card className="p-6 mb-6 border-2 border-green-200 dark:border-green-800">
                                <div className="mb-4">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => setIsFlickering(!isFlickering)}
                                    >
                                        <RefreshCw className="w-4 h-4 mr-2" />
                                        {isFlickering ? 'Stop Flickering' : 'Simulate Flickering'}
                                    </Button>
                                </div>
                                <div className={`h-32 rounded-lg border-2 ${isFlickering ? 'bg-red-500 animate-pulse border-red-300' : 'bg-green-100 dark:bg-green-900/30 border-green-200'} flex items-center justify-center`}>
                                    <span className="font-bold">{isFlickering ? 'FLICKERING' : 'Stable Display'}</span>
                                </div>
                            </Card>
                            <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                                <h3 className="text-lg font-bold mb-4 text-center">Cause → Effect → Fix</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-green-600" />
                                            CAUSE
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Refresh rate mismatch</li>
                                            <li>• Loose cable connection</li>
                                            <li>• Graphics driver problem</li>
                                            <li>• Faulty monitor</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <TrendingDown className="w-5 h-5 text-red-500" />
                                            EFFECT
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Screen flashes or flickers</li>
                                            <li>• Eye strain and headaches</li>
                                            <li>• Hard to see content</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            FIX
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Adjust refresh rate settings</li>
                                            <li>• Check cable connections</li>
                                            <li>• Update graphics drivers</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DISPLAY SETTINGS OVERVIEW */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-green-500 text-green-700 dark:text-green-300">Section 5</Badge>
                        <h2 className="text-4xl font-bold mb-4">Display Settings Overview</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Understanding display settings helps you fix problems and optimize your screen for the best experience.
                        </p>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200 dark:border-green-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t4-display-settings.jpg"
                            alt="Windows Display Settings interface"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Settings class="w-12 h-12 text-green-600 mx-auto mb-2" /><p class="font-bold text-green-900">Display Settings</p></div>';
                                }
                            }}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4">Settings Guide</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Resolution</h4>
                                    <p className="text-sm text-muted-foreground">Size of display in pixels (e.g., 1920x1080)</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Scaling</h4>
                                    <p className="text-sm text-muted-foreground">How big text and apps appear (100%, 125%, 150%)</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Orientation</h4>
                                    <p className="text-sm text-muted-foreground">Portrait, Landscape, or rotated</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Multiple Displays</h4>
                                    <p className="text-sm text-muted-foreground">Extend, duplicate, or show on one screen</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Color Settings</h4>
                                    <p className="text-sm text-muted-foreground">Brightness, contrast, color calibration</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4">Quick Access Tips</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                                    <p className="font-semibold mb-2">Method 1:</p>
                                    <p className="text-sm text-muted-foreground">Right-click Desktop → Display Settings</p>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                                    <p className="font-semibold mb-2">Method 2:</p>
                                    <p className="text-sm text-muted-foreground">Windows Key + I → System → Display</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg mt-4">
                                    <h4 className="font-semibold mb-3">Common Settings Explained</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• <strong>Resolution:</strong> Higher = sharper, more detail</li>
                                        <li>• <strong>Scaling:</strong> Bigger text/apps for readability</li>
                                        <li>• <strong>Orientation:</strong> Rotate screen if needed</li>
                                        <li>• <strong>Multiple Displays:</strong> Use two monitors together</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* VISUAL COMPARISON SECTION */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Before & After Comparison</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 border-2 border-red-200 dark:border-red-800">
                            <h3 className="font-bold text-xl mb-4 text-center text-red-600">Problem State</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <p className="font-semibold mb-2">No Display</p>
                                    <p className="text-sm text-muted-foreground">Black screen, no signal</p>
                                </div>
                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <p className="font-semibold mb-2">Wrong Resolution</p>
                                    <p className="text-sm text-muted-foreground">Stretched, pixelated, or too small</p>
                                </div>
                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <p className="font-semibold mb-2">Flickering</p>
                                    <p className="text-sm text-muted-foreground">Screen flashes, unstable</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                            <h3 className="font-bold text-xl mb-4 text-center text-green-600">Fixed State</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <p className="font-semibold mb-2">Working Display</p>
                                    <p className="text-sm text-muted-foreground">Clear image, proper signal</p>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <p className="font-semibold mb-2">Correct Resolution</p>
                                    <p className="text-sm text-muted-foreground">Sharp, properly sized content</p>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <p className="font-semibold mb-2">Stable Screen</p>
                                    <p className="text-sm text-muted-foreground">No flickering, smooth display</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t4" />
            </div>
        </div>
    );
}

// --- TOPIC 5: AUDIO ISSUES ---
function Topic5_AudioIssues() {
    const [selectedOutput, setSelectedOutput] = useState('speakers');
    const [driverStatus, setDriverStatus] = useState<'working' | 'error'>('working');
    const [micWorking, setMicWorking] = useState(false);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                            Module 14 • Topic 5
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Audio <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Issues</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Fix sound problems: no audio, driver issues, wrong output device, microphone problems, and quality issues.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-pink-200 dark:border-pink-800 shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Volume2 className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Audio System</h3>
                                    <Badge className="bg-pink-500">Active</Badge>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Speakers</span>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Microphone</span>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Drivers</span>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-12">
                    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t5-audio-hero.jpg"
                            alt="Audio system diagram showing speakers, headphones, settings"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Volume2 class="w-12 h-12 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900">Audio System</p></div>';
                                }
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 1: NO SOUND (Card Grid Layout) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-pink-500 text-pink-700 dark:text-pink-300">Section 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">No Sound</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                                <img
                                    src="/src/assets/module-media/m14-t5-no-sound.jpg"
                                    alt="No sound indicator"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="z-10 text-center p-4 bg-white/80 backdrop-blur-md rounded-xl"><VolumeX class="w-10 h-10 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900 text-xs">No Sound</p></div>';
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 text-center">CAUSE</h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• Volume muted</li>
                                <li>• Cable disconnected</li>
                                <li>• Driver problem</li>
                                <li>• Wrong output device</li>
                            </ul>
                        </Card>
                        <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 text-center">EFFECT</h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• Complete silence</li>
                                <li>• No audio output</li>
                                <li>• Can't hear anything</li>
                            </ul>
                        </Card>
                    </div>
                    <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                        <h3 className="text-xl font-bold mb-4">Step-by-Step Fix Guide</h3>
                        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-l-4 border-pink-500">
                            <ol className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-3">
                                    <span className="font-bold text-pink-600 dark:text-pink-400">1.</span>
                                    <span>Check volume slider in taskbar - make sure it's not muted</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-pink-600 dark:text-pink-400">2.</span>
                                    <span>Verify audio cable is connected to correct port</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-pink-600 dark:text-pink-400">3.</span>
                                    <span>Right-click speaker icon → Open Sound settings</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-pink-600 dark:text-pink-400">4.</span>
                                    <span>Check "Choose your output device" - select correct device</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-pink-600 dark:text-pink-400">5.</span>
                                    <span>Test with different audio device (headphones)</span>
                                </li>
                            </ol>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: DRIVER ISSUES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-pink-500 text-pink-700 dark:text-pink-300">Section 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Driver Issues</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Audio drivers allow your computer to communicate with audio devices. When drivers fail, audio stops working.
                        </p>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t5-driver-issues.jpg"
                            alt="Device Manager showing audio driver status"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Settings class="w-12 h-12 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900">Driver Issues</p></div>';
                                }
                            }}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-pink-500" />
                                Driver Status Simulator
                            </h3>
                            <div className="space-y-4">
                                <div className={`p-6 rounded-lg border-2 ${driverStatus === 'working' ? 'bg-green-50 dark:bg-green-900/20 border-green-200' : 'bg-red-50 dark:bg-red-900/20 border-red-200'}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-bold">Audio Driver</span>
                                        <Badge className={driverStatus === 'working' ? 'bg-green-500' : 'bg-red-500'}>
                                            {driverStatus === 'working' ? 'Working' : 'Error'}
                                        </Badge>
                                    </div>
                                    {driverStatus === 'error' && (
                                        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                            <p className="text-sm text-red-700 dark:text-red-300">
                                                ⚠️ Driver not functioning properly
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => setDriverStatus(driverStatus === 'working' ? 'error' : 'working')}
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    {driverStatus === 'working' ? 'Simulate Error' : 'Fix Driver'}
                                </Button>
                            </div>
                        </Card>
                        <div className="space-y-6">
                            <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                                <h3 className="text-lg font-bold mb-4 text-center">Cause → Effect → Fix</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-pink-600" />
                                            CAUSE
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Outdated driver</li>
                                            <li>• Corrupt driver files</li>
                                            <li>• Driver conflict</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <TrendingDown className="w-5 h-5 text-red-500" />
                                            EFFECT
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Audio not working</li>
                                            <li>• Device not recognized</li>
                                            <li>• Error in Device Manager</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            FIX
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                                            <li>• Update drivers</li>
                                            <li>• Reinstall drivers</li>
                                            <li>• Restart computer</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                        <h3 className="font-bold mb-4">Fix Guide Steps</h3>
                        <ol className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="font-bold text-pink-600 dark:text-pink-400">1.</span>
                                <span>Open Device Manager (Win+X → Device Manager)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-pink-600 dark:text-pink-400">2.</span>
                                <span>Expand "Sound, video and game controllers"</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-pink-600 dark:text-pink-400">3.</span>
                                <span>Right-click audio device → Update driver</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-pink-600 dark:text-pink-400">4.</span>
                                <span>Or: Right-click → Uninstall device, then restart</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-pink-600 dark:text-pink-400">5.</span>
                                <span>Windows will reinstall driver automatically</span>
                            </li>
                        </ol>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: INCORRECT OUTPUT DEVICE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-pink-500 text-pink-700 dark:text-pink-300">Section 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Incorrect Output Device</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Audio is going to the wrong device - maybe to headphones when you want speakers, or vice versa.
                        </p>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t5-output-device.jpg"
                            alt="Multiple audio output options - speakers, headphones, Bluetooth"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Headphones class="w-12 h-12 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900">Output Devices</p></div>';
                                }
                            }}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4">Visual Guide</h3>
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center group mb-4">
                                <img
                                    src="/src/assets/module-media/m14-t5-audio-settings.jpg"
                                    alt="Audio Settings UI showing how to change device"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="z-10 text-center p-4 bg-white/80 backdrop-blur-md rounded-xl"><Settings class="w-10 h-10 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900 text-sm">Audio Settings</p></div>';
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Headphones className="w-5 h-5 text-pink-500" />
                                Output Device Selector
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Button
                                        variant={selectedOutput === 'speakers' ? 'default' : 'outline'}
                                        className="w-full justify-start"
                                        onClick={() => setSelectedOutput('speakers')}
                                    >
                                        <Volume2 className="w-4 h-4 mr-2" />
                                        Speakers
                                    </Button>
                                    <Button
                                        variant={selectedOutput === 'headphones' ? 'default' : 'outline'}
                                        className="w-full justify-start"
                                        onClick={() => setSelectedOutput('headphones')}
                                    >
                                        <Headphones className="w-4 h-4 mr-2" />
                                        Headphones
                                    </Button>
                                    <Button
                                        variant={selectedOutput === 'bluetooth' ? 'default' : 'outline'}
                                        className="w-full justify-start"
                                        onClick={() => setSelectedOutput('bluetooth')}
                                    >
                                        <Radio className="w-4 h-4 mr-2" />
                                        Bluetooth Device
                                    </Button>
                                </div>
                                <Button variant="outline" className="w-full">
                                    <Volume2 className="w-4 h-4 mr-2" />
                                    Test Audio
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <Card className="p-6 mb-8 border-2 border-pink-200 dark:border-pink-800">
                        <h3 className="text-lg font-bold mb-4 text-center">Cause → Effect → Fix</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <h4 className="font-semibold mb-2">CAUSE</h4>
                                <p className="text-sm text-muted-foreground">Device changed automatically or wrong selection</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold mb-2">EFFECT</h4>
                                <p className="text-sm text-muted-foreground">Audio plays from wrong device</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold mb-2">FIX</h4>
                                <p className="text-sm text-muted-foreground">Change output device in settings</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                        <h3 className="font-bold mb-4">Quick Fix Steps</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Right-click speaker icon in taskbar</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Select "Open Sound settings"</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Under "Choose your output device", select correct device</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Test by playing audio</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: MICROPHONE ISSUES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-pink-500 text-pink-700 dark:text-pink-300">Section 4</Badge>
                        <h2 className="text-4xl font-bold mb-4">Microphone Issues</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Microphone not working? It could be muted, not detected, or permission issues preventing it from working.
                        </p>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t5-microphone.jpg"
                            alt="Microphone setup - headset, built-in, external"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Mic class="w-12 h-12 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900">Microphone</p></div>';
                                }
                            }}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold mb-4">Problem Types</h3>
                            <div className="space-y-3">
                                <div className="p-4 bg-muted rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MicOff className="w-5 h-5 text-red-500" />
                                        <span className="font-semibold">No mic detected</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Computer doesn't see microphone</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <VolumeX className="w-5 h-5 text-red-500" />
                                        <span className="font-semibold">Mic muted</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Microphone is turned off</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <TrendingDown className="w-5 h-5 text-orange-500" />
                                        <span className="font-semibold">Low volume</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Sound is too quiet</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Settings className="w-5 h-5 text-blue-500" />
                                        <span className="font-semibold">Wrong device</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Using different microphone</p>
                                </div>
                            </div>
                            <div className="mt-4 relative w-full aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                                <img
                                    src="/src/assets/module-media/m14-t5-mic-icon.jpg"
                                    alt="Microphone icon with X mark"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="z-10 text-center p-4 bg-white/80 backdrop-blur-md rounded-xl"><MicOff class="w-10 h-10 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900 text-sm">Mic Error</p></div>';
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <div className="space-y-6">
                            <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                                <h3 className="text-lg font-bold mb-4 text-center">Cause → Effect → Fix</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">CAUSE</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Mic permissions disabled</li>
                                            <li>• Microphone muted</li>
                                            <li>• Wrong input device selected</li>
                                            <li>• Driver issues</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">EFFECT</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• No audio input</li>
                                            <li>• Others can't hear you</li>
                                            <li>• Apps can't record</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">FIX</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Check mic permissions</li>
                                            <li>• Enable in settings</li>
                                            <li>• Test mic input level</li>
                                            <li>• Select correct device</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-bold mb-4">Step-by-Step Fix</h3>
                                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-l-4 border-pink-500">
                                    <ol className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-pink-600 dark:text-pink-400">1.</span>
                                            <span>Go to Settings → Privacy → Microphone</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-pink-600 dark:text-pink-400">2.</span>
                                            <span>Turn on "Allow apps to access your microphone"</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-pink-600 dark:text-pink-400">3.</span>
                                            <span>Go to Settings → System → Sound</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-pink-600 dark:text-pink-400">4.</span>
                                            <span>Under "Input", select your microphone</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-pink-600 dark:text-pink-400">5.</span>
                                            <span>Speak and watch the test bar move</span>
                                        </li>
                                    </ol>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: AUDIO QUALITY PROBLEMS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-pink-500 text-pink-700 dark:text-pink-300">Section 5</Badge>
                        <h2 className="text-4xl font-bold mb-4">Poor Audio Quality</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Fixing distorted, crackling, or low-quality sound issues.
                        </p>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-800 mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center group">
                        <img
                            src="/src/assets/module-media/m14-t5-audio-quality.jpg"
                            alt="Sound wave visualization showing quality issues"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg"><Volume2 class="w-12 h-12 text-pink-600 mx-auto mb-2" /><p class="font-bold text-pink-900">Audio Quality</p></div>';
                                }
                            }}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 text-center">DISTORTED</h4>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm font-semibold">Causes:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Volume too high</li>
                                    <li>• Poor quality cable</li>
                                    <li>• Driver issues</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold">Fixes:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Lower volume</li>
                                    <li>• Replace cable</li>
                                    <li>• Update drivers</li>
                                </ul>
                            </div>
                        </Card>
                        <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 text-center">CRACKLING</h4>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm font-semibold">Causes:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Loose connections</li>
                                    <li>• Interference</li>
                                    <li>• Buffer issues</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold">Fixes:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Check cables</li>
                                    <li>• Move away interference</li>
                                    <li>• Adjust buffer size</li>
                                </ul>
                            </div>
                        </Card>
                        <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingDown className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 text-center">LOW QUALITY</h4>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm font-semibold">Causes:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Low bitrate</li>
                                    <li>• Compression</li>
                                    <li>• Old hardware</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold">Fixes:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Increase quality</li>
                                    <li>• Use better format</li>
                                    <li>• Upgrade hardware</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                    <Card className="p-6 border-2 border-pink-200 dark:border-pink-800">
                        <h3 className="text-xl font-bold mb-4">Common Solutions</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">• Update audio drivers</li>
                                <li className="flex gap-2">• Check cable connections</li>
                                <li className="flex gap-2">• Adjust audio enhancements</li>
                            </ul>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">• Disable audio effects</li>
                                <li className="flex gap-2">• Use high-quality cables</li>
                                <li className="flex gap-2">• Check playback quality settings</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t5" />
            </div>
        </div>
    );
}

// --- TOPIC 6: PRINTER TROUBLESHOOTING ---
function Topic6_PrinterTroubleshooting() {
    const [printerStatus, setPrinterStatus] = useState<'online' | 'offline'>('offline');
    const [testResult, setTestResult] = useState<string>('');

    const runDiagnostic = () => {
        setTestResult('Checking printer status...');
        setTimeout(() => {
            if (printerStatus === 'online') {
                setTestResult('✓ Printer is online and ready');
            } else {
                setTestResult('✗ Printer is offline - Check power and connection');
            }
        }, 1500);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 14 • Topic 6
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Printer Troubleshooting
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Fix common printer problems and get your documents printing smoothly.
                        </p>
                        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden bg-muted mt-8 flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t6-printer-hero.jpg"
                                alt="Printer with status indicators"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Printer class="w-20 h-20 text-primary mx-auto mb-4" /><p class="font-bold text-foreground">Printer Status</p></div>';
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PRINTER OFFLINE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Printer Offline</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Printer shows as offline but it's physically connected. This is usually a communication issue between your computer and printer.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t6-offline.jpg"
                            alt="Printer status showing offline state"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><XCircle class="w-16 h-16 text-red-500 mx-auto mb-4" /><p class="font-bold">Printer Offline</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-8 mb-8 border-2 border-border">
                        <h3 className="text-2xl font-bold mb-6 text-center">Cause → Effect → Fix Flow</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Printer powered off</li>
                                    <li>• USB/Network cable disconnected</li>
                                    <li>• Printer queue error</li>
                                    <li>• Driver communication issue</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <XCircle className="w-8 h-8 text-destructive" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Printer appears offline</li>
                                    <li>• Print jobs queue but don't print</li>
                                    <li>• Error messages appear</li>
                                    <li>• Cannot send print commands</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-success" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                    <li>• Check printer power</li>
                                    <li>• Verify cable connections</li>
                                    <li>• Restart printer</li>
                                    <li>• Clear print queue</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Diagnostic Tool</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Printer className="w-8 h-8 text-primary" />
                                    <div className="flex-1">
                                        <p className="font-semibold">Printer Status</p>
                                        <p className="text-sm text-muted-foreground">Check if printer is detected</p>
                                    </div>
                                    <Badge variant={printerStatus === 'online' ? 'default' : 'destructive'}>
                                        {printerStatus === 'online' ? 'Online' : 'Offline'}
                                    </Badge>
                                </div>
                                <Button onClick={runDiagnostic} className="w-full">
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Run Diagnostic Test
                                </Button>
                                {testResult && (
                                    <div className="p-3 bg-muted rounded-lg text-sm">
                                        {testResult}
                                    </div>
                                )}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Step-by-Step Fix Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Check printer power button and indicator lights</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Verify USB/Network cable is securely connected</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Turn printer off, wait 10 seconds, then turn on</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Open Settings → Devices → Printers & scanners</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Click your printer → "Open queue" → Cancel stuck jobs</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">6.</span>
                                    <span className="text-sm text-muted-foreground">Set as default printer if needed</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: PAPER JAM */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Paper Jam</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Paper stuck inside printer prevents printing. Learn how to safely remove it and prevent future jams.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t6-paper-jam.jpg"
                                alt="Paper jam inside printer visual diagram"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><FileX class="w-16 h-16 text-orange-500 mx-auto mb-4" /><p class="font-bold">Paper Jam</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <div className="space-y-6">
                            <Card className="p-6 border-2 border-border">
                                <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">CAUSE</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Wrong paper type or size</li>
                                            <li>• Too much paper in tray</li>
                                            <li>• Paper misaligned in tray</li>
                                            <li>• Worn or damaged rollers</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">EFFECT</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Printer stops immediately</li>
                                            <li>• Error message on screen</li>
                                            <li>• Paper visible inside printer</li>
                                            <li>• Cannot print until cleared</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">FIX</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Open printer access panel</li>
                                            <li>• Gently pull paper out (don't tear)</li>
                                            <li>• Check for torn pieces</li>
                                            <li>• Realign paper in tray</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                                <img
                                    src="/src/assets/module-media/m14-t6-remove-jam.jpg"
                                    alt="How to remove paper jam"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Step-by-Step Removal Guide</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Turn off printer and unplug power cable</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Open paper tray and access panel (follow printer manual)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Gently pull paper out in the direction it feeds (don't pull backwards)</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Check for any torn pieces remaining inside</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Close panel, reload paper correctly in tray</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">6.</span>
                                    <span className="text-sm text-muted-foreground">Turn on printer and test with a print job</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: DRIVER MISSING */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Driver Missing</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Computer can't communicate with printer because the driver software is missing, corrupted, or outdated.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t6-driver.jpg"
                            alt="Device Manager showing missing driver indicator"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Settings class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Driver Missing</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Printer className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Problem</p>
                                <p className="text-xs text-muted-foreground">Printer not working</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Diagnosis</p>
                                <p className="text-xs text-muted-foreground">Check driver status</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Solution</p>
                                <p className="text-xs text-muted-foreground">Install driver</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Driver deleted accidentally</li>
                                        <li>• Never installed after setup</li>
                                        <li>• Driver corrupted</li>
                                        <li>• Windows update removed driver</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Printer error messages</li>
                                        <li>• Can't print documents</li>
                                        <li>• Printer not detected</li>
                                        <li>• Yellow warning in Device Manager</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Driver Installation Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open Device Manager (Win+X → Device Manager)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Find your printer (may show with yellow warning icon)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Right-click → "Update driver" → "Search automatically"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Or download driver from manufacturer's website</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Install downloaded driver file</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">6.</span>
                                    <span className="text-sm text-muted-foreground">Restart computer and test print</span>
                                </div>
                            </div>
                            <Button className="w-full mt-4">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Test Print
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t6" />
            </div>
        </div>
    );
}

// --- TOPIC 7: MALWARE REMOVAL ---
function Topic7_MalwareRemoval() {
    const [scanProgress, setScanProgress] = useState(0);
    const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
    const [threatsFound, setThreatsFound] = useState(0);

    const startScan = () => {
        setScanStatus('scanning');
        setScanProgress(0);
        setThreatsFound(0);
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setScanStatus('complete');
                    setThreatsFound(3);
                    return 100;
                }
                return prev + 5;
            });
        }, 200);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 14 • Topic 7
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Malware <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive">Removal</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Learn to scan, quarantine, and delete threats to keep your computer safe and secure.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <ShieldAlert className="w-16 h-16 text-destructive mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Threat Detected</h3>
                                    <p className="text-sm text-muted-foreground">Malware removal in progress</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: SCAN */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Step 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Scanning for Malware</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            First step is to scan and detect threats. Your antivirus software searches for malicious files and suspicious behavior.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t7-scan.jpg"
                            alt="Antivirus scan interface showing progress"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Scan class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Scan Progress</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Scan Process Timeline</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Power className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Start</p>
                                <p className="text-xs text-muted-foreground">Select scan type</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Activity className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Quick Scan</p>
                                <p className="text-xs text-muted-foreground">10-30 minutes</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Scan className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Full Scan</p>
                                <p className="text-xs text-muted-foreground">1-3 hours</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-8 h-8 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Results</p>
                                <p className="text-xs text-muted-foreground">Show threats</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Infected files downloaded</li>
                                        <li>• Suspicious email attachments</li>
                                        <li>• Malicious websites</li>
                                        <li>• Unsecured downloads</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• System runs slowly</li>
                                        <li>• Pop-ups and ads appear</li>
                                        <li>• Errors and crashes</li>
                                        <li>• Data theft risk</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Scan</h3>
                            <div className="space-y-3 mb-4">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open antivirus software</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Click "Scan" or "Scan Now" button</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Choose Quick Scan (faster) or Full Scan (thorough)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Wait for scan to complete</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Review detected threats list</span>
                                </div>
                            </div>
                            <Button onClick={startScan} className="w-full" disabled={scanStatus === 'scanning'}>
                                <Scan className="w-4 h-4 mr-2" />
                                {scanStatus === 'scanning' ? 'Scanning...' : scanStatus === 'complete' ? 'Scan Complete' : 'Start Scan'}
                            </Button>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Scan Progress</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Scan Progress</span>
                                    <span className="text-muted-foreground">{scanProgress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-4">
                                    <div
                                        className="h-4 rounded-full bg-primary transition-all duration-300"
                                        style={{ width: `${scanProgress}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-muted-foreground">Files scanned</p>
                                    <p className="font-bold">{Math.floor(scanProgress * 280)} / 28,000</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Threats found</p>
                                    <p className="font-bold text-destructive">{threatsFound}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: QUARANTINE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Step 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Quarantine Threats</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Isolate threats so they can't harm your system. Quarantined files are moved to a safe location where they cannot run or cause damage.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t7-quarantine.jpg"
                            alt="Quarantine folder with isolated files"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Folder class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Quarantine</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Folder className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">What is Quarantine?</h4>
                            <p className="text-sm text-muted-foreground">Files are isolated and moved to a secure folder where they can't run or cause harm.</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Why Quarantine?</h4>
                            <p className="text-sm text-muted-foreground">Prevents malware from executing and damaging your system while you decide what to do.</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">How it Works</h4>
                            <p className="text-sm text-muted-foreground">Automatically moves infected files to a protected location during scan.</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-success" />
                            </div>
                            <h4 className="font-bold mb-2">Files Safe</h4>
                            <p className="text-sm text-muted-foreground">Quarantined files cannot execute. You can restore them later if needed.</p>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-semibold mb-2">CAUSE</h4>
                                <p className="text-sm text-muted-foreground">Threats detected during scan that need to be isolated</p>
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg">
                                <h4 className="font-semibold mb-2">EFFECT</h4>
                                <p className="text-sm text-muted-foreground">Quarantine automatically isolates files safely, preventing system damage</p>
                            </div>
                            <div className="p-4 bg-success/5 rounded-lg">
                                <h4 className="font-semibold mb-2">FIX</h4>
                                <p className="text-sm text-muted-foreground">Review quarantined items, then delete permanent threats or restore false positives</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Quarantine Steps</h3>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <span className="font-bold text-primary">1.</span>
                                <span className="text-sm text-muted-foreground">Threats are automatically quarantined after scan completes</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-primary">2.</span>
                                <span className="text-sm text-muted-foreground">Open antivirus software → Go to "Quarantine" or "Threats" section</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-primary">3.</span>
                                <span className="text-sm text-muted-foreground">Review quarantined items list (names, locations, threat types)</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-primary">4.</span>
                                <span className="text-sm text-muted-foreground">Delete permanent threats that you're sure are malware</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-primary">5.</span>
                                <span className="text-sm text-muted-foreground">Restore false positives (safe files mistakenly flagged)</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: DELETE THREATS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Step 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Delete Threats</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Permanently remove malware from your computer. Delete only confirmed threats after reviewing quarantined items.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t7-delete.jpg"
                            alt="Delete/remove threat confirmation screen"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Trash2 class="w-16 h-16 text-destructive mx-auto mb-4" /><p class="font-bold">Delete Threats</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Action Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <List className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Threat List</p>
                                <p className="text-xs text-muted-foreground">Show all threats</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Select</p>
                                <p className="text-xs text-muted-foreground">Choose item to delete</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Trash2 className="w-10 h-10 text-destructive" />
                                </div>
                                <p className="text-sm font-semibold">Delete</p>
                                <p className="text-xs text-muted-foreground">Remove permanently</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Confirm</p>
                                <p className="text-xs text-muted-foreground">Confirm deletion</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Malicious files found during scan</li>
                                        <li>• Confirmed malware in quarantine</li>
                                        <li>• Threats that need permanent removal</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Files permanently removed</li>
                                        <li>• System becomes safer</li>
                                        <li>• No risk of reinfection</li>
                                        <li>• Disk space freed</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Delete Process Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open antivirus dashboard</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Go to Quarantine section</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Select threats you want to delete</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Click "Delete" or "Remove" button</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Confirm deletion in popup</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">6.</span>
                                    <span className="text-sm text-muted-foreground">Run scan again to verify all threats removed</span>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-sm font-semibold text-warning-foreground mb-1">Warning</p>
                                <p className="text-xs text-muted-foreground">Only delete confirmed threats. False positives can be restored from quarantine.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t7" />
            </div>
        </div>
    );
}

// --- TOPIC 8: SYSTEM CLEANUP ---
function Topic8_SystemCleanup() {
    const [cleanupSpace, setCleanupSpace] = useState({ before: 250, after: 265, freed: 0 });
    const [cleanupItems, setCleanupItems] = useState([
        { name: 'Temporary files', size: 5.2, selected: true },
        { name: 'Recycle Bin', size: 2.1, selected: true },
        { name: 'System files', size: 3.8, selected: false },
        { name: 'Old files', size: 1.5, selected: true },
    ]);

    const calculateFreed = () => {
        const selected = cleanupItems.filter(item => item.selected);
        const total = selected.reduce((sum, item) => sum + item.size, 0);
        setCleanupSpace({ ...cleanupSpace, freed: total });
    };

    React.useEffect(() => {
        calculateFreed();
    }, [cleanupItems]);

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 14 • Topic 8
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            System Cleanup
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Free up space and speed up your computer by removing temporary files, running disk cleanup, and uninstalling unused apps.
                        </p>
                        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden bg-muted mt-8 flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t8-cleanup-hero.jpg"
                                alt="Cleanup tools dashboard"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Trash2 class="w-20 h-20 text-primary mx-auto mb-4" /><p class="font-bold text-foreground">System Cleanup</p></div>';
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: TEMP FILES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Method 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Temporary Files</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Temporary files accumulate over time and take up valuable disk space. These files are safe to delete and can free up significant storage.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t8-temp-files.jpg"
                            alt="Temp files folder showing accumulation"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Folder class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Temp Files</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What are Temp Files?</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li>• Browser cache files</li>
                                <li>• Windows temporary files</li>
                                <li>• App cache and logs</li>
                                <li>• Update installation files</li>
                            </ul>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                                <img
                                    src="/src/assets/module-media/m14-t8-temp-location.jpg"
                                    alt="Temp files location diagram"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Clean</h3>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <h4 className="font-semibold mb-2">Method 1: Disk Cleanup Tool</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Search "Disk Cleanup" in Start menu</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select drive (usually C:)</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Check "Temporary files" checkbox</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Click "OK" to delete</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Method 2: Manual Clean</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Press Win+R, type: %temp%</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select all (Ctrl+A)</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Delete (Shift+Delete for permanent)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-muted rounded-lg">
                                <p className="text-sm font-semibold mb-2">Cleanup Simulator</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Space before:</span>
                                        <span className="font-bold">{cleanupSpace.before} GB</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Space after:</span>
                                        <span className="font-bold">{cleanupSpace.after + cleanupSpace.freed} GB</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2">
                                        <span className="font-semibold">Freed:</span>
                                        <span className="font-bold text-success">{cleanupSpace.freed.toFixed(1)} GB</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-semibold mb-2">CAUSE</h4>
                                <p className="text-sm text-muted-foreground">Apps create temporary files during operation, updates leave old files, cache builds up over time</p>
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg">
                                <h4 className="font-semibold mb-2">EFFECT</h4>
                                <p className="text-sm text-muted-foreground">Disk space fills up, system runs slower, performance degrades</p>
                            </div>
                            <div className="p-4 bg-success/5 rounded-lg">
                                <h4 className="font-semibold mb-2">FIX</h4>
                                <p className="text-sm text-muted-foreground">Delete temporary files regularly using Disk Cleanup or manual methods</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: DISK CLEANUP */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Method 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Disk Cleanup Tool</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Built-in Windows tool to clean your system. It can remove temporary files, system files, and other unnecessary data safely.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t8-disk-cleanup.jpg"
                            alt="Disk Cleanup tool interface"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Settings class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Disk Cleanup</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Folder className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Temp Files</h4>
                            <p className="text-sm text-muted-foreground">Safe to delete</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trash2 className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Recycle Bin</h4>
                            <p className="text-sm text-muted-foreground">Empty bin</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HardDrive className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">System Files</h4>
                            <p className="text-sm text-muted-foreground">Windows logs</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileX className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Old Files</h4>
                            <p className="text-sm text-muted-foreground">Previous versions</p>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Use</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open tool: Search "Disk Cleanup" in Start menu</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Select items to clean (checkboxes)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Review size each item will free</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Run cleanup and wait for completion</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Schedule automatic cleanup if available</span>
                                </div>
                            </div>
                            <Button className="w-full mt-4">
                                <Settings className="w-4 h-4 mr-2" />
                                Run Tool
                            </Button>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What Gets Cleaned</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Files accumulate over time</li>
                                        <li>• Updates leave old files</li>
                                        <li>• Cache builds up</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Disk space freed</li>
                                        <li>• System runs faster</li>
                                        <li>• Better performance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">FIX</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use Disk Cleanup regularly</li>
                                        <li>• Select appropriate items</li>
                                        <li>• Schedule automatic cleanup</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Before/After Comparison</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm font-semibold mb-2">Before</p>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold mb-1">120 GB</p>
                                    <p className="text-sm text-muted-foreground">used / 500 GB total</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold mb-2">After</p>
                                <div className="p-4 bg-success/10 rounded-lg">
                                    <p className="text-2xl font-bold mb-1">105 GB</p>
                                    <p className="text-sm text-muted-foreground">used / 500 GB total</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                            <p className="text-sm font-semibold">Freed: <span className="text-success">15 GB</span></p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: UNINSTALLING APPS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Method 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Uninstalling Unused Apps</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Remove programs you no longer use to free space. Large applications can take up significant disk space.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t8-uninstall.jpg"
                            alt="Apps & Features settings showing app list"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Package class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Uninstall Apps</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-muted rounded-lg text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Package className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold mb-2">CAUSE</h4>
                                <p className="text-sm text-muted-foreground">Apps take up space, unused programs accumulate over time</p>
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-center">
                                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <TrendingDown className="w-6 h-6 text-destructive" />
                                </div>
                                <h4 className="font-semibold mb-2">EFFECT</h4>
                                <p className="text-sm text-muted-foreground">Disk fills up, system slows down, less space for new files</p>
                            </div>
                            <div className="p-4 bg-success/5 rounded-lg text-center">
                                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Trash2 className="w-6 h-6 text-success" />
                                </div>
                                <h4 className="font-semibold mb-2">FIX</h4>
                                <p className="text-sm text-muted-foreground">Uninstall unused apps regularly through Settings</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Uninstall Process</h3>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4 flex items-center justify-center">
                                <img
                                    src="/src/assets/module-media/m14-t8-uninstall-process.jpg"
                                    alt="App removal process"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Step-by-Step Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open Settings (Win+I)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Go to Apps → Apps & Features</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Find app to uninstall (use search if needed)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Click app → Click "Uninstall" button</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Follow prompts in uninstaller window</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">6.</span>
                                    <span className="text-sm text-muted-foreground">Restart computer if asked</span>
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-muted rounded-lg">
                                <p className="text-sm font-semibold mb-2">App List Example</p>
                                <div className="space-y-2 text-xs">
                                    <div className="flex justify-between items-center p-2 bg-background rounded">
                                        <span>Old Game</span>
                                        <div className="flex gap-2">
                                            <Badge variant="outline">15 GB</Badge>
                                            <Button size="sm" variant="destructive">Uninstall</Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-background rounded">
                                        <span>Trial App</span>
                                        <div className="flex gap-2">
                                            <Badge variant="outline">2 GB</Badge>
                                            <Button size="sm" variant="destructive">Uninstall</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* QUICK REFERENCE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Quick Reference: All Cleanup Methods</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">Delete temp files (monthly)</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">Run Disk Cleanup (monthly)</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">Uninstall unused apps (quarterly)</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">Empty Recycle Bin (weekly)</span>
                            </div>
                            <div className="flex items-center gap-3 p-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">Clear browser cache (monthly)</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t8" />
            </div>
        </div>
    );
}

// --- TOPIC 9: BACKUP & RESTORE ---
function Topic9_BackupRestore() {
    const [restorePointDate, setRestorePointDate] = useState<string>('2024-01-15 10:30 AM');
    const [fileHistoryEnabled, setFileHistoryEnabled] = useState(true);
    const [backupStatus, setBackupStatus] = useState<'idle' | 'backing' | 'complete'>('idle');

    const startBackup = () => {
        setBackupStatus('backing');
        setTimeout(() => {
            setBackupStatus('complete');
        }, 2000);
    };

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 14 • Topic 9
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Backup & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Restore</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Protect your data with Windows restore points, file history, and cloud backups. Learn to restore your system and files when needed.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Cloud className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Backup Status</h3>
                                    <Badge className={fileHistoryEnabled ? 'bg-success' : 'bg-muted'}>
                                        {fileHistoryEnabled ? 'Active' : 'Inactive'}
                                    </Badge>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">File History</span>
                                        {fileHistoryEnabled ? (
                                            <CheckCircle className="w-5 h-5 text-success" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Cloud Backup</span>
                                        <CheckCircle className="w-5 h-5 text-success" />
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <span className="text-sm">Restore Points</span>
                                        <CheckCircle className="w-5 h-5 text-success" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: WINDOWS RESTORE POINT */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Method 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Windows Restore Point</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Restore points save your system state at a specific time. If something goes wrong, you can restore your computer to that previous working state.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t9-restore-point.jpg"
                                alt="System Restore interface showing restore points"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Clock class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Restore Point</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• System changes (updates, installations)</li>
                                        <li>• Registry modifications</li>
                                        <li>• Driver installations</li>
                                        <li>• Automatic restore point creation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• System state saved at specific time</li>
                                        <li>• Allows reverting to previous state</li>
                                        <li>• Can undo problematic changes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">FIX</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Create restore points before major changes</li>
                                        <li>• Use System Restore to revert</li>
                                        <li>• Restore to previous working state</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Save className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Create Point</p>
                                <p className="text-xs text-muted-foreground">Save system state</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Clock className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Store</p>
                                <p className="text-xs text-muted-foreground">Keep restore point</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <RotateCcw className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Restore</p>
                                <p className="text-xs text-muted-foreground">Revert if needed</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Create Restore Point</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Search "Create restore point" in Start menu</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Click "Create" button in System Properties</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Enter description (e.g., "Before Windows Update")</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Wait for creation to complete</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Confirm success message</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Restore</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open "System Restore" from Start menu</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Select "Choose a different restore point"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Pick restore point from list (with date/time)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Click "Scan for affected programs" to preview</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Confirm and start restore process</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">6.</span>
                                    <span className="text-sm text-muted-foreground">Wait for completion and restart</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: FILE HISTORY */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Method 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">File History</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            File History automatically backs up versions of your files over time. Recover previous versions if you accidentally delete or modify files.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t9-file-history.jpg"
                            alt="File History settings showing backup configuration"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><History class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">File History</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What is File History?</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                File History saves copies of files from Libraries, Desktop, Contacts, and Favorites. It keeps multiple versions, so you can go back to any previous version.
                            </p>
                            <div className="space-y-3">
                                <div className="p-3 bg-muted rounded-lg">
                                    <p className="font-semibold text-sm mb-1">CAUSE</p>
                                    <p className="text-xs text-muted-foreground">Files change, get deleted, or corrupted over time</p>
                                </div>
                                <div className="p-3 bg-primary/5 rounded-lg">
                                    <p className="font-semibold text-sm mb-1">EFFECT</p>
                                    <p className="text-xs text-muted-foreground">File History automatically saves versions regularly</p>
                                </div>
                                <div className="p-3 bg-success/5 rounded-lg">
                                    <p className="font-semibold text-sm mb-1">FIX</p>
                                    <p className="text-xs text-muted-foreground">Restore previous version from File History</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup & Use</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Setup File History:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Go to Settings → Update & Security → Backup</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Connect external drive or network location</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Click "Add a drive" and select backup location</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Turn on "Automatically back up my files"</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Restore Files:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Right-click file/folder → "Restore previous versions"</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select version from list</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Click "Restore" to recover</span></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">File History Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                <div className="flex items-center gap-3">
                                    <History className="w-8 h-8 text-primary" />
                                    <div>
                                        <p className="font-semibold">File History</p>
                                        <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
                                    </div>
                                </div>
                                <Badge variant={fileHistoryEnabled ? 'default' : 'outline'}>
                                    {fileHistoryEnabled ? 'Enabled' : 'Disabled'}
                                </Badge>
                            </div>
                            <Button onClick={() => setFileHistoryEnabled(!fileHistoryEnabled)} className="w-full">
                                {fileHistoryEnabled ? 'Disable' : 'Enable'} File History
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: CLOUD BACKUP */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Method 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Cloud Backup</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Store your files in the cloud for automatic backup and access from anywhere. Popular services include OneDrive, Google Drive, and Dropbox.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cloud className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">OneDrive</h4>
                            <p className="text-sm text-muted-foreground mb-3">Microsoft's cloud storage, integrated with Windows</p>
                            <Badge variant="outline">5 GB Free</Badge>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cloud className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Google Drive</h4>
                            <p className="text-sm text-muted-foreground mb-3">Google's cloud storage, works across devices</p>
                            <Badge variant="outline">15 GB Free</Badge>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cloud className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Dropbox</h4>
                            <p className="text-sm text-muted-foreground mb-3">Simple cloud storage, easy file sharing</p>
                            <Badge variant="outline">2 GB Free</Badge>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t9-cloud-backup.jpg"
                                alt="Cloud backup process showing files uploading"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Cloud class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Cloud Backup</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Local files can be lost</li>
                                        <li>• Hard drive failures</li>
                                        <li>• Accidental deletion</li>
                                        <li>• Device theft or damage</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Files stored securely in cloud</li>
                                        <li>• Access from any device</li>
                                        <li>• Automatic sync and backup</li>
                                        <li>• Version history available</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">FIX</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Set up cloud backup service</li>
                                        <li>• Enable automatic sync</li>
                                        <li>• Restore files from cloud when needed</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Setting Up Cloud Backup</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">OneDrive (Windows):</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Sign in with Microsoft account</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Choose folders to sync</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Files automatically upload to cloud</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Access files from OneDrive.com</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Google Drive:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Install Google Drive for Desktop</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Sign in with Google account</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Select folders to backup</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Files sync automatically</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Backup Status</p>
                                    <p className="text-sm text-muted-foreground">Last sync: {backupStatus === 'complete' ? 'Just now' : '2 hours ago'}</p>
                                </div>
                                <Button onClick={startBackup} disabled={backupStatus === 'backing'}>
                                    {backupStatus === 'backing' ? 'Backing up...' : backupStatus === 'complete' ? 'Backup Complete' : 'Start Backup'}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t9" />
            </div>
        </div>
    );
}

// --- TOPIC 10: MOBILE TROUBLESHOOTING ---
function Topic10_MobileTroubleshooting() {
    const [appStatus, setAppStatus] = useState<'running' | 'crashed'>('running');
    const [storageUsed, setStorageUsed] = useState(75);
    const [batteryLevel, setBatteryLevel] = useState(45);
    const [temperature, setTemperature] = useState<'normal' | 'hot'>('normal');

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 14 • Topic 10
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mobile Troubleshooting
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Fix common mobile device problems: app crashes, storage issues, battery drain, and overheating.
                        </p>
                        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden bg-muted mt-8 flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t10-mobile-hero.jpg"
                                alt="Mobile phone with common issues"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Smartphone class="w-20 h-20 text-primary mx-auto mb-4" /><p class="font-bold text-foreground">Mobile Issues</p></div>';
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: APP CRASHES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">App Crashes</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Apps unexpectedly close or freeze. Learn to diagnose and fix crashing apps on your mobile device.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• App bugs or corrupted data</li>
                                        <li>• Outdated app version</li>
                                        <li>• Insufficient memory (RAM)</li>
                                        <li>• Incompatible OS version</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• App closes unexpectedly</li>
                                        <li>• Freezing or unresponsiveness</li>
                                        <li>• Error messages appear</li>
                                        <li>• Data loss in app</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">FIX</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Force close and restart app</li>
                                        <li>• Update app to latest version</li>
                                        <li>• Clear app cache/data</li>
                                        <li>• Reinstall app if needed</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">App Status Simulator</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Example App</span>
                                        <Badge variant={appStatus === 'running' ? 'default' : 'destructive'}>
                                            {appStatus === 'running' ? 'Running' : 'Crashed'}
                                        </Badge>
                                    </div>
                                    <div className="h-2 bg-background rounded-full overflow-hidden">
                                        <div className={`h-full ${appStatus === 'running' ? 'bg-success' : 'bg-destructive'} transition-all`} style={{ width: appStatus === 'running' ? '100%' : '0%' }}></div>
                                    </div>
                                </div>
                                <Button onClick={() => setAppStatus(appStatus === 'running' ? 'crashed' : 'running')} className="w-full" variant={appStatus === 'running' ? 'destructive' : 'default'}>
                                    {appStatus === 'running' ? 'Simulate Crash' : 'Restart App'}
                                </Button>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Step-by-Step Fix Guide</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Quick Fixes:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Force close app: Swipe up (or recent apps button) → Swipe app away</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Restart the app and try again</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Restart your phone if issue persists</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Advanced Fixes:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Update app: Open app store → Updates → Update app</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">5.</span><span>Clear cache: Settings → Apps → [App] → Storage → Clear Cache</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">6.</span><span>Uninstall and reinstall app if still crashing</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: STORAGE FULL */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Storage Full</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Phone storage is full? Free up space by deleting unused apps, clearing cache, and managing media files.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m14-t10-storage.jpg"
                            alt="Storage usage showing full phone storage"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><HardDrive class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Storage Full</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Storage Breakdown</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Photos & Videos</span>
                                        <span className="font-bold">45%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Apps</span>
                                        <span className="font-bold">30%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>System</span>
                                        <span className="font-bold">15%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: '15%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Other</span>
                                        <span className="font-bold">10%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Too many photos/videos</li>
                                        <li>• Large apps and games</li>
                                        <li>• Cached data accumulation</li>
                                        <li>• Downloads and files</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Can't install new apps</li>
                                        <li>• Can't take photos/videos</li>
                                        <li>• Phone runs slower</li>
                                        <li>• System warnings appear</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">FIX</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Delete unused apps</li>
                                        <li>• Back up and delete old photos</li>
                                        <li>• Clear app cache</li>
                                        <li>• Use cloud storage</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Free Up Storage</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Quick Cleanup:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → Storage → Check what's using space</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Delete unused apps: Long press app → Uninstall</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Clear cache: Settings → Apps → [App] → Clear Cache</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Media Cleanup:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Review photos/videos, delete duplicates</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">5.</span><span>Back up photos to cloud, then delete from phone</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">6.</span><span>Delete downloaded files you don't need</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: BATTERY DRAIN */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Battery Drain</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Battery draining too fast? Identify what's using power and optimize settings to extend battery life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t10-battery.jpg"
                                alt="Battery usage statistics showing power consumption"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Battery class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Battery Drain</p></div>';
                                    }
                                }}
                            />
                        </div>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Battery Status</h3>
                            <div className="space-y-4 mb-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Battery Level</span>
                                        <span className="font-bold">{batteryLevel}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-6">
                                        <div className={`h-6 rounded-full ${batteryLevel > 20 ? 'bg-success' : 'bg-destructive'}`} style={{ width: `${batteryLevel}%` }}></div>
                                    </div>
                                </div>
                                <div className="p-3 bg-muted rounded-lg">
                                    <p className="text-sm font-semibold mb-2">Estimated Time Remaining:</p>
                                    <p className="text-2xl font-bold">{batteryLevel > 20 ? '4 hours' : '30 minutes'}</p>
                                </div>
                            </div>
                            <Button onClick={() => setBatteryLevel(batteryLevel > 20 ? 15 : 85)} className="w-full" variant="outline">
                                {batteryLevel > 20 ? 'Simulate Low Battery' : 'Charge Battery'}
                            </Button>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-semibold mb-2">CAUSE</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Brightness too high</li>
                                    <li>• Background apps running</li>
                                    <li>• GPS/location services</li>
                                    <li>• Old battery</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg">
                                <h4 className="font-semibold mb-2">EFFECT</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Battery drains quickly</li>
                                    <li>• Phone dies unexpectedly</li>
                                    <li>• Need frequent charging</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-success/5 rounded-lg">
                                <h4 className="font-semibold mb-2">FIX</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Lower screen brightness</li>
                                    <li>• Close background apps</li>
                                    <li>• Disable unnecessary features</li>
                                    <li>• Enable battery saver mode</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Battery Optimization Steps</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Settings to Adjust:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → Display → Reduce brightness</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Settings → Battery → Enable Battery Saver</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Settings → Location → Turn off when not needed</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">App Management:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Settings → Battery → Check which apps use most power</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">5.</span><span>Close apps running in background</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">6.</span><span>Disable auto-sync for unnecessary apps</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: OVERHEATING */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Issue 4</Badge>
                        <h2 className="text-4xl font-bold mb-4">Overheating</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Phone getting too hot? Overheating can damage your device and drain battery. Learn to prevent and fix overheating issues.
                        </p>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Temperature Status</h3>
                        <div className="flex items-center justify-center gap-8">
                            <div className="text-center">
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${temperature === 'hot' ? 'bg-destructive/20' : 'bg-success/20'}`}>
                                    <Thermometer className={`w-12 h-12 ${temperature === 'hot' ? 'text-destructive' : 'text-success'}`} />
                                </div>
                                <p className="font-bold text-lg">{temperature === 'hot' ? 'Hot' : 'Normal'}</p>
                                <p className="text-sm text-muted-foreground">{temperature === 'hot' ? '45°C' : '28°C'}</p>
                            </div>
                            <Button onClick={() => setTemperature(temperature === 'hot' ? 'normal' : 'hot')} variant="outline">
                                {temperature === 'hot' ? 'Cool Down' : 'Simulate Overheating'}
                            </Button>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cause → Effect → Fix</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">CAUSE</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Heavy apps/games running</li>
                                        <li>• Charging while using</li>
                                        <li>• Direct sunlight exposure</li>
                                        <li>• Background processes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">EFFECT</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Phone gets very hot</li>
                                        <li>• Performance slows down</li>
                                        <li>• Battery drains faster</li>
                                        <li>• Potential damage risk</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">FIX</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Close heavy apps</li>
                                        <li>• Remove from charger</li>
                                        <li>• Move to cooler location</li>
                                        <li>• Turn off phone briefly</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m14-t10-overheating.jpg"
                                alt="Phone overheating warning and temperature display"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Thermometer class="w-16 h-16 text-destructive mx-auto mb-4" /><p class="font-bold">Overheating</p></div>';
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Overheating Prevention & Fix</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Immediate Actions:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Close all apps and stop heavy usage</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Remove phone from charger if charging</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Move phone to cooler, shaded area</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Remove phone case if present</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Long-term Prevention:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">5.</span><span>Avoid using phone in direct sunlight</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">6.</span><span>Don't charge and use simultaneously</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">7.</span><span>Close background apps regularly</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">8.</span><span>Keep phone updated (OS updates fix issues)</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={14} currentTopicId="m14-t10" />
            </div>
        </div>
    );
}

// --- MAIN MODULE 14 COMPONENT (ROUTER) ---
function Module14() {
    const { topicId } = useParams();

    if (!topicId || topicId === "1" || topicId === "m14-t1") return <Topic1_SlowComputerIssues />;
    if (topicId === "2" || topicId === "m14-t2") return <Topic2_InternetTroubleshooting />;
    if (topicId === "3" || topicId === "m14-t3") return <Topic3_StartupProblems />;
    if (topicId === "4" || topicId === "m14-t4") return <Topic4_DisplayIssues />;
    if (topicId === "5" || topicId === "m14-t5") return <Topic5_AudioIssues />;
    if (topicId === "6" || topicId === "m14-t6") return <Topic6_PrinterTroubleshooting />;
    if (topicId === "7" || topicId === "m14-t7") return <Topic7_MalwareRemoval />;
    if (topicId === "8" || topicId === "m14-t8") return <Topic8_SystemCleanup />;
    if (topicId === "9" || topicId === "m14-t9") return <Topic9_BackupRestore />;
    if (topicId === "10" || topicId === "m14-t10") return <Topic10_MobileTroubleshooting />;

    // Fallback
    return <Topic1_SlowComputerIssues />;
}

export default Module14;

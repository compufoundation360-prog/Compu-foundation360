import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wifi, Lock, UserX, AlertTriangle, Save, Check, ShieldCheck, Key, Eye, EyeOff } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { getImageUrl } from "@/lib/utils";

export function SecureWiFiTopic() {
    // Router Config State
    const [ssid, setSsid] = useState("TP-Link_Default");
    const [security, setSecurity] = useState("wep");
    const [adminPassword, setAdminPassword] = useState("admin");
    const [showPassword, setShowPassword] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-20 pb-10 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-600 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            Module 10: Topic 9
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                            Secure WiFi <span className="text-cyan-600">Habits</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Your WiFi signal travels through walls. Make sure your secrets stay inside.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-cyan-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/secure-wifi-hero.jpg")}
                                alt="Secure WiFi"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <Wifi className="w-32 h-32 mb-6 text-cyan-500 animate-pulse" />
                                <p className="font-bold text-3xl font-mono tracking-tighter text-cyan-400">SIGNAL SECURED</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Encrypting airwaves...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE FUNDAMENTALS: ENCRYPTION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <Badge variant="outline" className="border-cyan-500/30 text-cyan-600 px-4 py-1">THE SCRAMBLER</Badge>
                        <h2 className="text-4xl font-bold">Encryption is Key</h2>
                        <p className="text-xl leading-relaxed text-muted-foreground/90">
                            Wireless data flies through the air as radio waves. Without encryption, anyone with a high-gain antenna can "eavesdrop" and read your data like an open book.
                        </p>
                        <div className="bg-cyan-500/5 border border-cyan-500/10 p-8 rounded-[32px] space-y-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-cyan-600 w-6 h-6" />
                                <span className="font-bold text-lg text-foreground">WPA2 & WPA3 Protocols</span>
                            </div>
                            <p className="text-muted-foreground">
                                These are the current industry standards. They take your plain data and turn it into unreadable gibberish that only your devices can decipher.
                            </p>
                            <div className="flex gap-2">
                                <Badge className="bg-green-500/10 text-green-600 border-green-200">WPA3 (Strongest)</Badge>
                                <Badge className="bg-blue-500/10 text-blue-600 border-blue-200">WPA2 (Standard)</Badge>
                                <Badge className="bg-red-500/10 text-red-600 border-red-200">WEP (Avoid! Cracked)</Badge>
                            </div>
                        </div>
                    </div>
                    <Card className="order-1 md:order-2 p-0 overflow-hidden rounded-[40px] border border-border/50 shadow-xl group">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/wifi-encryption.jpg")}
                                alt="Encryption Visualization"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-cyan-900/10">
                                <Lock className="w-24 h-24 text-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 3. NEW: DEFAULT PASSWORDS */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[50px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full"></div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-3xl animate-pulse"></div>
                                <div className="w-64 h-64 rounded-full border-4 border-dashed border-cyan-500/30 flex items-center justify-center relative">
                                    <Key className="w-32 h-32 text-cyan-400 rotate-12" />
                                    <div className="absolute -bottom-4 -right-4 bg-red-600 p-4 rounded-2xl shadow-xl animate-bounce">
                                        <AlertTriangle className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <Badge className="bg-red-500/20 text-red-400 border-red-400/30 px-4 py-1">CRITICAL MISTAKE</Badge>
                            <h2 className="text-4xl md:text-5xl font-black">Changing <span className="text-cyan-400">Default</span> Passwords</h2>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                Most routers come with a standard factory password like <span className="bg-white/10 px-2 rounded font-mono">admin</span> or <span className="bg-white/10 px-2 rounded font-mono">password</span>.
                            </p>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-4">
                                <p className="text-slate-300 italic font-medium">"It's like buying a high-security vault but leaving the factory default 0-0-0-0 combination on the lock."</p>
                                <div className="space-y-3">
                                    <p className="text-sm">Hackers have lists of every default password for every router brand. If you don't change yours, they can:</p>
                                    <ul className="grid grid-cols-2 gap-3 text-xs font-bold text-cyan-400">
                                        <li>• Redirect your traffic</li>
                                        <li>• See every device</li>
                                        <li>• Steal certificates</li>
                                        <li>• Lock you out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE THREAT: EVIL TWIN */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl group">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/evil-twin-attack.jpg")}
                                alt="Evil Twin Attack"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-red-950/20">
                                <UserX className="w-24 h-24 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                            </div>
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-red-500/30 text-red-500 px-4 py-1">SOCIAL ENGINEERING</Badge>
                        <h2 className="text-4xl font-bold">The "Evil Twin" Attack</h2>
                        <p className="text-xl leading-relaxed text-muted-foreground/90">
                            Hackers can set up a fake WiFi hotspot with a name you trust, like <span className="italic font-bold text-foreground">"Starbucks_Free_WiFi"</span>.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            When you connect, they sit in the middle, recording every website you visit and every password you type. This is known as a <strong>Man-in-the-Middle (MitM)</strong> attack.
                        </p>
                        <div className="p-6 bg-red-500/5 rounded-3xl border border-red-500/20 flex gap-4 items-start">
                            <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Golden Rule</h4>
                                <p className="text-sm text-muted-foreground">Never access bank accounts, emails, or shop online when using public WiFi without a VPN.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INTERACTIVE: ROUTER UI SIMULATOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <Badge className="bg-cyan-500/10 text-cyan-600 border-cyan-200">INTERACTIVE TRAINING</Badge>
                        <h2 className="text-4xl font-black tracking-tight">Simulator: Secure Your Network</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Take control of the router admin panel and fix the security vulnerabilities.</p>
                    </div>

                    <Card className="p-0 overflow-hidden border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[40px] bg-slate-950 text-white">
                        {/* Title Bar */}
                        <div className="p-6 bg-slate-900 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="h-4 w-px bg-white/10 mx-2"></div>
                                <span className="font-mono text-sm text-cyan-400">ROUTER_OS_v4.2.1 | 192.168.1.1</span>
                            </div>
                            <div className="px-3 py-1 rounded bg-white/5 text-[10px] uppercase tracking-widest font-black text-slate-500">
                                Status: Unsecured
                            </div>
                        </div>

                        <div className="p-10 md:p-14 grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <Label className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">WiFi Name (SSID)</Label>
                                    <Input
                                        value={ssid}
                                        onChange={(e) => setSsid(e.target.value)}
                                        className={`h-14 rounded-2xl border-2 transition-all duration-300 font-bold text-lg ${ssid === "TP-Link_Default" ? "border-red-500/50 bg-red-500/5 focus:border-red-500" : "border-green-500/50 bg-green-500/5 focus:border-green-500"}`}
                                    />
                                    {ssid === "TP-Link_Default" && (
                                        <p className="text-[10px] text-red-400 font-bold uppercase tracking-tight animate-pulse flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" /> Hacker Warning: Default names tell attackers exactly what router brand you have!
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <Label className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Encryption Mode</Label>
                                    <Select value={security} onValueChange={setSecurity}>
                                        <SelectTrigger className={`h-14 rounded-2xl border-2 transition-all duration-300 font-bold text-lg bg-white/5 ${security === "wpa3" || security === "wpa2" ? "border-green-500/50 bg-green-500/5" : "border-red-500/30"}`}>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="open">Open (No Password) ❌</SelectItem>
                                            <SelectItem value="wep">WEP (Obsolete/Unsafe) 🔥</SelectItem>
                                            <SelectItem value="wpa2">WPA2-AES (Standard) ✅</SelectItem>
                                            <SelectItem value="wpa3">WPA3 (Military Grade) 🔒</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {security === "wep" ? (
                                        <p className="text-[10px] text-red-400 font-bold">WEP is broken. A teenager can hack this in 60 seconds.</p>
                                    ) : security === "open" ? (
                                        <p className="text-[10px] text-red-500 font-bold">YOU ARE PROVIDING FREE DATA TO STEAL!</p>
                                    ) : (
                                        <p className="text-[10px] text-green-400 font-bold tracking-widest uppercase">Encryption Active: Strong signal protection enabled.</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <Label className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Admin Access Password</Label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            value={adminPassword}
                                            onChange={(e) => setAdminPassword(e.target.value)}
                                            className={`h-14 rounded-2xl border-2 transition-all duration-300 font-mono text-lg ${adminPassword === "admin" ? "border-red-500/50 bg-red-500/5" : "border-green-500/50 bg-green-500/5"}`}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-2 top-2 hover:bg-white/10"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </Button>
                                    </div>
                                    {adminPassword === "admin" && (
                                        <p className="text-[10px] text-red-400 font-bold uppercase">SECURITY BREACH: "admin" is the #1 password hackers try first.</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-[32px] border border-white/5 text-center space-y-6">
                                <div className={`w-32 h-32 rounded-full flex items-center justify-center text-6xl shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-700 ${saved ? 'scale-110 bg-green-500' : 'bg-cyan-500/20'}`}>
                                    {saved ? "🛡️" : "📡"}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter">
                                        {ssid !== "TP-Link_Default" && (security === "wpa2" || security === "wpa3") && adminPassword !== "admin" ? "Status: SECURED" : "Status: VULNERABLE"}
                                    </h4>
                                    <p className="text-sm text-slate-400">All settings must be changed from defaults to achieve "Green" status.</p>
                                </div>
                                <Button
                                    size="lg"
                                    className={`w-full h-16 rounded-2xl text-xl font-black shadow-2xl transition-all active:scale-95 ${saved ? 'bg-green-600' : 'bg-cyan-600 hover:bg-cyan-500'}`}
                                    onClick={handleSave}
                                    disabled={saved}
                                >
                                    {saved ? <Check className="w-6 h-6 mr-2" /> : <Save className="w-6 h-6 mr-2" />}
                                    {saved ? "APPLYING UPDATES..." : "SAVE SECURITY PROFILE"}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 6. GUEST NETWORKS */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-800 text-white p-12 md:p-20 rounded-[50px] shadow-2xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[150px] -z-0"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div className="text-left space-y-8">
                            <Badge className="bg-white text-cyan-700 font-black tracking-widest px-4 py-1.5 uppercase transition-transform group-hover:scale-110">SMART SECURITY</Badge>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tight">The Guest Network Hack</h3>
                            <p className="text-cyan-50 text-xl leading-relaxed italic opacity-90">
                                "Never give your house keys to every guest who visits. Give them a special key that only opens the guest room."
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20">
                                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                                        <UserX className="w-6 h-6" /> Device Isolation
                                    </h4>
                                    <p className="text-sm text-cyan-50/80">Guest networks prevent visitors from seeing your private shared folders, printers, or smart cameras.</p>
                                </div>
                                <div className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20">
                                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                                        <ShieldCheck className="w-6 h-6" /> The IoT Buffer
                                    </h4>
                                    <p className="text-sm text-cyan-50/80">Keep cheap smart home gadgets (bulbs, cameras) on the Guest network. If they get hacked, your main PC stays safe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center flex-col items-center relative">
                            <div className="w-80 h-80 bg-white/10 rounded-full border-4 border-dashed border-white/30 flex items-center justify-center animate-spin-slow transition-transform group-hover:scale-110">
                                <Wifi className="w-32 h-32 text-white animate-pulse" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                            </div>
                            <span className="mt-8 font-mono text-sm uppercase tracking-[0.4em] opacity-60">Isolate • Protect • Browse</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t9" />
            </section>
        </div>
    );
}

function Router(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <path d="M6.01 18h.01" />
            <path d="M10.01 18h.01" />
            <path d="M15 10v4" />
            <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
            <path d="M21.37 3.63a8 8 0 0 0-12.73 0" />
        </svg>
    )
}

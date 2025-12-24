import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wifi, Lock, UserX, AlertTriangle, Save, Check } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";

export function SecureWiFiTopic() {
    // Router Config State
    const [ssid, setSsid] = useState("Home_WiFi");
    const [security, setSecurity] = useState("wep");
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 9</Badge>
                        <h1 className="text-5xl font-black leading-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Secure WiFi Habits
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Your WiFi signal travels through walls. Make sure your secrets don't.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-cyan-500/20 bg-background/50 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 flex items-center justify-center">
                            <Wifi className="w-32 h-32 text-cyan-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. ZIG-ZAG 1 (Text Left, Image Right) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center text-cyan-500 mb-4">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold">Encryption is Key</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Wireless data flies through the air. Without encryption, anyone with an antenna can read it.
                            <br /><br />
                            <strong>WPA2</strong> and <strong>WPA3</strong> are protocols that scramble this data into unreadable gibberish for outsiders.
                        </p>
                    </div>
                    {/* IMAGE PLACEHOLDER */}
                    <div className="order-1 md:order-2 h-72 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl border-4 border-dashed border-cyan-300 flex items-center justify-center relative group">
                        <div className="text-center p-6">
                            <Wifi className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
                            <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER]</p>
                            <p className="text-xs text-muted-foreground mt-2">Recommended: A glowing padlock floating over WiFi waves.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ZIG-ZAG 2 (Image Left, Text Right) */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* IMAGE PLACEHOLDER */}
                    <div className="h-72 bg-gradient-to-br from-red-100 to-gray-100 dark:from-red-900/20 dark:to-gray-900/20 rounded-2xl border-4 border-dashed border-red-300 flex items-center justify-center relative group">
                        <div className="text-center p-6">
                            <UserX className="w-16 h-16 text-red-500 mx-auto mb-4" />
                            <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER]</p>
                            <p className="text-xs text-muted-foreground mt-2">Recommended: A silhouette of a hacker with a laptop sitting near "Free WiFi" sign.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center text-red-500 mb-4">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold">The "Evil Twin" Attack</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Hackers can set up a fake hotspot named <em>"Starbucks_Free_WiFi"</em>.
                            If you connect, they intercept everything—your passwords, emails, and chats.
                        </p>
                        <div className="bg-red-500/10 p-4 border-l-4 border-red-500 text-sm">
                            <strong>Golden Rule:</strong> Never do banking or sensitive work on public WiFi without a VPN.
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INTERACTIVE: ROUTER UI */}
            <section className="container mx-auto px-4 bg-muted/30 py-16">
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Simulator: Secure Your Router</h2>
                        <p className="text-muted-foreground mt-2">Fix the settings to keep hackers out.</p>
                    </div>

                    <Card className="p-8 shadow-xl bg-white dark:bg-card">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 border-b pb-4 mb-4">
                                <Router className="w-6 h-6 text-blue-500" />
                                <span className="font-bold text-lg">Admin Panel (192.168.1.1)</span>
                            </div>

                            <div className="space-y-2">
                                <Label>WiFi Name (SSID)</Label>
                                <Input
                                    value={ssid}
                                    onChange={(e) => setSsid(e.target.value)}
                                    className={ssid === "TP-Link_Default" ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50/10"}
                                />
                                {ssid === "TP-Link_Default" && <span className="text-xs text-red-500">❌ Don't use default names!</span>}
                            </div>

                            <div className="space-y-2">
                                <Label>Security Mode</Label>
                                <Select value={security} onValueChange={setSecurity}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="open">Open (No Password) ❌</SelectItem>
                                        <SelectItem value="wep">WEP (Obsolete/Unsafe) ⚠️</SelectItem>
                                        <SelectItem value="wpa2">WPA2-AES (Standard) ✅</SelectItem>
                                        <SelectItem value="wpa3">WPA3 (Best) 🔒</SelectItem>
                                    </SelectContent>
                                </Select>
                                {security === "wep" ? (
                                    <div className="text-xs text-orange-500">WEP is very easy to hack. Upgrade to WPA2/3.</div>
                                ) : security === "open" ? (
                                    <div className="text-xs text-red-500">NEVER leave your WiFi open!</div>
                                ) : (
                                    <div className="text-xs text-green-500">Great choice! High security.</div>
                                )}
                            </div>

                            <Button className="w-full gap-2" onClick={handleSave} disabled={saved}>
                                {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                                {saved ? "Settings Saved" : "Save Changes"}
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* NEW: GUEST NETWORKS */}
            <section className="container mx-auto px-4">
                <div className="bg-cyan-600 text-white p-12 rounded-[40px] shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px]"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                        <div className="text-left space-y-6">
                            <Badge className="bg-white text-cyan-600 hover:bg-white">SMART SECURITY</Badge>
                            <h3 className="text-4xl font-bold">The Guest Network Hack</h3>
                            <p className="text-cyan-50 text-lg leading-relaxed">
                                When friends ask for WiFi, don't give them your main password. Use a <strong>Guest Network</strong>.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <h4 className="font-bold">Device Isolation</h4>
                                    <p className="text-sm">Guest networks prevent visitors from seeing your shared folders, printers, or smart cameras.</p>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                    <h4 className="font-bold">The IoT Buffer</h4>
                                    <p className="text-sm">Keep cheap smart bulbs and un-updated gadgets on the Guest network so they can't infect your main PC.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <div className="w-56 h-56 bg-white/10 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center animate-pulse mb-4">
                                <Wifi className="w-24 h-24 text-white opacity-40" />
                            </div>
                            <span className="font-mono text-sm opacity-60">Isolate → Protect → Browse</span>
                        </div>
                    </div>
                </div>
            </section>

            <TopicNavigation currentModuleId={10} currentTopicId="m10-t9" />
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

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Shield, RefreshCw, Lock, Eye, Check, Star } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";

export function CyberHygieneTopic() {
    // Update Sim State
    const [updateStatus, setUpdateStatus] = useState<"pending" | "updating" | "updated">("pending");

    // Privacy Settings State
    const [settings, setSettings] = useState({
        location: true,
        adTracking: true,
        mfa: false
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(s => ({ ...s, [key]: !s[key] }));
    };

    const isSecure = !settings.location && !settings.adTracking && settings.mfa;

    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO (Split) */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 12</Badge>
                        <h1 className="text-5xl font-black leading-tight bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                            Cyber Hygiene
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Just like brushing your teeth prevents cavities, cyber hygiene prevents hacks. Small daily habits make a huge difference.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-blue-500/20 bg-background/50 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center">
                            <Shield className="w-32 h-32 text-blue-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE HYGIENE CYCLE (Visual) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">The Daily Cycle</h2>
                    <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border-2 border-dashed border-blue-300 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center p-6">
                            <RefreshCw className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-spin-slow" />
                            <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER: CYCLE DIAGRAM]</p>
                            <p className="text-xs text-muted-foreground mt-2">
                                Visual showing arrows in a circle: Update Software -&gt; Strong Passwords -&gt; Check Privacy -&gt; Repeat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SIMULATOR: SOFTWARE UPDATE */}
            <section className="container mx-auto px-4 bg-secondary/10 py-16 rounded-3xl">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Interactive: The Notification</h2>
                    <p className="text-muted-foreground">We all hate updates. But skipping them is dangerous.</p>

                    <Card className="p-6 bg-white dark:bg-card shadow-xl border-l-4 border-l-orange-500 text-left">
                        {updateStatus === "pending" && (
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg">System Update Available</h3>
                                        <p className="text-sm text-muted-foreground">Includes critical security patches for 3 vulnerabilities.</p>
                                    </div>
                                    <Badge variant="outline" className="border-orange-500 text-orange-500">Important</Badge>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" className="flex-1" onClick={() => alert("Try again! Hackers love outdated software.")}>
                                        Remind Me Later
                                    </Button>
                                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => {
                                        setUpdateStatus("updating");
                                        setTimeout(() => setUpdateStatus("updated"), 2000);
                                    }}>
                                        Update Now & Restart
                                    </Button>
                                </div>
                            </div>
                        )}

                        {updateStatus === "updating" && (
                            <div className="text-center py-8 space-y-4">
                                <RefreshCw className="w-10 h-10 animate-spin mx-auto text-blue-500" />
                                <p>Installing Security Patches... (Do not turn off)</p>
                            </div>
                        )}

                        {updateStatus === "updated" && (
                            <div className="text-center py-8 space-y-4">
                                <Check className="w-12 h-12 mx-auto text-green-500" />
                                <h3 className="font-bold text-xl text-green-600">You are Safe!</h3>
                                <p className="text-sm">The security holes are now closed.</p>
                                <Button variant="ghost" size="sm" onClick={() => setUpdateStatus("pending")}>Reset Sim</Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            {/* 4. DASHBOARD: PRIVACY CHECKUP */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Privacy Audit</h2>
                        <p className="text-muted-foreground">Configure your settings to be secure.</p>
                    </div>

                    <Card className="p-8">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-2 rounded text-blue-600"><Eye className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold">Ad Tracking</div>
                                        <div className="text-xs text-muted-foreground">Allow apps to track what you buy?</div>
                                    </div>
                                </div>
                                <Switch checked={settings.adTracking} onCheckedChange={() => toggleSetting('adTracking')} />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-100 p-2 rounded text-purple-600"><Lock className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold">Precise Location</div>
                                        <div className="text-xs text-muted-foreground">Share exactly where you are?</div>
                                    </div>
                                </div>
                                <Switch checked={settings.location} onCheckedChange={() => toggleSetting('location')} />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-2 rounded text-green-600"><Shield className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold">2-Factor Authentication</div>
                                        <div className="text-xs text-muted-foreground">Require code + password?</div>
                                    </div>
                                </div>
                                <Switch checked={settings.mfa} onCheckedChange={() => toggleSetting('mfa')} />
                            </div>

                            <div className={`p-4 rounded-lg text-center font-bold text-lg transition-colors ${isSecure ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                                {isSecure ? "✅ STATUS: SECURE" : "⚠️ STATUS: AT RISK (Turn off Tracking/Location, Turn on 2FA)"}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 5. PLEDGE */}
            <section className="container mx-auto px-4 pb-10">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold">Your Digital Health Score</h2>
                    <div className="inline-flex items-center justify-center p-10 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 rounded-full border-8 border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.5)]">
                        <Star className="w-24 h-24 text-yellow-500 fill-yellow-500 animate-pulse" />
                    </div>
                    <p className="text-xl font-medium">
                        "I pledge to keep my devices clean, updated, and private."
                    </p>
                    <Badge className="text-lg py-2 px-6 bg-yellow-500 text-black hover:bg-yellow-400">
                        Certified Cyber Smart 🏅
                    </Badge>
                </div>
            </section>

            <TopicNavigation currentModuleId={10} currentTopicId="m10-t12" />
        </div>
    );
}

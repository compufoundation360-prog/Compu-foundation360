import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { RefreshCw, Shield, ArrowRight, Activity, Zap, Smartphone, Globe, AlertTriangle, CheckCircle2, Cog, Smartphone as DeviceIcon } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";
import { cn, getImageUrl } from "@/lib/utils";

export function CyberHygieneTopic() {
    // --- INTERACTIVE 1: Software Update Simulator ---
    const [updateStatus, setUpdateStatus] = useState<"pending" | "updating" | "updated">("pending");
    const [progress, setProgress] = useState(0);

    const startUpdate = () => {
        setUpdateStatus("updating");
        setProgress(0);
    };

    useEffect(() => {
        if (updateStatus === "updating") {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setUpdateStatus("updated");
                        return 100;
                    }
                    return prev + 5;
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [updateStatus]);

    // --- INTERACTIVE 2: Privacy Audit Dashboard ---
    const [privacySettings, setPrivacySettings] = useState({
        adTracking: false,
        location: true,
        mfa: false
    });

    const isSecure = privacySettings.mfa && !privacySettings.adTracking;

    return (
        <div className="space-y-24 pb-16 fade-in animate-in slide-in-from-bottom-4 duration-1000">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/50 text-indigo-400 text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                            Module 10: Topic 12
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
                            Digital <span className="text-indigo-500">Hygiene</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Just like physical hygiene prevents illness, cyber hygiene prevents digital infections. Small, daily habits are your most powerful defense.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[40px] border border-indigo-500/10 relative group shadow-2xl">
                        <div className="relative w-full aspect-square bg-slate-950 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent)]"></div>
                            <img
                                src={getImageUrl("module-media/cyber-hygiene-hero.jpg")}
                                alt="Digital Hygiene"
                                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback */}
                            <div className="hidden w-full h-full flex items-center justify-center flex-col text-center p-12 bg-slate-900 text-white">
                                <Activity className="w-32 h-32 mb-6 text-indigo-500 animate-pulse" />
                                <p className="font-bold text-4xl font-mono tracking-tighter text-indigo-400">SYSTEM HEALTH: 98%</p>
                                <p className="text-slate-400 mt-2 italic text-sm">Routine maintenance recommended...</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE DAILY CYCLE (Visual Image Container Included) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
                    {/* Content Column */}
                    <div className="lg:col-span-3 space-y-10">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-indigo-500/30 text-indigo-400 px-4 py-1 uppercase tracking-widest font-black text-xs">the routine</Badge>
                            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">Your Daily Rhythm</h2>
                            <p className="text-xl text-muted-foreground">Cyber hygiene isn't a one-time event; it's a lifestyle of small, consistent actions.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Patch & Protect", desc: "Update your OS and apps the moment a patch is released.", icon: Zap, color: "indigo" },
                                { title: "Audit Connections", desc: "Remove unused apps and disconnect from unknown Wi-Fi.", icon: Globe, color: "blue" },
                                { title: "Manage Access", desc: "Lock your devices and use unique passphrases daily.", icon: Smartphone, color: "indigo" },
                                { title: "Review Logs", desc: "Check sign-in activity on your key accounts regularly.", icon: Activity, color: "indigo" }
                            ].map((item, i) => (
                                <Card key={i} className="p-6 bg-card border-border/50 hover:border-indigo-500/50 transition-all group rounded-[32px]">
                                    <div className={`w-12 h-12 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="lg:col-span-2">
                        <Card className="p-0 overflow-hidden rounded-[50px] border border-border/70 shadow-3xl group relative">
                            <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/cyber-hygiene-cycle.jpg")}
                                    alt="Cyber Hygiene Cycle"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full flex flex-col items-center justify-center p-12 text-center bg-slate-950">
                                    <RefreshCw className="w-24 h-24 text-indigo-500/20 mb-6 animate-spin-slow" />
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500/40">Routine Visualization</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent flex items-end p-8">
                                    <div className="space-y-2">
                                        <p className="text-white font-black italic text-xl">"Trust, but verify."</p>
                                        <p className="text-indigo-200/70 text-sm">Always assume there is an update pending.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 3. INTERACTIVE: THE UPDATE DILEMMA */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-4">
                        <Badge className="bg-indigo-500/10 text-indigo-400 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">interactive sim</Badge>
                        <h2 className="text-4xl font-black">Zero-Day Panic</h2>
                        <p className="text-muted-foreground italic">"A critical vulnerability has been found. Do you wait for the weekend or patch now?"</p>
                    </div>

                    <Card className="p-10 md:p-16 rounded-[60px] border-none bg-slate-950 text-white shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col items-center gap-12">
                            <div className="w-full max-w-md space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-xs font-black uppercase text-indigo-400 tracking-widest">System Update</p>
                                        <h4 className="text-2xl font-bold">OS Version 14.5.2</h4>
                                    </div>
                                    <Badge variant="outline" className={cn(
                                        "border-none px-3 py-1 font-black",
                                        updateStatus === 'pending' ? "bg-red-500 text-white animate-pulse" : "bg-emerald-500 text-white"
                                    )}>
                                        {updateStatus === 'pending' ? 'CRITICAL SECURITY PATCH' : 'PROTECTED'}
                                    </Badge>
                                </div>

                                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                                    <div
                                        className="h-full bg-indigo-500 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>

                                <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 italic tracking-widest">
                                    <span>Scanning vulnerability...</span>
                                    <span>{progress}% complete</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                                {updateStatus === 'pending' ? (
                                    <Button
                                        size="lg"
                                        onClick={startUpdate}
                                        className="h-16 flex-1 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-lg font-black shadow-2xl transition-all hover:scale-105"
                                    >
                                        PATCH IMMEDIATELY
                                    </Button>
                                ) : updateStatus === "updating" ? (
                                    <Button disabled size="lg" className="h-16 flex-1 rounded-2xl bg-white/10 text-white opacity-50 italic">
                                        RE-WRITING SYSTEM KERNEL...
                                    </Button>
                                ) : (
                                    <div className="w-full text-center space-y-4 animate-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                            <Shield className="w-10 h-10 text-white" />
                                        </div>
                                        <p className="font-black text-emerald-400 tracking-widest italic uppercase">Zero-Day Risk Mitigated</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 4. THE IOT HYGIENE (Visual Image Container Included) */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Card className="p-0 overflow-hidden rounded-[50px] border border-border/70 shadow-3xl group relative">
                            <div className="aspect-video lg:aspect-square bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/iot-security-visualization.jpg")}
                                    alt="IoT Security"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full flex flex-col items-center justify-center p-12 text-center bg-slate-950">
                                    <DeviceIcon className="w-24 h-24 text-indigo-500/20 mb-6" />
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500/40">Smart Home Visualization</p>
                                </div>
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <Badge className="bg-indigo-600">SMART LOCK</Badge>
                                    <Badge className="bg-orange-600">UNSECURED BULB</Badge>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-4">
                            <Badge className="bg-blue-500/10 text-blue-400 border-none uppercase font-black px-3 py-1 text-[10px] tracking-widest">the invisible front</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">The IoT Blindspot</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Your smart fridge, lightbulbs, and doorbell are small computers. If they aren't hygiene-checked, they become gateways for hackers.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Change Default Passwords", desc: "Never leave 'admin/admin' as the login for any smart device.", icon: Cog },
                                { title: "Separate Network", desc: "Put IoT devices on a 'Guest' network away from your main PC.", icon: Globe },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-[32px] bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-7 h-7 text-indigo-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{item.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRIVACY AUDIT DASHBOARD */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className={cn(
                        "p-10 md:p-16 rounded-[60px] border-none shadow-3xl transition-all duration-700",
                        isSecure ? "bg-emerald-950/20 border border-emerald-500/20" : "bg-slate-900 border border-white/5"
                    )}>
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="text-4xl font-black">Privacy Audit</h2>
                            <p className="text-muted-foreground italic">"Audit your footprint. Every toggle is a door you close on data-harvesters."</p>
                        </div>

                        <div className="space-y-8 max-w-md mx-auto">
                            {[
                                { id: 'adTracking', label: "Personalized Ad Tracking", desc: "Allow companies to follow your browsing habits.", offIsGood: true },
                                { id: 'location', label: "Precise Location Sharing", desc: "Broadcast your coordinates to all installed apps.", offIsGood: true },
                                { id: 'mfa', label: "Two-Factor Authentication", desc: "Require a second code for all logins.", offIsGood: false },
                            ].map((setting) => (
                                <div key={setting.id} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="space-y-1">
                                        <p className="font-bold text-sm">{setting.label}</p>
                                        <p className="text-[10px] text-slate-400">{setting.desc}</p>
                                    </div>
                                    <Switch
                                        checked={(privacySettings as any)[setting.id]}
                                        onCheckedChange={(val) => setPrivacySettings(prev => ({ ...prev, [setting.id]: val }))}
                                        className="data-[state=checked]:bg-indigo-500"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center animate-in fade-in duration-1000">
                            <div className={cn(
                                "inline-flex items-center gap-4 px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl",
                                isSecure ? "bg-emerald-500 text-white" : "bg-red-600 text-white"
                            )}>
                                {isSecure ? <Shield className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                                {isSecure ? "Privacy: Shielded" : "Privacy: At Risk"}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* 6. NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <TopicNavigation currentModuleId={10} currentTopicId="m10-t12" />
            </section>

        </div>
    );
}

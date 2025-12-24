import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Cloud, HardDrive, Usb, AlertTriangle, RefreshCw, CheckCircle2 } from "lucide-react";
import { TopicNavigation } from "@/components/TopicNavigation";

export function BackupTopic() {
    // Ransomware Simulator State
    const [gameState, setGameState] = useState<"safe" | "infected" | "restored">("safe");

    return (
        <div className="space-y-20 fade-in animate-in slide-in-from-bottom-4 duration-700">

            {/* 1. HERO (Split Layout) */}
            <section className="container mx-auto px-4 pt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="space-y-6 text-left">
                        <Badge variant="outline" className="px-4 py-1 text-base border-primary/50 text-primary">MODULE 10: TOPIC 10</Badge>
                        <h1 className="text-5xl font-black leading-tight bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                            Backup & Recovery
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Data loss can happen in a blink. Deletion, theft, or ransomware. Backups are your time machine.
                        </p>
                    </div>
                    {/* Hero Visual */}
                    <Card className="p-2 rounded-[30px] border-2 border-emerald-500/20 bg-background/50 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="aspect-video rounded-[24px] bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 flex items-center justify-center">
                            <Save className="w-32 h-32 text-emerald-500 drop-shadow-xl" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 2. THE 3-2-1 RULE (Visual Concept) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl font-bold">The Golden Rule: 3-2-1</h2>
                    <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/40 dark:to-gray-900/40 rounded-3xl border-4 border-dashed border-gray-400 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="flex gap-4 mb-4">
                            <span className="text-6xl font-black text-gray-400">3</span>
                            <span className="text-6xl font-black text-gray-400">2</span>
                            <span className="text-6xl font-black text-gray-400">1</span>
                        </div>
                        <p className="font-mono text-sm text-muted-foreground">[IMAGE PLACEHOLDER: 3-2-1 DIAGRAM]</p>
                        <p className="text-xs text-muted-foreground mt-2 max-w-sm">
                            Visual showing: 3 Total Copies of Data, Stored on 2 Different Media types, with 1 Copy Offsite (Cloud).
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-sm font-medium">
                        <div className="p-4 bg-secondary/20 rounded-xl">1. Keep 3 Copies</div>
                        <div className="p-4 bg-secondary/20 rounded-xl">2. Use 2 Types of Storage</div>
                        <div className="p-4 bg-secondary/20 rounded-xl">3. Keep 1 Copy Offsite</div>
                    </div>
                </div>
            </section>

            {/* 3. COMPARISON (Cloud vs Local) */}
            <section className="container mx-auto px-4 bg-secondary/10 py-16 rounded-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Where to keep your Backup?</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card className="p-6 hover:border-blue-500 border-t-4 border-t-blue-500 transition-all">
                        <Cloud className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Cloud Storage</h3>
                        <p className="text-sm text-muted-foreground mb-4">Google Drive, OneDrive, iCloud.</p>
                        <ul className="text-xs space-y-2 list-disc list-inside">
                            <li className="text-green-600">Safe from fire/theft</li>
                            <li className="text-green-600">Automatic Sync</li>
                            <li className="text-red-500">Need Internet</li>
                        </ul>
                    </Card>
                    <Card className="p-6 hover:border-orange-500 border-t-4 border-t-orange-500 transition-all">
                        <HardDrive className="w-10 h-10 text-orange-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">External HDD/SSD</h3>
                        <p className="text-sm text-muted-foreground mb-4">A physical drive you plug in.</p>
                        <ul className="text-xs space-y-2 list-disc list-inside">
                            <li className="text-green-600">Very Fast</li>
                            <li className="text-green-600">One-time cost</li>
                            <li className="text-red-500">Can be lost/broken</li>
                        </ul>
                    </Card>
                    <Card className="p-6 hover:border-gray-500 border-t-4 border-t-gray-500 transition-all">
                        <Usb className="w-10 h-10 text-gray-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">USB Stick</h3>
                        <p className="text-sm text-muted-foreground mb-4">Good for small, quick transfers.</p>
                        <ul className="text-xs space-y-2 list-disc list-inside">
                            <li className="text-green-600">Portable</li>
                            <li className="text-red-500">Easily lost</li>
                            <li className="text-red-500">Low capacity</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* 4. RANSOMWARE SIMULATOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl font-bold">Simulator: The Ransomware Attack</h2>

                    <Card className={`p-8 border-4 transition-colors duration-500 ${gameState === 'infected' ? 'border-red-600 bg-red-950' : gameState === 'restored' ? 'border-green-500 bg-green-950' : 'border-gray-800 bg-slate-900'}`}>
                        {gameState === "safe" && (
                            <div className="space-y-6 py-10">
                                <HardDrive className="w-20 h-20 text-blue-400 mx-auto" />
                                <h3 className="text-2xl font-bold text-white">System Status: Normal</h3>
                                <p className="text-gray-400">You are browsing the web... Suddenly you click a bad link!</p>
                                <Button variant="destructive" size="lg" onClick={() => setGameState("infected")}>
                                    Click Suspicious Link
                                </Button>
                            </div>
                        )}

                        {gameState === "infected" && (
                            <div className="space-y-6 py-4 animate-pulse">
                                <AlertTriangle className="w-24 h-24 text-red-500 mx-auto" />
                                <h3 className="text-3xl font-black text-red-500 uppercase tracking-widest">FILES ENCRYPTED</h3>
                                <div className="bg-black/50 p-4 rounded text-red-400 font-mono text-sm mb-4">
                                    "Your photos and documents have been locked. Pay $500 Bitcoin to unlock them."
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="outline" className="opacity-50 cursor-not-allowed border-red-500 text-red-500" disabled>
                                        Recover Files (Locked)
                                    </Button>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white font-bold" onClick={() => setGameState("restored")}>
                                        <RefreshCw className="mr-2 w-4 h-4" /> Restore from Backup
                                    </Button>
                                </div>
                                <p className="text-xs text-white/50">Lesson: Never pay the ransom. Use your backup!</p>
                            </div>
                        )}

                        {gameState === "restored" && (
                            <div className="space-y-6 py-10">
                                <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
                                <h3 className="text-2xl font-bold text-green-400">System Restored!</h3>
                                <p className="text-green-200">Thanks to your cloud backup, you didn't lose anything (and didn't pay the hackers).</p>
                                <Button variant="outline" onClick={() => setGameState("safe")} className="border-green-500 text-green-400">
                                    Reset Simulator
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </section>

            {/* 5. CHECKLIST */}
            <section className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl border space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-primary" />  Backup Checklist
                    </h3>
                    <div className="space-y-3">
                        {["Turn on 'Windows Backup' or 'File History'", "Install Google Drive or OneDrive", "Connect an External Drive once a month", "Test your backup (Try to restore 1 file)"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                                <div className="w-6 h-6 rounded-full border-2 border-primary/50" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: SYSTEM RESTORE */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white p-10 rounded-[40px] flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 space-y-6 text-left">
                        <Badge className="bg-emerald-500">WINDOWS TIP</Badge>
                        <h3 className="text-3xl font-bold">System Restore Points</h3>
                        <p className="text-slate-300 leading-relaxed">
                            Think of a <strong>Restore Point</strong> as a "Save Game" for your computer's settings and drivers.
                            If you install a bad update or your PC starts acting weird, you can "Wind Back the Clock" without losing your photos or documents.
                        </p>
                        <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded text-sm">
                            <strong>Note:</strong> This only fixes system files and settings. It does NOT backup your personal files (Photos/Words). You still need the 3-2-1 rule!
                        </div>
                    </div>
                    <div className="text-9xl opacity-20">🕒</div>
                </div>
            </section>

            <TopicNavigation currentModuleId={10} currentTopicId="m10-t10" />
        </div>
    );
}

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Smartphone, Settings, Shield, Lock, Search, HardDrive, 
    Trash2, RefreshCw, CheckCircle, XCircle, ArrowRight,
    Battery, Power, Wifi, Bluetooth, Monitor, Volume2,
    AlertTriangle, Folder, Key, Eye, EyeOff, CreditCard, Mic,
    Cloud, Download, Upload, Activity, Zap, Plug, Cpu, BarChart3,
    List, X, PlayCircle, PauseCircle, Bell, Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TopicNavigation } from "@/components/TopicNavigation";

// --- TOPIC 1: MOBILE OS BASICS ---
function Topic1_MobileOSBasics() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 1
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mobile OS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Basics</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Understanding mobile operating systems: Android, iOS, and the system apps that power your phone.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Mobile Operating Systems</h3>
                                    <p className="text-sm text-muted-foreground">Android & iOS</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: ANDROID */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">OS 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Android Operating System</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Android is Google's mobile operating system, powering billions of devices worldwide. It's open-source, customizable, and available on phones from many manufacturers.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t1-android.jpg"
                            alt="Android phone home screen and interface"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Smartphone class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Android Interface</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">What is Android?</h4>
                            <p className="text-sm text-muted-foreground">Google's mobile OS, open-source and flexible</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Key Features</h4>
                            <p className="text-sm text-muted-foreground">Widgets, app drawer, customization options</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <RefreshCw className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Open Source</h4>
                            <p className="text-sm text-muted-foreground">Free, flexible, modified by manufacturers</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Customization</h4>
                            <p className="text-sm text-muted-foreground">Highly customizable home screens</p>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Made by Google, based on Linux</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Open source - developers can modify it</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Available on phones from Samsung, Google, OnePlus, and more</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Google Play Store for apps</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Widgets and customizable home screens</span>
                                </li>
                            </ul>
                        </Card>
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t1-android-versions.jpg"
                                alt="Android version comparison showing UI evolution"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: iOS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">OS 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">iOS (iPhone Operating System)</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            iOS is Apple's mobile operating system, known for its simplicity, security, and seamless integration with Apple devices.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t1-ios.jpg"
                                alt="iPhone interface with iOS home screen"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Smartphone class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">iOS Interface</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Key Characteristics</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Simple Design</h4>
                                    <p className="text-sm text-muted-foreground">Clean, intuitive interface that's easy to use</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">App Store Ecosystem</h4>
                                    <p className="text-sm text-muted-foreground">Curated app store with strict quality control</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Privacy-Focused</h4>
                                    <p className="text-sm text-muted-foreground">Strong privacy protections and data security</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Apple Integration</h4>
                                    <p className="text-sm text-muted-foreground">Seamlessly works with Mac, iPad, Apple Watch</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-center">Android vs iOS Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left p-3 font-semibold">Feature</th>
                                        <th className="text-left p-3 font-semibold">Android</th>
                                        <th className="text-left p-3 font-semibold">iOS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border">
                                        <td className="p-3">Customization</td>
                                        <td className="p-3 text-muted-foreground">High - widgets, launchers, themes</td>
                                        <td className="p-3 text-muted-foreground">Limited - controlled by Apple</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="p-3">App Source</td>
                                        <td className="p-3 text-muted-foreground">Multiple - Play Store, sideloading</td>
                                        <td className="p-3 text-muted-foreground">App Store only</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="p-3">Device Availability</td>
                                        <td className="p-3 text-muted-foreground">Many brands (Samsung, Google, etc.)</td>
                                        <td className="p-3 text-muted-foreground">iPhone only</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Price Range</td>
                                        <td className="p-3 text-muted-foreground">Wide range (budget to premium)</td>
                                        <td className="p-3 text-muted-foreground">Premium pricing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: SYSTEM APPS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Built-in Apps</Badge>
                        <h2 className="text-4xl font-bold mb-4">System Apps</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Pre-installed apps that come with your phone. These provide essential functions and cannot be deleted like regular apps.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t1-system-apps.jpg"
                            alt="System apps icon grid on mobile home screen"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Folder class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">System Apps</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Common System Apps Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Settings</p>
                                <p className="text-xs text-muted-foreground">Configure device</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Smartphone className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Phone</p>
                                <p className="text-xs text-muted-foreground">Make calls</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Messages</p>
                                <p className="text-xs text-muted-foreground">Send texts</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Monitor className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Camera</p>
                                <p className="text-xs text-muted-foreground">Take photos</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">App Categories</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Communication</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Phone - Make and receive calls</li>
                                        <li>• Messages - Send text messages</li>
                                        <li>• Email - Access email accounts</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Settings</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Settings - Configure device options</li>
                                        <li>• Security - Manage locks and permissions</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Media</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Camera - Take photos and videos</li>
                                        <li>• Gallery/Photos - View media files</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Essential System Apps</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Phone App</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Make and receive phone calls</li>
                                        <li>• Manage contacts</li>
                                        <li>• View call history</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Settings App</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Configure device preferences</li>
                                        <li>• Manage system settings</li>
                                        <li>• Control privacy and security</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <h4 className="font-semibold mb-2">Camera App</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Take photos and videos</li>
                                        <li>• Built-in editing features</li>
                                        <li>• Access to gallery</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">System Apps vs Downloaded Apps</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">System Apps</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Pre-installed on phone</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Cannot be deleted (usually)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Essential device functions</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Updated with OS updates</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Downloaded Apps</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Install from app store</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Can be deleted if not needed</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Optional features</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Updated independently</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t1" />
            </div>
        </div>
    );
}

// --- TOPIC 2: MOBILE STORAGE ---
function Topic2_MobileStorage() {
    const [storageData, setStorageData] = useState({
        apps: 45,
        photos: 30,
        system: 15,
        other: 10,
    });

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 2
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mobile Storage
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Manage your phone's storage space: internal storage, SD cards, and clearing cache to keep your device running smoothly.
                        </p>
                        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden bg-muted mt-8 flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t2-storage-hero.jpg"
                                alt="Storage breakdown visualization"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><HardDrive class="w-20 h-20 text-primary mx-auto mb-4" /><p class="font-bold text-foreground">Storage Overview</p></div>';
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: INTERNAL STORAGE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Storage Type 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">Internal Storage</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Built-in storage on your phone where apps, photos, and files are stored. Understanding how it's used helps manage space effectively.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t2-internal-storage.jpg"
                                alt="Phone storage settings showing usage"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><HardDrive class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Internal Storage</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Storage Breakdown</h3>
                            <div className="space-y-4 mb-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Apps</span>
                                        <span className="font-bold">{storageData.apps}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: `${storageData.apps}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Photos</span>
                                        <span className="font-bold">{storageData.photos}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: `${storageData.photos}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>System</span>
                                        <span className="font-bold">{storageData.system}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: `${storageData.system}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Other</span>
                                        <span className="font-bold">{storageData.other}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div className="h-3 rounded-full bg-primary" style={{ width: `${storageData.other}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SD CARDS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Storage Type 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">SD Cards (Expandable Storage)</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Add extra storage space with SD cards. Expand your phone's capacity to store more photos, videos, and apps.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t2-sd-card.jpg"
                            alt="SD card slot and card insertion"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><CreditCard class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">SD Card</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CreditCard className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">What is SD Card?</h4>
                            <p className="text-sm text-muted-foreground">External storage card that expands phone capacity</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Benefits</h4>
                            <p className="text-sm text-muted-foreground">More space for photos, videos, and apps</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">How to Use</h4>
                            <p className="text-sm text-muted-foreground">Insert card, format if needed, use for storage</p>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">SD Card Types</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>MicroSD - Smallest, most common</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>SDHC - Up to 32GB capacity</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>SDXC - Up to 2TB capacity</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Insert SD card in phone's card slot</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Format card if prompted (Settings → Storage → SD Card → Format)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Move apps/files to card (Settings → Apps → [App] → Storage → Change to SD Card)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Set SD card as default storage location for photos/media</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CLEARING CACHE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Storage Management</Badge>
                        <h2 className="text-4xl font-bold mb-4">Clearing Cache</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Cache files help apps load faster but can fill up storage. Learn how to clear cache to free up space safely.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t2-cache.jpg"
                            alt="Cache data visualization"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Trash2 class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Cache Data</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Folder className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Cache Builds</p>
                                <p className="text-xs text-muted-foreground">Apps save temp files</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Check Size</p>
                                <p className="text-xs text-muted-foreground">View in settings</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Trash2 className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Clear Cache</p>
                                <p className="text-xs text-muted-foreground">Delete cache</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Freed Space</p>
                                <p className="text-xs text-muted-foreground">More storage</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What is Cache?</h3>
                            <div className="space-y-3">
                                <p className="text-sm text-muted-foreground">Temporary files stored by apps to load faster. Safe to delete - apps rebuild cache when used.</p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Temporary files stored by apps</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Helps apps load faster</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Can accumulate over time</span>
                                    </li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Clear Cache</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Method 1: Per App</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → Apps → Select app</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Storage → Clear Cache</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Method 2: Storage Cleanup</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → Storage</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Tap "Cache" → Clear</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-muted rounded-lg">
                                <p className="text-xs text-muted-foreground">Note: Safe to clear - apps rebuild cache automatically when used again.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t2" />
            </div>
        </div>
    );
}

// --- TOPIC 3: MOBILE SECURITY ---
function Topic3_MobileSecurity() {
    const [permissionState, setPermissionState] = useState<'allow' | 'deny' | 'ask'>('ask');
    const [lockMethod, setLockMethod] = useState<'pattern' | 'pin' | 'fingerprint' | 'face'>('pattern');

    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 3
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mobile <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive">Security</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Protect your phone with app permissions, screen locks, encryption, and Find My Device features.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Security Features</h3>
                                    <Badge className="bg-success">Active</Badge>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: APP PERMISSIONS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Security Feature 1</Badge>
                        <h2 className="text-4xl font-bold mb-4">App Permissions</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Control what apps can access on your phone. Manage permissions to protect your privacy and data.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t3-permissions.jpg"
                            alt="App permissions settings screen"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Shield class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">App Permissions</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Monitor className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Camera</h4>
                            <p className="text-sm text-muted-foreground">Access to take photos/videos</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Location</h4>
                            <p className="text-sm text-muted-foreground">GPS and location data</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Folder className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Contacts</h4>
                            <p className="text-sm text-muted-foreground">Access to phone contacts</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mic className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Microphone</h4>
                            <p className="text-sm text-muted-foreground">Audio recording access</p>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Permission Types</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Camera - For taking photos/videos</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Microphone - For recording audio</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Location - For GPS/navigation</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Contacts - For accessing phone book</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Storage - For accessing files</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Management Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Apps → Permissions</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Select app to manage</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Toggle permissions on/off</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Choose: Allow / Deny / Ask every time</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-muted rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Example App Permission:</span>
                                    <Badge variant={permissionState === 'allow' ? 'default' : permissionState === 'deny' ? 'destructive' : 'outline'}>
                                        {permissionState === 'allow' ? 'Allowed' : permissionState === 'deny' ? 'Denied' : 'Ask'}
                                    </Badge>
                                </div>
                                <Button 
                                    size="sm" 
                                    className="w-full mt-2" 
                                    variant="outline"
                                    onClick={() => setPermissionState(permissionState === 'ask' ? 'allow' : permissionState === 'allow' ? 'deny' : 'ask')}
                                >
                                    Toggle Permission
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SCREEN LOCK */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Security Feature 2</Badge>
                        <h2 className="text-4xl font-bold mb-4">Screen Lock</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Protect your phone from unauthorized access with screen lock methods: pattern, PIN, password, fingerprint, or face recognition.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t3-screen-lock.jpg"
                            alt="Different screen lock methods"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Lock class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Screen Lock</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4 text-center">Lock Methods Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left p-3 font-semibold">Method</th>
                                        <th className="text-left p-3 font-semibold">Security</th>
                                        <th className="text-left p-3 font-semibold">Convenience</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border">
                                        <td className="p-3 font-semibold">Pattern</td>
                                        <td className="p-3 text-muted-foreground">Medium</td>
                                        <td className="p-3 text-muted-foreground">High</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="p-3 font-semibold">PIN</td>
                                        <td className="p-3 text-muted-foreground">Medium</td>
                                        <td className="p-3 text-muted-foreground">High</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="p-3 font-semibold">Password</td>
                                        <td className="p-3 text-muted-foreground">High</td>
                                        <td className="p-3 text-muted-foreground">Medium</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="p-3 font-semibold">Fingerprint</td>
                                        <td className="p-3 text-muted-foreground">High</td>
                                        <td className="p-3 text-muted-foreground">Very High</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold">Face ID</td>
                                        <td className="p-3 text-muted-foreground">High</td>
                                        <td className="p-3 text-muted-foreground">Very High</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup Steps</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Security → Screen Lock</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Choose lock method (Pattern, PIN, Password, etc.)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Set pattern/PIN/password</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Confirm pattern/PIN/password</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Set lock timeout (immediately, 30 seconds, etc.)</span>
                                </div>
                            </div>
                        </Card>

                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t3-lock-methods.jpg"
                                alt="Lock method icons showing different types"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: DEVICE ENCRYPTION */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Security Feature 3</Badge>
                        <h2 className="text-4xl font-bold mb-4">Device Encryption</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Encrypt your phone's data so it's unreadable without the unlock key. Protects your data even if your phone is stolen.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t3-encryption.jpg"
                            alt="Encryption process visualization"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Key class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Encryption</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Encryption Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Folder className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Data</p>
                                <p className="text-xs text-muted-foreground">Your files</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Key className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Encryption</p>
                                <p className="text-xs text-muted-foreground">Encrypt with key</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Lock className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Encrypted Data</p>
                                <p className="text-xs text-muted-foreground">Scrambled data</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Shield className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Protected</p>
                                <p className="text-xs text-muted-foreground">Safe data</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What it Does</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Scrambles data so it's unreadable without key</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Requires unlock key (PIN/password) to decrypt</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Protects files even if phone is stolen</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Auto-enabled on newer phones with screen lock</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Enable</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Android:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → Security → Encrypt phone</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Follow on-screen instructions</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Keep phone plugged in during encryption</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">iOS:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Enabled by default when passcode is set</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Settings → Face ID & Passcode (verify it's enabled)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Note: Encryption takes time. Keep phone plugged in and don't interrupt the process.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: FIND MY DEVICE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Security Feature 4</Badge>
                        <h2 className="text-4xl font-bold mb-4">Find My Device</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Locate, lock, or erase your lost phone remotely. Essential security feature to protect your data if your phone is lost or stolen.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t3-find-device.jpg"
                            alt="Find My Device interface showing map"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Search class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Find My Device</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Action Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <AlertTriangle className="w-10 h-10 text-destructive" />
                                </div>
                                <p className="text-sm font-semibold">Phone Lost</p>
                                <p className="text-xs text-muted-foreground">Can't find phone</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Search className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Locate</p>
                                <p className="text-xs text-muted-foreground">See location on map</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Lock className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Ring/Lock</p>
                                <p className="text-xs text-muted-foreground">Make sound or lock</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Trash2 className="w-10 h-10 text-destructive" />
                                </div>
                                <p className="text-sm font-semibold">Erase</p>
                                <p className="text-xs text-muted-foreground">Delete all data</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Features</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Locate device on map in real-time</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Play sound to find nearby phone</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Lock phone remotely with message</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Erase all data if phone can't be recovered</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup & Use Guide</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Setup:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → Security → Find My Device</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Enable service</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Sign in with Google/Apple account</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Use (from web/other device):</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Go to find.google.com or icloud.com/find</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Sign in with same account</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Select your device</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Choose action: Locate, Ring, Lock, or Erase</span></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t3" />
            </div>
        </div>
    );
}

// --- TOPIC 4: BACKUP ON MOBILE ---
function Topic4_MobileBackup() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 4
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Backup on <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mobile</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Protect your data with cloud backups. Learn Google Backup for Android and iCloud Backup for iOS.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Cloud className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Cloud Backup</h3>
                                    <p className="text-sm text-muted-foreground">Auto-sync your data</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: GOOGLE BACKUP */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Android Backup</Badge>
                        <h2 className="text-4xl font-bold mb-4">Google Backup</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Google Backup automatically saves your Android phone's data to Google Drive, including apps, settings, contacts, photos, and more.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t4-google-backup.jpg"
                                alt="Google Backup settings interface"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Cloud class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Google Backup</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What Gets Backed Up</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>App data and settings</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Contacts and calendar events</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Photos and videos (via Google Photos)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>WiFi passwords and settings</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Call history and messages</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Backup Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Enable Backup</p>
                                <p className="text-xs text-muted-foreground">Turn on in settings</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Upload className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Auto Upload</p>
                                <p className="text-xs text-muted-foreground">Data syncs to cloud</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Cloud className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Google Drive</p>
                                <p className="text-xs text-muted-foreground">Stored securely</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Restore Ready</p>
                                <p className="text-xs text-muted-foreground">Can restore anytime</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → System → Backup</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Turn on "Back up to Google Drive"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Select Google account for backup</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Tap "Back up now" for immediate backup</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Restore Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">During phone setup, sign in with same Google account</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Select "Restore from backup" when prompted</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Choose backup to restore from</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Wait for restore to complete</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: ICLOUD BACKUP */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">iOS Backup</Badge>
                        <h2 className="text-4xl font-bold mb-4">iCloud Backup</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            iCloud Backup automatically saves your iPhone and iPad data, ensuring you never lose important information.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t4-icloud-backup.jpg"
                            alt="iCloud Backup settings interface"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Cloud class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">iCloud Backup</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Save className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Automatic</h4>
                            <p className="text-sm text-muted-foreground">Backs up daily when connected to WiFi and charging</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Secure</h4>
                            <p className="text-sm text-muted-foreground">Encrypted and stored in Apple's secure servers</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <RefreshCw className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Easy Restore</h4>
                            <p className="text-sm text-muted-foreground">Restore entire device or selected data</p>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">What Gets Backed Up</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Included in Backup:</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>App data and settings</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Photos and videos</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Messages and call history</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Device settings and preferences</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Not Included (synced separately):</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                        <span>Content from iTunes/App Store</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                        <span>Photos already in iCloud Photos</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                        <span>iCloud Mail and contacts</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → [Your Name] → iCloud</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Tap "iCloud Backup"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Turn on "iCloud Backup"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Tap "Back Up Now" for immediate backup</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-muted rounded-lg">
                                <p className="text-xs text-muted-foreground">Note: Free iCloud includes 5GB. You may need to upgrade storage for full backups.</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Restore Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">During device setup, choose "Restore from iCloud Backup"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Sign in with Apple ID</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Select backup from list</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Wait for restore process to complete</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t4" />
            </div>
        </div>
    );
}

// --- TOPIC 5: MOBILE UPDATES ---
function Topic5_MobileUpdates() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 5
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mobile <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Updates</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Keep your phone secure and running smoothly. Learn about OS updates and app updates.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <RefreshCw className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Stay Updated</h3>
                                    <p className="text-sm text-muted-foreground">OS & App updates</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: OS UPDATES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">System Updates</Badge>
                        <h2 className="text-4xl font-bold mb-4">OS Updates</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Operating system updates bring new features, security patches, bug fixes, and performance improvements to your phone.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t5-os-update.jpg"
                                alt="OS update notification and settings"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><RefreshCw class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">OS Update</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Why Update?</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Security patches protect against vulnerabilities</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>New features and improvements</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Bug fixes improve stability</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Performance optimizations</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Better compatibility with apps</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Update Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Bell className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Notification</p>
                                <p className="text-xs text-muted-foreground">Update available</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Download className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Download</p>
                                <p className="text-xs text-muted-foreground">Get update file</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Plug className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Install</p>
                                <p className="text-xs text-muted-foreground">Update phone</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Updated</p>
                                <p className="text-xs text-muted-foreground">New version ready</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Android Updates</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → System → System Update</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Tap "Check for update"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Download update (WiFi recommended)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Install when ready (phone will restart)</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-muted rounded-lg">
                                <p className="text-xs text-muted-foreground">Note: Keep phone charged (50%+) and connected to WiFi for best experience.</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">iOS Updates</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → General → Software Update</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Tap "Download and Install"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Enter passcode if prompted</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Wait for installation (phone will restart)</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: APP UPDATES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Application Updates</Badge>
                        <h2 className="text-4xl font-bold mb-4">App Updates</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            App updates bring new features, bug fixes, and security improvements. Keep your apps up to date automatically.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t5-app-update.jpg"
                            alt="App store update interface"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><RefreshCw class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">App Updates</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Auto Update</h4>
                            <p className="text-sm text-muted-foreground">Apps update automatically when connected to WiFi</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Security</h4>
                            <p className="text-sm text-muted-foreground">Fixes vulnerabilities and security issues</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Performance</h4>
                            <p className="text-sm text-muted-foreground">Improves speed and stability</p>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Enable Auto Updates</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Google Play Store (Android):</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Open Play Store app</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Menu → Settings</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Auto-update apps → Over WiFi only (recommended)</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">App Store (iOS):</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Settings → App Store</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Turn on "App Updates"</span></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Manual Update</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Google Play Store:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Open Play Store</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Tap your profile icon</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Tap "Manage apps & device"</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Tap "Update all" or select apps to update</span></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">App Store:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Open App Store</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Tap your profile icon</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">3.</span><span>Scroll to "Upcoming Updates"</span></div>
                                        <div className="flex gap-2"><span className="font-bold text-primary">4.</span><span>Tap "Update" next to app or "Update All"</span></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t5" />
            </div>
        </div>
    );
}

// --- TOPIC 6: MOBILE SETTINGS ---
function Topic6_MobileSettings() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 6
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Mobile <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Settings</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Configure WiFi, Hotspot, Bluetooth, Display, and Sound settings to customize your mobile experience.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Settings className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Device Settings</h3>
                                    <p className="text-sm text-muted-foreground">Network & Display</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: WIFI SETTINGS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Network Settings</Badge>
                        <h2 className="text-4xl font-bold mb-4">WiFi Settings</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Connect to wireless networks, manage saved networks, and configure WiFi preferences.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t6-wifi.jpg"
                                alt="WiFi settings interface"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Wifi class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">WiFi Settings</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">WiFi Features</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Connect to wireless networks</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Auto-connect to saved networks</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>View network password</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Forget networks</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>WiFi hotspot sharing</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Connect to WiFi</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → WiFi</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Turn on WiFi toggle</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Select network from list</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Enter password if required</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Tap "Connect"</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Manage Networks</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → WiFi → Saved Networks</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Tap network to view details</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Tap "Forget" to remove network</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">View password (requires authentication)</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: HOTSPOT */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Network Sharing</Badge>
                        <h2 className="text-4xl font-bold mb-4">Mobile Hotspot</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Share your mobile data connection with other devices via WiFi, Bluetooth, or USB tethering.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t6-hotspot.jpg"
                            alt="Mobile hotspot settings"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Wifi class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Mobile Hotspot</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Hotspot Setup Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Configure</p>
                                <p className="text-xs text-muted-foreground">Set name & password</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Power className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Enable</p>
                                <p className="text-xs text-muted-foreground">Turn on hotspot</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Wifi className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Share</p>
                                <p className="text-xs text-muted-foreground">Connect devices</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Connected</p>
                                <p className="text-xs text-muted-foreground">Devices can use data</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Setup Guide</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Network & Internet → Hotspot</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Configure hotspot name (SSID)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Set strong password</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Turn on "WiFi Hotspot" toggle</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Connect other devices using password</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Note: Hotspot uses mobile data. Monitor usage to avoid exceeding data limits.</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Tips & Best Practices</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Use strong password to prevent unauthorized access</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Turn off when not in use to save battery</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Check data usage regularly</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Limit number of connected devices</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BLUETOOTH */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Wireless Connection</Badge>
                        <h2 className="text-4xl font-bold mb-4">Bluetooth Settings</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Connect wireless accessories like headphones, speakers, smartwatches, and other devices via Bluetooth.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Bluetooth className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Pair Devices</h4>
                            <p className="text-sm text-muted-foreground">Connect headphones, speakers, and accessories</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Manage</h4>
                            <p className="text-sm text-muted-foreground">View paired devices and connection settings</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <X className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Unpair</h4>
                            <p className="text-sm text-muted-foreground">Remove devices you no longer use</p>
                        </Card>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t6-bluetooth.jpg"
                            alt="Bluetooth settings and pairing"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Bluetooth class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Bluetooth</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Pair New Device</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Connected Devices → Bluetooth</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Turn on Bluetooth toggle</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Put device in pairing mode</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Tap device name when it appears</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Confirm pairing on both devices</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Manage Paired Devices</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Connected Devices</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">View list of paired devices</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Tap device to connect/disconnect</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Tap settings icon → Unpair to remove</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: DISPLAY & SOUND */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Device Preferences</Badge>
                        <h2 className="text-4xl font-bold mb-4">Display & Sound</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Customize screen brightness, resolution, font size, and audio settings to match your preferences.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <Monitor className="w-8 h-8 text-primary" />
                                <h3 className="text-lg font-bold">Display Settings</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Brightness - Auto or manual adjustment</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Font size - Adjust text size for readability</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Screen timeout - When screen turns off</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Dark mode - Reduce eye strain in low light</span>
                                </li>
                            </ul>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <Volume2 className="w-8 h-8 text-primary" />
                                <h3 className="text-lg font-bold">Sound Settings</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Volume - Media, call, ring, and notification</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Vibration - Haptic feedback settings</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Ringtone & notification sounds</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Do Not Disturb - Silence notifications</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t6-display-sound.jpg"
                            alt="Display and sound settings"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Monitor class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Display & Sound</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Display Configuration</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Display</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Adjust brightness slider or enable auto-brightness</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Font size → Choose size preference</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Screen timeout → Set duration</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Sound Configuration</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Sound</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Adjust volume sliders (media, call, ring, notification)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Ringtone → Select ringtone</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Vibration → Configure haptic patterns</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t6" />
            </div>
        </div>
    );
}

// --- TOPIC 7: PC POWER MANAGEMENT ---
function Topic7_PCPowerManagement() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 7
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            PC Power <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Management</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Manage sleep, hibernate, shutdown, and battery settings to optimize power usage and extend device life.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Battery className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Power States</h3>
                                    <p className="text-sm text-muted-foreground">Sleep, Hibernate, Shutdown</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: SLEEP & HIBERNATE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Power Modes</Badge>
                        <h2 className="text-4xl font-bold mb-4">Sleep & Hibernate</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Sleep and hibernate save power while keeping your work intact. Learn when to use each mode.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <Power className="w-8 h-8 text-primary" />
                                <h3 className="text-lg font-bold">Sleep Mode</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-muted-foreground mb-4">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Quick power-saving state</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Keeps data in RAM</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Wakes up instantly</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Uses small amount of power</span>
                                </li>
                            </ul>
                            <div className="p-3 bg-muted rounded-lg">
                                <p className="text-xs text-muted-foreground">Use for: Short breaks (few minutes to hours)</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <Battery className="w-8 h-8 text-primary" />
                                <h3 className="text-lg font-bold">Hibernate Mode</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-muted-foreground mb-4">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Deep power-saving state</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Saves data to hard drive</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Uses no power</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Takes longer to wake up</span>
                                </li>
                            </ul>
                            <div className="p-3 bg-muted rounded-lg">
                                <p className="text-xs text-muted-foreground">Use for: Long breaks (hours or overnight)</p>
                            </div>
                        </Card>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t7-sleep-hibernate.jpg"
                            alt="Sleep and hibernate settings"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Power class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Sleep & Hibernate</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Power Mode Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left p-3 font-semibold">Mode</th>
                                        <th className="text-left p-3 font-semibold">Power Usage</th>
                                        <th className="text-left p-3 font-semibold">Wake Time</th>
                                        <th className="text-left p-3 font-semibold">Data Storage</th>
                                        <th className="text-left p-3 font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr className="border-b border-border">
                                        <td className="p-3 font-medium">Sleep</td>
                                        <td className="p-3">Low (RAM active)</td>
                                        <td className="p-3">Instant (1-2 seconds)</td>
                                        <td className="p-3">RAM</td>
                                        <td className="p-3">Short breaks</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="p-3 font-medium">Hibernate</td>
                                        <td className="p-3">None</td>
                                        <td className="p-3">Slow (10-30 seconds)</td>
                                        <td className="p-3">Hard drive</td>
                                        <td className="p-3">Long breaks</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium">Shutdown</td>
                                        <td className="p-3">None</td>
                                        <td className="p-3">Slow (30+ seconds)</td>
                                        <td className="p-3">None (data saved manually)</td>
                                        <td className="p-3">Long-term storage</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Configure Sleep/Hibernate</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → System → Power & Sleep</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Set "Screen" timeout (when screen turns off)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Set "Sleep" timeout (when PC goes to sleep)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Additional power settings → Choose what power button does</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Using Sleep/Hibernate</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">•</span>
                                    <span className="text-sm text-muted-foreground">Press power button briefly → Sleep</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">•</span>
                                    <span className="text-sm text-muted-foreground">Start menu → Power → Sleep</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">•</span>
                                    <span className="text-sm text-muted-foreground">Start menu → Power → Hibernate (if enabled)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">•</span>
                                    <span className="text-sm text-muted-foreground">Wake up: Press power button or move mouse</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SHUTDOWN CORRECTLY */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">System Shutdown</Badge>
                        <h2 className="text-4xl font-bold mb-4">Shutdown Correctly</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Properly shutting down your computer ensures data is saved and prevents file corruption or system damage.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t7-shutdown.jpg"
                                alt="Shutdown process and options"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Power class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Shutdown</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Why Shutdown Properly?</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Saves all open files and documents</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Closes programs safely</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Prevents file corruption</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Applies system updates</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Protects hardware from damage</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Shutdown Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Save className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Save Work</p>
                                <p className="text-xs text-muted-foreground">Close files</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <X className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Close Apps</p>
                                <p className="text-xs text-muted-foreground">Exit programs</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Power className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Shutdown</p>
                                <p className="text-xs text-muted-foreground">Start menu → Shut down</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Safe</p>
                                <p className="text-xs text-muted-foreground">System off</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Shutdown</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Save all open documents and files</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Close all open applications</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Click Start menu → Power → Shut down</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Wait for shutdown to complete</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Turn off power switch only after shutdown</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What NOT to Do</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                    <span>Don't force shutdown by holding power button (unless frozen)</span>
                                </li>
                                <li className="flex gap-2">
                                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                    <span>Don't unplug power during shutdown</span>
                                </li>
                                <li className="flex gap-2">
                                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                    <span>Don't close lid without saving work</span>
                                </li>
                                <li className="flex gap-2">
                                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                    <span>Don't skip shutdown process</span>
                                </li>
                            </ul>
                            <div className="mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Force shutdown only if computer is completely frozen and unresponsive.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BATTERY CARE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Battery Health</Badge>
                        <h2 className="text-4xl font-bold mb-4">Battery Care</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Extend your laptop battery life with proper charging habits and power management settings.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t7-battery-care.jpg"
                            alt="Battery settings and health"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Battery class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Battery Care</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Battery className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Charge Smart</h4>
                            <p className="text-sm text-muted-foreground">Keep between 20-80% for best health</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Power Plans</h4>
                            <p className="text-sm text-muted-foreground">Use balanced or power saver mode</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Reduce Usage</h4>
                            <p className="text-sm text-muted-foreground">Lower brightness, disable unused features</p>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Best Practices</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Charge when battery is 20-30%</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Unplug when charged to 80-90%</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Avoid deep discharge (below 10%)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Use manufacturer's charger</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Keep laptop cool (avoid blocking vents)</span>
                                </li>
                            </ul>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Power Settings</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → System → Power & Sleep</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Additional power settings → Choose power plan</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Select "Balanced" or "Power saver"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Adjust screen brightness to lower level</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Disable unused background apps</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t7" />
            </div>
        </div>
    );
}

// --- TOPIC 8: DEVICE MANAGER (WINDOWS) ---
function Topic8_DeviceManager() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 8
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Device <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Manager</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            View and manage hardware devices, update drivers, and troubleshoot device issues in Windows.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Settings className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Hardware Management</h3>
                                    <p className="text-sm text-muted-foreground">Windows Device Manager</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: HARDWARE OVERVIEW */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Device Overview</Badge>
                        <h2 className="text-4xl font-bold mb-4">Hardware Overview</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Device Manager shows all hardware connected to your computer, organized by category.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t8-device-manager.jpg"
                                alt="Device Manager interface showing hardware categories"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Settings class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Device Manager</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Device Categories</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Display adapters (graphics cards)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Network adapters (WiFi, Ethernet)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Sound, video, and game controllers</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Keyboards, mice, and pointing devices</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Universal Serial Bus (USB) controllers</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Disk drives (hard drives, SSDs)</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">How to Open Device Manager</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Method 1:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Right-click Start button</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select "Device Manager"</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Method 2:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Press Windows + X</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select "Device Manager"</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-success" />
                            </div>
                            <h4 className="font-bold mb-2">Working</h4>
                            <p className="text-sm text-muted-foreground">No warning icons, device functioning normally</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-8 h-8 text-warning" />
                            </div>
                            <h4 className="font-bold mb-2">Warning</h4>
                            <p className="text-sm text-muted-foreground">Yellow triangle means device has issues</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <XCircle className="w-8 h-8 text-destructive" />
                            </div>
                            <h4 className="font-bold mb-2">Error</h4>
                            <p className="text-sm text-muted-foreground">Red X means device is disabled or failed</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: DRIVER UPDATES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Driver Management</Badge>
                        <h2 className="text-4xl font-bold mb-4">Driver Updates</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Drivers enable hardware to communicate with Windows. Keep drivers updated for best performance and compatibility.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t8-driver-update.jpg"
                            alt="Driver update process in Device Manager"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><RefreshCw class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Driver Update</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Update Driver Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Open Device</p>
                                <p className="text-xs text-muted-foreground">Right-click device</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Download className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Update Driver</p>
                                <p className="text-xs text-muted-foreground">Select option</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Search className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Search</p>
                                <p className="text-xs text-muted-foreground">Auto or manual</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Installed</p>
                                <p className="text-xs text-muted-foreground">Driver updated</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Update Driver Steps</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open Device Manager</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Expand device category</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Right-click device → Update driver</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Choose "Search automatically for drivers"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Follow prompts and restart if needed</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Manual Driver Update</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Download driver from manufacturer website</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Right-click device → Update driver</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Choose "Browse my computer for drivers"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Select downloaded driver folder</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Click Next to install</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: DISABLED DEVICES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Device Troubleshooting</Badge>
                        <h2 className="text-4xl font-bold mb-4">Disabled Devices</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Enable or disable devices to troubleshoot issues, save power, or manage hardware conflicts.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Enable Device</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground mb-4">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Right-click disabled device</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Select "Enable device"</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Device will become active</span>
                                </li>
                            </ul>
                            <div className="p-3 bg-success/10 border border-success/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Use when: Device stopped working or shows as disabled</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Disable Device</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground mb-4">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Right-click active device</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Select "Disable device"</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Confirm to disable</span>
                                </li>
                            </ul>
                            <div className="p-3 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Use when: Troubleshooting conflicts or saving power</p>
                            </div>
                        </Card>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t8-disabled-devices.jpg"
                            alt="Disabled devices in Device Manager"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><AlertTriangle class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Disabled Devices</p></div>';
                                }
                            }}
                        />
                    </div>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">Common Scenarios</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Troubleshooting:</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">•</span>
                                        <span>Disable and re-enable to reset device</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">•</span>
                                        <span>Resolve hardware conflicts</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">•</span>
                                        <span>Test if device is causing issues</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Power Management:</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">•</span>
                                        <span>Disable unused devices to save power</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">•</span>
                                        <span>Temporarily disable Bluetooth/WiFi</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">•</span>
                                        <span>Manage multiple network adapters</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t8" />
            </div>
        </div>
    );
}

// --- TOPIC 9: TASK MANAGER ---
function Topic9_TaskManager() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 9
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Task <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Manager</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Monitor processes, check performance, and manage startup programs to optimize your computer's speed.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Activity className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">System Monitor</h3>
                                    <p className="text-sm text-muted-foreground">Processes & Performance</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PROCESSES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Process Management</Badge>
                        <h2 className="text-4xl font-bold mb-4">Processes</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            View all running applications and background processes. Monitor resource usage and end unresponsive programs.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t9-processes.jpg"
                                alt="Task Manager Processes tab"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Activity class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Processes</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Process Information</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>CPU - Processor usage percentage</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Memory - RAM usage amount</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Disk - Storage read/write activity</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Network - Internet bandwidth usage</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">How to Open Task Manager</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Method 1:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Press Ctrl + Shift + Esc</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Method 2:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Press Ctrl + Alt + Delete</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select "Task Manager"</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Method 3:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Right-click taskbar</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Select "Task Manager"</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">End Process</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open Task Manager → Processes tab</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Find unresponsive program</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Right-click process → End task</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Confirm if prompted</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Warning: Only end tasks you recognize. Ending system processes can cause instability.</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Identify High Usage</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Click column headers to sort (CPU, Memory, Disk)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Processes using high CPU (50%+) may slow system</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>High memory usage can cause slowdowns</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Check if process is necessary before ending</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: PERFORMANCE TAB */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">System Monitoring</Badge>
                        <h2 className="text-4xl font-bold mb-4">Performance Tab</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Monitor real-time system performance including CPU, Memory, Disk, and Network usage with visual graphs.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t9-performance.jpg"
                            alt="Task Manager Performance tab showing graphs"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><BarChart3 class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Performance</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">CPU</h4>
                            <p className="text-sm text-muted-foreground">Processor usage percentage and speed</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <HardDrive className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Memory</h4>
                            <p className="text-sm text-muted-foreground">RAM usage and available memory</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Disk</h4>
                            <p className="text-sm text-muted-foreground">Storage read/write activity</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Network</h4>
                            <p className="text-sm text-muted-foreground">Internet bandwidth usage</p>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Performance Monitoring Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Activity className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Open</p>
                                <p className="text-xs text-muted-foreground">Task Manager</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <BarChart3 className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Performance</p>
                                <p className="text-xs text-muted-foreground">Select tab</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Monitor className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Monitor</p>
                                <p className="text-xs text-muted-foreground">View graphs</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Identify</p>
                                <p className="text-xs text-muted-foreground">Bottlenecks</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What to Monitor</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>CPU usage - High usage indicates heavy processing</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Memory usage - High usage may cause slowdowns</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Disk usage - High activity may slow file access</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Network usage - Monitor internet bandwidth</span>
                                </li>
                            </ul>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Understanding Graphs</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Real-time graphs show current usage</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Higher values = more resource usage</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Sustained high usage may indicate issues</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Check "Processes" tab to identify culprit</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: STARTUP PROGRAMS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Startup Management</Badge>
                        <h2 className="text-4xl font-bold mb-4">Startup Programs</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Manage programs that launch automatically when Windows starts. Disable unnecessary startup programs to speed up boot time.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t9-startup.jpg"
                                alt="Task Manager Startup tab"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Zap class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Startup Programs</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Startup Impact</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>High - Significantly slows startup</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Medium - Moderate impact on startup</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Low - Minimal impact on startup</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Disabled - Doesn't start with Windows</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Manage Startup Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Open</p>
                                <p className="text-xs text-muted-foreground">Task Manager</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <List className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Startup</p>
                                <p className="text-xs text-muted-foreground">Select tab</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <X className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Disable</p>
                                <p className="text-xs text-muted-foreground">Unnecessary apps</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Faster Boot</p>
                                <p className="text-xs text-muted-foreground">Improved startup</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Disable Startup Program</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Open Task Manager → Startup tab</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Review list of startup programs</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Right-click program → Disable</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Restart computer for changes to take effect</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                                <p className="text-xs text-muted-foreground">Only disable programs you recognize. Don't disable Windows system processes.</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Safe to Disable</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Third-party software launchers</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Media players (unless you use them frequently)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Update checkers (can check manually)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Unused software services</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t9" />
            </div>
        </div>
    );
}

// --- TOPIC 10: SYSTEM HEALTH TOOLS ---
function Topic10_SystemHealthTools() {
    return (
        <div className="space-y-20 pb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-10 pb-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Module 15 • Topic 10
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            System Health <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tools</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Monitor system reliability, manage Windows security, and optimize storage with built-in health tools.
                        </p>
                    </div>
                    <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <Card className="bg-background/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden p-8 rounded-3xl">
                                <div className="text-center mb-6">
                                    <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-2xl mb-2">Health & Security</h3>
                                    <p className="text-sm text-muted-foreground">Monitoring Tools</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: RELIABILITY MONITOR */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">System Monitoring</Badge>
                        <h2 className="text-4xl font-bold mb-4">Reliability Monitor</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Track system stability over time. View application crashes, Windows failures, and hardware issues in a timeline.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t10-reliability.jpg"
                                alt="Reliability Monitor interface"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><Activity class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Reliability Monitor</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What It Shows</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Application failures and crashes</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Windows failures and errors</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Hardware failures</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Software installation/uninstallation</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>System stability score over time</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">How to Open Reliability Monitor</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Method 1:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Search "Reliability Monitor" in Start menu</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Click "View reliability history"</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Method 2:</h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex gap-2"><span className="font-bold text-primary">1.</span><span>Control Panel → Security and Maintenance</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-primary">2.</span><span>Expand "Maintenance" → View reliability history</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Understanding the Timeline</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Green checkmarks = No issues</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                                    <span>Yellow warning = Warning event</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                    <span>Red X = Critical failure</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Click events for detailed information</span>
                                </li>
                            </ul>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Using Reliability Monitor</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Identify recurring issues</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Track system stability trends</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>See what changed before failures</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Export report for troubleshooting</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 2: WINDOWS SECURITY */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Security Management</Badge>
                        <h2 className="text-4xl font-bold mb-4">Windows Security</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Manage antivirus protection, firewall, device security, and privacy settings from one central location.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
                        <img
                            src="/src/assets/module-media/m15-t10-security.jpg"
                            alt="Windows Security interface"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.innerHTML = '<div class="z-10 text-center p-6"><Shield class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Windows Security</p></div>';
                                }
                            }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-6 mb-8">
                        <Card className="p-6 text-center">
                            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Virus & Threat Protection</h4>
                            <p className="text-sm text-muted-foreground">Real-time protection and scans</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Firewall & Network</h4>
                            <p className="text-sm text-muted-foreground">Network security settings</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">App & Browser Control</h4>
                            <p className="text-sm text-muted-foreground">SmartScreen and exploit protection</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold mb-2">Device Security</h4>
                            <p className="text-sm text-muted-foreground">Core isolation and secure boot</p>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Security Management Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Open</p>
                                <p className="text-xs text-muted-foreground">Windows Security</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Shield className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Check Status</p>
                                <p className="text-xs text-muted-foreground">View protection areas</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <RefreshCw className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Update</p>
                                <p className="text-xs text-muted-foreground">Run scans & updates</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Protected</p>
                                <p className="text-xs text-muted-foreground">System secure</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">How to Open Windows Security</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → Privacy & Security → Windows Security</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Or search "Windows Security" in Start menu</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Click "Open Windows Security"</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Key Features</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Quick scan and full scan options</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Real-time protection status</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Firewall management</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Threat history and protection reports</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: STORAGE SENSE */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Storage Management</Badge>
                        <h2 className="text-4xl font-bold mb-4">Storage Sense</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Automatically free up disk space by deleting temporary files, cleaning recycle bin, and managing storage.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                            <img
                                src="/src/assets/module-media/m15-t10-storage.jpg"
                                alt="Storage Sense settings"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = '<div class="z-10 text-center p-6"><HardDrive class="w-16 h-16 text-primary mx-auto mb-4" /><p class="font-bold">Storage Sense</p></div>';
                                    }
                                }}
                            />
                        </div>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">What Storage Sense Cleans</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Temporary files</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Recycle Bin contents</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Downloads folder (old files)</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Previous Windows versions</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Cloud content (if configured)</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mb-8">
                        <h3 className="text-lg font-bold mb-6 text-center">Storage Sense Process Flow</h3>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Settings className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Enable</p>
                                <p className="text-xs text-muted-foreground">Turn on Storage Sense</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Trash2 className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Scan</p>
                                <p className="text-xs text-muted-foreground">Find files to clean</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <RefreshCw className="w-10 h-10 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Clean</p>
                                <p className="text-xs text-muted-foreground">Delete selected files</p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-muted-foreground" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <CheckCircle className="w-10 h-10 text-success" />
                                </div>
                                <p className="text-sm font-semibold">Freed Space</p>
                                <p className="text-xs text-muted-foreground">More storage available</p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Enable & Configure</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → System → Storage</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Turn on "Storage Sense" toggle</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Click "Configure Storage Sense"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Set cleanup frequency and rules</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">5.</span>
                                    <span className="text-sm text-muted-foreground">Click "Clean now" for immediate cleanup</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-4">Manual Cleanup</h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-muted-foreground">Settings → System → Storage</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-muted-foreground">Click "Temporary files"</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-muted-foreground">Select files to delete (checkboxes)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-muted-foreground">Click "Remove files"</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center">
                <TopicNavigation currentModuleId={15} currentTopicId="m15-t10" />
            </div>
        </div>
    );
}

// --- MAIN MODULE 15 COMPONENT (ROUTER) ---
function Module15() {
    const { topicId } = useParams();

    if (!topicId || topicId === "1" || topicId === "m15-t1") return <Topic1_MobileOSBasics />;
    if (topicId === "2" || topicId === "m15-t2") return <Topic2_MobileStorage />;
    if (topicId === "3" || topicId === "m15-t3") return <Topic3_MobileSecurity />;
    if (topicId === "4" || topicId === "m15-t4") return <Topic4_MobileBackup />;
    if (topicId === "5" || topicId === "m15-t5") return <Topic5_MobileUpdates />;
    if (topicId === "6" || topicId === "m15-t6") return <Topic6_MobileSettings />;
    if (topicId === "7" || topicId === "m15-t7") return <Topic7_PCPowerManagement />;
    if (topicId === "8" || topicId === "m15-t8") return <Topic8_DeviceManager />;
    if (topicId === "9" || topicId === "m15-t9") return <Topic9_TaskManager />;
    if (topicId === "10" || topicId === "m15-t10") return <Topic10_SystemHealthTools />;

    // Fallback
    return <Topic1_MobileOSBasics />;
}

export default Module15;

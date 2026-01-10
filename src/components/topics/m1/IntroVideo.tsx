import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import local thumbnails for Module 1
import m1English from "@/assets/thumbnails/m-1-english.jpg";
import m1Hindi from "@/assets/thumbnails/m-1-hindi.jpg";
import m1Telugu from "@/assets/thumbnails/m-1-telugu.jpg";

// Helper to get image URL safely
const getImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith('data:') || path.startsWith('blob:') || path.startsWith('/') || path.startsWith('static/') || path.includes('assets')) return path;
    return `/${path}`;
};

// 2. Configuration for Video IDs and Text Content
const MODULE_CONTENT: Record<string, Record<string, { id: string; title: string; desc: string; thumb?: string }>> = {
    "1": {
        en: {
            id: "BpYqzxJc08g",
            title: "What is a Computer?",
            desc: "Join us for a quick introduction to the world of computers. Learn the basics of what makes a computer tick in this brief overview.",
            thumb: m1English
        },
        hi: {
            id: "s30T08vVFXs",
            title: "कंप्यूटर क्या है?",
            desc: "कंप्यूटर की दुनिया में आपका स्वागत है। इस वीडियो में जानें कि कंप्यूटर कैसे काम करता है।",
            thumb: m1Hindi
        },
        te: {
            id: "x94vlNkdULw",
            title: "కంప్యూటర్ అంటే ఏమిటి?",
            desc: "కంప్యూటర్ అంటే ఏమిటి? మరియు ఇది ఎలా పని చేస్తుంది? ఈ వీడియోలో తెలుసుకోండి.",
            thumb: m1Telugu
        }
    },
    "2": {
        en: { id: "", title: "Internal Components", desc: "Discover the heart of the computer: CPU, RAM, and Motherboard explained.", thumb: "module-media/m2-cpu-hero.jpg" },
        hi: { id: "", title: "कंप्यूटर के आंतरिक भाग", desc: "CPU, RAM, और मदरबोर्ड के बारे में जानें。", thumb: "module-media/m2-cpu-hero.jpg" },
        te: { id: "", title: "కంప్యూటర్ అంతర్గత భాగాలు", desc: "CPU, RAM మరియు మదర్‌బోర్డ్ గురించి తెలుసుకోండి。", thumb: "module-media/m2-cpu-hero.jpg" }
    },
    "3": {
        en: { id: "", title: "Operating Systems & Files", desc: "Learn how the operating system manages your files and how mobile devices are actually computers.", thumb: "module-media/m3-os-overview.jpg" },
        hi: { id: "", title: "ऑपरेटिंग सिस्टम और फाइलें", desc: "जानें कि ऑपरेटिंग सिस्टम आपकी फाइलों को कैसे प्रबंधित करता है。", thumb: "module-media/m3-os-overview.jpg" },
        te: { id: "", title: "ఆపరేటింగ్ సిస్టమ్‌లు మరియు ఫైల్‌లు", desc: "ఆపరేటింగ్ సిస్టమ్ మీ ఫైల్‌లను ఎలా నిర్వహిస్తుందో తెలుసుకోండి。", thumb: "module-media/m3-os-overview.jpg" }
    },
    "4": {
        en: { id: "", title: "Hardware Deep Dive", desc: "Take a closer look at the advanced hardware components that power modern computers.", thumb: "module-media/m1-hardware-hero.jpg" },
        hi: { id: "", title: "हार्डवेयर की गहराई", desc: "आधुनिक कंप्यूटरों को शक्ति देने वाले उन्नत हार्डवेयर भागों को देखें。", thumb: "module-media/m1-hardware-hero.jpg" },
        te: { id: "", title: "హార్డ్‌వేర్ డీప్ డైవ్", desc: "ఆధునిక కంప్యూటర్‌లకు శక్తినిచ్చే అధునాతన హార్డ్‌వేర్ భాగాలను నిశితంగా పరిశీలించండి。", thumb: "module-media/m1-hardware-hero.jpg" }
    },
    "5": {
        en: { id: "", title: "Storage Systems", desc: "Explore the different types of storage systems and how they keep your data safe.", thumb: "module-media/m1-hero.jpeg" },
        hi: { id: "", title: "स्टोरेज सिस्टम", desc: "विभिन्न प्रकार के स्टोरेज सिस्टम और उनके काम करने के طریقے को जानें。", thumb: "module-media/m1-hero.jpeg" },
        te: { id: "", title: "స్టోరేజ్ సిస్టమ్స్", desc: "వివిధ రకాల స్టోరేజ్ సిస్టమ్‌లు మరియు అవి మీ డేటాను ఎలా సురక్షితంగా ఉంచుతాయో తెలుసుకోండి。", thumb: "module-media/m1-hero.jpeg" }
    },
    "6": {
        en: { id: "", title: "Software & Operating Systems", desc: "Understand the different types of software and the responsibilities of an OS.", thumb: "module-media/m1-software-hero.jpg" },
        hi: { id: "", title: "सॉफ्टवेयर और ऑपरेटिंग सिस्टम", desc: "सॉफ्टवेयर के प्रकारों और ओएस की जिम्मेदारियों को समझें。", thumb: "module-media/m1-software-hero.jpg" },
        te: { id: "", title: "సాఫ్ట్‌వేర్ & ఆపరేటింగ్ సిస్టమ్‌లు", desc: "వివిధ రకాల సాఫ్ట్‌వేర్ మరియు OS బాధ్యతలను అర్థం చేసుకోండి。", thumb: "module-media/m1-software-hero.jpg" }
    },
    "7": {
        en: { id: "", title: "File Systems & Data Management", desc: "Learn how to organize, compress, and secure your files effectively.", thumb: "module-media/file-system-architect-thumb.png" },
        hi: { id: "", title: "फाइल सिस्टम और डेटा प्रबंधन", desc: "अपनी फाइलों को प्रभावी ढंग से व्यवस्थित, संपीड़ित और सुरक्षित करना सीखें。", thumb: "module-media/file-system-architect-thumb.png" },
        te: { id: "", title: "ఫైల్ సిస్టమ్స్ & డేటా మేనేజ్‌మెంట్", desc: "మీ ఫైల్‌లను ఎలా నిర్వహించాలో మరియు సురక్షితంగా ఉంచుకోవాలో తెలుసుకోండి。", thumb: "module-media/file-system-architect-thumb.png" }
    },
    "9": {
        en: { id: "", title: "Networking Fundamentals", desc: "Dive into the basics of computer networks, IP addressing, and how the internet works.", thumb: "module-media/m9-mac-hero.jpg" },
        hi: { id: "", title: "नेटवर्किंग के बुनियादी सिद्धांत", desc: "कंप्यूटर नेटवर्क, आईपी एड्रेसिंग और इंटरनेट कैसे काम करता है, इसके बारे में जानें。", thumb: "module-media/m9-mac-hero.jpg" },
        te: { id: "", title: "నెట్‌వర్కింగ్ ఫండమెంటల్స్", desc: "కంప్యూటర్ నెట్‌వర్క్‌లు మరియు ఇంటర్నెట్ ఎలా పనిచేస్తుందో తెలుసుకోండి。", thumb: "module-media/m9-mac-hero.jpg" }
    },
    "10": {
        en: { id: "gAM5y3SIfdM", title: "Cybersecurity Essentials", desc: "Protecting your digital life is more important than ever. Learn the basics of cybersecurity in this module." },
        hi: { id: "gAM5y3SIfdM", title: "Cybersecurity Essentials", desc: "अपनी डिजिटल लाइफ को सुरक्षित रखें। इस मॉड्यूल में साइबर सुरक्षा के बुनियादी सिद्धांतों को जानें।" },
        te: { id: "gAM5y3SIfdM", title: "Cybersecurity Essentials", desc: "మీ డిజిటల్ జీవితాన్ని రక్షించుకోండి. ఈ మాడ్యూల్‌లో సైబర్ సెక్యూరిటీ ప్రాథమికాలను తెలుసుకోండి." }
    }
};

interface IntroVideoProps {
    moduleId?: string | number;
}

export function IntroVideo({ moduleId = "1" }: IntroVideoProps) {
    const navigate = useNavigate();
    const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');
    const [isPlaying, setIsPlaying] = useState(false);

    // Reset play state when module or language changes
    useEffect(() => {
        setIsPlaying(false);
    }, [moduleId, language]);

    const activeModuleId = (moduleId || "1").toString();

    // Get content or use fallback
    const content = MODULE_CONTENT[activeModuleId]?.[language] || {
        id: "",
        title: `Module ${activeModuleId} Intro`,
        desc: "Introduction video."
    };

    const langLabels = { en: "English", hi: "Hindi / Urdu", te: "Telugu" };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header / Language Selection */}
            <div className="flex flex-col items-center text-center space-y-6 md:flex-row md:justify-between md:text-left md:space-y-0">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight">
                        {content.title}
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg font-medium">Select your preferred audio language</p>
                </div>

                <div className="inline-flex p-1 bg-secondary/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner">
                    {(['en', 'hi', 'te'] as const).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => {
                                setLanguage(lang);
                                setIsPlaying(false);
                            }}
                            className={`relative px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 active:scale-95 ${language === lang
                                ? 'bg-primary text-primary-foreground shadow-lg scale-105 z-10'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <Globe className={`w-4 h-4 ${language === lang ? 'animate-pulse' : ''}`} />
                            <span className="relative z-10">{langLabels[lang]}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Video Player Area - Optimized Click-to-Play */}
            <Card className="overflow-hidden border-none shadow-2xl bg-black aspect-video relative rounded-[2rem] flex items-center justify-center group/video cursor-pointer"
                onClick={() => !isPlaying && content.id && setIsPlaying(true)}>
                {content.id ? (
                    <>
                        {!isPlaying ? (
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Thumbnail Facade */}
                                {content.thumb ? (
                                    <img
                                        src={getImageUrl(content.thumb)}
                                        alt="Video Thumbnail"
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity duration-300"
                                    />
                                ) : (
                                    <img
                                        src={`https://img.youtube.com/vi/${content.id}/maxresdefault.jpg`}
                                        alt="Video Thumbnail"
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity duration-300"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${content.id}/hqdefault.jpg`;
                                        }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/5 transition-colors" />

                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <Button
                                        size="lg"
                                        className="rounded-full w-20 h-20 bg-primary/95 hover:bg-primary text-primary-foreground shadow-2xl scale-100 group-hover/video:scale-110 transition-transform duration-300 border-4 border-white/10"
                                    >
                                        <Play className="h-10 w-10 ml-1 fill-current" />
                                    </Button>
                                    <div className="px-5 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white font-bold text-xs border border-white/20 shadow-2xl opacity-100 transform translate-y-0 transition-all duration-300">
                                        Click to Start Learning
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${content.id}?autoplay=1&rel=0&controls=1&modestbranding=1`}
                                title="Module Intro Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                    </>
                ) : (
                    <div className="text-center space-y-4 p-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <Globe className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Video Coming Soon</h2>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            We are currently preparing high-quality educational content for this module. Please check back later!
                        </p>
                    </div>
                )}
            </Card>

            {/* Video Description & Next Steps */}
            <div className="grid md:grid-cols-3 gap-8 items-center bg-secondary/5 p-6 md:p-10 rounded-[2.5rem] border border-secondary/20 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="md:col-span-2 space-y-4 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        About this Module
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                        {content.desc}
                    </p>
                </div>

                <div className="relative z-10">
                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <Button
                            size="lg"
                            className="w-full h-16 text-xl font-bold gap-3 shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 rounded-2xl group/btn"
                            onClick={() => navigate(`/module/${activeModuleId}/topic/1`)}
                        >
                            Start Module {activeModuleId}
                            <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Mobile Floating/Sticky CTA */}
                    <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 animate-in slide-in-from-bottom-10 duration-500">
                        <Button
                            size="lg"
                            className="w-full h-16 text-xl font-bold gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-primary/90 backdrop-blur-md rounded-2xl active:scale-95 transition-all"
                            onClick={() => navigate(`/module/${activeModuleId}/topic/1`)}
                        >
                            Start Learning <ArrowRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Extra Spacer for mobile sticky button */}
            <div className="h-24 md:hidden"></div>
        </div>
    );
}

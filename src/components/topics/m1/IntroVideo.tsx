import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


// 1. Dynamic Import of Thumbnails using Vite's import.meta.glob
const thumbnailModules = import.meta.glob<{ default: string }>('@/assets/thumbnails/*.{png,jpg,jpeg,webp}', { eager: true });

// Helper to get thumbnail URL safely
const getThumbnail = (moduleId: string, language: string) => {
    // Expected Format: m-{moduleId}-{language}.jpg (or png/jpeg)
    // Language mapping keys: 'en'->'english', 'hi'->'hindi', 'te'->'telugu'
    const langMap: Record<string, string> = { en: 'english', hi: 'hindi', te: 'telugu' };
    const langName = langMap[language];

    // Construct the search key. Glob keys are relative to project root or src depending on config,
    // usually '/src/assets/thumbnails/m-1-english.jpg'
    // We'll search for one that ends with our pattern
    const searchPattern = `/m-${moduleId}-${langName}.`;

    const matchKey = Object.keys(thumbnailModules).find(key => key.includes(searchPattern));

    if (matchKey && thumbnailModules[matchKey]) {
        return thumbnailModules[matchKey].default;
    }

    // Fallback image if not found
    return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80";
};

// 2. Configuration for Video IDs and Text Content
// Structure: [moduleId] -> [language] -> Content
const MODULE_CONTENT: Record<string, Record<string, { id: string; title: string; desc: string }>> = {
    "1": {
        en: { id: "LZMhW3u71pI", title: "What is a Computer?", desc: "Join us for a quick introduction to the world of computers. Learn the basics of what makes a computer tick in this 2-minute overview." },
        hi: { id: "LZMhW3u71pI", title: "कंप्यूटर क्या है?", desc: "कंप्यूटर की दुनिया में आपका स्वागत है। इस 2 मिनट के वीडियो में जानें कि कंप्यूटर कैसे काम करता है।" },
        te: { id: "LZMhW3u71pI", title: "కంప్యూటర్ అంటే ఏమిటి?", desc: "కంప్యూటర్ అంటే ఏమిటి? మరియు ఇది ఎలా పని చేస్తుంది? ఈ 2 నిమిషాల వీడియోలో తెలుసుకోండి." }
    },
    // Placeholder for other modules - easy to add to
    "2": {
        en: { id: "dQw4w9WgXcQ", title: "Internal Components", desc: "Discover the heart of the computer: CPU, RAM, and Motherboard explained." },
        hi: { id: "dQw4w9WgXcQ", title: "कंप्यूटर के आंतरिक भाग", desc: "CPU, RAM, और मदरबोर्ड के बारे में जानें।" },
        te: { id: "dQw4w9WgXcQ", title: "కంప్యూటర్ అంతర్గత భాగాలు", desc: "CPU, RAM మరియు మదర్‌బోర్డ్ గురించి తెలుసుకోండి." }
    },
    "10": {
        en: { id: "gAM5y3SIfdM", title: "Cybersecurity Essentials", desc: "Protecting your digital life is more important than ever. Learn the basics of cybersecurity in this module." },
        hi: { id: "gAM5y3SIfdM", title: "Cybersecurity (Hindi Coming Soon)", desc: "Hindi audio is coming soon! Please watch the English version to start learning about cybersecurity." },
        te: { id: "gAM5y3SIfdM", title: "Cybersecurity (Telugu Coming Soon)", desc: "Telugu audio is coming soon! Please watch the English version to start learning about cybersecurity." }
    }
};

interface IntroVideoProps {
    moduleId?: string | number;
}

export function IntroVideo({ moduleId = "1" }: IntroVideoProps) {
    const navigate = useNavigate();
    const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');
    const [isPlaying, setIsPlaying] = useState(false);

    const activeModuleId = moduleId.toString();

    // Get content or use fallback
    const content = MODULE_CONTENT[activeModuleId]?.[language] || {
        id: "dQw4w9WgXcQ",
        title: `Module ${activeModuleId} Intro`,
        desc: "Introduction video coming soon."
    };
    const thumbnail = getThumbnail(activeModuleId, language);

    const langLabels = { en: "English", hi: "Hindi / Urdu", te: "Telugu" };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header / Language Selection */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{content.title}</h1>
                    <p className="text-muted-foreground">Select your preferred audio language</p>
                </div>

                <div className="flex gap-2 bg-secondary/50 p-1.5 rounded-xl">
                    {(['en', 'hi', 'te'] as const).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => {
                                setLanguage(lang);
                                setIsPlaying(false);
                            }}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${language === lang
                                ? 'bg-primary text-primary-foreground shadow-lg'
                                : 'hover:bg-background/50 text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <Globe className="w-4 h-4" />
                            {langLabels[lang]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Video Player / Thumbnail Area */}
            <Card className="overflow-hidden border-none shadow-2xl bg-black aspect-video relative group rounded-[2rem]">
                {(activeModuleId === "10" || isPlaying) ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${content.id}?autoplay=${activeModuleId === "10" ? 0 : 1}&rel=0`}
                        title="Module Intro Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div
                        className="absolute inset-0 cursor-pointer transition-transform duration-700 group-hover:scale-105"
                        onClick={() => setIsPlaying(true)}
                    >
                        {/* Background Image */}
                        <img
                            src={thumbnail}
                            alt={content.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

                        {/* Decorative Background Pattern Overlay */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] mix-blend-overlay"></div>

                        {/* Play Button Centered */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all group-hover:scale-110">
                                <Play className="w-10 h-10 text-white fill-white ml-2" />
                            </div>
                        </div>

                        {/* Text Content at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-lg">{content.title}</h2>
                            <p className="text-white/80 font-medium tracking-wider uppercase text-sm">Click to Watch</p>
                        </div>
                    </div>
                )}
            </Card>

            {/* Video Description & Next Steps */}
            <div className="grid md:grid-cols-3 gap-8 items-center bg-secondary/10 p-8 rounded-3xl border border-secondary/20">
                <div className="md:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold">About this Video</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {content.desc}
                    </p>
                </div>
                <div className="flex justify-end">
                    <Button
                        size="lg"
                        className="w-full md:w-auto h-14 text-lg gap-2 shadow-xl hover:shadow-primary/20 transition-all rounded-xl"
                        onClick={() => navigate(`/module/${activeModuleId}/topic/1`)}
                    >
                        Start Learning Module {activeModuleId} <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

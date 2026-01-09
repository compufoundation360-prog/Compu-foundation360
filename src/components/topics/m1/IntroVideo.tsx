import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


// 2. Configuration for Video IDs and Text Content
// Structure: [moduleId] -> [language] -> Content
const MODULE_CONTENT: Record<string, Record<string, { id: string; title: string; desc: string }>> = {
    "1": {
        en: { id: "LZMhW3u71pI", title: "What is a Computer?", desc: "Join us for a quick introduction to the world of computers. Learn the basics of what makes a computer tick in this 2-minute overview." },
        hi: { id: "LZMhW3u71pI", title: "कंप्यूटर क्या है?", desc: "कंप्यूटर की दुनिया में आपका स्वागत है। इस 2 मिनट के वीडियो में जानें कि कंप्यूटर कैसे काम करता है।" },
        te: { id: "LZMhW3u71pI", title: "కంప్యూటర్ అంటే ఏమిటి?", desc: "కంప్యూటర్ అంటే ఏమిటి? మరియు ఇది ఎలా పని చేస్తుంది? ఈ 2 నిమిషాల వీడియోలో తెలుసుకోండి." }
    },
    "2": {
        en: { id: "", title: "Internal Components", desc: "Discover the heart of the computer: CPU, RAM, and Motherboard explained." },
        hi: { id: "", title: "कंप्यूटर के आंतरिक भाग", desc: "CPU, RAM, और मदरबोर्ड के बारे में जानें।" },
        te: { id: "", title: "కంప్యూటర్ అంతర్గత భాగాలు", desc: "CPU, RAM మరియు మదర్‌బోర్డ్ గురించి తెలుసుకోండి." }
    },
    "3": {
        en: { id: "", title: "Operating Systems & Files", desc: "Learn how the operating system manages your files and how mobile devices are actually computers." },
        hi: { id: "", title: "ऑपरेटिंग सिस्टम और फाइलें", desc: "जानें कि ऑपरेटिंग सिस्टम आपकी फाइलों को कैसे प्रबंधित करता है।" },
        te: { id: "", title: "ఆపరేటింగ్ సిస్టమ్‌లు మరియు ఫైల్‌లు", desc: "ఆపరేటింగ్ సిస్టమ్ మీ ఫైల్‌లను ఎలా నిర్వహిస్తుందో తెలుసుకోండి." }
    },
    "4": {
        en: { id: "", title: "Hardware Deep Dive", desc: "Take a closer look at the advanced hardware components that power modern computers." },
        hi: { id: "", title: "हार्डवेयर की गहराई", desc: "आधुनिक कंप्यूटरों को शक्ति देने वाले उन्नत हार्डवेयर भागों को देखें।" },
        te: { id: "", title: "హార్డ్‌వేర్ డీప్ డైవ్", desc: "ఆధునిక కంప్యూటర్‌లకు శక్తినిచ్చే అధునాతన హార్డ్‌వేర్ భాగాలను నిశితంగా పరిశీలించండి." }
    },
    "5": {
        en: { id: "", title: "Storage Systems", desc: "Explore the different types of storage systems and how they keep your data safe." },
        hi: { id: "", title: "स्टोरेज सिस्टम", desc: "विभिन्न प्रकार के स्टोरेज सिस्टम और उनके काम करने के तरीके को जानें।" },
        te: { id: "", title: "స్టోరేజ్ సిస్టమ్స్", desc: "వివిధ రకాల స్టోరేజ్ సిస్టమ్‌లు మరియు అవి మీ డేటాను ఎలా సురక్షితంగా ఉంచుతాయో తెలుసుకోండి." }
    },
    "6": {
        en: { id: "", title: "Software & Operating Systems", desc: "Understand the different types of software and the responsibilities of an OS." },
        hi: { id: "", title: "सॉफ्टवेयर और ऑपरेटिंग सिस्टम", desc: "सॉफ्टवेयर के प्रकारों और ओएस की जिम्मेदारियों को समझें।" },
        te: { id: "", title: "సాఫ్ట్‌వేర్ & ఆపరేటింగ్ సిస్టమ్‌లు", desc: "వివిధ రకాల సాఫ్ట్‌వేర్ మరియు OS బాధ్యతలను అర్థం చేసుకోండి." }
    },
    "7": {
        en: { id: "", title: "File Systems & Data Management", desc: "Learn how to organize, compress, and secure your files effectively." },
        hi: { id: "", title: "फाइल सिस्टम और डेटा प्रबंधन", desc: "अपनी फाइलों को प्रभावी ढंग से व्यवस्थित, संपीड़ित और सुरक्षित करना सीखें।" },
        te: { id: "", title: "ఫైల్ సిస్టమ్స్ & డేటా మేనేజ్‌మెంట్", desc: "మీ ఫైల్‌లను ఎలా నిర్వహించాలో మరియు సురక్షితంగా ఉంచుకోవాలో తెలుసుకోండి." }
    },
    "8": {
        en: { id: "", title: "System Setup & Installation", desc: "Master the process of setting up and configuring a computer system from scratch." },
        hi: { id: "", title: "सिस्टम सेटअप और इंस्टॉलेशन", desc: "कंप्यूटर सिस्टम को शुरू से सेटअप और कॉन्फ़िगर करने की प्रक्रिया में महारत हासिल करें।" },
        te: { id: "", title: "సిస్టమ్ సెటప్ & ఇన్‌స్టాలేషన్", desc: "మొదటి నుండి కంప్యూటర్ సిస్టమ్‌ను సెటప్ చేసే విధానాన్ని తెలుసుకోండి." }
    },
    "9": {
        en: { id: "", title: "Networking Fundamentals", desc: "Dive into the basics of computer networks, IP addressing, and how the internet works." },
        hi: { id: "", title: "नेटवर्किंग के बुनियादी सिद्धांत", desc: "कंप्यूटर नेटवर्क, आईपी एड्रेसिंग और इंटरनेट कैसे काम करता है, इसके बारे में जानें।" },
        te: { id: "", title: "నెట్‌వర్కింగ్ ఫండమెంటల్స్", desc: "కంప్యూటర్ నెట్‌వర్క్‌లు మరియు ఇంటర్నెట్ ఎలా పనిచేస్తుందో తెలుసుకోండి." }
    },
    "11": {
        en: { id: "", title: "Security Ethics & Digital Citizenship", desc: "Become a responsible digital citizen and learn about online etiquette and data privacy." },
        hi: { id: "", title: "सुरक्षा नैतिकता और डिजिटल नागरिकता", desc: "एक जिम्मेदार डिजिटल नागरिक बनें और ऑनलाइन शिष्टाचार के बारे में जानें।" },
        te: { id: "", title: "సెక్యూరిటీ ఎథిక్స్ & డిజిటల్ సిటిజన్‌షిప్", desc: "బాధ్యతాయుతమైన డిజిటల్ పౌరుడిగా ఎలా ఉండాలో తెలుసుకోండి." }
    },
    "12": {
        en: { id: "", title: "Cloud Computing Basics", desc: "Discover how the cloud works and how it powers the apps you use every day." },
        hi: { id: "", title: "क्लाउड कंप्यूटिंग मूल बातें", desc: "जानें कि क्लाउड कैसे काम करता है और यह आपके द्वारा रोज उपयोग किए जाने वाले ऐप्स को कैसे शक्ति देता है।" },
        te: { id: "", title: "క్లౌడ్ కంప్యూటింగ్ బేసిక్స్", desc: "క్లౌడ్ ఎలా పనిచేస్తుందో మరియు అది మీరు ప్రతిరోజూ ఉపయోగించే యాప్‌లను ఎలా శక్తివంతం చేస్తుందో తెలుసుకోండి." }
    },
    "13": {
        en: { id: "", title: "Digital Literacy & Online Tools", desc: "Master the essential online tools and skills needed for the modern digital world." },
        hi: { id: "", title: "डिजिटल साक्षरता और ऑनलाइन उपकरण", desc: "आधुनिक डिजिटल दुनिया के लिए आवश्यक ऑनलाइन उपकरणों और कौशल में महारत हासिल करें।" },
        te: { id: "", title: "డిజిటల్ లిటరసీ & ఆన్‌లైన్ టూల్స్", desc: "ఆధునిక డిజిటల్ ప్రపంచానికి అవసరమైన ఆన్‌లైన్ టూల్స్ మరియు నైపుణ్యాలను నేర్చుకోండి." }
    },
    "14": {
        en: { id: "", title: "Troubleshooting & Maintenance", desc: "Learn how to fix common computer problems and keep your system running smoothly." },
        hi: { id: "", title: "समस्या निवारण और रखरखाव", desc: "सामान्य कंप्यूटर समस्याओं को ठीक करना और अपने सिस्टम को सुचारू रूप से चलाना सीखें।" },
        te: { id: "", title: "ట్రబుల్షూటింగ్ & మెయింటెనెన్స్", desc: "సాధారణ కంప్యూటర్ సమస్యలను ఎలా పరిష్కరించాలో మరియు మీ సిస్టమ్‌ను ఎలా మెరుగుపరచాలో తెలుసుకోండి." }
    },
    "15": {
        en: { id: "", title: "Device Management", desc: "Learn to manage both your mobile and PC devices effectively for better performance." },
        hi: { id: "", title: "डिवाइस प्रबंधन", desc: "बेहतर प्रदर्शन के लिए अपने मोबाइल और पीसी दोनों उपकरणों को प्रभावी ढंग से प्रबंधित करना सीखें।" },
        te: { id: "", title: "డివైస్ మేనేజ్‌మెంట్", desc: "మెరుగైన పనితీరు కోసం మీ మొబైల్ మరియు PC పరికరాలను సమర్థవంతంగా నిర్వహించడం నేర్చుకోండి." }
    },
    "16": {
        en: { id: "", title: "Productivity Tools (Office)", desc: "Essential skills for Microsoft Word, Excel, and PowerPoint for school and work." },
        hi: { id: "", title: "उत्पादकता उपकरण (Office)", desc: "स्कूल और काम के लिए माइक्रोसॉफ्ट वर्ड, एक्सेल और पॉवरपॉइंट के लिए आवश्यक कौशल।" },
        te: { id: "", title: "ప్రొడక్టివిటీ టూల్స్ (ఆఫీస్)", desc: "స్కూల్ మరియు పని కోసం మైక్రోసాఫ్ట్ వర్డ్, ఎక్సెల్ మరియు పవర్‌పాయింట్ కోసం అవసరమైన నైపుణ్యాలు." }
    },
    "17": {
        en: { id: "", title: "Data & AI Basics", desc: "An introduction to the world of data and artificial intelligence." },
        hi: { id: "", title: "डेटा और AI मूल बातें", desc: "डेटा और कृत्रिम बुद्धिमत्ता (AI) की दुनिया का परिचय।" },
        te: { id: "", title: "డేటా & AI బేసిక్స్", desc: "డేటా మరియు ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ ప్రపంచానికి పరిచయం." }
    },
    "18": {
        en: { id: "", title: "Programming Basics", desc: "Start your journey into coding and learn how to think like a programmer." },
        hi: { id: "", title: "प्रोग्रामिंग मूल बातें", desc: "कोडिंग में अपनी यात्रा शुरू करें और एक प्रोग्रामर की तरह सोचना सीखें।" },
        te: { id: "", title: "ప్రోగ్రామింగ్ బేసిక్స్", desc: "కోడింగ్‌లోకి మీ ప్రయాణాన్ని ప్రారంభించండి మరియు ప్రోగ్రామర్‌లా ఆలోచించడం నేర్చుకోండి." }
    },
    "19": {
        en: { id: "", title: "Databases", desc: "Learn how data is stored, organized, and retrieved using databases." },
        hi: { id: "", title: "डेटाबेस", desc: "जानें कि डेटाबेस का उपयोग करके डेटा को कैसे संग्रहीत, व्यवस्थित और पुनर्प्राप्त किया जाता है।" },
        te: { id: "", title: "డేటాబేసెస్", desc: "డేటాబేస్‌లను ఉపయోగించి డేటా ఎలా నిల్వ చేయబడుతుందో మరియు ఎలా తిరిగి పొందబడుతుందో తెలుసుకోండి." }
    },
    "20": {
        en: { id: "", title: "Web Concepts", desc: "Understand the core concepts that power the worldwide web." },
        hi: { id: "", title: "वेब अवधारणाएं", desc: "दुनिया भर में वेब को शक्ति देने वाली मुख्य अवधारणाओं को समझें।" },
        te: { id: "", title: "వెబ్ కాన్సెప్ట్స్", desc: "వరల్డ్ వైड వెబ్‌ను శక్తివంతం చేసే ప్రధాన అంశాలను అర్థం చేసుకోండి." }
    },
    "21": {
        en: { id: "", title: "Virtualization & Containers", desc: "Explore the technologies that allow multiple systems to run on a single machine." },
        hi: { id: "", title: "वर्चुअलाइजेशन और कंटेनर", desc: "उन तकनीकों का पता लगाएं जो एक ही मशीन पर कई सिस्टम चलाने की अनुमति देती हैं।" },
        te: { id: "", title: "వర్చువలైజేషన్ & కంటైనర్లు", desc: "ఒకే మిషన్‌పై బహుళ సిస్టమ్‌లను అమలు చేయడానికి అనుమతించే సాంకేతికతలను అన్వేషించండి." }
    },
    "22": {
        en: { id: "", title: "Raspberry Pi & Embedded Systems", desc: "Get hands-on with hardware using the versatile Raspberry Pi." },
        hi: { id: "", title: "रास्पबेरी पाई और एम्बेडेड सिस्टम", desc: "बहुमुखी रास्पबेरी पाई का उपयोग करके हार्डवेयर के साथ काम करना सीखें।" },
        te: { id: "", title: "రాస్ప్‌బెర్రీ పై & ఎంబెడెడ్ సిస్టమ్స్", desc: "బహుముఖ రాస్ప్‌బెర్రీ పై ఉపయోగించి హార్డ్‌వేర్‌తో ప్రాక్టికల్ అనుభవం పొందండి." }
    },
    "23": {
        en: { id: "", title: "Blockchain & Digital Currency", desc: "Learn about the decentralized technology behind modern digital currencies." },
        hi: { id: "", title: "ब्लॉकचेन और डिजिटल मुद्रा", desc: "आधुनिक डिजिटल मुद्राओं के पीछे की विकेंद्रीकृत तकनीक के बारे में जानें।" },
        te: { id: "", title: "బ్లాక్‌చెయిన్ & డిజిటల్ కరెన్సీ", desc: "ఆధునిక డిజిటల్ కరెన్సీల వెనుక ఉన్న వికేంద్రీకృత సాంకేతికత గురించి తెలుసుకోండి." }
    },
    "24": {
        en: { id: "", title: "Quantum Computing Basics", desc: "Take a peek into the future and explore the fascinating world of quantum computing." },
        hi: { id: "", title: "क्वांटम कंप्यूटिंग मूल बातें", desc: "भविष्य की एक झलक लें और क्वांटम कंप्यूटिंग की आकर्षक दुनिया का पता लगाएं।" },
        te: { id: "", title: "క్వాంటం కంప్యూటింగ్ బేసిక్స్", desc: "భవిష్యత్తులోకి ఒకసారి చూసి, క్వాంటం కంప్యూటింగ్ యొక్క అద్భుతమైన ప్రపంచాన్ని అన్వేషించండి." }
    },
    "25": {
        en: { id: "", title: "AI Ethics & Responsible AI", desc: "Understand the ethical considerations and responsibilities in building and using AI." },
        hi: { id: "", title: "AI नैतिकता और जिम्मेदार AI", desc: "AI के निर्माण और उपयोग में नैतिक विचारों और जिम्मेदारियों को समझें।" },
        te: { id: "", title: "AI ఎథిక్స్ & రెస్పాన్సిబుల్ AI", desc: "AIని నిర్మించడంలో మరియు ఉపయోగించడంలో నైతిక బాధ్యతలను అర్థం చేసుకోండి." }
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

    const activeModuleId = moduleId.toString();

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
                            onClick={() => setLanguage(lang)}
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

            {/* Video Player Area */}
            <Card className="overflow-hidden border-none shadow-2xl bg-black aspect-video relative rounded-[2rem] flex items-center justify-center">
                {content.id ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${content.id}?rel=0&controls=1&modestbranding=1`}
                        title="Module Intro Video"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
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

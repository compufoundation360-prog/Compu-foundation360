
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, FileSpreadsheet, Globe, FileType, X, Table, FileText, LayoutGrid, FileJson, Calculator, Activity, Database, BarChart, Smartphone, Server, Info, Bot, Clock, MessageSquare, TrendingUp, Circle, PieChart, AlertTriangle, Brain, Eye, Lock, Shield, Fingerprint } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Module17 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    const handleNext = (nextTopic: string) => {
        navigate(`/module/17/topic/${nextTopic}`);
    };

    const handlePrev = (prevTopic: string) => {
        navigate(`/module/17/topic/${prevTopic}`);
    };

    /* ==================================================================================
       TOPIC 1: WHAT IS DATA?
       Subtopics: Types of data, Where data comes from, Real-world examples
    ================================================================================== */
    if (topicId === "1") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
                {/* Section 1: The Core Concept */}
                <section className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm">17.1 Introduction</Badge>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground">What is Data?</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                At its core, data is simply <strong>information specifically formatted for storage, processing, and transmission</strong>. It's the "raw material" of the digital age.
                            </p>
                            <Card className="p-6 bg-primary/5 border-primary/20">
                                <div className="flex items-center gap-4">
                                    <Database className="h-8 w-8 text-primary" />
                                    <p className="font-medium text-lg">
                                        Data = Facts, figures, and statistics collected for analysis.
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3">
                            {/* Visual Placeholder for "Raw Data to Insight" flow */}
                            <Card className="p-6 text-center space-y-4 h-full flex flex-col justify-center items-center bg-muted/30">
                                <div className="flex gap-2">
                                    <span className="text-2xl">📊</span>
                                    <span className="text-2xl">📸</span>
                                    <span className="text-2xl">🎵</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Every click, photo, and message is data.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Section 2: Types of Data (Mandatory: Types of Data) */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold">Types of Data</h2>
                    <p className="text-lg text-foreground/80">Data isn't just numbers. It comes in two main flavors.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-8 space-y-4 border-l-4 border-l-blue-500 hover:shadow-lg transition-all">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <BarChart className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Quantitative (The Numbers)</h3>
                            <p className="text-muted-foreground">Measurable data that answers "How much?" or "How many?".</p>
                            <ul className="space-y-2 pt-2">
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Height: 175 cm</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Price: $19.99</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Speed: 60 km/h</li>
                            </ul>
                        </Card>

                        <Card className="p-8 space-y-4 border-l-4 border-l-purple-500 hover:shadow-lg transition-all">
                            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Qualitative (The Description)</h3>
                            <p className="text-muted-foreground">Descriptive data that observes "What kind?" or "Why?".</p>
                            <ul className="space-y-2 pt-2">
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Color: Blue</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Feedback: "Great service!"</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Texture: Smooth</li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Section 3: Where Data Comes From (Mandatory: Sources) */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold">Where Does Data Come From?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="p-6 text-center space-y-3 hover:border-primary/50 transition-colors">
                            <div className="mx-auto h-14 w-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl">👥</div>
                            <h3 className="font-bold text-lg">People</h3>
                            <p className="text-sm text-muted-foreground">Social media posts, emails, survey responses, and search queries.</p>
                        </Card>
                        <Card className="p-6 text-center space-y-3 hover:border-primary/50 transition-colors">
                            <div className="mx-auto h-14 w-14 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 text-2xl">🤖</div>
                            <h3 className="font-bold text-lg">Machines</h3>
                            <p className="text-sm text-muted-foreground">GPS signals, weather sensors, smart watches, and manufacturing logs.</p>
                        </Card>
                        <Card className="p-6 text-center space-y-3 hover:border-primary/50 transition-colors">
                            <div className="mx-auto h-14 w-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-2xl">💳</div>
                            <h3 className="font-bold text-lg">Transactions</h3>
                            <p className="text-sm text-muted-foreground">Bank transfers, online purchases, ticket bookings, and billing records.</p>
                        </Card>
                    </div>
                </section>

                {/* Section 4: Analog vs Digital & Big Data */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold">The Digital Revolution</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 space-y-3 bg-muted/20">
                            <h3 className="text-xl font-bold flex items-center gap-2">🔄 Analog Data</h3>
                            <p className="text-sm text-muted-foreground">Continuous signals. Like a vinyl record or a mercury thermometer. Infinite precision, but hard to copy perfectly.</p>
                        </Card>
                        <Card className="p-6 space-y-3 bg-muted/20">
                            <h3 className="text-xl font-bold flex items-center gap-2">💾 Digital Data</h3>
                            <p className="text-sm text-muted-foreground">Discrete signals (0s and 1s). Like an MP3 or a digital clock. Easy to copy, store, and analyze perfectly.</p>
                        </Card>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold">The "Big Data" Explosion (3 V's)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 text-center space-y-2 border-t-4 border-t-blue-500">
                            <h3 className="text-xl font-bold">Volume</h3>
                            <p className="text-sm text-muted-foreground">The sheer amount. Zettabytes of data generated every year.</p>
                        </Card>
                        <Card className="p-6 text-center space-y-2 border-t-4 border-t-green-500">
                            <h3 className="text-xl font-bold">Velocity</h3>
                            <p className="text-sm text-muted-foreground">The speed. Data streams in real-time (stocks, sensors).</p>
                        </Card>
                        <Card className="p-6 text-center space-y-2 border-t-4 border-t-purple-500">
                            <h3 className="text-xl font-bold">Variety</h3>
                            <p className="text-sm text-muted-foreground">The types. Not just text, but video, audio, and mixed media.</p>
                        </Card>
                    </div>
                </section>

                {/* Section 4: The Data Life Cycle */}
                <section className="bg-muted/30 p-8 rounded-3xl space-y-6">
                    <h2 className="text-3xl font-semibold text-center">The Data Life Cycle</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

                        {[
                            { step: "1", title: "Collection", icon: "📥", desc: "Gathering raw info" },
                            { step: "2", title: "Storage", icon: "💾", desc: "Saving to database" },
                            { step: "3", title: "Analysis", icon: "🧠", desc: "Finding patterns" },
                            { step: "4", title: "Action", icon: "🚀", desc: "Making decisions" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card w-full md:w-48 p-4 rounded-xl shadow-sm border text-center space-y-2 z-10">
                                <div className="text-3xl mb-2">{item.icon}</div>
                                <h4 className="font-bold">{item.title}</h4>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 5: Real-World Examples (Mandatory) */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold">Real-World Examples: A Day in Data</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="w-24 font-bold text-right pt-2 text-primary">07:00 AM</div>
                            <Card className="flex-1 p-4 flex gap-4 items-center">
                                <Smartphone className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">Alarm & Weather Check</p>
                                    <p className="text-sm text-muted-foreground">Phone sensor data + Fetching weather API data.</p>
                                </div>
                            </Card>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-24 font-bold text-right pt-2 text-primary">10:00 AM</div>
                            <Card className="flex-1 p-4 flex gap-4 items-center">
                                <Globe className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">Browsing Awareness</p>
                                    <p className="text-sm text-muted-foreground">Cookies tracking website visits to recommend content.</p>
                                </div>
                            </Card>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-24 font-bold text-right pt-2 text-primary">06:00 PM</div>
                            <Card className="flex-1 p-4 flex gap-4 items-center">
                                <Server className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">Streaming a Movie</p>
                                    <p className="text-sm text-muted-foreground">Netflix using your watch history data to suggest the next film.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Section 6: Why It Matters */}
                <section className="pt-8">
                    <Card className="bg-primary text-primary-foreground p-8 rounded-3xl text-center space-y-4">
                        <h2 className="text-3xl font-bold">Why Does This Matter?</h2>
                        <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                            Data is often called the <span className="font-black bg-white/20 px-2 rounded">"New Oil"</span>.
                            Just like oil powers engines, data powers the modern world—from helping doctors diagnose diseases to helping businesses understand what you want to buy.
                        </p>
                        <Button variant="secondary" size="lg" className="mt-4 font-semibold" onClick={() => handleNext("2")}>
                            Next: Data Formats <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Card>
                </section>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => navigate("/module/16/topic/10")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Module
                    </Button>
                    <div className="text-sm text-muted-foreground">Topic 1 of 10</div>
                </div>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 2: DATA FORMATS
       Subtopics: Structured, Unstructured, Semi-structured
    ================================================================================== */
    if (topicId === "2") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
                {/* Section 1: Intro */}
                <section className="space-y-6 text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm">17.2 Data Formats</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Why Shape Matters</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Just like liquids need a container to hold them, digital data needs a <strong>structure</strong> or <strong>format</strong> to be stored and processed by computers. In the digital world, data comes in three primary "shapes".
                    </p>
                    {/* Visual Placeholder: Three Shapes */}
                    <Card className="p-8 border border-border bg-muted/20 relative min-h-[200px] flex flex-col items-center justify-center text-center">
                        <p className="text-sm text-muted-foreground mb-4 font-mono">[VISUAL CONTAINER: IMAGE PLACEHOLDER]</p>
                        <div className="flex gap-8 opacity-50 text-6xl">
                            <span>🟥</span><span>☁️</span><span>📝</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">Placeholder for: Three shapes (Structured, Unstructured, Semi-structured).</p>
                    </Card>
                </section>

                {/* Section 2: The Big Three Cards */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">The Big Three: Data States</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Structured */}
                        <Card className="p-6 flex flex-col gap-4 h-full hover:shadow-lg transition-transform hover:-translate-y-1">
                            <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-3xl">📊</div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">The "Excel Sheet"</div>
                                <h3 className="text-2xl font-bold text-foreground">Structured Data</h3>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                                High-order data. Fits perfectly into rows and columns, like a spreadsheet or SQL database. Every piece of info has a "home". Rigid, organized, easy to search.
                            </p>
                            <ul className="text-sm space-y-2 mt-auto text-muted-foreground pt-4 border-t">
                                <li>• Phone Books</li>
                                <li>• Bank Logs</li>
                                <li>• Inventory Lists</li>
                            </ul>
                        </Card>

                        {/* Unstructured */}
                        <Card className="p-6 flex flex-col gap-4 h-full hover:shadow-lg transition-transform hover:-translate-y-1">
                            <div className="h-14 w-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-3xl">🎨</div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.3em] text-orange-600 font-bold mb-2">The "Messy Room"</div>
                                <h3 className="text-2xl font-bold text-foreground">Unstructured Data</h3>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                                The chaos of the real world. No predefined model. Includes text, video, and audio. It is heavy, complex, and hard for traditional software to analyze.
                            </p>
                            <ul className="text-sm space-y-2 mt-auto text-muted-foreground pt-4 border-t">
                                <li>• Social Posts</li>
                                <li>• Videos/Images</li>
                                <li>• Emails</li>
                            </ul>
                        </Card>

                        {/* Semi-Structured */}
                        <Card className="p-6 flex flex-col gap-4 h-full hover:shadow-lg transition-transform hover:-translate-y-1">
                            <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-3xl">🏷️</div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.3em] text-purple-600 font-bold mb-2">The "Sticky Notes"</div>
                                <h3 className="text-2xl font-bold text-foreground">Semi-Structured</h3>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                                The bridge. Doesn't live in a table, but has "tags" or markers explaining what the data is (like JSON or HTML). Flexible but machine-readable.
                            </p>
                            <ul className="text-sm space-y-2 mt-auto text-muted-foreground pt-4 border-t">
                                <li>• Webpages</li>
                                <li>• JSON Files</li>
                                <li>• Server Logs</li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Section 3: Visual Diagram: The Spectrum */}
                <section className="bg-muted/30 py-12 rounded-3xl">
                    <div className="text-center px-8">
                        <h3 className="text-2xl font-bold mb-6">The Order vs. Chaos Spectrum</h3>
                        {/* Visual Placeholder */}
                        <div className="max-w-3xl mx-auto border-2 border-dashed border-primary/30 rounded-xl min-h-[150px] flex flex-col items-center justify-center bg-background p-8">
                            <p className="text-sm text-muted-foreground mb-4 font-mono">[DIAGRAM CONTAINER: SPECTRUM VISUAL]</p>
                            <div className="w-full flex justify-between items-center px-12 text-lg font-bold text-muted-foreground">
                                <span>Rigid Order (SQL)</span>
                                <span className="text-3xl">↔️</span>
                                <span>Total Chaos (Video)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Practical Examples: The Format Zoo */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">The Format Zoo</h2>
                        <p className="text-lg text-muted-foreground">Recognize these file extensions?</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { ext: ".CSV", type: "Structured", desc: "Plain Text Data" },
                            { ext: ".SQL", type: "Structured", desc: "Database File" },
                            { ext: ".JSON", type: "Semi", desc: "Web Data" },
                            { ext: ".XML", type: "Semi", desc: "Tagged Data" },
                            { ext: ".JPG", type: "Unstructured", desc: "Image Data" },
                            { ext: ".MP4", type: "Unstructured", desc: "Video Data" }
                        ].map((item, i) => (
                            <Card key={i} className="p-4 text-center hover:bg-slate-50 dark:hover:bg-slate-900 transition cursor-default">
                                <div className="text-xl font-black text-primary mb-1">{item.ext}</div>
                                <div className="text-xs font-bold uppercase text-muted-foreground mb-2">{item.type}</div>
                                <div className="text-xs text-muted-foreground">{item.desc}</div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Section 5: Deep Dive Comparison */}
                <section>
                    <div className="max-w-5xl mx-auto bg-background rounded-3xl border border-border shadow-sm overflow-hidden">
                        <div className="grid grid-cols-2 text-center bg-muted/40">
                            <div className="p-6 border-b border-border border-r">
                                <div className="text-blue-600 font-bold tracking-widest uppercase mb-2">Order</div>
                                <h3 className="text-2xl font-bold">Structured Data</h3>
                            </div>
                            <div className="p-6 border-b border-border">
                                <div className="text-orange-600 font-bold tracking-widest uppercase mb-2">Chaos</div>
                                <h3 className="text-2xl font-bold">Unstructured Data</h3>
                            </div>
                        </div>
                        {[
                            { label: "Searchability", struct: "✅ Instant. Like finding a book by ID.", unstruct: "❌ Difficult. Like finding a page in a pile." },
                            { label: "Storage Size", struct: "✅ Efficient. Text is small.", unstruct: "❌ Heavy. Images/Video are huge." },
                            { label: "Flexibility", struct: "❌ Rigid. Hard to change fields.", unstruct: "✅ Highly Flexible. Save anything." },
                            { label: "Analysis Tool", struct: "🖥️ Basic Algorithms", unstruct: "🧠 AI & Neural Networks" }
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-2 text-sm md:text-base border-b border-border last:border-0 hover:bg-muted/5 transition">
                                <div className="p-6 border-r border-border">{row.struct}</div>
                                <div className="p-6">{row.unstruct}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 6: The Analogy */}
                <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-900/20 py-16 rounded-3xl">
                    <div className="px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">Mental Model</div>
                                <h2 className="text-3xl font-bold">The Library Analogy</h2>
                                <p className="text-lg leading-relaxed text-foreground/90">
                                    <strong>Structured Data</strong> is the main collection. Every book is on the correct shelf, alphabetized. You can find exactly what you want in seconds.
                                    <br /><br />
                                    <strong>Unstructured Data</strong> is the "return bin" or a pile of donated books on the floor. Valuable info is there, but you have to read every book to find it.
                                </p>
                            </div>
                            {/* Visual Placeholder */}
                            <Card className="min-h-[250px] border-2 border-dashed border-primary/20 bg-background/50 flex flex-col items-center justify-center p-8 text-center">
                                <p className="text-sm text-muted-foreground font-mono mb-4">[IMAGE CONTAINER: LIBRARY SPLIT]</p>
                                <p className="text-xs text-muted-foreground">Left: Organized Shelves | Right: Pile of Books</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Section 7: Why it matters for AI */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Feeding the Machine</h2>
                        <p className="text-lg text-muted-foreground mt-2">This distinction is critical for AI.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 border-2 border-dashed border-gray-300 rounded-xl min-h-[200px] flex items-center justify-center bg-muted/10">
                            <p className="text-sm text-muted-foreground font-mono">[DIAGRAM CONTAINER: AI FEEDING]</p>
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <p className="text-lg leading-relaxed">
                                Traditional software LOVED <strong>Structured Data</strong>. It was safe.
                            </p>
                            <p className="text-lg leading-relaxed font-semibold text-primary">
                                But Modern AI (like ChatGPT) thrives on UNSTRUCTURED data.
                            </p>
                            <p className="text-lg leading-relaxed">
                                To learn, AI reads billions of websites (unstructured text) and sees millions of photos (unstructured pixels). The "messy" data is where the real human intelligence lives.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 8: Metadata */}
                <section className="bg-slate-900 text-white py-12 rounded-3xl px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hidden Layer: Metadata</h2>
                            <p className="text-xl text-slate-300">"Data about Data."</p>
                            <p className="text-slate-300 leading-relaxed">
                                Even unstructured data has a hidden structure. A photo is just pixels, but its <strong>Metadata</strong> tells you the Date, GPS Location, and Camera Model. This helps computers organize the chaos.
                            </p>
                        </div>
                        <div className="border-2 border-dashed border-slate-700 rounded-xl min-h-[200px] flex items-center justify-center bg-slate-800">
                            <p className="text-sm text-slate-500 font-mono">[IMAGE CONTAINER: POLAROID METADATA]</p>
                        </div>
                    </div>
                </section>

                {/* Section 9: Compression & Encoding */}
                <section className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6 space-y-4">
                        <h2 className="text-2xl font-bold">Compression: Shrinking Data</h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                                <h4 className="font-bold text-sm">Lossless (ZIP)</h4>
                                <p className="text-xs text-muted-foreground">Perfect copy. Unzips to original state (Docs, Code).</p>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                                <h4 className="font-bold text-sm">Lossy (JPEG/MP3)</h4>
                                <p className="text-xs text-muted-foreground">Throws away invisible detail to save massive space (Photos, Music).</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 space-y-4">
                        <h2 className="text-2xl font-bold">Encoding: The Digital Alphabet</h2>
                        <p className="text-sm text-muted-foreground">
                            Computers only know numbers. <strong>Encoding</strong> maps numbers to characters.
                        </p>
                        <div className="flex gap-4 text-center text-xs font-mono">
                            <div className="p-3 bg-muted rounded border">
                                <div className="text-lg font-bold">65</div>
                                <div>'A'</div>
                            </div>
                            <div className="p-3 bg-muted rounded border">
                                <div className="text-lg font-bold">97</div>
                                <div>'a'</div>
                            </div>
                            <div className="p-3 bg-muted rounded border">
                                <div className="text-lg font-bold">32</div>
                                <div>(Space)</div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">UTF-8 is the universal encoding of the web.</p>
                    </Card>
                </section>



                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("1")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("3")}>
                        Next: Basic Data Tools <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 3: BASIC DATA TOOLS
       Subtopics: Excel, Google Sheets, CSV files
    ================================================================================== */
    if (topicId === "3") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
                {/* Section 1: Introduction */}
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm">17.3 Basic Tools</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">The Essential Toolkit</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        You don't need a supercomputer to work with data. The most powerful data usage happens in tools you likely already have.
                    </p>
                </section>

                {/* Section 2: Tools Grid */}
                <section className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Microsoft Excel", badge: "The Powerhouse", icon: <FileSpreadsheet className="h-10 w-10 text-green-600" />, desc: "The industry standard. Best for offline work, massive calculations, and financial modeling.", tags: ["Complex Math", "Large Files", "Offline"] },
                        { title: "Google Sheets", badge: "The Collaborator", icon: <Globe className="h-10 w-10 text-green-400" />, desc: "Cloud-based and agile. Best for teams working together in real-time and simple shared lists.", tags: ["Teamwork", "Real-time", "Sharing"] }
                    ].map((tool, i) => (
                        <Card key={i} className="p-8 space-y-4 border border-border hover:shadow-lg transition">
                            <div className="flex justify-between items-start">
                                <h2 className="text-2xl font-bold flex items-center gap-3">{tool.icon} {tool.title}</h2>
                                <Badge variant="secondary">{tool.badge}</Badge>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">{tool.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-4">
                                {tool.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                            </div>
                        </Card>
                    ))}

                </section>

                {/* VISUAL PLACEHOLDER 1: Interface Preview */}
                <section className="container mx-auto px-4">
                    <Card className="p-8 border-2 border-dashed border-primary/20 bg-muted/20 flex flex-col items-center justify-center text-center">
                        <p className="text-sm text-muted-foreground font-mono mb-4">[VISUAL CONTAINER: SPREADSHEET INTERFACE]</p>
                        <div className="w-full max-w-2xl h-48 bg-background rounded border shadow-sm flex items-center justify-center">
                            <span className="text-muted-foreground opacity-50">Screenshot of Excel/Sheets Grid UI</span>
                        </div>
                    </Card>
                </section>

                {/* Section 3: CSV Spotlight */}
                <section className="bg-slate-900 text-slate-100 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-yellow-400">CSV: The Universal Language</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                <strong>Comma Separated Values</strong>. It is the raw text format used to move data between apps. If Excel is a "Factory", CSV is the "Truck" that ships the materials.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-400" /> Extremely lightweight plain text.</li>
                                <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-400" /> Readable by humans and machines.</li>
                                <li className="flex items-center gap-3 text-slate-300"><Check className="text-green-400" /> One line per record.</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl font-mono text-sm border border-slate-700 shadow-xl">
                            <div className="flex justify-between text-xs text-slate-500 mb-4 border-b border-slate-700 pb-2">
                                <span>data.csv</span>
                                <span>UTF-8</span>
                            </div>
                            <p className="text-slate-500 mb-2 select-none">// Header Row</p>
                            <p><span className="text-purple-400">Name</span>, <span className="text-blue-400">Age</span>, <span className="text-green-400">Role</span></p>
                            <p className="text-slate-500 mb-2 mt-4 select-none">// Data Rows</p>
                            <p>John Doe, 29, Developer</p>
                            <p>Jane Smith, 34, Designer</p>
                            <p>Bob Lee, 42, Manager</p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Magic of Formulas */}
                <section>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900">
                        <div className="flex-1 space-y-4">
                            <div className="inline-block p-2 bg-blue-100 dark:bg-blue-900 rounded-lg"><Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div>
                            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">The "Magic Words" (Formulas)</h2>
                            <p className="text-lg text-blue-800/80 dark:text-blue-200/80 leading-relaxed">
                                The real power of these tools isn't typing data, it's <strong>calculating</strong> it. By typing an equals sign <code>=</code>, you turn a cell into a calculator.
                            </p>
                            <ul className="space-y-2 text-sm font-medium">
                                <li className="flex gap-2"><code>=SUM(A1:A10)</code> <span className="text-muted-foreground">→ Adds up everything automatically.</span></li>
                                <li className="flex gap-2"><code>=AVERAGE(B1:B20)</code> <span className="text-muted-foreground">→ Finds the middle ground.</span></li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-white dark:bg-black p-6 rounded-xl shadow-sm border border-border/50">
                            {/* Visual Formula Representation */}
                            <div className="grid grid-cols-3 gap-1 text-center font-mono text-sm mb-4">
                                <div className="p-2 border bg-muted/20">A</div>
                                <div className="p-2 border bg-muted/20">B</div>
                                <div className="p-2 border bg-muted/20">C (Total)</div>
                                <div className="p-2 border">10</div>
                                <div className="p-2 border">5</div>
                                <div className="p-2 border bg-green-50 dark:bg-green-900/20 text-green-600 font-bold">15</div>
                            </div>
                            <p className="text-xs text-center text-muted-foreground">Change A or B, and C updates instantly!</p>
                        </div>
                    </div>
                </section>

                {/* Section 5: Visualization */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">From Numbers to Pictures</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Human brains are bad at reading rows of numbers, but great at seeing patterns. Data tools let you create <strong>Charts</strong> in one click.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 hover:shadow-md transition text-center space-y-4">
                            <div className="h-32 bg-muted/30 rounded-lg flex items-end justify-center gap-2 p-4">
                                <div className="w-4 bg-primary/40 h-[40%]"></div>
                                <div className="w-4 bg-primary/60 h-[70%]"></div>
                                <div className="w-4 bg-primary h-[100%]"></div>
                            </div>
                            <h3 className="font-bold">Bar Chart</h3>
                            <p className="text-xs text-muted-foreground">Best for comparing different groups (e.g., Sales by Month).</p>
                        </Card>
                        <Card className="p-6 hover:shadow-md transition text-center space-y-4">
                            <div className="h-32 bg-muted/30 rounded-lg flex items-center justify-center p-4">
                                <div className="relative w-20 h-20 rounded-full border-8 border-primary border-t-transparent border-r-primary/50 rotate-45"></div>
                            </div>
                            <h3 className="font-bold">Pie Chart</h3>
                            <p className="text-xs text-muted-foreground">Best for showing parts of a whole (e.g., Budget Slice).</p>
                        </Card>
                        <Card className="p-6 hover:shadow-md transition text-center space-y-4">
                            <div className="h-32 bg-muted/30 rounded-lg flex items-center justify-center p-4">
                                <Activity className="h-16 w-16 text-primary" />
                            </div>
                            <h3 className="font-bold">Line Graph</h3>
                            <p className="text-xs text-muted-foreground">Best for showing trends over time (e.g., Temperature Change).</p>
                        </Card>
                    </div>
                </section>

                {/* VISUAL PLACEHOLDER 2: Dashboard Example */}
                <section className="container mx-auto px-4">
                    <Card className="p-8 border-2 border-dashed border-primary/20 bg-muted/20 flex flex-col items-center justify-center text-center">
                        <p className="text-sm text-muted-foreground font-mono mb-4">[VISUAL CONTAINER: DASHBOARD EXAMPLE]</p>
                        <div className="w-full max-w-2xl h-64 bg-background rounded-xl border shadow-sm flex items-center justify-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-8 bg-muted border-b"></div>
                            <div className="flex gap-4 p-8 items-center opacity-50">
                                <div className="w-32 h-32 rounded-full border-4 border-muted"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-muted w-full"></div>
                                    <div className="h-4 bg-muted w-3/4"></div>
                                    <div className="h-4 bg-muted w-1/2"></div>
                                </div>
                            </div>
                            <span className="absolute bottom-4 text-xs text-muted-foreground">Full Analytics Dashboard Preview</span>
                        </div>
                    </Card>
                </section>

                {/* Section 4.5: The Spreadsheet Hierarchy */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold">The Anatomy of a Spreadsheet</h2>
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                        <Card className="p-4 bg-muted/30">
                            <div className="text-2xl mb-2">📁</div>
                            <div className="font-bold text-sm">Workbook</div>
                            <div className="text-xs text-muted-foreground">The File</div>
                        </Card>
                        <Card className="p-4 bg-muted/30">
                            <div className="text-2xl mb-2">📄</div>
                            <div className="font-bold text-sm">Sheet</div>
                            <div className="text-xs text-muted-foreground">The Page</div>
                        </Card>
                        <Card className="p-4 bg-muted/30">
                            <div className="text-2xl mb-2">📐</div>
                            <div className="font-bold text-sm">Row/Column</div>
                            <div className="text-xs text-muted-foreground">The Grid</div>
                        </Card>
                        <Card className="p-4 bg-muted/30">
                            <div className="text-2xl mb-2">🟩</div>
                            <div className="font-bold text-sm">Cell</div>
                            <div className="text-xs text-muted-foreground">The Unit</div>
                        </Card>
                    </div>
                </section>


                {/* Section 5: Best Practices */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-12">Data Entry Best Practices</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8 border-l-4 border-l-green-500 space-y-4 bg-green-50/10">
                            <h3 className="font-bold text-green-700 text-xl flex items-center gap-2">✅ Do This</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><Check className="text-green-600 mt-1" /> Use consistent naming ("NY" vs "New York").</li>
                                <li className="flex gap-3"><Check className="text-green-600 mt-1" /> Keep one data type per column.</li>
                                <li className="flex gap-3"><Check className="text-green-600 mt-1" /> Back up raw files before editing.</li>
                            </ul>
                        </Card>
                        <Card className="p-8 border-l-4 border-l-red-500 space-y-4 bg-red-50/10">
                            <h3 className="font-bold text-red-700 text-xl flex items-center gap-2">❌ Not This</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><X className="text-red-600 mt-1" /> Don't use color as data (it disappears in CSV).</li>
                                <li className="flex gap-3"><X className="text-red-600 mt-1" /> Don't merge cells if you plan to sort.</li>
                                <li className="flex gap-3"><X className="text-red-600 mt-1" /> Don't leave random blank rows.</li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Section 6: Look Ahead - Databases */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Beyond Excel: Databases</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                            When data gets too big for sheets (millions of rows), we use <strong>Databases</strong>.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <Card className="p-6 bg-slate-900 text-green-400 font-mono text-sm shadow-xl border-slate-800">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-slate-500 ml-2">SQL Terminal</span>
                            </div>
                            <p className="mb-2 text-slate-500">// Find users over 18</p>
                            <p><span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> Users</p>
                            <p><span className="text-purple-400">WHERE</span> Age {">"} 18;</p>
                            <p className="mt-4 text-slate-500 animate-pulse">_</p>
                        </Card>
                        <div className="space-y-4">
                            <Card className="p-6">
                                <h3 className="font-bold mb-1">BI Tools (Business Intelligence)</h3>
                                <p className="text-sm text-muted-foreground">Tools like <strong>Tableau</strong> & <strong>PowerBI</strong> turn data into interactive dashboards.</p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-bold mb-1">Cloud Data</h3>
                                <p className="text-sm text-muted-foreground">Tools like <strong>Snowflake</strong> store Petabytes of data in the cloud.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* VISUAL PLACEHOLDER 3: Clean vs Dirty Data */}
                <section className="container mx-auto px-4">
                    <Card className="p-8 border-2 border-dashed border-primary/20 bg-muted/20 flex flex-col items-center justify-center text-center">
                        <p className="text-sm text-muted-foreground font-mono mb-4">[VISUAL CONTAINER: DIRTY VS CLEAN DATA]</p>
                        <div className="grid grid-cols-2 gap-8 w-full max-w-2xl text-xs font-mono">
                            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded border border-red-200">
                                <div className="font-bold text-red-600 mb-2">BAD DATA ❌</div>
                                <div className="space-y-1 opacity-50">
                                    <p>Name: john</p>
                                    <p>Age: twenty-five</p>
                                    <p>City: N.Y.</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded border border-green-200">
                                <div className="font-bold text-green-600 mb-2">GOOD DATA ✅</div>
                                <div className="space-y-1 opacity-50">
                                    <p>Name: John</p>
                                    <p>Age: 25</p>
                                    <p>City: New York</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("2")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("4")}>
                        Next: Introduction to AI <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 4: INTRODUCTION TO AI
       Subtopics: What is AI, ANI vs AGI, History, Turing Test
    ================================================================================== */
    /* ==================================================================================
       TOPIC 4: INTRODUCTION TO AI
       17.4.1 What is AI
       17.4.2 How AI Works
       17.4.3 Types of AI (Narrow, General, Super)
       17.4.4 Daily Life, Advantages, Limitations
    ================================================================================== */
    if (topicId === "4") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-8 max-w-6xl">
                {/* 17.4.1 Definition */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-stretch">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col justify-center">
                        <Badge variant="outline" className="w-fit mb-4 text-primary border-primary">17.4.1 Definition</Badge>
                        <h1 className="text-3xl font-bold mb-4">What is Artificial Intelligence?</h1>
                        <p className="text-lg leading-relaxed">
                            Artificial Intelligence (AI) is the simulation of <strong>human intelligence</strong> by machines. It is the science of making computers "think" and "act" like humans to solve problems, learn from experiences, and make decisions.
                        </p>
                    </Card>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <Bot className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-robot-handshake.jpg</p>
                    </div>
                </div>

                {/* 17.4.2 How AI Works */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6">17.4.2 How AI Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4 p-4 rounded-xl bg-muted/50">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-2xl">📥</div>
                            <h3 className="font-bold">1. Input</h3>
                            <p className="text-sm text-muted-foreground">Data (Images, Text, Numbers)</p>
                        </div>
                        <div className="space-y-4 p-4 rounded-xl bg-muted/50">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-2xl">⚙️</div>
                            <h3 className="font-bold">2. Process</h3>
                            <p className="text-sm text-muted-foreground">Algorithms analyze and learn</p>
                        </div>
                        <div className="space-y-4 p-4 rounded-xl bg-muted/50">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-2xl">📤</div>
                            <h3 className="font-bold">3. Output</h3>
                            <p className="text-sm text-muted-foreground">Prediction or Decision</p>
                        </div>
                    </div>
                </Card>

                {/* 17.4.3 Types of AI */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">17.4.3 Types of AI</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 border-l-4 border-l-blue-500">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">Narrow AI</Badge>
                            <h3 className="text-xl font-bold mb-2">Weak AI (Reality)</h3>
                            <p className="text-muted-foreground">Good at <strong>one specific task</strong>. <br />Ex: Siri, Google Maps, Chess Bots.</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-purple-500">
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">General AI</Badge>
                            <h3 className="text-xl font-bold mb-2">Strong AI (Sci-Fi)</h3>
                            <p className="text-muted-foreground">Can do <strong>anything</strong> a human can do. <br />Ex: Jarvis from Iron Man.</p>
                        </Card>
                    </div>
                </section>

                {/* History Timeline Visual */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6">A Brief History</h2>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <Clock className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-ai-timeline.jpg</p>
                        <p className="text-xs text-muted-foreground">Timeline: 1950 (Turing) &rarr; 1997 (Deep Blue) &rarr; 2011 (Siri) &rarr; 2022 (ChatGPT)</p>
                    </div>
                </Card>

                {/* 17.4.4 Daily Life Examples */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">17.4.4 AI in Daily Life</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">📱 Social Media</h3>
                            <p className="text-sm text-muted-foreground"><strong>Feed Algorithms:</strong> AI decides what post connects best with you.</p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">🚗 Navigation</h3>
                            <p className="text-sm text-muted-foreground"><strong>Google Maps:</strong> AI predicts traffic jams before they happen.</p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">📧 Email</h3>
                            <p className="text-sm text-muted-foreground"><strong>Spam Filters:</strong> AI blocks junk mail automatically.</p>
                        </Card>
                    </div>
                </section>

                {/* 17.4.6 Turing Test */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                        <h2 className="text-2xl font-bold mb-4">17.4.6 The Turing Test</h2>
                        <p className="text-lg mb-4">
                            Proposed by <strong>Alan Turing</strong> in 1950. It is a game to test if a machine can think.
                        </p>
                        <p className="text-muted-foreground italic">
                            "If a human talks to a machine and cannot tell it is a machine, then the machine is intelligent."
                        </p>
                    </Card>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <MessageSquare className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-turing-test.jpg</p>
                    </div>
                </div>

                {/* Key Learning Point */}
                <Card className="p-6 bg-primary text-primary-foreground text-center">
                    <h3 className="font-bold text-xl mb-2">💡 Key Learning Point</h3>
                    <p className="opacity-90">AI is not magic. It is just math and code that learns from data to mimic human actions.</p>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("3")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("5")}>
                        Next: Machine Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 5: INTRODUCTION TO MACHINE LEARNING
       Subtopics: ML vs Traditional, 3 Types, Simple Model, ML vs AI
    ================================================================================== */
    /* ==================================================================================
       TOPIC 5: INTRODUCTION TO MACHINE LEARNING (ML)
       17.5.1 What is ML
       17.5.2 How Machines Learn
       17.5.3 Working Process
       17.5.4 Examples
    ================================================================================== */
    if (topicId === "5") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-8 max-w-6xl">
                {/* 17.5.1 Definition */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-stretch">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col justify-center">
                        <Badge variant="outline" className="w-fit mb-4 text-primary border-primary">17.5.1 Definition</Badge>
                        <h1 className="text-3xl font-bold mb-4">What is Machine Learning?</h1>
                        <p className="text-lg leading-relaxed">
                            Machine Learning (ML) is a <strong>subset of AI</strong>. It is the specific way AI learns. Instead of coding every single rule, we give the computer data and it learns the rules by itself.
                        </p>
                    </Card>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <Database className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-ml-vs-coding.jpg</p>
                    </div>
                </div>

                {/* 17.5.2 How Machines Learn (Types) */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">17.5.2 Three Ways Machines Learn</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 hover:shadow-md transition">
                            <h3 className="font-bold text-lg mb-2 text-blue-600">1. Supervised</h3>
                            <p className="text-sm font-bold text-muted-foreground mb-4">Teacher & Student</p>
                            <p className="text-sm">We give the answer key. "Here is a picture of a cat, and here is the label 'Cat'. Learn it."</p>
                        </Card>
                        <Card className="p-6 hover:shadow-md transition">
                            <h3 className="font-bold text-lg mb-2 text-purple-600">2. Unsupervised</h3>
                            <p className="text-sm font-bold text-muted-foreground mb-4">Self Study</p>
                            <p className="text-sm">No answer key. "Here are 1000 photos. Group them by similar patterns."</p>
                        </Card>
                        <Card className="p-6 hover:shadow-md transition">
                            <h3 className="font-bold text-lg mb-2 text-orange-600">3. Reinforcement</h3>
                            <p className="text-sm font-bold text-muted-foreground mb-4">Trial & Error</p>
                            <p className="text-sm">Learning by failure. "I touched fire, it hurt (Penalty). I ate an apple, it was good (Reward)."</p>
                        </Card>
                    </div>
                </section>

                {/* Visual: House Price Prediction */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Visual Example: House Prices</h2>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <TrendingUp className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-house-price-chart.jpg</p>
                        <p className="text-muted-foreground text-xs">Chart showing: As Size (X-axis) increases, Price (Y-axis) increases. The 'Line of Best Fit' is the ML Model.</p>
                    </div>
                </Card>

                {/* 17.5.3 The ML Process */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">17.5.3 The ML Process</h2>
                    <Card className="p-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                            <div className="space-y-2">
                                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mx-auto text-xl">📊</div>
                                <h4 className="font-bold">1. Collect</h4>
                                <p className="text-xs text-muted-foreground">Get Data</p>
                            </div>
                            <ArrowRight className="text-muted-foreground w-6 h-6" />
                            <div className="space-y-2">
                                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mx-auto text-xl">⚙️</div>
                                <h4 className="font-bold">2. Train</h4>
                                <p className="text-xs text-muted-foreground">Find Patterns</p>
                            </div>
                            <ArrowRight className="text-muted-foreground w-6 h-6" />
                            <div className="space-y-2">
                                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mx-auto text-xl">🎯</div>
                                <h4 className="font-bold">3. Predict</h4>
                                <p className="text-xs text-muted-foreground">Test New Data</p>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 17.5.4 Examples */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">17.5.4 Examples of ML</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">🚫 Spam Detection</h3>
                            <p className="text-sm text-muted-foreground">Gmail learns that words like "Free Money" usually mean Spam.</p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">👤 Face Recognition</h3>
                            <p className="text-sm text-muted-foreground">Your phone learns specific measurements of your face to unlock.</p>
                        </Card>
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">🗣️ Voice Assistants</h3>
                            <p className="text-sm text-muted-foreground">Alexa learns your accent to understand your commands better.</p>
                        </Card>
                    </div>
                </section>

                {/* Visual: Nested Circles */}
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4">The Big Picture</h2>
                        <p className="text-lg">Machine Learning is a part of AI, and Deep Learning is a part of Machine Learning.</p>
                    </Card>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <Circle className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-ai-nested-circles.png</p>
                        <p className="text-xs text-muted-foreground">AI (Outer) &gt; Machine Learning (Middle) &gt; Deep Learning (Inner)</p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("4")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("6")}>
                        Next: Datasets <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 6: DATASETS
       Subtopics: Features vs Labels, Types, Bias, Sources
    ================================================================================== */
    /* ==================================================================================
       TOPIC 6: DATASETS
       17.6.1 What is Dataset
       17.6.2 Types
       17.6.3 Structure
       17.6.4 Examples
       17.6.5 Usage (Train/Test)
    ================================================================================== */
    if (topicId === "6") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-8 max-w-6xl">
                {/* 17.6.1 Definition */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-stretch">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col justify-center">
                        <Badge variant="outline" className="w-fit mb-4 text-primary border-primary">17.6.1 Definition</Badge>
                        <h1 className="text-3xl font-bold mb-4">What is a Dataset?</h1>
                        <p className="text-lg leading-relaxed">
                            A Dataset is simply a <strong>collection of data</strong>. It is the "textbook" that the AI studies to learn. Without a dataset, an AI knows nothing.
                        </p>
                    </Card>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <Database className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-dataset-anatomy.jpg</p>
                    </div>
                </div>

                {/* 17.6.3 Structure */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6">17.6.3 Structure (Rows & Columns)</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                                <Badge className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center p-0">1</Badge>
                                <p><strong className="text-blue-500">Columns (Features):</strong> The details (Size, Location).</p>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                                <Badge className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center p-0">2</Badge>
                                <p><strong className="text-green-500">Rows (Values):</strong> The examples (House 1, House 2).</p>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                                <Badge className="bg-purple-500 h-8 w-8 rounded-full flex items-center justify-center p-0">3</Badge>
                                <p><strong className="text-purple-500">Label (Answer):</strong> What we predict (Price).</p>
                            </div>
                        </div>
                        <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center">
                            <Table className="w-16 h-16 text-muted-foreground mb-4" />
                            <p className="font-mono text-sm text-muted-foreground">Interactive Table Placeholder</p>
                        </div>
                    </div>
                </Card>

                {/* 17.6.2 Types */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">17.6.2 Types of Datasets</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">📸 Image Data</h3>
                            <p className="text-sm text-muted-foreground">Pixels of faces, cars, or x-rays.</p>
                            <Badge variant="secondary" className="mt-2">Ex: FaceID</Badge>
                        </Card>
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">📝 Text Data</h3>
                            <p className="text-sm text-muted-foreground">Words, sentences, tweets, books.</p>
                            <Badge variant="secondary" className="mt-2">Ex: ChatGPT</Badge>
                        </Card>
                        <Card className="p-6">
                            <h3 className="font-bold text-lg mb-2">🔢 Numerical Data</h3>
                            <p className="text-sm text-muted-foreground">Prices, temperatures, stock info.</p>
                            <Badge variant="secondary" className="mt-2">Ex: Weather App</Badge>
                        </Card>
                    </div>
                </section>

                {/* Sources & Bias */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8">
                        <h2 className="text-xl font-bold mb-4">Data Sources</h2>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="px-3 py-1">User Input</Badge>
                            <Badge variant="outline" className="px-3 py-1">Sensors (IoT)</Badge>
                            <Badge variant="outline" className="px-3 py-1">The Internet</Badge>
                            <Badge variant="outline" className="px-3 py-1">Surveys</Badge>
                        </div>
                    </Card>
                    <Card className="p-8 border-l-4 border-l-red-500 bg-red-50/10">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="text-red-500 w-5 h-5" />
                            <h2 className="text-xl font-bold text-red-600">Beware of Bias!</h2>
                        </div>
                        <p className="text-muted-foreground">
                            If your dataset only has photos of <strong>white cats</strong>, the AI will not recognize a <strong>black cat</strong>. This is called Data Bias.
                        </p>
                    </Card>
                </div>

                {/* Key Learning Point */}
                <Card className="p-6 bg-primary text-primary-foreground text-center">
                    <h3 className="font-bold text-xl mb-2">💡 Key Learning Point</h3>
                    <p className="opacity-90">A dataset is simply a table of information. Rows are examples, Columns are details. It is the "food" for AI.</p>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("5")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("7")}>
                        Next: Training vs Testing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }
    /* ==================================================================================
       TOPIC 7: TRAINING VS TESTING
       Subtopics: 80/20 Split, Overfitting, Underfitting, Black Box
    ================================================================================== */
    /* ==================================================================================
       TOPIC 7: TRAINING VERSUS TESTING
       17.7.1 What is Training Data
       17.7.2 What is Testing Data
       17.7.3 Differences
       17.7.4 Example
    ================================================================================== */
    /* ==================================================================================
       TOPIC 7: TRAINING VERSUS TESTING
       17.7.1 What is Training Data
       17.7.2 What is Testing Data
       17.7.3 Differences
       17.7.4 Example
       17.7.5 Common Mistakes
    ================================================================================== */
    if (topicId === "7") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-8 max-w-6xl">
                {/* 17.7.1 Definitions */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-l-4 border-l-blue-500">
                        <Badge className="bg-blue-500 mb-4">17.7.1</Badge>
                        <h2 className="text-2xl font-bold mb-2">Training Data</h2>
                        <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-widest">The Textbook</h3>
                        <p className="text-sm">
                            This is the data used to <strong>Teach</strong> the machine. We show it both the question and the answer so it can learn.
                        </p>
                    </Card>
                    <Card className="p-8 border-l-4 border-l-purple-500">
                        <Badge className="bg-purple-500 mb-4">17.7.2</Badge>
                        <h2 className="text-2xl font-bold mb-2">Testing Data</h2>
                        <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-widest">The Exam</h3>
                        <p className="text-sm">
                            This is data used to <strong>Check</strong> the machine. We hide the answer to see if the machine can guess it correctly.
                        </p>
                    </Card>
                </div>

                {/* Visual: 80/20 Rule */}
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4">The 80/20 Rule</h2>
                        <p className="text-lg">
                            Never use all your data for training. Always keep 20% transparent, locked away to test the AI later. This ensures you aren't cheating!
                        </p>
                    </Card>
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <PieChart className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-split-chart.jpg</p>
                        <div className="flex gap-4">
                            <div className="bg-blue-500 text-white px-4 py-1 rounded">80% Train</div>
                            <div className="bg-purple-500 text-white px-4 py-1 rounded">20% Test</div>
                        </div>
                    </div>
                </div>

                {/* 17.7.3 Differences */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">17.7.3 The Key Differences</h2>
                    <div className="grid grid-cols-2 gap-8 text-center">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b pb-2">Training 📚</h3>
                            <p className="text-sm text-muted-foreground">Used to BUILD the model</p>
                            <p className="text-sm text-muted-foreground">Contains 80% of data</p>
                            <p className="text-sm text-muted-foreground">Like practicing homework</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b pb-2">Testing 📝</h3>
                            <p className="text-sm text-muted-foreground">Used to MEASURE accuracy</p>
                            <p className="text-sm text-muted-foreground">Contains 20% of data</p>
                            <p className="text-sm text-muted-foreground">Like the final exam</p>
                        </div>
                    </div>
                </Card>

                {/* 17.7.4 Example: Dog Photos */}
                <Card className="p-8 bg-muted/20">
                    <h2 className="text-2xl font-bold mb-6 text-center">17.7.4 Simple Example: Photos</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <div className="text-center p-4 bg-background rounded-xl border shadow-sm">
                            <div className="mb-2">🐶 🐶</div>
                            <p className="font-bold text-blue-600">Training</p>
                            <p className="text-xs text-muted-foreground">"Here are dogs."</p>
                        </div>
                        <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground" />
                        <div className="text-center p-4 bg-background rounded-xl border shadow-sm">
                            <div className="mb-2">❓</div>
                            <p className="font-bold text-purple-600">Testing</p>
                            <p className="text-xs text-muted-foreground">"What is this?"</p>
                        </div>
                    </div>
                </Card>

                {/* Visual: Overfitting */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center">
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <Activity className="w-16 h-16 text-muted-foreground" />
                        <p className="font-mono text-sm text-muted-foreground">Add module-media/m17-overfitting-graph.jpg</p>
                    </div>
                    <Card className="p-8 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4">Underfitting vs Overfitting</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-2 text-sm"><Check className="text-green-500 w-4 h-4" /> <strong>Good Fit:</strong> Model learns the general pattern.</li>
                            <li className="flex gap-2 text-sm"><X className="text-red-500 w-4 h-4" /> <strong>Overfitting:</strong> Model memorizes exact dots (Cheating). Fails on new data.</li>
                        </ul>
                    </Card>
                </div>

                {/* Black Box Problem */}
                <Card className="p-8 bg-black text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">The Black Box Problem</h2>
                    <p className="opacity-80 max-w-lg mx-auto mb-6">Sometimes, even the creators don't know EXACTLY how the AI made a decision. It takes inputs and gives outputs, but the middle is a mystery.</p>
                    <div className="flex items-center justify-center gap-4 font-mono text-sm">
                        <span>Input</span>
                        <span>&rarr;</span>
                        <span className="border border-white/20 p-2 rounded bg-white/10">???</span>
                        <span>&rarr;</span>
                        <span>Output</span>
                    </div>
                </Card>

                {/* Key Learning Point */}
                <Card className="p-6 bg-primary text-primary-foreground text-center">
                    <h3 className="font-bold text-xl mb-2">💡 Key Learning Point</h3>
                    <p className="opacity-90">First you Train (Learn), then you Test (Check). Never mix the two, or you are cheating!</p>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("6")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("8")}>
                        Next: Neural Networks <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }


    /* ==================================================================================
       TOPIC 8: NEURAL NETWORKS
       Subtopics: Bio vs Artificial, Layers, Weights/Biases, Computer Vision
    ================================================================================== */
    if (topicId === "8") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm">17.8 Deep Learning</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Mimicking the Brain</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        To build a smarter machine, we copied the smartest thing we know: the human brain. Neural Networks are layers of math designed to function like neurons firing in your head.
                    </p>
                </section>

                {/* Biology vs Code */}
                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl">
                    <h2 className="text-3xl font-bold text-center mb-8">Biology vs. Code</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                Your brain has billions of <strong>Neurons</strong> connected by synapses. When you see a cat, specific neurons "fire" to recognize the ears, whiskers, and tail.
                                <br /><br />
                                An <strong>Artificial Neural Network (ANN)</strong> does the same thing using math. It takes numbers (inputs), processes them through "Layers", and spits out a probability (output).
                            </p>
                        </div>

                        <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                            <p className="font-mono text-sm text-foreground">Add module-media/m17-neuron-comparison.jpg</p>
                            <p className="text-muted-foreground text-lg">
                                Side-by-side comparison: A biological neuron (dendrites/axon) vs. an artificial perceptron node (inputs/weights/sum).
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Layer Cake */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">The Layer Cake</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border-l-4 border-l-blue-500 hover:scale-105 transition duration-300">
                            <h3 className="font-bold text-xl mb-2 text-blue-600">1. Input Layer</h3>
                            <p className="text-sm text-muted-foreground">The eyes/ears of the AI. It receives raw data (pixels of an image, words of a sentence) and converts them into numbers.</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-purple-500 hover:scale-105 transition duration-300">
                            <h3 className="font-bold text-xl mb-2 text-purple-600">2. Hidden Layers</h3>
                            <p className="text-sm text-muted-foreground">The "Magic" middle. This is where the Deep Learning happens. These layers extract features—edges, shapes, textures—becoming more abstract as they go deeper.</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-green-500 hover:scale-105 transition duration-300">
                            <h3 className="font-bold text-xl mb-2 text-green-600">3. Output Layer</h3>
                            <p className="text-sm text-muted-foreground">The Decision. The final layer gives the answer, usually as a percentage confidence (e.g., "98% chance this is a Dog").</p>
                        </Card>
                    </div>
                </section >

                {/* Network Visual */}
                < section className="container mx-auto px-4 max-w-5xl" >
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <p className="font-mono text-sm text-foreground">Add module-media/m17-neural-network-diagram.png</p>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Diagram showing the web of connections: Input nodes on the left, multiple hidden layers of nodes in the middle, and output nodes on the right.
                        </p>
                    </div>
                </section >

                {/* Weights & Biases */}
                < section className="bg-muted/20 p-8 rounded-3xl" >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4 order-last md:order-first">
                            <p className="font-mono text-sm text-foreground">Add module-media/m17-weights-biases.jpg</p>
                            <p className="text-muted-foreground text-lg">
                                Visual analogy: A mixing board (DJ deck) where sliders represent "Weights" (importance) and knobs represent "Biases" (activation threshold).
                            </p>
                        </div>
                        <div className="space-y-4 order-first md:order-last">
                            <h2 className="text-3xl font-bold">How it Learns: Weights & Biases</h2>
                            <p className="text-lg leading-relaxed">
                                Think of the connections between neurons as "volume knobs."
                                <br /><br />
                                If a connection is important (e.g., "Has whiskers" → "Cat"), the AI turns up the <strong>Weight</strong>. If it's irrelevant ("Background color"), it turns it down. "Training" an AI is simply adjusting these millions of knobs until the output is correct.
                            </p>
                        </div>
                    </div>
                </section >

                {/* Computer Vision */}
                < section >
                    <h2 className="text-3xl font-bold text-center mb-8">Case Study: Computer Vision</h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                        How does a computer "see"? It doesn't see a picture; it sees a grid of numbers. Each pixel describes a color value.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 bg-slate-100 dark:bg-slate-800">
                            <h3 className="font-bold mb-2">What Humans See</h3>
                            <div className="bg-white p-4 rounded text-center text-6xl shadow h-48 flex items-center justify-center text-black">
                                7
                            </div>
                        </Card>
                        <Card className="p-6 bg-slate-900 text-green-400 font-mono text-xs overflow-hidden">
                            <h3 className="font-bold mb-2 text-white font-sans">What Computers See</h3>
                            <div className="leading-tight opacity-70">
                                0 0 0 0 0 0 0 0<br />
                                0 0 0 1 1 1 0 0<br />
                                0 0 0 0 0 1 0 0<br />
                                0 0 0 0 1 0 0 0<br />
                                0 0 0 1 0 0 0 0<br />
                                0 0 1 0 0 0 0 0<br />
                                0 0 1 0 0 0 0 0<br />
                                0 0 0 0 0 0 0 0
                            </div>
                        </Card>
                    </div>
                </section >

                {/* Navigation */}
                < div className="flex justify-between items-center pt-8 border-t" >
                    <Button variant="outline" onClick={() => handlePrev("7")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("9")}>
                        Next: Generative AI <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div >
            </div >
        );
    }

    /* ==================================================================================
       TOPIC 9: RESPONSIBLE AI BASICS
       Subtopics: Checking AI Output, Avoiding Misuse
    ================================================================================== */
    if (topicId === "9") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm">17.9 Safe & Ethical AI</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Responsible AI Basics</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        AI is powerful, but it makes mistakes. "Responsible AI" means using these tools safely, checking their work, and understanding their limits.
                    </p>
                </section>

                {/* Section 1: Checking AI Output (Hallucinations) */}
                {/* Section 1: Checking AI Output (Hallucinations) */}
                <Card className="p-8 border-l-4 border-l-orange-500 bg-orange-50/10 space-y-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="flex justify-center mb-4 text-4xl">🤥</div>
                        <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-400">Rule #1: Always Check the Output</h2>
                        <p className="text-orange-800 dark:text-orange-200 text-lg">
                            AI models (LLMs) can "Hallucinate." This means they confidently state facts that are completely wrong. They prioritize sounding fluent over being truthful.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="p-6 bg-red-100/50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-900">
                            <h3 className="font-bold text-red-600 mb-2">❌ The Mistake</h3>
                            <p className="text-sm text-muted-foreground">"Who was the first person on Mars?"</p>
                            <p className="mt-2 italic text-red-700 dark:text-red-400">AI: "The first person on Mars was John Smith in 2024..." (Factually false, but looks real).</p>
                        </div>
                        <div className="p-6 bg-green-100/50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-900">
                            <h3 className="font-bold text-green-600 mb-2">✅ The Fix</h3>
                            <p className="text-sm text-muted-foreground">Always verify important facts (dates, names, medical info) with Google or a trusted source. Never blindly copy-paste.</p>
                        </div>
                    </div>
                </Card>

                {/* Section 2: Avoiding Misuse */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Avoiding Misuse</h2>
                        <p className="text-lg leading-relaxed">
                            AI tools can be used to create fake news, spam, or harmful content. As a user, you have a responsibility to use them ethically.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="pt-1 text-primary">🛡️</span>
                                <span><strong>Deepfakes:</strong> Never use AI to create fake videos/images to impersonate someone.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="pt-1 text-primary">🛡️</span>
                                <span><strong>Bias:</strong> Remember that AI learns from internet data, which may contain biases against certain groups.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="pt-1 text-primary">🛡️</span>
                                <span><strong>Privacy:</strong> Never put sensitive personal data (passwords, bank info) into a public AI chat.</span>
                            </li>
                        </ul>
                    </div>
                    {/* Visual Placeholder: Guardrails/Shield */}
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <p className="font-mono text-sm text-foreground">Add module-media/m17-responsible-ai-shield.jpg</p>
                        <p className="text-muted-foreground text-lg">
                            Visual showing a digital shield protecting user data and filtering out harmful content (Bias/Fakes).
                        </p>
                    </div>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("8")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <Button onClick={() => handleNext("10")}>
                        Next: AI Tools Introduction <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 10: AI TOOLS INTRODUCTION
       Subtopics: ChatGPT, Bard, Copilot, Image Generators
    ================================================================================== */
    if (topicId === "10") {
        return (
            <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm">17.10 The Toolbox</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">AI Tools Introduction</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Artificial Intelligence isn't just a concept anymore—it's a set of tools you can use today. Here are the most popular ones.
                    </p>
                </section>

                {/* Prompt Engineering */}
                <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
                    <h2 className="text-2xl font-bold mb-6 text-center">The Art of Asking (Prompt Engineering)</h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                        The quality of the answer depends on the quality of your question. This skill is called <strong>Prompt Engineering</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <X className="text-red-500" /> <span className="font-bold text-red-500">Lazy Prompt</span>
                            </div>
                            <div className="bg-background p-4 rounded-lg border shadow-sm text-sm">
                                "Write an email."
                            </div>
                            <p className="text-xs text-muted-foreground">Result: Generic, boring, and likely not what you wanted.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Check className="text-green-500" /> <span className="font-bold text-green-500">Pro Prompt</span>
                            </div>
                            <div className="bg-background p-4 rounded-lg border shadow-sm text-sm">
                                "Write a professional email to my boss, asking for 2 days of sick leave because I have the flu. Keep it polite and short."
                            </div>
                            <p className="text-xs text-muted-foreground">Result: Perfect, ready to send.</p>
                        </div>
                    </div>
                </Card>

                {/* Tools Grid */}
                <section className="grid md:grid-cols-2 gap-8">
                    {/* ChatGPT */}
                    <Card className="p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 text-4xl">💬</div>
                        <h3 className="text-2xl font-bold mb-2">ChatGPT (OpenAI)</h3>
                        <p className="text-muted-foreground mb-4">The most famous AI chatbot. Great for writing emails, summarizing text, explaining concepts, and coding.</p>
                        <div className="text-xs font-mono bg-muted/50 p-2 rounded">Best for: Conversation & Text</div>
                    </Card>

                    {/* Copilot */}
                    <Card className="p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 text-4xl">💻</div>
                        <h3 className="text-2xl font-bold mb-2">Microsoft Copilot</h3>
                        <p className="text-muted-foreground mb-4">Integrated into Windows and Office. Using GPT-4 technology, it can search the live web and help write Word docs or Excel formulas.</p>
                        <div className="text-xs font-mono bg-muted/50 p-2 rounded">Best for: Microsoft Office & Search</div>
                    </Card>

                    {/* Gemini */}
                    <Card className="p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 text-4xl">✨</div>
                        <h3 className="text-2xl font-bold mb-2">Google Gemini (Bard)</h3>
                        <p className="text-muted-foreground mb-4">Google's AI. Deeply integrated with Google products (Docs, Gmail). Good at creative writing and reasoning.</p>
                        <div className="text-xs font-mono bg-muted/50 p-2 rounded">Best for: Google Ecosystem</div>
                    </Card>

                    {/* Image Generators */}
                    <Card className="p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 text-4xl">🎨</div>
                        <h3 className="text-2xl font-bold mb-2">Midjourney / DALL-E</h3>
                        <p className="text-muted-foreground mb-4">Tools that turn text into images. You describe a scene ("A cat playing chess in space"), and it creates the picture.</p>
                        <div className="text-xs font-mono bg-muted/50 p-2 rounded">Best for: Visual Art & Design</div>
                    </Card>
                </section>

                {/* Visual Placeholder: Tools Landscape */}
                <section className="container mx-auto px-4 max-w-5xl">
                    <div className="w-full aspect-video bg-muted rounded-xl border flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <p className="font-mono text-sm text-foreground">Add module-media/m17-ai-tools-grid.jpg</p>
                        <p className="text-muted-foreground text-lg">
                            Visual showing logos of these major tools connected to their primary use cases (Writing, Coding, Art).
                        </p>
                    </div>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t">
                    <Button variant="outline" onClick={() => handlePrev("9")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous Topic
                    </Button>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Module Complete</p>
                        <h3 className="font-bold text-primary">Congratulations!</h3>
                    </div>
                    <Button onClick={() => navigate("/dashboard")} size="lg" className="bg-green-600 hover:bg-green-700">
                        Finish Module 17 <Check className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    }

    // Fallback
    return <div className="p-10 text-center">Topic not found</div>;
};

export default Module17;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, ArrowDown, Database, Server, FileText, Table, Layers, Network, Lock, Smartphone, Activity, CheckCircle, Search, ListRestart, Shield, Check, Globe, Zap, Archive, AlertTriangle, X, FileSpreadsheet, Users, ShoppingCart, RefreshCw, Trash2, Edit3, PlusCircle, Box, Settings, Cpu, Heart, Landmark, Calculator, Code, LayoutGrid, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ImageWithFallback = ({ src, alt, description, iconColor = "text-primary", bgColor = "bg-primary/20" }: { src: string, alt: string, description: string, iconColor?: string, bgColor?: string }) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
        return (
            <div className={`p-8 text-center text-sm text-muted-foreground flex flex-col items-center justify-center h-full space-y-4`}>
                <div className={`${bgColor} p-6 rounded-full`}>
                    <Activity className={`w-12 h-12 ${iconColor}`} />
                </div>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
        />
    );
};


const Module19 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    const handleNext = (nextTopic: string) => {
        navigate(`/module/19/topic/${nextTopic}`);
    };

    const handlePrev = (prevTopic: string) => {
        navigate(`/module/19/topic/${prevTopic}`);
    };

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    /* ==================================================================================
       TOPIC 1: WHAT IS A DATABASE?
       Subtopics: Structured Storage, Where used, CRUD Cycle (New), DB vs Spreadsheet (New)
    ================================================================================== */
    if (topicId === "1") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: Introduction Hero - Text Left, Image Right */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Foundation</p>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">What is a Database?</h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                A database is an <strong>organized collection of data</strong>, structured so it can be easily accessed, managed, and updated. Think of it as a "Digital Library" where every book has a specific shelf, and you can find anything instantly.
                            </p>
                            <div className="flex gap-3 pt-2">
                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1">Organized</Badge>
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none px-3 py-1">Secure</Badge>
                                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none px-3 py-1">Scalable</Badge>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('database-intro.jpg')}
                                    alt="Database Server Room"
                                    description="Add database-intro.jpg. Brief: A high-tech server room with glowing blue lights representing data storage."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: The Messy Room Problem - Image Left, Text Right */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <ImageWithFallback
                                    src={getImageUrl('messy-files.jpg')}
                                    alt="Messy Files vs Database"
                                    description="Add messy-files.jpg. Brief: A chaotic pile of papers on one side vs a neat filing cabinet on the other."
                                    iconColor="text-orange-500"
                                    bgColor="bg-orange-500/20"
                                />
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Problem</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Why Do We Need Them?</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Imagine keeping all your school notes in one giant pile on the floor. That's data without a database. Databases solve the "Messy Room" problem.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="p-1 bg-green-500/10 rounded-full"><CheckCircle className="w-4 h-4 text-green-500" /></div>
                                        <span><strong>Instant Search:</strong> Find "John Doe" in milliseconds.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="p-1 bg-green-500/10 rounded-full"><CheckCircle className="w-4 h-4 text-green-500" /></div>
                                        <span><strong>Security:</strong> Only authorized people can enter.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="p-1 bg-green-500/10 rounded-full"><CheckCircle className="w-4 h-4 text-green-500" /></div>
                                        <span><strong>No Duplicates:</strong> Stores "John" once, not 50 times.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: The CRUD Cycle */}
                <section className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Core Operations</p>
                        <h2 className="text-3xl font-semibold text-foreground">The CRUD Cycle</h2>
                        <p className="text-foreground/80 mt-4">
                            Every interaction with a database—whether it's Instagram, a bank, or a game—comes down to these four actions.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { letter: "C", name: "Create", icon: <PlusCircle className="h-8 w-8 text-blue-500" />, desc: "Adding new data.", ex: "Sign up for specific app.", color: "border-blue-500" },
                            { letter: "R", name: "Read", icon: <Search className="h-8 w-8 text-green-500" />, desc: "Viewing existing data.", ex: "Logging in.", color: "border-green-500" },
                            { letter: "U", name: "Update", icon: <Edit3 className="h-8 w-8 text-yellow-500" />, desc: "Changing details.", ex: "Change password.", color: "border-yellow-500" },
                            { letter: "D", name: "Delete", icon: <Trash2 className="h-8 w-8 text-red-500" />, desc: "Removing data.", ex: "Delete account.", color: "border-red-500" }
                        ].map((item, i) => (
                            <Card key={i} className={`p-6 flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform duration-300 border-t-8 ${item.color} bg-background/50 backdrop-blur-sm`}>
                                <div className="text-4xl font-black opacity-10 mb-[-1.5rem]">{item.letter}</div>
                                <div className="p-3 bg-background rounded-full shadow-sm relative z-10">{item.icon}</div>
                                <h3 className="font-bold text-xl">{item.name}</h3>
                                <p className="text-sm font-medium">{item.desc}</p>
                                <p className="text-xs text-muted-foreground italic">Ex: {item.ex}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* SECTION 4: Real World Usage - Three Cards */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Where Are They Used?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-8 relative overflow-hidden group border-none bg-blue-50 dark:bg-blue-950/20">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Activity className="h-32 w-32" />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">Banking</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Banks manage millions of transactions. If you send $50, the database updates your balance instantly. It can never "lose" a transaction.</p>
                            </div>
                        </Card>

                        <Card className="p-8 relative overflow-hidden group border-none bg-purple-50 dark:bg-purple-950/20">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <ShoppingCart className="h-32 w-32" />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-600">
                                    <ShoppingCart className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">E-Commerce</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Amazon stores millions of products. The database tracks inventory: when you buy the last item, it acts instantly to mark it "Out of Stock".</p>
                            </div>
                        </Card>

                        <Card className="p-8 relative overflow-hidden group border-none bg-pink-50 dark:bg-pink-950/20">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Users className="h-32 w-32" />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-600">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">Social Media</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Instagram stores your profile, photos, and who follows whom. A "Graph Database" connects you to your friends efficiently.</p>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 5: Database vs Spreadsheet Comparison */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Scale</p>
                            <h2 className="text-3xl font-semibold text-foreground">Why Not Just Use Excel?</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Spreadsheets are great for personal lists, but they crash when millions of people try to use them at once. Databases are built for heavy lifting.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-muted rounded-2xl border border-border/50 text-center">
                                    <FileSpreadsheet className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                    <h4 className="font-bold text-sm">Spreadsheet</h4>
                                    <p className="text-[10px] text-muted-foreground">Single User, Small Data</p>
                                </div>
                                <div className="p-4 bg-muted rounded-2xl border border-border/50 text-center">
                                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                    <h4 className="font-bold text-sm">Database</h4>
                                    <p className="text-[10px] text-muted-foreground">Multi User, Massive Data</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                            <div className="relative w-full aspect-[16/9] bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('excel-vs-db.jpg')}
                                    alt="Excel vs SQL"
                                    description="Add excel-vs-db.jpg. Brief: A visual comparison of a simple spreadsheet grid vs a complex interconnected network node."
                                    iconColor="text-gray-400"
                                    bgColor="bg-gray-500/20"
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Navigation Footer */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/10")}>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Module
                        </Button>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 1</p>
                            <p className="text-xl font-bold italic">Next: Database Types</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("2")}>
                            Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 2: DATABASE TYPES
       Subtopics: SQL vs NoSQL, CAP Theorem (New), Graph Databases (New)
    ================================================================================== */
    if (topicId === "2") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: Intro Hero */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Landscape</p>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">Types of Databases</h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                Just as you wouldn't use a hammer to cut paper, different applications need different types of databases. The two main players are <strong>SQL</strong> (Structured) and <strong>NoSQL</strong> (Flexible).
                            </p>
                            <div className="flex gap-3 pt-2">
                                <Badge className="bg-blue-100 text-blue-700 border-none px-3 py-1">Relational</Badge>
                                <Badge className="bg-orange-100 text-orange-700 border-none px-3 py-1">Document</Badge>
                                <Badge className="bg-purple-100 text-purple-700 border-none px-3 py-1">Graph</Badge>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('db-types-hero.jpg')}
                                    alt="Various Database Types"
                                    description="Add db-types-hero.jpg. Brief: A creative composition showing different data structures: neat tables (SQL), floating documents (NoSQL), and connected nodes (Graph)."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: SQL vs NoSQL Breakdown */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">SQL vs. NoSQL</h2>
                        <p className="text-lg text-muted-foreground mt-2">The classic debate in the tech world.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* SQL */}
                        <div className="space-y-6">
                            <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                                <div className="relative w-full aspect-video bg-blue-50/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">SQL</div>
                                            <p className="text-sm font-bold text-blue-700">The Strict Librarian</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="px-4">
                                <h3 className="text-2xl font-bold text-blue-600 mb-4">Relational (SQL)</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-blue-500 shrink-0" /> <strong>Structure:</strong> Strict tables with rows and columns.</li>
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-blue-500 shrink-0" /> <strong>Best For:</strong> Financial apps, inventory, consistent data.</li>
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-blue-500 shrink-0" /> <strong>Language:</strong> SQL (Structured Query Language).</li>
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-blue-500 shrink-0" /> <strong>Examples:</strong> MySQL, PostgreSQL, Oracle.</li>
                                </ul>
                            </div>
                        </div>

                        {/* NoSQL */}
                        <div className="space-y-6">
                            <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                                <div className="relative w-full aspect-video bg-green-50/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">NoSQL</div>
                                            <p className="text-sm font-bold text-green-700">The Creative Artist</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="px-4">
                                <h3 className="text-2xl font-bold text-green-600 mb-4">Non-Relational (NoSQL)</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-green-500 shrink-0" /> <strong>Structure:</strong> Flexible documents, key-values, or graphs.</li>
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-green-500 shrink-0" /> <strong>Best For:</strong> Social media feeds, real-time analytics, rapid changes.</li>
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-green-500 shrink-0" /> <strong>Language:</strong> JavaScript, JSON-like queries.</li>
                                    <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-green-500 shrink-0" /> <strong>Examples:</strong> MongoDB, Firebase, Redis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: CAP Theorem (New) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Trade-off</p>
                            <h2 className="text-3xl font-semibold text-foreground">The CAP Theorem</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                In computer science, you can't have it all. The CAP theorem says a distributed database can only provide <strong>two</strong> of the following three guarantees at the same time:
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-background p-2 rounded-lg font-bold border">C</div>
                                    <div>
                                        <h4 className="font-bold">Consistency</h4>
                                        <p className="text-xs text-muted-foreground">Everyone sees the same data at the same time.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-background p-2 rounded-lg font-bold border">A</div>
                                    <div>
                                        <h4 className="font-bold">Availability</h4>
                                        <p className="text-xs text-muted-foreground">The system is always on, even if some parts fail.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-background p-2 rounded-lg font-bold border">P</div>
                                    <div>
                                        <h4 className="font-bold">Partition Tolerance</h4>
                                        <p className="text-xs text-muted-foreground">The system works even if the network breaks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('cap-theorem.jpg')}
                                    alt="CAP Theorem Triangle"
                                    description="Add cap-theorem.jpg. Brief: A diagram of a triangle with C, A, and P at corners. Text says 'Pick Any Two'."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 4: Graph Databases (New) */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="max-w-4xl mx-auto space-y-8 bg-slate-900 text-white rounded-[50px] p-12 overflow-hidden relative">
                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">Graph Databases</h2>
                                <p className="text-slate-300">
                                    How does Facebook know "Friends of Friends"? Relational databases struggle with connections. Graph databases store data as <strong>Nodes</strong> (People) and <strong>Edges</strong> (Relationships).
                                </p>
                                <Button variant="secondary" className="rounded-full">Used by LinkedIn & Google Maps</Button>
                            </div>
                            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 text-center">
                                <div className="flex justify-center items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">You</div>
                                    <div className="h-0.5 w-10 bg-white/50"></div>
                                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">Alice</div>
                                </div>
                                <p className="text-xs text-slate-300">"You KNOW Alice"</p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </section>

                {/* Navigation Footer */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("1")}>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                        </Button>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 2</p>
                            <p className="text-xl font-bold italic">Next: Tables, Rows, Columns</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("3")}>
                            Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        );
    }




    /* ==================================================================================
       TOPIC 3: TABLES, ROWS, COLUMNS
       Subtopics: Anatomy of a table, Primary Keys, Foreign Keys (New), Normalization (New)
    ================================================================================== */
    if (topicId === "3") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: Intro Hero */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Structure</p>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">Anatomy of a Table</h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                In a relational database (SQL), everything lives in tables. It looks like a spreadsheet, but it's much stricter and smarter. Each part has a specific name and purpose.
                            </p>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('table-anatomy.jpg')}
                                    alt="Anatomy of a Database Table"
                                    description="Add table-anatomy.jpg. Brief: A 3D exploded view of a single table row, highlighting Cells, Headers, and Keys."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: The Building Blocks */}
                <section className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-8 text-center border-t-8 border-blue-500 bg-background/50 backdrop-blur-sm rounded-3xl">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4"><Database className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold mb-2">The Table</h3>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-4">The Container</p>
                            <p className="text-sm text-foreground/80">Holds all data about one specific subject (e.g., "Users" or "Orders").</p>
                        </Card>
                        <Card className="p-8 text-center border-t-8 border-emerald-500 bg-background/50 backdrop-blur-sm rounded-3xl">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4"><ArrowRight className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold mb-2">The Row</h3>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-4">The Record</p>
                            <p className="text-sm text-foreground/80">A single item in the table. (e.g., "John Doe's complete profile").</p>
                        </Card>
                        <Card className="p-8 text-center border-t-8 border-purple-500 bg-background/50 backdrop-blur-sm rounded-3xl">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4"><ArrowDown className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold mb-2">The Column</h3>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-4">The Field</p>
                            <p className="text-sm text-foreground/80">A specific attribute. (e.g., "Email Address" or "Phone Number").</p>
                        </Card>
                    </div>
                </section>

                {/* SECTION 3: The Primary Key (New) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <ImageWithFallback
                                    src={getImageUrl('primary-key.jpg')}
                                    alt="Primary Key Concept"
                                    description="Add primary-key.jpg. Brief: A visual of a golden key next to a database row ID '101'."
                                    iconColor="text-yellow-500"
                                    bgColor="bg-yellow-500/20"
                                />
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Uniqueness</p>
                            <h2 className="text-3xl font-semibold text-foreground">The Primary Key (PK)</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                In a database, you cannot just say "John Smith" because there might be five John Smiths. Every row must have a unique ID, called the <strong>Primary Key</strong>.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-yellow-600 font-bold">ID (PK)</span>
                                        <span className="text-muted-foreground">Name</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-yellow-600 font-bold">101</span>
                                        <span>John Smith</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-yellow-600 font-bold">102</span>
                                        <span>John Smith</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground pt-2 italic">Even if names are the same, IDs are different.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Foreign Keys (New) */}
                <section className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Relationships</p>
                        <h2 className="text-3xl font-semibold text-foreground">The Foreign Key (FK)</h2>
                        <p className="text-foreground/80 mt-4">
                            How do tables talk to each other? They use a "Foreign Key". It's just a reference to an ID in another table. It acts like a bridge.
                        </p>
                    </div>
                    <Card className="max-w-4xl mx-auto p-12 bg-slate-50 dark:bg-slate-900 border border-border/50 rounded-[50px] shadow-lg">
                        <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                            <div className="bg-background p-4 rounded-2xl shadow-sm border">
                                <h4 className="font-bold border-b pb-2 mb-2">Users Table</h4>
                                <div className="text-left text-sm space-y-1">
                                    <p><span className="text-yellow-500 font-bold">ID: 1</span> (John)</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xs uppercase font-bold text-muted-foreground mb-2">Links To</span>
                                <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                            </div>
                            <div className="bg-background p-4 rounded-2xl shadow-sm border">
                                <h4 className="font-bold border-b pb-2 mb-2">Orders Table</h4>
                                <div className="text-left text-sm space-y-1">
                                    <p>Order: #555</p>
                                    <p><span className="text-blue-500 font-bold">User_ID (FK): 1</span></p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-8">The Order knows it belongs to John because it holds John's ID (1).</p>
                    </Card>
                </section>

                {/* SECTION 5: Normalization (New) */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Optimization</p>
                            <h2 className="text-3xl font-semibold text-foreground">Normalization</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Normalization is the art of organizing data to reduce redundancy. Instead of repeating "New York" 1,000 times for 1,000 users, you store it once in a "Cities" table and link to it.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-2xl text-center flex-1">
                                    <h4 className="font-bold text-red-600 text-sm">Messy Data</h4>
                                    <p className="text-[10px] text-muted-foreground">Duplicates & Errors</p>
                                </div>
                                <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-2xl text-center flex-1">
                                    <h4 className="font-bold text-green-600 text-sm">Normalized</h4>
                                    <p className="text-[10px] text-muted-foreground">Clean & Efficient</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                            <div className="relative w-full aspect-video bg-muted overflow-hidden">
                                <ImageWithFallback
                                    src={getImageUrl('normalization.jpg')}
                                    alt="Normalization Diagram"
                                    description="Add normalization.jpg. Brief: An animation showing cluttered blocks being sorted into neat, linked stacks."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Navigation Footer */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("2")}>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                        </Button>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 3</p>
                            <p className="text-xl font-bold italic">Next: SQL Basics</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("4")}>
                            Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        );
    }



    /* ==================================================================================
       TOPIC 4: SQL BASICS
       Subtopics: The Big Four, WHERE Clause, SQL Injection (New), JOINS (New)
    ================================================================================== */
    if (topicId === "4") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: Intro Hero */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Language</p>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">Speaking SQL</h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                SQL (Structured Query Language) is the universal language of data. It reads like English, but works like magic. If you can ask for it, SQL can find it.
                            </p>
                            <div className="bg-muted/50 p-4 rounded-xl border border-border/50 font-mono text-sm text-blue-600 dark:text-blue-400">
                                SELECT * FROM world WHERE type = 'awesome';
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('sql-basics-hero.jpg')}
                                    alt="Typing SQL Commands"
                                    description="Add sql-basics-hero.jpg. Brief: A creative visual of a person typing code on a holographic interface, with a globe or database forming in the background."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: The Big Four */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">The Big Four Commands</h2>
                        <p className="text-lg text-muted-foreground mt-2">Manage everything with just these words.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { cmd: "SELECT", desc: "Retrieves data.", code: "SELECT name FROM users;", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
                            { cmd: "INSERT", desc: "Adds new data.", code: "INSERT INTO users...", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
                            { cmd: "UPDATE", desc: "Modifies data.", code: "UPDATE users SET...", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
                            { cmd: "DELETE", desc: "Removes data.", code: "DELETE FROM users...", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" }
                        ].map((item, i) => (
                            <Card key={i} className="p-6 border-none shadow-md hover:shadow-xl transition-all duration-300">
                                <Badge className={`mb - 4 ${item.color} border - none text - sm px - 3 py - 1`}>{item.cmd}</Badge>
                                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                                <div className="bg-muted p-3 rounded-lg font-mono text-xs overflow-x-auto whitespace-nowrap">
                                    {item.code}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* SECTION 3: The WHERE Clause (New) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="relative w-full aspect-video bg-muted overflow-hidden">
                                <ImageWithFallback
                                    src={getImageUrl('where-clause.jpg')}
                                    alt="Filtering Data"
                                    description="Add where-clause.jpg. Brief: A visual metaphor of a sniper scope or a funnel filtering out red items from a pile of blue items."
                                    iconColor="text-purple-500"
                                    bgColor="bg-purple-500/20"
                                />
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Precision</p>
                            <h2 className="text-3xl font-semibold text-foreground">The WHERE Clause</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Without a filter, you get everything. Imagine asking for "Music" and getting every song ever recorded. The <code>WHERE</code> clause acts like a sniper scope.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/10 flex items-center justify-between">
                                    <span className="font-mono text-sm text-red-600">SELECT * FROM products;</span>
                                    <Badge variant="destructive">Too Much Data</Badge>
                                </div>
                                <div className="p-4 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/10 flex items-center justify-between">
                                    <span className="font-mono text-sm text-green-600">... WHERE price &lt; 50;</span>
                                    <Badge className="bg-green-600 hover:bg-green-700">Perfect</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: SQL Injection (New) */}
                <section className="container mx-auto px-4">
                    <Card className="bg-destructive/5 border-destructive/20 p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-destructive" />
                                    <h2 className="text-3xl font-bold text-destructive">Danger Zone: SQL Injection</h2>
                                </div>
                                <p className="text-foreground/80 text-lg">
                                    Never trust user input. If you let users type raw SQL into a login box, they can destroy your database. This is the #1 way websites get hacked.
                                </p>
                                <div className="bg-black/80 p-4 rounded-xl font-mono text-xs text-green-400 border border-green-900/50">
                                    <span className="text-white">user_input = </span> "Robert'); DROP TABLE Students; --"<br />
                                    <span className="text-red-400"># The database deletes everything!</span>
                                </div>
                            </div>
                            <div className="relative w-full aspect-video bg-muted rounded-3xl overflow-hidden border border-border/50 shadow-inner">
                                <ImageWithFallback
                                    src={getImageUrl('sql-injection.jpg')}
                                    alt="SQL Injection Attack"
                                    description="Add sql-injection.jpg. Brief: A creative visualization of malicious code like a red virus needle injecting into a safe blue database block."
                                    iconColor="text-destructive"
                                    bgColor="bg-destructive/20"
                                />
                            </div>
                        </div>
                    </Card>
                </section>

                {/* SECTION 5: JOINS (New) */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Power</p>
                        <h2 className="text-3xl font-semibold text-foreground">JOINS: The Superpower</h2>
                        <p className="text-foreground/80 mt-4">
                            Relational databases shine because they can combine data. A <code>JOIN</code> connects two tables using a common ID, creating a single powerful view.
                        </p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg max-w-4xl mx-auto">
                        <div className="relative w-full aspect-[21/9] bg-muted">
                            <ImageWithFallback
                                src={getImageUrl('sql-joins.jpg')}
                                alt="Venn Diagram of SQL Joins"
                                description="Add sql-joins.jpg. Brief: A clear Venn diagram showing two circles overlapping. CENTER = Inner Join, LEFT = Left Join."
                                iconColor="text-indigo-500"
                                bgColor="bg-indigo-500/20"
                            />
                        </div>
                    </Card>
                </section>

                {/* Navigation Footer */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("3")}>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                        </Button>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 4</p>
                            <p className="text-xl font-bold italic">Next: NoSQL Basics</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("5")}>
                            Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 5: NOSQL BASICS
       Subtopics: The Document, Scaling, Real-Time (New)
    ================================================================================== */
    if (topicId === "5") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: Intro Hero */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">New Era</p>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">Breaking the Grid</h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                NoSQL doesn't use strict tables. It uses flexible "Documents" that look just like the code you write. It's built for speed, scale, and chaos.
                            </p>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('nosql-hero.jpg')}
                                    alt="NoSQL Flexible Data"
                                    description="Add nosql-hero.jpg. Brief: A creative visual of a rigid metal grid exploding into floating, colorful organic bubbles or shapes."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: The JSON Document (New) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="bg-slate-950 p-8 rounded-[40px] font-mono text-sm text-green-400 shadow-2xl overflow-hidden relative border border-slate-800">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre className="relative z-10 leading-relaxed">
                                {`{
    "_id": "user_123",
        "name": "Mario",
            "powerups": ["Mushroom", "Star"],
                "stats": {
        "lives": 3,
            "coins": 100
    }
} `}
                            </pre>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Flexibility</p>
                            <h2 className="text-3xl font-semibold text-foreground">The Document</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Instead of rows and columns, NoSQL stores data in "Documents" (usually JSON). You can nest data inside other data, like lists or sub-folders. Try doing <i>that</i> in Excel.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-green-500 shrink-0" /> <strong>Nested Data:</strong> Store lists inside a user.</li>
                                <li className="flex gap-3 text-sm text-foreground/80"><Check className="w-5 h-5 text-green-500 shrink-0" /> <strong>No Schema:</strong> Add new fields whenever you want.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Scaling (New) */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Horizontal vs. Vertical</h2>
                        <p className="text-lg text-muted-foreground mt-2">How do you handle 100 million users?</p>
                    </div>

                    <Card className="max-w-5xl mx-auto overflow-hidden rounded-[40px] border border-border/70 shadow-lg bg-card">
                        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 relative z-10">
                            {/* Vertical Scaling (SQL) */}
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                    <Server className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold">Vertical Scaling (SQL)</h3>
                                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">"Scale Up"</p>
                                <p className="text-foreground/80 leading-relaxed">
                                    To handle more data, you buy a <strong>bigger, faster computer</strong>.
                                    <br />
                                    <span className="text-sm text-muted-foreground">(Limit: Supercomputers are expensive!)</span>
                                </p>
                            </div>

                            {/* Horizontal Scaling (NoSQL) */}
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                                    <div className="flex -space-x-2">
                                        <Server className="w-6 h-6" />
                                        <Server className="w-6 h-6" />
                                        <Server className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">Horizontal Scaling (NoSQL)</h3>
                                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">"Scale Out"</p>
                                <p className="text-foreground/80 leading-relaxed">
                                    To handle more data, you just <strong>add more cheap computers</strong>.
                                    <br />
                                    <span className="text-sm text-muted-foreground">(Limit: Infinite!)</span>
                                </p>
                            </div>
                        </div>

                        {/* Visual Metaphor Image at Bottom */}
                        <div className="relative w-full aspect-[21/9] bg-muted mt-8">
                            <ImageWithFallback
                                src={getImageUrl('nosql-vs-sql-scaling.jpg')}
                                alt="Vertical vs Horizontal Scaling"
                                description="Add nosql-vs-sql-scaling.jpg. Brief: A visual comparison showing one giant server getting bigger (Vertical) vs many small servers joining hands (Horizontal)."
                            />
                        </div>
                    </Card>
                </section>

                {/* SECTION 4: Real-Time Speed (New) - Yellow Theme */}
                <section className="container mx-auto px-4 mb-20">
                    <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900/50 p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                                    <h2 className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">Built for Speed</h2>
                                </div>
                                <p className="text-yellow-900/80 dark:text-yellow-100/80 text-lg">
                                    Why do Chat Apps and Games use NoSQL? Because it pushes data instantly. When you send a message, NoSQL databases like Firebase update everyone's screen in milliseconds.
                                </p>
                            </div>
                            <div className="relative w-full aspect-video bg-background/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-yellow-500/20 shadow-inner flex items-center justify-center">
                                {/* Simple Chat Animation UI */}
                                <div className="space-y-4 w-3/4">
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                        <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs">Hello!</div>
                                    </div>
                                    <div className="flex gap-2 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                                        <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs">Connected via NoSQL! 🚀</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Navigation Footer */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("4")}>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                        </Button>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 5</p>
                            <p className="text-xl font-bold italic">Next: Database Tools</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("6")}>
                            Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 6: DATABASE TOOLS
       Sections: Hero (The Toolbox), Classification (Local vs Server), The Popular Kids, 
                 Cloud Databases, GUI Clients, Interactive Choice
    ================================================================================== */
    if (topicId === "6") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: HERO (THE TOOLBOX) */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Ecosystem</p>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">The Right Tool for the Job</h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                You don't build a house with bare hands. You need hammers and drills. Same for databases—we use specialized software called <strong>DBMS</strong> (Database Management Systems).
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">MySQL</Badge>
                                <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">PostgreSQL</Badge>
                                <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">MongoDB</Badge>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('db-tools-hero.jpg')}
                                    alt="Database Tools Ecosystem"
                                    description="Add db-tools-hero.jpg. Brief: A futuristic toolbox opening to show glowing logos like MySQL, PostgreSQL, MongoDB floating inside."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: CLASSIFICATION (LOCAL VS SERVER) */}
                <section className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <Card className="p-8 text-center border-t-8 border-gray-400 bg-background/50 backdrop-blur-sm rounded-[40px] shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Lightweight (Embedded)</h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#F96E46] mb-4">Example: SQLite</p>
                            <p className="text-foreground/80 leading-relaxed">Tiny. Lives <strong>inside</strong> your app. Used in iPhones, Androids, and browsers. No internet needed.</p>
                        </Card>

                        <Card className="p-8 text-center border-t-8 border-[#0FA3B1] bg-background/50 backdrop-blur-sm rounded-[40px] shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-cyan-100 text-[#0FA3B1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Server className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Heavyweight (Server)</h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#F96E46] mb-4">Example: MySQL, Oracle</p>
                            <p className="text-foreground/80 leading-relaxed">Huge. Lives on a <strong>Server</strong>. Handles millions of users at once. Used by Facebook, Banks, Amazon.</p>
                        </Card>
                    </div>
                </section>

                {/* SECTION 3: THE POPULAR KIDS (TOOLS OVERVIEW) */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">The "Big Three"</h2>
                        <p className="text-lg text-muted-foreground mt-2">The most common databases you will encounter.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-8 space-y-4 border-none bg-orange-50 dark:bg-orange-950/20 rounded-[40px] group hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-black rounded-xl text-[#F96E46] shadow-sm group-hover:scale-110 transition-transform"><Database className="w-6 h-6" /></div>
                                <h3 className="font-bold text-lg">MySQL</h3>
                            </div>
                            <p className="text-sm text-foreground/80 leading-relaxed">The <strong>Open Source King</strong>. Free, reliable, and powers 80% of the web (including WordPress).</p>
                        </Card>
                        <Card className="p-8 space-y-4 border-none bg-blue-50 dark:bg-blue-950/20 rounded-[40px] group hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-black rounded-xl text-[#0FA3B1] shadow-sm group-hover:scale-110 transition-transform"><Activity className="w-6 h-6" /></div>
                                <h3 className="font-bold text-lg">PostgreSQL</h3>
                            </div>
                            <p className="text-sm text-foreground/80 leading-relaxed">The <strong>Genius</strong>. Complex and powerful. Used when data accuracy is critical (FinTech, Science).</p>
                        </Card>
                        <Card className="p-8 space-y-4 border-none bg-green-50 dark:bg-green-950/20 rounded-[40px] group hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-black rounded-xl text-green-600 shadow-sm group-hover:scale-110 transition-transform"><CheckCircle className="w-6 h-6" /></div>
                                <h3 className="font-bold text-lg">MongoDB</h3>
                            </div>
                            <p className="text-sm text-foreground/80 leading-relaxed">The <strong>Rebel</strong>. No tables, just documents. Built for speed and flexibility (Startups, Real-time apps).</p>
                        </Card>
                    </div>
                </section>

                {/* SECTION 4: CLOUD DATABASES */}
                <section className="container mx-auto px-4">
                    <Card className="p-8 md:p-12 rounded-[50px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Cloud Databases</h2>
                                <p className="text-indigo-200 text-lg mb-6 leading-relaxed">
                                    Why install software? Just rent it. Cloud databases run on Amazon or Google's computers, not yours.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-base items-center"><div className="bg-[#C3F73A] rounded-full p-1"><Check className="text-black w-3 h-3" /></div> No installation required.</li>
                                    <li className="flex gap-3 text-base items-center"><div className="bg-[#C3F73A] rounded-full p-1"><Check className="text-black w-3 h-3" /></div> Automatic backups everyday.</li>
                                    <li className="flex gap-3 text-base items-center"><div className="bg-[#C3F73A] rounded-full p-1"><Check className="text-black w-3 h-3" /></div> Accessible from anywhere.</li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* Simple Cloud Animation */}
                                <div className="relative">
                                    <Globe className="w-40 h-40 text-[#0FA3B1] opacity-80" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                                        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></div>
                                        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
                                        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* SECTION 5: GUI CLIENTS */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">The Dashboard (GUI)</h2>
                        <p className="text-muted-foreground mt-2">
                            We hate typing black-screen commands. We use visual tools to click, view, and edit data like an Excel sheet.
                        </p>
                    </div>
                    <Card className="max-w-4xl mx-auto overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="aspect-video bg-muted relative">
                            <ImageWithFallback
                                src={getImageUrl('db-gui-example.jpg')}
                                alt="Database GUI Example"
                                description="Add db-gui-example.jpg. Brief: A screenshot of a modern Database Client (like DBeaver or phpMyAdmin) showing a nice clean table interface."
                            />
                        </div>
                    </Card>
                </section>

                {/* Navigation Footer */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("5")}>
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                        </Button>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 6</p>
                            <p className="text-xl font-bold italic">Next: Queries & Filtering</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("7")}>
                            Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 7: QUERIES & FILTERING
       Sections: Hero (The Searchlight), WHERE Clause, ORDER BY, LIMIT, Combining Powers
    ================================================================================== */
    if (topicId === "7") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: HERO (THE SEARCHLIGHT) */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Refining Data</p>
                            <h2 className="text-4xl font-semibold text-foreground leading-tight">Needle in a Haystack</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Real databases have millions of rows. You don't read them all. You ask for <strong>exactly</strong> what you need using specific keywords.
                            </p>
                            <div className="flex gap-3 pt-2">
                                <div className="p-3 bg-primary/10 rounded-2xl">
                                    <Search className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">The Sniper Scope</h4>
                                    <p className="text-sm text-muted-foreground">Zoom in on the data that matters most.</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('db-filtering-hero.jpg')}
                                    alt="Filtering Data"
                                    description="Add db-filtering-hero.jpg. Brief: A searchlight beaming onto one specific glowing file folder among thousands of dark ones."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: THE WHERE CLAUSE (FILTER) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="p-10 bg-[#0f172a] text-slate-100 h-full flex flex-col justify-center">
                                <div className="font-mono text-center text-lg text-[#4ade80] mb-8 bg-black/40 p-6 rounded-3xl border border-white/5">
                                    SELECT * FROM Users <br />
                                    <span className="text-[#c084fc] font-bold">WHERE</span> country = 'India';
                                </div>
                                <div className="grid grid-cols-3 gap-3 text-center text-[10px] font-medium opacity-80">
                                    <div className="p-3 bg-slate-800/50 rounded-xl border border-white/5 opacity-40">User (USA)</div>
                                    <div className="p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.2)]">User (India)</div>
                                    <div className="p-3 bg-slate-800/50 rounded-xl border border-white/5 opacity-40">User (UK)</div>
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Filtering</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">The WHERE Clause</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Think of it as a sieve or a coffee filter. You pour everything in, but only the grains you want come out the bottom.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>Precision:</strong> Get 1 row or 1,000 based on conditions.</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>Speed:</strong> Databases are optimized for filtered searches.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW SECTION: WILDCARDS LIKE (PARTIAL MATCH) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Fuzzy Search</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">The "Kinda" Match</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                What if you don't know the exact spelling? Or you want all emails ending in <code>@gmail.com</code>? The <code>LIKE</code> operator acts like a pattern matcher.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Search className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">The Wildcard Symbol (%)</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            The <code>%</code> symbol means "anything can to go here".
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card className="p-8 bg-slate-900 border-none rounded-[40px] shadow-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            <div className="relative z-10 font-mono text-sm space-y-6">
                                <div>
                                    <p className="text-gray-500 mb-2">// Find all 'J' names</p>
                                    <p className="text-emerald-400">WHERE name LIKE 'J%';</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between">
                                        <span className="text-emerald-100">John</span>
                                        <Check className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between">
                                        <span className="text-emerald-100">Jane</span>
                                        <Check className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl opacity-50 flex items-center justify-between">
                                        <span className="text-gray-400">Bob</span>
                                        <X className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between">
                                        <span className="text-emerald-100">Jack</span>
                                        <Check className="w-4 h-4 text-emerald-500" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* NEW SECTION: AGGREGATES (COUNT/SUM) */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative border border-primary/10">
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Analytics</p>
                                <h2 className="text-3xl font-bold">Instant Math</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Databases don't just store text; they are powerful calculators. You can count millions of users or sum up total sales in a fraction of a second.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm text-center">
                                        <div className="text-xs font-mono text-muted-foreground uppercase mb-2">Total Users</div>
                                        <div className="text-2xl font-black text-primary">1,042</div>
                                        <code className="text-[10px] bg-muted px-2 py-1 rounded mt-2 block mx-auto w-fit">COUNT(*)</code>
                                    </div>
                                    <div className="p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm text-center">
                                        <div className="text-xs font-mono text-muted-foreground uppercase mb-2">Total Sales</div>
                                        <div className="text-2xl font-black text-emerald-500">$50k</div>
                                        <code className="text-[10px] bg-muted px-2 py-1 rounded mt-2 block mx-auto w-fit">SUM(price)</code>
                                    </div>
                                </div>
                            </div>
                            <div className="w-40 h-40 bg-background rounded-full flex items-center justify-center shadow-xl border-8 border-primary/10 relative">
                                <Calculator className="w-16 h-16 text-primary" />
                                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">
                                    Σ
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW SECTION: GROUP BY (THE BUCKETS) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="p-10 bg-muted border-none relative h-full flex flex-col justify-center min-h-[300px]">
                                <div className="flex gap-6 justify-center items-end h-40">
                                    <div className="w-16 bg-background rounded-t-xl relative group border border-border/50 shadow-sm">
                                        <div className="absolute bottom-0 w-full h-[60%] bg-blue-500 rounded-t-xl transition-all duration-1000 group-hover:h-[70%]"></div>
                                        <p className="absolute -top-8 left-0 right-0 text-center text-xs font-bold text-muted-foreground">USA<br />(60)</p>
                                    </div>
                                    <div className="w-16 bg-background rounded-t-xl relative group border border-border/50 shadow-sm">
                                        <div className="absolute bottom-0 w-full h-[30%] bg-emerald-500 rounded-t-xl transition-all duration-1000 group-hover:h-[40%]"></div>
                                        <p className="absolute -top-8 left-0 right-0 text-center text-xs font-bold text-muted-foreground">UK<br />(30)</p>
                                    </div>
                                    <div className="w-16 bg-background rounded-t-xl relative group border border-border/50 shadow-sm">
                                        <div className="absolute bottom-0 w-full h-[15%] bg-indigo-500 rounded-t-xl transition-all duration-1000 group-hover:h-[25%]"></div>
                                        <p className="absolute -top-8 left-0 right-0 text-center text-xs font-bold text-muted-foreground">JP<br />(15)</p>
                                    </div>
                                </div>
                                <div className="mt-8 text-center font-mono text-xs bg-slate-900 text-slate-300 p-4 rounded-xl shadow-inner">
                                    GROUP BY country;
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Categorization</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">The Buckets</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Instead of looking at individual rows, <code>GROUP BY</code> puts them into buckets. This helps you answer questions like "How many users are in <em>each</em> country?"
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg"><Layers className="w-6 h-6 text-primary" /></div>
                                    <div>
                                        <h4 className="font-bold text-sm">Pattern Recognition</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Useful for reports, dashboards, and spotting trends.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ORDER BY (SORTING) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Organization</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Sorting the Chaos</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                The database doesn't care about order. If you want a list from High to Low (like prices) or A to Z (like names), you must say so explicitly.
                            </p>
                            <div className="inline-block bg-muted px-6 py-4 rounded-2xl font-mono text-sm border-l-4 border-l-blue-500 shadow-sm text-blue-600 font-bold">
                                ORDER BY price DESC;
                            </div>
                        </div>
                        <Card className="p-8 bg-background border border-border/70 shadow-xl rounded-[40px]">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-2xl shadow-sm border-l-4 border-l-green-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">1</div>
                                        <span>iPhone 15</span>
                                    </div>
                                    <span className="font-bold">$999</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-2xl shadow-sm border-l-4 border-l-yellow-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-xs font-bold text-yellow-700">2</div>
                                        <span>AirPods</span>
                                    </div>
                                    <span className="font-bold">$199</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-2xl shadow-sm border-l-4 border-l-red-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-700">3</div>
                                        <span>Charging Cable</span>
                                    </div>
                                    <span className="font-bold">$19</span>
                                </div>
                            </div>
                            <p className="text-center text-[10px] text-muted-foreground mt-6 font-bold tracking-widest uppercase">Sorted by Price (Highest first)</p>
                        </Card>
                    </div>
                </section>

                {/* SECTION 4: LIMIT */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl font-bold">Take Only What You Need</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Imagine a buffet. You don't put <strong>all</strong> the food on your plate. You take 5 items. Similarly, don't load 1,000,000 products if the screen only fits 10.
                                </p>
                                <div className="inline-block bg-background px-6 py-3 rounded-2xl font-mono text-xl border shadow-md">
                                    LIMIT <span className="text-primary font-bold">10</span>
                                </div>
                            </div>
                            <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg text-primary">
                                <Shield className="w-16 h-16" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </section>

                {/* SECTION 5: POWER COMBO */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Real-world Example</p>
                        <h2 className="text-3xl font-semibold text-foreground">Combining Your Powers</h2>
                        <p className="text-foreground/80 mt-4 leading-relaxed">
                            Most queries in apps like Amazon or Netflix use all three keywords to find the specific content you're looking for.
                        </p>
                    </div>
                    <Card className="p-10 md:p-16 bg-slate-900 text-white rounded-[50px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] opacity-20"></div>
                        <div className="relative z-10 font-mono text-center text-xl md:text-3xl leading-relaxed">
                            <span className="text-emerald-400">SELECT</span> * <span className="text-emerald-400">FROM</span> Products <br />
                            <span className="opacity-70 text-lg block mt-2 text-primary-foreground/70">WHERE category = 'Shoes'</span>
                            <span className="opacity-70 text-lg block mt-1 text-primary-foreground/70">ORDER BY price ASC</span>
                            <span className="text-blue-400 font-bold block mt-4 border-b-2 border-blue-500 inline-block pb-1">LIMIT 10;</span>
                        </div>
                        <div className="mt-12 pt-10 border-t border-white/10 text-center text-primary-foreground/50 italic text-lg">
                            "Show me the 10 cheapest shoes in the store."
                        </div>
                    </Card>
                </section>

                {/* NAVIGATION FOOTER */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 7</p>
                            <p className="text-xl font-bold italic">Next: Data Storage Concepts</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button variant="outline" size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("6")}>
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous
                            </Button>
                            <Button size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("8")}>
                                Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    /* ==================================================================================
       TOPIC 8: DATA STORAGE CONCEPTS
       Sections: Hero (The Archive), Indexing (The Shortcut), Backups (The Safety Net)
    ================================================================================== */
    if (topicId === "8") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: HERO */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Speed & Safety</p>
                            <h2 className="text-4xl font-semibold text-foreground leading-tight">The Organized Archive</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Saving data is easy. Finding it fast and keeping it safe from hackers or crashes is the hard part.
                            </p>
                            <div className="flex gap-3 pt-2">
                                <div className="p-3 bg-primary/10 rounded-2xl">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Efficiency & Resilience</h4>
                                    <p className="text-sm text-muted-foreground">Mastering the art of data preservation.</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('storage-concepts-hero.jpg')}
                                    alt="Data Vault"
                                    description="Add storage-concepts-hero.jpg. Brief: A high-tech digital vault or infinite library with glowing index cards and a shield icon."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: INDEXING (THE SHORTCUT) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="p-10 bg-[#f8fafc] dark:bg-slate-900 border-none relative overflow-hidden h-full flex flex-col justify-center">
                                <div className="space-y-8 relative z-10 w-full">
                                    <div className="bg-white dark:bg-card p-6 rounded-3xl shadow-sm border border-border/50 opacity-50 scale-95">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-muted-foreground uppercase text-xs">Without Index</h4>
                                            <span className="text-red-500 font-bold text-xs">SLOW</span>
                                        </div>
                                        <p className="text-sm">Scanning 1M rows...</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
                                            <div className="bg-red-400 h-2 rounded-full w-1/4 animate-pulse"></div>
                                        </div>
                                        <p className="text-right text-[10px] mt-1 text-red-500">5.4 seconds</p>
                                    </div>

                                    <div className="bg-white dark:bg-card p-6 rounded-3xl shadow-xl border-l-8 border-l-purple-500 relative z-20">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-purple-700 uppercase text-xs">With Index</h4>
                                            <span className="text-green-500 font-bold text-xs uppercase">Instant</span>
                                        </div>
                                        <p className="text-sm italic text-foreground/70">"Go to Row #900,105"</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
                                            <div className="bg-green-500 h-2 rounded-full w-full"></div>
                                        </div>
                                        <p className="text-right text-[10px] mt-1 text-green-600">0.001 seconds</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Performance</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Indexing: The Cheat Code</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Imagine a textbook without an index. To find "Apples," you'd read every page. That's slow. An <strong>Index</strong> tells the database exactly where the data is instantly.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-purple-500" />
                                        <span><strong>Speed:</strong> Reduces wait times from seconds to milliseconds.</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-purple-500" />
                                        <span><strong>Cost:</strong> Faster queries use less computer power.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: BACKUPS (THE TIME MACHINE) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Reliability</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">The Safety Net</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Hard drives fail. Hackers attack. Power goes out. <strong>Backups</strong> are copies of your data kept in separate, safe locations.
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="p-3 bg-muted border border-border/50 rounded-xl text-center">
                                    <span className="text-primary font-bold block text-sm">3</span>
                                    <p className="text-[10px] text-muted-foreground uppercase font-black">Copies</p>
                                </div>
                                <div className="p-3 bg-muted border border-border/50 rounded-xl text-center border-x border-border/50">
                                    <span className="text-primary font-bold block text-sm">2</span>
                                    <p className="text-[10px] text-muted-foreground uppercase font-black">Media</p>
                                </div>
                                <div className="p-3 bg-muted border border-border/50 rounded-xl text-center">
                                    <span className="text-primary font-bold block text-sm">1</span>
                                    <p className="text-[10px] text-muted-foreground uppercase font-black">Off-site</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-10 border-none bg-slate-900 text-white rounded-[40px] overflow-hidden relative shadow-2xl">
                            <div className="relative z-10 space-y-6 text-center py-6">
                                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-500/50">
                                    <Shield className="w-10 h-10 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight">System Secure</h4>
                                    <p className="text-slate-400 text-sm italic mt-2">Latest Backup: 2 minutes ago</p>
                                </div>
                                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden max-w-xs mx-auto">
                                    <div className="bg-emerald-500 w-full h-full animate-pulse-slow"></div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mt-16" />
                        </Card>
                    </div>
                </section>

                {/* NEW SECTION: NORMALIZATION (ORGANIZATION) */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative border border-primary/10">
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                                <div className="space-y-4 flex-1">
                                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Optimization</p>
                                    <h2 className="text-3xl font-bold">The Art of Tying Up</h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        Imagine a library where every book is thrown into a pile. Chaos. <strong>Normalization</strong> is the process of organizing data into clean, related tables to reduce redundancy and errors.
                                    </p>
                                </div>
                                <div className="p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm">
                                    <LayoutGrid className="w-10 h-10 text-primary" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-background rounded-3xl border border-border/50 text-center opacity-70 scale-95 transform rotate-[-2deg]">
                                    <div className="mb-4">
                                        <div className="h-2 w-20 bg-red-400/20 rounded-full mx-auto mb-2"></div>
                                        <div className="h-2 w-12 bg-red-400/20 rounded-full mx-auto"></div>
                                    </div>
                                    <h4 className="font-bold text-red-500 uppercase text-xs mb-2">Messy & Repeated</h4>
                                    <p className="text-[10px] text-muted-foreground">"John Smith, NY" stored 50 times.</p>
                                </div>
                                <div className="p-6 bg-background rounded-3xl border-2 border-primary/30 text-center shadow-xl relative z-10 transform rotate-[2deg]">
                                    <div className="mb-4">
                                        <div className="h-2 w-20 bg-primary/20 rounded-full mx-auto mb-2"></div>
                                        <div className="h-2 w-12 bg-primary/20 rounded-full mx-auto"></div>
                                    </div>
                                    <h4 className="font-bold text-primary uppercase text-xs mb-2">Clean & Linked</h4>
                                    <p className="text-[10px] text-muted-foreground">"John Smith" stored once. Linked by ID.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </section>

                {/* NEW SECTION: CACHING (SPEED LAYER) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Speed Layer</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">The Short-term Memory</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Going to the hard drive is "slow". <strong>Caching</strong> keeps frequently used data in the RAM (Random Access Memory), which is 1,000x faster. It's like keeping your favorite book on your desk instead of the library shelf.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span><strong>Ultra Fast:</strong> Data loads instantly.</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span><strong>Temporary:</strong> Clears when power goes off (Volatile).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg group">
                            <div className="p-10 bg-slate-900 border-none relative h-full flex flex-col justify-center min-h-[300px]">
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl border border-slate-700 opacity-50 transition-opacity group-hover:opacity-100">
                                        <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">Request 1</span>
                                        <div className="flex items-center gap-2 text-red-400 text-xs">
                                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                            Database (Slow)
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 scale-105 shadow-xl">
                                        <span className="text-emerald-400 text-xs uppercase font-bold tracking-wider">Request 2</span>
                                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                                            <Zap className="w-3 h-3 fill-current" />
                                            Cache (Instant)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* NAVIGATION FOOTER */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 8</p>
                            <p className="text-xl font-bold italic">Next: Database Errors</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button variant="outline" size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("7")}>
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous
                            </Button>
                            <Button size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("9")}>
                                Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 9: DATABASE ERRORS
       Sections: Hero (System Failure), Duplicate Entry, Missing Table, Column Mismatch
    ================================================================================== */
    if (topicId === "9") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: HERO */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-red-500 font-bold">Troubleshooting</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">System failure? <br /> Don't Panic.</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Errors aren't the end of the world. They are the database telling you <strong>exactly</strong> what went wrong. Learning to read these logs is your most important skill.
                            </p>
                            <div className="flex gap-3 pt-2">
                                <div className="p-3 bg-red-500/10 rounded-2xl animate-pulse">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">The Error Log</h4>
                                    <p className="text-sm text-muted-foreground">Your map to fixing the problem.</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('db-errors-hero.jpg')}
                                    alt="Database Error Screen"
                                    description="Add db-errors-hero.jpg. Brief: A creative, cute illustration of a robot looking at a red computer screen with a warning sign. Not scary, just informative."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: DUPLICATE ENTRY */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1 h-full min-h-[300px]">
                            <div className="p-10 bg-muted flex items-center justify-center h-full relative">
                                <div className="flex gap-4 relative">
                                    <div className="w-40 h-56 bg-background rounded-2xl shadow-md border border-border flex flex-col items-center justify-center -rotate-6 transition-transform hover:rotate-0 duration-500">
                                        <div className="w-16 h-16 bg-muted rounded-full mb-4"></div>
                                        <p className="font-bold text-xs">ID: 101</p>
                                        <p className="text-[10px] text-muted-foreground">Original</p>
                                    </div>
                                    <div className="w-40 h-56 bg-background rounded-2xl shadow-xl border-2 border-red-500 flex flex-col items-center justify-center rotate-6 relative z-10">
                                        <div className="w-16 h-16 bg-red-500/10 rounded-full mb-4 flex items-center justify-center text-red-500"><X className="w-8 h-8" /></div>
                                        <p className="font-bold text-red-500 text-xs">ID: 101</p>
                                        <p className="text-[10px] text-red-500 font-bold uppercase mt-1">Duplicate</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Error 1062</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Duplicate Entry</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                You tried to create two users with the same <strong>Primary Key</strong>. In a database, every record must have a unique fingerprint.
                            </p>
                            <div className="bg-slate-950 p-6 rounded-3xl font-mono text-sm border-l-4 border-red-500 shadow-xl">
                                <span className="text-red-400">ERROR 1062: Duplicate entry '101' for key 'PRIMARY'</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: MISSING TABLE */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Error 1146</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Table Doesn't Exist</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Computers are literal. If your table is called <code>users</code> but you ask for <code>userrrrrs</code>, the computer won't guess. It is a "Ghost Town" error.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>Check Spelling:</strong> Typos are the #1 cause of bugs.</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>Case Sensitivity:</strong> "Users" ≠ "users" in some systems.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Card className="p-8 border-none bg-slate-900 text-white rounded-[40px] overflow-hidden relative shadow-2xl">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="font-mono text-sm space-y-4 py-4 min-h-[140px]">
                                <p><span className="text-green-400">mysql&gt;</span> SELECT * FROM userrrrrs;</p>
                                <p className="text-red-400">ERROR 1146 (42S02): Table 'app.userrrrrs' doesn't exist.</p>
                                <p className="text-slate-500 italic text-xs mt-8"># Did you mean 'users'?</p>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 4: COLUMN MISMATCH */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Data Type Mismatch</h2>
                            <p className="text-foreground/70 mb-8 max-w-2xl text-lg">
                                You promised a <strong>Number</strong> (Integer), but you gave it <strong>Text</strong>. A database is strict—it won't let you put a square peg in a round hole.
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <div className="flex-1 p-6 bg-background rounded-3xl border border-border shadow-sm text-center">
                                    <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 border-2 border-dashed border-blue-500/30">
                                        <Calculator className="w-8 h-8" />
                                    </div>
                                    <p className="font-bold text-sm uppercase">Expected: INT</p>
                                </div>
                                <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground/30" />
                                <div className="flex-1 p-6 bg-background rounded-3xl border-2 border-red-500 shadow-xl text-center">
                                    <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 rotate-12">
                                        <Code className="w-8 h-8" />
                                    </div>
                                    <p className="font-bold text-sm uppercase text-red-500">Received: "Dave"</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </section>

                {/* NEW SECTION: CONNECTION TIMEOUT */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="p-10 bg-slate-900 border-none relative h-full flex flex-col justify-center min-h-[300px]">
                                <div className="w-full max-w-xs mx-auto space-y-4">
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[80%]"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                                        <span>Connecting...</span>
                                        <span>29s</span>
                                    </div>
                                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center animate-pulse">
                                        <p className="text-red-500 font-mono text-xs">Error: Connection Timed Out</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Traffic Jam</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Connection Timeout</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Sometimes the database is just too busy to talk to you. Like calling a busy restaurant, if they don't pick up in 30 seconds, your app hangs up. This protects your app from freezing forever.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg"><Zap className="w-6 h-6 text-primary" /></div>
                                    <div>
                                        <h4 className="font-bold text-sm">Common Causes</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Slow internet, too many users, or a crashed server.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW SECTION: PERMISSION DENIED */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative border border-primary/10">
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Security</p>
                                <h2 className="text-3xl font-bold">Access Denied</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Just because you can connect doesn't mean you can touch the data. Databases have strict bouncers. If you try to delete data without permission, you get the Red Hand.
                                </p>
                                <div className="inline-block bg-slate-900 text-red-400 px-6 py-3 rounded-2xl font-mono text-sm border border-red-500/30 shadow-lg">
                                    ERROR 1045: Access denied for user 'guest'
                                </div>
                            </div>
                            <div className="w-40 h-40 bg-background rounded-full flex items-center justify-center shadow-xl border-8 border-red-500/10 relative">
                                <ShieldAlert className="w-16 h-16 text-red-500" />
                                <div className="absolute -bottom-2 -left-2 bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg border border-slate-800">
                                    ADMIN ONLY
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NAVIGATION FOOTER */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 9</p>
                            <p className="text-xl font-bold italic">Next: Real Use Cases</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button variant="outline" size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("8")}>
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous
                            </Button>
                            <Button size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => handleNext("10")}>
                                Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    /* ==================================================================================
       TOPIC 10: REAL USE CASES
       Subtopics: Banking, E-Commerce, Social Media, Healthcare
    ================================================================================== */
    if (topicId === "10") {
        return (
            <div className="space-y-24">
                {/* SECTION 1: HERO */}
                <section className="container mx-auto px-4 pt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Applications</p>
                            <h2 className="text-4xl font-semibold text-foreground leading-tight">Databases in Real Life</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Databases aren't just for tech companies. They run banks, hospitals, shops, and social networks. Every time you tap your phone, a query runs somewhere in the world.
                            </p>
                            <div className="flex gap-3 pt-2">
                                <div className="p-3 bg-primary/10 rounded-2xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">The Digital Skeleton</h4>
                                    <p className="text-sm text-muted-foreground">The invisible force powering modern civilization.</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                            <div className="relative w-full aspect-square bg-muted">
                                <ImageWithFallback
                                    src={getImageUrl('real-world-db.jpg')}
                                    alt="Digital City"
                                    description="Add real-world-db.jpg. Brief: A futuristic city where buildings are connected by glowing data lines."
                                />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: BANKING (ATOMICITY) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                            <div className="p-10 bg-[#f8fafc] dark:bg-slate-900 border-none relative overflow-hidden h-full flex flex-col justify-center">
                                <div className="flex flex-col gap-4 relative z-10">
                                    <div className="flex justify-between items-center p-6 bg-background rounded-3xl shadow-sm border border-border">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">A</div>
                                            <div>
                                                <p className="font-bold text-sm">Alice</p>
                                                <p className="text-[10px] text-muted-foreground">$1,000 → $900</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="text-muted-foreground w-4 h-4" />
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold">B</div>
                                            <div>
                                                <p className="font-bold text-sm">Bob</p>
                                                <p className="text-[10px] text-muted-foreground">$500 → $600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-emerald-500 text-white text-[10px] font-black text-center rounded-xl shadow-lg shadow-emerald-500/20">
                                        TRANSACTION SUCCESSFUL
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="space-y-6 lg:order-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Banking</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">The Transaction</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                When you send money, two things MUST happen: your balance drops, and the receiver's rises. If the power fails halfway, the database cancels <strong>both</strong>. This "All-or-Nothing" rule is called **Atomicity**.
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <div className="flex items-center gap-4">
                                    <Landmark className="w-8 h-8 text-primary" />
                                    <p className="text-sm font-semibold italic">"In banking, accuracy is more important than speed."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: E-COMMERCE (INVENTORY) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Shopping</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Inventory Lock</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                You buy the last t-shirt, and your friend tries to buy it 1 second later. The database "locks" that row for you while you checkout. Your friend sees "Out of Stock." No double-selling allowed!
                            </p>
                            <div className="bg-muted p-6 rounded-3xl border border-border/50">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>Row Locking:</strong> Prevents data conflicts.</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>Consistency:</strong> Ensures stock levels are always correct.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Card className="p-8 border-none bg-slate-900 text-white rounded-[40px] overflow-hidden relative shadow-2xl">
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <ShoppingCart className="w-6 h-6 text-blue-400" />
                                        <span className="font-bold">Cool T-Shirt</span>
                                    </div>
                                    <Badge variant="destructive" className="animate-pulse">1 Left</Badge>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400">User 1 clicks "Buy"</span>
                                        <span className="text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">Locked</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs opacity-50">
                                        <span className="text-slate-400">User 2 clicks "Buy"</span>
                                        <span className="text-red-400 font-bold uppercase tracking-widest">Wait...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mb-16 -mr-16" />
                        </Card>
                    </div>
                </section>

                {/* SECTION 4: SOCIAL MEDIA (SPEED) */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Social Media</p>
                                <h2 className="text-3xl font-bold">The Speed of Gossip</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Millions of likes happen every second. These databases care about <strong>speed</strong> and <strong>mass connections</strong>. "Show me posts from people I follow" is a massive query running billions of times a day.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <div className="p-3 bg-background rounded-2xl shadow-sm flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                                        <span className="text-xs font-bold font-mono">1.2M+ / sec</span>
                                    </div>
                                    <div className="p-3 bg-background rounded-2xl shadow-sm flex items-center gap-2">
                                        <Smartphone className="w-5 h-5 text-purple-500" />
                                        <span className="text-xs font-bold font-mono">Real-time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg text-primary transform hover:scale-110 transition-transform">
                                <Zap className="w-16 h-16" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </section>

                {/* NEW SECTION: GAMING (LEADERBOARDS) */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">High Performance</p>
                            <h2 className="text-3xl font-semibold text-foreground leading-tight">Gaming Leaderboards</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                In online games, millions of scores are updated every second. Relational databases are too slow for this. Games use ultra-fast <strong>In-Memory Databases</strong> (like Redis) to rank players instantly.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-muted rounded-2xl text-center border border-border/50">
                                    <span className="text-2xl">⚡</span>
                                    <p className="text-xs font-bold mt-2">Real-time Updates</p>
                                </div>
                                <div className="p-4 bg-muted rounded-2xl text-center border border-border/50">
                                    <span className="text-2xl">🏆</span>
                                    <p className="text-xs font-bold mt-2">Instant Ranking</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                            <div className="p-10 bg-slate-900 border-none relative h-full flex flex-col justify-center min-h-[300px]">
                                <div className="space-y-3 relative z-10 w-full max-w-sm mx-auto">
                                    <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/50">
                                        <div className="flex items-center gap-3">
                                            <span className="text-yellow-500 font-black text-lg">1</span>
                                            <span className="text-white font-bold">ProGamer99</span>
                                        </div>
                                        <span className="font-mono text-yellow-500">9,999</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-white/5 opacity-80">
                                        <div className="flex items-center gap-3">
                                            <span className="text-slate-500 font-bold text-lg">2</span>
                                            <span className="text-slate-300 font-bold">NoobMaster</span>
                                        </div>
                                        <span className="font-mono text-slate-400">8,450</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-white/5 opacity-60">
                                        <div className="flex items-center gap-3">
                                            <span className="text-slate-500 font-bold text-lg">3</span>
                                            <span className="text-slate-300 font-bold">PlayerOne</span>
                                        </div>
                                        <span className="font-mono text-slate-400">7,200</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* NEW SECTION: HEALTHCARE (PRIVACY) */}
                <section className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative border border-primary/10">
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Data Privacy</p>
                                <h2 className="text-3xl font-bold">Healthcare & Encryption</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Your medical records are highly sensitive. Databases in hospitals use <strong>Encryption</strong>. Even if a hacker steals the database file, they only see scrambled gibberish without the specific digital key.
                                </p>
                                <div className="flex items-center gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm w-fit mt-4">
                                    <div className="p-2 bg-emerald-500/10 rounded-full"><CheckCircle className="w-5 h-5 text-emerald-500" /></div>
                                    <span className="text-xs font-bold font-mono text-emerald-600">HIPAA Compliant</span>
                                </div>
                            </div>
                            <div className="w-40 h-40 bg-background rounded-full flex items-center justify-center shadow-xl border-8 border-primary/10 relative">
                                <div className="text-4xl">🔐</div>
                                <div className="absolute inset-0 border-4 border-dashed border-primary/20 rounded-full animate-spin-slow"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NAVIGATION FOOTER */}
                <section className="container mx-auto px-4 pb-20 mt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Module 19</p>
                            <p className="text-xl font-bold italic">Next: Advanced Logic & Logic Gates</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button variant="outline" size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 group" onClick={() => handlePrev("9")}>
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous
                            </Button>
                            <Button size="lg" className="flex-1 md:flex-none gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group bg-slate-900 hover:bg-slate-800 text-white" onClick={() => navigate('/module/20')}>
                                Next Module <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-2xl font-bold">Topic Not Found</h1>
            <Button onClick={() => navigate("/dashboard")} className="mt-4">Back to Dashboard</Button>
        </div>
    );
};

export default Module19;

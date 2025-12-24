
import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, ArrowRight, ArrowLeft, Globe, Cpu, Terminal, Play, Box, Layers, GitBranch, Repeat, Settings, Bug, ShieldAlert, Code, Briefcase, Zap, MessageSquare, MousePointer2, Calculator, Ruler, Brain, Lightbulb, Search, Coffee, ArrowDown, FileCode } from "lucide-react";

// --- TOPIC 1: What is Programming? ---
function Topic1_WhatIsProgramming() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-programming-intro" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Foundation</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Talking to Machines</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Think of yourself as a director. The computer is your actor. Programming is the script you write to tell it exactly how to perform every task, from simple math to flying rockets.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Terminal className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">The Script of Success</h4>
                                <p className="text-sm text-muted-foreground">Every app you use is built on these instructions.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('programming-intro.jpg')}
                                alt="Programming Introduction"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add programming-intro.jpg. Brief: A creative visualization of human thoughts being translated into glowing digital code lines.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Instructions (Order Matters) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('instructions-logic.jpg')}
                                alt="Precision Instructions"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add instructions-logic.jpg. Brief: A top-down view of blocks or puzzle pieces being fitted together in a perfect line.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Rulebook</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Order & Precision</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Computers are fast, but they don't have "common sense." If you miss a step in your instructions, the computer won't guess what you meant. It follows the script literally.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span><strong>Clarity:</strong> Steps must be 100% precise.</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span><strong>Sequence:</strong> Order determines the outcome.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Programs vs Software */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">The Difference</p>
                    <h2 className="text-3xl font-semibold text-foreground">Blueprints vs. The House</h2>
                    <p className="text-foreground/80 mt-4">
                        We often use the words interchangeably, but in the tech world, they represent different stages of a creation.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-t-8 border-blue-500 bg-background/50 backdrop-blur-sm">
                        <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl w-fit">
                            <FileCode className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">The Program</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            This is the raw **Source Code**. It's the technical instructions written by the developer. Think of it as the recipe or the architectural blueprint.
                        </p>
                    </Card>
                    <Card className="p-8 border-t-8 border-emerald-500 bg-background/50 backdrop-blur-sm">
                        <div className="mb-6 p-4 bg-emerald-500/10 rounded-2xl w-fit">
                            <Box className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">The Software</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            This is the **Finished Product**. It includes the code, images, and user interface. It's the actual app you click on or the house you live in.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Real World Coding */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Everywhere Around You</p>
                        <h2 className="text-3xl font-semibold text-foreground">Hiding in Plain Sight</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            From the traffic lights that keep us safe to the washing machine that cleans our clothes, code is running in the background of your entire life.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-muted rounded-2xl text-center">
                                <span className="text-2xl">🚦</span>
                                <p className="text-xs font-bold mt-1">Traffic Flow</p>
                            </div>
                            <div className="p-4 bg-muted rounded-2xl text-center">
                                <span className="text-2xl">🏦</span>
                                <p className="text-xs font-bold mt-1">ATM Logic</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[16/9] bg-muted">
                            <img
                                src={getImageUrl('everyday-code.jpg')}
                                alt="Code in everyday life"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add everyday-code.jpg. Brief: An image of a smart city street showing digital logic overlays on cars, lights, and buildings.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Beginner examples (New) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8 bg-primary/5 rounded-[50px] p-12 overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Code is Like a Recipe</h2>
                        <p className="text-foreground/70 mb-8 max-w-2xl">
                            If you've ever followed instructions to build a Lego set or bake a cake, you've already behaved like a computer. Coding is just doing that with digital blocks.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {['Ingredients = Data', 'Mixing = Logic', 'Cake = Result'].map(step => (
                                <div key={step} className="bg-background/80 p-4 rounded-2xl border border-primary/20 text-center font-bold text-sm">
                                    {step}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
                </div>
            </section>

            {/* SECTION 6: Why Learn? (New) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-8 border-none bg-slate-900 text-white rounded-[40px] overflow-hidden relative">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-bold">A Superpower for the 21st Century</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Learning to code isn't just about jobs. It's about learning **how to think**. It helps you solve problems systematically, be creative with technology, and understand the digital world.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase font-bold">Creative</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase font-bold">Logical</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase font-bold">Powerful</span>
                            </div>
                        </div>
                        <Zap className="absolute top-10 right-10 w-32 h-32 text-primary/10 -rotate-12" />
                    </Card>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">It's for Everyone</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            You don't need to be a math genius to code. If you can think logically and have the patience to try, try again, you can build the next big thing.
                        </p>
                        <Button variant="outline" className="rounded-full px-8 h-12">Learn More About Careers</Button>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Tools of the Trade (New) */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">What Do Coders Use?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto"><Settings className="w-6 h-6" /></div>
                        <h4 className="font-bold">The IDE</h4>
                        <p className="text-xs text-muted-foreground text-center">The "Text Editor" where we write our code (like VS Code).</p>
                    </Card>
                    <Card className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto"><Globe className="w-6 h-6" /></div>
                        <h4 className="font-bold">The Browser</h4>
                        <p className="text-xs text-muted-foreground text-center">Where we see our websites come to life (Chrome, Safari).</p>
                    </Card>
                    <Card className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto"><Cpu className="w-6 h-6" /></div>
                        <h4 className="font-bold">The Terminal</h4>
                        <p className="text-xs text-muted-foreground text-center">A text-only way to talk directly to the machine's heart.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 8: Preview (New) */}
            <section className="container mx-auto px-4 mb-20">
                <Card className="p-12 text-center bg-muted/30 border-2 border-dashed border-border rounded-[50px]">
                    <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
                    <p className="text-muted-foreground mb-8">Your first line of code is just a click away.</p>
                    <div className="inline-flex items-center gap-4 bg-slate-900 p-6 rounded-3xl text-emerald-400 font-mono shadow-xl">
                        <Play className="w-5 h-5 fill-current" />
                        <span>print("Hello, Future Coder!")</span>
                    </div>
                </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 1</p>
                        <p className="text-xl font-bold italic">Next: The Languages of Logic</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/2")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}


// --- TOPIC 2: Programming Languages ---
function Topic2_ProgrammingLanguages() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-languages" className="space-y-24">
            {/* SECTION 1: The Spectrum of Code */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Communication</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Many Tongues, One Brain</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Just as humans speak English, Hindi, or Spanish, computers have thousands of specialized languages. Some are meant for humans to read easily, while others are built for pure machine speed.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">Right Tool, Right Job</h4>
                                <p className="text-sm text-muted-foreground">We choose languages based on what we are building.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('language-spectrum.jpg')}
                                alt="Programming Languages Spectrum"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add language-spectrum.jpg. Brief: A collage of different programming language logos (JS, Python, C++, Java) floating in a digital space.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: High-Level vs Low-Level */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('high-low-level.jpg')}
                                alt="High vs Low Level Code"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add high-low-level.jpg. Brief: A split screen showing English-like Python code on one side and complex 0s and 1s binary on the other.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Ease vs. Speed</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Abstraction Levels</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            **High-Level** languages (like Python) look like English and are easy to learn. **Low-Level** languages (like Assembly) are closer to the machine hardware—they are hard to read but extremely fast.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs font-bold text-muted-foreground tracking-widest uppercase">
                                    <span>Human Easy</span>
                                    <span>← Spectrum →</span>
                                    <span>Machine Easy</span>
                                </div>
                                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Big Four */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Industry Standards</p>
                    <h2 className="text-3xl font-semibold text-foreground">The Developer's Toolbox</h2>
                    <p className="text-foreground/80 mt-4">
                        Each language has a "specialty." To be a great coder, you don't need to know all of them—just the right ones for your goals.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Python", desc: "The AI & Beginner favorite.", color: "border-yellow-500" },
                        { title: "JavaScript", desc: "The king of the web.", color: "border-blue-400" },
                        { title: "C++", desc: "The choice for high-end games.", color: "border-indigo-600" },
                        { title: "Swift", desc: "Crafting beautiful iOS apps.", color: "border-orange-500" }
                    ].map((lang, i) => (
                        <Card key={i} className={`p-8 border-t-8 ${lang.color} bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer`}>
                            <h3 className="text-xl font-bold mb-3">{lang.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{lang.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 4: Compiled vs Interpreted */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Behind the Scenes</p>
                        <h2 className="text-3xl font-semibold text-foreground">The Translators</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg text-sm">
                            How does a computer understand English-like code? It uses a translator! **Compilers** translate the whole program at once, while **Interpreters** translate it line-by-line as it runs.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 bg-muted rounded-2xl border border-border/50 text-center flex-1">
                                <h4 className="font-bold text-sm">Compiled</h4>
                                <p className="text-[10px] text-muted-foreground">Fast, but takes time to prepare.</p>
                            </div>
                            <div className="p-4 bg-muted rounded-2xl border border-border/50 text-center flex-1">
                                <h4 className="font-bold text-sm">Interpreted</h4>
                                <p className="text-[10px] text-muted-foreground">Slower, but starts instantly.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[16/9] bg-muted">
                            <img
                                src={getImageUrl('code-translation.jpg')}
                                alt="Code Translation Process"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add code-translation.jpg. Brief: An infographic showing code going into a "Translator" box and coming out as gear/mechanical symbols.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Syntax: The Grammar of Code */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Card className="p-8 bg-slate-900 border-none rounded-[40px] shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        <div className="relative z-10 font-mono text-sm space-y-4">
                            <div className="space-y-1">
                                <p className="text-gray-500">// JavaScript Style</p>
                                <p className="text-emerald-400">if (isSunny) &#123;</p>
                                <p className="text-emerald-400 pl-4">wear_shades();</p>
                                <p className="text-emerald-400">&#125;</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500"># Python Style</p>
                                <p className="text-blue-400">if is_sunny:</p>
                                <p className="text-blue-400 pl-4">wear_shades()</p>
                            </div>
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Code Grammar</p>
                        <h2 className="text-3xl font-semibold">Learning the Syntax</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Every language has its own "grammar" called **Syntax**. Some use semicolons and curly braces, while others use empty space. If you get the syntax wrong, the computer won't understand you!
                        </p>
                        <div className="flex items-center gap-3 text-sm text-red-500 font-bold bg-red-500/10 p-3 rounded-xl w-fit">
                            <ShieldAlert className="w-4 h-4" /> Syntax Error: The #1 struggle for beginners.
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Language Popularity (Jobs & Trends) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Market</p>
                    <h2 className="text-3xl font-bold">What's in Demand?</h2>
                    <p className="text-muted-foreground mt-4">Technology changes fast. Choosing the right language can determine your career path.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Web Dev', lang: 'JavaScript', trend: '+15%' },
                        { label: 'Data/AI', lang: 'Python', trend: '+28%' },
                        { label: 'Mobile', lang: 'Swift/Kotlin', trend: '+10%' },
                        { label: 'Systems', lang: 'Rust/C++', trend: '+20%' }
                    ].map(st => (
                        <Card key={st.label} className="p-6 text-center border-none bg-muted/50 rounded-3xl">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase">{st.label}</p>
                            <h4 className="text-lg font-bold my-1">{st.lang}</h4>
                            <p className="text-xs text-emerald-600 font-bold">{st.trend} Year Growth</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 7: Logic Decision Tree */}
            <section className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto p-12 bg-primary text-primary-foreground rounded-[50px] overflow-hidden relative">
                    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-4 text-left">
                            <h2 className="text-3xl font-bold">How to Choose?</h2>
                            <p className="opacity-80">Don't overthink it. Most beginners start with **Python** because it's friendly. Once you learn one language, the second one is 10x easier to learn!</p>
                            <Button variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-xl">Start with Python &rarr;</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-3 opacity-90 text-[10px] font-bold uppercase tracking-tighter">
                            <div className="bg-white/10 p-3 rounded-xl border border-white/20">Build Apps? → JS</div>
                            <div className="bg-white/10 p-3 rounded-xl border border-white/20">Build AI? → Python</div>
                            <div className="bg-white/10 p-3 rounded-xl border border-white/20">Build Games? → C++</div>
                            <div className="bg-white/10 p-3 rounded-xl border border-white/20">Build OS? → C</div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                </Card>
            </section>

            {/* SECTION 8: Beyond Computers (IoT/Robotics) */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Hidden Code</p>
                        <h2 className="text-3xl font-semibold">Languages in Everything</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Languages don't just live on laptops. They power the tiny chips in your credit card, the autopilot in planes, and the smart sensors in your home.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 bg-muted rounded-2xl flex-1 border border-border/50 text-center">
                                <span className="text-2xl">🛰️</span>
                                <p className="text-[10px] font-bold mt-1">Satellite Logic</p>
                            </div>
                            <div className="p-4 bg-muted rounded-2xl flex-1 border border-border/50 text-center">
                                <span className="text-2xl">🤖</span>
                                <p className="text-[10px] font-bold mt-1">Robotics Control</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[16/9] bg-muted">
                            <img
                                src={getImageUrl('iot-languages.jpg')}
                                alt="Code in devices"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add iot-languages.jpg. Brief: An image of a smart home or city with glowing digital connections to various appliances.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/1")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 2</p>
                        <p className="text-xl font-bold italic">Next: Python Basics</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/3")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}


// --- TOPIC 3: Python Basics ---
function Topic3_PythonBasics() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-python-basics" className="space-y-24">
            {/* SECTION 1: Why Python? */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Modern Standard</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Why Python First?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Python is loved by beginners and professionals alike. Its syntax is clean, readable, and almost like English. Whether you want to build a website or an AI, Python is often the first choice.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <div className="text-center p-4 bg-muted rounded-2xl flex-1 border border-border/50">
                                <Code className="w-6 h-6 mx-auto mb-2 text-primary" />
                                <p className="text-[10px] font-bold uppercase tracking-tight">Easy Syntax</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-2xl flex-1 border border-border/50">
                                <Globe className="w-6 h-6 mx-auto mb-2 text-primary" />
                                <p className="text-[10px] font-bold uppercase tracking-tight">Huge Community</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('python-intro.jpg')}
                                alt="Python Language Visual"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add python-intro.jpg. Brief: A high-tech laboratory or workshop with a large, friendly-looking digital snake logo.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Variables (Data Containers) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('python-variables.jpg')}
                                alt="Variables Concept"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add python-variables.jpg. Brief: A row of different sized storage boxes with labels like "name", "age", and "price".
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Storing Information</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Variables are Boxes</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            In Python, we use variables to store information so we can use it later. You give the box a name and put a value inside. It's the most basic way to remember data.
                        </p>
                        <Card className="p-6 bg-slate-900 border border-white/10 rounded-3xl">
                            <div className="font-mono text-emerald-400 space-y-2">
                                <p><span className="text-blue-400">player_name</span> = "Aria"</p>
                                <p><span className="text-blue-400">score</span> = 100</p>
                                <p><span className="text-blue-400">is_alive</span> = True</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Common Data Types */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Fundamental Building Blocks</p>
                    <h2 className="text-3xl font-semibold text-foreground">The Types of Data</h2>
                    <p className="text-foreground/80 mt-4">
                        Not all data is the same. Python needs to know if it's dealing with a number, a piece of text, or a simple yes/no.
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { type: "String (str)", example: '"Hello"', desc: "Text between quotes." },
                        { type: "Integer (int)", example: "42", desc: "Whole numbers." },
                        { type: "Float", example: "3.14", desc: "Decimals." },
                        { type: "Boolean (bool)", example: "True / False", desc: "Yes / No logic." }
                    ].map((item, idx) => (
                        <Card key={idx} className="p-8 border border-border/50 bg-background/50 backdrop-blur-sm hover:translate-y-[-4px] transition-transform">
                            <h3 className="text-xl font-bold text-primary mb-2">{item.type}</h3>
                            <code className="block bg-muted p-2 rounded text-xs font-mono mb-4 text-foreground/60">{item.example}</code>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 4: Print & Output */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Talking Back</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">The Print Statement</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            How do we see what the computer is thinking? We use the `print()` function. It's the most common tool for seeing your results on the screen.
                        </p>
                        <div className="bg-slate-900 p-6 rounded-3xl border border-white/10 font-mono text-sm">
                            <p className="text-gray-500"># This prints text to the screen</p>
                            <p className="text-blue-400">print(<span className="text-emerald-400">"Hello, World!"</span>)</p>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-xs text-sidebar-foreground">Output:</p>
                                <p className="text-white pt-1">Hello, World!</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('python-output.jpg')}
                                alt="Python Print Output"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add python-output.jpg. Brief: A retro computer monitor displaying the words "Hello World" in bright green text.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Input (Getting User Data) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('python-input.jpg')}
                                alt="User Input"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add python-input.jpg. Brief: An image of a hand typing on a glowing futuristic keyboard.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Interactive Code</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Asking Questions</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Software is useless if it can't listen to the user. We use the `input()` function to pause the code and wait for the user to type something.
                        </p>
                        <div className="bg-slate-900 p-6 rounded-3xl border border-white/10 font-mono text-sm">
                            <p className="text-blue-400 text-xs">name = input(<span className="text-emerald-400">"What is your name? "</span>)</p>
                            <p className="text-blue-400 text-xs mt-2">print(<span className="text-emerald-400">"Welcome, "</span> + name)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Basic Math Operations */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Calculations</p>
                    <h2 className="text-3xl font-semibold text-foreground">Python as a Calculator</h2>
                    <p className="text-foreground/80 mt-4">
                        Python is incredibly fast at math. It uses standard symbols that you already know from school.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { op: "+", name: "Addition", ex: "5 + 2 = 7" },
                        { op: "-", name: "Subtraction", ex: "10 - 3 = 7" },
                        { op: "*", name: "Multiplication", ex: "4 * 2 = 8" },
                        { op: "/", name: "Division", ex: "10 / 2 = 5.0" }
                    ].map((item, i) => (
                        <Card key={i} className="p-6 text-center border-border/50">
                            <span className="text-3xl font-bold text-primary">{item.op}</span>
                            <h4 className="font-bold mt-2">{item.name}</h4>
                            <p className="text-xs text-muted-foreground font-mono mt-1">{item.ex}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 7: Indentation (The Golden Rule) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Python's Secret Sauce</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Whitespace Matters</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Unlike other languages that use curly braces { }, Python uses **indentation** (empty space) to group code together. Missing a space is the #1 mistake new Python coders make!
                        </p>
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-start gap-3">
                            <ShieldAlert className="w-5 h-5 text-red-500 mt-0.5" />
                            <p className="text-xs text-red-800 dark:text-red-300"><strong>Pro Tip:</strong> Always use 4 spaces or one TAB key to indent your code.</p>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[16/9] bg-muted">
                            <img
                                src={getImageUrl('python-indentation.jpg')}
                                alt="Code Indentation Visual"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add python-indentation.jpg. Brief: A microscopic view of lines of code with glowing vertical laser lines showing perfect alignment.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 8: Code Comments */}
            <section className="container mx-auto px-4 mb-10">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 border-none bg-primary/5 rounded-[40px] flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0">
                            <MessageSquare className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">Writing for Humans</h3>
                            <p className="text-foreground/70">
                                We use **Comments** (starting with `#`) to explain what our code does. The computer ignores these, but other programmers (including your future self) will thank you!
                            </p>
                            <code className="text-xs font-mono bg-background/50 p-2 rounded block">
                                <span className="text-emerald-600"># This line is for humans</span><br />
                                print("This line is for the computer")
                            </code>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/2")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 3</p>
                        <p className="text-xl font-bold italic">Next: Logical Thinking & Algorithms</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/4")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 4: Logical Thinking ---
function Topic4_LogicalThinking() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-logic" className="space-y-24">
            {/* SECTION 1: Introduction to Logic */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Coder's Mindset</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Programming is Thinking</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Before you type a single line of code, you have to solve the problem in your head. Logical thinking is the art of breaking a big, scary goal into tiny, manageable steps.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Brain className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">90% Thinking, 10% Typing</h4>
                                <p className="text-sm text-muted-foreground">Great coders spend more time planning than writing.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('logical-mindset.jpg')}
                                alt="Logical Thinking Mindset"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add logical-mindset.jpg. Brief: A creative visualization of a human brain with glowing circuitry and gears working together.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: What is an Algorithm? */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('algorithm-concept.jpg')}
                                alt="Algorithm Concept"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add algorithm-concept.jpg. Brief: A top-down view of a clear recipe card with precise measurements and steps.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Rulebook</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The Algorithm Blueprint</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            An **Algorithm** is just a fancy word for a "recipe." It's a list of exact steps that lead to a result. If you miss a step, the result fails.
                        </p>
                        <div className="bg-muted p-6 rounded-3xl border border-border/50">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-foreground/80 italic font-mono">1. Boil Water</li>
                                <li className="flex items-center gap-2 text-sm text-foreground/80 italic font-mono">2. Add Tea Bag</li>
                                <li className="flex items-center gap-2 text-sm text-foreground/80 italic font-mono">3. Wait 3 Minutes</li>
                                <li className="flex items-center gap-2 text-sm text-foreground/80 italic font-mono">4. Remove & Enjoy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Step-by-Step Precision */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">The Precision Rule</h2>
                        <p className="text-muted-foreground mt-2">Computers don't have "common sense". They need literal instructions.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 bg-red-500/5 border-red-500/20">
                            <h4 className="font-bold text-red-700 flex items-center gap-2 mb-4">
                                <ShieldAlert className="w-5 h-5" /> Bad Instruction
                            </h4>
                            <p className="text-sm italic">"Hey robot, make me a sandwich."</p>
                            <p className="text-xs text-muted-foreground mt-4">Result: Robot stands still. Doesn't know what "sandwich" means or where bread is.</p>
                        </Card>
                        <Card className="p-6 bg-emerald-500/5 border-emerald-500/20">
                            <h4 className="font-bold text-emerald-700 flex items-center gap-2 mb-4">
                                <CheckCircle className="w-5 h-5" /> Good Instruction
                            </h4>
                            <p className="text-sm italic font-mono">"1. Open fridge. 2. Grab bread. 3. Apply spread..."</p>
                            <p className="text-xs text-muted-foreground mt-4">Result: Success! Each step is a basic action the robot understands.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Breaking it Down (Decomposition) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Computational Thinking</p>
                    <h2 className="text-3xl font-semibold text-foreground">The 4 Pillars of Logic</h2>
                    <p className="text-foreground/80 mt-4">
                        Coders use these four mental tricks to solve even the most complex problems on earth.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Decomposition", desc: "Breaking problems into small pieces." },
                        { title: "Pattern Recog", desc: "Finding similarities in the chaos." },
                        { title: "Abstraction", desc: "Ignoring details that don't matter." },
                        { title: "Algorithms", desc: "Writing the step-by-step rules." }
                    ].map((pill, i) => (
                        <Card key={i} className="p-8 border border-border/50 bg-background/50 backdrop-blur-sm text-center">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{pill.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{pill.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 5: Flow of Logic (Visualizing) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Mapping the Mind</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Flowcharts: Logic Maps</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Before writing code, professionals use **Flowcharts**. They use shapes to represent actions and arrows to show the path. It helps you see "forks in the road" before you enter them.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                                <div className="w-8 h-4 bg-primary/20 border border-primary/40 rounded-full" />
                                <span className="text-xs font-bold uppercase">Oval: Start/End</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                                <div className="w-8 h-8 bg-indigo-500/10 border border-indigo-500/40" />
                                <span className="text-xs font-bold uppercase">Rectangle: Action</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                                <div className="w-8 h-8 rotate-45 bg-orange-500/10 border border-orange-500/40 translate-x-1" />
                                <div className="w-2" />
                                <span className="text-xs font-bold uppercase">Diamond: Decision</span>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('logic-flowchart.jpg')}
                                alt="Logic Flowchart Example"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add logic-flowchart.jpg. Brief: A clean, minimalist flowchart showing a simple decision like "Is the lamp working?"
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Real World Algorithms */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[16/9] bg-muted">
                            <img
                                src={getImageUrl('real-world-algorithms.jpg')}
                                alt="Algorithms in life"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add real-world-algorithms.jpg. Brief: An image of a digital map with multiple glowing routes plotted across a city.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Hidden Logic</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Everywhere & Anywhere</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            From the directions your GPS gives you to the way YouTube suggests your next favorite video—everything is powered by an invisible algorithm optimized for speed.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-muted rounded-2xl text-center">
                                <span className="text-2xl">📍</span>
                                <p className="text-xs font-bold mt-1">Smart Maps</p>
                            </div>
                            <div className="p-4 bg-muted rounded-2xl text-center">
                                <span className="text-2xl">🎵</span>
                                <p className="text-xs font-bold mt-1">Playlists</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Pattern Recognition (New Section) */}
            <section className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-[50px] p-12 text-white overflow-hidden relative">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold">Finding Shortcuts</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Great coders don't solve the same problem twice. They look for **Patterns**. If you can solve one piece of a puzzle, you can likely use that same logic for ten other pieces.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <Repeat className="w-5 h-5 text-primary" /> Recognize a recurring issue
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <GitBranch className="w-5 h-5 text-primary" /> Create a reusable solution
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                                    <div className="w-12 h-12 border-4 border-dashed border-primary/40 rounded-full animate-spin-slow" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
                </div>
            </section>

            {/* SECTION 8: Interactive Challenge: Spot the Flaw */}
            <section className="container mx-auto px-4">
                <Card className="max-w-3xl mx-auto p-12 rounded-[50px] border-2 border-dashed border-border text-center space-y-8 shadow-inner">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">The Broken Robot Test</h2>
                        <p className="text-muted-foreground">Can you spot the missing instruction in this algorithm?</p>
                    </div>

                    <div className="bg-muted p-8 rounded-3xl border border-border text-left space-y-4 font-mono text-sm">
                        <p className="text-slate-400"># Goal: Enter the house</p>
                        <p>1. Walk to the front door.</p>
                        <p className="p-2 bg-red-500/10 border border-red-500/30 text-red-600 rounded">2. Walk into the hallway.</p>
                        <p>3. Close the door behind you.</p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-xs font-bold opacity-50 uppercase tracking-[0.2em]">The Missing Step</p>
                        <div className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/20">
                            "Unlock and Open the Door!"
                        </div>
                    </div>
                </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/3")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 4</p>
                        <p className="text-xl font-bold italic">Next: Decision Making (Conditions)</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-orange-600/20 group bg-orange-600 hover:bg-orange-700" onClick={() => navigate("/module/18/topic/5")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}



// --- TOPIC 5: Conditions ---
function Topic5_Conditions() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-conditions" className="space-y-24">
            {/* SECTION 1: The Fork in the Road */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Decision Making</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">The "If" Power</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Conditions are the decision-makers of your code. They allow your program to act differently depending on the situation. Without them, programs would be predictable and boring.
                        </p>
                        <Card className="p-4 border-l-4 border-primary bg-muted/50 rounded-r-2xl">
                            <p className="text-sm italic">"**IF** it is raining, **THEN** take an umbrella. **ELSE**, wear sunglasses."</p>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('logic-flow.jpg')}
                                alt="Conditional Logic Flow"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add logic-flow.jpg. Brief: A digital representation of a fork in a glowing data road with "True" and "False" signs.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Boolean Logic (True vs False) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('boolean-logic.jpg')}
                                alt="Boolean Logic Visualization"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add boolean-logic.jpg. Brief: A high-contrast image of a simple toggle switch in the "ON" position, glowing with green light.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Foundation</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Yes or No?</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Every condition in Python boils down to a **Boolean** value: either `True` or `False`. It's like a light switch—there is no middle ground.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                                <p className="font-bold text-emerald-700">TRUE</p>
                            </div>
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                                <ShieldAlert className="w-6 h-6 mx-auto mb-2 text-red-600" />
                                <p className="font-bold text-red-700">FALSE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Comparison Operators */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">The Tools</p>
                    <h2 className="text-3xl font-semibold text-foreground">How We Compare</h2>
                    <p className="text-foreground/80 mt-4">
                        We use special symbols to compare values. These symbols are the "eyes" of our conditions.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { op: "==", name: "Equal To", desc: "Checks if two things are exactly the same." },
                        { op: "!=", name: "Not Equal To", desc: "Checks if two things are different." },
                        { op: "> / <", name: "Greater / Less", desc: "Used for numbers and prices." }
                    ].map((item, idx) => (
                        <Card key={idx} className="p-8 border border-border/50 bg-background/50 backdrop-blur-sm">
                            <div className="text-2xl font-mono text-primary mb-2">{item.op}</div>
                            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 4: The Else Power (The "Otherwise" path) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Plan B</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The "Otherwise" Path</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            What happens if the condition is NOT true? That's where **else** comes in. It provides a default action for every situation that doesn't meet your first rule.
                        </p>
                        <div className="bg-slate-900 px-6 py-4 rounded-3xl border border-white/10 font-mono text-xs text-blue-300">
                            if balance &gt; 100:<br />
                            &nbsp;&nbsp;print("Buy Coffee")<br />
                            <span className="text-primary font-bold">else:</span><br />
                            &nbsp;&nbsp;print("Drink Water")
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('else-logic.jpg')}
                                alt="Else default logic"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add else-logic.jpg. Brief: A split door where one side is glowing but the other is a simple wooden exit mark.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Logical Operators (AND, OR) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Complex Rules</p>
                    <h2 className="text-3xl font-semibold text-foreground">AND vs OR</h2>
                    <p className="text-foreground/80 mt-4">
                        Sometimes you need more than one rule. Use these to glue conditions together.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-l-8 border-indigo-500">
                        <h4 className="text-2xl font-bold mb-4">The AND Rule</h4>
                        <p className="text-sm text-muted-foreground">**BOTH** conditions must be true.</p>
                        <div className="mt-6 p-4 bg-muted rounded-xl font-mono text-xs">
                            if is_weekend <span className="text-indigo-600 font-bold">and</span> is_sunny:
                        </div>
                    </Card>
                    <Card className="p-8 border-l-8 border-orange-500">
                        <h4 className="text-2xl font-bold mb-4">The OR Rule</h4>
                        <p className="text-sm text-muted-foreground">**EITHER** condition can be true.</p>
                        <div className="mt-6 p-4 bg-muted rounded-xl font-mono text-xs">
                            if is_pizza <span className="text-orange-600 font-bold">or</span> is_taco:
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: The Elif Chain */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Multi-Lane Traffic</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">More Than Two Choices</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Sometimes `If` and `Else` aren't enough. For example, a traffic light has THREE colors. In Python, we use **elif** (else if) to check multiple possibilities in order.
                        </p>
                        <div className="bg-slate-900 p-6 rounded-3xl border border-white/10 font-mono text-sm">
                            <p className="text-blue-400">if <span className="text-white">light == "red"</span>:</p>
                            <p className="pl-6 text-emerald-400 text-xs">print("Stop")</p>
                            <p className="text-blue-400">elif <span className="text-white">light == "yellow"</span>:</p>
                            <p className="pl-6 text-emerald-400 text-xs">print("Slow down")</p>
                            <p className="text-blue-400">else:</p>
                            <p className="pl-6 text-emerald-400 text-xs">print("Go!")</p>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[16/9] bg-muted">
                            <img
                                src={getImageUrl('multi-decision.jpg')}
                                alt="Multiple Decision Path"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add multi-decision.jpg. Brief: A top-down view of a highway with multiple exits labeled with different code keywords.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Common Pitfalls (Pitfalls & Colon) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 border-none bg-red-500/5 rounded-[40px] flex flex-col md:flex-row items-center gap-8 border-2 border-red-500/10">
                        <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center shrink-0">
                            <Bug className="w-10 h-10 text-red-500" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-red-800 dark:text-red-400">Don't Forget the Colon!</h3>
                            <p className="text-foreground/70 text-sm">
                                Every `if`, `elif`, and `else` line MUST end with a colon (<span className="font-mono font-bold text-red-500">:</span>). Without it, Python won't know where the condition ends and the action begins.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <div className="text-xs font-mono p-2 bg-red-500/10 rounded">if x &gt; 5 (Wrong!)</div>
                                <div className="text-xs font-mono p-2 bg-emerald-500/10 rounded">if x &gt; 5: (Correct!)</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 8: Real World Logic Challenge */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Practice</p>
                    <h2 className="text-3xl font-bold">Logic in Local Life</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Card className="p-6 bg-muted/50 border-none rounded-3xl">
                        <h4 className="font-bold flex items-center gap-2 mb-2"><ShieldAlert className="w-4 h-4" /> Security System</h4>
                        <p className="text-xs text-muted-foreground font-mono">
                            IF pin == 1234: <br />
                            &nbsp;&nbsp;Unlock_Door() <br />
                            ELSE: <br />
                            &nbsp;&nbsp;Sound_Alarm()
                        </p>
                    </Card>
                    <Card className="p-6 bg-muted/50 border-none rounded-3xl">
                        <h4 className="font-bold flex items-center gap-2 mb-2"><Play className="w-4 h-4" /> Game Health</h4>
                        <p className="text-xs text-muted-foreground font-mono">
                            IF hp &lt;= 0: <br />
                            &nbsp;&nbsp;Show("Game Over") <br />
                            ELSE: <br />
                            &nbsp;&nbsp;Keep_Playing()
                        </p>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/4")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 5</p>
                        <p className="text-xl font-bold italic">Next: Loops & Repetition</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/6")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 6: Loops ---
function Topic6_Loops() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-loops" className="space-y-24">
            {/* SECTION 1: Introduction to Loops */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Repetition Control</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">The Power of "Again"</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Loops are used to repeat a block of code multiple times. Instead of writing the same instruction 100 times, you can use a loop to tell the computer to repeat the task automatically until a certain condition is met.
                        </p>
                        <Card className="p-4 border-l-4 border-primary bg-muted/50 rounded-r-2xl">
                            <p className="text-sm italic">"Programming is essentially the art of making the computer do the boring, repetitive stuff so you don't have to."</p>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('loop-concept.jpg')}
                                alt="Looping process"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add loop-concept.jpg. Brief: A high-tech circular assembly line with mechanical arms repeating a precise movement.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: For Loops (Known Count) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('for-loop.jpg')}
                                alt="For Loop Visualization"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add for-loop.jpg. Brief: A row of identical boxes being stamped one by one in a perfect sequence.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Iterating Sequences</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The "For" Loop</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            The `for` loop is perfect when you know exactly how many times you want to repeat something. It iterates over a sequence (like a list or a range of numbers).
                        </p>
                        <div className="bg-slate-900 px-6 py-4 rounded-3xl border border-white/10 font-mono text-sm text-emerald-400">
                            for i in range(5):<br />
                            &nbsp;&nbsp;print("Step", i)
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: While Loops (Condition Based) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Dynamic Repetition</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The "While" Loop</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Use a `while` loop when you don't know how many times you'll need to repeat a task. It keeps going **as long as** its condition remains True.
                        </p>
                        <div className="bg-slate-900 px-6 py-4 rounded-3xl border border-white/10 font-mono text-sm text-blue-400">
                            while is_hungry:<br />
                            &nbsp;&nbsp;eat_snack()<br />
                            &nbsp;&nbsp;check_hunger()
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('while-loop.jpg')}
                                alt="While Loop Visualization"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add while-loop.jpg. Brief: A character walking on a treadmill that only stops when a specific light turns green.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Loop Control (Break & Continue) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Advanced Control</p>
                    <h2 className="text-3xl font-semibold text-foreground">Escaping the Loop</h2>
                    <p className="text-foreground/80 mt-4">
                        Sometimes you need to stop a loop early or skip a specific turn. We use `break` and `continue` to do this.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-l-8 border-red-500">
                        <h4 className="text-2xl font-bold mb-4">Break</h4>
                        <p className="text-sm text-muted-foreground">Stops the loop entirely and "breaks" out of it immediately.</p>
                        <div className="mt-6 p-4 bg-muted rounded-xl font-mono text-xs">
                            if light == "RED": <span className="text-red-600 font-bold">break</span>
                        </div>
                    </Card>
                    <Card className="p-8 border-l-8 border-blue-500">
                        <h4 className="text-2xl font-bold mb-4">Continue</h4>
                        <p className="text-sm text-muted-foreground">Skips the current turn and jumps to the next one.</p>
                        <div className="mt-6 p-4 bg-muted rounded-xl font-mono text-xs">
                            if item == "BAD": <span className="text-blue-600 font-bold">continue</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Nesting Loops (Loops in Loops) */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-primary/5 rounded-[50px] p-12 overflow-hidden relative border border-primary/10">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Nested Loops</h2>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                You can put a loop inside another loop! This is like a clock: the "minute hand" loop repeats 60 times for every 1 repetition of the "hour hand" loop.
                            </p>
                            <div className="bg-slate-900/10 p-4 rounded-xl font-mono text-xs border border-primary/20">
                                for hour in range(24):<br />
                                &nbsp;&nbsp;for minute in range(60):<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;print(hour, minute)
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                <div key={i} className="aspect-square bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                                    {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Infinite Loops (The Danger) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-12 border-none bg-red-600 text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                        <ShieldAlert className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                        <h3 className="text-3xl font-bold mb-4">The Infinite Loop Trap</h3>
                        <p className="text-red-100 mb-6 text-sm">
                            If your `while` condition never becomes False, the computer will keep repeating the task forever, eventually freezing your program or overheating your CPU!
                        </p>
                        <div className="bg-black/20 p-4 rounded-2xl font-mono text-xs border border-white/20">
                            while True:<br />
                            &nbsp;&nbsp;print("HELP!")
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground leading-tight">Safety First</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Always ensure your loop has a clear "exit strategy." Changing the variable that the loop checks is usually the way to go.
                        </p>
                        <Button variant="outline" className="rounded-full px-8 h-12 border-red-500 text-red-500 hover:bg-red-50">How to Stop a Crash</Button>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Processing Data */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Loops in the Real World</h2>
                    <p className="text-muted-foreground mt-2">Where do we actually use these?</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto"><MessageSquare className="w-6 h-6" /></div>
                        <h4 className="font-bold">Social Media</h4>
                        <p className="text-xs text-muted-foreground">Loops go through your friends list to see who posted recently.</p>
                    </Card>
                    <Card className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto"><Box className="w-6 h-6" /></div>
                        <h4 className="font-bold">Inventory</h4>
                        <p className="text-xs text-muted-foreground">Scanning every item in a warehouse to find a specific SKU.</p>
                    </Card>
                    <Card className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mx-auto"><Play className="w-6 h-6" /></div>
                        <h4 className="font-bold">Gaming</h4>
                        <p className="text-xs text-muted-foreground">The "Game Loop" repeats 60 times a second to update graphics.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 8: Challenge */}
            <section className="container mx-auto px-4 mb-20">
                <div className="bg-slate-900 text-white rounded-[50px] p-12 text-center relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl font-bold">Topic Challenge: The Countdown</h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-sm">
                            How would you write a loop that counts down from 10 to 1 and then prints "Blast Off!"?
                        </p>
                        <div className="inline-flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 font-mono text-xs text-emerald-300">
                            for i in range(10, 0, -1):<br />
                            &nbsp;&nbsp;print(i)<br />
                            print("Blast Off!")
                        </div>
                    </div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/5")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 6</p>
                        <p className="text-xl font-bold italic">Next: Modules & Functions</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/7")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 7: Functions ---
function Topic7_Functions() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-functions" className="space-y-24">
            {/* SECTION 1: Modular Magic */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Modular Programming</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Reusable Code Blocks</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            A function is a mini-program within your main program. Think of it like a **Recipe**: you write the instructions once, and then you can "call" it anytime you need that specific result.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Box className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">DRY Principle</h4>
                                <p className="text-sm text-muted-foreground">"Don't Repeat Yourself." Functions help keep your code clean.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('function-recipe.jpg')}
                                alt="Function as a recipe"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add function-recipe.jpg. Brief: An infographic comparing a kitchen blender (function) with fruit (input) and smoothie (output).
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Parameters & Arguments */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('parameters.jpg')}
                                alt="Function Parameters"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add parameters.jpg. Brief: A funnel pouring different labeled balls (name, age, color) into a machine slot.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Inputs</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Giving it Data</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Functions can take inputs called **Parameters**. These are like variables that the function needs to do its job.
                        </p>
                        <div className="bg-slate-900 px-6 py-4 rounded-3xl border border-white/10 font-mono text-sm text-emerald-400">
                            def greet(name):<br />
                            &nbsp;&nbsp;print("Hello " + name)
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Return Values */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Outputs</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Getting Results Back</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Sometimes you don't just want a function to print something—you want it to give an answer back to you. We use the **return** keyword for this.
                        </p>
                        <div className="bg-slate-900 px-6 py-4 rounded-3xl border border-white/10 font-mono text-sm text-blue-400">
                            def add(a, b):<br />
                            &nbsp;&nbsp;return a + b<br /><br />
                            result = add(5, 10)
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('return-result.jpg')}
                                alt="Return Output"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add return-result.jpg. Brief: A machine popping out a finished shiny product onto a conveyor belt.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: Scope (Variables' Home) */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Variable Life</p>
                    <h2 className="text-3xl font-semibold text-foreground">Local vs Global Scope</h2>
                    <p className="text-foreground/80 mt-4">
                        Variables created inside a function stay inside! They are "Local" to that function and can't be seen by the rest of the code.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-l-8 border-indigo-500 bg-indigo-500/5">
                        <h4 className="text-2xl font-bold mb-4">Local Scope</h4>
                        <p className="text-sm text-muted-foreground">Like a secret kept inside a house. Only those in the house know it.</p>
                        <div className="mt-6 p-4 bg-muted rounded-xl font-mono text-xs">
                            def house():<br />
                            &nbsp;&nbsp;secret = "I am local"
                        </div>
                    </Card>
                    <Card className="p-8 border-l-8 border-emerald-500 bg-emerald-500/5">
                        <h4 className="text-2xl font-bold mb-4">Global Scope</h4>
                        <p className="text-sm text-muted-foreground">Like a public billboard. Everyone in the program can see and use it.</p>
                        <div className="mt-6 p-4 bg-muted rounded-xl font-mono text-xs">
                            public_msg = "Everyone see me"
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: Built-in Python Tools */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-[50px] p-12 overflow-hidden relative">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Standard Tools</h2>
                            <p className="text-slate-400 italic">"Python comes with batteries included."</p>
                            <p className="text-slate-300">You've already been using functions! `print()`, `input()`, and `len()` are all built-in functions that Python provides for you to use immediately.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {['print()', 'len()', 'input()', 'type()', 'int()', 'str()'].map(f => (
                                <div key={f} className="p-4 bg-white/5 rounded-2xl border border-white/10 font-mono text-sm text-primary text-center">
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Documentation (Docstrings) */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Code as Story</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Explaining Your Tools</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg text-sm">
                            Good coders Write **Docstrings**—special comments inside functions that explain what they do. This is like putting a "User Manual" inside your code.
                        </p>
                        <div className="bg-muted p-4 rounded-3xl border border-border/50 font-mono text-xs">
                            def calculate_tax(price):<br />
                            &nbsp;&nbsp;"""Returns 10% tax on price"""<br />
                            &nbsp;&nbsp;return price * 0.1
                        </div>
                    </div>
                    <Card className="p-12 bg-primary/5 border-none rounded-[40px] flex items-center justify-center">
                        <FileCode className="w-48 h-48 text-primary opacity-20" />
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Calling Functions from Functions */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Complexity</p>
                    <h2 className="text-3xl font-bold">Hierarchy of Code</h2>
                    <p className="text-muted-foreground mt-4">Real apps are built by calling smaller functions inside bigger ones. It's like building with LEGO bricks!</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 bg-muted/30 rounded-3xl space-y-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center font-bold">1</div>
                        <h4 className="font-bold">Simple Logic</h4>
                        <p className="text-xs text-muted-foreground">Small functions that do one thing well.</p>
                    </div>
                    <div className="p-8 bg-muted/30 rounded-3xl space-y-4 border-2 border-primary/20">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center font-bold">2</div>
                        <h4 className="font-bold">Coordination</h4>
                        <p className="text-xs text-muted-foreground">Mid-size functions that run several small ones.</p>
                    </div>
                    <div className="p-8 bg-muted/30 rounded-3xl space-y-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center font-bold">3</div>
                        <h4 className="font-bold">The Bridge</h4>
                        <p className="text-xs text-muted-foreground">The main function that connects everything.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Project: The Calculator */}
            <section className="container mx-auto px-4 mb-20">
                <Card className="p-12 border-none bg-slate-900 text-white rounded-[50px] shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Building Your First Tool</h2>
                            <p className="text-slate-400">Can you create a function that takes two numbers and returns their average? It's the first step to building real calculators!</p>
                            <Button className="rounded-full px-8 h-12 font-bold bg-primary hover:bg-primary/90">Watch Tutorial</Button>
                        </div>
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 font-mono text-sm text-emerald-400">
                            def get_avg(x, y):<br />
                            &nbsp;&nbsp;total = x + y<br />
                            &nbsp;&nbsp;return total / 2
                        </div>
                    </div>
                    <Settings className="absolute -top-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
                </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/6")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 7</p>
                        <p className="text-xl font-bold italic">Next: Errors & Debugging</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/8")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 8: Errors & Debugging ---
function Topic8_Errors() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-errors" className="space-y-24">
            {/* SECTION 1: Introduction to Errors */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Problem Solving</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">What are Code Errors?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            No programmer writes perfect code on the first try. Errors, often called **"bugs,"** are mistakes in a program that prevent it from running correctly. Learning to find and fix these errors is a core part of being a developer.
                        </p>
                        <Card className="p-4 border-l-4 border-red-500 bg-red-500/5 rounded-r-2xl">
                            <p className="text-sm italic">"If debugging is the process of removing software bugs, then programming must be the process of putting them in." — Edsger Dijkstra</p>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('bug-concept.jpg')}
                                alt="Code Bug Concept"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add bug-concept.jpg. Brief: A magnifying glass looking at a code line with a small mechanical bug.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Types of Errors */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">The Three Categories</p>
                    <h2 className="text-3xl font-semibold text-foreground">Syntax, Runtime, and Logic</h2>
                    <p className="text-foreground/80 mt-4">
                        Errors usually fall into one of three main categories. Knowing which one you're facing is half the battle.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-8 border border-border/70 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-red-500 mb-3">Syntax Error</h3>
                        <p className="text-sm text-foreground/70 mb-6">Grammar mistakes. The computer doesn't understand the "spelling" of your code.</p>
                        <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs text-emerald-400">print("Hello" <span className="text-red-500 font-bold">← No )</span></div>
                    </Card>
                    <Card className="p-8 border border-border/70 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Runtime Error</h3>
                        <p className="text-sm text-foreground/70 mb-6">The code looks fine, but crashes while running because of an impossible task.</p>
                        <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs text-orange-400">10 / 0 <span className="text-red-500 font-bold">← ZeroDiv</span></div>
                    </Card>
                    <Card className="p-8 border border-border/70 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-blue-500 mb-3">Logic Error</h3>
                        <p className="text-sm text-foreground/70 mb-6">The code runs fine, but the result is wrong (e.g., a map that points North instead of South).</p>
                        <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs text-blue-400">age = age - 1 <span className="text-red-500 font-bold">← Math error</span></div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: Decoding Error Messages */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                            <img
                                src={getImageUrl('traceback-guide.jpg')}
                                alt="Error Traceback Guide"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add traceback-guide.jpg. Brief: An annotated image of a Python Traceback showing line number and error name.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Reading the Map</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Deciphering the "Red Text"</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            When an error occurs, Python prints a **Traceback**. This is a report that tells you exactly which file and which line number caused the problem.
                        </p>
                        <div className="p-6 bg-muted/50 rounded-3xl border border-border/50">
                            <h4 className="font-bold mb-2 flex items-center gap-2"><Bug className="w-4 h-4 text-red-500" /> Pro Tip</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">The last line of the error message usually contains the name (like <code className="font-mono text-red-500">NameError</code>) and the most important description.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: The Debugging Process */}
            <section className="container mx-auto px-4">
                <Card className="p-12 md:p-16 rounded-[50px] border border-border/70 bg-primary/5 overflow-hidden relative">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">How to Debug Like a Pro</h2>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                follow these steps when you get stuck:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { step: "Read carefully", desc: "Don't panic! Check the line number first." },
                                    { step: "Isolate", desc: "Test only the problematic section on its own." },
                                    { step: "Print values", desc: "Add print() calls to see what's happening inside variables." },
                                    { step: "Rubber Duck", desc: "Explain your logic out loud to a rubber duck (or a friend)." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                                        <div>
                                            <p className="font-bold text-sm">{item.step}</p>
                                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video bg-muted rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={getImageUrl('duck-debugging.jpg')}
                                alt="Rubber Duck Debugging"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add duck-debugging.jpg. Brief: A small rubber duck sitting on a desk next to a laptop.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </Card>
            </section>

            {/* SECTION 5: Defensive Coding */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Prevention</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Shielding Your Program</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            The best way to fix a bug is to prevent it from ever happening. **Defensive Coding** is the practice of writing code that handles unexpected inputs or strange situations without breaking.
                        </p>
                        <div className="flex gap-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                            <ShieldAlert className="w-8 h-8 text-emerald-500 shrink-0" />
                            <div>
                                <p className="font-bold text-sm">Input Validation</p>
                                <p className="text-xs text-muted-foreground">Always check if a user gave you the right type of data before processing it.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('defensive-coding.jpg')}
                                alt="Defensive Coding Concept"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add defensive-coding.jpg. Brief: A shield icon over a code screen, representing protection and safety.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: The Online Lifeline */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Research Skills</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Leveraging Knowledge</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg text-sm">
                            Professional developers spend half their time searching for answers. Learning how to search for errors on sites like **Stack Overflow** or reading official **Python Documentation** is a critical skill.
                        </p>
                        <div className="bg-slate-900 p-6 rounded-3xl border border-white/10">
                            <p className="text-xs text-emerald-400 font-mono italic"># How to search like a pro:<br />"Python NameError: name 'x' is not defined"</p>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-xl">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('documentation-search.jpg')}
                                alt="Searching for answers"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add documentation-search.jpg. Brief: A laptop screen showing search results for a code error with helpful icons.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Code Review */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-[50px] p-12 overflow-hidden relative border border-white/5">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Two Eyes are Better</h2>
                            <p className="text-slate-400">
                                When you’ve been looking at the same code for hours, your brain starts to "auto-correct" mistakes. A fresh perspective from a friend or colleague can spot errors in seconds.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-primary">
                                    <MessageSquare className="w-4 h-4" /> Discussion
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-primary">
                                    <CheckCircle className="w-4 h-4" /> Validation
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden grayscale opacity-50">
                            <img
                                src={getImageUrl('code-review.jpg')}
                                alt="Developers reviewing code"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add code-review.jpg. Brief: Two people looking at a computer monitor and pointing at code together.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Professional Backups */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                        <GitBranch className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">The Power of "Undo"</h2>
                    <p className="text-xl text-foreground/80 leading-relaxed italic">
                        "I had it working, and then I changed one thing and now everything is broken!"
                    </p>
                    <p className="text-foreground/70">
                        Professional programmers use tools like **Git** to save "checkpoints" of their work. If a new edit breaks everything, they can simply "rewind" to the last version that worked perfectly. It's the ultimate safety net for every developer.
                    </p>
                    <Button size="lg" variant="secondary" className="rounded-full px-12 h-14 font-bold border-2 border-primary/20">Explore Version Control</Button>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/7")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 8</p>
                        <p className="text-xl font-bold italic">Next: Your First Program</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/9")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}


// --- TOPIC 9: Writing First Program ---
function Topic9_FirstProgram() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-first-program" className="space-y-24">
            {/* SECTION 1: The Tradition */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Kickstarting Your Journey</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Hello, World!</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Every coder begins their journey with one simple command: printing "Hello, World!" to the screen. It is the universal signal that your programming environment is ready to build something amazing.
                        </p>
                        <div className="bg-slate-900 p-6 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                            <Terminal className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 group-hover:scale-110 transition-transform" />
                            <code className="relative z-10 font-mono text-emerald-400 text-lg">print("Hello, World!")</code>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('hello-world-visual.jpg')}
                                alt="Hello World Code Visual"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add hello-world-visual.jpg. Brief: A creative typography visual of "Hello World" in safe code colors.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Building Blocks */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Core Skills</p>
                    <h2 className="text-3xl font-semibold text-foreground">Interactive Logic</h2>
                    <p className="text-foreground/80 mt-4">
                        Modern apps are just combinations of input, math, and comparison. Let's see how these blocks fit together.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-10 border border-border/70 hover:shadow-xl transition-all bg-secondary/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Calculator className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">The Simple Calculator</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">Takes two numbers and adds them together.</p>
                        <div className="bg-slate-900 p-6 rounded-2xl font-mono text-sm text-emerald-400 space-y-2 border border-white/5">
                            <p>num1 = <span className="text-orange-400">input</span>("Enter X: ")</p>
                            <p>num2 = <span className="text-orange-400">input</span>("Enter Y: ")</p>
                            <p>print("Total:", int(num1) + int(num2))</p>
                        </div>
                    </Card>
                    <Card className="p-10 border border-border/70 hover:shadow-xl transition-all bg-primary/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Box className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Simple Comparison</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">Checks if something is greater or equal.</p>
                        <div className="bg-slate-900 p-6 rounded-2xl font-mono text-sm text-emerald-400 space-y-2 border border-white/5">
                            <p>score = 85</p>
                            <p>if score {'>'} 50:</p>
                            <p className="pl-4">print("You Passed!")</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: User Interaction */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                            <img
                                src={getImageUrl('interactive-app.jpg')}
                                alt="Interactive App logic"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add interactive-app.jpg. Brief: An image of a chat interface or a user login screen.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Engagement</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Making It Alive</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg text-sm">
                            The <code className="font-mono text-primary">input()</code> function is how programs listen. It pauses the program and waits for the user to type something. By storing this in a **Variable**, you create a dynamic experience!
                        </p>
                        <div className="flex gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs text-muted-foreground italic">"Hello " + name creates a personalized greeting for every visitor.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Your First Coding Project */}
            <section className="container mx-auto px-4">
                <Card className="p-12 md:p-16 border-none bg-slate-900 text-white rounded-[60px] shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold">The Number Guessing Game</h2>
                            <p className="text-slate-400 text-lg">
                                Ready for a challenge? Use everything you've learned to build a simple game where the user has to guess a secret number.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs font-bold text-primary">✓ Variables</div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs font-bold text-primary">✓ Input</div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs font-bold text-primary">✓ Conditions</div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs font-bold text-primary">✓ Logic</div>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                            <img
                                src={getImageUrl('guessing-game.jpg')}
                                alt="First Project Logic"
                                className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-80"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add guessing-game.jpg. Brief: A creative visual showing a "???" box and high/low indicators.
                                            </div>`;
                                    }
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-16 h-16 text-white fill-white" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                </Card>
            </section>

            {/* SECTION 5: Writing for Humans */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Documentation</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">The Coder's Note: Comments</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Code is written for computers, but **Comments** are for humans. In Python, anything after a `#` symbol is ignored by the computer. These are "love letters" to your future self.
                        </p>
                        <Card className="p-6 bg-muted/50 rounded-2xl border border-border/50 font-mono text-sm border-l-4 border-l-primary">
                            <p className="text-slate-500"># This line calculates the final price</p>
                            <p className="text-foreground">total = price * 1.2</p>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 lg:order-1 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('code-comments.jpg')}
                                alt="Code with comments"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add code-comments.jpg. Brief: An image showing lines of code with some lines appearing as light, faded text (comments).
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: The Art of Clean Code */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Best Practices</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Style Matters</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg text-sm">
                            Programming is as much an art as it is a science. **Clean Code** means using clear variable names (like `user_age` instead of `x`) and proper indentation. Beautiful, organized code is easier to fix and share.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {['Good Naming', 'Spacing', 'Indentation', 'Readability'].map(t => (
                                <div key={t} className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-500/5 px-4 py-2 rounded-full border border-emerald-500/10">
                                    <CheckCircle className="w-3 h-3" /> {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-xl">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('clean-code.jpg')}
                                alt="Beautifully formatted code"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add clean-code.jpg. Brief: A sleek, modern code editor showing perfectly indented and color-coded text.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: Behind the Scenes */}
            <section className="container mx-auto px-4">
                <div className="bg-primary text-primary-foreground rounded-[50px] p-12 overflow-hidden relative shadow-2xl">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">The Magic of Interpretation</h2>
                            <p className="text-primary-foreground/80 text-lg">How does text become a running app? The **Interpreter** reads your Python code line-by-line and translates it into instructions the CPU can understand.</p>
                            <div className="flex gap-4 items-center font-mono text-sm pt-4">
                                <FileCode className="w-8 h-8 opacity-50" />
                                <ArrowRight className="w-6 h-6" />
                                <div className="bg-white/20 px-4 py-2 rounded-lg">Interpreter</div>
                                <ArrowRight className="w-6 h-6" />
                                <Cpu className="w-8 h-8 opacity-50" />
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <img
                                src={getImageUrl('interpreter-process.jpg')}
                                alt="How code runs"
                                className="w-full h-full object-cover rounded-xl"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add interpreter-process.jpg. Brief: An infographic showing code entering a "gears" box and exiting as 1s and 0s.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
            </section>

            {/* SECTION 8: Sharing Your Creation */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Coder's Impact</p>
                    <h2 className="text-4xl font-bold leading-tight">Beyond Your Computer</h2>
                    <p className="text-xl text-foreground/70 leading-relaxed">
                        Coding isn't just about writing; it's about sharing. From hosting your first website to publishing an app on the store, your code can reach millions. This is where your journey as a creator truly begins.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-10 h-14 font-bold shadow-xl shadow-primary/20">Publish Project</Button>
                        <Button size="lg" variant="outline" className="rounded-full px-10 h-14 font-bold">View Showcase</Button>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 group" onClick={() => navigate("/module/18/topic/8")}>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Topic
                    </Button>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">End of Topic 9</p>
                        <p className="text-xl font-bold italic">Next: Future & Careers</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto gap-4 rounded-2xl px-12 h-16 shadow-xl shadow-primary/20 group" onClick={() => navigate("/module/18/topic/10")}>
                        Next Topic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
    );
}


// --- TOPIC 10: Future & Careers ---
function Topic10_Careers() {
    const navigate = useNavigate();

    const getImageUrl = (imageName: string) => {
        try {
            return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
            return `/src/assets/module-media/${imageName}`;
        }
    };

    return (
        <div id="topic-careers" className="space-y-24">
            {/* SECTION 1: Introduction */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Big Picture</p>
                        <h2 className="text-4xl font-semibold text-foreground leading-tight">Where can Coding take you?</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Learning to code isn't just about getting a job; it's about gaining a superpower. In the digital age, software is the foundation of almost every industry on Earth, from medicine to space exploration.
                        </p>
                        <Card className="p-6 bg-primary/5 border border-primary/10 rounded-3xl">
                            <div className="flex gap-4">
                                <Brain className="w-6 h-6 text-primary shrink-0" />
                                <p className="text-sm text-foreground/70 italic">"Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them." — Steve Jobs</p>
                            </div>
                        </Card>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-2xl">
                        <div className="relative w-full aspect-square bg-muted">
                            <img
                                src={getImageUrl('future-tech.jpg')}
                                alt="Future Technology"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add future-tech.jpg. Brief: A futuristic city-scape with digital lines and floating holographic icons.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: Specializations */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Career Paths</p>
                    <h2 className="text-3xl font-semibold text-foreground">Find Your Passion</h2>
                    <p className="text-foreground/80 mt-4">Programming is a vast field. Which area sparks your curiosity?</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Web Dev", icon: <Globe />, desc: "Building the sites and apps people use every day." },
                        { title: "AI Engineer", icon: <Cpu />, desc: "Teaching computers to learn and make decisions." },
                        { title: "Data Science", icon: <Briefcase />, desc: "Using data to predict the future and find trends." },
                        { title: "Cybersecurity", icon: <Settings />, desc: "Protecting information and keeping the internet safe." }
                    ].map((item, i) => (
                        <Card key={i} className="p-8 border border-border/70 group hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-6 text-primary p-3 bg-primary/5 w-fit rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SECTION 3: Ethics in Tech */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-lg lg:order-1">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('tech-ethics.jpg')}
                                alt="Ethics in Computing"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add tech-ethics.jpg. Brief: A digital balance scale with a code bracket on one side and a human heart icon.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Responsibility</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Ethics & The Coder</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            As you build new tools, remember that code affects real people. From privacy to bias in algorithms, developers have a responsibility to build software that is **Fair**, **Safe**, and **Helpful**.
                        </p>
                        <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 flex gap-4">
                            <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                            <p className="text-xs text-muted-foreground italic">"With great power comes great responsibility. The code you write today could be used by millions tomorrow."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Soft Skills */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-[50px] p-12 md:p-16 overflow-hidden relative border border-white/5">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Human Side</p>
                            <h2 className="text-4xl font-bold">More Than Just Typing</h2>
                            <p className="text-slate-400 text-lg">
                                The best developers are also great communicators. Programming is a team sport that requires empathy and clear explanation.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-primary">Collaboration</div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-primary">Empathy</div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-primary">Teaching</div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={getImageUrl('soft-skills.jpg')}
                                alt="Teamwork in Tech"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add soft-skills.jpg. Brief: A diverse group of people collaborating around a table with laptops.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
                </div>
            </section>

            {/* SECTION 5: Open Source & Contribution */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 lg:order-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Code Economy</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Open Source & Git</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Software isn't just built; it's shared. **Open Source** means the code is public for anyone to improve. Developers use tools like **Git** to track changes and **GitHub** to collaborate on massive projects like Linux or React.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="p-4 bg-muted/50 rounded-2xl border border-border/50">
                                <GitBranch className="w-6 h-6 text-primary mb-2" />
                                <h4 className="font-bold text-sm">Version Control</h4>
                                <p className="text-xs text-muted-foreground">Like a time machine for your code.</p>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-2xl border border-border/50">
                                <Globe className="w-6 h-6 text-primary mb-2" />
                                <h4 className="font-bold text-sm">Contribution</h4>
                                <p className="text-xs text-muted-foreground">Fixing bugs in other people's code.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 lg:order-1 shadow-lg">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl('open-source.jpg')}
                                alt="Open Source Collaboration"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add open-source.jpg. Brief: A visualization of a "Pull Request" or a tree of code branches merging together.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: Portfolio Building */}
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Proof of Skill</p>
                        <h2 className="text-3xl font-semibold text-foreground leading-tight">Build, Show, Tell</h2>
                        <p className="text-foreground/80 leading-relaxed text-lg text-sm">
                            The tech industry cares more about what you can *do* than what degrees you have. Start building small projects and sharing them on platforms like **GitHub**. Your portfolio is your real resume.
                        </p>
                        <Alert className="bg-primary/5 border-primary/20 rounded-2xl">
                            <Lightbulb className="w-4 h-4 text-primary" />
                            <AlertDescription className="text-xs text-foreground/70">Assignment: Upload your Number Guessing Game to GitHub tonight!</AlertDescription>
                        </Alert>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[40px] border border-border/70 shadow-xl">
                        <div className="relative w-full aspect-[4/3] bg-muted">
                            <img
                                src={getImageUrl('portfolio-visual.jpg')}
                                alt="Portfolio Project"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add portfolio-visual.jpg. Brief: A creative desktop layout showing multiple project windows.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 7: The Technical Roadmap */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">What's Next?</p>
                        <h2 className="text-3xl font-bold">The Learning Roadmap</h2>
                        <p className="text-muted-foreground mt-2">You've mastered the basics. Now, choose your specialization.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-8 border border-border/70 text-center hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-primary">1</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Frontend</h4>
                            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">Focus on what users see. Build beautiful web interfaces.</p>
                            <div className="text-xs font-mono text-foreground/70 p-3 bg-muted rounded-xl">
                                HTML • CSS • React
                            </div>
                        </Card>
                        <Card className="p-8 border border-border/70 text-center hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-primary">2</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Backend</h4>
                            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">Focus on data and logic. Power the server engine.</p>
                            <div className="text-xs font-mono text-foreground/70 p-3 bg-muted rounded-xl">
                                SQL • Node.js • APIs
                            </div>
                        </Card>
                        <Card className="p-8 border border-border/70 text-center hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-primary">3</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Full Stack</h4>
                            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">Master both worlds. Build entire applications solo.</p>
                            <div className="text-xs font-mono text-foreground/70 p-3 bg-muted rounded-xl">
                                Architecture • Cloud
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}




// --- MAIN MODULE COMPONENT ---
export default function Module18() {
    const { topicId } = useParams();

    // Simple router for sub-topics
    const renderTopic = () => {
        switch (topicId) {
            case 'm18-t1': return <Topic1_WhatIsProgramming />;
            case 'm18-t2': return <Topic2_ProgrammingLanguages />;
            case 'm18-t3': return <Topic3_PythonBasics />;
            case 'm18-t4': return <Topic4_LogicalThinking />;
            case 'm18-t5': return <Topic5_Conditions />;
            case 'm18-t6': return <Topic6_Loops />;
            case 'm18-t7': return <Topic7_Functions />;
            case 'm18-t8': return <Topic8_Errors />;
            case 'm18-t9': return <Topic9_FirstProgram />;
            case 'm18-t10': return <Topic10_Careers />;

            // Legacy/Number fallback
            case '1': return <Topic1_WhatIsProgramming />;
            case '2': return <Topic2_ProgrammingLanguages />;
            case '3': return <Topic3_PythonBasics />;
            case '4': return <Topic4_LogicalThinking />;
            case '5': return <Topic5_Conditions />;
            case '6': return <Topic6_Loops />;
            case '7': return <Topic7_Functions />;
            case '8': return <Topic8_Errors />;
            case '9': return <Topic9_FirstProgram />;
            case '10': return <Topic10_Careers />;
            default: return <Topic1_WhatIsProgramming />;
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {renderTopic()}
        </div>
    );
}

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft, ArrowRight, Brain, Zap, Globe, Microscope, AlertTriangle, LockIcon } from "lucide-react";
import { motion } from "framer-motion";

const Topic1WhatIsQuantum = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-what-is-quantum" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The New Era</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        What is <span className="text-primary">Quantum Computing?</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        A new type of computing that works very differently from the computers we use every day. To understand it, we must first look at how normal computers work.
                    </p>
                </div>
            </section>

            {/* SECTION 2: DEFINITION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Definition
                        </div>
                        <h3 className="text-3xl font-bold">Physics of the Very Small</h3>
                        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-xl italic text-foreground/90">
                                "Quantum computing uses the behavior of tiny particles (atoms, electrons) to process information in a powerful new way."
                            </p>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Normal computers follow the rules of <strong>Classical Physics</strong> (things we see). Quantum computers follow <strong>Quantum Physics</strong> (how atoms behave).
                        </p>
                    </div>
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 flex flex-col items-center justify-center h-[300px]">
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/50 animate-[spin_8s_linear_infinite_reverse]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-[0_0_30px_rgba(var(--primary),0.8)] animate-pulse"></div>
                            {/* Orbiting particles */}
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                        <p className="mt-4 text-sm font-mono text-muted-foreground">Quantum Mechanics</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: CLASSICAL COMPUTING */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/50 rounded-3xl p-8 md:p-12 border border-border">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-2">First: Classical Computing</h3>
                        <p className="text-muted-foreground">The devices we use every day (Phones, Laptops).</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-2xl mb-4">💻</div>
                            <h4 className="font-bold mb-2">The Unit: Bits</h4>
                            <p className="text-sm text-muted-foreground">Can be <strong>0 or 1</strong> (Off or On).</p>
                        </Card>
                        <Card className="p-6">
                            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-2xl mb-4">➡️</div>
                            <h4 className="font-bold mb-2">The Method</h4>
                            <p className="text-sm text-muted-foreground">step-by-step. Checks one possibility at a time.</p>
                        </Card>
                        <Card className="p-6">
                            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-2xl mb-4">✅</div>
                            <h4 className="font-bold mb-2">The Strength</h4>
                            <p className="text-sm text-muted-foreground">Reliable, stable, perfect for daily tasks.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: QUANTUM COMPUTING */}
            <section className="container mx-auto px-4">
                <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-2 text-primary">Second: Quantum Computing</h3>
                        <p className="text-muted-foreground">The future of calculation.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border-primary/20 bg-primary/5">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl mb-4">⚛️</div>
                            <h4 className="font-bold mb-2 text-primary">The Unit: Qubits</h4>
                            <p className="text-sm text-foreground">Can be <strong>0, 1, or Both</strong> at once (Superposition).</p>
                        </Card>
                        <Card className="p-6 border-primary/20 bg-primary/5">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl mb-4">⚡</div>
                            <h4 className="font-bold mb-2 text-primary">The Method</h4>
                            <p className="text-sm text-foreground">Explore <strong>all possibilities</strong> at the same time.</p>
                        </Card>
                        <Card className="p-6 border-primary/20 bg-primary/5">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl mb-4">🚀</div>
                            <h4 className="font-bold mb-2 text-primary">The Strength</h4>
                            <p className="text-sm text-foreground">Solves specific complex problems instantly.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: WHY IT EXISTS */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold">Why Do We Need This?</h3>
                        <p className="text-lg text-muted-foreground mt-4">Basically, classical computers hit a wall with complexity.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 border rounded-2xl space-y-4">
                            <h4 className="font-bold text-xl">The "Book" Analogy</h4>
                            <div className="flex gap-4 items-center p-4 bg-muted rounded-xl">
                                <div className="text-3xl">📖</div>
                                <div className="text-sm">
                                    <span className="font-bold block">Classical:</span>
                                    Reads page by page to find a name. Slow for big books.
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-4 bg-primary/10 border border-primary/20 rounded-xl">
                                <div className="text-3xl">⚡</div>
                                <div className="text-sm">
                                    <span className="font-bold block text-primary">Quantum:</span>
                                    Looks at many pages at once. Finds it instantly.
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border rounded-2xl space-y-4">
                            <h4 className="font-bold text-xl">Unsolvable Problems</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Simulating new medicines (Drug Discovery)</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cracking complex codes (Encryption)</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Finding optimized routes for millions of trucks</li>
                            </ul>
                            <p className="text-xs bg-muted p-2 rounded">"Even the fastest supercomputer struggles with these."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: IMPORTANT NOTE */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 flex gap-4 items-start max-w-3xl mx-auto">
                    <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-orange-700 dark:text-orange-400">Important Beginner Understanding</h4>
                        <p className="text-sm text-orange-800 dark:text-orange-300 mt-1">
                            Quantum computers will <strong>NOT</strong> replace your laptop. They are not good for browsing, gaming, or watching videos. They are special machines for special scientific problems.
                        </p>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="ghost" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 opacity-50 cursor-not-allowed">
                        <ArrowLeft className="w-4 h-4" /> No Previous Topic
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 1 of 6</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/2")}>
                        Next: Qubits <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic2Qubits = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-qubits" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO & IMPORTANCE */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Core Concept</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        <span className="text-primary">Qubits</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        The heart of quantum computing. Just as bits are the atoms of classical information, Qubits are the building blocks of the quantum universe.
                    </p>
                </div>
            </section>

            {/* SECTION 2: DEFINITION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Definition
                        </div>
                        <h3 className="text-3xl font-bold">What is a Qubit?</h3>
                        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-xl italic text-foreground/90">
                                "A qubit (quantum bit) is the basic unit of information in a quantum computer. It can represent significantly more information than a classical bit."
                            </p>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Understanding qubits is essential to understanding how quantum computers "think". They aren't just faster versions of bits; they work on entirely different laws of physics.
                        </p>
                    </div>
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 flex flex-col items-center justify-center h-[300px]">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                                <span className="text-4xl font-bold text-primary">|ψ⟩</span>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-background border border-border px-3 py-1 rounded-full text-xs font-mono shadow-sm">
                                Quantum State
                            </div>
                        </div>
                        <p className="mt-8 text-sm font-mono text-muted-foreground">The Fundamental Unit</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: BIT VS QUBIT */}
            <section className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-8 text-center">Classical Bit vs. Quantum Bit</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-8 border-l-4 border-l-muted-foreground/50 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-xl font-bold text-muted-foreground">Classical Bit</h4>
                            <div className="px-3 py-1 bg-muted rounded-full text-xs font-mono">Classical</div>
                        </div>
                        <div className="flex gap-4 mb-6 justify-center">
                            <div className="w-16 h-16 rounded bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground border-2 border-transparent">0</div>
                            <div className="flex items-center text-sm text-muted-foreground font-bold">OR</div>
                            <div className="w-16 h-16 rounded bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground border-2 border-transparent">1</div>
                        </div>
                        <p className="text-center text-muted-foreground">Restricted to a single state at any one time.</p>
                    </Card>

                    <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-all bg-primary/5">
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-xl font-bold text-primary">Quantum Bit (Qubit)</h4>
                            <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono">Quantum</div>
                        </div>
                        <div className="flex gap-4 mb-6 justify-center relative">
                            <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary">0</div>
                            <div className="flex items-center text-sm text-primary font-bold">+</div>
                            <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary">1</div>
                            <div className="absolute inset-0 bg-primary/5 blur-xl -z-10 rounded-full"></div>
                        </div>
                        <p className="text-center text-foreground font-medium">Can be 0, 1, or <span className="text-primary italic">both at once</span>.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: SUPERPOSITION */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 dark:bg-black rounded-[40px] p-8 md:p-16 border border-slate-800 text-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-8 h-8 text-yellow-400" />
                            <h3 className="text-3xl md:text-4xl font-bold">Superposition</h3>
                        </div>
                        <h4 className="text-xl font-light text-slate-300 mb-8 leading-relaxed">
                            Instead of being only 0 or 1, a qubit can be <strong className="text-white">partly 0</strong> and <strong className="text-white">partly 1</strong> at the same time.
                        </h4>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md">
                                <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">Concept</p>
                                <p className="font-medium">Existing in multiple states simultaneously.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md">
                                <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">Power</p>
                                <p className="font-medium">Allows exploration of many solution paths at once.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: ANALOGY - COIN */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <Badge variant="outline" className="mb-4">Visual Analogy</Badge>
                        <h2 className="text-3xl font-bold">The Spinning Coin</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-center justify-center p-8 bg-muted/20 rounded-full aspect-square border-2 border-dashed border-border relative">
                            <div className="absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full border-t-2 border-primary opacity-20"></div>
                            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center text-4xl font-bold text-yellow-900 animate-[spin_0.5s_linear_infinite]">
                                $
                            </div>
                            <p className="mt-8 font-mono text-sm text-muted-foreground">Spinning = Superposition</p>
                        </div>

                        <div className="space-y-6">
                            <Card className="p-6">
                                <h4 className="font-bold mb-2 flex items-center gap-2">
                                    <span className="text-lg">🪙</span>
                                    State 1: Stationary
                                </h4>
                                <p className="text-sm text-muted-foreground">Like a classical bit. It is definitely Heads OR definitely Tails.</p>
                            </Card>

                            <Card className="p-6 border-primary/50 bg-primary/5">
                                <h4 className="font-bold mb-2 flex items-center gap-2 text-primary">
                                    <span className="text-lg animate-spin">🪙</span>
                                    State 2: Spinning
                                </h4>
                                <p className="text-sm text-foreground">Like a Qubit. It is not Heads, it is not Tails. It is a mix of both until it lands.</p>
                            </Card>

                            <div className="p-4 bg-muted rounded-lg text-sm text-center">
                                "Only when it lands (measurement) do we see the result."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: WHY IT MATTERS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="order-2 md:order-1 flex items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">Why Superposition Matters?</h3>
                            <p className="text-lg text-muted-foreground">
                                Because a single qubit can represent multiple possibilities, and multiple qubits can represent <strong>many possibilities at once</strong>.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Exponential increase in information capacity",
                                    "Ability to check multiple solutions simultaneously",
                                    "Massive parallel processing power"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <Card className="h-full min-h-[250px] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white p-8">
                            <div className="text-center space-y-4">
                                <Brain className="w-16 h-16 mx-auto opacity-80" />
                                <p className="text-2xl font-bold">Parallel Intelligence</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 7: PROBABILITIES & MEASUREMENT */}
            <section className="container mx-auto px-4">
                <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                    <div className="p-10">
                        <div className="flex items-center gap-3 mb-8">
                            <Microscope className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold">The Act of Measurement</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="col-span-2 space-y-4">
                                <p className="text-lg leading-relaxed">
                                    In quantum computing, measurement changes everything. A qubit stays in superposition only as long as we don't look at it. Once measured, it <strong>collapses</strong>.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 bg-muted rounded-lg text-center">
                                        <div className="text-3xl font-bold text-blue-500 mb-1">70%</div>
                                        <div className="text-xs text-muted-foreground uppercase">Chance of 0</div>
                                    </div>
                                    <div className="p-4 bg-muted rounded-lg text-center">
                                        <div className="text-3xl font-bold text-pink-500 mb-1">30%</div>
                                        <div className="text-xs text-muted-foreground uppercase">Chance of 1</div>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground pt-2">
                                    *These probabilities are controlled by quantum operations *before* measurement.
                                </p>
                            </div>
                            <div className="bg-muted/30 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                                <AlertTriangle className="w-10 h-10 text-orange-500 mb-4" />
                                <h4 className="font-bold mb-2">Important Clarification</h4>
                                <p className="text-sm text-muted-foreground">
                                    Quantum computers do <strong>not</strong> give random answers. They use probabilities in a <strong>controlled mathematical way</strong> to maximize the chance of the correct answer.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 8: BLOCH SPHERE */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] w-full bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden border border-slate-800">
                        {/* Simple CSS representation of Bloch Sphere */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f172a_100%)] z-10"></div>
                        <div className="w-64 h-64 rounded-full border border-blue-500/30 relative animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div> {/* North Pole */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-500 rounded-full"></div> {/* South Pole */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-500/10 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-blue-500/10"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-blue-500/10"></div>

                            {/* Vector */}
                            <div className="absolute top-1/2 left-1/2 w-[1px] h-32 bg-red-500 origin-bottom transform -rotate-45 -translate-y-full shadow-[0_0_5px_red]"></div>
                        </div>
                        <div className="absolute top-8 text-white font-mono">|0⟩</div>
                        <div className="absolute bottom-8 text-slate-400 font-mono">|1⟩</div>
                        <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-mono">Simplified Bloch Model</div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                            <Globe className="w-3 h-3" /> Visual Model
                        </div>
                        <h3 className="text-3xl font-bold">The Bloch Sphere</h3>
                        <p className="text-lg text-foreground/80">
                            A visual model used to understand qubit states. Think of it like a <strong>3D Globe</strong>.
                        </p>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                                <p><strong className="text-foreground">North Pole:</strong> Represents state |0⟩</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                                <p><strong className="text-foreground">South Pole:</strong> Represents state |1⟩</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                                <p><strong className="text-foreground">Any Point Between:</strong> Represents a superposition state.</p>
                            </li>
                        </ul>
                        <p className="text-sm bg-muted p-4 rounded-lg">
                            It helps us see how qubits rotate between states during calculations.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 9: REAL WORLD & SUMMARY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 bg-muted/30">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Microscope className="w-5 h-5" /> Physical Realization
                        </h4>
                        <p className="text-muted-foreground mb-4">In the real world, qubits are made using extreme technology:</p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Trapped Ions</Badge>
                            <Badge variant="secondary">Superconducting Circuits</Badge>
                            <Badge variant="secondary">Photons</Badge>
                        </div>
                    </Card>

                    <Card className="p-8 bg-destructive/5 border-destructive/10">
                        <h4 className="font-bold text-lg mb-4 text-destructive flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> Challenges
                        </h4>
                        <p className="text-muted-foreground">
                            Qubits are extremely sensitive and easily disturbed by their environment (noise, heat), leading to errors.
                        </p>
                    </Card>
                </div>

                <div className="text-center max-w-2xl mx-auto space-y-8">
                    <h3 className="text-2xl font-bold">Module Checkpoint</h3>
                    <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                        <ul className="text-left space-y-4">
                            {[
                                "Qubits are the basic units of quantum computers.",
                                "They use superposition to represent multiple states at once.",
                                "Measurement collapses the qubit into a definite 0 or 1.",
                                "Probabilities guide which outcome we get.",
                                "The Bloch Sphere helps us visualize these states."
                            ].map((point, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium text-foreground/90">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/1")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Intro
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 2 of 6</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/3")}>
                        Next: Quantum Gates <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic3QuantumGates = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-quantum-gates" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Core Operations</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum <span className="text-primary">Gates</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        Just as classical computers use logic gates to process bits, quantum computers use quantum gates to manipulate qubits. They are the actions that drive computation.
                    </p>
                </div>
            </section>

            {/* SECTION 2: DEFINITION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Definition
                        </div>
                        <h3 className="text-3xl font-bold">What is a Quantum Gate?</h3>
                        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-xl italic text-foreground/90">
                                "A quantum gate is an operation that changes the state, direction, or probability of a qubit. It rotates the qubit on the Bloch sphere."
                            </p>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Think of them as instructions. Without gates, qubits would just sit there. Gates tell them <strong>how to evolve</strong>.
                        </p>
                    </div>
                    {/* Visual: Gate Operation */}
                    <Card className="p-8 bg-slate-950 border-slate-800 flex flex-col items-center justify-center h-[300px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-16 h-16 rounded-full border-2 border-slate-600 flex items-center justify-center text-slate-400 font-mono">|0⟩</div>
                            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                            <div className="w-24 h-24 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-lg flex items-center justify-center text-primary font-bold shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                                GATE
                            </div>
                            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white font-bold font-mono shadow-[0_0_15px_white]">|1⟩</div>
                        </div>
                        <p className="mt-8 text-sm font-mono text-slate-500">Input → Operation → New State</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: CLASSICAL VS QUANTUM GATES */}
            <section className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-8 text-center">Classical vs. Quantum Gates</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Card className="p-6">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="text-muted-foreground">01</span> Classical Gates
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Work on bits (0 or 1)</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Deterministic outcome</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Irreversible (usually)</li>
                        </ul>
                    </Card>
                    <Card className="p-6 border-primary/20 bg-primary/5">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-primary">
                            <span>⚛️</span> Quantum Gates
                        </h4>
                        <ul className="space-y-3 text-sm text-foreground">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Work on qubits</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Probabilistic outcome</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Reversible (Physics law)</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: NOT GATE */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-500/10 rounded-lg text-red-500 font-bold">X</div>
                                <h3 className="text-2xl font-bold">The Quantum NOT Gate</h3>
                            </div>
                            <p className="text-lg">
                                Also known as the <strong className="text-primary">Pauli-X Gate</strong>. It acts like a classical NOT gate but for qubits.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 bg-background p-3 rounded-lg border">
                                    <span className="font-mono text-muted-foreground">|0⟩</span>
                                    <ArrowRight className="w-4 h-4" />
                                    <span className="font-mono font-bold">|1⟩</span>
                                    <span className="ml-auto text-xs text-muted-foreground">Flips 0 to 1</span>
                                </li>
                                <li className="flex items-center gap-2 bg-background p-3 rounded-lg border">
                                    <span className="font-mono text-muted-foreground">|1⟩</span>
                                    <ArrowRight className="w-4 h-4" />
                                    <span className="font-mono font-bold">|0⟩</span>
                                    <span className="ml-auto text-xs text-muted-foreground">Flips 1 to 0</span>
                                </li>
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                                Note: If a qubit is in superposition, it flips <strong>both</strong> parts of the state simultaneously.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            {/* Visual Analogy for NOT */}
                            <div className="relative w-48 h-48">
                                <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center text-xs font-bold">0</div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-slate-900 dark:bg-slate-100 dark:text-black text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>

                                {/* Arrow Animation */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-1 h-24 bg-red-500 origin-top"
                                    animate={{ rotate: [0, 180, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ marginTop: "-48px" }}
                                >
                                    <div className="w-3 h-3 bg-red-500 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: PAULI GATES */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold">The Pauli Gates Family</h3>
                    <p className="text-muted-foreground">Basic building blocks for rotation.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 hover:border-red-500/50 transition-colors">
                        <div className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center font-bold text-xl mb-4">X</div>
                        <h4 className="font-bold mb-2">Pauli-X</h4>
                        <p className="text-sm text-muted-foreground">The "Bit Flip". Rotates the qubit 180 degrees around the X-axis (Simulates NOT).</p>
                    </Card>
                    <Card className="p-6 hover:border-green-500/50 transition-colors">
                        <div className="w-10 h-10 rounded bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center font-bold text-xl mb-4">Y</div>
                        <h4 className="font-bold mb-2">Pauli-Y</h4>
                        <p className="text-sm text-muted-foreground">Combines bit flip and phase flip. Rotates around the Y-axis.</p>
                    </Card>
                    <Card className="p-6 hover:border-blue-500/50 transition-colors">
                        <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">Z</div>
                        <h4 className="font-bold mb-2">Pauli-Z</h4>
                        <p className="text-sm text-muted-foreground">The "Phase Flip". Leaves 0 and 1 alone but changes the mathematical phase.</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: HADAMARD GATE */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                Most Important
                            </div>
                            <h3 className="text-4xl font-bold">The Hadamard Gate (H)</h3>
                            <p className="text-indigo-100 text-lg leading-relaxed">
                                This is the magic gate. It takes a definite state (like 0) and puts it into a <strong>perfect superposition</strong>.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <p className="text-xs uppercase opacity-70 mb-1">Input</p>
                                    <p className="font-mono text-xl font-bold">|0⟩</p>
                                    <p className="text-xs mt-1">Definite State</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm border border-white/30">
                                    <p className="text-xs uppercase opacity-70 mb-1">Output</p>
                                    <p className="font-mono text-xl font-bold">50% |0⟩ + 50% |1⟩</p>
                                    <p className="text-xs mt-1">Superposition</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/20 p-8 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full mb-6 flex items-center justify-center text-3xl font-bold shadow-lg animate-[spin_3s_linear_infinite]">
                                H
                            </div>
                            <h4 className="font-bold text-xl mb-2">Creates Possibility</h4>
                            <p className="text-sm text-indigo-100 mb-6">
                                "Like spinning a coin. Before H, it's flat on the table. After H, it's spinning in the air."
                            </p>
                            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                <div className="w-1/2 h-full bg-white shadow-[0_0_10px_white]"></div>
                            </div>
                            <div className="flex justify-between w-full text-xs mt-2 opacity-70">
                                <span>0</span>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: WHY GATES MATTER & SUMMARY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Topic Summary</h3>
                        <p className="text-muted-foreground">Quantum gates are the tools we use to program the universe.</p>
                    </div>

                    <div className="bg-card border rounded-xl overflow-hidden divide-y">
                        <div className="p-4 grid grid-cols-[1fr_2fr] gap-4 items-center">
                            <div className="font-bold text-primary">NOT Gate</div>
                            <div className="text-sm text-muted-foreground">Flips the state (0 to 1, 1 to 0).</div>
                        </div>
                        <div className="p-4 grid grid-cols-[1fr_2fr] gap-4 items-center">
                            <div className="font-bold text-primary">Pauli Gates</div>
                            <div className="text-sm text-muted-foreground">Rotate qubits around X, Y, or Z axes.</div>
                        </div>
                        <div className="p-4 grid grid-cols-[1fr_2fr] gap-4 items-center">
                            <div className="font-bold text-primary">Hadamard Gate</div>
                            <div className="text-sm text-muted-foreground">Creates superposition (the spinning coin). Starts most algorithms.</div>
                        </div>
                        <div className="p-4 grid grid-cols-[1fr_2fr] gap-4 items-center">
                            <div className="font-bold text-primary">Reversibility</div>
                            <div className="text-sm text-muted-foreground">Unlike many classical gates, quantum gates can always be undone.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/2")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Qubits
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 3 of 6</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/4")}>
                        Next: Entanglement <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic4Entanglement = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-entanglement" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The "Spooky" Connection</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum <span className="text-primary">Entanglement</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        Two distinct particles becoming one single system. Change one, and the other responds <strong>instantly</strong>, no matter how far apart they are.
                    </p>
                </div>
            </section>

            {/* SECTION 2: DEFINITION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Definition
                        </div>
                        <h3 className="text-3xl font-bold">What is Entanglement?</h3>
                        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-xl italic text-foreground/90">
                                "Two or more qubits become connected in such a deep way that the state of one qubit automatically affects the other, no matter the distance."
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-lg">Simple Meaning:</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-4 bg-muted/50 border-dashed">
                                    <p className="text-xs text-muted-foreground uppercase mb-1">Normal Objects</p>
                                    <p className="font-bold">Independent</p>
                                    <p className="text-sm mt-1">One acts alone.</p>
                                </Card>
                                <Card className="p-4 bg-primary/5 border-primary/20">
                                    <p className="text-xs text-primary uppercase mb-1">Entangled Qubits</p>
                                    <p className="font-bold text-primary">Linked System</p>
                                    <p className="text-sm mt-1">Cannot describe one without the other.</p>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Entangled Connection */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
                        <div className="relative w-full max-w-sm">
                            {/* Particle A */}
                            <motion.div
                                className="absolute left-0 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                A
                            </motion.div>

                            {/* Particle B - Mirroring movement */}
                            <motion.div
                                className="absolute right-0 w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] z-10"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                B
                            </motion.div>

                            {/* The Link */}
                            <svg className="absolute top-12 left-12 w-[calc(100%-6rem)] h-20 overflow-visible">
                                <path
                                    d="M0,0 Q150,50 300,0"
                                    fill="none"
                                    stroke="url(#gradient-link)"
                                    strokeWidth="4"
                                    strokeDasharray="10 5"
                                    className="animate-[dash_1s_linear_infinite]"
                                />
                                <defs>
                                    <linearGradient id="gradient-link" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center">
                                <span className="bg-background/80 backdrop-blur border px-3 py-1 rounded-full text-xs font-mono shadow-sm">Instant Connection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: HOW IT WORKS */}
            <section className="container mx-auto px-4">
                <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
                    <h3 className="text-2xl font-bold mb-8 text-center">How Entanglement Works (Step-by-Step)</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { num: "1", title: "Creation", desc: "Two qubits are created together." },
                            { num: "2", title: "Entanglement", desc: "They interact and become entangled." },
                            { num: "3", title: "Separation", desc: "They can be moved far apart (even light years!)." },
                            { num: "4", title: "Measurement", desc: "Measure A, and B's state is instantly fixed." }
                        ].map((step, i) => (
                            <div key={i} className="relative p-6 bg-muted/20 rounded-xl border hover:border-primary/30 transition-colors group">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {step.num}
                                </div>
                                <h4 className="font-bold text-lg mb-2 mt-2">{step.title}</h4>
                                <p className="text-sm text-muted-foreground">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: GLOVE ANALOGY */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="h-[300px] w-full bg-slate-100 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-around p-8">
                            {/* Box A */}
                            <div className="text-center group cursor-pointer">
                                <div className="w-32 h-32 bg-amber-200 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 shadow-lg border-b-4 border-amber-400 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center bg-amber-300 dark:bg-amber-800 transition-opacity opacity-100 group-hover:opacity-0 z-20">
                                        <span className="text-4xl">📦</span>
                                    </div>
                                    <span className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10 transition-delay-200">Left 🧤</span>
                                </div>
                                <p className="font-bold">Box A</p>
                            </div>

                            {/* Box B */}
                            <div className="text-center">
                                <div className="w-32 h-32 bg-amber-200 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 shadow-lg border-b-4 border-amber-400 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center bg-amber-300 dark:bg-amber-800 z-20">
                                        <span className="text-4xl">📦</span>
                                    </div>
                                    {/* This would conceptually be the 'Right' glove, but we don't show it opening to prove the point */}
                                </div>
                                <p className="font-bold">Box B</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border px-4 py-2 rounded-full shadow text-sm font-bold text-primary">
                            Click Box A to "Measure"
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                        <Badge variant="outline" className="mb-2">Analogy 1</Badge>
                        <h3 className="text-3xl font-bold">The Pair of Gloves</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Imagine putting a left glove in Box A and a right glove in Box B. You don't know which is which.
                        </p>
                        <div className="bg-primary/5 border-l-4 border-primary p-6">
                            <p className="font-bold text-lg mb-2">The "Instant" Knowledge</p>
                            <ul className="space-y-2 text-sm">
                                <li>1. You open Box A and see a <strong>Left Glove</strong>.</li>
                                <li>2. Instantly, without checking, you <strong>know</strong> Box B has the Right Glove.</li>
                            </ul>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            This instant correlation is similar to entanglement. The state of one defines the state of the other.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: COIN BOX ANALOGY */}
            <section className="container mx-auto px-4">
                <Card className="bg-slate-950 text-white p-8 md:p-12 relative overflow-hidden border-slate-800">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 mb-4">Analogy 2</Badge>
                            <h3 className="text-2xl font-bold mb-4">The Linked Coin Boxes</h3>
                            <p className="text-slate-300 mb-6">
                                Imagine two coins sealed in boxes, prepared so that if one is Heads, the other <strong>must</strong> be Tails.
                            </p>
                            <div className="p-4 bg-white/10 rounded-xl space-y-2">
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span>Open Box 1</span>
                                    <span className="font-bold text-yellow-400">Heads</span>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <span>Box 2 is automatically...</span>
                                    <span className="font-bold text-yellow-400">Tails</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-8">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-black font-bold text-3xl shadow-lg border-4 border-yellow-200">
                                H
                            </div>
                            <div className="h-1 w-16 bg-white/20 rounded-full"></div>
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-black font-bold text-3xl shadow-lg border-4 border-slate-200">
                                T
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 6: CLARIFICATION & IMPORTANCE */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 border-destructive/20 bg-destructive/5">
                        <div className="flex items-center gap-3 mb-4 text-destructive">
                            <AlertTriangle className="w-6 h-6" />
                            <h4 className="font-bold text-lg">Common Misconception</h4>
                        </div>
                        <h5 className="font-bold mb-2">Faster than Light? No.</h5>
                        <p className="text-sm text-foreground/80 mb-4">
                            Entanglement does <strong>NOT</strong> break physics. Information does not travel faster than light.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            The correlation was established when the particles were created. Measurement just reveals it.
                        </p>
                    </Card>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Why it Matters</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                                <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold">Powerful Algorithms</p>
                                    <p className="text-sm text-muted-foreground">Allows complex problem solving impossible for classical computers.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                                <div className="w-5 h-5 rounded bg-green-500/20 text-green-600 flex items-center justify-center shrink-0 mt-1 text-xs">🔒</div>
                                <div>
                                    <p className="font-bold">Teleportation & Security</p>
                                    <p className="text-sm text-muted-foreground">Used in quantum cryptography and information teleportation.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 7: SUMMARY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-6">Beginner Summary</h3>
                    <div className="space-y-4 text-left">
                        <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                            <span className="font-medium">Entanglement</span>
                            <span className="text-muted-foreground text-sm">Deep connection without wires</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                            <span className="font-medium">Distance</span>
                            <span className="text-muted-foreground text-sm">Does not matter (can be light years)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                            <span className="font-medium">Measurement</span>
                            <span className="text-muted-foreground text-sm">Affects the whole system instantly</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Classical World</span>
                            <span className="text-muted-foreground text-sm">Has nothing like this!</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/3")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Quantum Gates
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 4 of 6</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/5")}>
                        Next: Speed Advantage <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic5SpeedAdvantage = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-speed-advantage" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Power of Parallelism</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum <span className="text-primary">Speed Advantage</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        It's not just about being faster in gigahertz. It's about finding the answer in fewer steps by exploring multiple possibilities at once.
                    </p>
                </div>
            </section>

            {/* SECTION 2: DEFINITION & MISCONCEPTION */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Definition
                        </div>
                        <h3 className="text-3xl font-bold">What is Quantum Speed Advantage?</h3>
                        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-xl italic text-foreground/90">
                                "A quantum computer can solve <strong className="text-primary">certain specific problems</strong> in drastically less time than the best possible classical computer."
                            </p>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            It's important to understand that quantum computers are not just "super-fast supercomputers" for everything. They are specialists.
                        </p>
                    </div>

                    <Card className="p-8 border-destructive/20 bg-destructive/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertTriangle className="w-24 h-24" />
                        </div>
                        <h4 className="font-bold text-lg mb-4 text-destructive flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> Important Clarification
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-xs font-bold">✕</div>
                                <span className="text-muted-foreground">Faster at browsing the web</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-xs font-bold">✕</div>
                                <span className="text-muted-foreground">Faster at playing video games</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xs font-bold">✓</div>
                                <span className="text-foreground font-bold">Faster at finding prime factors or simulating molecules</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: CLASSICAL SLOWNESS EXAMPLE */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">Why Classical Computers Can Be Slow</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground">
                                Classical computers solve problems <strong>step-by-step</strong>. If there are 1,000 possibilities, they check them one by one.
                            </p>
                            <Card className="p-6">
                                <h4 className="font-bold mb-4 flex items-center gap-2">
                                    <span>🔑</span> The Lock Example
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4">Imagine a lock with 1,000 possible keys.</p>
                                <div className="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
                                    <div className="text-red-500">Try Key 1... ❌ Fail</div>
                                    <div className="text-red-500">Try Key 2... ❌ Fail</div>
                                    <div className="text-red-500">Try Key 3... ❌ Fail</div>
                                    <div className="opacity-50">... (Hours later) ...</div>
                                    <div className="text-green-500">Try Key 892... ✅ Success!</div>
                                </div>
                            </Card>
                        </div>

                        {/* Visual: Sequential vs Parallel */}
                        <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase mb-2">Classical (Sequential)</p>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-500 animate-[pulse_2s_infinite]" style={{ animationDelay: `${i * 0.5}s` }}>
                                                {i}
                                            </div>
                                        ))}
                                        <div className="flex items-center text-slate-600 text-xs">... one by one</div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-primary uppercase mb-2">Quantum (Parallel)</p>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-xs text-primary animate-[pulse_1s_infinite]">
                                                ✓
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: PARALLELISM ANALOGIES */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-8 hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                            🚗
                        </div>
                        <h4 className="font-bold text-xl mb-4">The Road Analogy</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase">Classical</p>
                                <p className="text-sm">One car driving down one road.</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-primary uppercase">Quantum</p>
                                <p className="text-sm">Many cars driving down many roads <strong>at the same time</strong>.</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                            📱
                        </div>
                        <h4 className="font-bold text-xl mb-4">Finding Your Phone</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase">Classical</p>
                                <p className="text-sm">Searching room... by room... by room.</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-primary uppercase">Quantum</p>
                                <p className="text-sm">Checking <strong>every room simultaneously</strong> to find it instantly.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: HOW IT WORKS MECHANICALLY */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
                    <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
                        <h3 className="text-3xl font-bold">The "Secret Sauce" of Speed</h3>
                        <p className="text-slate-300">
                            It's not magic. It's physics. Quantum algorithms use interference to solve problems.
                        </p>

                        <div className="grid gap-4 text-left">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-4">
                                <div className="mt-1 bg-green-500/20 text-green-400 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-bold">Test Many Solutions</p>
                                    <p className="text-sm text-slate-400">Superposition allows the computer to hold all possible answers at once.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-4">
                                <div className="mt-1 bg-red-500/20 text-red-400 p-2 rounded-lg"><ArrowRight className="w-4 h-4 rotate-45" /></div>
                                <div>
                                    <p className="font-bold">Cancel Wrong Answers</p>
                                    <p className="text-sm text-slate-400">Like noise-canceling headphones, wrong answers destructively interfere with each other.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-4">
                                <div className="mt-1 bg-blue-500/20 text-blue-400 p-2 rounded-lg"><Zap className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-bold">Amplify Correct Answers</p>
                                    <p className="text-sm text-slate-400">Constructive interference boosts the probability of the right answer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: WHERE IT WINS & SUMMARY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold mb-4">Where Quantum Wins</h3>
                    <p className="text-muted-foreground">These problems are "too heavy" for classical systems.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {["Molecular Simulations", "Cryptography", "Optimization", "Pattern Searching"].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-secondary/50 text-center font-medium border hover:border-primary/50 transition-colors">
                            {item}
                        </div>
                    ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-6 max-w-3xl mx-auto border border-primary/10">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">i</span>
                        Topic Summary
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8 text-sm">
                        <div>
                            <p className="font-bold mb-1">Quantum Speed Advantage</p>
                            <p className="text-muted-foreground">Solving specific complex problems faster than any classical computer could.</p>
                        </div>
                        <div>
                            <p className="font-bold mb-1">Parallelism</p>
                            <p className="text-muted-foreground">Exploring multiple paths simultaneously (Quantum) vs one by one (Classical).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/4")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Entanglement
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 5 of 6</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/6")}>
                        Next: Q vs Classical <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic6QuantumVsClassical = () => {
    const navigate = useNavigate();
    const [completionState, setCompletionState] = React.useState<'reading' | 'completed'>('reading');

    const handleComplete = () => {
        setCompletionState('completed');
        // In a real app, you would save progress here
        setTimeout(() => {
            navigate("/dashboard");
        }, 3000);
    };

    if (completionState === 'completed') {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center animate-in zoom-in duration-500 text-center px-4">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.5)]">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Module 24 Completed!</h2>
                <p className="text-xl text-muted-foreground mb-8">You've mastered the basics of Quantum Computing.</p>
                <p className="text-sm text-muted-foreground animate-pulse">Redirecting to dashboard...</p>
            </div>
        );
    }

    return (
        <div id="topic-vs-classical" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The Great Comparison</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum <span className="text-muted-foreground">vs.</span> Classical
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        They aren't rivals; they are partners. Understanding when to use which is the key to the future of computing.
                    </p>
                </div>
            </section>

            {/* SECTION 2: THE HEAD-TO-HEAD */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Classical Logic */}
                    <Card className="p-8 border-l-4 border-l-slate-400">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-2xl">💻</div>
                            <div>
                                <h3 className="text-2xl font-bold">Classical Computer</h3>
                                <p className="text-sm text-muted-foreground">The computer you are using now.</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                <span className="font-bold shrink-0 w-24">Unit:</span>
                                <span>Bits (0 or 1)</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                <span className="font-bold shrink-0 w-24">Method:</span>
                                <span>Sequential (Step-by-step)</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                <span className="font-bold shrink-0 w-24">Power:</span>
                                <span>Reliable logic, math, everyday tasks</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Quantum Logic */}
                    <Card className="p-8 border-l-4 border-l-primary bg-primary/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">⚛️</div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary">Quantum Computer</h3>
                                <p className="text-sm text-muted-foreground">The machine of the future.</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-primary/10">
                                <span className="font-bold shrink-0 w-24">Unit:</span>
                                <span>Qubits (Superposition)</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-primary/10">
                                <span className="font-bold shrink-0 w-24">Method:</span>
                                <span>Parallel (All paths at once)</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-primary/10">
                                <span className="font-bold shrink-0 w-24">Power:</span>
                                <span>Optimization, Nature simulation, Encryption</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: VISUAL COMPARISON - MAZE */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden">
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <Badge className="mb-6 bg-purple-500 hover:bg-purple-600">The Best Analogy</Badge>
                        <h3 className="text-3xl font-bold mb-8">Solving a Maze</h3>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                <div className="aspect-square bg-slate-900 rounded-xl border border-slate-700 relative p-4 flex items-center justify-center">
                                    {/* Simplified Maze Logic Classical */}
                                    <div className="w-full h-full border-2 border-dashed border-slate-600 rounded opacity-20 absolute"></div>
                                    <div className="text-4xl animate-bounce absolute top-1/2 left-1/4">🐭</div>
                                    <p className="absolute bottom-4 text-xs text-slate-400">Tries one path, hits wall, goes back...</p>
                                </div>
                                <h4 className="font-bold text-xl">Classical = The Mouse</h4>
                                <p className="text-sm text-slate-400">The mouse runs down one path. If it's blocked, it turns back. It eventually finds the cheese, but it takes time.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="aspect-square bg-slate-900 rounded-xl border border-purple-500/30 relative p-4 flex items-center justify-center overflow-hidden">
                                    {/* Simplified Maze Logic Quantum */}
                                    <div className="absolute inset-0 bg-purple-900/20 animate-pulse"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-purple-400 opacity-50">🌊</div>
                                    <p className="absolute bottom-4 text-xs text-purple-300">Fills all paths instantly</p>
                                </div>
                                <h4 className="font-bold text-xl text-purple-400">Quantum = Water</h4>
                                <p className="text-sm text-slate-400">Water doesn't choose a path. It flows into <strong>all paths at once</strong>. It finds the exit instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: HARDWARE LOOK */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6">
                        <h3 className="text-3xl font-bold">What Do They Look Like?</h3>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                                <h4 className="font-bold text-lg mb-1">Classical: The Microchip</h4>
                                <p className="text-sm text-muted-foreground">Tiny silicon chips, flat, run at room temperature. You have one in your pocket.</p>
                            </div>
                            <div className="p-4 border border-primary/30 bg-primary/5 rounded-xl">
                                <h4 className="font-bold text-lg mb-1 text-primary">Quantum: The Chandelier</h4>
                                <p className="text-sm text-muted-foreground">
                                    A beautiful, gold-plated structure hanging from the ceiling. It's actually a super-freezer!
                                </p>
                                <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                                    <span className="animate-pulse">❄️</span> -273°C (Colder than space)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        {/* Abstract CSS Chandelier */}
                        <div className="relative w-64 h-[400px]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-t-lg"></div>
                            {/* Gold tiers */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center">
                                <span className="text-[10px] text-yellow-900 font-bold tracking-widest uppercase">Stage 1</span>
                            </div>
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-lg shadow-lg opacity-90 flex items-center justify-center">
                                <span className="text-[10px] text-yellow-900 font-bold tracking-widest uppercase">Stage 2</span>
                            </div>
                            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-24 h-32 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-lg shadow-lg opacity-80 flex items-center justify-center">
                                <span className="text-[10px] text-yellow-900 font-bold tracking-widest uppercase">Chip</span>
                            </div>
                            {/* Wires */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-slate-400 -z-10"></div>
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4 h-8 bg-blue-500 blur-md animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: THE HYBRID FUTURE */}
            <section className="container mx-auto px-4">
                <Card className="p-10 border-green-500/20 bg-green-500/5 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">The Future is Hybrid</h3>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        Quantum computers won't replace your laptop. Instead, they will work together. Your classical computer will handle the email and internet, and it will send the "impossible" math problems to the quantum computer in the cloud.
                    </p>
                </Card>
            </section>

            {/* SECTION 6: MODULE SUMMARY */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-muted rounded-3xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold mb-8 text-center">Module 24 Recap</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <div className="font-bold text-primary">Topic 2</div>
                            <h4 className="font-bold">Qubits</h4>
                            <p className="text-sm text-muted-foreground">The basic unit. Can be 0, 1, or both (Superposition).</p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-bold text-primary">Topic 3</div>
                            <h4 className="font-bold">Quantum Gates</h4>
                            <p className="text-sm text-muted-foreground">Operations like Hadamard (H) that manipulate qubits.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-bold text-primary">Topic 4</div>
                            <h4 className="font-bold">Entanglement</h4>
                            <p className="text-sm text-muted-foreground">Spooky connection. Change one, affect the other instantly.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-bold text-primary">Topic 5 & 6</div>
                            <h4 className="font-bold">The Advantage</h4>
                            <p className="text-sm text-muted-foreground">Using parallelism to solve impossibly hard problems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/5")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Speed Advantage
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 6 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/7")}>
                        Next: Applications <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic7Applications = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-applications" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Real World Impact</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum <span className="text-primary">Applications</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        Quantum computers aren't for browsing Facebook. They are built to solve the hardest problems in science and nature.
                    </p>
                </div>
            </section>

            {/* SECTION 2: CYBERSECURITY */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                            <LockIcon className="w-3 h-3" /> Security
                        </div>
                        <h3 className="text-3xl font-bold">Cryptography & Cyber Security</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Today's encryption protects your data using math problems that are hard for classical computers but easy for quantum computers.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 rounded-xl">
                                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">The Threat</h4>
                                <p className="text-sm">A powerful quantum computer could potentially break current security (like banking passwords) in minutes.</p>
                            </div>
                            <div className="p-4 border border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-900/10 rounded-xl">
                                <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">The Solution</h4>
                                <p className="text-sm">"Quantum Encryption" uses the laws of physics to create unhackable communication channels.</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-8 bg-slate-950 border-slate-800 flex items-center justify-center h-[400px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] z-10"></div>
                        <div className="grid grid-cols-8 gap-2 text-xs font-mono text-green-500/20 absolute inset-0 p-4">
                            {Array.from({ length: 64 }).map((_, i) => (
                                <div key={i} className="animate-pulse" style={{ animationDelay: `${Math.random() * 2}s` }}>
                                    {Math.round(Math.random())}
                                </div>
                            ))}
                        </div>
                        <div className="relative z-20 text-center space-y-4">
                            <LockIcon className="w-16 h-16 text-primary mx-auto" />
                            <div className="text-2xl font-bold text-white">Quantum Safe</div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest">Encryption 2.0</div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: OPTIMIZATION */}
            <section className="container mx-auto px-4">
                <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-4">Optimization Problems</h3>
                        <p className="text-muted-foreground">Finding the best solution among billions of options.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <h4 className="font-bold flex items-center gap-2 mb-4">
                                <span className="text-2xl">🚚</span> Logistics
                            </h4>
                            <p className="text-sm text-foreground">Calculating the perfect route for 10 million delivery trucks to save fuel and time.</p>
                        </Card>
                        <Card className="p-6">
                            <h4 className="font-bold flex items-center gap-2 mb-4">
                                <span className="text-2xl">🔋</span> Energy
                            </h4>
                            <p className="text-sm text-foreground">Designing better batteries or managing a national power grid efficiently.</p>
                        </Card>
                        <Card className="p-6">
                            <h4 className="font-bold flex items-center gap-2 mb-4">
                                <span className="text-2xl">💰</span> Finance
                            </h4>
                            <p className="text-sm text-foreground">Balancing investment portfolios to minimize risk instantly.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: DRUG DISCOVERY */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[300px] bg-blue-50 dark:bg-blue-900/20 rounded-3xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 border-4 border-blue-400/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="w-48 h-48 border-4 border-purple-400/30 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                        </div>
                        <div className="relative z-10 text-6xl">💊</div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                            <Microscope className="w-3 h-3" /> Medicine
                        </div>
                        <h3 className="text-3xl font-bold">Drug Discovery</h3>
                        <p className="text-lg text-muted-foreground">
                            Simulating molecules is hard because nature is quantum. Quantum computers can simulate nature <strong>exactly</strong>.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Discover new medicines for incurable diseases.</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Create personalized treatments for patients.</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Drastically reduce the cost of research.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/6")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Q vs Classical
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 7 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/8")}>
                        Next: Limitations <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic8Limitations = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-limitations" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-500 font-bold">Reality Check</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum <span className="text-orange-500">Limitations</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        Powerful? Yes. Perfect? Far from it. Building a quantum computer is one of the hardest engineering challenges humanity has ever faced.
                    </p>
                </div>
            </section>

            {/* SECTION 2: NOISE & ERRORS */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Card className="p-8 border-orange-500/20 bg-orange-500/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <img src="https://media.giphy.com/media/l3vQYm0jCj0eUAiT6/giphy.gif" alt="Static Noise" className="w-32 h-32 object-cover rounded-full mix-blend-overlay" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">1. They are Fragile</h3>
                        <p className="text-muted-foreground mb-4">
                            Qubits are extremely sensitive. A tiny vibration, a change in temperature, or a stray magnetic field can cause errors. This is called <strong>Decoherence</strong>.
                        </p>
                        <div className="bg-background p-4 rounded-xl border mb-4">
                            <p className="text-sm font-mono text-center">
                                Expected: |1⟩ <br />
                                <span className="text-red-500">Actual: |0⟩ (Error!)</span>
                            </p>
                        </div>
                    </Card>

                    <Card className="p-8 border-blue-500/20 bg-blue-500/5">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">2. Extreme Cold</h3>
                        <p className="text-muted-foreground mb-4">
                            Most quantum computers need to operate at temperatures near <strong>Absolute Zero (-273°C)</strong>. This is colder than deep space.
                        </p>
                        <div className="flex gap-4 items-center justify-center p-4">
                            <span className="text-4xl">❄️</span>
                            <div className="text-sm font-bold text-center">
                                Requires massive, expensive<br />refrigerators to run.
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: SCALABILITY */}
            <section className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-8">3. The Scaling Problem</h3>
                    <div className="p-8 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl">
                        <div className="flex justify-center items-end gap-2 h-32 mb-4">
                            <div className="w-16 bg-primary/20 rounded-t-lg h-12 flex items-center justify-center text-xs">Now</div>
                            <div className="w-16 bg-primary/40 rounded-t-lg h-24 flex items-center justify-center text-xs">Needed</div>
                        </div>
                        <p className="text-lg">
                            We currently have machines with ~100-1000 qubits. To do useful things (like drug discovery), we need <strong>millions</strong> of qubits.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">Connecting that many qubits without noise is currently impossible.</p>
                    </div>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/7")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Applications
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 8 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/9")}>
                        Next: Quantum in India <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic9India = () => {
    const navigate = useNavigate();

    return (
        <div id="topic-india" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold mb-4">
                        🇮🇳 National Progress
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Quantum in <span className="text-orange-500">India</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        India is not staying behind. The government and top institutions are actively building the country's quantum future.
                    </p>
                </div>
            </section>

            {/* SECTION 2: NATIONAL MISSION */}
            <section className="container mx-auto px-4">
                <Card className="p-8 md:p-12 border-l-8 border-l-orange-500 shadow-xl bg-card">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="col-span-2 space-y-4">
                            <h3 className="text-3xl font-bold">National Quantum Mission (NQM)</h3>
                            <p className="text-lg text-muted-foreground">
                                A massive government initiative to develop quantum technologies within India.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Build Quantum Computers</li>
                                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Secure Communications</li>
                                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Advanced Sensors</li>
                                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Material Science</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-xl text-center">
                            <div className="text-5xl font-bold text-primary mb-2">₹6000+</div>
                            <div className="text-sm font-bold uppercase text-muted-foreground">Crores allocated</div>
                            <p className="text-xs text-muted-foreground mt-2">Dedicated budget for research.</p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* SECTION 3: KEY INSTITUTIONS */}
            <section className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-8 text-center">Who is workings on it?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">🎓</div>
                        <h4 className="font-bold">IITs & IISc</h4>
                        <p className="text-sm text-muted-foreground">Top institutes like IISc Bangalore, IIT Madras, and IIT Bombay lead the research.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">🔬</div>
                        <h4 className="font-bold">Raman Research Institute</h4>
                        <p className="text-sm text-muted-foreground">Pioneering experiments in secure quantum communications.</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">🚀</div>
                        <h4 className="font-bold">Startups</h4>
                        <p className="text-sm text-muted-foreground">Young companies like QNu Labs and BosonQ Psi are building real products.</p>
                    </Card>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/8")}>
                        <ArrowLeft className="w-4 h-4" /> Back: Limitations
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 9 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => navigate("/module/24/topic/10")}>
                        Next: Demo Tools <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Topic10DemoTools = () => {
    const navigate = useNavigate();
    const [completionState, setCompletionState] = React.useState<'reading' | 'completed'>('reading');

    const handleComplete = () => {
        setCompletionState('completed');
        // In a real app, you would save progress here
        setTimeout(() => {
            navigate("/dashboard");
        }, 3000);
    };

    if (completionState === 'completed') {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center animate-in zoom-in duration-500 text-center px-4">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.5)]">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Module 24 Completed!</h2>
                <p className="text-xl text-muted-foreground mb-8">You are now ready for the Quantum Age.</p>
                <p className="text-sm text-muted-foreground animate-pulse">Redirecting to dashboard...</p>
            </div>
        );
    }

    return (
        <div id="topic-demo" className="space-y-24 animate-in fade-in duration-500">
            {/* SECTION 1: HERO */}
            <section className="container mx-auto px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Hands On</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                        Try It <span className="text-primary">Yourself</span>
                    </h2>
                    <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
                        You don't need a million-dollar lab. You can run real quantum circuits on the cloud today, for free.
                    </p>
                </div>
            </section>

            {/* SECTION 2: IBM QUANTUM */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                            Recommended Tool
                        </div>
                        <h3 className="text-3xl font-bold">IBM Quantum Experience</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A drag-and-drop interface that runs in your web browser. It lets you compose music with quantum circuits or just see what happens when you flip a qubit.
                        </p>
                        <div className="space-y-3">
                            <div className="flex gap-3 items-center p-3 bg-muted rounded-lg">
                                <span className="text-2xl">☁️</span>
                                <div>
                                    <p className="font-bold text-sm">Cloud Based</p>
                                    <p className="text-xs text-muted-foreground">No downloads needed. Works on any laptop.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center p-3 bg-muted rounded-lg">
                                <span className="text-2xl">🖱️</span>
                                <div>
                                    <p className="font-bold text-sm">Visual Drag & Drop</p>
                                    <p className="text-xs text-muted-foreground">Move gates like Lego blocks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card className="p-4 bg-slate-900 border-slate-700">
                        {/* Mockup of Interface */}
                        <div className="aspect-video bg-slate-800 rounded mb-4 overflow-hidden relative">
                            <div className="absolute inset-x-0 top-0 h-8 bg-slate-700 flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="p-8 flex items-center gap-4 text-slate-400 font-mono text-sm">
                                <div>|0⟩</div>
                                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded">H</div>
                                <div className="w-24 h-1 bg-slate-600"></div>
                                <div className="w-8 h-8 bg-purple-500 text-white flex items-center justify-center rounded">X</div>
                                <div className="w-24 h-1 bg-slate-600"></div>
                                <div className="w-8 h-8 bg-slate-200 text-black flex items-center justify-center rounded border border-black">?</div>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-500">Example of a simple visual circuit builder</p>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: OTHER WAYS TO LEARN */}
            <section className="container mx-auto px-4">
                <div className="bg-primary/5 rounded-3xl p-8 text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Learning is Safe</h3>
                    <p className="text-muted-foreground mb-6">
                        Mistakes are free. You can't break anything. It is the perfect playground to test your understanding of Superposition and Entanglement.
                    </p>
                    <Button variant="outline" className="gap-2">
                        <Globe className="w-4 h-4" /> Search "Interactive Quantum Tools"
                    </Button>
                </div>
            </section>

            {/* NAVIGATION */}
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-12">
                    <Button variant="outline" size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8" onClick={() => navigate("/module/24/topic/9")}>
                        <ArrowLeft className="w-4 h-4" /> Back: India
                    </Button>

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Module 24</p>
                        <p className="text-lg font-bold">Topic 10 of 10</p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto gap-3 rounded-xl px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20" onClick={handleComplete}>
                        Finish Module <CheckCircle2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Module24 = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topicId]);

    // Handle invalid topicIds
    useEffect(() => {
        if (!topicId) {
            navigate("/module/24/topic/1", { replace: true });
        }
    }, [topicId, navigate]);

    return (
        <div className="min-h-screen bg-background">
            {/* Header / Nav - Simplified for module view */}
            <div className="container mx-auto px-4 py-8">
                <Button
                    variant="ghost"
                    className="mb-8 pl-0 hover:bg-transparent hover:text-primary gap-2"
                    onClick={() => navigate("/dashboard")}
                >
                    <ArrowLeft className="w-5 h-5" /> Back to Dashboard
                </Button>
            </div>

            {/* Content Switcher */}
            {topicId === "1" ? (
                <Topic1WhatIsQuantum />
            ) : topicId === "2" ? (
                <Topic2Qubits />
            ) : topicId === "3" ? (
                <Topic3QuantumGates />
            ) : topicId === "4" ? (
                <Topic4Entanglement />
            ) : topicId === "5" ? (
                <Topic5SpeedAdvantage />
            ) : topicId === "6" ? (
                <Topic6QuantumVsClassical />
            ) : topicId === "7" ? (
                <Topic7Applications />
            ) : topicId === "8" ? (
                <Topic8Limitations />
            ) : topicId === "9" ? (
                <Topic9India />
            ) : topicId === "10" ? (
                <Topic10DemoTools />
            ) : (
                <div className="container mx-auto px-4 py-20 text-center">
                    <p className="text-muted-foreground">Topic {topicId} content coming next.</p>
                    {/* Temporary dev navigation */}
                    <div className="flex gap-4 justify-center mt-4">
                        <Button variant="outline" onClick={() => navigate("/module/24/topic/1")}>Go to Topic 1</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Module24;

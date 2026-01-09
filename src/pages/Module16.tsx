import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FileText, Type, Layout, Save, Bold, Italic, AlignLeft,
    AlignCenter, AlignRight, File, Folder, CheckCircle, ArrowRight,
    List, Hash, Calendar, Briefcase, Mail, FileCheck, ArrowLeft,
    Table, Grid3x3, BarChart3, Filter, TrendingUp, Minus,
    DollarSign, Users, Presentation, Image, Sparkles, Play,
    Target, BookOpen, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TopicNavigation } from "@/components/TopicNavigation";

const getImageUrl = (fileName: string) => {
    return `/src/assets/${fileName}`;
};

// --- TOPIC 1: MS WORD BASICS ---
function Topic1_MSWordBasics() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            {/* SECTION 1: MS WORD BASICS (First Section - Split Layout) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/m16-t1-word-overview.jpg")}
                                alt="MS Word interface showing blank document and ribbon"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t1-word-overview.jpg. MS Word interface with ribbon and blank document.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">MS WORD BASICS</p>
                        <h2 className="text-3xl font-semibold text-foreground">MS Word Basics</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            MS Word is a word processing application for creating documents. Learn to create, format, layout pages, and save files.
                        </p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Creating documents</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Formatting text</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Page layout</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Saving files</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CREATING DOCUMENTS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Creating Documents</Badge>
                        <h2 className="text-4xl font-bold mb-4">Creating Documents</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Start a new document with a blank page or use templates for common document types.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Open MS Word and click "New" to create a document. Choose a blank document for a clean page, or select a template for letters, resumes, or reports. Templates provide pre-designed layouts. A blank document lets you start from scratch and customize everything.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Blank documents give full control</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Templates save time with ready layouts</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Start typing immediately after creating</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t1-create-doc.jpg")}
                                    alt="Creating new document in MS Word"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t1-create-doc.jpg. New document creation interface.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Blank Document</h4>
                            <p className="text-sm text-muted-foreground">Start with empty page for full customization</p>
                        </Card>
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <File className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Templates</h4>
                            <p className="text-sm text-muted-foreground">Use pre-designed layouts for common documents</p>
                        </Card>
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Folder className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Quick Access</h4>
                            <p className="text-sm text-muted-foreground">Pin frequently used templates for faster access</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FORMATTING TEXT */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Formatting Text</Badge>
                        <h2 className="text-4xl font-bold mb-4">Formatting Text</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Change text appearance to make documents professional and readable.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/m16-t1-formatting-toolbar.jpg")}
                                alt="Formatting toolbar showing all formatting options"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t1-formatting-toolbar.jpg. Formatting toolbar interface.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Select text and use toolbar buttons to format. Make text bold, italic, or underlined. Change font style (Arial, Times New Roman) and size (12pt, 14pt). Align text left, center, right, or justify. Change text color and highlight important parts.
                            </p>
                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-3">
                                    <Bold className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-foreground/80">Bold makes text stand out</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Italic className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-foreground/80">Italic emphasizes words</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <AlignLeft className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-foreground/80">Alignment organizes text layout</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t1-format-example.jpg")}
                                    alt="Before and after text formatting example"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t1-format-example.jpg. Text formatting comparison.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6 border border-border/70">
                        <h3 className="text-lg font-bold mb-4">Formatting Steps</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-foreground/80">Select the text you want to format</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-foreground/80">Click formatting buttons (Bold, Italic, etc.)</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-foreground/80">Choose font size from dropdown menu</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-foreground/80">Adjust alignment using alignment buttons</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: PAGE LAYOUT */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Page Layout</Badge>
                        <h2 className="text-4xl font-bold mb-4">Page Layout</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Control how your document appears on the page with margins, orientation, and size settings.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t1-page-layout.jpg")}
                                    alt="Page layout dialog box showing margins, orientation, size options"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t1-page-layout.jpg. Page setup dialog interface.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Margins are blank spaces around page edges. Standard margins are 1 inch. Adjust margins for more or less space. Page orientation can be portrait (tall, like a letter) or landscape (wide). Page size options include Letter, A4, Legal. Use Page Setup dialog to adjust these settings.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Margins control white space around text</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Portrait for documents, landscape for wide content</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Choose page size based on your needs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Layout className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Margins</h4>
                            <p className="text-sm text-muted-foreground">Adjust blank space around page edges</p>
                        </Card>
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Orientation</h4>
                            <p className="text-sm text-muted-foreground">Portrait (tall) or landscape (wide)</p>
                        </Card>
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Type className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Page Size</h4>
                            <p className="text-sm text-muted-foreground">Letter, A4, Legal, and more options</p>
                        </Card>
                        <Card className="p-6 text-center border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Layout className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Spacing</h4>
                            <p className="text-sm text-muted-foreground">Control line and paragraph spacing</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: SAVING FILES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Saving Files</Badge>
                        <h2 className="text-4xl font-bold mb-4">Saving Files</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Save your work regularly to keep documents safe and accessible.
                        </p>
                    </div>

                    <Card className="p-6 border border-border/70 mb-8">
                        <div className="flex items-center justify-center gap-4 text-center">
                            <Save className="w-8 h-8 text-primary" />
                            <ArrowRight className="w-6 h-6 text-muted-foreground" />
                            <Folder className="w-8 h-8 text-primary" />
                            <ArrowRight className="w-6 h-6 text-muted-foreground" />
                            <FileText className="w-8 h-8 text-primary" />
                            <ArrowRight className="w-6 h-6 text-muted-foreground" />
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">Save Button → Choose Location → Enter Name → Save</p>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Click "Save" to save your document. First time saving asks for location and file name. "Save" updates existing file. "Save As" creates a copy with new name or location. Choose clear names that describe your document. Files save as .docx format by default. You can also save as .doc, .pdf, or other formats. Save regularly to avoid losing work.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Save updates existing file</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Save As creates a new copy</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Use .docx for modern Word compatibility</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t1-save-dialog.jpg")}
                                    alt="Save dialog box interface showing file location selection"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t1-save-dialog.jpg. Save dialog interface.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6 border border-border/70">
                        <h3 className="text-lg font-bold mb-4 text-center">Save vs Save As</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Save</h4>
                                <p className="text-sm text-muted-foreground">Updates existing file with changes. Use when editing an already saved document.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Save As</h4>
                                <p className="text-sm text-muted-foreground">Creates new file with different name or location. Use to create a copy or change format.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 6: WHY IT MATTERS */}
            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding MS Word</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">
                        Understanding MS Word basics helps you create professional documents for school, work, and personal use. These skills are essential for writing letters, reports, resumes, and more.
                    </p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img
                                src={getImageUrl("module-media/m16-t1-why-matters.jpg")}
                                alt="Professional documents created with MS Word"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t1-why-matters.jpg. Word documents in professional use.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </Card>
            </section>

            {/* NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" disabled>First Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/2")}>
                        Next Topic: Word Essential Skills →
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 2: WORD ESSENTIAL SKILLS ---
function Topic2_WordEssentialSkills() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            {/* SECTION 1: WORD ESSENTIAL SKILLS (First Section - Split Layout - Text Left, Image Right) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">WORD ESSENTIAL SKILLS</p>
                        <h2 className="text-3xl font-semibold text-foreground">Word Essential Skills</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Master essential Word features: headers/footers, tables, lists, and page numbering for professional documents.
                        </p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Headers/footers</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Tables</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Lists & bullet points</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Page numbering</p>
                            </div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/m16-t2-word-essentials.jpg")}
                                alt="Word essential skills overview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t2-word-essentials.jpg. Word essential features overview.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: HEADERS/FOOTERS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Headers/Footers</Badge>
                        <h2 className="text-4xl font-bold mb-4">Headers and Footers</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Add headers and footers to display information on every page of your document.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Headers appear at the top of each page, footers at the bottom. Use them for document titles, page numbers, dates, or company info. Go to Insert tab → Header/Footer. Choose a design or create custom. Headers and footers appear on every page automatically. You can have different headers for first page or odd/even pages.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Headers appear on every page automatically</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Use for titles, dates, page numbers</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Customize design and position</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t2-headers-footers.jpg")}
                                    alt="Headers and footers in Word"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t2-headers-footers.jpg. Headers and footers interface.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: TABLES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Tables</Badge>
                        <h2 className="text-4xl font-bold mb-4">Tables</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Create tables to organize data in rows and columns for clear presentation.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/m16-t2-tables.jpg")}
                                alt="Creating tables in Word"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t2-tables.jpg. Table creation interface.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>

                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
                            Go to Insert tab → Table. Choose number of rows and columns or draw a custom table. Tables organize information in a grid. Add or remove rows and columns as needed. Format cells with borders, colors, and alignment. Use table styles for quick formatting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Insert Table</h4>
                            <p className="text-sm text-muted-foreground text-center">Choose rows and columns from grid or draw custom table</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Layout className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Format Cells</h4>
                            <p className="text-sm text-muted-foreground text-center">Apply borders, colors, and alignment to cells</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Add Rows/Columns</h4>
                            <p className="text-sm text-muted-foreground text-center">Right-click table to insert or delete rows and columns</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Type className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Table Styles</h4>
                            <p className="text-sm text-muted-foreground text-center">Use predefined styles for professional appearance</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: LISTS & BULLET POINTS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Lists & Bullet Points</Badge>
                        <h2 className="text-4xl font-bold mb-4">Lists and Bullet Points</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Create bulleted or numbered lists to organize information clearly.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Select text and click Bullets or Numbering button in Home tab. Bullets use symbols for unordered lists. Numbers use sequential numbers for ordered lists. Change bullet style or number format from the dropdown. Create nested lists with indentation. Lists make information easy to scan and understand.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Bullets for unordered lists</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Numbers for ordered lists</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Create nested lists with indentation</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t2-lists.jpg")}
                                    alt="Lists and bullet points in Word"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t2-lists.jpg. Lists interface.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6 border border-border/70">
                        <h3 className="text-lg font-bold mb-4">How to Create Lists</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span className="text-sm text-foreground/80">Select the text you want to convert to a list</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span className="text-sm text-foreground/80">Click Bullets or Numbering button in Home tab</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span className="text-sm text-foreground/80">Customize style from dropdown menu</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span className="text-sm text-foreground/80">Use Tab to create nested sub-lists</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 5: PAGE NUMBERING */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Page Numbering</Badge>
                        <h2 className="text-4xl font-bold mb-4">Page Numbering</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Add page numbers to keep documents organized and easy to navigate.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t2-page-numbers.jpg")}
                                    alt="Page numbering in Word"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t2-page-numbers.jpg. Page numbering interface.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Go to Insert tab → Page Number. Choose position: top, bottom, or margins. Select number format: Arabic, Roman, or letters. Page numbers appear automatically on all pages. Start numbering from a specific page if needed. Use different numbering for first page or sections.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Choose position: top, bottom, or margins</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Select format: numbers, Roman numerals, or letters</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Numbers update automatically as pages change</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY IT MATTERS */}
            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Essential Skills</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">
                        These essential skills make documents professional and easy to navigate. Headers, footers, tables, lists, and page numbers are standard in business and academic documents.
                    </p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img
                                src={getImageUrl("module-media/m16-t2-why-matters.jpg")}
                                alt="Professional documents with essential features"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t2-why-matters.jpg. Professional documents.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </Card>
            </section>

            {/* NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/1")}>
                        ← Previous Topic
                    </Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/3")}>
                        Next Topic: Word Professional Use →
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 3: WORD PROFESSIONAL USE ---
function Topic3_WordProfessionalUse() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            {/* SECTION 1: WORD PROFESSIONAL USE (First Section - Split Layout) */}
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/m16-t3-word-professional.jpg")}
                                alt="Word professional use overview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t3-word-professional.jpg. Professional Word documents.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">WORD PROFESSIONAL USE</p>
                        <h2 className="text-3xl font-semibold text-foreground">Word Professional Use</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Create professional documents: resumes, letters, and reports using Word's templates and formatting tools.
                        </p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Resume creation</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Letters</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-semibold">•</span>
                                <p className="text-sm text-foreground/80">Reports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: RESUME CREATION */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Resume Creation</Badge>
                        <h2 className="text-4xl font-bold mb-4">Resume Creation</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Create professional resumes using Word templates and formatting tools.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Use resume templates from Word or create from scratch. Include personal information, work experience, education, and skills. Use clear headings and consistent formatting. Keep it concise and professional. Highlight achievements with bullet points. Proofread carefully before sending.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Use templates for professional layout</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Keep formatting consistent and clean</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Highlight achievements clearly</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t3-resume.jpg")}
                                    alt="Resume creation in Word"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t3-resume.jpg. Resume template example.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Personal Info</h4>
                            <p className="text-sm text-muted-foreground text-center">Name, contact details, email, phone</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Work Experience</h4>
                            <p className="text-sm text-muted-foreground text-center">Previous jobs, roles, achievements, dates</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Education</h4>
                            <p className="text-sm text-muted-foreground text-center">Degrees, certifications, institutions, dates</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 3: LETTERS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Letters</Badge>
                        <h2 className="text-4xl font-bold mb-4">Letters</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Write professional business and formal letters using proper formatting.
                        </p>
                    </div>

                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img
                                src={getImageUrl("module-media/m16-t3-letters.jpg")}
                                alt="Letter format in Word"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t3-letters.jpg. Professional letter format.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Start with sender's address and date at top. Add recipient's address below. Include salutation (Dear...), body paragraphs, closing (Sincerely...), and signature. Use formal language and clear structure. Keep paragraphs short and focused. Proofread for errors.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Include sender and recipient addresses</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Use formal salutation and closing</span>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t3-letter-structure.jpg")}
                                    alt="Letter structure and formatting"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t3-letter-structure.jpg. Letter formatting guide.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 4: REPORTS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Reports</Badge>
                        <h2 className="text-4xl font-bold mb-4">Reports</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Create structured reports with proper sections, formatting, and references.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t3-reports.jpg")}
                                    alt="Report structure in Word"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t3-reports.jpg. Report structure example.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Reports need clear structure: title page, table of contents, introduction, main sections with headings, conclusion, and references. Use heading styles for consistent formatting. Add page numbers and headers. Include charts or tables if needed. Maintain professional appearance throughout.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Use heading styles for sections</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Include table of contents</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">Add references and citations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Title Page</h4>
                            <p className="text-sm text-muted-foreground text-center">Report title, author, date, institution</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <List className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Table of Contents</h4>
                            <p className="text-sm text-muted-foreground text-center">Automatic table of contents from headings</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">Main Sections</h4>
                            <p className="text-sm text-muted-foreground text-center">Introduction, body, conclusion with headings</p>
                        </Card>
                        <Card className="p-6 border border-border/70">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-bold mb-2 text-center">References</h4>
                            <p className="text-sm text-muted-foreground text-center">Citations and bibliography at the end</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* WHY IT MATTERS */}
            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Professional Use</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">
                        Professional documents like resumes, letters, and reports are essential for job applications, business communication, and academic work. Proper formatting and structure make a strong impression.
                    </p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img
                                src={getImageUrl("module-media/m16-t3-why-matters.jpg")}
                                alt="Professional documents in use"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML =
                                            `<div class="p-8 text-center text-sm text-muted-foreground">
                                                Add module-media/m16-t3-why-matters.jpg. Professional document examples.
                                            </div>`;
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </Card>
            </section>

            {/* NAVIGATION */}
            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/2")}>
                        ← Previous Topic
                    </Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/4")}>
                        Next Topic: MS Excel Basics →
                    </Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 4: MS EXCEL BASICS ---
function Topic4_MSExcelBasics() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">MS EXCEL BASICS</p>
                        <h2 className="text-3xl font-semibold text-foreground">MS Excel Basics</h2>
                        <p className="text-foreground/80 leading-relaxed">Learn Excel fundamentals: sheets, cells, rows, columns, and basic formatting for data organization.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Sheets & cells</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Rows & columns</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Basic formatting</p></div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t4-excel-basics.jpg")} alt="Excel basics overview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t4-excel-basics.jpg. Excel interface overview.</div>`; } }} />
                        </div>
                    </Card>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Sheets & Cells</Badge>
                        <h2 className="text-4xl font-bold mb-4">Sheets and Cells</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Excel workbooks contain sheets. Each sheet has cells organized in a grid.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">A workbook has multiple sheets (tabs at bottom). Each sheet contains cells in rows and columns. Cells store data: text, numbers, or formulas. Click a cell to select it. Type to enter data. Cell address shows column letter and row number (A1, B2).</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Workbooks contain multiple sheets</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Cells store individual data items</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Cell address identifies location (A1, B2)</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t4-sheets-cells.jpg")} alt="Sheets and cells in Excel" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t4-sheets-cells.jpg. Sheets and cells interface.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><FileText className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Sheet</h4>
                            <p className="text-sm text-muted-foreground">Individual page in workbook with grid of cells</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Grid3x3 className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Cell</h4>
                            <p className="text-sm text-muted-foreground">Individual box where data is stored</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Table className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Range</h4>
                            <p className="text-sm text-muted-foreground">Group of selected cells (A1:B5)</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Rows & Columns</Badge>
                        <h2 className="text-4xl font-bold mb-4">Rows and Columns</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Rows run horizontally, columns run vertically in Excel sheets.</p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t4-rows-columns.jpg")} alt="Rows and columns in Excel" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t4-rows-columns.jpg. Rows and columns interface.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">Rows are numbered (1, 2, 3...). Columns are lettered (A, B, C...). Select entire row or column by clicking header. Resize by dragging border. Insert or delete rows/columns by right-clicking header.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Table className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Rows</h4>
                            <p className="text-sm text-muted-foreground">Horizontal lines numbered 1, 2, 3...</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Type className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Columns</h4>
                            <p className="text-sm text-muted-foreground">Vertical lines lettered A, B, C...</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Basic Formatting</Badge>
                        <h2 className="text-4xl font-bold mb-4">Basic Formatting</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Format cells to make data easier to read and understand.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t4-formatting.jpg")} alt="Excel formatting options" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t4-formatting.jpg. Formatting interface.</div>`; } }} />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Format cells with Home tab tools. Change font style and size. Make text bold, italic, or underlined. Change text and background colors. Align text left, center, or right. Format numbers as currency, percentage, or date.</p>
                            <Card className="p-6 border border-border/70">
                                <h3 className="text-lg font-bold mb-4">Formatting Steps</h3>
                                <div className="space-y-3">
                                    <div className="flex gap-3"><span className="font-bold text-primary">1.</span><span className="text-sm text-foreground/80">Select cell or range</span></div>
                                    <div className="flex gap-3"><span className="font-bold text-primary">2.</span><span className="text-sm text-foreground/80">Use Home tab formatting buttons</span></div>
                                    <div className="flex gap-3"><span className="font-bold text-primary">3.</span><span className="text-sm text-foreground/80">Choose font, color, alignment</span></div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Table className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Excel Basics</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">Understanding Excel basics is essential for organizing data, creating budgets, tracking information, and performing calculations.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t4-why-matters.jpg")} alt="Excel in use" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t4-why-matters.jpg. Excel spreadsheet examples.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/3")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/5")}>Next Topic: Excel Formulas →</Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 5: EXCEL FORMULAS ---
function Topic5_ExcelFormulas() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t5-formulas.jpg")} alt="Excel formulas overview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t5-formulas.jpg. Excel formulas interface.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">EXCEL FORMULAS</p>
                        <h2 className="text-3xl font-semibold text-foreground">Excel Formulas</h2>
                        <p className="text-foreground/80 leading-relaxed">Use formulas to perform calculations automatically in Excel cells.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">SUM</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">AVERAGE</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">MAX/MIN</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">COUNT</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">SUM</Badge>
                        <h2 className="text-4xl font-bold mb-4">SUM Formula</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Adds numbers together automatically.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Type =SUM( and select cells or type range (A1:A5). Press Enter. SUM adds all numbers in the range. Example: =SUM(A1:A5) adds cells A1 through A5. Use =SUM(A1, B1, C1) to add specific cells.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Adds all numbers in selected range</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Use =SUM(A1:A5) for range</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Updates automatically when values change</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t5-sum.jpg")} alt="SUM formula example" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t5-sum.jpg. SUM formula example.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">AVERAGE</Badge>
                        <h2 className="text-4xl font-bold mb-4">AVERAGE Formula</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Calculates the average (mean) of numbers.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t5-average.jpg")} alt="AVERAGE formula example" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t5-average.jpg. AVERAGE formula example.</div>`; } }} />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Type =AVERAGE( and select range. Press Enter. AVERAGE calculates the mean by adding numbers and dividing by count. Example: =AVERAGE(A1:A5) finds average of A1 through A5.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Calculates mean value</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Use =AVERAGE(A1:A5)</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">MAX/MIN</Badge>
                        <h2 className="text-4xl font-bold mb-4">MAX and MIN Formulas</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Finds the highest (MAX) or lowest (MIN) value in a range.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">MAX finds largest number: =MAX(A1:A5). MIN finds smallest: =MIN(A1:A5). Both ignore text and empty cells. Useful for finding extremes in data sets.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">MAX finds highest value</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">MIN finds lowest value</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t5-max-min.jpg")} alt="MAX/MIN formula examples" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t5-max-min.jpg. MAX/MIN formula examples.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">COUNT</Badge>
                        <h2 className="text-4xl font-bold mb-4">COUNT Formula</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Counts how many cells contain numbers.</p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t5-count.jpg")} alt="COUNT formula example" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t5-count.jpg. COUNT formula example.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">Type =COUNT(A1:A5) to count cells with numbers. Ignores text and empty cells. Use COUNT to see how many entries are numeric.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Hash className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">SUM</h4>
                            <p className="text-sm text-muted-foreground">=SUM(A1:A5)</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><BarChart3 className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">AVERAGE</h4>
                            <p className="text-sm text-muted-foreground">=AVERAGE(A1:A5)</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><TrendingUp className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">MAX/MIN</h4>
                            <p className="text-sm text-muted-foreground">=MAX(A1:A5)</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Hash className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">COUNT</h4>
                            <p className="text-sm text-muted-foreground">=COUNT(A1:A5)</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Hash className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Excel Formulas</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">Formulas automate calculations, saving time and reducing errors. Essential for budgets, analysis, and data processing.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t5-why-matters.jpg")} alt="Excel formulas in use" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t5-why-matters.jpg. Formula examples in spreadsheets.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/4")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/6")}>Next Topic: Excel Data Tools →</Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 6: EXCEL DATA TOOLS ---
function Topic6_ExcelDataTools() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">EXCEL DATA TOOLS</p>
                        <h2 className="text-3xl font-semibold text-foreground">Excel Data Tools</h2>
                        <p className="text-foreground/80 leading-relaxed">Organize and visualize data with sorting, filtering, and charts.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Sorting</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Filtering</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Charts</p></div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t6-data-tools.jpg")} alt="Excel data tools overview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t6-data-tools.jpg. Excel data tools interface.</div>`; } }} />
                        </div>
                    </Card>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Sorting</Badge>
                        <h2 className="text-4xl font-bold mb-4">Sorting</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Arrange data in ascending or descending order.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Select data range. Click Data tab → Sort. Choose column to sort by. Select Ascending (A-Z, 1-9) or Descending (Z-A, 9-1). Click OK. Data reorganizes by selected column values.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Organize data alphabetically or numerically</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Choose ascending or descending order</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t6-sorting.jpg")} alt="Sorting data in Excel" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t6-sorting.jpg. Sorting interface.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><TrendingUp className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Ascending</h4>
                            <p className="text-sm text-muted-foreground">A-Z, 1-9 (lowest to highest)</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Minus className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Descending</h4>
                            <p className="text-sm text-muted-foreground">Z-A, 9-1 (highest to lowest)</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Filtering</Badge>
                        <h2 className="text-4xl font-bold mb-4">Filtering</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Show only data that meets specific criteria.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t6-filtering.jpg")} alt="Filtering data in Excel" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t6-filtering.jpg. Filtering interface.</div>`; } }} />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Select data range. Click Data tab → Filter. Dropdown arrows appear in headers. Click arrow, uncheck items to hide, or use search. Click OK. Only matching rows show. Remove filter to show all data again.</p>
                            <Card className="p-6 border border-border/70">
                                <h3 className="text-lg font-bold mb-4">Filtering Steps</h3>
                                <div className="space-y-3">
                                    <div className="flex gap-3"><span className="font-bold text-primary">1.</span><span className="text-sm text-foreground/80">Select data range</span></div>
                                    <div className="flex gap-3"><span className="font-bold text-primary">2.</span><span className="text-sm text-foreground/80">Click Data → Filter</span></div>
                                    <div className="flex gap-3"><span className="font-bold text-primary">3.</span><span className="text-sm text-foreground/80">Click column dropdown arrow</span></div>
                                    <div className="flex gap-3"><span className="font-bold text-primary">4.</span><span className="text-sm text-foreground/80">Choose items to show/hide</span></div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Charts</Badge>
                        <h2 className="text-4xl font-bold mb-4">Charts</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Create visual representations of your data.</p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t6-charts.jpg")} alt="Excel charts examples" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t6-charts.jpg. Chart examples.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">Select data range. Click Insert tab → Charts. Choose chart type: Bar, Line, Pie, etc. Chart appears. Customize colors, labels, titles in Chart Tools. Charts help visualize trends and comparisons.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><BarChart3 className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Bar Chart</h4>
                            <p className="text-sm text-muted-foreground">Compare categories with bars</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><TrendingUp className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Line Chart</h4>
                            <p className="text-sm text-muted-foreground">Show trends over time</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Layout className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Pie Chart</h4>
                            <p className="text-sm text-muted-foreground">Show parts of a whole</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Data Tools</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">Sorting, filtering, and charts make large datasets manageable and insights visible. Essential for data analysis and presentations.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t6-why-matters.jpg")} alt="Data tools in use" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t6-why-matters.jpg. Data analysis examples.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/5")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/7")}>Next Topic: Excel for Work →</Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 7: EXCEL FOR WORK ---
function Topic7_ExcelForWork() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t7-excel-work.jpg")} alt="Excel for work overview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t7-excel-work.jpg. Excel work examples.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">EXCEL FOR WORK</p>
                        <h2 className="text-3xl font-semibold text-foreground">Excel for Work</h2>
                        <p className="text-foreground/80 leading-relaxed">Use Excel for practical work tasks: budgets, attendance tracking, and dashboards.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Budget sheet</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Attendance sheet</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Simple dashboards</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Budget Sheet</Badge>
                        <h2 className="text-4xl font-bold mb-4">Budget Sheet</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Create budgets to track income and expenses.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">List income sources in one column, expenses in another. Use SUM formulas to calculate totals. Subtract expenses from income for balance. Track monthly or yearly budgets. Use formatting to highlight important figures.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Track income and expenses</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Use SUM formulas for totals</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Calculate balance automatically</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t7-budget.jpg")} alt="Budget sheet example" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t7-budget.jpg. Budget sheet example.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Attendance Sheet</Badge>
                        <h2 className="text-4xl font-bold mb-4">Attendance Sheet</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Track attendance records for employees or students.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t7-attendance.jpg")} alt="Attendance sheet example" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t7-attendance.jpg. Attendance sheet example.</div>`; } }} />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">List names in rows, dates in columns. Mark Present (P) or Absent (A). Use COUNT formulas to count attendance. Calculate total days present for each person. Use conditional formatting to highlight patterns.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Mark attendance with P or A</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Use COUNT to calculate totals</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Simple Dashboards</Badge>
                        <h2 className="text-4xl font-bold mb-4">Simple Dashboards</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Create visual dashboards to summarize key data.</p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t7-dashboard.jpg")} alt="Excel dashboard example" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t7-dashboard.jpg. Dashboard example.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">Combine charts, summary tables, and key metrics on one sheet. Use formulas to calculate totals and averages. Add charts to visualize trends. Format clearly for easy reading.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><DollarSign className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Budget Sheet</h4>
                            <p className="text-sm text-muted-foreground">Track income and expenses</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Attendance Sheet</h4>
                            <p className="text-sm text-muted-foreground">Record attendance records</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><BarChart3 className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Simple Dashboards</h4>
                            <p className="text-sm text-muted-foreground">Visualize key data summaries</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Excel for Work</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">Excel skills are essential for workplace tasks like budgeting, tracking attendance, and creating data summaries for decision-making.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t7-why-matters.jpg")} alt="Excel in workplace" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t7-why-matters.jpg. Workplace Excel examples.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/6")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/8")}>Next Topic: PowerPoint Basics →</Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 8: POWERPOINT BASICS ---
function Topic8_PowerPointBasics() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">POWERPOINT BASICS</p>
                        <h2 className="text-3xl font-semibold text-foreground">PowerPoint Basics</h2>
                        <p className="text-foreground/80 leading-relaxed">Learn PowerPoint fundamentals: slides, themes, and adding images and icons.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Slides</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Themes</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Images & icons</p></div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t8-powerpoint-basics.jpg")} alt="PowerPoint basics overview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t8-powerpoint-basics.jpg. PowerPoint interface overview.</div>`; } }} />
                        </div>
                    </Card>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Slides</Badge>
                        <h2 className="text-4xl font-bold mb-4">Slides</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Slides are individual pages in a presentation.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">A presentation consists of multiple slides. Each slide can contain text, images, charts, and more. Click New Slide to add slides. Choose slide layouts from the Layout menu. Delete slides by right-clicking in the sidebar.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Each slide is one page</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Add slides with New Slide button</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Choose layouts for different content</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t8-slides.jpg")} alt="PowerPoint slides" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t8-slides.jpg. Slides interface.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Themes</Badge>
                        <h2 className="text-4xl font-bold mb-4">Themes</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Apply themes for consistent design across slides.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t8-themes.jpg")} alt="PowerPoint themes" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t8-themes.jpg. Themes interface.</div>`; } }} />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Go to Design tab to see themes. Click a theme to apply it to all slides. Themes include colors, fonts, and background styles. Customize theme colors if needed. Themes give presentations a professional, consistent look.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Apply themes from Design tab</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Themes include colors and fonts</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Images & Icons</Badge>
                        <h2 className="text-4xl font-bold mb-4">Images and Icons</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Add visual elements to enhance presentations.</p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t8-images-icons.jpg")} alt="Images and icons in PowerPoint" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t8-images-icons.jpg. Images and icons examples.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">Click Insert → Pictures to add images. Use Insert → Icons for icon library. Resize and move images by dragging. Format images with Picture Tools. Use icons for visual emphasis.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Presentation className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Slides</h4>
                            <p className="text-sm text-muted-foreground">Individual pages in presentation</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Layout className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Themes</h4>
                            <p className="text-sm text-muted-foreground">Consistent design templates</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Image className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Images & Icons</h4>
                            <p className="text-sm text-muted-foreground">Visual elements for slides</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Presentation className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">PowerPoint Basics</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">PowerPoint basics are essential for creating presentations for school, work, or personal use. Understanding slides, themes, and visuals helps communicate ideas effectively.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t8-why-matters.jpg")} alt="PowerPoint presentations" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t8-why-matters.jpg. Presentation examples.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/7")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/9")}>Next Topic: PowerPoint Skills →</Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 9: POWERPOINT SKILLS ---
function Topic9_PowerPointSkills() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t9-powerpoint-skills.jpg")} alt="PowerPoint skills overview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t9-powerpoint-skills.jpg. PowerPoint skills interface.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">POWERPOINT SKILLS</p>
                        <h2 className="text-3xl font-semibold text-foreground">PowerPoint Skills</h2>
                        <p className="text-foreground/80 leading-relaxed">Add animations, transitions, and run slide shows for engaging presentations.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Animations</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Transitions</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Slide show</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Animations</Badge>
                        <h2 className="text-4xl font-bold mb-4">Animations</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Add motion effects to slide elements.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Select text or object. Go to Animations tab. Choose animation effect: Fade, Fly In, Wipe, etc. Set timing and duration. Preview with Play button. Animations draw attention to key points.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Add motion to text and objects</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Choose from various effects</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t9-animations.jpg")} alt="Animations in PowerPoint" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t9-animations.jpg. Animations interface.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Transitions</Badge>
                        <h2 className="text-4xl font-bold mb-4">Transitions</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Add effects when moving between slides.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t9-transitions.jpg")} alt="Transitions in PowerPoint" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t9-transitions.jpg. Transitions interface.</div>`; } }} />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Select slide. Go to Transitions tab. Choose transition effect: Fade, Push, Wipe, etc. Set duration and sound if needed. Apply to one slide or all. Transitions make slide changes smooth.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Smooth effects between slides</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Apply to all slides or individual</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Slide Show</Badge>
                        <h2 className="text-4xl font-bold mb-4">Slide Show</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Present slides in full-screen mode.</p>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                        <div className="relative w-full aspect-video bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t9-slideshow.jpg")} alt="Slide show mode" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t9-slideshow.jpg. Slide show mode.</div>`; } }} />
                        </div>
                    </Card>
                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">Click Slide Show tab → From Beginning or press F5. Use arrow keys or click to navigate. Press Esc to exit. Presenter view shows notes. Practice before presenting.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Sparkles className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Animations</h4>
                            <p className="text-sm text-muted-foreground">Motion effects for elements</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Layout className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Transitions</h4>
                            <p className="text-sm text-muted-foreground">Effects between slides</p>
                        </Card>
                        <Card className="p-6 border border-border/70 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Play className="w-8 h-8 text-primary" /></div>
                            <h4 className="font-bold mb-2">Slide Show</h4>
                            <p className="text-sm text-muted-foreground">Full-screen presentation mode</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">PowerPoint Skills</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">Animations, transitions, and slide shows make presentations engaging and professional. Essential skills for effective communication.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t9-why-matters.jpg")} alt="Engaging presentations" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t9-why-matters.jpg. Presentation examples.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/8")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/10")}>Next Topic: PowerPoint for Work →</Button>
                </div>
            </section>
        </div>
    );
}

// --- TOPIC 10: POWERPOINT FOR WORK ---
function Topic10_PowerPointForWork() {
    const navigate = useNavigate();

    return (
        <div className="space-y-20 pb-20">
            <section className="container mx-auto px-4 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">POWERPOINT FOR WORK</p>
                        <h2 className="text-3xl font-semibold text-foreground">PowerPoint for Work</h2>
                        <p className="text-foreground/80 leading-relaxed">Create professional business presentations for meetings and reports.</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Business presentations</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">College presentations</p></div>
                            <div className="flex items-start gap-3"><span className="text-primary font-semibold">•</span><p className="text-sm text-foreground/80">Professional templates</p></div>
                        </div>
                    </div>
                    <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                        <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                            <img src={getImageUrl("module-media/m16-t10-powerpoint-work.jpg")} alt="Business presentations" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t10-powerpoint-work.jpg. Business presentation examples.</div>`; } }} />
                        </div>
                    </Card>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Business Presentations</Badge>
                        <h2 className="text-4xl font-bold mb-4">Business Presentations</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Create professional presentations for business meetings, proposals, and reports.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">Start with a title slide. Add agenda slide. Use clear headings for each section. Include data with charts and tables. Keep text concise. Use professional themes. Add company logo. End with summary or next steps slide.</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Use clear structure and headings</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Include charts for data visualization</span></div>
                                <div className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/80">Keep slides concise and professional</span></div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img src={getImageUrl("module-media/m16-t10-business-presentation.jpg")} alt="Business presentation structure" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t10-business-presentation.jpg. Business presentation example.</div>`; } }} />
                            </div>
                        </Card>
                    </div>
                    <Card className="p-6 border border-border/70">
                        <h3 className="text-lg font-bold mb-4">Presentation Structure</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex gap-3"><span className="font-bold text-primary">1.</span><span className="text-sm text-foreground/80">Title slide with topic and presenter</span></div>
                                <div className="flex gap-3"><span className="font-bold text-primary">2.</span><span className="text-sm text-foreground/80">Agenda or overview slide</span></div>
                                <div className="flex gap-3"><span className="font-bold text-primary">3.</span><span className="text-sm text-foreground/80">Main content slides with clear headings</span></div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3"><span className="font-bold text-primary">4.</span><span className="text-sm text-foreground/80">Use charts and visuals for data</span></div>
                                <div className="flex gap-3"><span className="font-bold text-primary">5.</span><span className="text-sm text-foreground/80">Summary or conclusion slide</span></div>
                                <div className="flex gap-3"><span className="font-bold text-primary">6.</span><span className="text-sm text-foreground/80">Questions or next steps slide</span></div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 2: COLLEGE PRESENTATIONS */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">College Presentations</Badge>
                        <h2 className="text-4xl font-bold mb-4">College Presentations</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Academic talks given by students to share research, project findings, or course assignments.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t10-college-presentation.jpg")}
                                    alt="Student giving a college presentation"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t10-college-presentation.jpg. College presentation setting.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                College presentations focus on educational depth and demonstration of knowledge. They often involve sharing findings from original research or explaining complex concepts learned in class.
                            </p>
                            <div className="space-y-4 pt-2">
                                <div className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <Target className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm">Purpose</h4>
                                        <p className="text-xs text-muted-foreground">To demonstrate understanding of a subject and improve communication skills.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <Users className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm">Audience</h4>
                                        <p className="text-xs text-muted-foreground">Usually your professors and classmates in an academic environment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <Sparkles className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm">Style</h4>
                                        <p className="text-xs text-muted-foreground">Often more creative or educational, focusing on learning and classroom discussion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="p-6 border border-border/70">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h4 className="font-bold flex items-center gap-2 text-primary">
                                    <BookOpen className="w-5 h-5" /> Academic Content
                                </h4>
                                <p className="text-sm text-muted-foreground">Detailed explanations, diagrams, and specific data related to your syllabus and course requirements.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold flex items-center gap-2 text-primary">
                                    <CheckCircle className="w-5 h-5" /> Academic Standards
                                </h4>
                                <ul className="space-y-1">
                                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary" /> Citing sources (APA, MLA styles)
                                    </li>
                                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary" /> Encouraging classroom participation
                                    </li>
                                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary" /> Linking to course objectives
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 3: PROFESSIONAL TEMPLATES */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Professional Templates</Badge>
                        <h2 className="text-4xl font-bold mb-4">Professional Templates</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Pre-designed layouts used in business settings to ensure consistency, branding, and efficiency.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                                Professional templates save time and maintain a high-quality, uniform look across an organization. They are the backbone of corporate communication.
                            </p>
                            <div className="grid gap-3">
                                <div className="p-4 rounded-2xl border border-border/70 bg-card hover:bg-primary/5 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Target className="w-4 h-4 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-sm">Goal: Efficiency</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-medium">Purpose: To save time and maintain a high-quality, uniform look across a company.</p>
                                </div>
                                <div className="p-4 rounded-2xl border border-border/70 bg-card hover:bg-primary/5 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Users className="w-4 h-4 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-sm">Audience: Stakeholders</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-medium">Clients, stakeholders, managers, or potential investors who expect a professional look.</p>
                                </div>
                                <div className="p-4 rounded-2xl border border-border/70 bg-card hover:bg-primary/5 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-sm">Style: Corporate Brand</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-medium">Clean, minimal, and branded using specific company colors, fonts, and logos.</p>
                                </div>
                            </div>
                        </div>
                        <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                                <img
                                    src={getImageUrl("module-media/m16-t10-professional-templates.jpg")}
                                    alt="Corporate PowerPoint templates"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const parent = (e.target as HTMLImageElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML =
                                                `<div class="p-8 text-center text-sm text-muted-foreground">
                                                    Add module-media/m16-t10-professional-templates.jpg. Corporate slide templates.
                                                </div>`;
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>

                    <Card className="bg-primary/5 border-primary/20 p-8 rounded-[32px]">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Layout className="w-10 h-10 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Practical Utility</h4>
                                <p className="text-foreground/70 leading-relaxed">
                                    Templates provide ready-made structures for reports, business proposals, and financial updates. You don't have to design from scratch, allowing you to focus entirely on the data and your message.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: COMPARISON */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold">Choosing the Right Path</h3>
                        <p className="text-muted-foreground">A quick comparison between academic and business presentation styles.</p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
                        <div className="grid grid-cols-3 bg-primary/10 p-4 border-b border-border/70 text-sm font-bold">
                            <div>Feature</div>
                            <div>College Presentations</div>
                            <div>Professional Templates</div>
                        </div>
                        <div className="divide-y divide-border/50">
                            <div className="grid grid-cols-3 p-4 items-center text-sm">
                                <div className="font-semibold text-primary">Goal</div>
                                <div className="text-muted-foreground">To learn and show knowledge</div>
                                <div className="text-muted-foreground font-medium text-foreground">To persuade or inform quickly</div>
                            </div>
                            <div className="grid grid-cols-3 p-4 items-center text-sm">
                                <div className="font-semibold text-primary">Design</div>
                                <div className="text-muted-foreground">Flexible and creative</div>
                                <div className="text-muted-foreground font-medium text-foreground">Strict and branded</div>
                            </div>
                            <div className="grid grid-cols-3 p-4 items-center text-sm">
                                <div className="font-semibold text-primary">Focus</div>
                                <div className="text-muted-foreground">In-depth theory</div>
                                <div className="text-muted-foreground font-medium text-foreground text-pretty">High-level results and "call to action"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                    <div className="text-center space-y-2">
                        <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">PowerPoint for Work</p>
                        <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-center">Professional presentations are essential for business communication. Well-designed slides help convey ideas clearly and make a strong impression in meetings and proposals.</p>
                    <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                        <div className="relative w-full h-full min-h-[260px] bg-muted">
                            <img src={getImageUrl("module-media/m16-t10-why-matters.jpg")} alt="Business presentations in use" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add module-media/m16-t10-why-matters.jpg. Professional presentation examples.</div>`; } }} />
                        </div>
                    </Card>
                </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                    <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/16/topic/9")}>← Previous Topic</Button>
                    <Button size="lg" className="w-full md:w-auto" disabled>Last Topic</Button>
                </div>
            </section>
        </div>
    );
}

function Module16() {
    const { topicId } = useParams();

    if (!topicId || topicId === "1" || topicId === "m16-t1") return <Topic1_MSWordBasics />;
    if (topicId === "2" || topicId === "m16-t2") return <Topic2_WordEssentialSkills />;
    if (topicId === "3" || topicId === "m16-t3") return <Topic3_WordProfessionalUse />;
    if (topicId === "4" || topicId === "m16-t4") return <Topic4_MSExcelBasics />;
    if (topicId === "5" || topicId === "m16-t5") return <Topic5_ExcelFormulas />;
    if (topicId === "6" || topicId === "m16-t6") return <Topic6_ExcelDataTools />;
    if (topicId === "7" || topicId === "m16-t7") return <Topic7_ExcelForWork />;
    if (topicId === "8" || topicId === "m16-t8") return <Topic8_PowerPointBasics />;
    if (topicId === "9" || topicId === "m16-t9") return <Topic9_PowerPointSkills />;
    if (topicId === "10" || topicId === "m16-t10") return <Topic10_PowerPointForWork />;

    // Fallback
    return <Topic1_MSWordBasics />;
}

export default Module16;


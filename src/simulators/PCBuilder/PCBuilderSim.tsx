import { useState } from 'react';
import { PCBuilderProvider, usePCBuilder } from './PCBuilderContext';
import { PartsLibrary } from './PartsLibrary';
import { Motherboard } from './Motherboard';
import { BuildSummary } from './BuildSummary';
import { Button } from '@/components/ui/button';
import { Wrench, Cpu, ClipboardList, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { parts } from './pc-parts-data';

// Mobile-only: Selection Banner Component
const MobileSelectionBanner = () => {
    const { selectedPartId, clearSelection } = usePCBuilder();
    const selectedPart = parts.find(p => p.id === selectedPartId);

    if (!selectedPart) return null;

    return (
        <div className="bg-primary text-primary-foreground px-4 py-2 flex items-center justify-between gap-2 shrink-0">
            <div className="flex-1 min-w-0">
                <p className="text-xs font-medium opacity-80">Selected Component:</p>
                <p className="font-bold truncate">{selectedPart.name}</p>
            </div>
            <Button
                size="sm"
                variant="secondary"
                onClick={clearSelection}
                className="shrink-0"
            >
                <X className="w-4 h-4 mr-1" /> Cancel
            </Button>
        </div>
    );
};

// Mobile Content Wrapper - Renders inside Provider
const MobileLayout = () => {
    const [activeTab, setActiveTab] = useState<'parts' | 'board' | 'build'>('parts');
    const { selectedPartId } = usePCBuilder();

    // Auto-switch to board tab when a part is selected
    const effectiveTab = selectedPartId && activeTab === 'parts' ? 'board' : activeTab;

    return (
        <div className="flex flex-col w-full" style={{ height: '100%' }}>
            {/* Selection Banner - Shows when a part is selected */}
            <MobileSelectionBanner />

            {/* Tab Content - Explicit calc height */}
            <div className="flex-1 min-h-0 overflow-y-auto">
                {/* Parts Tab */}
                {effectiveTab === 'parts' && (
                    <div className="h-full">
                        <PartsLibrary />
                    </div>
                )}

                {/* Board Tab */}
                {effectiveTab === 'board' && (
                    <div className="p-4 bg-muted/50">
                        <div className="flex flex-col items-center">
                            <p className="text-xs text-muted-foreground mb-2 text-center">
                                {selectedPartId ? '👆 Tap a slot to place the selected part' : 'Tap a part from Parts tab first'}
                            </p>
                            <Motherboard />
                        </div>
                    </div>
                )}

                {/* Build Tab */}
                {effectiveTab === 'build' && (
                    <div className="h-full">
                        <BuildSummary />
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <nav className="shrink-0 border-t border-border bg-background flex items-center justify-around px-2 py-2">
                <button
                    onClick={() => setActiveTab('parts')}
                    className={cn(
                        "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors",
                        activeTab === 'parts' ? "text-primary bg-primary/10" : "text-muted-foreground"
                    )}
                >
                    <Wrench className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Parts</span>
                </button>
                <button
                    onClick={() => setActiveTab('board')}
                    className={cn(
                        "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors relative",
                        activeTab === 'board' || effectiveTab === 'board' ? "text-primary bg-primary/10" : "text-muted-foreground"
                    )}
                >
                    <Cpu className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Board</span>
                    {selectedPartId && (
                        <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full animate-ping" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('build')}
                    className={cn(
                        "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors",
                        activeTab === 'build' ? "text-primary bg-primary/10" : "text-muted-foreground"
                    )}
                >
                    <ClipboardList className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Build</span>
                </button>
            </nav>
        </div>
    );
};

const PCBuilderSim = () => {
    return (
        <div className="h-full bg-background text-foreground font-sans">
            <PCBuilderProvider>
                {/* ===== DESKTOP LAYOUT (md and up) ===== */}
                <div className="hidden md:flex flex-row h-full overflow-hidden">
                    {/* Left Panel: Parts Library */}
                    <PartsLibrary />

                    {/* Center Panel: Workbench */}
                    <main className="flex-1 min-w-0 relative bg-muted/50">
                        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                        <div className="absolute inset-0 overflow-y-auto p-4 md:p-8">
                            <div className="flex flex-col items-center pb-8">
                                <div className="mb-6 text-center">
                                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">PC Build Workbench</h1>
                                    <p className="text-muted-foreground mt-1">Drag components from the library to the motherboard to build your system.</p>
                                </div>
                                <Motherboard />
                            </div>
                        </div>
                    </main>

                    {/* Right Panel: Summary */}
                    <BuildSummary />
                </div>

                {/* ===== MOBILE LAYOUT (below md) ===== */}
                <div className="md:hidden" style={{ height: '100%' }}>
                    <MobileLayout />
                </div>
            </PCBuilderProvider>
        </div>
    );
};

export default PCBuilderSim;


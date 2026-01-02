
import React, { useState } from 'react';
import { initialParts, tutorialSteps, PCPart } from './data';
import { CheckCircle2, X } from 'lucide-react';

// Import assets
import motherboardBg from '../../assets/simulator-media/motherboard.png';
import cpuImg from '../../assets/simulator-media/cpu.png';
import ramImg from '../../assets/simulator-media/ram.png';
import gpuImg from '../../assets/simulator-media/gpu.png';
import ssdImg from '../../assets/simulator-media/ssd.png';
import psuImg from '../../assets/simulator-media/psu.png';
import fanImg from '../../assets/simulator-media/fan.png';

const PCBuilderSim = () => {
    const [installedParts, setInstalledParts] = useState<string[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [draggedPart, setDraggedPart] = useState<PCPart | null>(null);
    const [isGuideOpen, setIsGuideOpen] = useState(false); // Default closed, user opens it

    const currentStep = tutorialSteps[currentStepIndex];

    const handleDragStart = (part: PCPart) => {
        // Free mode: Allow dragging any part
        setDraggedPart(part);
    };

    const handleDrop = (e: React.DragEvent, slotId: string) => {
        e.preventDefault();
        if (!draggedPart) return;

        // Check if this is the correct slot for the part (Universal validation)
        if (slotId === draggedPart.slotId) {
            setInstalledParts(prev => [...prev, draggedPart.id]);

            // If this move matched the current guide step, advance the guide
            // (This keeps the guide in sync if the user follows it, but doesn't block them if they don't)
            if (draggedPart.id === currentStep.targetPartId && slotId === currentStep.targetSlotId) {
                if (currentStepIndex < tutorialSteps.length - 1) {
                    setCurrentStepIndex(prev => prev + 1);
                } else {
                    // Check if ALL parts are installed to declare completion
                    // Simple check: if we are at the last step and completed it
                    setCompleted(true);
                }
            }

            // Check for actual completion (if user went out of order)
            // If all initialParts are installed
            if (installedParts.length + 1 >= initialParts.length) {
                setCompleted(true);
            }

            setDraggedPart(null);
        }
    };

    const allowDrop = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const getPartImage = (type: string) => {
        switch (type) {
            case 'cpu': return cpuImg;
            case 'ram': return ramImg;
            case 'gpu': return gpuImg;
            case 'storage': return ssdImg;
            case 'psu': return psuImg;
            case 'fan': return fanImg;
            default: return '';
        }
    };

    return (
        <div className="w-full h-full bg-background text-foreground flex flex-col md:flex-row overflow-hidden fixed inset-0 top-[60px]"> {/* Fixed inset to constrain height, top-60px to account for header */}

            {/* --- LEFT: THE PC CASE (Build Area) --- */}
            <div className="flex-1 relative flex flex-col h-full min-h-0 min-w-0">
                {/* Scrollable Container for the Case */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar bg-muted/10">
                    <div className="min-h-full flex flex-col items-center justify-center py-8">
                        <div className="w-full max-w-[800px] bg-card rounded-3xl border border-border shadow-2xl relative p-8 shrink-0">
                            <div className="absolute top-6 left-8 z-10">
                                <h2 className="text-muted-foreground font-bold tracking-widest uppercase text-sm">Gaming Rig 3000</h2>
                                <p className="text-xs text-muted-foreground/70">Virtual Assembly</p>
                            </div>

                            {/* Motherboard Area */}
                            <div className="relative w-full aspect-[4/4.5] shadow-lg rounded-xl overflow-hidden bg-black/20">
                                <img
                                    src={motherboardBg}
                                    alt="Motherboard"
                                    className="w-full h-full object-contain"
                                />

                                {/* OVERLAY SLOTS */}
                                <Slot
                                    id="slot-cpu"
                                    label="CPU"
                                    top="18%" left="38%" width="24%" height="20%"
                                    currentStep={currentStep}
                                    installedParts={installedParts}
                                    onDrop={handleDrop}
                                    allowDrop={allowDrop}
                                    getPartImage={getPartImage}
                                    isGuideOpen={isGuideOpen}
                                />

                                <Slot
                                    id="slot-cpu-fan"
                                    label=""
                                    top="16%" left="36%" width="28%" height="24%"
                                    currentStep={currentStep}
                                    installedParts={installedParts}
                                    zIndex={20}
                                    onDrop={handleDrop}
                                    allowDrop={allowDrop}
                                    invisible={!installedParts.includes('cpu-intel')}
                                    getPartImage={getPartImage}
                                    isGuideOpen={isGuideOpen}
                                />

                                {/* 3. RAM SLOTS (4 Channels) */}
                                <div className="absolute top-[16%] left-[65%] w-[18%] h-[35%] flex gap-1 justify-between">
                                    <Slot
                                        id="slot-ram-1"
                                        label="D1"
                                        width="22%" height="100%"
                                        currentStep={currentStep}
                                        installedParts={installedParts}
                                        onDrop={handleDrop}
                                        allowDrop={allowDrop}
                                        getPartImage={getPartImage}
                                        // Relative to parent flex container
                                        top="0" left="0"
                                        isGuideOpen={isGuideOpen}
                                    />
                                    <Slot
                                        id="slot-ram-2"
                                        label="D2"
                                        width="22%" height="100%"
                                        currentStep={currentStep}
                                        installedParts={installedParts}
                                        onDrop={handleDrop}
                                        allowDrop={allowDrop}
                                        getPartImage={getPartImage}
                                        top="0" left="25%"
                                        isGuideOpen={isGuideOpen}
                                    />
                                    <Slot
                                        id="slot-ram-3"
                                        label="D3"
                                        width="22%" height="100%"
                                        currentStep={currentStep}
                                        installedParts={installedParts}
                                        onDrop={handleDrop}
                                        allowDrop={allowDrop}
                                        getPartImage={getPartImage}
                                        top="0" left="50%"
                                        isGuideOpen={isGuideOpen}
                                    />
                                    <Slot
                                        id="slot-ram-4"
                                        label="D4"
                                        width="22%" height="100%"
                                        currentStep={currentStep}
                                        installedParts={installedParts}
                                        onDrop={handleDrop}
                                        allowDrop={allowDrop}
                                        getPartImage={getPartImage}
                                        top="0" left="75%"
                                        isGuideOpen={isGuideOpen}
                                    />
                                </div>

                                <Slot
                                    id="slot-pcie-1"
                                    label="PCIe x16"
                                    top="60%" left="15%" width="80%" height="8%"
                                    currentStep={currentStep}
                                    installedParts={installedParts}
                                    onDrop={handleDrop}
                                    allowDrop={allowDrop}
                                    getPartImage={getPartImage}
                                    isGuideOpen={isGuideOpen}
                                />

                                <Slot
                                    id="slot-m2"
                                    label="M.2"
                                    top="52%" left="40%" width="25%" height="4%"
                                    currentStep={currentStep}
                                    installedParts={installedParts}
                                    onDrop={handleDrop}
                                    allowDrop={allowDrop}
                                    getPartImage={getPartImage}
                                    isGuideOpen={isGuideOpen}
                                />
                            </div>

                            {/* PSU SLOT */}
                            <div className="mt-8 relative h-32 w-full border-2 border-dashed border-border rounded-xl flex items-center justify-center bg-muted/20">
                                <Slot
                                    id="slot-psu"
                                    label="Power Supply Unit (PSU)"
                                    top="0" left="0" width="100%" height="100%"
                                    currentStep={currentStep}
                                    installedParts={installedParts}
                                    onDrop={handleDrop}
                                    allowDrop={allowDrop}
                                    isAbsolute={true}
                                    getPartImage={getPartImage}
                                    isGuideOpen={isGuideOpen}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- TOP: TUTORIAL GUIDE (Overlay) --- */}
                {/* Repositioned to top-right and ensures no blocking of workspace */}
                <div className="absolute top-6 right-8 z-50 pointer-events-none flex flex-col items-end">
                    {/* Toggle Button / Minimized State */}
                    {!isGuideOpen && !completed && (
                        <button
                            onClick={() => setIsGuideOpen(true)}
                            className="pointer-events-auto bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-lg font-semibold text-sm transition-all animate-in fade-in slide-in-from-top-4 flex items-center gap-2"
                        >
                            <span>Show Guide</span>
                            <span className="bg-white/20 px-1.5 rounded text-xs">Step {currentStepIndex + 1}</span>
                        </button>
                    )}

                    {/* Expanded Guide Card */}
                    {(isGuideOpen || completed) && (
                        <div className={`
                            pointer-events-auto relative backdrop-blur-xl border px-6 py-6 rounded-2xl text-center shadow-2xl transition-all duration-300 w-[90vw] md:w-[400px]
                            ${completed
                                ? 'bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400'
                                : 'bg-background/95 border-primary/20 text-foreground'
                            }
                        `}>
                            {/* Close Button if not complete */}
                            {!completed && (
                                <button
                                    onClick={() => setIsGuideOpen(false)}
                                    className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}

                            <div className="flex flex-col items-center justify-center gap-3">
                                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${completed ? 'bg-green-500/20' : 'bg-primary/20 text-primary'}`}>
                                    {completed ? 'Complete' : `Step ${currentStepIndex + 1} of ${tutorialSteps.length}`}
                                </span>
                                <span className="font-medium text-base md:text-lg leading-relaxed">
                                    {completed ? "System Built Successfully! Ready to Boot." : currentStep.message}
                                </span>
                                {!completed && (
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Tip: Drag the highlighted component to the pulsing slot.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- RIGHT: PARTS TRAY (Independent Scroll) --- */}
            <div className="w-full md:w-[350px] bg-card border-t md:border-t-0 md:border-l border-border flex flex-col shadow-xl h-[40vh] md:h-full z-20 min-h-0">
                <div className="p-5 border-b border-border bg-muted/30 shrink-0">
                    <h3 className="font-bold text-lg text-foreground">Components</h3>
                    <p className="text-xs text-muted-foreground">Drag items to install</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {initialParts.map(part => {
                        // NOTE: Removed 'isInstalled' check to keep items in list forever
                        const isTarget = currentStep.targetPartId === part.id;
                        const isInstalled = installedParts.includes(part.id);

                        // Show visual hints ONLY if guide is open
                        const showHint = isGuideOpen && isTarget;

                        return (
                            <div
                                key={part.id}
                                draggable={!isInstalled} // Only draggable if not already installed
                                onDragStart={(e) => {
                                    if (!isInstalled) handleDragStart(part);
                                    else e.preventDefault();
                                }}
                                className={`
                                    p-4 rounded-xl border flex items-center gap-4 transition-all duration-300 group
                                    ${!isInstalled
                                        ? 'cursor-grab hover:bg-muted/50 hover:scale-[1.02] shadow-sm'
                                        : 'opacity-50 cursor-not-allowed grayscale'
                                    }
                                    ${showHint && !isInstalled
                                        ? 'border-primary bg-primary/5 shadow-md ring-1 ring-primary/20'
                                        : 'border-border bg-card'
                                    }
                                `}
                            >
                                <div className={`w-20 h-20 p-2 rounded-lg bg-background flex items-center justify-center border border-border ${showHint ? 'group-hover:border-primary/50' : ''}`}>
                                    <img src={getPartImage(part.type)} alt={part.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <p className={`font-bold text-sm ${showHint && !isInstalled ? 'text-primary' : 'text-foreground'}`}>{part.name}</p>
                                        {isInstalled && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                    </div>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{part.type}</p>
                                    {showHint && !isInstalled && <p className="text-[10px] text-primary mt-1 font-semibold animate-pulse">Recommended Next Step</p>}
                                    {isInstalled && <p className="text-[10px] text-green-500 mt-1 font-semibold">Installed</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

// --- SUB-COMPONENT: SLOT ---
// --- SUB-COMPONENT: SLOT ---
interface SlotProps {
    id: string;
    label: string;
    width: string;
    height: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    currentStep: any;
    installedParts: string[];
    onDrop: (e: React.DragEvent, slotId: string) => void;
    allowDrop: (e: React.DragEvent) => void;
    zIndex?: number;
    isAbsolute?: boolean;
    invisible?: boolean;
    getPartImage: (type: string) => string;
    isGuideOpen: boolean;
}

const Slot: React.FC<SlotProps> = ({
    id, label, top, left, right, bottom, width, height,
    currentStep, installedParts, onDrop, allowDrop,
    zIndex = 1, invisible = false, getPartImage, isGuideOpen
}) => {
    const isTarget = currentStep?.targetSlotId === id;

    // Find installed part ID for this slot (checking initialParts to map slot->part)
    // NOTE: This logic assumes 1-to-1 mapping for simplicity in this demo.
    // In a real app we'd need robust slot-to-part logic.
    const installedPartId = installedParts.find(pId => {
        // We know which part maps to which slot from the part definitions (implied or explicit)
        // Check data.ts or just check if the installed part is INTENDED for this slot
        // For now, simpler: check if ANY installed part is the "target" of a step that targeted THIS slot.
        // Actually, let's use the currentStep logic to infer.
        // Or better: pass the part list and check slotId property if it existed.
        return initialParts.find(i => i.id === pId)?.slotId === id;
    });

    if (invisible && !installedPartId) return null;

    const style: React.CSSProperties = {
        top, left, right, bottom, width, height, zIndex,
        position: 'absolute'
    };

    // Only show visual hints if Guide is OPEN
    const showHint = isGuideOpen && isTarget;

    return (
        <div
            onDrop={(e) => onDrop(e, id)}
            onDragOver={allowDrop}
            style={style}
            className={`
                rounded-lg flex items-center justify-center text-xs text-center border-2 transition-all duration-500 backdrop-blur-sm
                ${installedPartId
                    ? 'border-transparent' // Image shows, no border
                    : showHint
                        ? 'border-primary border-dashed bg-primary/10 animate-pulse shadow-[0_0_20px_rgba(var(--primary),0.2)]'
                        : 'border-white/5 bg-white/5 text-transparent hover:border-white/20 hover:text-white/40' // Subtle interactive state when no guide
                }
            `}
        >
            {installedPartId ? (
                <div className="w-full h-full flex items-center justify-center animate-in zoom-in spin-in-1 duration-500">
                    {(() => {
                        const part = initialParts.find(p => p.id === installedPartId);
                        return part ? (
                            <img src={getPartImage(part.type)} alt={part.name} className="w-full h-full object-contain drop-shadow-lg" />
                        ) : null;
                    })()}
                    {/* Success Checkmark Overlay */}
                    <div className="absolute -top-2 -right-2 bg-green-500 text-black rounded-full p-0.5 shadow-lg animate-in fade-in zoom-in delay-300">
                        <CheckCircle2 className="w-3 h-3" />
                    </div>
                </div>
            ) : (
                <span className={`opacity-50 font-mono text-[10px] uppercase tracking-wider ${showHint ? 'opacity-100' : 'hidden group-hover:block'}`}>{label}</span>
            )}
        </div>
    );
};

export default PCBuilderSim;

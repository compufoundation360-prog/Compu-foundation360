import { useState } from 'react';
import { usePCBuilder } from './PCBuilderContext';
import { ZoneId } from './pc-parts-data';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface DropZoneProps {
    id: ZoneId;
    label: string;
    className?: string;
    icon?: React.ReactNode;
    showPartName?: boolean;
}

export const DropZone = ({ id, label, className, icon, showPartName = true }: DropZoneProps) => {
    const { handleDrop, placedParts, removePart, placeSelectedPart, selectedPartId } = usePCBuilder();
    const [isOver, setIsOver] = useState(false);

    const part = placedParts[id];
    const isPlaced = !!part;
    const hasSelection = !!selectedPartId; // Mobile: Is there a part selected waiting to be placed?

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        setIsOver(true);
    };

    const onDragLeave = () => {
        setIsOver(false);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsOver(false);
        const partId = e.dataTransfer.getData('text/plain');
        handleDrop(partId, id);
    };

    // Mobile: Tap to place selected part
    const handleClick = () => {
        if (!isPlaced && selectedPartId) {
            placeSelectedPart(id);
        }
    };

    return (
        <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={handleClick}
            className={cn(
                "absolute flex items-center justify-center transition-all duration-200",
                "border-2 border-dashed rounded-lg",
                !isPlaced && "border-blue-300/80 dark:border-blue-700/80 bg-blue-50/30 dark:bg-blue-900/10 hover:border-blue-500 hover:bg-blue-100/40 hover:scale-[1.02]",
                isOver && !isPlaced && "border-blue-600 bg-blue-200/50 dark:bg-blue-800/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10",
                isPlaced && "border-emerald-500 bg-emerald-100/80 dark:bg-emerald-900/60 shadow-md backdrop-blur-sm",
                // Mobile: Highlight empty slots when a part is selected
                !isPlaced && hasSelection && "border-amber-400 bg-amber-100/50 dark:bg-amber-900/30 animate-pulse cursor-pointer",
                className
            )}
            data-testid={`dropzone-${id}`}
        >
            {isPlaced ? (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="w-full h-full flex flex-col items-center justify-center text-emerald-800 dark:text-emerald-100 relative group cursor-pointer p-1">
                                <button
                                    onClick={(e) => { e.stopPropagation(); removePart(id); }}
                                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-20"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                                {icon}
                                {showPartName && (
                                    <span className="text-[9px] font-bold mt-0.5 px-1.5 py-0.5 bg-background/80 rounded full leading-none text-center line-clamp-2 max-w-full">
                                        {part.name}
                                    </span>
                                )}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            <p>{part.name}</p>
                            <p className="text-xs text-muted-foreground">{part.type.toUpperCase()}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ) : (
                <div className={cn(
                    "text-center p-1 pointer-events-none flex flex-col items-center justify-center h-full w-full",
                    isOver ? "text-blue-700 dark:text-blue-300" : "text-blue-900/70 dark:text-blue-100/70"
                )}>
                    <span className="text-[10px] uppercase font-black tracking-tighter leading-tight drop-shadow-sm select-none">
                        {label}
                    </span>
                </div>
            )}
        </div>
    );
};

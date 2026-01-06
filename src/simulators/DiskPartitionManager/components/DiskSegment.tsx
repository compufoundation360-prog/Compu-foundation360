import { PartitionSegment, formatSize } from "../lib/simulator-types";
import { cn } from "@/lib/utils";
import { useSimulatorStore } from "../store/simulator-store";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { Trash2, FolderOpen, Maximize, Minimize, PenTool, Disc } from "lucide-react";

interface DiskSegmentProps {
    segment: PartitionSegment;
    diskId: string;
    totalSize: number;
    onAction: (action: string, segment: PartitionSegment) => void;
}

export function DiskSegment({ segment, diskId, totalSize, onAction }: DiskSegmentProps) {
    const { selectSegment, selectedSegmentId, disks } = useSimulatorStore();

    // No more manual width calculation!
    // We use flex-grow based on MB size. The browser handles the pixels.
    const isSelected = selectedSegmentId === segment.id;

    // Validate flex value to prevent layout crashes
    const safeFlexValue = Math.max(1, Math.min(segment.sizeMB || 1, 999999999));

    // Check if Extend is possible (next segment is Unallocated)
    const isExtendable = () => {
        const disk = disks.find(d => d.id === diskId);
        if (!disk) return false;
        const index = disk.segments.findIndex(s => s.id === segment.id);
        if (index === -1 || index === disk.segments.length - 1) return false;
        return disk.segments[index + 1].type === "Unallocated";
    };

    const isUnallocated = segment.type === "Unallocated";

    return (
        <ContextMenu>
            <ContextMenuTrigger className="h-full block" style={{ flex: safeFlexValue, minWidth: '40px' }}>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        selectSegment(segment.id);
                        // Trigger mobile action sheet if on mobile!
                        if (window.innerWidth < 768) {
                            onAction("mobile_tap", segment);
                        }
                    }}
                    className={cn(
                        "h-full border-r-2 border-background/50 relative group cursor-pointer transition-all duration-200 overflow-hidden", // h-full to fill height
                        isUnallocated ? "bg-zinc-900 pattern-diagonal-lines" : "bg-primary hover:bg-primary-dark",
                        isSelected && "ring-2 ring-foreground z-20 shadow-lg",
                        "hover:brightness-110"
                    )}
                >
                    {/* Top Bar Indicator */}
                    <div className={cn(
                        "h-1.5 w-full absolute top-0 left-0 z-10",
                        isUnallocated ? "bg-zinc-950" : "bg-primary-dark"
                    )} />

                    {/* Content */}
                    <div className="p-2 text-xs md:text-sm text-white font-sans flex flex-col h-full justify-center text-center items-center truncate select-none relative z-10">
                        {isUnallocated ? (
                            <span className="font-medium text-muted-foreground/60 uppercase tracking-widest text-[10px]">Unallocated</span>
                        ) : (
                            <>
                                <div className="font-bold flex items-center justify-center gap-1 w-full truncate text-primary-foreground">
                                    {segment.label} {segment.driveLetter && `(${segment.driveLetter}:)`}
                                </div>
                                {/* Hide detailed stats if segment is too small (rendering optimization) */}
                                {segment.sizeMB > 100 && (
                                    <div className="opacity-90 text-[10px] md:text-xs text-primary-foreground/80">
                                        {formatSize(segment.sizeMB)} {segment.fileSystem}
                                    </div>
                                )}
                                {segment.sizeMB > 200 && (
                                    <div className="mt-1 text-[10px] opacity-70 text-primary-foreground/60 font-medium">
                                        Healthy {segment.isBoot && "(Boot)"} {segment.isSystem && "(System)"}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </ContextMenuTrigger>

            <ContextMenuContent className="w-56 bg-white text-black border-gray-300 shadow-xl">
                {isUnallocated ? (
                    <>
                        <ContextMenuItem onClick={() => onAction("new_simple_volume", segment)}>
                            <Disc className="mr-2 h-4 w-4" /> New Simple Volume...
                        </ContextMenuItem>
                        <ContextMenuItem disabled>Properties</ContextMenuItem>
                        <ContextMenuItem disabled>Help</ContextMenuItem>
                    </>
                ) : (
                    <>
                        <ContextMenuItem onClick={() => onAction("open", segment)}>
                            <FolderOpen className="mr-2 h-4 w-4" /> Open
                        </ContextMenuItem>
                        <ContextMenuItem onClick={() => onAction("explore", segment)}>
                            Explore
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem onClick={() => onAction("change_letter", segment)}>
                            Change Drive Letter and Paths...
                        </ContextMenuItem>
                        <ContextMenuItem
                            className="text-red-600 focus:text-red-700 focus:bg-red-50"
                            onClick={() => onAction("format", segment)}
                        >
                            <Disc className="mr-2 h-4 w-4" /> Format...
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem
                            disabled={!isExtendable()}
                            onClick={() => isExtendable() && onAction("extend", segment)}
                        >
                            <Maximize className="mr-2 h-4 w-4" /> Extend Volume...
                        </ContextMenuItem>
                        <ContextMenuItem onClick={() => onAction("shrink", segment)}>
                            <Minimize className="mr-2 h-4 w-4" /> Shrink Volume...
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem
                            className="text-red-600 focus:text-red-700 focus:bg-red-50"
                            onClick={() => onAction("delete", segment)}
                            disabled={segment.isSystem}
                        >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete Volume...
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem onClick={() => onAction("properties", segment)}>
                            <PenTool className="mr-2 h-4 w-4" /> Properties
                        </ContextMenuItem>
                    </>
                )}
            </ContextMenuContent>
        </ContextMenu>
    );
}

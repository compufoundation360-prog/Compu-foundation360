import { Disk, PartitionSegment, formatSize } from "../lib/simulator-types";
import { DiskSegment } from "./DiskSegment";
import { HardDrive, Usb } from "lucide-react";

interface DiskVisualizerProps {
    disk: Disk;
    onAction: (action: string, segment: PartitionSegment) => void;
}

export function DiskVisualizer({ disk, onAction }: DiskVisualizerProps) {
    return (
        <div className="bg-card border border-border shadow-sm mb-4 rounded-lg overflow-hidden transition-all hover:shadow-md hover:border-border/80">
            {/* Disk Header */}
            <div className="flex md:flex-row flex-col">
                {/* Left Info Pane */}
                <div className="w-full md:w-40 p-4 border-b md:border-b-0 md:border-r border-border bg-muted/30 flex flex-col items-center justify-center text-center shrink-0 min-h-[120px]">
                    <div className="bg-background p-3 rounded-full mb-3 shadow-inner">
                        {disk.type === "HDD" ? (
                            <HardDrive className="w-6 h-6 text-muted-foreground" />
                        ) : (
                            <Usb className="w-6 h-6 text-primary" />
                        )}
                    </div>
                    <div className="font-bold text-sm text-foreground">{disk.name}</div>
                    <div className="text-[10px] text-muted-foreground font-sans mt-0.5 leading-tight uppercase tracking-wider font-semibold">
                        <span className="block mb-0.5">Basic</span>
                        <span className="block mb-0.5">{formatSize(disk.totalSizeMB)}</span>
                        <span className={disk.isOnline ? "text-success" : "text-destructive"}>{disk.isOnline ? "Online" : "Offline"}</span>
                    </div>
                </div>

                {/* Visualization Area - NOW USING FLEXBOX */}
                <div className="flex-1 p-6 flex items-center bg-card min-w-[300px] overflow-x-auto">
                    {/* The container uses flex to distribute children based on their size */}
                    <div className="w-full h-24 bg-muted/10 flex relative rounded-sm overflow-hidden ring-1 ring-border/50">
                        {disk.segments.map(segment => (
                            <DiskSegment
                                key={segment.id}
                                segment={segment}
                                diskId={disk.id}
                                totalSize={disk.totalSizeMB}
                                onAction={onAction}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

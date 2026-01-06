import { useSimulatorStore } from "../store/simulator-store";
import { formatSize } from "../lib/simulator-types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function VolumeTable() {
    const { disks, selectSegment, selectedSegmentId } = useSimulatorStore();

    const allVolumes = disks.flatMap(disk =>
        disk.segments
            .filter(s => s.type !== "Unallocated")
            .map(s => ({ ...s, diskName: disk.name }))
    );

    return (
        <div className="bg-card border border-border flex flex-col h-full shadow-sm rounded-lg overflow-hidden">
            <div className="p-3 bg-muted/40 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                <span>Volume List</span>
                <span className="text-[10px] opacity-70">Read Only View</span>
            </div>
            <div className="flex-1 overflow-auto bg-card">
                <Table>
                    <TableHeader className="bg-muted/20 sticky top-0 z-10 backdrop-blur-sm">
                        <TableRow className="hover:bg-transparent border-border">
                            <TableHead className="w-[180px] h-9 text-xs font-bold text-foreground">Volume</TableHead>
                            <TableHead className="h-9 text-xs font-bold text-foreground hidden sm:table-cell">Layout</TableHead>
                            <TableHead className="h-9 text-xs font-bold text-foreground hidden sm:table-cell">Type</TableHead>
                            <TableHead className="h-9 text-xs font-bold text-foreground">File System</TableHead>
                            <TableHead className="h-9 text-xs font-bold text-foreground">Status</TableHead>
                            <TableHead className="text-right h-9 text-xs font-bold text-foreground">Capacity</TableHead>
                            <TableHead className="text-right h-9 text-xs font-bold text-foreground">Free Space</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allVolumes.map((vol) => (
                            <TableRow
                                key={vol.id}
                                className={`
                    cursor-default text-xs border-border/50 
                    ${selectedSegmentId === vol.id ? "bg-primary/10 hover:bg-primary/15" : "hover:bg-muted/30"}
                `}
                                onClick={() => selectSegment(vol.id)}
                            >
                                <TableCell className="font-medium py-2 text-foreground">
                                    {vol.label} {vol.driveLetter ? `(${vol.driveLetter}:)` : ""}
                                </TableCell>
                                <TableCell className="py-2 text-muted-foreground hidden sm:table-cell">Simple</TableCell>
                                <TableCell className="py-2 text-muted-foreground hidden sm:table-cell">Basic</TableCell>
                                <TableCell className="py-2 text-muted-foreground">{vol.fileSystem}</TableCell>
                                <TableCell className="py-2">
                                    <span className="flex items-center gap-1.5">
                                        {vol.isSystem || vol.isBoot ? (
                                            <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                                        ) : (
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        )}
                                        <span className="text-foreground">Healthy</span>
                                        <span className="text-muted-foreground text-[10px]">
                                            {vol.isBoot ? "(Boot)" : ""} {vol.isSystem ? "(System)" : ""}
                                        </span>
                                    </span>
                                </TableCell>
                                <TableCell className="text-right font-mono text-xs py-2 text-foreground">
                                    {formatSize(vol.sizeMB)}
                                </TableCell>
                                <TableCell className="text-right font-mono text-xs text-muted-foreground py-2">
                                    0 MB
                                </TableCell>
                            </TableRow>
                        ))}
                        {allVolumes.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-lg">💽</span>
                                        <span>No volumes found. Right-click "Unallocated" space below to start.</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

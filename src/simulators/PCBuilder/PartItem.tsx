import { Part } from './pc-parts-data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Disc, HardDrive, MemoryStick, CircuitBoard, Wind, Radio, Waves, Plug } from 'lucide-react';
import React from 'react';
import { usePCBuilder } from './PCBuilderContext';
import { cn } from '@/lib/utils';

interface PartItemProps {
    part: Part;
}

const getIcon = (type: string) => {
    switch (type) {
        case 'cpu': return <Cpu className="w-5 h-5" />;
        case 'cooler': return <Wind className="w-5 h-5" />;
        case 'ram': return <MemoryStick className="w-5 h-5" />;
        case 'gpu': return <CircuitBoard className="w-5 h-5" />;
        case 'ssd': return <HardDrive className="w-5 h-5" />;
        case 'hdd': return <HardDrive className="w-5 h-5" />;
        case 'wifi': return <Radio className="w-5 h-5" />;
        case 'sound': return <Waves className="w-5 h-5" />;
        case 'motherboard': return <Disc className="w-5 h-5" />;
        case 'psu': return <Plug className="w-5 h-5" />;
        default: return <Disc className="w-5 h-5" />;
    }
};

export const PartItem = ({ part }: PartItemProps) => {
    const { selectPart, selectedPartId } = usePCBuilder();
    const isSelected = selectedPartId === part.id;

    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData('text/plain', part.id);
        e.dataTransfer.effectAllowed = 'copy';
    };

    // Mobile: Tap to select
    const handleClick = () => {
        selectPart(part.id);
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onClick={handleClick}
            className="cursor-grab active:cursor-grabbing group"
        >
            <Card className={cn(
                "p-3 hover:shadow-md transition-all border-border hover:border-primary/50 bg-card shadow-sm",
                isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background border-primary"
            )}>
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-border">
                        {getIcon(part.type)}
                    </div>
                    <div className="space-y-1 flex-1">
                        <h4 className="text-sm font-bold leading-tight text-card-foreground">{part.name}</h4>
                        <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-mono text-secondary-foreground bg-secondary/10 border border-border">
                                {part.type.toUpperCase()}
                            </Badge>
                            {part.socket && (
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-border">
                                    {part.socket}
                                </Badge>
                            )}
                            {part.interface && (
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-border">
                                    {part.interface}
                                </Badge>
                            )}
                            {part.capacity && (
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-border">
                                    {part.capacity}
                                </Badge>
                            )}
                            {part.speed && (
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-border">
                                    {part.speed}
                                </Badge>
                            )}
                            {part.pcieType && (
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-border">
                                    {part.pcieType}
                                </Badge>
                            )}
                            {part.wattage && (
                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-border">
                                    {part.wattage}W
                                </Badge>
                            )}
                        </div>
                        {part.price && (
                            <div className="text-xs text-foreground font-bold mt-1">
                                ${part.price}
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

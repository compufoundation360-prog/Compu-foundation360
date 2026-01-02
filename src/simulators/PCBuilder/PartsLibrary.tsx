import { parts } from './pc-parts-data';
import { PartItem } from './PartItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { usePCBuilder } from './PCBuilderContext';
import { RotateCcw, Shuffle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const PartsLibrary = () => {
    const { resetBuild, randomBuild } = usePCBuilder();

    // Filter out motherboard from draggable items as it's the base
    const draggableParts = parts.filter(p => p.type !== 'motherboard');

    const typeLabels: Record<string, string> = {
        'cpu': 'CPU',
        'cooler': 'CPU Cooler',
        'ram': 'RAM',
        'gpu': 'Graphics Card',
        'ssd': 'SSD',
        'hdd': 'Hard Drive',
        'wifi': 'WiFi Card',
        'sound': 'Sound Card',
        'psu': 'Power Supply'
    };

    const componentTypes = ['cpu', 'cooler', 'ram', 'gpu', 'ssd', 'hdd', 'wifi', 'sound', 'psu'];

    return (
        <aside className="w-full md:w-[280px] flex flex-col h-full md:h-[calc(100vh-2rem)] bg-muted/30 md:border-r border-border shrink-0">
            {/* Header */}
            <div className="p-4 border-b border-border bg-background/95 backdrop-blur-md shrink-0">
                <h2 className="text-lg font-semibold tracking-tight text-foreground">Compu-foundation 360°</h2>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 min-h-0 overflow-hidden">
                <ScrollArea className="h-full w-full">
                    <div className="p-4">
                        <Accordion type="multiple" defaultValue={['cpu', 'ram']} className="w-full">
                            {componentTypes.map((type) => {
                                const typeParts = draggableParts.filter(p => p.type === type);
                                if (typeParts.length === 0) return null;

                                return (
                                    <AccordionItem key={type} value={type} className="border-b border-border last:border-0">
                                        <AccordionTrigger className="text-sm font-bold text-foreground hover:text-primary hover:no-underline py-3 px-1 transition-colors">
                                            <span className="flex items-center gap-2">
                                                <span>{typeLabels[type] || type}</span>
                                                <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground bg-muted border border-border">
                                                    {typeParts.length}
                                                </Badge>
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2 pb-4 px-0">
                                            <div className="grid grid-cols-1 gap-2">
                                                {typeParts.map(part => (
                                                    <PartItem key={part.id} part={part} />
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </ScrollArea>
            </div>

            {/* Footer Buttons - Always at bottom */}
            <div className="p-4 border-t border-border bg-background/95 backdrop-blur-md space-y-2 shrink-0">
                <Button variant="outline" className="w-full justify-start gap-2 border-border text-foreground hover:bg-muted" onClick={resetBuild}>
                    <RotateCcw className="w-4 h-4" /> Reset Board
                </Button>
                <Button variant="secondary" className="w-full justify-start gap-2 text-secondary-foreground" onClick={randomBuild}>
                    <Shuffle className="w-4 h-4" /> Random Build
                </Button>
            </div>
        </aside>
    );
};

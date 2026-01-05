import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HardDrive, Play, RotateCcw, FileText, Film, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Types for our Block System
type BlockStatus = 'free' | 'used' | 'system' | 'fragmented';
interface DiskBlock {
    id: number;
    status: BlockStatus;
    fileId?: string; // ID of the file occupying this block
    fileType?: 'doc' | 'img' | 'video' | 'sys';
    color: string;
}

interface FileItem {
    id: string;
    name: string;
    type: 'doc' | 'img' | 'video';
    size: number; // Number of blocks it needs
    color: string;
    icon: React.ElementType;
}

const TOTAL_BLOCKS = 100; // 10x10 Grid

export const DiskGrid = () => {
    const [blocks, setBlocks] = useState<DiskBlock[]>([]);
    const [readSpeed, setReadSpeed] = useState(100); // 100% is best
    const [isDefragging, setIsDefragging] = useState(false);

    // Example Files to Drag
    const availableFiles: FileItem[] = [
        { id: 'f1', name: 'Resume.docx', type: 'doc', size: 3, color: 'bg-blue-500', icon: FileText },
        { id: 'f2', name: 'Photo.jpg', type: 'img', size: 8, color: 'bg-green-500', icon: ImageIcon },
        { id: 'f3', name: 'Movie.mp4', type: 'video', size: 15, color: 'bg-purple-500', icon: Film },
    ];

    // Initialize Grid
    useEffect(() => {
        const initialBlocks: DiskBlock[] = Array.from({ length: TOTAL_BLOCKS }, (_, i) => {
            // Create some random "System Files" scattered around to cause fragmentation naturally later
            // System files are permanent and immovable (usually)
            const isSystem = i < 10 || (i > 20 && i < 25) || i === 45;
            return {
                id: i,
                status: isSystem ? 'system' : 'free',
                color: isSystem ? 'bg-red-500/80' : 'bg-secondary/30',
                fileType: isSystem ? 'sys' : undefined,
            };
        });
        setBlocks(initialBlocks);
    }, []);

    // Helper to calculate fragmentation (just checking gaps for now)
    const calculateHealth = (currentBlocks: DiskBlock[]) => {
        // Simple logic: More chaotic gaps = lower speed
        // This is a mock calculation for the UI
        let gaps = 0;
        let lastStatus = 'free';
        currentBlocks.forEach(b => {
            if (b.status !== lastStatus) {
                gaps++;
                lastStatus = b.status;
            }
        });
        // Lower score if many transitions
        return Math.max(10, 100 - (gaps * 2));
    };

    const handleDefrag = async () => {
        setIsDefragging(true);

        // Simulate the visual process of moving blocks
        // We will simple sort them: System -> Used -> Free
        // But System blocks stay put? In real defrag, system blocks might move, but let's keep it simple.
        // Enhanced Logic: Move all 'used' blocks to the first available 'free' slots after system blocks.

        await new Promise(r => setTimeout(r, 1000)); // Fake delay

        const newBlocks = [...blocks];

        // 1. Extract all user files
        const userFiles = newBlocks.filter(b => b.status === 'used');

        // 2. Clear their current spots
        newBlocks.forEach(b => {
            if (b.status === 'used') {
                b.status = 'free';
                b.color = 'bg-secondary/30';
                b.fileId = undefined;
                b.fileType = undefined;
            }
        });

        // 3. Place them back sequentially starting from first free slot
        let fileIdx = 0;
        for (let i = 0; i < TOTAL_BLOCKS && fileIdx < userFiles.length; i++) {
            if (newBlocks[i].status === 'free') {
                const fileBlock = userFiles[fileIdx];
                newBlocks[i] = {
                    ...newBlocks[i],
                    status: 'used',
                    color: fileBlock.color,
                    fileId: fileBlock.fileId,
                    fileType: fileBlock.fileType
                };
                fileIdx++;
            }
        }

        setBlocks(newBlocks);
        setReadSpeed(100); // Perfect score
        setIsDefragging(false);
    };

    const addFile = (file: FileItem) => {
        // Find free blocks. If we have enough CONTIGUOUS, great. If not, fragment it.
        // For this sim, we will just fill the FIRST AVAILABLE 'free' blocks we find.
        // This naturally creates fragmentation if there are gaps.

        const freeIndices = blocks.map((b, i) => b.status === 'free' ? i : -1).filter(i => i !== -1);

        if (freeIndices.length < file.size) {
            alert("Disk Full! Delete files to make space.");
            return;
        }

        const newBlocks = [...blocks];
        let blocksNeeded = file.size;

        for (let i = 0; i < TOTAL_BLOCKS && blocksNeeded > 0; i++) {
            if (newBlocks[i].status === 'free') {
                newBlocks[i] = {
                    ...newBlocks[i],
                    status: 'used',
                    color: file.color,
                    fileId: file.id,
                    fileType: file.type
                };
                blocksNeeded--;
            }
        }

        setBlocks(newBlocks);
        setReadSpeed(prev => Math.max(prev - 5, 20)); // Decrease speed as we add complex files
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Sidebar: File Source */}
            <Card className="p-6 col-span-1 border-r bg-card/50">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="text-blue-400" /> Files
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                    Click to add files to the drive. Notice how large files take up more blocks.
                </p>

                <div className="space-y-4">
                    {availableFiles.map(file => (
                        <div key={file.id}
                            onClick={() => addFile(file)}
                            className="p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded ${file.color} text-white`}>
                                    <file.icon size={16} />
                                </div>
                                <div>
                                    <div className="font-bold">{file.name}</div>
                                    <div className="text-xs text-muted-foreground">{file.size} Blocks</div>
                                </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Badge variant="outline">+ Add</Badge>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-background rounded-xl border">
                    <h5 className="font-bold mb-2">Drive Health</h5>
                    <div className="flex justify-between text-sm mb-1">
                        <span>Performance</span>
                        <span className={readSpeed > 80 ? "text-green-500" : "text-red-500"}>{Math.round(readSpeed)}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${readSpeed > 80 ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${readSpeed}%` }}
                        />
                    </div>
                    <Button
                        onClick={handleDefrag}
                        disabled={isDefragging || readSpeed > 95}
                        className="w-full mt-4 gap-2"
                        variant={readSpeed < 60 ? "destructive" : "secondary"}>
                        {isDefragging ? <RotateCcw className="animate-spin" /> : <Play />}
                        {isDefragging ? "Optimizing..." : "Defrag Drive"}
                    </Button>
                </div>
            </Card>

            {/* Main Grid: The Platter */}
            <Card className="col-span-1 lg:col-span-2 p-6 bg-black/90 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                <div className="grid grid-cols-10 gap-1 w-full max-w-md aspect-square p-2 bg-slate-900/50 rounded-xl border border-slate-800">
                    {blocks.map(block => (
                        <motion.div
                            key={block.id}
                            layout // Animate layout changes for the defrag effect!
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, backgroundColor: block.status === 'free' ? '' : 'var(--color)' }}
                            className={`
                        w-full h-full rounded-sm text-[8px] flex items-center justify-center select-none
                        ${block.color}
                        ${block.status === 'free' ? 'border border-slate-800/50' : 'box-border shadow-sm'}
                    `}
                            title={`Block ${block.id} (${block.status})`}
                        >
                            {block.status === 'system' && <span className="text-white/50">SYS</span>}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6 flex gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> System</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> Docs</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Images</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-secondary/30 border border-slate-700 rounded-sm"></div> Free</div>
                </div>
            </Card>
        </div>
    );
};

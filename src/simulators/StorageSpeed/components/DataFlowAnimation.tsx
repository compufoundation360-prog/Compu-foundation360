import { Folder, HardDrive, Disc, Zap, File } from 'lucide-react';
import { DriveSpec } from '../types';

interface DataFlowAnimationProps {
    drive: DriveSpec;
    isRunning: boolean;
    isCompleted: boolean;
}

const iconMap = {
    'hard-drive': HardDrive,
    disc: Disc,
    zap: Zap,
};

export function DataFlowAnimation({
    drive,
    isRunning,
    isCompleted,
}: DataFlowAnimationProps) {
    const Icon = iconMap[drive.icon];
    // Calculate speed: fast drives have lower duration
    const duration = Math.max(0.4, 3 - Math.log10(drive.speed));

    // Create multiple particles for faster drives to make it look like a stream
    // HDD (1 particle), SATA (3 particles), NVMe (8 particles)
    const particleCount = drive.speed > 5000 ? 8 : drive.speed > 400 ? 3 : 1;

    return (
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm overflow-hidden relative group h-[180px] flex flex-col justify-between">
            {/* Tech Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />

            <div className="flex items-center justify-between z-10">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">{drive.name}</h4>
                {isCompleted && (
                    <span className="text-xs text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded shadow-sm animate-in fade-in zoom-in">DONE</span>
                )}
            </div>

            {/* The Curved Pipeline Visualization */}
            <div className="flex-1 relative flex items-center justify-between px-2">

                {/* Source Station */}
                <div className="relative z-20 flex flex-col items-center gap-2">
                    <div className={`p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 transition-all duration-300 ${isRunning && !isCompleted ? 'shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105' : ''}`}>
                        <File size={24} className="text-blue-500" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Source</span>
                </div>

                {/* The Connection (SVG) */}
                <div className="absolute inset-0 top-4 bottom-8 flex items-center justify-center pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none" className="overflow-visible">
                        {/* The Path Track (Dimmed) */}
                        <path
                            d="M 40,50 C 100,50 100,80 150,80 C 200,80 200,50 260,50"
                            fill="none"
                            stroke="currentColor"
                            className="text-border opacity-30"
                            strokeWidth="3"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* The "Active" Path (Lights up when running) */}
                        {isRunning && !isCompleted && (
                            <path
                                d="M 40,50 C 100,50 100,80 150,80 C 200,80 200,50 260,50"
                                fill="none"
                                stroke={drive.color}
                                strokeWidth="1"
                                strokeOpacity="0.5"
                                vectorEffect="non-scaling-stroke"
                            />
                        )}

                        {/* Moving Particles */}
                        {isRunning && !isCompleted && Array.from({ length: particleCount }).map((_, i) => (
                            <circle key={i} r="4" fill={drive.color} filter={`drop-shadow(0 0 4px ${drive.color})`}>
                                <animateMotion
                                    dur={`${duration}s`}
                                    repeatCount="indefinite"
                                    path="M 40,50 C 100,50 100,80 150,80 C 200,80 200,50 260,50"
                                    begin={`${(duration / particleCount) * i}s`}
                                    keyPoints="0;1"
                                    keyTimes="0;1"
                                    calcMode="linear"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0;1;1;0"
                                    dur={`${duration}s`}
                                    repeatCount="indefinite"
                                    begin={`${(duration / particleCount) * i}s`}
                                />
                            </circle>
                        ))}
                    </svg>
                </div>

                {/* Destination Station */}
                <div className="relative z-20 flex flex-col items-center gap-2">
                    <div
                        className={`p-3 rounded-xl border transition-all duration-300 ${isCompleted ? 'scale-110 shadow-[0_0_20px_currentColor]' : ''}`}
                        style={{
                            backgroundColor: `${drive.color}15`,
                            borderColor: `${drive.color}30`,
                            color: drive.color
                        }}
                    >
                        <Icon size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Disk</span>
                </div>

            </div>
        </div>
    );
}

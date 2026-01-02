import { HardDrive, Disc, Zap } from 'lucide-react';
import { DriveSpec } from '../types';

interface DriveCardProps {
    drive: DriveSpec;
    timeRemaining: number;
    totalTime: number;
    isCompleted: boolean;
    isRunning: boolean;
}

const iconMap = {
    'hard-drive': HardDrive,
    disc: Disc,
    zap: Zap,
};

export function DriveCard({
    drive,
    timeRemaining,
    totalTime,
    isCompleted,
    isRunning,
}: DriveCardProps) {
    const Icon = iconMap[drive.icon];
    // Calculate progress safely
    const progress = totalTime > 0 ? ((totalTime - timeRemaining) / totalTime) * 100 : 0;
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    const formatTime = (seconds: number) => {
        if (seconds < 1 && seconds > 0) return `${(seconds * 1000).toFixed(0)}ms`;
        if (seconds <= 0) return "0s";
        if (seconds < 60) return `${seconds.toFixed(2)}s`;
        const mins = Math.floor(seconds / 60);
        const secs = (seconds % 60).toFixed(0);
        return `${mins}m ${secs}s`;
    };

    return (
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:border-primary/50 transition-all relative overflow-hidden group">

            {/* Background Glow for Active State */}
            {isRunning && !isCompleted && (
                <div
                    className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none transition-opacity"
                    style={{ backgroundColor: drive.color }}
                />
            )}

            <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                    <div
                        className="p-3 rounded-lg shadow-inner ring-1 ring-white/5"
                        style={{ backgroundColor: `${drive.color}15` }}
                    >
                        <Icon size={28} style={{ color: drive.color }} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground tracking-tight">{drive.name}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold opacity-70">{drive.type}</p>
                    </div>
                </div>
                {isCompleted && (
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20 animate-in fade-in zoom-in">
                        COMPLETE
                    </div>
                )}
            </div>

            <div className="space-y-4 mb-6 relative z-10">
                <div className="flex justify-between items-baseline text-sm">
                    <span className="text-muted-foreground font-medium">Speed</span>
                    <span className="text-foreground font-bold text-base">{drive.speed} <span className="text-xs text-muted-foreground font-normal">MB/s</span></span>
                </div>
                <div className="flex justify-between items-baseline text-sm">
                    <span className="text-muted-foreground font-medium">IOPS</span>
                    <span className="text-foreground font-bold font-mono">
                        {drive.iops.toLocaleString()}
                    </span>
                </div>
                <div className="flex justify-between items-baseline text-sm">
                    <span className="text-muted-foreground font-medium">Latency</span>
                    <span className="text-foreground font-bold font-mono">{drive.latency}ms</span>
                </div>
            </div>

            {isRunning && !isCompleted && (
                <div className="space-y-2 relative z-10">
                    <div className="flex justify-between text-sm items-end">
                        <span className="text-muted-foreground font-medium">Time Remaining</span>
                        <span className="text-foreground font-mono font-bold text-lg leading-none" style={{ color: drive.color }}>
                            {formatTime(timeRemaining)}
                        </span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full bg-black/10 dark:bg-black/40 rounded-full h-3 overflow-hidden border border-black/5 dark:border-white/5">
                        <div
                            className="h-full transition-all duration-300 rounded-full relative"
                            style={{
                                width: `${clampedProgress}%`,
                                backgroundColor: drive.color,
                                boxShadow: `0 0 10px ${drive.color}40`
                            }}
                        >
                            {/* Shimmer effect on bar */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1s_infinite]" />
                        </div>
                    </div>
                </div>
            )}

            {/* Show Full Bar when Completed */}
            {isCompleted && (
                <div className="space-y-2 relative z-10">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-medium">Status</span>
                        <div className="flex items-center gap-2">
                            <span className="text-foreground font-bold">Finished</span>
                            <span className="text-xs text-muted-foreground">({formatTime(totalTime)})</span>
                        </div>
                    </div>
                    <div className="w-full bg-black/10 dark:bg-black/40 rounded-full h-3 overflow-hidden">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `100%`,
                                backgroundColor: drive.color,
                            }}
                        />
                    </div>
                </div>
            )}

            {!isRunning && !isCompleted && (
                <div className="text-center py-3 bg-muted/30 rounded-lg border border-dashed border-border mx-auto mt-2">
                    <span className="text-muted-foreground/70 text-sm font-medium">Ready for testing</span>
                </div>
            )}
        </div>
    );
}

import { useState, useEffect, useCallback } from 'react';
import { Play, RotateCcw, Activity } from 'lucide-react';
import { DRIVE_SPECS } from './types';
import { DriveCard } from './components/DriveCard';
import { FileSelector } from './components/FileSelector';
import { SpeedChart } from './components/SpeedChart';
import { DataFlowAnimation } from './components/DataFlowAnimation';

function StorageSpeedSim() {
    const [fileSize, setFileSize] = useState(2000);
    const [isRunning, setIsRunning] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState<{ [key: string]: number }>({});
    const [totalTimes, setTotalTimes] = useState<{ [key: string]: number }>({});
    const [completed, setCompleted] = useState<{ [key: string]: boolean }>({});
    const [currentSpeeds, setCurrentSpeeds] = useState<{ [key: string]: number }>({});

    // Mobile Tab State ['visuals', 'stats', 'graph']
    const [mobileTab, setMobileTab] = useState<'visuals' | 'stats' | 'graph'>('visuals');

    // Standard File Transfer Calculation
    const calculateTransferTime = (drive: typeof DRIVE_SPECS[0], size: number) => {
        return size / drive.speed;
    };

    const startSimulation = useCallback(() => {
        const times: { [key: string]: number } = {};
        DRIVE_SPECS.forEach((drive) => {
            times[drive.id] = calculateTransferTime(drive, fileSize);
        });

        setTotalTimes(times);
        setTimeRemaining(times);
        setCompleted({});
        setIsRunning(true);
        setCurrentSpeeds(
            DRIVE_SPECS.reduce((acc, drive) => ({ ...acc, [drive.id]: drive.speed }), {})
        );
        // On mobile, force switch to visuals tab to see action
        setMobileTab('visuals');
    }, [fileSize]);

    const resetSimulation = () => {
        setIsRunning(false);
        setTimeRemaining({});
        setTotalTimes({});
        setCompleted({});
        setCurrentSpeeds({});
    };

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                const updated = { ...prev };
                let allComplete = true;

                DRIVE_SPECS.forEach((drive) => {
                    if (!completed[drive.id] && updated[drive.id] > 0) {
                        updated[drive.id] = Math.max(0, updated[drive.id] - 0.1);
                        allComplete = false;

                        if (updated[drive.id] <= 0) {
                            setCompleted((c) => ({ ...c, [drive.id]: true }));
                        }
                    }
                });

                if (allComplete) {
                    setIsRunning(false);
                }

                return updated;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isRunning, completed]);

    const allCompleted = DRIVE_SPECS.every((drive) => completed[drive.id]);

    return (
        <div className="absolute inset-0 overflow-y-auto bg-background text-foreground p-4 lg:p-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            <div className="max-w-7xl mx-auto pb-20 lg:pb-0">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                    <div className="flex items-center justify-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                        <Activity size={32} className="text-primary lg:w-10 lg:h-10" />
                        <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Storage Speed Sim
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-sm lg:text-lg hidden lg:block">
                        Compare real-world transfer speeds across different storage technologies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
                    {/* Controls Column (Always Visible / Sticky on Mobile) */}
                    <div className="lg:col-span-1 bg-card rounded-xl p-4 lg:p-6 border border-border h-fit shadow-sm sticky top-0 z-30 lg:static">

                        <FileSelector
                            selectedSize={fileSize}
                            onSizeChange={setFileSize}
                            disabled={isRunning}
                        />

                        <div className="mt-4 lg:mt-2 space-y-3 border-t border-border pt-4 lg:pt-6">
                            <button
                                onClick={startSimulation}
                                disabled={isRunning}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 lg:py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg"
                            >
                                <Play size={20} className={isRunning ? "animate-pulse" : ""} />
                                {isRunning ? 'Running...' : 'Start Test'}
                            </button>

                            {(isRunning || allCompleted) && (
                                <button
                                    onClick={resetSimulation}
                                    className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-3 lg:py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all border border-border"
                                >
                                    <RotateCcw size={20} />
                                    Reset
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Tab Navigation (Hidden on Desktop) */}
                    <div className="lg:hidden sticky top-[250px] z-20 bg-background/95 backdrop-blur py-2 -mx-4 px-4 border-b border-border mb-4">
                        <div className="flex p-1 bg-muted rounded-xl">
                            <button
                                onClick={() => setMobileTab('visuals')}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${mobileTab === 'visuals' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                            >
                                Visuals (Race)
                            </button>
                            <button
                                onClick={() => setMobileTab('stats')}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${mobileTab === 'stats' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                            >
                                Stats
                            </button>
                            <button
                                onClick={() => setMobileTab('graph')}
                                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${mobileTab === 'graph' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}
                            >
                                Graph
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        {/* On Desktop: Show All in Order. On Mobile: Conditionally Render based on Tab */}

                        {/* Row 1: Status Cards (Stats) */}
                        <div className={`${mobileTab === 'stats' ? 'grid' : 'hidden'} lg:grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6`}>
                            {DRIVE_SPECS.map((drive) => (
                                <DriveCard
                                    key={drive.id}
                                    drive={drive}
                                    timeRemaining={timeRemaining[drive.id] || 0}
                                    totalTime={totalTimes[drive.id] || 0}
                                    isCompleted={completed[drive.id] || false}
                                    isRunning={isRunning}
                                />
                            ))}
                        </div>

                        {/* Row 2: Animations (Visuals) */}
                        <div className={`${mobileTab === 'visuals' ? 'grid' : 'hidden'} lg:grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6`}>
                            {DRIVE_SPECS.map((drive) => (
                                <DataFlowAnimation
                                    key={drive.id}
                                    drive={drive}
                                    isRunning={isRunning}
                                    isCompleted={completed[drive.id] || false}
                                />
                            ))}
                        </div>

                        {/* Row 3: Graph */}
                        <div className={`${mobileTab === 'graph' ? 'block' : 'hidden'} lg:block`}>
                            <SpeedChart
                                scenario="transfer"
                                data={currentSpeeds}
                            />
                        </div>
                    </div>
                </div>

                {/* Educational Insights - Themed */}
                <div className="bg-card rounded-xl p-6 border border-border bg-opacity-50 mt-8 hidden lg:block">
                    <h3 className="text-lg font-bold mb-4 text-foreground">Educational Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        {/* Content... */}
                        <div>
                            <h4 className="font-semibold text-blue-500 mb-2">HDD</h4>
                            <p className="text-muted-foreground">Mechanical movement makes it slow.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-500 mb-2">SATA SSD</h4>
                            <p className="text-muted-foreground">Flash memory, limited by cables.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-amber-500 mb-2">NVMe</h4>
                            <p className="text-muted-foreground">Direct motherboard connection. Super fast.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorageSpeedSim;

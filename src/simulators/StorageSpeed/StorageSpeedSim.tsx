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
                            // Keep max speed visible on completion
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
        <div className="absolute inset-0 overflow-y-auto bg-background text-foreground p-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Activity size={40} className="text-primary" />
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Storage Speed Simulator
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-lg">
                        Compare real-world transfer speeds across different storage technologies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
                    <div className="lg:col-span-1 bg-card rounded-xl p-6 border border-border h-fit shadow-sm">

                        {/* File Selector */}
                        <FileSelector
                            selectedSize={fileSize}
                            onSizeChange={setFileSize}
                            disabled={isRunning}
                        />

                        <div className="mt-2 space-y-3 border-t border-border pt-6">
                            <button
                                onClick={startSimulation}
                                disabled={isRunning}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                <Play size={20} className={isRunning ? "animate-pulse" : ""} />
                                {isRunning ? 'Test Running...' : 'Start Test'}
                            </button>

                            {(isRunning || allCompleted) && (
                                <button
                                    onClick={resetSimulation}
                                    className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all border border-border"
                                >
                                    <RotateCcw size={20} />
                                    Reset
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        {/* Row 1: Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                        {/* Row 2: Animations */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <SpeedChart
                            scenario="transfer"
                            data={currentSpeeds}
                        />
                    </div>
                </div>

                {/* Educational Insights - Themed */}
                <div className="bg-card rounded-xl p-6 border border-border bg-opacity-50">
                    <h3 className="text-lg font-bold mb-4 text-foreground">Educational Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div>
                            <h4 className="font-semibold text-blue-500 mb-2">
                                HDD - Traditional Storage
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Hard Disk Drives use spinning magnetic platters. They're cheap
                                and reliable but limited by mechanical movement, resulting in
                                slower speeds and higher latency.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-500 mb-2">
                                SATA SSD - Fast & Affordable
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                SATA SSDs use flash memory with no moving parts. They offer
                                significantly better performance than HDDs but are limited by
                                the SATA interface bandwidth.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-amber-500 mb-2">
                                NVMe - Ultimate Performance
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                NVMe drives connect directly to PCIe lanes, bypassing SATA
                                bottlenecks. They deliver extreme speeds with minimal latency,
                                perfect for professional workloads.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorageSpeedSim;

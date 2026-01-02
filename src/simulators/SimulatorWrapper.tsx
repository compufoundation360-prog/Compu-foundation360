import React, { Suspense, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface SimulatorWrapperProps {
    children: ReactNode;
    fallbackText?: string;
    className?: string;
    customLoader?: ReactNode;
}

/**
 * SimulatorWrapper
 * 
 * This component acts as a boundary for lazy-loaded simulators.
 * It handles the "Suspense" state, showing a nice loading spinner OR a custom skeleton.
 */
const SimulatorWrapper: React.FC<SimulatorWrapperProps> = ({
    children,
    fallbackText = "Loading Simulator...",
    className = "",
    customLoader
}) => {
    return (
        <div className={`w-full h-full relative min-h-[400px] bg-slate-900/50 rounded-xl md:rounded-xl rounded-none border-0 md:border border-slate-800 overflow-hidden ${className}`}>
            <Suspense
                fallback={
                    customLoader ? customLoader : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-cyan-400">
                            <Loader2 className="w-10 h-10 animate-spin mb-4" />
                            <p className="text-sm font-medium tracking-wide animate-pulse">{fallbackText}</p>
                        </div>
                    )
                }
            >
                {children}
            </Suspense>
        </div>
    );
};

export default SimulatorWrapper;

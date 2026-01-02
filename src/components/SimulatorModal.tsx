
import React from 'react';
import { X } from 'lucide-react';
import { useSimulator } from '@/context/SimulatorContext';
import SimulatorRegistry from '@/simulators/SimulatorRegistry';
import { AnimatePresence, motion } from 'framer-motion';

const SimulatorModal = () => {
    const { activeSimulatorId, closeSimulator } = useSimulator();

    // If no simulator is active, don't render anything
    if (!activeSimulatorId) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            {/* Backdrop Blur */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={closeSimulator}
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-[1400px] h-[90vh] bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col"
            >
                {/* Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-sm font-medium text-slate-400">Virtual Lab Environment</span>
                    </div>

                    <button
                        onClick={closeSimulator}
                        className="p-2 text-slate-400 hover:text-white hover:bg-red-500/20 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Simulator Area */}
                <div className="flex-1 w-full h-full bg-slate-950 relative overflow-hidden">
                    <SimulatorRegistry id={activeSimulatorId} className="w-full h-full border-none rounded-none" />
                </div>

            </motion.div>
        </div>
    );
};

export default SimulatorModal;

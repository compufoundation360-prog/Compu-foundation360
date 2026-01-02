
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SimulatorContextType {
    activeSimulatorId: string | null;
    openSimulator: (id: string) => void;
    closeSimulator: () => void;
}

const SimulatorContext = createContext<SimulatorContextType | undefined>(undefined);

export const SimulatorProvider = ({ children }: { children: ReactNode }) => {
    const [activeSimulatorId, setActiveSimulatorId] = useState<string | null>(null);

    const openSimulator = (id: string) => {
        setActiveSimulatorId(id);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeSimulator = () => {
        setActiveSimulatorId(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <SimulatorContext.Provider value={{ activeSimulatorId, openSimulator, closeSimulator }}>
            {children}
        </SimulatorContext.Provider>
    );
};

export const useSimulator = () => {
    const context = useContext(SimulatorContext);
    if (!context) {
        throw new Error('useSimulator must be used within a SimulatorProvider');
    }
    return context;
};

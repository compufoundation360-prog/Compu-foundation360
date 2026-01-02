
import React, { lazy } from 'react';
import SimulatorWrapper from './SimulatorWrapper';

import { PCBuilderLoader } from './PCBuilder/PCBuilderLoader';

// Lazy Load the Simulators
const PCBuilderSim = lazy(() => import('./PCBuilder/PCBuilderSim'));

// Add future sims here
// const DiskPartitionSim = lazy(() => import('./DiskPartition/DiskPartitionSim'));

interface SimulatorRegistryProps {
    id: string; // The ID of the simulator to load
    className?: string; // Optional custom styling
}

const SimulatorRegistry: React.FC<SimulatorRegistryProps> = ({ id, className }) => {

    const getLoader = () => {
        switch (id) {
            case 'pc-builder':
                return <PCBuilderLoader />;
            default:
                return undefined;
        }
    };

    const renderSimulator = () => {
        switch (id) {
            case 'pc-builder':
                return <PCBuilderSim />;

            // case 'disk-partition':
            //    return <DiskPartitionSim />;

            default:
                return (
                    <div className="flex items-center justify-center h-full text-slate-500">
                        <p>Simulator "{id}" not found.</p>
                    </div>
                );
        }
    };

    return (
        <SimulatorWrapper
            className={className}
            fallbackText="Initializing Virtual Lab..."
            customLoader={getLoader()}
        >
            {renderSimulator()}
        </SimulatorWrapper>
    );
};

export default SimulatorRegistry;

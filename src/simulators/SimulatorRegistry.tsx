
import React, { lazy } from 'react';
import SimulatorWrapper from './SimulatorWrapper';

import { PCBuilderLoader } from './PCBuilder/PCBuilderLoader';

// Lazy Load the Simulators
const PCBuilderSim = lazy(() => import('./PCBuilder/PCBuilderSim'));
const StorageSpeedSim = lazy(() => import('./StorageSpeed/StorageSpeedSim'));

const FileSystemArchitectSim = lazy(() => import('./FileSystemArchitect/FileSystemArchitectSim'));

// Add future sims here
const DiskPartitionManagerSim = lazy(() => import('./DiskPartitionManager/DiskPartitionManagerSim'));

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
                // Return default loader for storage speed for now, or we can make one later
                return undefined;
        }
    };

    const renderSimulator = () => {
        switch (id) {
            case 'pc-builder':
                return <PCBuilderSim />;

            case 'ssd-installation':
                return <StorageSpeedSim />;

            case 'file-system-architect':
                return <FileSystemArchitectSim />;

            case 'disk-partition-manager':
                return <DiskPartitionManagerSim />;

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

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { Part, PlacedParts, parts, motherboard, ZoneId } from './pc-parts-data';
import { useToast } from '@/hooks/use-toast';

interface PCBuilderContextType {
    placedParts: PlacedParts;
    handleDrop: (partId: string, zoneId: ZoneId) => void;
    removePart: (zoneId: ZoneId) => void;
    resetBuild: () => void;
    randomBuild: () => void;
    isSystemReady: boolean;
    validationError: string | null;
    // Mobile-specific (Tap-to-Select flow)
    selectedPartId: string | null;
    selectPart: (partId: string) => void;
    clearSelection: () => void;
    placeSelectedPart: (zoneId: ZoneId) => void;
}

const PCBuilderContext = createContext<PCBuilderContextType | undefined>(undefined);

export { PCBuilderContext };

export const PCBuilderProvider = ({ children }: { children: ReactNode }) => {
    const [placedParts, setPlacedParts] = useState<PlacedParts>({});
    const [validationError, setValidationError] = useState<string | null>(null);
    const { toast } = useToast();

    // Mobile: Track selected part for tap-to-place flow
    const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

    const selectPart = (partId: string) => {
        setSelectedPartId(partId);
        setValidationError(null);
    };

    const clearSelection = () => {
        setSelectedPartId(null);
    };

    const placeSelectedPart = (zoneId: ZoneId) => {
        if (selectedPartId) {
            handleDrop(selectedPartId, zoneId);
            setSelectedPartId(null);
        }
    };

    const validatePlacement = (part: Part, zoneId: ZoneId): { valid: boolean; error?: string } => {
        // CPU validation
        if (part.type === 'cpu') {
            if (zoneId !== 'cpu') return { valid: false, error: 'CPU must go in the CPU socket' };
            if (part.socket !== motherboard.socket) return { valid: false, error: `Socket mismatch: CPU is ${part.socket}, Board is ${motherboard.socket}` };
        }

        // CPU Cooler validation - requires CPU to be installed first
        if (part.type === 'cooler') {
            if (zoneId !== 'cooler') return { valid: false, error: 'CPU Cooler must go in the CPU cooler mount' };
            if (!placedParts['cpu']) return { valid: false, error: 'Install CPU first before mounting cooler' };
        }

        // RAM validation
        if (part.type === 'ram') {
            if (!zoneId.startsWith('ram')) return { valid: false, error: 'RAM must go in a RAM slot' };
            if (placedParts[zoneId]) return { valid: false, error: 'Slot already occupied' };
        }

        // GPU validation - goes in PCIe x16 slot
        if (part.type === 'gpu') {
            if (zoneId !== 'pcie-x16') return { valid: false, error: 'GPU must go in the PCIe x16 slot' };
            if (placedParts[zoneId]) return { valid: false, error: 'PCIe x16 slot already occupied' };
        }

        // WiFi and Sound cards - go in PCIe x1 slots
        if (part.type === 'wifi' || part.type === 'sound') {
            if (!zoneId.startsWith('pcie-x1')) return { valid: false, error: `${part.type === 'wifi' ? 'WiFi' : 'Sound'} card must go in a PCIe x1 slot` };
            if (placedParts[zoneId]) return { valid: false, error: 'PCIe x1 slot already occupied' };
        }

        // SSD validation - M.2 or SATA
        if (part.type === 'ssd') {
            if (part.interface === 'M.2') {
                if (zoneId !== 'm2-1' && zoneId !== 'm2-2') return { valid: false, error: 'M.2 SSD must go in an M.2 slot' };
                if (placedParts[zoneId]) return { valid: false, error: 'M.2 slot already occupied' };
            }
            if (part.interface === 'SATA') {
                if (zoneId !== 'sata') return { valid: false, error: 'SATA SSD must go in the SATA area' };
            }
        }

        // HDD validation - SATA only
        if (part.type === 'hdd') {
            if (zoneId !== 'sata') return { valid: false, error: 'HDD must go in the SATA area' };
        }

        // PSU validation
        if (part.type === 'psu') {
            if (zoneId !== 'psu') return { valid: false, error: 'Power Supply must go in the Power Supply zone' };
            if (placedParts[zoneId]) return { valid: false, error: 'Power Supply already installed' };
        }

        return { valid: true };
    };

    const handleDrop = (partId: string, zoneId: ZoneId) => {
        const part = parts.find(p => p.id === partId);
        if (!part) return;

        const validation = validatePlacement(part, zoneId);

        if (validation.valid) {
            setPlacedParts(prev => ({ ...prev, [zoneId]: part }));
            setValidationError(null);
            toast({
                title: "Component Installed",
                description: `${part.name} placed in ${zoneId.toUpperCase()}`,
                variant: "default",
                className: "bg-green-50 border-green-200 text-green-800"
            });
        } else {
            setValidationError(validation.error || "Invalid placement");
            toast({
                title: "Installation Failed",
                description: validation.error,
                variant: "destructive",
            });
            // Clear error after 2 seconds
            setTimeout(() => setValidationError(null), 2000);
        }
    };

    const removePart = (zoneId: ZoneId) => {
        // Check if removing CPU when cooler is installed
        if (zoneId === 'cpu' && placedParts['cooler']) {
            toast({
                title: "Cannot Remove CPU",
                description: "Remove the CPU cooler first before removing the CPU.",
                variant: "destructive",
            });
            return;
        }

        setPlacedParts(prev => {
            const newParts = { ...prev };
            delete newParts[zoneId];
            return newParts;
        });

        toast({
            title: "Component Removed",
            description: `Removed from ${zoneId.toUpperCase()}`,
        });
    };

    const resetBuild = () => {
        setPlacedParts({});
        setValidationError(null);
        toast({ title: "System Reset", description: "All parts removed from the motherboard." });
    };

    const randomBuild = () => {
        const newPlaced: PlacedParts = {};

        // Find compatible CPU
        const cpu = parts.find(p => p.type === 'cpu' && p.socket === motherboard.socket);
        if (cpu) {
            newPlaced['cpu'] = cpu;
            // Add a cooler if CPU is installed
            const cooler = parts.find(p => p.type === 'cooler');
            if (cooler) newPlaced['cooler'] = cooler;
        }

        // Find RAM - Use two different sticks for dual channel
        const ramParts = parts.filter(p => p.type === 'ram');
        if (ramParts.length >= 2) {
            newPlaced['ram-1'] = ramParts[0];
            newPlaced['ram-3'] = ramParts[1];
        } else if (ramParts.length === 1) {
            newPlaced['ram-1'] = ramParts[0]; // Slot 1 if only one stick
        }

        // Find GPU
        const gpu = parts.find(p => p.type === 'gpu');
        if (gpu) newPlaced['pcie-x16'] = gpu;

        // Add an M.2 SSD
        const m2ssd = parts.find(p => p.type === 'ssd' && p.interface === 'M.2');
        if (m2ssd) newPlaced['m2-1'] = m2ssd;

        // Add PSU - Pick one with enough power (e.g., 750W safe bet)
        const psu = parts.find(p => p.type === 'psu' && (p.wattage || 0) >= 600);
        if (psu) newPlaced['psu'] = psu;

        setPlacedParts(newPlaced);
        toast({ title: "Random Build Generated", description: "Basic components installed." });
    };

    const isSystemReady = useMemo(() => {
        const hasCpu = placedParts['cpu'] && placedParts['cpu'].socket === motherboard.socket;
        const hasRam = Object.keys(placedParts).some(k => k.startsWith('ram'));
        const hasPsu = !!placedParts['psu'];

        if (!hasCpu || !hasRam) return false;
        if (!hasPsu) return false;

        // Calculate total power consumption (Estimated)
        // CPU ~ 65-105W, GPU ~ 200-350W
        const cpuName = placedParts['cpu']?.name || '';
        const gpuName = placedParts['pcie-x16']?.name || '';

        let estimatedPower = 100; // Base system
        if (cpuName.includes('Ryzen 9') || cpuName.includes('i7')) estimatedPower += 105;
        else if (cpuName.includes('Ryzen 7')) estimatedPower += 90;
        else estimatedPower += 65;

        if (gpuName.includes('4090')) estimatedPower += 450;
        else if (gpuName.includes('3070')) estimatedPower += 220;
        else if (gpuName.includes('3060')) estimatedPower += 170;
        else if (gpuName.includes('6600')) estimatedPower += 160;

        const psuWattage = placedParts['psu']?.wattage || 0;

        return psuWattage >= estimatedPower;
    }, [placedParts]);

    const contextValue = useMemo(() => ({
        placedParts,
        handleDrop,
        removePart,
        resetBuild,
        randomBuild,
        isSystemReady,
        validationError,
        // Mobile
        selectedPartId,
        selectPart,
        clearSelection,
        placeSelectedPart
    }), [placedParts, isSystemReady, validationError, handleDrop, removePart, resetBuild, randomBuild, selectedPartId]);

    return (
        <PCBuilderContext.Provider value={contextValue}>
            {children}
        </PCBuilderContext.Provider>
    );
};

export const usePCBuilder = (): PCBuilderContextType => {
    const context = useContext(PCBuilderContext);
    if (!context) {
        const error = new Error('usePCBuilder must be used within a PCBuilderProvider');
        console.error('usePCBuilder hook error:', error);
        console.trace('Stack trace:');
        throw error;
    }
    return context;
};


export interface PCPart {
    id: string;
    name: string;
    type: 'cpu' | 'ram' | 'gpu' | 'storage' | 'psu' | 'fan' | 'motherboard';
    image: string; // We will use placeholders or icons for now
    slotId: string; // The ID of the slot on the motherboard it matches
    description: string;
}

export const initialParts: PCPart[] = [
    {
        id: 'cpu-intel',
        name: 'Intel Core i9',
        type: 'cpu',
        image: '/assets/parts/cpu.png',
        slotId: 'slot-cpu',
        description: 'The brain of the computer.'
    },
    {
        id: 'ram-stick-1',
        name: '16GB DDR4 RAM (Slot 1)',
        type: 'ram',
        image: '/assets/parts/ram.png',
        slotId: 'slot-ram-1',
        description: 'Short-term memory for active tasks.'
    },
    {
        id: 'ram-stick-2',
        name: '16GB DDR4 RAM (Slot 2)',
        type: 'ram',
        image: '/assets/parts/ram.png',
        slotId: 'slot-ram-2',
        description: 'Dual-channel memory boost.'
    },
    {
        id: 'ram-stick-3',
        name: '16GB DDR4 RAM (Slot 3)',
        type: 'ram',
        image: '/assets/parts/ram.png',
        slotId: 'slot-ram-3',
        description: 'Expanding capacity.'
    },
    {
        id: 'ram-stick-4',
        name: '16GB DDR4 RAM (Slot 4)',
        type: 'ram',
        image: '/assets/parts/ram.png',
        slotId: 'slot-ram-4',
        description: 'Maximum performance.'
    },
    {
        id: 'gpu-card',
        name: 'RTX 4080',
        type: 'gpu',
        image: '/assets/parts/gpu.png',
        slotId: 'slot-pcie-1',
        description: 'Handles graphics and gaming.'
    },
    {
        id: 'storage-nvme',
        name: '1TB NVMe SSD',
        type: 'storage', // Using M.2 slot
        image: '/assets/parts/ssd.png',
        slotId: 'slot-m2',
        description: 'Super fast reliability storage.'
    },
    {
        id: 'psu-unit',
        name: '850W Power Supply',
        type: 'psu',
        image: '/assets/parts/psu.png',
        slotId: 'slot-psu',
        description: 'Powers all components.'
    },
    {
        id: 'cpu-fan',
        name: 'Air Cooler',
        type: 'fan',
        image: '/assets/parts/fan.png',
        slotId: 'slot-cpu-fan',
        description: 'Keeps the CPU cool.'
    }
];

export interface TutorialStep {
    step: number;
    message: string;
    targetPartId: string; // Which part in the tray to highlight
    targetSlotId: string; // Which slot on the board to highlight
}

// Update TutorialSteps to allow flexible RAM installation or sequential
// For simplicity in this linear tutorial, we will force installing them one by one, or we can just say "Install RAM" and let them install all 4. 
// However, the current engine checks strict step matching. So let's add 4 distinct steps for RAM to fill the slots.

export const tutorialSteps: TutorialStep[] = [
    {
        step: 1,
        message: "Welcome to PC Builder! First, let's install the CPU (Central Processing Unit). Drag the Intel Core i9 to the socket.",
        targetPartId: 'cpu-intel',
        targetSlotId: 'slot-cpu'
    },
    {
        step: 2,
        message: "Great! Now the CPU needs cooling. Install the CPU Fan on top of it.",
        targetPartId: 'cpu-fan',
        targetSlotId: 'slot-cpu-fan'
    },
    {
        step: 3,
        message: "Next is Memory (RAM). Install the first stick into the first slot.",
        targetPartId: 'ram-stick-1',
        targetSlotId: 'slot-ram-1'
    },
    {
        step: 4,
        message: "Install the second RAM stick for dual-channel performance.",
        targetPartId: 'ram-stick-2',
        targetSlotId: 'slot-ram-2'
    },
    {
        step: 5,
        message: "Add the third RAM stick to expand capacity.",
        targetPartId: 'ram-stick-3',
        targetSlotId: 'slot-ram-3'
    },
    {
        step: 6,
        message: "Fill the last RAM slot for maximum memory!",
        targetPartId: 'ram-stick-4',
        targetSlotId: 'slot-ram-4'
    },
    {
        step: 7,
        message: "Now for the Games! Install the Graphics Card (GPU) into the PCIe slot.",
        targetPartId: 'gpu-card',
        targetSlotId: 'slot-pcie-1'
    },
    {
        step: 8,
        message: "We need storage. Install the NVMe SSD into the M.2 slot.",
        targetPartId: 'storage-nvme',
        targetSlotId: 'slot-m2'
    },
    {
        step: 9,
        message: "Finally, power it all up! Install the Power Supply Unit (PSU) at the bottom.",
        targetPartId: 'psu-unit',
        targetSlotId: 'slot-psu'
    }
];

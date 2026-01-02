export type PartType = 'motherboard' | 'cpu' | 'ram' | 'gpu' | 'ssd' | 'hdd' | 'cooler' | 'wifi' | 'sound' | 'psu';

export interface Part {
    id: string;
    type: PartType;
    name: string;
    socket?: string;
    ramSlots?: number;
    pcieSlots?: string[];
    m2Slots?: number;
    sataPorts?: number;
    interface?: 'M.2' | 'SATA';
    pcieType?: 'x16' | 'x1' | 'x4' | 'x8';
    capacity?: string;
    speed?: string;
    price?: number;
    image?: string;
    wattage?: number;
}

export const parts: Part[] = [
    {
        id: 'mb-1',
        type: 'motherboard',
        name: 'ASUS ROG B550-F',
        socket: 'AM4',
        ramSlots: 4,
        pcieSlots: ['x16', 'x1', 'x1', 'x1'],
        m2Slots: 2,
        sataPorts: 6,
        price: 180
    },
    // CPUs - All AMD AM4 compatible
    {
        id: 'cpu-1',
        type: 'cpu',
        name: 'AMD Ryzen 5 5600X',
        socket: 'AM4',
        price: 200
    },
    {
        id: 'cpu-3',
        type: 'cpu',
        name: 'AMD Ryzen 7 5800X',
        socket: 'AM4',
        price: 350
    },
    {
        id: 'cpu-4',
        type: 'cpu',
        name: 'AMD Ryzen 9 5900X',
        socket: 'AM4',
        price: 450
    },
    {
        id: 'cpu-5',
        type: 'cpu',
        name: 'AMD Ryzen 5 3600',
        socket: 'AM4',
        price: 150
    },
    {
        id: 'cpu-6',
        type: 'cpu',
        name: 'AMD Ryzen 7 3700X',
        socket: 'AM4',
        price: 280
    },
    // RAM Modules
    {
        id: 'ram-1',
        type: 'ram',
        name: 'Corsair Vengeance 8GB',
        speed: '3200MHz',
        price: 45
    },
    {
        id: 'ram-2',
        type: 'ram',
        name: 'G.Skill Ripjaws 8GB',
        speed: '3200MHz',
        price: 42
    },
    {
        id: 'ram-3',
        type: 'ram',
        name: 'Corsair Vengeance 16GB',
        speed: '3200MHz',
        price: 75
    },
    {
        id: 'ram-4',
        type: 'ram',
        name: 'G.Skill Trident Z 32GB',
        speed: '3600MHz',
        price: 140
    },
    {
        id: 'ram-5',
        type: 'ram',
        name: 'Corsair Vengeance RGB 16GB',
        speed: '3600MHz',
        price: 85
    },
    // GPUs
    {
        id: 'gpu-1',
        type: 'gpu',
        name: 'NVIDIA GeForce GTX 1660',
        pcieType: 'x16',
        price: 250
    },
    {
        id: 'gpu-2',
        type: 'gpu',
        name: 'NVIDIA RTX 3060',
        pcieType: 'x16',
        price: 400
    },
    {
        id: 'gpu-3',
        type: 'gpu',
        name: 'NVIDIA RTX 3070',
        pcieType: 'x16',
        price: 600
    },
    {
        id: 'gpu-4',
        type: 'gpu',
        name: 'AMD RX 6600 XT',
        pcieType: 'x16',
        price: 350
    },
    // SSDs - M.2
    {
        id: 'm2-1',
        type: 'ssd',
        name: 'Samsung 970 EVO 500GB',
        interface: 'M.2',
        capacity: '500GB',
        price: 80
    },
    {
        id: 'm2-2',
        type: 'ssd',
        name: 'Samsung 980 PRO 1TB',
        interface: 'M.2',
        capacity: '1TB',
        price: 150
    },
    {
        id: 'm2-3',
        type: 'ssd',
        name: 'WD Black SN850 2TB',
        interface: 'M.2',
        capacity: '2TB',
        price: 280
    },
    // SSDs - SATA
    {
        id: 'sata-1',
        type: 'ssd',
        name: 'Crucial MX500 1TB',
        interface: 'SATA',
        capacity: '1TB',
        price: 90
    },
    {
        id: 'sata-2',
        type: 'ssd',
        name: 'Samsung 870 EVO 2TB',
        interface: 'SATA',
        capacity: '2TB',
        price: 180
    },
    // HDDs
    {
        id: 'hdd-1',
        type: 'hdd',
        name: 'Seagate Barracuda 2TB',
        interface: 'SATA',
        capacity: '2TB',
        price: 60
    },
    {
        id: 'hdd-2',
        type: 'hdd',
        name: 'Western Digital Blue 4TB',
        interface: 'SATA',
        capacity: '4TB',
        price: 95
    },
    // CPU Coolers
    {
        id: 'cooler-1',
        type: 'cooler',
        name: 'Cooler Master Hyper 212',
        price: 40
    },
    {
        id: 'cooler-2',
        type: 'cooler',
        name: 'Noctua NH-D15',
        price: 100
    },
    {
        id: 'cooler-3',
        type: 'cooler',
        name: 'Corsair H100i RGB AIO',
        price: 150
    },
    // PCIe x1 Cards
    {
        id: 'wifi-1',
        type: 'wifi',
        name: 'ASUS WiFi 6 Card',
        pcieType: 'x1',
        price: 50
    },
    {
        id: 'sound-1',
        type: 'sound',
        name: 'Creative Sound Blaster Z',
        pcieType: 'x1',
        price: 80
    },
    // Power Supplies
    {
        id: 'psu-1',
        type: 'psu',
        name: 'Corsair CX550 (550W)',
        wattage: 550,
        price: 65
    },
    {
        id: 'psu-2',
        type: 'psu',
        name: 'EVGA SuperNOVA 750 (750W)',
        wattage: 750,
        price: 110
    },
    {
        id: 'psu-3',
        type: 'psu',
        name: 'Seasonic Focus GX-1000 (1000W)',
        wattage: 1000,
        price: 190
    }
];

export const motherboard = parts.find(p => p.type === 'motherboard')!;

export type ZoneId = 'cpu' | 'ram-1' | 'ram-2' | 'ram-3' | 'ram-4' | 'pcie-x16' | 'pcie-x1-1' | 'pcie-x1-2' | 'pcie-x1-3' | 'm2-1' | 'm2-2' | 'sata' | 'cooler' | 'psu';

export interface PlacedParts {
    [key: string]: Part | null;
}

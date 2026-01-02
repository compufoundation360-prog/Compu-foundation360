/**
 * Simulator Data Configuration
 * 
 * ⚠️ TEMPORARY URL HANDLING:
 * If a simulator URL becomes inactive or broken:
 * 1. Check if it's marked with isTemporary: true
 * 2. Update the url field with the new working URL
 * 3. If you have a permanent hosting solution, remove isTemporary flag
 * 4. The SimulatorPreview component will handle broken links gracefully
 * 
 * For permanent hosting options:
 * - Replit paid plan (keeps apps running)
 * - Vercel/Netlify deployment
 * - GitHub Pages
 * - Your own domain/VPS
 */

// Import thumbnail
import storageSpeedThumb from '../assets/thumbnails/storage-speed-sim-preview.jpg';

export interface Simulator {
  id: string;
  name: string;
  description: string;
  moduleId: number;
  topicId?: string; // Optional: specific topic ID for topic-specific simulators
  previewImage?: string;
  url: string; // Simulator URL - if temporary, update before expiration
  isTemporary?: boolean; // Optional: mark if URL is temporary and needs updating
  componentId?: string; // Optional: internal component ID for modal-based simulators
}

export const simulators: Simulator[] = [
  {
    id: "pc-build",
    name: "PC Build Simulator",
    description: "Build your own computer by selecting and connecting hardware components. Learn about CPU, RAM, storage, and how parts work together.",
    moduleId: 1,
    topicId: "3", // Topic 3: Hardware Basics
    previewImage: "module-media/pc-build-preview.jpg",
    url: "#",
    componentId: "pc-builder",
  },
  {
    id: "ssd-installation",
    name: "SSD Installation Simulator",
    description: "Learn how to install SSDs correctly. Practice placing M.2 NVMe and SATA SSDs in the right slots on the motherboard.",
    moduleId: 2,
    topicId: "6", // Topic 6: SSD & NVMe
    previewImage: storageSpeedThumb, // Use imported variable
    url: "#", // Placeholder - user will add link later
  },
  {
    id: "pc-build-module2",
    name: "PC Build Simulator",
    description: "Build your own computer by selecting and connecting hardware components. Learn about CPU socket, RAM slots, GPU placement, and SSD installation on the motherboard.",
    moduleId: 2,
    topicId: "7", // Topic 7: Motherboard
    previewImage: "module-media/pc-build-preview.jpg", // Using existing PC Build thumbnail
    url: "#",
    componentId: "pc-builder",
  },
  {
    id: "file-system-storage",
    name: "File System & Storage Simulator",
    description: "Practice file management safely in a virtual environment. Learn to organize files, use the Recycle Bin, manage storage, and handle USB devices.",
    moduleId: 3,
    url: "#", // Placeholder - will be updated when simulator is deployed
  },
  {
    id: "networking-internet",
    name: "Networking & Internet Simulator",
    description: "Understand how devices connect to the internet. Learn about routers, Wi-Fi signals, DNS, and safe browsing practices.",
    moduleId: 7,
    url: "#", // Placeholder - will be updated when simulator is deployed
  },
  {
    id: "blockchain-currency",
    name: "Blockchain & Digital Currency Simulator",
    description: "Learn how blockchain works through interactive blocks. Understand digital payments, security, and safe transaction practices.",
    moduleId: 8,
    url: "#", // Placeholder - will be updated when simulator is deployed
  },
  {
    id: "security-scam-training",
    name: "Virus, Security & Scam Training Simulator",
    description: "Train yourself to recognize digital dangers. Learn to identify phishing, fake pop-ups, unsafe downloads, and scam patterns.",
    moduleId: 9,
    url: "#", // Placeholder - will be updated when simulator is deployed
  },
  {
    id: "pc-build-module4",
    name: "PC Build Simulator",
    description: "Advanced PC Building. Assemble all components including CPU, Cooler, RAM, GPU, PSU, and manage cable connections.",
    moduleId: 4,
    topicId: "1", // Topic 1: Inside a Computer
    previewImage: "module-media/pc-build-preview.jpg",
    url: "#",
    componentId: "pc-builder",
  },
];

/**
 * Get simulator for a specific module
 * @param moduleId - The module ID to get simulator for
 * @returns Simulator object if found, undefined otherwise
 */
export function getSimulatorByModuleId(moduleId: number): Simulator | undefined {
  return simulators.find(sim => sim.moduleId === moduleId && !sim.topicId);
}

/**
 * Get simulator for a specific module and topic
 * @param moduleId - The module ID to get simulator for
 * @param topicId - The topic ID to get simulator for
 * @returns Simulator object if found, undefined otherwise
 */
export function getSimulatorByTopic(moduleId: number, topicId: string): Simulator | undefined {
  return simulators.find(sim => sim.moduleId === moduleId && sim.topicId === topicId);
}


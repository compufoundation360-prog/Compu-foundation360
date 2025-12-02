import React from "react";

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

// Computer Desktop Setup Illustration
export const ComputerIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Monitor */}
    <rect x="80" y="40" width="240" height="140" rx="8" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <rect x="100" y="60" width="200" height="100" rx="4" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1"/>
    <rect x="110" y="70" width="180" height="80" rx="2" fill="hsl(var(--primary))" opacity="0.2"/>
    {/* Monitor Stand */}
    <rect x="185" y="180" width="30" height="20" fill="hsl(var(--primary))" opacity="0.3"/>
    <rect x="170" y="200" width="60" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.3"/>
    
    {/* Keyboard */}
    <rect x="120" y="220" width="160" height="50" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1"/>
    <rect x="130" y="230" width="20" height="15" rx="2" fill="hsl(var(--foreground))" opacity="0.1"/>
    <rect x="155" y="230" width="20" height="15" rx="2" fill="hsl(var(--foreground))" opacity="0.1"/>
    <rect x="180" y="230" width="20" height="15" rx="2" fill="hsl(var(--foreground))" opacity="0.1"/>
    <rect x="205" y="230" width="20" height="15" rx="2" fill="hsl(var(--foreground))" opacity="0.1"/>
    <rect x="230" y="230" width="20" height="15" rx="2" fill="hsl(var(--foreground))" opacity="0.1"/>
    <rect x="255" y="230" width="20" height="15" rx="2" fill="hsl(var(--foreground))" opacity="0.1"/>
    
    {/* Mouse */}
    <ellipse cx="300" cy="245" rx="15" ry="20" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1"/>
  </svg>
);

// Data Processing Visualization
export const DataProcessingIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Data Input */}
    <rect x="20" y="120" width="80" height="60" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <text x="60" y="155" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">Data</text>
    <path d="M100 150 L140 150" stroke="hsl(var(--primary))" strokeWidth="3" markerEnd="url(#arrowhead)"/>
    
    {/* Processing Unit */}
    <rect x="140" y="100" width="120" height="100" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <circle cx="200" cy="150" r="30" fill="hsl(var(--secondary))" opacity="0.3"/>
    <text x="200" y="155" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="16" fontWeight="bold">CPU</text>
    <path d="M260 150 L300 150" stroke="hsl(var(--accent))" strokeWidth="3" markerEnd="url(#arrowhead)"/>
    
    {/* Output */}
    <rect x="300" y="120" width="80" height="60" rx="8" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <text x="340" y="155" textAnchor="middle" fill="hsl(var(--accent))" fontSize="14" fontWeight="bold">Info</text>
    
    {/* Arrow marker */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--foreground))" opacity="0.5"/>
      </marker>
    </defs>
  </svg>
);

// Network/Communication Diagram
export const NetworkIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central Hub */}
    <circle cx="200" cy="150" r="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <text x="200" y="155" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">Hub</text>
    
    {/* Connected Devices */}
    <circle cx="80" cy="80" r="25" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <text x="80" y="85" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="12">PC1</text>
    <line x1="105" y1="105" x2="175" y2="135" stroke="hsl(var(--border))" strokeWidth="2"/>
    
    <circle cx="320" cy="80" r="25" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <text x="320" y="85" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="12">PC2</text>
    <line x1="295" y1="105" x2="225" y2="135" stroke="hsl(var(--border))" strokeWidth="2"/>
    
    <circle cx="80" cy="220" r="25" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <text x="80" y="225" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="12">PC3</text>
    <line x1="105" y1="195" x2="175" y2="165" stroke="hsl(var(--border))" strokeWidth="2"/>
    
    <circle cx="320" cy="220" r="25" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <text x="320" y="225" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="12">PC4</text>
    <line x1="295" y1="195" x2="225" y2="165" stroke="hsl(var(--border))" strokeWidth="2"/>
  </svg>
);

// Speed/Performance Chart
export const SpeedChartIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 600, 
  height = 500 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 600 500"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background grid lines */}
    <line x1="80" y1="100" x2="80" y2="400" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3"/>
    <line x1="80" y1="200" x2="520" y2="200" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3"/>
    <line x1="80" y1="300" x2="520" y2="300" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3"/>
    
    {/* Y-axis */}
    <line x1="80" y1="80" x2="80" y2="400" stroke="hsl(var(--border))" strokeWidth="3"/>
    {/* X-axis */}
    <line x1="80" y1="400" x2="520" y2="400" stroke="hsl(var(--border))" strokeWidth="3"/>
    
    {/* Human bar */}
    <rect x="120" y="320" width="120" height="80" fill="hsl(var(--destructive))" opacity="0.8" rx="6"/>
    <text x="180" y="440" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="600">Human</text>
    <text x="180" y="310" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="16" fontWeight="bold">Slow</text>
    
    {/* Computer bar */}
    <rect x="280" y="100" width="120" height="300" fill="hsl(var(--success))" opacity="0.8" rx="6"/>
    <text x="340" y="440" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="600">Computer</text>
    <text x="340" y="90" textAnchor="middle" fill="hsl(var(--success))" fontSize="16" fontWeight="bold">Fast</text>
    
    {/* Speed indicator */}
    <text x="300" y="50" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="24" fontWeight="bold">Speed Comparison</text>
  </svg>
);

// Storage Devices (HDD, SSD, RAM)
export const StorageIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* HDD */}
    <rect x="50" y="100" width="100" height="80" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
    <rect x="60" y="110" width="80" height="60" fill="hsl(var(--foreground))" opacity="0.1"/>
    <circle cx="100" cy="140" r="15" fill="hsl(var(--primary))" opacity="0.3"/>
    <text x="100" y="200" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">HDD</text>
    
    {/* SSD */}
    <rect x="150" y="120" width="100" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <rect x="160" y="125" width="80" height="30" fill="hsl(var(--primary))" opacity="0.1"/>
    <text x="200" y="180" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">SSD</text>
    
    {/* RAM */}
    <rect x="260" y="90" width="80" height="100" rx="4" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <rect x="270" y="100" width="60" height="15" fill="hsl(var(--secondary))" opacity="0.3"/>
    <rect x="270" y="120" width="60" height="15" fill="hsl(var(--secondary))" opacity="0.3"/>
    <rect x="270" y="140" width="60" height="15" fill="hsl(var(--secondary))" opacity="0.3"/>
    <rect x="270" y="160" width="60" height="15" fill="hsl(var(--secondary))" opacity="0.3"/>
    <text x="300" y="210" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">RAM</text>
  </svg>
);

// CPU/Motherboard Illustration
export const CPUIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Motherboard */}
    <rect x="50" y="50" width="300" height="200" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
    
    {/* CPU */}
    <rect x="150" y="100" width="100" height="100" rx="4" fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <text x="200" y="155" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" fontWeight="bold">CPU</text>
    <text x="200" y="175" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">Processor</text>
    
    {/* RAM Slots */}
    <rect x="80" y="60" width="60" height="20" rx="2" fill="hsl(var(--secondary))" opacity="0.3" stroke="hsl(var(--secondary))" strokeWidth="1"/>
    <rect x="80" y="85" width="60" height="20" rx="2" fill="hsl(var(--secondary))" opacity="0.3" stroke="hsl(var(--secondary))" strokeWidth="1"/>
    
    {/* Connectors */}
    <circle cx="280" cy="120" r="8" fill="hsl(var(--accent))" opacity="0.5"/>
    <circle cx="280" cy="150" r="8" fill="hsl(var(--accent))" opacity="0.5"/>
    <circle cx="280" cy="180" r="8" fill="hsl(var(--accent))" opacity="0.5"/>
  </svg>
);

// Input Devices
export const InputDevicesIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Keyboard */}
    <rect x="50" y="150" width="120" height="50" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
    <rect x="60" y="160" width="15" height="12" rx="2" fill="hsl(var(--foreground))" opacity="0.2"/>
    <rect x="80" y="160" width="15" height="12" rx="2" fill="hsl(var(--foreground))" opacity="0.2"/>
    <rect x="100" y="160" width="15" height="12" rx="2" fill="hsl(var(--foreground))" opacity="0.2"/>
    <text x="110" y="220" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Keyboard</text>
    
    {/* Mouse */}
    <ellipse cx="250" cy="175" rx="20" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
    <text x="250" y="220" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Mouse</text>
    
    {/* Scanner */}
    <rect x="320" y="140" width="60" height="70" rx="4" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <rect x="330" y="150" width="40" height="50" fill="hsl(var(--primary))" opacity="0.1"/>
    <text x="350" y="220" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Scanner</text>
  </svg>
);

// Output Devices
export const OutputDevicesIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Monitor */}
    <rect x="80" y="60" width="160" height="100" rx="4" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <rect x="90" y="70" width="140" height="80" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1"/>
    <rect x="100" y="80" width="120" height="60" fill="hsl(var(--primary))" opacity="0.2"/>
    <rect x="150" y="160" width="20" height="15" fill="hsl(var(--primary))" opacity="0.3"/>
    <rect x="140" y="175" width="40" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.3"/>
    <text x="160" y="200" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Monitor</text>
    
    {/* Printer */}
    <rect x="280" y="100" width="80" height="100" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
    <rect x="290" y="110" width="60" height="20" fill="hsl(var(--foreground))" opacity="0.1"/>
    <rect x="290" y="140" width="60" height="50" fill="hsl(var(--accent))" opacity="0.2"/>
    <text x="320" y="220" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Printer</text>
  </svg>
);

// Computer Types - Microcomputer
export const MicrocomputerIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Laptop */}
    <rect x="100" y="80" width="200" height="120" rx="4" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <rect x="110" y="90" width="180" height="100" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1"/>
    <rect x="120" y="100" width="160" height="80" fill="hsl(var(--primary))" opacity="0.2"/>
    <rect x="150" y="200" width="100" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.3"/>
    <text x="200" y="230" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Microcomputer</text>
    <text x="200" y="250" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">PC, Laptop, Tablet</text>
  </svg>
);

// Computer Types - Mainframe
export const MainframeIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Server Rack */}
    <rect x="120" y="40" width="160" height="220" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
    <rect x="130" y="50" width="140" height="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1"/>
    <rect x="130" y="100" width="140" height="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1"/>
    <rect x="130" y="150" width="140" height="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1"/>
    <rect x="130" y="200" width="140" height="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1"/>
    <circle cx="180" cy="70" r="3" fill="hsl(var(--success))"/>
    <circle cx="180" cy="120" r="3" fill="hsl(var(--success))"/>
    <circle cx="180" cy="170" r="3" fill="hsl(var(--success))"/>
    <circle cx="180" cy="220" r="3" fill="hsl(var(--success))"/>
    <text x="200" y="280" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Mainframe</text>
    <text x="200" y="295" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Large Organizations</text>
  </svg>
);

// Computer Types - Supercomputer
export const SupercomputerIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Multiple Server Units */}
    <rect x="50" y="60" width="80" height="180" rx="4" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <rect x="160" y="40" width="80" height="200" rx="4" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <rect x="270" y="60" width="80" height="180" rx="4" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    
    {/* Connection lines */}
    <line x1="130" y1="150" x2="160" y2="140" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <line x1="240" y1="140" x2="270" y2="150" stroke="hsl(var(--accent))" strokeWidth="2"/>
    
    <text x="200" y="260" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Supercomputer</text>
    <text x="200" y="280" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Scientific Research</text>
  </svg>
);

// System Architecture Block Diagram
export const SystemArchitectureIllustration: React.FC<IllustrationProps> = ({ 
  className = "", 
  width = 400, 
  height = 300 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Input Unit */}
    <rect x="20" y="100" width="80" height="100" rx="8" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <text x="60" y="135" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12" fontWeight="bold">INPUT</text>
    <text x="60" y="155" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Keyboard</text>
    <text x="60" y="170" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Mouse</text>
    <text x="60" y="185" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Scanner</text>
    
    {/* Arrow to Processing */}
    <path d="M100 150 L140 150" stroke="hsl(var(--primary))" strokeWidth="3" markerEnd="url(#arrow)"/>
    
    {/* Processing Unit */}
    <rect x="140" y="80" width="120" height="140" rx="8" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2"/>
    <text x="200" y="110" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="12" fontWeight="bold">PROCESSING</text>
    <text x="200" y="130" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">CPU</text>
    <text x="200" y="150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">ALU + CU</text>
    <text x="200" y="170" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Registers</text>
    
    {/* Arrow to Output */}
    <path d="M260 150 L300 150" stroke="hsl(var(--accent))" strokeWidth="3" markerEnd="url(#arrow)"/>
    
    {/* Output Unit */}
    <rect x="300" y="100" width="80" height="100" rx="8" fill="hsl(var(--accent))" opacity="0.1" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <text x="340" y="135" textAnchor="middle" fill="hsl(var(--accent))" fontSize="12" fontWeight="bold">OUTPUT</text>
    <text x="340" y="155" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Monitor</text>
    <text x="340" y="170" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Printer</text>
    <text x="340" y="185" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Speakers</text>
    
    {/* Storage Unit */}
    <rect x="140" y="240" width="120" height="40" rx="8" fill="hsl(var(--success))" opacity="0.1" stroke="hsl(var(--success))" strokeWidth="2"/>
    <text x="200" y="260" textAnchor="middle" fill="hsl(var(--success))" fontSize="12" fontWeight="bold">STORAGE</text>
    <text x="200" y="275" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">RAM / HDD</text>
    
    {/* Arrows to/from Storage */}
    <path d="M200 220 L200 240" stroke="hsl(var(--success))" strokeWidth="2" markerEnd="url(#arrow)"/>
    <path d="M140 260 L100 260 L100 200 L140 200" stroke="hsl(var(--success))" strokeWidth="2" markerEnd="url(#arrow)"/>
    <path d="M260 260 L300 260 L300 200 L260 200" stroke="hsl(var(--success))" strokeWidth="2" markerEnd="url(#arrow)"/>
    
    {/* Arrow marker */}
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--foreground))" opacity="0.6"/>
      </marker>
    </defs>
  </svg>
);


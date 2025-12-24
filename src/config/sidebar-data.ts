export interface Topic {
    id: string;
    title: string;
}

export interface Module {
    id: number;
    title: string;
    path: string;
    topics: Topic[];
}

export const modules: Module[] = [
    {
        id: 1,
        title: "Introduction to Computers",
        path: "/module/1",
        topics: [
            { id: "m1-intro", title: "▶ Intro Video" }, // Added Intro Video
            { id: "m1-t1", title: "What is a Computer?" },
            { id: "m1-t2", title: "Types of Computers" },
            { id: "m1-t3", title: "Hardware Basics" },
            { id: "m1-t4", title: "Software Basics" },
            { id: "m1-t5", title: "Hardware vs Software" },
            { id: "m1-t6", title: "Input Devices" },
            { id: "m1-t7", title: "Output Devices" },
            { id: "m1-t8", title: "I/O Devices" },
        ]
    },
    {
        id: 2,
        title: "Internal Components & Architecture",
        path: "/module/2",
        topics: [
            { id: "m2-t1", title: "CPU Basics" },
            { id: "m2-t2", title: "RAM Basics" },
            { id: "m2-t3", title: "ROM Basics" },
            { id: "m2-t4", title: "Storage Concepts" },
            { id: "m2-t5", title: "HDD" },
            { id: "m2-t6", title: "SSD & NVMe" },
            { id: "m2-t7", title: "Motherboard" },
            { id: "m2-t8", title: "Ports & Connectors" },
            { id: "m2-t9", title: "GPU Basics" },
            { id: "m2-t10", title: "ALU" },
            { id: "m2-t11", title: "CU" },
            { id: "m2-t12", title: "Firmware" },
        ]
    },
    {
        id: 3,
        title: "Operating Systems, Files & Mobile Computing",
        path: "/module/3",
        topics: [
            { id: "m3-t1", title: "Boot Process" },
            { id: "m3-t2", title: "Operating Systems" },
            { id: "m3-t3", title: "File System" },
            { id: "m3-t4", title: "File Extensions" },
            { id: "m3-t5", title: "File Management" },
            { id: "m3-t6", title: "System Specifications" },
            { id: "m3-t7", title: "Mobile = A Computer" },
            { id: "m3-t8", title: "Sensors in Devices" },
            { id: "m3-t9", title: "What is a Program?" },
            { id: "m3-t10", title: "What is Data?" },
        ]
    },
    {
        id: 4,
        title: "Computer Hardware (Deep Dive)",
        path: "/module/4",
        topics: [
            { id: "m4-t1", title: "Inside a Computer" },
            { id: "m4-t2", title: "CPU Architecture" },
            { id: "m4-t3", title: "GPU Architecture" },
            { id: "m4-t4", title: "RAM Architecture" },
            { id: "m4-t5", title: "Storage Connections" },
            { id: "m4-t6", title: "Cooling Systems" },
            { id: "m4-t7", title: "Power Supply (PSU)" },
            { id: "m4-t8", title: "BIOS / UEFI" },
            { id: "m4-t9", title: "Expansion Cards" },
            { id: "m4-t10", title: "Peripheral Devices" },
            { id: "m4-t11", title: "Display Technology" },
            { id: "m4-t12", title: "Printers & Scanners" },
        ]
    },
    {
        id: 5,
        title: "Storage Systems",
        path: "/module/5",
        topics: [
            { id: "m5-t1", title: "Storage Concepts" },
            { id: "m5-t2", title: "HDD Deep Dive" },
            { id: "m5-t3", title: "SSD Deep Dive" },
            { id: "m5-t4", title: "NVMe" },
            { id: "m5-t5", title: "Storage File Systems" },
            { id: "m5-t6", title: "Disk Partitioning" },
            { id: "m5-t7", title: "Disk Management Tools" },
            { id: "m5-t8", title: "RAID Concepts" },
            { id: "m5-t9", title: "Cloud Storage" },
        ]
    },
    {
        id: 6,
        title: "Software & Operating Systems",
        path: "/module/6",
        topics: [
            { id: "m6-t1", title: "Types of Software" },
            { id: "m6-t2", title: "OS Responsibilities" },
            { id: "m6-t3", title: "Windows OS Overview" },
            { id: "m6-t4", title: "Linux OS Overview" },
            { id: "m6-t5", title: "macOS Overview" },
            { id: "m6-t6", title: "Mobile OS" },
            { id: "m6-t7", title: "Drivers" },
            { id: "m6-t8", title: "Software Installation & Uninstallation" },
            { id: "m6-t9", title: "Updates & Patches" },
        ]
    },
    {
        id: 7,
        title: "File Systems & Data Management",
        path: "/module/7",
        topics: [
            { id: "m7-t1", title: "File Organization" },
            { id: "m7-t2", title: "File Operations" },
            { id: "m7-t3", title: "File Types" },
            { id: "m7-t4", title: "Compression" },
            { id: "m7-t5", title: "Backup Basics" },
            { id: "m7-t6", title: "File Security" },
            { id: "m7-t7", title: "Searching Files" },
            { id: "m7-t8", title: "Recycle Bin & Restore" },
        ]
    },
    {
        id: 8,
        title: "System Setup, Installation & Configuration",
        path: "/module/8",
        topics: [
            { id: "m8-t1", title: "Pre-Installation Requirements" },
            { id: "m8-t2", title: "BIOS/UEFI Configuration" },
            { id: "m8-t3", title: "Bootable USB Creation" },
            { id: "m8-t4", title: "OS Installation Steps" },
            { id: "m8-t5", title: "Partition Management" },
            { id: "m8-t6", title: "Initial System Configuration" },
            { id: "m8-t7", title: "Installing Drivers" },
            { id: "m8-t8", title: "Installing Essential Software" },
            { id: "m8-t9", title: "User Accounts & Permissions" },
            { id: "m8-t10", title: "Display Settings" },
            { id: "m8-t11", title: "Sound Settings" },
            { id: "m8-t12", title: "Network Setup" },
            { id: "m8-t13", title: "Bluetooth Setup" },
            { id: "m8-t14", title: "Printer & Scanner Setup" },
            { id: "m8-t15", title: "Security Setup" },
            { id: "m8-t16", title: "Backup Setup" },
            { id: "m8-t17", title: "System Restore & Recovery" },
        ]
    },
    {
        id: 9,
        title: "Networking Fundamentals",
        path: "/module/9",
        topics: [
            { id: "m9-t1", title: "What is a Network?" },
            { id: "m9-t2", title: "Network Devices" },
            { id: "m9-t3", title: "IP Addressing" },
            { id: "m9-t4", title: "MAC Address" },
            { id: "m9-t5", title: "WiFi Basics" },
            { id: "m9-t6", title: "Network Cables" },
            { id: "m9-t7", title: "DNS Basics" },
            { id: "m9-t8", title: "Ping & Speed Test" },
            { id: "m9-t9", title: "Hotspot & Tethering" },
            { id: "m9-t10", title: "Mobile Data Networks" },
            { id: "m9-t11", title: "Common Network Problems" },
            { id: "m9-t12", title: "How Internet Works" },
        ]
    },
    {
        id: 10,
        title: "Cybersecurity Basics",
        path: "/module/10",
        topics: [
            { id: "m10-t1", title: "What is Cybersecurity?" },
            { id: "m10-t2", title: "Password Security" },
            { id: "m10-t3", title: "OTP & MFA" },
            { id: "m10-t4", title: "Malware Types" },
            { id: "m10-t5", title: "Phishing" },
            { id: "m10-t6", title: "Safe Browsing" },
            { id: "m10-t7", title: "Firewalls" },
            { id: "m10-t8", title: "Antivirus & Anti-malware Tools" },
            { id: "m10-t9", title: "Secure WiFi Usage" },
            { id: "m10-t10", title: "Backup & Recovery" },
            { id: "m10-t11", title: "Recognizing Scams" },
            { id: "m10-t12", title: "Cyber Hygiene" },
        ]
    },
    {
        id: 11,
        title: "Security Ethics & Digital Citizenship",
        path: "/module/11",
        topics: [
            { id: "m11-t1", title: "Digital Citizenship Basics" },
            { id: "m11-t2", title: "Online Etiquette" },
            { id: "m11-t3", title: "Data Privacy" },
            { id: "m11-t4", title: "Safe Social Media Usage" },
            { id: "m11-t5", title: "UPI & Online Payments Safety" },
            { id: "m11-t6", title: "Digital Footprint" },
            { id: "m11-t7", title: "Cyberbullying Awareness" },
            { id: "m11-t8", title: "Responsible Device Usage" },
            { id: "m11-t9", title: "Fake News Detection" },
            { id: "m11-t10", title: "Ethical Behavior Online" },
        ]
    },
    {
        id: 12,
        title: "Cloud Computing Basics",
        path: "/module/12",
        topics: [
            { id: "m12-t1", title: "What is Cloud Computing?" },
            { id: "m12-t2", title: "Cloud in Daily Life" },
            { id: "m12-t3", title: "Cloud Service Models" },
            { id: "m12-t4", title: "Cloud Deployment Models" },
            { id: "m12-t5", title: "Cloud Storage" },
            { id: "m12-t6", title: "Virtual Machines (Beginner View)" },
            { id: "m12-t7", title: "Cloud Providers" },
            { id: "m12-t8", title: "Backups in Cloud" },
            { id: "m12-t9", title: "Security in Cloud" },
            { id: "m12-t10", title: "Advantages vs Limitations" },
        ]
    },
    {
        id: 13,
        title: "Digital Literacy & Online Tools",
        path: "/module/13",
        topics: [
            { id: "m13-t1", title: "Introduction to Digital Literacy" },
            { id: "m13-t2", title: "Using Web Browsers" },
            { id: "m13-t3", title: "Search Engine Skills" },
            { id: "m13-t4", title: "Email Basics" },
            { id: "m13-t5", title: "Calendar Tools" },
            { id: "m13-t6", title: "Google Drive / OneDrive" },
            { id: "m13-t7", title: "Online Forms" },
            { id: "m13-t8", title: "Video Conferencing Tools" },
            { id: "m13-t9", title: "Digital Payments" },
            { id: "m13-t10", title: "Basic Online Safety" },
        ]
    },
    {
        id: 14,
        title: "Troubleshooting & Maintenance",
        path: "/module/14",
        topics: [
            { id: "m14-t1", title: "Slow Computer Issues" },
            { id: "m14-t2", title: "Internet Troubleshooting" },
            { id: "m14-t3", title: "Startup Problems" },
            { id: "m14-t4", title: "Display Issues" },
            { id: "m14-t5", title: "Audio Issues" },
            { id: "m14-t6", title: "Printer Troubleshooting" },
            { id: "m14-t7", title: "Malware Removal" },
            { id: "m14-t8", title: "System Cleanup" },
            { id: "m14-t9", title: "Backup & Restore" },
            { id: "m14-t10", title: "Mobile Troubleshooting" },
        ]
    },
    {
        id: 15,
        title: "Device Management (Mobile + PC)",
        path: "/module/15",
        topics: [
            { id: "m15-t1", title: "Mobile OS Basics" },
            { id: "m15-t2", title: "Mobile Storage" },
            { id: "m15-t3", title: "Mobile Security" },
            { id: "m15-t4", title: "Backup on Mobile" },
            { id: "m15-t5", title: "Mobile Updates" },
            { id: "m15-t6", title: "Mobile Settings" },
            { id: "m15-t7", title: "PC Power Management" },
            { id: "m15-t8", title: "Device Manager (Windows)" },
            { id: "m15-t9", title: "Task Manager" },
            { id: "m15-t10", title: "System Health Tools" },
        ]
    },
    {
        id: 16,
        title: "Productivity Tools (Office)",
        path: "/module/16",
        topics: [
            { id: "m16-t1", title: "MS Word Basics" },
            { id: "m16-t2", title: "Word Essential Skills" },
            { id: "m16-t3", title: "Word Professional Use" },
            { id: "m16-t4", title: "MS Excel Basics" },
            { id: "m16-t5", title: "Excel Formulas" },
            { id: "m16-t6", title: "Excel Data Tools" },
            { id: "m16-t7", title: "Excel for Work" },
            { id: "m16-t8", title: "PowerPoint Basics" },
            { id: "m16-t9", title: "PowerPoint Skills" },
            { id: "m16-t10", title: "PowerPoint for Work" },
        ]
    },
    {
        id: 17,
        title: "Data & AI Basics",
        path: "/module/17",
        topics: [
            { id: "m17-t1", title: "What is Data?" },
            { id: "m17-t2", title: "Data Formats" },
            { id: "m17-t3", title: "Basic Data Tools" },
            { id: "m17-t4", title: "Introduction to AI" },
            { id: "m17-t5", title: "Introduction to ML" },
            { id: "m17-t6", title: "Datasets" },
            { id: "m17-t7", title: "Training vs Testing" },
            { id: "m17-t8", title: "Neural Network Basics" },
            { id: "m17-t9", title: "Responsible AI Basics" },
            { id: "m17-t10", title: "AI Tools Introduction" },
        ]
    },
    {
        id: 18,
        title: "Programming Basics",
        path: "/module/18",
        topics: [
            { id: "m18-t1", title: "What is Programming?" },
            { id: "m18-t2", title: "Programming Languages" },
            { id: "m18-t3", title: "Python Basics" },
            { id: "m18-t4", title: "Logical Thinking" },
            { id: "m18-t5", title: "Conditions" },
            { id: "m18-t6", title: "Loops" },
            { id: "m18-t7", title: "Functions" },
            { id: "m18-t8", title: "Errors & Debugging" },
            { id: "m18-t9", title: "Writing First Program" },
            { id: "m18-t10", title: "Programming Careers" },
        ]
    },
    {
        id: 19,
        title: "Databases",
        path: "/module/19",
        topics: [
            { id: "m19-t1", title: "What is a Database?" },
            { id: "m19-t2", title: "Database Types" },
            { id: "m19-t3", title: "Tables, Rows, Columns" },
            { id: "m19-t4", title: "SQL Basics" },
            { id: "m19-t5", title: "CSV vs Excel vs Database" },
            { id: "m19-t6", title: "Database Tools" },
            { id: "m19-t7", title: "Queries & Filtering" },
            { id: "m19-t8", title: "Data Storage Concepts" },
            { id: "m19-t9", title: "Database Errors" },
            { id: "m19-t10", title: "Real Use Cases" },
        ]
    },
    {
        id: 20,
        title: "Web Concepts",
        path: "/module/20",
        topics: [
            { id: "m20-t1", title: "How the Web Works" },
            { id: "m20-t2", title: "What is a Website?" },
            { id: "m20-t3", title: "What is a Domain?" },
            { id: "m20-t4", title: "What is Hosting?" },
            { id: "m20-t5", title: "Frontend vs Backend" },
            { id: "m20-t6", title: "HTML Basics" },
            { id: "m20-t7", title: "CSS Basics" },
            { id: "m20-t8", title: "JavaScript Basics" },
            { id: "m20-t9", title: "Web Performance Basics" },
            { id: "m20-t10", title: "Browser Developer Tools" },
        ]
    },
    {
        id: 21,
        title: "Virtualization & Containers",
        path: "/module/21",
        topics: [
            { id: "m21-t1", title: "What is Virtualization?" },
            { id: "m21-t2", title: "VMs vs Physical Machines" },
            { id: "m21-t3", title: "Hypervisors" },
            { id: "m21-t4", title: "VirtualBox Basics" },
            { id: "m21-t5", title: "What are Containers?" },
            { id: "m21-t6", title: "Docker Basics" },
            { id: "m21-t7", title: "Docker Commands" },
            { id: "m21-t8", title: "Container vs VM" },
            { id: "m21-t9", title: "Real Use Cases" },
            { id: "m21-t10", title: "Cloud + Container Basics" },
        ]
    },
    {
        id: 22,
        title: "Raspberry Pi & Embedded Systems",
        path: "/module/22",
        topics: [
            { id: "m22-t1", title: "What is Raspberry Pi?" },
            { id: "m22-t2", title: "Raspberry Pi Hardware" },
            { id: "m22-t3", title: "Installing OS on Raspberry Pi" },
            { id: "m22-t4", title: "Basic Pi Usage" },
            { id: "m22-t5", title: "Basic Terminal Commands" },
            { id: "m22-t6", title: "GPIO Basics" },
            { id: "m22-t7", title: "Sensors & Modules" },
            { id: "m22-t8", title: "Automating Tasks" },
            { id: "m22-t9", title: "Pi as a Server" },
            { id: "m22-t10", title: "Real Projects" },
        ]
    },
    {
        id: 23,
        title: "Blockchain & Digital Currency",
        path: "/module/23",
        topics: [
            { id: "m23-t1", title: "What is Blockchain?" },
            { id: "m23-t2", title: "How Blockchain Works" },
            { id: "m23-t3", title: "Key Blockchain Characteristics" },
            { id: "m23-t4", title: "Cryptography Basics" },
            { id: "m23-t5", title: "What is Cryptocurrency?" },
            { id: "m23-t6", title: "How Transactions Work" },
            { id: "m23-t7", title: "Crypto Wallets" },
            { id: "m23-t8", title: "NFTs" },
            { id: "m23-t9", title: "Blockchain Use Cases" },
            { id: "m23-t10", title: "Risks & Limitations" },
        ]
    },
    {
        id: 24,
        title: "Quantum Computing Basics",
        path: "/module/24",
        topics: [
            { id: "m24-t1", title: "What is Quantum Computing?" },
            { id: "m24-t2", title: "Qubits" },
            { id: "m24-t3", title: "Quantum Gates" },
            { id: "m24-t4", title: "Entanglement" },
            { id: "m24-t5", title: "Quantum Speed Advantage" },
            { id: "m24-t6", title: "Quantum vs Classical Computer" },
            { id: "m24-t7", title: "Quantum Applications" },
            { id: "m24-t8", title: "Quantum Limitations" },
            { id: "m24-t9", title: "Quantum in India" },
            { id: "m24-t10", title: "Simple Quantum Demo Tools" },
        ]
    },
    {
        id: 25,
        title: "AI Ethics & Responsible AI",
        path: "/module/25",
        topics: [
            { id: "m25-t1", title: "Introduction to AI Ethics" },
            { id: "m25-t2", title: "AI Bias" },
            { id: "m25-t3", title: "Fairness" },
            { id: "m25-t4", title: "Privacy & AI" },
            { id: "m25-t5", title: "Transparency" },
            { id: "m25-t6", title: "Accountability" },
            { id: "m25-t7", title: "Safe Use of AI Tools" },
            { id: "m25-t8", title: "Ethical vs Harmful Use Cases" },
            { id: "m25-t9", title: "AI in India: Governance & Policy" },
            { id: "m25-t10", title: "Hands-On Ethics Activities" },
        ]
    },
];

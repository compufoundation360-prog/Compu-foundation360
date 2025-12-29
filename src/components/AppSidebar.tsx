import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Computer, Settings, Home, ChevronDown, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

type ModuleTopic = {
  id: string;
  title: string;
  summary: string;
  hash: string;
};

const modules = [
  { id: 1, title: "Introduction to Computers", path: "/module/1" },
  { id: 2, title: "Internal Components & Architecture", path: "/module/2" },
  { id: 3, title: "Operating Systems, Files & Mobile Computing", path: "/module/3" },
  { id: 4, title: "Computer Hardware (Deep Dive)", path: "/module/4" },
  { id: 5, title: "Storage Systems", path: "/module/5" },
  { id: 6, title: "Software & Operating Systems", path: "/module/6" },
  { id: 7, title: "File Systems & Data Management", path: "/module/7" },
  { id: 8, title: "System Setup & Configuration", path: "/module/8" },
  { id: 9, title: "Networking Fundamentals", path: "/module/9" },
  { id: 10, title: "Cybersecurity Basics", path: "/module/10" },
  { id: 11, title: "Security Ethics & Digital Citizenship", path: "/module/11" },
  { id: 12, title: "Cloud Computing Basics", path: "/module/12" },
  { id: 13, title: "Digital Literacy & Online Tools", path: "/module/13" },
  { id: 14, title: "Troubleshooting & Maintenance", path: "/module/14" },
  { id: 15, title: "Device Management (Mobile + PC)", path: "/module/15" },
  { id: 16, title: "Productivity Tools (Office)", path: "/module/16" },
  { id: 17, title: "Data & AI Basics", path: "/module/17" },
  { id: 18, title: "Programming Basics", path: "/module/18" },
  { id: 19, title: "Databases & SQL", path: "/module/19" },
  { id: 20, title: "Web Development Concepts", path: "/module/20" },
  { id: 21, title: "Virtualization & Containers", path: "/module/21" },
  { id: 22, title: "Raspberry Pi & Embedded Systems", path: "/module/22" },
  { id: 23, title: "Blockchain & Digital Currency", path: "/module/23" },
  { id: 24, title: "Quantum Computing Basics", path: "/module/24" },
  { id: 25, title: "AI Ethics & Responsible AI", path: "/module/25" },
];

const moduleTopics: Record<number, ModuleTopic[]> = {
  1: [
    {
      id: "m1-t1",
      title: "What is a Computer?",
      summary: "",
      hash: "#topic-what-is-a-computer",
    },
    {
      id: "m1-t2",
      title: "Types of Computers",
      summary: "",
      hash: "#topic-types-of-computers",
    },
    {
      id: "m1-t3",
      title: "Hardware Basics",
      summary: "",
      hash: "#topic-hardware-basics",
    },
    {
      id: "m1-t4",
      title: "Software Basics",
      summary: "",
      hash: "#topic-software-basics",
    },
    {
      id: "m1-t5",
      title: "Hardware vs Software",
      summary: "",
      hash: "#topic-hardware-vs-software",
    },
    {
      id: "m1-t6",
      title: "Input Devices",
      summary: "",
      hash: "#topic-input-devices",
    },
    {
      id: "m1-t7",
      title: "Output Devices",
      summary: "",
      hash: "#topic-output-devices",
    },
    {
      id: "m1-t8",
      title: "I/O Devices",
      summary: "",
      hash: "#topic-io-devices",
    },
  ],
  2: [
    {
      id: "m2-t1",
      title: "CPU Basics",
      summary: "",
      hash: "#topic-cpu-basics",
    },
    {
      id: "m2-t2",
      title: "RAM Basics",
      summary: "",
      hash: "#topic-ram-basics",
    },
    {
      id: "m2-t3",
      title: "ROM Basics",
      summary: "",
      hash: "#topic-rom-basics",
    },
    {
      id: "m2-t4",
      title: "Storage Concepts",
      summary: "",
      hash: "#topic-storage-concepts",
    },
    {
      id: "m2-t5",
      title: "HDD",
      summary: "",
      hash: "#topic-hdd",
    },
    {
      id: "m2-t6",
      title: "SSD & NVMe",
      summary: "",
      hash: "#topic-ssd-nvme",
    },
    {
      id: "m2-t7",
      title: "Motherboard",
      summary: "",
      hash: "#topic-motherboard",
    },
    {
      id: "m2-t8",
      title: "Ports & Connectors",
      summary: "",
      hash: "#topic-ports-connectors",
    },
    {
      id: "m2-t9",
      title: "GPU Basics",
      summary: "",
      hash: "#topic-gpu-basics",
    },
    {
      id: "m2-t10",
      title: "ALU",
      summary: "",
      hash: "#topic-alu",
    },
    {
      id: "m2-t11",
      title: "CU",
      summary: "",
      hash: "#topic-cu",
    },
    {
      id: "m2-t12",
      title: "Firmware",
      summary: "",
      hash: "#topic-firmware",
    },
  ],
  3: [
    {
      id: "m3-t1",
      title: "Boot Process",
      summary: "",
      hash: "#topic-boot-process",
    },
    {
      id: "m3-t2",
      title: "Operating Systems",
      summary: "",
      hash: "#topic-operating-systems",
    },
    {
      id: "m3-t3",
      title: "File System",
      summary: "",
      hash: "#topic-file-system",
    },
    {
      id: "m3-t4",
      title: "File Extensions",
      summary: "",
      hash: "#topic-file-extensions",
    },
    {
      id: "m3-t5",
      title: "File Management",
      summary: "",
      hash: "#topic-file-management",
    },
    {
      id: "m3-t6",
      title: "System Specifications",
      summary: "",
      hash: "#topic-system-specifications",
    },
    {
      id: "m3-t7",
      title: "Mobile = A Computer",
      summary: "",
      hash: "#topic-mobile-computer",
    },
    {
      id: "m3-t8",
      title: "Sensors in Devices",
      summary: "",
      hash: "#topic-sensors-devices",
    },
    {
      id: "m3-t9",
      title: "What is a Program?",
      summary: "",
      hash: "#topic-what-is-program",
    },
    {
      id: "m3-t10",
      title: "What is Data?",
      summary: "",
      hash: "#topic-what-is-data",
    },
  ],
  4: [
    { id: "m4-t1", title: "Inside a Computer", summary: "", hash: "#topic-inside-computer" },
    { id: "m4-t2", title: "CPU Architecture", summary: "", hash: "#topic-cpu-architecture" },
    { id: "m4-t3", title: "GPU Architecture", summary: "", hash: "#topic-gpu-architecture" },
    { id: "m4-t4", title: "RAM Architecture", summary: "", hash: "#topic-ram-architecture" },
    { id: "m4-t5", title: "Storage Connections", summary: "", hash: "#topic-storage-connections" },
    { id: "m4-t6", title: "Cooling Systems", summary: "", hash: "#topic-cooling-systems" },
    { id: "m4-t7", title: "Power Supply Unit (PSU)", summary: "", hash: "#topic-psu" },
    { id: "m4-t8", title: "BIOS / UEFI", summary: "", hash: "#topic-bios-uefi" },
    { id: "m4-t9", title: "Expansion Cards", summary: "", hash: "#topic-expansion-cards" },
    { id: "m4-t10", title: "Peripheral Devices", summary: "", hash: "#topic-peripheral-devices" },
    { id: "m4-t11", title: "Display Technology", summary: "", hash: "#topic-display-technology" },
    { id: "m4-t12", title: "Printers & Scanners", summary: "", hash: "#topic-printers-scanners" },
  ],
  5: [
    { id: "m5-t1", title: "Storage Concepts", summary: "", hash: "#topic-storage-concepts" },
    { id: "m5-t2", title: "HDD Deep Dive", summary: "", hash: "#topic-hdd-deep-dive" },
    { id: "m5-t3", title: "SSD Deep Dive", summary: "", hash: "#topic-ssd-deep-dive" },
    { id: "m5-t4", title: "NVMe Technology", summary: "", hash: "#topic-nvme-technology" },
    { id: "m5-t5", title: "Storage File Systems", summary: "", hash: "#topic-storage-file-systems" },
    { id: "m5-t6", title: "Disk Partitioning", summary: "", hash: "#topic-disk-partitioning" },
    { id: "m5-t7", title: "Disk Management Tools", summary: "", hash: "#topic-disk-management-tools" },
    { id: "m5-t8", title: "RAID Concepts", summary: "", hash: "#topic-raid-concepts" },
    { id: "m5-t9", title: "Cloud Storage", summary: "", hash: "#topic-cloud-storage" },
  ],
  6: [
    { id: "m6-t1", title: "Types of Software", summary: "", hash: "#topic-types-of-software" },
    { id: "m6-t2", title: "OS Responsibilities", summary: "", hash: "#topic-os-responsibilities" },
    { id: "m6-t3", title: "Windows OS Overview", summary: "", hash: "#topic-windows-os-overview" },
    { id: "m6-t4", title: "Linux OS Overview", summary: "", hash: "#topic-linux-os-overview" },
    { id: "m6-t5", title: "macOS Overview", summary: "", hash: "#topic-macos-overview" },
    { id: "m6-t6", title: "Mobile OS", summary: "", hash: "#topic-mobile-os" },
    { id: "m6-t7", title: "Drivers", summary: "", hash: "#topic-drivers" },
    { id: "m6-t8", title: "Software Installation & Uninstallation", summary: "", hash: "#topic-software-installation-uninstallation" },
    { id: "m6-t9", title: "Updates & Patches", summary: "", hash: "#topic-updates-patches" },
  ],
  7: [
    { id: "m7-t1", title: "File Organization", summary: "", hash: "#topic-file-organization" },
    { id: "m7-t2", title: "File Operations", summary: "", hash: "#topic-file-operations" },
    { id: "m7-t3", title: "File Types", summary: "", hash: "#topic-file-types" },
    { id: "m7-t4", title: "Compression", summary: "", hash: "#topic-compression" },
    { id: "m7-t5", title: "Backup Basics", summary: "", hash: "#topic-backup-basics" },
    { id: "m7-t6", title: "File Security", summary: "", hash: "#topic-file-security" },
    { id: "m7-t7", title: "Searching Files", summary: "", hash: "#topic-searching-files" },
    { id: "m7-t8", title: "Recycle Bin & Restore", summary: "", hash: "#topic-recycle-bin-restore" },
  ],
  8: [
    { id: "m8-t1", title: "Pre-Installation Requirements", summary: "", hash: "#topic-pre-installation-requirements" },
    { id: "m8-t2", title: "BIOS/UEFI Configuration", summary: "", hash: "#topic-bios-uefi-configuration" },
    { id: "m8-t3", title: "Bootable USB Creation", summary: "", hash: "#topic-bootable-usb-creation" },
    { id: "m8-t4", title: "OS Installation Steps", summary: "", hash: "#topic-os-installation-steps" },
    { id: "m8-t5", title: "Partition Management", summary: "", hash: "#topic-partition-management" },
    { id: "m8-t6", title: "Initial System Configuration", summary: "", hash: "#topic-initial-system-configuration" },
    { id: "m8-t7", title: "Installing Drivers", summary: "", hash: "#topic-installing-drivers" },
    { id: "m8-t8", title: "Installing Essential Software", summary: "", hash: "#topic-installing-essential-software" },
    { id: "m8-t9", title: "User Accounts & Permissions", summary: "", hash: "#topic-user-accounts-permissions" },
    { id: "m8-t10", title: "Display Settings Configuration", summary: "", hash: "#topic-display-settings-configuration" },
    { id: "m8-t11", title: "Sound Settings", summary: "", hash: "#topic-sound-settings" },
    { id: "m8-t12", title: "Network Setup", summary: "", hash: "#topic-network-setup" },
    { id: "m8-t13", title: "Bluetooth Setup", summary: "", hash: "#topic-bluetooth-setup" },
    { id: "m8-t14", title: "Printer & Scanner Setup", summary: "", hash: "#topic-printer-scanner-setup" },
    { id: "m8-t15", title: "Setting Up Security", summary: "", hash: "#topic-setting-up-security" },
    { id: "m8-t16", title: "Backup Setup", summary: "", hash: "#topic-backup-setup" },
    { id: "m8-t17", title: "System Restore & Recovery", summary: "", hash: "#topic-system-restore-recovery" },
  ],
  9: [
    { id: "m9-t1", title: "What is a Network?", summary: "", hash: "#topic-what-is-network" },
    { id: "m9-t2", title: "Network Devices", summary: "", hash: "#topic-network-devices" },
    { id: "m9-t3", title: "IP Addressing", summary: "", hash: "#topic-ip-addressing" },
    { id: "m9-t4", title: "MAC Address", summary: "", hash: "#topic-mac-address" },
    { id: "m9-t5", title: "WiFi Basics", summary: "", hash: "#topic-wifi-basics" },
    { id: "m9-t6", title: "Network Cables", summary: "", hash: "#topic-network-cables" },
    { id: "m9-t7", title: "DNS Basics", summary: "", hash: "#topic-dns-basics" },
    { id: "m9-t8", title: "Ping & Speed Test", summary: "", hash: "#topic-ping-speed-test" },
    { id: "m9-t9", title: "Hotspot & Tethering", summary: "", hash: "#topic-hotspot-tethering" },
    { id: "m9-t10", title: "Mobile Data Networks", summary: "", hash: "#topic-mobile-data-networks" },
    { id: "m9-t11", title: "Common Network Problems", summary: "", hash: "#topic-common-network-problems" },
    { id: "m9-t12", title: "How the Internet Works (Beginner-friendly)", summary: "", hash: "#topic-how-internet-works" },
  ],
  10: [
    { id: "m10-t1", title: "What is Cybersecurity?", summary: "", hash: "#topic-what-is-cybersecurity" },
    { id: "m10-t2", title: "Password Security", summary: "", hash: "#topic-password-security" },
    { id: "m10-t3", title: "OTP & MFA", summary: "", hash: "#topic-otp-mfa" },
    { id: "m10-t4", title: "Malware Types", summary: "", hash: "#topic-malware-types" },
    { id: "m10-t5", title: "Phishing", summary: "", hash: "#topic-phishing" },
    { id: "m10-t6", title: "Safe Browsing", summary: "", hash: "#topic-safe-browsing" },
    { id: "m10-t7", title: "Firewalls", summary: "", hash: "#topic-firewalls" },
    { id: "m10-t8", title: "Antivirus & Anti-malware Tools", summary: "", hash: "#topic-antivirus-anti-malware-tools" },
    { id: "m10-t9", title: "Secure WiFi Usage", summary: "", hash: "#topic-secure-wifi-usage" },
    { id: "m10-t10", title: "Backup & Recovery", summary: "", hash: "#topic-backup-recovery" },
    { id: "m10-t11", title: "Recognizing Scams", summary: "", hash: "#topic-recognizing-scams" },
    { id: "m10-t12", title: "Cyber Hygiene", summary: "", hash: "#topic-cyber-hygiene" },
  ],
  11: [
    { id: "m11-t1", title: "Digital Citizenship Basics", summary: "", hash: "#topic-digital-citizenship-basics" },
    { id: "m11-t2", title: "Online Etiquette", summary: "", hash: "#topic-online-etiquette" },
    { id: "m11-t3", title: "Data Privacy", summary: "", hash: "#topic-data-privacy" },
    { id: "m11-t4", title: "Safe Social Media Usage", summary: "", hash: "#topic-safe-social-media-usage" },
    { id: "m11-t5", title: "UPI & Online Payments Safety", summary: "", hash: "#topic-upi-online-payments-safety" },
    { id: "m11-t6", title: "Digital Footprint", summary: "", hash: "#topic-digital-footprint" },
    { id: "m11-t7", title: "Cyberbullying Awareness", summary: "", hash: "#topic-cyberbullying-awareness" },
    { id: "m11-t8", title: "Responsible Device Usage", summary: "", hash: "#topic-responsible-device-usage" },
    { id: "m11-t9", title: "Fake News Detection", summary: "", hash: "#topic-fake-news-detection" },
    { id: "m11-t10", title: "Ethical Behavior Online", summary: "", hash: "#topic-ethical-behavior-online" },
  ],
  12: [
    { id: "m12-t1", title: "What is Cloud Computing?", summary: "", hash: "#topic-what-is-cloud-computing" },
    { id: "m12-t2", title: "Cloud in Daily Life", summary: "", hash: "#topic-cloud-daily-life" },
    { id: "m12-t3", title: "Cloud Service Models", summary: "", hash: "#topic-cloud-service-models" },
    { id: "m12-t4", title: "Cloud Deployment Models", summary: "", hash: "#topic-cloud-deployment-models" },
    { id: "m12-t5", title: "Cloud Storage", summary: "", hash: "#topic-cloud-storage" },
    { id: "m12-t6", title: "Virtual Machines (Beginner View)", summary: "", hash: "#topic-virtual-machines-beginner" },
    { id: "m12-t7", title: "Cloud Providers", summary: "", hash: "#topic-cloud-providers" },
    { id: "m12-t8", title: "Backups in Cloud", summary: "", hash: "#topic-backups-cloud" },
    { id: "m12-t9", title: "Security in Cloud", summary: "", hash: "#topic-security-cloud" },
    { id: "m12-t10", title: "Advantages vs Limitations", summary: "", hash: "#topic-advantages-limitations" },
  ],
  13: [
    { id: "m13-t1", title: "Introduction to Digital Literacy", summary: "", hash: "#topic-intro-digital-literacy" },
    { id: "m13-t2", title: "Using Web Browsers", summary: "", hash: "#topic-using-web-browsers" },
    { id: "m13-t3", title: "Search Engine Skills", summary: "", hash: "#topic-search-engine-skills" },
    { id: "m13-t4", title: "Email Basics", summary: "", hash: "#topic-email-basics" },
    { id: "m13-t5", title: "Calendar Tools", summary: "", hash: "#topic-calendar-tools" },
    { id: "m13-t6", title: "Google Drive / OneDrive", summary: "", hash: "#topic-google-drive-onedrive" },
    { id: "m13-t7", title: "Online Forms", summary: "", hash: "#topic-online-forms" },
    { id: "m13-t8", title: "Video Conferencing Tools", summary: "", hash: "#topic-video-conferencing-tools" },
    { id: "m13-t9", title: "Digital Payments", summary: "", hash: "#topic-digital-payments" },
    { id: "m13-t10", title: "Basic Online Safety", summary: "", hash: "#topic-basic-online-safety" },
  ],
  14: [
    { id: "m14-t1", title: "Slow Computer Issues", summary: "", hash: "#topic-slow-computer-issues" },
    { id: "m14-t2", title: "Internet Troubleshooting", summary: "", hash: "#topic-internet-troubleshooting" },
    { id: "m14-t3", title: "Startup Problems", summary: "", hash: "#topic-startup-problems" },
    { id: "m14-t4", title: "Display Issues", summary: "", hash: "#topic-display-issues" },
    { id: "m14-t5", title: "Audio Issues", summary: "", hash: "#topic-audio-issues" },
    { id: "m14-t6", title: "Printer Troubleshooting", summary: "", hash: "#topic-printer-troubleshooting" },
    { id: "m14-t7", title: "Malware Removal", summary: "", hash: "#topic-malware-removal" },
    { id: "m14-t8", title: "System Cleanup", summary: "", hash: "#topic-system-cleanup" },
    { id: "m14-t9", title: "Backup & Restore", summary: "", hash: "#topic-backup-restore" },
    { id: "m14-t10", title: "Mobile Troubleshooting", summary: "", hash: "#topic-mobile-troubleshooting" },
  ],
  15: [
    { id: "m15-t1", title: "Mobile OS Basics", summary: "", hash: "#topic-mobile-os-basics" },
    { id: "m15-t2", title: "Mobile Storage", summary: "", hash: "#topic-mobile-storage" },
    { id: "m15-t3", title: "Mobile Security", summary: "", hash: "#topic-mobile-security" },
    { id: "m15-t4", title: "Backup on Mobile", summary: "", hash: "#topic-backup-mobile" },
    { id: "m15-t5", title: "Mobile Updates", summary: "", hash: "#topic-mobile-updates" },
    { id: "m15-t6", title: "Mobile Settings", summary: "", hash: "#topic-mobile-settings" },
    { id: "m15-t7", title: "PC Power Management", summary: "", hash: "#topic-pc-power-management" },
    { id: "m15-t8", title: "Device Manager (Windows)", summary: "", hash: "#topic-device-manager-windows" },
    { id: "m15-t9", title: "Task Manager", summary: "", hash: "#topic-task-manager" },
    { id: "m15-t10", title: "System Health Tools", summary: "", hash: "#topic-system-health-tools" },
  ],
  16: [
    { id: "m16-t1", title: "MS Word Basics", summary: "", hash: "#topic-ms-word-basics" },
    { id: "m16-t2", title: "Word Essential Skills", summary: "", hash: "#topic-word-essential-skills" },
    { id: "m16-t3", title: "Word Professional Use", summary: "", hash: "#topic-word-professional-use" },
    { id: "m16-t4", title: "MS Excel Basics", summary: "", hash: "#topic-ms-excel-basics" },
    { id: "m16-t5", title: "Excel Formulas", summary: "", hash: "#topic-excel-formulas" },
    { id: "m16-t6", title: "Excel Data Tools", summary: "", hash: "#topic-excel-data-tools" },
    { id: "m16-t7", title: "Excel for Work", summary: "", hash: "#topic-excel-for-work" },
    { id: "m16-t8", title: "PowerPoint Basics", summary: "", hash: "#topic-powerpoint-basics" },
    { id: "m16-t9", title: "PowerPoint Skills", summary: "", hash: "#topic-powerpoint-skills" },
    { id: "m16-t10", title: "PowerPoint for Work", summary: "", hash: "#topic-powerpoint-for-work" },
  ],
  17: [
    { id: "m17-t1", title: "What is Data?", summary: "", hash: "#topic-what-is-data" },
    { id: "m17-t2", title: "Data Formats", summary: "", hash: "#topic-data-formats" },
    { id: "m17-t3", title: "Basic Data Tools", summary: "", hash: "#topic-basic-data-tools" },
    { id: "m17-t4", title: "Introduction to AI", summary: "", hash: "#topic-intro-ai" },
    { id: "m17-t5", title: "Introduction to ML", summary: "", hash: "#topic-intro-ml" },
    { id: "m17-t6", title: "Datasets", summary: "", hash: "#topic-datasets" },
    { id: "m17-t7", title: "Training vs Testing", summary: "", hash: "#topic-training-testing" },
    { id: "m17-t8", title: "Neural Network Basics", summary: "", hash: "#topic-neural-network-basics" },
    { id: "m17-t9", title: "Responsible AI Basics", summary: "", hash: "#topic-responsible-ai-basics" },
    { id: "m17-t10", title: "AI Tools Introduction", summary: "", hash: "#topic-ai-tools-intro" },
  ],
  18: [
    { id: "m18-t1", title: "What is Programming?", summary: "", hash: "#topic-what-is-programming" },
    { id: "m18-t2", title: "Programming Languages", summary: "", hash: "#topic-programming-languages" },
    { id: "m18-t3", title: "Python Basics (Beginner Level Only)", summary: "", hash: "#topic-python-basics" },
    { id: "m18-t4", title: "Logical Thinking", summary: "", hash: "#topic-logical-thinking" },
    { id: "m18-t5", title: "Conditions", summary: "", hash: "#topic-conditions" },
    { id: "m18-t6", title: "Loops", summary: "", hash: "#topic-loops" },
    { id: "m18-t7", title: "Functions (Basic Idea)", summary: "", hash: "#topic-functions-basic" },
    { id: "m18-t8", title: "Errors & Debugging", summary: "", hash: "#topic-errors-debugging" },
    { id: "m18-t9", title: "Writing First Program", summary: "", hash: "#topic-writing-first-program" },
    { id: "m18-t10", title: "Programming Careers (Beginner View)", summary: "", hash: "#topic-programming-careers" },
  ],
  19: [
    { id: "m19-t1", title: "What is a Database?", summary: "", hash: "#topic-what-is-database" },
    { id: "m19-t2", title: "Database Types", summary: "", hash: "#topic-database-types" },
    { id: "m19-t3", title: "Tables, Rows, Columns", summary: "", hash: "#topic-tables-rows-columns" },
    { id: "m19-t4", title: "SQL Basics", summary: "", hash: "#topic-sql-basics" },
    { id: "m19-t5", title: "CSV vs Excel vs Database", summary: "", hash: "#topic-csv-excel-database" },
    { id: "m19-t6", title: "Database Tools", summary: "", hash: "#topic-database-tools" },
    { id: "m19-t7", title: "Queries & Filtering", summary: "", hash: "#topic-queries-filtering" },
    { id: "m19-t8", title: "Data Storage Concepts", summary: "", hash: "#topic-data-storage-concepts" },
    { id: "m19-t9", title: "Database Errors", summary: "", hash: "#topic-database-errors" },
    { id: "m19-t10", title: "Real Use Cases", summary: "", hash: "#topic-real-use-cases" },
  ],
  20: [
    { id: "m20-t1", title: "How the Web Works", summary: "", hash: "#topic-how-web-works" },
    { id: "m20-t2", title: "What is a Website?", summary: "", hash: "#topic-what-is-website" },
    { id: "m20-t3", title: "What is a Domain?", summary: "", hash: "#topic-what-is-domain" },
    { id: "m20-t4", title: "What is Hosting?", summary: "", hash: "#topic-what-is-hosting" },
    { id: "m20-t5", title: "Frontend vs Backend", summary: "", hash: "#topic-frontend-backend" },
    { id: "m20-t6", title: "HTML Basics", summary: "", hash: "#topic-html-basics" },
    { id: "m20-t7", title: "CSS Basics", summary: "", hash: "#topic-css-basics" },
    { id: "m20-t8", title: "JavaScript Basics (Beginner Concept Only)", summary: "", hash: "#topic-javascript-basics" },
    { id: "m20-t9", title: "Web Performance Basics", summary: "", hash: "#topic-web-performance-basics" },
    { id: "m20-t10", title: "Browser Developer Tools", summary: "", hash: "#topic-browser-developer-tools" },
  ],
  21: [
    { id: "m21-t1", title: "What is Virtualization?", summary: "", hash: "#topic-what-is-virtualization" },
    { id: "m21-t2", title: "VMs vs Physical Machines", summary: "", hash: "#topic-vms-physical-machines" },
    { id: "m21-t3", title: "Hypervisors", summary: "", hash: "#topic-hypervisors" },
    { id: "m21-t4", title: "VirtualBox Basics", summary: "", hash: "#topic-virtualbox-basics" },
    { id: "m21-t5", title: "What are Containers?", summary: "", hash: "#topic-what-are-containers" },
    { id: "m21-t6", title: "Docker Basics (Beginner Level)", summary: "", hash: "#topic-docker-basics" },
    { id: "m21-t7", title: "Docker Commands (Beginner Level)", summary: "", hash: "#topic-docker-commands" },
    { id: "m21-t8", title: "Container vs VM", summary: "", hash: "#topic-container-vm" },
    { id: "m21-t9", title: "Real Use Cases", summary: "", hash: "#topic-real-use-cases-virtualization" },
    { id: "m21-t10", title: "Cloud + Container Basics", summary: "", hash: "#topic-cloud-container-basics" },
  ],
  22: [
    { id: "m22-t1", title: "What is Raspberry Pi?", summary: "", hash: "#topic-what-is-raspberry-pi" },
    { id: "m22-t2", title: "Raspberry Pi Hardware", summary: "", hash: "#topic-raspberry-pi-hardware" },
    { id: "m22-t3", title: "Installing OS on Raspberry Pi", summary: "", hash: "#topic-installing-os-raspberry-pi" },
    { id: "m22-t4", title: "Basic Pi Usage", summary: "", hash: "#topic-basic-pi-usage" },
    { id: "m22-t5", title: "Basic Terminal Commands", summary: "", hash: "#topic-basic-terminal-commands" },
    { id: "m22-t6", title: "GPIO Basics", summary: "", hash: "#topic-gpio-basics" },
    { id: "m22-t7", title: "Sensors & Modules", summary: "", hash: "#topic-sensors-modules" },
    { id: "m22-t8", title: "Automating Tasks", summary: "", hash: "#topic-automating-tasks" },
    { id: "m22-t9", title: "Pi as a Server", summary: "", hash: "#topic-pi-as-server" },
    { id: "m22-t10", title: "Real Projects", summary: "", hash: "#topic-real-projects" },
  ],
  23: [
    { id: "m23-t1", title: "What is Blockchain?", summary: "", hash: "#topic-what-is-blockchain" },
    { id: "m23-t2", title: "How Blockchain Works (Beginner View)", summary: "", hash: "#topic-how-blockchain-works" },
    { id: "m23-t3", title: "Key Blockchain Characteristics", summary: "", hash: "#topic-blockchain-characteristics" },
    { id: "m23-t4", title: "Cryptography Basics", summary: "", hash: "#topic-cryptography-basics" },
    { id: "m23-t5", title: "What is Cryptocurrency?", summary: "", hash: "#topic-what-is-cryptocurrency" },
    { id: "m23-t6", title: "How Transactions Work", summary: "", hash: "#topic-how-transactions-work" },
    { id: "m23-t7", title: "Crypto Wallets", summary: "", hash: "#topic-crypto-wallets" },
    { id: "m23-t8", title: "NFTs (Beginner-Friendly)", summary: "", hash: "#topic-nfts-beginner" },
    { id: "m23-t9", title: "Blockchain Use Cases", summary: "", hash: "#topic-blockchain-use-cases" },
    { id: "m23-t10", title: "Risks & Limitations", summary: "", hash: "#topic-risks-limitations" },
  ],
  24: [
    { id: "m24-t1", title: "What is Quantum Computing?", summary: "", hash: "#topic-what-is-quantum-computing" },
    { id: "m24-t2", title: "Qubits", summary: "", hash: "#topic-qubits" },
    { id: "m24-t3", title: "Quantum Gates", summary: "", hash: "#topic-quantum-gates" },
    { id: "m24-t4", title: "Entanglement", summary: "", hash: "#topic-entanglement" },
    { id: "m24-t5", title: "Quantum Speed Advantage", summary: "", hash: "#topic-quantum-speed-advantage" },
    { id: "m24-t6", title: "Quantum vs Classical Computer", summary: "", hash: "#topic-quantum-vs-classical" },
    { id: "m24-t7", title: "Quantum Applications", summary: "", hash: "#topic-quantum-applications" },
    { id: "m24-t8", title: "Quantum Limitations", summary: "", hash: "#topic-quantum-limitations" },
    { id: "m24-t9", title: "Quantum in India", summary: "", hash: "#topic-quantum-in-india" },
    { id: "m24-t10", title: "Simple Quantum Demo Tools", summary: "", hash: "#topic-quantum-demo-tools" },
  ],
  25: [
    { id: "m25-t1", title: "Introduction to AI Ethics", summary: "", hash: "#topic-intro-ai-ethics" },
    { id: "m25-t2", title: "AI Bias", summary: "", hash: "#topic-ai-bias" },
    { id: "m25-t3", title: "Fairness", summary: "", hash: "#topic-fairness" },
    { id: "m25-t4", title: "Privacy & AI", summary: "", hash: "#topic-privacy-ai" },
    { id: "m25-t5", title: "Transparency", summary: "", hash: "#topic-transparency" },
    { id: "m25-t6", title: "Accountability", summary: "", hash: "#topic-accountability" },
    { id: "m25-t7", title: "Safe Use of AI Tools", summary: "", hash: "#topic-safe-use-ai-tools" },
    { id: "m25-t8", title: "Ethical vs Harmful Use Cases", summary: "", hash: "#topic-ethical-harmful-use-cases" },
    { id: "m25-t9", title: "AI in India: Governance & Policy", summary: "", hash: "#topic-ai-india-governance" },
    { id: "m25-t10", title: "Hands-On Ethics Activities", summary: "", hash: "#topic-hands-on-ethics-activities" },
  ],
};

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarContentRef = useRef<HTMLDivElement>(null);

  // Prevent scroll chaining - stop scroll propagation when sidebar reaches boundaries
  useEffect(() => {
    const sidebarContent = sidebarContentRef.current;
    if (!sidebarContent) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = sidebarContent;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // If at top and scrolling up, or at bottom and scrolling down, prevent default
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    sidebarContent.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      sidebarContent.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Auto-expand modules based on current path
  const [isModule1Open, setIsModule1Open] = useState(location.pathname.startsWith("/module/1"));
  const [isModule2Open, setIsModule2Open] = useState(location.pathname.startsWith("/module/2"));
  const [isModule3Open, setIsModule3Open] = useState(location.pathname.startsWith("/module/3"));
  const [isModule4Open, setIsModule4Open] = useState(location.pathname.startsWith("/module/4"));
  const [isModule5Open, setIsModule5Open] = useState(location.pathname.startsWith("/module/5"));
  const [isModule6Open, setIsModule6Open] = useState(location.pathname.startsWith("/module/6"));
  const [isModule7Open, setIsModule7Open] = useState(location.pathname.startsWith("/module/7"));
  const [isModule8Open, setIsModule8Open] = useState(location.pathname.startsWith("/module/8"));
  const [isModule9Open, setIsModule9Open] = useState(location.pathname.startsWith("/module/9"));
  const [isModule10Open, setIsModule10Open] = useState(location.pathname.startsWith("/module/10"));
  const [isModule11Open, setIsModule11Open] = useState(location.pathname.startsWith("/module/11"));
  const [isModule12Open, setIsModule12Open] = useState(location.pathname.startsWith("/module/12"));
  const [isModule13Open, setIsModule13Open] = useState(location.pathname.startsWith("/module/13"));
  const [isModule14Open, setIsModule14Open] = useState(location.pathname.startsWith("/module/14"));
  const [isModule15Open, setIsModule15Open] = useState(location.pathname.startsWith("/module/15"));
  const [isModule16Open, setIsModule16Open] = useState(location.pathname.startsWith("/module/16"));
  const [isModule17Open, setIsModule17Open] = useState(location.pathname.startsWith("/module/17"));
  const [isModule18Open, setIsModule18Open] = useState(location.pathname.startsWith("/module/18"));
  const [isModule19Open, setIsModule19Open] = useState(location.pathname.startsWith("/module/19"));
  const [isModule20Open, setIsModule20Open] = useState(location.pathname.startsWith("/module/20"));
  const [isModule21Open, setIsModule21Open] = useState(location.pathname.startsWith("/module/21"));
  const [isModule22Open, setIsModule22Open] = useState(location.pathname.startsWith("/module/22"));
  const [isModule23Open, setIsModule23Open] = useState(location.pathname.startsWith("/module/23"));
  const [isModule24Open, setIsModule24Open] = useState(location.pathname.startsWith("/module/24"));
  const [isModule25Open, setIsModule25Open] = useState(location.pathname.startsWith("/module/25"));

  // Update module expansion when location changes
  useEffect(() => {
    setIsModule1Open(location.pathname.startsWith("/module/1"));
    setIsModule2Open(location.pathname.startsWith("/module/2"));
    setIsModule3Open(location.pathname.startsWith("/module/3"));
    setIsModule4Open(location.pathname.startsWith("/module/4"));
    setIsModule5Open(location.pathname.startsWith("/module/5"));
    setIsModule6Open(location.pathname.startsWith("/module/6"));
    setIsModule7Open(location.pathname.startsWith("/module/7"));
    setIsModule8Open(location.pathname.startsWith("/module/8"));
    setIsModule9Open(location.pathname.startsWith("/module/9"));
    setIsModule10Open(location.pathname.startsWith("/module/10"));
    setIsModule11Open(location.pathname.startsWith("/module/11"));
    setIsModule12Open(location.pathname.startsWith("/module/12"));
    setIsModule13Open(location.pathname.startsWith("/module/13"));
    setIsModule14Open(location.pathname.startsWith("/module/14"));
    setIsModule15Open(location.pathname.startsWith("/module/15"));
    setIsModule16Open(location.pathname.startsWith("/module/16"));
    setIsModule17Open(location.pathname.startsWith("/module/17"));
    setIsModule18Open(location.pathname.startsWith("/module/18"));
    setIsModule19Open(location.pathname.startsWith("/module/19"));
    setIsModule20Open(location.pathname.startsWith("/module/20"));
    setIsModule21Open(location.pathname.startsWith("/module/21"));
    setIsModule22Open(location.pathname.startsWith("/module/22"));
    setIsModule23Open(location.pathname.startsWith("/module/23"));
    setIsModule24Open(location.pathname.startsWith("/module/24"));
    setIsModule25Open(location.pathname.startsWith("/module/25"));
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    // Extract module ID from path (e.g., "/module/2" -> "2")
    const moduleIdFromPath = path.split("/").pop();

    // Check if we're on the module page
    if (location.pathname.startsWith(path)) {
      return true;
    }

    // Check if we're on a lesson page for this module
    // Lesson paths are like "/lesson/2/1" where 2 is the module ID
    const lessonPathMatch = location.pathname.match(/^\/lesson\/(\d+)\//);
    if (lessonPathMatch) {
      const currentModuleId = lessonPathMatch[1];
      return currentModuleId === moduleIdFromPath;
    }

    return false;
  };

  return (
    <Sidebar className="hide-scrollbar">
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Computer className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground leading-tight">Compu-Foundation 360°</h2>
            <p className="text-xs text-muted-foreground">Learn & Master</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent ref={sidebarContentRef} className="px-2" style={{ overscrollBehavior: 'contain' }}>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/dashboard")}
                  isActive={isActive("/dashboard")}
                  className={cn(
                    "h-10 px-3 gap-3 transition-all duration-200",
                    isActive("/dashboard") && "bg-primary/20 dark:bg-primary/30 shadow-sm"
                  )}
                >
                  <Home className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive("/dashboard") && "text-primary"
                  )} />
                  <span className={cn(
                    "font-medium",
                    isActive("/dashboard") && "text-primary font-semibold"
                  )}>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
            <span>Learning Modules</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {modules.map((module) => {
                const active = isActive(module.path) || location.pathname.startsWith(`/module/${module.id}/part`) || location.pathname.startsWith(`/module/${module.id}/topic`);
                const moduleNumber = module.id.toString().padStart(2, "0");
                const numberClasses = cn(
                  "text-[11px] font-semibold tracking-wider uppercase text-muted-foreground",
                  active && "text-primary"
                );
                const titleClasses = cn(
                  "text-sm leading-relaxed flex-1 text-left break-words min-w-0 whitespace-normal overflow-visible",
                  active && "text-primary font-semibold"
                );
                const topics = moduleTopics[module.id] ?? [];
                const hasTopics = topics.length > 0;

                if (hasTopics) {
                  const moduleStates = {
                    1: { isOpen: isModule1Open, setIsOpen: setIsModule1Open },
                    2: { isOpen: isModule2Open, setIsOpen: setIsModule2Open },
                    3: { isOpen: isModule3Open, setIsOpen: setIsModule3Open },
                    4: { isOpen: isModule4Open, setIsOpen: setIsModule4Open },
                    5: { isOpen: isModule5Open, setIsOpen: setIsModule5Open },
                    6: { isOpen: isModule6Open, setIsOpen: setIsModule6Open },
                    7: { isOpen: isModule7Open, setIsOpen: setIsModule7Open },
                    8: { isOpen: isModule8Open, setIsOpen: setIsModule8Open },
                    9: { isOpen: isModule9Open, setIsOpen: setIsModule9Open },
                    10: { isOpen: isModule10Open, setIsOpen: setIsModule10Open },
                    11: { isOpen: isModule11Open, setIsOpen: setIsModule11Open },
                    12: { isOpen: isModule12Open, setIsOpen: setIsModule12Open },
                    13: { isOpen: isModule13Open, setIsOpen: setIsModule13Open },
                    14: { isOpen: isModule14Open, setIsOpen: setIsModule14Open },
                    15: { isOpen: isModule15Open, setIsOpen: setIsModule15Open },
                    16: { isOpen: isModule16Open, setIsOpen: setIsModule16Open },
                    17: { isOpen: isModule17Open, setIsOpen: setIsModule17Open },
                    18: { isOpen: isModule18Open, setIsOpen: setIsModule18Open },
                    19: { isOpen: isModule19Open, setIsOpen: setIsModule19Open },
                    20: { isOpen: isModule20Open, setIsOpen: setIsModule20Open },
                    21: { isOpen: isModule21Open, setIsOpen: setIsModule21Open },
                    22: { isOpen: isModule22Open, setIsOpen: setIsModule22Open },
                    23: { isOpen: isModule23Open, setIsOpen: setIsModule23Open },
                    24: { isOpen: isModule24Open, setIsOpen: setIsModule24Open },
                    25: { isOpen: isModule25Open, setIsOpen: setIsModule25Open },
                  };
                  const moduleState = moduleStates[module.id as keyof typeof moduleStates];
                  const isModuleOpen = moduleState.isOpen;
                  const setIsModuleOpen = moduleState.setIsOpen;

                  return (
                    <Collapsible
                      key={module.id}
                      open={isModuleOpen}
                      onOpenChange={setIsModuleOpen}
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            isActive={active}
                            className={cn(
                              "h-auto min-h-11 px-3 gap-2 transition-all duration-200 group w-full items-start py-2.5",
                              "hover:bg-sidebar-accent/80 hover:shadow-sm",
                              active && "bg-primary/20 dark:bg-primary/30 shadow-md font-semibold",
                              "[&>span:nth-child(2)]:!overflow-visible [&>span:nth-child(2)]:!whitespace-normal [&>span:nth-child(2)]:!text-clip"
                            )}
                          >
                            <span className={cn(numberClasses, "shrink-0 mt-0.5")}>{moduleNumber}.</span>
                            <span className={titleClasses}>{module.title}</span>
                            <span className="shrink-0 mt-0.5">
                              {isModuleOpen ? (
                                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                              ) : (
                                <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                              )}
                            </span>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="relative pl-0 pt-1 pb-2 overflow-hidden">
                          <SidebarMenu className="gap-0.5">
                            {topics.map((topic, index) => {
                              const topicNumber = index + 1;
                              const topicPath = `${module.path}/topic/${topicNumber}`;
                              const isTopicActive = location.pathname === topicPath;
                              const isLast = index === topics.length - 1;

                              return (
                                <SidebarMenuItem key={topic.id} className="relative">
                                  {/* Tree Connectors */}
                                  {!isLast ? (
                                    <>
                                      <div className="absolute left-[23px] top-0 bottom-0 w-[1.5px] bg-muted-foreground/30" />
                                      <div className="absolute left-[23px] top-[18px] w-3 h-[1.5px] bg-muted-foreground/30" />
                                    </>
                                  ) : (
                                    <>
                                      <div className="absolute left-[23px] top-0 h-[6px] w-[1.5px] bg-muted-foreground/30" />
                                      <div className="absolute left-[23px] top-[6px] w-3 h-3 border-l-[1.5px] border-b-[1.5px] border-muted-foreground/30 rounded-bl-xl" />
                                    </>
                                  )}

                                  <SidebarMenuButton
                                    onClick={() => navigate(topicPath)}
                                    isActive={isTopicActive}
                                    className={cn(
                                      "w-[calc(100%-40px)] ml-9 h-auto min-h-9 py-1.5 px-3 gap-2 rounded-md text-left transition-all duration-200 border-l-[3px] border-transparent",
                                      "hover:bg-sidebar-accent/50 hover:text-foreground",
                                      isTopicActive
                                        ? "bg-primary/10 text-primary font-medium border-primary"
                                        : "text-muted-foreground font-normal"
                                    )}
                                  >
                                    <div className="flex flex-col">
                                      <span className="text-[13px] leading-snug">{topic.title}</span>
                                    </div>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              );
                            })}
                          </SidebarMenu>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                // For modules without topics (shouldn't happen with only 1 and 2, but keeping for safety)
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => navigate(module.path)}
                      isActive={active}
                      className={cn(
                        "h-11 px-3 gap-3 transition-all duration-200 group",
                        "hover:bg-sidebar-accent/80 hover:shadow-sm",
                        active && "bg-primary/20 dark:bg-primary/30 shadow-md font-semibold"
                      )}
                    >
                      <span className={numberClasses}>{moduleNumber}.</span>
                      <span className={titleClasses}>{module.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border px-2">
        <SidebarMenu>

        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}


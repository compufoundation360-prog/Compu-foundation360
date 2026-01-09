
import os

file_path = r'c:\Users\HP\OneDrive\Desktop\all-compu-foundation\loveable-compu-f\compu-foundation-learn-main\src\pages\ModuleDetail.tsx'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

# Module 2
lines[1310] = '          { name: "Single Core", icon: "🔵", description: "One processing unit, handles one task at a time" },\n'
lines[1311] = '          { name: "Multi-Core", icon: "🔵🔵", description: "Multiple cores work together, handling many tasks simultaneously" },\n'
lines[1312] = '          { name: "Threads", icon: "⚡", description: "Each core can process multiple threads, like having multiple workers in one factory" },\n'
lines[1313] = '          { name: "Performance", icon: "🚀", description: "More cores and threads = faster multitasking and better performance" }\n'

lines[1347] = '          { name: "Speed", icon: "⚡", description: "Faster RAM = faster data access for CPU" },\n'
lines[1348] = '          { name: "Capacity", icon: "📦", description: "More RAM = more apps running simultaneously" },\n'
lines[1349] = '          { name: "Multitasking", icon: "🔄", description: "More RAM = smoother multitasking experience" },\n'
lines[1350] = '          { name: "Swapping", icon: "💾", description: "Less RAM = slower (uses hard drive swap)" }\n'

lines[1384] = '          { name: "Boot Instructions", icon: "🚀", description: "First code computer reads when starting" },\n'
lines[1385] = '          { name: "Permanent Storage", icon: "💽", description: "Data never changes, always available" },\n'
lines[1386] = '          { name: "Non-Volatile", icon: "🔒", description: "Keeps data when power is turned off" },\n'
lines[1387] = '          { name: "System Setup", icon: "⚙️", description: "BIOS/UEFI settings and configuration" }\n'

lines[1416] = '          { name: "Volatile", icon: "⚡", description: "Temporary, fast, clears on power off", examples: "RAM, Cache" },\n'
lines[1417] = '          { name: "Non-Volatile", icon: "💾", description: "Permanent, persistent, keeps data", examples: "HDD, SSD" },\n'
lines[1418] = '          { name: "Hybrid", icon: "🔄", description: "Combines both for optimal performance", examples: "Hybrid drives" }\n'

lines[1517] = '          { name: "Fast", icon: "⚡", description: "Boot in 10-15 sec, 500+ MB/s read speed" },\n'
lines[1518] = '          { name: "Quiet", icon: "🔇", description: "No moving parts = silent operation" },\n'
lines[1519] = '          { name: "Durable", icon: "💪", description: "Shock resistant, long lifespan" },\n'
lines[1520] = '          { name: "Value", icon: "💰", description: "Price per GB dropping, great value" }\n'

lines[1584] = '          { name: "CPU Socket", icon: "🔌", description: "Where CPU connects" },\n'
lines[1585] = '          { name: "RAM Slots", icon: "💾", description: "Memory module slots" },\n'
lines[1586] = '          { name: "Power Connectors", icon: "⚡", description: "24-pin & 8-pin power" },\n'
lines[1587] = '          { name: "Ports", icon: "🔌", description: "USB, HDMI, Ethernet" }\n'

lines[1643] = '          { name: "USB", icon: "🔌", description: "Universal connection" },\n'
lines[1644] = '          { name: "HDMI", icon: "🖥️", description: "Video output" },\n'
lines[1645] = '          { name: "Ethernet", icon: "🌐", description: "Network connection" },\n'
lines[1646] = '          { name: "Audio", icon: "🎧", description: "Sound input/output" }\n'

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Fixed Module 2 specific lines.")

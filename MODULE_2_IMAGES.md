# Module 2 - Internal Components & Architecture - Complete Image Files Guide

## Location
All images should be placed in: `src/assets/module-media/`

## Image Dimensions & Aspect Ratios

**Important:** All images use `object-cover` which means they fill the container and may crop edges. Use the recommended aspect ratios below to ensure proper display.

### Hero Images:
- **Aspect Ratio:** 16:9 (landscape) or 4:3
- **Recommended Size:** 1920x1080px (16:9) or 1600x1200px (4:3)
- **Container:** Responsive width, displays in sidebar on desktop
- **Note:** Hero images should be high quality and visually appealing as they're the first thing users see

### Section Images - Standard (min-h-[300px] or min-h-[320px]):
- **Aspect Ratio:** 4:3 (recommended) or 16:9
- **Recommended Size:** 1200x900px (4:3) or 1600x900px (16:9)
- **Container:** Side-by-side layout (text left, image right) or centered
- **Used for:** Overview images, comparison diagrams, flow diagrams, component images

### Section Images - Banner Format (min-h-[400px]):
- **Aspect Ratio:** 16:9 (wide landscape)
- **Recommended Size:** 1920x1080px (16:9)
- **Container:** Full-width banner with text overlay
- **Used for:** Specialized sections, use cases, examples

### Section Images - "Why It Matters" (min-h-[260px]):
- **Aspect Ratio:** 4:3 (recommended) or 16:9
- **Recommended Size:** 1000x750px (4:3) or 1200x675px (16:9)
- **Container:** Smaller container in two-column layout
- **Used for:** Closing/connection images in "Why It Matters" sections

---

## Topic 1: CPU Basics

### Hero Image:
1. **m2-cpu-hero.jpg**
   - Location: `src/assets/module-media/m2-cpu-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing CPU as the central brain: CPU chip in center with glowing connections to RAM, storage, motherboard, and other components. Use a tech aesthetic with soft gradients. Show the CPU as the command center.

### Section Images:
1. **m2-cpu-overview.jpg**
   - Location: `src/assets/module-media/m2-cpu-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show a modern CPU chip (Intel/AMD style) from top view with visible pins/socket. Include subtle labels: 'CPU Core', 'Cache', 'Socket'. Background: clean tech aesthetic with soft lighting.

2. **m2-cpu-cores-comparison.jpg**
   - Location: `src/assets/module-media/m2-cpu-cores-comparison.jpg`
   - Used in: Cores comparison section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], comparison layout
   - **Image Brief:** Create a visual comparison: left shows single core (1 worker), middle shows dual core (2 workers), right shows quad core (4 workers). Use simple icons or silhouettes. Show how more cores = more parallel processing. Clean, educational style.

3. **m2-cpu-alu-cu.jpg**
   - Location: `src/assets/module-media/m2-cpu-alu-cu.jpg`
   - Used in: ALU and CU section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], diagram layout
   - **Image Brief:** Create a simplified CPU architecture diagram: show ALU (Arithmetic Logic Unit) on left with math symbols (+, -, ×, ÷) and logic gates, CU (Control Unit) on right with instruction flow arrows. Connect them with data paths. Use clean lines and educational style.

4. **m2-cpu-in-action.jpg**
   - Location: `src/assets/module-media/m2-cpu-in-action.jpg`
   - Used in: In Action section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], visualization layout
   - **Image Brief:** Show a stylized visualization of CPU processing: data streams flowing into a CPU icon, processing happening (animated-style arrows), results flowing out. Use modern tech aesthetic with gradient colors. Show speed and efficiency.

---

## Topic 2: RAM Basics

### Hero Image:
1. **m2-ram-hero.jpg**
   - Location: `src/assets/module-media/m2-ram-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing RAM as the temporary workspace: RAM sticks in center with data flowing from storage (slow) to RAM (fast) to CPU. Show the concept of active data storage. Use a tech aesthetic with soft gradients.

### Section Images:
1. **m2-ram-overview.jpg**
   - Location: `src/assets/module-media/m2-ram-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show a modern RAM stick (DDR4 or DDR5) from side view with visible chips, connectors, and labels. Include subtle labels: 'Memory Chips', 'Connector', 'Capacity'. Background: clean tech aesthetic with soft lighting.

2. **m2-ram-speed-comparison.jpg**
   - Location: `src/assets/module-media/m2-ram-speed-comparison.jpg`
   - Used in: Speed comparison section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], comparison layout
   - **Image Brief:** Create a visual comparison: left shows low RAM (4GB) with slow performance indicators, right shows high RAM (16GB) with fast performance indicators. Show apps running smoothly vs lagging. Clean, educational style.

3. **m2-ram-usage-patterns.jpg**
   - Location: `src/assets/module-media/m2-ram-usage-patterns.jpg`
   - Used in: Usage patterns section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], diagram layout
   - **Image Brief:** Create a diagram showing RAM usage: show RAM bar/chart being filled with different colored sections representing active programs, system processes, cached data, and temporary files. Use clear visual separation. Style: educational diagram.

4. **m2-ram-in-action.jpg**
   - Location: `src/assets/module-media/m2-ram-in-action.jpg`
   - Used in: In Action section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], visualization layout
   - **Image Brief:** Show a stylized visualization of RAM processing: data streams flowing into RAM from storage, CPU accessing RAM quickly, results flowing out. Use modern tech aesthetic with gradient colors. Show speed and efficiency.

---

## Topic 3: ROM Basics

### Hero Image:
1. **m2-rom-hero.jpg**
   - Location: `src/assets/module-media/m2-rom-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing ROM as permanent storage: ROM chip in center with boot instructions flowing from it, connecting to computer startup process. Show the concept of non-volatile memory. Use a tech aesthetic with soft gradients.

### Section Images:
1. **m2-rom-overview.jpg**
   - Location: `src/assets/module-media/m2-rom-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show a ROM chip (BIOS/UEFI chip) with visible components and labels. Include subtle labels: 'Boot Instructions', 'Firmware', 'Non-Volatile'. Background: clean tech aesthetic with soft lighting.

2. **m2-rom-boot-process.jpg**
   - Location: `src/assets/module-media/m2-rom-boot-process.jpg`
   - Used in: Boot process section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], diagram layout
   - **Image Brief:** Create a boot process diagram: show sequence from power button press → ROM chip → BIOS/UEFI screen → OS loading. Use arrows and progression indicators. Clean, educational diagram style.

3. **m2-rom-non-volatile.jpg**
   - Location: `src/assets/module-media/m2-rom-non-volatile.jpg`
   - Used in: Non-volatile comparison section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], comparison layout
   - **Image Brief:** Create a comparison diagram: left shows ROM (permanent, non-volatile, boot instructions) with 'Keeps data when off' indicator, right shows RAM (temporary, volatile, active data) with 'Clears when off' indicator. Use clear visual separation. Style: educational diagram.

4. **m2-rom-in-action.jpg**
   - Location: `src/assets/module-media/m2-rom-in-action.jpg`
   - Used in: In Action section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], visualization layout
   - **Image Brief:** Show a stylized visualization of computer boot sequence: power button → ROM providing instructions → BIOS/UEFI screen appearing → OS loading. Use modern tech aesthetic with gradient colors. Show the startup process.

---

## Topic 4: Storage Concepts

### Hero Image:
1. **m2-storage-hero.jpg**
   - Location: `src/assets/module-media/m2-storage-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual hierarchy showing different storage types: RAM at top (fastest, volatile), cache, SSD (fast, non-volatile), HDD (slower, non-volatile). Show speed and capacity differences. Use a modern tech aesthetic with gradients.

### Section Images:
1. **m2-storage-hierarchy.jpg**
   - Location: `src/assets/module-media/m2-storage-hierarchy.jpg`
   - Used in: Storage hierarchy section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], diagram layout
   - **Image Brief:** Create a storage hierarchy diagram: vertical or horizontal flow showing RAM (fastest, smallest) → Cache → SSD → HDD (slowest, largest). Include speed indicators and capacity labels. Clean educational diagram style.

2. **m2-storage-workflow.jpg**
   - Location: `src/assets/module-media/m2-storage-workflow.jpg`
   - Used in: Data workflow section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], flow diagram layout
   - **Image Brief:** Create a data flow diagram: show how data moves from CPU → RAM (active processing) → Storage (saved files). Include arrows and labels. Show the complete data lifecycle. Modern tech diagram style.

3. **m2-storage-decision.jpg**
   - Location: `src/assets/module-media/m2-storage-decision.jpg`
   - Used in: Storage decision section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], decision tree layout
   - **Image Brief:** Create a decision tree diagram: show when to use different storage types based on needs (speed, capacity, cost). Include decision points and recommendations. Clean, educational flowchart style.

---

## Topic 5: HDD - Hard Disk Drive

### Hero Image:
1. **m2-hdd-hero.jpg**
   - Location: `src/assets/module-media/m2-hdd-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual of a 3.5" HDD: show the external view with labels, SATA ports, and power connector. Include capacity indicators. Use a clean tech aesthetic with soft lighting.

### Section Images:
1. **m2-hdd-external.jpg**
   - Location: `src/assets/module-media/m2-hdd-external.jpg`
   - Used in: External view section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show a 3.5" HDD from the outside: visible labels, SATA data port, power connector. Include subtle labels for key parts. Background: clean tech aesthetic.

2. **m2-hdd-internal.jpg**
   - Location: `src/assets/module-media/m2-hdd-internal.jpg`
   - Used in: Internal structure section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], cross-section diagram layout
   - **Image Brief:** Create a cross-section diagram of HDD internals: show platters (magnetic disks), read/write heads, actuator arm, spindle (rotation axis), and motor. Include labels and annotations. Educational diagram style.

3. **m2-hdd-use-cases.jpg**
   - Location: `src/assets/module-media/m2-hdd-use-cases.jpg`
   - Used in: Use cases section
   - **Dimensions:** 1920x1080px (16:9) recommended
   - **Aspect Ratio:** 16:9 (wide banner)
   - **Container:** min-h-[400px], full-width banner
   - **Image Brief:** Show HDDs in different applications: desktop computer, server rack, external backup drive, NAS device, gaming console. Arrange them in a flowing layout. Background: tech gradient.

---

## Topic 6: SSD & NVMe

### Hero Image:
1. **m2-ssd-hero.jpg**
   - Location: `src/assets/module-media/m2-ssd-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing both SSD types: 2.5" SATA SSD and M.2 NVMe SSD side by side. Show the compact form factors and connection types. Use a modern tech aesthetic with gradients.

### Section Images:
1. **m2-ssd-overview.jpg**
   - Location: `src/assets/module-media/m2-ssd-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show both SSD types from external view: 2.5" SATA SSD with visible SATA connector, and M.2 NVMe SSD showing the compact form factor. Include labels. Background: clean tech aesthetic.

2. **m2-ssd-speed-comparison.jpg**
   - Location: `src/assets/module-media/m2-ssd-speed-comparison.jpg`
   - Used in: Speed comparison section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], comparison chart layout
   - **Image Brief:** Create a speed comparison chart: bar chart showing SSD vs HDD speeds for boot time, file read, and access time. Include visual indicators. Clean, educational diagram style.

3. **m2-ssd-nvme.jpg**
   - Location: `src/assets/module-media/m2-ssd-nvme.jpg`
   - Used in: NVMe section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], diagram layout
   - **Image Brief:** Create an NVMe SSD diagram: show M.2 form factor, PCIe connection, and how it bypasses SATA. Include labels for key parts. Modern tech diagram style.

4. **m2-ssd-longevity.jpg**
   - Location: `src/assets/module-media/m2-ssd-longevity.jpg`
   - Used in: Longevity section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], diagram layout
   - **Image Brief:** Create a wear leveling diagram: show how data is distributed across memory cells to extend lifespan. Include visual representation of wear leveling process. Educational diagram style.

5. **m2-ssd-decision.jpg**
   - Location: `src/assets/module-media/m2-ssd-decision.jpg`
   - Used in: Decision section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], decision diagram layout
   - **Image Brief:** Create a decision diagram: show when to use SSD vs HDD based on needs (speed, capacity, cost). Include decision points and recommendations. Clean flowchart style.

---

## Topic 7: Motherboard

### Hero Image:
1. **m2-motherboard-hero.jpg**
   - Location: `src/assets/module-media/m2-motherboard-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing motherboard as the foundation: motherboard in center with all components (CPU, RAM, GPU, SSD) connected. Show the central role. Use a tech aesthetic with gradients.

### Section Images:
1. **m2-motherboard-overview.jpg**
   - Location: `src/assets/module-media/m2-motherboard-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], annotated diagram layout
   - **Image Brief:** Show a motherboard with visible components and labels: CPU socket, RAM slots, PCIe slots, power connectors, SATA ports, I/O ports. Include clear annotations. Background: clean tech aesthetic.

2. **m2-motherboard-cpu-socket.jpg**
   - Location: `src/assets/module-media/m2-motherboard-cpu-socket.jpg`
   - Used in: CPU socket section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], close-up diagram layout
   - **Image Brief:** Show CPU socket close-up: visible pins, lock mechanism, socket type labels (LGA/AM4/PGA). Include annotations for key parts. Educational diagram style.

3. **m2-motherboard-ram-power.jpg**
   - Location: `src/assets/module-media/m2-motherboard-ram-power.jpg`
   - Used in: RAM and power section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], close-up diagram layout
   - **Image Brief:** Show RAM slots and power connectors: visible RAM slots with clips, 24-pin main power connector, 8-pin CPU power connector. Include labels. Clean tech diagram style.

4. **m2-motherboard-ports.jpg**
   - Location: `src/assets/module-media/m2-motherboard-ports.jpg`
   - Used in: Ports section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], ports overview layout
   - **Image Brief:** Show motherboard I/O ports: USB ports, HDMI/DisplayPort, Ethernet port, audio jacks, WiFi antenna connectors. Include labels for each port type. Clean layout.

---

## Topic 8: Ports & Connectors

### Hero Image:
1. **m2-ports-hero.jpg**
   - Location: `src/assets/module-media/m2-ports-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing ports as connection points: motherboard/device with various ports (USB, HDMI, Ethernet, Audio) visible and labeled. Show the concept of device connectivity. Use a tech aesthetic with gradients.

### Section Images:
1. **m2-ports-overview.jpg**
   - Location: `src/assets/module-media/m2-ports-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], ports overview layout
   - **Image Brief:** Show various ports on a motherboard or device: USB ports, HDMI port, Ethernet port, audio jacks. Include clear labels for each port type. Background: clean tech aesthetic.

2. **m2-ports-usb-types.jpg**
   - Location: `src/assets/module-media/m2-ports-usb-types.jpg`
   - Used in: USB types section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], comparison layout
   - **Image Brief:** Create a comparison image: show USB-A (rectangular), USB-C (reversible), Micro-USB (small), and USB-B (square) side by side with labels. Include size and use case indicators. Clean educational style.

3. **m2-ports-hdmi-ethernet.jpg**
   - Location: `src/assets/module-media/m2-ports-hdmi-ethernet.jpg`
   - Used in: HDMI and Ethernet section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], close-up layout
   - **Image Brief:** Show HDMI port and Ethernet port close-up: visible connectors, labels for each port type. Include connection examples. Clean tech diagram style.

4. **m2-ports-audio.jpg**
   - Location: `src/assets/module-media/m2-ports-audio.jpg`
   - Used in: Audio ports section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], ports overview layout
   - **Image Brief:** Show audio ports: 3.5mm headphone/microphone jacks, USB audio port, optical audio port. Include labels and use cases. Clean layout.

5. **m2-ports-selection.jpg**
   - Location: `src/assets/module-media/m2-ports-selection.jpg`
   - Used in: Port selection section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], selection guide layout
   - **Image Brief:** Create a selection guide diagram: show which port to use for different devices (monitor → HDMI, internet → Ethernet, etc.). Include decision flow. Educational flowchart style.

---

## Topic 9: GPU Basics

### Hero Image:
1. **m2-gpu-hero.jpg**
   - Location: `src/assets/module-media/m2-gpu-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing GPU as graphics powerhouse: GPU card in center with fans visible, PCIe connector, display ports. Show the concept of visual processing. Use a tech aesthetic with gradients.

### Section Images:
1. **m2-gpu-overview.jpg**
   - Location: `src/assets/module-media/m2-gpu-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show a GPU card from external view: visible fans, PCIe connector, display ports (HDMI, DisplayPort), power connectors. Include labels for key parts. Background: clean tech aesthetic.

2. **m2-gpu-comparison.jpg**
   - Location: `src/assets/module-media/m2-gpu-comparison.jpg`
   - Used in: Integrated vs Dedicated section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], comparison diagram layout
   - **Image Brief:** Create a comparison diagram: left shows integrated GPU (CPU with graphics built-in), right shows dedicated GPU (separate card with own RAM). Include labels and differences. Educational diagram style.

3. **m2-gpu-architecture.jpg**
   - Location: `src/assets/module-media/m2-gpu-architecture.jpg`
   - Used in: Architecture section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], architecture diagram layout
   - **Image Brief:** Create a GPU architecture diagram: show CUDA cores/stream processors, memory bus, VRAM, and how they work together. Include labels and flow. Modern tech diagram style.

---

## Topic 10: ALU - Arithmetic Logic Unit

### Hero Image:
1. **m2-alu-hero.jpg**
   - Location: `src/assets/module-media/m2-alu-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing ALU as computational heart: ALU in center with arithmetic operations (add, subtract, multiply, divide) and logic operations (AND, OR, NOT) flowing from it. Use a tech aesthetic with gradients.

### Section Images:
1. **m2-alu-overview.jpg**
   - Location: `src/assets/module-media/m2-alu-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show ALU diagram: visible arithmetic section and logic section, with labels for key parts. Include visual separation between arithmetic and logic functions. Background: clean tech aesthetic.

2. **m2-alu-arithmetic.jpg**
   - Location: `src/assets/module-media/m2-alu-arithmetic.jpg`
   - Used in: Arithmetic operations section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], operations diagram layout
   - **Image Brief:** Create an arithmetic operations diagram: show addition, subtraction, multiplication, and division operations with visual examples. Include operation symbols and examples. Clean educational style.

3. **m2-alu-logic.jpg**
   - Location: `src/assets/module-media/m2-alu-logic.jpg`
   - Used in: Logic operations section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], logic diagram layout
   - **Image Brief:** Create a logic operations diagram: show AND, OR, NOT gates and comparison operations (equal, not equal, greater than, less than). Include truth tables or examples. Educational diagram style.

4. **m2-alu-in-action.jpg**
   - Location: `src/assets/module-media/m2-alu-in-action.jpg`
   - Used in: In Action section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], processing flow diagram layout
   - **Image Brief:** Create an ALU processing flow diagram: show how data flows through ALU, arithmetic operations, logic operations, and results. Include flow arrows and labels. Modern tech diagram style.

5. **m2-alu-role.jpg**
   - Location: `src/assets/module-media/m2-alu-role.jpg`
   - Used in: Role in CPU section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], CPU context diagram layout
   - **Image Brief:** Create an ALU role diagram: show ALU's position within CPU, how it connects to other CPU components (CU, registers). Include context of ALU's role. Clean tech diagram style.

---

## Topic 11: CU - Control Unit

### Hero Image:
1. **m2-cu-hero.jpg**
   - Location: `src/assets/module-media/m2-cu-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing CU as director: Control Unit in center coordinating CPU operations, with instructions flowing to ALU, registers, and other components. Use a tech aesthetic with gradients.

### Section Images:
1. **m2-cu-overview.jpg**
   - Location: `src/assets/module-media/m2-cu-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1920x1080px (16:9) recommended
   - **Aspect Ratio:** 16:9 (wide banner)
   - **Container:** min-h-[400px], full-width banner
   - **Image Brief:** Show Control Unit diagram: visible coordination of CPU components, instruction flow, control signals. Include labels for key functions. Background: clean tech aesthetic.

2. **m2-cu-control-flow.jpg**
   - Location: `src/assets/module-media/m2-cu-control-flow.jpg`
   - Used in: Control flow section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Create a control flow diagram: show instruction cycle sequence (Fetch → Decode → Execute → Store) with arrows and control signals. Include labels for each step. Educational diagram style.

3. **m2-cu-instruction-cycle.jpg**
   - Location: `src/assets/module-media/m2-cu-instruction-cycle.jpg`
   - Used in: Instruction cycle section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], cycle diagram layout
   - **Image Brief:** Create an instruction cycle diagram: show detailed steps of instruction processing with cycle flow, timing, and control signals. Include visual representation of each cycle stage. Modern tech diagram style.

---

## Topic 12: Firmware

### Hero Image:
1. **m2-firmware-hero.jpg**
   - Location: `src/assets/module-media/m2-firmware-hero.jpg`
   - Used in: Hero section (top of topic page)
   - **Dimensions:** 1920x1080px (16:9) or 1600x1200px (4:3)
   - **Aspect Ratio:** 16:9 (landscape) recommended
   - **Image Brief:** Create a visual showing firmware as bridge: firmware layer between hardware and software, with BIOS/UEFI, router firmware, and device firmware visible. Use a tech aesthetic with gradients.

### Section Images:
1. **m2-firmware-overview.jpg**
   - Location: `src/assets/module-media/m2-firmware-overview.jpg`
   - Used in: Overview section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], side-by-side layout
   - **Image Brief:** Show firmware overview: BIOS/UEFI chip, router firmware interface, device firmware examples. Include labels for each type. Background: clean tech aesthetic.

2. **m2-firmware-bios-uefi.jpg**
   - Location: `src/assets/module-media/m2-firmware-bios-uefi.jpg`
   - Used in: BIOS/UEFI section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], interface screen layout
   - **Image Brief:** Show BIOS/UEFI interface: setup screen with visible configuration options, boot settings, hardware settings. Include labels for key sections. Clean tech interface style.

3. **m2-firmware-router-device.jpg**
   - Location: `src/assets/module-media/m2-firmware-router-device.jpg`
   - Used in: Router and device firmware section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], examples layout
   - **Image Brief:** Show router firmware UI and device firmware examples: router configuration interface, device firmware update screens. Include labels. Clean layout.

4. **m2-firmware-layers.jpg**
   - Location: `src/assets/module-media/m2-firmware-layers.jpg`
   - Used in: Firmware layers section
   - **Dimensions:** 1920x1080px (16:9) recommended
   - **Aspect Ratio:** 16:9 (wide banner)
   - **Container:** min-h-[400px], full-width banner
   - **Image Brief:** Create a firmware layers diagram: show hardware → firmware → operating system → applications stack. Include labels and arrows showing interaction. Educational diagram style.

5. **m2-firmware-update.jpg**
   - Location: `src/assets/module-media/m2-firmware-update.jpg`
   - Used in: Firmware update section
   - **Dimensions:** 1200x900px (4:3) recommended
   - **Aspect Ratio:** 4:3
   - **Container:** min-h-[300px], update diagram layout
   - **Image Brief:** Create a firmware update diagram: show when to update firmware, update process flow, and safety considerations. Include decision points. Clean flowchart style.

---

## Summary

**Total Images Needed:** 60 images (12 hero images + 48 section images)

**All files go in:** `src/assets/module-media/`

### Breakdown:
- **Topic 1 (CPU):** 1 hero image + 4 section images = **5 images total**
- **Topic 2 (RAM):** 1 hero image + 4 section images = **5 images total**
- **Topic 3 (ROM):** 1 hero image + 4 section images = **5 images total**
- **Topic 4 (Storage Concepts):** 1 hero image + 3 section images = **4 images total**
- **Topic 5 (HDD):** 1 hero image + 3 section images = **4 images total**
- **Topic 6 (SSD & NVMe):** 1 hero image + 5 section images = **6 images total**
- **Topic 7 (Motherboard):** 1 hero image + 4 section images = **5 images total**
- **Topic 8 (Ports & Connectors):** 1 hero image + 5 section images = **6 images total**
- **Topic 9 (GPU):** 1 hero image + 3 section images = **4 images total**
- **Topic 10 (ALU):** 1 hero image + 5 section images = **6 images total**
- **Topic 11 (CU):** 1 hero image + 3 section images = **4 images total**
- **Topic 12 (Firmware):** 1 hero image + 5 section images = **6 images total**

### Hero Images Summary:
- **m2-cpu-hero.jpg** - CPU as the brain of the computer
- **m2-ram-hero.jpg** - RAM as temporary workspace
- **m2-rom-hero.jpg** - ROM as permanent storage
- **m2-storage-hero.jpg** - Storage hierarchy
- **m2-hdd-hero.jpg** - HDD external view
- **m2-ssd-hero.jpg** - SSD types overview
- **m2-motherboard-hero.jpg** - Motherboard as foundation
- **m2-ports-hero.jpg** - Ports as connection points
- **m2-gpu-hero.jpg** - GPU as graphics powerhouse
- **m2-alu-hero.jpg** - ALU as computational heart
- **m2-cu-hero.jpg** - CU as director
- **m2-firmware-hero.jpg** - Firmware as bridge

---

## Quick Reference Checklist

### Topic 1: CPU Basics
- [ ] m2-cpu-hero.jpg
- [ ] m2-cpu-overview.jpg
- [ ] m2-cpu-cores-comparison.jpg
- [ ] m2-cpu-alu-cu.jpg
- [ ] m2-cpu-in-action.jpg

### Topic 2: RAM Basics
- [ ] m2-ram-hero.jpg
- [ ] m2-ram-overview.jpg
- [ ] m2-ram-speed-comparison.jpg
- [ ] m2-ram-usage-patterns.jpg
- [ ] m2-ram-in-action.jpg

### Topic 3: ROM Basics
- [ ] m2-rom-hero.jpg
- [ ] m2-rom-overview.jpg
- [ ] m2-rom-boot-process.jpg
- [ ] m2-rom-non-volatile.jpg
- [ ] m2-rom-in-action.jpg

### Topic 4: Storage Concepts
- [ ] m2-storage-hero.jpg
- [ ] m2-storage-hierarchy.jpg
- [ ] m2-storage-workflow.jpg
- [ ] m2-storage-decision.jpg

### Topic 5: HDD
- [ ] m2-hdd-hero.jpg
- [ ] m2-hdd-external.jpg
- [ ] m2-hdd-internal.jpg
- [ ] m2-hdd-use-cases.jpg

### Topic 6: SSD & NVMe
- [ ] m2-ssd-hero.jpg
- [ ] m2-ssd-overview.jpg
- [ ] m2-ssd-speed-comparison.jpg
- [ ] m2-ssd-nvme.jpg
- [ ] m2-ssd-longevity.jpg
- [ ] m2-ssd-decision.jpg

### Topic 7: Motherboard
- [ ] m2-motherboard-hero.jpg
- [ ] m2-motherboard-overview.jpg
- [ ] m2-motherboard-cpu-socket.jpg
- [ ] m2-motherboard-ram-power.jpg
- [ ] m2-motherboard-ports.jpg

### Topic 8: Ports & Connectors
- [ ] m2-ports-hero.jpg
- [ ] m2-ports-overview.jpg
- [ ] m2-ports-usb-types.jpg
- [ ] m2-ports-hdmi-ethernet.jpg
- [ ] m2-ports-audio.jpg
- [ ] m2-ports-selection.jpg

### Topic 9: GPU Basics
- [ ] m2-gpu-hero.jpg
- [ ] m2-gpu-overview.jpg
- [ ] m2-gpu-comparison.jpg
- [ ] m2-gpu-architecture.jpg

### Topic 10: ALU
- [ ] m2-alu-hero.jpg
- [ ] m2-alu-overview.jpg
- [ ] m2-alu-arithmetic.jpg
- [ ] m2-alu-logic.jpg
- [ ] m2-alu-in-action.jpg
- [ ] m2-alu-role.jpg

### Topic 11: CU
- [ ] m2-cu-hero.jpg
- [ ] m2-cu-overview.jpg
- [ ] m2-cu-control-flow.jpg
- [ ] m2-cu-instruction-cycle.jpg

### Topic 12: Firmware
- [ ] m2-firmware-hero.jpg
- [ ] m2-firmware-overview.jpg
- [ ] m2-firmware-bios-uefi.jpg
- [ ] m2-firmware-router-device.jpg
- [ ] m2-firmware-layers.jpg
- [ ] m2-firmware-update.jpg

---

**Total: 60 images to create**

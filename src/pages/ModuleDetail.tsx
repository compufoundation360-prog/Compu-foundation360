import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SimulatorPreview } from "@/components/SimulatorPreview";
import { getSimulatorByModuleId, getSimulatorByTopic } from "@/data/simulators";
import { ContentRenderer } from "@/components/ContentRenderer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useTheme } from "@/context/ThemeContext";
import moduleSoftware from "@/assets/module-software.png";
import moduleIntro from "@/assets/module-media/m1-hero.jpeg";
import moduleTypesHero from "@/assets/module-media/types-combined.jpg";
import moduleSoftwareHero from "@/assets/module-media/m1-software-hero.jpg";

const ModuleDetail = () => {
  const { id, part, topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ipoInput, setIpoInput] = useState("");
  const [ipoOutput, setIpoOutput] = useState("");
  const [isProcessingIpo, setIsProcessingIpo] = useState(false);
  const [revealedMatches, setRevealedMatches] = useState<string[]>([]);
  const moduleId = parseInt(id || "1");
  const partNumber = part ? parseInt(part) : null;
  
  // Apply Module 1 light theme colors
  const isModule1Light = moduleId === 1 && theme === 'light';
  
  // Helper function to get Module 1 light theme classes
  const getModule1Class = (baseClass: string, module1Class?: string) => {
    if (isModule1Light && module1Class) {
      return module1Class;
    }
    return baseClass;
  };

  // Page transition effect
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Scroll to top immediately when module or part changes (before transition)
  useEffect(() => {
    // Scroll instantly to top first
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id, part, location.pathname]);

  // Get simulator for this module/topic
  const simulator = (moduleId === 1 || moduleId === 2 || moduleId === 3) && topicId 
    ? getSimulatorByTopic(moduleId, topicId) || getSimulatorByModuleId(moduleId)
    : getSimulatorByModuleId(moduleId);

  const handleIpoSimulation = () => {
    if (!ipoInput.trim() || isProcessingIpo) {
      return;
    }
    const cleanValue = ipoInput.trim();
    setIsProcessingIpo(true);
    setIpoOutput("");
    setTimeout(() => {
      setIpoOutput(cleanValue);
      setIsProcessingIpo(false);
    }, 1200);
  };

  // Module 1 specific content sections
  const getModule1Sections = () => {
    return {
      hero: {
        title: "INTRODUCTION TO COMPUTERS",
        subtitle: "Understand how the IPO (Input → Process → Output) cycle, core characteristics, and everyday devices define a computer.",
        summary:
          "A computer is an electronic machine that accepts input, processes it using instructions, and produces meaningful output. Knowing the IPO cycle, the key characteristics (speed, accuracy, storage, diligence, automation, reliability), and real-world examples builds a solid foundation before diving into types of computers."
      },
      ipo: {
        title: "IPO (Input → Process → Output) Cycle",
        description:
          "Every computer follows the IPO cycle: it receives data through input devices, processes the instructions, and shows output through screens, speakers, or printers.",
        steps: [
          {
            id: "input",
            label: "Input (I)",
            detail: "Devices capture raw data. Examples: keyboard, mouse, microphone, touchscreen."
          },
          {
            id: "process",
            label: "Process (P)",
            detail: "The CPU (Central Processing Unit) and memory follow instructions to convert data into information."
          },
          {
            id: "output",
            label: "Output (O)",
            detail: "Results are shown through monitors, speakers, printers, or haptic feedback."
          }
        ],
        visualAsset: {
          fileName: "module-media/m1-ipo.jpg",
          alt: "Input devices on the left, CPU and gears in the middle, and monitor plus speakers on the right connected with glowing arrows representing the IPO (Input → Process → Output) cycle.",
          brief:
            "Illustrate the IPO cycle as a horizontal scene: on the left show realistic input devices (keyboard, mouse, microphone, touchscreen hand). In the center place a glowing CPU chip with animated arrows and floating code to represent processing. On the right depict a sleek monitor and speakers emitting light as the output. Connect the three zones with curved neon arrows labeled Input, Process, Output. Background: dark charcoal with subtle grid, highlight colors cyan and purple for a tech feel."
          },
        simulation: {
          title: "Interactive IPO Playground",
          description: "Type anything, send it through the virtual CPU, and watch it appear on the output screen to feel how data flows.",
          inputLabel: "Type an input",
          placeholder: "e.g., Hello Compu-Foundation",
          buttonLabel: "Process Input",
          helper: "Enter text to simulate the Input stage. The middle block shows processing, and the monitor on the right is your output.",
          outputLabel: "Output Monitor",
          idleScreen: "Awaiting input..."
        }
      },
      characteristics: {
        title: "Key Characteristics of a Computer",
        intro:
          "Computers are valued because they are fast, accurate, reliable, store huge data, and work without fatigue. These traits make them essential for study, work, and entertainment.",
        traits: [
          { id: "speed", icon: "⚡", title: "Speed", description: "Performs millions of operations per second.", example: "Example: Searching an entire contact list instantly." },
          { id: "accuracy", icon: "🎯", title: "Accuracy", description: "Gives correct results when instructions are correct.", example: "Example: Calculating bank interest without manual mistakes." },
          { id: "storage", icon: "💾", title: "Storage", description: "Stores photos, videos, and documents for years.", example: "Example: Keeping thousands of images on a phone or laptop." },
          { id: "diligence", icon: "💪", title: "Diligence", description: "Works continuously without getting tired.", example: "Example: Servers running websites 24/7." },
          { id: "automation", icon: "🤖", title: "Automation", description: "Follows programmed steps automatically.", example: "Example: Spreadsheet formulas updating totals automatically." },
          { id: "versatility", icon: "🔄", title: "Versatility", description: "Handles multiple types of tasks.", example: "Example: Same device can stream video, edit documents, and play games." },
          { id: "reliability", icon: "✅", title: "Reliability", description: "Consistent performance over long periods.", example: "Example: ATMs dispensing money accurately day and night." }
          ]
      },
      examples: {
        title: "Real-world Computer Examples",
        intro: "From the outline: phones, ATMs, televisions, and embedded systems behave like computers because they all follow the IPO cycle.",
        cards: [
          {
            id: "smartphone",
            title: "Smartphone",
            description: "Touchscreen and sensors capture input, the mobile CPU/GPU processes apps, and the display + speakers provide output."
          },
          {
            id: "atm",
            title: "ATM",
            description: "Keypad/card reader input your request, the bank server processes the transaction, and cash or receipt is the output."
          },
          {
            id: "smart-tv",
            title: "Smart TV",
            description: "Remote or voice input selects content, the built-in processor streams video, and the screen/speakers output the show."
          },
          {
            id: "embedded",
            title: "Embedded Systems",
            description: "Appliances like washing machines or ACs use microcontrollers to process sensor input and control motors or displays."
          }
        ]
      },
      knowledgeCheck: {
        title: "Quick Knowledge Check",
        question: "Tap each scenario to reveal which IPO (Input → Process → Output) stage it highlights.",
        tip: "Aim to explain the stage in your own words once it is revealed.",
        items: [
          {
            id: "voice",
            device: "Voice assistant listening to a command",
            stageOrder: "1 / Input → Process → Output",
            stage: "Input (I)",
            explanation: "Microphone captures your voice for the system to interpret."
          },
          {
            id: "photo",
            device: "Phone camera applying portrait mode",
            stageOrder: "2 / Input → Process → Output",
            stage: "Process (P)",
            explanation: "The processor analyses the image and blurs the background before showing the result."
          },
          {
            id: "printer",
            device: "Printer producing a document",
            stageOrder: "3 / Input → Process → Output",
            stage: "Output (O)",
            explanation: "After the PC processes the document, the printer outputs the final pages."
          }
        ]
      },
      types: {
        title: "Types of Computers",
        intro:
          "Different computers exist for different jobs. From giant supercomputers to the tiny chips inside household machines, each type follows the same IPO flow but at different scales.",
        categories: [
          { name: "Supercomputers", description: "Massive machines used for weather predictions, space research, and simulations." },
          { name: "Servers", description: "Powerful systems that host websites, apps, or files for many users simultaneously." },
          { name: "Desktops", description: "Workhorses for homes, schools, and offices—easy to upgrade and repair." },
          { name: "Laptops & Tablets", description: "Portable computers for study, work, and entertainment on the go." },
          { name: "Smartphones", description: "Pocket-sized computers with touch input, sensors, and wireless connectivity." },
          { name: "Embedded Systems", description: "Microcontrollers inside ATMs, washing machines, ACs, smart TVs, and vehicles." }
        ],
        images: {
          hero: {
            fileName: "module-media/types-combined.jpg",
            alt: "Collage showing supercomputer racks, a desktop tower, an open laptop, tablet, smartphone, and tiny embedded chip arranged from largest to smallest.",
            brief:
              "Design a wide collage that lines up six devices from left to right: towering supercomputer racks, a powerful server tower, a desktop PC with monitor, a slim laptop, a tablet, and a smartphone plus a tiny microchip. Use soft gradient background with faint grid. Add thin neon arrows above them indicating the IPO flow from large-scale to pocket-sized machines."
          },
          everyday: {
            fileName: "module-media/components-combined.jpg",
            alt: "Modern desk with desktop monitor + tower on one side and an open laptop with notes on the other.",
            brief:
              "Create a cozy study desk scene: on the left place a desktop tower and monitor showing a simple dashboard; on the right an open laptop with sticky notes and headphones nearby. Keep lighting warm, include a chair, plant, and books to show a daily learning environment."
          },
          portable: {
            fileName: "module-media/input-output-flow.jpg",
            alt: "Panoramic banner where a student holds a tablet while smartphones float with app icons and motion trails.",
            brief:
              "Illustrate a panoramic mobile banner. Center a learner holding a tablet with stylus; surround them with floating smartphones that display maps, chat bubbles, and video icons. Add motion streaks and Wi-Fi symbols to emphasise mobility and always-on connectivity."
          },
          closing: {
            fileName: "module-media/data-processing.jpg",
            alt: "Isometric network diagram connecting a server rack, laptop, smartphone, smart appliances, and a car with glowing lines.",
            brief:
              "Draw an isometric circular network: at the top a server rack, then clockwise a desktop, laptop, smartphone, smart fridge, washing machine, and an electric car. Connect each with glowing lines leading to a central CPU chip labelled IPO. Background should be deep navy with subtle dotted grid."
          }
        }
      },
      hardwareBasics: {
        title: "Hardware Basics",
        intro: "Hardware refers to the physical parts of a computer. It is divided into external hardware (devices you touch) and internal hardware (components inside the cabinet).",
        externalExamples: [
          { name: "Keyboard", icon: "⌨️" },
          { name: "Mouse", icon: "🖱️" },
          { name: "Monitor", icon: "🖥️" },
          { name: "Printer", icon: "🖨️" },
          { name: "Scanner", icon: "📷" }
        ],
        internalExamples: ["CPU", "Motherboard", "RAM", "Power supply", "Storage drives"],
        images: {
          hero: {
            fileName: "module-media/m1-hardware-hero.jpg",
            alt: "Split view showing external devices on left and internal components on right",
            brief: "Create a split-screen visual: left side shows external devices (keyboard, mouse, monitor) in a clean workspace; right side shows internal components (CPU chip, motherboard, RAM sticks) with a tech aesthetic. Use a subtle divider line in the middle. Background: soft gradient from light to dark."
          },
          external: {
            fileName: "module-media/m1-hardware-external.jpg",
            alt: "Desk setup showing keyboard, mouse, monitor, printer, and scanner",
            brief: "Photograph or illustrate a modern desk workspace with all external hardware visible: keyboard and mouse on desk, monitor displaying content, printer on the side, and scanner nearby. Keep lighting warm and professional."
          },
          internal: {
            fileName: "module-media/m1-hardware-internal.jpg",
            alt: "Open computer case showing CPU, motherboard, RAM, power supply, and storage drives",
            brief: "Show an open computer case with clearly visible internal components: CPU with heatsink, motherboard with slots, RAM sticks inserted, power supply unit, and storage drives (HDD/SSD). Add subtle labels or highlights. Background: dark tech aesthetic."
          },
          comparison: {
            fileName: "module-media/m1-hardware-comparison.jpg",
            alt: "Visual comparison diagram showing external devices connecting to internal components",
            brief: "Design a comparison diagram: top half shows external devices (keyboard, mouse, monitor) with arrows pointing down; bottom half shows internal components (CPU, motherboard, RAM) with arrows pointing up. Connect them with flowing lines or cables. Use a clean, educational diagram style."
          },
          closing: {
            fileName: "module-media/m1-hardware-connection.jpg",
            alt: "Simple diagram showing how external devices connect to internal components via ports and cables",
            brief: "Create a simple connection diagram: show external devices on the left (keyboard, mouse, monitor) connecting via cables/ports to internal components on the right (motherboard, CPU). Use arrows and clean lines. Style: minimalist tech diagram with soft colors."
          }
        }
      },
      softwareBasics: {
        title: "Software Basics",
        intro: "Software is the set of instructions that tells hardware what to do. Without software, hardware cannot function.",
        categories: [
          { title: "System Software", description: "Operating systems (Windows, macOS, Linux) that manage the whole computer." },
          { title: "Application Software", description: "Apps like browsers, games, and office tools that help users accomplish tasks." },
          { title: "Firmware", description: "Built-in code (BIOS/UEFI) stored on chips to start the computer." },
          { title: "Drivers", description: "Small programs that help the OS communicate with hardware devices." }
        ],
        appExamples: [
          { name: "Browser", icon: "🌐", examples: "Chrome, Firefox" },
          { name: "Office", icon: "📄", examples: "Word, Excel" },
          { name: "Games", icon: "🎮", examples: "Various games" },
          { name: "Creative", icon: "🎨", examples: "Photoshop" }
        ],
        images: {
          hero: {
            fileName: "module-media/m1-software-hero.jpg",
            alt: "Split view showing software layers connecting to hardware components",
            brief: "Create a split-screen visual: left side shows software layers (apps, OS, firmware) with icons; right side shows hardware components (CPU, RAM, motherboard). Connect them with arrows showing 'Software tells hardware what to do'. Background: clean tech aesthetic with subtle gradients."
          },
          system: {
            fileName: "module-media/m1-software-system.jpg",
            alt: "Split view showing Windows, macOS, and Linux operating systems",
            brief: "Create a split-screen visual showing three operating systems side by side: Windows desktop on left, macOS interface in center, Linux desktop on right. Each should show their distinctive UI elements. Background: clean tech aesthetic with subtle gradients."
          },
          apps: {
            fileName: "module-media/m1-software-apps.jpg",
            alt: "Wide banner with floating app icons for browsers, office tools, games, and creative software",
            brief: "Design a wide banner with floating app icons: browser icons (Chrome, Firefox), office icons (Word, Excel), game icons, and creative tool icons (Photoshop, etc.). Arrange them in a flowing, dynamic layout. Background: soft gradient with tech elements."
          },
          firmware: {
            fileName: "module-media/m1-software-firmware.jpg",
            alt: "Computer booting sequence showing BIOS/UEFI screen transitioning to OS loading",
            brief: "Illustrate a computer boot sequence: show BIOS/UEFI screen (black background with white text) transitioning to OS loading screen. Include subtle arrows or progression indicators. Style: technical but clean."
          },
          layers: {
            fileName: "module-media/m1-software-layers.jpg",
            alt: "Layered diagram showing Application Software, System Software, Firmware & Drivers, and Hardware stacked",
            brief: "Create a layered stack diagram: top layer labeled 'Application Software' (colorful apps), second layer 'System Software (OS)' (OS interface), third layer 'Firmware & Drivers' (chip/code symbols), bottom layer 'Hardware' (computer components). Use clear visual separation between layers."
          },
          closing: {
            fileName: "module-media/m1-software-connection.jpg",
            alt: "Simple diagram showing hardware and software connecting to create a working computer",
            brief: "Design a simple connection diagram: left side shows hardware components (CPU, RAM, etc.), right side shows software icons (OS, apps), with arrows connecting them to a central 'Working Computer' icon in the middle. Use clean lines and soft colors."
          }
        }
      },
      hardwareVsSoftware: {
        title: "Hardware vs Software",
        intro: "Hardware and software rely on each other. Hardware provides the body, software provides the brain.",
        comparisons: [
          { label: "Definition", hardware: "Physical components (CPU, RAM, monitor)", software: "Programs and instructions" },
          { label: "Visibility", hardware: "Visible and touchable", software: "Invisible, stored as code" },
          { label: "Dependency", hardware: "Needs software to perform tasks", software: "Needs hardware to run" },
          { label: "Examples", hardware: "Keyboard, motherboard", software: "Windows, Chrome, MS Word" }
        ],
        mapping: [
          { action: "Typing with keyboard", hardware: "Keyboard", software: "Word processor" },
          { action: "Printing a file", hardware: "Printer", software: "Printer driver + document app" },
          { action: "Watching a video", hardware: "Monitor & speakers", software: "Media player" }
        ],
        images: {
          comparison: {
            fileName: "module-media/m1-hw-sw-comparison.jpg",
            alt: "Split visual showing hardware components on left and software icons on right with connecting arrows",
            brief: "Create a split-screen visual: left side shows hardware components (CPU chip, RAM stick, keyboard, monitor) in a tech aesthetic; right side shows software icons (OS logo, app icons, code symbols) with flowing arrows connecting them. Background: soft gradient with tech elements."
          },
          mapping: {
            fileName: "module-media/m1-hw-sw-mapping.jpg",
            alt: "Visual flow diagram showing actions like typing, printing, and watching video with hardware and software connections",
            brief: "Design a flow diagram showing three actions: 1) Typing → Keyboard (hardware) → Word processor (software), 2) Printing → Printer (hardware) → Driver + App (software), 3) Watching video → Monitor/Speakers (hardware) → Media player (software). Use arrows and clean lines. Style: educational diagram."
          },
          closing: {
            fileName: "module-media/m1-hw-sw-connection.jpg",
            alt: "Circular diagram showing hardware and software working together with arrows indicating mutual dependency",
            brief: "Create a circular diagram: center shows a computer icon, surrounded by hardware components (CPU, RAM, keyboard) on one side and software icons (OS, apps) on the other, with bidirectional arrows showing mutual dependency. Background: clean tech aesthetic."
          }
        }
      },
      inputDevices: {
        title: "Input Devices",
        intro: "Input devices send data to the computer. Each device is suited for a different type of data.",
        devices: [
          { name: "Keyboard", icon: "⌨️", description: "Alphabet, numbers, shortcuts" },
          { name: "Mouse / Touchpad", icon: "🖱️", description: "Pointer control, clicks, drag & drop" },
          { name: "Microphone", icon: "🎤", description: "Captures voice and audio" },
          { name: "Scanner", icon: "📷", description: "Turns paper documents into digital files" },
          { name: "Webcam", icon: "📹", description: "Captures live video" },
          { name: "Touchscreen", icon: "👆", description: "Direct touch input used in phones, kiosks, and tablets" }
        ],
        images: {
          common: {
            fileName: "module-media/m1-input-common.jpg",
            alt: "Desk setup showing keyboard, mouse, microphone, scanner, webcam, and touchscreen devices",
            brief: "Photograph or illustrate a modern desk workspace with all common input devices visible: keyboard and mouse on desk, microphone nearby, scanner on the side, webcam on monitor, and a tablet with touchscreen. Keep lighting warm and professional."
          },
          flow: {
            fileName: "module-media/m1-input-flow.jpg",
            alt: "Flow diagram showing input devices connecting to CPU and then to output",
            brief: "Create a flow diagram: left side shows input devices (keyboard, mouse, microphone) with arrows pointing to a central CPU icon, then arrows pointing to output devices (monitor, speakers) on the right. Use clean lines and tech aesthetic."
          },
          specialized: {
            fileName: "module-media/m1-input-specialized.jpg",
            alt: "Various specialized input devices like game controllers, drawing tablets, and barcode scanners",
            brief: "Design a banner showing specialized input devices: game controllers, drawing tablets with stylus, barcode scanners, MIDI keyboards, and other niche devices. Arrange them in a flowing layout. Background: tech gradient."
          },
          closing: {
            fileName: "module-media/m1-input-connection.jpg",
            alt: "Simple diagram showing different input methods connecting to a central computer",
            brief: "Create a simple connection diagram: show various input methods (keyboard, mouse, touch, voice) arranged around a central computer icon, with lines connecting them. Use clean, minimalist style with soft colors."
          }
        }
      },
      outputDevices: {
        title: "Output Devices",
        intro: "Output devices display or produce information from the computer. They convert digital data into forms you can see, hear, or touch.",
        devices: [
          { name: "Monitor", icon: "🖥️", description: "Displays visual information on screen" },
          { name: "Speakers", icon: "🔊", description: "Produces sound and audio output" },
          { name: "Printer", icon: "🖨️", description: "Creates physical copies on paper" },
          { name: "Projector", icon: "📽️", description: "Projects images onto large surfaces" }
        ],
        images: {
          common: {
            fileName: "module-media/m1-output-common.jpg",
            alt: "Common output devices: monitor, speakers, printer, and projector",
            brief: "Visual showing monitor, speakers, printer, and projector arranged on a desk or workspace. Keep lighting warm and professional."
          },
          flow: {
            fileName: "module-media/m1-output-flow.jpg",
            alt: "Diagram showing how data flows from computer to output devices",
            brief: "Flow diagram from CPU to monitor, speakers, and printer. Show arrows indicating data flow from computer to each output device. Use clean lines and tech aesthetic."
          },
          specialized: {
            fileName: "module-media/m1-output-specialized.jpg",
            alt: "Specialized output devices like 3D printers, braille displays, and large format printers",
            brief: "Design a banner showing specialized output devices: 3D printers, braille displays, large format printers, and other niche devices. Arrange them in a flowing layout. Background: tech gradient."
          },
          closing: {
            fileName: "module-media/m1-output-closing.jpg",
            alt: "Person using multiple output devices together",
            brief: "User interacting with monitor, speakers, and printer simultaneously. Show a person at a workstation using all three devices. Keep it realistic and relatable."
          }
        }
      },
      ioDevices: {
        title: "I/O (Input + Output) Devices",
        intro: "Some devices can both send data to the computer and receive data from it. These dual-purpose devices combine input and output capabilities in one.",
        devices: [
          { name: "Touchscreen", icon: "👆", description: "Touches are input, visuals are output" },
          { name: "Headset with Mic", icon: "🎧", description: "Ear cups play sound, microphone captures voice" },
          { name: "USB Devices", icon: "💾", description: "Transfer files in both directions" },
          { name: "Bluetooth Devices", icon: "📶", description: "Wireless two-way communication" }
        ],
        images: {
          common: {
            fileName: "module-media/m1-io-common.jpg",
            alt: "I/O devices: touchscreen, headset with microphone, USB devices, and Bluetooth devices",
            brief: "Visual showing touchscreen device, headset with microphone, USB flash drive, and Bluetooth devices. Arrange them to show both input and output capabilities. Keep lighting warm and professional."
          },
          flow: {
            fileName: "module-media/m1-io-flow.jpg",
            alt: "Diagram showing bidirectional data flow in I/O devices",
            brief: "Flow diagram showing bidirectional arrows: data going from device to computer (input) and from computer to device (output). Show touchscreen, headset, and USB/Bluetooth with dual arrows. Use clean lines and tech aesthetic."
          },
          examples: {
            fileName: "module-media/m1-io-examples.jpg",
            alt: "Real-world examples of I/O devices in use",
            brief: "Show real-world examples: person using touchscreen tablet, someone with gaming headset, transferring files via USB, and connecting Bluetooth devices. Keep it realistic and relatable."
          },
          closing: {
            fileName: "module-media/m1-io-closing.jpg",
            alt: "Diagram showing how I/O devices complete the computer interaction cycle",
            brief: "Create a diagram showing the complete cycle: input → process → output, with I/O devices highlighted as devices that can do both. Show how they complete the interaction loop. Use clean, minimalist style."
          }
        }
      },
      navigation: {
        nextLabel: "Next Topic: Types of Computers",
        nextHash: "#topic-types-of-computers"
      }
    };
  };

  // Module 2 specific content sections (Topic-based structure)
  const getModule2Sections = () => {
    return {
      cpuBasics: {
        title: "CPU Basics",
        intro: "The Central Processing Unit (CPU) is the brain of your computer. It executes instructions, processes data, and coordinates all system operations.",
        images: {
          hero: {
            fileName: "module-media/m2-cpu-hero.jpg",
            alt: "CPU as the brain of the computer, connecting to other components",
            brief: "Create a visual showing CPU as the central brain: CPU chip in center with glowing connections to RAM, storage, motherboard, and other components. Use a tech aesthetic with soft gradients. Show the CPU as the command center."
          },
          overview: {
            fileName: "module-media/m2-cpu-overview.jpg",
            alt: "Modern CPU chip top view with labels showing key parts",
            brief: "Show a modern CPU chip (Intel/AMD style) from top view with visible pins/socket. Include subtle labels: 'CPU Core', 'Cache', 'Socket'. Background: clean tech aesthetic with soft lighting."
          },
          coresComparison: {
            fileName: "module-media/m2-cpu-cores-comparison.jpg",
            alt: "Visual comparison diagram showing Single Core vs Dual Core vs Quad Core",
            brief: "Create a visual comparison: left shows single core (1 worker), middle shows dual core (2 workers), right shows quad core (4 workers). Use simple icons or silhouettes. Show how more cores = more parallel processing. Clean, educational style."
          },
          aluCu: {
            fileName: "module-media/m2-cpu-alu-cu.jpg",
            alt: "CPU internal architecture diagram showing ALU and CU with data paths",
            brief: "Create a simplified CPU architecture diagram: show ALU (Arithmetic Logic Unit) on left with math symbols (+, -, ×, ÷) and logic gates, CU (Control Unit) on right with instruction flow arrows. Connect them with data paths. Use clean lines and educational style."
          },
          inAction: {
            fileName: "module-media/m2-cpu-in-action.jpg",
            alt: "CPU processing visualization with data streams flowing",
            brief: "Show a stylized visualization of CPU processing: data streams flowing into a CPU icon, processing happening (animated-style arrows), results flowing out. Use modern tech aesthetic with gradient colors. Show speed and efficiency."
          }
        },
        coreExamples: [
          { name: "Single Core", icon: "🔵", description: "One processing unit, handles one task at a time" },
          { name: "Multi-Core", icon: "🔵🔵", description: "Multiple cores work together, handling many tasks simultaneously" },
          { name: "Threads", icon: "⚡", description: "Each core can process multiple threads, like having multiple workers in one factory" },
          { name: "Performance", icon: "🚀", description: "More cores and threads = faster multitasking and better performance" }
        ]
      },
      ramBasics: {
        title: "RAM Basics",
        intro: "Random Access Memory (RAM) is your computer's temporary workspace. It stores data that the CPU needs right now, making your computer fast and responsive.",
        images: {
          hero: {
            fileName: "module-media/m2-ram-hero.jpg",
            alt: "RAM as temporary workspace, connecting CPU and storage",
            brief: "Create a visual showing RAM as the temporary workspace: RAM sticks in center with data flowing from storage (slow) to RAM (fast) to CPU. Show the concept of active data storage. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m2-ram-overview.jpg",
            alt: "RAM stick (DDR4/DDR5) with labels showing key parts and specifications",
            brief: "Show a modern RAM stick (DDR4 or DDR5) from side view with visible chips, connectors, and labels. Include subtle labels: 'Memory Chips', 'Connector', 'Capacity'. Background: clean tech aesthetic with soft lighting."
          },
          speedComparison: {
            fileName: "module-media/m2-ram-speed-comparison.jpg",
            alt: "Visual comparison showing Low RAM vs High RAM performance",
            brief: "Create a visual comparison: left shows low RAM (4GB) with slow performance indicators, right shows high RAM (16GB) with fast performance indicators. Show apps running smoothly vs lagging. Clean, educational style."
          },
          usagePatterns: {
            fileName: "module-media/m2-ram-usage-patterns.jpg",
            alt: "Diagram showing RAM being filled with apps, system processes, cached data, and temporary files",
            brief: "Create a diagram showing RAM usage: show RAM bar/chart being filled with different colored sections representing active programs, system processes, cached data, and temporary files. Use clear visual separation. Style: educational diagram."
          },
          inAction: {
            fileName: "module-media/m2-ram-in-action.jpg",
            alt: "Visualization of data flowing in/out of RAM with CPU accessing it",
            brief: "Show a stylized visualization of RAM processing: data streams flowing into RAM from storage, CPU accessing RAM quickly, results flowing out. Use modern tech aesthetic with gradient colors. Show speed and efficiency."
          }
        },
        speedExamples: [
          { name: "Speed", icon: "⚡", description: "Faster RAM = faster data access for CPU" },
          { name: "Capacity", icon: "📦", description: "More RAM = more apps running simultaneously" },
          { name: "Multitasking", icon: "🔄", description: "More RAM = smoother multitasking experience" },
          { name: "Swapping", icon: "💾", description: "Less RAM = slower (uses hard drive swap)" }
        ]
      },
      romBasics: {
        title: "ROM Basics",
        intro: "Read-Only Memory (ROM) stores permanent instructions that your computer needs to start up. Unlike RAM, ROM keeps its data even when the power is off.",
        images: {
          hero: {
            fileName: "module-media/m2-rom-hero.jpg",
            alt: "ROM chip showing permanent storage and boot instructions",
            brief: "Create a visual showing ROM as permanent storage: ROM chip in center with boot instructions flowing from it, connecting to computer startup process. Show the concept of non-volatile memory. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m2-rom-overview.jpg",
            alt: "ROM chip (BIOS/UEFI) with labels showing key parts and boot instructions",
            brief: "Show a ROM chip (BIOS/UEFI chip) with visible components and labels. Include subtle labels: 'Boot Instructions', 'Firmware', 'Non-Volatile'. Background: clean tech aesthetic with soft lighting."
          },
          bootProcess: {
            fileName: "module-media/m2-rom-boot-process.jpg",
            alt: "Boot process diagram showing Power On → ROM → BIOS/UEFI → OS Loading",
            brief: "Create a boot process diagram: show sequence from power button press → ROM chip → BIOS/UEFI screen → OS loading. Use arrows and progression indicators. Clean, educational diagram style."
          },
          nonVolatile: {
            fileName: "module-media/m2-rom-non-volatile.jpg",
            alt: "Comparison diagram showing ROM vs RAM characteristics",
            brief: "Create a comparison diagram: left shows ROM (permanent, non-volatile, boot instructions) with 'Keeps data when off' indicator, right shows RAM (temporary, volatile, active data) with 'Clears when off' indicator. Use clear visual separation. Style: educational diagram."
          },
          inAction: {
            fileName: "module-media/m2-rom-in-action.jpg",
            alt: "Computer boot sequence visualization showing ROM's role",
            brief: "Show a stylized visualization of computer boot sequence: power button → ROM providing instructions → BIOS/UEFI screen appearing → OS loading. Use modern tech aesthetic with gradient colors. Show the startup process."
          }
        },
        purposeExamples: [
          { name: "Boot Instructions", icon: "🚀", description: "First code computer reads when starting" },
          { name: "Permanent Storage", icon: "💿", description: "Data never changes, always available" },
          { name: "Non-Volatile", icon: "🔒", description: "Keeps data when power is turned off" },
          { name: "System Setup", icon: "⚙️", description: "BIOS/UEFI settings and configuration" }
        ]
      },
      storageConcepts: {
        title: "Storage Concepts",
        intro: "Understanding the difference between volatile and non-volatile storage helps you make informed decisions about data management and device selection.",
        images: {
          hero: {
            fileName: "module-media/m2-storage-hero.jpg",
            alt: "Storage hierarchy showing RAM, cache, SSD, and HDD",
            brief: "Create a visual hierarchy showing different storage types: RAM at top (fastest, volatile), cache, SSD (fast, non-volatile), HDD (slower, non-volatile). Show speed and capacity differences. Use a modern tech aesthetic with gradients."
          },
          hierarchy: {
            fileName: "module-media/m2-storage-hierarchy.jpg",
            alt: "Storage hierarchy diagram showing RAM → Cache → SSD → HDD",
            brief: "Create a storage hierarchy diagram: vertical or horizontal flow showing RAM (fastest, smallest) → Cache → SSD → HDD (slowest, largest). Include speed indicators and capacity labels. Clean educational diagram style."
          },
          workflow: {
            fileName: "module-media/m2-storage-workflow.jpg",
            alt: "Data flow diagram showing CPU → RAM → Storage → Files",
            brief: "Create a data flow diagram: show how data moves from CPU → RAM (active processing) → Storage (saved files). Include arrows and labels. Show the complete data lifecycle. Modern tech diagram style."
          },
          decision: {
            fileName: "module-media/m2-storage-decision.jpg",
            alt: "Storage decision tree diagram for choosing storage types",
            brief: "Create a decision tree diagram: show when to use different storage types based on needs (speed, capacity, cost). Include decision points and recommendations. Clean, educational flowchart style."
          }
        },
        storageTypes: [
          { name: "Volatile", icon: "⚡", description: "Temporary, fast, clears on power off", examples: "RAM, Cache" },
          { name: "Non-Volatile", icon: "💾", description: "Permanent, persistent, keeps data", examples: "HDD, SSD" },
          { name: "Hybrid", icon: "🔄", description: "Combines both for optimal performance", examples: "Hybrid drives" }
        ],
        storagePurposes: [
          "Operating System Storage - Fast, reliable storage for system files and boot process",
          "Application Storage - Where your programs and apps are installed",
          "File & Document Storage - Your photos, videos, documents, and personal files",
          "Backup & Archive Storage - Long-term storage for backups and rarely accessed data",
          "Temporary & Cache Storage - Fast access for active processes and temporary data"
        ]
      },
      hddBasics: {
        title: "HDD - Hard Disk Drive",
        intro: "Hard Disk Drives use spinning magnetic platters to store data. They offer large capacity at affordable prices, making them ideal for bulk storage.",
        images: {
          hero: {
            fileName: "module-media/m2-hdd-hero.jpg",
            alt: "HDD showing external view with labels and ports",
            brief: "Create a visual of a 3.5\" HDD: show the external view with labels, SATA ports, and power connector. Include capacity indicators. Use a clean tech aesthetic with soft lighting."
          },
          external: {
            fileName: "module-media/m2-hdd-external.jpg",
            alt: "HDD external view showing 3.5\" drive with labels and ports",
            brief: "Show a 3.5\" HDD from the outside: visible labels, SATA data port, power connector. Include subtle labels for key parts. Background: clean tech aesthetic."
          },
          internal: {
            fileName: "module-media/m2-hdd-internal.jpg",
            alt: "HDD cross-section diagram showing platters, read/write heads, actuator arm, spindle, and motor",
            brief: "Create a cross-section diagram of HDD internals: show platters (magnetic disks), read/write heads, actuator arm, spindle (rotation axis), and motor. Include labels and annotations. Educational diagram style."
          },
          useCases: {
            fileName: "module-media/m2-hdd-use-cases.jpg",
            alt: "HDD use cases showing desktop computers, servers, external backup drives, NAS, and gaming consoles",
            brief: "Show HDDs in different applications: desktop computer, server rack, external backup drive, NAS device, gaming console. Arrange them in a flowing layout. Background: tech gradient."
          }
        },
        advantages: [
          "Large Capacity - Up to 20TB+ available",
          "Affordable - Cost per GB is very low",
          "Proven Technology - Reliable for decades",
          "Good for Archives - Long-term storage solution"
        ],
        disadvantages: [
          "Slower than SSD - Mechanical parts limit speed",
          "Moving Parts - More wear and potential failure",
          "More Fragile - Sensitive to movement and shocks",
          "Higher Power Usage - Motor requires more energy",
          "Noise and Vibration - Spinning platters create sound",
          "Slower Boot Times - Takes longer to start up",
          "Not Ideal for Laptops - Movement can damage drives"
        ],
        useCases: [
          "Desktop Computers - Primary storage for many desktops",
          "Servers & Data Centers - Bulk storage for servers",
          "External Backup Drives - Portable backup solutions",
          "Network Attached Storage (NAS) - Shared storage for networks",
          "Gaming Consoles - Storage for games and media"
        ]
      },
      ssdBasics: {
        title: "SSD & NVMe",
        intro: "Solid State Drives (SSD) use flash memory chips instead of spinning disks. They're faster, quieter, and more reliable than HDDs, making them ideal for modern computing.",
        images: {
          hero: {
            fileName: "module-media/m2-ssd-hero.jpg",
            alt: "SSD overview showing 2.5\" SATA SSD and M.2 NVMe SSD",
            brief: "Create a visual showing both SSD types: 2.5\" SATA SSD and M.2 NVMe SSD side by side. Show the compact form factors and connection types. Use a modern tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-ssd-overview.jpg",
            alt: "SSD external view showing 2.5\" SATA SSD and M.2 NVMe SSD",
            brief: "Show both SSD types from external view: 2.5\" SATA SSD with visible SATA connector, and M.2 NVMe SSD showing the compact form factor. Include labels. Background: clean tech aesthetic."
          },
          speedComparison: {
            fileName: "module-media/m2-ssd-speed-comparison.jpg",
            alt: "Speed comparison chart showing SSD vs HDD performance",
            brief: "Create a speed comparison chart: bar chart showing SSD vs HDD speeds for boot time, file read, and access time. Include visual indicators. Clean, educational diagram style."
          },
          nvme: {
            fileName: "module-media/m2-ssd-nvme.jpg",
            alt: "NVMe SSD diagram showing M.2 form factor and PCIe connection",
            brief: "Create an NVMe SSD diagram: show M.2 form factor, PCIe connection, and how it bypasses SATA. Include labels for key parts. Modern tech diagram style."
          },
          longevity: {
            fileName: "module-media/m2-ssd-longevity.jpg",
            alt: "SSD wear leveling diagram showing data distribution",
            brief: "Create a wear leveling diagram: show how data is distributed across memory cells to extend lifespan. Include visual representation of wear leveling process. Educational diagram style."
          },
          decision: {
            fileName: "module-media/m2-ssd-decision.jpg",
            alt: "Decision diagram showing when to use SSD vs HDD",
            brief: "Create a decision diagram: show when to use SSD vs HDD based on needs (speed, capacity, cost). Include decision points and recommendations. Clean flowchart style."
          }
        },
        advantages: [
          { name: "Fast", icon: "⚡", description: "Boot in 10-15 sec, 500+ MB/s read speed" },
          { name: "Quiet", icon: "🔇", description: "No moving parts = silent operation" },
          { name: "Durable", icon: "💪", description: "Shock resistant, long lifespan" },
          { name: "Value", icon: "💰", description: "Price per GB dropping, great value" }
        ],
        speedDetails: [
          "Boot Time: 10-15 sec (SSD) vs 30-60 sec (HDD)",
          "File Read: 500+ MB/s (SSD) vs 100-150 MB/s (HDD)",
          "No mechanical delay - Instant access",
          "Perfect for operating systems and frequently used apps"
        ],
        nvmeDetails: {
          sata: "SATA SSD: ~550 MB/s",
          nvme: "NVMe SSD: 3,000+ MB/s"
        }
      },
      motherboardBasics: {
        title: "Motherboard",
        intro: "The motherboard is the foundation that connects all components together. It provides power, data pathways, and communication between CPU, RAM, storage, and other hardware.",
        images: {
          hero: {
            fileName: "module-media/m2-motherboard-hero.jpg",
            alt: "Motherboard overview showing all key components and connections",
            brief: "Create a visual showing motherboard as the foundation: motherboard in center with all components (CPU, RAM, GPU, SSD) connected. Show the central role. Use a tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-motherboard-overview.jpg",
            alt: "Motherboard annotated with key components labeled",
            brief: "Show a motherboard with visible components and labels: CPU socket, RAM slots, PCIe slots, power connectors, SATA ports, I/O ports. Include clear annotations. Background: clean tech aesthetic."
          },
          cpuSocket: {
            fileName: "module-media/m2-motherboard-cpu-socket.jpg",
            alt: "CPU socket close-up showing LGA/AM4/PGA style with pins and lock mechanism",
            brief: "Show CPU socket close-up: visible pins, lock mechanism, socket type labels (LGA/AM4/PGA). Include annotations for key parts. Educational diagram style."
          },
          ramPower: {
            fileName: "module-media/m2-motherboard-ram-power.jpg",
            alt: "RAM slots and power connectors close-up",
            brief: "Show RAM slots and power connectors: visible RAM slots with clips, 24-pin main power connector, 8-pin CPU power connector. Include labels. Clean tech diagram style."
          },
          ports: {
            fileName: "module-media/m2-motherboard-ports.jpg",
            alt: "Motherboard ports overview showing USB, HDMI, Ethernet, Audio, WiFi antenna",
            brief: "Show motherboard I/O ports: USB ports, HDMI/DisplayPort, Ethernet port, audio jacks, WiFi antenna connectors. Include labels for each port type. Clean layout."
          }
        },
        keyComponents: [
          { name: "CPU Socket", icon: "🔌", description: "Where CPU connects" },
          { name: "RAM Slots", icon: "💾", description: "Memory module slots" },
          { name: "Power Connectors", icon: "⚡", description: "24-pin & 8-pin power" },
          { name: "Ports", icon: "🔌", description: "USB, HDMI, Ethernet" }
        ],
        cpuSocketDetails: [
          "Different sockets for different CPU brands",
          "Must match CPU type",
          "Secured with lever mechanism"
        ],
        ramPowerDetails: {
          ram: [
            "Usually 2-4 slots",
            "DDR4/DDR5 compatible",
            "Dual channel support"
          ],
          power: [
            "24-pin main power connector",
            "8-pin CPU power connector",
            "SATA power for drives"
          ]
        }
      },
      portsBasics: {
        title: "Ports & Connectors",
        intro: "Ports are connection points that allow devices to communicate with your computer. Understanding different port types helps you connect devices correctly and troubleshoot connection issues.",
        images: {
          hero: {
            fileName: "module-media/m2-ports-hero.jpg",
            alt: "Ports overview showing various connection ports on motherboard and device",
            brief: "Create a visual showing ports as connection points: motherboard/device with various ports (USB, HDMI, Ethernet, Audio) visible and labeled. Show the concept of device connectivity. Use a tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-ports-overview.jpg",
            alt: "Ports overview showing USB, HDMI, Ethernet, and Audio ports on motherboard/device",
            brief: "Show various ports on a motherboard or device: USB ports, HDMI port, Ethernet port, audio jacks. Include clear labels for each port type. Background: clean tech aesthetic."
          },
          usbTypes: {
            fileName: "module-media/m2-ports-usb-types.jpg",
            alt: "USB types comparison showing USB-A, USB-B, USB-C, and Micro-USB side by side",
            brief: "Create a comparison image: show USB-A (rectangular), USB-C (reversible), Micro-USB (small), and USB-B (square) side by side with labels. Include size and use case indicators. Clean educational style."
          },
          hdmiEthernet: {
            fileName: "module-media/m2-ports-hdmi-ethernet.jpg",
            alt: "HDMI and Ethernet ports close-up showing connectors",
            brief: "Show HDMI port and Ethernet port close-up: visible connectors, labels for each port type. Include connection examples. Clean tech diagram style."
          },
          audio: {
            fileName: "module-media/m2-ports-audio.jpg",
            alt: "Audio ports overview showing 3.5mm jacks, USB audio, and optical audio",
            brief: "Show audio ports: 3.5mm headphone/microphone jacks, USB audio port, optical audio port. Include labels and use cases. Clean layout."
          },
          selection: {
            fileName: "module-media/m2-ports-selection.jpg",
            alt: "Port selection guide showing which port to use for different devices",
            brief: "Create a selection guide diagram: show which port to use for different devices (monitor → HDMI, internet → Ethernet, etc.). Include decision flow. Educational flowchart style."
          }
        },
        portTypes: [
          { name: "USB", icon: "🔌", description: "Universal connection" },
          { name: "HDMI", icon: "🖥️", description: "Video output" },
          { name: "Ethernet", icon: "🌐", description: "Network connection" },
          { name: "Audio", icon: "🎧", description: "Sound input/output" }
        ],
        usbTypes: [
          { name: "USB-A", description: "Traditional rectangular connector", use: "Most common, used for keyboards, mice, flash drives" },
          { name: "USB-C", description: "Reversible modern connector", use: "Latest standard, used for phones, laptops, fast charging" },
          { name: "Micro-USB", description: "Small mobile connector", use: "Older phones, small devices" },
          { name: "USB-B", description: "Square connector", use: "Printers, scanners, some external drives" }
        ],
        hdmiDetails: [
          "Transmits video and audio",
          "Used for monitors, TVs, projectors",
          "Supports 4K and higher resolutions",
          "Single cable for both video and sound"
        ],
        ethernetDetails: [
          "Wired network connection",
          "Faster and more stable than WiFi",
          "RJ-45 connector",
          "Used for internet access and local networks"
        ]
      },
      gpuBasics: {
        title: "GPU Basics",
        intro: "Graphics Processing Unit (GPU) handles visual rendering, gaming graphics, video editing, and complex calculations. It's specialized for parallel processing of graphics data.",
        images: {
          hero: {
            fileName: "module-media/m2-gpu-hero.jpg",
            alt: "GPU overview showing graphics card with fans, connectors, and ports",
            brief: "Create a visual showing GPU as graphics powerhouse: GPU card in center with fans visible, PCIe connector, display ports. Show the concept of visual processing. Use a tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-gpu-overview.jpg",
            alt: "GPU card showing fans, connectors, ports, and key components",
            brief: "Show a GPU card from external view: visible fans, PCIe connector, display ports (HDMI, DisplayPort), power connectors. Include labels for key parts. Background: clean tech aesthetic."
          },
          comparison: {
            fileName: "module-media/m2-gpu-comparison.jpg",
            alt: "Comparison showing integrated GPU in CPU vs dedicated GPU card",
            brief: "Create a comparison diagram: left shows integrated GPU (CPU with graphics built-in), right shows dedicated GPU (separate card with own RAM). Include labels and differences. Educational diagram style."
          },
          architecture: {
            fileName: "module-media/m2-gpu-architecture.jpg",
            alt: "GPU architecture diagram showing CUDA cores, memory bus, and VRAM",
            brief: "Create a GPU architecture diagram: show CUDA cores/stream processors, memory bus, VRAM, and how they work together. Include labels and flow. Modern tech diagram style."
          }
        },
        integratedDetails: [
          "Built into CPU",
          "Shares system RAM",
          "Good for basic tasks",
          "Lower power consumption",
          "Sufficient for office work and web browsing"
        ],
        dedicatedDetails: [
          "Separate card",
          "Own dedicated memory (VRAM)",
          "Better for gaming and video editing",
          "Higher performance",
          "Required for 3D rendering and AI/ML"
        ],
        architectureDetails: [
          "Thousands of cores optimized for parallel processing",
          "Dedicated VRAM - high-speed memory",
          "Specialized for graphics rendering",
          "Can process multiple tasks simultaneously"
        ],
        applications: [
          { name: "Gaming", icon: "🎮", description: "High FPS, smooth graphics" },
          { name: "Video Editing", icon: "🎬", description: "Rendering, effects processing" },
          { name: "Design", icon: "🖼️", description: "3D modeling, CAD, graphics" },
          { name: "AI/ML", icon: "🧪", description: "Machine learning training" },
          { name: "Mining", icon: "💻", description: "Cryptocurrency mining" },
          { name: "Data Science", icon: "📊", description: "Analytics, processing" }
        ]
      },
      aluBasics: {
        title: "ALU - Arithmetic Logic Unit",
        intro: "The Arithmetic Logic Unit (ALU) is the part of the CPU that performs all mathematical calculations and logical decisions. It's the computational heart of the processor.",
        images: {
          hero: {
            fileName: "module-media/m2-alu-hero.jpg",
            alt: "ALU overview showing arithmetic and logic operations",
            brief: "Create a visual showing ALU as computational heart: ALU in center with arithmetic operations (add, subtract, multiply, divide) and logic operations (AND, OR, NOT) flowing from it. Use a tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-alu-overview.jpg",
            alt: "ALU diagram showing arithmetic and logic sections",
            brief: "Show ALU diagram: visible arithmetic section and logic section, with labels for key parts. Include visual separation between arithmetic and logic functions. Background: clean tech aesthetic."
          },
          arithmetic: {
            fileName: "module-media/m2-alu-arithmetic.jpg",
            alt: "Arithmetic operations diagram showing addition, subtraction, multiplication, division",
            brief: "Create an arithmetic operations diagram: show addition, subtraction, multiplication, and division operations with visual examples. Include operation symbols and examples. Clean educational style."
          },
          logic: {
            fileName: "module-media/m2-alu-logic.jpg",
            alt: "Logic operations diagram showing AND, OR, NOT, and comparison operations",
            brief: "Create a logic operations diagram: show AND, OR, NOT gates and comparison operations (equal, not equal, greater than, less than). Include truth tables or examples. Educational diagram style."
          },
          inAction: {
            fileName: "module-media/m2-alu-in-action.jpg",
            alt: "ALU processing flow diagram showing how ALU processes data",
            brief: "Create an ALU processing flow diagram: show how data flows through ALU, arithmetic operations, logic operations, and results. Include flow arrows and labels. Modern tech diagram style."
          },
          role: {
            fileName: "module-media/m2-alu-role.jpg",
            alt: "ALU role diagram showing ALU in CPU context",
            brief: "Create an ALU role diagram: show ALU's position within CPU, how it connects to other CPU components (CU, registers). Include context of ALU's role. Clean tech diagram style."
          }
        },
        arithmeticOperations: [
          { name: "Add", icon: "➕", description: "Combines numbers" },
          { name: "Subtract", icon: "➖", description: "Finds difference" },
          { name: "Multiply", icon: "✖️", description: "Repeats addition" },
          { name: "Divide", icon: "➗", description: "Splits into parts" }
        ],
        logicOperations: [
          "AND - Both conditions must be true",
          "OR - Either condition can be true",
          "NOT - Inverts the condition",
          "Compare - Checks if values are equal or not"
        ]
      },
      cuBasics: {
        title: "CU - Control Unit",
        intro: "The Control Unit (CU) directs all parts of the computer on what to do. It ensures instructions are followed in the correct order and coordinates all CPU operations.",
        images: {
          hero: {
            fileName: "module-media/m2-cu-hero.jpg",
            alt: "Control Unit overview showing coordination of CPU operations",
            brief: "Create a visual showing CU as director: Control Unit in center coordinating CPU operations, with instructions flowing to ALU, registers, and other components. Use a tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-cu-overview.jpg",
            alt: "Control Unit diagram showing coordination of CPU operations",
            brief: "Show Control Unit diagram: visible coordination of CPU components, instruction flow, control signals. Include labels for key functions. Background: clean tech aesthetic."
          },
          controlFlow: {
            fileName: "module-media/m2-cu-control-flow.jpg",
            alt: "Control flow diagram showing Fetch → Decode → Execute → Store sequence",
            brief: "Create a control flow diagram: show instruction cycle sequence (Fetch → Decode → Execute → Store) with arrows and control signals. Include labels for each step. Educational diagram style."
          },
          instructionCycle: {
            fileName: "module-media/m2-cu-instruction-cycle.jpg",
            alt: "Instruction cycle diagram showing detailed steps of CPU instruction processing",
            brief: "Create an instruction cycle diagram: show detailed steps of instruction processing with cycle flow, timing, and control signals. Include visual representation of each cycle stage. Modern tech diagram style."
          }
        },
        controlFlowSteps: [
          "Fetches instructions from memory",
          "Decodes what operation to perform",
          "Executes the operation",
          "Stores results back to memory"
        ],
        instructionCycleSteps: [
          "1. Fetch Instruction - Gets instruction from memory",
          "2. Decode Instruction - Understands what to do",
          "3. Execute Operation - Performs the task",
          "4. Store Result - Saves the result"
        ],
        coordinationFunctions: [
          { name: "Fetch", icon: "🎯", description: "Gets instruction" },
          { name: "Decode", icon: "🔍", description: "Understands what to do" },
          { name: "Execute", icon: "⚙️", description: "Performs the task" },
          { name: "Store", icon: "💾", description: "Saves result" },
          { name: "Coordinate", icon: "🔄", description: "Manages all parts" },
          { name: "Timing", icon: "⏱️", description: "Controls timing" }
        ]
      },
      firmwareBasics: {
        title: "Firmware",
        intro: "Firmware is low-level software stored in hardware that controls how devices function. It acts as the bridge between hardware and software, providing essential instructions for device operation.",
        images: {
          hero: {
            fileName: "module-media/m2-firmware-hero.jpg",
            alt: "Firmware overview showing BIOS/UEFI, router firmware, and device firmware",
            brief: "Create a visual showing firmware as bridge: firmware layer between hardware and software, with BIOS/UEFI, router firmware, and device firmware visible. Use a tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m2-firmware-overview.jpg",
            alt: "Firmware overview showing BIOS/UEFI chip, router firmware, and device firmware",
            brief: "Show firmware overview: BIOS/UEFI chip, router firmware interface, device firmware examples. Include labels for each type. Background: clean tech aesthetic."
          },
          biosUefi: {
            fileName: "module-media/m2-firmware-bios-uefi.jpg",
            alt: "BIOS/UEFI interface screen showing system configuration",
            brief: "Show BIOS/UEFI interface: setup screen with visible configuration options, boot settings, hardware settings. Include labels for key sections. Clean tech interface style."
          },
          routerDevice: {
            fileName: "module-media/m2-firmware-router-device.jpg",
            alt: "Router firmware and device firmware examples",
            brief: "Show router firmware UI and device firmware examples: router configuration interface, device firmware update screens. Include labels. Clean layout."
          },
          layers: {
            fileName: "module-media/m2-firmware-layers.jpg",
            alt: "Firmware layers diagram showing firmware between hardware and OS",
            brief: "Create a firmware layers diagram: show hardware → firmware → operating system → applications stack. Include labels and arrows showing interaction. Educational diagram style."
          },
          update: {
            fileName: "module-media/m2-firmware-update.jpg",
            alt: "Firmware update diagram showing when and how to update firmware",
            brief: "Create a firmware update diagram: show when to update firmware, update process flow, and safety considerations. Include decision points. Clean flowchart style."
          }
        },
        firmwareTypes: [
          { name: "BIOS/UEFI", icon: "💻", description: "Computer startup" },
          { name: "Router", icon: "📡", description: "Network settings" },
          { name: "Device", icon: "🔌", description: "Hardware control" }
        ],
        biosUefiDetails: [
          "Initializes hardware on boot",
          "Provides system configuration",
          "Loads the operating system"
        ],
        routerFirmwareDetails: [
          "Controls router settings and functionality",
          "Manages network configuration",
          "Handles security and updates"
        ],
        deviceFirmwareDetails: [
          "Embedded in devices",
          "Controls basic functions",
          "Enables hardware-software communication"
        ]
      },
      // Keep old section1 for backward compatibility with Part 1
      section1: {
        title: "CPU – Central Processing Unit",
        text: "The CPU controls all activities in the computer and processes every instruction. It has three main parts: ALU, CU, and Registers.",
        video: {
          title: "How CPU Works",
          description: "Understanding ALU, CU, Registers, and Clock Speed",
          embedUrl: null // Video will be added later
        },
        cpuImage: "cpu-diagram.jpg",
        parts: [
          {
            title: "ALU – Arithmetic Logic Unit",
            description: "The ALU performs all mathematical operations like addition and subtraction. It also performs logical decisions like comparing numbers.",
            points: [
              "Handles all calculations and mathematical operations",
              "Makes logical comparisons and decisions"
            ]
          },
          {
            title: "CU – Control Unit",
            description: "The Control Unit directs all parts of the computer on what to do. It ensures instructions are followed in the correct order.",
            points: [
              "Coordinates all computer operations",
              "Manages instruction execution sequence"
            ]
          },
          {
            title: "Registers",
            description: "Registers are very small and very fast memory locations inside the CPU. They temporarily store data needed for current tasks.",
            points: [
              "Fastest type of memory in the computer",
              "Stores data being actively processed"
            ]
          },
          {
            title: "Clock Speed",
            description: "Clock speed tells how fast the CPU can execute instructions, measured in GHz (Gigahertz). A higher clock speed means the computer works faster.",
            points: [
              "Measured in GHz (billions of cycles per second)",
              "Determines overall system performance"
            ]
          }
        ]
      },
      section2: {
        title: "Memory Types",
        text: "Memory hierarchy from fastest to slowest: Registers, Cache, Primary Memory (RAM and ROM).",
        memoryTypes: [
          {
            id: "registers",
            label: "Registers (Fastest Memory)",
            description: "Registers hold data the CPU is currently working on. They are faster than RAM and cache but very small in size.",
            icon: "⚡"
          },
          {
            id: "cache",
            label: "Cache Memory",
            description: "Cache is small, high-speed memory inside or near the CPU. It stores frequently used data so the CPU can access it quickly.",
            icon: "💨"
          },
          {
            id: "primary",
            label: "Primary Memory (RAM & ROM)",
            description: "RAM stores data temporarily when the computer is on, while ROM stores permanent startup instructions.",
            icon: "💾"
          }
        ],
        memoryImage: "memory-hierarchy.jpg"
      },
      section3: {
        title: "Secondary Storage Devices",
        text: "Secondary storage keeps data safe even when the computer is turned off.",
        devices: [
          "Hard Disk Drives (HDD)",
          "Solid State Drives (SSD)",
          "CDs, DVDs, Blu-ray discs",
          "Pen drives",
          "Memory cards"
        ],
        storageImage: "storage-devices.jpg"
      },
      section4: {
        title: "Input Devices",
        text: "Input devices allow users to enter data into the computer.",
        devices: [
          "Keyboard",
          "Mouse",
          "Scanner",
          "Microphone",
          "Webcam",
          "Joystick"
        ],
        inputImage: "input-devices.jpg"
      },
      section5: {
        title: "Output Devices",
        text: "Output devices show the results after the computer processes information.",
        devices: [
          "Monitors",
          "Printers",
          "Speakers",
          "Headphones",
          "Projectors"
        ],
        outputImage: "output-devices.jpg"
      },
      section6: {
        title: "Peripheral Devices",
        text: "Peripheral devices are additional tools connected to the computer to increase its functions.",
        devices: [
          {
            name: "USB accessories",
            description: "USB accessories like flash drives, keyboards, and mice connect easily to expand computer functionality."
          },
          {
            name: "External hard drives",
            description: "External hard drives offer portable storage for backing up important files and expanding storage capacity."
          },
          {
            name: "Bluetooth devices",
            description: "Bluetooth devices enable wireless connections for headphones, speakers, keyboards, and mice without cables."
          }
        ]
      },
      section7: {
        title: "Ports and Connectors",
        text: "Ports allow devices to connect to the computer using cables.",
        ports: [
          "USB (Type A, B, C)",
          "HDMI",
          "VGA",
          "Ethernet",
          "Audio ports"
        ],
        portsImage: "ports-connectors.jpg"
      },
      section8: {
        title: "CPU vs GPU",
        text: "Understanding the differences between CPU and GPU and their use cases.",
        video: {
          title: "CPU vs GPU Comparison",
          description: "Learn the differences and use cases",
          embedUrl: null // Video will be added later
        },
        cpu: {
          title: "CPU – Central Processing Unit",
          description: "A CPU is designed to run general tasks like apps, browsing, and system operations. It works with a few powerful cores that complete tasks one after another."
        },
        gpu: {
          title: "GPU – Graphics Processing Unit",
          description: "A GPU is designed to handle many small tasks at the same time. It is best for graphics, gaming, video editing, and Artificial Intelligence (AI) processing."
        },
        comparisonImage: "cpu-vs-gpu.jpg"
      },
      section9: {
        title: "Input and Output",
        text: "Input devices send information into the computer for processing. Output devices show the final result after the computer finishes the task.",
        video: {
          title: "How Input and Output Work Together",
          description: "Complete flow from input to output",
          embedUrl: null // Video will be added later
        },
        flowImage: "input-output-flow.jpg"
      }
    };
  };

  // Get image URL helper - works with Vite's asset handling
  const getImageUrl = (imageName: string) => {
    if (!imageName) return "";
    if (imageName.startsWith("module-media/")) {
      return `/src/assets/${imageName}`;
    }
    return `/src/assets/module-media/${imageName}`;
  };

  // Redirect Module 2 to Topic 1 if no topic specified (topic-based navigation)
  useEffect(() => {
    if (moduleId === 2 && !topicId && !partNumber && location.pathname === `/module/2`) {
      navigate("/module/2/topic/1", { replace: true });
    }
  }, [moduleId, topicId, partNumber, navigate, location.pathname]);

  // Module 3 specific content sections (Topic-based structure)
  const getModule3Sections = () => {
    return {
      bootProcess: {
        title: "Boot Process",
        intro: "The boot process is the sequence of steps your computer follows when you press the power button. Understanding this process helps you troubleshoot startup issues and appreciate how your computer initializes.",
        images: {
          hero: {
            fileName: "module-media/m3-boot-hero.jpg",
            alt: "Computer booting up with startup sequence visualization",
            brief: "Create a visual showing a computer booting: power button press, BIOS/UEFI screen, OS loading screen. Show the progression from off to ready. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m3-boot-overview.jpg",
            alt: "Boot process flow diagram showing the three main steps",
            brief: "Create a flow diagram showing: Power On → POST → Loading OS. Use arrows and clear progression. Clean, educational diagram style."
          },
          steps: {
            fileName: "module-media/m3-boot-steps.jpg",
            alt: "Visual representation of the three boot steps with icons",
            brief: "Show three cards/sections: Step 1 (Power On with power button icon), Step 2 (POST with checkmark icon), Step 3 (Loading OS with loading icon). Use clear visual separation."
          },
          whyMatters: {
            fileName: "module-media/m3-boot-why-matters.jpg",
            alt: "Computer ready to use after successful boot",
            brief: "Show a computer ready to use after boot: desktop screen visible, apps ready. Show the end result of successful boot process. Clean, modern aesthetic."
          }
        },
        steps: [
          { 
            name: "Power On", 
            icon: "🔌", 
            description: "When you press the power button, electricity flows to all components and the computer begins initializing." 
          },
          { 
            name: "POST", 
            icon: "✅", 
            description: "Power-On Self-Test checks all hardware components to ensure everything is working correctly before loading the operating system." 
          },
          { 
            name: "Loading OS", 
            icon: "🚀", 
            description: "The bootloader finds and loads the operating system from storage into RAM, then starts system services." 
          }
        ]
      },
      operatingSystems: {
        title: "Operating Systems",
        intro: "An operating system (OS) is the most important software on your computer. It manages hardware resources, provides a user interface, and allows applications to run.",
        images: {
          hero: {
            fileName: "module-media/m3-os-hero.jpg",
            alt: "Different operating systems logos and interfaces",
            brief: "Create a visual showing different OS logos: Windows, macOS, Linux, Android, iOS arranged in a modern layout. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m3-os-overview.jpg",
            alt: "Operating system architecture diagram showing how OS manages hardware",
            brief: "Create a diagram showing OS as a layer between hardware and applications. Show OS managing CPU, RAM, storage, and providing interface. Clean, educational style."
          },
          desktopComparison: {
            fileName: "module-media/m3-os-desktop-comparison.jpg",
            alt: "Windows, macOS, and Linux desktop interfaces comparison",
            brief: "Show side-by-side comparison of Windows, macOS, and Linux desktop interfaces. Include their logos and key visual differences. Clean, educational style."
          },
          windows: {
            fileName: "module-media/m3-os-windows.jpg",
            alt: "Windows operating system interface and features",
            brief: "Show Windows OS interface with Start menu, taskbar, and desktop. Include Windows logo. Modern, clean aesthetic."
          },
          macos: {
            fileName: "module-media/m3-os-macos.jpg",
            alt: "macOS operating system interface and features",
            brief: "Show macOS interface with Dock, menu bar, and desktop. Include Apple logo. Modern, clean aesthetic."
          },
          linux: {
            fileName: "module-media/m3-os-linux.jpg",
            alt: "Linux operating system interface and features",
            brief: "Show Linux desktop environment (like Ubuntu/GNOME) with its interface. Include Linux/Tux logo. Modern, clean aesthetic."
          },
          mobileComparison: {
            fileName: "module-media/m3-os-mobile-comparison.jpg",
            alt: "Android and iOS mobile interfaces comparison",
            brief: "Show side-by-side comparison of Android and iOS interfaces on phones. Include their logos. Clean, educational style."
          },
          android: {
            fileName: "module-media/m3-os-android.jpg",
            alt: "Android operating system interface and features",
            brief: "Show Android interface with home screen, app drawer, and key features. Include Android logo. Modern, clean aesthetic."
          },
          ios: {
            fileName: "module-media/m3-os-ios.jpg",
            alt: "iOS operating system interface and features",
            brief: "Show iOS interface with home screen, apps, and key features. Include Apple logo. Modern, clean aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-os-why-matters.jpg",
            alt: "Computer with different operating systems running smoothly",
            brief: "Show a computer running smoothly with OS managing everything. Show the importance of OS in daily computing. Clean, modern aesthetic."
          }
        },
        desktopOS: [
          {
            name: "Windows",
            logo: "🪟",
            description: "Most popular desktop OS, used on PCs worldwide. Known for compatibility and wide software support.",
            features: ["User-friendly interface", "Wide software compatibility", "Regular updates", "Gaming support"]
          },
          {
            name: "macOS",
            logo: "🍎",
            description: "Apple's operating system for Mac computers. Known for sleek design and seamless integration with Apple devices.",
            features: ["Sleek design", "Apple ecosystem integration", "Security focused", "Creative tools"]
          },
          {
            name: "Linux",
            logo: "🐧",
            description: "Open-source operating system. Free, customizable, and used by developers and servers worldwide.",
            features: ["Free and open-source", "Highly customizable", "Developer-friendly", "Server applications"]
          }
        ],
        mobileOS: [
          {
            name: "Android",
            logo: "🤖",
            description: "Google's mobile operating system. Most popular mobile OS, used on many smartphone brands.",
            features: ["Open-source", "Customizable", "Wide device support", "Google services integration"]
          },
          {
            name: "iOS",
            logo: "📱",
            description: "Apple's mobile operating system for iPhone and iPad. Known for security, simplicity, and app quality.",
            features: ["Secure and private", "Simple interface", "High-quality apps", "Apple ecosystem"]
          }
        ]
      },
      fileSystem: {
        title: "File System",
        intro: "A file system organizes and stores files on your computer. It uses folders (directories) to group related files together, making it easier to find and manage your data.",
        images: {
          hero: {
            fileName: "module-media/m3-filesystem-hero.jpg",
            alt: "File system structure showing folders and files",
            brief: "Create a visual showing a file system tree structure with folders and files. Show the hierarchical organization. Clean, modern aesthetic."
          },
          folders: {
            fileName: "module-media/m3-filesystem-folders.jpg",
            alt: "Folders and directories in a file system",
            brief: "Show a visual of folders/directories with icons. Show how they organize files. Clean, educational style."
          },
          paths: {
            fileName: "module-media/m3-filesystem-paths.jpg",
            alt: "File paths showing directory structure",
            brief: "Show file paths like C:/Users/Documents/File.txt. Show how paths work. Clean, educational diagram."
          },
          hidden: {
            fileName: "module-media/m3-filesystem-hidden.jpg",
            alt: "Hidden files in a file system",
            brief: "Show hidden files (with dot prefix or hidden attribute). Show how to view them. Clean, educational style."
          },
          inAction: {
            fileName: "module-media/m3-filesystem-in-action.jpg",
            alt: "File system in action",
            brief: "Show a file system being used: files being organized, folders being created, files being accessed. Show the file system working. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-filesystem-why-matters.jpg",
            alt: "Well-organized file system",
            brief: "Show a well-organized file system with properly named folders and files. Show the importance of organization. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            title: "Folders & Directories",
            description: "Folders (also called directories) are containers that hold files and other folders. They help organize your data into logical groups.",
            icon: "📁"
          },
          {
            title: "File Paths",
            description: "A file path shows the exact location of a file in the file system. It includes all folders from the root to the file.",
            icon: "📍"
          },
          {
            title: "Hidden Files",
            description: "Hidden files are files that are not normally visible. They often contain system settings and configuration data.",
            icon: "👁️"
          }
        ]
      },
      fileExtensions: {
        title: "File Extensions",
        intro: "File extensions are the letters after the dot in a filename (like .txt, .jpg, .mp4). They tell your computer what type of file it is and which program should open it.",
        images: {
          hero: {
            fileName: "module-media/m3-extensions-hero.jpg",
            alt: "Different file extensions and their icons",
            brief: "Create a visual showing different file types with their extensions: .txt, .jpg, .mp4, .exe, etc. Show icons for each type. Clean, modern layout."
          },
          text: {
            fileName: "module-media/m3-extensions-text.jpg",
            alt: "Text file extensions",
            brief: "Show text file extensions: .txt, .doc, .pdf. Show examples. Clean, educational style."
          },
          image: {
            fileName: "module-media/m3-extensions-image.jpg",
            alt: "Image file extensions",
            brief: "Show image file extensions: .jpg, .png, .gif. Show examples. Clean, educational style."
          },
          video: {
            fileName: "module-media/m3-extensions-video.jpg",
            alt: "Video file extensions",
            brief: "Show video file extensions: .mp4, .avi, .mov. Show examples. Clean, educational style."
          },
          executable: {
            fileName: "module-media/m3-extensions-executable.jpg",
            alt: "Executable file extensions",
            brief: "Show executable file extensions: .exe, .app, .sh. Show examples. Clean, educational style."
          },
          inAction: {
            fileName: "module-media/m3-extensions-in-action.jpg",
            alt: "File extensions in action",
            brief: "Show file extensions being used: different file types being opened with correct programs. Show how extensions work. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-extensions-why-matters.jpg",
            alt: "File extension importance",
            brief: "Show how file extensions help identify file types. Show the importance of correct extensions. Clean, modern aesthetic."
          }
        },
        types: [
          {
            category: "Text Files",
            extensions: [".txt", ".doc", ".pdf"],
            description: "Documents and text files",
            icon: "📄"
          },
          {
            category: "Image Files",
            extensions: [".jpg", ".png", ".gif"],
            description: "Photos and images",
            icon: "🖼️"
          },
          {
            category: "Video Files",
            extensions: [".mp4", ".avi", ".mov"],
            description: "Video recordings",
            icon: "🎬"
          },
          {
            category: "Executable Files",
            extensions: [".exe", ".app", ".sh"],
            description: "Programs and applications",
            icon: "⚙️"
          }
        ]
      },
      fileManagement: {
        title: "File Management",
        intro: "File management is how you organize, move, copy, and delete files on your computer. Good file management helps you find your files quickly and keeps your computer organized.",
        images: {
          hero: {
            fileName: "module-media/m3-management-hero.jpg",
            alt: "File management operations",
            brief: "Create a visual showing file management operations: create, copy, move, delete. Show icons and actions. Clean, modern aesthetic."
          },
          create: {
            fileName: "module-media/m3-management-create.jpg",
            alt: "Creating files and folders",
            brief: "Show how to create new files and folders. Show the process. Clean, educational style."
          },
          copyMove: {
            fileName: "module-media/m3-management-copy-move.jpg",
            alt: "Copying and moving files",
            brief: "Show copy and move operations. Show the difference. Clean, educational diagram."
          },
          delete: {
            fileName: "module-media/m3-management-delete.jpg",
            alt: "Deleting and restoring files",
            brief: "Show delete operation and restore from recycle bin/trash. Show the process. Clean, educational style."
          },
          organize: {
            fileName: "module-media/m3-management-organize.jpg",
            alt: "Organizing files into folders",
            brief: "Show how to organize files into folders. Show good organization practices. Clean, modern aesthetic."
          },
          inAction: {
            fileName: "module-media/m3-management-in-action.jpg",
            alt: "File management in action",
            brief: "Show file management operations: creating folders, copying files, organizing documents. Show file management working. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-management-why-matters.jpg",
            alt: "Well-organized file system",
            brief: "Show a well-organized computer with properly managed files. Show the benefits. Clean, modern aesthetic."
          }
        },
        operations: [
          {
            title: "Create, Copy, Move",
            description: "You can create new files and folders, copy them to make duplicates, or move them to different locations.",
            icon: "📋"
          },
          {
            title: "Delete & Restore",
            description: "Deleted files go to the Recycle Bin (Windows) or Trash (Mac). You can restore them if needed.",
            icon: "🗑️"
          },
          {
            title: "Organizing Files",
            description: "Group related files into folders with clear names. This makes it easier to find what you need.",
            icon: "📂"
          }
        ]
      },
      systemSpecifications: {
        title: "System Specifications",
        intro: "System specifications (specs) tell you what hardware and software your computer has. They help you understand your computer's capabilities and whether it can run certain programs.",
        images: {
          hero: {
            fileName: "module-media/m3-specs-hero.jpg",
            alt: "Computer system specifications",
            brief: "Create a visual showing system specifications: CPU, RAM, Storage, GPU, OS. Show a clean spec sheet layout. Modern, tech aesthetic."
          },
          cpuRamStorage: {
            fileName: "module-media/m3-specs-cpu-ram-storage.jpg",
            alt: "CPU, RAM, and Storage specifications",
            brief: "Show CPU, RAM, and Storage specs with icons and labels. Show how to read these specs. Clean, educational style."
          },
          gpu: {
            fileName: "module-media/m3-specs-gpu.jpg",
            alt: "GPU specifications",
            brief: "Show GPU specifications with details. Show integrated vs dedicated. Clean, educational style."
          },
          osVersion: {
            fileName: "module-media/m3-specs-os.jpg",
            alt: "Operating system version",
            brief: "Show OS version information. Show how to find OS version. Clean, educational style."
          },
          inAction: {
            fileName: "module-media/m3-specs-in-action.jpg",
            alt: "System specifications in action",
            brief: "Show system specs being used: checking specs, comparing systems, understanding performance. Show specs in use. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-specs-why-matters.jpg",
            alt: "Understanding system specifications",
            brief: "Show the importance of knowing your system specs. Show how specs affect performance. Clean, modern aesthetic."
          }
        },
        components: [
          {
            title: "CPU, RAM, Storage",
            description: "These are the core components that determine your computer's speed and storage capacity.",
            icon: "💻"
          },
          {
            title: "GPU",
            description: "The graphics processing unit handles visual tasks like gaming, video editing, and 3D rendering.",
            icon: "🎮"
          },
          {
            title: "OS Version",
            description: "The operating system version tells you which software features and updates are available.",
            icon: "🖥️"
          }
        ]
      },
      mobileComputer: {
        title: "Mobile = A Computer",
        intro: "Your smartphone or tablet is actually a computer! It has the same basic components as a desktop computer, just in a smaller, portable form.",
        images: {
          hero: {
            fileName: "module-media/m3-mobile-hero.jpg",
            alt: "Mobile device as a computer",
            brief: "Create a visual showing a smartphone/tablet with computer components labeled. Show it's a computer. Modern, tech aesthetic."
          },
          architecture: {
            fileName: "module-media/m3-mobile-architecture.jpg",
            alt: "Mobile device architecture",
            brief: "Show mobile device architecture diagram. Show CPU, RAM, storage, sensors. Clean, educational diagram."
          },
          cpuGpu: {
            fileName: "module-media/m3-mobile-cpu-gpu.jpg",
            alt: "Mobile CPU and GPU",
            brief: "Show mobile CPU and GPU. Show how they're different from desktop. Clean, educational style."
          },
          sensors: {
            fileName: "module-media/m3-mobile-sensors.jpg",
            alt: "Sensors in mobile devices",
            brief: "Show sensors in mobile devices: accelerometer, gyroscope, etc. Show how they work. Clean, educational style."
          },
          inAction: {
            fileName: "module-media/m3-mobile-in-action.jpg",
            alt: "Mobile device in action",
            brief: "Show mobile device working: apps running, CPU/GPU processing, sensors detecting. Show mobile as computer. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-mobile-why-matters.jpg",
            alt: "Understanding mobile as computer",
            brief: "Show the importance of understanding mobile devices as computers. Show their capabilities. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            title: "Mobile Architecture",
            description: "Mobile devices have the same basic architecture as computers: CPU, RAM, storage, and an operating system.",
            icon: "📱"
          },
          {
            title: "Mobile CPU/GPU",
            description: "Mobile processors are smaller and more power-efficient than desktop CPUs, but they work the same way.",
            icon: "⚡"
          },
          {
            title: "Sensors",
            description: "Mobile devices have special sensors like accelerometers and gyroscopes that desktop computers don't have.",
            icon: "📡"
          }
        ]
      },
      sensorsDevices: {
        title: "Sensors in Devices",
        intro: "Sensors are special components that detect changes in the environment. They help your device understand its position, movement, and surroundings.",
        images: {
          hero: {
            fileName: "module-media/m3-sensors-hero.jpg",
            alt: "Sensors in devices",
            brief: "Create a visual showing different sensors in devices: accelerometer, gyroscope, proximity, fingerprint. Modern, tech aesthetic."
          },
          accelerometer: {
            fileName: "module-media/m3-sensors-accelerometer.jpg",
            alt: "Accelerometer sensor",
            brief: "Show accelerometer sensor. Show how it detects motion. Clean, educational style."
          },
          gyroscope: {
            fileName: "module-media/m3-sensors-gyroscope.jpg",
            alt: "Gyroscope sensor",
            brief: "Show gyroscope sensor. Show how it detects rotation. Clean, educational style."
          },
          proximity: {
            fileName: "module-media/m3-sensors-proximity.jpg",
            alt: "Proximity sensor",
            brief: "Show proximity sensor. Show how it detects nearby objects. Clean, educational style."
          },
          fingerprint: {
            fileName: "module-media/m3-sensors-fingerprint.jpg",
            alt: "Fingerprint sensor",
            brief: "Show fingerprint sensor. Show how it works for security. Clean, educational style."
          },
          inAction: {
            fileName: "module-media/m3-sensors-in-action.jpg",
            alt: "Sensors in action",
            brief: "Show sensors working: accelerometer detecting motion, gyroscope detecting rotation, proximity sensor detecting objects. Show sensors in use. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-sensors-why-matters.jpg",
            alt: "Understanding sensors",
            brief: "Show the importance of sensors in modern devices. Show how they enhance user experience. Clean, modern aesthetic."
          }
        },
        sensors: [
          {
            name: "Accelerometer",
            description: "Detects motion and orientation. Used for screen rotation and step counting.",
            icon: "📱"
          },
          {
            name: "Gyroscope",
            description: "Detects rotation and tilt. Used for gaming and augmented reality.",
            icon: "🔄"
          },
          {
            name: "Proximity",
            description: "Detects nearby objects. Used to turn off the screen during calls.",
            icon: "👁️"
          },
          {
            name: "Fingerprint",
            description: "Scans fingerprints for security. Used for unlocking devices and payments.",
            icon: "👆"
          }
        ]
      },
      whatIsProgram: {
        title: "What is a Program?",
        intro: "A program is a set of instructions written in code that tells a computer what to do. Programs are created by developers and can be anything from a simple calculator to complex video games or operating systems.",
        images: {
          hero: {
            fileName: "module-media/m3-program-hero.jpg",
            alt: "Code and program visualization",
            brief: "Create a visual showing code being written, compiled into software, and executed. Show the transformation from code to program. Use a tech aesthetic with soft gradients."
          },
          code: {
            fileName: "module-media/m3-program-code.jpg",
            alt: "Programming code",
            brief: "Show programming code on a screen. Show syntax, variables, functions. Clean, educational style."
          },
          software: {
            fileName: "module-media/m3-program-software.jpg",
            alt: "Software compilation",
            brief: "Show code being compiled into software. Show the process. Clean, educational diagram."
          },
          execution: {
            fileName: "module-media/m3-program-execution.jpg",
            alt: "Program execution",
            brief: "Show a program running/executing. Show the output or interface. Clean, modern aesthetic."
          },
          whyMatters: {
            fileName: "module-media/m3-program-why-matters.jpg",
            alt: "Programs in use",
            brief: "Show various programs being used: apps, games, software. Show the importance of programs. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Code",
            description: "Code is the written instructions that developers create using programming languages like Python, JavaScript, or C++.",
            icon: "💻"
          },
          {
            name: "Software",
            description: "Software is the compiled, executable version of code that can run on a computer. It's what you install and use.",
            icon: "📦"
          },
          {
            name: "Execution",
            description: "Execution is when the program runs and performs its tasks. The CPU reads and executes the program's instructions.",
            icon: "▶️"
          }
        ]
      },
      whatIsData: {
        title: "What is Data?",
        intro: "Data is information stored in a computer. It can be text, numbers, images, videos, or any other type of information. Computers process data using binary code (0s and 1s) that the CPU can understand.",
        images: {
          hero: {
            fileName: "module-media/m3-data-hero.jpg",
            alt: "Data visualization",
            brief: "Create a visual showing different types of data: text, numbers, images, files. Show data being stored and processed. Use a tech aesthetic with soft gradients."
          },
          text: {
            fileName: "module-media/m3-data-text.jpg",
            alt: "Text data",
            brief: "Show text data: documents, files, strings. Clean, educational style."
          },
          numbers: {
            fileName: "module-media/m3-data-numbers.jpg",
            alt: "Numeric data",
            brief: "Show numeric data: calculations, spreadsheets, databases. Clean, educational style."
          },
          binary: {
            fileName: "module-media/m3-data-binary.jpg",
            alt: "Binary data representation",
            brief: "Show binary representation: 0s and 1s, how machines read data. Clean, educational diagram."
          },
          whyMatters: {
            fileName: "module-media/m3-data-why-matters.jpg",
            alt: "Data in use",
            brief: "Show data being used: files being accessed, information being processed. Show the importance of data. Clean, modern aesthetic."
          }
        },
        types: [
          {
            name: "Text Data",
            description: "Text data includes letters, words, sentences, and documents. Examples: documents, emails, web pages.",
            icon: "📝"
          },
          {
            name: "Numeric Data",
            description: "Numeric data includes numbers used for calculations, measurements, and statistics. Examples: prices, scores, measurements.",
            icon: "🔢"
          },
          {
            name: "Binary Data",
            description: "Binary data is how computers store and process all information using only 0s and 1s. Everything is converted to binary.",
            icon: "⚙️"
          }
        ]
      }
    };
  };

  // Module 4 specific content sections
  const getModule4Sections = () => {
    return {
      insideComputer: {
        title: "Inside a Computer",
        intro: "Inside a computer case, components work together. The motherboard connects everything, power connectors supply electricity, internal wiring carries data and power, and components are placed for airflow and accessibility.",
        images: {
          hero: {
            fileName: "module-media/m4-inside-hero.jpg",
            alt: "Inside view of a computer showing motherboard, components, and wiring",
            brief: "Create a visual showing the inside of a computer case: motherboard with components, power connectors, wiring, and component placement. Clean, educational style with good lighting."
          },
          overview: {
            fileName: "module-media/m4-inside-overview.jpg",
            alt: "Inside view of a computer showing motherboard, components, and wiring",
            brief: "Show the inside of a computer case: motherboard with components, power connectors, wiring, and component placement. Clean, educational style."
          },
          components: {
            fileName: "module-media/m4-inside-components.jpg",
            alt: "Detailed view of motherboard layout, power connectors, and wiring",
            brief: "Show a detailed view of motherboard with labeled components, power connectors, and internal wiring. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-inside-why-matters.jpg",
            alt: "Well-organized computer internals showing proper component placement",
            brief: "Show a well-organized computer interior with proper component placement, clean wiring, and good airflow. Clean, modern aesthetic."
          }
        },
        components: [
          {
            name: "Motherboard Layout",
            icon: "🔌",
            description: "The motherboard is the main circuit board that connects all components. It has slots for CPU, RAM, GPU, and expansion cards."
          },
          {
            name: "Power Connectors",
            icon: "⚡",
            description: "Power connectors supply electricity from the PSU to components. Different connectors power the CPU, GPU, motherboard, and storage drives."
          },
          {
            name: "Internal Wiring",
            icon: "🔗",
            description: "Internal wiring includes data cables (SATA, PCIe) and power cables. These cables connect components and allow them to communicate."
          },
          {
            name: "Component Placement",
            icon: "📐",
            description: "Components are placed strategically for airflow, cooling, and accessibility. Proper placement prevents overheating and makes upgrades easier."
          }
        ]
      },
      cpuArchitecture: {
        title: "CPU Architecture",
        intro: "CPU architecture refers to the internal design and structure of the processor. It includes cores, cache levels, clock speed, and how instructions are processed. Understanding CPU architecture helps you choose the right processor and optimize performance.",
        images: {
          hero: {
            fileName: "module-media/m4-cpu-hero.jpg",
            alt: "CPU architecture visualization",
            brief: "Create a visual showing CPU architecture: cores, cache levels, clock speed, and instruction cycle. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-cpu-overview.jpg",
            alt: "CPU internal structure and architecture",
            brief: "Show CPU internal structure with labeled components: cores, cache levels, clock speed indicators. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-cpu-architecture.jpg",
            alt: "Detailed CPU architecture diagram showing all components",
            brief: "Show a detailed CPU architecture diagram with cores, threads, L1/L2/L3 cache, clock speed, and instruction cycle. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-cpu-why-matters.jpg",
            alt: "CPU performance comparison showing architecture impact",
            brief: "Show CPU performance comparison: different architectures side by side showing speed differences. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Cores & Threads",
            icon: "⚙️",
            description: "Cores are processing units that execute instructions. Threads allow parallel processing, enabling the CPU to handle multiple tasks simultaneously."
          },
          {
            name: "Cache Levels",
            icon: "💾",
            description: "Cache stores frequently used data in L1, L2, and L3 levels for faster access. Higher cache levels are larger but slower than lower levels."
          },
          {
            name: "Clock Speed",
            icon: "⏱️",
            description: "Clock speed measures how many cycles per second the CPU performs. Higher clock speed means faster processing, measured in GHz."
          },
          {
            name: "Instruction Cycle",
            icon: "🔄",
            description: "The instruction cycle is the sequence of steps the CPU follows to execute each instruction: fetch, decode, execute, and store."
          }
        ]
      },
      gpuArchitecture: {
        title: "GPU Architecture",
        intro: "GPU architecture refers to the internal design of the graphics processing unit. It includes specialized cores, VRAM, and how graphics are rendered. Understanding GPU architecture helps you choose the right graphics card for gaming, video editing, and visual processing.",
        images: {
          hero: {
            fileName: "module-media/m4-gpu-hero.jpg",
            alt: "GPU architecture visualization",
            brief: "Create a visual showing GPU architecture: CUDA/Tensor cores, VRAM, integrated vs dedicated. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-gpu-overview.jpg",
            alt: "GPU internal structure and architecture",
            brief: "Show GPU internal structure with labeled components: cores, VRAM, rendering pipeline. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-gpu-architecture.jpg",
            alt: "Detailed GPU architecture showing cores, VRAM, and rendering",
            brief: "Show a detailed GPU architecture diagram with CUDA/Tensor cores, VRAM, integrated vs dedicated comparison, and rendering pipeline. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-gpu-why-matters.jpg",
            alt: "GPU performance comparison showing architecture impact",
            brief: "Show GPU performance comparison: different architectures side by side showing graphics quality differences. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "CUDA/Tensor Cores",
            icon: "🔥",
            description: "CUDA and Tensor cores are specialized processing units for parallel calculations. They handle graphics rendering, AI processing, and complex computations simultaneously."
          },
          {
            name: "VRAM",
            icon: "💾",
            description: "VRAM is dedicated memory for graphics data. Faster VRAM means smoother graphics, better frame rates, and support for higher resolutions and textures."
          },
          {
            name: "Integrated vs Dedicated",
            icon: "🎮",
            description: "Integrated GPU is part of the CPU and shares system RAM. Dedicated GPU has its own VRAM and is more powerful, ideal for gaming and professional graphics work."
          },
          {
            name: "GPU Rendering",
            icon: "🎨",
            description: "GPU rendering creates visual images, animations, and 3D graphics. The GPU processes millions of pixels simultaneously to display smooth, detailed graphics on your screen."
          }
        ]
      },
      ramArchitecture: {
        title: "RAM Architecture",
        intro: "RAM architecture refers to the design and specifications of memory modules. Understanding DDR generations, frequency, dual-channel memory, and latency helps you choose the right RAM for your system and optimize performance.",
        images: {
          hero: {
            fileName: "module-media/m4-ram-hero.jpg",
            alt: "RAM architecture visualization showing DDR generations and specifications",
            brief: "Create a visual showing RAM architecture: DDR generations comparison, frequency indicators, dual-channel setup, and latency timing. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-ram-overview.jpg",
            alt: "RAM modules showing DDR generations and specifications",
            brief: "Show RAM modules with labels for DDR generations (DDR3, DDR4, DDR5), frequency (MHz), and capacity. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-ram-architecture.jpg",
            alt: "Detailed RAM architecture diagram showing dual-channel, frequency, and latency",
            brief: "Show a detailed RAM architecture diagram with dual-channel memory setup, frequency comparison, latency timing (CL), and how data flows. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-ram-why-matters.jpg",
            alt: "RAM performance comparison showing architecture impact",
            brief: "Show RAM performance comparison: different DDR generations and frequencies side by side showing speed differences. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "DDR Generations",
            icon: "📊",
            description: "DDR (Double Data Rate) generations (DDR3, DDR4, DDR5) represent different memory technologies. Newer generations offer higher speeds, lower power consumption, and better performance."
          },
          {
            name: "Frequency",
            icon: "⚡",
            description: "RAM frequency (measured in MHz) determines how fast data can be read and written. Higher frequency means faster data transfer and better system responsiveness."
          },
          {
            name: "Dual-Channel Memory",
            icon: "🔗",
            description: "Dual-channel memory uses two RAM sticks simultaneously, doubling the data transfer rate. This improves performance in memory-intensive tasks and gaming."
          },
          {
            name: "Latency and Timing",
            icon: "⏱️",
            description: "Latency (CL - CAS Latency) measures the delay between a command and data availability. Lower latency means faster response times and better performance."
          }
        ]
      },
      storageConnections: {
        title: "Storage Connections",
        intro: "Storage connections determine how storage devices communicate with the motherboard and CPU. Understanding SATA, NVMe, and PCIe interfaces helps you choose the right storage solution and maximize performance.",
        images: {
          hero: {
            fileName: "module-media/m4-storage-connections-hero.jpg",
            alt: "Storage connection interfaces visualization",
            brief: "Create a visual showing storage connections: SATA interface, NVMe interface, PCIe lanes, and how data moves between storage and CPU. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-storage-connections-overview.jpg",
            alt: "SATA and NVMe interfaces comparison",
            brief: "Show SATA and NVMe interfaces side by side with visible connectors, cables, and slots. Include labels for each interface type. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-storage-connections-architecture.jpg",
            alt: "Detailed storage connection diagram showing data flow",
            brief: "Show a detailed storage connection diagram with SATA, NVMe, PCIe lanes, and data flow paths from storage to CPU. Include speed indicators. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-storage-connections-why-matters.jpg",
            alt: "Storage connection performance comparison",
            brief: "Show storage connection performance comparison: SATA vs NVMe speeds side by side. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "SATA Interface",
            icon: "🔌",
            description: "SATA (Serial ATA) is a standard interface for connecting storage devices. SATA 3.0 offers speeds up to 6 Gbps, commonly used for HDDs and SATA SSDs."
          },
          {
            name: "NVMe Interface",
            icon: "⚡",
            description: "NVMe (Non-Volatile Memory Express) is a high-speed interface designed for SSDs. It uses PCIe lanes directly, offering speeds up to 3,500+ MB/s, much faster than SATA."
          },
          {
            name: "PCIe Lanes",
            icon: "🛣️",
            description: "PCIe (Peripheral Component Interconnect Express) lanes are data pathways. More lanes mean higher bandwidth. NVMe SSDs use PCIe lanes for direct CPU communication."
          },
          {
            name: "How Data Moves",
            icon: "🔄",
            description: "Data flows from storage through the interface (SATA/NVMe) to the motherboard, then to the CPU via PCIe lanes. NVMe provides a direct path, reducing latency."
          }
        ]
      },
      coolingSystems: {
        title: "Cooling Systems",
        intro: "Cooling systems prevent components from overheating by dissipating heat. Understanding heat sinks, fans, thermal paste, and liquid cooling helps you maintain optimal temperatures and extend component lifespan.",
        images: {
          hero: {
            fileName: "module-media/m4-cooling-hero.jpg",
            alt: "Computer cooling systems visualization",
            brief: "Create a visual showing cooling systems: heat sinks, fans, thermal paste application, and liquid cooling setup. Show airflow direction. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-cooling-overview.jpg",
            alt: "CPU cooler with heat sink and fan",
            brief: "Show a CPU cooler with visible heat sink fins, fan, and thermal paste. Include labels for key components. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-cooling-architecture.jpg",
            alt: "Cooling system diagram showing airflow and heat dissipation",
            brief: "Show a cooling system diagram with airflow direction, heat dissipation paths, and temperature zones. Include fan placement and airflow arrows. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-cooling-why-matters.jpg",
            alt: "Temperature comparison showing cooling system impact",
            brief: "Show temperature comparison: system with good cooling vs poor cooling. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Heat Sink Operation",
            icon: "❄️",
            description: "Heat sinks are metal fins that absorb and dissipate heat from components. Larger surface area and better materials improve heat transfer and cooling efficiency."
          },
          {
            name: "Fans and Airflow",
            icon: "💨",
            description: "Fans create airflow to move hot air away from components. Proper fan placement and direction ensure efficient cooling and prevent hot spots in the case."
          },
          {
            name: "Thermal Paste",
            icon: "🧪",
            description: "Thermal paste fills microscopic gaps between the CPU/GPU and heat sink, improving heat transfer. Proper application ensures optimal thermal conductivity."
          },
          {
            name: "Liquid Cooling Basics",
            icon: "💧",
            description: "Liquid cooling uses coolant to transfer heat more efficiently than air. It's ideal for high-performance systems and overclocking, providing better temperature control."
          }
        ]
      },
      psu: {
        title: "Power Supply Unit (PSU)",
        intro: "The Power Supply Unit (PSU) converts AC power from the wall outlet to DC power for computer components. Understanding watt ratings, efficiency certifications, cables, and power distribution helps you choose the right PSU for your system.",
        images: {
          hero: {
            fileName: "module-media/m4-psu-hero.jpg",
            alt: "Power Supply Unit visualization",
            brief: "Create a visual showing PSU: external view, watt rating labels, efficiency certification badges, and cable connections. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-psu-overview.jpg",
            alt: "PSU with visible labels and connectors",
            brief: "Show a PSU with visible labels, watt rating, efficiency certification (80 Plus), and cable connectors. Include labels for key parts. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-psu-architecture.jpg",
            alt: "PSU power distribution diagram",
            brief: "Show a PSU power distribution diagram with different voltage rails (12V, 5V, 3.3V), cable types (CPU, GPU, SATA), and power flow. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-psu-why-matters.jpg",
            alt: "PSU efficiency comparison",
            brief: "Show PSU efficiency comparison: different 80 Plus ratings (Bronze, Gold, Platinum) and their impact on power consumption. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Watt Ratings",
            icon: "⚡",
            description: "PSU watt rating indicates maximum power output. Choose a PSU with enough wattage for all components (CPU, GPU, drives) plus headroom for future upgrades."
          },
          {
            name: "80 Plus Certification",
            icon: "🏆",
            description: "80 Plus certification (Bronze, Silver, Gold, Platinum, Titanium) indicates power efficiency. Higher ratings mean less wasted energy and lower electricity costs."
          },
          {
            name: "PSU Cables",
            icon: "🔌",
            description: "PSU cables include CPU power (4+4 pin), GPU power (6+2 pin), SATA power, and Molex connectors. Modular PSUs allow you to use only needed cables."
          },
          {
            name: "Power Distribution",
            icon: "📊",
            description: "PSU distributes power through different voltage rails (12V for CPU/GPU, 5V/3.3V for drives). Proper power distribution ensures stable system operation."
          }
        ]
      },
      biosUefi: {
        title: "BIOS / UEFI",
        intro: "BIOS (Basic Input/Output System) and UEFI (Unified Extensible Firmware Interface) are firmware that control your computer's startup process. Understanding boot order, security options, and BIOS updates helps you configure and maintain your system.",
        images: {
          hero: {
            fileName: "module-media/m4-bios-hero.jpg",
            alt: "BIOS/UEFI interface visualization",
            brief: "Create a visual showing BIOS/UEFI: interface screen, boot order settings, security options, and update process. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-bios-overview.jpg",
            alt: "BIOS/UEFI interface screen",
            brief: "Show BIOS/UEFI interface screen with visible menu options, boot order, and settings. Include labels for key sections. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-bios-architecture.jpg",
            alt: "BIOS/UEFI boot process diagram",
            brief: "Show a BIOS/UEFI boot process diagram: power on → BIOS/UEFI initialization → boot device selection → OS loading. Include arrows and progression. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-bios-why-matters.jpg",
            alt: "BIOS/UEFI security and boot options",
            brief: "Show BIOS/UEFI security features and boot options comparison. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "What BIOS Does",
            icon: "🚀",
            description: "BIOS/UEFI initializes hardware during startup, performs POST (Power-On Self-Test), and loads the operating system from the boot device. It's the first software that runs."
          },
          {
            name: "Boot Order",
            icon: "📀",
            description: "Boot order determines which device the computer checks first for an operating system. Common order: USB, CD/DVD, hard drive. You can change this in BIOS/UEFI settings."
          },
          {
            name: "Security Options",
            icon: "🔒",
            description: "BIOS/UEFI security options include password protection, secure boot (prevents unauthorized OS), and TPM (Trusted Platform Module) for encryption."
          },
          {
            name: "BIOS Update",
            icon: "🔄",
            description: "BIOS updates fix bugs, add new features, and improve compatibility. Updates should be done carefully using manufacturer tools to avoid system damage."
          }
        ]
      },
      expansionCards: {
        title: "Expansion Cards",
        intro: "Expansion cards add functionality to your computer by connecting to PCIe slots on the motherboard. Understanding different card types helps you expand your system's capabilities for graphics, networking, and other features.",
        images: {
          hero: {
            fileName: "module-media/m4-expansion-hero.jpg",
            alt: "Expansion cards visualization",
            brief: "Create a visual showing expansion cards: PCIe slots on motherboard, different card types (GPU, Wi-Fi, capture cards). Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-expansion-overview.jpg",
            alt: "Various expansion cards (GPU, Wi-Fi, capture)",
            brief: "Show various expansion cards side by side: GPU card, Wi-Fi card, capture card. Include labels for each type. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-expansion-architecture.jpg",
            alt: "PCIe slot and expansion card connection diagram",
            brief: "Show a PCIe slot and expansion card connection diagram with data flow, PCIe lanes, and how cards communicate with CPU. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-expansion-why-matters.jpg",
            alt: "Expansion card use cases",
            brief: "Show expansion card use cases: gaming (GPU), networking (Wi-Fi), content creation (capture). Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "PCIe Cards",
            icon: "🔌",
            description: "PCIe (Peripheral Component Interconnect Express) cards connect to PCIe slots on the motherboard. Different slot sizes (x1, x4, x8, x16) provide different bandwidth."
          },
          {
            name: "Wi-Fi Cards",
            icon: "📡",
            description: "Wi-Fi cards add wireless networking capability to desktop computers. They connect via PCIe and provide Wi-Fi and Bluetooth connectivity."
          },
          {
            name: "GPU Cards",
            icon: "🎮",
            description: "Graphics cards (GPUs) are the most common expansion cards, providing dedicated graphics processing for gaming, video editing, and 3D rendering."
          },
          {
            name: "Capture Cards",
            icon: "📹",
            description: "Capture cards record video from external sources (consoles, cameras) for streaming and content creation. They connect via PCIe for high-quality capture."
          }
        ]
      },
      peripheralDevices: {
        title: "Peripheral Devices",
        intro: "Peripheral devices are external components that connect to your computer to provide input, output, or additional functionality. Understanding wired and wireless peripherals, dongles, and drivers helps you set up and use devices effectively.",
        images: {
          hero: {
            fileName: "module-media/m4-peripheral-hero.jpg",
            alt: "Peripheral devices visualization",
            brief: "Create a visual showing peripheral devices: keyboard, mouse, monitor, printer, speakers connected to a computer. Show both wired and wireless connections. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-peripheral-overview.jpg",
            alt: "Various peripheral devices",
            brief: "Show various peripheral devices: wired keyboard/mouse, wireless devices, USB dongles, and connections. Include labels. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-peripheral-architecture.jpg",
            alt: "Peripheral device connection diagram",
            brief: "Show a peripheral device connection diagram with USB ports, wireless connections, dongles, and how devices communicate with the computer. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-peripheral-why-matters.jpg",
            alt: "Peripheral device setup and usage",
            brief: "Show peripheral device setup scenarios: plug-and-play vs driver installation. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Wired Peripherals",
            icon: "🔌",
            description: "Wired peripherals connect via USB, HDMI, or other cables. They're reliable, don't need batteries, and provide consistent performance without interference."
          },
          {
            name: "Wireless Peripherals",
            icon: "📡",
            description: "Wireless peripherals use Bluetooth or Wi-Fi for connectivity. They offer freedom of movement and reduce cable clutter, but may need batteries or charging."
          },
          {
            name: "Dongles",
            icon: "🔗",
            description: "Dongles are small adapters that add connectivity (USB-C to USB-A, HDMI adapters) or enable wireless features (Bluetooth, Wi-Fi dongles for older systems)."
          },
          {
            name: "Drivers for Peripherals",
            icon: "💿",
            description: "Some peripherals need drivers (software) to work properly. Windows usually installs drivers automatically, but advanced features may require manufacturer drivers."
          }
        ]
      },
      displayTechnology: {
        title: "Display Technology",
        intro: "Display technology determines how images appear on screens. Understanding LCD, LED, and OLED technologies, refresh rates, resolution, and color accuracy helps you choose the right monitor for your needs.",
        images: {
          hero: {
            fileName: "module-media/m4-display-hero.jpg",
            alt: "Display technology visualization",
            brief: "Create a visual showing display technologies: LCD, LED, OLED screens side by side with quality comparison. Show refresh rates and resolution indicators. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-display-overview.jpg",
            alt: "Different display types comparison",
            brief: "Show different display types side by side: LCD, LED, OLED with visible differences in image quality. Include labels. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-display-architecture.jpg",
            alt: "Display technology diagram showing pixel structure",
            brief: "Show a display technology diagram with pixel structure, backlighting (LCD/LED), self-illuminating pixels (OLED), and how images are formed. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-display-why-matters.jpg",
            alt: "Display quality comparison",
            brief: "Show display quality comparison: resolution, refresh rate, color accuracy differences. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "LCD vs LED vs OLED",
            icon: "🖥️",
            description: "LCD uses liquid crystals with backlight, LED uses LED backlighting (brighter, more efficient), OLED uses self-illuminating pixels (best contrast, true blacks)."
          },
          {
            name: "Refresh Rate",
            icon: "🔄",
            description: "Refresh rate (Hz) is how many times per second the screen updates. Higher refresh rates (120Hz, 144Hz, 240Hz) provide smoother motion, ideal for gaming."
          },
          {
            name: "Resolution",
            icon: "📐",
            description: "Resolution is the number of pixels (1920x1080, 2560x1440, 3840x2160). Higher resolution means sharper images but requires more GPU power."
          },
          {
            name: "Color Accuracy",
            icon: "🎨",
            description: "Color accuracy measures how true colors appear on screen. Professional monitors have high color accuracy (sRGB, Adobe RGB) for photo/video editing."
          }
        ]
      },
      printersScanners: {
        title: "Printers & Scanners",
        intro: "Printers and scanners are output and input devices for physical documents. Understanding printer types (inkjet vs laser), DPI resolution, scanner operation, and common problems helps you choose and maintain these devices.",
        images: {
          hero: {
            fileName: "module-media/m4-printer-hero.jpg",
            alt: "Printers and scanners visualization",
            brief: "Create a visual showing printers and scanners: inkjet printer, laser printer, scanner, and their key features. Show DPI indicators and quality comparison. Use a tech aesthetic with soft gradients."
          },
          overview: {
            fileName: "module-media/m4-printer-overview.jpg",
            alt: "Inkjet vs laser printer comparison",
            brief: "Show inkjet and laser printers side by side with visible differences. Include labels for key features. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m4-printer-architecture.jpg",
            alt: "Printer and scanner working diagram",
            brief: "Show a printer and scanner working diagram: how inkjet/laser printers work, scanner operation, DPI resolution, and document flow. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m4-printer-why-matters.jpg",
            alt: "Print quality and troubleshooting",
            brief: "Show print quality comparison and common troubleshooting scenarios. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Inkjet vs Laser Printer",
            icon: "🖨️",
            description: "Inkjet printers spray liquid ink, good for photos and color printing. Laser printers use toner powder, faster and better for text documents and high-volume printing."
          },
          {
            name: "DPI (Resolution)",
            icon: "📊",
            description: "DPI (Dots Per Inch) measures print resolution. Higher DPI (600, 1200, 2400) means sharper, more detailed prints. Photo printing needs 300+ DPI."
          },
          {
            name: "Scanner Working",
            icon: "📷",
            description: "Scanners use sensors to capture images from physical documents. They convert documents to digital files (PDF, images) with adjustable DPI settings for quality."
          },
          {
            name: "Common Problems",
            icon: "🔧",
            description: "Common issues include paper jams, low ink/toner, connectivity problems, and print quality issues. Regular maintenance and proper setup prevent most problems."
          }
        ]
      }
    };
  };

  // Module 5 specific content sections
  const getModule5Sections = () => {
    return {
      storageConcepts: {
        title: "Storage Concepts",
        intro: "Understanding different storage types and their characteristics helps you make informed decisions about data management. Storage can be volatile (temporary) or non-volatile (permanent), each serving different purposes in your computer system.",
        images: {
          hero: {
            fileName: "module-media/m5-storage-concepts-hero.jpg",
            alt: "Storage hierarchy visualization showing RAM, Cache, SSD, and HDD",
            brief: "Create a visual hierarchy showing different storage types: RAM at top (fastest, volatile), cache, SSD (fast, non-volatile), HDD (slower, non-volatile). Show speed and capacity differences. Use a modern tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m5-storage-concepts-overview.jpg",
            alt: "Storage hierarchy diagram showing RAM → Cache → SSD → HDD",
            brief: "Show a storage hierarchy diagram: vertical or horizontal flow showing RAM (fastest, smallest) → Cache → SSD → HDD (slowest, largest). Include speed indicators and capacity labels. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m5-storage-concepts-comparison.jpg",
            alt: "Storage speed vs capacity comparison chart",
            brief: "Create a comparison chart showing storage speed vs capacity: RAM (fast, small), Cache (very fast, tiny), SSD (fast, medium), HDD (slow, large). Use visual indicators. Clean, educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-storage-concepts-why-matters.jpg",
            alt: "Real-world storage decision scenario",
            brief: "Show a real-world storage decision scenario: different use cases (gaming, work, backup) with recommended storage types. Clean, modern aesthetic."
          }
        },
        storageTypes: [
          {
            name: "Volatile",
            icon: "⚡",
            description: "Temporary storage that clears when power is off. Fast access for active data. Examples: RAM, Cache."
          },
          {
            name: "Non-Volatile",
            icon: "💾",
            description: "Permanent storage that keeps data when power is off. Persistent storage for files. Examples: HDD, SSD."
          },
          {
            name: "Hybrid",
            icon: "🔄",
            description: "Combines both volatile and non-volatile storage for optimal performance. Uses fast cache with permanent storage."
          }
        ]
      },
      hddDeepDive: {
        title: "HDD - Hard Disk Drive",
        intro: "Hard Disk Drives use spinning magnetic platters to store data. They offer large capacity at affordable prices, making them ideal for bulk storage, backups, and archives. Understanding HDD technology helps you make informed storage decisions.",
        images: {
          hero: {
            fileName: "module-media/m5-hdd-hero.jpg",
            alt: "3.5\" HDD external view with labels, SATA ports, and power connector",
            brief: "Create a visual of a 3.5\" HDD: show the external view with labels, SATA ports, and power connector. Include capacity indicators. Use a clean tech aesthetic with soft lighting."
          },
          overview: {
            fileName: "module-media/m5-hdd-overview.jpg",
            alt: "HDD external view showing 3.5\" drive with labels and ports",
            brief: "Show a 3.5\" HDD from the outside: visible labels, SATA data port, power connector. Include subtle labels for key parts. Background: clean tech aesthetic."
          },
          internal: {
            fileName: "module-media/m5-hdd-internal.jpg",
            alt: "HDD cross-section diagram showing platters, read/write heads, actuator arm, spindle, and motor",
            brief: "Create a cross-section diagram of HDD internals: show platters (magnetic disks), read/write heads, actuator arm, spindle (rotation axis), and motor. Include labels and annotations. Educational diagram style."
          },
          useCases: {
            fileName: "module-media/m5-hdd-use-cases.jpg",
            alt: "HDD use cases showing desktop computers, servers, external backup drives, NAS, and gaming consoles",
            brief: "Show HDDs in different applications: desktop computer, server rack, external backup drive, NAS device, gaming console. Arrange them in a flowing layout. Background: tech gradient."
          },
          whyMatters: {
            fileName: "module-media/m5-hdd-why-matters.jpg",
            alt: "HDD vs SSD comparison for different use cases",
            brief: "Show HDD vs SSD comparison for different use cases: when to use HDD (bulk storage, backups) vs SSD (OS, apps). Clean, modern aesthetic."
          }
        },
        components: [
          {
            name: "Platters",
            icon: "📀",
            description: "Magnetic disks that store data. Multiple platters increase capacity. Data is written and read from both sides of each platter."
          },
          {
            name: "Read/Write Heads",
            icon: "🎯",
            description: "Tiny electromagnets that read and write data on platters. They float just nanometers above the spinning platters without touching them."
          },
          {
            name: "Actuator Arm",
            icon: "⚙️",
            description: "Mechanical arm that moves the read/write heads across the platters. Allows heads to access different tracks and sectors on the disk."
          },
          {
            name: "Spindle",
            icon: "🔄",
            description: "Central axis that rotates the platters at high speed (5400-7200 RPM). Faster rotation means faster data access but more power consumption."
          }
        ],
        advantages: [
          "Large Capacity - Up to 20TB+ available",
          "Affordable - Cost per GB is very low",
          "Proven Technology - Reliable for decades",
          "Good for Archives - Long-term storage solution"
        ],
        disadvantages: [
          "Slower than SSD - Mechanical parts limit speed",
          "Moving Parts - More wear and potential failure",
          "More Fragile - Sensitive to movement and shocks",
          "Higher Power Usage - Motor requires more energy",
          "Noise and Vibration - Spinning platters create sound",
          "Slower Boot Times - Takes longer to start up",
          "Not Ideal for Laptops - Movement can damage drives"
        ],
        useCases: [
          "Desktop Computers - Primary storage for many desktops",
          "Servers & Data Centers - Bulk storage for servers",
          "External Backup Drives - Portable backup solutions",
          "Network Attached Storage (NAS) - Shared storage for networks",
          "Gaming Consoles - Storage for games and media"
        ]
      },
      ssdDeepDive: {
        title: "SSD - Solid State Drive",
        intro: "Solid State Drives (SSD) use flash memory chips instead of spinning disks. They're faster, quieter, and more reliable than HDDs, making them ideal for operating systems, applications, and frequently accessed data. Understanding SSD technology helps you optimize system performance.",
        images: {
          hero: {
            fileName: "module-media/m5-ssd-hero.jpg",
            alt: "SSD overview showing 2.5\" SATA SSD and M.2 NVMe SSD",
            brief: "Create a visual showing both SSD types: 2.5\" SATA SSD and M.2 NVMe SSD side by side. Show the compact form factors and connection types. Use a modern tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m5-ssd-overview.jpg",
            alt: "SSD external view showing 2.5\" SATA SSD and M.2 NVMe SSD",
            brief: "Show both SSD types from external view: 2.5\" SATA SSD with visible SATA connector, and M.2 NVMe SSD showing the compact form factor. Include labels. Background: clean tech aesthetic."
          },
          technology: {
            fileName: "module-media/m5-ssd-technology.jpg",
            alt: "SSD internal structure showing NAND flash memory cells",
            brief: "Show SSD internal structure: NAND flash memory cells, controller chip, and how data is stored electronically. Include labels. Educational diagram style."
          },
          speedComparison: {
            fileName: "module-media/m5-ssd-speed-comparison.jpg",
            alt: "Speed comparison chart showing SSD vs HDD performance",
            brief: "Create a speed comparison chart: bar chart showing SSD vs HDD speeds for boot time, file read, and access time. Include visual indicators. Clean, educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-ssd-why-matters.jpg",
            alt: "SSD performance benefits visualization",
            brief: "Show SSD performance benefits: fast boot times, quick file access, smooth application loading. Clean, modern aesthetic."
          }
        },
        advantages: [
          {
            name: "Fast",
            icon: "⚡",
            description: "Boot in 10-15 sec, 500+ MB/s read speed. Much faster than HDD for all operations."
          },
          {
            name: "Quiet",
            icon: "🔇",
            description: "No moving parts = silent operation. Perfect for quiet work environments."
          },
          {
            name: "Durable",
            icon: "💪",
            description: "Shock resistant, long lifespan. Ideal for laptops and portable devices."
          },
          {
            name: "Energy Efficient",
            icon: "🔋",
            description: "Lower power consumption than HDD. Extends battery life in laptops."
          }
        ],
        speedDetails: [
          "Boot Time: 10-15 sec (SSD) vs 30-60 sec (HDD)",
          "File Read: 500+ MB/s (SSD) vs 100-150 MB/s (HDD)",
          "No mechanical delay - Instant access",
          "Perfect for operating systems and frequently used apps"
        ]
      },
      nvmeTechnology: {
        title: "NVMe Technology",
        intro: "NVMe (Non-Volatile Memory Express) is a high-speed interface designed specifically for SSDs. It uses PCIe lanes directly, bypassing the older SATA interface, offering speeds up to 3,500+ MB/s. Understanding NVMe helps you choose the fastest storage solution.",
        images: {
          hero: {
            fileName: "module-media/m5-nvme-hero.jpg",
            alt: "NVMe SSD diagram showing M.2 form factor and PCIe connection",
            brief: "Create an NVMe SSD diagram: show M.2 form factor, PCIe connection, and how it bypasses SATA. Include labels for key parts. Modern tech diagram style."
          },
          overview: {
            fileName: "module-media/m5-nvme-overview.jpg",
            alt: "M.2 NVMe SSD with visible PCIe connection",
            brief: "Show M.2 NVMe SSD with visible PCIe connection slot on motherboard. Include labels showing PCIe lanes. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m5-nvme-architecture.jpg",
            alt: "NVMe architecture diagram showing direct PCIe connection",
            brief: "Show NVMe architecture diagram: direct PCIe connection to CPU, bypassing SATA controller. Include data flow arrows. Educational diagram style."
          },
          speedComparison: {
            fileName: "module-media/m5-nvme-speed-comparison.jpg",
            alt: "Speed comparison: SATA SSD vs NVMe SSD",
            brief: "Create speed comparison: SATA SSD (~550 MB/s) vs NVMe SSD (3,000+ MB/s). Show dramatic speed difference. Clean, educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-nvme-why-matters.jpg",
            alt: "NVMe use cases for gaming and professional work",
            brief: "Show NVMe use cases: gaming (fast loading), video editing (quick file access), professional work. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "PCIe Connection",
            icon: "🔌",
            description: "NVMe uses PCIe lanes directly, providing much higher bandwidth than SATA. PCIe 3.0 offers ~1GB/s per lane, PCIe 4.0 offers ~2GB/s per lane."
          },
          {
            name: "M.2 Form Factor",
            icon: "📏",
            description: "M.2 is a compact form factor (like a stick of gum) that fits directly on the motherboard. No cables needed, saves space."
          },
          {
            name: "Speed Advantage",
            icon: "⚡",
            description: "NVMe SSDs are 5-6x faster than SATA SSDs. Perfect for gaming, video editing, and professional applications that need fast data access."
          },
          {
            name: "Low Latency",
            icon: "🎯",
            description: "Direct PCIe connection reduces latency significantly. Files open instantly, applications launch faster, system feels more responsive."
          }
        ],
        speedDetails: {
          sata: "SATA SSD: ~550 MB/s",
          nvme: "NVMe SSD: 3,000+ MB/s (PCIe 3.0) or 7,000+ MB/s (PCIe 4.0)"
        }
      },
      storageFileSystems: {
        title: "Storage File Systems",
        intro: "File systems organize how data is stored and retrieved on storage devices. Different file systems (NTFS, FAT32, exFAT, ext4) have different features, compatibility, and limitations. Understanding file systems helps you format drives correctly and manage data effectively.",
        images: {
          hero: {
            fileName: "module-media/m5-filesystems-hero.jpg",
            alt: "File systems comparison visualization",
            brief: "Create a visual showing different file systems: NTFS, FAT32, exFAT, ext4 with their logos/icons. Show compatibility indicators. Use a modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m5-filesystems-overview.jpg",
            alt: "File system structure diagram",
            brief: "Show a file system structure diagram: how files are organized in directories, file allocation table, and data clusters. Educational diagram style."
          },
          comparison: {
            fileName: "module-media/m5-filesystems-comparison.jpg",
            alt: "File systems feature comparison table",
            brief: "Create a comparison table showing NTFS, FAT32, exFAT features: max file size, compatibility, use cases. Clean, educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-filesystems-why-matters.jpg",
            alt: "File system selection for different devices",
            brief: "Show file system selection scenarios: Windows (NTFS), USB drives (exFAT), Linux (ext4). Clean, modern aesthetic."
          }
        },
        fileSystems: [
          {
            name: "NTFS",
            icon: "🪟",
            description: "Windows file system. Supports large files (16TB+), file permissions, encryption. Best for Windows internal drives.",
            features: "Large files, permissions, encryption, journaling"
          },
          {
            name: "FAT32",
            icon: "💿",
            description: "Older file system. Universal compatibility but 4GB file size limit. Good for small USB drives and older devices.",
            features: "Universal compatibility, 4GB file limit, simple structure"
          },
          {
            name: "exFAT",
            icon: "🔗",
            description: "Extended FAT. Works on Windows, Mac, and Linux. No 4GB limit. Perfect for external drives and USB sticks.",
            features: "Cross-platform, large files, no 4GB limit"
          },
          {
            name: "ext4",
            icon: "🐧",
            description: "Linux file system. Journaling, large file support, excellent performance. Standard for Linux systems.",
            features: "Journaling, large files, Linux standard, high performance"
          }
        ]
      },
      diskPartitioning: {
        title: "Disk Partitioning",
        intro: "Disk partitioning divides a physical storage device into separate logical sections. Each partition acts like an independent drive, allowing you to organize data, install multiple operating systems, or separate system files from user data. Understanding partitioning helps you manage storage effectively.",
        images: {
          hero: {
            fileName: "module-media/m5-partitioning-hero.jpg",
            alt: "Disk partitioning visualization showing multiple partitions",
            brief: "Create a visual showing disk partitioning: single physical drive divided into multiple partitions (C:, D:, E:). Show partition sizes and labels. Use a modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m5-partitioning-overview.jpg",
            alt: "Partition layout diagram",
            brief: "Show a partition layout diagram: primary partitions, extended partitions, logical drives. Include labels. Educational diagram style."
          },
          process: {
            fileName: "module-media/m5-partitioning-process.jpg",
            alt: "Partitioning process steps",
            brief: "Show partitioning process: before (single partition) → during (creating partitions) → after (multiple partitions). Include step indicators. Clean, educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-partitioning-why-matters.jpg",
            alt: "Partitioning use cases",
            brief: "Show partitioning use cases: dual boot (Windows + Linux), data organization, system backup. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Primary Partitions",
            icon: "📦",
            description: "Main partitions that can boot operating systems. MBR supports up to 4 primary partitions. GPT supports unlimited partitions."
          },
          {
            name: "Extended Partitions",
            icon: "📂",
            description: "Special partition type that can contain multiple logical drives. Used in MBR to overcome the 4-partition limit."
          },
          {
            name: "Logical Drives",
            icon: "💿",
            description: "Drives created within extended partitions. Appear as separate drives (D:, E:) but are on the same physical disk."
          },
          {
            name: "Partition Table",
            icon: "📋",
            description: "MBR (Master Boot Record) or GPT (GUID Partition Table) that stores partition information. GPT is newer and supports larger drives."
          }
        ],
        benefits: [
          "Organize Data - Separate system files from personal data",
          "Multiple OS - Install Windows and Linux on the same drive",
          "Backup Safety - Protect data if one partition fails",
          "Performance - Isolate frequently accessed files"
        ]
      },
      diskManagementTools: {
        title: "Disk Management Tools",
        intro: "Disk management tools help you create, resize, format, and manage partitions on your storage devices. Windows Disk Management, DiskPart, and third-party tools provide different levels of control. Understanding these tools helps you manage storage effectively and safely.",
        images: {
          hero: {
            fileName: "module-media/m5-disk-tools-hero.jpg",
            alt: "Disk management tools interface visualization",
            brief: "Create a visual showing disk management tools: Windows Disk Management interface, partition visualization. Use a modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m5-disk-tools-overview.jpg",
            alt: "Windows Disk Management interface",
            brief: "Show Windows Disk Management interface: disk list, partition visualization, available actions. Include labels. Clean, educational style."
          },
          tools: {
            fileName: "module-media/m5-disk-tools-tools.jpg",
            alt: "Different disk management tools comparison",
            brief: "Show different disk management tools: Windows Disk Management, DiskPart command line, third-party tools. Include tool names. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-disk-tools-why-matters.jpg",
            alt: "Disk management use cases",
            brief: "Show disk management use cases: resizing partitions, creating new partitions, formatting drives. Clean, modern aesthetic."
          }
        },
        tools: [
          {
            name: "Windows Disk Management",
            icon: "🪟",
            description: "Built-in Windows tool with graphical interface. Easy to use for basic partition operations like creating, deleting, and formatting partitions."
          },
          {
            name: "DiskPart",
            icon: "💻",
            description: "Command-line tool for advanced disk management. More powerful than GUI but requires technical knowledge. Can script operations."
          },
          {
            name: "Third-Party Tools",
            icon: "🔧",
            description: "Tools like GParted, EaseUS, MiniTool offer advanced features like partition recovery, disk cloning, and better visualization."
          },
          {
            name: "Format Options",
            icon: "📝",
            description: "Quick format (fast, doesn't check for errors) vs Full format (slow, checks entire disk). Choose based on your needs."
          }
        ],
        operations: [
          "Create Partition - Divide unallocated space into new partitions",
          "Delete Partition - Remove partitions (data will be lost)",
          "Format Partition - Prepare partition for use with a file system",
          "Resize Partition - Shrink or extend existing partitions",
          "Change Drive Letter - Assign or change drive letters (C:, D:, etc.)"
        ]
      },
      raidConcepts: {
        title: "RAID Concepts",
        intro: "RAID (Redundant Array of Independent Disks) combines multiple physical drives into one logical unit. Different RAID levels offer different benefits: performance, redundancy, or both. Understanding RAID helps you build reliable and fast storage systems.",
        images: {
          hero: {
            fileName: "module-media/m5-raid-hero.jpg",
            alt: "RAID array visualization showing multiple drives",
            brief: "Create a visual showing RAID array: multiple drives (HDD/SSD) connected together, showing data distribution. Use a modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m5-raid-overview.jpg",
            alt: "RAID levels comparison diagram",
            brief: "Show RAID levels comparison: RAID 0, RAID 1, RAID 5, RAID 10 with visual representation of data distribution. Include labels. Educational diagram style."
          },
          levels: {
            fileName: "module-media/m5-raid-levels.jpg",
            alt: "Different RAID levels explained",
            brief: "Show different RAID levels side by side: RAID 0 (striping), RAID 1 (mirroring), RAID 5 (parity). Include data flow diagrams. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-raid-why-matters.jpg",
            alt: "RAID use cases for servers and workstations",
            brief: "Show RAID use cases: servers (redundancy), workstations (performance), data centers (both). Clean, modern aesthetic."
          }
        },
        raidLevels: [
          {
            name: "RAID 0",
            icon: "⚡",
            description: "Striping - Data split across drives for maximum speed. No redundancy. Fastest but no protection if one drive fails.",
            useCase: "Performance-focused, non-critical data"
          },
          {
            name: "RAID 1",
            icon: "🪞",
            description: "Mirroring - Data duplicated on two drives. Excellent redundancy. If one drive fails, data is safe on the other.",
            useCase: "Critical data, maximum redundancy"
          },
          {
            name: "RAID 5",
            icon: "🔐",
            description: "Striping with parity - Data and parity information distributed across 3+ drives. Good balance of speed and redundancy.",
            useCase: "Servers, balanced performance and protection"
          },
          {
            name: "RAID 10",
            icon: "🚀",
            description: "Combination of RAID 1 and RAID 0. Best of both: high speed and redundancy. Requires 4+ drives.",
            useCase: "High-performance servers, critical applications"
          }
        ],
        benefits: [
          "Performance - RAID 0 and RAID 5 improve read/write speeds",
          "Redundancy - RAID 1, 5, and 10 protect against drive failure",
          "Capacity - Combine multiple drives into larger storage",
          "Reliability - Continue operating even if a drive fails (RAID 1, 5, 10)"
        ]
      },
      cloudStorage: {
        title: "Cloud Storage",
        intro: "Cloud storage stores your data on remote servers accessed over the internet. Services like Google Drive, OneDrive, and Dropbox offer convenient access from any device, automatic backups, and file sharing. Understanding cloud storage helps you manage data across devices and collaborate effectively.",
        images: {
          hero: {
            fileName: "module-media/m5-cloud-hero.jpg",
            alt: "Cloud storage visualization showing data in the cloud",
            brief: "Create a visual showing cloud storage: data files floating in cloud, connected to multiple devices (laptop, phone, tablet). Use a modern tech aesthetic with gradients."
          },
          overview: {
            fileName: "module-media/m5-cloud-overview.jpg",
            alt: "Cloud storage services comparison",
            brief: "Show popular cloud storage services: Google Drive, OneDrive, Dropbox, iCloud with their logos. Include storage amounts. Clean, educational style."
          },
          architecture: {
            fileName: "module-media/m5-cloud-architecture.jpg",
            alt: "Cloud storage architecture diagram",
            brief: "Show cloud storage architecture: user devices → internet → cloud servers → data centers. Include sync arrows. Educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m5-cloud-why-matters.jpg",
            alt: "Cloud storage benefits and use cases",
            brief: "Show cloud storage benefits: access anywhere, automatic backup, file sharing, collaboration. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Access Anywhere",
            icon: "🌐",
            description: "Access your files from any device with internet connection. Files sync automatically across all your devices."
          },
          {
            name: "Automatic Backup",
            icon: "💾",
            description: "Files are automatically backed up to the cloud. If your device fails, your data is safe in the cloud."
          },
          {
            name: "File Sharing",
            icon: "🔗",
            description: "Easily share files and folders with others via links. Control permissions (view, edit, download)."
          },
          {
            name: "Collaboration",
            icon: "👥",
            description: "Multiple people can work on the same files simultaneously. Changes sync in real-time."
          }
        ],
        services: [
          {
            name: "Google Drive",
            icon: "📁",
            description: "15GB free, integrates with Google Workspace. Great for collaboration and document editing."
          },
          {
            name: "OneDrive",
            icon: "☁️",
            description: "5GB free, integrates with Microsoft 365. Seamless with Windows and Office apps."
          },
          {
            name: "Dropbox",
            icon: "📦",
            description: "2GB free, simple interface. Good for file syncing and sharing."
          },
          {
            name: "iCloud",
            icon: "🍎",
            description: "5GB free, integrates with Apple devices. Automatic backup for photos and documents."
          }
        ],
        considerations: [
          "Internet Required - Need internet connection to access files",
          "Privacy - Data stored on third-party servers",
          "Storage Limits - Free tiers have limited space",
          "Sync Speed - Depends on internet connection speed"
        ]
      }
    };
  };

  const getModule6Sections = () => {
    return {
      typesOfSoftware: {
        title: "Types of Software",
        intro: "Software tells your computer what to do. There are three main types: system software runs your computer, application software helps you do tasks, and utility software keeps everything working well.",
        images: {
          hero: {
            fileName: "module-media/m6-types-software-hero.jpg",
            alt: "Software categories visualization showing System, Application, and Utility software",
            brief: "Create a visual showing different software categories: System Software (OS, drivers), Application Software (word processors, browsers), Utility Software (antivirus, cleaners). Use modern gradient background with software icons. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m6-types-software-overview.jpg",
            alt: "Software categories diagram showing System → Application → Utility software hierarchy",
            brief: "Show a software categories diagram: hierarchical or flow diagram showing System Software (base layer), Application Software (middle layer), Utility Software (support layer). Include icons and labels. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m6-types-software-comparison.jpg",
            alt: "System vs Application vs Utility software comparison chart",
            brief: "Create a comparison chart showing System Software vs Application Software vs Utility Software: characteristics, examples, use cases. Use visual indicators and icons. Clean, educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-types-software-why-matters.jpg",
            alt: "Real-world software usage scenario showing different software types in daily work",
            brief: "Show a real-world scenario: person using different software types (OS, word processor, antivirus) in daily work. Clean, modern aesthetic with clear visual separation of software types."
          }
        },
        softwareTypes: [
          {
            name: "System Software",
            icon: "⚙️",
            description: "Controls your computer's hardware and makes everything work. Examples: Windows, macOS, Linux, and device drivers."
          },
          {
            name: "Application Software",
            icon: "💻",
            description: "Programs you use to do things like write documents, browse the web, or play games. Examples: Word, Chrome, games, and media players."
          },
          {
            name: "Utility Software",
            icon: "🔧",
            description: "Tools that keep your computer safe and running smoothly. Examples: Antivirus, disk cleanup, and backup programs."
          }
        ]
      },
      osResponsibilities: {
        title: "OS Responsibilities",
        intro: "The operating system manages your computer's resources and makes everything work together. It handles memory, files, programs, and hardware so you can use your computer easily.",
        images: {
          hero: {
            fileName: "module-media/m6-os-responsibilities-hero.jpg",
            alt: "Operating system managing computer resources",
            brief: "Create a visual showing OS as manager: OS in center coordinating memory, files, programs, and hardware. Use modern tech aesthetic with icons showing different responsibilities."
          },
          overview: {
            fileName: "module-media/m6-os-responsibilities-overview.jpg",
            alt: "OS responsibilities diagram showing memory, files, programs, hardware management",
            brief: "Show OS responsibilities diagram: OS managing memory allocation, file organization, program execution, hardware communication. Include labels and icons. Clean educational style."
          },
          comparison: {
            fileName: "module-media/m6-os-responsibilities-comparison.jpg",
            alt: "OS responsibilities comparison showing different management tasks",
            brief: "Create a comparison showing different OS responsibilities: memory management, file system, process management, hardware drivers. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-os-responsibilities-why-matters.jpg",
            alt: "Real-world OS management scenario",
            brief: "Show real-world scenario: OS managing multiple programs, files, and hardware simultaneously. Clean, modern aesthetic."
          }
        },
        responsibilities: [
          {
            name: "Memory Management",
            icon: "🧠",
            description: "Controls how programs use RAM. Makes sure each program gets enough memory to run smoothly."
          },
          {
            name: "File Management",
            icon: "📁",
            description: "Organizes and stores your files. Keeps track of where everything is saved on your storage."
          },
          {
            name: "Program Management",
            icon: "⚙️",
            description: "Starts and stops programs. Makes sure programs run correctly and don't crash your computer."
          },
          {
            name: "Hardware Control",
            icon: "🔌",
            description: "Talks to hardware like keyboard, mouse, printer. Makes sure devices work with your computer."
          }
        ]
      },
      windowsOS: {
        title: "Windows OS Overview",
        intro: "Windows is the most popular operating system for personal computers. It's easy to use and works with many programs and devices.",
        images: {
          hero: {
            fileName: "module-media/m6-windows-hero.jpg",
            alt: "Windows operating system interface",
            brief: "Create a visual showing Windows OS: Start menu, desktop, taskbar, windows. Use modern Windows 11 aesthetic with clean interface."
          },
          overview: {
            fileName: "module-media/m6-windows-overview.jpg",
            alt: "Windows OS features and interface elements",
            brief: "Show Windows OS overview: desktop, Start menu, File Explorer, Settings. Include labels for key features. Clean interface style."
          },
          comparison: {
            fileName: "module-media/m6-windows-comparison.jpg",
            alt: "Windows versions comparison",
            brief: "Create a comparison showing different Windows versions: Windows 10, Windows 11, key features. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-windows-why-matters.jpg",
            alt: "Windows OS in daily use",
            brief: "Show Windows OS in daily use: person using Windows for work, gaming, browsing. Clean, modern aesthetic."
          }
        },
        features: [
          {
            name: "User-Friendly",
            icon: "👤",
            description: "Easy to learn and use. Great for beginners and everyday tasks."
          },
          {
            name: "Software Support",
            icon: "💻",
            description: "Works with thousands of programs. Most software is made for Windows."
          },
          {
            name: "Gaming",
            icon: "🎮",
            description: "Best for gaming. Most games are designed for Windows computers."
          },
          {
            name: "Hardware Support",
            icon: "🖥️",
            description: "Works with many devices. Printers, scanners, and other hardware usually support Windows."
          }
        ]
      },
      linuxOS: {
        title: "Linux OS Overview",
        intro: "Linux is a free and open-source operating system. It's powerful, secure, and used by developers, servers, and tech enthusiasts.",
        images: {
          hero: {
            fileName: "module-media/m6-linux-hero.jpg",
            alt: "Linux operating system interface",
            brief: "Create a visual showing Linux OS: terminal, desktop environments, open-source concept. Use modern Linux aesthetic with clean design."
          },
          overview: {
            fileName: "module-media/m6-linux-overview.jpg",
            alt: "Linux distributions and features",
            brief: "Show Linux overview: different distributions (Ubuntu, Fedora, etc.), terminal, package manager. Include labels. Clean educational style."
          },
          comparison: {
            fileName: "module-media/m6-linux-comparison.jpg",
            alt: "Linux distributions comparison",
            brief: "Create a comparison showing popular Linux distributions: Ubuntu, Fedora, Debian, key differences. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-linux-why-matters.jpg",
            alt: "Linux OS in development and server use",
            brief: "Show Linux in use: developer coding, server management, tech work. Clean, professional aesthetic."
          }
        },
        features: [
          {
            name: "Free & Open",
            icon: "🆓",
            description: "Completely free to use. You can modify and share it however you want."
          },
          {
            name: "Secure",
            icon: "🔒",
            description: "Very secure and stable. Fewer viruses and crashes than other systems."
          },
          {
            name: "Powerful",
            icon: "⚡",
            description: "Great for programming and servers. Developers love using Linux."
          },
          {
            name: "Customizable",
            icon: "🎨",
            description: "You can change almost everything. Make it look and work how you want."
          }
        ]
      },
      macOS: {
        title: "macOS Overview",
        intro: "macOS is Apple's operating system for Mac computers. It's known for being beautiful, smooth, and easy to use.",
        images: {
          hero: {
            fileName: "module-media/m6-macos-hero.jpg",
            alt: "macOS operating system interface",
            brief: "Create a visual showing macOS: Dock, menu bar, Finder, clean interface. Use modern macOS aesthetic with beautiful design."
          },
          overview: {
            fileName: "module-media/m6-macos-overview.jpg",
            alt: "macOS features and interface",
            brief: "Show macOS overview: Dock, Spotlight, Mission Control, Finder. Include labels for key features. Clean Apple design style."
          },
          comparison: {
            fileName: "module-media/m6-macos-comparison.jpg",
            alt: "macOS versions comparison",
            brief: "Create a comparison showing macOS versions: key features, design evolution. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-macos-why-matters.jpg",
            alt: "macOS in creative and professional use",
            brief: "Show macOS in use: creative work, design, professional tasks. Clean, elegant aesthetic."
          }
        },
        features: [
          {
            name: "Beautiful Design",
            icon: "✨",
            description: "Clean and elegant interface. Everything looks polished and professional."
          },
          {
            name: "Smooth Performance",
            icon: "🚀",
            description: "Runs very smoothly. Macs are optimized to work perfectly with macOS."
          },
          {
            name: "Creative Tools",
            icon: "🎨",
            description: "Great for design, video editing, and creative work. Many professionals use Macs."
          },
          {
            name: "Apple Ecosystem",
            icon: "🍎",
            description: "Works seamlessly with iPhone and iPad. Easy to share files and continue work."
          }
        ]
      },
      mobileOS: {
        title: "Mobile OS",
        intro: "Mobile operating systems run on smartphones and tablets. They're designed for touch screens and portable devices.",
        images: {
          hero: {
            fileName: "module-media/m6-mobile-os-hero.jpg",
            alt: "Mobile operating systems on smartphones",
            brief: "Create a visual showing mobile OS: Android and iOS interfaces, touch interactions. Use modern mobile aesthetic."
          },
          overview: {
            fileName: "module-media/m6-mobile-os-overview.jpg",
            alt: "Mobile OS features and apps",
            brief: "Show mobile OS overview: app icons, notifications, settings, touch gestures. Include labels. Clean mobile interface style."
          },
          comparison: {
            fileName: "module-media/m6-mobile-os-comparison.jpg",
            alt: "Android vs iOS comparison",
            brief: "Create a comparison showing Android vs iOS: key differences, features, customization. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-mobile-os-why-matters.jpg",
            alt: "Mobile OS in daily use",
            brief: "Show mobile OS in daily use: person using smartphone for apps, calls, browsing. Clean, modern aesthetic."
          }
        },
        features: [
          {
            name: "Touch Interface",
            icon: "👆",
            description: "Designed for touch screens. Swipe, tap, and pinch to interact with your device."
          },
          {
            name: "Apps",
            icon: "📱",
            description: "Millions of apps available. Games, social media, productivity tools, and more."
          },
          {
            name: "Portable",
            icon: "📲",
            description: "Works anywhere. Use your phone or tablet on the go, anytime, anywhere."
          },
          {
            name: "Notifications",
            icon: "🔔",
            description: "Get alerts and updates. Stay connected with messages, emails, and app notifications."
          }
        ]
      },
      drivers: {
        title: "Drivers",
        intro: "Drivers are special programs that help your computer talk to hardware devices. They make sure your printer, keyboard, and other devices work correctly.",
        images: {
          hero: {
            fileName: "module-media/m6-drivers-hero.jpg",
            alt: "Device drivers connecting hardware to OS",
            brief: "Create a visual showing drivers as bridge: hardware devices connected to OS through drivers. Use modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m6-drivers-overview.jpg",
            alt: "Device drivers for different hardware",
            brief: "Show drivers overview: printer driver, graphics driver, network driver examples. Include labels. Clean educational style."
          },
          comparison: {
            fileName: "module-media/m6-drivers-comparison.jpg",
            alt: "Driver types and installation methods",
            brief: "Create a comparison showing driver types: built-in, manufacturer, automatic updates. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-drivers-why-matters.jpg",
            alt: "Drivers enabling hardware functionality",
            brief: "Show drivers in action: printer working, graphics card functioning, devices connected. Clean, modern aesthetic."
          }
        },
        driverTypes: [
          {
            name: "Built-in Drivers",
            icon: "💾",
            description: "Come with Windows. Automatically installed for common devices like keyboards and mice."
          },
          {
            name: "Manufacturer Drivers",
            icon: "📦",
            description: "Download from device maker's website. Needed for printers, graphics cards, and special hardware."
          },
          {
            name: "Automatic Updates",
            icon: "🔄",
            description: "Windows can find and install drivers automatically. Keeps your devices working with latest updates."
          },
          {
            name: "Driver Manager",
            icon: "⚙️",
            description: "Device Manager shows all drivers. You can update, disable, or troubleshoot drivers here."
          }
        ]
      },
      softwareInstallation: {
        title: "Software Installation & Uninstallation",
        intro: "Installing software adds programs to your computer. Uninstalling removes them. It's important to do this correctly to keep your computer running well.",
        images: {
          hero: {
            fileName: "module-media/m6-installation-hero.jpg",
            alt: "Software installation process",
            brief: "Create a visual showing installation process: download, install wizard, program added. Use modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m6-installation-overview.jpg",
            alt: "Installation and uninstallation steps",
            brief: "Show installation overview: installation wizard steps, uninstall process. Include labels. Clean educational style."
          },
          comparison: {
            fileName: "module-media/m6-installation-comparison.jpg",
            alt: "Installation methods comparison",
            brief: "Create a comparison showing installation methods: installer, app store, portable apps. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-installation-why-matters.jpg",
            alt: "Software installation in practice",
            brief: "Show installation in practice: person installing software, managing programs. Clean, modern aesthetic."
          }
        },
        steps: [
          {
            name: "Download",
            icon: "⬇️",
            description: "Get the installer file from website or app store. Make sure it's from a trusted source."
          },
          {
            name: "Run Installer",
            icon: "▶️",
            description: "Double-click the installer file. Follow the setup wizard to install the program."
          },
          {
            name: "Choose Location",
            icon: "📂",
            description: "Pick where to install. Usually default location is fine, but you can choose custom folder."
          },
          {
            name: "Uninstall",
            icon: "🗑️",
            description: "Remove programs from Settings or Control Panel. This frees up space and keeps computer clean."
          }
        ]
      },
      updatesPatches: {
        title: "Updates & Patches",
        intro: "Updates fix problems and add new features to your software. Patches are small fixes for security issues. Keeping everything updated keeps your computer safe and working well.",
        images: {
          hero: {
            fileName: "module-media/m6-updates-hero.jpg",
            alt: "Software updates and patches",
            brief: "Create a visual showing updates: update notifications, download progress, installation. Use modern tech aesthetic."
          },
          overview: {
            fileName: "module-media/m6-updates-overview.jpg",
            alt: "Update types and process",
            brief: "Show updates overview: Windows updates, app updates, security patches. Include labels. Clean educational style."
          },
          comparison: {
            fileName: "module-media/m6-updates-comparison.jpg",
            alt: "Update types comparison",
            brief: "Create a comparison showing update types: security updates, feature updates, bug fixes. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m6-updates-why-matters.jpg",
            alt: "Updates keeping system secure",
            brief: "Show updates importance: security protection, new features, bug fixes. Clean, modern aesthetic."
          }
        },
        updateTypes: [
          {
            name: "Security Updates",
            icon: "🔒",
            description: "Fix security problems. Very important to install these to protect your computer from hackers."
          },
          {
            name: "Feature Updates",
            icon: "✨",
            description: "Add new features and improvements. Makes your software better and more useful."
          },
          {
            name: "Bug Fixes",
            icon: "🐛",
            description: "Fix problems and crashes. Makes programs work more smoothly and reliably."
          },
          {
            name: "Automatic Updates",
            icon: "🔄",
            description: "Windows can update automatically. Set it up once and it keeps everything current."
          }
        ]
      }
    };
  };

  const getModule7Sections = () => {
    return {
      fileOrganization: {
        title: "File Organization",
        intro: "Organizing files helps you find what you need quickly. Folders group related files together, making your computer neat and easy to use.",
        images: {
          hero: {
            fileName: "module-media/m7-file-organization-hero.jpg",
            alt: "File organization visualization showing folders and files",
            brief: "Create a visual showing organized file structure: folders, subfolders, files. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-file-organization-overview.jpg",
            alt: "File organization diagram showing folder hierarchy",
            brief: "Show a file organization diagram: hierarchical folder structure with labels. Include icons and clear organization. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m7-file-organization-comparison.jpg",
            alt: "Organized vs messy file organization comparison",
            brief: "Create a comparison showing organized vs messy file structure. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-file-organization-why-matters.jpg",
            alt: "Real-world file organization scenario",
            brief: "Show a real-world scenario: person finding files easily in organized folders. Clean, modern aesthetic."
          }
        },
        concepts: [
          {
            name: "Folders",
            icon: "📁",
            description: "Containers that hold files and other folders. Help organize your documents."
          },
          {
            name: "Files",
            icon: "📄",
            description: "Individual documents, pictures, or programs. Each file has a name and type."
          },
          {
            name: "Paths",
            icon: "🗂️",
            description: "The location of a file. Shows which folders it's inside."
          },
          {
            name: "Naming",
            icon: "📋",
            description: "Good file names help you find things. Use clear, descriptive names."
          }
        ]
      },
      fileOperations: {
        title: "File Operations",
        intro: "File operations are actions you can do with files. You can create, copy, move, rename, and delete files to manage your documents.",
        images: {
          hero: {
            fileName: "module-media/m7-file-operations-hero.jpg",
            alt: "File operations visualization showing create, copy, move, delete",
            brief: "Create a visual showing file operations: create, copy, move, delete, rename. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-file-operations-overview.jpg",
            alt: "File operations diagram showing different actions",
            brief: "Show a file operations diagram: visual representation of create, copy, move, delete operations. Include labels. Clean educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-file-operations-why-matters.jpg",
            alt: "Real-world file operations scenario",
            brief: "Show a real-world scenario: person performing file operations on computer. Clean, modern aesthetic."
          }
        },
        operations: [
          {
            name: "Create",
            icon: "➕",
            description: "Make new files or folders. Start with a blank document or folder."
          },
          {
            name: "Copy",
            icon: "📋",
            description: "Duplicate a file. Creates an exact copy in another location."
          },
          {
            name: "Move",
            icon: "➡️",
            description: "Change a file's location. Moves it from one folder to another."
          },
          {
            name: "Rename",
            icon: "✏️",
            description: "Change a file's name. Helps organize and identify files better."
          },
          {
            name: "Delete",
            icon: "🗑️",
            description: "Remove a file. Sends it to Recycle Bin where it can be recovered."
          }
        ]
      },
      fileTypes: {
        title: "File Types",
        intro: "Different files have different types. Each type has an extension that tells you what kind of file it is, like .txt for text or .jpg for pictures.",
        images: {
          hero: {
            fileName: "module-media/m7-file-types-hero.jpg",
            alt: "File types visualization showing different file extensions",
            brief: "Create a visual showing different file types: documents, images, videos, audio. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-file-types-overview.jpg",
            alt: "File types diagram showing categories",
            brief: "Show a file types diagram: categories of files (documents, images, videos, audio) with examples. Include icons. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m7-file-types-comparison.jpg",
            alt: "File type extensions comparison",
            brief: "Create a comparison showing common file extensions and their uses. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-file-types-why-matters.jpg",
            alt: "Real-world file types usage",
            brief: "Show a real-world scenario: different file types being used. Clean, modern aesthetic."
          }
        },
        fileCategories: [
          {
            name: "Documents",
            icon: "📄",
            description: "Text files like .txt, .doc, .pdf. Used for writing and reading."
          },
          {
            name: "Images",
            icon: "🖼️",
            description: "Picture files like .jpg, .png, .gif. Used for photos and graphics."
          },
          {
            name: "Videos",
            icon: "🎬",
            description: "Video files like .mp4, .avi, .mov. Used for movies and clips."
          },
          {
            name: "Audio",
            icon: "🎵",
            description: "Sound files like .mp3, .wav, .flac. Used for music and sounds."
          }
        ]
      },
      compression: {
        title: "Compression",
        intro: "Compression makes files smaller. It reduces file size so they take up less space and are easier to share or store.",
        images: {
          hero: {
            fileName: "module-media/m7-compression-hero.jpg",
            alt: "File compression visualization showing size reduction",
            brief: "Create a visual showing file compression: large file becoming smaller. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-compression-overview.jpg",
            alt: "Compression diagram showing process",
            brief: "Show a compression diagram: before and after compression with size reduction. Include labels. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m7-compression-comparison.jpg",
            alt: "Compressed vs uncompressed files comparison",
            brief: "Create a comparison showing compressed vs uncompressed files. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-compression-why-matters.jpg",
            alt: "Real-world compression usage",
            brief: "Show a real-world scenario: files being compressed for sharing. Clean, modern aesthetic."
          }
        },
        compressionTypes: [
          {
            name: "ZIP Files",
            icon: "📦",
            description: "Common compression format. Groups multiple files into one smaller file."
          },
          {
            name: "RAR Files",
            icon: "🗜️",
            description: "Another compression format. Often used for large files."
          },
          {
            name: "Benefits",
            icon: "💾",
            description: "Saves storage space. Makes files faster to download and share."
          },
          {
            name: "Extraction",
            icon: "📂",
            description: "Unzip files to use them. Restores files to original size."
          }
        ]
      },
      backupBasics: {
        title: "Backup Basics",
        intro: "Backups are copies of your important files. They protect your data if something goes wrong with your computer.",
        images: {
          hero: {
            fileName: "module-media/m7-backup-basics-hero.jpg",
            alt: "Backup visualization showing file copies",
            brief: "Create a visual showing backup process: files being copied to backup location. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-backup-basics-overview.jpg",
            alt: "Backup diagram showing backup locations",
            brief: "Show a backup diagram: original files and backup copies in different locations. Include labels. Clean educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-backup-basics-why-matters.jpg",
            alt: "Real-world backup scenario",
            brief: "Show a real-world scenario: person backing up important files. Clean, modern aesthetic."
          }
        },
        backupMethods: [
          {
            name: "External Drive",
            icon: "💿",
            description: "Copy files to USB drive or external hard drive. Keep it safe and separate."
          },
          {
            name: "Cloud Backup",
            icon: "☁️",
            description: "Save files online. Access them from anywhere, anytime."
          },
          {
            name: "Automatic Backup",
            icon: "🔄",
            description: "Set up automatic backups. Your computer backs up files regularly."
          },
          {
            name: "Restore",
            icon: "↩️",
            description: "Get files back from backup. Restores lost or damaged files."
          }
        ]
      },
      fileSecurity: {
        title: "File Security",
        intro: "File security protects your files from unauthorized access. It keeps your personal information safe and private.",
        images: {
          hero: {
            fileName: "module-media/m7-file-security-hero.jpg",
            alt: "File security visualization showing protection",
            brief: "Create a visual showing file security: locked files, passwords, encryption. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-file-security-overview.jpg",
            alt: "File security diagram showing protection methods",
            brief: "Show a file security diagram: different security methods (passwords, encryption, permissions). Include labels. Clean educational diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-file-security-why-matters.jpg",
            alt: "Real-world file security scenario",
            brief: "Show a real-world scenario: person securing important files. Clean, modern aesthetic."
          }
        },
        securityMethods: [
          {
            name: "Passwords",
            icon: "🔒",
            description: "Protect files with passwords. Only people who know the password can access them."
          },
          {
            name: "Encryption",
            icon: "🔐",
            description: "Scramble file contents. Makes files unreadable without the key."
          },
          {
            name: "Permissions",
            icon: "👤",
            description: "Control who can access files. Set read, write, or no access."
          },
          {
            name: "Antivirus",
            icon: "🛡️",
            description: "Protect files from viruses. Scans and removes harmful software."
          }
        ]
      },
      searchingFiles: {
        title: "Searching Files",
        intro: "Searching helps you find files quickly. You can search by name, type, or content to locate what you need.",
        images: {
          hero: {
            fileName: "module-media/m7-searching-files-hero.jpg",
            alt: "File search visualization showing search process",
            brief: "Create a visual showing file search: search bar, results, file icons. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-searching-files-overview.jpg",
            alt: "File search diagram showing search methods",
            brief: "Show a file search diagram: different search methods (name, type, content). Include labels. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m7-searching-files-comparison.jpg",
            alt: "Search methods comparison",
            brief: "Create a comparison showing different search methods. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-searching-files-why-matters.jpg",
            alt: "Real-world file search scenario",
            brief: "Show a real-world scenario: person searching for files on computer. Clean, modern aesthetic."
          }
        },
        searchMethods: [
          {
            name: "Name Search",
            icon: "🔍",
            description: "Search by file name. Type part of the name to find files."
          },
          {
            name: "Type Search",
            icon: "📑",
            description: "Search by file type. Find all .jpg files or all .pdf files."
          },
          {
            name: "Content Search",
            icon: "📝",
            description: "Search inside files. Finds files containing specific words."
          },
          {
            name: "Date Search",
            icon: "📅",
            description: "Search by date. Find files created or modified on specific dates."
          }
        ]
      },
      recycleBinRestore: {
        title: "Recycle Bin & Restore",
        intro: "Recycle Bin holds deleted files. You can restore files from Recycle Bin if you delete them by mistake.",
        images: {
          hero: {
            fileName: "module-media/m7-recycle-bin-hero.jpg",
            alt: "Recycle Bin visualization showing deleted files",
            brief: "Create a visual showing Recycle Bin: deleted files, restore option. Use modern gradient background. Clean, educational style."
          },
          overview: {
            fileName: "module-media/m7-recycle-bin-overview.jpg",
            alt: "Recycle Bin diagram showing restore process",
            brief: "Show a Recycle Bin diagram: deleted files and restore process. Include labels. Clean educational diagram style."
          },
          comparison: {
            fileName: "module-media/m7-recycle-bin-comparison.jpg",
            alt: "Recycle Bin vs permanent delete comparison",
            brief: "Create a comparison showing Recycle Bin vs permanent delete. Use visual indicators. Clean diagram style."
          },
          whyMatters: {
            fileName: "module-media/m7-recycle-bin-why-matters.jpg",
            alt: "Real-world Recycle Bin usage",
            brief: "Show a real-world scenario: person restoring files from Recycle Bin. Clean, modern aesthetic."
          }
        },
        recycleBinConcepts: [
          {
            name: "Delete",
            icon: "🗑️",
            description: "Move files to Recycle Bin. Files aren't permanently gone yet."
          },
          {
            name: "Restore",
            icon: "↩️",
            description: "Get files back from Recycle Bin. Returns them to original location."
          },
          {
            name: "Empty Bin",
            icon: "🧹",
            description: "Permanently delete files. Clears Recycle Bin and frees space."
          },
          {
            name: "Recovery",
            icon: "💾",
            description: "Get back deleted files. Works if Recycle Bin hasn't been emptied."
          }
        ]
      }
    };
  };

  // Get sections based on module ID - Modules 1, 2, 3, 4, 5, 6, and 7 are supported
  const sections = moduleId === 1 ? getModule1Sections() : moduleId === 2 ? getModule2Sections() : moduleId === 3 ? getModule3Sections() : moduleId === 4 ? getModule4Sections() : moduleId === 5 ? getModule5Sections() : moduleId === 6 ? getModule6Sections() : moduleId === 7 ? getModule7Sections() : null;

  const module1Sections = moduleId === 1 && sections ? (sections as ReturnType<typeof getModule1Sections>) : null;
  const module2Sections = moduleId === 2 && sections ? (sections as ReturnType<typeof getModule2Sections>) : null;
  const module3Sections = moduleId === 3 && sections ? (sections as ReturnType<typeof getModule3Sections>) : null;
  const module4Sections = moduleId === 4 && sections ? (sections as ReturnType<typeof getModule4Sections>) : null;
  const module5Sections = moduleId === 5 && sections ? (sections as ReturnType<typeof getModule5Sections>) : null;
  const module6Sections = moduleId === 6 && sections ? (sections as ReturnType<typeof getModule6Sections>) : null;
  const module7Sections = moduleId === 7 && sections ? (sections as ReturnType<typeof getModule7Sections>) : null;

  const resolveHeroContent = () => {
    if (moduleId === 1) {
      if (topicId === "1") {
        return {
          title: "What is a Computer?",
          subtitle:
            module1Sections?.hero.subtitle ??
            "Understand how the IPO (Input → Process → Output) cycle, core characteristics, and everyday devices define a computer."
        };
      }
      if (topicId === "2") {
        return {
          title: module1Sections?.types.title ?? "Types of Computers",
          subtitle:
            module1Sections?.types.intro ??
            "Different computers exist for different jobs. From giant supercomputers to the tiny chips inside household machines, each type follows the same IPO flow but at different scales."
        };
      }

      if (topicId === "3") {
        return {
          title: module1Sections?.hardwareBasics.title ?? "Hardware Basics",
          subtitle:
            module1Sections?.hardwareBasics.intro ??
            "Hardware refers to the physical parts of a computer. It is divided into external hardware (devices you touch) and internal hardware (components inside the cabinet)."
        };
      }

      if (topicId === "4") {
        return {
          title: module1Sections?.softwareBasics.title ?? "Software Basics",
          subtitle:
            module1Sections?.softwareBasics.intro ??
            "Software is the set of instructions that tells hardware what to do. Without software, hardware cannot function."
        };
      }

      if (topicId === "5") {
        return {
          title: module1Sections?.hardwareVsSoftware.title ?? "Hardware vs Software",
          subtitle:
            module1Sections?.hardwareVsSoftware.intro ??
            "Hardware and software rely on each other. Hardware provides the body, software provides the brain."
        };
      }

      if (topicId === "6") {
        return {
          title: module1Sections?.inputDevices.title ?? "Input Devices",
          subtitle:
            module1Sections?.inputDevices.intro ??
            "Input devices send data to the computer. Each device is suited for a different type of data."
        };
      }
      if (topicId === "7") {
        return {
          title: module1Sections?.outputDevices.title ?? "Output Devices",
          subtitle:
            module1Sections?.outputDevices.intro ??
            "Output devices display or produce information from the computer. They convert digital data into forms you can see, hear, or touch."
        };
      }
      if (topicId === "8") {
        return {
          title: module1Sections?.ioDevices.title ?? "I/O (Input + Output) Devices",
          subtitle:
            module1Sections?.ioDevices.intro ??
            "Some devices can both send data to the computer and receive data from it. These dual-purpose devices combine input and output capabilities in one."
        };
      }

      return {
        title: module1Sections?.hero.title ?? "INTRODUCTION TO COMPUTERS",
        subtitle:
          module1Sections?.hero.subtitle ??
          "Understand how the IPO (Input → Process → Output) cycle, core characteristics, and everyday devices define a computer."
      };
    }

    if (moduleId === 3) {
      if (topicId === "1") {
        return {
          title: "Boot Process",
          subtitle: "Learn how your computer starts up from the moment you press the power button. Understand the three key steps: Power On, POST, and Loading OS."
        };
      }
      if (topicId === "2") {
        return {
          title: "Operating Systems",
          subtitle: "Learn about Windows, macOS, Linux, Android, and iOS. Understand how operating systems manage your computer and provide a platform for applications."
        };
      }
      if (topicId === "3") {
        return {
          title: "File System",
          subtitle: "Learn how files and folders are organized on your computer. Understand folders, file paths, and hidden files."
        };
      }
      if (topicId === "4") {
        return {
          title: "File Extensions",
          subtitle: "Learn what file extensions are and why they matter. Understand different file types like text, images, videos, and executables."
        };
      }
      if (topicId === "5") {
        return {
          title: "File Management",
          subtitle: "Learn how to create, copy, move, delete, and organize files. Master the basics of file management on your computer."
        };
      }
      if (topicId === "6") {
        return {
          title: "System Specifications",
          subtitle: "Learn about CPU, RAM, Storage, GPU, and OS version. Understand your computer's capabilities and specifications."
        };
      }
      if (topicId === "7") {
        return {
          title: "Mobile = A Computer",
          subtitle: "Discover how smartphones and tablets are actually computers. Learn about mobile architecture, CPU/GPU, and sensors."
        };
      }
      if (topicId === "8") {
        return {
          title: "Sensors in Devices",
          subtitle: "Learn about accelerometers, gyroscopes, proximity sensors, and fingerprint scanners. Understand how sensors work in devices."
        };
      }
      if (topicId === "9") {
        return {
          title: "What is a Program?",
          subtitle: "Learn what programs are, how code becomes software, and how programs execute. Understand the relationship between code, software, and execution."
        };
      }
      if (topicId === "10") {
        return {
          title: "What is Data?",
          subtitle: "Learn what data is, different data types, and how machines read and process data using binary code."
        };
      }
      return {
        title: "Operating Systems & Files",
        subtitle: "Learn about operating systems, file management, mobile computing, and how computers organize and process data."
      };
    }
    if (moduleId === 4) {
      if (topicId === "1") {
        return {
          title: "Inside a Computer",
          subtitle: "Discover what's inside a computer case. Learn about motherboard layout, power connectors, internal wiring, and how components are strategically placed for optimal performance."
        };
      }
      if (topicId === "2") {
        return {
          title: "CPU Architecture",
          subtitle: "Explore the internal design of processors. Learn about cores, threads, cache levels, clock speed, and how the instruction cycle processes commands."
        };
      }
      if (topicId === "3") {
        return {
          title: "GPU Architecture",
          subtitle: "Discover how graphics processing units work. Learn about CUDA/Tensor cores, VRAM, integrated vs dedicated GPUs, and how graphics are rendered."
        };
      }
      if (topicId === "4") {
        return {
          title: "RAM Architecture",
          subtitle: "Explore RAM architecture and specifications. Learn about DDR generations, frequency, dual-channel memory, and latency timing for optimal performance."
        };
      }
      if (topicId === "5") {
        return {
          title: "Storage Connections",
          subtitle: "Understand how storage devices connect to your system. Learn about SATA, NVMe interfaces, PCIe lanes, and how data flows between storage and CPU."
        };
      }
      if (topicId === "6") {
        return {
          title: "Cooling Systems",
          subtitle: "Discover how cooling systems keep your computer running smoothly. Learn about heat sinks, fans, thermal paste, and liquid cooling basics."
        };
      }
      if (topicId === "7") {
        return {
          title: "Power Supply Unit (PSU)",
          subtitle: "Learn about the power supply unit that powers your computer. Understand watt ratings, efficiency certifications, cables, and power distribution."
        };
      }
      if (topicId === "8") {
        return {
          title: "BIOS / UEFI",
          subtitle: "Explore BIOS and UEFI firmware that controls your computer's startup. Learn about boot order, security options, and BIOS updates."
        };
      }
      if (topicId === "9") {
        return {
          title: "Expansion Cards",
          subtitle: "Discover how expansion cards add functionality to your computer. Learn about PCIe cards, Wi-Fi cards, GPUs, and capture cards."
        };
      }
      if (topicId === "10") {
        return {
          title: "Peripheral Devices",
          subtitle: "Understand peripheral devices that connect to your computer. Learn about wired and wireless peripherals, dongles, and drivers."
        };
      }
      if (topicId === "11") {
        return {
          title: "Display Technology",
          subtitle: "Explore display technologies and monitor specifications. Learn about LCD, LED, OLED, refresh rates, resolution, and color accuracy."
        };
      }
      if (topicId === "12") {
        return {
          title: "Printers & Scanners",
          subtitle: "Learn about printers and scanners for physical documents. Understand inkjet vs laser printers, DPI resolution, scanner operation, and troubleshooting."
        };
      }
      return {
        title: "Computer Hardware (Deep Dive)",
        subtitle: "Explore the internal components and architecture of computers in detail. Learn how hardware components work together to create a functional system."
      };
    }
    if (moduleId === 5) {
      if (topicId === "1") {
        return {
          title: "Storage Concepts",
          subtitle: "Understand different storage types and their characteristics. Learn about volatile vs non-volatile storage, speed vs capacity trade-offs, and how to choose the right storage solution."
        };
      }
      if (topicId === "2") {
        return {
          title: "HDD - Hard Disk Drive",
          subtitle: "Deep dive into how hard disk drives work. Learn about platters, read/write heads, actuator arms, and when to use HDDs for your storage needs."
        };
      }
      if (topicId === "3") {
        return {
          title: "SSD - Solid State Drive",
          subtitle: "Explore solid state drive technology. Learn about flash memory, NAND cells, controllers, and why SSDs are faster and more reliable than HDDs."
        };
      }
      if (topicId === "4") {
        return {
          title: "NVMe Technology",
          subtitle: "Discover NVMe (Non-Volatile Memory Express) technology. Learn about PCIe connections, M.2 form factor, and how NVMe delivers blazing-fast storage speeds."
        };
      }
      if (topicId === "5") {
        return {
          title: "Storage File Systems",
          subtitle: "Understand how file systems organize data on storage devices. Learn about NTFS, FAT32, exFAT, ext4, and when to use each file system."
        };
      }
      if (topicId === "6") {
        return {
          title: "Disk Partitioning",
          subtitle: "Learn how to divide storage devices into partitions. Understand primary partitions, extended partitions, logical drives, and how to organize your storage."
        };
      }
      if (topicId === "7") {
        return {
          title: "Disk Management Tools",
          subtitle: "Master disk management tools for creating, resizing, and formatting partitions. Learn about Windows Disk Management, DiskPart, and third-party tools."
        };
      }
      if (topicId === "8") {
        return {
          title: "RAID Concepts",
          subtitle: "Explore RAID (Redundant Array of Independent Disks) technology. Learn about RAID levels, striping, mirroring, and how to build reliable storage arrays."
        };
      }
      if (topicId === "9") {
        return {
          title: "Cloud Storage",
          subtitle: "Discover cloud storage services and how they work. Learn about accessing files anywhere, automatic backups, file sharing, and collaboration features."
        };
      }
      return {
        title: "Storage Systems",
        subtitle: "Explore storage technologies and data management. Learn about different storage types, file systems, and how to manage your data effectively."
      };
    }
    if (moduleId === 6) {
      if (topicId === "1") {
        return {
          title: "Types of Software",
          subtitle: "Understand different categories of software. Learn about system software, application software, and utility software, and how each type serves different purposes in your computer."
        };
      }
      if (topicId === "2") {
        return {
          title: "OS Responsibilities",
          subtitle: "Learn what the operating system does. Understand how it manages memory, files, programs, and hardware to make your computer work."
        };
      }
      if (topicId === "3") {
        return {
          title: "Windows OS Overview",
          subtitle: "Explore Windows operating system. Learn about its features, interface, and why it's the most popular OS for personal computers."
        };
      }
      if (topicId === "4") {
        return {
          title: "Linux OS Overview",
          subtitle: "Discover Linux operating system. Learn about its free and open-source nature, security, and why developers love using it."
        };
      }
      if (topicId === "5") {
        return {
          title: "macOS Overview",
          subtitle: "Explore macOS operating system. Learn about its beautiful design, smooth performance, and why it's popular for creative work."
        };
      }
      if (topicId === "6") {
        return {
          title: "Mobile OS",
          subtitle: "Understand mobile operating systems. Learn about Android and iOS, how they work on smartphones and tablets."
        };
      }
      if (topicId === "7") {
        return {
          title: "Drivers",
          subtitle: "Learn about device drivers. Understand how they help your computer communicate with hardware like printers, keyboards, and graphics cards."
        };
      }
      if (topicId === "8") {
        return {
          title: "Software Installation & Uninstallation",
          subtitle: "Master installing and removing software. Learn the proper steps to add programs to your computer and remove them safely."
        };
      }
      if (topicId === "9") {
        return {
          title: "Updates & Patches",
          subtitle: "Understand software updates and patches. Learn why keeping your system updated is important for security and performance."
        };
      }
      return {
        title: "Software & Operating Systems",
        subtitle: "Explore software types, operating systems, and how software makes your computer functional. Learn about different OS options and software installation."
      };
    }
    if (moduleId === 7) {
      if (topicId === "1") {
        return {
          title: "File Organization",
          subtitle: "Learn how to organize files and folders. Understand folder structures, file paths, and naming conventions to keep your computer neat and easy to use."
        };
      }
      if (topicId === "2") {
        return {
          title: "File Operations",
          subtitle: "Master file operations. Learn how to create, copy, move, rename, and delete files to manage your documents effectively."
        };
      }
      if (topicId === "3") {
        return {
          title: "File Types",
          subtitle: "Understand different file types and extensions. Learn about documents, images, videos, audio files, and how to identify them."
        };
      }
      if (topicId === "4") {
        return {
          title: "Compression",
          subtitle: "Learn about file compression. Understand how compression reduces file size, saves storage space, and makes files easier to share."
        };
      }
      if (topicId === "5") {
        return {
          title: "Backup Basics",
          subtitle: "Master backup basics. Learn how to protect your important files by creating copies in external drives or cloud storage."
        };
      }
      if (topicId === "6") {
        return {
          title: "File Security",
          subtitle: "Understand file security. Learn about passwords, encryption, permissions, and antivirus protection to keep your files safe."
        };
      }
      if (topicId === "7") {
        return {
          title: "Searching Files",
          subtitle: "Learn how to search for files. Master searching by name, type, content, or date to quickly find what you need."
        };
      }
      if (topicId === "8") {
        return {
          title: "Recycle Bin & Restore",
          subtitle: "Understand Recycle Bin and file restoration. Learn how to recover deleted files and permanently remove unwanted files."
        };
      }
      return {
        title: "File Systems & Data Management",
        subtitle: "Explore file organization, operations, types, compression, backups, security, and file management. Learn how to effectively manage your files and data."
      };
    }
    if (moduleId === 2) {
      if (topicId === "1") {
        return {
          title: "CPU Basics",
          subtitle:
            "The Central Processing Unit (CPU) is the brain of your computer. It executes instructions, processes data, and coordinates all system operations."
        };
      }
      if (topicId === "2") {
        return {
          title: "RAM Basics",
          subtitle:
            "Random Access Memory (RAM) is your computer's temporary workspace. It stores data that the CPU needs right now, making your computer fast and responsive."
        };
      }
      if (topicId === "3") {
        return {
          title: "ROM Basics",
          subtitle:
            "Read-Only Memory (ROM) stores permanent instructions that your computer needs to start up. Unlike RAM, ROM keeps its data even when the power is off."
        };
      }
      if (topicId === "4") {
        return {
          title: "Storage Concepts",
          subtitle:
            "Understanding the difference between volatile and non-volatile storage helps you make informed decisions about data management and device selection."
        };
      }
      if (topicId === "5") {
        return {
          title: "HDD - Hard Disk Drive",
          subtitle:
            "Hard Disk Drives use spinning magnetic platters to store data. They offer large capacity at affordable prices, making them ideal for bulk storage."
        };
      }
      if (topicId === "6") {
        return {
          title: "SSD & NVMe",
          subtitle:
            "Solid State Drives (SSD) use flash memory chips instead of spinning disks. They're faster, quieter, and more reliable than HDDs, making them ideal for modern computing."
        };
      }
      if (topicId === "7") {
        return {
          title: "Motherboard",
          subtitle:
            "The motherboard is the foundation that connects all components together. It provides power, data pathways, and communication between CPU, RAM, storage, and other hardware."
        };
      }
      if (topicId === "8") {
        return {
          title: "Ports & Connectors",
          subtitle:
            "Ports are connection points that allow devices to communicate with your computer. Understanding different port types helps you connect devices correctly and troubleshoot connection issues."
        };
      }
      if (topicId === "9") {
        return {
          title: "GPU Basics",
          subtitle:
            "Graphics Processing Unit (GPU) handles visual rendering, gaming graphics, video editing, and complex calculations. It's specialized for parallel processing of graphics data."
        };
      }
      if (topicId === "10") {
        return {
          title: "ALU - Arithmetic Logic Unit",
          subtitle:
            "The Arithmetic Logic Unit (ALU) is the part of the CPU that performs all mathematical calculations and logical decisions. It's the computational heart of the processor."
        };
      }
      if (topicId === "11") {
        return {
          title: "CU - Control Unit",
          subtitle:
            "The Control Unit (CU) directs all parts of the computer on what to do. It ensures instructions are followed in the correct order and coordinates all CPU operations."
        };
      }
      if (topicId === "12") {
        return {
          title: "Firmware",
          subtitle:
            "Firmware is low-level software stored in hardware that controls how devices function. It acts as the bridge between hardware and software, providing essential instructions for device operation."
        };
      }
      return {
        title: "Internal Components & Architecture",
        subtitle:
          "Detailed exploration of processing units, memory, storage, and the control hardware that glues everything together."
      };
    }


    return {
      title: `Module ${moduleId}`,
      subtitle: "Module description"
    };
  };

  const { title: heroTitle, subtitle: heroSubtitle } = resolveHeroContent();

  if (!sections) {
  return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Module {moduleId}</h2>
          <p className="text-muted-foreground">This module is coming soon.</p>
          <Button onClick={() => navigate("/dashboard")} className="mt-4">
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-background hide-scrollbar ${isTransitioning ? 'page-enter' : ''} ${isModule1Light ? 'module-1-light' : ''}`}
      style={isModule1Light ? {
        '--background': 'hsl(var(--module1-bg))',
        '--primary': 'hsl(var(--module1-primary))',
        '--primary-foreground': 'hsl(var(--module1-primary-foreground))',
        '--card': 'hsl(var(--module1-card))',
        '--card-foreground': 'hsl(var(--module1-card-foreground))',
        '--foreground': 'hsl(var(--module1-foreground))',
        '--muted-foreground': 'hsl(var(--module1-muted))',
        '--border': 'hsl(var(--module1-border))',
      } as React.CSSProperties : undefined}
    >
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b ${isModule1Light ? 'bg-white border-[#2C666E]/20' : 'bg-card border-border'} shadow-sm backdrop-blur-sm`}>
        <div className="w-full px-4 py-4">
          <div className="flex items-center justify-between gap-4 max-w-full">
            <div className="flex items-center gap-4 min-w-0">
              <SidebarTrigger className="-ml-1 shrink-0" />
          <button
            onClick={() => navigate("/dashboard")}
            className={`flex items-center gap-2 ${isModule1Light ? 'text-[#2C666E] hover:text-[#2C666E]/80' : 'text-muted-foreground hover:text-primary'} transition-colors shrink-0`}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="whitespace-nowrap">Back to Dashboard</span>
          </button>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`bg-background dark:bg-black border-b border-border relative overflow-hidden min-h-[calc(100vh-73px)] flex items-center ${isModule1Light ? 'bg-[#F0EDEE]' : ''}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-10 left-10 w-72 h-72 ${isModule1Light ? 'bg-[#2C666E]/10' : 'bg-primary/5'} dark:bg-primary/10 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-10 right-10 w-96 h-96 ${isModule1Light ? 'bg-[#2C666E]/5' : 'bg-secondary/5'} dark:bg-secondary/10 rounded-full blur-3xl`}></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isModule1Light ? 'text-[#2C666E]' : 'text-foreground'} dark:text-primary`}>
                {heroTitle}
                </h1>
              
              <p className="text-lg text-foreground/80 dark:text-foreground/90 mb-6 leading-relaxed">
                {heroSubtitle}
                </p>
              </div>
              
            <div className="hidden lg:block">
              {simulator ? (
                <SimulatorPreview simulator={simulator} />
              ) : moduleId === 1 && topicId === "1" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-hero.jpeg")} 
                    alt="What is a Computer?" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 1 && topicId === "2" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/types-combined.jpg")} 
                    alt="Types of Computers" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleTypesHero;
                    }}
                  />
                </div>
              ) : moduleId === 1 && topicId === "3" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-hardware-hero.jpg")} 
                    alt="Hardware Basics" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
              </div>
              ) : moduleId === 1 && topicId === "4" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-software-hero.jpg")} 
                    alt="Software Basics" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleSoftwareHero;
                    }}
                  />
                </div>
              ) : moduleId === 1 && topicId === "5" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-hw-sw-hero.jpg")} 
                    alt="Hardware vs Software" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 1 && topicId === "6" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-input-hero.jpg")} 
                    alt="Input Devices" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 1 && topicId === "7" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-output-hero.jpg")} 
                    alt="Output Devices" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 1 && topicId === "8" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m1-io-hero.jpg")} 
                    alt="I/O Devices" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 1 ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={moduleIntro} 
                    alt="Module cover" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ) : moduleId === 2 && topicId === "1" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-cpu-hero.jpg")} 
                    alt="CPU Basics" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "2" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-ram-hero.jpg")} 
                    alt="RAM Basics" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "3" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-rom-hero.jpg")} 
                    alt="ROM Basics" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "4" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-storage-hero.jpg")} 
                    alt="Storage Concepts" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "5" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-hdd-hero.jpg")} 
                    alt="HDD - Hard Disk Drive" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "6" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-ssd-hero.jpg")} 
                    alt="SSD & NVMe" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "7" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-motherboard-hero.jpg")} 
                    alt="Motherboard" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "8" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-ports-hero.jpg")} 
                    alt="Ports & Connectors" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "9" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-gpu-hero.jpg")} 
                    alt="GPU Basics" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "10" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-alu-hero.jpg")} 
                    alt="ALU - Arithmetic Logic Unit" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "11" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-cu-hero.jpg")} 
                    alt="CU - Control Unit" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 2 && topicId === "12" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m2-firmware-hero.jpg")} 
                    alt="Firmware" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "1" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-boot-hero.jpg")} 
                    alt="Boot Process" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "2" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-os-hero.jpg")} 
                    alt="Operating Systems" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "3" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-filesystem-hero.jpg")} 
                    alt="File System" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "4" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-extensions-hero.jpg")} 
                    alt="File Extensions" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "5" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-management-hero.jpg")} 
                    alt="File Management" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "6" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-specs-hero.jpg")} 
                    alt="System Specifications" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "7" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-mobile-hero.jpg")} 
                    alt="Mobile = A Computer" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "8" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-sensors-hero.jpg")} 
                    alt="Sensors in Devices" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "9" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-program-hero.jpg")} 
                    alt="What is a Program?" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 3 && topicId === "10" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m3-data-hero.jpg")} 
                    alt="What is Data?"
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 4 && topicId === "1" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m4-inside-hero.jpg")} 
                    alt="Inside a Computer"
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 4 && topicId === "2" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m4-cpu-hero.jpg")} 
                    alt="CPU Architecture"
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : moduleId === 4 && topicId === "3" ? (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={getImageUrl("module-media/m4-gpu-hero.jpg")} 
                    alt="GPU Architecture"
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = moduleIntro;
                    }}
                  />
                </div>
              ) : (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={moduleSoftware} 
                    alt="Module cover" 
                    className="relative w-full rounded-2xl shadow-soft-lg transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Topic 1: What is a Computer? */}
      {moduleId === 1 && module1Sections && (!topicId || topicId === "1") && ((sections: ReturnType<typeof getModule1Sections>) => (
        <div id="topic-what-is-a-computer">
          {/* Intro summary */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">{sections.hero.summary}</p>
          </div>
      </section>

          {/* IPO Section */}
          <section className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className={`p-8 space-y-6 ${isModule1Light ? 'bg-white border-[#2C666E]/20' : ''}`}>
                <div>
                  <p className={`text-sm uppercase tracking-[0.2em] ${isModule1Light ? 'text-[#2C666E]' : 'text-primary'} font-semibold mb-2`}>Topic 1</p>
                  <h2 className={`text-3xl font-bold ${isModule1Light ? 'text-[#2C666E]' : 'text-foreground'} mb-3`}>{sections.ipo.title}</h2>
                  <p className="text-foreground/80 leading-relaxed">{sections.ipo.description}</p>
                  </div>
                <div className="space-y-4">
                  {sections.ipo.steps.map((step) => (
                    <div key={step.id} className={`border ${isModule1Light ? 'border-[#2C666E]/30 hover:border-[#2C666E]/50' : 'border-border hover:border-primary/50'} rounded-2xl p-4 transition`}>
                      <h3 className={`text-lg font-semibold ${isModule1Light ? 'text-[#2C666E]' : 'text-primary'}`}>{step.label}</h3>
                      <p className="text-sm text-foreground/80 mt-1">{step.detail}</p>
          </div>
                  ))}
        </div>
            </Card>

              <Card className={`p-0 rounded-[28px] overflow-hidden border ${isModule1Light ? 'border-[#2C666E]/20 bg-white' : 'border-border'}`}>
                <div className="relative w-full h-full min-h-[360px]">
                <img 
                    src={getImageUrl(sections.ipo.visualAsset.fileName)}
                    alt={sections.ipo.visualAsset.alt}
                    className="w-full h-full object-cover"
                  onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                        parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">
                          IPO visual graphic will appear here. Save it as ${sections.ipo.visualAsset.fileName} inside src/assets/module-media/.
                        </div>`;
                    }
                  }}
                />
          </div>
            </Card>
                </div>

            <div className="mt-10">
              <Card className={`p-8 space-y-6 ${isModule1Light ? 'bg-white border-[#2C666E]/20' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-1">Hands-on</p>
                    <h3 className="text-2xl font-semibold text-foreground">{sections.ipo.simulation.title}</h3>
                    <p className="text-sm text-foreground/80 mt-1">{sections.ipo.simulation.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3 rounded-2xl border border-border p-4 bg-background/80">
                    <label className="text-sm font-semibold text-foreground" htmlFor="ipo-input-field">
                      {sections.ipo.simulation.inputLabel}
                    </label>
                    <input
                      id="ipo-input-field"
                      type="text"
                      value={ipoInput}
                      onChange={(e) => setIpoInput(e.target.value)}
                      placeholder={sections.ipo.simulation.placeholder}
                      className={`w-full rounded-xl border ${isModule1Light ? 'border-[#2C666E]/30' : 'border-border/80'} bg-muted/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 ${isModule1Light ? 'focus:ring-[#2C666E]' : 'focus:ring-primary'}`}
                    />
                <Button 
                      className="w-full"
                      onClick={handleIpoSimulation}
                      disabled={!ipoInput.trim() || isProcessingIpo}
                    >
                      {isProcessingIpo ? "Processing..." : sections.ipo.simulation.buttonLabel}
                </Button>
                    <p className="text-xs text-muted-foreground">{sections.ipo.simulation.helper}</p>
            </div>
            
                  <div className={`space-y-4 rounded-2xl border ${isModule1Light ? 'border-[#2C666E]/20 bg-gradient-to-br from-[#2C666E]/5 to-[#2C666E]/10' : 'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10'} p-6 flex flex-col items-center justify-center shadow-inner`}>
                    <p className={`text-xs font-semibold ${isModule1Light ? 'text-[#2C666E]' : 'text-primary'} tracking-[0.45em] uppercase`}>Process (P)</p>
                    {isProcessingIpo ? (
                      <div className="flex flex-col items-center gap-4 text-center">
                        <div className="relative flex items-center justify-center">
                          <div className={`w-20 h-20 rounded-full ${isModule1Light ? 'bg-[#2C666E]/20' : 'bg-primary/20'} flex items-center justify-center`}>
                            <Cog
                              className={`h-10 w-10 ${isModule1Light ? 'text-[#2C666E]' : 'text-primary'} animate-spin`}
                              style={{ animationDuration: "1.5s" }}
                    />
              </div>
                          <span className={`absolute inset-0 rounded-full border ${isModule1Light ? 'border-[#2C666E]/40' : 'border-primary/40'} animate-ping`} aria-hidden />
            </div>
                        <div className={`flex items-center gap-2 text-xs font-mono ${isModule1Light ? 'text-[#2C666E]/80' : 'text-primary/80'}`}>
                          <span className={`w-2 h-2 rounded-full ${isModule1Light ? 'bg-[#2C666E]' : 'bg-primary'} animate-bounce`} />
                          <span
                            className={`w-2 h-2 rounded-full ${isModule1Light ? 'bg-[#2C666E]/70' : 'bg-primary/70'} animate-bounce`}
                            style={{ animationDelay: "0.15s" }}
                          />
                          <span
                            className={`w-2 h-2 rounded-full ${isModule1Light ? 'bg-[#2C666E]/50' : 'bg-primary/50'} animate-bounce`}
                            style={{ animationDelay: "0.3s" }}
                          />
          </div>
                        <p className={`text-xs ${isModule1Light ? 'text-[#2C666E]/80' : 'text-primary/80'} uppercase tracking-[0.35em]`}>
                          Processing input…
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-muted-foreground text-sm">
                        <div className={`w-16 h-16 rounded-full border border-dashed ${isModule1Light ? 'border-[#2C666E]/30' : 'border-primary/30'} flex items-center justify-center bg-background`}>
                          <Cog className={`h-8 w-8 ${isModule1Light ? 'text-[#2C666E]/70' : 'text-primary/70'}`} />
                        </div>
                        <p>Awaiting new input</p>
                      </div>
                    )}
                  </div>

                  <div className={`space-y-3 rounded-2xl border ${isModule1Light ? 'border-[#2C666E]/20' : 'border-border'} p-4 ${isModule1Light ? 'bg-white' : 'bg-background/80'}`}>
                    <p className="text-sm font-semibold text-foreground">{sections.ipo.simulation.outputLabel}</p>
                    <div className={`relative rounded-[18px] border ${isModule1Light ? 'border-[#2C666E]/30 bg-gradient-to-br from-[#2C666E]/10 to-[#2C666E]/5 text-[#2C666E]' : 'border-primary/30 bg-gradient-to-br from-slate-900 to-slate-800 text-primary'} min-h-[140px] flex items-center justify-center px-4`}>
                  <div className="text-center">
                        <p className={`text-xs uppercase tracking-[0.4em] ${isModule1Light ? 'text-[#2C666E]/70' : 'text-primary/70'} mb-2`}>
                          Output
                        </p>
                        <p className={`text-lg font-semibold ${isModule1Light ? 'text-[#2C666E]' : 'text-white'} break-words max-w-full`}>
                          {ipoOutput || sections.ipo.simulation.idleScreen}
            </p>
          </div>
                      <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 ${isModule1Light ? 'bg-[#2C666E]/10 border-[#2C666E]/30' : 'bg-slate-900 border-primary/30'} rounded-b-xl border`}></div>
                  </div>
                </div>
                  </div>
                </Card>
        </div>
      </section>

          {/* Characteristics */}
          <section className="bg-muted/30">
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12 space-y-3">
                <h2 className="text-3xl font-bold text-foreground">{sections.characteristics.title}</h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  {sections.characteristics.intro}
                </p>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.characteristics.traits.map((trait) => (
                  <Card key={trait.id} className="p-6 space-y-3 h-full">
                    <div className="text-3xl">{trait.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{trait.title}</h3>
                    <p className="text-sm text-foreground/80">{trait.description}</p>
                    <p className="text-xs text-muted-foreground">{trait.example}</p>
              </Card>
                ))}
          </div>
        </div>
      </section>

          {/* Real-world examples */}
      <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl font-bold text-foreground">{sections.examples.title}</h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">{sections.examples.intro}</p>
                  </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {sections.examples.cards.map((card) => (
                <Card key={card.id} className="p-6 flex flex-col gap-3">
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{card.id.toUpperCase()}</div>
                  <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm text-foreground/80 flex-1">{card.description}</p>
            </Card>
              ))}
            </div>
            <Card className="p-0 overflow-hidden rounded-[32px] border border-border mt-10">
              <div className="relative w-full h-full">
            <img 
                  src={getImageUrl("module-media/m1-realworld.jpg")}
                  alt="Collage of smartphones, ATMs, smart TVs, and embedded systems that all follow the IPO cycle."
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="p-8 text-center text-sm text-muted-foreground">Add the real-world collage image as src/assets/module-media/m1-realworld.jpg to display it here.</div>';
                    }
                  }}
                />
              </div>
            </Card>
          </section>

          {/* Knowledge check */}
          <section className="bg-muted/20">
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-bold text-foreground">{sections.knowledgeCheck.title}</h2>
                <p className="text-lg text-foreground/80">{sections.knowledgeCheck.question}</p>
                <p className="text-sm text-muted-foreground">{sections.knowledgeCheck.tip}</p>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sections.knowledgeCheck.items.map((item) => {
                  const isRevealed = revealedMatches.includes(item.id);
            return (
            <Card 
                      key={item.id}
                      className="p-6 cursor-pointer transition hover:shadow-lg space-y-4 border border-border/60"
                      onClick={() =>
                        setRevealedMatches((prev) =>
                          prev.includes(item.id) ? prev : [...prev, item.id]
                        )
                      }
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                          Scenario
                        </span>
                        <span className="text-[11px] font-semibold text-primary/80">
                          {item.stageOrder}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-foreground">{item.device}</p>
                      <div className="space-y-2 border border-dashed border-border/70 rounded-2xl p-3 bg-muted/30">
                        <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Stage</p>
                        <p className={`text-lg font-bold ${isRevealed ? "text-primary" : "text-muted-foreground"}`}>
                          {isRevealed ? item.stage : "Tap to reveal"}
                        </p>
                        {isRevealed && (
                          <p className="text-sm text-foreground/80">{item.explanation}</p>
                    )}
                  </div>
          </Card>
                  );
                })}
                    </div>
              {revealedMatches.length === sections.knowledgeCheck.items.length && (
                <div className="text-center mt-6">
                  <p className="text-sm text-primary font-semibold">Great! You connected every scenario to its IPO stage.</p>
                </div>
              )}
            </div>
          </section>

          {/* Navigation */}
          <section className="container mx-auto px-4 py-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
              <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1")}>
                ← Back to topic list
              </Button>
              <Button 
                size="lg"
                className="w-full md:w-auto"
                onClick={() => navigate("/module/1/topic/2")}
              >
                Next Topic: Types of Computers →
              </Button>
            </div>
          </section>
            </div>
      ))(module1Sections)}

      {/* Topic 2: Types of Computers */}
      {moduleId === 1 && module1Sections && topicId === "2" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const everydayHighlights = [
          {
            title: "Desktops",
            description: "Reliable machines for labs and offices. They stay plugged in, deliver steady power, and are easy to upgrade."
          },
          {
            title: "Laptops",
            description: "Fold-and-go computers with built-in battery, webcam, and keyboard—perfect for students and remote workers."
          }
        ];

        const powerCards = [
          {
            icon: "🚀",
            title: "Supercomputers",
            description: "Room-sized systems crunching weather data, medicine, and space research around the clock."
          },
          {
            icon: "🖥️",
            title: "Servers",
            description: "Rack-mounted machines powering websites, games, and cloud storage for millions of users."
          },
          {
            icon: "🔌",
            title: "Embedded Systems",
            description: "Tiny chips hiding inside cars, ATMs, washing machines, and smart home devices."
          }
        ];

        const {
          everyday: everydayImage,
          portable: portableImage,
          closing: closingImage
        } = sections.types.images;

        return (
          <div id="topic-types-of-computers" className="space-y-16">
            {/* Everyday Computers */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Everyday Computers</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">Desktops & Laptops</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Most learners meet computers in classrooms, homes, or offices. Desktops stay on desks, while laptops follow you to study
                      sessions and coworking spaces.
                    </p>
                </div>
                  <div className="grid gap-4">
                    {everydayHighlights.map((item) => (
                      <Card key={item.title} className="p-6 border-border/70">
                        <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(everydayImage.fileName)}
                      alt={everydayImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${everydayImage.fileName}. ${everydayImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
          </Card>
        </div>
      </section>

            {/* Portable & Pocket Devices */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portable & Pocket</p>
                    <h2 className="text-3xl font-semibold text-foreground">Tablets & Smartphones</h2>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Tablets feel like slim notebooks for reading, sketching, and presenting. Smartphones shrink an entire computer into your
                      pocket with touch, sensors, and constant connectivity.
            </p>
                      </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Swipe-friendly</span>
                    <span>•</span>
                    <span>Always connected</span>
                    <span>•</span>
                    <span>All-day battery</span>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden border border-border/50">
                  <img
                    src={getImageUrl(portableImage.fileName)}
                    alt={portableImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${portableImage.fileName}. ${portableImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  These devices sacrifice size for freedom—perfect for reading notes on the bus or joining class calls on the go.
                </p>
              </Card>
            </section>

            {/* Interactive 3D Model */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Interactive Model</p>
                  <h2 className="text-3xl font-semibold text-foreground">Explore Computer Types in 3D</h2>
                  <p className="text-sm text-foreground/80 max-w-2xl mx-auto">
                    Rotate the model to see how massive supercomputers compare with servers, desktops, laptops, tablets, phones, and embedded chips.
                  </p>
                    </div>
                <div className="relative w-full rounded-3xl overflow-hidden border border-border/60 bg-gradient-to-br from-muted/30 to-muted/10">
                  <div className="w-full aspect-video max-h-[500px] [&_.sketchfab-embed-wrapper]:w-full [&_.sketchfab-embed-wrapper]:h-full [&_iframe]:w-full [&_iframe]:h-full [&_p]:hidden">
                    <div 
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ 
                        __html: `<div class="sketchfab-embed-wrapper"> <iframe title="Raspberry Pi 2" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" style="width: 100%; height: 100%;" src="https://sketchfab.com/models/89dc28451c7148fc8c8dd867d17af25b/embed?autostart=0&camera=0&preload=1&ui_hint=2"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/raspberry-pi-2-89dc28451c7148fc8c8dd867d17af25b?utm_medium=embed&utm_campaign=share-popup&utm_content=89dc28451c7148fc8c8dd867d17af25b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Raspberry Pi 2 </a> by <a href="https://sketchfab.com/VirtualStudio?utm_medium=embed&utm_campaign=share-popup&utm_content=89dc28451c7148fc8c8dd867d17af25b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Virtual Studio </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=89dc28451c7148fc8c8dd867d17af25b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
                      }}
                    />
                  </div>
                </div>
              </Card>
            </section>

            {/* Power & Purpose */}
            <section className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Power & Purpose</p>
                <h2 className="text-3xl font-semibold text-foreground">Behind-the-scenes Machines</h2>
                <p className="text-foreground/80">
                  Beyond personal devices lie specialized systems that keep research labs, big companies, and smart homes running.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {powerCards.map((card) => (
                  <Card key={card.title} className="p-6 space-y-4 border border-border/70">
                    <div className="text-4xl">{card.icon}</div>
                <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{card.title}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{card.description}</p>
                  </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Right tool, right task</h2>
                    <p className="text-foreground/80">
                      Choosing the correct computer type saves time, money, and energy. A giant server is overkill for homework, just like a
                      budget phone cannot replace a render farm.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>Match needs: study, entertainment, scientific research, or automation.</li>
                      <li>Every device still obeys Input → Process → Output, only at different scales.</li>
                      <li>Understanding the lineup makes the module roadmap clearer for upcoming hardware topics.</li>
                    </ul>
                  </div>
                  <Card className="p-0 overflow-hidden border border-border/60">
                    <div className="relative w-full h-full min-h-[260px] bg-muted">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                          }
                        }}
                      />
                </div>
              </Card>
                </div>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/1")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/3")}>
                  Next Topic: Hardware Basics →
                      </Button>
                    </div>
            </section>
                  </div>
        );
      })(module1Sections)}

      {/* Topic 3: Hardware Basics */}
      {moduleId === 1 && module1Sections && topicId === "3" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const {
          external: externalImage,
          internal: internalImage,
          comparison: comparisonImage,
          closing: closingImage
        } = sections.hardwareBasics.images;

        return (
          <div id="topic-hardware-basics" className="space-y-16">
            {/* External Hardware */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">External Hardware</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">Devices You Can Touch</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      External hardware includes all devices you can see and touch outside the computer. These are the parts you interact with daily.
                    </p>
              </div>
                  <div className="grid grid-cols-3 gap-4">
                    {sections.hardwareBasics.externalExamples.map((device) => (
                      <Card key={device.name} className="p-4 text-center border border-border/70">
                        <div className="text-3xl mb-2">{device.icon}</div>
                        <p className="text-sm font-medium text-foreground">{device.name}</p>
            </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(externalImage.fileName)}
                      alt={externalImage.alt}
                      className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${externalImage.fileName}. ${externalImage.brief}
                            </div>`;
                      }
                    }}
                  />
              </div>
            </Card>
            </div>
            </section>

            {/* Internal Hardware */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                <div className="relative w-full h-full min-h-[400px] bg-muted">
                  <img
                    src={getImageUrl(internalImage.fileName)}
                    alt={internalImage.alt}
                    className="w-full h-full object-cover"
                  onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${internalImage.fileName}. ${internalImage.brief}
                          </div>`;
                    }
                  }}
                />
          </div>
                <div className="p-8 text-center space-y-2">
                  <h2 className="text-3xl font-semibold text-foreground">Internal Hardware</h2>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Components hidden inside the computer case that process data and power the system. These parts need careful handling and expertise to work with.
                  </p>
              </div>
            </Card>
      </section>

            {/* Comparison Cards + Image */}
            <section className="container mx-auto px-4">
              <Card className="p-6 rounded-[28px] border border-border/70 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">External</h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Visible and touchable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Easy to replace or upgrade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>User-friendly connections</span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-primary font-semibold">Examples:</span>
                      </li>
                      <li className="flex items-start gap-2 ml-4">
                        <span>Keyboard, Mouse, Monitor</span>
                      </li>
                    </ul>
          </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Internal</h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Hidden inside the case</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Requires technical expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Critical for system performance</span>
                      </li>
                      <li className="flex items-start gap-2 mt-4">
                        <span className="text-primary font-semibold">Examples:</span>
                      </li>
                      <li className="flex items-start gap-2 ml-4">
                        <span>CPU, RAM, Motherboard</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative w-full aspect-[4/3] bg-muted rounded-[28px] overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-contain rounded-[28px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Understanding Hardware</h2>
                    <p className="text-foreground/80">
                      Knowing the difference between external and internal hardware helps you choose the right devices, troubleshoot problems, and make informed upgrade decisions.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>External parts are user-friendly and easy to replace.</li>
                      <li>Internal parts need careful handling and technical knowledge.</li>
                      <li>Both work together to make your computer function properly.</li>
                    </ul>
                </div>
                  <Card className="p-0 overflow-hidden border border-border/60 rounded-[28px]">
                    <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-contain rounded-[28px]"
              onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                }
              }}
            />
                    </div>
          </Card>
                </div>
          </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/2")}>
                  ← Previous Topic
              </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/4")}>
                  Next Topic: Software Basics →
                </Button>
            </div>
      </section>
          </div>
        );
      })(module1Sections)}

      {/* Topic 4: Software Basics */}
      {moduleId === 1 && module1Sections && topicId === "4" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const {
          system: systemImage,
          apps: appsImage,
          firmware: firmwareImage,
          layers: layersImage,
          closing: closingImage
        } = sections.softwareBasics.images;

        return (
          <div id="topic-software-basics" className="space-y-16">
            {/* System Software */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">System Software</p>
                  <h2 className="text-3xl font-semibold text-foreground">Operating Systems</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Operating systems (Windows, macOS, Linux) manage the whole computer. They control hardware and provide a platform for other software to run.
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(systemImage.fileName)}
                      alt={systemImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${systemImage.fileName}. ${systemImage.brief}
                            </div>`;
                        }
                      }}
                    />
            </div>
                </Card>
        </div>
      </section>

            {/* Application Software */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Application Software</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Apps for Every Task</h2>
                  <p className="text-foreground/80">
                    Apps like browsers, games, and office tools that help users accomplish tasks. Each app serves a specific purpose.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sections.softwareBasics.appExamples.map((app) => (
                    <Card key={app.name} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{app.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{app.name}</h3>
                      <p className="text-xs text-muted-foreground">{app.examples}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(appsImage.fileName)}
                      alt={appsImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${appsImage.fileName}. ${appsImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
          </Card>
        </div>
      </section>

            {/* Firmware & Drivers */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(firmwareImage.fileName)}
                    alt={firmwareImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${firmwareImage.fileName}. ${firmwareImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-3">Firmware</h3>
                      <p className="text-foreground/80">
                        Built-in code (BIOS/UEFI) stored on chips to start the computer. It runs before the operating system loads.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-3">Drivers</h3>
                      <p className="text-foreground/80">
                        Small programs that help the OS communicate with hardware devices. They translate between software and hardware.
            </p>
          </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Software Layers */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Software Architecture</p>
                  <h2 className="text-3xl font-semibold text-foreground">How Software Layers Work</h2>
                  </div>
                <Card className="p-0 overflow-hidden border border-border/60 rounded-[28px]">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(layersImage.fileName)}
                      alt={layersImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${layersImage.fileName}. ${layersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <p className="text-center text-foreground/80 max-w-2xl mx-auto">
                  Software works in layers. Firmware starts the computer, the OS manages everything, and applications let you work on specific tasks.
                </p>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Software Brings Hardware to Life</h2>
                    <p className="text-foreground/80">
                      Without software, hardware is just metal and plastic. Software brings computers to life, enabling them to perform tasks and solve problems.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>System software manages the computer's resources.</li>
                      <li>Application software lets you accomplish specific tasks.</li>
                      <li>Firmware and drivers ensure everything works together smoothly.</li>
                    </ul>
                  </div>
                  <Card className="p-0 overflow-hidden border border-border/60 rounded-[28px]">
                    <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-contain rounded-[28px]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                          }
                        }}
                      />
                    </div>
                  </Card>
                </div>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/3")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/5")}>
                  Next Topic: Hardware vs Software →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module1Sections)}

      {/* Topic 5: Hardware vs Software */}
      {moduleId === 1 && module1Sections && topicId === "5" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const {
          comparison: comparisonImage,
          mapping: mappingImage,
          closing: closingImage
        } = sections.hardwareVsSoftware.images;

        return (
          <div id="topic-hardware-vs-software" className="space-y-16">
            {/* Key Differences */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Key Differences</p>
                  <h2 className="text-3xl font-semibold text-foreground">Hardware vs Software</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Hardware and software rely on each other. Hardware provides the body, software provides the brain. Understanding their relationship is key to using computers effectively.
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                  <div className="relative w-full h-full min-h-[320px] bg-muted">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Comparison Cards */}
            <section className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-6">
                {sections.hardwareVsSoftware.comparisons.map((comp, index) => (
                  <Card key={index} className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-4">{comp.label}</h3>
                    <div className="space-y-3">
                  <div>
                        <p className="text-sm font-medium text-foreground mb-1">Hardware:</p>
                        <p className="text-sm text-foreground/80">{comp.hardware}</p>
                  </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Software:</p>
                        <p className="text-sm text-foreground/80">{comp.software}</p>
                  </div>
                </div>
              </Card>
                ))}
              </div>
            </section>

            {/* Practical Mapping */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Practical Examples</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How They Work Together</h2>
                  <p className="text-foreground/80">
                    Every action on a computer requires both hardware and software working together.
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(mappingImage.fileName)}
                      alt={mappingImage.alt}
                      className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${mappingImage.fileName}. ${mappingImage.brief}
                            </div>`;
                      }
                    }}
                  />
            </div>
              </Card>
                <div className="grid md:grid-cols-3 gap-4">
                  {sections.hardwareVsSoftware.mapping.map((map, index) => (
                    <Card key={index} className="p-6 border border-border/70">
                      <h3 className="text-lg font-semibold text-primary mb-3">{map.action}</h3>
                      <div className="space-y-2 text-sm">
                  <div>
                          <span className="font-medium text-foreground">Hardware: </span>
                          <span className="text-foreground/80">{map.hardware}</span>
            </div>
                        <div>
                          <span className="font-medium text-foreground">Software: </span>
                          <span className="text-foreground/80">{map.software}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
          </div>
        </div>
      </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Understanding the Relationship</h2>
                    <p className="text-foreground/80">
                      Understanding the relationship between hardware and software helps you troubleshoot problems, make better choices, and appreciate how computers work.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>Hardware without software is just metal and plastic.</li>
                      <li>Software without hardware has nowhere to run.</li>
                      <li>Both must work together for a computer to function.</li>
                    </ul>
                  </div>
                  <Card className="p-0 overflow-hidden border border-border/60">
                    <div className="relative w-full h-full min-h-[260px] bg-muted">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                          }
                        }}
                      />
                    </div>
                  </Card>
                </div>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/4")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/6")}>
                  Next Topic: Input Devices →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module1Sections)}

      {/* Topic 6: Input Devices */}
      {moduleId === 1 && module1Sections && topicId === "6" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const {
          common: commonImage,
          flow: flowImage,
          specialized: specializedImage,
          closing: closingImage
        } = sections.inputDevices.images;

        return (
          <div id="topic-input-devices" className="space-y-16">
            {/* Common Input Devices */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Common Input Devices</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">Devices You Use Daily</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Input devices send data to the computer. Each device is suited for a different type of data: text, clicks, voice, images, or touch.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {sections.inputDevices.devices.map((device) => (
                      <Card key={device.name} className="p-4 text-center border border-border/70">
                        <div className="text-3xl mb-2">{device.icon}</div>
                        <p className="text-sm font-medium text-foreground mb-1">{device.name}</p>
                        <p className="text-xs text-muted-foreground">{device.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(commonImage.fileName)}
                      alt={commonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${commonImage.fileName}. ${commonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
            </Card>
              </div>
            </section>

            {/* How They Work */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">How They Work</p>
                  <h2 className="text-3xl font-semibold text-foreground">The Input Flow</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Input devices capture data from the real world and send it to the computer's processor. The processor then uses this data to perform tasks and produce output.
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(flowImage.fileName)}
                      alt={flowImage.alt}
                      className="w-full h-full object-cover"
              onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${flowImage.fileName}. ${flowImage.brief}
                            </div>`;
                }
              }}
            />
                  </div>
          </Card>
              </div>
            </section>

            {/* Specialized Devices */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                <div className="relative w-full h-full min-h-[400px] bg-muted">
                  <img
                    src={getImageUrl(specializedImage.fileName)}
                    alt={specializedImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${specializedImage.fileName}. ${specializedImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
                <div className="p-8 text-center space-y-2">
                  <h2 className="text-3xl font-semibold text-foreground">Specialized Input Devices</h2>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Some input devices are designed for specific tasks like gaming, design, or data entry. These specialized devices make certain tasks easier and more efficient.
                  </p>
                </div>
          </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Choosing the Right Input Device</h2>
                    <p className="text-foreground/80">
                      Choosing the right input device makes your work easier and more efficient. Understanding how they work helps you troubleshoot connection issues and improve your computing experience.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>Different devices are suited for different tasks.</li>
                      <li>Understanding input flow helps with troubleshooting.</li>
                      <li>Quality input devices improve productivity and comfort.</li>
                    </ul>
                  </div>
                  <Card className="p-0 overflow-hidden border border-border/60">
                    <div className="relative w-full h-full min-h-[260px] bg-muted">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                          }
                        }}
                      />
                </div>
              </Card>
                </div>
              </Card>
      </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/5")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/7")}>
                  Next Topic: Output Devices →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module1Sections)}

      {/* Topic 7: Output Devices */}
      {moduleId === 1 && module1Sections && topicId === "7" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const {
          common: commonImage,
          flow: flowImage,
          specialized: specializedImage,
          closing: closingImage
        } = sections.outputDevices.images;

        return (
          <div id="topic-output-devices" className="space-y-16">
            {/* Common Output Devices */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Common Output Devices</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">Devices You See and Hear</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Output devices show or produce the results of computer processing. Each device is designed for a specific type of output: visual, audio, or physical.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {sections.outputDevices.devices.map((device) => (
                      <Card key={device.name} className="p-4 text-center border border-border/70">
                        <div className="text-3xl mb-2">{device.icon}</div>
                        <p className="text-sm font-medium text-foreground mb-1">{device.name}</p>
                        <p className="text-xs text-muted-foreground">{device.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(commonImage.fileName)}
                      alt={commonImage.alt}
                      className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${commonImage.fileName}. ${commonImage.brief}
                            </div>`;
                      }
                    }}
                  />
            </div>
              </Card>
            </div>
            </section>

            {/* How They Work */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">How They Work</p>
                  <h2 className="text-3xl font-semibold text-foreground">The Output Flow</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    The computer processes data and sends signals to output devices. These devices convert digital signals into visible, audible, or physical output that you can perceive.
                  </p>
          </div>
                <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(flowImage.fileName)}
                      alt={flowImage.alt}
                      className="w-full h-full object-cover"
              onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${flowImage.fileName}. ${flowImage.brief}
                            </div>`;
                }
              }}
            />
                  </div>
          </Card>
        </div>
      </section>

            {/* Specialized Output Devices */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                <div className="relative w-full h-full min-h-[400px] bg-muted">
                  <img
                    src={getImageUrl(specializedImage.fileName)}
                    alt={specializedImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${specializedImage.fileName}. ${specializedImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  </div>
                <div className="p-8 text-center space-y-2">
                  <h2 className="text-3xl font-semibold text-foreground">Specialized Output Devices</h2>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Some output devices serve specialized purposes. 3D printers create physical objects, braille displays help visually impaired users, and large format printers produce posters and banners.
                  </p>
                </div>
          </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">Output Devices Connect You to the Computer</h2>
                    <p className="text-foreground/80">
                      Output devices are your window into the digital world. They make computer processing visible, audible, and tangible, allowing you to interact with and understand what the computer is doing.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>Different devices are suited for different types of information.</li>
                      <li>Understanding output flow helps with troubleshooting display or audio issues.</li>
                      <li>Quality output devices improve your computing experience.</li>
                    </ul>
                    </div>
                  <Card className="p-0 overflow-hidden border border-border/60">
                    <div className="relative w-full h-full min-h-[260px] bg-muted">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                          }
                        }}
                      />
                    </div>
            </Card>
                </div>
              </Card>
      </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/6")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/8")}>
                  Next Topic: I/O Devices →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module1Sections)}

      {/* Topic 8: I/O Devices */}
      {moduleId === 1 && module1Sections && topicId === "8" && ((sections: ReturnType<typeof getModule1Sections>) => {
        const {
          common: commonImage,
          flow: flowImage,
          examples: examplesImage,
          closing: closingImage
        } = sections.ioDevices.images;

        return (
          <div id="topic-io-devices" className="space-y-16">
            {/* Common I/O Devices */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Common I/O Devices</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">Devices That Do Both</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      I/O devices can both send data to the computer (input) and receive data from it (output). They combine the capabilities of input and output devices in a single device.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {sections.ioDevices.devices.map((device) => (
                      <Card key={device.name} className="p-4 text-center border border-border/70">
                        <div className="text-3xl mb-2">{device.icon}</div>
                        <p className="text-sm font-medium text-foreground mb-1">{device.name}</p>
                        <p className="text-xs text-muted-foreground">{device.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(commonImage.fileName)}
                      alt={commonImage.alt}
                      className="w-full h-full object-cover"
              onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${commonImage.fileName}. ${commonImage.brief}
                            </div>`;
                }
              }}
            />
                  </div>
          </Card>
              </div>
            </section>

            {/* How They Work */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">How They Work</p>
                  <h2 className="text-3xl font-semibold text-foreground">Bidirectional Communication</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    I/O devices can send and receive data simultaneously. When you touch a screen, it sends input to the computer, and the computer sends visual output back to the screen. This creates a complete interaction loop.
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                  <div className="relative w-full h-full min-h-[300px] bg-muted">
                    <img
                      src={getImageUrl(flowImage.fileName)}
                      alt={flowImage.alt}
                      className="w-full h-full object-cover"
              onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${flowImage.fileName}. ${flowImage.brief}
                            </div>`;
                }
              }}
            />
                  </div>
          </Card>
                    </div>
      </section>

            {/* Real-World Examples */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                <div className="relative w-full h-full min-h-[400px] bg-muted">
                  <img
                    src={getImageUrl(examplesImage.fileName)}
                    alt={examplesImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${examplesImage.fileName}. ${examplesImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
                <div className="p-8 text-center space-y-2">
                  <h2 className="text-3xl font-semibold text-foreground">I/O Devices in Action</h2>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Touchscreens let you interact directly with what you see. Headsets let you hear audio while speaking into the microphone. USB and Bluetooth devices transfer data both ways, making them perfect for sharing files and connecting peripherals.
                  </p>
                </div>
          </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4 pb-4">
              <Card className="p-8 rounded-[32px] border border-border/70">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why it matters</p>
                    <h2 className="text-3xl font-semibold text-foreground">I/O Devices Complete the Interaction Cycle</h2>
                    <p className="text-foreground/80">
                      I/O devices bridge the gap between you and the computer, creating a seamless two-way communication. They make modern computing intuitive and efficient by combining input and output in one device.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5">
                      <li>I/O devices enable natural, interactive computing experiences.</li>
                      <li>They reduce the need for separate input and output devices.</li>
                      <li>Understanding I/O devices helps you troubleshoot connection and communication issues.</li>
                    </ul>
                    </div>
                  <Card className="p-0 overflow-hidden border border-border/60">
                    <div className="relative w-full h-full min-h-[260px] bg-muted">
                      <img
                        src={getImageUrl(closingImage.fileName)}
                        alt={closingImage.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${closingImage.fileName}. ${closingImage.brief}
                              </div>`;
                          }
                        }}
                      />
                    </div>
                  </Card>
                </div>
              </Card>
      </section>

            {/* Navigation - Last Topic */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/1/topic/7")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/1")}>
                  Next Module: Internal Components →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module1Sections)}

      {/* Module 2 Topic 1: CPU Basics */}
      {moduleId === 2 && module2Sections && topicId === "1" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          coresComparison: coresComparisonImage,
          aluCu: aluCuImage,
          inAction: inActionImage
        } = sections.cpuBasics.images;

        return (
          <div id="topic-cpu-basics" className="space-y-16">
            {/* Section 1: What is a CPU? */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">CPU Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is a CPU?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    The Central Processing Unit (CPU) is the primary component that processes instructions and performs calculations. Every action on your computer—from opening an app to playing a game—requires the CPU to execute commands.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Processes billions of instructions per second</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Acts as the computer's "brain"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Located on the motherboard</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Cores & Threads */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Processing Power</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Cores & Threads Explained</h2>
                  <p className="text-foreground/80">
                    Modern CPUs have multiple cores, each capable of processing tasks independently. Threads allow each core to handle multiple tasks simultaneously, dramatically improving performance.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sections.cpuBasics.coreExamples.map((example) => (
                    <Card key={example.name} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{example.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{example.name}</h3>
                      <p className="text-xs text-muted-foreground">{example.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(coresComparisonImage.fileName)}
                      alt={coresComparisonImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${coresComparisonImage.fileName}. ${coresComparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: ALU & CU (Option 2: Image Left, Text Right) */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(aluCuImage.fileName)}
                      alt={aluCuImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${aluCuImage.fileName}. ${aluCuImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">CPU Architecture</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">ALU & CU</h2>
                  </div>
                  <div className="space-y-6">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-2xl font-semibold text-primary mb-3">ALU - Arithmetic Logic Unit</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        The ALU performs all mathematical calculations (addition, subtraction, multiplication, division) and logical operations (AND, OR, NOT). It's the part of the CPU that does the actual computation work.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-2xl font-semibold text-primary mb-3">CU - Control Unit</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        The Control Unit directs the flow of data and instructions within the CPU. It fetches instructions from memory, decodes them, and coordinates the ALU and other components to execute them.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: CPU in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">CPU in Action</h3>
                      <p className="text-lg text-white/90">
                        Every click, every keystroke, every app launch—the CPU is working behind the scenes, processing millions of instructions to make your computer responsive and fast.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">🧠</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding CPU</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Knowing how CPUs work helps you choose the right computer for your needs, understand why some tasks are faster than others, and make informed decisions when upgrading your system. Whether you're gaming, programming, or just browsing, the CPU is the foundation of your computer's performance.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <div className="w-full md:w-auto"></div>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/2")}>
                  Next Topic: RAM Basics →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 2: RAM Basics */}
      {moduleId === 2 && module2Sections && topicId === "2" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          speedComparison: speedComparisonImage,
          usagePatterns: usagePatternsImage,
          inAction: inActionImage
        } = sections.ramBasics.images;

        return (
          <div id="topic-ram-basics" className="space-y-16">
            {/* Section 1: What is RAM? */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">RAM Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is RAM?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Random Access Memory (RAM) is temporary storage that holds data your computer is actively using. Unlike storage drives, RAM is extremely fast but clears when you turn off your computer.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Stores data temporarily while computer is on</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Fast access for CPU to read and write</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Clears when power is turned off</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Located on the motherboard</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Interactive 3D Model */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Interactive Model</p>
                  <h2 className="text-3xl font-semibold text-foreground">Explore RAM in 3D</h2>
                  <p className="text-sm text-foreground/80 max-w-2xl mx-auto">
                    Rotate the model to see RAM stick structure, memory chips, connectors, and how it fits into the motherboard.
                  </p>
                </div>
                <div className="relative w-full rounded-3xl overflow-hidden border border-border/60 bg-gradient-to-br from-muted/30 to-muted/10">
                  <div className="w-full aspect-video max-h-[500px] [&_.sketchfab-embed-wrapper]:w-full [&_.sketchfab-embed-wrapper]:h-full [&_iframe]:w-full [&_iframe]:h-full [&_p]:hidden">
                    <div 
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ 
                        __html: `<div class="sketchfab-embed-wrapper"> <iframe title="DIMM RAM Stick" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" style="width: 100%; height: 100%;" src="https://sketchfab.com/models/8401e8e91db9418fb00f94e340c0f944/embed?autostart=0&camera=0&preload=1&ui_hint=2"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/dimm-ram-stick-8401e8e91db9418fb00f94e340c0f944?utm_medium=embed&utm_campaign=share-popup&utm_content=8401e8e91db9418fb00f94e340c0f944" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> DIMM RAM Stick </a> by <a href="https://sketchfab.com/jaromir.ternavskiy?utm_medium=embed&utm_campaign=share-popup&utm_content=8401e8e91db9418fb00f94e340c0f944" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Kroko.blend </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8401e8e91db9418fb00f94e340c0f944" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
                      }}
                    />
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: Why RAM Affects Speed */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Performance Impact</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why RAM Affects Speed</h2>
                  <p className="text-foreground/80">
                    RAM speed directly impacts how fast your computer can access and process data. More RAM means more space for active programs, reducing the need to swap data to slower storage.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sections.ramBasics.speedExamples.map((example) => (
                    <Card key={example.name} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{example.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{example.name}</h3>
                      <p className="text-xs text-muted-foreground">{example.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(speedComparisonImage.fileName)}
                      alt={speedComparisonImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${speedComparisonImage.fileName}. ${speedComparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: RAM Usage Patterns */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(usagePatternsImage.fileName)}
                      alt={usagePatternsImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${usagePatternsImage.fileName}. ${usagePatternsImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Memory Management</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">RAM Usage Patterns</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Active Programs</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Every app you open uses RAM. More apps open = more RAM needed. When RAM fills up, your computer slows down.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">System Processes</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        The operating system itself uses RAM for background tasks, security, and system management.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Cached Data</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        RAM stores frequently accessed data temporarily to speed up future access, making your computer feel faster.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Temporary Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Files being edited, downloads in progress, and temporary work files all use RAM space.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: RAM in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">RAM in Action</h3>
                      <p className="text-lg text-white/90">
                        Every app you open, every file you access, every browser tab—RAM is working behind the scenes, storing active data to keep your computer responsive and fast.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">💾</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding RAM</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Knowing how RAM works helps you choose the right amount for your needs, understand why your computer slows down when you open too many apps, and make informed decisions when upgrading your system. Whether you're gaming, video editing, or just browsing, RAM is crucial for smooth performance.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/1")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/3")}>
                  Next Topic: ROM Basics →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 3: ROM Basics */}
      {moduleId === 2 && module2Sections && topicId === "3" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          bootProcess: bootProcessImage,
          nonVolatile: nonVolatileImage,
          inAction: inActionImage
        } = sections.romBasics.images;

        return (
          <div id="topic-rom-basics" className="space-y-16">
            {/* Section 1: What is ROM? */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">ROM Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is ROM?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Read-Only Memory (ROM) is permanent storage that contains essential startup instructions. Every time you turn on your computer, ROM provides the first code that tells your system how to begin operating.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Stores permanent data that never changes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Non-volatile (keeps data when power is off)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Contains boot instructions (BIOS/UEFI)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Located on the motherboard</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Purpose & Boot Instructions */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Boot Process</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">ROM's Role in Booting</h2>
                  <p className="text-foreground/80">
                    ROM contains the first instructions your computer reads when it starts. These instructions tell the computer how to begin the boot process, check hardware, and load the operating system.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sections.romBasics.purposeExamples.map((example) => (
                    <Card key={example.name} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{example.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{example.name}</h3>
                      <p className="text-xs text-muted-foreground">{example.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(bootProcessImage.fileName)}
                      alt={bootProcessImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${bootProcessImage.fileName}. ${bootProcessImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: Non-Volatile Memory (Image Left, Text Right) */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(nonVolatileImage.fileName)}
                      alt={nonVolatileImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${nonVolatileImage.fileName}. ${nonVolatileImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Memory Types</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Non-Volatile Memory</h2>
                  </div>
                  <div className="space-y-6">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-2xl font-semibold text-primary mb-3">Permanent Storage</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Unlike RAM, ROM keeps its data even when the computer is turned off. This makes it perfect for storing essential instructions that your computer needs every time it starts.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-2xl font-semibold text-primary mb-3">Boot Instructions</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        ROM contains the BIOS (Basic Input/Output System) or UEFI (Unified Extensible Firmware Interface) firmware. This firmware provides the initial instructions needed to start your computer and load the operating system.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-2xl font-semibold text-primary mb-3">System Configuration</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        ROM also stores system settings and configuration data that your computer needs to function properly, such as hardware initialization settings and boot order preferences.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: ROM in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">ROM in Action</h3>
                      <p className="text-lg text-white/90">
                        Every time you turn on your computer, ROM provides the first instructions. It checks your hardware, initializes components, and starts the boot process that eventually loads your operating system.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">💿</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding ROM</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Understanding ROM helps you know how your computer starts, why it needs permanent instructions, and the difference between ROM and RAM. This knowledge is essential for troubleshooting boot issues, understanding system architecture, and making informed decisions about firmware updates and system configuration.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/2")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/4")}>
                  Next Topic: Storage Concepts →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 4: Storage Concepts */}
      {moduleId === 2 && module2Sections && topicId === "4" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          hierarchy: hierarchyImage,
          workflow: workflowImage,
          decision: decisionImage
        } = sections.storageConcepts.images;

        return (
          <div id="topic-storage-concepts" className="space-y-16">
            {/* Section 1: Storage Overview - Full-Width Banner with Overlay */}
            <section className="container mx-auto px-4 pt-16">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(hierarchyImage.fileName)}
                    alt={hierarchyImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${hierarchyImage.fileName}. ${hierarchyImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white w-full">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">Storage Fundamentals</p>
                      <h2 className="text-3xl font-semibold mb-3">What is Storage?</h2>
                      <p className="text-lg text-white/90 max-w-2xl">
                        Storage is where your computer keeps all your data—from the operating system to your photos, documents, and applications. Understanding different storage types helps you make better decisions about data management and device selection.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: Volatile vs Non-Volatile - Three-Column Comparison Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Understanding Storage Types</h2>
                  <p className="text-foreground/80">
                    Different storage types serve different purposes. Volatile storage is fast but temporary, while non-volatile storage is permanent but typically slower.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {sections.storageConcepts.storageTypes.map((type) => (
                    <Card key={type.name} className="p-8 text-center border border-border/70 hover:shadow-lg transition-shadow">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-2xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{type.description}</p>
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground font-medium">Examples:</p>
                        <p className="text-sm text-foreground/70 mt-1">{type.examples}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Purpose & Usage - Text-Only with Bullet Points */}
            <section className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Purpose</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Why We Need Different Storage Types</h2>
                  <p className="text-foreground/80">
                    Different storage types serve different purposes in your computer:
                  </p>
                </div>
                <Card className="p-8 border border-border/70 space-y-6">
                  {sections.storageConcepts.storagePurposes.map((purpose, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0 last:pb-0">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed pt-1">{purpose}</p>
                    </div>
                  ))}
                </Card>
              </div>
            </section>

            {/* Section 4: Storage in Action - Centered Image with Text Below */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(workflowImage.fileName)}
                      alt={workflowImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${workflowImage.fileName}. ${workflowImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <h2 className="text-3xl font-semibold text-foreground">Storage in Action</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Every file you save, every app you install, every photo you store—storage makes it all possible. Understanding how data flows through different storage types helps you optimize performance, manage space effectively, and choose the right storage solution for your needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Why It Matters - Side-by-Side: Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Understanding Storage</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Why Understanding Storage Matters</h2>
                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Understanding storage helps you choose the right devices, manage data effectively, and optimize performance. Whether you're buying a new computer, upgrading storage, or troubleshooting issues, knowing the difference between storage types is essential.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Choose the right devices for your needs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Manage data effectively and efficiently</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Optimize performance and speed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(decisionImage.fileName)}
                      alt={decisionImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${decisionImage.fileName}. ${decisionImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/3")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/5")}>
                  Next Topic: HDD →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 5: HDD */}
      {moduleId === 2 && module2Sections && topicId === "5" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          external: externalImage,
          internal: internalImage,
          useCases: useCasesImage
        } = sections.hddBasics.images;

        return (
          <div id="topic-hdd" className="space-y-16">
            {/* Section 1: What is HDD? - Image Left, Text Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(externalImage.fileName)}
                      alt={externalImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${externalImage.fileName}. ${externalImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">HDD Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is HDD?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Hard Disk Drive (HDD) is a mechanical storage device that uses spinning magnetic platters to store data. It's one of the most traditional and widely used storage solutions, offering large capacity at affordable prices.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Uses spinning magnetic platters</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Stores data magnetically</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Large capacity, affordable</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Traditional storage solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: How HDD Works - Full-Width Diagram with Annotations */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">HDD Structure</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">HDD Internal Structure</h2>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(internalImage.fileName)}
                      alt={internalImage.alt}
                      className="w-full h-full object-contain p-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${internalImage.fileName}. ${internalImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="max-w-3xl mx-auto">
                  <p className="text-foreground/80 leading-relaxed text-center">
                    How it works: Data is written and read using magnetic heads that move across spinning platters. The faster the platters spin (measured in RPM - Revolutions Per Minute), the faster data can be accessed. Common speeds are 5400 RPM and 7200 RPM for consumer drives.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Pros & Cons - Split Comparison: Two Cards Side-by-Side */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">HDD Evaluation</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">HDD Advantages & Disadvantages</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-8 border border-border/70 bg-primary/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-3xl">✅</div>
                      <h3 className="text-2xl font-semibold text-foreground">Advantages</h3>
                    </div>
                    <ul className="space-y-3">
                      {sections.hddBasics.advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold mt-1">•</span>
                          <span className="text-sm text-foreground/80">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-8 border border-border/70 bg-destructive/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-3xl">❌</div>
                      <h3 className="text-2xl font-semibold text-foreground">Disadvantages</h3>
                    </div>
                    <ul className="space-y-3">
                      {sections.hddBasics.disadvantages.map((disadvantage, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-destructive font-semibold mt-1">•</span>
                          <span className="text-sm text-foreground/80">{disadvantage}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </section>

            {/* Section 4: HDD in Real World - Two-Column Mixed Layout */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(useCasesImage.fileName)}
                      alt={useCasesImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${useCasesImage.fileName}. ${useCasesImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">HDD Applications</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Where HDDs Are Used</h2>
                  </div>
                  <div className="space-y-4">
                    {sections.hddBasics.useCases.map((useCase, index) => (
                      <Card key={index} className="p-4 border border-border/70">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <span className="text-primary font-semibold text-xs">{index + 1}</span>
                          </div>
                          <p className="text-sm text-foreground/80">{useCase}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm pt-2">
                    HDDs remain popular for bulk storage, backups, and applications where cost per gigabyte is more important than speed.
                  </p>
                </div>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💾</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding HDD</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding HDDs helps you make informed storage decisions, choose between HDD and SSD based on your needs, and understand why some storage is faster than others. This knowledge is essential when buying computers, upgrading storage, or troubleshooting performance issues.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/4")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/6")}>
                  Next Topic: SSD & NVMe →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 6: SSD & NVMe */}
      {moduleId === 2 && module2Sections && topicId === "6" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          speedComparison: speedComparisonImage,
          nvme: nvmeImage,
          longevity: longevityImage,
          decision: decisionImage
        } = sections.ssdBasics.images;

        return (
          <div id="topic-ssd-nvme" className="space-y-16">
            {/* Section 1: What is SSD? - Full-Width Banner with Overlay */}
            <section className="container mx-auto px-4 pt-16">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(overviewImage.fileName)}
                    alt={overviewImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${overviewImage.fileName}. ${overviewImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white w-full">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">SSD Fundamentals</p>
                      <h2 className="text-3xl font-semibold mb-3">What is SSD?</h2>
                      <p className="text-lg text-white/90 max-w-2xl">
                        Solid State Drive (SSD) uses flash memory chips instead of spinning disks. No moving parts = faster, quieter, more reliable than HDD.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: SSD Advantages - 4-Card Grid */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">SSD Benefits</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why Choose SSD?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sections.ssdBasics.advantages.map((advantage) => (
                    <Card key={advantage.name} className="p-6 text-center border border-border/70 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{advantage.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{advantage.name}</h3>
                      <p className="text-sm text-foreground/80">{advantage.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Speed Comparison - Image Left, Text Right with Bullets */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(speedComparisonImage.fileName)}
                      alt={speedComparisonImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${speedComparisonImage.fileName}. ${speedComparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Performance</p>
                  <h2 className="text-3xl font-semibold text-foreground">SSD vs HDD Speed</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    SSDs are dramatically faster than HDDs:
                  </p>
                  <div className="space-y-3 pt-4">
                    {sections.ssdBasics.speedDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <p className="text-sm text-foreground/80">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: NVMe Technology - Centered Image with Text Below */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(nvmeImage.fileName)}
                      alt={nvmeImage.alt}
                      className="w-full h-full object-contain p-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${nvmeImage.fileName}. ${nvmeImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <h2 className="text-3xl font-semibold text-foreground">What is NVMe?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    NVMe (Non-Volatile Memory Express) is the fastest SSD interface. It connects directly to PCIe, bypassing SATA bottlenecks for maximum speed.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Card className="p-4 border border-border/70">
                      <p className="text-sm font-semibold text-primary mb-1">SATA SSD</p>
                      <p className="text-lg font-bold text-foreground">{sections.ssdBasics.nvmeDetails.sata}</p>
                    </Card>
                    <Card className="p-4 border border-border/70 bg-primary/5">
                      <p className="text-sm font-semibold text-primary mb-1">NVMe SSD</p>
                      <p className="text-lg font-bold text-foreground">{sections.ssdBasics.nvmeDetails.nvme}</p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Why It Matters - Side-by-Side: Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Understanding SSD</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Why Understanding SSD Matters</h2>
                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Understanding SSDs helps you choose the right storage, understand fast boot times, and make informed upgrade decisions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Choose the right storage for speed vs cost</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Understand why modern computers boot so fast</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Make informed upgrade decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Know when to use SSD vs HDD</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(decisionImage.fileName)}
                      alt={decisionImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${decisionImage.fileName}. ${decisionImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/5")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/7")}>
                  Next Topic: Motherboard →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 7: Motherboard */}
      {moduleId === 2 && module2Sections && topicId === "7" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          cpuSocket: cpuSocketImage,
          ramPower: ramPowerImage,
          ports: portsImage
        } = sections.motherboardBasics.images;

        return (
          <div id="topic-motherboard" className="space-y-16">
            {/* Section 1: What is a Motherboard? - Image Left, Text Right with Small Cards */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Motherboard Fundamentals</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">What is a Motherboard?</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      The motherboard connects all components together, providing power, data pathways, and communication.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {sections.motherboardBasics.keyComponents.map((component) => (
                      <Card key={component.name} className="p-4 text-center border border-border/70">
                        <div className="text-2xl mb-2">{component.icon}</div>
                        <p className="text-sm font-medium text-foreground mb-1">{component.name}</p>
                        <p className="text-xs text-muted-foreground">{component.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Key Components - Full-Width Annotated Diagram */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Motherboard Structure</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Motherboard Components</h2>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt="Motherboard diagram with annotations"
                      className="w-full h-full object-contain p-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add motherboard diagram with annotations showing CPU socket, RAM slots, PCIe slots, power connectors, SATA ports, and I/O ports.
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="max-w-3xl mx-auto">
                  <p className="text-foreground/80 leading-relaxed text-center">
                    Each component has a specific purpose and location on the motherboard. Understanding their placement helps with building and troubleshooting.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: CPU Socket & RAM Slots - Two-Column Split: Image Left, Cards Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                    <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                      <img
                        src={getImageUrl(cpuSocketImage.fileName)}
                        alt={cpuSocketImage.alt}
                        className="w-full h-full object-contain p-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${cpuSocketImage.fileName}. ${cpuSocketImage.brief}
                              </div>`;
                          }
                        }}
                      />
                    </div>
                  </Card>
                  <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                    <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                      <img
                        src={getImageUrl(ramPowerImage.fileName)}
                        alt={ramPowerImage.alt}
                        className="w-full h-full object-contain p-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML =
                              `<div class="p-8 text-center text-sm text-muted-foreground">
                                Add ${ramPowerImage.fileName}. ${ramPowerImage.brief}
                              </div>`;
                          }
                        }}
                      />
                    </div>
                  </Card>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Key Connections</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">CPU Socket & RAM Slots</h2>
                  </div>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">CPU Socket</h3>
                    <ul className="space-y-2">
                      {sections.motherboardBasics.cpuSocketDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">RAM Slots</h3>
                    <ul className="space-y-2">
                      {sections.motherboardBasics.ramPowerDetails.ram.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">Power Connectors</h3>
                    <ul className="space-y-2">
                      {sections.motherboardBasics.ramPowerDetails.power.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </section>

            {/* Section 4: Power & Ports - Full-Width Image with Overlay */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(portsImage.fileName)}
                    alt={portsImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${portsImage.fileName}. ${portsImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white w-full">
                      <h3 className="text-3xl font-semibold mb-2">Power Connectors & Ports</h3>
                      <p className="text-lg text-white/90">
                        Power: 24-pin main, 8-pin CPU, SATA power. Ports: USB, HDMI, Ethernet, Audio, WiFi antenna.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔌</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Motherboards</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  The motherboard is the foundation of every computer. Understanding it helps you choose compatible components, build or upgrade your PC, troubleshoot connection issues, and understand how components communicate.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/6")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/8")}>
                  Next Topic: Ports & Connectors →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 8: Ports & Connectors */}
      {moduleId === 2 && module2Sections && topicId === "8" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          usbTypes: usbTypesImage,
          hdmiEthernet: hdmiEthernetImage,
          audio: audioImage,
          selection: selectionImage
        } = sections.portsBasics.images;

        return (
          <div id="topic-ports-connectors" className="space-y-16">
            {/* Section 1: What are Ports? - Text Left with Grid, Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Ports Fundamentals</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-3">What are Ports?</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Ports are connection points that allow devices to communicate with your computer.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {sections.portsBasics.portTypes.map((port) => (
                      <Card key={port.name} className="p-4 text-center border border-border/70">
                        <div className="text-2xl mb-2">{port.icon}</div>
                        <p className="text-sm font-medium text-foreground mb-1">{port.name}</p>
                        <p className="text-xs text-muted-foreground">{port.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: USB Types - Centered with Cards Below */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">USB Standards</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Understanding USB Types</h2>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(usbTypesImage.fileName)}
                      alt={usbTypesImage.alt}
                      className="w-full h-full object-contain p-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${usbTypesImage.fileName}. ${usbTypesImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sections.portsBasics.usbTypes.map((usb) => (
                    <Card key={usb.name} className="p-6 border border-border/70">
                      <h3 className="text-lg font-semibold text-primary mb-2">{usb.name}</h3>
                      <p className="text-sm text-foreground/80 mb-3">{usb.description}</p>
                      <p className="text-xs text-muted-foreground">{usb.use}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: HDMI & Ethernet - Two-Column Split: Image Left, Text Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(hdmiEthernetImage.fileName)}
                      alt={hdmiEthernetImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${hdmiEthernetImage.fileName}. ${hdmiEthernetImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Video & Network</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">HDMI & Ethernet</h2>
                  </div>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">HDMI (High-Definition Multimedia Interface)</h3>
                    <ul className="space-y-2">
                      {sections.portsBasics.hdmiDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">Ethernet Port</h3>
                    <ul className="space-y-2">
                      {sections.portsBasics.ethernetDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </section>

            {/* Section 4: Audio Ports - Full-Width Image with Overlay */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(audioImage.fileName)}
                    alt={audioImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${audioImage.fileName}. ${audioImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white w-full">
                      <h3 className="text-3xl font-semibold mb-2">Audio Ports</h3>
                      <p className="text-lg text-white/90">
                        Audio ports connect speakers, headphones, and microphones. Common types include 3.5mm jacks, USB audio, and optical audio connections.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters - Side-by-Side: Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Understanding Ports</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Why Understanding Ports Matters</h2>
                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Understanding ports helps you connect devices correctly, choose the right cables, troubleshoot connections, and understand compatibility.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Connect devices correctly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Choose the right cables</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Troubleshoot connections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">Understand compatibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(selectionImage.fileName)}
                      alt={selectionImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${selectionImage.fileName}. ${selectionImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/7")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/9")}>
                  Next Topic: GPU Basics →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 9: GPU Basics */}
      {moduleId === 2 && module2Sections && topicId === "9" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          architecture: architectureImage
        } = sections.gpuBasics.images;

        return (
          <div id="topic-gpu-basics" className="space-y-16">
            {/* Section 1: What is GPU? - Full-Width Banner with Overlay */}
            <section className="container mx-auto px-4 pt-16">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(overviewImage.fileName)}
                    alt={overviewImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${overviewImage.fileName}. ${overviewImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white w-full">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">GPU Fundamentals</p>
                      <h2 className="text-3xl font-semibold mb-3">What is GPU?</h2>
                      <p className="text-lg text-white/90 max-w-2xl">
                        Graphics Processing Unit (GPU) handles visual rendering, gaming graphics, video editing, and complex calculations. It's specialized for parallel processing of graphics data.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: Integrated vs Dedicated - Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">GPU Types</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Integrated vs Dedicated</h2>
                  </div>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">Integrated GPU</h3>
                    <ul className="space-y-2">
                      {sections.gpuBasics.integratedDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">Dedicated GPU</h3>
                    <ul className="space-y-2">
                      {sections.gpuBasics.dedicatedDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: GPU Architecture - Image Left, Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">GPU Structure</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">GPU Architecture</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    GPUs have thousands of cores optimized for parallel processing.
                  </p>
                  <div className="space-y-4">
                    {sections.gpuBasics.architectureDetails.map((detail, index) => (
                      <Card key={index} className="p-6 border border-border/70">
                        <p className="text-sm text-foreground/80">{detail}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Where GPU is Used - 3-Column Grid of Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">GPU Applications</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Where GPU is Used</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.gpuBasics.applications.map((app) => (
                    <Card key={app.name} className="p-6 text-center border border-border/70 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{app.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{app.name}</h3>
                      <p className="text-sm text-foreground/80">{app.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🎮</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding GPU</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding GPUs helps you choose the right graphics solution for your needs, whether integrated for basic tasks or dedicated for gaming and professional work.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/8")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/10")}>
                  Next Topic: ALU →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 10: ALU */}
      {moduleId === 2 && module2Sections && topicId === "10" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          arithmetic: arithmeticImage,
          logic: logicImage,
          inAction: inActionImage,
          role: roleImage
        } = sections.aluBasics.images;

        return (
          <div id="topic-alu" className="space-y-16">
            {/* Section 1: What is ALU? - Image Left, Text Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">ALU diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">ALU Fundamentals</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">What is ALU?</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {sections.aluBasics.intro}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Handles all calculations and mathematical operations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Makes logical comparisons and decisions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Core component of CPU</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Arithmetic Functions - Centered with 4-Card Grid */}
            <section className="container mx-auto px-4">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Arithmetic Operations</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">Arithmetic Functions</h2>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mb-8">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(arithmeticImage.fileName)}
                      alt={arithmeticImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Arithmetic operations diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sections.aluBasics.arithmeticOperations.map((op, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{op.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{op.name}</h3>
                      <p className="text-sm text-foreground/80">{op.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Logic Functions - Text Left, Image Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Logic Operations</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Logic Functions</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    ALU performs logical comparisons and decisions:
                  </p>
                  <div className="space-y-3">
                    {sections.aluBasics.logicOperations.map((op, index) => (
                      <Card key={index} className="p-4 border border-border/70">
                        <p className="text-sm text-foreground/80">{op}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(logicImage.fileName)}
                      alt={logicImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Logic operations diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 4: ALU in Action - Full-Width Image with Overlay */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">ALU processing flow diagram will appear here</p></div>';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end">
                    <div className="p-8 w-full">
                      <h2 className="text-3xl font-semibold text-foreground mb-3">ALU in Action</h2>
                      <p className="text-foreground/90 max-w-2xl">
                        Every calculation, every comparison, every decision your computer makes goes through the ALU. It's the computational heart of the CPU.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters - Side-by-Side: Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Understanding ALU</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Why It Matters</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Understanding ALU helps you:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Know how calculations work</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Understand CPU performance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Grasp computer logic</span>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(roleImage.fileName)}
                      alt={roleImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">ALU role diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/9")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/11")}>
                  Next Topic: CU →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 11: CU */}
      {moduleId === 2 && module2Sections && topicId === "11" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          controlFlow: controlFlowImage,
          instructionCycle: instructionCycleImage
        } = sections.cuBasics.images;

        return (
          <div id="topic-cu" className="space-y-16">
            {/* Section 1: What is CU? - Full-Width Banner with Overlay */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(overviewImage.fileName)}
                    alt={overviewImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Control Unit overview will appear here</p></div>';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end">
                    <div className="p-8 w-full">
                      <h2 className="text-3xl font-semibold text-foreground mb-3">What is CU?</h2>
                      <p className="text-foreground/90 max-w-2xl">
                        {sections.cuBasics.intro}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: Control Flow - Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Instruction Management</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Control Flow</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    The CU manages the flow of instructions:
                  </p>
                  <div className="space-y-3">
                    {sections.cuBasics.controlFlowSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(controlFlowImage.fileName)}
                      alt={controlFlowImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Control flow diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: Instruction Cycle - Image Left, Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(instructionCycleImage.fileName)}
                      alt={instructionCycleImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Instruction cycle diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">CPU Cycle</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Instruction Cycle</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    CU follows a precise cycle:
                  </p>
                  <div className="space-y-3">
                    {sections.cuBasics.instructionCycleSteps.map((step, index) => (
                      <Card key={index} className="p-4 border border-border/70">
                        <p className="text-sm text-foreground/80 font-medium">{step}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: CU Coordination - 3-Column Grid of Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">CU Functions</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-4">How CU Coordinates</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sections.cuBasics.coordinationFunctions.map((func, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{func.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{func.name}</h3>
                      <p className="text-sm text-foreground/80">{func.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🎯</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding CU</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding CU helps you know how the CPU coordinates operations, manages instruction flow, and ensures everything happens in the right order.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/10")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/12")}>
                  Next Topic: Firmware →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 2 Topic 12: Firmware */}
      {moduleId === 2 && module2Sections && topicId === "12" && ((sections: ReturnType<typeof getModule2Sections>) => {
        const {
          overview: overviewImage,
          biosUefi: biosUefiImage,
          routerDevice: routerDeviceImage,
          layers: layersImage,
          update: updateImage
        } = sections.firmwareBasics.images;

        return (
          <div id="topic-firmware" className="space-y-16">
            {/* Section 1: What is Firmware? - Text Left with Grid, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Firmware Fundamentals</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">What is Firmware?</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {sections.firmwareBasics.intro}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {sections.firmwareBasics.firmwareTypes.map((type, index) => (
                      <Card key={index} className="p-4 text-center border border-border/70">
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <p className="text-xs font-semibold text-primary">{type.name}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Firmware overview will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: BIOS/UEFI - Centered Image with Text Below */}
            <section className="container mx-auto px-4">
              <div className="space-y-8 max-w-4xl mx-auto">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(biosUefiImage.fileName)}
                      alt={biosUefiImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">BIOS/UEFI interface will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-semibold text-foreground">BIOS/UEFI Firmware</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    BIOS (Basic Input/Output System) and UEFI (Unified Extensible Firmware Interface) are firmware that control your computer's startup process.
                  </p>
                  <div className="space-y-2 pt-4">
                    {sections.firmwareBasics.biosUefiDetails.map((detail, index) => (
                      <div key={index} className="flex items-start justify-center gap-3">
                        <span className="text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Router & Device Firmware - Two-Column Split: Image Left, Cards Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(routerDeviceImage.fileName)}
                      alt={routerDeviceImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Router and device firmware will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Firmware Types</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Router & Device Firmware</h2>
                  </div>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">Router Firmware</h3>
                    <div className="space-y-2">
                      {sections.firmwareBasics.routerFirmwareDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6 border border-border/70">
                    <h3 className="text-xl font-semibold text-primary mb-3">Device Firmware</h3>
                    <div className="space-y-2">
                      {sections.firmwareBasics.deviceFirmwareDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-primary font-semibold">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* Section 4: Firmware in Action - Full-Width Image with Overlay */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 relative">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(layersImage.fileName)}
                    alt={layersImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Firmware layers diagram will appear here</p></div>';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end">
                    <div className="p-8 w-full">
                      <h2 className="text-3xl font-semibold text-foreground mb-3">Firmware in Action</h2>
                      <p className="text-foreground/90 max-w-2xl">
                        Firmware acts as the bridge between hardware and software. It provides the essential instructions that allow hardware to function and software to interact.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters - Side-by-Side: Text Left, Image Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Understanding Firmware</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Why It Matters</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Understanding firmware helps you:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Configure system settings</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Update devices safely</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Troubleshoot boot issues</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span className="text-sm text-foreground/80">Understand device control</span>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(updateImage.fileName)}
                      alt={updateImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="text-center p-8"><p class="text-muted-foreground">Firmware update diagram will appear here</p></div>';
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/11")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/1")}>
                  Next Module: Operating Systems →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* Module 3 Topic 1: Boot Process */}
      {moduleId === 3 && module3Sections && topicId === "1" && (() => {
        const {
          overview: overviewImage,
          steps: stepsImage,
          whyMatters: whyMattersImage
        } = module3Sections.bootProcess.images;

        return (
          <div id="topic-boot-process" className="space-y-16">
            {/* Section 1: What is Booting? - Text Left, Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Boot Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is Booting?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Booting is the process your computer goes through when you press the power button. It initializes hardware, checks system components, and loads the operating system so you can use your computer.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Starts when you press the power button</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Initializes all hardware components</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Loads the operating system into memory</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Prepares your computer for use</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: The 3 Steps - Centered with 3 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Boot Sequence</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">The 3 Steps of Booting</h2>
                  <p className="text-foreground/80">
                    Every computer follows these three essential steps when starting up. Understanding each step helps you troubleshoot boot problems and appreciate how your system initializes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module3Sections.bootProcess.steps.map((step, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Step {index + 1}: {step.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{step.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(stepsImage.fileName)}
                      alt={stepsImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${stepsImage.fileName}. ${stepsImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🚀</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Boot Process</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding the boot process helps you troubleshoot startup issues, recognize when hardware problems occur, and appreciate how your computer initializes. This knowledge is essential for diagnosing boot failures, understanding system health, and making informed decisions about computer maintenance.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/topic/12")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/2")}>
                  Next Topic: Operating Systems →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 2: Operating Systems */}
      {moduleId === 3 && module3Sections && topicId === "2" && (() => {
        const {
          overview: overviewImage,
          desktopComparison: desktopComparisonImage,
          windows: windowsImage,
          macos: macosImage,
          linux: linuxImage,
          mobileComparison: mobileComparisonImage,
          android: androidImage,
          ios: iosImage,
          whyMatters: whyMattersImage
        } = module3Sections.operatingSystems.images;

        return (
          <div id="topic-operating-systems" className="space-y-16">
            {/* Section 1: What is an OS? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">OS Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is an Operating System?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    An operating system (OS) is the most important software on your computer. It acts as an intermediary between you, your applications, and the computer's hardware.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Manages hardware resources (CPU, RAM, storage)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Provides a user interface for interaction</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Allows applications to run and communicate</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Handles file management and security</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Desktop Operating Systems - Full-Width Banner */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[32px] border border-border/70">
                <div className="relative w-full aspect-[16/6] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(desktopComparisonImage.fileName)}
                    alt={desktopComparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${desktopComparisonImage.fileName}. ${desktopComparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
                <div className="p-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Desktop Platforms</p>
                  <h2 className="text-3xl font-semibold text-foreground">Desktop Operating Systems</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Windows, macOS, and Linux are the three main desktop operating systems. Each has unique features, design philosophies, and use cases.
                  </p>
                </div>
              </Card>
            </section>

            {/* Section 3: Windows, macOS, Linux - 3-Column Grid Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Desktop OS Comparison</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Windows, macOS & Linux</h2>
                  <p className="text-foreground/80">
                    Each desktop operating system offers different advantages. Choose based on your needs, preferences, and use cases.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module3Sections.operatingSystems.desktopOS.map((os, index) => {
                    const images = [windowsImage, macosImage, linuxImage];
                    return (
                      <Card key={index} className="p-6 border border-border/70 space-y-4">
                        <div className="text-5xl mb-3 text-center">{os.logo}</div>
                        <div className="relative w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                          <img
                            src={getImageUrl(images[index].fileName)}
                            alt={images[index].alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                              const parent = (e.target as HTMLImageElement).parentElement;
                              if (parent) {
                                parent.innerHTML =
                                  `<div class="p-4 text-center text-xs text-muted-foreground">
                                    Add ${images[index].fileName}
                                  </div>`;
                              }
                            }}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-primary text-center">{os.name}</h3>
                        <p className="text-sm text-muted-foreground text-center">{os.description}</p>
                        <div className="space-y-2 pt-2">
                          {os.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <span className="text-primary text-xs">✓</span>
                              <p className="text-xs text-foreground/80">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Section 4: Mobile Operating Systems - Image Left + Text Right */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(mobileComparisonImage.fileName)}
                      alt={mobileComparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${mobileComparisonImage.fileName}. ${mobileComparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile Platforms</p>
                  <h2 className="text-3xl font-semibold text-foreground">Mobile Operating Systems</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Android and iOS dominate the mobile operating system market. These OS are designed specifically for smartphones and tablets, with touch-optimized interfaces and mobile-specific features.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Touch-optimized user interfaces</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">App stores for software distribution</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Mobile-specific features (GPS, cameras, sensors)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Battery and performance optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Android & iOS - 2-Column Split Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile OS Comparison</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Android & iOS</h2>
                  <p className="text-foreground/80">
                    The two dominant mobile operating systems, each with distinct philosophies and ecosystems.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {module3Sections.operatingSystems.mobileOS.map((os, index) => {
                    const images = [androidImage, iosImage];
                    return (
                      <Card key={index} className="p-6 border border-border/70 space-y-4">
                        <div className="text-5xl mb-3 text-center">{os.logo}</div>
                        <div className="relative w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                          <img
                            src={getImageUrl(images[index].fileName)}
                            alt={images[index].alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                              const parent = (e.target as HTMLImageElement).parentElement;
                              if (parent) {
                                parent.innerHTML =
                                  `<div class="p-4 text-center text-xs text-muted-foreground">
                                    Add ${images[index].fileName}
                                  </div>`;
                              }
                            }}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-primary text-center">{os.name}</h3>
                        <p className="text-sm text-muted-foreground text-center">{os.description}</p>
                        <div className="space-y-2 pt-2">
                          {os.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <span className="text-primary text-xs">✓</span>
                              <p className="text-xs text-foreground/80">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Section 6: Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Operating Systems</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding operating systems helps you choose the right one for your needs and fix problems when they happen. It also helps you make better decisions about which software and devices to use.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-5 text-left pt-4">
                  <li>Choose the right OS based on your needs and preferences</li>
                  <li>Troubleshoot system issues and understand error messages</li>
                  <li>Make informed decisions about software compatibility</li>
                  <li>Understand security features and how to protect your system</li>
                  <li>Appreciate how different OS designs affect user experience</li>
                </ul>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/1")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/3")}>
                  Next Topic: File System →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 3: File System */}
      {moduleId === 3 && module3Sections && topicId === "3" && (() => {
        const {
          folders: foldersImage,
          paths: pathsImage,
          hidden: hiddenImage,
          inAction: inActionImage,
          whyMatters: whyMattersImage
        } = module3Sections.fileSystem.images;

        return (
          <div id="topic-file-system" className="space-y-16">
            {/* Section 1: What is a File System? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Organization</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is a File System?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    A file system is how your computer organizes and stores files. It uses folders (directories) to group related files together, making it easier to find and manage your data.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Organizes files into folders (directories)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Uses file paths to locate files precisely</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Manages file storage and access permissions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Can hide system files for protection</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(foldersImage.fileName)}
                      alt={foldersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${foldersImage.fileName}. ${foldersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Folders, Paths & Hidden Files - Centered + Grid + Image */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File System Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Folders, Paths & Hidden Files</h2>
                  <p className="text-foreground/80">
                    The file system uses three main concepts to organize and locate files: folders (directories) for grouping, file paths for location, and hidden files for system protection.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module3Sections.fileSystem.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{concept.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{concept.title}</h3>
                      <p className="text-xs text-muted-foreground">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(pathsImage.fileName)}
                      alt={pathsImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${pathsImage.fileName}. ${pathsImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: Hidden Files - Image Left + Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(hiddenImage.fileName)}
                      alt={hiddenImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${hiddenImage.fileName}. ${hiddenImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">System Protection</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Hidden Files</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">System Configuration</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Hidden files often contain system settings and configuration data that control how your computer and programs work. These files are hidden to prevent accidental changes.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Protection from Users</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        By hiding important system files, the file system protects them from being accidentally deleted or modified, which could break your computer or programs.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Viewing Hidden Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        You can view hidden files by changing settings in your file browser, but be careful not to modify them unless you know what you're doing.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: File System in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">File System in Action</h3>
                      <p className="text-lg text-white/90">
                        Every time you save a document, create a folder, or open a file, the file system is working behind the scenes, organizing your data and keeping everything in the right place for quick access.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📁</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Systems</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Understanding file systems helps you organize your files better, find what you need quickly, and keep your computer tidy. It also helps you understand where your files are stored, how to navigate folders, and why some files are hidden. This knowledge is essential for managing your computer effectively and troubleshooting file-related issues.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/2")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/4")}>
                  Next Topic: File Extensions →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 4: File Extensions */}
      {moduleId === 3 && module3Sections && topicId === "4" && (() => {
        const {
          text: textImage,
          image: imageImage,
          video: videoImage,
          executable: executableImage,
          inAction: inActionImage,
          whyMatters: whyMattersImage
        } = module3Sections.fileExtensions.images;

        return (
          <div id="topic-file-extensions" className="space-y-16">
            {/* Section 1: What are File Extensions? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Types</p>
                  <h2 className="text-3xl font-semibold text-foreground">What are File Extensions?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    File extensions are the letters after the dot in a filename (like .txt, .jpg, .mp4). They tell your computer what type of file it is and which program should open it.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Identifies the file type</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Helps choose the right program</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Example: document.txt, photo.jpg</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(textImage.fileName)}
                      alt={textImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${textImage.fileName}. ${textImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Why Extensions Matter - Centered + Grid + Image */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Identification</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why Extensions Matter</h2>
                  <p className="text-foreground/80">
                    File extensions help your computer identify file types and choose the right program to open them. They make it easy to know what kind of file you're working with at a glance.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {module3Sections.fileExtensions.types.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{type.category}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{type.description}</p>
                      <div className="space-y-1">
                        {type.extensions.map((ext, eIndex) => (
                          <div key={eIndex} className="text-xs text-foreground/80 font-mono">
                            {ext}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(imageImage.fileName)}
                      alt={imageImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${imageImage.fileName}. ${imageImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: Text, Image, Video, Executable - Image Left + Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(videoImage.fileName)}
                      alt={videoImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${videoImage.fileName}. ${videoImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Type Categories</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Text, Image, Video & Executable</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Text Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Text files (.txt, .doc, .pdf) contain written content. They're opened by word processors, text editors, or PDF readers.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Image Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Image files (.jpg, .png, .gif) contain pictures and graphics. They're opened by image viewers, photo editors, or web browsers.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Video Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Video files (.mp4, .avi, .mov) contain moving pictures with sound. They're opened by video players or media software.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Executable Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Executable files (.exe, .app, .sh) are programs that run on your computer. They install or launch applications when opened.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: File Extensions in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">File Extensions in Action</h3>
                      <p className="text-lg text-white/90">
                        Every time you double-click a file, your computer reads its extension and automatically opens it with the right program. This seamless process happens instantly, making your files easy to access and use.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📄</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Extensions</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Understanding file extensions helps you know what type of file you're working with and which program to use. It also helps you avoid opening the wrong file type, keeps your files organized, and makes it easier to share files with others. This knowledge is essential for managing your files effectively and troubleshooting file-related problems.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/3")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/5")}>
                  Next Topic: File Management →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 5: File Management */}
      {moduleId === 3 && module3Sections && topicId === "5" && (() => {
        const {
          create: createImage,
          copyMove: copyMoveImage,
          delete: deleteImage,
          organize: organizeImage,
          inAction: inActionImage,
          whyMatters: whyMattersImage
        } = module3Sections.fileManagement.images;

        return (
          <div id="topic-file-management" className="space-y-16">
            {/* Section 1: What is File Management? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Operations</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is File Management?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    File management is how you organize, move, copy, and delete files on your computer. Good file management helps you find your files quickly and keeps your computer organized.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Create, copy, and move files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Delete and restore files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Organize files into folders</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(createImage.fileName)}
                      alt={createImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${createImage.fileName}. ${createImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Create, Copy, Move, Delete & Restore - Centered + Grid + Image */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Operations</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Create, Copy, Move, Delete & Restore</h2>
                  <p className="text-foreground/80">
                    These are the basic operations you use every day to manage your files. Understanding how each one works helps you organize your computer effectively.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {module3Sections.fileManagement.operations.map((operation, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{operation.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{operation.title}</h3>
                      <p className="text-xs text-muted-foreground">{operation.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(copyMoveImage.fileName)}
                      alt={copyMoveImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${copyMoveImage.fileName}. ${copyMoveImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: Organizing Files - Image Left + Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(organizeImage.fileName)}
                      alt={organizeImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${organizeImage.fileName}. ${organizeImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Organization</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Organizing Files</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Clear Folder Names</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Use descriptive names for your folders so you can quickly find what you need. For example, "School Work" or "Photos 2024" are better than "Folder1" or "Stuff".
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Group Related Files</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Put files that belong together in the same folder. Keep all your photos in a Photos folder, all documents in a Documents folder, and so on.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Keep Desktop Clean</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Don't put everything on your desktop. Use folders to organize files, and only keep shortcuts or frequently used items on the desktop for quick access.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: File Management in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">File Management in Action</h3>
                      <p className="text-lg text-white/90">
                        Every time you create a new document, copy a file to backup, move files to organize them, or delete old files, you're using file management. Good file management keeps your computer organized and makes it easy to find what you need.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📂</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Good file management saves you time and keeps your computer organized. It helps you find files quickly, avoid losing important documents, and work more efficiently. Whether you're a student organizing school work, a professional managing projects, or just keeping personal files tidy, file management skills are essential for using your computer effectively.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/4")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/6")}>
                  Next Topic: System Specifications →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 6: System Specifications */}
      {moduleId === 3 && module3Sections && topicId === "6" && (() => {
        const {
          cpuRamStorage: cpuRamStorageImage,
          gpu: gpuImage,
          osVersion: osVersionImage,
          inAction: inActionImage,
          whyMatters: whyMattersImage
        } = module3Sections.systemSpecifications.images;

        return (
          <div id="topic-system-specifications" className="space-y-16">
            {/* Section 1: What are System Specs? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Computer Specs</p>
                  <h2 className="text-3xl font-semibold text-foreground">What are System Specifications?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    System specifications (specs) tell you what hardware and software your computer has. They help you understand your computer's capabilities and whether it can run certain programs.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">CPU speed and cores</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">RAM amount</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Storage capacity</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">GPU type and memory</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(cpuRamStorageImage.fileName)}
                      alt={cpuRamStorageImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${cpuRamStorageImage.fileName}. ${cpuRamStorageImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: CPU, RAM, Storage, GPU, OS - Centered + Grid + Image */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">System Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">CPU, RAM, Storage, GPU & OS Version</h2>
                  <p className="text-foreground/80">
                    These are the main specifications that determine your computer's performance and capabilities. Understanding each one helps you know what your computer can do.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {module3Sections.systemSpecifications.components.map((component, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{component.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{component.title}</h3>
                      <p className="text-xs text-muted-foreground">{component.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(cpuRamStorageImage.fileName)}
                      alt={cpuRamStorageImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${cpuRamStorageImage.fileName}. ${cpuRamStorageImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: GPU & OS Version - Image Left + Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(gpuImage.fileName)}
                      alt={gpuImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${gpuImage.fileName}. ${gpuImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Graphics & Operating System</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">GPU & OS Version</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">GPU (Graphics Processing Unit)</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        The GPU handles visual tasks like gaming, video editing, and 3D rendering. A better GPU means smoother graphics and faster video processing. It can be integrated (built into the CPU) or dedicated (separate card).
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">OS Version</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        The operating system version (like Windows 11, macOS Sonoma, or Android 14) tells you which features and updates are available. Newer versions often have better security and new features.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Checking Your Specs</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        You can check your system specifications in your computer's settings. This helps you know if your computer meets the requirements for software, games, or apps you want to use.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: System Specifications in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">System Specifications in Action</h3>
                      <p className="text-lg text-white/90">
                        Every program you run, every game you play, every video you edit—your system specifications determine how well they perform. Understanding your specs helps you choose the right software and know when it's time to upgrade.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">💻</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding System Specifications</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Knowing your system specifications helps you choose the right software, understand why some programs run slowly, and decide when it's time to upgrade your computer. Whether you're buying new software, troubleshooting performance issues, or planning an upgrade, understanding specs is essential for making informed decisions.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/5")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/7")}>
                  Next Topic: Mobile = A Computer →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 7: Mobile = A Computer */}
      {moduleId === 3 && module3Sections && topicId === "7" && (() => {
        const {
          architecture: architectureImage,
          cpuGpu: cpuGpuImage,
          sensors: sensorsImage,
          inAction: inActionImage,
          whyMatters: whyMattersImage
        } = module3Sections.mobileComputer.images;

        return (
          <div id="topic-mobile-computer" className="space-y-16">
            {/* Section 1: Mobile is a Computer - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile Computing</p>
                  <h2 className="text-3xl font-semibold text-foreground">Mobile = A Computer</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Your smartphone or tablet is actually a computer! It has the same basic components as a desktop computer, just in a smaller, portable form.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Has CPU, RAM, and storage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Runs an operating system</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Can run apps and programs</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Mobile Architecture, CPU/GPU, Sensors - Centered + Grid + Image */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Mobile Architecture, CPU/GPU & Sensors</h2>
                  <p className="text-foreground/80">
                    Mobile devices have the same basic architecture as desktop computers, with mobile-specific components like touchscreens and sensors that make them portable and interactive.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {module3Sections.mobileComputer.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{concept.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{concept.title}</h3>
                      <p className="text-xs text-muted-foreground">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: Mobile CPU/GPU & Sensors - Image Left + Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(cpuGpuImage.fileName)}
                      alt={cpuGpuImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${cpuGpuImage.fileName}. ${cpuGpuImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile Processing</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Mobile CPU/GPU & Sensors</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Mobile CPU/GPU</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Mobile processors are smaller and more power-efficient than desktop CPUs, but they work the same way. They process instructions, run apps, and handle graphics. Mobile GPUs are often integrated with the CPU to save space and power.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Sensors</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Mobile devices have special sensors like accelerometers, gyroscopes, and proximity sensors that desktop computers don't have. These sensors enable features like screen rotation, step counting, and automatic screen dimming.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Touch Interface</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Mobile devices use touchscreens instead of keyboards and mice. The touchscreen acts as both an input device (you touch it) and an output device (it displays information), making it an I/O device.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Mobile Device in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">Mobile Device in Action</h3>
                      <p className="text-lg text-white/90">
                        Every time you open an app, take a photo, play a game, or browse the web on your phone, you're using a computer. Your mobile device processes data, runs programs, and manages resources just like a desktop computer, but in a portable, touch-friendly form.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📱</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Mobile Devices</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Understanding that mobile devices are computers helps you see how powerful they are and why they can do so many things. It also helps you make better choices about which device to use for different tasks, understand why some apps work better on mobile than desktop, and appreciate the technology in your pocket.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/6")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/8")}>
                  Next Topic: Sensors in Devices →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 8: Sensors in Devices */}
      {moduleId === 3 && module3Sections && topicId === "8" && (() => {
        const {
          accelerometer: accelerometerImage,
          gyroscope: gyroscopeImage,
          proximity: proximityImage,
          fingerprint: fingerprintImage,
          inAction: inActionImage,
          whyMatters: whyMattersImage
        } = module3Sections.sensorsDevices.images;

        return (
          <div id="topic-sensors-devices" className="space-y-16">
            {/* Section 1: What are Sensors? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Device Sensors</p>
                  <h2 className="text-3xl font-semibold text-foreground">What are Sensors?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Sensors are special components that detect changes in the environment. They help your device understand its position, movement, and surroundings.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Detect motion and orientation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Sense nearby objects</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Enable security features</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(accelerometerImage.fileName)}
                      alt={accelerometerImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${accelerometerImage.fileName}. ${accelerometerImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Accelerometer, Gyroscope, Proximity, Fingerprint - Centered + Grid + Image */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Common Sensors</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Accelerometer, Gyroscope, Proximity & Fingerprint</h2>
                  <p className="text-foreground/80">
                    Modern devices have multiple sensors that work together to provide a better user experience. Each sensor detects different types of information about your device and its environment.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {module3Sections.sensorsDevices.sensors.map((sensor, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-4xl mb-3">{sensor.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{sensor.name}</h3>
                      <p className="text-xs text-muted-foreground">{sensor.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(gyroscopeImage.fileName)}
                      alt={gyroscopeImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${gyroscopeImage.fileName}. ${gyroscopeImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 3: How Sensors Work - Image Left + Text Right with Cards */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={getImageUrl(proximityImage.fileName)}
                      alt={proximityImage.alt}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${proximityImage.fileName}. ${proximityImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Sensor Functions</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">How Sensors Work</h2>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Motion Detection</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Accelerometers detect linear motion (like shaking or tilting), while gyroscopes detect rotation. Together, they enable screen rotation, step counting, and motion-controlled games.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Proximity Sensing</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Proximity sensors detect when objects are close to your device. They're used to turn off the screen during phone calls to prevent accidental touches and save battery.
                      </p>
                    </Card>
                    <Card className="p-6 border border-border/70">
                      <h3 className="text-xl font-semibold text-primary mb-2">Biometric Security</h3>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        Fingerprint sensors scan your fingerprint to unlock your device and authenticate payments. They use unique patterns in your fingerprint to verify your identity securely.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Sensors in Action */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(inActionImage.fileName)}
                    alt={inActionImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${inActionImage.fileName}. ${inActionImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">Sensors in Action</h3>
                      <p className="text-lg text-white/90">
                        Every time you rotate your phone and the screen flips, unlock your device with your fingerprint, or make a call and the screen turns off automatically, sensors are working behind the scenes. They make your device smart, responsive, and secure.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Sensors</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
                  Understanding sensors helps you see how your device interacts with the world around it. It also helps you understand why certain features work the way they do, how to use them better, and why some apps require specific sensors to function. This knowledge is essential for getting the most out of your mobile device.
                </p>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/7")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/9")}>
                  Next Topic: What is a Program? →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 9: What is a Program? */}
      {moduleId === 3 && module3Sections && topicId === "9" && (() => {
        const {
          code: codeImage,
          software: softwareImage,
          execution: executionImage,
          whyMatters: whyMattersImage
        } = module3Sections.whatIsProgram.images;

        return (
          <div id="topic-what-is-program" className="space-y-16">
            {/* Section 1: What is a Program? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Programming Basics</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is a Program?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module3Sections.whatIsProgram.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Code is written instructions in a programming language</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Software is the compiled, executable version of code</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Execution is when the program runs and performs tasks</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(codeImage.fileName)}
                      alt={codeImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${codeImage.fileName}. ${codeImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Code → Software & Program Execution - Centered with 3 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Program Lifecycle</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Code → Software & Program Execution</h2>
                  <p className="text-foreground/80">
                    Understanding how code becomes software and how programs execute helps you appreciate how applications work and how developers create the software you use every day.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module3Sections.whatIsProgram.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(softwareImage.fileName)}
                      alt={softwareImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${softwareImage.fileName}. ${softwareImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💻</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Programs</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding what programs are helps you see how software works, why some programs need updates, and how developers create the applications you use. This knowledge is essential for troubleshooting software issues, understanding how computers work, and appreciating the technology around you.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/8")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/10")}>
                  Next Topic: What is Data? →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 3 Topic 10: What is Data? */}
      {moduleId === 3 && module3Sections && topicId === "10" && (() => {
        const {
          text: textImage,
          numbers: numbersImage,
          binary: binaryImage,
          whyMatters: whyMattersImage
        } = module3Sections.whatIsData.images;

        return (
          <div id="topic-what-is-data" className="space-y-16">
            {/* Section 1: What is Data? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Data Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">What is Data?</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module3Sections.whatIsData.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Data is information stored in a computer</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Can be text, numbers, images, videos, or files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Computers process data using binary code (0s and 1s)</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(textImage.fileName)}
                      alt={textImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${textImage.fileName}. ${textImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Data Types & How Machines Read Data - Centered with 3 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Data Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Data Types & How Machines Read Data</h2>
                  <p className="text-foreground/80">
                    Data comes in different types, but computers convert everything to binary (0s and 1s) to process it. Understanding data types helps you see how information is stored and used.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module3Sections.whatIsData.types.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{type.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(binaryImage.fileName)}
                      alt={binaryImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${binaryImage.fileName}. ${binaryImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Data</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding what data is helps you see how information is stored, processed, and used by computers. This knowledge is essential for managing files, understanding how programs work with data, and appreciating how computers handle all the information around you.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3/topic/9")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" disabled>
                  End of Module 3
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 1: Inside a Computer */}
      {moduleId === 4 && module4Sections && topicId === "1" && (() => {
        const {
          overview: overviewImage,
          components: componentsImage,
          whyMatters: whyMattersImage
        } = module4Sections.insideComputer.images;

        return (
          <div id="topic-inside-computer" className="space-y-16">
            {/* Section 1: What is Inside a Computer? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Computer Anatomy</p>
                  <h2 className="text-3xl font-semibold text-foreground">Inside a Computer</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module4Sections.insideComputer.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Motherboard connects all components</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Power connectors supply electricity to parts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Internal wiring carries data and power signals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Component placement affects cooling and accessibility</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Key Components - Centered with 4 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Internal Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Motherboard Layout, Power Connectors, Internal Wiring & Component Placement</h2>
                  <p className="text-foreground/80">
                    Understanding how components are arranged and connected helps you see how a computer works and how to upgrade or troubleshoot.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.insideComputer.components.map((component, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{component.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{component.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{component.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(componentsImage.fileName)}
                      alt={componentsImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${componentsImage.fileName}. ${componentsImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🖥️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Computer Internals</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding what's inside a computer helps you upgrade components, troubleshoot problems, and appreciate how all parts work together. This knowledge is essential for building, maintaining, and fixing computers.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" disabled>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/2")}>
                  Next Topic: CPU Architecture →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 2: CPU Architecture */}
      {moduleId === 4 && module4Sections && topicId === "2" && (() => {
        const {
          overview: overviewImage,
          architecture: architectureImage,
          whyMatters: whyMattersImage
        } = module4Sections.cpuArchitecture.images;

        return (
          <div id="topic-cpu-architecture" className="space-y-16">
            {/* Section 1: What is CPU Architecture? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">CPU Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">CPU Architecture</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module4Sections.cpuArchitecture.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Cores and threads handle tasks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Cache levels store frequently used data</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Clock speed determines processing speed</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Instruction cycle executes commands</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Key CPU Architecture Concepts - Centered with 4 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">CPU Architecture Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Cores & Threads, Cache Levels, Clock Speed & Instruction Cycle</h2>
                  <p className="text-foreground/80">
                    Understanding CPU architecture helps you choose the right processor and optimize performance for your needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.cpuArchitecture.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">⚙️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding CPU Architecture</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding CPU architecture helps you choose the right processor, optimize performance, and troubleshoot issues. This knowledge is essential for building computers, upgrading systems, and getting the best performance for your tasks.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/1")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/3")}>
                  Next Topic: GPU Architecture →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 3: GPU Architecture */}
      {moduleId === 4 && module4Sections && topicId === "3" && (() => {
        const {
          overview: overviewImage,
          architecture: architectureImage,
          whyMatters: whyMattersImage
        } = module4Sections.gpuArchitecture.images;

        return (
          <div id="topic-gpu-architecture" className="space-y-16">
            {/* Section 1: What is GPU Architecture? - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">GPU Fundamentals</p>
                  <h2 className="text-3xl font-semibold text-foreground">GPU Architecture</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module4Sections.gpuArchitecture.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">CUDA/Tensor cores for parallel processing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">VRAM stores graphics data</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Integrated vs Dedicated GPUs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">GPU rendering creates visuals</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Key GPU Architecture Concepts - Centered with 4 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">GPU Architecture Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">CUDA/Tensor Cores, VRAM, Integrated vs Dedicated & GPU Rendering</h2>
                  <p className="text-foreground/80">
                    Understanding GPU architecture helps you choose the right graphics card for gaming, video editing, and visual processing.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.gpuArchitecture.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🎮</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding GPU Architecture</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding GPU architecture helps you choose the right graphics card, optimize gaming and video editing performance, and troubleshoot graphics issues. This knowledge is essential for building gaming PCs, workstations, and getting the best visual experience.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/2")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/4")}>
                  Next Topic: RAM Architecture →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 4: RAM Architecture */}
      {moduleId === 4 && module4Sections && topicId === "4" && (() => {
        const {
          overview: overviewImage,
          architecture: architectureImage,
          whyMatters: whyMattersImage
        } = module4Sections.ramArchitecture.images;

        return (
          <div id="topic-ram-architecture" className="space-y-16">
            {/* Section 1: RAM Architecture Overview - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Memory Architecture</p>
                  <h2 className="text-3xl font-semibold text-foreground">RAM Architecture</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module4Sections.ramArchitecture.intro}
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Key RAM Architecture Concepts - Centered with 4 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">RAM Specifications</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">DDR Generations, Frequency, Dual-Channel & Latency</h2>
                  <p className="text-foreground/80">
                    Understanding RAM architecture helps you choose the right memory for your system and optimize performance.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.ramArchitecture.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">⚡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding RAM Architecture</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding RAM architecture helps you choose the right memory modules, optimize system performance, and ensure compatibility with your motherboard. This knowledge is essential for building and upgrading computers.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/3")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/5")}>
                  Next Topic: Storage Connections →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 5: Storage Connections */}
      {moduleId === 4 && module4Sections && topicId === "5" && (() => {
        const {
          overview: overviewImage,
          architecture: architectureImage,
          whyMatters: whyMattersImage
        } = module4Sections.storageConnections.images;

        return (
          <div id="topic-storage-connections" className="space-y-16">
            {/* Section 1: Storage Connections Overview - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Interfaces</p>
                  <h2 className="text-3xl font-semibold text-foreground">Storage Connections</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module4Sections.storageConnections.intro}
                  </p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Key Storage Connection Concepts - Centered with 4 Cards */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Connection Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">SATA, NVMe, PCIe Lanes & Data Flow</h2>
                  <p className="text-foreground/80">
                    Understanding storage connections helps you choose the right interface and maximize performance.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.storageConnections.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(architectureImage.fileName)}
                      alt={architectureImage.alt}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${architectureImage.fileName}. ${architectureImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">⚡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Storage Connections</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding storage connections helps you choose the right storage solution, maximize data transfer speeds, and ensure compatibility with your motherboard. This knowledge is essential for building fast and efficient systems.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/4")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/6")}>
                  Next Topic: Cooling Systems →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 6: Cooling Systems */}
      {moduleId === 4 && module4Sections && topicId === "6" && (() => {
        const {
          overview: overviewImage,
          architecture: architectureImage,
          whyMatters: whyMattersImage
        } = module4Sections.coolingSystems.images;

        return (
          <div id="topic-cooling-systems" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Thermal Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Cooling Systems</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.coolingSystems.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Cooling Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Heat Sinks, Fans, Thermal Paste & Liquid Cooling</h2>
                  <p className="text-foreground/80">Understanding cooling systems helps you maintain optimal temperatures and extend component lifespan.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.coolingSystems.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">❄️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Cooling Systems</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding cooling systems helps you prevent overheating, maintain optimal performance, and extend the lifespan of your components. This knowledge is essential for building and maintaining reliable computers.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/5")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/7")}>Next Topic: Power Supply Unit (PSU) →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 7: Power Supply Unit (PSU) */}
      {moduleId === 4 && module4Sections && topicId === "7" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module4Sections.psu.images;
        return (
          <div id="topic-psu" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Power Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Power Supply Unit (PSU)</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.psu.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">PSU Specifications</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Watt Ratings, Efficiency, Cables & Power Distribution</h2>
                  <p className="text-foreground/80">Understanding PSU specifications helps you choose the right power supply for your system.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.psu.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">⚡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding PSU</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding PSU specifications helps you choose the right power supply, ensure stable system operation, and optimize energy efficiency. This knowledge is essential for building reliable and efficient computers.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/6")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/8")}>Next Topic: BIOS / UEFI →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 8: BIOS / UEFI */}
      {moduleId === 4 && module4Sections && topicId === "8" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module4Sections.biosUefi.images;
        return (
          <div id="topic-bios-uefi" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">System Firmware</p>
                  <h2 className="text-3xl font-semibold text-foreground">BIOS / UEFI</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.biosUefi.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">BIOS/UEFI Features</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Boot Order, Security Options & BIOS Updates</h2>
                  <p className="text-foreground/80">Understanding BIOS/UEFI helps you configure and maintain your system.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.biosUefi.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🚀</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding BIOS/UEFI</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding BIOS/UEFI helps you configure boot settings, enhance security, and maintain your system. This knowledge is essential for troubleshooting and optimizing your computer.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/7")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/9")}>Next Topic: Expansion Cards →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 9: Expansion Cards */}
      {moduleId === 4 && module4Sections && topicId === "9" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module4Sections.expansionCards.images;
        return (
          <div id="topic-expansion-cards" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">System Expansion</p>
                  <h2 className="text-3xl font-semibold text-foreground">Expansion Cards</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.expansionCards.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Card Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">PCIe Cards, Wi-Fi Cards, GPUs & Capture Cards</h2>
                  <p className="text-foreground/80">Understanding expansion cards helps you expand your system's capabilities.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.expansionCards.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔌</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Expansion Cards</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding expansion cards helps you add functionality to your computer, upgrade graphics, add networking, and enhance capabilities. This knowledge is essential for customizing and upgrading your system.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/8")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/10")}>Next Topic: Peripheral Devices →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 10: Peripheral Devices */}
      {moduleId === 4 && module4Sections && topicId === "10" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module4Sections.peripheralDevices.images;
        return (
          <div id="topic-peripheral-devices" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">External Devices</p>
                  <h2 className="text-3xl font-semibold text-foreground">Peripheral Devices</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.peripheralDevices.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Device Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Wired, Wireless, Dongles & Drivers</h2>
                  <p className="text-foreground/80">Understanding peripheral devices helps you set up and use external components effectively.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.peripheralDevices.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🖱️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Peripheral Devices</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding peripheral devices helps you connect and use external components, choose the right devices for your needs, and troubleshoot connection issues. This knowledge is essential for a complete computing setup.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/9")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/11")}>Next Topic: Display Technology →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 11: Display Technology */}
      {moduleId === 4 && module4Sections && topicId === "11" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module4Sections.displayTechnology.images;
        return (
          <div id="topic-display-technology" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Screen Technology</p>
                  <h2 className="text-3xl font-semibold text-foreground">Display Technology</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.displayTechnology.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Display Specifications</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">LCD vs LED vs OLED, Refresh Rate, Resolution & Color Accuracy</h2>
                  <p className="text-foreground/80">Understanding display technology helps you choose the right monitor for your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.displayTechnology.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🖥️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Display Technology</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding display technology helps you choose the right monitor, optimize visual quality, and match display capabilities to your needs. This knowledge is essential for gaming, content creation, and professional work.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/10")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/12")}>Next Topic: Printers & Scanners →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 4 Topic 12: Printers & Scanners */}
      {moduleId === 4 && module4Sections && topicId === "12" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module4Sections.printersScanners.images;
        return (
          <div id="topic-printers-scanners" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Document Devices</p>
                  <h2 className="text-3xl font-semibold text-foreground">Printers & Scanners</h2>
                  <p className="text-foreground/80 leading-relaxed">{module4Sections.printersScanners.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Printer & Scanner Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Inkjet vs Laser, DPI, Scanner Operation & Troubleshooting</h2>
                  <p className="text-foreground/80">Understanding printers and scanners helps you choose and maintain these devices.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module4Sections.printersScanners.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🖨️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Printers & Scanners</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding printers and scanners helps you choose the right devices, maintain print quality, and troubleshoot common problems. This knowledge is essential for document management and professional printing needs.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/4/topic/11")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" disabled>Last Topic</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 1: Storage Concepts */}
      {moduleId === 5 && module5Sections && topicId === "1" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module5Sections.storageConcepts.images;

        return (
          <div id="topic-storage-concepts" className="space-y-16">
            {/* Section 1: Storage Basics - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Basics</p>
                  <h2 className="text-3xl font-semibold text-foreground">Storage Concepts</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module5Sections.storageConcepts.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Volatile vs Non-Volatile storage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Speed vs Capacity trade-offs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Primary vs Secondary storage</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Storage Types - Centered Title + 3 Cards Grid */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Volatile, Non-Volatile & Hybrid</h2>
                  <p className="text-foreground/80">
                    Understanding different storage types helps you choose the right solution for your needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module5Sections.storageConcepts.storageTypes.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{type.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Full-Width Comparison Image */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Storage Concepts</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding storage concepts helps you choose the right storage solution for your needs, optimize system performance, and make informed decisions about data management. This knowledge is essential for building efficient and cost-effective computer systems.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" disabled>First Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/2")}>
                  Next Topic: HDD Deep Dive →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 2: HDD Deep Dive */}
      {moduleId === 5 && module5Sections && topicId === "2" && (() => {
        const {
          overview: overviewImage,
          internal: internalImage,
          useCases: useCasesImage,
          whyMatters: whyMattersImage
        } = module5Sections.hddDeepDive.images;

        return (
          <div id="topic-hdd-deep-dive" className="space-y-16">
            {/* Section 1: HDD Overview - Image Left + Text Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Hard Disk Drive</p>
                  <h2 className="text-3xl font-semibold text-foreground">HDD Deep Dive</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module5Sections.hddDeepDive.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Large capacity storage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Affordable and reliable</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Ideal for bulk storage</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: HDD Internal Components - Centered Title + 4 Cards Grid */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">HDD Internal Components</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Understanding the Mechanical Parts</h2>
                  <p className="text-foreground/80">
                    HDDs use mechanical components to read and write data on spinning magnetic platters.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module5Sections.hddDeepDive.components.map((component, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{component.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{component.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{component.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Full-Width Internal Diagram */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(internalImage.fileName)}
                    alt={internalImage.alt}
                    className="w-full h-full object-contain p-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${internalImage.fileName}. ${internalImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            {/* Section 4: Advantages & Disadvantages - Side by Side */}
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6 border border-border/70">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">✅</span>
                    <h3 className="text-2xl font-semibold text-foreground">Advantages</h3>
                  </div>
                  <ul className="space-y-2">
                    {module5Sections.hddDeepDive.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 border border-border/70">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">❌</span>
                    <h3 className="text-2xl font-semibold text-foreground">Disadvantages</h3>
                  </div>
                  <ul className="space-y-2">
                    {module5Sections.hddDeepDive.disadvantages.map((disadvantage, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-destructive mt-1">•</span>
                        <span>{disadvantage}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>

            {/* Section 5: Full-Width Use Cases Banner */}
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(useCasesImage.fileName)}
                    alt={useCasesImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${useCasesImage.fileName}. ${useCasesImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold text-foreground mb-3">Common Use Cases:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {module5Sections.hddDeepDive.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💾</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding HDDs</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding HDDs helps you make informed storage decisions, choose the right storage solution for your needs, and optimize cost-effectiveness. This knowledge is essential for building and managing computer systems with appropriate storage capacity.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/1")}>
                  ← Previous Topic
                </Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/3")}>
                  Next Topic: SSD Deep Dive →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 3: SSD Deep Dive */}
      {moduleId === 5 && module5Sections && topicId === "3" && (() => {
        const { overview: overviewImage, technology: technologyImage, speedComparison: speedComparisonImage, whyMatters: whyMattersImage } = module5Sections.ssdDeepDive.images;
        return (
          <div id="topic-ssd-deep-dive" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Solid State Drive</p>
                  <h2 className="text-3xl font-semibold text-foreground">SSD Deep Dive</h2>
                  <p className="text-foreground/80 leading-relaxed">{module5Sections.ssdDeepDive.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">SSD Advantages</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Fast, Quiet, Durable & Energy Efficient</h2>
                  <p className="text-foreground/80">SSDs offer significant advantages over traditional HDDs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module5Sections.ssdDeepDive.advantages.map((advantage, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{advantage.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{advantage.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{advantage.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(technologyImage.fileName)} alt={technologyImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${technologyImage.fileName}. ${technologyImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6 border border-border/70">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Speed Details</h3>
                  <ul className="space-y-2">
                    {module5Sections.ssdDeepDive.speedDetails.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-0 overflow-hidden border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(speedComparisonImage.fileName)} alt={speedComparisonImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${speedComparisonImage.fileName}. ${speedComparisonImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">⚡</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding SSDs</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding SSDs helps you choose the right storage for performance, optimize system speed, and make informed decisions about storage upgrades. This knowledge is essential for building fast and responsive computer systems.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/2")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/4")}>Next Topic: NVMe Technology →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 4: NVMe Technology */}
      {moduleId === 5 && module5Sections && topicId === "4" && (() => {
        const { overview: overviewImage, architecture: architectureImage, speedComparison: speedComparisonImage, whyMatters: whyMattersImage } = module5Sections.nvmeTechnology.images;
        return (
          <div id="topic-nvme-technology" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Next-Gen Storage</p>
                  <h2 className="text-3xl font-semibold text-foreground">NVMe Technology</h2>
                  <p className="text-foreground/80 leading-relaxed">{module5Sections.nvmeTechnology.intro}</p>
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">NVMe Features</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">PCIe Connection, M.2 Form Factor, Speed & Low Latency</h2>
                  <p className="text-foreground/80">NVMe delivers the fastest storage speeds available.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module5Sections.nvmeTechnology.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6 border border-border/70">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Speed Comparison</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">{module5Sections.nvmeTechnology.speedDetails.sata}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <span className="text-sm font-semibold text-primary">{module5Sections.nvmeTechnology.speedDetails.nvme}</span>
                    </div>
                  </div>
                </Card>
                <Card className="p-0 overflow-hidden border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(speedComparisonImage.fileName)} alt={speedComparisonImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${speedComparisonImage.fileName}. ${speedComparisonImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🚀</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding NVMe</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding NVMe helps you choose the fastest storage solution, optimize system performance for gaming and professional work, and make informed decisions about storage upgrades. This knowledge is essential for building high-performance computer systems.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/3")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/5")}>Next Topic: Storage File Systems →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 5: Storage File Systems */}
      {moduleId === 5 && module5Sections && topicId === "5" && (() => {
        const { overview: overviewImage, comparison: comparisonImage, whyMatters: whyMattersImage } = module5Sections.storageFileSystems.images;
        return (
          <div id="topic-storage-file-systems" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="text-center max-w-3xl mx-auto space-y-5">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Organization</p>
                <h2 className="text-3xl font-semibold text-foreground">Storage File Systems</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {module5Sections.storageFileSystems.intro}
                </p>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File System Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">NTFS, FAT32, exFAT & ext4</h2>
                  <p className="text-foreground/80">Each file system has different features and use cases.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {module5Sections.storageFileSystems.fileSystems.map((fs, index) => (
                    <Card key={index} className="p-6 border border-border/70">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{fs.icon}</span>
                        <h3 className="text-2xl font-semibold text-primary">{fs.name}</h3>
                      </div>
                      <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{fs.description}</p>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-xs font-semibold text-foreground mb-1">Features:</p>
                        <p className="text-xs text-foreground/70">{fs.features}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(comparisonImage.fileName)} alt={comparisonImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${comparisonImage.fileName}. ${comparisonImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📁</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Systems</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding file systems helps you format drives correctly, ensure compatibility across devices, and choose the right file system for your needs. This knowledge is essential for managing storage effectively.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/4")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/6")}>Next Topic: Disk Partitioning →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 6: Disk Partitioning */}
      {moduleId === 5 && module5Sections && topicId === "6" && (() => {
        const { overview: overviewImage, process: processImage, whyMatters: whyMattersImage } = module5Sections.diskPartitioning.images;
        return (
          <div id="topic-disk-partitioning" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Organization</p>
                  <h2 className="text-3xl font-semibold text-foreground">Disk Partitioning</h2>
                  <p className="text-foreground/80 leading-relaxed">{module5Sections.diskPartitioning.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Partition Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Primary, Extended & Logical Drives</h2>
                  <p className="text-foreground/80">Understanding partition types helps you organize storage effectively.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module5Sections.diskPartitioning.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(processImage.fileName)} alt={processImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${processImage.fileName}. ${processImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-6 border border-border/70">
                <h3 className="text-xl font-semibold text-foreground mb-4">Benefits of Partitioning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {module5Sections.diskPartitioning.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Partitioning</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding disk partitioning helps you organize storage, install multiple operating systems, protect data, and optimize system performance. This knowledge is essential for effective storage management.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/5")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/7")}>Next Topic: Disk Management Tools →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 7: Disk Management Tools */}
      {moduleId === 5 && module5Sections && topicId === "7" && (() => {
        const { overview: overviewImage, tools: toolsImage, whyMatters: whyMattersImage } = module5Sections.diskManagementTools.images;
        return (
          <div id="topic-disk-management-tools" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="text-center max-w-3xl mx-auto space-y-5">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Management</p>
                <h2 className="text-3xl font-semibold text-foreground">Disk Management Tools</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {module5Sections.diskManagementTools.intro}
                </p>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Available Tools</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Windows Disk Management, DiskPart & Third-Party Tools</h2>
                  <p className="text-foreground/80">Different tools for different levels of disk management.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {module5Sections.diskManagementTools.tools.map((tool, index) => (
                    <Card key={index} className="p-6 border border-border/70">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{tool.icon}</span>
                        <h3 className="text-xl font-semibold text-primary">{tool.name}</h3>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{tool.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(toolsImage.fileName)} alt={toolsImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${toolsImage.fileName}. ${toolsImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-6 border border-border/70">
                <h3 className="text-xl font-semibold text-foreground mb-4">Common Operations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {module5Sections.diskManagementTools.operations.map((operation, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm text-foreground/80">{operation}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔧</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Disk Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding disk management tools helps you create and manage partitions safely, format drives correctly, and maintain your storage effectively. This knowledge is essential for storage management and system maintenance.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/6")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/8")}>Next Topic: RAID Concepts →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 8: RAID Concepts */}
      {moduleId === 5 && module5Sections && topicId === "8" && (() => {
        const { overview: overviewImage, levels: levelsImage, whyMatters: whyMattersImage } = module5Sections.raidConcepts.images;
        return (
          <div id="topic-raid-concepts" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Storage Arrays</p>
                  <h2 className="text-3xl font-semibold text-foreground">RAID Concepts</h2>
                  <p className="text-foreground/80 leading-relaxed">{module5Sections.raidConcepts.intro}</p>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">RAID Levels</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">RAID 0, RAID 1, RAID 5 & RAID 10</h2>
                  <p className="text-foreground/80">Different RAID levels offer different benefits.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {module5Sections.raidConcepts.raidLevels.map((level, index) => (
                    <Card key={index} className="p-6 border border-border/70">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{level.icon}</span>
                        <h3 className="text-xl font-semibold text-primary">{level.name}</h3>
                      </div>
                      <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{level.description}</p>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-xs font-semibold text-foreground">Use Case:</p>
                        <p className="text-xs text-foreground/70">{level.useCase}</p>
                      </div>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img src={getImageUrl(levelsImage.fileName)} alt={levelsImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${levelsImage.fileName}. ${levelsImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-6 border border-border/70">
                <h3 className="text-xl font-semibold text-foreground mb-4">RAID Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {module5Sections.raidConcepts.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔐</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding RAID</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding RAID helps you build reliable storage systems, protect critical data, and optimize performance for servers and workstations. This knowledge is essential for professional storage solutions.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/7")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/9")}>Next Topic: Cloud Storage →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 5 Topic 9: Cloud Storage */}
      {moduleId === 5 && module5Sections && topicId === "9" && (() => {
        const { overview: overviewImage, architecture: architectureImage, whyMatters: whyMattersImage } = module5Sections.cloudStorage.images;
        return (
          <div id="topic-cloud-storage" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img src={getImageUrl(overviewImage.fileName)} alt={overviewImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${overviewImage.fileName}. ${overviewImage.brief}</div>`; } }} />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Remote Storage</p>
                  <h2 className="text-3xl font-semibold text-foreground">Cloud Storage</h2>
                  <p className="text-foreground/80 leading-relaxed">{module5Sections.cloudStorage.intro}</p>
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Cloud Features</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Access Anywhere, Automatic Backup, File Sharing & Collaboration</h2>
                  <p className="text-foreground/80">Cloud storage offers convenience and flexibility.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module5Sections.cloudStorage.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img src={getImageUrl(architectureImage.fileName)} alt={architectureImage.alt} className="w-full h-full object-contain p-4" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${architectureImage.fileName}. ${architectureImage.brief}</div>`; } }} />
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Popular Services</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Google Drive, OneDrive, Dropbox & iCloud</h2>
                  <p className="text-foreground/80">Different cloud storage services for different needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {module5Sections.cloudStorage.services.map((service, index) => (
                    <Card key={index} className="p-6 border border-border/70">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{service.icon}</span>
                        <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{service.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-6 border border-border/70">
                <h3 className="text-xl font-semibold text-foreground mb-4">Important Considerations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {module5Sections.cloudStorage.considerations.map((consideration, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm text-foreground/80">{consideration}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">☁️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Cloud Storage</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">Understanding cloud storage helps you access files anywhere, protect data with automatic backups, collaborate effectively, and choose the right service for your needs. This knowledge is essential for modern data management and collaboration.</p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img src={getImageUrl(whyMattersImage.fileName)} alt={whyMattersImage.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; const parent = (e.target as HTMLImageElement).parentElement; if (parent) { parent.innerHTML = `<div class="p-8 text-center text-sm text-muted-foreground">Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}</div>`; } }} />
                  </div>
                </Card>
              </Card>
            </section>
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/5/topic/8")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" disabled>Last Topic</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 1: Types of Software */}
      {moduleId === 6 && module6Sections && topicId === "1" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.typesOfSoftware.images;

        return (
          <div id="topic-types-of-software" className="space-y-16">
            {/* Section 1: Types of Software Overview - Text Left + Image Right */}
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Software Basics</p>
                  <h2 className="text-3xl font-semibold text-foreground">Types of Software</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.typesOfSoftware.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">System software runs your computer</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Application software helps you do tasks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Utility software keeps everything working well</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Section 2: Software Types - Centered Title + 3 Cards Grid */}
            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Software Categories</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">System, Application & Utility Software</h2>
                  <p className="text-foreground/80">
                    Understanding different software categories helps you choose the right tools for your needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module6Sections.typesOfSoftware.softwareTypes.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{type.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Why It Matters - Centered Card with Icon */}
            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💻</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Software Types</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Knowing the different types helps you pick the right programs for your needs. It also makes it easier to fix problems and understand how your computer works.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" disabled>First Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/2")}>
                  Next Topic: OS Responsibilities →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 2: OS Responsibilities - Image Left + Text Right */}
      {moduleId === 6 && module6Sections && topicId === "2" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.osResponsibilities.images;

        return (
          <div id="topic-os-responsibilities" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Operating System</p>
                  <h2 className="text-3xl font-semibold text-foreground">OS Responsibilities</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.osResponsibilities.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Manages memory and resources</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Organizes files and folders</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Controls hardware devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">OS Functions</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">What the OS Does</h2>
                  <p className="text-foreground/80">
                    The operating system handles many important tasks to keep your computer running smoothly.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.osResponsibilities.responsibilities.map((resp, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{resp.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{resp.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{resp.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">⚙️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding OS</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding what the OS does helps you troubleshoot problems, manage your computer better, and know why certain things happen. This knowledge helps you use your computer more effectively.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/1")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/3")}>
                  Next Topic: Windows OS Overview →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 3: Windows OS Overview */}
      {moduleId === 6 && module6Sections && topicId === "3" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.windowsOS.images;

        return (
          <div id="topic-windows-os-overview" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Windows Operating System</p>
                  <h2 className="text-3xl font-semibold text-foreground">Windows OS Overview</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.windowsOS.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Most popular desktop OS</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Great for gaming and work</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Works with many programs</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Windows Features</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why Choose Windows</h2>
                  <p className="text-foreground/80">
                    Windows offers many advantages that make it popular for personal computers.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.windowsOS.features.map((feature, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{feature.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">Windows in Action</h3>
                      <p className="text-lg text-white/90">
                        Windows powers millions of computers worldwide, from home desktops to gaming rigs to office workstations. Its familiar interface and wide software support make it the go-to choice for most users.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🪟</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Windows</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding Windows helps you use your computer better, find programs easily, and troubleshoot problems. This knowledge is essential for getting the most out of your Windows computer.
                </p>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/2")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/4")}>
                  Next Topic: Linux OS Overview →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 4: Linux OS Overview - Image Left + Text Right */}
      {moduleId === 6 && module6Sections && topicId === "4" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.linuxOS.images;

        return (
          <div id="topic-linux-os-overview" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Linux Operating System</p>
                  <h2 className="text-3xl font-semibold text-foreground">Linux OS Overview</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.linuxOS.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Free and open-source</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Very secure and stable</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Great for developers</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Linux Features</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why Choose Linux</h2>
                  <p className="text-foreground/80">
                    Linux offers unique advantages that make it popular for developers and tech enthusiasts.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.linuxOS.features.map((feature, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{feature.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🐧</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Linux</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding Linux helps you see why developers and servers use it, learn about open-source software, and explore powerful computing options. This knowledge opens up new possibilities for your tech journey.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/3")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/5")}>
                  Next Topic: macOS Overview →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 5: macOS Overview - Cards Grid with Image Inside */}
      {moduleId === 6 && module6Sections && topicId === "5" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.macOS.images;

        return (
          <div id="topic-macos-overview" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">macOS Operating System</p>
                  <h2 className="text-3xl font-semibold text-foreground">macOS Overview</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.macOS.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Beautiful and elegant design</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Smooth and fast performance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Great for creative work</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">macOS Features</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why Choose macOS</h2>
                  <p className="text-foreground/80">
                    macOS offers unique advantages that make it popular for creative professionals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.macOS.features.map((feature, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{feature.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{feature.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🍎</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding macOS</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding macOS helps you use Mac computers effectively, appreciate its design, and see why it's popular for creative work. This knowledge helps you make informed decisions about which computer to use.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/4")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/6")}>
                  Next Topic: Mobile OS →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 6: Mobile OS - Image Left + Text Right with Cards */}
      {moduleId === 6 && module6Sections && topicId === "6" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.mobileOS.images;

        return (
          <div id="topic-mobile-os" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile Operating Systems</p>
                  <h2 className="text-3xl font-semibold text-foreground">Mobile OS</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.mobileOS.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Designed for touch screens</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Millions of apps available</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Works on phones and tablets</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Mobile OS Features</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">What Makes Mobile OS Special</h2>
                  </div>
                  <div className="space-y-4">
                    {module6Sections.mobileOS.features.map((feature, index) => (
                      <Card key={index} className="p-6 border border-border/70">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{feature.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{feature.name}</h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📱</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Mobile OS</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding mobile OS helps you use your smartphone better, choose the right apps, and understand how phones work. This knowledge is essential in our mobile-first world.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/5")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/7")}>
                  Next Topic: Drivers →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 7: Drivers - Text Left + Image Right, Cards Grid, Separate Section 3 */}
      {moduleId === 6 && module6Sections && topicId === "7" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.drivers.images;

        return (
          <div id="topic-drivers" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Device Drivers</p>
                  <h2 className="text-3xl font-semibold text-foreground">Drivers</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.drivers.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Connect hardware to OS</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Make devices work correctly</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Needed for printers and graphics cards</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Driver Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How Drivers Work</h2>
                  <p className="text-foreground/80">
                    Different types of drivers help different hardware devices work with your computer.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.drivers.driverTypes.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{type.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔌</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Drivers</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding drivers helps you fix device problems, install new hardware, and keep your computer working with all your devices. This knowledge is essential for troubleshooting hardware issues.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/6")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/8")}>
                  Next Topic: Software Installation & Uninstallation →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 8: Software Installation & Uninstallation - Image Left + Text Right, Full-width Overlay */}
      {moduleId === 6 && module6Sections && topicId === "8" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.softwareInstallation.images;

        return (
          <div id="topic-software-installation-uninstallation" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Software Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Software Installation & Uninstallation</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.softwareInstallation.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Download installer file</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Follow setup wizard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Remove programs properly</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Installation Steps</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How to Install and Remove Software</h2>
                  <p className="text-foreground/80">
                    Follow these steps to properly install and uninstall programs on your computer.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.softwareInstallation.steps.map((step, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{step.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{step.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">Installation Process</h3>
                      <p className="text-lg text-white/90">
                        Installing software adds programs to your computer, while uninstalling removes them safely. Following the proper steps ensures your computer stays organized and runs smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💿</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Installation</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding installation and uninstallation helps you add programs safely, remove them properly, and keep your computer clean and organized. This knowledge prevents problems and keeps your system running smoothly.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/7")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/9")}>
                  Next Topic: Updates & Patches →
                </Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 6 Topic 9: Updates & Patches - Text Left + Image Right, Cards Grid with Image Inside */}
      {moduleId === 6 && module6Sections && topicId === "9" && (() => {
        const {
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module6Sections.updatesPatches.images;

        return (
          <div id="topic-updates-patches" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Software Updates</p>
                  <h2 className="text-3xl font-semibold text-foreground">Updates & Patches</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module6Sections.updatesPatches.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Fix security problems</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Add new features</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Keep computer safe</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Update Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Why Updates Matter</h2>
                  <p className="text-foreground/80">
                    Different types of updates keep your software secure and working well.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module6Sections.updatesPatches.updateTypes.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{type.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(comparisonImage.fileName)}
                      alt={comparisonImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔄</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Updates</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding updates helps you keep your computer safe from hackers, get new features, and fix problems. This knowledge is essential for maintaining a secure and well-functioning computer.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/6/topic/8")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/1")}>Next Module: File Systems & Data Management →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 1: File Organization - Text Left + Image Right, Cards Grid, Separate Section 3 */}
      {moduleId === 7 && module7Sections && topicId === "1" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module7Sections.fileOrganization.images;

        return (
          <div id="topic-file-organization" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">File Organization</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.fileOrganization.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Folders group related files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Good names help you find files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Organized files save time</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Organization Concepts</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Understanding File Organization</h2>
                  <p className="text-foreground/80">
                    Learn the key concepts that help you organize files effectively.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module7Sections.fileOrganization.concepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📁</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Organization</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding file organization helps you find files quickly, keep your computer neat, and work more efficiently. This knowledge is essential for managing your digital files effectively.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" disabled>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/2")}>Next Topic: File Operations →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 2: File Operations - Image Left + Text Right, Cards Grid with Image Inside */}
      {moduleId === 7 && module7Sections && topicId === "2" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          whyMatters: whyMattersImage
        } = module7Sections.fileOperations.images;

        return (
          <div id="topic-file-operations" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">File Operations</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.fileOperations.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Create new files and folders</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Copy and move files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Rename and delete files</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Common Operations</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">File Operations You Can Do</h2>
                  <p className="text-foreground/80">
                    Learn the basic file operations that help you manage your documents.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {module7Sections.fileOperations.operations.map((operation, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{operation.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{operation.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{operation.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📋</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Operations</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding file operations helps you manage your documents effectively, organize your files, and work more efficiently. This knowledge is essential for everyday computer use.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/1")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/3")}>Next Topic: File Types →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 3: File Types - Text Left + Image Right, Cards Grid, Full-width Overlay */}
      {moduleId === 7 && module7Sections && topicId === "3" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module7Sections.fileTypes.images;

        return (
          <div id="topic-file-types" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">File Types</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.fileTypes.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Extensions show file type</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Different types for different uses</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Know which program opens each type</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Categories</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">Common File Types</h2>
                  <p className="text-foreground/80">
                    Different file types serve different purposes. Learn about the main categories.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module7Sections.fileTypes.fileCategories.map((category, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{category.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{category.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{category.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">File Types in Action</h3>
                      <p className="text-lg text-white/90">
                        Understanding file types helps you choose the right program to open files, share files correctly, and organize your documents. Each file type has its purpose and best use case.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">📑</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Types</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding file types helps you open files with the right program, share files correctly, and organize your documents effectively. This knowledge is essential for working with digital files.
                </p>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/2")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/4")}>Next Topic: Compression →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 4: Compression - Image Left + Text Right, Cards Grid, Separate Section 3 */}
      {moduleId === 7 && module7Sections && topicId === "4" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module7Sections.compression.images;

        return (
          <div id="topic-compression" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Compression</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.compression.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Makes files smaller</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Saves storage space</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Easier to share files</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Compression Types</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How Compression Works</h2>
                  <p className="text-foreground/80">
                    Learn about different compression formats and their benefits.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module7Sections.compression.compressionTypes.map((type, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{type.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🗜️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Compression</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding compression helps you save storage space, share files faster, and manage your files more efficiently. This knowledge is essential for working with large files and limited storage.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/3")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/5")}>Next Topic: Backup Basics →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 5: Backup Basics - Text Left + Image Right, Cards Grid with Image Inside */}
      {moduleId === 7 && module7Sections && topicId === "5" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          whyMatters: whyMattersImage
        } = module7Sections.backupBasics.images;

        return (
          <div id="topic-backup-basics" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Protection</p>
                  <h2 className="text-3xl font-semibold text-foreground">Backup Basics</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.backupBasics.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Protect important files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Recover lost data</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Keep files safe</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Backup Methods</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How to Backup Files</h2>
                  <p className="text-foreground/80">
                    Learn different ways to backup your important files.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module7Sections.backupBasics.backupMethods.map((method, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{method.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{method.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{method.description}</p>
                    </Card>
                  ))}
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 mt-6">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">💾</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Backups</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding backups helps you protect your important files, recover from accidents, and keep your data safe. This knowledge is essential for preventing data loss.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/4")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/6")}>Next Topic: File Security →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 6: File Security - Image Left + Text Right, Image Left + Text Right with Cards */}
      {moduleId === 7 && module7Sections && topicId === "6" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          whyMatters: whyMattersImage
        } = module7Sections.fileSecurity.images;

        return (
          <div id="topic-file-security" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Protection</p>
                  <h2 className="text-3xl font-semibold text-foreground">File Security</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.fileSecurity.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Protect files with passwords</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Use encryption for safety</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Control file access</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Security Methods</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">How to Secure Files</h2>
                  </div>
                  <div className="space-y-4">
                    {module7Sections.fileSecurity.securityMethods.map((method, index) => (
                      <Card key={index} className="p-6 border border-border/70">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{method.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{method.name}</h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">{method.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(overviewImage.fileName)}
                      alt={overviewImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${overviewImage.fileName}. ${overviewImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔒</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Security</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding file security helps you protect your personal information, keep files private, and prevent unauthorized access. This knowledge is essential for keeping your data safe.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/5")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/7")}>Next Topic: Searching Files →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 7: Searching Files - Text Left + Image Right, Cards Grid, Separate Section 3 */}
      {moduleId === 7 && module7Sections && topicId === "7" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module7Sections.searchingFiles.images;

        return (
          <div id="topic-searching-files" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Management</p>
                  <h2 className="text-3xl font-semibold text-foreground">Searching Files</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.searchingFiles.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Search by name or type</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Find files quickly</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Search inside files</p>
                    </div>
                  </div>
                </div>
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Search Methods</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How to Search Files</h2>
                  <p className="text-foreground/80">
                    Learn different ways to find files on your computer.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module7Sections.searchingFiles.searchMethods.map((method, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{method.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{method.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{method.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding File Search</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding file search helps you find files quickly, save time, and work more efficiently. This knowledge is essential for managing large numbers of files.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/6")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/8")}>Next Topic: Recycle Bin & Restore →</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Module 7 Topic 8: Recycle Bin & Restore - Image Left + Text Right, Cards Grid, Full-width Overlay */}
      {moduleId === 7 && module7Sections && topicId === "8" && (() => {
        const {
          hero: heroImage,
          overview: overviewImage,
          comparison: comparisonImage,
          whyMatters: whyMattersImage
        } = module7Sections.recycleBinRestore.images;

        return (
          <div id="topic-recycle-bin-restore" className="space-y-16">
            <section className="container mx-auto px-4 pt-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70 order-2 lg:order-1">
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={getImageUrl(heroImage.fileName)}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${heroImage.fileName}. ${heroImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
                <div className="space-y-5 order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">File Recovery</p>
                  <h2 className="text-3xl font-semibold text-foreground">Recycle Bin & Restore</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {module7Sections.recycleBinRestore.intro}
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Deleted files go to Recycle Bin</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Restore files if deleted by mistake</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <p className="text-sm text-foreground/80">Empty bin to permanently delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Recycle Bin Concepts</p>
                  <h2 className="text-3xl font-semibold text-foreground mb-3">How Recycle Bin Works</h2>
                  <p className="text-foreground/80">
                    Learn about deleting, restoring, and managing files in Recycle Bin.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {module7Sections.recycleBinRestore.recycleBinConcepts.map((concept, index) => (
                    <Card key={index} className="p-6 text-center border border-border/70">
                      <div className="text-5xl mb-4">{concept.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{concept.name}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{concept.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-0 overflow-hidden rounded-[28px] border border-border/70">
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={getImageUrl(comparisonImage.fileName)}
                    alt={comparisonImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML =
                          `<div class="p-8 text-center text-sm text-muted-foreground">
                            Add ${comparisonImage.fileName}. ${comparisonImage.brief}
                          </div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-semibold mb-2">Recycle Bin in Action</h3>
                      <p className="text-lg text-white/90">
                        Recycle Bin gives you a safety net when deleting files. You can restore files if you delete them by mistake, but remember to empty the bin regularly to free up space.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section className="container mx-auto px-4">
              <Card className="p-8 rounded-[32px] border border-border/70 space-y-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-4">🗑️</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Understanding Recycle Bin</p>
                  <h2 className="text-3xl font-semibold text-foreground">Why It Matters</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-center">
                  Understanding Recycle Bin helps you recover deleted files, manage storage space, and delete files safely. This knowledge is essential for file management and data recovery.
                </p>
                <Card className="p-0 overflow-hidden border border-border/60 mt-6">
                  <div className="relative w-full h-full min-h-[260px] bg-muted">
                    <img
                      src={getImageUrl(whyMattersImage.fileName)}
                      alt={whyMattersImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          parent.innerHTML =
                            `<div class="p-8 text-center text-sm text-muted-foreground">
                              Add ${whyMattersImage.fileName}. ${whyMattersImage.brief}
                            </div>`;
                        }
                      }}
                    />
                  </div>
                </Card>
              </Card>
            </section>

            <section className="container mx-auto px-4 pb-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border border-border rounded-3xl p-6">
                <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/7/topic/7")}>← Previous Topic</Button>
                <Button size="lg" className="w-full md:w-auto" disabled>Last Topic</Button>
              </div>
            </section>
          </div>
        );
      })()}

      {/* End of Module Content */}
    </div>
  );
};

export default ModuleDetail;

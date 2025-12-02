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
  const simulator = (moduleId === 1 || moduleId === 2) && topicId 
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
        title: "Computer Fundamentals",
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

  // Get sections based on module ID - only Modules 1 and 2 are supported
  const sections = moduleId === 1 ? getModule1Sections() : moduleId === 2 ? getModule2Sections() : null;

  const module1Sections = moduleId === 1 && sections ? (sections as ReturnType<typeof getModule1Sections>) : null;
  const module2Sections = moduleId === 2 && sections ? (sections as ReturnType<typeof getModule2Sections>) : null;

  const resolveHeroContent = () => {
    if (moduleId === 1) {
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
        title: module1Sections?.hero.title ?? "Computer Fundamentals",
        subtitle:
          module1Sections?.hero.subtitle ??
          "Understand how the IPO (Input → Process → Output) cycle, core characteristics, and everyday devices define a computer."
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
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/2/part/1")}>
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
                <Button size="lg" className="w-full md:w-auto" onClick={() => navigate("/module/3")}>
                  Next Module: Operating Systems →
                </Button>
              </div>
            </section>
          </div>
        );
      })(module2Sections)}

      {/* End of Module Content */}
    </div>
  );
};

export default ModuleDetail;

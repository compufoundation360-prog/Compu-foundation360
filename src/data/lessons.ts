export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  content: LessonContent;
  quiz: QuizQuestion[];
}

export interface LessonContent {
  sections: ContentSection[];
}

export interface ContentSection {
  type: 'text' | 'card' | 'flowchart' | 'diagram' | 'list' | 'comparison' | 'block-diagram' | 'video' | 'model';
  title?: string;
  data: any;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Module 1: Introduction to Computers
export const module1Lessons: Lesson[] = [
  {
    id: 1,
    title: "What is a Computer?",
    description: "Learn the definition, role, purpose, advantages, and limitations of computers",
    duration: "10 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is a Computer?',
          data: {
            text: "A computer is an electronic machine that takes input, processes it using instructions, stores the data, and gives output.\n\nIt helps us complete tasks faster, accurately, and automatically.",
            highlight: "computer",
            audio: true,
            audioTitle: "Definition Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Understanding Computers',
          data: {
            description: "Explore different types of computers and gadgets in 3D.",
            embedHtml: `<div class="sketchfab-embed-wrapper"> <iframe title="Computer And Gadgets" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" style="width: 100%; height: 100%;" src="https://sketchfab.com/models/b9e448f85f184360a7147cd541eac45b/embed?autostart=1&camera=0&preload=1&ui_hint=2"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/computer-and-gadgets-b9e448f85f184360a7147cd541eac45b?utm_medium=embed&utm_campaign=share-popup&utm_content=b9e448f85f184360a7147cd541eac45b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Computer And Gadgets </a> by <a href="https://sketchfab.com/JustBlender?utm_medium=embed&utm_campaign=share-popup&utm_content=b9e448f85f184360a7147cd541eac45b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> JustBlender </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=b9e448f85f184360a7147cd541eac45b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
          }
        },
        {
          type: 'text',
          title: 'Role & Purpose',
          data: {
            text: "Computers help us process data, perform tasks automatically, and communicate information quickly.\n\nThey make daily work easier, faster, and more organized."
          }
        },
        {
          type: 'card',
          title: 'Key Functions',
          data: {
            cards: [
              {
                title: "Data Processing",
                description: "A computer converts raw data into meaningful information.\n\nIt calculates, compares, and organizes data very quickly.",
                icon: "📊",
                image: "data-processing.jpg"
              },
              {
                title: "Automation",
                description: "Computers can perform repeated tasks automatically without human help.\n\nThis saves time and reduces errors.",
                icon: "⚙️",
                image: "automation.jpg"
              },
              {
                title: "Communication",
                description: "Computers allow people to share information instantly through the internet, emails, and messaging tools.\n\nThey connect us globally.",
                icon: "🌐",
                image: "communication.jpg"
              },
              {
                title: "Storage & Retrieval",
                description: "Computers can store large amounts of data and show it whenever needed.\n\nFiles can be saved, organized, and accessed instantly.",
                icon: "💾",
                image: "storage-retrieval.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Advantages & Limitations',
          data: {
            illustration: "lesson1-advantages",
            advantages: [
              "Fast: Perform millions of calculations per second",
              "Accurate: Produce precise results when given correct input",
              "Large Storage: Store vast amounts of data",
              "Versatile: Can perform different types of tasks",
              "Continuous Work: Work without getting tired",
              "Reliable: Consistent performance over time"
            ],
            limitations: [
              "No Intelligence: Cannot think or understand feelings",
              "Dependency: Depend completely on humans to give instructions and power",
              "Virus Threats: Vulnerable to malicious software",
              "Power Dependency: Need electricity to function",
              "Cost: Initial investment and maintenance can be expensive"
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'How Computers Work',
          data: {
            steps: [
              { id: "input", label: "Input", description: "User gives data through input devices" },
              { id: "process", label: "Process", description: "CPU processes the data using instructions" },
              { id: "output", label: "Output", description: "Results are shown on screen or printed" },
              { id: "storage", label: "Storage", description: "Data is saved for future use" }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "A computer takes input, processes it, shows output, and stores data.\n\nIt is fast, accurate, and helps us perform many tasks easily."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary function of a computer?",
        options: [
          "To store data only",
          "To process data into information",
          "To display images",
          "To connect to the internet"
        ],
        correctAnswer: 1,
        explanation: "The primary function of a computer is to process raw data into meaningful information according to programmed instructions."
      },
      {
        id: 2,
        question: "Which of the following is NOT an advantage of computers?",
        options: [
          "High speed processing",
          "Ability to think independently",
          "Large storage capacity",
          "Automation of tasks"
        ],
        correctAnswer: 1,
        explanation: "Computers cannot think independently - they require human programming and input to function."
      },
      {
        id: 3,
        question: "What is a major limitation of computers?",
        options: [
          "They are too fast",
          "They require electricity to function",
          "They are too accurate",
          "They store too much data"
        ],
        correctAnswer: 1,
        explanation: "Computers are dependent on electricity - without power, they cannot function."
      }
    ]
  },
  {
    id: 2,
    title: "Characteristics of Computers",
    description: "Understand speed, accuracy, storage, versatility, diligence, automation, and reliability",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Introduction',
          data: {
            text: "Computers possess several unique characteristics that make them powerful tools. Understanding these characteristics helps us appreciate why computers are so essential in modern life.",
            audio: true,
            audioTitle: "Introduction Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Computer Characteristics Explained',
          data: {
            description: "This video explains the key characteristics of computers including speed, accuracy, storage, and more."
          }
        },
        {
          type: 'card',
          title: 'Key Characteristics',
          data: {
            cards: [
              {
                title: "Speed ⚡",
                description: "Computers can perform millions of calculations per second. A modern computer can execute billions of instructions in a single second.",
                details: "Example: A calculator might take seconds to solve complex equations, while a computer solves them in microseconds.",
                image: "speed.jpg"
              },
              {
                title: "Accuracy 🎯",
                description: "Computers produce precise results when given correct input and instructions. They don't make calculation errors.",
                details: "Example: Mathematical calculations are always accurate (unless there's a programming error).",
                image: "accuracy.jpg"
              },
              {
                title: "Storage Capacity 💾",
                description: "Computers can store vast amounts of data - from documents and images to entire libraries of information.",
                details: "Example: A single hard drive can store thousands of books, millions of photos, or hours of video.",
                image: "storage-capacity.jpg"
              },
              {
                title: "Versatility 🔄",
                description: "The same computer can perform different types of tasks - from word processing to gaming to scientific calculations.",
                details: "Example: You can use one computer for writing, browsing, gaming, and video editing.",
                image: "versatility.jpg"
              },
              {
                title: "Diligence 💪",
                description: "Computers can work continuously without getting tired, bored, or making mistakes due to fatigue.",
                details: "Example: A computer can run calculations 24/7 without breaks or errors.",
                image: "diligence.jpg"
              },
              {
                title: "Automation 🤖",
                description: "Once programmed, computers can work automatically without constant human supervision.",
                details: "Example: Automated systems can process transactions, send emails, or manage inventory without human intervention.",
                image: "automation-characteristic.jpg"
              },
              {
                title: "Reliability ✅",
                description: "Computers provide consistent performance and results when properly maintained.",
                details: "Example: The same program will produce the same results every time it runs.",
                image: "reliability.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Speed Comparison',
          data: {
            title: "Computer Speed vs Human Speed",
            illustration: "lesson2-comparison",
            items: [
              {
                task: "Calculate 1 million additions",
                human: "Days or weeks",
                computer: "Less than 1 second"
              },
              {
                task: "Search through 1 million records",
                human: "Months",
                computer: "Milliseconds"
              },
              {
                task: "Process a high-resolution image",
                human: "Hours",
                computer: "Seconds"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which characteristic allows computers to work continuously without getting tired?",
        options: [
          "Speed",
          "Diligence",
          "Accuracy",
          "Versatility"
        ],
        correctAnswer: 1,
        explanation: "Diligence is the characteristic that allows computers to work continuously without fatigue."
      },
      {
        id: 2,
        question: "What does 'versatility' mean in terms of computers?",
        options: [
          "Computers are very fast",
          "Computers can perform different types of tasks",
          "Computers are very accurate",
          "Computers can store a lot of data"
        ],
        correctAnswer: 1,
        explanation: "Versatility means computers can perform different types of tasks using the same hardware."
      },
      {
        id: 3,
        question: "Which characteristic ensures computers produce the same results every time?",
        options: [
          "Speed",
          "Reliability",
          "Storage",
          "Automation"
        ],
        correctAnswer: 1,
        explanation: "Reliability ensures consistent performance and results when the same program runs."
      }
    ]
  },
  {
    id: 3,
    title: "Types of Computers",
    description: "Explore microcomputers, minicomputers, mainframes, supercomputers, and embedded systems",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Introduction',
          data: {
            text: "Computers come in various sizes and capabilities, each designed for specific purposes. Understanding different types helps us choose the right computer for our needs.",
            audio: true,
            audioTitle: "Introduction Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Types of Computers Explained',
          data: {
            description: "This video explains different types of computers from microcomputers to supercomputers."
          }
        },
        {
          type: 'card',
          title: 'Types of Computers',
          data: {
            cards: [
              {
                title: "Microcomputers (PCs) 🖥️",
                description: "Personal computers designed for individual use",
                details: [
                  "Desktop computers: Fixed location, powerful performance",
                  "Laptops: Portable, battery-powered",
                  "Tablets: Touch-screen, lightweight",
                  "Smartphones: Mobile computing devices"
                ],
                examples: "Your home computer, office desktop, MacBook, iPad",
                image: "microcomputers.jpg"
              },
              {
                title: "Minicomputers 🏢",
                description: "Mid-sized computers for small to medium organizations",
                details: [
                  "More powerful than microcomputers",
                  "Support multiple users simultaneously",
                  "Used for departmental computing",
                  "Less powerful than mainframes"
                ],
                examples: "Department servers, small business systems, university computer labs",
                image: "minicomputers.jpg"
              },
              {
                title: "Mainframes 🏦",
                description: "Large, powerful computers for big organizations",
                details: [
                  "Handle massive amounts of data",
                  "Support thousands of users",
                  "Used for critical business operations",
                  "Very expensive and require special facilities"
                ],
                examples: "Bank transaction systems, airline reservation systems, government databases",
                image: "mainframes.jpg"
              },
              {
                title: "Supercomputers 🚀",
                description: "Most powerful computers for complex scientific calculations",
                details: [
                  "Extremely fast processing speed",
                  "Used for research and complex simulations",
                  "Very expensive (millions of dollars)",
                  "Require special cooling systems"
                ],
                examples: "Weather forecasting, space research, nuclear simulations, climate modeling",
                image: "supercomputers.jpg"
              },
              {
                title: "Embedded Systems 🔌",
                description: "Computers built into other devices",
                details: [
                  "Specialized for specific tasks",
                  "Often invisible to users",
                  "Found in everyday devices",
                  "Small and efficient"
                ],
                examples: "ATMs, car systems, washing machines, smart TVs, medical devices",
                image: "embedded-systems.jpg"
              }
            ]
          }
        },
        {
          type: 'model',
          title: 'Real-World Example: Raspberry Pi',
          data: {
            text: "The Raspberry Pi is a credit-card sized microcomputer that demonstrates modern computing technology.\n\nKey Features:\n• Affordable ($35-75)\n• Educational\n• Versatile for DIY projects\n• Runs Linux OS\n\nPerfect example of modern microcomputers! Explore the 3D model to see its components and design.",
            embedHtml: `<div class="sketchfab-embed-wrapper"> <iframe title="Raspberry Pi 2" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" style="width: 100%; height: 100%;" src="https://sketchfab.com/models/89dc28451c7148fc8c8dd867d17af25b/embed?autostart=1&camera=0&preload=1&ui_hint=2"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/raspberry-pi-2-89dc28451c7148fc8c8dd867d17af25b?utm_medium=embed&utm_campaign=share-popup&utm_content=89dc28451c7148fc8c8dd867d17af25b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Raspberry Pi 2 </a> by <a href="https://sketchfab.com/VirtualStudio?utm_medium=embed&utm_campaign=share-popup&utm_content=89dc28451c7148fc8c8dd867d17af25b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Virtual Studio </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=89dc28451c7148fc8c8dd867d17af25b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
          }
        },
        {
          type: 'comparison',
          title: 'Computer Types Comparison',
          data: {
            title: "Size and Power Comparison",
            items: [
              {
                type: "Microcomputer",
                size: "Smallest",
                power: "Low to Medium",
                users: "1-10",
                cost: "Low"
              },
              {
                type: "Minicomputer",
                size: "Small to Medium",
                power: "Medium",
                users: "10-100",
                cost: "Medium"
              },
              {
                type: "Mainframe",
                size: "Large",
                power: "High",
                users: "100-1000+",
                cost: "Very High"
              },
              {
                type: "Supercomputer",
                size: "Very Large",
                power: "Extremely High",
                users: "Research Teams",
                cost: "Extremely High"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which type of computer is most commonly used in homes and offices?",
        options: [
          "Mainframe",
          "Microcomputer",
          "Supercomputer",
          "Minicomputer"
        ],
        correctAnswer: 1,
        explanation: "Microcomputers (PCs, laptops) are the most common type used in homes and offices."
      },
      {
        id: 2,
        question: "What is the primary use of supercomputers?",
        options: [
          "Word processing",
          "Complex scientific calculations",
          "Web browsing",
          "Gaming"
        ],
        correctAnswer: 1,
        explanation: "Supercomputers are designed for complex scientific calculations and research."
      },
      {
        id: 3,
        question: "Which of the following is an example of an embedded system?",
        options: [
          "Desktop computer",
          "ATM machine",
          "Mainframe computer",
          "Laptop"
        ],
        correctAnswer: 1,
        explanation: "ATM machines contain embedded systems - specialized computers built into the device."
      }
    ]
  },
  {
    id: 4,
    title: "Components of a Computer",
    description: "Learn about hardware and software components and their types",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Introduction',
          data: {
            text: "A computer system consists of two main types of components: Hardware (physical parts) and Software (programs and instructions). Both are essential for a computer to function.",
            audio: true,
            audioTitle: "Introduction Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Computer Components Explained',
          data: {
            description: "This video explains hardware and software components of a computer system."
          }
        },
        {
          type: 'card',
          title: 'Hardware Components',
          data: {
            cards: [
              {
                title: "Input Devices ⌨️",
                description: "Devices used to enter data into the computer",
                details: [
                  "Keyboard: For typing text and commands",
                  "Mouse: For pointing and clicking",
                  "Scanner: For converting documents to digital format",
                  "Microphone: For audio input",
                  "Webcam: For video input"
                ],
                image: "input-devices.jpg"
              },
              {
                title: "Processing Unit (CPU) 🧠",
                description: "The brain of the computer that processes data",
                details: [
                  "Central Processing Unit (CPU)",
                  "Performs calculations and executes instructions",
                  "Controls all computer operations",
                  "Located on the motherboard"
                ],
                image: "cpu-processing.jpg"
              },
              {
                title: "Memory 💾",
                description: "Stores data and instructions",
                details: [
                  "RAM (Random Access Memory): Temporary storage",
                  "ROM (Read Only Memory): Permanent storage",
                  "Cache: Very fast temporary storage"
                ],
                image: "memory-ram.jpg"
              },
              {
                title: "Storage Devices 💿",
                description: "Store data permanently",
                details: [
                  "Hard Disk Drive (HDD)",
                  "Solid State Drive (SSD)",
                  "USB Flash Drive",
                  "CD/DVD"
                ],
                image: "storage-devices.jpg"
              },
              {
                title: "Output Devices 🖨️",
                description: "Display or present processed data",
                details: [
                  "Monitor: Visual display",
                  "Printer: Paper output",
                  "Speakers: Audio output",
                  "Projector: Large screen display"
                ],
                image: "output-devices.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Software Components',
          data: {
            cards: [
              {
                title: "System Software 🖥️",
                description: "Software that manages computer hardware",
                details: [
                  "Operating System (Windows, macOS, Linux)",
                  "Device Drivers",
                  "Utility Programs",
                  "Firmware"
                ],
                examples: "Windows 11, macOS, Android, BIOS",
                image: "system-software.jpg"
              },
              {
                title: "Application Software 📱",
                description: "Programs designed for specific tasks",
                details: [
                  "Word Processors (Microsoft Word)",
                  "Web Browsers (Chrome, Firefox)",
                  "Media Players (VLC)",
                  "Games",
                  "Photo Editors"
                ],
                examples: "Microsoft Office, Google Chrome, Adobe Photoshop",
                image: "application-software.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Hardware vs Software',
          data: {
            title: "Key Differences",
            illustration: "lesson4-comparison",
            items: [
              {
                aspect: "Nature",
                hardware: "Physical, tangible components",
                software: "Programs, intangible instructions"
              },
              {
                aspect: "Touch",
                hardware: "Can be touched and seen",
                software: "Cannot be physically touched"
              },
              {
                aspect: "Examples",
                hardware: "CPU, RAM, Keyboard, Monitor",
                software: "Windows, Word, Games"
              },
              {
                aspect: "Function",
                hardware: "Provides physical capabilities",
                software: "Provides instructions to hardware"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which component is known as the 'brain' of the computer?",
        options: [
          "RAM",
          "CPU",
          "Hard Drive",
          "Monitor"
        ],
        correctAnswer: 1,
        explanation: "The CPU (Central Processing Unit) is the brain of the computer that processes all data and instructions."
      },
      {
        id: 2,
        question: "What is the main difference between hardware and software?",
        options: [
          "Hardware is expensive, software is cheap",
          "Hardware is physical, software is programs",
          "Hardware is fast, software is slow",
          "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "Hardware refers to physical components, while software refers to programs and instructions."
      },
      {
        id: 3,
        question: "Which of the following is an example of system software?",
        options: [
          "Microsoft Word",
          "Windows Operating System",
          "Google Chrome",
          "Adobe Photoshop"
        ],
        correctAnswer: 1,
        explanation: "Windows Operating System is system software that manages computer hardware and resources."
      }
    ]
  },
  {
    id: 5,
    title: "Block Diagram of a Computer System",
    description: "Understand the input, processing, output, and storage units",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Introduction',
          data: {
            text: "The block diagram shows how different parts of a computer system work together. It illustrates the flow of data from input to output through processing and storage.",
            illustration: "lesson5-intro"
          }
        },
        {
          type: 'block-diagram',
          title: 'Computer System Block Diagram',
          data: {
            illustration: "lesson5-diagram",
            units: [
              {
                id: "input",
                name: "Input Unit",
                description: "Accepts data and instructions from the user",
                components: ["Keyboard", "Mouse", "Scanner", "Microphone"],
                flow: "Data flows INTO the computer"
              },
              {
                id: "processing",
                name: "Processing Unit (CPU)",
                description: "Processes data according to instructions",
                components: ["ALU (Arithmetic Logic Unit)", "CU (Control Unit)", "Registers"],
                flow: "Data is PROCESSED here"
              },
              {
                id: "output",
                name: "Output Unit",
                description: "Displays or presents processed information",
                components: ["Monitor", "Printer", "Speakers"],
                flow: "Results come OUT of the computer"
              },
              {
                id: "storage",
                name: "Storage Unit",
                description: "Stores data and programs permanently or temporarily",
                components: ["RAM", "Hard Disk", "SSD"],
                flow: "Data is STORED for future use"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Understanding Each Unit',
          data: {
            illustration: "lesson5-input",
            cards: [
              {
                title: "Input Unit 📥",
                description: "The entry point for data into the computer system",
                details: [
                  "Converts human-readable data into computer-readable format",
                  "Examples: Keyboard converts key presses to digital signals",
                  "All input devices are part of this unit",
                  "Data enters the system through this unit"
                ],
                image: "input-unit.jpg"
              },
              {
                title: "Processing Unit (CPU) ⚙️",
                description: "The central component that performs all calculations and operations",
                details: [
                  "ALU: Performs arithmetic and logical operations",
                  "CU: Controls and coordinates all operations",
                  "Registers: Temporary storage for quick access",
                  "All processing happens here"
                ],
                image: "processing-unit.jpg"
              },
              {
                title: "Output Unit 📤",
                description: "Presents processed data in human-readable form",
                details: [
                  "Converts digital data to human-readable format",
                  "Examples: Monitor displays text and images",
                  "Printer produces paper output",
                  "Results are shown through this unit"
                ],
                image: "output-unit.jpg"
              },
              {
                title: "Storage Unit 💾",
                description: "Holds data and programs for future use",
                details: [
                  "Primary Storage (RAM): Fast, temporary",
                  "Secondary Storage (HDD/SSD): Permanent",
                  "Data can be retrieved when needed",
                  "Essential for saving work"
                ],
                image: "storage-unit.jpg"
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Data Flow in Computer System',
          data: {
            steps: [
              { 
                id: "input", 
                label: "Input", 
                description: "User enters data (e.g., typing on keyboard)" 
              },
              { 
                id: "storage1", 
                label: "Temporary Storage", 
                description: "Data stored in RAM temporarily" 
              },
              { 
                id: "process", 
                label: "Processing", 
                description: "CPU processes the data" 
              },
              { 
                id: "output", 
                label: "Output", 
                description: "Results displayed on monitor" 
              },
              { 
                id: "storage2", 
                label: "Permanent Storage", 
                description: "Data saved to hard disk if needed" 
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Concepts',
          data: {
            text: "Understanding the block diagram is crucial because it shows how data flows through a computer system. Every operation follows this pattern: Input → Processing → Output → Storage. This fundamental concept applies to all computer operations, from simple calculations to complex applications.",
            highlight: "Input → Processing → Output → Storage"
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which unit is responsible for processing data in a computer?",
        options: [
          "Input Unit",
          "Processing Unit (CPU)",
          "Output Unit",
          "Storage Unit"
        ],
        correctAnswer: 1,
        explanation: "The Processing Unit (CPU) is responsible for processing all data and executing instructions."
      },
      {
        id: 2,
        question: "What is the correct flow of data in a computer system?",
        options: [
          "Output → Processing → Input → Storage",
          "Input → Processing → Output → Storage",
          "Storage → Input → Processing → Output",
          "Processing → Input → Storage → Output"
        ],
        correctAnswer: 1,
        explanation: "The correct flow is: Input (data enters) → Processing (CPU processes) → Output (results shown) → Storage (data saved)."
      },
      {
        id: 3,
        question: "Which unit converts human-readable data into computer-readable format?",
        options: [
          "Output Unit",
          "Processing Unit",
          "Input Unit",
          "Storage Unit"
        ],
        correctAnswer: 2,
        explanation: "The Input Unit converts human-readable data (like keyboard input) into computer-readable digital format."
      }
    ]
  }
];

// Module 2: Computer Hardware
export const module2Lessons: Lesson[] = [
  {
    id: 1,
    title: "CPU – The Brain of the Computer",
    description: "Learn about the Central Processing Unit, its components, and how it works",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is a CPU?',
          data: {
            text: "The CPU (Central Processing Unit) is the brain of the computer.\n\nIt processes all instructions and performs calculations. Every action you take on a computer goes through the CPU.",
            highlight: "CPU",
            audio: true,
            audioTitle: "CPU Introduction Audio"
          }
        },
        {
          type: 'card',
          title: 'CPU Components',
          data: {
            cards: [
              {
                title: "ALU (Arithmetic Logic Unit)",
                description: "Performs all mathematical calculations and logical operations.\n\nHandles addition, subtraction, comparison, and decision-making.",
                icon: "🔢",
                image: "cpu-alu.jpg"
              },
              {
                title: "CU (Control Unit)",
                description: "Controls and coordinates all operations in the computer.\n\nDirects data flow and manages other components.",
                icon: "🎮",
                image: "cpu-control-unit.jpg"
              },
              {
                title: "Registers",
                description: "Temporary high-speed storage inside the CPU.\n\nStores data and instructions being processed right now.",
                icon: "💾",
                image: "cpu-registers.jpg"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Understanding CPU',
          data: {
            description: "Watch how the CPU processes instructions and performs calculations."
          }
        },
        {
          type: 'text',
          title: 'Clock Speed and Performance',
          data: {
            text: "CPU speed is measured in GHz (gigahertz).\n\nHigher clock speed means faster processing. Modern CPUs can process billions of instructions per second."
          }
        },
        {
          type: 'comparison',
          title: 'CPU Performance Comparison',
          data: {
            title: "CPU Speed Comparison",
            items: [
              {
                type: "Basic CPU",
                speed: "2-3 GHz",
                tasks: "Simple tasks, browsing"
              },
              {
                type: "Mid-range CPU",
                speed: "3-4 GHz",
                tasks: "Gaming, video editing"
              },
              {
                type: "High-end CPU",
                speed: "4-5+ GHz",
                tasks: "Professional work, heavy tasks"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Processing Unit",
          "Central Program Unit",
          "Computer Program Unit"
        ],
        correctAnswer: 0,
        explanation: "CPU stands for Central Processing Unit - the brain of the computer."
      },
      {
        id: 2,
        question: "Which component performs mathematical calculations?",
        options: [
          "Control Unit",
          "Arithmetic Logic Unit",
          "Registers",
          "Cache"
        ],
        correctAnswer: 1,
        explanation: "The ALU (Arithmetic Logic Unit) performs all mathematical calculations and logical operations."
      },
      {
        id: 3,
        question: "What is CPU speed measured in?",
        options: [
          "MB",
          "GHz",
          "GB",
          "MHz"
        ],
        correctAnswer: 1,
        explanation: "CPU speed is measured in GHz (gigahertz) - billions of cycles per second."
      }
    ]
  },
  {
    id: 2,
    title: "Memory Types",
    description: "Understand primary memory, cache memory, and registers",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Introduction to Memory',
          data: {
            text: "Memory stores data and instructions for the computer to use.\n\nDifferent types of memory serve different purposes and have different speeds.",
            audio: true,
            audioTitle: "Memory Introduction Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Memory Types Explained',
          data: {
            description: "Learn about different types of computer memory and their uses."
          }
        },
        {
          type: 'card',
          title: 'Primary Memory Types',
          data: {
            cards: [
              {
                title: "RAM (Random Access Memory)",
                description: "Temporary storage for running programs and data.\n\nFast but loses data when power is off. Types: SRAM (faster) and DRAM (common).",
                icon: "⚡",
                image: "ram-memory.jpg"
              },
              {
                title: "ROM (Read Only Memory)",
                description: "Permanent storage for system instructions.\n\nStores BIOS and firmware. Types: PROM, EPROM, EEPROM.",
                icon: "🔒",
                image: "rom-memory.jpg"
              },
              {
                title: "Cache Memory",
                description: "Very fast memory close to CPU.\n\nLevels: L1 (fastest, smallest), L2, L3 (larger, slower). Speeds up processing.",
                icon: "🚀",
                image: "cache-memory.jpg"
              },
              {
                title: "Registers",
                description: "Fastest memory inside CPU.\n\nTemporary storage for data being processed right now.",
                icon: "💨",
                image: "cpu-registers.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Memory Speed Comparison',
          data: {
            title: "Memory Speed Hierarchy",
            illustration: "lesson2-memory-comparison",
            items: [
              {
                type: "Registers",
                speed: "Fastest",
                location: "Inside CPU"
              },
              {
                type: "Cache (L1, L2, L3)",
                speed: "Very Fast",
                location: "Near CPU"
              },
              {
                type: "RAM",
                speed: "Fast",
                location: "Motherboard"
              },
              {
                type: "ROM",
                speed: "Slower",
                location: "Motherboard"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Memory hierarchy: Registers (fastest) → Cache → RAM → ROM (slowest).\n\nRAM is temporary, ROM is permanent. More RAM means better performance."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which memory type loses data when power is off?",
        options: [
          "ROM",
          "RAM",
          "Cache",
          "Registers"
        ],
        correctAnswer: 1,
        explanation: "RAM (Random Access Memory) is volatile and loses all data when the computer is turned off."
      },
      {
        id: 2,
        question: "What is the fastest type of memory?",
        options: [
          "RAM",
          "ROM",
          "Registers",
          "Cache"
        ],
        correctAnswer: 2,
        explanation: "Registers are the fastest memory, located inside the CPU for immediate data access."
      },
      {
        id: 3,
        question: "Which cache level is closest to the CPU?",
        options: [
          "L3",
          "L2",
          "L1",
          "L4"
        ],
        correctAnswer: 2,
        explanation: "L1 cache is the smallest, fastest, and closest to the CPU."
      }
    ]
  },
  {
    id: 3,
    title: "Secondary Storage Devices",
    description: "Learn about HDD, SSD, optical discs, and flash drives",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is Secondary Storage?',
          data: {
            text: "Secondary storage stores data permanently.\n\nUnlike RAM, data stays even when the computer is turned off. Essential for saving files and programs.",
            audio: true,
            audioTitle: "Storage Introduction Audio"
          }
        },
        {
          type: 'card',
          title: 'Storage Device Types',
          data: {
            cards: [
              {
                title: "Hard Disk Drive (HDD)",
                description: "Traditional storage with spinning platters.\n\nLarge capacity, affordable, but slower. Stores data on magnetic disks.",
                icon: "💿",
                image: "hdd-storage.jpg"
              },
              {
                title: "Solid-State Drive (SSD)",
                description: "Fast flash storage with no moving parts.\n\nMuch faster than HDD, more expensive, durable.",
                icon: "⚡",
                image: "ssd-storage.jpg"
              },
              {
                title: "Optical Discs",
                description: "CD, DVD, Blu-ray discs.\n\nRead by laser, portable, but lower capacity than hard drives.",
                icon: "📀",
                image: "optical-discs.jpg"
              },
              {
                title: "Flash Drives & Memory Cards",
                description: "USB drives and SD cards.\n\nSmall, portable, convenient for transferring files.",
                icon: "💳",
                image: "flash-drives.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'HDD vs SSD',
          data: {
            title: "Storage Device Comparison",
            illustration: "lesson3-storage-comparison",
            items: [
              {
                aspect: "Speed",
                hdd: "Slower (mechanical)",
                ssd: "Much Faster (electronic)"
              },
              {
                aspect: "Cost",
                hdd: "Cheaper per GB",
                ssd: "More expensive"
              },
              {
                aspect: "Durability",
                hdd: "Moving parts can fail",
                ssd: "No moving parts, more durable"
              },
              {
                aspect: "Capacity",
                hdd: "Very large (TB)",
                ssd: "Large (GB to TB)"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Storage Devices Explained',
          data: {
            description: "See how different storage devices work and store data."
          }
        },
        {
          type: 'text',
          title: 'Storage Structure',
          data: {
            text: "HDD uses platters, sectors, and tracks to organize data.\n\nSSD uses flash memory chips. Both store data permanently until deleted."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which storage device has no moving parts?",
        options: [
          "HDD",
          "SSD",
          "CD",
          "DVD"
        ],
        correctAnswer: 1,
        explanation: "SSD (Solid-State Drive) uses flash memory with no moving parts, making it faster and more durable."
      },
      {
        id: 2,
        question: "What is the main advantage of HDD over SSD?",
        options: [
          "Speed",
          "Durability",
          "Lower cost per GB",
          "No moving parts"
        ],
        correctAnswer: 2,
        explanation: "HDD is cheaper per gigabyte of storage compared to SSD, though it's slower."
      },
      {
        id: 3,
        question: "Which device is best for transferring files between computers?",
        options: [
          "HDD",
          "SSD",
          "USB Flash Drive",
          "Internal Hard Drive"
        ],
        correctAnswer: 2,
        explanation: "USB Flash Drives are small, portable, and perfect for transferring files between computers."
      }
    ]
  },
  {
    id: 4,
    title: "Input Devices",
    description: "Explore keyboards, mice, scanners, and other input devices",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Input Devices?',
          data: {
            text: "Input devices let you enter data and commands into the computer.\n\nThey convert your actions into digital signals the computer understands.",
            audio: true,
            audioTitle: "Input Devices Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Input Devices Overview',
          data: {
            description: "Learn about different input devices and how they work."
          }
        },
        {
          type: 'card',
          title: 'Standard Input Devices',
          data: {
            cards: [
              {
                title: "Keyboard",
                description: "Most common input device for typing text.\n\nQWERTY layout, function keys, number pad. Essential for text input.",
                icon: "⌨️",
                image: "keyboard-input.jpg"
              },
              {
                title: "Mouse",
                description: "Pointing device for clicking and navigation.\n\nLeft click, right click, scroll wheel. Controls cursor on screen.",
                icon: "🖱️",
                image: "mouse-input.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Advanced Input Devices',
          data: {
            cards: [
              {
                title: "Scanner",
                description: "Converts paper documents into digital images.\n\nFlatbed, sheet-fed, or handheld scanners.",
                icon: "📄",
                image: "scanner-input.jpg"
              },
              {
                title: "Microphone",
                description: "Records audio and voice input.\n\nUsed for voice commands, video calls, recording.",
                icon: "🎤",
                image: "microphone-input.jpg"
              },
              {
                title: "Webcam",
                description: "Captures video and images.\n\nUsed for video calls, streaming, security.",
                icon: "📹",
                image: "webcam-input.jpg"
              },
              {
                title: "Joystick",
                description: "Gaming controller for precise movement.\n\nPopular for games and flight simulators.",
                icon: "🎮",
                image: "joystick-input.jpg"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Input devices are essential for interacting with computers.\n\nKeyboard and mouse are standard. Scanners, microphones, and webcams add more capabilities."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which is the most common input device for typing?",
        options: [
          "Mouse",
          "Keyboard",
          "Scanner",
          "Microphone"
        ],
        correctAnswer: 1,
        explanation: "The keyboard is the most common input device for entering text and commands."
      },
      {
        id: 2,
        question: "What does a scanner do?",
        options: [
          "Records audio",
          "Converts paper to digital",
          "Controls cursor",
          "Takes photos"
        ],
        correctAnswer: 1,
        explanation: "A scanner converts paper documents into digital images that can be stored on a computer."
      },
      {
        id: 3,
        question: "Which device is used for video calls?",
        options: [
          "Scanner",
          "Microphone",
          "Webcam",
          "Joystick"
        ],
        correctAnswer: 2,
        explanation: "A webcam captures video and is commonly used for video calls and streaming."
      }
    ]
  },
  {
    id: 5,
    title: "Output Devices",
    description: "Learn about monitors, printers, speakers, and projectors",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Output Devices?',
          data: {
            text: "Output devices display or present information from the computer.\n\nThey show results, print documents, or play sounds.",
            audio: true,
            audioTitle: "Output Devices Audio"
          }
        },
        {
          type: 'card',
          title: 'Visual Output Devices',
          data: {
            cards: [
              {
                title: "Monitor Types",
                description: "CRT (old, bulky), LCD (common, thin), LED (modern, energy-efficient).\n\nDisplays text, images, and videos on screen.",
                icon: "🖥️",
                image: "monitor-types.jpg"
              },
              {
                title: "Projector",
                description: "Projects images onto large screens or walls.\n\nUsed for presentations, movies, classrooms.",
                icon: "📽️",
                image: "projector-output.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Print Output Devices',
          data: {
            cards: [
              {
                title: "Inkjet Printer",
                description: "Sprays tiny ink droplets onto paper.\n\nGood for photos and color printing. Affordable.",
                icon: "🖨️",
                image: "inkjet-printer.jpg"
              },
              {
                title: "Laser Printer",
                description: "Uses toner and laser to print.\n\nFast, high quality, good for documents.",
                icon: "🖨️",
                image: "laser-printer.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Audio Output Devices',
          data: {
            cards: [
              {
                title: "Speakers",
                description: "Play sound and music.\n\nDesktop speakers, soundbars, surround sound systems.",
                icon: "🔊",
                image: "speakers-output.jpg"
              },
              {
                title: "Headphones",
                description: "Personal audio output.\n\nOver-ear, on-ear, or in-ear headphones.",
                icon: "🎧",
                image: "headphones-output.jpg"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Output Devices Explained',
          data: {
            description: "See how different output devices work and display information."
          }
        },
        {
          type: 'comparison',
          title: 'Monitor Technology Comparison',
          data: {
            title: "Monitor Types Comparison",
            items: [
              {
                type: "CRT",
                quality: "Good",
                size: "Bulky",
                energy: "High"
              },
              {
                type: "LCD",
                quality: "Very Good",
                size: "Thin",
                energy: "Medium"
              },
              {
                type: "LED",
                quality: "Excellent",
                size: "Very Thin",
                energy: "Low"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which monitor type is most energy-efficient?",
        options: [
          "CRT",
          "LCD",
          "LED",
          "All same"
        ],
        correctAnswer: 2,
        explanation: "LED monitors are the most energy-efficient and modern display technology."
      },
      {
        id: 2,
        question: "Which printer is better for photo printing?",
        options: [
          "Laser Printer",
          "Inkjet Printer",
          "Both same",
          "Dot Matrix"
        ],
        correctAnswer: 1,
        explanation: "Inkjet printers are better for photo printing due to their ability to produce high-quality color images."
      },
      {
        id: 3,
        question: "What is the main purpose of output devices?",
        options: [
          "Enter data",
          "Display information",
          "Store data",
          "Process data"
        ],
        correctAnswer: 1,
        explanation: "Output devices display or present information from the computer to the user."
      }
    ]
  },
  {
    id: 6,
    title: "Peripheral Devices",
    description: "Understand USB peripherals, external drives, and Bluetooth accessories",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Peripherals?',
          data: {
            text: "Peripheral devices connect to your computer to add functionality.\n\nThey expand what your computer can do.",
            audio: true,
            audioTitle: "Peripherals Audio"
          }
        },
        {
          type: 'card',
          title: 'USB Peripherals',
          data: {
            cards: [
              {
                title: "USB Devices",
                description: "Flash drives, external keyboards, mice, webcams.\n\nEasy to connect, plug and play. Universal connection.",
                icon: "🔌",
                image: "usb-peripherals.jpg"
              },
              {
                title: "External Hard Drives",
                description: "Portable storage that connects via USB.\n\nBackup files, transfer data, expand storage.",
                icon: "💾",
                image: "external-drives.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Wireless Peripherals',
          data: {
            cards: [
              {
                title: "Bluetooth Accessories",
                description: "Wireless mouse, keyboard, headphones.\n\nNo cables needed, convenient, works from distance.",
                icon: "📶",
                image: "bluetooth-devices.jpg"
              },
              {
                title: "Wireless Printers",
                description: "Print without cables using Wi-Fi.\n\nConnect multiple devices, print from anywhere.",
                icon: "🖨️",
                image: "wireless-printer.jpg"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Peripheral Devices',
          data: {
            description: "Learn how peripheral devices connect and enhance your computer."
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Peripherals add functionality to your computer.\n\nUSB devices are easy to connect. Bluetooth devices work wirelessly."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main advantage of Bluetooth peripherals?",
        options: [
          "Faster speed",
          "No cables needed",
          "Cheaper",
          "More storage"
        ],
        correctAnswer: 1,
        explanation: "Bluetooth peripherals work wirelessly, eliminating the need for cables."
      },
      {
        id: 2,
        question: "What is a common use for external hard drives?",
        options: [
          "Processing data",
          "Backing up files",
          "Displaying images",
          "Typing text"
        ],
        correctAnswer: 1,
        explanation: "External hard drives are commonly used for backing up files and expanding storage."
      },
      {
        id: 3,
        question: "Which connection is most universal for peripherals?",
        options: [
          "Bluetooth",
          "USB",
          "HDMI",
          "Ethernet"
        ],
        correctAnswer: 1,
        explanation: "USB is the most universal connection standard for peripheral devices."
      }
    ]
  },
  {
    id: 7,
    title: "Ports and Connectors",
    description: "Learn about USB types, HDMI, VGA, Ethernet, and audio ports",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Ports?',
          data: {
            text: "Ports are connection points on your computer.\n\nThey allow you to connect devices and transfer data.",
            audio: true,
            audioTitle: "Ports Audio"
          }
        },
        {
          type: 'card',
          title: 'USB Port Types',
          data: {
            cards: [
              {
                title: "USB Type A",
                description: "Standard rectangular USB port.\n\nMost common, used for flash drives, mice, keyboards.",
                icon: "🔌",
                image: "usb-type-a.jpg"
              },
              {
                title: "USB Type B",
                description: "Square-shaped port.\n\nUsed for printers, scanners, some external drives.",
                icon: "🔌",
                image: "usb-type-b.jpg"
              },
              {
                title: "USB Type C",
                description: "Reversible, modern port.\n\nFaster, smaller, used in new devices. Can charge devices.",
                icon: "⚡",
                image: "usb-type-c.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Other Important Ports',
          data: {
            cards: [
              {
                title: "HDMI Port",
                description: "High-definition video and audio.\n\nConnects to monitors, TVs, projectors.",
                icon: "📺",
                image: "hdmi-port.jpg"
              },
              {
                title: "VGA Port",
                description: "Older video connection.\n\nBlue port, analog signal, for older monitors.",
                icon: "🖥️",
                image: "vga-port.jpg"
              },
              {
                title: "Ethernet Port",
                description: "Wired internet connection.\n\nRJ-45 connector, faster and more stable than Wi-Fi.",
                icon: "🌐",
                image: "ethernet-port.jpg"
              },
              {
                title: "Audio Ports",
                description: "Headphone and microphone jacks.\n\n3.5mm ports for speakers, headphones, mics.",
                icon: "🎧",
                image: "audio-ports.jpg"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Plug and Play',
          data: {
            text: "Modern devices use Plug and Play.\n\nJust connect the device - the computer automatically recognizes and installs it. No manual setup needed."
          }
        },
        {
          type: 'video',
          title: 'Video: Ports and Connectors',
          data: {
            description: "See different ports and how to connect devices properly."
          }
        },
        {
          type: 'comparison',
          title: 'Port Speed Comparison',
          data: {
            title: "Connection Speed Comparison",
            items: [
              {
                port: "USB 2.0",
                speed: "480 Mbps",
                use: "Standard devices"
              },
              {
                port: "USB 3.0",
                speed: "5 Gbps",
                use: "Fast transfer"
              },
              {
                port: "USB Type-C",
                speed: "10+ Gbps",
                use: "Latest devices"
              },
              {
                port: "Ethernet",
                speed: "1-10 Gbps",
                use: "Internet"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which USB type is reversible?",
        options: [
          "USB Type A",
          "USB Type B",
          "USB Type C",
          "All USB types"
        ],
        correctAnswer: 2,
        explanation: "USB Type C is reversible - you can plug it in either way."
      },
      {
        id: 2,
        question: "What does Plug and Play mean?",
        options: [
          "Manual installation needed",
          "Automatic device recognition",
          "Wireless connection",
          "Slow connection"
        ],
        correctAnswer: 1,
        explanation: "Plug and Play means the computer automatically recognizes and installs devices when connected."
      },
      {
        id: 3,
        question: "Which port is used for wired internet?",
        options: [
          "HDMI",
          "VGA",
          "Ethernet",
          "USB"
        ],
        correctAnswer: 2,
        explanation: "Ethernet port provides wired internet connection using an RJ-45 cable."
      }
    ]
  },
  {
    id: 8,
    title: "CPU vs GPU",
    description: "Understand the differences between CPU and GPU, their uses, and when each is needed",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'CPU vs GPU Overview',
          data: {
            text: "CPU and GPU are both processors, but they serve different purposes.\n\nUnderstanding their differences helps you choose the right hardware for your needs.",
            audio: true,
            audioTitle: "CPU vs GPU Introduction"
          }
        },
        {
          type: 'card',
          title: 'CPU - General Purpose Processor',
          data: {
            cards: [
              {
                title: "🧠 CPU Function",
                description: "Handles general computing tasks.\n\nProcesses instructions sequentially. Manages all system operations.",
                image: "cpu-function.jpg",
                details: []
              },
              {
                title: "⚡ CPU Speed",
                description: "Fewer cores but very fast.\n\nOptimized for single-threaded tasks. High clock speed.",
                image: "cpu-speed.jpg",
                details: []
              },
              {
                title: "📋 CPU Uses",
                description: "Operating system, applications, multitasking.\n\nBest for general computing, office work, browsing.",
                image: "cpu-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'GPU - Graphics Processor',
          data: {
            cards: [
              {
                title: "🎮 GPU Function",
                description: "Specialized for graphics and parallel tasks.\n\nProcesses many tasks simultaneously. Handles visual rendering.",
                image: "gpu-function.jpg",
                details: []
              },
              {
                title: "🔥 GPU Architecture",
                description: "Many cores working in parallel.\n\nThousands of small cores. Optimized for parallel processing.",
                image: "gpu-architecture.jpg",
                details: []
              },
              {
                title: "🎨 GPU Uses",
                description: "Gaming, video editing, 3D rendering.\n\nBest for graphics-intensive tasks, AI, cryptocurrency mining.",
                image: "gpu-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: CPU vs GPU Explained',
          data: {
            description: "Learn the key differences between CPU and GPU and when to use each."
          }
        },
        {
          type: 'comparison',
          title: 'CPU vs GPU Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: "CPU",
                purpose: "General processing",
                cores: "Few (2-16)",
                speed: "Very fast per core",
                use: "General computing"
              },
              {
                name: "GPU",
                purpose: "Graphics & parallel",
                cores: "Many (hundreds-thousands)",
                speed: "Slower per core",
                use: "Graphics & gaming"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "CPU handles general tasks sequentially. GPU handles graphics and parallel tasks.\n\nBoth work together - CPU manages the system, GPU handles visuals."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main difference between CPU and GPU?",
        options: [
          "CPU is faster",
          "CPU handles general tasks, GPU handles graphics and parallel tasks",
          "GPU is cheaper",
          "They are the same"
        ],
        correctAnswer: 1,
        explanation: "CPU is designed for general-purpose sequential processing, while GPU is specialized for graphics and parallel processing tasks."
      },
      {
        id: 2,
        question: "Which processor has more cores?",
        options: [
          "CPU",
          "GPU",
          "Both have the same",
          "Depends on the model"
        ],
        correctAnswer: 1,
        explanation: "GPU typically has hundreds or thousands of smaller cores designed for parallel processing, while CPU has fewer but more powerful cores."
      },
      {
        id: 3,
        question: "What is GPU best used for?",
        options: [
          "Word processing",
          "Gaming, video editing, and graphics",
          "Browsing the internet",
          "Email"
        ],
        correctAnswer: 1,
        explanation: "GPU is optimized for graphics-intensive tasks like gaming, video editing, 3D rendering, and other parallel processing applications."
      }
    ]
  },
  {
    id: 9,
    title: "Input and Output",
    description: "Learn about input devices that feed data and output devices that present results",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding Input and Output',
          data: {
            text: "Computers use input devices to receive data and output devices to display results.\n\nUnderstanding this flow helps you use computers effectively.",
            audio: true,
            audioTitle: "Input and Output Introduction"
          }
        },
        {
          type: 'card',
          title: 'Input Devices',
          data: {
            cards: [
              {
                title: "⌨️ Keyboard",
                description: "Feeds text and commands into computer.\n\nTypes letters, numbers, symbols. Sends data to CPU.",
                image: "keyboard-input.jpg",
                details: []
              },
              {
                title: "🖱️ Mouse",
                description: "Feeds position and click data.\n\nControls cursor movement. Sends click commands.",
                image: "mouse-input.jpg",
                details: []
              },
              {
                title: "🎤 Microphone",
                description: "Feeds audio data into computer.\n\nRecords sound. Converts voice to digital data.",
                image: "microphone-input.jpg",
                details: []
              },
              {
                title: "📷 Webcam",
                description: "Feeds video data into computer.\n\nCaptures images and video. Sends visual data.",
                image: "webcam-input.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Output Devices',
          data: {
            cards: [
              {
                title: "🖥️ Monitor",
                description: "Displays visual results from computer.\n\nShows text, images, videos. Presents processed data.",
                image: "monitor-output.jpg",
                details: []
              },
              {
                title: "🔊 Speakers",
                description: "Outputs audio from computer.\n\nPlays sounds, music, voice. Converts digital to sound.",
                image: "speakers-output.jpg",
                details: []
              },
              {
                title: "🖨️ Printer",
                description: "Outputs physical copies of data.\n\nPrints documents, images. Creates hard copies.",
                image: "printer-output.jpg",
                details: []
              },
              {
                title: "📺 Projector",
                description: "Outputs large visual display.\n\nProjects images on screen. Shows presentations.",
                image: "projector-output.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Input and Output Devices',
          data: {
            description: "See how input and output devices work together in a computer system."
          }
        },
        {
          type: 'flowchart',
          title: 'Data Flow Process',
          data: {
            steps: [
              {
                id: "input",
                label: "Input Device",
                description: "User provides data"
              },
              {
                id: "process",
                label: "CPU Processing",
                description: "Computer processes data"
              },
              {
                id: "output",
                label: "Output Device",
                description: "Results displayed"
              },
              {
                id: "user",
                label: "User Sees Result",
                description: "User receives information"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Input devices feed data into computer. Output devices show results.\n\nData flows: Input → Process → Output."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is an input device?",
        options: [
          "Device that displays results",
          "Device that feeds data into the computer",
          "Device that processes data",
          "Device that stores data"
        ],
        correctAnswer: 1,
        explanation: "Input devices are used to feed data and commands into the computer, such as keyboard, mouse, and microphone."
      },
      {
        id: 2,
        question: "Which is an output device?",
        options: [
          "Keyboard",
          "Mouse",
          "Monitor",
          "Microphone"
        ],
        correctAnswer: 2,
        explanation: "Monitor is an output device that displays visual results from the computer, while keyboard, mouse, and microphone are input devices."
      },
      {
        id: 3,
        question: "What is the correct data flow?",
        options: [
          "Output → Process → Input",
          "Input → Process → Output",
          "Process → Input → Output",
          "Output → Input → Process"
        ],
        correctAnswer: 1,
        explanation: "The correct flow is: Input devices feed data → CPU processes it → Output devices display the results."
      }
    ]
  }
];

// Module 3: Memory & Storage Management
export const module3Lessons: Lesson[] = [
  {
    id: 1,
    title: "Data Measurement Units",
    description: "Learn about bits, bytes, KB, MB, GB, TB, and how to convert between them",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding Data Size',
          data: {
            text: "Data is measured in units from smallest to largest.\n\nUnderstanding these units helps you know how much storage you need.",
            audio: true,
            audioTitle: "Data Units Audio"
          }
        },
        {
          type: 'card',
          title: 'Data Measurement Units',
          data: {
            cards: [
              {
                title: "Bit",
                description: "Smallest unit - 0 or 1.\n\nBinary digit, basic building block of data.",
                icon: "🔢",
                image: "data-bit.jpg"
              },
              {
                title: "Byte",
                description: "8 bits = 1 byte.\n\nStores one character (like 'A' or '5').",
                icon: "📝",
                image: "data-byte.jpg"
              },
              {
                title: "Kilobyte (KB)",
                description: "1,024 bytes.\n\nSmall text file, simple image.",
                icon: "📄",
                image: "data-kb.jpg"
              },
              {
                title: "Megabyte (MB)",
                description: "1,024 KB = 1 MB.\n\nPhoto, song, small document.",
                icon: "📷",
                image: "data-mb.jpg"
              },
              {
                title: "Gigabyte (GB)",
                description: "1,024 MB = 1 GB.\n\nMovie, large software, many photos.",
                icon: "🎬",
                image: "data-gb.jpg"
              },
              {
                title: "Terabyte (TB)",
                description: "1,024 GB = 1 TB.\n\nLarge storage, thousands of files.",
                icon: "💾",
                image: "data-tb.jpg"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Data Units Explained',
          data: {
            description: "Visual explanation of data measurement units and conversions."
          }
        },
        {
          type: 'comparison',
          title: 'Data Size Examples',
          data: {
            title: "Real-World Data Sizes",
            items: [
              {
                item: "Text Document",
                size: "10-50 KB",
                example: "Word file"
              },
              {
                item: "Photo",
                size: "2-5 MB",
                example: "Camera image"
              },
              {
                item: "Song",
                size: "3-5 MB",
                example: "MP3 file"
              },
              {
                item: "Movie",
                size: "1-2 GB",
                example: "Video file"
              },
              {
                item: "Hard Drive",
                size: "500 GB - 2 TB",
                example: "Storage device"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Conversion Tips',
          data: {
            text: "Remember: 1,024 bytes = 1 KB, 1,024 KB = 1 MB, and so on.\n\nEach level is 1,024 times larger than the previous one."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "How many bits are in one byte?",
        options: [
          "4 bits",
          "8 bits",
          "16 bits",
          "32 bits"
        ],
        correctAnswer: 1,
        explanation: "One byte equals 8 bits - the basic unit for storing a single character."
      },
      {
        id: 2,
        question: "How many KB are in 1 MB?",
        options: [
          "100 KB",
          "1,000 KB",
          "1,024 KB",
          "10,000 KB"
        ],
        correctAnswer: 2,
        explanation: "1 Megabyte equals 1,024 Kilobytes (not 1,000)."
      },
      {
        id: 3,
        question: "Which unit is largest?",
        options: [
          "GB",
          "MB",
          "TB",
          "KB"
        ],
        correctAnswer: 2,
        explanation: "Terabyte (TB) is the largest unit listed - 1 TB = 1,024 GB."
      }
    ]
  },
  {
    id: 2,
    title: "RAM vs ROM",
    description: "Understand the differences between RAM and ROM memory",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'RAM and ROM Overview',
          data: {
            text: "RAM and ROM are both memory types but serve different purposes.\n\nUnderstanding their differences is key to understanding how computers work.",
            audio: true,
            audioTitle: "RAM ROM Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: RAM vs ROM',
          data: {
            description: "Learn the key differences between RAM and ROM memory."
          }
        },
        {
          type: 'card',
          title: 'RAM (Random Access Memory)',
          data: {
            cards: [
              {
                title: "Volatile Memory",
                description: "Loses data when power is off.\n\nTemporary storage for running programs.",
                icon: "⚡",
                image: "ram-volatile.jpg"
              },
              {
                title: "Read and Write",
                description: "Can read and write data quickly.\n\nStores data you're working on right now.",
                icon: "✏️",
                image: "ram-read-write.jpg"
              },
              {
                title: "Fast Access",
                description: "Very fast for CPU to access.\n\nMore RAM = better performance.",
                icon: "🚀",
                image: "ram-fast.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'ROM (Read Only Memory)',
          data: {
            cards: [
              {
                title: "Non-Volatile",
                description: "Keeps data even when power is off.\n\nPermanent storage for system instructions.",
                icon: "🔒",
                image: "rom-nonvolatile.jpg"
              },
              {
                title: "Read Only",
                description: "Usually read-only, can't be easily changed.\n\nStores BIOS and firmware.",
                icon: "📖",
                image: "rom-read-only.jpg"
              },
              {
                title: "System Critical",
                description: "Essential for computer startup.\n\nContains boot instructions.",
                icon: "⚙️",
                image: "rom-system.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'RAM vs ROM Comparison',
          data: {
            title: "Key Differences",
            illustration: "lesson3-ram-rom-comparison",
            items: [
              {
                aspect: "Data Retention",
                ram: "Lost when power off",
                rom: "Permanent"
              },
              {
                aspect: "Speed",
                ram: "Very Fast",
                rom: "Slower"
              },
              {
                aspect: "Purpose",
                ram: "Running programs",
                rom: "System instructions"
              },
              {
                aspect: "Can Write?",
                ram: "Yes, easily",
                rom: "Rarely/Read-only"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "RAM = temporary, fast, for running programs.\n\nROM = permanent, stores system instructions. Both are essential."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What happens to RAM data when the computer is turned off?",
        options: [
          "Saved permanently",
          "Lost/deleted",
          "Moved to ROM",
          "Backed up"
        ],
        correctAnswer: 1,
        explanation: "RAM is volatile - all data is lost when the computer is turned off."
      },
      {
        id: 2,
        question: "What is ROM mainly used for?",
        options: [
          "Running programs",
          "Storing system instructions",
          "Temporary files",
          "User documents"
        ],
        correctAnswer: 1,
        explanation: "ROM stores permanent system instructions like BIOS and firmware."
      },
      {
        id: 3,
        question: "Which memory type is faster?",
        options: [
          "RAM",
          "ROM",
          "Both same",
          "Cache"
        ],
        correctAnswer: 0,
        explanation: "RAM is much faster than ROM, designed for quick access to running programs."
      }
    ]
  },
  {
    id: 3,
    title: "Storage Devices Comparison",
    description: "Compare HDD vs SSD, internal vs external storage, and read/write operations",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Storage Comparison',
          data: {
            text: "Different storage devices have different strengths.\n\nUnderstanding their differences helps you choose the right storage.",
            audio: true,
            audioTitle: "Storage Comparison Audio"
          }
        },
        {
          type: 'comparison',
          title: 'HDD vs SSD Detailed',
          data: {
            title: "Storage Technology Comparison",
            illustration: "lesson3-hdd-ssd-comparison",
            items: [
              {
                aspect: "Speed",
                hdd: "100-200 MB/s",
                ssd: "500-3000+ MB/s"
              },
              {
                aspect: "Lifespan",
                hdd: "3-5 years",
                ssd: "5-10+ years"
              },
              {
                aspect: "Cost per GB",
                hdd: "Lower",
                ssd: "Higher"
              },
              {
                aspect: "Durability",
                hdd: "Moving parts",
                ssd: "No moving parts"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Internal vs External Storage',
          data: {
            cards: [
              {
                title: "Internal Storage",
                description: "Inside the computer case.\n\nFaster, permanent, main storage. HDD or SSD.",
                icon: "💻",
                image: "internal-storage.jpg"
              },
              {
                title: "External Storage",
                description: "Outside, connects via USB.\n\nPortable, for backup and transfer. External HDD/SSD.",
                icon: "💾",
                image: "external-storage.jpg"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Read/Write Operations',
          data: {
            text: "Read = getting data from storage.\n\nWrite = saving data to storage. SSD is much faster for both operations."
          }
        },
        {
          type: 'video',
          title: 'Video: Storage Comparison',
          data: {
            description: "See the real-world differences between storage devices."
          }
        },
        {
          type: 'card',
          title: 'When to Use Each',
          data: {
            cards: [
              {
                title: "Use HDD for",
                description: "Large storage needs, budget-friendly.\n\nBackup, archives, less-used files.",
                icon: "💰",
                image: "hdd-use.jpg"
              },
              {
                title: "Use SSD for",
                description: "Speed, performance, active files.\n\nOperating system, programs, frequent access.",
                icon: "⚡",
                image: "ssd-use.jpg"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which storage is faster?",
        options: [
          "HDD",
          "SSD",
          "Both same",
          "CD"
        ],
        correctAnswer: 1,
        explanation: "SSD is much faster than HDD because it has no moving parts and uses flash memory."
      },
      {
        id: 2,
        question: "What is the main advantage of external storage?",
        options: [
          "Speed",
          "Portability",
          "Cost",
          "Durability"
        ],
        correctAnswer: 1,
        explanation: "External storage is portable - you can easily move it between computers."
      },
      {
        id: 3,
        question: "What does 'read' operation mean?",
        options: [
          "Saving data",
          "Getting data from storage",
          "Deleting data",
          "Copying data"
        ],
        correctAnswer: 1,
        explanation: "Read operation means getting/retrieving data from storage."
      }
    ]
  },
  {
    id: 4,
    title: "File Systems",
    description: "Learn about FAT32, NTFS, exFAT file systems and formatting",
    duration: "16 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is a File System?',
          data: {
            text: "File systems organize how data is stored on storage devices.\n\nThey manage files, folders, and how the computer finds data.",
            audio: true,
            audioTitle: "File Systems Audio"
          }
        },
        {
          type: 'card',
          title: 'Common File Systems',
          data: {
            cards: [
              {
                title: "FAT32",
                description: "Older, compatible file system.\n\nWorks on all devices, but 4GB file size limit.",
                icon: "📁",
                image: "fat32-filesystem.jpg"
              },
              {
                title: "NTFS",
                description: "Windows standard file system.\n\nLarge files, security features, modern Windows.",
                icon: "🪟",
                image: "ntfs-filesystem.jpg"
              },
              {
                title: "exFAT",
                description: "Modern, cross-platform system.\n\nLarge files, works on Windows, Mac, Linux.",
                icon: "💿",
                image: "exfat-filesystem.jpg"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Formatting and Partitioning',
          data: {
            text: "Formatting prepares storage for use.\n\nPartitioning divides storage into separate sections. Both organize your data."
          }
        },
        {
          type: 'video',
          title: 'Video: File Systems Explained',
          data: {
            description: "Learn how file systems organize and manage your data."
          }
        },
        {
          type: 'comparison',
          title: 'File System Comparison',
          data: {
            title: "File System Features",
            items: [
              {
                system: "FAT32",
                maxFile: "4 GB",
                os: "All",
                security: "Basic"
              },
              {
                system: "NTFS",
                maxFile: "Very Large",
                os: "Windows",
                security: "Advanced"
              },
              {
                system: "exFAT",
                maxFile: "Very Large",
                os: "All",
                security: "Basic"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Allocation Units and Sectors',
          data: {
            text: "Storage is divided into sectors and allocation units.\n\nThese are the smallest blocks where data is stored. File systems manage these efficiently."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which file system has a 4GB file size limit?",
        options: [
          "NTFS",
          "exFAT",
          "FAT32",
          "All same"
        ],
        correctAnswer: 2,
        explanation: "FAT32 has a 4GB maximum file size limit, which is why it's less used for large files."
      },
      {
        id: 2,
        question: "What is the Windows standard file system?",
        options: [
          "FAT32",
          "NTFS",
          "exFAT",
          "HFS"
        ],
        correctAnswer: 1,
        explanation: "NTFS is the standard file system for modern Windows operating systems."
      },
      {
        id: 3,
        question: "What does formatting do?",
        options: [
          "Deletes all data",
          "Prepares storage for use",
          "Increases speed",
          "Adds security"
        ],
        correctAnswer: 1,
        explanation: "Formatting prepares storage devices for use by creating a file system structure."
      }
    ]
  },
  {
    id: 5,
    title: "Partitions & Drives",
    description: "Understand what partitions are, drive letters (C:, D:), and partition types",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Partitions?',
          data: {
            text: "A partition divides storage into separate sections.\n\nEach partition acts like a separate drive with its own letter (C:, D:, E:).",
            audio: true,
            audioTitle: "Partitions Audio"
          }
        },
        {
          type: 'video',
          title: 'Video: Partitions Explained',
          data: {
            description: "Visual explanation of how partitions work and why drives have letters."
          }
        },
        {
          type: 'card',
          title: 'Why Drive Letters?',
          data: {
            cards: [
              {
                title: "C: Drive",
                description: "Usually the main system drive.\n\nContains Windows, programs, and system files.",
                icon: "💻",
                image: "c-drive.jpg"
              },
              {
                title: "D:, E: Drives",
                description: "Additional partitions or drives.\n\nUsed for data, backup, or separate storage.",
                icon: "📁",
                image: "d-e-drives.jpg"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Partition Types',
          data: {
            cards: [
              {
                title: "System Partition",
                description: "Contains operating system.\n\nEssential for booting, usually C: drive.",
                icon: "⚙️",
                image: "system-partition.jpg"
              },
              {
                title: "Data Partition",
                description: "For user files and programs.\n\nSeparate from system, safer for data.",
                icon: "📂",
                image: "data-partition.jpg"
              },
              {
                title: "Recovery Partition",
                description: "Backup system files.\n\nUsed to restore computer if needed.",
                icon: "🔧",
                image: "recovery-partition.jpg"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Benefits of Partitioning',
          data: {
            text: "Partitioning organizes your storage.\n\nSeparates system files from data, makes backup easier, and can improve organization."
          }
        },
        {
          type: 'comparison',
          title: 'Partition Uses',
          data: {
            title: "Common Partition Setup",
            items: [
              {
                drive: "C:",
                use: "System & Programs",
                size: "100-250 GB"
              },
              {
                drive: "D:",
                use: "Data & Files",
                size: "Remaining space"
              },
              {
                drive: "Recovery",
                use: "System Backup",
                size: "10-20 GB"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is a partition?",
        options: [
          "A separate drive",
          "A division of storage",
          "A file type",
          "A folder"
        ],
        correctAnswer: 1,
        explanation: "A partition is a division of storage that acts like a separate drive."
      },
      {
        id: 2,
        question: "Which drive usually contains the operating system?",
        options: [
          "D: drive",
          "E: drive",
          "C: drive",
          "F: drive"
        ],
        correctAnswer: 2,
        explanation: "The C: drive typically contains the Windows operating system and system files."
      },
      {
        id: 3,
        question: "What is the benefit of having separate partitions?",
        options: [
          "Faster speed",
          "Better organization and safety",
          "More storage",
          "Better graphics"
        ],
        correctAnswer: 1,
        explanation: "Separate partitions help organize data and keep system files separate from user data for better safety."
      }
    ]
  },
  {
    id: 6,
    title: "Backup & Recovery",
    description: "Learn about system restore, external backup, and cloud backup methods",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Why Backup is Important',
          data: {
            text: "Backups protect your data from loss.\n\nIf something goes wrong, you can restore your files and system.",
            audio: true,
            audioTitle: "Backup Audio"
          }
        },
        {
          type: 'card',
          title: 'Backup Methods',
          data: {
            cards: [
              {
                title: "System Restore",
                description: "Windows feature to restore system.\n\nGoes back to previous working state. Fixes system issues.",
                icon: "🔧",
                image: "system-restore.jpg"
              },
              {
                title: "External Backup",
                description: "Copy files to external drive.\n\nUSB drive, external HDD. Physical backup you control.",
                icon: "💾",
                image: "external-backup.jpg"
              },
              {
                title: "Cloud Backup",
                description: "Store files online.\n\nGoogle Drive, OneDrive, Dropbox. Access from anywhere.",
                icon: "☁️",
                image: "cloud-backup.jpg"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Backup Methods',
          data: {
            description: "Learn how to backup your data using different methods."
          }
        },
        {
          type: 'comparison',
          title: 'Backup Method Comparison',
          data: {
            title: "Backup Options",
            items: [
              {
                method: "System Restore",
                speed: "Fast",
                use: "System recovery"
              },
              {
                method: "External Drive",
                speed: "Medium",
                use: "Full backup"
              },
              {
                method: "Cloud",
                speed: "Depends on internet",
                use: "File backup"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Recovery Options',
          data: {
            text: "Recovery restores your system or files.\n\nUse System Restore for system issues. Use backups to restore lost files."
          }
        },
        {
          type: 'flowchart',
          title: 'Backup Process',
          data: {
            steps: [
              { id: "select", label: "Select Files", description: "Choose what to backup" },
              { id: "choose", label: "Choose Method", description: "External drive or cloud" },
              { id: "backup", label: "Create Backup", description: "Copy files to backup location" },
              { id: "verify", label: "Verify Backup", description: "Check backup is complete" },
              { id: "store", label: "Store Safely", description: "Keep backup in safe place" }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is System Restore used for?",
        options: [
          "Backing up files",
          "Restoring system to previous state",
          "Deleting files",
          "Installing programs"
        ],
        correctAnswer: 1,
        explanation: "System Restore returns your computer to a previous working state, fixing system issues."
      },
      {
        id: 2,
        question: "What is an advantage of cloud backup?",
        options: [
          "Faster than external",
          "Access from anywhere",
          "Free unlimited storage",
          "More secure"
        ],
        correctAnswer: 1,
        explanation: "Cloud backup allows you to access your files from anywhere with internet connection."
      },
      {
        id: 3,
        question: "Why is backup important?",
        options: [
          "Increases speed",
          "Protects data from loss",
          "Improves performance",
          "Adds storage"
        ],
        correctAnswer: 1,
        explanation: "Backup protects your data from loss due to hardware failure, viruses, or accidental deletion."
      }
    ]
  }
];

// Module 4: Software Fundamentals
export const module4Lessons: Lesson[] = [
  {
    id: 1,
    title: "Types of Software",
    description: "Learn about system software, application software, and utility software",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is Software?',
          data: {
            text: "Software is a set of instructions that tells the computer what to do.\n\nWithout software, hardware cannot function. Software makes computers useful.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Main Software Types',
          data: {
            cards: [
              {
                title: "🖥️ System Software",
                description: "Controls and manages computer hardware.\n\nOperating systems, drivers, and utilities that keep the computer running.",
                image: "system-software.jpg"
              },
              {
                title: "📱 Application Software",
                description: "Programs for specific tasks.\n\nWord processors, browsers, games, and media players for daily use.",
                image: "application-software.jpg"
              },
              {
                title: "🔧 Utility Software",
                description: "Tools to maintain and optimize the system.\n\nAntivirus, disk cleanup, file compression, and backup tools.",
                image: "utility-software.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Software Comparison',
          data: {
            title: "Software Types Overview",
            items: [
              {
                type: "System Software",
                purpose: "Manages hardware",
                examples: "OS, Drivers",
                cost: "Included with OS"
              },
              {
                type: "Application Software",
                purpose: "User tasks",
                examples: "Word, Browser, Games",
                cost: "Free to Paid"
              },
              {
                type: "Utility Software",
                purpose: "System maintenance",
                examples: "Antivirus, Cleanup",
                cost: "Free to Paid"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Understanding Software Types',
          data: {
            description: "Watch how different types of software work together."
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "System software manages hardware. Application software helps users. Utility software maintains the system.\n\nAll three work together to make computers functional and useful."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What type of software manages computer hardware?",
        options: [
          "Application Software",
          "System Software",
          "Utility Software",
          "Game Software"
        ],
        correctAnswer: 1,
        explanation: "System software manages and controls computer hardware, including the operating system and device drivers."
      },
      {
        id: 2,
        question: "Which software helps users complete specific tasks?",
        options: [
          "System Software",
          "Application Software",
          "Firmware",
          "Hardware"
        ],
        correctAnswer: 1,
        explanation: "Application software includes programs like word processors, browsers, and media players that help users perform tasks."
      },
      {
        id: 3,
        question: "Antivirus software is an example of:",
        options: [
          "System Software",
          "Application Software",
          "Utility Software",
          "Firmware"
        ],
        correctAnswer: 2,
        explanation: "Antivirus is utility software that maintains and protects the system from threats."
      }
    ]
  },
  {
    id: 2,
    title: "Firmware",
    description: "Learn about BIOS, UEFI, and firmware updates",
    duration: "10 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is Firmware?',
          data: {
            text: "Firmware is software permanently stored in hardware.\n\nIt provides low-level control for device hardware. It's between hardware and software.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Firmware Types',
          data: {
            cards: [
              {
                title: "🔌 BIOS",
                description: "Basic Input/Output System.\n\nOlder firmware standard. Starts computer and checks hardware before OS loads.",
                image: "bios-firmware.jpg"
              },
              {
                title: "⚡ UEFI",
                description: "Unified Extensible Firmware Interface.\n\nModern replacement for BIOS. Faster boot, better security, larger disk support.",
                image: "uefi-firmware.jpg"
              },
              {
                title: "🔄 Firmware Updates",
                description: "Updates improve performance and security.\n\nFix bugs, add features, support new hardware. Important to keep updated.",
                image: "firmware-update.jpg"
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Computer Startup Process',
          data: {
            steps: [
              {
                id: "power",
                label: "Power On",
                description: "User presses power button"
              },
              {
                id: "check",
                label: "BIOS/UEFI Check",
                description: "Firmware checks hardware components"
              },
              {
                id: "post",
                label: "POST",
                description: "Power-On Self-Test verifies system"
              },
              {
                id: "boot",
                label: "Boot Loader",
                description: "Firmware loads operating system"
              },
              {
                id: "os",
                label: "OS Starts",
                description: "Operating system takes control"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'BIOS vs UEFI',
          data: {
            title: "Firmware Comparison",
            items: [
              {
                type: "BIOS",
                boot: "Slower",
                disk: "Up to 2TB",
                security: "Basic",
                compatibility: "Old systems"
              },
              {
                type: "UEFI",
                boot: "Faster",
                disk: "Unlimited",
                security: "Advanced",
                compatibility: "Modern systems"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Firmware is permanent software in hardware. BIOS is older, UEFI is modern.\n\nFirmware starts the computer and loads the operating system."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does BIOS stand for?",
        options: [
          "Basic Input/Output System",
          "Binary Input/Output System",
          "Boot Input/Output System",
          "Basic Internal Operating System"
        ],
        correctAnswer: 0,
        explanation: "BIOS stands for Basic Input/Output System, the firmware that initializes hardware during startup."
      },
      {
        id: 2,
        question: "Which firmware is more modern?",
        options: [
          "BIOS",
          "UEFI",
          "Both are the same",
          "Neither"
        ],
        correctAnswer: 1,
        explanation: "UEFI (Unified Extensible Firmware Interface) is the modern replacement for BIOS with better features."
      },
      {
        id: 3,
        question: "What happens first when you turn on a computer?",
        options: [
          "Operating system loads",
          "BIOS/UEFI checks hardware",
          "Applications start",
          "Internet connects"
        ],
        correctAnswer: 1,
        explanation: "BIOS/UEFI firmware runs first to check hardware before the operating system loads."
      }
    ]
  },
  {
    id: 3,
    title: "Software Installation & Management",
    description: "Learn how to install, update, and manage software",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Installing Software',
          data: {
            text: "Software installation adds programs to your computer.\n\nYou can install from CD, USB drive, or download from the internet.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Installation Methods',
          data: {
            cards: [
              {
                title: "💿 From CD/DVD",
                description: "Insert disc and follow setup.\n\nOlder method. Insert disc, autorun starts, follow installation wizard.",
                image: "install-cd.jpg"
              },
              {
                title: "💾 From USB Drive",
                description: "Copy installer to USB and run.\n\nPortable method. Copy setup file, plug USB, run installer.",
                image: "install-usb.jpg"
              },
              {
                title: "🌐 Online Download",
                description: "Download from official websites.\n\nMost common method. Visit website, download installer, run setup file.",
                image: "install-online.jpg"
              },
              {
                title: "📦 App Stores",
                description: "Install from Microsoft Store or similar.\n\nSafe and easy. Browse store, click install, automatic setup.",
                image: "install-store.jpg"
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Installation Process',
          data: {
            steps: [
              {
                id: "get",
                label: "Get Installer",
                description: "Download or insert installation media"
              },
              {
                id: "run",
                label: "Run Setup",
                description: "Double-click installer file"
              },
              {
                id: "wizard",
                label: "Follow Wizard",
                description: "Accept terms, choose location"
              },
              {
                id: "install",
                label: "Install Files",
                description: "Wait for files to copy"
              },
              {
                id: "complete",
                label: "Complete Setup",
                description: "Finish installation and launch"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Software Management',
          data: {
            text: "Manage software through Control Panel or Settings.\n\nUninstall unused programs. Update software for security. Check licenses."
          }
        },
        {
          type: 'comparison',
          title: 'Installation Sources',
          data: {
            title: "Installation Methods Comparison",
            items: [
              {
                method: "CD/DVD",
                internet: "Not needed",
                speed: "Medium",
                safety: "High",
                convenience: "Low"
              },
              {
                method: "USB Drive",
                internet: "Not needed",
                speed: "Fast",
                safety: "High",
                convenience: "Medium"
              },
              {
                method: "Online Download",
                internet: "Required",
                speed: "Depends on connection",
                safety: "Medium",
                convenience: "High"
              },
              {
                method: "App Store",
                internet: "Required",
                speed: "Fast",
                safety: "Very High",
                convenience: "Very High"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Software Installation',
          data: {
            description: "Watch how to install and manage software safely."
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Install software from trusted sources. Follow installation wizard. Keep software updated.\n\nUninstall unused programs to free space and improve performance."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the safest way to install software?",
        options: [
          "From unknown websites",
          "From official app stores",
          "From email attachments",
          "From random USB drives"
        ],
        correctAnswer: 1,
        explanation: "Official app stores like Microsoft Store are the safest as they verify software before listing."
      },
      {
        id: 2,
        question: "Why should you update software regularly?",
        options: [
          "To use more storage",
          "To get security fixes and new features",
          "To slow down the computer",
          "To remove features"
        ],
        correctAnswer: 1,
        explanation: "Software updates provide security patches, bug fixes, and new features to keep your system safe and functional."
      },
      {
        id: 3,
        question: "What should you do with unused software?",
        options: [
          "Keep it forever",
          "Uninstall it to free space",
          "Hide it",
          "Ignore it"
        ],
        correctAnswer: 1,
        explanation: "Uninstalling unused software frees up disk space and can improve system performance."
      }
    ]
  }
];

// Module 5: Operating Systems (OS)
export const module5Lessons: Lesson[] = [
  {
    id: 1,
    title: "Definition & Role of OS",
    description: "Learn what an operating system is and its role in computer operations",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is an Operating System?',
          data: {
            text: "An operating system (OS) is software that manages computer hardware and software resources.\n\nIt acts as an interface between users and the computer hardware, making it easy to use.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Key Roles of OS',
          data: {
            cards: [
              {
                title: "🖥️ Hardware Manager",
                description: "Controls all hardware components.\n\nManages CPU, memory, storage, and devices. Allocates resources efficiently.",
                image: "os-hardware-manager.jpg"
              },
              {
                title: "👤 User Interface",
                description: "Provides way to interact with computer.\n\nDesktop, windows, menus, and commands. Makes computers user-friendly.",
                image: "os-user-interface.jpg"
              },
              {
                title: "📁 File Manager",
                description: "Organizes and manages files.\n\nCreates folders, saves files, finds documents. Keeps data organized.",
                image: "os-file-manager.jpg"
              },
              {
                title: "🔒 Security Manager",
                description: "Protects system and data.\n\nUser accounts, passwords, permissions. Prevents unauthorized access.",
                image: "os-security.jpg"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Understanding Operating Systems',
          data: {
            description: "Watch how operating systems manage computer resources."
          }
        },
        {
          type: 'text',
          title: 'Why OS is Important',
          data: {
            text: "Without an OS, computers cannot run applications.\n\nThe OS provides the foundation for all software to work. It's essential for computer operation."
          }
        },
        {
          type: 'comparison',
          title: 'With vs Without OS',
          data: {
            title: "Operating System Impact",
            items: [
              {
                aspect: "User Interface",
                withOS: "Easy to use",
                withoutOS: "No interface"
              },
              {
                aspect: "Running Programs",
                withOS: "Can run applications",
                withoutOS: "Cannot run programs"
              },
              {
                aspect: "File Management",
                withOS: "Organized files",
                withoutOS: "No file system"
              },
              {
                aspect: "Hardware Control",
                withOS: "Automatic management",
                withoutOS: "Manual control needed"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main role of an operating system?",
        options: [
          "To run games",
          "To manage hardware and software resources",
          "To connect to internet",
          "To store files"
        ],
        correctAnswer: 1,
        explanation: "The operating system manages all hardware components and software resources, acting as an interface between users and the computer."
      },
      {
        id: 2,
        question: "What does an OS provide to users?",
        options: [
          "Only games",
          "User interface to interact with computer",
          "Only internet access",
          "Only storage"
        ],
        correctAnswer: 1,
        explanation: "The OS provides a user interface (desktop, windows, menus) that makes it easy for users to interact with the computer."
      },
      {
        id: 3,
        question: "Can a computer work without an operating system?",
        options: [
          "Yes, easily",
          "No, OS is essential",
          "Only for games",
          "Only for internet"
        ],
        correctAnswer: 1,
        explanation: "An operating system is essential - without it, computers cannot run applications or provide a user interface."
      }
    ]
  },
  {
    id: 2,
    title: "Functions of OS",
    description: "Learn about process management, memory management, file management, and more",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'OS Functions Overview',
          data: {
            text: "Operating systems perform many important functions.\n\nThey manage processes, memory, files, devices, and security to keep computers running smoothly.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Main OS Functions',
          data: {
            cards: [
              {
                title: "⚙️ Process Management",
                description: "Controls running programs.\n\nStarts, stops, and schedules processes. Manages CPU time for each program.",
                image: "os-process-management.jpg"
              },
              {
                title: "💾 Memory Management",
                description: "Manages RAM usage.\n\nAllocates memory to programs. Frees memory when programs close.",
                image: "os-memory-management.jpg"
              },
              {
                title: "📂 File Management",
                description: "Organizes files and folders.\n\nCreates, deletes, copies files. Manages storage space.",
                image: "os-file-management.jpg"
              },
              {
                title: "🖱️ Device Management",
                description: "Controls hardware devices.\n\nManages keyboard, mouse, printer, speakers. Uses device drivers.",
                image: "os-device-management.jpg"
              },
              {
                title: "🔐 Security Management",
                description: "Protects system and data.\n\nUser authentication, file permissions, firewall. Prevents unauthorized access.",
                image: "os-security-management.jpg"
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'How OS Manages Resources',
          data: {
            steps: [
              {
                id: "request",
                label: "Program Request",
                description: "Application needs resources"
              },
              {
                id: "check",
                label: "OS Checks",
                description: "OS verifies availability"
              },
              {
                id: "allocate",
                label: "Allocate Resources",
                description: "OS assigns CPU, memory, etc"
              },
              {
                id: "monitor",
                label: "Monitor Usage",
                description: "OS tracks resource usage"
              },
              {
                id: "release",
                label: "Release Resources",
                description: "OS frees resources when done"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'OS Functions Comparison',
          data: {
            title: "Function Importance",
            items: [
              {
                function: "Process Management",
                priority: "Critical",
                impact: "System performance"
              },
              {
                function: "Memory Management",
                priority: "Critical",
                impact: "Program stability"
              },
              {
                function: "File Management",
                priority: "High",
                impact: "Data organization"
              },
              {
                function: "Device Management",
                priority: "High",
                impact: "Hardware access"
              },
              {
                function: "Security Management",
                priority: "Critical",
                impact: "System protection"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "OS manages processes, memory, files, devices, and security.\n\nAll functions work together to keep the computer running efficiently and safely."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does process management do?",
        options: [
          "Manages files only",
          "Controls running programs and CPU allocation",
          "Manages internet only",
          "Manages storage only"
        ],
        correctAnswer: 1,
        explanation: "Process management controls running programs, starts and stops processes, and allocates CPU time to each program."
      },
      {
        id: 2,
        question: "Which OS function manages RAM?",
        options: [
          "File Management",
          "Memory Management",
          "Device Management",
          "Security Management"
        ],
        correctAnswer: 1,
        explanation: "Memory management allocates RAM to programs and frees memory when programs close."
      },
      {
        id: 3,
        question: "What does device management control?",
        options: [
          "Only keyboard",
          "Hardware devices like keyboard, mouse, printer",
          "Only software",
          "Only files"
        ],
        correctAnswer: 1,
        explanation: "Device management controls all hardware devices including keyboard, mouse, printer, and speakers using device drivers."
      }
    ]
  },
  {
    id: 3,
    title: "Types of Operating Systems",
    description: "Learn about single-user, multi-user, real-time, distributed, and embedded OS",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'OS Types Overview',
          data: {
            text: "Different types of operating systems serve different needs.\n\nSome are for single users, others for multiple users. Some are for real-time tasks.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Operating System Types',
          data: {
            cards: [
              {
                title: "👤 Single-User OS",
                description: "One user at a time.\n\nWindows, macOS for personal computers. Simple and user-friendly.",
                image: "os-single-user.jpg"
              },
              {
                title: "👥 Multi-User OS",
                description: "Multiple users simultaneously.\n\nLinux servers, mainframes. Handles many users efficiently.",
                image: "os-multi-user.jpg"
              },
              {
                title: "⚡ Real-Time OS",
                description: "Immediate response required.\n\nUsed in robots, medical devices. Must respond instantly.",
                image: "os-real-time.jpg"
              },
              {
                title: "🌐 Distributed OS",
                description: "Manages multiple computers.\n\nNetworks of computers. Shares resources across systems.",
                image: "os-distributed.jpg"
              },
              {
                title: "📱 Embedded OS",
                description: "Built into devices.\n\nSmartphones, ATMs, cars. Specialized for specific devices.",
                image: "os-embedded.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'OS Types Comparison',
          data: {
            title: "Operating System Types",
            items: [
              {
                type: "Single-User",
                users: "1",
                complexity: "Simple",
                examples: "Windows, macOS"
              },
              {
                type: "Multi-User",
                users: "Many",
                complexity: "Complex",
                examples: "Linux Server"
              },
              {
                type: "Real-Time",
                users: "1-Many",
                complexity: "Very Complex",
                examples: "Medical devices"
              },
              {
                type: "Distributed",
                users: "Many",
                complexity: "Very Complex",
                examples: "Network systems"
              },
              {
                type: "Embedded",
                users: "1",
                complexity: "Simple",
                examples: "Android, iOS"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Types of Operating Systems',
          data: {
            description: "Explore different types of operating systems and their uses."
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "OS types include single-user, multi-user, real-time, distributed, and embedded.\n\nEach type is designed for specific needs and use cases."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which OS type allows only one user at a time?",
        options: [
          "Multi-User OS",
          "Single-User OS",
          "Distributed OS",
          "Real-Time OS"
        ],
        correctAnswer: 1,
        explanation: "Single-User OS allows only one user at a time, like Windows and macOS on personal computers."
      },
      {
        id: 2,
        question: "What type of OS is used in medical devices?",
        options: [
          "Single-User OS",
          "Real-Time OS",
          "Multi-User OS",
          "Embedded OS"
        ],
        correctAnswer: 1,
        explanation: "Real-Time OS is used in medical devices and robots where immediate response is critical."
      },
      {
        id: 3,
        question: "Which OS type manages multiple computers in a network?",
        options: [
          "Single-User OS",
          "Distributed OS",
          "Embedded OS",
          "Real-Time OS"
        ],
        correctAnswer: 1,
        explanation: "Distributed OS manages multiple computers in a network and shares resources across systems."
      }
    ]
  },
  {
    id: 4,
    title: "Examples & Comparison",
    description: "Compare Windows, macOS, Linux, Android, and iOS",
    duration: "16 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Popular Operating Systems',
          data: {
            text: "There are many operating systems used today.\n\nWindows, macOS, Linux, Android, and iOS are the most common. Each has different features.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Major Operating Systems',
          data: {
            cards: [
              {
                title: "🪟 Windows",
                description: "Most popular desktop OS.\n\nUsed on PCs and laptops. User-friendly interface. Many software options.",
                image: "os-windows.jpg"
              },
              {
                title: "🍎 macOS",
                description: "Apple's desktop OS.\n\nUsed on Mac computers. Smooth design. Good for creative work.",
                image: "os-macos.jpg"
              },
              {
                title: "🐧 Linux",
                description: "Open-source OS.\n\nFree and customizable. Used on servers and some desktops. Very secure.",
                image: "os-linux.jpg"
              },
              {
                title: "🤖 Android",
                description: "Google's mobile OS.\n\nMost popular smartphone OS. Used on many devices. Customizable.",
                image: "os-android.jpg"
              },
              {
                title: "📱 iOS",
                description: "Apple's mobile OS.\n\nUsed on iPhones and iPads. Simple and secure. Smooth performance.",
                image: "os-ios.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'OS Comparison',
          data: {
            title: "Operating System Features",
            items: [
              {
                os: "Windows",
                platform: "Desktop",
                cost: "Paid",
                popularity: "Very High",
                security: "Good"
              },
              {
                os: "macOS",
                platform: "Desktop",
                cost: "Included with Mac",
                popularity: "High",
                security: "Very Good"
              },
              {
                os: "Linux",
                platform: "Desktop/Server",
                cost: "Free",
                popularity: "Medium",
                security: "Excellent"
              },
              {
                os: "Android",
                platform: "Mobile",
                cost: "Free",
                popularity: "Very High",
                security: "Good"
              },
              {
                os: "iOS",
                platform: "Mobile",
                cost: "Included with device",
                popularity: "High",
                security: "Excellent"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Choosing an OS',
          data: {
            text: "Choose an OS based on your needs.\n\nDesktop work: Windows or macOS. Mobile: Android or iOS. Servers: Linux."
          }
        },
        {
          type: 'video',
          title: 'Video: Operating System Comparison',
          data: {
            description: "Compare different operating systems and their features."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which operating system is most popular on desktop computers?",
        options: [
          "macOS",
          "Windows",
          "Linux",
          "Android"
        ],
        correctAnswer: 1,
        explanation: "Windows is the most popular desktop operating system, used on most PCs and laptops worldwide."
      },
      {
        id: 2,
        question: "Which OS is free and open-source?",
        options: [
          "Windows",
          "macOS",
          "Linux",
          "iOS"
        ],
        correctAnswer: 2,
        explanation: "Linux is free and open-source, meaning anyone can use, modify, and distribute it."
      },
      {
        id: 3,
        question: "Which mobile OS is used on iPhones?",
        options: [
          "Android",
          "iOS",
          "Windows Mobile",
          "Linux"
        ],
        correctAnswer: 1,
        explanation: "iOS is Apple's mobile operating system used exclusively on iPhones and iPads."
      }
    ]
  },
  {
    id: 5,
    title: "Booting Process",
    description: "Learn about cold boot, warm boot, BIOS/UEFI, POST, and OS loading",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is Booting?',
          data: {
            text: "Booting is the process of starting a computer.\n\nIt loads the operating system from storage into memory. Happens when you turn on the computer.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Boot Types',
          data: {
            cards: [
              {
                title: "❄️ Cold Boot",
                description: "Starting from power off.\n\nComputer was completely off. Takes longer. Full system check.",
                image: "boot-cold.jpg"
              },
              {
                title: "🔥 Warm Boot",
                description: "Restarting while on.\n\nComputer was running. Faster. Skips some checks.",
                image: "boot-warm.jpg"
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Booting Process Steps',
          data: {
            steps: [
              {
                id: "power",
                label: "Power On",
                description: "User presses power button"
              },
              {
                id: "bios",
                label: "BIOS/UEFI Starts",
                description: "Firmware initializes hardware"
              },
              {
                id: "post",
                label: "POST",
                description: "Power-On Self-Test checks components"
              },
              {
                id: "bootloader",
                label: "Boot Loader",
                description: "Finds and loads OS"
              },
              {
                id: "os",
                label: "OS Loads",
                description: "Operating system starts"
              },
              {
                id: "ready",
                label: "System Ready",
                description: "Computer ready to use"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'POST Process',
          data: {
            text: "POST checks hardware components.\n\nTests RAM, CPU, storage, and other devices. Shows errors if found."
          }
        },
        {
          type: 'comparison',
          title: 'Cold Boot vs Warm Boot',
          data: {
            title: "Boot Type Comparison",
            items: [
              {
                type: "Cold Boot",
                speed: "Slower",
                check: "Full system check",
                use: "After power off"
              },
              {
                type: "Warm Boot",
                speed: "Faster",
                check: "Partial check",
                use: "Restart while on"
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Computer Booting Process',
          data: {
            description: "Watch how a computer boots up and loads the operating system."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the process of starting a computer called?",
        options: [
          "Shutting down",
          "Booting",
          "Sleeping",
          "Hibernating"
        ],
        correctAnswer: 1,
        explanation: "Booting is the process of starting a computer and loading the operating system into memory."
      },
      {
        id: 2,
        question: "What does POST stand for?",
        options: [
          "Power On System Test",
          "Power-On Self-Test",
          "Post Operating System Test",
          "Power Off System Test"
        ],
        correctAnswer: 1,
        explanation: "POST stands for Power-On Self-Test, which checks hardware components during boot."
      },
      {
        id: 3,
        question: "Which boot type is faster?",
        options: [
          "Cold Boot",
          "Warm Boot",
          "Both are same",
          "Neither"
        ],
        correctAnswer: 1,
        explanation: "Warm boot (restart) is faster than cold boot because the computer was already running and skips some checks."
      }
    ]
  },
  {
    id: 6,
    title: "User Interface",
    description: "Learn about GUI vs CLI, desktop environment, and command prompt basics",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What is User Interface?',
          data: {
            text: "User interface is how you interact with the computer.\n\nTwo main types: GUI (Graphical) and CLI (Command Line). GUI is visual, CLI uses text commands.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Interface Types',
          data: {
            cards: [
              {
                title: "🖼️ GUI (Graphical)",
                description: "Visual interface with icons.\n\nWindows, menus, buttons, mouse clicks. Easy to use. Most common.",
                image: "ui-gui.jpg"
              },
              {
                title: "⌨️ CLI (Command Line)",
                description: "Text-based interface.\n\nType commands, see text output. Powerful but requires learning commands.",
                image: "ui-cli.jpg"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'GUI vs CLI',
          data: {
            title: "Interface Comparison",
            items: [
              {
                aspect: "Ease of Use",
                gui: "Easy",
                cli: "Requires learning"
              },
              {
                aspect: "Speed",
                gui: "Slower for experts",
                cli: "Faster for experts"
              },
              {
                aspect: "Visual",
                gui: "Visual",
                cli: "Text only"
              },
              {
                aspect: "Learning Curve",
                gui: "Low",
                cli: "High"
              },
              {
                aspect: "Use Cases",
                gui: "General users",
                cli: "Advanced users"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Desktop Environment',
          data: {
            text: "Desktop is the main screen you see.\n\nIcons, taskbar, start menu. Easy access to programs and files."
          }
        },
        {
          type: 'text',
          title: 'Command Prompt Basics',
          data: {
            text: "Command prompt lets you type commands.\n\nUseful for advanced tasks. Examples: dir (list files), cd (change directory), mkdir (create folder)."
          }
        },
        {
          type: 'video',
          title: 'Video: GUI vs CLI',
          data: {
            description: "Learn the differences between graphical and command line interfaces."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does GUI stand for?",
        options: [
          "Graphical User Interface",
          "General User Interface",
          "Global User Interface",
          "Gaming User Interface"
        ],
        correctAnswer: 0,
        explanation: "GUI stands for Graphical User Interface, which uses visual elements like windows, icons, and menus."
      },
      {
        id: 2,
        question: "Which interface is easier for beginners?",
        options: [
          "CLI",
          "GUI",
          "Both are same",
          "Neither"
        ],
        correctAnswer: 1,
        explanation: "GUI is easier for beginners because it uses visual elements like icons and menus instead of text commands."
      },
      {
        id: 3,
        question: "What is the main screen with icons called?",
        options: [
          "Command Prompt",
          "Desktop",
          "Taskbar",
          "Menu"
        ],
        correctAnswer: 1,
        explanation: "The desktop is the main screen you see when you start the computer, containing icons, taskbar, and start menu."
      }
    ]
  },
  {
    id: 7,
    title: "System Tools & Utilities",
    description: "Learn about File Explorer, Task Manager, Control Panel, Device Manager, and Disk Management",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'System Tools Overview',
          data: {
            text: "Operating systems include built-in tools.\n\nThese tools help manage files, monitor performance, configure settings, and maintain the system.",
            audio: true
          }
        },
        {
          type: 'card',
          title: 'Important System Tools',
          data: {
            cards: [
              {
                title: "📁 File Explorer",
                description: "Browse and manage files.\n\nView folders, copy, move, delete files. Organize your data easily.",
                image: "tool-file-explorer.jpg"
              },
              {
                title: "⚙️ Task Manager",
                description: "Monitor running programs.\n\nSee CPU, RAM usage. End unresponsive programs. Check system performance.",
                image: "tool-task-manager.jpg"
              },
              {
                title: "🎛️ Control Panel",
                description: "System settings and configuration.\n\nChange display, sound, network settings. Install/uninstall programs.",
                image: "tool-control-panel.jpg"
              },
              {
                title: "🔧 Device Manager",
                description: "Manage hardware devices.\n\nView installed devices. Update drivers. Troubleshoot hardware problems.",
                image: "tool-device-manager.jpg"
              },
              {
                title: "💾 Disk Management",
                description: "Manage storage drives.\n\nView partitions, format drives, assign drive letters. Organize storage.",
                image: "tool-disk-management.jpg"
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Using System Tools',
          data: {
            steps: [
              {
                id: "identify",
                label: "Identify Need",
                description: "What do you need to do?"
              },
              {
                id: "choose",
                label: "Choose Tool",
                description: "Select appropriate system tool"
              },
              {
                id: "open",
                label: "Open Tool",
                description: "Launch the system tool"
              },
              {
                id: "perform",
                label: "Perform Task",
                description: "Complete your task"
              },
              {
                id: "close",
                label: "Close Tool",
                description: "Exit when done"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'System Tools Comparison',
          data: {
            title: "Tool Functions",
            items: [
              {
                tool: "File Explorer",
                function: "File management",
                frequency: "Daily"
              },
              {
                tool: "Task Manager",
                function: "Performance monitoring",
                frequency: "As needed"
              },
              {
                tool: "Control Panel",
                function: "System settings",
                frequency: "Occasional"
              },
              {
                tool: "Device Manager",
                function: "Hardware management",
                frequency: "Rare"
              },
              {
                tool: "Disk Management",
                function: "Storage management",
                frequency: "Rare"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "System tools help manage files, monitor performance, configure settings, and maintain hardware.\n\nLearn to use them for better computer management."
          }
        },
        {
          type: 'video',
          title: 'Video: System Tools Guide',
          data: {
            description: "Learn how to use important system tools and utilities."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Which tool is used to browse and manage files?",
        options: [
          "Task Manager",
          "File Explorer",
          "Device Manager",
          "Control Panel"
        ],
        correctAnswer: 1,
        explanation: "File Explorer is used to browse folders, view files, and perform file operations like copy, move, and delete."
      },
      {
        id: 2,
        question: "What does Task Manager show?",
        options: [
          "Only files",
          "Running programs and system performance",
          "Only settings",
          "Only hardware"
        ],
        correctAnswer: 1,
        explanation: "Task Manager shows running programs, CPU and RAM usage, and allows you to end unresponsive programs."
      },
      {
        id: 3,
        question: "Which tool manages hardware devices and drivers?",
        options: [
          "File Explorer",
          "Task Manager",
          "Device Manager",
          "Disk Management"
        ],
        correctAnswer: 2,
        explanation: "Device Manager shows installed hardware devices and allows you to update drivers and troubleshoot hardware problems."
      }
    ]
  }
];

// Module 7: Networking Basics
export const module7Lessons: Lesson[] = [
  {
    id: 1,
    title: "What is Networking?",
    description: "Learn the concept of networking, its importance, and how data is transferred between computers",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding Networking',
          data: {
            text: "Networking connects computers to share information and resources.\n\nIt allows devices to communicate and work together efficiently.",
            audio: true,
            audioTitle: "Networking Introduction"
          }
        },
        {
          type: 'card',
          title: 'Networking Concept',
          data: {
            cards: [
              {
                title: "🌐 What is a Network?",
                description: "A network connects multiple computers and devices.\n\nEnables sharing of files, printers, and internet access. Makes collaboration easier.",
                image: "network-concept.jpg",
                details: []
              },
              {
                title: "💡 Why Networks Matter",
                description: "Networks enable communication and resource sharing.\n\nSaves time and money. Allows remote access to information.",
                image: "network-importance.jpg",
                details: []
              },
              {
                title: "📡 Data Transfer Basics",
                description: "Data travels through cables or wireless signals.\n\nInformation is broken into packets. Sent from source to destination.",
                image: "data-transfer.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Networking Basics',
          data: {
            description: "Learn how computers connect and share data through networks."
          }
        },
        {
          type: 'flowchart',
          title: 'Data Transfer Process',
          data: {
            steps: [
              {
                id: "source",
                label: "Source Computer",
                description: "Sends data"
              },
              {
                id: "network",
                label: "Network",
                description: "Transfers data"
              },
              {
                id: "destination",
                label: "Destination Computer",
                description: "Receives data"
              },
              {
                id: "confirm",
                label: "Confirmation",
                description: "Data received successfully"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Networks connect computers to share resources and information.\n\nData transfer enables communication between devices."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is a computer network?",
        options: [
          "A single computer",
          "Connected computers and devices that share resources",
          "A type of software",
          "A storage device"
        ],
        correctAnswer: 1,
        explanation: "A computer network is a collection of connected computers and devices that can share resources and communicate with each other."
      },
      {
        id: 2,
        question: "Why are networks important?",
        options: [
          "They make computers faster",
          "They enable communication and resource sharing",
          "They increase storage",
          "They replace software"
        ],
        correctAnswer: 1,
        explanation: "Networks are important because they enable devices to communicate, share files and resources, and access the internet together."
      },
      {
        id: 3,
        question: "How does data travel in a network?",
        options: [
          "Through cables or wireless signals",
          "Only through cables",
          "Only wirelessly",
          "Through sound waves"
        ],
        correctAnswer: 0,
        explanation: "Data travels through networks using cables (wired) or wireless signals (Wi-Fi), depending on the network type."
      }
    ]
  },
  {
    id: 2,
    title: "Types of Networks",
    description: "Learn about LAN, MAN, WAN, Internet, and Intranet",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Network Types Overview',
          data: {
            text: "Different networks serve different purposes and cover different areas.\n\nUnderstanding network types helps you choose the right connection.",
            audio: true,
            audioTitle: "Network Types Introduction"
          }
        },
        {
          type: 'card',
          title: 'Local Area Network (LAN)',
          data: {
            cards: [
              {
                title: "🏠 LAN Basics",
                description: "Connects devices in a small area.\n\nHome, office, or school network. Covers limited distance.",
                image: "lan-network.jpg",
                details: []
              },
              {
                title: "🔌 LAN Uses",
                description: "Share files, printers, and internet.\n\nFast and reliable. Easy to set up.",
                image: "lan-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Metropolitan Area Network (MAN)',
          data: {
            cards: [
              {
                title: "🏙️ MAN Basics",
                description: "Covers a city or large campus.\n\nLarger than LAN, smaller than WAN. Connects multiple LANs.",
                image: "man-network.jpg",
                details: []
              },
              {
                title: "🌆 MAN Uses",
                description: "City-wide networks, university campuses.\n\nConnects organizations in same area.",
                image: "man-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Wide Area Network (WAN)',
          data: {
            cards: [
              {
                title: "🌍 WAN Basics",
                description: "Covers large geographic areas.\n\nConnects cities, countries, continents. Uses internet infrastructure.",
                image: "wan-network.jpg",
                details: []
              },
              {
                title: "🌐 WAN Uses",
                description: "Global communication, multinational companies.\n\nInternet is the largest WAN.",
                image: "wan-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Internet and Intranet',
          data: {
            cards: [
              {
                title: "🌐 Internet",
                description: "Global network of networks.\n\nPublic access. Connects billions of devices worldwide.",
                image: "internet-network.jpg",
                details: []
              },
              {
                title: "🔒 Intranet",
                description: "Private network within an organization.\n\nRestricted access. Only authorized users.",
                image: "intranet-network.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Network Types Explained',
          data: {
            description: "See the differences between LAN, MAN, WAN, Internet, and Intranet."
          }
        },
        {
          type: 'comparison',
          title: 'Network Types Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: "LAN",
                coverage: "Small area",
                speed: "Fast",
                use: "Home, office"
              },
              {
                name: "MAN",
                coverage: "City",
                speed: "Medium",
                use: "Campus, city"
              },
              {
                name: "WAN",
                coverage: "Large area",
                speed: "Variable",
                use: "Global, internet"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "LAN covers small areas, MAN covers cities, WAN covers large regions.\n\nInternet is public, Intranet is private."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does LAN stand for?",
        options: [
          "Large Area Network",
          "Local Area Network",
          "Long Area Network",
          "Limited Area Network"
        ],
        correctAnswer: 1,
        explanation: "LAN stands for Local Area Network, which connects devices in a small area like a home or office."
      },
      {
        id: 2,
        question: "What is the main difference between Internet and Intranet?",
        options: [
          "Internet is faster",
          "Internet is public, Intranet is private",
          "Intranet is larger",
          "They are the same"
        ],
        correctAnswer: 1,
        explanation: "The Internet is a public global network accessible to everyone, while an Intranet is a private network restricted to an organization's members."
      },
      {
        id: 3,
        question: "Which network type covers the largest area?",
        options: [
          "LAN",
          "MAN",
          "WAN",
          "All same"
        ],
        correctAnswer: 2,
        explanation: "WAN (Wide Area Network) covers the largest geographic area, connecting cities, countries, and continents."
      }
    ]
  },
  {
    id: 3,
    title: "Network Components",
    description: "Learn about routers, switches, Ethernet cables, and Wi-Fi adapters",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Network Hardware',
          data: {
            text: "Network components connect devices and manage data flow.\n\nUnderstanding these helps you set up and troubleshoot networks.",
            audio: true,
            audioTitle: "Network Components Introduction"
          }
        },
        {
          type: 'card',
          title: 'Router',
          data: {
            cards: [
              {
                title: "📡 Router Function",
                description: "Directs data between networks.\n\nConnects your home network to internet. Routes data to correct destination.",
                image: "router-device.jpg",
                details: []
              },
              {
                title: "🔌 Router Features",
                description: "Provides Wi-Fi and Ethernet ports.\n\nCreates wireless network. Connects multiple devices.",
                image: "router-features.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Switch',
          data: {
            cards: [
              {
                title: "🔄 Switch Function",
                description: "Connects devices within a network.\n\nSends data to specific device. More efficient than hub.",
                image: "switch-device.jpg",
                details: []
              },
              {
                title: "📊 Switch Uses",
                description: "Used in offices and large networks.\n\nManages multiple connections. Improves network performance.",
                image: "switch-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Ethernet Cables',
          data: {
            cards: [
              {
                title: "🔌 Ethernet Cable Types",
                description: "Wired connection cables.\n\nCat5, Cat6, Cat7. Different speeds and capabilities.",
                image: "ethernet-cables.jpg",
                details: []
              },
              {
                title: "⚡ Ethernet Benefits",
                description: "Faster and more stable than Wi-Fi.\n\nReliable connection. Less interference.",
                image: "ethernet-benefits.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Wi-Fi Adapters',
          data: {
            cards: [
              {
                title: "📶 Wi-Fi Adapter Function",
                description: "Enables wireless connection.\n\nBuilt into devices or external USB adapter. Receives Wi-Fi signals.",
                image: "wifi-adapter.jpg",
                details: []
              },
              {
                title: "🔄 Wi-Fi Standards",
                description: "802.11n, 802.11ac, Wi-Fi 6.\n\nDifferent speeds and ranges. Newer standards are faster.",
                image: "wifi-standards.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Network Components',
          data: {
            description: "See how routers, switches, cables, and adapters work together."
          }
        },
        {
          type: 'comparison',
          title: 'Connection Types',
          data: {
            type: 'table',
            items: [
              {
                name: "Ethernet",
                speed: "Fast",
                stability: "High",
                mobility: "Limited"
              },
              {
                name: "Wi-Fi",
                speed: "Variable",
                stability: "Medium",
                mobility: "High"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Router connects networks, Switch connects devices.\n\nEthernet is faster and more stable, Wi-Fi offers mobility."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main function of a router?",
        options: [
          "Store files",
          "Direct data between networks",
          "Increase internet speed",
          "Delete viruses"
        ],
        correctAnswer: 1,
        explanation: "A router's main function is to direct data between different networks, connecting your local network to the internet."
      },
      {
        id: 2,
        question: "What is the advantage of Ethernet cables over Wi-Fi?",
        options: [
          "More expensive",
          "Faster and more stable connection",
          "Wireless",
          "Smaller size"
        ],
        correctAnswer: 1,
        explanation: "Ethernet cables provide a faster and more stable connection than Wi-Fi, with less interference and more reliability."
      },
      {
        id: 3,
        question: "What does a Wi-Fi adapter do?",
        options: [
          "Creates internet",
          "Enables wireless connection to networks",
          "Blocks viruses",
          "Stores data"
        ],
        correctAnswer: 1,
        explanation: "A Wi-Fi adapter enables devices to connect wirelessly to Wi-Fi networks, receiving and transmitting wireless signals."
      }
    ]
  },
  {
    id: 4,
    title: "IP Addressing & DNS",
    description: "Learn about IP addresses, public vs private IP, and DNS domain names",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'IP Addresses and DNS',
          data: {
            text: "IP addresses identify devices on networks.\n\nDNS translates domain names to IP addresses for easy access.",
            audio: true,
            audioTitle: "IP and DNS Introduction"
          }
        },
        {
          type: 'card',
          title: 'What is an IP Address?',
          data: {
            cards: [
              {
                title: "🔢 IP Address Basics",
                description: "Unique number that identifies a device on network.\n\nLike a home address for your computer. Format: 192.168.1.1",
                image: "ip-address.jpg",
                details: []
              },
              {
                title: "📋 IP Address Types",
                description: "IPv4 (32-bit) and IPv6 (128-bit).\n\nIPv4 most common. IPv6 for future expansion.",
                image: "ip-types.jpg",
                details: []
              },
              {
                title: "🌐 IP Address Purpose",
                description: "Enables devices to find and communicate.\n\nRouters use IP to send data to correct device.",
                image: "ip-purpose.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Public vs Private IP',
          data: {
            cards: [
              {
                title: "🌍 Public IP Address",
                description: "Visible on the internet.\n\nAssigned by ISP. Unique worldwide. Identifies your network.",
                image: "public-ip.jpg",
                details: []
              },
              {
                title: "🏠 Private IP Address",
                description: "Used within local network.\n\nNot visible on internet. Multiple networks can use same private IPs.",
                image: "private-ip.jpg",
                details: []
              },
              {
                title: "🔄 How They Work Together",
                description: "Router has public IP, devices have private IPs.\n\nRouter translates between public and private.",
                image: "ip-translation.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'DNS and Domain Names',
          data: {
            cards: [
              {
                title: "🔤 What is DNS?",
                description: "Domain Name System translates names to IP addresses.\n\nConverts google.com to 142.250.191.14. Makes internet easier to use.",
                image: "dns-system.jpg",
                details: []
              },
              {
                title: "🌐 Domain Names",
                description: "Human-readable website addresses.\n\nExample: www.example.com. Easier than remembering IP numbers.",
                image: "domain-names.jpg",
                details: []
              },
              {
                title: "⚡ DNS Process",
                description: "Type domain name → DNS finds IP → Connects to website.\n\nHappens automatically. Very fast.",
                image: "dns-process.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: IP Addresses and DNS',
          data: {
            description: "Learn how IP addresses and DNS work together to connect you to websites."
          }
        },
        {
          type: 'flowchart',
          title: 'DNS Resolution Process',
          data: {
            steps: [
              {
                id: "type",
                label: "Type Domain Name",
                description: "User enters www.example.com"
              },
              {
                id: "dns",
                label: "DNS Lookup",
                description: "DNS finds IP address"
              },
              {
                id: "connect",
                label: "Connect to IP",
                description: "Browser connects to server"
              },
              {
                id: "load",
                label: "Load Website",
                description: "Website appears in browser"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'IP Address Types',
          data: {
            type: 'table',
            items: [
              {
                name: "Public IP",
                visibility: "Internet",
                uniqueness: "Unique worldwide",
                use: "Internet access"
              },
              {
                name: "Private IP",
                visibility: "Local network",
                uniqueness: "Can be reused",
                use: "Internal network"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "IP addresses identify devices. Public IP is for internet, Private IP is for local network.\n\nDNS translates domain names to IP addresses."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is an IP address?",
        options: [
          "A website name",
          "A unique number that identifies a device on a network",
          "A type of cable",
          "A router brand"
        ],
        correctAnswer: 1,
        explanation: "An IP address is a unique numerical identifier assigned to each device on a network, allowing devices to find and communicate with each other."
      },
      {
        id: 2,
        question: "What is the difference between public and private IP addresses?",
        options: [
          "Public is faster",
          "Public is visible on internet, private is for local network",
          "Private is more secure",
          "They are the same"
        ],
        correctAnswer: 1,
        explanation: "A public IP address is visible on the internet and assigned by your ISP, while a private IP address is used within your local network and not visible on the internet."
      },
      {
        id: 3,
        question: "What does DNS do?",
        options: [
          "Blocks viruses",
          "Translates domain names to IP addresses",
          "Increases internet speed",
          "Stores files"
        ],
        correctAnswer: 1,
        explanation: "DNS (Domain Name System) translates human-readable domain names like www.example.com into IP addresses that computers use to connect to websites."
      }
    ]
  },
  {
    id: 5,
    title: "Internet Connectivity",
    description: "Learn about mobile data, Wi-Fi, broadband, tethering, and hotspot",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Connecting to Internet',
          data: {
            text: "Multiple ways exist to connect to the internet.\n\nChoose the method that best fits your needs and location.",
            audio: true,
            audioTitle: "Internet Connectivity Introduction"
          }
        },
        {
          type: 'card',
          title: 'Mobile Data',
          data: {
            cards: [
              {
                title: "📱 Mobile Data Basics",
                description: "Internet through cellular network.\n\nUses phone's data plan. Works anywhere with signal.",
                image: "mobile-data.jpg",
                details: []
              },
              {
                title: "📊 Data Plans",
                description: "Limited or unlimited data options.\n\nMonitor usage to avoid overage charges. Check data limits.",
                image: "data-plans.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Wi-Fi',
          data: {
            cards: [
              {
                title: "📶 Wi-Fi Connection",
                description: "Wireless internet from router.\n\nFree at home, cafes, libraries. Requires password for secure networks.",
                image: "wifi-connection.jpg",
                details: []
              },
              {
                title: "🔒 Wi-Fi Security",
                description: "Use password-protected networks.\n\nAvoid public Wi-Fi for sensitive tasks. Use WPA2 or WPA3 encryption.",
                image: "wifi-security.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Broadband',
          data: {
            cards: [
              {
                title: "⚡ Broadband Types",
                description: "DSL, Cable, Fiber optic.\n\nHigh-speed internet. Always-on connection.",
                image: "broadband-types.jpg",
                details: []
              },
              {
                title: "🚀 Broadband Speed",
                description: "Faster than dial-up.\n\nSupports streaming, gaming, video calls. Reliable connection.",
                image: "broadband-speed.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Tethering and Hotspot',
          data: {
            cards: [
              {
                title: "📱 Mobile Hotspot",
                description: "Share phone's internet with other devices.\n\nCreates Wi-Fi network from mobile data. Uses phone's data plan.",
                image: "mobile-hotspot.jpg",
                details: []
              },
              {
                title: "🔗 USB Tethering",
                description: "Connect phone to computer via USB.\n\nShares internet through cable. More stable than Wi-Fi hotspot.",
                image: "usb-tethering.jpg",
                details: []
              },
              {
                title: "⚡ When to Use",
                description: "When Wi-Fi unavailable or traveling.\n\nEmergency internet access. Temporary solution.",
                image: "tethering-uses.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Internet Connectivity',
          data: {
            description: "Learn about different ways to connect to the internet."
          }
        },
        {
          type: 'comparison',
          title: 'Connection Methods',
          data: {
            type: 'table',
            items: [
              {
                name: "Mobile Data",
                speed: "Variable",
                mobility: "High",
                cost: "Data plan"
              },
              {
                name: "Wi-Fi",
                speed: "Fast",
                mobility: "Limited",
                cost: "Free/Subscription"
              },
              {
                name: "Broadband",
                speed: "Very Fast",
                mobility: "None",
                cost: "Monthly fee"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Mobile data works anywhere. Wi-Fi is fast and free at home.\n\nBroadband offers fastest speeds. Hotspot shares mobile data."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is mobile data?",
        options: [
          "Internet through Wi-Fi",
          "Internet through cellular network using phone's data plan",
          "Internet through cable",
          "A type of router"
        ],
        correctAnswer: 1,
        explanation: "Mobile data is internet access through your cellular network, using your phone's data plan, and works anywhere you have a cellular signal."
      },
      {
        id: 2,
        question: "What is a mobile hotspot?",
        options: [
          "A Wi-Fi router",
          "Sharing phone's internet with other devices",
          "A type of cable",
          "A security feature"
        ],
        correctAnswer: 1,
        explanation: "A mobile hotspot allows you to share your phone's mobile data connection with other devices, creating a Wi-Fi network from your phone."
      },
      {
        id: 3,
        question: "Which connection method offers the fastest speeds?",
        options: [
          "Mobile data",
          "Wi-Fi",
          "Broadband (Fiber/Cable)",
          "All same"
        ],
        correctAnswer: 2,
        explanation: "Broadband connections, especially fiber optic, typically offer the fastest internet speeds, followed by Wi-Fi, then mobile data."
      }
    ]
  },
  {
    id: 6,
    title: "Safe Internet Use",
    description: "Learn about secure websites (HTTPS), avoiding phishing, and staying safe online",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Internet Safety',
          data: {
            text: "Staying safe online protects your personal information and devices.\n\nLearn to recognize secure websites and avoid scams.",
            audio: true,
            audioTitle: "Internet Safety Introduction"
          }
        },
        {
          type: 'card',
          title: 'Secure Websites (HTTPS)',
          data: {
            cards: [
              {
                title: "🔒 HTTPS Protocol",
                description: "Secure version of HTTP.\n\nEncrypts data between browser and website. Protects your information.",
                image: "https-secure.jpg",
                details: []
              },
              {
                title: "🔐 How to Identify",
                description: "Look for padlock icon in address bar.\n\nURL starts with https://. Green padlock means secure.",
                image: "https-identify.jpg",
                details: []
              },
              {
                title: "⚠️ HTTP Warning",
                description: "HTTP websites are not encrypted.\n\nAvoid entering passwords on HTTP sites. Data can be intercepted.",
                image: "http-warning.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Avoiding Phishing',
          data: {
            cards: [
              {
                title: "🎣 What is Phishing?",
                description: "Fake emails or websites that steal information.\n\nLooks like legitimate companies. Asks for passwords or personal data.",
                image: "phishing-scam.jpg",
                details: []
              },
              {
                title: "🚨 Phishing Signs",
                description: "Urgent language, spelling errors, suspicious links.\n\nAsks for personal information. Unusual sender address.",
                image: "phishing-signs.jpg",
                details: []
              },
              {
                title: "✅ How to Avoid",
                description: "Never click suspicious links or share passwords.\n\nVerify sender identity. Check website URLs carefully.",
                image: "avoid-phishing.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Safe Browsing Tips',
          data: {
            cards: [
              {
                title: "🔍 Check URLs",
                description: "Verify website addresses before entering information.\n\nLook for typos or unusual domains. Use bookmarks for trusted sites.",
                image: "check-urls.jpg",
                details: []
              },
              {
                title: "🛡️ Use Antivirus",
                description: "Keep antivirus software updated.\n\nScans downloads for malware. Blocks dangerous websites.",
                image: "antivirus-browsing.jpg",
                details: []
              },
              {
                title: "🔐 Strong Passwords",
                description: "Use unique passwords for each account.\n\nEnable two-factor authentication. Don't share passwords.",
                image: "strong-passwords.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Safe Internet Use',
          data: {
            description: "Learn how to identify secure websites and avoid online scams."
          }
        },
        {
          type: 'flowchart',
          title: 'Safe Browsing Process',
          data: {
            steps: [
              {
                id: "check",
                label: "Check URL",
                description: "Verify website address"
              },
              {
                id: "https",
                label: "Look for HTTPS",
                description: "Ensure padlock icon present"
              },
              {
                id: "verify",
                label: "Verify Legitimacy",
                description: "Check for suspicious signs"
              },
              {
                id: "proceed",
                label: "Proceed Safely",
                description: "Enter information only if secure"
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Website Security',
          data: {
            type: 'table',
            items: [
              {
                name: "HTTPS",
                security: "Encrypted",
                safety: "Safe",
                use: "Enter passwords"
              },
              {
                name: "HTTP",
                security: "Not encrypted",
                safety: "Unsafe",
                use: "Avoid sensitive data"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Always use HTTPS websites for secure connections.\n\nBe cautious of phishing scams. Never share passwords via email."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does HTTPS indicate?",
        options: [
          "The website is free",
          "The website has secure, encrypted connection",
          "The website is fast",
          "The website is popular"
        ],
        correctAnswer: 1,
        explanation: "HTTPS indicates that the website uses a secure, encrypted connection, protecting your data from being intercepted."
      },
      {
        id: 2,
        question: "What is phishing?",
        options: [
          "A type of virus",
          "Fake emails or websites that trick you into sharing personal information",
          "A secure website",
          "A type of internet connection"
        ],
        correctAnswer: 1,
        explanation: "Phishing is a scam where attackers create fake emails or websites that look legitimate to trick you into sharing passwords or personal information."
      },
      {
        id: 3,
        question: "What should you do if you receive a suspicious email asking for your password?",
        options: [
          "Reply with your password",
          "Click the link in the email",
          "Delete it and never share passwords via email",
          "Forward it to friends"
        ],
        correctAnswer: 2,
        explanation: "You should delete suspicious emails and never share passwords via email. Legitimate companies never ask for passwords through email."
      }
    ]
  }
];

// Module 8: Security & Digital Currency
// TODO: Assistant will create this module (5 lessons - includes Blockchain)
export const module8Lessons: Lesson[] = [
  {
    id: 1,
    title: "Cyber Threats",
    description: "Learn about viruses, worms, trojans, spyware, and ransomware",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Cyber Threats?',
          data: {
            text: "Cyber threats are malicious programs that can harm your computer and steal your data.\n\nThey spread through downloads, emails, and infected websites.",
            audio: true,
            audioTitle: "Cyber Threats Introduction"
          }
        },
        {
          type: 'card',
          title: 'Types of Cyber Threats',
          data: {
            cards: [
              {
                title: "🦠 Computer Viruses",
                description: "Malicious code that attaches to files and spreads.\n\nDamages files and slows down your computer. Requires user action to spread.",
                image: "computer-virus.jpg",
                details: []
              },
              {
                title: "🐛 Worms",
                description: "Self-replicating malware that spreads automatically.\n\nSpreads through networks without user interaction. Can consume network bandwidth.",
                image: "computer-worm.jpg",
                details: []
              },
              {
                title: "🐴 Trojans",
                description: "Malware disguised as legitimate software.\n\nTricks users into installing it. Opens backdoors for hackers.",
                image: "trojan-horse.jpg",
                details: []
              },
              {
                title: "👁️ Spyware",
                description: "Secretly monitors your computer activity.\n\nCollects personal information without permission. Tracks keystrokes and browsing habits.",
                image: "spyware-threat.jpg",
                details: []
              },
              {
                title: "🔒 Ransomware",
                description: "Encrypts your files and demands payment.\n\nLocks you out of your data. Requires payment to restore access.",
                image: "ransomware-threat.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Cyber Threats Explained',
          data: {
            description: "Watch how different cyber threats work and how to recognize them."
          }
        },
        {
          type: 'comparison',
          title: 'Threat Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: "Virus",
                spread: "Attaches to files",
                speed: "Slow",
                detection: "Easier"
              },
              {
                name: "Worm",
                spread: "Self-replicating",
                speed: "Fast",
                detection: "Medium"
              },
              {
                name: "Ransomware",
                spread: "Encrypts files",
                speed: "Fast",
                detection: "Hard"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'How Threats Spread',
          data: {
            text: "Cyber threats spread through email attachments, infected websites, and USB drives.\n\nAlways be cautious when downloading files or clicking links from unknown sources."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main difference between a virus and a worm?",
        options: [
          "Viruses are faster",
          "Worms spread automatically without user action",
          "Worms are less harmful",
          "Viruses are easier to remove"
        ],
        correctAnswer: 1,
        explanation: "Worms can spread automatically through networks without requiring user interaction, while viruses need user action to spread."
      },
      {
        id: 2,
        question: "What does ransomware do?",
        options: [
          "Deletes all files",
          "Encrypts files and demands payment",
          "Steals passwords",
          "Slows down the computer"
        ],
        correctAnswer: 1,
        explanation: "Ransomware encrypts your files and demands payment (ransom) to restore access to your data."
      },
      {
        id: 3,
        question: "Which threat secretly monitors your activity?",
        options: [
          "Virus",
          "Worm",
          "Spyware",
          "Trojan"
        ],
        correctAnswer: 2,
        explanation: "Spyware secretly monitors your computer activity and collects personal information without your knowledge."
      }
    ]
  },
  {
    id: 2,
    title: "System Protection",
    description: "Learn about firewalls, antivirus software, and user accounts",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Protecting Your Computer',
          data: {
            text: "System protection tools keep your computer safe from threats.\n\nThey include firewalls, antivirus software, and secure user accounts.",
            audio: true,
            audioTitle: "System Protection Introduction"
          }
        },
        {
          type: 'card',
          title: 'Firewalls',
          data: {
            cards: [
              {
                title: "🔥 Firewall Basics",
                description: "A firewall blocks unauthorized access to your computer.\n\nActs as a barrier between your computer and the internet. Monitors incoming and outgoing traffic.",
                image: "firewall-protection.jpg",
                details: []
              },
              {
                title: "🛡️ Software Firewall",
                description: "Built into Windows or installed as software.\n\nProtects individual computers. Can be customized with rules.",
                image: "software-firewall.jpg",
                details: []
              },
              {
                title: "🏠 Hardware Firewall",
                description: "Physical device that protects entire networks.\n\nUsually built into routers. Protects all connected devices.",
                image: "hardware-firewall.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Antivirus Software',
          data: {
            cards: [
              {
                title: "🛡️ Antivirus Protection",
                description: "Scans and removes malicious software from your computer.\n\nDetects viruses, worms, trojans, and other threats. Updates regularly to catch new threats.",
                image: "antivirus-software.jpg",
                details: []
              },
              {
                title: "🔄 Real-time Scanning",
                description: "Continuously monitors your computer for threats.\n\nScans files as you download or open them. Provides instant protection.",
                image: "realtime-scanning.jpg",
                details: []
              },
              {
                title: "📅 Scheduled Scans",
                description: "Regular full system scans to find hidden threats.\n\nRuns automatically at set times. Checks all files on your computer.",
                image: "scheduled-scan.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: System Protection Tools',
          data: {
            description: "See how firewalls and antivirus software protect your computer."
          }
        },
        {
          type: 'card',
          title: 'User Accounts',
          data: {
            cards: [
              {
                title: "👤 Administrator Account",
                description: "Full access to system settings and programs.\n\nCan install software and change system settings. Use carefully.",
                image: "admin-account.jpg",
                details: []
              },
              {
                title: "👥 Standard Account",
                description: "Limited access for daily use.\n\nSafer for regular tasks. Cannot install programs or change system settings.",
                image: "standard-account.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Protection Tools Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: "Firewall",
                purpose: "Blocks unauthorized access",
                protection: "Network security",
                setup: "Easy"
              },
              {
                name: "Antivirus",
                purpose: "Detects and removes malware",
                protection: "File security",
                setup: "Easy"
              },
              {
                name: "User Accounts",
                purpose: "Controls access levels",
                protection: "System security",
                setup: "Built-in"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Use multiple protection layers: firewall, antivirus, and secure user accounts.\n\nKeep antivirus updated and use standard accounts for daily tasks."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main purpose of a firewall?",
        options: [
          "Remove viruses",
          "Block unauthorized access",
          "Speed up internet",
          "Clean disk space"
        ],
        correctAnswer: 1,
        explanation: "A firewall blocks unauthorized access to your computer by monitoring and controlling network traffic."
      },
      {
        id: 2,
        question: "What does antivirus software do?",
        options: [
          "Blocks websites",
          "Detects and removes malware",
          "Increases speed",
          "Manages files"
        ],
        correctAnswer: 1,
        explanation: "Antivirus software scans your computer to detect and remove malicious software like viruses and trojans."
      },
      {
        id: 3,
        question: "Which account type is safer for daily use?",
        options: [
          "Administrator account",
          "Standard account",
          "Guest account",
          "All same"
        ],
        correctAnswer: 1,
        explanation: "Standard accounts are safer for daily use because they have limited access and cannot install programs or change system settings."
      }
    ]
  },
  {
    id: 3,
    title: "File Security",
    description: "Learn about encryption methods, access control, and secure storage practices",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Protecting Your Files',
          data: {
            text: "File security protects your data from unauthorized access.\n\nUse encryption, access control, and secure storage to keep files safe.",
            audio: true,
            audioTitle: "File Security Introduction"
          }
        },
        {
          type: 'card',
          title: 'Encryption Methods',
          data: {
            cards: [
              {
                title: "🔐 What is Encryption?",
                description: "Scrambles data so only authorized users can read it.\n\nConverts readable data into coded format. Requires key to decrypt.",
                image: "encryption-basics.jpg",
                details: []
              },
              {
                title: "🔑 File Encryption",
                description: "Encrypt individual files or folders.\n\nRight-click file → Properties → Advanced → Encrypt contents. Windows encrypts automatically.",
                image: "file-encryption.jpg",
                details: []
              },
              {
                title: "💾 Full Disk Encryption",
                description: "Encrypts entire hard drive.\n\nProtects all data if computer is stolen. BitLocker on Windows.",
                image: "disk-encryption.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Access Control',
          data: {
            cards: [
              {
                title: "👤 File Permissions",
                description: "Control who can access files.\n\nSet read, write, or execute permissions. Restrict access to authorized users.",
                image: "file-permissions.jpg",
                details: []
              },
              {
                title: "🔒 User Rights",
                description: "Different users have different access levels.\n\nAdministrator can access all files. Standard users have limited access.",
                image: "user-rights.jpg",
                details: []
              },
              {
                title: "📁 Folder Permissions",
                description: "Control access to entire folders.\n\nRight-click folder → Properties → Security. Set permissions for users or groups.",
                image: "folder-permissions.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Secure Storage Practices',
          data: {
            cards: [
              {
                title: "💾 Backup Important Files",
                description: "Keep copies in multiple locations.\n\nExternal drives, cloud storage, or network drives. Protects against loss.",
                image: "secure-backup.jpg",
                details: []
              },
              {
                title: "🔐 Password Protect Files",
                description: "Add passwords to sensitive documents.\n\nOffice files support password protection. Prevents unauthorized access.",
                image: "password-files.jpg",
                details: []
              },
              {
                title: "🗑️ Secure Deletion",
                description: "Permanently delete sensitive files.\n\nUse secure delete tools. Overwrites data so it cannot be recovered.",
                image: "secure-delete.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: File Security',
          data: {
            description: "Learn how to protect your files with encryption and access control."
          }
        },
        {
          type: 'comparison',
          title: 'Security Methods',
          data: {
            type: 'table',
            items: [
              {
                method: "Encryption",
                protection: "Data scrambling",
                use: "Sensitive files"
              },
              {
                method: "Access Control",
                protection: "Permission-based",
                use: "Shared files"
              },
              {
                method: "Backup",
                protection: "Data recovery",
                use: "Important files"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Encrypt sensitive files. Use access control to limit who can view files.\n\nBack up important data regularly and use secure deletion for sensitive information."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is encryption?",
        options: [
          "Deleting files",
          "Scrambling data so only authorized users can read it",
          "Copying files",
          "Moving files"
        ],
        correctAnswer: 1,
        explanation: "Encryption scrambles data into a coded format that can only be read by someone with the decryption key."
      },
      {
        id: 2,
        question: "What are file permissions used for?",
        options: [
          "To make files smaller",
          "To control who can access files",
          "To speed up files",
          "To organize files"
        ],
        correctAnswer: 1,
        explanation: "File permissions control who can read, write, or execute files, restricting access to authorized users only."
      },
      {
        id: 3,
        question: "Why should you back up important files?",
        options: [
          "To make them faster",
          "To protect against data loss",
          "To encrypt them",
          "To delete them"
        ],
        correctAnswer: 1,
        explanation: "Backing up files creates copies in multiple locations, protecting your data from loss due to hardware failure, viruses, or accidents."
      }
    ]
  },
  {
    id: 4,
    title: "Online Safety",
    description: "Learn about strong passwords, password managers, and phishing awareness",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Staying Safe Online',
          data: {
            text: "Online safety protects your personal information and accounts.\n\nUse strong passwords and be aware of phishing scams.",
            audio: true,
            audioTitle: "Online Safety Introduction"
          }
        },
        {
          type: 'card',
          title: 'Strong Passwords',
          data: {
            cards: [
              {
                title: "🔐 Password Strength",
                description: "Strong passwords are hard for others to guess.\n\nUse at least 8 characters with letters, numbers, and symbols. Avoid common words.",
                image: "strong-password.jpg",
                details: []
              },
              {
                title: "🔑 Password Tips",
                description: "Use unique passwords for each account.\n\nDon't share passwords with others. Change passwords regularly.",
                image: "password-tips.jpg",
                details: []
              },
              {
                title: "🔒 Password Managers",
                description: "Tools that securely store your passwords.\n\nRemember passwords for you. Generate strong passwords automatically.",
                image: "password-manager.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Online Safety',
          data: {
            description: "Learn how to create strong passwords and recognize phishing attempts."
          }
        },
        {
          type: 'card',
          title: 'Phishing Awareness',
          data: {
            cards: [
              {
                title: "🎣 What is Phishing?",
                description: "Fake emails or websites that trick you into sharing information.\n\nLooks like legitimate companies. Asks for passwords or personal details.",
                image: "phishing-attack.jpg",
                details: []
              },
              {
                title: "⚠️ Phishing Signs",
                description: "Urgent language, spelling errors, suspicious links.\n\nAsks for personal information. Comes from unknown senders.",
                image: "phishing-signs.jpg",
                details: []
              },
              {
                title: "✅ How to Avoid Phishing",
                description: "Never click suspicious links or share passwords via email.\n\nVerify sender identity. Check website URLs carefully.",
                image: "avoid-phishing.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Password Security Process',
          data: {
            steps: [
              {
                id: "create",
                label: "Create Strong Password",
                description: "Use 8+ characters with mix of letters, numbers, symbols"
              },
              {
                id: "store",
                label: "Store Securely",
                description: "Use password manager or write down safely"
              },
              {
                id: "update",
                label: "Update Regularly",
                description: "Change passwords every few months"
              },
              {
                id: "verify",
                label: "Verify Requests",
                description: "Never share passwords via email or phone"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Always use strong, unique passwords for each account.\n\nBe suspicious of emails asking for personal information. When in doubt, verify the source."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What makes a password strong?",
        options: [
          "Short and simple",
          "At least 8 characters with letters, numbers, and symbols",
          "Your name and birthdate",
          "Same password for all accounts"
        ],
        correctAnswer: 1,
        explanation: "Strong passwords are at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols."
      },
      {
        id: 2,
        question: "What is phishing?",
        options: [
          "A type of virus",
          "Fake emails or websites that trick you into sharing information",
          "A firewall feature",
          "A password manager"
        ],
        correctAnswer: 1,
        explanation: "Phishing is a scam where attackers send fake emails or create fake websites to trick you into sharing passwords or personal information."
      },
      {
        id: 3,
        question: "What should you do if you receive a suspicious email asking for your password?",
        options: [
          "Reply with your password",
          "Click the link in the email",
          "Ignore it and never share passwords via email",
          "Forward it to friends"
        ],
        correctAnswer: 2,
        explanation: "Never share passwords via email. Legitimate companies never ask for passwords through email. Delete suspicious emails."
      }
    ]
  },
  {
    id: 5,
    title: "Digital Currency & Blockchain",
    description: "Learn about digital currency, cryptocurrencies, CBDC, and blockchain technology",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Digital Currency Overview',
          data: {
            text: "Digital currency is money that exists only in electronic form.\n\nIt includes cryptocurrencies and central bank digital currencies.",
            audio: true,
            audioTitle: "Digital Currency Introduction"
          }
        },
        {
          type: 'card',
          title: 'What is Digital Currency?',
          data: {
            cards: [
              {
                title: "💳 Digital Currency Definition",
                description: "Money that exists only in electronic or digital form.\n\nNo physical coins or bills. Stored and transferred electronically.",
                image: "digital-currency.jpg",
                details: []
              },
              {
                title: "🌐 Types of Digital Currency",
                description: "Cryptocurrencies and CBDC.\n\nCryptocurrencies are decentralized. CBDC is issued by central banks.",
                image: "currency-types.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Cryptocurrencies',
          data: {
            cards: [
              {
                title: "₿ Bitcoin",
                description: "First and most popular cryptocurrency.\n\nCreated in 2009. Decentralized digital currency. Limited supply.",
                image: "bitcoin-crypto.jpg",
                details: []
              },
              {
                title: "Ξ Ethereum",
                description: "Second-largest cryptocurrency.\n\nSupports smart contracts. Used for decentralized applications.",
                image: "ethereum-crypto.jpg",
                details: []
              },
              {
                title: "🪙 How Cryptocurrencies Work",
                description: "Use blockchain technology for transactions.\n\nNo central authority. Transactions verified by network.",
                image: "crypto-work.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Central Bank Digital Currency (CBDC)',
          data: {
            cards: [
              {
                title: "🏦 What is CBDC?",
                description: "Digital currency issued by central bank.\n\nOfficial government-backed digital money. Regulated and secure.",
                image: "cbdc-currency.jpg",
                details: []
              },
              {
                title: "💼 CBDC Benefits",
                description: "Faster transactions and lower costs.\n\nGovernment-backed security. Easier financial inclusion.",
                image: "cbdc-benefits.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Blockchain Basics',
          data: {
            cards: [
              {
                title: "⛓️ Distributed Ledger",
                description: "Database shared across many computers.\n\nNo single point of control. All participants have copy of ledger.",
                image: "distributed-ledger.jpg",
                details: []
              },
              {
                title: "🔒 Immutability",
                description: "Records cannot be changed once added.\n\nTransactions are permanent. Prevents fraud and tampering.",
                image: "immutability.jpg",
                details: []
              },
              {
                title: "👁️ Transparency",
                description: "All transactions are visible to network.\n\nPublic record of all activities. Increases trust and accountability.",
                image: "transparency.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Digital Currency & Blockchain',
          data: {
            description: "Learn about digital currencies and how blockchain technology works."
          }
        },
        {
          type: 'card',
          title: 'Risks and Considerations',
          data: {
            cards: [
              {
                title: "⚠️ Scams",
                description: "Fake cryptocurrency schemes and fraud.\n\nBe cautious of promises of high returns. Research before investing.",
                image: "crypto-scams.jpg",
                details: []
              },
              {
                title: "📈 Volatility",
                description: "Prices can change dramatically.\n\nCryptocurrency values fluctuate rapidly. High risk investment.",
                image: "volatility.jpg",
                details: []
              },
              {
                title: "⚖️ Ethics",
                description: "Consider environmental impact and regulation.\n\nMining uses energy. Regulatory concerns exist.",
                image: "crypto-ethics.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Digital Currency Comparison',
          data: {
            type: 'table',
            items: [
              {
                type: "Cryptocurrency",
                control: "Decentralized",
                regulation: "Limited",
                risk: "High"
              },
              {
                type: "CBDC",
                control: "Central bank",
                regulation: "Full",
                risk: "Low"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Digital currency exists only electronically. Cryptocurrencies are decentralized, CBDC is government-backed.\n\nBlockchain uses distributed ledger, immutability, and transparency. Be aware of scams, volatility, and ethical concerns."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is blockchain?",
        options: [
          "A type of computer",
          "A distributed ledger technology that records transactions",
          "A type of virus",
          "A storage device"
        ],
        correctAnswer: 1,
        explanation: "Blockchain is a distributed ledger technology that records transactions across many computers, making them secure and transparent."
      },
      {
        id: 2,
        question: "What does immutability mean in blockchain?",
        options: [
          "Records can be changed easily",
          "Records cannot be changed once added",
          "Records are temporary",
          "Records are deleted automatically"
        ],
        correctAnswer: 1,
        explanation: "Immutability means that once a transaction is recorded on the blockchain, it cannot be altered or deleted, ensuring data integrity."
      },
      {
        id: 3,
        question: "What is a major risk of cryptocurrencies?",
        options: [
          "They are too secure",
          "High volatility and potential for scams",
          "They are too easy to use",
          "They are free"
        ],
        correctAnswer: 1,
        explanation: "Cryptocurrencies have high volatility (prices change dramatically) and are targets for scams, making them risky investments."
      }
    ]
  }
];

// OLD Module 9: Computer Security & Maintenance (REPLACED BY NEW MODULE 8)
// This content is being moved to Module 8 (Security & Digital Currency)
// System Maintenance (Lesson 4) will be added to Module 9 (Performance & Troubleshooting)
/*
export const module9Lessons: Lesson[] = [
  {
    id: 1,
    title: "Understanding Cyber Threats",
    description: "Learn about viruses, worms, trojans, spyware, and ransomware",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What are Cyber Threats?',
          data: {
            text: "Cyber threats are malicious programs that can harm your computer and steal your data.\n\nThey spread through downloads, emails, and infected websites.",
            audio: true,
            audioTitle: "Cyber Threats Introduction"
          }
        },
        {
          type: 'card',
          title: 'Types of Cyber Threats',
          data: {
            cards: [
              {
                title: "🦠 Computer Viruses",
                description: "Malicious code that attaches to files and spreads.\n\nDamages files and slows down your computer. Requires user action to spread.",
                image: "computer-virus.jpg",
                details: []
              },
              {
                title: "🐛 Worms",
                description: "Self-replicating malware that spreads automatically.\n\nSpreads through networks without user interaction. Can consume network bandwidth.",
                image: "computer-worm.jpg",
                details: []
              },
              {
                title: "🐴 Trojans",
                description: "Malware disguised as legitimate software.\n\nTricks users into installing it. Opens backdoors for hackers.",
                image: "trojan-horse.jpg",
                details: []
              },
              {
                title: "👁️ Spyware",
                description: "Secretly monitors your computer activity.\n\nCollects personal information without permission. Tracks keystrokes and browsing habits.",
                image: "spyware-threat.jpg",
                details: []
              },
              {
                title: "🔒 Ransomware",
                description: "Encrypts your files and demands payment.\n\nLocks you out of your data. Requires payment to restore access.",
                image: "ransomware-threat.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Cyber Threats Explained',
          data: {
            description: "Watch how different cyber threats work and how to recognize them."
          }
        },
        {
          type: 'comparison',
          title: 'Threat Comparison',
          data: {
            title: "Cyber Threat Types",
            items: [
              {
                threat: "Virus",
                spread: "Attaches to files",
                speed: "Slow",
                detection: "Easier"
              },
              {
                threat: "Worm",
                spread: "Self-replicating",
                speed: "Fast",
                detection: "Medium"
              },
              {
                threat: "Ransomware",
                spread: "Encrypts files",
                speed: "Fast",
                detection: "Hard"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'How Threats Spread',
          data: {
            text: "Cyber threats spread through email attachments, infected websites, and USB drives.\n\nAlways be cautious when downloading files or clicking links from unknown sources."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main difference between a virus and a worm?",
        options: [
          "Viruses are faster",
          "Worms spread automatically without user action",
          "Worms are less harmful",
          "Viruses are easier to remove"
        ],
        correctAnswer: 1,
        explanation: "Worms can spread automatically through networks without requiring user interaction, while viruses need user action to spread."
      },
      {
        id: 2,
        question: "What does ransomware do?",
        options: [
          "Deletes all files",
          "Encrypts files and demands payment",
          "Steals passwords",
          "Slows down the computer"
        ],
        correctAnswer: 1,
        explanation: "Ransomware encrypts your files and demands payment (ransom) to restore access to your data."
      },
      {
        id: 3,
        question: "Which threat secretly monitors your activity?",
        options: [
          "Virus",
          "Worm",
          "Spyware",
          "Trojan"
        ],
        correctAnswer: 2,
        explanation: "Spyware secretly monitors your computer activity and collects personal information without your knowledge."
      }
    ]
  },
  {
    id: 2,
    title: "System Protection Tools",
    description: "Learn about firewalls, antivirus software, and user accounts",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Protecting Your Computer',
          data: {
            text: "System protection tools keep your computer safe from threats.\n\nThey include firewalls, antivirus software, and secure user accounts.",
            audio: true,
            audioTitle: "System Protection Introduction"
          }
        },
        {
          type: 'card',
          title: 'Firewalls',
          data: {
            cards: [
              {
                title: "🔥 Firewall Basics",
                description: "A firewall blocks unauthorized access to your computer.\n\nActs as a barrier between your computer and the internet. Monitors incoming and outgoing traffic.",
                image: "firewall-protection.jpg",
                details: []
              },
              {
                title: "🛡️ Software Firewall",
                description: "Built into Windows or installed as software.\n\nProtects individual computers. Can be customized with rules.",
                image: "software-firewall.jpg",
                details: []
              },
              {
                title: "🏠 Hardware Firewall",
                description: "Physical device that protects entire networks.\n\nUsually built into routers. Protects all connected devices.",
                image: "hardware-firewall.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Antivirus Software',
          data: {
            cards: [
              {
                title: "🛡️ Antivirus Protection",
                description: "Scans and removes malicious software from your computer.\n\nDetects viruses, worms, trojans, and other threats. Updates regularly to catch new threats.",
                image: "antivirus-software.jpg",
                details: []
              },
              {
                title: "🔄 Real-time Scanning",
                description: "Continuously monitors your computer for threats.\n\nScans files as you download or open them. Provides instant protection.",
                image: "realtime-scanning.jpg",
                details: []
              },
              {
                title: "📅 Scheduled Scans",
                description: "Regular full system scans to find hidden threats.\n\nRuns automatically at set times. Checks all files on your computer.",
                image: "scheduled-scan.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: System Protection Tools',
          data: {
            description: "See how firewalls and antivirus software protect your computer."
          }
        },
        {
          type: 'text',
          title: 'User Accounts',
          data: {
            text: "User accounts control access to your computer.\n\nAdministrator accounts have full access. Standard accounts are safer for daily use."
          }
        },
        {
          type: 'comparison',
          title: 'Protection Tools Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: "Firewall",
                description: "Blocks unauthorized access",
                advantages: ["Network protection", "Prevents intrusions"],
                limitations: ["Can block legitimate apps", "Needs configuration"]
              },
              {
                name: "Antivirus",
                description: "Detects and removes malware",
                advantages: ["Removes threats", "Real-time protection"],
                limitations: ["Needs updates", "May slow system"]
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main purpose of a firewall?",
        options: [
          "Remove viruses",
          "Block unauthorized access",
          "Speed up internet",
          "Clean disk space"
        ],
        correctAnswer: 1,
        explanation: "A firewall blocks unauthorized access to your computer by monitoring and controlling network traffic."
      },
      {
        id: 2,
        question: "What does antivirus software do?",
        options: [
          "Blocks websites",
          "Detects and removes malware",
          "Increases speed",
          "Manages files"
        ],
        correctAnswer: 1,
        explanation: "Antivirus software scans your computer to detect and remove malicious software like viruses and trojans."
      },
      {
        id: 3,
        question: "Why should antivirus software be updated regularly?",
        options: [
          "To improve speed",
          "To detect new threats",
          "To save space",
          "To change interface"
        ],
        correctAnswer: 1,
        explanation: "Antivirus software needs regular updates to recognize and protect against newly discovered threats."
      }
    ]
  },
  {
    id: 3,
    title: "Online Safety Practices",
    description: "Learn about strong passwords and phishing awareness",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Staying Safe Online',
          data: {
            text: "Online safety protects your personal information and accounts.\n\nUse strong passwords and be aware of phishing scams.",
            audio: true,
            audioTitle: "Online Safety Introduction"
          }
        },
        {
          type: 'card',
          title: 'Strong Passwords',
          data: {
            cards: [
              {
                title: "🔐 Password Strength",
                description: "Strong passwords are hard for others to guess.\n\nUse at least 8 characters with letters, numbers, and symbols. Avoid common words.",
                image: "strong-password.jpg",
                details: []
              },
              {
                title: "🔑 Password Tips",
                description: "Use unique passwords for each account.\n\nDon't share passwords with others. Change passwords regularly.",
                image: "password-tips.jpg",
                details: []
              },
              {
                title: "🔒 Password Managers",
                description: "Tools that securely store your passwords.\n\nRemember passwords for you. Generate strong passwords automatically.",
                image: "password-manager.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Online Safety',
          data: {
            description: "Learn how to create strong passwords and recognize phishing attempts."
          }
        },
        {
          type: 'card',
          title: 'Phishing Awareness',
          data: {
            cards: [
              {
                title: "🎣 What is Phishing?",
                description: "Fake emails or websites that trick you into sharing information.\n\nLooks like legitimate companies. Asks for passwords or personal details.",
                image: "phishing-attack.jpg",
                details: []
              },
              {
                title: "⚠️ Phishing Signs",
                description: "Urgent language, spelling errors, suspicious links.\n\nAsks for personal information. Comes from unknown senders.",
                image: "phishing-signs.jpg",
                details: []
              },
              {
                title: "✅ How to Avoid Phishing",
                description: "Never click suspicious links or share passwords via email.\n\nVerify sender identity. Check website URLs carefully.",
                image: "avoid-phishing.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Password Security Process',
          data: {
            steps: [
              {
                id: "create",
                label: "Create Strong Password",
                description: "Use 8+ characters with mix of letters, numbers, symbols"
              },
              {
                id: "store",
                label: "Store Securely",
                description: "Use password manager or write down safely"
              },
              {
                id: "update",
                label: "Update Regularly",
                description: "Change passwords every few months"
              },
              {
                id: "verify",
                label: "Verify Requests",
                description: "Never share passwords via email or phone"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Always use strong, unique passwords for each account.\n\nBe suspicious of emails asking for personal information. When in doubt, verify the source."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What makes a password strong?",
        options: [
          "Short and simple",
          "At least 8 characters with letters, numbers, and symbols",
          "Your name and birthdate",
          "Same password for all accounts"
        ],
        correctAnswer: 1,
        explanation: "Strong passwords are at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols."
      },
      {
        id: 2,
        question: "What is phishing?",
        options: [
          "A type of virus",
          "Fake emails or websites that trick you into sharing information",
          "A firewall feature",
          "A password manager"
        ],
        correctAnswer: 1,
        explanation: "Phishing is a scam where attackers send fake emails or create fake websites to trick you into sharing passwords or personal information."
      },
      {
        id: 3,
        question: "What should you do if you receive a suspicious email asking for your password?",
        options: [
          "Reply with your password",
          "Click the link in the email",
          "Ignore it and never share passwords via email",
          "Forward it to friends"
        ],
        correctAnswer: 2,
        explanation: "Never share passwords via email. Legitimate companies never ask for passwords through email. Delete suspicious emails."
      }
    ]
  },
  {
    id: 4,
    title: "System Maintenance Basics",
    description: "Learn about disk cleanup, defragmentation, and hardware care",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Why Maintenance Matters',
          data: {
            text: "Regular maintenance keeps your computer running smoothly.\n\nIt improves performance and extends your computer's lifespan.",
            audio: true,
            audioTitle: "System Maintenance Introduction"
          }
        },
        {
          type: 'card',
          title: 'Disk Cleanup',
          data: {
            cards: [
              {
                title: "🧹 Disk Cleanup Tool",
                description: "Removes temporary files and unnecessary data.\n\nFrees up storage space. Improves system performance.",
                image: "disk-cleanup.jpg",
                details: []
              },
              {
                title: "🗑️ Temporary Files",
                description: "Files created by programs that are no longer needed.\n\nBrowser cache, temp files, recycle bin. Safe to delete.",
                image: "temp-files.jpg",
                details: []
              },
              {
                title: "📊 Cleanup Benefits",
                description: "More storage space and faster performance.\n\nRemoves clutter. Helps system run efficiently.",
                image: "cleanup-benefits.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Before and After Cleanup',
          data: {
            type: 'table',
            items: [
              {
                name: "Before Cleanup",
                description: "Cluttered system",
                advantages: [],
                limitations: ["Slow performance", "Less storage", "More errors"]
              },
              {
                name: "After Cleanup",
                description: "Optimized system",
                advantages: ["Faster speed", "More storage", "Fewer errors"],
                limitations: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Disk Defragmentation',
          data: {
            cards: [
              {
                title: "🔧 What is Defragmentation?",
                description: "Reorganizes files on your hard drive for faster access.\n\nPuts file pieces together. Improves read/write speed.",
                image: "disk-defrag.jpg",
                details: []
              },
              {
                title: "⚡ When to Defragment",
                description: "For traditional hard drives (HDD), not SSDs.\n\nRun monthly or when system is slow. Takes time to complete.",
                image: "defrag-process.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: System Maintenance',
          data: {
            description: "Watch how to perform disk cleanup and defragmentation."
          }
        },
        {
          type: 'card',
          title: 'Hardware Maintenance',
          data: {
            cards: [
              {
                title: "💨 Ventilation",
                description: "Keep computer vents clean and unobstructed.\n\nPrevents overheating. Ensures proper airflow.",
                image: "computer-ventilation.jpg",
                details: []
              },
              {
                title: "🧽 Physical Cleaning",
                description: "Clean keyboard, mouse, and screen regularly.\n\nUse appropriate cleaning tools. Turn off before cleaning.",
                image: "hardware-cleaning.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Maintenance Schedule',
          data: {
            steps: [
              {
                id: "weekly",
                label: "Weekly Tasks",
                description: "Clean keyboard and screen, check for updates"
              },
              {
                id: "monthly",
                label: "Monthly Tasks",
                description: "Run disk cleanup, check storage space"
              },
              {
                id: "quarterly",
                label: "Quarterly Tasks",
                description: "Defragment HDD, deep clean hardware"
              },
              {
                id: "yearly",
                label: "Yearly Tasks",
                description: "Full system check, backup verification"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does disk cleanup do?",
        options: [
          "Increases storage",
          "Removes temporary files and frees up space",
          "Fixes hardware problems",
          "Installs new software"
        ],
        correctAnswer: 1,
        explanation: "Disk cleanup removes temporary files, cache, and unnecessary data to free up storage space and improve performance."
      },
      {
        id: 2,
        question: "What is disk defragmentation used for?",
        options: [
          "Removing viruses",
          "Reorganizing files for faster access",
          "Installing programs",
          "Changing passwords"
        ],
        correctAnswer: 1,
        explanation: "Disk defragmentation reorganizes fragmented files on a hard drive so they can be accessed more quickly."
      },
      {
        id: 3,
        question: "Why is proper ventilation important?",
        options: [
          "To save electricity",
          "To prevent overheating",
          "To increase storage",
          "To improve sound"
        ],
        correctAnswer: 1,
        explanation: "Proper ventilation prevents the computer from overheating, which can cause damage and slow performance."
      }
    ]
  },
  {
    id: 5,
    title: "Security Best Practices",
    description: "Learn essential security habits to protect your computer",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Security Habits',
          data: {
            text: "Good security habits protect your computer and data.\n\nCombine multiple protection methods for best results.",
            audio: true,
            audioTitle: "Security Practices Introduction"
          }
        },
        {
          type: 'video',
          title: 'Video: Security Best Practices',
          data: {
            description: "Learn essential security habits to keep your computer safe."
          }
        },
        {
          type: 'card',
          title: 'Essential Practices',
          data: {
            cards: [
              {
                title: "🔄 Regular Updates",
                description: "Keep Windows and software updated.\n\nUpdates fix security vulnerabilities. Install updates promptly.",
                image: "system-updates.jpg",
                details: []
              },
              {
                title: "🔒 Secure Browsing",
                description: "Only visit trusted websites.\n\nLook for HTTPS in URLs. Avoid suspicious downloads.",
                image: "secure-browsing.jpg",
                details: []
              },
              {
                title: "📧 Email Safety",
                description: "Don't open attachments from unknown senders.\n\nVerify sender identity. Be cautious with links.",
                image: "email-safety.jpg",
                details: []
              },
              {
                title: "💾 Regular Backups",
                description: "Back up important files regularly.\n\nProtects against data loss. Use external drives or cloud.",
                image: "regular-backup.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Security Levels',
          data: {
            type: 'table',
            items: [
              {
                name: "Basic Security",
                description: "Antivirus only",
                advantages: ["Simple setup"],
                limitations: ["Limited protection", "Vulnerable to threats"]
              },
              {
                name: "Good Security",
                description: "Antivirus + Firewall",
                advantages: ["Better protection", "Network security"],
                limitations: ["Needs updates"]
              },
              {
                name: "Strong Security",
                description: "Full protection suite",
                advantages: ["Maximum protection", "Multiple layers"],
                limitations: ["More maintenance", "May slow system"]
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Use multiple security layers: antivirus, firewall, and safe browsing habits.\n\nKeep everything updated and back up your data regularly."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Why are regular software updates important?",
        options: [
          "They add new features only",
          "They fix security vulnerabilities",
          "They slow down the computer",
          "They delete files"
        ],
        correctAnswer: 1,
        explanation: "Regular updates fix security vulnerabilities that hackers could exploit, keeping your computer protected."
      },
      {
        id: 2,
        question: "What should you look for in a website URL to ensure it's secure?",
        options: [
          "HTTP",
          "HTTPS",
          "WWW",
          "COM"
        ],
        correctAnswer: 1,
        explanation: "HTTPS indicates a secure, encrypted connection, which is safer than HTTP for entering personal information."
      },
      {
        id: 3,
        question: "What is a good security practice?",
        options: [
          "Open all email attachments",
          "Back up important files regularly",
          "Use the same password everywhere",
          "Never update software"
        ],
        correctAnswer: 1,
        explanation: "Regular backups protect your important files from loss due to hardware failure, viruses, or other issues."
      }
    ]
  }
];
*/

// Module 9: Performance & Troubleshooting
export const module9Lessons: Lesson[] = [
  {
    id: 1,
    title: "Understanding Performance Factors",
    description: "Learn about CPU, RAM, disk usage, and startup programs",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'What Affects Performance?',
          data: {
            text: "Several factors determine how fast your computer runs.\n\nUnderstanding these helps you identify and fix performance issues.",
            audio: true,
            audioTitle: "Performance Factors Introduction"
          }
        },
        {
          type: 'card',
          title: 'Key Performance Factors',
          data: {
            cards: [
              {
                title: "⚙️ CPU Usage",
                description: "CPU processes all tasks on your computer.\n\nHigh CPU usage slows down everything. Close unnecessary programs to free up CPU.",
                image: "cpu-usage.jpg",
                details: []
              },
              {
                title: "💾 RAM Usage",
                description: "RAM stores running programs and data.\n\nLow RAM causes slow performance. More RAM means better multitasking.",
                image: "ram-usage.jpg",
                details: []
              },
              {
                title: "💿 Disk Usage",
                description: "Storage space affects system speed.\n\nFull hard drives slow down computers. Keep at least 10% free space.",
                image: "disk-usage.jpg",
                details: []
              },
              {
                title: "🚀 Startup Programs",
                description: "Programs that start automatically with Windows.\n\nToo many startup programs slow boot time. Disable unnecessary ones.",
                image: "startup-programs.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Performance Factors Explained',
          data: {
            description: "Watch how CPU, RAM, and disk usage affect computer performance."
          }
        },
        {
          type: 'comparison',
          title: 'Performance Impact',
          data: {
            type: 'table',
            items: [
              {
                name: "Low Usage",
                description: "Optimal performance",
                advantages: ["Fast speed", "Smooth operation", "Quick response"],
                limitations: []
              },
              {
                name: "High Usage",
                description: "Performance issues",
                advantages: [],
                limitations: ["Slow speed", "Freezing", "Delayed response"]
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Monitoring Performance',
          data: {
            text: "Use Task Manager to check CPU, RAM, and disk usage.\n\nHigh usage indicates what's slowing down your computer."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What happens when CPU usage is high?",
        options: [
          "Computer runs faster",
          "Computer slows down",
          "More storage space",
          "Better internet speed"
        ],
        correctAnswer: 1,
        explanation: "High CPU usage means the processor is working at maximum capacity, causing the computer to slow down and become unresponsive."
      },
      {
        id: 2,
        question: "Why is it important to keep disk space free?",
        options: [
          "To install more programs",
          "To maintain system speed and performance",
          "To increase RAM",
          "To improve internet"
        ],
        correctAnswer: 1,
        explanation: "Keeping at least 10% free disk space is important because full drives slow down the computer and can cause system errors."
      },
      {
        id: 3,
        question: "What do too many startup programs cause?",
        options: [
          "Faster boot time",
          "Slower boot time and reduced performance",
          "More storage",
          "Better graphics"
        ],
        correctAnswer: 1,
        explanation: "Too many startup programs launch automatically when Windows starts, making boot time slower and using system resources."
      }
    ]
  },
  {
    id: 2,
    title: "Checking System Information",
    description: "Learn how to view system properties and use Task Manager",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'System Information Tools',
          data: {
            text: "Windows provides tools to check your system information.\n\nThese help you understand your computer's capabilities and current status.",
            audio: true,
            audioTitle: "System Info Introduction"
          }
        },
        {
          type: 'card',
          title: 'System Properties',
          data: {
            cards: [
              {
                title: "🖥️ Viewing System Info",
                description: "Shows processor, RAM, and Windows version.\n\nRight-click This PC → Properties. Displays hardware specifications.",
                image: "system-properties.jpg",
                details: []
              },
              {
                title: "📊 System Specifications",
                description: "Lists CPU model, installed RAM, and system type.\n\nHelps identify hardware capabilities. Useful for troubleshooting.",
                image: "system-specs.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Task Manager',
          data: {
            cards: [
              {
                title: "📈 Performance Tab",
                description: "Shows real-time CPU, RAM, disk, and network usage.\n\nVisual graphs display current usage. Helps identify bottlenecks.",
                image: "task-manager-performance.jpg",
                details: []
              },
              {
                title: "📋 Processes Tab",
                description: "Lists all running programs and their resource usage.\n\nShows which programs use most CPU and RAM. Can end unresponsive programs.",
                image: "task-manager-processes.jpg",
                details: []
              },
              {
                title: "🚀 Startup Tab",
                description: "Shows programs that start with Windows.\n\nCan enable or disable startup programs. Reduces boot time.",
                image: "task-manager-startup.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Using Task Manager',
          data: {
            description: "Learn how to check system performance using Task Manager."
          }
        },
        {
          type: 'flowchart',
          title: 'Checking System Info Process',
          data: {
            steps: [
              {
                id: "open",
                label: "Open Task Manager",
                description: "Press Ctrl+Shift+Esc or right-click taskbar"
              },
              {
                id: "check",
                label: "Check Performance Tab",
                description: "View CPU, RAM, disk usage graphs"
              },
              {
                id: "identify",
                label: "Identify Issues",
                description: "Look for high usage percentages"
              },
              {
                id: "manage",
                label: "Manage Resources",
                description: "Close unnecessary programs or processes"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Task Manager is your main tool for monitoring performance.\n\nCheck it regularly to identify what's using your system resources."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "How do you open Task Manager?",
        options: [
          "Ctrl+Alt+Delete",
          "Ctrl+Shift+Esc",
          "Windows key only",
          "Alt+F4"
        ],
        correctAnswer: 1,
        explanation: "Task Manager can be opened by pressing Ctrl+Shift+Esc, or by right-clicking the taskbar and selecting Task Manager."
      },
      {
        id: 2,
        question: "What does the Performance tab in Task Manager show?",
        options: [
          "List of programs",
          "Real-time CPU, RAM, disk, and network usage",
          "System settings",
          "File explorer"
        ],
        correctAnswer: 1,
        explanation: "The Performance tab displays real-time graphs showing CPU, RAM, disk, and network usage percentages."
      },
      {
        id: 3,
        question: "What can you do in the Startup tab?",
        options: [
          "Install programs",
          "Enable or disable programs that start with Windows",
          "Delete files",
          "Change passwords"
        ],
        correctAnswer: 1,
        explanation: "The Startup tab allows you to enable or disable programs that automatically start when Windows boots, helping improve boot time."
      }
    ]
  },
  {
    id: 3,
    title: "Common Issues and Fixes",
    description: "Learn to fix no sound, slow system, no internet, and other problems",
    duration: "16 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Troubleshooting Basics',
          data: {
            text: "Computers can have various issues that affect performance.\n\nMost problems have simple solutions you can try yourself.",
            audio: true,
            audioTitle: "Troubleshooting Introduction"
          }
        },
        {
          type: 'card',
          title: 'No Sound Issues',
          data: {
            cards: [
              {
                title: "🔊 Check Volume",
                description: "First, check if volume is muted or too low.\n\nClick speaker icon in taskbar. Adjust volume slider.",
                image: "check-volume.jpg",
                details: []
              },
              {
                title: "🔌 Check Connections",
                description: "Verify speakers or headphones are connected properly.\n\nCheck audio cable connections. Try different ports.",
                image: "audio-connections.jpg",
                details: []
              },
              {
                title: "⚙️ Audio Drivers",
                description: "Update or reinstall audio drivers if needed.\n\nDevice Manager → Sound devices. Update driver.",
                image: "audio-drivers.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Slow System Fixes',
          data: {
            cards: [
              {
                title: "🧹 Clean Up Disk",
                description: "Remove temporary files and free up space.\n\nRun Disk Cleanup tool. Delete unnecessary files.",
                image: "clean-disk.jpg",
                details: []
              },
              {
                title: "🔄 Restart Computer",
                description: "Simple restart often fixes many issues.\n\nCloses all programs. Clears RAM. Refreshes system.",
                image: "restart-computer.jpg",
                details: []
              },
              {
                title: "🚫 Close Programs",
                description: "Close unnecessary programs using Task Manager.\n\nEnd processes using high CPU or RAM. Frees resources.",
                image: "close-programs.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Common Fixes',
          data: {
            description: "Watch how to troubleshoot and fix common computer problems."
          }
        },
        {
          type: 'card',
          title: 'No Internet Connection',
          data: {
            cards: [
              {
                title: "📡 Check Wi-Fi",
                description: "Verify Wi-Fi is connected and signal is strong.\n\nCheck network icon. Reconnect if needed.",
                image: "check-wifi.jpg",
                details: []
              },
              {
                title: "🔌 Check Cables",
                description: "For wired connection, check Ethernet cable.\n\nEnsure cable is plugged in securely. Try different cable.",
                image: "check-cables.jpg",
                details: []
              },
              {
                title: "🔄 Restart Router",
                description: "Restart your router or modem.\n\nUnplug for 30 seconds. Plug back in. Wait for connection.",
                image: "restart-router.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Issue vs Solution',
          data: {
            type: 'table',
            items: [
              {
                name: "No Sound",
                description: "Audio problem",
                advantages: ["Check volume", "Check connections", "Update drivers"],
                limitations: []
              },
              {
                name: "Slow System",
                description: "Performance issue",
                advantages: ["Clean disk", "Restart", "Close programs"],
                limitations: []
              },
              {
                name: "No Internet",
                description: "Connection problem",
                advantages: ["Check Wi-Fi", "Check cables", "Restart router"],
                limitations: []
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What should you check first if there's no sound?",
        options: [
          "Internet connection",
          "Volume settings and mute status",
          "Screen brightness",
          "Keyboard settings"
        ],
        correctAnswer: 1,
        explanation: "The first step in troubleshooting no sound is to check if the volume is muted or set too low in the system settings."
      },
      {
        id: 2,
        question: "What is a simple fix for a slow computer?",
        options: [
          "Buy new computer",
          "Restart the computer and close unnecessary programs",
          "Delete all files",
          "Uninstall Windows"
        ],
        correctAnswer: 1,
        explanation: "Restarting the computer and closing unnecessary programs are simple fixes that often resolve slow performance issues."
      },
      {
        id: 3,
        question: "What should you do if you have no internet connection?",
        options: [
          "Throw away the computer",
          "Check Wi-Fi connection, cables, and restart router",
          "Format the hard drive",
          "Change the password"
        ],
        correctAnswer: 1,
        explanation: "For no internet issues, check Wi-Fi connection, verify cables are connected, and try restarting the router or modem."
      }
    ]
  },
  {
    id: 4,
    title: "Safe Mode and Troubleshooting Tools",
    description: "Learn about Safe Mode, Windows troubleshooting tools, and recovery options",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Advanced Troubleshooting',
          data: {
            text: "When basic fixes don't work, use advanced troubleshooting tools.\n\nSafe Mode and Windows tools help diagnose serious problems.",
            audio: true,
            audioTitle: "Advanced Troubleshooting Introduction"
          }
        },
        {
          type: 'card',
          title: 'Safe Mode',
          data: {
            cards: [
              {
                title: "🛡️ What is Safe Mode?",
                description: "Windows starts with minimal programs and drivers.\n\nOnly essential system files load. Helps diagnose problems.",
                image: "safe-mode.jpg",
                details: []
              },
              {
                title: "🔧 When to Use Safe Mode",
                description: "Use when computer won't start normally or has malware.\n\nAllows removal of problematic programs. Fixes system issues.",
                image: "when-safe-mode.jpg",
                details: []
              },
              {
                title: "🚀 How to Enter Safe Mode",
                description: "Hold Shift while clicking Restart.\n\nOr press F8 during boot. Select Safe Mode from menu.",
                image: "enter-safe-mode.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Safe Mode Explained',
          data: {
            description: "Learn how to use Safe Mode to troubleshoot computer problems."
          }
        },
        {
          type: 'card',
          title: 'Windows Troubleshooting Tools',
          data: {
            cards: [
              {
                title: "🔍 Troubleshooter",
                description: "Windows built-in problem solver.\n\nSettings → Update & Security → Troubleshoot. Fixes common issues automatically.",
                image: "troubleshooter.jpg",
                details: []
              },
              {
                title: "💾 System Restore",
                description: "Returns computer to previous working state.\n\nReverts system changes. Fixes problems caused by recent changes.",
                image: "system-restore.jpg",
                details: []
              },
              {
                title: "🔧 Device Manager",
                description: "Manages hardware devices and drivers.\n\nUpdate or reinstall drivers. Fix device problems.",
                image: "device-manager.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Troubleshooting Process',
          data: {
            steps: [
              {
                id: "identify",
                label: "Identify Problem",
                description: "Note what's not working"
              },
              {
                id: "basic",
                label: "Try Basic Fixes",
                description: "Restart, check connections"
              },
              {
                id: "troubleshooter",
                label: "Run Troubleshooter",
                description: "Use Windows built-in tool"
              },
              {
                id: "safe",
                label: "Try Safe Mode",
                description: "If problem persists"
              },
              {
                id: "restore",
                label: "System Restore",
                description: "Last resort option"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Safe Mode is useful for fixing serious problems.\n\nWindows troubleshooting tools can automatically fix many common issues."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is Safe Mode?",
        options: [
          "A faster version of Windows",
          "Windows starting with minimal programs and drivers",
          "A game mode",
          "A screen saver"
        ],
        correctAnswer: 1,
        explanation: "Safe Mode is a diagnostic mode where Windows starts with only essential system files, helping to troubleshoot problems."
      },
      {
        id: 2,
        question: "When should you use Safe Mode?",
        options: [
          "For gaming",
          "When computer won't start normally or has serious problems",
          "To browse the internet",
          "To watch videos"
        ],
        correctAnswer: 1,
        explanation: "Safe Mode should be used when the computer won't start normally, has malware, or needs to remove problematic programs."
      },
      {
        id: 3,
        question: "What does System Restore do?",
        options: [
          "Deletes all files",
          "Returns computer to a previous working state",
          "Installs new programs",
          "Changes passwords"
        ],
        correctAnswer: 1,
        explanation: "System Restore returns your computer to a previous point in time when it was working correctly, undoing recent changes."
      }
    ]
  },
  {
    id: 5,
    title: "System States: Sleep, Hibernate, Restart, Shutdown",
    description: "Understand different power states and when to use each",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Power Management',
          data: {
            text: "Windows offers different ways to turn off or pause your computer.\n\nEach state serves a different purpose.",
            audio: true,
            audioTitle: "System States Introduction"
          }
        },
        {
          type: 'card',
          title: 'System States',
          data: {
            cards: [
              {
                title: "😴 Sleep Mode",
                description: "Computer enters low-power state but stays on.\n\nSaves current work. Wakes up quickly. Uses small amount of power.",
                image: "sleep-mode.jpg",
                details: []
              },
              {
                title: "🐻 Hibernate",
                description: "Saves everything to disk and turns off completely.\n\nNo power used. Takes longer to wake. Resumes where you left off.",
                image: "hibernate-mode.jpg",
                details: []
              },
              {
                title: "🔄 Restart",
                description: "Shuts down and starts up again immediately.\n\nCloses all programs. Refreshes system. Fixes many issues.",
                image: "restart-system.jpg",
                details: []
              },
              {
                title: "⏻ Shutdown",
                description: "Completely turns off the computer.\n\nCloses all programs. Saves settings. No power used.",
                image: "shutdown-system.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'State Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: "Sleep",
                description: "Low power, quick wake",
                advantages: ["Fast resume", "Saves work"],
                limitations: ["Uses some power", "Can drain battery"]
              },
              {
                name: "Hibernate",
                description: "No power, slower wake",
                advantages: ["No power used", "Saves everything"],
                limitations: ["Slower to resume", "Takes disk space"]
              },
              {
                name: "Restart",
                description: "Full restart",
                advantages: ["Refreshes system", "Fixes issues"],
                limitations: ["Closes programs", "Takes time"]
              },
              {
                name: "Shutdown",
                description: "Complete power off",
                advantages: ["No power used", "Saves settings"],
                limitations: ["Must reopen programs", "Takes time to boot"]
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: System States Explained',
          data: {
            description: "Learn the differences between sleep, hibernate, restart, and shutdown."
          }
        },
        {
          type: 'flowchart',
          title: 'When to Use Each State',
          data: {
            steps: [
              {
                id: "short",
                label: "Short Break",
                description: "Use Sleep mode"
              },
              {
                id: "long",
                label: "Long Break",
                description: "Use Hibernate"
              },
              {
                id: "problem",
                label: "Having Problems",
                description: "Use Restart"
              },
              {
                id: "done",
                label: "Done for Day",
                description: "Use Shutdown"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Use Sleep for short breaks, Hibernate for longer breaks.\n\nRestart fixes problems. Shutdown when done for the day."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the main difference between Sleep and Hibernate?",
        options: [
          "Sleep uses no power, Hibernate uses power",
          "Sleep uses some power and wakes quickly, Hibernate uses no power and wakes slower",
          "They are the same",
          "Sleep is faster than Hibernate"
        ],
        correctAnswer: 1,
        explanation: "Sleep mode keeps the computer in a low-power state and wakes quickly, while Hibernate saves everything to disk, uses no power, but takes longer to resume."
      },
      {
        id: 2,
        question: "When should you use Restart?",
        options: [
          "Every hour",
          "When the computer has problems or needs refreshing",
          "Never",
          "Only on weekends"
        ],
        correctAnswer: 1,
        explanation: "Restart should be used when the computer has problems, needs refreshing, or after installing software updates."
      },
      {
        id: 3,
        question: "Which state uses no power at all?",
        options: [
          "Sleep",
          "Hibernate and Shutdown",
          "Restart",
          "All states use power"
        ],
        correctAnswer: 1,
        explanation: "Both Hibernate and Shutdown use no power - Hibernate saves state to disk, while Shutdown completely turns off the computer."
      }
    ]
  },
  {
    id: 6,
    title: "System Maintenance Basics",
    description: "Learn about disk cleanup, defragmentation, and hardware care",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Why Maintenance Matters',
          data: {
            text: "Regular maintenance keeps your computer running smoothly.\n\nIt improves performance and extends your computer's lifespan.",
            audio: true,
            audioTitle: "System Maintenance Introduction"
          }
        },
        {
          type: 'card',
          title: 'Disk Cleanup',
          data: {
            cards: [
              {
                title: "🧹 Disk Cleanup Tool",
                description: "Removes temporary files and unnecessary data.\n\nFrees up storage space. Improves system performance.",
                image: "disk-cleanup.jpg",
                details: []
              },
              {
                title: "🗑️ Temporary Files",
                description: "Files created by programs that are no longer needed.\n\nBrowser cache, temp files, recycle bin. Safe to delete.",
                image: "temp-files.jpg",
                details: []
              },
              {
                title: "📊 Cleanup Benefits",
                description: "More storage space and faster performance.\n\nRemoves clutter. Helps system run efficiently.",
                image: "cleanup-benefits.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Before and After Cleanup',
          data: {
            type: 'table',
            items: [
              {
                name: "Before Cleanup",
                status: "Cluttered system",
                performance: "Slow",
                storage: "Less space",
                errors: "More errors"
              },
              {
                name: "After Cleanup",
                status: "Optimized system",
                performance: "Faster",
                storage: "More space",
                errors: "Fewer errors"
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Disk Defragmentation',
          data: {
            cards: [
              {
                title: "🔧 What is Defragmentation?",
                description: "Reorganizes files on your hard drive for faster access.\n\nPuts file pieces together. Improves read/write speed.",
                image: "disk-defrag.jpg",
                details: []
              },
              {
                title: "⚡ When to Defragment",
                description: "For traditional hard drives (HDD), not SSDs.\n\nRun monthly or when system is slow. Takes time to complete.",
                image: "defrag-process.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: System Maintenance',
          data: {
            description: "Watch how to perform disk cleanup and defragmentation."
          }
        },
        {
          type: 'card',
          title: 'Hardware Maintenance',
          data: {
            cards: [
              {
                title: "💨 Ventilation",
                description: "Keep computer vents clean and unobstructed.\n\nPrevents overheating. Ensures proper airflow.",
                image: "computer-ventilation.jpg",
                details: []
              },
              {
                title: "🧽 Physical Cleaning",
                description: "Clean keyboard, mouse, and screen regularly.\n\nUse appropriate cleaning tools. Turn off before cleaning.",
                image: "hardware-cleaning.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Maintenance Schedule',
          data: {
            steps: [
              {
                id: "weekly",
                label: "Weekly Tasks",
                description: "Clean keyboard and screen, check for updates"
              },
              {
                id: "monthly",
                label: "Monthly Tasks",
                description: "Run disk cleanup, check storage space"
              },
              {
                id: "quarterly",
                label: "Quarterly Tasks",
                description: "Defragment HDD, deep clean hardware"
              },
              {
                id: "yearly",
                label: "Yearly Tasks",
                description: "Full system check, backup verification"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does disk cleanup do?",
        options: [
          "Increases storage",
          "Removes temporary files and frees up space",
          "Fixes hardware problems",
          "Installs new software"
        ],
        correctAnswer: 1,
        explanation: "Disk cleanup removes temporary files, cache, and unnecessary data to free up storage space and improve performance."
      },
      {
        id: 2,
        question: "What is disk defragmentation used for?",
        options: [
          "Removing viruses",
          "Reorganizing files for faster access",
          "Installing programs",
          "Changing passwords"
        ],
        correctAnswer: 1,
        explanation: "Disk defragmentation reorganizes fragmented files on a hard drive so they can be accessed more quickly."
      },
      {
        id: 3,
        question: "Why is proper ventilation important?",
        options: [
          "To save electricity",
          "To prevent overheating",
          "To increase storage",
          "To improve sound"
        ],
        correctAnswer: 1,
        explanation: "Proper ventilation prevents the computer from overheating, which can cause damage and slow performance."
      }
    ]
  }
];

// Module 10: Mobile & Smart Devices
export const module10Lessons: Lesson[] = [
  {
    id: 1,
    title: "Smartphones vs Computers",
    description: "Learn about hardware similarities, differences, and mobile operating systems",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding Mobile Devices',
          data: {
            text: "Smartphones are powerful computers that fit in your pocket.\n\nThey share many similarities with desktop computers but have key differences.",
            audio: true,
            audioTitle: "Mobile Devices Introduction"
          }
        },
        {
          type: 'card',
          title: 'Hardware Similarities',
          data: {
            cards: [
              {
                title: "🧠 Processor (CPU)",
                description: "Both have processors to run programs.\n\nMobile CPUs are smaller but powerful. Process data and run apps.",
                image: "mobile-cpu.jpg",
                details: []
              },
              {
                title: "💾 Memory (RAM)",
                description: "Both use RAM to store running programs.\n\nMobile devices have less RAM but optimized for efficiency.",
                image: "mobile-ram.jpg",
                details: []
              },
              {
                title: "📱 Storage",
                description: "Both store files and programs.\n\nMobile uses flash storage like SSDs. Can expand with memory cards.",
                image: "mobile-storage.jpg",
                details: []
              },
              {
                title: "🔋 Battery",
                description: "Mobile devices run on battery power.\n\nComputers usually plug into wall. Mobile needs charging.",
                image: "mobile-battery.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Smartphones vs Computers',
          data: {
            description: "See how smartphones compare to desktop computers."
          }
        },
        {
          type: 'comparison',
          title: 'Key Differences',
          data: {
            type: 'table',
            items: [
              {
                name: "Size",
                description: "Mobile: Small and portable",
                advantages: ["Portable", "Fits in pocket"],
                limitations: ["Smaller screen", "Less powerful"]
              },
              {
                name: "Power",
                description: "Computer: More powerful",
                advantages: ["Faster processing", "More RAM"],
                limitations: ["Not portable", "Needs power outlet"]
              },
              {
                name: "Input",
                description: "Mobile: Touch screen",
                advantages: ["Touch interface", "Portable"],
                limitations: ["Small keyboard", "Less precise"]
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Mobile Operating Systems',
          data: {
            text: "Mobile devices use different operating systems than computers.\n\nAndroid and iOS are the most common mobile operating systems."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is a key similarity between smartphones and computers?",
        options: [
          "They both have processors and memory",
          "They are the same size",
          "They use the same operating system",
          "They have the same power"
        ],
        correctAnswer: 0,
        explanation: "Both smartphones and computers have processors (CPU), memory (RAM), and storage, though they differ in size and power."
      },
      {
        id: 2,
        question: "What is a main difference between smartphones and computers?",
        options: [
          "Smartphones are portable and run on battery",
          "Computers are smaller",
          "Smartphones are more powerful",
          "Computers don't have storage"
        ],
        correctAnswer: 0,
        explanation: "Smartphones are portable devices that run on battery power, while desktop computers are larger and typically need to be plugged into a power outlet."
      },
      {
        id: 3,
        question: "What are the most common mobile operating systems?",
        options: [
          "Windows and macOS",
          "Android and iOS",
          "Linux only",
          "DOS"
        ],
        correctAnswer: 1,
        explanation: "Android and iOS are the two most common mobile operating systems used in smartphones and tablets."
      }
    ]
  },
  {
    id: 2,
    title: "Mobile Connectivity Options",
    description: "Learn about USB transfer, Bluetooth, hotspot, and tethering",
    duration: "15 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Connecting Mobile Devices',
          data: {
            text: "Mobile devices can connect to computers and other devices in several ways.\n\nEach method serves different purposes.",
            audio: true,
            audioTitle: "Mobile Connectivity Introduction"
          }
        },
        {
          type: 'card',
          title: 'USB Transfer',
          data: {
            cards: [
              {
                title: "🔌 USB Cable Connection",
                description: "Connect phone to computer with USB cable.\n\nTransfer files quickly. Charge phone. Access phone storage.",
                image: "usb-transfer-mobile.jpg",
                details: []
              },
              {
                title: "📁 File Transfer",
                description: "Move photos, videos, and documents.\n\nDrag and drop files. Works like external drive. Fast transfer speed.",
                image: "file-transfer-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Bluetooth Connection',
          data: {
            cards: [
              {
                title: "📶 Bluetooth Basics",
                description: "Wireless connection between devices.\n\nNo cables needed. Short range. Low power usage.",
                image: "bluetooth-mobile.jpg",
                details: []
              },
              {
                title: "🎧 Bluetooth Uses",
                description: "Connect headphones, speakers, keyboards.\n\nShare files between phones. Transfer contacts.",
                image: "bluetooth-uses-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Mobile Connectivity',
          data: {
            description: "Learn how to connect mobile devices using different methods."
          }
        },
        {
          type: 'card',
          title: 'Hotspot and Tethering',
          data: {
            cards: [
              {
                title: "📡 Mobile Hotspot",
                description: "Share phone's internet with other devices.\n\nCreates Wi-Fi network. Other devices connect wirelessly. Uses mobile data.",
                image: "mobile-hotspot.jpg",
                details: []
              },
              {
                title: "🔗 USB Tethering",
                description: "Share internet via USB cable.\n\nConnect phone to computer. Share mobile data. More stable than Wi-Fi.",
                image: "usb-tethering.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Connection Methods',
          data: {
            type: 'table',
            items: [
              {
                name: "USB",
                description: "Wired connection",
                advantages: ["Fast", "Charges device"],
                limitations: ["Needs cable", "Not wireless"]
              },
              {
                name: "Bluetooth",
                description: "Wireless, short range",
                advantages: ["No cable", "Low power"],
                limitations: ["Slow", "Short range"]
              },
              {
                name: "Hotspot",
                description: "Share internet",
                advantages: ["Wireless", "Multiple devices"],
                limitations: ["Uses data", "Drains battery"]
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is USB transfer used for?",
        options: [
          "Only charging",
          "Transferring files and charging the phone",
          "Making calls",
          "Playing games"
        ],
        correctAnswer: 1,
        explanation: "USB transfer allows you to transfer files between your phone and computer while also charging the phone."
      },
      {
        id: 2,
        question: "What is Bluetooth mainly used for?",
        options: [
          "Internet connection",
          "Wireless connection between devices for sharing files and connecting accessories",
          "Charging devices",
          "Making phone calls"
        ],
        correctAnswer: 1,
        explanation: "Bluetooth is a wireless technology used to connect devices like headphones, speakers, and share files between phones."
      },
      {
        id: 3,
        question: "What does mobile hotspot do?",
        options: [
          "Charges the phone",
          "Shares phone's internet connection with other devices",
          "Makes phone calls",
          "Plays music"
        ],
        correctAnswer: 1,
        explanation: "Mobile hotspot creates a Wi-Fi network from your phone's mobile data, allowing other devices to connect to the internet."
      }
    ]
  },
  {
    id: 3,
    title: "Mobile File Management",
    description: "Learn about file managers, organizing files, and mobile storage",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Managing Files on Mobile',
          data: {
            text: "Mobile devices have file managers to organize your files.\n\nSimilar to computer file explorer but designed for touch screens.",
            audio: true,
            audioTitle: "Mobile File Management Introduction"
          }
        },
        {
          type: 'card',
          title: 'File Manager Basics',
          data: {
            cards: [
              {
                title: "📁 File Manager App",
                description: "Built-in app to browse files on your phone.\n\nShows all folders and files. Similar to computer file explorer.",
                image: "mobile-file-manager.jpg",
                details: []
              },
              {
                title: "📂 Common Folders",
                description: "Downloads, Pictures, Documents, Music.\n\nOrganized by file type. Easy to find what you need.",
                image: "mobile-folders.jpg",
                details: []
              },
              {
                title: "🔍 Search Files",
                description: "Search for files by name.\n\nQuickly find specific files. Works across all folders.",
                image: "search-files-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'File Operations',
          data: {
            cards: [
              {
                title: "✂️ Copy and Move",
                description: "Copy or move files between folders.\n\nLong press file to select. Choose copy or move. Select destination.",
                image: "copy-move-mobile.jpg",
                details: []
              },
              {
                title: "🗑️ Delete Files",
                description: "Remove unwanted files to free space.\n\nSelect file and delete. Files go to trash. Can restore if needed.",
                image: "delete-files-mobile.jpg",
                details: []
              },
              {
                title: "📤 Share Files",
                description: "Share files via email, messaging, or cloud.\n\nSelect file and choose share option. Send to other devices.",
                image: "share-files-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Mobile File Management',
          data: {
            description: "See how to organize and manage files on your mobile device."
          }
        },
        {
          type: 'flowchart',
          title: 'File Management Process',
          data: {
            steps: [
              {
                id: "open",
                label: "Open File Manager",
                description: "Launch file manager app"
              },
              {
                id: "browse",
                label: "Browse Folders",
                description: "Navigate to find files"
              },
              {
                id: "select",
                label: "Select Files",
                description: "Long press to select"
              },
              {
                id: "action",
                label: "Perform Action",
                description: "Copy, move, delete, or share"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "File managers help organize your mobile files.\n\nKeep files organized in folders for easy access."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is a file manager on mobile devices?",
        options: [
          "A game app",
          "An app to browse and organize files on your phone",
          "A music player",
          "A camera app"
        ],
        correctAnswer: 1,
        explanation: "A file manager is an app that lets you browse, organize, and manage all the files stored on your mobile device."
      },
      {
        id: 2,
        question: "How do you select a file on a mobile device?",
        options: [
          "Double tap",
          "Long press on the file",
          "Shake the phone",
          "Turn it off"
        ],
        correctAnswer: 1,
        explanation: "On mobile devices, you typically long press (hold) on a file to select it for operations like copy, move, or delete."
      },
      {
        id: 3,
        question: "What can you do with files in a mobile file manager?",
        options: [
          "Only view them",
          "Copy, move, delete, and share files",
          "Make phone calls",
          "Play games"
        ],
        correctAnswer: 1,
        explanation: "Mobile file managers allow you to perform various operations like copying, moving, deleting, and sharing files."
      }
    ]
  },
  {
    id: 4,
    title: "Mobile Backups and Synchronization",
    description: "Learn how to backup mobile data and sync with cloud services",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Protecting Mobile Data',
          data: {
            text: "Backing up mobile data protects your important information.\n\nSync with cloud services to access files from anywhere.",
            audio: true,
            audioTitle: "Mobile Backup Introduction"
          }
        },
        {
          type: 'card',
          title: 'Backup Methods',
          data: {
            cards: [
              {
                title: "☁️ Cloud Backup",
                description: "Automatically backup to cloud storage.\n\niCloud for iPhone, Google Drive for Android. Access from any device.",
                image: "cloud-backup-mobile.jpg",
                details: []
              },
              {
                title: "💾 Computer Backup",
                description: "Backup phone to computer via USB.\n\nTransfer files manually. Store on computer hard drive. Full control.",
                image: "computer-backup-mobile.jpg",
                details: []
              },
              {
                title: "🔄 Automatic Sync",
                description: "Sync photos and files automatically.\n\nUploads to cloud when connected. Always up to date.",
                image: "auto-sync-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Backup Options',
          data: {
            type: 'table',
            items: [
              {
                name: "Cloud Backup",
                description: "Automatic, online",
                advantages: ["Automatic", "Access anywhere"],
                limitations: ["Uses internet", "May cost money"]
              },
              {
                name: "Computer Backup",
                description: "Manual, local",
                advantages: ["Full control", "No internet needed"],
                limitations: ["Manual process", "Needs USB cable"]
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Mobile Backups',
          data: {
            description: "Learn how to backup and sync your mobile device data."
          }
        },
        {
          type: 'card',
          title: 'What to Backup',
          data: {
            cards: [
              {
                title: "📸 Photos and Videos",
                description: "Most important files to backup.\n\nPrecious memories. Take up most space. Easy to lose.",
                image: "backup-photos-mobile.jpg",
                details: []
              },
              {
                title: "📞 Contacts",
                description: "Save your contact list.\n\nImportant phone numbers. Easy to restore if phone is lost.",
                image: "backup-contacts-mobile.jpg",
                details: []
              },
              {
                title: "📱 App Data",
                description: "Backup app settings and data.\n\nRestore apps after reset. Keep your preferences.",
                image: "backup-apps-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Backup Process',
          data: {
            steps: [
              {
                id: "choose",
                label: "Choose Backup Method",
                description: "Cloud or computer"
              },
              {
                id: "select",
                label: "Select Files",
                description: "Photos, contacts, apps"
              },
              {
                id: "backup",
                label: "Start Backup",
                description: "Begin backup process"
              },
              {
                id: "verify",
                label: "Verify Backup",
                description: "Check backup completed"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is cloud backup?",
        options: [
          "Backing up to a physical cloud",
          "Automatically backing up data to online storage services",
          "Deleting all files",
          "Making phone calls"
        ],
        correctAnswer: 1,
        explanation: "Cloud backup automatically saves your mobile device data to online storage services like iCloud or Google Drive."
      },
      {
        id: 2,
        question: "What should you backup from your mobile device?",
        options: [
          "Nothing",
          "Photos, videos, contacts, and app data",
          "Only games",
          "Only music"
        ],
        correctAnswer: 1,
        explanation: "You should backup important files like photos, videos, contacts, and app data to protect them from loss."
      },
      {
        id: 3,
        question: "What is the advantage of cloud backup?",
        options: [
          "It's slower",
          "You can access your files from anywhere with internet",
          "It costs more",
          "It's harder to use"
        ],
        correctAnswer: 1,
        explanation: "Cloud backup allows you to access your backed-up files from any device with internet connection, providing convenience and accessibility."
      }
    ]
  },
  {
    id: 5,
    title: "Mobile Device Settings and Maintenance",
    description: "Learn about mobile settings, storage management, and device care",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Managing Mobile Settings',
          data: {
            text: "Mobile devices have settings to customize and maintain your device.\n\nUnderstanding settings helps you use your device better.",
            audio: true,
            audioTitle: "Mobile Settings Introduction"
          }
        },
        {
          type: 'card',
          title: 'Important Settings',
          data: {
            cards: [
              {
                title: "🔔 Notifications",
                description: "Control which apps send notifications.\n\nReduce distractions. Save battery. Customize alerts.",
                image: "notification-settings-mobile.jpg",
                details: []
              },
              {
                title: "🔋 Battery Settings",
                description: "Monitor battery usage and optimize power.\n\nSee which apps use most battery. Enable power saving mode.",
                image: "battery-settings-mobile.jpg",
                details: []
              },
              {
                title: "💾 Storage Management",
                description: "Check storage space and clean up.\n\nSee what's using space. Delete unnecessary files. Free up storage.",
                image: "storage-settings-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Mobile Settings',
          data: {
            description: "Learn how to manage settings and maintain your mobile device."
          }
        },
        {
          type: 'card',
          title: 'Device Maintenance',
          data: {
            cards: [
              {
                title: "🧹 Clear Cache",
                description: "Remove temporary files from apps.\n\nFrees up storage. Improves performance. Safe to do.",
                image: "clear-cache-mobile.jpg",
                details: []
              },
              {
                title: "🔄 Update Apps",
                description: "Keep apps updated for best performance.\n\nGet new features. Fix bugs. Improve security.",
                image: "update-apps-mobile.jpg",
                details: []
              },
              {
                title: "🔒 Security Settings",
                description: "Set up screen lock and security.\n\nProtect your device. Use PIN, pattern, or fingerprint.",
                image: "security-settings-mobile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Maintenance Benefits',
          data: {
            type: 'table',
            items: [
              {
                name: "Before Maintenance",
                description: "Cluttered device",
                advantages: [],
                limitations: ["Slow performance", "Low storage", "Poor battery"]
              },
              {
                name: "After Maintenance",
                description: "Optimized device",
                advantages: ["Fast performance", "More storage", "Better battery"],
                limitations: []
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Regular maintenance keeps your mobile device running smoothly.\n\nCheck settings regularly and clean up storage when needed."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does clearing cache do?",
        options: [
          "Deletes all files",
          "Removes temporary files to free up storage and improve performance",
          "Breaks the phone",
          "Makes it slower"
        ],
        correctAnswer: 1,
        explanation: "Clearing cache removes temporary files stored by apps, which frees up storage space and can improve device performance."
      },
      {
        id: 2,
        question: "Why should you update apps regularly?",
        options: [
          "To make them slower",
          "To get new features, fix bugs, and improve security",
          "To delete them",
          "To use more storage"
        ],
        correctAnswer: 1,
        explanation: "Updating apps regularly provides new features, fixes bugs, and improves security by patching vulnerabilities."
      },
      {
        id: 3,
        question: "What is important for mobile device security?",
        options: [
          "Leaving it unlocked",
          "Setting up screen lock with PIN, pattern, or fingerprint",
          "Sharing passwords",
          "Never updating"
        ],
        correctAnswer: 1,
        explanation: "Setting up a screen lock (PIN, pattern, or fingerprint) is essential for protecting your mobile device from unauthorized access."
      }
    ]
  }
];

export const module6Lessons: Lesson[] = [
  {
    id: 1,
    title: "Desktop and Icons",
    description: "Learn about the desktop, icons, and how to organize your workspace",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding the Desktop',
          data: {
            text: "The desktop is the main screen you see when Windows starts.\n\nIt's your workspace where you can place shortcuts, files, and folders for easy access.",
            audio: true,
            audioTitle: "Desktop Introduction"
          }
        },
        {
          type: 'card',
          title: 'Desktop Elements',
          data: {
            cards: [
              {
                title: "🖼️ Desktop Background",
                description: "The image or color behind your icons.\n\nCan be customized with personal photos or themes. Right-click desktop → Personalize.",
                image: "desktop-background.jpg",
                details: []
              },
              {
                title: "📁 Icons",
                description: "Small pictures representing programs, files, or folders.\n\nDouble-click to open. Can be arranged and organized on desktop.",
                image: "desktop-icons.jpg",
                details: []
              },
              {
                title: "📊 Taskbar",
                description: "Bar at bottom of screen with open programs.\n\nShows running applications. Start button on left. System tray on right.",
                image: "taskbar.jpg",
                details: []
              },
              {
                title: "🗑️ Recycle Bin",
                description: "Icon for deleted files and folders.\n\nFiles go here when deleted. Can be restored or permanently deleted.",
                image: "recycle-bin.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Working with Icons',
          data: {
            cards: [
              {
                title: "👆 Selecting Icons",
                description: "Click once to select an icon.\n\nSelected icon is highlighted. Can select multiple with Ctrl+Click.",
                image: "select-icons.jpg",
                details: []
              },
              {
                title: "🚀 Opening Programs",
                description: "Double-click icon to open program.\n\nOr right-click and select 'Open'. Program window appears.",
                image: "open-programs.jpg",
                details: []
              },
              {
                title: "📦 Arranging Icons",
                description: "Right-click desktop → View → Auto arrange.\n\nIcons align automatically. Or drag to position manually.",
                image: "arrange-icons.jpg",
                details: []
              },
              {
                title: "✂️ Creating Shortcuts",
                description: "Right-click program → Send to → Desktop.\n\nCreates shortcut icon. Double-click to launch quickly.",
                image: "create-shortcuts.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Desktop Basics',
          data: {
            description: "Learn how to use and customize your desktop workspace."
          }
        },
        {
          type: 'flowchart',
          title: 'Desktop Navigation Flow',
          data: {
            steps: [
              {
                id: "start",
                label: "Start Windows",
                description: "Desktop appears automatically"
              },
              {
                id: "view",
                label: "View Desktop",
                description: "See icons, taskbar, background"
              },
              {
                id: "select",
                label: "Select Icon",
                description: "Double-click to launch"
              },
              {
                id: "open",
                label: "Open Program",
                description: "Program window opens"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Desktop is your main workspace with icons and shortcuts.\n\nOrganize icons for easy access to your favorite programs and files."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the desktop?",
        options: [
          "A type of computer",
          "The main screen you see when Windows starts",
          "A program",
          "A file"
        ],
        correctAnswer: 1,
        explanation: "The desktop is the main screen that appears when Windows starts, serving as your workspace with icons and shortcuts."
      },
      {
        id: 2,
        question: "How do you open a program from the desktop?",
        options: [
          "Single click",
          "Double-click the icon",
          "Right-click only",
          "Press Enter"
        ],
        correctAnswer: 1,
        explanation: "Double-clicking an icon on the desktop opens the program or file it represents."
      },
      {
        id: 3,
        question: "What happens to files when you delete them?",
        options: [
          "They disappear forever",
          "They go to the Recycle Bin",
          "They move to desktop",
          "They are copied"
        ],
        correctAnswer: 1,
        explanation: "Deleted files go to the Recycle Bin, where they can be restored or permanently deleted."
      }
    ]
  },
  {
    id: 2,
    title: "Basic File Operations",
    description: "Learn to create, delete, copy, move, rename files and use Recycle Bin",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'File Operations Basics',
          data: {
            text: "File operations help you manage your documents and folders.\n\nLearn to create, organize, copy, move, and delete files efficiently.",
            audio: true,
            audioTitle: "File Operations Introduction"
          }
        },
        {
          type: 'card',
          title: 'Creating Files and Folders',
          data: {
            cards: [
              {
                title: "📄 Create New File",
                description: "Right-click in folder → New → File type.\n\nChoose document, text file, or other. Name the file.",
                image: "create-file.jpg",
                details: []
              },
              {
                title: "📁 Create Folder",
                description: "Right-click → New → Folder.\n\nName the folder. Organize files inside.",
                image: "create-folder.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Copy, Move, and Rename',
          data: {
            cards: [
              {
                title: "📋 Copy Files",
                description: "Select file → Ctrl+C to copy.\n\nThen Ctrl+V to paste. Creates duplicate in new location.",
                image: "copy-files.jpg",
                details: []
              },
              {
                title: "✂️ Move Files",
                description: "Select file → Ctrl+X to cut.\n\nThen Ctrl+V to paste. Moves file to new location.",
                image: "move-files.jpg",
                details: []
              },
              {
                title: "✏️ Rename Files",
                description: "Right-click file → Rename.\n\nOr press F2. Type new name. Press Enter.",
                image: "rename-files.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Delete and Recycle Bin',
          data: {
            cards: [
              {
                title: "🗑️ Delete Files",
                description: "Select file → Press Delete key.\n\nOr right-click → Delete. File goes to Recycle Bin.",
                image: "delete-files.jpg",
                details: []
              },
              {
                title: "♻️ Restore Files",
                description: "Open Recycle Bin → Right-click file → Restore.\n\nFile returns to original location.",
                image: "restore-files.jpg",
                details: []
              },
              {
                title: "🗑️ Empty Recycle Bin",
                description: "Right-click Recycle Bin → Empty Recycle Bin.\n\nPermanently deletes all files. Cannot be undone.",
                image: "empty-recycle-bin.jpg",
                details: []
              },
              {
                title: "⚠️ Permanent Delete",
                description: "Press Shift+Delete to skip Recycle Bin.\n\nFile deleted immediately. Cannot be restored. Use carefully.",
                image: "permanent-delete.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Search Features',
          data: {
            cards: [
              {
                title: "🔍 Quick Search",
                description: "Type in search box to find files.\n\nSearches current folder. Shows results instantly. Fast and simple.",
                image: "quick-search.jpg",
                details: []
              },
              {
                title: "📋 File Name, Type, Date Filters",
                description: "Filter search by file properties.\n\nSearch by name, file type (.txt, .jpg), or date modified. Narrow results.",
                image: "search-filters.jpg",
                details: []
              },
              {
                title: "🔎 Advanced Search",
                description: "Use search options for detailed search.\n\nSearch by size, date range, content. More precise results.",
                image: "advanced-search.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: File Operations',
          data: {
            description: "Watch how to perform basic file operations in Windows."
          }
        },
        {
          type: 'flowchart',
          title: 'File Operation Process',
          data: {
            steps: [
              {
                id: "select",
                label: "Select File",
                description: "Click once to select"
              },
              {
                id: "choose",
                label: "Choose Operation",
                description: "Copy, move, rename, or delete"
              },
              {
                id: "execute",
                label: "Execute Action",
                description: "Use keyboard shortcut or menu"
              },
              {
                id: "confirm",
                label: "Confirm Result",
                description: "Check file location or Recycle Bin"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Master file operations to organize your work.\n\nDeleted files go to Recycle Bin and can be restored if needed."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What keyboard shortcut copies a file?",
        options: [
          "Ctrl+X",
          "Ctrl+C",
          "Ctrl+V",
          "Ctrl+Z"
        ],
        correctAnswer: 1,
        explanation: "Ctrl+C copies the selected file, which can then be pasted elsewhere with Ctrl+V."
      },
      {
        id: 2,
        question: "Where do deleted files go?",
        options: [
          "They disappear forever",
          "Recycle Bin",
          "Desktop",
          "Downloads folder"
        ],
        correctAnswer: 1,
        explanation: "Deleted files go to the Recycle Bin, where they can be restored or permanently deleted."
      },
      {
        id: 3,
        question: "How do you rename a file?",
        options: [
          "Double-click the name",
          "Right-click → Rename or press F2",
          "Delete and create new",
          "Copy the file"
        ],
        correctAnswer: 1,
        explanation: "You can rename a file by right-clicking and selecting Rename, or by selecting it and pressing F2."
      }
    ]
  },
  {
    id: 3,
    title: "Keyboard Basics",
    description: "Learn function keys, keyboard shortcuts, and typing basics",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Keyboard Fundamentals',
          data: {
            text: "The keyboard is your main input device.\n\nLearn function keys, shortcuts, and typing techniques to work faster.",
            audio: true,
            audioTitle: "Keyboard Basics Introduction"
          }
        },
        {
          type: 'card',
          title: 'Function Keys (F1-F12)',
          data: {
            cards: [
              {
                title: "F1 - Help",
                description: "Opens help menu in most programs.\n\nPress F1 to get assistance and instructions.",
                image: "f1-help.jpg",
                details: []
              },
              {
                title: "F2 - Rename",
                description: "Quickly rename selected file or folder.\n\nSelect item and press F2 to edit name.",
                image: "f2-rename.jpg",
                details: []
              },
              {
                title: "F5 - Refresh",
                description: "Refreshes current window or webpage.\n\nUpdates content to show latest changes.",
                image: "f5-refresh.jpg",
                details: []
              },
              {
                title: "F11 - Full Screen",
                description: "Toggles full screen mode in browsers.\n\nPress again to exit full screen.",
                image: "f11-fullscreen.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Essential Shortcuts',
          data: {
            cards: [
              {
                title: "Ctrl+C / Ctrl+V",
                description: "Copy and paste.\n\nSelect text → Ctrl+C to copy, Ctrl+V to paste.",
                image: "copy-paste.jpg",
                details: []
              },
              {
                title: "Ctrl+X / Ctrl+V",
                description: "Cut and paste.\n\nSelect item → Ctrl+X to cut, Ctrl+V to paste elsewhere.",
                image: "cut-paste.jpg",
                details: []
              },
              {
                title: "Ctrl+Z / Ctrl+Y",
                description: "Undo and redo.\n\nCtrl+Z undoes last action. Ctrl+Y redoes it.",
                image: "undo-redo.jpg",
                details: []
              },
              {
                title: "Ctrl+A",
                description: "Select all items.\n\nSelects everything in current window or document.",
                image: "ctrl-a.jpg",
                details: []
              },
              {
                title: "Ctrl+S",
                description: "Save current document.\n\nSaves your work. Use frequently to avoid losing data.",
                image: "ctrl-s.jpg",
                details: []
              },
              {
                title: "Alt+Tab",
                description: "Switch between open programs.\n\nHold Alt and press Tab to cycle through windows.",
                image: "alt-tab.jpg",
                details: []
              },
              {
                title: "Win+E",
                description: "Open File Explorer.\n\nQuick access to files and folders. Windows key + E.",
                image: "win-e.jpg",
                details: []
              },
              {
                title: "Win+L",
                description: "Lock computer screen.\n\nLocks Windows quickly. Requires password to unlock.",
                image: "win-l.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Typing Practice',
          data: {
            cards: [
              {
                title: "⌨️ Home-Row Technique",
                description: "Place fingers on ASDF and JKL; keys.\n\nKeep fingers on home row. Return after each key. Builds muscle memory.",
                image: "home-row.jpg",
                details: []
              },
              {
                title: "⚡ Accuracy vs Speed",
                description: "Focus on accuracy first, then speed.\n\nCorrect typing is more important than fast typing. Speed comes with practice.",
                image: "accuracy-speed.jpg",
                details: []
              },
              {
                title: "🔤 Common Symbols",
                description: "Learn to type symbols quickly.\n\nPractice @, #, $, %, &, *, (, ), etc. Use Shift key for uppercase and symbols.",
                image: "common-symbols.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Keyboard Shortcuts',
          data: {
            description: "Learn essential keyboard shortcuts to work faster."
          }
        },
        {
          type: 'comparison',
          title: 'Shortcut Benefits',
          data: {
            type: 'table',
            items: [
              {
                name: "With Shortcuts",
                speed: "Fast",
                efficiency: "High",
                workflow: "Professional"
              },
              {
                name: "Without Shortcuts",
                speed: "Slower",
                efficiency: "Lower",
                workflow: "Basic"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Function keys provide quick actions. Keyboard shortcuts save time.\n\nPractice typing regularly to improve speed and accuracy."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does F2 do?",
        options: [
          "Opens help",
          "Renames selected file",
          "Refreshes page",
          "Saves document"
        ],
        correctAnswer: 1,
        explanation: "F2 is used to quickly rename a selected file or folder."
      },
      {
        id: 2,
        question: "What is the shortcut to copy?",
        options: [
          "Ctrl+X",
          "Ctrl+C",
          "Ctrl+V",
          "Ctrl+Z"
        ],
        correctAnswer: 1,
        explanation: "Ctrl+C is the keyboard shortcut to copy selected text or files."
      },
      {
        id: 3,
        question: "How do you switch between open programs?",
        options: [
          "Ctrl+Tab",
          "Alt+Tab",
          "Shift+Tab",
          "Windows+Tab"
        ],
        correctAnswer: 1,
        explanation: "Alt+Tab allows you to quickly switch between open programs and windows."
      }
    ]
  },
  {
    id: 4,
    title: "Mouse Operations",
    description: "Learn click, double-click, right-click, drag & drop, and mouse settings",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Mouse Basics',
          data: {
            text: "The mouse helps you interact with your computer.\n\nMaster different click types and mouse operations for efficient navigation.",
            audio: true,
            audioTitle: "Mouse Operations Introduction"
          }
        },
        {
          type: 'card',
          title: 'Click Types',
          data: {
            cards: [
              {
                title: "👆 Single Click",
                description: "Press left button once.\n\nSelects items. Opens menus. Activates buttons.",
                image: "single-click.jpg",
                details: []
              },
              {
                title: "👆👆 Double-Click",
                description: "Press left button twice quickly.\n\nOpens files and programs. Launches applications.",
                image: "double-click.jpg",
                details: []
              },
              {
                title: "👉 Right-Click",
                description: "Press right button once.\n\nOpens context menu. Shows options for selected item.",
                image: "right-click.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Drag and Drop',
          data: {
            cards: [
              {
                title: "🖱️ Drag Files",
                description: "Click and hold file, move mouse.\n\nDrags file to new location. Releases when you let go.",
                image: "drag-files.jpg",
                details: []
              },
              {
                title: "📦 Drop Files",
                description: "Release mouse button over target.\n\nDrops file in new location. Moves or copies file.",
                image: "drop-files.jpg",
                details: []
              },
              {
                title: "📋 Select Ranges",
                description: "Click first item, Shift+Click last item.\n\nSelects range of files. Or Ctrl+Click to select individual items.",
                image: "select-ranges.jpg",
                details: []
              },
              {
                title: "📦 Create Shortcuts",
                description: "Drag file while holding Alt key.\n\nCreates shortcut at drop location. Original file stays in place.",
                image: "create-shortcuts-drag.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Mouse Settings',
          data: {
            cards: [
              {
                title: "⚙️ Adjust Speed",
                description: "Settings → Devices → Mouse.\n\nChange pointer speed. Test until comfortable.",
                image: "mouse-speed.jpg",
                details: []
              },
              {
                title: "🖱️ Button Configuration",
                description: "Swap left and right buttons if needed.\n\nUseful for left-handed users.",
                image: "mouse-buttons.jpg",
                details: []
              },
              {
                title: "👆 Double-Click Speed",
                description: "Adjust how fast you need to double-click.\n\nSlower for beginners, faster for experienced users.",
                image: "double-click-speed.jpg",
                details: []
              },
              {
                title: "🖱️ Scroll Behavior",
                description: "Configure scroll wheel settings.\n\nAdjust scroll speed. Choose lines per scroll. Reverse scroll direction if needed.",
                image: "scroll-behavior.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Mouse Operations',
          data: {
            description: "Learn how to use the mouse effectively for navigation."
          }
        },
        {
          type: 'flowchart',
          title: 'Mouse Operation Flow',
          data: {
            steps: [
              {
                id: "position",
                label: "Position Cursor",
                description: "Move mouse to target"
              },
              {
                id: "click",
                label: "Choose Click Type",
                description: "Single, double, or right-click"
              },
              {
                id: "action",
                label: "Execute Action",
                description: "Select, open, or show menu"
              },
              {
                id: "result",
                label: "View Result",
                description: "Item selected or opened"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Master mouse operations for smooth navigation.\n\nAdjust mouse settings to match your comfort and needs."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does double-click do?",
        options: [
          "Selects an item",
          "Opens files and programs",
          "Shows menu",
          "Deletes files"
        ],
        correctAnswer: 1,
        explanation: "Double-clicking opens files and programs, or launches applications."
      },
      {
        id: 2,
        question: "What is drag and drop used for?",
        options: [
          "Selecting text",
          "Moving or copying files",
          "Opening programs",
          "Typing text"
        ],
        correctAnswer: 1,
        explanation: "Drag and drop is used to move or copy files to different locations."
      },
      {
        id: 3,
        question: "Where do you adjust mouse speed?",
        options: [
          "Desktop settings",
          "Settings → Devices → Mouse",
          "Control Panel only",
          "Cannot be changed"
        ],
        correctAnswer: 1,
        explanation: "Mouse speed can be adjusted in Settings → Devices → Mouse."
      }
    ]
  },
  {
    id: 5,
    title: "Display & Accessibility Settings",
    description: "Learn to adjust resolution, brightness, font size, and accessibility options",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Display Settings',
          data: {
            text: "Customize your screen for comfort and clarity.\n\nAdjust resolution, brightness, and text size to suit your needs.",
            audio: true,
            audioTitle: "Display Settings Introduction"
          }
        },
        {
          type: 'card',
          title: 'Screen Resolution',
          data: {
            cards: [
              {
                title: "📐 Resolution Settings",
                description: "Settings → System → Display.\n\nChoose resolution. Higher = sharper but smaller text.",
                image: "screen-resolution.jpg",
                details: []
              },
              {
                title: "🖥️ Recommended Resolution",
                description: "Use recommended resolution for best quality.\n\nMatches your monitor's native resolution.",
                image: "recommended-resolution.jpg",
                details: []
              },
              {
                title: "📏 Text Size",
                description: "Adjust text size for readability.\n\nSettings → Ease of Access → Display. Increase text size.",
                image: "text-size.jpg",
                details: []
              },
              {
                title: "🔍 Display Scaling",
                description: "Scale everything larger or smaller.\n\nSettings → System → Display → Scale. Makes UI elements bigger.",
                image: "display-scaling.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Brightness and Color',
          data: {
            cards: [
              {
                title: "💡 Adjust Brightness",
                description: "Settings → System → Display → Brightness.\n\nUse slider to increase or decrease. Reduce for eye comfort.",
                image: "brightness-settings.jpg",
                details: []
              },
              {
                title: "🎨 Night Light",
                description: "Reduces blue light in evening.\n\nEasier on eyes. Can schedule automatically.",
                image: "night-light.jpg",
                details: []
              },
              {
                title: "🎨 Color Profile Basics",
                description: "Adjust color settings for accuracy.\n\nSettings → System → Display → Advanced. Calibrate colors.",
                image: "color-profile.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Text and Font Size',
          data: {
            cards: [
              {
                title: "🔤 Scale Text",
                description: "Settings → System → Display → Scale.\n\nMake text larger or smaller. 100% to 200%.",
                image: "text-scale.jpg",
                details: []
              },
              {
                title: "👁️ High Contrast",
                description: "Settings → Ease of Access → High Contrast.\n\nMakes text easier to read. Better visibility.",
                image: "high-contrast.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Accessibility Features',
          data: {
            cards: [
              {
                title: "🔊 Narrator",
                description: "Reads screen text aloud.\n\nHelps visually impaired users. Press Windows+Ctrl+Enter.",
                image: "narrator.jpg",
                details: []
              },
              {
                title: "⌨️ On-Screen Keyboard",
                description: "Virtual keyboard on screen.\n\nUseful if physical keyboard unavailable. Settings → Ease of Access.",
                image: "on-screen-keyboard.jpg",
                details: []
              },
              {
                title: "🖱️ Mouse Keys",
                description: "Control mouse with keyboard.\n\nUse number pad to move cursor. Accessibility option.",
                image: "mouse-keys.jpg",
                details: []
              },
              {
                title: "🔍 Magnifier Tool",
                description: "Zoom in on screen areas.\n\nPress Windows + Plus to zoom. Helps see small text.",
                image: "magnifier.jpg",
                details: []
              },
              {
                title: "⌨️ Sticky Keys",
                description: "Press keys one at a time for shortcuts.\n\nEnable in Ease of Access. Useful for Ctrl/Alt/Shift combinations.",
                image: "sticky-keys.jpg",
                details: []
              },
              {
                title: "⌨️ Filter Keys",
                description: "Ignore brief or repeated keystrokes.\n\nReduces accidental key presses. Helps with motor difficulties.",
                image: "filter-keys.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Display Settings',
          data: {
            description: "Learn how to customize your display and accessibility settings."
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Customize display for comfort and productivity.\n\nAccessibility features help everyone use computers effectively."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "Where do you adjust screen brightness?",
        options: [
          "Desktop right-click",
          "Settings → System → Display",
          "Control Panel only",
          "Cannot be changed"
        ],
        correctAnswer: 1,
        explanation: "Screen brightness can be adjusted in Settings → System → Display → Brightness."
      },
      {
        id: 2,
        question: "What does Night Light do?",
        options: [
          "Increases brightness",
          "Reduces blue light in evening",
          "Changes resolution",
          "Turns off monitor"
        ],
        correctAnswer: 1,
        explanation: "Night Light reduces blue light emission in the evening to make the screen easier on your eyes."
      },
      {
        id: 3,
        question: "How do you make text larger?",
        options: [
          "Change resolution",
          "Settings → Display → Scale",
          "Use zoom in browser",
          "Cannot be changed"
        ],
        correctAnswer: 1,
        explanation: "Text size can be increased using Settings → System → Display → Scale, which adjusts the overall scale of text and UI elements."
      }
    ]
  },
  {
    id: 6,
    title: "File Extensions",
    description: "Understand file types: .txt, .jpg, .exe, .pdf and how to work with them",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding File Extensions',
          data: {
            text: "File extensions tell you what type of file it is.\n\nThey help Windows know which program to use for opening files.",
            audio: true,
            audioTitle: "File Extensions Introduction"
          }
        },
        {
          type: 'card',
          title: 'Common File Types',
          data: {
            cards: [
              {
                title: "📄 .txt - Text Files",
                description: "Plain text documents.\n\nOpens in Notepad. Simple text without formatting.",
                image: "txt-file.jpg",
                details: []
              },
              {
                title: "📷 .jpg / .png - Images",
                description: "Photo and image files.\n\n.jpg for photos. .png for graphics with transparency.",
                image: "image-files.jpg",
                details: []
              },
              {
                title: "📄 .pdf - PDF Documents",
                description: "Portable document format.\n\nOpens in PDF reader. Preserves formatting.",
                image: "pdf-file.jpg",
                details: []
              },
              {
                title: "🎬 .mp4 / .avi - Videos",
                description: "Video files.\n\n.mp4 is common. Opens in media player or browser.",
                image: "video-files.jpg",
                details: []
              },
              {
                title: "🔧 .exe - Executable",
                description: "Program installation files.\n\nRuns programs. Double-click to install or run.",
                image: "exe-file.jpg",
                details: []
              },
              {
                title: "📊 .xlsx / .docx - Office Files",
                description: "Microsoft Office documents.\n\n.xlsx for spreadsheets. .docx for Word documents.",
                image: "office-files.jpg",
                details: []
              },
              {
                title: "🎵 .mp3 - Audio Files",
                description: "Music and audio files.\n\nCommon audio format. Opens in media player.",
                image: "mp3-file.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Viewing File Extensions',
          data: {
            cards: [
              {
                title: "👁️ Show Extensions",
                description: "File Explorer → View tab → File name extensions.\n\nCheck box to see extensions for all files.",
                image: "show-extensions.jpg",
                details: []
              },
              {
                title: "🔍 File Icons",
                description: "Different icons for different file types.\n\nWindows shows appropriate icon based on extension.",
                image: "file-icons.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Changing File Associations',
          data: {
            cards: [
              {
                title: "🔗 Default Programs",
                description: "Settings → Apps → Default apps.\n\nChoose which program opens each file type.",
                image: "default-programs.jpg",
                details: []
              },
              {
                title: "📂 Open With",
                description: "Right-click file → Open with.\n\nChoose different program to open file once or always.",
                image: "open-with.jpg",
                details: []
              },
              {
                title: "⚙️ Changing Associations",
                description: "Set default app for file types.\n\nSettings → Apps → Default apps → Choose defaults by file type.",
                image: "change-associations.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Visibility & Safety',
          data: {
            cards: [
              {
                title: "👁️ Show/Hide Extensions",
                description: "File Explorer → View → File name extensions.\n\nToggle to show or hide extensions. Helpful for identification.",
                image: "show-hide-extensions.jpg",
                details: []
              },
              {
                title: "⚠️ Avoid Renaming Extensions",
                description: "Don't change file extensions manually.\n\nChanging .txt to .exe won't work. Can break files.",
                image: "avoid-rename-extensions.jpg",
                details: []
              },
              {
                title: "🔍 Identifying Executable Files",
                description: "Recognize .exe, .msi, .bat files.\n\nThese run programs. Only open from trusted sources.",
                image: "identify-executables.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: File Extensions',
          data: {
            description: "Learn about different file types and how to work with them."
          }
        },
        {
          type: 'comparison',
          title: 'File Type Comparison',
          data: {
            type: 'table',
            items: [
              {
                name: ".txt",
                type: "Text file",
                size: "Small",
                use: "Simple documents"
              },
              {
                name: ".pdf",
                type: "Document",
                size: "Medium",
                use: "Formatted documents"
              },
              {
                name: ".jpg",
                type: "Image",
                size: "Varies",
                use: "Photos and images"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "File extensions identify file types.\n\nWindows uses extensions to choose the right program to open files."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does .txt file extension mean?",
        options: [
          "Text document",
          "Image file",
          "Video file",
          "Program file"
        ],
        correctAnswer: 0,
        explanation: ".txt is a text file extension, indicating a plain text document that opens in Notepad."
      },
      {
        id: 2,
        question: "What is a .pdf file?",
        options: [
          "Image file",
          "Portable document format",
          "Video file",
          "Program file"
        ],
        correctAnswer: 1,
        explanation: ".pdf stands for Portable Document Format, a file type that preserves document formatting."
      },
      {
        id: 3,
        question: "How do you see file extensions in File Explorer?",
        options: [
          "They're always visible",
          "View tab → File name extensions",
          "Cannot be shown",
          "Right-click only"
        ],
        correctAnswer: 1,
        explanation: "To see file extensions, go to File Explorer → View tab → check 'File name extensions'."
      }
    ]
  },
  {
    id: 7,
    title: "Basic System Interactions",
    description: "Learn about notifications, Action Center, Settings app, Control Panel, and user accounts",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'System Interactions Overview',
          data: {
            text: "Windows provides various ways to interact with your system.\n\nLearn about notifications, settings, and user account management.",
            audio: true,
            audioTitle: "System Interactions Introduction"
          }
        },
        {
          type: 'card',
          title: 'Notifications & Action Center',
          data: {
            cards: [
              {
                title: "🔔 Notifications",
                description: "Alerts from apps and system.\n\nAppear in bottom-right corner. Click to view details.",
                image: "notifications.jpg",
                details: []
              },
              {
                title: "⚡ Quick Settings",
                description: "Access from Action Center.\n\nWi-Fi, Bluetooth, brightness, airplane mode. Quick toggles.",
                image: "quick-settings.jpg",
                details: []
              },
              {
                title: "🔕 Focus Assist",
                description: "Reduce distractions from notifications.\n\nSettings → System → Focus assist. Choose when to receive alerts.",
                image: "focus-assist.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Settings vs Control Panel',
          data: {
            cards: [
              {
                title: "⚙️ Modern Settings App",
                description: "New Windows settings interface.\n\nSettings → Start menu. Organized by categories. User-friendly design.",
                image: "settings-app.jpg",
                details: []
              },
              {
                title: "🖥️ Legacy Control Panel",
                description: "Classic Windows control panel.\n\nSearch 'Control Panel' in Start menu. Advanced system settings.",
                image: "control-panel.jpg",
                details: []
              },
              {
                title: "🔄 When to Use Each",
                description: "Settings for common tasks. Control Panel for advanced.\n\nMost users use Settings. Control Panel for power users.",
                image: "settings-vs-control.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'User Accounts',
          data: {
            cards: [
              {
                title: "👤 Sign-In Methods",
                description: "Password, PIN, picture password, Windows Hello.\n\nSettings → Accounts → Sign-in options. Choose secure method.",
                image: "sign-in-methods.jpg",
                details: []
              },
              {
                title: "🔒 Lock Screen",
                description: "Press Win+L to lock computer.\n\nRequires password to unlock. Protects your work.",
                image: "lock-screen.jpg",
                details: []
              },
              {
                title: "🚪 Log Off",
                description: "Start menu → User icon → Sign out.\n\nCloses all programs. Returns to sign-in screen.",
                image: "log-off.jpg",
                details: []
              },
              {
                title: "👥 Switch Users",
                description: "Start menu → User icon → Switch account.\n\nSwitch between user accounts without logging off.",
                image: "switch-users.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: System Interactions',
          data: {
            description: "Learn how to interact with Windows system features and settings."
          }
        },
        {
          type: 'flowchart',
          title: 'System Interaction Flow',
          data: {
            steps: [
              {
                id: "start",
                label: "Start Windows",
                description: "Sign in to your account"
              },
              {
                id: "work",
                label: "Work on Computer",
                description: "Use apps and programs"
              },
              {
                id: "notify",
                label: "Receive Notifications",
                description: "View alerts and updates"
              },
              {
                id: "settings",
                label: "Adjust Settings",
                description: "Customize as needed"
              },
              {
                id: "lock",
                label: "Lock or Log Off",
                description: "Secure your computer"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Notifications keep you informed. Settings app is modern and easy.\n\nLock your computer when away. Use user accounts for security."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "How do you access Quick Settings?",
        options: [
          "Control Panel",
          "Action Center",
          "Desktop",
          "Taskbar only"
        ],
        correctAnswer: 1,
        explanation: "Quick Settings can be accessed from the Action Center, which provides quick toggles for Wi-Fi, Bluetooth, brightness, and more."
      },
      {
        id: 2,
        question: "What is the difference between Settings app and Control Panel?",
        options: [
          "They are the same",
          "Settings is modern and user-friendly, Control Panel is legacy for advanced settings",
          "Control Panel is newer",
          "Settings doesn't exist"
        ],
        correctAnswer: 1,
        explanation: "The Settings app is the modern, user-friendly interface for common tasks, while Control Panel is the legacy interface for advanced system settings."
      },
      {
        id: 3,
        question: "How do you lock your computer quickly?",
        options: [
          "Shut down",
          "Press Win+L",
          "Close all windows",
          "Unplug monitor"
        ],
        correctAnswer: 1,
        explanation: "Pressing Windows key + L quickly locks your computer, requiring a password to unlock and protecting your work."
      }
    ]
  }
];

// Module 11: Digital Literacy
// TODO: Assistant will create this module (6 lessons)
export const module11Lessons: Lesson[] = [
  {
    id: 1,
    title: "Online Forms & Accounts",
    description: "Learn about filling forms, OTP verification, and downloads",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Working with Online Forms',
          data: {
            text: "Online forms are used to create accounts and submit information.\n\nUnderstanding how to fill them correctly is essential for digital literacy.",
            audio: true,
            audioTitle: "Online Forms Introduction"
          }
        },
        {
          type: 'card',
          title: 'Filling Forms',
          data: {
            cards: [
              {
                title: "📝 Form Fields",
                description: "Forms have fields for name, email, password, and more.\n\nFill required fields marked with asterisk (*). Double-check information before submitting.",
                image: "form-fields.jpg",
                details: []
              },
              {
                title: "✅ Form Validation",
                description: "Forms check if information is correct.\n\nShows errors if fields are empty or invalid. Fix errors before submitting.",
                image: "form-validation.jpg",
                details: []
              },
              {
                title: "💾 Saving Forms",
                description: "Some forms can be saved and completed later.\n\nUse 'Save Draft' option if available. Return to complete later.",
                image: "save-form.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Online Forms',
          data: {
            description: "Learn how to fill online forms correctly and securely."
          }
        },
        {
          type: 'card',
          title: 'OTP Verification',
          data: {
            cards: [
              {
                title: "🔐 What is OTP?",
                description: "One-Time Password sent to your phone or email.\n\nUsed to verify your identity. Enter code to complete registration.",
                image: "otp-verification.jpg",
                details: []
              },
              {
                title: "📱 Receiving OTP",
                description: "OTP arrives via SMS or email.\n\nCheck your phone or email inbox. Code expires quickly.",
                image: "receive-otp.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Downloads',
          data: {
            cards: [
              {
                title: "⬇️ Downloading Files",
                description: "Save files from internet to your computer.\n\nClick download link. Choose save location. Wait for download to complete.",
                image: "download-files.jpg",
                details: []
              },
              {
                title: "📁 Download Location",
                description: "Files usually download to Downloads folder.\n\nCheck browser settings to change location. Organize downloads regularly.",
                image: "download-location.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Fill forms carefully and verify information before submitting.\n\nUse OTP to secure your accounts. Organize downloaded files regularly."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does OTP stand for?",
        options: [
          "One-Time Password",
          "Online Transfer Protocol",
          "Official Time Period",
          "Open Text Program"
        ],
        correctAnswer: 0,
        explanation: "OTP stands for One-Time Password, a security code sent to verify your identity when creating accounts."
      },
      {
        id: 2,
        question: "What should you do before submitting an online form?",
        options: [
          "Submit immediately",
          "Double-check all information",
          "Skip required fields",
          "Leave it incomplete"
        ],
        correctAnswer: 1,
        explanation: "Always double-check all information in online forms before submitting to ensure accuracy and avoid errors."
      },
      {
        id: 3,
        question: "Where do downloaded files usually go?",
        options: [
          "Desktop",
          "Downloads folder",
          "Documents",
          "Nowhere"
        ],
        correctAnswer: 1,
        explanation: "Downloaded files are typically saved to the Downloads folder, though you can change this location in browser settings."
      }
    ]
  },
  {
    id: 2,
    title: "Email Basics",
    description: "Learn about sending emails, attaching files, and email etiquette",
    duration: "14 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Understanding Email',
          data: {
            text: "Email is a way to send messages and files over the internet.\n\nIt's fast, convenient, and widely used for communication.",
            audio: true,
            audioTitle: "Email Basics Introduction"
          }
        },
        {
          type: 'card',
          title: 'Sending Emails',
          data: {
            cards: [
              {
                title: "✉️ Email Address",
                description: "Unique address like name@example.com.\n\nRecipient's email address goes in 'To' field. Required to send email.",
                image: "email-address.jpg",
                details: []
              },
              {
                title: "📧 Email Components",
                description: "Subject line, body text, and signature.\n\nSubject describes email content. Body contains your message.",
                image: "email-components.jpg",
                details: []
              },
              {
                title: "📤 Sending Process",
                description: "Click 'Send' button to deliver email.\n\nEmail arrives in recipient's inbox. Can take seconds to minutes.",
                image: "send-email.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Email Basics',
          data: {
            description: "Learn how to compose and send emails effectively."
          }
        },
        {
          type: 'card',
          title: 'Attaching Files',
          data: {
            cards: [
              {
                title: "📎 File Attachments",
                description: "Add files like documents, photos, or videos to emails.\n\nClick attachment icon. Select file from computer. File size limits apply.",
                image: "email-attachment.jpg",
                details: []
              },
              {
                title: "📏 File Size Limits",
                description: "Most email services limit attachment size.\n\nUsually 25MB or less. Use cloud storage for larger files.",
                image: "file-size-limit.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Email Etiquette',
          data: {
            cards: [
              {
                title: "👋 Professional Greeting",
                description: "Start with appropriate greeting.\n\nUse 'Dear' for formal, 'Hi' for casual. Match recipient's style.",
                image: "email-greeting.jpg",
                details: []
              },
              {
                title: "✍️ Clear Writing",
                description: "Write clearly and concisely.\n\nUse proper grammar. Break into paragraphs. Be polite and respectful.",
                image: "clear-writing.jpg",
                details: []
              },
              {
                title: "⏰ Timely Responses",
                description: "Reply to emails within reasonable time.\n\nRespond within 24-48 hours for business. Acknowledge receipt if needed.",
                image: "email-response.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'flowchart',
          title: 'Email Sending Process',
          data: {
            steps: [
              {
                id: "compose",
                label: "Compose Email",
                description: "Write subject and message"
              },
              {
                id: "attach",
                label: "Attach Files (Optional)",
                description: "Add documents or images"
              },
              {
                id: "review",
                label: "Review Email",
                description: "Check spelling and content"
              },
              {
                id: "send",
                label: "Send Email",
                description: "Click send button"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is required to send an email?",
        options: [
          "Subject line only",
          "Recipient's email address",
          "Attachment",
          "Signature"
        ],
        correctAnswer: 1,
        explanation: "A recipient's email address is required in the 'To' field to send an email successfully."
      },
      {
        id: 2,
        question: "What is a common file size limit for email attachments?",
        options: [
          "5MB",
          "25MB",
          "100MB",
          "No limit"
        ],
        correctAnswer: 1,
        explanation: "Most email services limit attachments to around 25MB. For larger files, use cloud storage services."
      },
      {
        id: 3,
        question: "What is good email etiquette?",
        options: [
          "Use all caps",
          "Write clearly and be polite",
          "Never reply",
          "Send immediately without checking"
        ],
        correctAnswer: 1,
        explanation: "Good email etiquette includes writing clearly, using proper grammar, being polite, and responding in a timely manner."
      }
    ]
  },
  {
    id: 3,
    title: "Office Tools",
    description: "Learn about MS Word, Excel, and PDF operations",
    duration: "16 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Working with Office Tools',
          data: {
            text: "Office tools help you create documents, spreadsheets, and presentations.\n\nCommon tools include Word, Excel, and PDF readers.",
            audio: true,
            audioTitle: "Office Tools Introduction"
          }
        },
        {
          type: 'card',
          title: 'MS Word Operations',
          data: {
            cards: [
              {
                title: "📄 Creating Documents",
                description: "Word lets you create text documents.\n\nType text, format fonts, add images. Save as .docx file.",
                image: "word-document.jpg",
                details: []
              },
              {
                title: "✏️ Text Formatting",
                description: "Change font size, color, and style.\n\nBold, italic, underline text. Adjust alignment and spacing.",
                image: "text-formatting.jpg",
                details: []
              },
              {
                title: "💾 Saving Documents",
                description: "Save documents regularly to avoid losing work.\n\nUse Ctrl+S to save quickly. Choose save location.",
                image: "save-document.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Excel Operations',
          data: {
            cards: [
              {
                title: "📊 Spreadsheets",
                description: "Excel organizes data in rows and columns.\n\nCreate tables, charts, and calculations. Useful for budgets and lists.",
                image: "excel-spreadsheet.jpg",
                details: []
              },
              {
                title: "🔢 Formulas",
                description: "Excel can calculate numbers automatically.\n\nUse formulas like =SUM() for totals. Updates when data changes.",
                image: "excel-formulas.jpg",
                details: []
              },
              {
                title: "📈 Charts",
                description: "Create visual charts from data.\n\nBar charts, pie charts, line graphs. Makes data easy to understand.",
                image: "excel-charts.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Office Tools',
          data: {
            description: "See how to use Word and Excel for common tasks."
          }
        },
        {
          type: 'card',
          title: 'PDF Operations',
          data: {
            cards: [
              {
                title: "📑 What is PDF?",
                description: "PDF (Portable Document Format) preserves document formatting.\n\nLooks same on all devices. Cannot be easily edited.",
                image: "pdf-document.jpg",
                details: []
              },
              {
                title: "👁️ Viewing PDFs",
                description: "Open PDFs with PDF reader software.\n\nAdobe Reader, browser, or built-in viewer. Scroll to read pages.",
                image: "view-pdf.jpg",
                details: []
              },
              {
                title: "🖨️ Printing PDFs",
                description: "Print PDFs like regular documents.\n\nFile → Print. Choose printer and settings. Click Print.",
                image: "print-pdf.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Office Tools Comparison',
          data: {
            type: 'table',
            items: [
              {
                tool: "Word",
                use: "Text documents",
                format: ".docx",
                features: "Formatting, images"
              },
              {
                tool: "Excel",
                use: "Data and calculations",
                format: ".xlsx",
                features: "Formulas, charts"
              },
              {
                tool: "PDF",
                use: "Fixed format documents",
                format: ".pdf",
                features: "Viewing, printing"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is MS Word used for?",
        options: [
          "Creating spreadsheets",
          "Creating text documents",
          "Viewing PDFs",
          "Sending emails"
        ],
        correctAnswer: 1,
        explanation: "MS Word is used for creating and editing text documents with formatting options like fonts, images, and layouts."
      },
      {
        id: 2,
        question: "What can Excel do?",
        options: [
          "Only type text",
          "Organize data, calculate numbers, and create charts",
          "Send emails",
          "Browse internet"
        ],
        correctAnswer: 1,
        explanation: "Excel can organize data in spreadsheets, perform calculations using formulas, and create visual charts from data."
      },
      {
        id: 3,
        question: "What is a PDF?",
        options: [
          "A spreadsheet program",
          "A document format that preserves formatting",
          "An email service",
          "A web browser"
        ],
        correctAnswer: 1,
        explanation: "PDF (Portable Document Format) is a file format that preserves document formatting and looks the same on all devices."
      }
    ]
  },
  {
    id: 4,
    title: "Printing & Scanning",
    description: "Learn about connecting printers, using scanners, and saving formats",
    duration: "13 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Printing and Scanning',
          data: {
            text: "Printing creates physical copies of digital documents.\n\nScanning converts physical documents into digital files.",
            audio: true,
            audioTitle: "Printing & Scanning Introduction"
          }
        },
        {
          type: 'card',
          title: 'Connecting Printers',
          data: {
            cards: [
              {
                title: "🔌 USB Connection",
                description: "Connect printer to computer with USB cable.\n\nPlug cable into printer and computer. Windows detects automatically.",
                image: "usb-printer.jpg",
                details: []
              },
              {
                title: "📶 Wireless Connection",
                description: "Connect printer to Wi-Fi network.\n\nUse printer settings to connect. Print from any device on network.",
                image: "wireless-printer.jpg",
                details: []
              },
              {
                title: "⚙️ Printer Setup",
                description: "Install printer drivers from manufacturer.\n\nDownload from website or use installation CD. Follow setup wizard.",
                image: "printer-setup.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Printing & Scanning',
          data: {
            description: "Learn how to connect printers and use scanners."
          }
        },
        {
          type: 'card',
          title: 'Using Printers',
          data: {
            cards: [
              {
                title: "🖨️ Printing Documents",
                description: "File → Print or Ctrl+P to print.\n\nChoose printer, number of copies, and pages. Click Print.",
                image: "print-document.jpg",
                details: []
              },
              {
                title: "📄 Print Preview",
                description: "Preview document before printing.\n\nSee how it will look. Adjust settings if needed. Saves paper.",
                image: "print-preview.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Using Scanners',
          data: {
            cards: [
              {
                title: "📷 What is Scanning?",
                description: "Scanning creates digital copy of physical document.\n\nPlace document on scanner. Press scan button. Save as file.",
                image: "scanner-device.jpg",
                details: []
              },
              {
                title: "💾 Saving Formats",
                description: "Save scans as PDF, JPG, or PNG files.\n\nPDF for documents. JPG/PNG for photos. Choose quality settings.",
                image: "scan-formats.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'File Formats',
          data: {
            type: 'table',
            items: [
              {
                format: "PDF",
                use: "Documents",
                quality: "High",
                size: "Medium"
              },
              {
                format: "JPG",
                use: "Photos",
                quality: "Good",
                size: "Small"
              },
              {
                format: "PNG",
                use: "Images with transparency",
                quality: "High",
                size: "Large"
              }
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "How can you connect a printer to a computer?",
        options: [
          "Only by USB",
          "USB cable or wireless connection",
          "Only wirelessly",
          "Cannot connect"
        ],
        correctAnswer: 1,
        explanation: "Printers can be connected via USB cable or wirelessly through Wi-Fi network, depending on the printer model."
      },
      {
        id: 2,
        question: "What is scanning used for?",
        options: [
          "Printing documents",
          "Creating digital copies of physical documents",
          "Sending emails",
          "Browsing internet"
        ],
        correctAnswer: 1,
        explanation: "Scanning is used to create digital copies of physical documents, converting them into image or PDF files."
      },
      {
        id: 3,
        question: "What format is best for scanning documents?",
        options: [
          "MP3",
          "PDF",
          "EXE",
          "ZIP"
        ],
        correctAnswer: 1,
        explanation: "PDF is the best format for scanning documents as it preserves formatting and is widely compatible."
      }
    ]
  },
  {
    id: 5,
    title: "Screenshots & Recordings",
    description: "Learn about keyboard shortcuts, tools, and storage",
    duration: "11 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Capturing Screens',
          data: {
            text: "Screenshots capture what's on your screen.\n\nUseful for sharing information, reporting problems, or saving content.",
            audio: true,
            audioTitle: "Screenshots Introduction"
          }
        },
        {
          type: 'card',
          title: 'Keyboard Shortcuts',
          data: {
            cards: [
              {
                title: "📸 Print Screen (PrtScn)",
                description: "Captures entire screen to clipboard.\n\nPress PrtScn key. Paste into Paint or Word. Saves full screen.",
                image: "print-screen.jpg",
                details: []
              },
              {
                title: "🪟 Windows + Shift + S",
                description: "Opens Snipping Tool for selective screenshots.\n\nSelect area to capture. Saves to clipboard automatically.",
                image: "snipping-tool.jpg",
                details: []
              },
              {
                title: "💻 Alt + Print Screen",
                description: "Captures only active window.\n\nPress Alt + PrtScn. Paste to save. Captures current window only.",
                image: "alt-printscreen.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Screenshots',
          data: {
            description: "Learn different ways to capture screenshots on your computer."
          }
        },
        {
          type: 'card',
          title: 'Screenshot Tools',
          data: {
            cards: [
              {
                title: "✂️ Snipping Tool",
                description: "Built-in Windows tool for screenshots.\n\nSelect area, window, or full screen. Annotate and save.",
                image: "snipping-tool-app.jpg",
                details: []
              },
              {
                title: "📷 Snipping Tool (New)",
                description: "Updated version with more features.\n\nDelay timer, shapes, and editing. Access from Start menu.",
                image: "new-snipping.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'card',
          title: 'Saving Screenshots',
          data: {
            cards: [
              {
                title: "💾 Save Location",
                description: "Screenshots save to Pictures/Screenshots folder.\n\nAutomatically named with date and time. Can change location.",
                image: "screenshot-folder.jpg",
                details: []
              },
              {
                title: "📁 File Format",
                description: "Screenshots save as PNG files by default.\n\nHigh quality images. Can convert to JPG if needed.",
                image: "screenshot-format.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Screen Recordings',
          data: {
            text: "Screen recording captures video of your screen.\n\nUse Windows Game Bar (Windows + G) or third-party software. Useful for tutorials."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does Print Screen (PrtScn) do?",
        options: [
          "Prints the screen",
          "Captures entire screen to clipboard",
          "Closes all windows",
          "Opens settings"
        ],
        correctAnswer: 1,
        explanation: "Print Screen captures the entire screen and saves it to the clipboard, which you can then paste into an application."
      },
      {
        id: 2,
        question: "What is Windows + Shift + S used for?",
        options: [
          "Shutting down",
          "Opening Snipping Tool for selective screenshots",
          "Saving files",
          "Opening settings"
        ],
        correctAnswer: 1,
        explanation: "Windows + Shift + S opens the Snipping Tool, allowing you to select and capture a specific area of your screen."
      },
      {
        id: 3,
        question: "Where do screenshots usually save?",
        options: [
          "Desktop",
          "Pictures/Screenshots folder",
          "Documents",
          "Downloads"
        ],
        correctAnswer: 1,
        explanation: "Screenshots are typically saved to the Pictures/Screenshots folder, though this can be changed in settings."
      }
    ]
  },
  {
    id: 6,
    title: "Cyber Ethics",
    description: "Learn about responsible usage and digital footprint",
    duration: "12 min",
    content: {
      sections: [
        {
          type: 'text',
          title: 'Being Responsible Online',
          data: {
            text: "Cyber ethics means using technology responsibly and ethically.\n\nRespect others, protect privacy, and be aware of your digital footprint.",
            audio: true,
            audioTitle: "Cyber Ethics Introduction"
          }
        },
        {
          type: 'card',
          title: 'Responsible Usage',
          data: {
            cards: [
              {
                title: "🤝 Respect Others",
                description: "Treat others online with kindness and respect.\n\nDon't bully or harass. Think before posting. Be polite in comments.",
                image: "respect-online.jpg",
                details: []
              },
              {
                title: "🔒 Protect Privacy",
                description: "Don't share personal information unnecessarily.\n\nKeep passwords private. Be careful with photos. Limit location sharing.",
                image: "protect-privacy.jpg",
                details: []
              },
              {
                title: "⚖️ Follow Rules",
                description: "Respect copyright and terms of service.\n\nDon't pirate content. Follow website rules. Use content legally.",
                image: "follow-rules.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'Video: Cyber Ethics',
          data: {
            description: "Learn about responsible online behavior and digital citizenship."
          }
        },
        {
          type: 'card',
          title: 'Digital Footprint',
          data: {
            cards: [
              {
                title: "👣 What is Digital Footprint?",
                description: "All information about you online.\n\nPosts, comments, photos, and activity. Can be permanent. Think before sharing.",
                image: "digital-footprint.jpg",
                details: []
              },
              {
                title: "🔍 Managing Your Footprint",
                description: "Control what information is available about you.\n\nReview privacy settings. Delete old posts. Be selective about sharing.",
                image: "manage-footprint.jpg",
                details: []
              },
              {
                title: "⚠️ Long-term Impact",
                description: "Digital footprint can affect future opportunities.\n\nEmployers may check online presence. Colleges review social media. Be mindful.",
                image: "footprint-impact.jpg",
                details: []
              }
            ]
          }
        },
        {
          type: 'comparison',
          title: 'Online Behavior',
          data: {
            type: 'table',
            items: [
              {
                behavior: "Good",
                respect: "High",
                privacy: "Protected",
                impact: "Positive"
              },
              {
                behavior: "Bad",
                respect: "Low",
                privacy: "Exposed",
                impact: "Negative"
              }
            ]
          }
        },
        {
          type: 'text',
          title: 'Key Takeaways',
          data: {
            text: "Always be respectful and responsible online.\n\nProtect your privacy and be mindful of your digital footprint. Your online actions have consequences."
          }
        }
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is cyber ethics?",
        options: [
          "Hacking computers",
          "Using technology responsibly and ethically",
          "Ignoring online rules",
          "Sharing everything"
        ],
        correctAnswer: 1,
        explanation: "Cyber ethics means using technology responsibly and ethically, respecting others, protecting privacy, and following rules."
      },
      {
        id: 2,
        question: "What is a digital footprint?",
        options: [
          "A physical mark",
          "All information about you online",
          "A password",
          "A file type"
        ],
        correctAnswer: 1,
        explanation: "A digital footprint is all the information about you that exists online, including posts, comments, photos, and online activity."
      },
      {
        id: 3,
        question: "Why should you be careful about your digital footprint?",
        options: [
          "It doesn't matter",
          "It can affect future opportunities like jobs and college",
          "It's only temporary",
          "No one sees it"
        ],
        correctAnswer: 1,
        explanation: "Your digital footprint can have long-term consequences, as employers and colleges may review your online presence when making decisions."
      }
    ]
  }
];


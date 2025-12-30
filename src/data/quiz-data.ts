export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option (0-3)
    difficulty: Difficulty;
    topicTag?: string; // Optional: to ensure we cover all topics later
}

export interface Quiz {
    moduleId: number;
    title: string;
    questions: Question[]; // This will now be the "Pool" of all possible questions
}

export const quizzes: Record<number, Quiz> = {
    1: {
        moduleId: 1,
        title: "Introduction to Computers Assessment",
        questions: [
            // EASY LEVEL (Basic Concepts)
            {
                id: 1,
                question: "What is the primary function of a computer?",
                options: ["To cook food", "To process data and information", "To generate electricity", "To clean the house"],
                correctAnswer: 1,
                difficulty: "Easy"
            },
            {
                id: 2,
                question: "Which of the following is physical hardware?",
                options: ["Windows 10", "Microsoft Word", "Mouse", "Web Browser"],
                correctAnswer: 2,
                difficulty: "Easy"
            },
            {
                id: 3,
                question: "Which device is used to display output?",
                options: ["Keyboard", "Microphone", "Monitor", "Scanner"],
                correctAnswer: 2,
                difficulty: "Easy"
            },
            {
                id: 4,
                question: "What is the full form of CPU?",
                options: ["Central Processing Unit", "Central Power Unit", "Computer Personal Unit", "Central Program Unit"],
                correctAnswer: 0,
                difficulty: "Easy"
            },
            {
                id: 5,
                question: "Which part of the computer is known as the 'brain'?",
                options: ["Monitor", "Keyboard", "CPU", "Hard Drive"],
                correctAnswer: 2,
                difficulty: "Easy"
            },
            {
                id: 6,
                question: "RAM stands for:",
                options: ["Read Access Memory", "Random Access Memory", "Ready Application Module", "Remote Access Model"],
                correctAnswer: 1,
                difficulty: "Easy"
            },
            {
                id: 7,
                question: "Which of these is an Input device?",
                options: ["Printer", "Speaker", "Keyboard", "Projector"],
                correctAnswer: 2,
                difficulty: "Easy"
            },
            // MEDIUM LEVEL (Specifics)
            {
                id: 8,
                question: "Which memory is volatile (loses data when power is off)?",
                options: ["Hard Disk", "RAM", "ROM", "Flash Drive"],
                correctAnswer: 1,
                difficulty: "Medium"
            },
            {
                id: 9,
                question: "What is the main function of an Operating System?",
                options: ["To type documents", "To browse the internet", "To manage hardware and software resources", "To scan for viruses only"],
                correctAnswer: 2,
                difficulty: "Medium"
            },
            {
                id: 10,
                question: "Which storage device typically has the largest capacity in a standard PC?",
                options: ["RAM", "DVD", "Hard Disk Drive (HDD)", "Floppy Disk"],
                correctAnswer: 2,
                difficulty: "Medium"
            },
            {
                id: 11,
                question: "The 'Desktop' is a term associated with:",
                options: ["The physical table", "The main screen area of an Operating System", "A type of printer", "The inside of the CPU"],
                correctAnswer: 1,
                difficulty: "Medium"
            },
            {
                id: 12,
                question: "GUI stands for:",
                options: ["Gaming User Interface", "Global Usage Index", "Graphical User Interface", "General Utility Inverter"],
                correctAnswer: 2,
                difficulty: "Medium"
            },
            {
                id: 13,
                question: "Which key is used to capitalize letters?",
                options: ["Ctrl", "Alt", "Shift", "Esc"],
                correctAnswer: 2,
                difficulty: "Medium"
            },
            // HARD LEVEL (Technical/History)
            {
                id: 14,
                question: "Who is known as the father of the computer?",
                options: ["Bill Gates", "Charles Babbage", "Steve Jobs", "Alan Turing"],
                correctAnswer: 1,
                difficulty: "Hard"
            },
            {
                id: 15,
                question: "Which generation of computers used Vacuum Tubes?",
                options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
                correctAnswer: 0,
                difficulty: "Hard"
            },
            {
                id: 16,
                question: "What is the smallest unit of digital data?",
                options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
                correctAnswer: 1,
                difficulty: "Hard"
            },
            {
                id: 17,
                question: "Which component is responsible for converting AC power to DC for the computer?",
                options: ["Motherboard", "UPS", "SMPS (Power Supply)", "Inverter"],
                correctAnswer: 2,
                difficulty: "Hard"
            },
            {
                id: 18,
                question: "1 Gigabyte (GB) is approximately equal to:",
                options: ["1000 Megabytes", "1024 Kilobytes", "1024 Megabytes", "100 Megabytes"],
                correctAnswer: 2,
                difficulty: "Hard"
            },
            {
                id: 19,
                question: "BIOS is stored in which memory?",
                options: ["RAM", "Hard Disk", "ROM", "Cache"],
                correctAnswer: 2,
                difficulty: "Hard"
            },
            {
                id: 20,
                question: "Which software translates high-level code into machine code?",
                options: ["Operating System", "Compiler", "Driver", "Application"],
                correctAnswer: 1,
                difficulty: "Hard"
            }
        ]
    }
};

import { FileSystemItem, FileType, LevelConfig, ROOT_ID, DESKTOP_ID, RECYCLE_BIN_ID, DOCUMENTS_ID } from './types';

export const INITIAL_FILE_SYSTEM: FileSystemItem[] = [
    // Root Structure
    { id: ROOT_ID, parentId: null, name: 'C:', type: FileType.FOLDER, isSystem: true },
    { id: 'users', parentId: ROOT_ID, name: 'Users', type: FileType.FOLDER, isSystem: true },
    { id: 'learner', parentId: 'users', name: 'Learner', type: FileType.FOLDER, isSystem: true },

    // Desktop (Main Workspace)
    { id: DESKTOP_ID, parentId: 'learner', name: 'Desktop', type: FileType.FOLDER, isSystem: true },

    // Documents
    { id: DOCUMENTS_ID, parentId: 'learner', name: 'Documents', type: FileType.FOLDER, isSystem: true },
    { id: 'work', parentId: DOCUMENTS_ID, name: 'Work', type: FileType.FOLDER },
    { id: 'projects', parentId: 'work', name: 'Projects', type: FileType.FOLDER },

    // Recycle Bin (Special Folder)
    { id: RECYCLE_BIN_ID, parentId: null, name: 'Recycle Bin', type: FileType.FOLDER, isSystem: true },
];

// Helper to check if a specific file exists in a specific folder
const hasFile = (items: FileSystemItem[], parentId: string, name: string) => {
    return items.some(i => i.parentId === parentId && i.name.toLowerCase() === name.toLowerCase());
};

const hasFileInBin = (items: FileSystemItem[], name: string) => {
    return items.some(i => i.parentId === RECYCLE_BIN_ID && i.name.toLowerCase() === name.toLowerCase());
};

export const LEVELS: LevelConfig[] = [
    {
        id: 1,
        title: 'The Basics',
        description: 'Learn to create, rename, and delete folders—your digital drawers.',
        steps: [
            {
                id: 0,
                instruction: 'Welcome to your Virtual Desktop! Your first task is to create a new folder to store your pictures.',
                knowledgeDrop: 'Think of a Folder as a digital box or drawer where you keep related files together to stay organized.',
                proTip: 'Right-click on the empty space and select "New Folder".',
                checkCompletion: (items) => hasFile(items, DESKTOP_ID, 'New Folder') || hasFile(items, DESKTOP_ID, 'Photos'),
                actionPrompt: "Great start! Now let's give it a proper name."
            },
            {
                id: 1,
                instruction: 'Rename the folder you created to "Photos".',
                knowledgeDrop: 'Giving folders clear names helps you find things quickly later. "New Folder" is too vague!',
                proTip: 'Select the folder and press F2, or Right-click > Rename.',
                checkCompletion: (items) => hasFile(items, DESKTOP_ID, 'Photos'),
                actionPrompt: "Looking good. But wait, I changed my mind..."
            },
            {
                id: 2,
                instruction: 'Rename the "Photos" folder to "My Memories".',
                knowledgeDrop: 'You can rename a folder as many times as you like. It does not change the files inside it.',
                checkCompletion: (items) => hasFile(items, DESKTOP_ID, 'My Memories') && !hasFile(items, DESKTOP_ID, 'Photos'),
                actionPrompt: "Perfect. Now let's learn how to clean up."
            },
            {
                id: 3,
                instruction: 'Delete the "My Memories" folder.',
                knowledgeDrop: 'Deleting removes the folder from your immediate workspace, but it is not gone forever yet!',
                proTip: 'Select the folder and press the "Delete" key on your keyboard.',
                checkCompletion: (items) => hasFileInBin(items, 'My Memories') && !hasFile(items, DESKTOP_ID, 'My Memories'),
                actionPrompt: "Oops! We might need that back. Let's recover it."
            },
            {
                id: 4,
                instruction: 'Go to the Recycle Bin and Restore "My Memories".',
                knowledgeDrop: 'The Recycle Bin is a safety net. You can rescue deleted items unless you empty the bin.',
                checkCompletion: (items) => hasFile(items, DESKTOP_ID, 'My Memories') && !hasFileInBin(items, 'My Memories'),
                actionPrompt: "You've mastered the lifecycle of a folder!"
            }
        ]
    },
    {
        id: 2,
        title: 'File Extensions & Types',
        description: 'Identify different file types and organize them correctly.',
        steps: [
            {
                id: 0,
                instruction: 'I have placed 5 messy files on your Desktop. Look at their names and icons.',
                knowledgeDrop: 'Extensions are the letters after the dot (like .jpg or .txt). They tell the computer which app opens the file.',
                checkCompletion: () => true, // Auto-advance after user acknowledges
                actionPrompt: "Ready to organize?"
            },
            {
                id: 1,
                instruction: 'Create a new folder on the Desktop named "Media".',
                knowledgeDrop: 'We need a place to store our pictures and music.',
                checkCompletion: (items) => hasFile(items, DESKTOP_ID, 'Media'),
                actionPrompt: "Now let's fill it up."
            },
            {
                id: 2,
                instruction: 'Identify the picture file (vacation.jpg) and Move it into the "Media" folder.',
                knowledgeDrop: '.jpg (JPEG) is a standard format for photographs.',
                proTip: 'Right-click the file > Cut, then open Media folder > Paste. Or Drag and Drop if you feel lucky!',
                checkCompletion: (items) => hasFile(items, findFolderId(items, 'Media'), 'vacation.jpg') && !hasFile(items, DESKTOP_ID, 'vacation.jpg'),
                actionPrompt: "Excellent organization skills!"
            }
        ]
    },
    {
        id: 3,
        title: 'Search & Shortcuts',
        description: 'Find lost files instantly using search tools.',
        steps: [
            {
                id: 0,
                instruction: 'I have hidden a secret file somewhere in "Documents". Try to find "secret_key.txt" manually first by clicking folders.',
                knowledgeDrop: 'Browsing manually can take a long time if you have thousands of folders.',
                checkCompletion: (items, currentPathId) => hasFile(items, currentPathId, 'secret_key.txt'),
                actionPrompt: "That took a while (or maybe you couldn't find it). Let's try the fast way."
            },
            {
                id: 1,
                instruction: 'Use the Search Bar at the top right to find "secret_key.txt".',
                knowledgeDrop: 'Search looks through all folders and subfolders instantly.',
                proTip: 'Ctrl + F usually highlights the search bar in most apps.',
                checkCompletion: (items, currentPathId) => false, // Handled by Search Component Logic
                actionPrompt: "Found it! Much faster, right?"
            }
        ]
    },
    {
        id: 4,
        title: 'Compression & Security',
        description: 'Save space with ZIP and understand permissions.',
        steps: [
            {
                id: 0,
                instruction: 'Select "notes.txt" and "budget.xlsx" and click "Zip" in the toolbar or menu.',
                knowledgeDrop: 'Zipping (Compressing) bundles files together and shrinks their size. Great for emailing multiple items.',
                checkCompletion: (items) => items.some(i => i.name.endsWith('.zip') && i.parentId === DESKTOP_ID),
                actionPrompt: "Now you have a neat package."
            },
            {
                id: 1,
                instruction: 'Try to delete the file named "System.sys".',
                knowledgeDrop: 'Some files are critical for the computer to run. Windows protects them so you don\'t accidentally break things.',
                checkCompletion: () => false, // Handled by Modal trigger
                actionPrompt: "Safety first!"
            }
        ]
    }
];

// Helper to find ID of a folder by name (simplified for this flat list structure)
function findFolderId(items: FileSystemItem[], name: string): string {
    const folder = items.find(i => i.name === name && i.type === FileType.FOLDER);
    return folder ? folder.id : '';
}

export const LEVEL_2_FILES: FileSystemItem[] = [
    { id: 'f1', parentId: DESKTOP_ID, name: 'vacation.jpg', type: FileType.IMAGE, size: '2.4 MB' },
    { id: 'f2', parentId: DESKTOP_ID, name: 'notes.txt', type: FileType.TEXT, size: '12 KB' },
    { id: 'f3', parentId: DESKTOP_ID, name: 'budget.xlsx', type: FileType.SPREADSHEET, size: '45 KB' },
    { id: 'f4', parentId: DESKTOP_ID, name: 'song.mp3', type: FileType.AUDIO, size: '4.1 MB' },
    { id: 'f5', parentId: DESKTOP_ID, name: 'app.exe', type: FileType.APP, size: '120 MB', isSystem: false },
];

export const LEVEL_3_FILES: FileSystemItem[] = [
    { id: 'sec1', parentId: 'projects', name: 'secret_key.txt', type: FileType.TEXT, size: '1 KB' },
];

export const LEVEL_4_FILES: FileSystemItem[] = [
    { id: 'sys1', parentId: DESKTOP_ID, name: 'System.sys', type: FileType.SYSTEM, size: '0 KB', isSystem: true },
];

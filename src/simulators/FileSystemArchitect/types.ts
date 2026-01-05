export enum FileType {
    FOLDER = 'FOLDER',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    SPREADSHEET = 'SPREADSHEET',
    AUDIO = 'AUDIO',
    APP = 'APP',
    ARCHIVE = 'ARCHIVE',
    SYSTEM = 'SYSTEM',
    PDF = 'PDF',
    VIDEO = 'VIDEO',
    CODE = 'CODE',
    PRESENTATION = 'PRESENTATION',
    UNKNOWN = 'UNKNOWN',
}

export interface FileSystemItem {
    id: string;
    parentId: string | null; // null for Root
    name: string;
    type: FileType;
    content?: string; // For text files or dummy content
    size?: string;
    isSystem?: boolean; // Cannot be deleted without permission
    isLocked?: boolean; // For specific scenario constraints
    dateModified?: string;
}

export interface LevelState {
    currentLevel: number;
    currentStep: number;
    completed: boolean;
}

export interface LevelConfig {
    id: number;
    title: string;
    description: string;
    steps: LevelStep[];
}

export interface LevelStep {
    id: number;
    instruction: string;
    knowledgeDrop: string; // Educational context
    proTip?: string; // Shortcut or tip
    checkCompletion: (items: FileSystemItem[], currentPathId: string, clipboard: ClipboardState | null) => boolean;
    actionPrompt?: string; // "What would you like to do next?"
}

export interface ClipboardState {
    action: 'COPY' | 'CUT';
    itemIds: string[];
}

export const ROOT_ID = 'root';
export const DESKTOP_ID = 'desktop';
export const RECYCLE_BIN_ID = 'recycle_bin';
export const DOCUMENTS_ID = 'documents';

import React from 'react';
import {
    Folder,
    FileImage,
    FileText,
    FileSpreadsheet,
    FileAudio,
    Box,
    Archive,
    Cpu,
    Trash2,
    HardDrive,
    File,
    FileVideo,
    FileCode,
    MonitorPlay
} from 'lucide-react';
import { FileType } from '../types';

interface IconProps {
    type: FileType | 'trash' | 'drive';
    className?: string;
    isOpen?: boolean;
}

export const Icon: React.FC<IconProps> = ({ type, className = "w-6 h-6", isOpen }) => {
    // Helper to merge classes minimally (simple concatenation)
    const baseClasses = className;

    switch (type) {
        case FileType.FOLDER:
            // Gold/Blue folders with solid fill
            return <Folder className={`${baseClasses} ${isOpen ? 'text-primary' : 'text-primary'} fill-primary/20`} />;
        case FileType.IMAGE:
            return <FileImage className={`${baseClasses} text-indigo-400 dark:text-indigo-300 fill-indigo-400/10`} />;
        case FileType.TEXT:
            // Paper look
            return <FileText className={`${baseClasses} text-slate-500 dark:text-slate-300 fill-slate-100 dark:fill-slate-800`} />;
        case FileType.PDF:
            // PDF Red
            return <FileText className={`${baseClasses} text-red-500 fill-red-500/10`} />;
        case FileType.VIDEO:
            return <FileVideo className={`${baseClasses} text-purple-500 fill-purple-500/10`} />;
        case FileType.CODE:
            return <FileCode className={`${baseClasses} text-yellow-500 fill-yellow-500/10`} />;
        case FileType.PRESENTATION:
            return <MonitorPlay className={`${baseClasses} text-orange-500 fill-orange-500/10`} />;
        case FileType.SPREADSHEET:
            return <FileSpreadsheet className={`${baseClasses} text-emerald-500 fill-emerald-500/10`} />;
        case FileType.AUDIO:
            return <FileAudio className={`${baseClasses} text-pink-500 fill-pink-500/10`} />;
        case FileType.APP:
            return <Box className={`${baseClasses} text-orange-500 fill-orange-500/10`} />;
        case FileType.ARCHIVE:
            return <Archive className={`${baseClasses} text-amber-600 fill-amber-600/10`} />;
        case FileType.SYSTEM:
            return <Cpu className={`${baseClasses} text-slate-600 dark:text-slate-400 fill-slate-500/10`} />;
        case FileType.UNKNOWN:
            // Generic File
            return <File className={`${baseClasses} text-slate-400 fill-slate-400/10`} />;
        case 'trash':
            return <Trash2 className={`${baseClasses} text-destructive fill-destructive/10`} />;
        case 'drive':
            return <HardDrive className={`${baseClasses} text-secondary fill-secondary/10`} />;
        default:
            return <File className={`${baseClasses} text-muted-foreground`} />;
    }
};

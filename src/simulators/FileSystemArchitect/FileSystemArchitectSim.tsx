import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
    Search,
    ArrowLeft,
    ArrowUp,
    RotateCcw,
    Plus,
    Scissors,
    Copy,
    Clipboard,
    Trash2,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Menu,
    FileArchive,
    FileText
} from 'lucide-react';
import {
    FileSystemItem,
    FileType,
    LevelState,
    DESKTOP_ID,
    RECYCLE_BIN_ID,
    ROOT_ID,
    DOCUMENTS_ID
} from './types';
import {
    INITIAL_FILE_SYSTEM,
    LEVELS,
    LEVEL_2_FILES,
    LEVEL_3_FILES,
    LEVEL_4_FILES,
} from './constants';
import { Icon } from './components/Icon';

// Helper to determine file type from extension
const getFileTypeFromExtension = (name: string): FileType | null => {
    const parts = name.split('.');
    if (parts.length < 2) return null; // No extension
    const ext = parts.pop()?.toLowerCase();

    switch (ext) {
        case 'jpg': case 'jpeg': case 'png': case 'gif': case 'bmp': return FileType.IMAGE;
        case 'txt': case 'md': case 'doc': case 'docx': case 'rtf': return FileType.TEXT;
        case 'pdf': return FileType.PDF;
        case 'mp4': case 'mov': case 'avi': case 'mkv': return FileType.VIDEO;
        case 'html': case 'css': case 'js': case 'ts': case 'json': case 'py': case 'java': return FileType.CODE;
        case 'ppt': case 'pptx': return FileType.PRESENTATION;
        case 'xlsx': case 'xls': case 'csv': return FileType.SPREADSHEET;
        case 'mp3': case 'wav': case 'ogg': case 'm4a': return FileType.AUDIO;
        case 'exe': case 'msi': case 'app': case 'bat': case 'sh': return FileType.APP;
        case 'zip': case 'rar': case '7z': case 'tar': case 'gz': return FileType.ARCHIVE;
        case 'sys': case 'dll': case 'ini': case 'cfg': return FileType.SYSTEM;
        default: return FileType.UNKNOWN; // Unknown extension -> Generic File
    }
};

const FileSystemArchitectSim = () => {
    // --- State ---
    const [fileSystem, setFileSystem] = useState<FileSystemItem[]>(INITIAL_FILE_SYSTEM);
    const [currentPathId, setCurrentPathId] = useState<string>(DESKTOP_ID);
    const [levelState, setLevelState] = useState<LevelState>({ currentLevel: 1, currentStep: 0, completed: false });
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
    const [clipboard, setClipboard] = useState<{ action: 'COPY' | 'CUT', itemIds: string[] } | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState<{ title: string, message: string, type: 'error' | 'success' | 'info' } | null>(null);
    const [showLevelComplete, setShowLevelComplete] = useState<boolean>(false);
    const [isRenaming, setIsRenaming] = useState<string | null>(null);
    const [renameValue, setRenameValue] = useState('');

    // Mobile State (Option A: FAB + Bottom Sheet)
    const [showFabSheet, setShowFabSheet] = useState(false);
    const [showPlacesDrawer, setShowPlacesDrawer] = useState(false);
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);




    // Drag and Drop State
    const [dragTargetId, setDragTargetId] = useState<string | null>(null);


    const [contextMenu, setContextMenu] = useState<{ x: number, y: number, type: 'item' | 'background', targetId?: string } | null>(null);

    // --- Refs ---
    const renameInputRef = useRef<HTMLInputElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // Handle global click to close context menu
    useEffect(() => {
        const handleClick = () => setContextMenu(null);
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    // --- Context Menu Handlers ---
    const handleContextMenu = (e: React.MouseEvent, type: 'item' | 'background', itemId?: string) => {
        e.preventDefault();
        e.stopPropagation();

        // If clicking an item not currently selected, select it exclusively
        if (itemId && !selectedItemIds.includes(itemId)) {
            setSelectedItemIds([itemId]);
        }

        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            type,
            targetId: itemId
        });
    };

    // --- Derived State ---
    const currentLevelConfig = LEVELS.find(l => l.id === levelState.currentLevel);
    const currentStepConfig = currentLevelConfig?.steps[levelState.currentStep];

    // Filter items for current view
    const currentItems = useMemo(() => {
        if (searchQuery) {
            return fileSystem.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.id !== ROOT_ID &&
                item.id !== RECYCLE_BIN_ID
            );
        }
        return fileSystem.filter(item => item.parentId === currentPathId);
    }, [fileSystem, currentPathId, searchQuery]);

    const currentFolder = fileSystem.find(i => i.id === currentPathId);
    // Breadcrumbs Logic
    const breadcrumbs = useMemo(() => {
        const path = [];
        let curr = currentFolder;
        while (curr) {
            path.unshift(curr);
            if (!curr.parentId) break;
            curr = fileSystem.find(i => i.id === curr?.parentId);
        }
        return path;
    }, [currentFolder, fileSystem]);

    // --- Side Effects (Level Progression) ---
    useEffect(() => {
        if (!currentStepConfig) return;

        // Special check for Search Level (Level 3, Step 1)
        if (levelState.currentLevel === 3 && levelState.currentStep === 1) {
            if (searchQuery.toLowerCase().includes('secret') && currentItems.some(i => i.name === 'secret_key.txt')) {
                handleStepCompletion();
            }
            return;
        }

        const isComplete = currentStepConfig.checkCompletion(fileSystem, currentPathId, clipboard);
        if (isComplete) {
            handleStepCompletion();
        }
    }, [fileSystem, currentPathId, clipboard, searchQuery, levelState]);

    // Inject files for levels
    useEffect(() => {
        if (levelState.currentLevel === 2 && levelState.currentStep === 0) {
            // Inject Level 2 files if not already there
            if (!fileSystem.some(f => f.id === 'f1')) {
                setFileSystem(prev => [...prev, ...LEVEL_2_FILES]);
            }
        }
        if (levelState.currentLevel === 3 && levelState.currentStep === 0) {
            if (!fileSystem.some(f => f.id === 'sec1')) {
                setFileSystem(prev => [...prev, ...LEVEL_3_FILES]);
            }
        }
        if (levelState.currentLevel === 4 && levelState.currentStep === 0) {
            if (!fileSystem.some(f => f.id === 'sys1')) {
                setFileSystem(prev => [...prev, ...LEVEL_4_FILES]);
            }
        }
    }, [levelState.currentLevel, levelState.currentStep]);

    // Auto-focus rename input
    useEffect(() => {
        if (isRenaming && renameInputRef.current) {
            renameInputRef.current.focus();
            renameInputRef.current.select();
        }
    }, [isRenaming]);

    // --- Handlers ---

    // --- Handlers ---

    const handleStepCompletion = () => {
        // Small delay for UX
        setTimeout(() => {
            // Check if level is finished
            if (currentLevelConfig && levelState.currentStep >= currentLevelConfig.steps.length - 1) {
                // Level Complete
                if (levelState.currentLevel < LEVELS.length) {
                    setShowLevelComplete(true);
                } else {
                    // All levels done
                    setShowModal({
                        title: 'Simulation Complete! 🎓',
                        message: "You are now a Certified File Manager! You've learned organization, extensions, search, and security.",
                        type: 'success'
                    });
                }
            } else {
                // Next Step
                setLevelState(prev => ({ ...prev, currentStep: prev.currentStep + 1 }));
            }
        }, 500);
    };

    const handleBadgeDismiss = () => {
        setShowLevelComplete(false);
        setLevelState({
            currentLevel: levelState.currentLevel + 1,
            currentStep: 0,
            completed: false
        });
        setCurrentPathId(DESKTOP_ID);
        setSearchQuery('');
    };


    const createFolder = () => {
        const name = `New Folder`;
        const newFolder: FileSystemItem = {
            id: `folder-${Date.now()}`,
            parentId: currentPathId,
            name,
            type: FileType.FOLDER,
            dateModified: new Date().toLocaleDateString()
        };
        setFileSystem(prev => [...prev, newFolder]);
        // Auto start rename
        setIsRenaming(newFolder.id);
        setRenameValue(name);
    };

    const createFile = () => {
        const name = `New Text Document.txt`;
        const newFile: FileSystemItem = {
            id: `file-${Date.now()}`,
            parentId: currentPathId,
            name,
            type: FileType.TEXT,
            size: '0 KB',
            dateModified: new Date().toLocaleDateString()
        };
        setFileSystem(prev => [...prev, newFile]);
        setIsRenaming(newFile.id);
        setRenameValue(name);
    };

    // Dictionary of supported extensions for the "Unknown Extension" check
    const SUPPORTED_EXTENSIONS = [
        'txt', 'md', 'doc', 'docx', 'pdf', 'rtf',
        'jpg', 'jpeg', 'png', 'gif', 'bmp',
        'xlsx', 'xls', 'csv',
        'mp3', 'wav', 'ogg', 'm4a',
        'exe', 'zip', 'sys',
        'mp4', 'mov', 'avi', 'mkv',
        'html', 'css', 'js', 'ts', 'json', 'py', 'java',
        'ppt', 'pptx'
    ];

    const handleRename = (id: string, newName: string) => {
        if (!newName.trim()) {
            setIsRenaming(null);
            return;
        }

        const parts = newName.split('.');
        const ext = parts.length > 1 ? parts.pop()?.toLowerCase() : null;

        // Check for "Unknown Extension" if user explicitly typed a dot
        if (ext && !SUPPORTED_EXTENSIONS.includes(ext)) {
            setShowModal({
                title: '⚠️ Unknown File Type',
                message: `The system doesn't recognize ".${ext}". Try using standard extensions like .txt, .jpg, or .pdf to make the file readable!`,
                type: 'info'
            });
        }

        setFileSystem(prev => prev.map(item => {
            if (item.id === id) {
                // Handle file extension changes (Dynamic Type Switching)
                let newType = item.type;
                // Only apply extension logic to non-folders
                if (item.type !== FileType.FOLDER) {
                    const detectedType = getFileTypeFromExtension(newName);
                    // If an extension is detected, use it. If not (removed), default to UNKNOWN.
                    newType = detectedType || FileType.UNKNOWN;
                }
                return { ...item, name: newName, type: newType };
            }
            return item;
        }));
        setIsRenaming(null);
    };




    const deleteItems = () => {
        if (selectedItemIds.length === 0) return;

        // Level 4 Security Check
        const systemFile = fileSystem.find(i => selectedItemIds.includes(i.id) && i.isSystem && i.id !== RECYCLE_BIN_ID);
        if (systemFile) {
            setShowModal({
                title: 'Permission Denied 🛡️',
                message: `You cannot delete system files like "${systemFile.name}". This keeps your computer safe!`,
                type: 'error'
            });
            // If this was the objective of Level 4 Step 1 (actually Step 1 is zip, Step 2 is security)
            if (levelState.currentLevel === 4 && levelState.currentStep === 1) {
                handleStepCompletion();
            }
            return;
        }

        if (currentPathId === RECYCLE_BIN_ID) {
            // Permanently Delete
            setFileSystem(prev => prev.filter(item => !selectedItemIds.includes(item.id)));
        } else {
            // Move to Recycle Bin
            setFileSystem(prev => prev.map(item =>
                selectedItemIds.includes(item.id) ? { ...item, parentId: RECYCLE_BIN_ID } : item
            ));
        }
        setSelectedItemIds([]);
    };

    const restoreItems = () => {
        if (currentPathId !== RECYCLE_BIN_ID) return;
        setFileSystem(prev => prev.map(item =>
            selectedItemIds.includes(item.id) ? { ...item, parentId: DESKTOP_ID } : item
        )); // Restore to Desktop default for simplicity in sim
        setSelectedItemIds([]);
    };

    const navigate = (folderId: string) => {
        setCurrentPathId(folderId);
        setSelectedItemIds([]);
        setSearchQuery('');
    };

    const navigateUp = () => {
        if (currentFolder && currentFolder.parentId) {
            navigate(currentFolder.parentId);
        }
    };

    const handleCut = () => {
        if (selectedItemIds.length) {
            setClipboard({ action: 'CUT', itemIds: selectedItemIds });
        }
    };

    const handleCopy = () => {
        if (selectedItemIds.length) {
            setClipboard({ action: 'COPY', itemIds: selectedItemIds });
        }
    };

    const handlePaste = () => {
        if (!clipboard) return;

        if (clipboard.action === 'CUT') {
            setFileSystem(prev => prev.map(item =>
                clipboard.itemIds.includes(item.id) ? { ...item, parentId: currentPathId } : item
            ));
            setClipboard(null);
        } else {
            // Copy logic (clone items)
            const clones = fileSystem
                .filter(item => clipboard.itemIds.includes(item.id))
                .map(item => ({
                    ...item,
                    id: `${item.id}-copy-${Date.now()}`,
                    parentId: currentPathId,
                    name: `${item.name} - Copy`,
                    // Note: Clones keep original type, if you rename copy later it uses handleRename logic
                }));
            setFileSystem(prev => [...prev, ...clones]);
        }
    };

    const handleZip = () => {
        if (selectedItemIds.length === 0) return;
        const newZip: FileSystemItem = {
            id: `zip-${Date.now()}`,
            parentId: currentPathId,
            name: 'Archive.zip',
            type: FileType.ARCHIVE,
            size: 'compressed'
        };
        setFileSystem(prev => [...prev, newZip]);
        // In a real app we would hide original files or move them inside, 
        // for this sim, creating the zip is enough to trigger success
    };

    const handleRenameAction = () => {
        if (selectedItemIds.length === 1) {
            const itemToRename = fileSystem.find(i => i.id === selectedItemIds[0]);
            if (itemToRename) {
                setIsRenaming(itemToRename.id);
                setRenameValue(itemToRename.name);
                // Focus hack
                setTimeout(() => renameInputRef.current?.focus(), 50);
            }
        }
    };

    // Mobile Touch Handlers
    const handleLongPressStart = (itemId: string) => {
        const timer = setTimeout(() => {
            setIsSelectionMode(true);
            setSelectedItemIds([itemId]);
        }, 500); // 500ms long press
        setLongPressTimer(timer);
    };

    const handleLongPressEnd = () => {
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            setLongPressTimer(null);
        }
    };

    const handleMobileTap = (item: FileSystemItem) => {
        if (isSelectionMode) {
            // In selection mode: toggle selection
            setSelectedItemIds(prev =>
                prev.includes(item.id) ? prev.filter(id => id !== item.id) : [...prev, item.id]
            );
        } else {
            // Normal mode: open folder or file
            if (item.type === FileType.FOLDER) {
                navigate(item.id);
            }
        }
    };

    const exitSelectionMode = () => {
        setIsSelectionMode(false);
        setSelectedItemIds([]);
    };

    const getFileIcon = (item: FileSystemItem) => {
        return <Icon type={item.type} />;
    };

    // --- Drag and Drop Handlers ---
    const handleDragStart = (e: React.DragEvent, item: FileSystemItem) => {
        e.dataTransfer.effectAllowed = 'move';
        // If dragging a selected item, move all selected. Otherwise just this one.
        const idsToMove = selectedItemIds.includes(item.id) ? selectedItemIds : [item.id];
        e.dataTransfer.setData('application/json', JSON.stringify(idsToMove));

        // Visual touch: set opacity or ghost image? Browser does this automatically usually.
    };

    const handleDragOver = (e: React.DragEvent, item: FileSystemItem) => {
        e.preventDefault(); // Necessary to allow dropping
        e.stopPropagation();

        // Only allow dropping into folders, and not into self/children (circular check skipped for simple sim)
        if (item.type === FileType.FOLDER && item.id !== dragTargetId) {
            setDragTargetId(item.id);
        }
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragTargetId(null);
    };

    const handleDrop = (e: React.DragEvent, targetItem: FileSystemItem) => {
        e.preventDefault();
        e.stopPropagation();
        setDragTargetId(null);

        if (targetItem.type !== FileType.FOLDER) return;

        try {
            const data = e.dataTransfer.getData('application/json');
            const draggedIds: string[] = JSON.parse(data);

            if (!draggedIds || draggedIds.length === 0) return;

            // Prevent dropping folder into itself
            if (draggedIds.includes(targetItem.id)) return;

            setFileSystem(prev => prev.map(item => {
                if (draggedIds.includes(item.id)) {
                    return { ...item, parentId: targetItem.id };
                }
                return item;
            }));

            setSelectedItemIds([]); // Clear selection after move

        } catch (err) {
            console.error("Drop failed", err);
        }
    };

    return (
        <div className="flex h-full w-full bg-background text-foreground overflow-hidden font-sans select-none border border-border rounded-xl shadow-2xl relative transition-colors duration-300">
            <style>{`
                ::-webkit-scrollbar { width: 6px; height: 6px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { background: hsl(var(--muted-foreground) / 0.3); border-radius: 10px; }
                ::-webkit-scrollbar-thumb:hover { background: hsl(var(--muted-foreground) / 0.5); }
                .desk-pattern {
                    background-image: radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}</style>

            {/* ====== MOBILE LAYOUT (md:hidden) - OPTION A ====== */}
            <div className="md:hidden flex flex-col w-full h-full relative z-30 bg-background">
                {/* Mobile Header */}
                {/* Mobile Header */}
                <div className="h-14 border-b border-border flex items-center px-4 gap-2 bg-card/50 backdrop-blur-md shrink-0">
                    <button onClick={() => setShowPlacesDrawer(true)} className="p-2 -ml-2 rounded-full active:bg-accent shrink-0">
                        <Menu size={20} />
                    </button>
                    <button
                        onClick={navigateUp}
                        disabled={!currentFolder?.parentId}
                        className="p-2 rounded-full active:bg-accent disabled:opacity-30 disabled:pointer-events-none shrink-0 transition-opacity"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex flex-col min-w-0 flex-1 pl-1">
                        <h2 className="font-bold text-sm truncate leading-tight">{currentFolder?.name || 'File Explorer'}</h2>
                        <p className="text-[10px] text-muted-foreground truncate opacity-70">{breadcrumbs.map(b => b.name).join(' / ')}</p>
                    </div>
                </div>

                {/* Selection Mode Action Bar */}
                {isSelectionMode && (
                    <div className="h-14 border-b border-primary/20 bg-primary/10 flex items-center px-4 justify-between shrink-0 animate-in slide-in-from-top">
                        <div className="flex items-center gap-2">
                            <button onClick={exitSelectionMode} className="p-2 -ml-2 rounded-full active:bg-primary/20">
                                <XCircle size={20} className="text-primary" />
                            </button>
                            <span className="font-bold text-sm text-primary">{selectedItemIds.length} Selected</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <button onClick={handleCopy} disabled={selectedItemIds.length === 0} className="p-2 rounded-full active:bg-primary/20 disabled:opacity-30">
                                <Copy size={18} className="text-primary" />
                            </button>
                            <button onClick={handleRenameAction} disabled={selectedItemIds.length !== 1} className="p-2 rounded-full active:bg-primary/20 disabled:opacity-30">
                                <Clipboard size={18} className="text-primary" />
                            </button>
                            <button onClick={deleteItems} disabled={selectedItemIds.length === 0} className="p-2 rounded-full active:bg-primary/20 disabled:opacity-30">
                                <Trash2 size={18} className="text-destructive" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Files Grid - 2 Column */}
                <div className="flex-1 overflow-y-auto bg-muted/30 p-3 pb-24">
                    <div className="grid grid-cols-2 gap-3">
                        {currentItems.map(item => (
                            <div
                                key={item.id}
                                onTouchStart={() => handleLongPressStart(item.id)}
                                onTouchEnd={handleLongPressEnd}
                                onTouchMove={handleLongPressEnd}
                                onClick={() => handleMobileTap(item)}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border aspect-square justify-center text-center transition-all relative ${isSelectionMode && selectedItemIds.includes(item.id)
                                    ? 'bg-primary/20 border-primary ring-2 ring-primary'
                                    : 'bg-card border-border shadow-sm active:scale-95'
                                    }`}
                            >
                                {isSelectionMode && (
                                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                                        style={{
                                            borderColor: selectedItemIds.includes(item.id) ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                                            backgroundColor: selectedItemIds.includes(item.id) ? 'hsl(var(--primary))' : 'transparent'
                                        }}
                                    >
                                        {selectedItemIds.includes(item.id) && <CheckCircle2 size={12} className="text-primary-foreground" />}
                                    </div>
                                )}
                                <div className="w-12 h-12">
                                    {getFileIcon(item)}
                                </div>
                                {isRenaming === item.id ? (
                                    <input
                                        ref={renameInputRef}
                                        type="text"
                                        className="w-full text-center text-xs bg-popover border border-primary rounded px-1 py-0.5 text-foreground focus:outline-none"
                                        value={renameValue}
                                        onChange={(e) => setRenameValue(e.target.value)}
                                        onBlur={() => handleRename(item.id, renameValue)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleRename(item.id, renameValue);
                                            if (e.key === 'Escape') setIsRenaming(null);
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                ) : (
                                    <span className="text-xs font-medium leading-tight line-clamp-2 w-full break-words">{item.name}</span>
                                )}
                            </div>
                        ))}
                        {currentItems.length === 0 && (
                            <div className="col-span-2 flex flex-col items-center justify-center py-16 text-muted-foreground opacity-50">
                                <Icon type={FileType.FOLDER} className="w-16 h-16 mb-3" />
                                <p className="text-sm">Empty Folder</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* FAB (Floating Action Button) */}
                <button
                    onClick={() => setShowFabSheet(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center active:scale-95 transition-transform z-50"
                >
                    <Plus size={24} />
                </button>

                {/* FAB Bottom Sheet */}
                {showFabSheet && (
                    <div className="fixed inset-0 z-[100]">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setShowFabSheet(false)} />
                        <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-3xl p-6 space-y-3 animate-in slide-in-from-bottom duration-300 shadow-2xl">
                            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-4" />
                            <button
                                onClick={() => { createFolder(); setShowFabSheet(false); }}
                                disabled={currentPathId === RECYCLE_BIN_ID}
                                className="w-full flex items-center gap-4 p-4 rounded-xl bg-background border border-border active:bg-accent transition-colors disabled:opacity-50"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon type={FileType.FOLDER} className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">New Folder</div>
                                    <div className="text-xs text-muted-foreground">Create a new folder</div>
                                </div>
                            </button>
                            <button
                                onClick={() => { createFile(); setShowFabSheet(false); }}
                                disabled={currentPathId === RECYCLE_BIN_ID}
                                className="w-full flex items-center gap-4 p-4 rounded-xl bg-background border border-border active:bg-accent transition-colors disabled:opacity-50"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <FileText size={20} className="text-blue-500" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">New File</div>
                                    <div className="text-xs text-muted-foreground">Create a text document</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setShowFabSheet(false)}
                                className="w-full flex items-center justify-center p-3 rounded-xl text-muted-foreground active:bg-accent transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

                {/* Places Drawer */}
                {showPlacesDrawer && (
                    <div className="fixed inset-0 z-[100]">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setShowPlacesDrawer(false)} />
                        <div className="absolute top-0 bottom-0 left-0 w-80 bg-card border-r border-border p-6 space-y-4 animate-in slide-in-from-left duration-300 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg">Locations</h3>
                                <button onClick={() => setShowPlacesDrawer(false)} className="p-2 -mr-2 rounded-full active:bg-accent">
                                    <XCircle size={20} />
                                </button>
                            </div>
                            <button onClick={() => { navigate(DESKTOP_ID); setShowPlacesDrawer(false); }} className={`w-full p-4 rounded-xl border flex items-center gap-4 ${currentPathId === DESKTOP_ID ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border'}`}>
                                <Icon type={FileType.FOLDER} className="w-6 h-6" />
                                <span className="font-semibold">Desktop</span>
                            </button>
                            <button onClick={() => { navigate(DOCUMENTS_ID); setShowPlacesDrawer(false); }} className={`w-full p-4 rounded-xl border flex items-center gap-4 ${currentPathId === DOCUMENTS_ID ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border'}`}>
                                <Icon type={FileType.FOLDER} className="w-6 h-6" />
                                <span className="font-semibold">Documents</span>
                            </button>
                            <button onClick={() => { navigate(ROOT_ID); setShowPlacesDrawer(false); }} className={`w-full p-4 rounded-xl border flex items-center gap-4 ${currentPathId === ROOT_ID ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border'}`}>
                                <Icon type="drive" className="w-6 h-6" />
                                <span className="font-semibold">Local Disk (C:)</span>
                            </button>
                            <button onClick={() => { navigate(RECYCLE_BIN_ID); setShowPlacesDrawer(false); }} className={`w-full p-4 rounded-xl border flex items-center gap-4 ${currentPathId === RECYCLE_BIN_ID ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border'}`}>
                                <Icon type="trash" className="w-6 h-6" />
                                <span className="font-semibold">Recycle Bin</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>


            {/* ====== DESKTOP LAYOUT (md:flex) ====== */}
            {/* --- Glass Sidebar --- */}
            <aside className="w-52 bg-sidebar-background/80 backdrop-blur-xl border-r border-border flex flex-col hidden md:flex transition-all z-20">
                <div className="p-6 flex items-center space-x-3">
                    {/* Windows-style clean sidebar header, no traffic lights */}
                    <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">System</span>
                </div>

                <nav className="flex-1 px-4 py-2 space-y-1">
                    <SidebarItem
                        label="Desktop"
                        active={currentPathId === DESKTOP_ID}
                        onClick={() => navigate(DESKTOP_ID)}
                        icon={<Icon type={FileType.FOLDER} className={`w-5 h-5 ${currentPathId === DESKTOP_ID ? 'text-primary' : 'text-muted-foreground'}`} />}
                    />
                    <SidebarItem
                        label="Documents"
                        active={currentPathId === DOCUMENTS_ID}
                        onClick={() => navigate(DOCUMENTS_ID)}
                        icon={<Icon type={FileType.FOLDER} className={`w-5 h-5 ${currentPathId === DOCUMENTS_ID ? 'text-primary' : 'text-muted-foreground'}`} />}
                    />
                    <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Storage Drives</div>
                    <SidebarItem
                        label="Local Disk (C:)"
                        active={currentPathId === ROOT_ID}
                        onClick={() => navigate(ROOT_ID)}
                        icon={<Icon type="drive" className="w-5 h-5 text-muted-foreground" />}
                    />
                    <div className="mt-auto pt-4">
                        <SidebarItem
                            label="Recycle Bin"
                            active={currentPathId === RECYCLE_BIN_ID}
                            onClick={() => navigate(RECYCLE_BIN_ID)}
                            icon={<Icon type="trash" className="w-5 h-5 text-muted-foreground" />}
                        />
                    </div>
                </nav>
            </aside>

            {/* --- Main Content Area (Desktop) --- */}
            <main className="flex-1 flex-col min-w-0 relative z-10 hidden md:flex">

                {/* Top Bar (Glass Header) */}
                <header className="h-16 border-b border-border bg-card/60 backdrop-blur-md px-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4 flex-1">
                        <button
                            onClick={navigateUp}
                            disabled={!currentFolder?.parentId}
                            className={`p-2 rounded-full transition-all ${!currentFolder?.parentId ? 'opacity-30' : 'hover:bg-accent hover:text-accent-foreground text-foreground'}`}
                        >
                            <ArrowUp size={20} />
                        </button>

                        {/* Address Bar (Pill) */}
                        <div className="flex-1 max-w-2xl bg-muted/50 border border-border rounded-full px-4 py-2 flex items-center text-sm text-muted-foreground shadow-inner">
                            {breadcrumbs.map((crumb, idx) => (
                                <React.Fragment key={crumb.id}>
                                    <span
                                        className="hover:text-primary hover:underline cursor-pointer truncate transition-colors font-medium"
                                        onClick={() => navigate(crumb.id)}
                                    >
                                        {crumb.name}
                                    </span>
                                    {idx < breadcrumbs.length - 1 && <span className="text-muted-foreground/50 mx-2">/</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Search Bar (Spotlight) */}
                    <div className="relative w-64 transition-all duration-300">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder={`Search ${currentFolder?.name || '...'}`}
                            className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </header>

                {/* Toolbar (Floating Dock) */}
                {/* Toolbar (Fixed Top Bar) */}
                <div className="px-4 py-2 border-b border-border bg-card/40 backdrop-blur-sm flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <div className="">
                            <ToolbarButton id="btn-new-folder" icon={<Plus size={16} />} label="New" onClick={createFolder} disabled={currentPathId === RECYCLE_BIN_ID || !!searchQuery} />
                        </div>
                        <ToolbarButton id="btn-new-file" icon={<FileText size={16} />} label="File" onClick={createFile} disabled={currentPathId === RECYCLE_BIN_ID || !!searchQuery} />

                        <div className="w-px h-6 bg-border mx-2"></div>

                        <ToolbarButton id="btn-rename" icon={<Clipboard size={16} />} label="Rename" onClick={handleRenameAction} disabled={selectedItemIds.length !== 1} />
                        <ToolbarButton icon={<Scissors size={16} />} label="Cut" onClick={handleCut} disabled={selectedItemIds.length === 0} />
                        <ToolbarButton icon={<Copy size={16} />} label="Copy" onClick={handleCopy} disabled={selectedItemIds.length === 0} />
                        <ToolbarButton icon={<Clipboard size={16} />} label="Paste" onClick={handlePaste} disabled={!clipboard} />
                        <ToolbarButton icon={<FileArchive size={16} />} label="Zip" onClick={handleZip} disabled={selectedItemIds.length === 0} />
                        <ToolbarButton icon={<Trash2 size={16} />} label="Delete" onClick={deleteItems} disabled={selectedItemIds.length === 0} danger />

                        {currentPathId === RECYCLE_BIN_ID && (
                            <ToolbarButton icon={<RotateCcw size={16} />} label="Restore" onClick={restoreItems} disabled={selectedItemIds.length === 0} />
                        )}
                    </div>


                </div>

                {/* File Area (List/Tile View) */}
                <div
                    className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent bg-background/50"
                    onClick={() => setSelectedItemIds([])}
                    onContextMenu={(e) => handleContextMenu(e, 'background')}
                >
                    {currentItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                            <div className="w-24 h-24 rounded-3xl bg-card/40 border border-border/50 flex items-center justify-center shadow-sm">
                                <Icon type={FileType.FOLDER} className="w-12 h-12 text-muted-foreground/50" />
                            </div>
                            <p className="font-light tracking-wide">This folder is empty.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 content-start">
                            {currentItems.map(item => (
                                <div
                                    key={item.id}
                                    className={`group flex flex-row items-center p-2 rounded-lg border transition-all duration-200 cursor-pointer relative
                                        ${selectedItemIds.includes(item.id)
                                            ? 'bg-primary/10 border-primary/50 shadow-sm'
                                            : 'bg-card/20 border-transparent hover:bg-card/40 hover:border-border/50'
                                        }
                                    `}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, item)}
                                    onDragOver={(e) => {
                                        if (item.type === FileType.FOLDER) handleDragOver(e, item);
                                    }}
                                    onDragLeave={(e) => {
                                        if (item.type === FileType.FOLDER) handleDragLeave(e);
                                    }}
                                    onDrop={(e) => {
                                        if (item.type === FileType.FOLDER) handleDrop(e, item);
                                    }}

                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedItemIds(prev => {
                                            if (e.ctrlKey || e.metaKey) {
                                                return prev.includes(item.id) ? prev.filter(id => id !== item.id) : [...prev, item.id];
                                            }
                                            return [item.id];
                                        });
                                    }}
                                    onDoubleClick={() => {
                                        if (item.type === FileType.FOLDER) {
                                            navigate(item.id);
                                        } else if (item.isSystem) {
                                            setShowModal({ title: "System File", message: "This file cannot be opened directly.", type: 'info' });
                                        }
                                    }}
                                    onContextMenu={(e) => handleContextMenu(e, 'item', item.id)}
                                >
                                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                                        {getFileIcon(item)}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        {isRenaming === item.id ? (
                                            <input
                                                ref={renameInputRef}
                                                type="text"
                                                className="w-full text-left text-xs bg-popover border border-primary rounded px-1 text-foreground focus:outline-none"
                                                value={renameValue}
                                                onChange={(e) => setRenameValue(e.target.value)}
                                                onBlur={() => handleRename(item.id, renameValue)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleRename(item.id, renameValue);
                                                    if (e.key === 'Escape') setIsRenaming(null);
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        ) : (
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-foreground truncate w-full">
                                                    {item.name}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground truncate">
                                                    {item.size || '1 KB'} • {item.dateModified || 'Today'}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {selectedItemIds.includes(item.id) && !isRenaming && (
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity px-2">
                                            <MoreVertical size={14} className="text-muted-foreground" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* --- Status Bar --- */}
                <div className="h-6 bg-card/90 backdrop-blur-md border-t border-border flex items-center px-4 justify-between text-[10px] text-muted-foreground z-20">
                    <div className="flex gap-4">
                        <span>{currentItems.length} item{currentItems.length !== 1 && 's'}</span>
                        {selectedItemIds.length > 0 && <span className="text-primary">{selectedItemIds.length} selected</span>}
                    </div>
                    <div className="flex gap-4">
                        <span>File System Architect v1.2</span>
                    </div>
                </div>

                {/* --- AI Tutor Panel (Holographic Card) --- */}
                {/* --- Guide Bar (Top Info Panel) --- */}

            </main>

            {/* --- Overlays --- */}
            {/* Context Menu */}
            {
                contextMenu && (
                    <ContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        type={contextMenu.type}
                        onAction={(action) => {
                            // Action Dispatcher
                            if (action === 'NEW_FOLDER') createFolder();
                            if (action === 'NEW_FILE') createFile();
                            if (action === 'COPY') handleCopy();
                            if (action === 'CUT') handleCut();
                            if (action === 'PASTE') handlePaste();
                            if (action === 'DELETE') deleteItems();
                            if (action === 'RENAME' && contextMenu.targetId) {
                                setIsRenaming(contextMenu.targetId);
                                setRenameValue(fileSystem.find(i => i.id === contextMenu.targetId)?.name || '');
                                setTimeout(() => renameInputRef.current?.focus(), 50);
                            }
                            if (action === 'OPEN' && contextMenu.targetId) {
                                const item = fileSystem.find(i => i.id === contextMenu.targetId);
                                if (item?.type === FileType.FOLDER) navigate(item.id);
                            }
                            setContextMenu(null);
                        }}
                        hasClipboard={!!clipboard}
                    />
                )
            }

            {/* Level Complete Badge */}
            {
                showLevelComplete && (
                    <MasteryBadge
                        title={currentLevelConfig?.title || 'File Management'}
                        onDismiss={handleBadgeDismiss}
                    />
                )
            }

            {/* Modal */}
            {
                showModal && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
                        <div className="bg-popover border border-border rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in zoom-in-95 duration-200">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto border-4 ${showModal.type === 'success' ? 'bg-success/20 border-success/50 text-success' :
                                showModal.type === 'error' ? 'bg-destructive/20 border-destructive/50 text-destructive' :
                                    'bg-primary/20 border-primary/50 text-primary'
                                }`}>
                                {showModal.type === 'success' ? <CheckCircle2 size={32} /> :
                                    showModal.type === 'error' ? <XCircle size={32} /> : <CheckCircle2 size={32} />}
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2 text-foreground">{showModal.title}</h3>
                            <p className="text-muted-foreground text-center mb-6 text-sm">{showModal.message}</p>
                            <button
                                onClick={() => setShowModal(null)}
                                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

// --- Subcomponents V2 (Dark/Glass) ---

const ContextMenu = ({ x, y, type, onAction, hasClipboard }: { x: number, y: number, type: 'item' | 'background', onAction: (action: string) => void, hasClipboard: boolean }) => {
    // Prevent menu from going off-screen (basic clamping)
    const style = {
        top: Math.min(y, window.innerHeight - 200),
        left: Math.min(x, window.innerWidth - 200),
    };

    return (
        <div
            className="fixed z-[9999] bg-popover/95 backdrop-blur-md border border-border rounded-lg shadow-2xl w-48 py-1.5 animate-in fade-in zoom-in-95 duration-100 flex flex-col"
            style={style}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
        >
            {type === 'item' ? (
                <>
                    <MenuItem label="Open" icon={<ArrowUp className="rotate-90" size={14} />} onClick={() => onAction('OPEN')} />
                    <MenuItem label="Rename" icon={<Clipboard size={14} />} onClick={() => onAction('RENAME')} />
                    <div className="h-px bg-border my-1 mx-2" />
                    <MenuItem label="Cut" icon={<Scissors size={14} />} onClick={() => onAction('CUT')} />
                    <MenuItem label="Copy" icon={<Copy size={14} />} onClick={() => onAction('COPY')} />
                    <div className="h-px bg-border my-1 mx-2" />
                    <MenuItem label="Delete" icon={<Trash2 size={14} />} danger onClick={() => onAction('DELETE')} />
                </>
            ) : (
                <>
                    <MenuItem label="New Folder" icon={<Plus size={14} />} onClick={() => onAction('NEW_FOLDER')} />
                    <MenuItem label="New File" icon={<FileText size={14} />} onClick={() => onAction('NEW_FILE')} />
                    <div className="h-px bg-border my-1 mx-2" />
                    <MenuItem label="Paste" icon={<Clipboard size={14} />} disabled={!hasClipboard} onClick={() => onAction('PASTE')} />
                    <MenuItem label="Refresh" icon={<RotateCcw size={14} />} onClick={() => { }} />
                </>
            )}
        </div>
    );
};

const MenuItem = ({ label, icon, onClick, danger, disabled }: { label: string, icon?: React.ReactNode, onClick: () => void, danger?: boolean, disabled?: boolean }) => (
    <button
        className={`w-full text-left px-3 py-2 text-xs flex items-center gap-3 transition-colors ${disabled ? 'opacity-40 cursor-not-allowed' :
            danger ? 'text-destructive hover:bg-destructive/10' : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
        onClick={() => !disabled && onClick()}
    >
        <span className="opacity-70">{icon}</span>
        <span className="font-medium">{label}</span>
    </button>
);

const MasteryBadge = ({ title, onDismiss }: { title: string, onDismiss: () => void }) => (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-[200] flex items-center justify-center animate-in fade-in duration-300">
        <div className="bg-popover p-8 rounded-2xl shadow-2xl max-w-sm text-center transform scale-110 border-4 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="mx-auto bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-4 border-4 border-primary shadow-inner">
                <span className="text-6xl">🏆</span>
            </div>
            <h2 className="text-3xl font-black text-primary mb-2 uppercase tracking-wide">Level Up!</h2>
            <p className="text-muted-foreground font-medium mb-6">You've mastered matching <br /><span className="text-foreground font-bold">{title}</span>!</p>
            <button
                onClick={onDismiss}
                className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
                Claim Badge
            </button>
            {/* Confetti fake */}
            <div className="absolute top-2 left-4 text-2xl animate-spin text-primary">✨</div>
            <div className="absolute bottom-4 right-8 text-xl animate-bounce text-secondary">🎉</div>
        </div>
    </div>
);


const SidebarItem = ({ label, active, onClick, icon }: { label: string, active: boolean, onClick: () => void, icon: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-primary/10 text-primary font-medium border border-primary/20' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const ToolbarButton = ({ icon, label, onClick, disabled, danger, className, id }: { icon: React.ReactNode, label: string, onClick: () => void, disabled?: boolean, danger?: boolean, className?: string, id?: string }) => (
    <button
        id={id}
        onClick={onClick}
        disabled={disabled}
        className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-md min-w-[60px] transition-colors ${className || ''}
      ${disabled
                ? 'opacity-40 cursor-not-allowed text-muted-foreground'
                : danger
                    ? 'text-destructive hover:bg-destructive/10'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-sm'
            }
    `}
    >
        <div className="mb-0.5">{icon}</div>
        <span className="text-[10px] font-medium">{label}</span>
    </button>
);



export default FileSystemArchitectSim;


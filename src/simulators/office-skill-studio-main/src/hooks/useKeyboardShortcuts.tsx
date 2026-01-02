import { useEffect, useCallback } from "react";

interface ShortcutHandlers {
  onBold?: () => void;
  onItalic?: () => void;
  onUnderline?: () => void;
  onSave?: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  onCopy?: () => void;
  onPaste?: () => void;
  onCut?: () => void;
  onSelectAll?: () => void;
  onNew?: () => void;
  onDelete?: () => void;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onTab?: () => void;
  onEnter?: () => void;
  onFind?: () => void;
  onPrint?: () => void;
}

export function useKeyboardShortcuts(handlers: ShortcutHandlers, enabled: boolean = true) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enabled) return;

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // Ctrl/Cmd + Key shortcuts
    if (isCtrlOrCmd) {
      switch (e.key.toLowerCase()) {
        case "b":
          e.preventDefault();
          handlers.onBold?.();
          break;
        case "i":
          e.preventDefault();
          handlers.onItalic?.();
          break;
        case "u":
          e.preventDefault();
          handlers.onUnderline?.();
          break;
        case "s":
          e.preventDefault();
          handlers.onSave?.();
          break;
        case "z":
          e.preventDefault();
          if (e.shiftKey) {
            handlers.onRedo?.();
          } else {
            handlers.onUndo?.();
          }
          break;
        case "y":
          e.preventDefault();
          handlers.onRedo?.();
          break;
        case "c":
          handlers.onCopy?.();
          break;
        case "v":
          handlers.onPaste?.();
          break;
        case "x":
          handlers.onCut?.();
          break;
        case "a":
          handlers.onSelectAll?.();
          break;
        case "n":
          e.preventDefault();
          handlers.onNew?.();
          break;
        case "f":
          e.preventDefault();
          handlers.onFind?.();
          break;
        case "p":
          e.preventDefault();
          handlers.onPrint?.();
          break;
      }
      return;
    }

    // Single key shortcuts
    switch (e.key) {
      case "Delete":
      case "Backspace":
        if (e.target === document.body) {
          handlers.onDelete?.();
        }
        break;
      case "Escape":
        handlers.onEscape?.();
        break;
      case "ArrowUp":
        handlers.onArrowUp?.();
        break;
      case "ArrowDown":
        handlers.onArrowDown?.();
        break;
      case "ArrowLeft":
        handlers.onArrowLeft?.();
        break;
      case "ArrowRight":
        handlers.onArrowRight?.();
        break;
      case "Tab":
        if (handlers.onTab) {
          e.preventDefault();
          handlers.onTab();
        }
        break;
      case "Enter":
        handlers.onEnter?.();
        break;
    }
  }, [handlers, enabled]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}

import { useState, useRef, useCallback, useEffect } from "react";
import { WordToolbar } from "./WordToolbar";
import { toast } from "sonner";
import { X, Bold, Italic, Underline, Copy, Scissors, ClipboardPaste, Highlighter, Type, List, ListOrdered, Minus, Printer, Search, FileText } from "lucide-react";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { ContextMenuWrapper, ContextMenuAction } from "@/components/ui/context-menu-wrapper";

interface Comment {
  id: string;
  text: string;
  range: string;
}

const resumeTemplate = `
<h1 style="text-align: center; margin-bottom: 8px;">JOHN DOE</h1>
<p style="text-align: center; color: #666; margin-bottom: 24px;">
  johndoe@email.com | (555) 123-4567 | New York, NY | linkedin.com/in/johndoe
</p>

<h2 style="border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin-bottom: 12px;">PROFESSIONAL SUMMARY</h2>
<p style="margin-bottom: 16px;">
  Results-driven professional with 5+ years of experience in project management and team leadership. 
  Proven track record of delivering projects on time and within budget while maintaining high quality standards.
</p>

<h2 style="border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin-bottom: 12px;">EXPERIENCE</h2>
<p style="margin-bottom: 4px;"><strong>Senior Project Manager</strong> | ABC Corporation | 2020 - Present</p>
<ul style="margin-bottom: 16px; padding-left: 20px;">
  <li>Led cross-functional teams of 10+ members on enterprise-level projects</li>
  <li>Reduced project delivery time by 25% through process optimization</li>
  <li>Managed budgets exceeding $1M with 100% accuracy</li>
</ul>

<p style="margin-bottom: 4px;"><strong>Project Manager</strong> | XYZ Inc. | 2018 - 2020</p>
<ul style="margin-bottom: 16px; padding-left: 20px;">
  <li>Coordinated multiple concurrent projects with diverse stakeholders</li>
  <li>Implemented Agile methodologies, improving team velocity by 30%</li>
</ul>

<h2 style="border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin-bottom: 12px;">EDUCATION</h2>
<p style="margin-bottom: 4px;"><strong>Bachelor of Business Administration</strong></p>
<p style="margin-bottom: 16px;">State University | 2018</p>

<h2 style="border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin-bottom: 12px;">SKILLS</h2>
<p>Project Management | Agile/Scrum | Team Leadership | Budget Management | Risk Analysis | MS Office Suite</p>
`;

export function WordSimulator() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    align: "left" as "left" | "center" | "right" | "justify",
  });
  const [fontSize, setFontSize] = useState("16");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textColor, setTextColor] = useState("#000000");
  const [highlightColor, setHighlightColor] = useState("#ffff00");
  const [comments, setComments] = useState<Comment[]>([]);
  const [originalContent, setOriginalContent] = useState("");
  const [trackChanges, setTrackChanges] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [showFindReplace, setShowFindReplace] = useState(false);
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  }, []);

  const handleBold = () => {
    execCommand("bold");
    setActiveFormats((prev) => ({ ...prev, bold: !prev.bold }));
  };

  const handleItalic = () => {
    execCommand("italic");
    setActiveFormats((prev) => ({ ...prev, italic: !prev.italic }));
  };

  const handleUnderline = () => {
    execCommand("underline");
    setActiveFormats((prev) => ({ ...prev, underline: !prev.underline }));
  };

  const handleStrikethrough = () => {
    execCommand("strikethrough");
    setActiveFormats((prev) => ({ ...prev, strikethrough: !prev.strikethrough }));
  };

  const handleAlign = (align: "left" | "center" | "right" | "justify") => {
    execCommand(`justify${align.charAt(0).toUpperCase() + align.slice(1)}`);
    setActiveFormats((prev) => ({ ...prev, align }));
  };

  const handleFontSize = (size: string) => {
    setFontSize(size);
    execCommand("fontSize", "7");
    const fontElements = editorRef.current?.querySelectorAll('font[size="7"]');
    fontElements?.forEach((el) => {
      (el as HTMLElement).removeAttribute("size");
      (el as HTMLElement).style.fontSize = `${size}px`;
    });
  };

  const handleFontFamily = (family: string) => {
    setFontFamily(family);
    execCommand("fontName", family);
  };

  const handleTextColor = (color: string) => {
    setTextColor(color);
    execCommand("foreColor", color);
  };

  const handleHighlight = () => {
    execCommand("hiliteColor", highlightColor);
    toast.success("Text highlighted!");
  };

  const handleBulletList = () => {
    execCommand("insertUnorderedList");
    toast.success("Bullet list inserted!");
  };

  const handleNumberedList = () => {
    execCommand("insertOrderedList");
    toast.success("Numbered list inserted!");
  };

  const handleHorizontalRule = () => {
    execCommand("insertHorizontalRule");
    toast.success("Horizontal line inserted!");
  };

  const handlePageBreak = () => {
    execCommand("insertHTML", '<div style="page-break-after: always; border-top: 2px dashed #ccc; margin: 20px 0; padding-top: 20px;"><span style="color: #999; font-size: 12px;">--- Page Break ---</span></div>');
    toast.success("Page break inserted!");
  };

  const handleLoadTemplate = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = resumeTemplate;
      setOriginalContent(resumeTemplate);
      toast.success("Resume template loaded!");
      updateCounts();
    }
  };

  const handleAddComment = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const commentText = prompt("Enter your comment:");
      if (commentText) {
        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.className = "bg-comment-bg border-b-2 border-yellow-400 relative";
        span.dataset.commentId = Date.now().toString();
        
        range.surroundContents(span);
        
        setComments((prev) => [
          ...prev,
          {
            id: span.dataset.commentId!,
            text: commentText,
            range: selection.toString(),
          },
        ]);
        
        toast.success("Comment added!");
      }
    } else {
      toast.error("Please select some text first");
    }
  };

  const removeComment = (id: string) => {
    const span = editorRef.current?.querySelector(`[data-comment-id="${id}"]`);
    if (span) {
      const parent = span.parentNode;
      while (span.firstChild) {
        parent?.insertBefore(span.firstChild, span);
      }
      parent?.removeChild(span);
    }
    setComments((prev) => prev.filter((c) => c.id !== id));
    toast.success("Comment removed");
  };

  const updateCounts = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || "";
      const words = text.trim().split(/\s+/).filter(w => w.length > 0);
      setWordCount(words.length);
      setCharCount(text.length);
    }
  };

  const handleEditorInput = () => {
    updateCounts();
    if (trackChanges && originalContent && editorRef.current) {
      const currentContent = editorRef.current.innerHTML;
      if (currentContent !== originalContent) {
        // Simple track changes - highlight any new content
      }
    }
  };

  const updateFormatState = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikethrough: document.queryCommandState("strikethrough"),
      align: document.queryCommandState("justifyCenter")
        ? "center"
        : document.queryCommandState("justifyRight")
        ? "right"
        : document.queryCommandState("justifyFull")
        ? "justify"
        : "left",
    });
  };

  const handleCopy = () => {
    document.execCommand("copy");
    toast.success("Copied to clipboard!");
  };

  const handleCut = () => {
    document.execCommand("cut");
    toast.success("Cut to clipboard!");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      execCommand("insertText", text);
      toast.success("Pasted from clipboard!");
    } catch {
      toast.error("Unable to paste");
    }
  };

  const handleUndo = () => {
    execCommand("undo");
    toast.success("Undo");
  };

  const handleRedo = () => {
    execCommand("redo");
    toast.success("Redo");
  };

  const handleFind = () => {
    if (findText && editorRef.current) {
      const content = editorRef.current.innerHTML;
      const regex = new RegExp(`(${findText})`, "gi");
      const matches = content.match(regex);
      if (matches) {
        toast.success(`Found ${matches.length} matches`);
        // Highlight matches
        editorRef.current.innerHTML = content.replace(regex, '<mark style="background: #fef08a;">$1</mark>');
      } else {
        toast.info("No matches found");
      }
    }
  };

  const handleReplace = () => {
    if (findText && editorRef.current) {
      const content = editorRef.current.innerHTML;
      const regex = new RegExp(findText, "gi");
      editorRef.current.innerHTML = content.replace(regex, replaceText);
      toast.success("Replaced all matches!");
    }
  };

  const handlePrint = () => {
    const printContent = editorRef.current?.innerHTML;
    const printWindow = window.open("", "_blank");
    if (printWindow && printContent) {
      printWindow.document.write(`
        <html>
          <head><title>Print Document</title></head>
          <body style="font-family: ${fontFamily}; padding: 40px;">${printContent}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleSave = () => {
    const content = editorRef.current?.innerHTML || "";
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.html";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Document saved!");
  };

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onBold: handleBold,
    onItalic: handleItalic,
    onUnderline: handleUnderline,
    onSave: handleSave,
    onUndo: handleUndo,
    onRedo: handleRedo,
    onFind: () => setShowFindReplace(true),
    onPrint: handlePrint,
  });

  // Right-click context menu actions
  const contextMenuActions: ContextMenuAction[] = [
    { label: "Cut", icon: <Scissors className="w-4 h-4" />, shortcut: "Ctrl+X", onClick: handleCut },
    { label: "Copy", icon: <Copy className="w-4 h-4" />, shortcut: "Ctrl+C", onClick: handleCopy },
    { label: "Paste", icon: <ClipboardPaste className="w-4 h-4" />, shortcut: "Ctrl+V", onClick: handlePaste },
    { separator: true },
    { label: "Bold", icon: <Bold className="w-4 h-4" />, shortcut: "Ctrl+B", onClick: handleBold },
    { label: "Italic", icon: <Italic className="w-4 h-4" />, shortcut: "Ctrl+I", onClick: handleItalic },
    { label: "Underline", icon: <Underline className="w-4 h-4" />, shortcut: "Ctrl+U", onClick: handleUnderline },
    { separator: true },
    { label: "Highlight", icon: <Highlighter className="w-4 h-4" />, onClick: handleHighlight },
    { label: "Add Comment", icon: <FileText className="w-4 h-4" />, onClick: handleAddComment },
    { separator: true },
    {
      label: "Insert",
      icon: <Type className="w-4 h-4" />,
      submenu: [
        { label: "Bullet List", icon: <List className="w-4 h-4" />, onClick: handleBulletList },
        { label: "Numbered List", icon: <ListOrdered className="w-4 h-4" />, onClick: handleNumberedList },
        { label: "Horizontal Line", icon: <Minus className="w-4 h-4" />, onClick: handleHorizontalRule },
        { label: "Page Break", onClick: handlePageBreak },
      ],
    },
    { separator: true },
    { label: "Find & Replace", icon: <Search className="w-4 h-4" />, shortcut: "Ctrl+F", onClick: () => setShowFindReplace(true) },
    { label: "Print", icon: <Printer className="w-4 h-4" />, shortcut: "Ctrl+P", onClick: handlePrint },
  ];

  useEffect(() => {
    updateCounts();
  }, []);

  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="flex-1">
        <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
          <WordToolbar
            onBold={handleBold}
            onItalic={handleItalic}
            onUnderline={handleUnderline}
            onStrikethrough={handleStrikethrough}
            onAlign={handleAlign}
            onFontSize={handleFontSize}
            onFontFamily={handleFontFamily}
            onTextColor={handleTextColor}
            onHighlight={handleHighlight}
            onBulletList={handleBulletList}
            onNumberedList={handleNumberedList}
            onHorizontalRule={handleHorizontalRule}
            onLoadTemplate={handleLoadTemplate}
            onAddComment={handleAddComment}
            onUndo={handleUndo}
            onRedo={handleRedo}
            onPrint={handlePrint}
            onSave={handleSave}
            onFind={() => setShowFindReplace(!showFindReplace)}
            activeFormats={activeFormats}
            fontSize={fontSize}
            fontFamily={fontFamily}
            textColor={textColor}
          />
          
          {showFindReplace && (
            <div className="flex items-center gap-2 p-2 bg-muted border-b">
              <input
                type="text"
                placeholder="Find..."
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
                className="px-2 py-1 text-sm border rounded bg-background"
              />
              <input
                type="text"
                placeholder="Replace with..."
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
                className="px-2 py-1 text-sm border rounded bg-background"
              />
              <button onClick={handleFind} className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:opacity-90">
                Find
              </button>
              <button onClick={handleReplace} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded hover:opacity-90">
                Replace All
              </button>
              <button onClick={() => setShowFindReplace(false)} className="px-2 py-1 text-sm text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          
          <ContextMenuWrapper actions={contextMenuActions}>
            <div
              ref={editorRef}
              contentEditable
              className="editor-area"
              style={{ fontSize: `${fontSize}px`, fontFamily }}
              onInput={handleEditorInput}
              onSelect={updateFormatState}
              onKeyUp={updateFormatState}
              onMouseUp={updateFormatState}
              suppressContentEditableWarning
            >
              <p>Start typing here or load a resume template...</p>
            </div>
          </ContextMenuWrapper>
        </div>
        
        <div className="mt-4 p-3 bg-muted rounded-lg flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            <strong>Tips:</strong> Use Ctrl+B/I/U for formatting. Right-click for more options.
          </p>
          <p className="text-sm text-muted-foreground">
            Words: {wordCount} | Characters: {charCount}
          </p>
        </div>
      </div>

      {comments.length > 0 && (
        <div className="w-64 animate-slide-in">
          <div className="bg-card rounded-lg border p-3">
            <h3 className="font-semibold text-sm mb-3">Comments</h3>
            <div className="space-y-3">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-comment-bg p-2 rounded text-sm relative"
                >
                  <button
                    onClick={() => removeComment(comment.id)}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <p className="text-muted-foreground text-xs mb-1 truncate">
                    "{comment.range}"
                  </p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

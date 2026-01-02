import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  FileText,
  MessageSquare,
  Undo,
  Redo,
  Printer,
  Save,
  Search,
  List,
  ListOrdered,
  Minus,
  Highlighter,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface WordToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onStrikethrough: () => void;
  onAlign: (align: "left" | "center" | "right" | "justify") => void;
  onFontSize: (size: string) => void;
  onFontFamily: (family: string) => void;
  onTextColor: (color: string) => void;
  onHighlight: () => void;
  onBulletList: () => void;
  onNumberedList: () => void;
  onHorizontalRule: () => void;
  onLoadTemplate: () => void;
  onAddComment: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onPrint: () => void;
  onSave: () => void;
  onFind: () => void;
  activeFormats: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    align: "left" | "center" | "right" | "justify";
  };
  fontSize: string;
  fontFamily: string;
  textColor: string;
}

const fontSizes = ["10", "11", "12", "14", "16", "18", "20", "24", "28", "32", "36", "48", "72"];
const fontFamilies = ["Arial", "Times New Roman", "Courier New", "Georgia", "Verdana", "Comic Sans MS", "Impact", "Trebuchet MS"];
const colors = [
  "#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff",
  "#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff",
];

export function WordToolbar({
  onBold,
  onItalic,
  onUnderline,
  onStrikethrough,
  onAlign,
  onFontSize,
  onFontFamily,
  onTextColor,
  onHighlight,
  onBulletList,
  onNumberedList,
  onHorizontalRule,
  onLoadTemplate,
  onAddComment,
  onUndo,
  onRedo,
  onPrint,
  onSave,
  onFind,
  activeFormats,
  fontSize,
  fontFamily,
  textColor,
}: WordToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-toolbar-bg border-b border-toolbar-border rounded-t-lg">
      {/* File operations */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onSave} className="toolbar-button">
              <Save className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Save (Ctrl+S)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onPrint} className="toolbar-button">
              <Printer className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Print (Ctrl+P)</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Undo/Redo */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onUndo} className="toolbar-button">
              <Undo className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Undo (Ctrl+Z)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onRedo} className="toolbar-button">
              <Redo className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Redo (Ctrl+Y)</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Font family & size */}
      <Select value={fontFamily} onValueChange={onFontFamily}>
        <SelectTrigger className="w-32 h-8">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {fontFamilies.map((family) => (
            <SelectItem key={family} value={family} style={{ fontFamily: family }}>
              {family}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={fontSize} onValueChange={onFontSize}>
        <SelectTrigger className="w-16 h-8">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {fontSizes.map((size) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="toolbar-divider" />

      {/* Text formatting */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onBold}
              className={cn("toolbar-button", activeFormats.bold && "active")}
            >
              <Bold className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Bold (Ctrl+B)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onItalic}
              className={cn("toolbar-button", activeFormats.italic && "active")}
            >
              <Italic className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Italic (Ctrl+I)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onUnderline}
              className={cn("toolbar-button", activeFormats.underline && "active")}
            >
              <Underline className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Underline (Ctrl+U)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onStrikethrough}
              className={cn("toolbar-button", activeFormats.strikethrough && "active")}
            >
              <Strikethrough className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Strikethrough</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Colors */}
      <div className="flex items-center gap-1">
        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <button className="toolbar-button relative">
                  <Palette className="w-4 h-4" />
                  <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-1 rounded" style={{ backgroundColor: textColor }} />
                </button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>Text Color</TooltipContent>
          </Tooltip>
          <PopoverContent className="w-auto p-2">
            <div className="grid grid-cols-10 gap-1">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => onTextColor(color)}
                  className="w-5 h-5 rounded border border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onHighlight} className="toolbar-button">
              <Highlighter className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Highlight</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Alignment */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onAlign("left")}
              className={cn("toolbar-button", activeFormats.align === "left" && "active")}
            >
              <AlignLeft className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Align Left</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onAlign("center")}
              className={cn("toolbar-button", activeFormats.align === "center" && "active")}
            >
              <AlignCenter className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Align Center</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onAlign("right")}
              className={cn("toolbar-button", activeFormats.align === "right" && "active")}
            >
              <AlignRight className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Align Right</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onAlign("justify")}
              className={cn("toolbar-button", activeFormats.align === "justify" && "active")}
            >
              <AlignJustify className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Justify</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Lists */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onBulletList} className="toolbar-button">
              <List className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Bullet List</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onNumberedList} className="toolbar-button">
              <ListOrdered className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Numbered List</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onHorizontalRule} className="toolbar-button">
              <Minus className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Horizontal Line</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Tools */}
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={onFind} className="toolbar-button">
              <Search className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Find & Replace (Ctrl+F)</TooltipContent>
        </Tooltip>
      </div>

      <div className="toolbar-divider" />

      {/* Templates & Comments */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onLoadTemplate} className="h-8">
          <FileText className="w-4 h-4 mr-1" />
          Template
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm" onClick={onAddComment} className="h-8">
              <MessageSquare className="w-4 h-4 mr-1" />
              Comment
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add comment to selected text</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

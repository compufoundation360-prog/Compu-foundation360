import {
  Layout,
  FileText,
  ImagePlus,
  Palette,
  Sparkles,
  Download,
  Play,
  Columns,
  Image,
  Square,
  ArrowRightLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Slide } from "./SlidePanel";

interface PowerPointToolbarProps {
  onLayoutChange: (layout: Slide["layout"]) => void;
  onTemplateChange: (template: Slide["template"]) => void;
  onInsertImage: () => void;
  onAnimationChange: (animation: Slide["animation"]) => void;
  onTransitionChange: (transition: Slide["transition"]) => void;
  onExport: () => void;
  onStartPreview: () => void;
}

export function PowerPointToolbar({
  onLayoutChange,
  onTemplateChange,
  onInsertImage,
  onAnimationChange,
  onTransitionChange,
  onExport,
  onStartPreview,
}: PowerPointToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-toolbar-bg border-b border-toolbar-border">
      {/* Start Slideshow */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default" size="sm" onClick={onStartPreview} className="h-8">
            <Play className="w-4 h-4 mr-1" />
            Slideshow
          </Button>
        </TooltipTrigger>
        <TooltipContent>Start Slideshow (F5)</TooltipContent>
      </Tooltip>

      <div className="toolbar-divider" />

      {/* Layout */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8">
                <Layout className="w-4 h-4 mr-1" />
                Layout
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Change slide layout</TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onLayoutChange("title")}>
            <FileText className="w-4 h-4 mr-2" />
            Title Slide
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLayoutChange("content")}>
            <Layout className="w-4 h-4 mr-2" />
            Content Layout
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLayoutChange("two-column")}>
            <Columns className="w-4 h-4 mr-2" />
            Two Column
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLayoutChange("image")}>
            <Image className="w-4 h-4 mr-2" />
            Image Only
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLayoutChange("blank")}>
            <Square className="w-4 h-4 mr-2" />
            Blank
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="toolbar-divider" />

      {/* Insert Image */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm" onClick={onInsertImage} className="h-8">
            <ImagePlus className="w-4 h-4 mr-1" />
            Image
          </Button>
        </TooltipTrigger>
        <TooltipContent>Insert image</TooltipContent>
      </Tooltip>

      <div className="toolbar-divider" />

      {/* Template */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8">
                <Palette className="w-4 h-4 mr-1" />
                Theme
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Apply theme</TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onTemplateChange("default")}>
            <div className="w-4 h-4 mr-2 bg-white border rounded" />
            Default (Light)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTemplateChange("blue")}>
            <div className="w-4 h-4 mr-2 bg-blue-600 rounded" />
            Professional Blue
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTemplateChange("dark")}>
            <div className="w-4 h-4 mr-2 bg-gray-800 rounded" />
            Dark Mode
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTemplateChange("green")}>
            <div className="w-4 h-4 mr-2 bg-emerald-600 rounded" />
            Nature Green
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onTemplateChange("orange")}>
            <div className="w-4 h-4 mr-2 bg-orange-500 rounded" />
            Sunset Orange
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTemplateChange("purple")}>
            <div className="w-4 h-4 mr-2 bg-purple-600 rounded" />
            Royal Purple
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Transitions */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8">
                <ArrowRightLeft className="w-4 h-4 mr-1" />
                Transition
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Slide transition</TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onTransitionChange("none")}>
            None
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTransitionChange("fade")}>
            Fade
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTransitionChange("slide")}>
            Slide
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTransitionChange("zoom")}>
            Zoom
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onTransitionChange("flip")}>
            Flip
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Animations */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8">
                <Sparkles className="w-4 h-4 mr-1" />
                Animate
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Content animation</TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onAnimationChange("none")}>
            None
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAnimationChange("fade")}>
            Fade In
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAnimationChange("appear")}>
            Slide In
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAnimationChange("bounce")}>
            Bounce
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAnimationChange("zoom")}>
            Zoom In
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex-1" />

      <Button variant="outline" size="sm" onClick={onExport} className="h-8">
        <Download className="w-4 h-4 mr-1" />
        Export PNG
      </Button>
    </div>
  );
}

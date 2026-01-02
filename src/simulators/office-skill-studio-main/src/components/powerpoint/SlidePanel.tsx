import { Plus, Copy, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export interface Slide {
  id: string;
  title: string;
  content: string;
  layout: "title" | "content" | "blank" | "two-column" | "image";
  image?: string;
  template: "default" | "blue" | "dark" | "green" | "orange" | "purple";
  animation: "none" | "fade" | "appear" | "bounce" | "zoom";
  transition: "none" | "fade" | "slide" | "zoom" | "flip";
  notes?: string;
}

interface SlidePanelProps {
  slides: Slide[];
  activeSlide: number;
  onSlideSelect: (index: number) => void;
  onAddSlide: () => void;
  onDeleteSlide?: () => void;
  onDuplicateSlide?: () => void;
}

const getTemplateColors = (template: Slide["template"]) => {
  switch (template) {
    case "blue":
      return "bg-blue-600";
    case "dark":
      return "bg-gray-800";
    case "green":
      return "bg-emerald-600";
    case "orange":
      return "bg-orange-500";
    case "purple":
      return "bg-purple-600";
    default:
      return "bg-card";
  }
};

export function SlidePanel({ slides, activeSlide, onSlideSelect, onAddSlide, onDeleteSlide, onDuplicateSlide }: SlidePanelProps) {
  return (
    <div className="w-52 bg-muted/50 border-r p-3 flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Button variant="outline" size="sm" onClick={onAddSlide} className="flex-1">
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
        
        {onDuplicateSlide && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={onDuplicateSlide} className="px-2">
                <Copy className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Duplicate Slide</TooltipContent>
          </Tooltip>
        )}
        
        {onDeleteSlide && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onDeleteSlide} 
                className="px-2"
                disabled={slides.length === 1}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete Slide</TooltipContent>
          </Tooltip>
        )}
      </div>
      
      <div className="flex-1 overflow-auto space-y-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => onSlideSelect(index)}
            className={cn(
              "slide-thumbnail aspect-video rounded overflow-hidden cursor-pointer relative group",
              getTemplateColors(slide.template),
              activeSlide === index && "active"
            )}
          >
            <div className="absolute top-1 left-1 bg-black/50 text-white text-[8px] px-1 rounded">
              {index + 1}
            </div>
            
            <div className="w-full h-full p-2 flex flex-col justify-center items-center">
              {slide.image && (
                <img 
                  src={slide.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
              )}
              <div 
                className={cn(
                  "text-[8px] font-semibold truncate w-full text-center relative z-10",
                  slide.template === "default" ? "text-foreground" : "text-white"
                )}
              >
                {slide.title || `Slide ${index + 1}`}
              </div>
              {slide.content && (
                <div 
                  className={cn(
                    "text-[6px] truncate w-full text-center mt-1 opacity-70 relative z-10",
                    slide.template === "default" ? "text-foreground" : "text-white"
                  )}
                >
                  {slide.content.substring(0, 30)}...
                </div>
              )}
            </div>

            {/* Layout indicator */}
            <div className="absolute bottom-1 right-1 bg-black/50 text-white text-[6px] px-1 rounded capitalize">
              {slide.layout}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-xs text-muted-foreground text-center pt-2 border-t">
        {slides.length} slide{slides.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
}

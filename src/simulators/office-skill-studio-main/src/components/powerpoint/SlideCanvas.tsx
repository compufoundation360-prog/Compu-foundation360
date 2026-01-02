import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Slide } from "./SlidePanel";

interface SlideCanvasProps {
  slide: Slide;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  canvasRef: React.RefObject<HTMLDivElement>;
}

const getTemplateStyles = (template: Slide["template"]) => {
  switch (template) {
    case "blue":
      return {
        bg: "bg-blue-600",
        titleColor: "text-white",
        contentColor: "text-blue-100",
      };
    case "dark":
      return {
        bg: "bg-gray-800",
        titleColor: "text-white",
        contentColor: "text-gray-300",
      };
    case "green":
      return {
        bg: "bg-emerald-600",
        titleColor: "text-white",
        contentColor: "text-emerald-100",
      };
    case "orange":
      return {
        bg: "bg-orange-500",
        titleColor: "text-white",
        contentColor: "text-orange-100",
      };
    case "purple":
      return {
        bg: "bg-purple-600",
        titleColor: "text-white",
        contentColor: "text-purple-100",
      };
    default:
      return {
        bg: "bg-card",
        titleColor: "text-foreground",
        contentColor: "text-muted-foreground",
      };
  }
};

const getAnimationClass = (animation: Slide["animation"]) => {
  switch (animation) {
    case "fade":
      return "animate-fade-in";
    case "appear":
      return "animate-slide-in";
    case "bounce":
      return "animate-[bounce_0.5s_ease-out]";
    case "zoom":
      return "animate-scale-in";
    default:
      return "";
  }
};

export function SlideCanvas({ slide, onTitleChange, onContentChange, canvasRef }: SlideCanvasProps) {
  const styles = getTemplateStyles(slide.template);
  const animationClass = getAnimationClass(slide.animation);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Trigger animation when slide changes
    setKey(prev => prev + 1);
  }, [slide.id, slide.animation]);

  return (
    <div
      ref={canvasRef}
      key={key}
      className={cn(
        "aspect-video rounded-lg shadow-lg overflow-hidden relative",
        styles.bg,
        animationClass
      )}
    >
      {/* Title Layout */}
      {slide.layout === "title" && (
        <div className="h-full flex flex-col items-center justify-center p-12">
          <input
            type="text"
            value={slide.title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Click to add title"
            className={cn(
              "w-full text-center text-4xl font-bold bg-transparent border-none outline-none",
              styles.titleColor,
              "placeholder:opacity-50"
            )}
          />
          <textarea
            value={slide.content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="Click to add subtitle"
            className={cn(
              "w-full text-center text-xl mt-4 bg-transparent border-none outline-none resize-none",
              styles.contentColor,
              "placeholder:opacity-50"
            )}
            rows={2}
          />
        </div>
      )}

      {/* Content Layout */}
      {slide.layout === "content" && (
        <div className="h-full flex flex-col p-8">
          <input
            type="text"
            value={slide.title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Click to add title"
            className={cn(
              "w-full text-2xl font-bold bg-transparent border-none outline-none mb-6",
              styles.titleColor,
              "placeholder:opacity-50"
            )}
          />
          <div className="flex-1 flex gap-6">
            <textarea
              value={slide.content}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder="Click to add content"
              className={cn(
                "flex-1 text-lg bg-transparent border-none outline-none resize-none",
                styles.contentColor,
                "placeholder:opacity-50"
              )}
            />
            {slide.image && (
              <div className="w-1/3">
                <img
                  src={slide.image}
                  alt="Slide content"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Two Column Layout */}
      {slide.layout === "two-column" && (
        <div className="h-full flex flex-col p-8">
          <input
            type="text"
            value={slide.title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Click to add title"
            className={cn(
              "w-full text-2xl font-bold bg-transparent border-none outline-none mb-6",
              styles.titleColor,
              "placeholder:opacity-50"
            )}
          />
          <div className="flex-1 grid grid-cols-2 gap-6">
            <textarea
              value={slide.content}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder="Left column content..."
              className={cn(
                "text-base bg-transparent border-none outline-none resize-none",
                styles.contentColor,
                "placeholder:opacity-50"
              )}
            />
            <div className="flex items-center justify-center">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt="Slide content"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className={cn("text-center opacity-50", styles.contentColor)}>
                  Right column / Image
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Image Only Layout */}
      {slide.layout === "image" && (
        <div className="h-full flex items-center justify-center p-4">
          {slide.image ? (
            <img
              src={slide.image}
              alt="Slide content"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          ) : (
            <div className={cn("text-center opacity-50", styles.contentColor)}>
              <p>Insert an image</p>
              <p className="text-sm">Click "Image" in the toolbar</p>
            </div>
          )}
        </div>
      )}

      {/* Blank Layout */}
      {slide.layout === "blank" && (
        <div className="h-full flex flex-col items-center justify-center p-12">
          {slide.image ? (
            <img
              src={slide.image}
              alt="Slide content"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          ) : (
            <>
              <input
                type="text"
                value={slide.title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Click to add title"
                className={cn(
                  "w-full text-center text-3xl font-bold bg-transparent border-none outline-none",
                  styles.titleColor,
                  "placeholder:opacity-50"
                )}
              />
              <textarea
                value={slide.content}
                onChange={(e) => onContentChange(e.target.value)}
                placeholder="Click to add content"
                className={cn(
                  "w-full text-center text-lg mt-4 bg-transparent border-none outline-none resize-none flex-1",
                  styles.contentColor,
                  "placeholder:opacity-50"
                )}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

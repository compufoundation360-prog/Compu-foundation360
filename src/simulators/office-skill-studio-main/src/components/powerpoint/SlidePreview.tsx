import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Slide } from "./SlidePanel";

interface SlidePreviewProps {
  slides: Slide[];
  startIndex: number;
  onExit: () => void;
}

const getTemplateStyles = (template: Slide["template"]) => {
  switch (template) {
    case "blue":
      return { bg: "bg-blue-600", titleColor: "text-white", contentColor: "text-blue-100" };
    case "dark":
      return { bg: "bg-gray-900", titleColor: "text-white", contentColor: "text-gray-300" };
    case "green":
      return { bg: "bg-emerald-600", titleColor: "text-white", contentColor: "text-emerald-100" };
    case "orange":
      return { bg: "bg-orange-500", titleColor: "text-white", contentColor: "text-orange-100" };
    case "purple":
      return { bg: "bg-purple-600", titleColor: "text-white", contentColor: "text-purple-100" };
    default:
      return { bg: "bg-white", titleColor: "text-gray-900", contentColor: "text-gray-600" };
  }
};

const getTransitionClass = (transition: Slide["transition"], isEntering: boolean) => {
  if (!isEntering) return "opacity-0";
  
  switch (transition) {
    case "fade":
      return "animate-fade-in";
    case "slide":
      return "animate-[slideInRight_0.5s_ease-out]";
    case "zoom":
      return "animate-scale-in";
    case "flip":
      return "animate-[flipIn_0.6s_ease-out]";
    default:
      return "";
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

export function SlidePreview({ slides, startIndex, onExit }: SlidePreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [key, setKey] = useState(0);

  const currentSlide = slides[currentIndex];
  const styles = getTemplateStyles(currentSlide.template);

  const goToNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setKey(prev => prev + 1);
    } else if (isPlaying) {
      setIsPlaying(false);
    }
  }, [currentIndex, slides.length, isPlaying]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setKey(prev => prev + 1);
    }
  }, [currentIndex]);

  // Auto-advance when playing
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setTimeout(goToNext, 3000);
    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
          e.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goToPrev();
          break;
        case "Escape":
          onExit();
          break;
        case "Home":
          setCurrentIndex(0);
          setKey(prev => prev + 1);
          break;
        case "End":
          setCurrentIndex(slides.length - 1);
          setKey(prev => prev + 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, onExit, slides.length]);

  // Hide controls after inactivity
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    timer = setTimeout(() => setShowControls(false), 3000);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const transitionClass = getTransitionClass(currentSlide.transition, true);
  const animationClass = getAnimationClass(currentSlide.animation);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black cursor-none"
      onClick={goToNext}
    >
      {/* Slide Content */}
      <div
        key={key}
        className={cn(
          "w-full h-full flex flex-col items-center justify-center p-16",
          styles.bg,
          transitionClass
        )}
      >
        {currentSlide.layout === "title" && (
          <div className="text-center">
            <h1 className={cn("text-6xl font-bold mb-8", styles.titleColor, animationClass)}>
              {currentSlide.title || "Untitled Slide"}
            </h1>
            <p className={cn("text-3xl", styles.contentColor, animationClass)} style={{ animationDelay: "0.2s" }}>
              {currentSlide.content}
            </p>
          </div>
        )}

        {currentSlide.layout === "content" && (
          <div className="w-full max-w-5xl">
            <h2 className={cn("text-5xl font-bold mb-12", styles.titleColor, animationClass)}>
              {currentSlide.title || "Untitled Slide"}
            </h2>
            <div className="flex gap-12">
              <p className={cn("text-2xl leading-relaxed flex-1", styles.contentColor, animationClass)} style={{ animationDelay: "0.2s" }}>
                {currentSlide.content}
              </p>
              {currentSlide.image && (
                <img
                  src={currentSlide.image}
                  alt="Slide content"
                  className={cn("w-1/3 h-auto object-cover rounded-lg", animationClass)}
                  style={{ animationDelay: "0.4s" }}
                />
              )}
            </div>
          </div>
        )}

        {currentSlide.layout === "two-column" && (
          <div className="w-full max-w-5xl">
            <h2 className={cn("text-5xl font-bold mb-12", styles.titleColor, animationClass)}>
              {currentSlide.title || "Untitled Slide"}
            </h2>
            <div className="grid grid-cols-2 gap-12">
              <p className={cn("text-2xl leading-relaxed", styles.contentColor, animationClass)} style={{ animationDelay: "0.2s" }}>
                {currentSlide.content}
              </p>
              <div className={cn(animationClass)} style={{ animationDelay: "0.4s" }}>
                {currentSlide.image ? (
                  <img src={currentSlide.image} alt="Slide content" className="w-full h-auto object-cover rounded-lg" />
                ) : (
                  <div className={cn("text-2xl leading-relaxed", styles.contentColor)}>
                    Second column content
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {currentSlide.layout === "image" && currentSlide.image && (
          <img
            src={currentSlide.image}
            alt="Slide content"
            className={cn("max-w-full max-h-full object-contain", animationClass)}
          />
        )}

        {currentSlide.layout === "blank" && (
          <div className="text-center">
            {currentSlide.image ? (
              <img
                src={currentSlide.image}
                alt="Slide content"
                className={cn("max-w-full max-h-full object-contain", animationClass)}
              />
            ) : (
              <>
                <h2 className={cn("text-5xl font-bold mb-8", styles.titleColor, animationClass)}>
                  {currentSlide.title}
                </h2>
                <p className={cn("text-2xl", styles.contentColor, animationClass)} style={{ animationDelay: "0.2s" }}>
                  {currentSlide.content}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Controls Overlay */}
      <div
        className={cn(
          "fixed inset-0 pointer-events-none transition-opacity duration-300",
          showControls ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Exit Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onExit(); }}
          className="pointer-events-auto absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          disabled={currentIndex === 0}
          className={cn(
            "pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors",
            currentIndex === 0 && "opacity-30 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          disabled={currentIndex === slides.length - 1}
          className={cn(
            "pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors",
            currentIndex === slides.length - 1 && "opacity-30 cursor-not-allowed"
          )}
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Bottom Controls */}
        <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-black/50 rounded-full">
          <button
            onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
            className="text-white hover:text-primary-foreground transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setCurrentIndex(index);
                  setKey(prev => prev + 1);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
          
          <span className="text-white text-sm">
            {currentIndex + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}

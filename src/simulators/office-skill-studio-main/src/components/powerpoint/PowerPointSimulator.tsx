import { useState, useRef, useCallback } from "react";
import { SlidePanel, type Slide } from "./SlidePanel";
import { PowerPointToolbar } from "./PowerPointToolbar";
import { SlideCanvas } from "./SlideCanvas";
import { SlidePreview } from "./SlidePreview";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { ContextMenuWrapper, ContextMenuAction } from "@/components/ui/context-menu-wrapper";
import { Copy, Trash2, Plus, Layout, ImagePlus, Palette, Play, ArrowUp, ArrowDown } from "lucide-react";

const createNewSlide = (layout: Slide["layout"] = "title"): Slide => ({
  id: Date.now().toString(),
  title: "",
  content: "",
  layout,
  template: "default",
  animation: "none",
  transition: "none",
  notes: "",
});

export function PowerPointSimulator() {
  const [slides, setSlides] = useState<Slide[]>([createNewSlide()]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSlide = slides[activeSlideIndex];

  const updateSlide = useCallback((updates: Partial<Slide>) => {
    setSlides(prev => prev.map((slide, i) => 
      i === activeSlideIndex ? { ...slide, ...updates } : slide
    ));
  }, [activeSlideIndex]);

  const handleAddSlide = () => {
    const newSlide = createNewSlide("content");
    setSlides(prev => [...prev, newSlide]);
    setActiveSlideIndex(slides.length);
    toast.success("New slide added!");
  };

  const handleDuplicateSlide = () => {
    const duplicatedSlide = { ...activeSlide, id: Date.now().toString() };
    setSlides(prev => [
      ...prev.slice(0, activeSlideIndex + 1),
      duplicatedSlide,
      ...prev.slice(activeSlideIndex + 1),
    ]);
    setActiveSlideIndex(activeSlideIndex + 1);
    toast.success("Slide duplicated!");
  };

  const handleDeleteSlide = () => {
    if (slides.length === 1) {
      toast.error("Cannot delete the only slide");
      return;
    }
    setSlides(prev => prev.filter((_, i) => i !== activeSlideIndex));
    setActiveSlideIndex(Math.max(0, activeSlideIndex - 1));
    toast.success("Slide deleted!");
  };

  const handleMoveSlideUp = () => {
    if (activeSlideIndex === 0) return;
    setSlides(prev => {
      const newSlides = [...prev];
      [newSlides[activeSlideIndex - 1], newSlides[activeSlideIndex]] = 
        [newSlides[activeSlideIndex], newSlides[activeSlideIndex - 1]];
      return newSlides;
    });
    setActiveSlideIndex(activeSlideIndex - 1);
    toast.success("Slide moved up!");
  };

  const handleMoveSlideDown = () => {
    if (activeSlideIndex === slides.length - 1) return;
    setSlides(prev => {
      const newSlides = [...prev];
      [newSlides[activeSlideIndex], newSlides[activeSlideIndex + 1]] = 
        [newSlides[activeSlideIndex + 1], newSlides[activeSlideIndex]];
      return newSlides;
    });
    setActiveSlideIndex(activeSlideIndex + 1);
    toast.success("Slide moved down!");
  };

  const handleLayoutChange = (layout: Slide["layout"]) => {
    updateSlide({ layout });
    toast.success(`Layout changed to ${layout}`);
  };

  const handleTemplateChange = (template: Slide["template"]) => {
    updateSlide({ template });
    toast.success("Template applied!");
  };

  const handleInsertImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateSlide({ image: event.target?.result as string });
        toast.success("Image inserted!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    updateSlide({ image: undefined });
    toast.success("Image removed!");
  };

  const handleAnimationChange = (animation: Slide["animation"]) => {
    updateSlide({ animation });
    toast.success(`Animation set to ${animation}`);
  };

  const handleTransitionChange = (transition: Slide["transition"]) => {
    updateSlide({ transition });
    toast.success(`Transition set to ${transition}`);
  };

  const handleNotesChange = (notes: string) => {
    updateSlide({ notes });
  };

  const handleExport = async () => {
    if (!canvasRef.current) return;

    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: null,
        scale: 2,
      });
      
      const link = document.createElement("a");
      link.download = `slide-${activeSlideIndex + 1}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      
      toast.success("Slide exported as PNG!");
    } catch {
      toast.error("Failed to export slide");
    }
  };

  const handleStartPreview = () => {
    setIsPreviewMode(true);
  };

  const handleExitPreview = () => {
    setIsPreviewMode(false);
  };

  const navigateSlide = (direction: "prev" | "next") => {
    if (direction === "prev" && activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    } else if (direction === "next" && activeSlideIndex < slides.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onNew: handleAddSlide,
    onDelete: handleDeleteSlide,
    onArrowUp: () => navigateSlide("prev"),
    onArrowDown: () => navigateSlide("next"),
    onArrowLeft: () => navigateSlide("prev"),
    onArrowRight: () => navigateSlide("next"),
    onEscape: handleExitPreview,
  }, !isPreviewMode);

  // Context menu for slide panel
  const slideContextMenuActions: ContextMenuAction[] = [
    { label: "Add New Slide", icon: <Plus className="w-4 h-4" />, shortcut: "Ctrl+N", onClick: handleAddSlide },
    { label: "Duplicate Slide", icon: <Copy className="w-4 h-4" />, onClick: handleDuplicateSlide },
    { separator: true },
    { label: "Move Up", icon: <ArrowUp className="w-4 h-4" />, onClick: handleMoveSlideUp, disabled: activeSlideIndex === 0 },
    { label: "Move Down", icon: <ArrowDown className="w-4 h-4" />, onClick: handleMoveSlideDown, disabled: activeSlideIndex === slides.length - 1 },
    { separator: true },
    { label: "Delete Slide", icon: <Trash2 className="w-4 h-4" />, shortcut: "Del", onClick: handleDeleteSlide, disabled: slides.length === 1 },
  ];

  // Context menu for canvas
  const canvasContextMenuActions: ContextMenuAction[] = [
    {
      label: "Layout",
      icon: <Layout className="w-4 h-4" />,
      submenu: [
        { label: "Title Slide", onClick: () => handleLayoutChange("title") },
        { label: "Content Layout", onClick: () => handleLayoutChange("content") },
        { label: "Two Column", onClick: () => handleLayoutChange("two-column") },
        { label: "Image Only", onClick: () => handleLayoutChange("image") },
        { label: "Blank", onClick: () => handleLayoutChange("blank") },
      ],
    },
    {
      label: "Template",
      icon: <Palette className="w-4 h-4" />,
      submenu: [
        { label: "Default (Light)", onClick: () => handleTemplateChange("default") },
        { label: "Professional Blue", onClick: () => handleTemplateChange("blue") },
        { label: "Dark Mode", onClick: () => handleTemplateChange("dark") },
        { label: "Nature Green", onClick: () => handleTemplateChange("green") },
        { label: "Sunset Orange", onClick: () => handleTemplateChange("orange") },
        { label: "Royal Purple", onClick: () => handleTemplateChange("purple") },
      ],
    },
    { separator: true },
    { label: "Insert Image", icon: <ImagePlus className="w-4 h-4" />, onClick: handleInsertImage },
    { label: "Remove Image", icon: <Trash2 className="w-4 h-4" />, onClick: handleRemoveImage, disabled: !activeSlide.image },
    { separator: true },
    { label: "Start Slideshow", icon: <Play className="w-4 h-4" />, shortcut: "F5", onClick: handleStartPreview },
  ];

  if (isPreviewMode) {
    return (
      <SlidePreview
        slides={slides}
        startIndex={activeSlideIndex}
        onExit={handleExitPreview}
      />
    );
  }

  return (
    <div className="flex h-[650px] bg-card rounded-lg shadow-sm border overflow-hidden animate-fade-in">
      <ContextMenuWrapper actions={slideContextMenuActions}>
        <div>
          <SlidePanel
            slides={slides}
            activeSlide={activeSlideIndex}
            onSlideSelect={setActiveSlideIndex}
            onAddSlide={handleAddSlide}
            onDeleteSlide={handleDeleteSlide}
            onDuplicateSlide={handleDuplicateSlide}
          />
        </div>
      </ContextMenuWrapper>
      
      <div className="flex-1 flex flex-col">
        <PowerPointToolbar
          onLayoutChange={handleLayoutChange}
          onTemplateChange={handleTemplateChange}
          onInsertImage={handleInsertImage}
          onAnimationChange={handleAnimationChange}
          onTransitionChange={handleTransitionChange}
          onExport={handleExport}
          onStartPreview={handleStartPreview}
        />
        
        <div className="flex-1 flex items-center justify-center p-8 bg-muted/30">
          <ContextMenuWrapper actions={canvasContextMenuActions}>
            <div className="w-full max-w-3xl">
              <SlideCanvas
                slide={activeSlide}
                onTitleChange={(title) => updateSlide({ title })}
                onContentChange={(content) => updateSlide({ content })}
                canvasRef={canvasRef}
              />
            </div>
          </ContextMenuWrapper>
        </div>

        {/* Speaker Notes */}
        <div className="p-3 bg-muted/50 border-t">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-muted-foreground">Speaker Notes:</span>
          </div>
          <textarea
            value={activeSlide.notes || ""}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="Add speaker notes here..."
            className="w-full h-16 px-2 py-1 text-sm bg-background border rounded resize-none focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <div className="p-3 bg-muted/50 border-t">
          <p className="text-sm text-muted-foreground text-center">
            Slide {activeSlideIndex + 1} of {slides.length} | 
            Layout: {activeSlide.layout} | 
            Animation: {activeSlide.animation} |
            Transition: {activeSlide.transition}
          </p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Use arrow keys to navigate slides. Right-click for more options. Press F5 or click Play to start slideshow.
          </p>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
}

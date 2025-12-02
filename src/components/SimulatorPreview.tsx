import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, HardDrive, Network, Shield, Link2, Cpu } from "lucide-react";
import { Simulator } from "@/data/simulators";
import { cn } from "@/lib/utils";

interface SimulatorPreviewProps {
  simulator: Simulator;
}

// Icon mapping for simulators
const simulatorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "pc-build": Cpu,
  "file-system-storage": HardDrive,
  "networking-internet": Network,
  "blockchain-currency": Link2,
  "security-scam-training": Shield,
};

export function SimulatorPreview({ simulator }: SimulatorPreviewProps) {
  const Icon = simulatorIcons[simulator.id] || HardDrive;
  const [imageError, setImageError] = useState(false);

  const handleLaunch = () => {
    if (simulator.url && simulator.url !== "#") {
      // Open in new tab
      window.open(simulator.url, "_blank", "noopener,noreferrer");
    } else {
      // Placeholder - could show a toast message
      console.log("Simulator URL not yet configured");
    }
  };

  // Get image URL - handle both full path and filename
  const getPreviewImageUrl = () => {
    if (!simulator.previewImage) return null;
    
    // Extract filename from path if needed
    const imageName = simulator.previewImage.includes('/') 
      ? simulator.previewImage.split('/').pop() || simulator.previewImage
      : simulator.previewImage;
    
    // In Vite, we need to use import.meta.url for dynamic assets
    // This works for both dev and production
    try {
      const imagePath = new URL(`../assets/module-media/${imageName}`, import.meta.url);
      return imagePath.href;
    } catch {
      // Fallback: try direct path (works in dev)
      return `/src/assets/module-media/${imageName}`;
    }
  };

  const previewImageUrl = getPreviewImageUrl();

  return (
    <Card className="h-full p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 border-2 border-primary/20 dark:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Preview Area */}
      <div className="flex-1 flex items-center justify-center mb-6 min-h-[200px] bg-background/50 dark:bg-card/50 rounded-xl border border-border/50 overflow-hidden">
        {previewImageUrl && !imageError ? (
          <img
            src={previewImageUrl}
            alt={simulator.name}
            className="w-full h-full object-cover rounded-xl"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 p-8 w-full h-full">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 flex items-center justify-center shadow-lg">
              <Icon className="w-12 h-12 text-primary" />
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              {imageError ? "Image failed to load" : "Preview Coming Soon"}
            </div>
          </div>
        )}
      </div>

      {/* Simulator Info */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <h3 className="text-xl font-bold text-foreground">
              {simulator.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {simulator.description}
          </p>
        </div>

        {/* Single Start Simulator Button */}
        <Button
          onClick={handleLaunch}
          size="lg"
          className={cn(
            "w-full bg-primary hover:bg-primary-dark text-primary-foreground",
            "shadow-lg hover:shadow-xl transition-all duration-300",
            "hover:scale-105 font-semibold"
          )}
          disabled={simulator.url === "#"}
        >
          <Play className="mr-2 h-5 w-5" />
          Start Simulator
        </Button>
      </div>
    </Card>
  );
}


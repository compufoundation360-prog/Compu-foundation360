import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, BarChart3, Settings, Globe, HardDrive, Zap, Target, RefreshCw, Dumbbell, Bot, CheckCircle2, Monitor, Building2, Building, Rocket, Plug, MemoryStick, Cpu } from "lucide-react";
import { getIllustration } from "@/data/illustrations";

interface ImageCardProps {
  card: any;
  index: number;
  alternateLayout?: boolean; // If true, image on left, text on right
}

export const ImageCard: React.FC<ImageCardProps> = ({ card, index, alternateLayout = false }) => {
  const cardIllustrationKey = card.illustration;
  const Illustration = cardIllustrationKey ? getIllustration(cardIllustrationKey) : null;
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Extract icon from title if it contains emoji
  const extractIconFromTitle = (title: string) => {
    const emojiRegex = /([⚡🎯💾🔄💪🤖✅🖥️🏢🏦🚀🔌📊⚙️🌐])/;
    const match = title.match(emojiRegex);
    return match ? match[1] : null;
  };

  // Get icon component from emoji
  const getIconComponent = (emoji: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      "⚡": Zap,
      "🎯": Target,
      "💾": HardDrive,
      "🔄": RefreshCw,
      "💪": Dumbbell,
      "🤖": Bot,
      "✅": CheckCircle2,
      "🖥️": Monitor,
      "🏢": Building2,
      "🏦": Building,
      "🚀": Rocket,
      "🔌": Plug,
      "📊": BarChart3,
      "⚙️": Settings,
      "🌐": Globe,
    };
    return iconMap[emoji] || null;
  };

  // Clean title (remove emoji)
  const cleanTitle = (title: string) => {
    return title.replace(/[⚡🎯💾🔄💪🤖✅🖥️🏢🏦🚀🔌📊⚙️🌐]/g, '').trim();
  };

  const titleIcon = extractIconFromTitle(card.title);
  const IconComponent = titleIcon ? getIconComponent(titleIcon) : null;
  const displayTitle = cleanTitle(card.title);

  // For images, use Vite's asset handling - images should be in src/assets/module-media/
  const getImageUrl = (imageName: string) => {
    try {
      return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
    } catch {
      return `/src/assets/module-media/${imageName}`;
    }
  };
  const imagePath = card.image ? getImageUrl(card.image) : null;

  // Determine layout direction
  const imageSection = (imagePath || Illustration) ? (
    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
      <DialogTrigger asChild>
        <div className="w-full h-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden cursor-pointer">
          {imagePath ? (
            <img
              src={imagePath}
              alt={card.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : Illustration ? (
            <div className="p-4">
              <Illustration width={400} height={300} className="max-w-full h-auto" />
            </div>
          ) : null}
        </div>
      </DialogTrigger>
      {imagePath && (
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
          <div className="relative bg-background rounded-lg overflow-hidden shadow-2xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background rounded-full"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <img
              src={imagePath}
              alt={card.title}
              loading="lazy"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="p-4 bg-background border-t">
              <h3 className="text-lg font-bold text-foreground">{displayTitle || card.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{card.description}</p>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  ) : null;

  const textSection = (
    <div className="p-8">
      <div className="flex items-start gap-3 mb-3">
        {(card.icon || IconComponent) && (
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            {IconComponent ? (
              <IconComponent className="h-5 w-5 text-primary" />
            ) : card.icon === "📊" ? (
              <BarChart3 className="h-5 w-5 text-primary" />
            ) : card.icon === "⚙️" ? (
              <Settings className="h-5 w-5 text-primary" />
            ) : card.icon === "🌐" ? (
              <Globe className="h-5 w-5 text-primary" />
            ) : card.icon === "💾" ? (
              <HardDrive className="h-5 w-5 text-primary" />
            ) : (
              <span className="text-2xl">{card.icon}</span>
            )}
          </div>
        )}
        <div className="flex-1">
          <h4 className="text-lg font-bold text-primary mb-2">{displayTitle || card.title}</h4>
          <p className="text-muted-foreground mb-3">{card.description}</p>
          {card.details && (
            <div className="space-y-2">
              {Array.isArray(card.details) ? (
                <ul className="space-y-1">
                  {card.details.map((detail: string, i: number) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">{card.details}</p>
              )}
              {card.examples && (
                <p className="text-xs text-muted-foreground italic mt-2">
                  Examples: {card.examples}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Card
      className="group p-0 overflow-hidden hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {alternateLayout ? (
        // Image on left, text on right
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-0">
          <div className="w-full">
            {imageSection}
          </div>
          {textSection}
        </div>
      ) : (
        // Image on right, text on left (default)
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-0">
          {textSection}
          <div className="w-full">
            {imageSection}
          </div>
        </div>
      )}
    </Card>
  );
};


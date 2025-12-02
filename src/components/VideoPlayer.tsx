import React from "react";
import { Play, Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  title?: string;
  description?: string;
  className?: string;
  embedUrl?: string;
  embedHtml?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  title = "Video Explanation",
  description = "This section will contain the video explanation.",
  className = "",
  embedUrl,
  embedHtml
}) => {
  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      )}
      
      <Card className="p-0 bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-dashed border-primary/20 overflow-hidden">
        {/* Video/Embed Container */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          {embedHtml ? (
            // Render embed HTML (for Sketchfab, etc.)
            <div 
              className="w-full h-full [&_.sketchfab-embed-wrapper]:w-full [&_.sketchfab-embed-wrapper]:h-full [&_iframe]:w-full [&_iframe]:h-full [&_p]:hidden"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          ) : embedUrl ? (
            // Render iframe from URL
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              title={title || "Embedded content"}
            />
          ) : (
            // Placeholder when no embed provided
            <>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-20 h-20 bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg"
                  disabled
                >
                  <Play className="h-10 w-10 ml-1" />
                </Button>
              </div>
              
              {/* Placeholder Text */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-sm text-muted-foreground bg-background/80 px-4 py-2 rounded-lg">
                  Empty - User will add video
                </p>
              </div>
              
              {/* Fullscreen Icon */}
              <div className="absolute top-4 right-4">
                <div className="p-2 bg-background/80 rounded-lg">
                  <Maximize2 className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Video Description */}
        {description && (
          <div className="p-6 border-t border-border">
            <p className="text-muted-foreground">{description}</p>
          </div>
        )}
      </Card>
    </div>
  );
};


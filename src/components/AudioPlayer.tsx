import React from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  title?: string;
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  title = "Audio Explanation",
  className = "" 
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState("00:00");
  const [duration, setDuration] = React.useState("00:00");

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Mock functionality - user will add actual audio
  };

  return (
    <Card className={`p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-dashed border-primary/20 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Volume2 className="h-5 w-5" />
          <span className="text-sm font-medium">{title}</span>
        </div>
        
        <div className="w-full">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-muted rounded-full mb-2">
            <div 
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: "0%" }}
            />
          </div>
          
          {/* Time Display */}
          <div className="flex justify-between text-xs text-muted-foreground mb-4">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
          
          {/* Play/Pause Button */}
          <div className="flex justify-center">
            <Button
              onClick={handlePlayPause}
              size="lg"
              className="rounded-full w-16 h-16 bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </Button>
          </div>
        </div>
        
        <p className="text-xs text-center text-muted-foreground italic mt-2">
          Mock placeholder - User will add audio file
        </p>
      </div>
    </Card>
  );
};


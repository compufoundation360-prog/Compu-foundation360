import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  progress: number;
  lessons: number;
}

export const ModuleCard = ({ id, title, description, icon, image, progress, lessons }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden hover:shadow-soft-lg transition-all duration-300 bg-card border-border animate-fade-in">
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary">
            <div className="text-6xl opacity-20">{icon}</div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-foreground">
          {lessons} lessons
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-primary text-3xl">{icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-primary">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Button 
          onClick={() => navigate(`/module/${id}`)}
          className="w-full group/btn bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          <span>Start Learning</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};

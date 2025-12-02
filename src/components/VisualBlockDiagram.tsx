import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BlockUnit {
  id: string;
  name: string;
  description: string;
  components: string[];
  flow: string;
}

interface VisualBlockDiagramProps {
  units: BlockUnit[];
  title?: string;
}

export const VisualBlockDiagram: React.FC<VisualBlockDiagramProps> = ({ units, title }) => {
  const getUnitIcon = (id: string) => {
    const iconMap: Record<string, string> = {
      input: "📥",
      processing: "⚙️",
      output: "📤",
      storage: "💾",
    };
    return iconMap[id.toLowerCase()] || "📋";
  };

  const getUnitColor = (id: string) => {
    const colorMap: Record<string, string> = {
      input: "from-primary/10 to-primary/5 border-primary/20",
      processing: "from-secondary/10 to-secondary/5 border-secondary/20",
      output: "from-accent/10 to-accent/5 border-accent/20",
      storage: "from-success/10 to-success/5 border-success/20",
    };
    return colorMap[id.toLowerCase()] || "from-muted/10 to-muted/5 border-border";
  };

  return (
    <div className="my-8">
      {title && <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>}
      
      <div className="space-y-6">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {units.map((unit, index) => (
              <React.Fragment key={unit.id}>
                <Card className={`p-6 min-w-[200px] bg-gradient-to-br ${getUnitColor(unit.id)} border-2 hover:shadow-soft-lg transition-all`}>
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center mx-auto mb-3 border-2 border-current">
                      <span className="text-4xl">{getUnitIcon(unit.id)}</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{unit.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{unit.description}</p>
                    <div className="text-xs text-foreground/70 italic mb-3 bg-background/50 px-2 py-1 rounded">{unit.flow}</div>
                  </div>
                  
                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-semibold text-foreground mb-2">Components:</p>
                    <ul className="space-y-1">
                      {unit.components.map((comp, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {comp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
                
                {index < units.length - 1 && (
                  <ArrowRight className="text-primary h-8 w-8 flex-shrink-0 hidden lg:block" />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Storage unit below on desktop */}
          {units.find(u => u.id === "storage") && (
            <div className="flex justify-center mt-6">
              <Card className={`p-6 min-w-[200px] bg-gradient-to-br ${getUnitColor("storage")} border-2 hover:shadow-soft-lg transition-all`}>
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center mx-auto mb-3 border-2 border-current">
                    <span className="text-4xl">{getUnitIcon("storage")}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Storage Unit</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {units.find(u => u.id === "storage")?.description}
                  </p>
                  <div className="text-xs text-foreground/70 italic mb-3 bg-background/50 px-2 py-1 rounded">
                    {units.find(u => u.id === "storage")?.flow}
                  </div>
                </div>
                
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-foreground mb-2">Components:</p>
                  <ul className="space-y-1">
                    {units.find(u => u.id === "storage")?.components.map((comp, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {units.filter(u => u.id !== "storage").map((unit, index) => (
            <React.Fragment key={unit.id}>
              <Card className={`p-6 w-full bg-gradient-to-br ${getUnitColor(unit.id)} border-2`}>
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center mx-auto mb-3 border-2 border-current">
                    <span className="text-4xl">{getUnitIcon(unit.id)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{unit.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{unit.description}</p>
                  <div className="text-xs text-foreground/70 italic mb-3 bg-background/50 px-2 py-1 rounded">{unit.flow}</div>
                </div>
                
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-foreground mb-2">Components:</p>
                  <ul className="space-y-1">
                    {unit.components.map((comp, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
              
              {index < units.filter(u => u.id !== "storage").length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown className="text-primary h-8 w-8 flex-shrink-0" />
                </div>
              )}
            </React.Fragment>
          ))}
          
          {/* Storage unit */}
          {units.find(u => u.id === "storage") && (
            <>
              <div className="flex justify-center">
                <ArrowDown className="text-primary h-8 w-8 flex-shrink-0" />
              </div>
              <Card className={`p-6 w-full bg-gradient-to-br ${getUnitColor("storage")} border-2`}>
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center mx-auto mb-3 border-2 border-current">
                    <span className="text-4xl">{getUnitIcon("storage")}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Storage Unit</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {units.find(u => u.id === "storage")?.description}
                  </p>
                  <div className="text-xs text-foreground/70 italic mb-3 bg-background/50 px-2 py-1 rounded">
                    {units.find(u => u.id === "storage")?.flow}
                  </div>
                </div>
                
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-foreground mb-2">Components:</p>
                  <ul className="space-y-1">
                    {units.find(u => u.id === "storage")?.components.map((comp, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


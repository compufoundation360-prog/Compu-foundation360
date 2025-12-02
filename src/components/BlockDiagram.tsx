import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowDown } from "lucide-react";

interface BlockUnit {
  id: string;
  name: string;
  description: string;
  components: string[];
  flow: string;
}

interface BlockDiagramProps {
  units: BlockUnit[];
  title?: string;
}

export const BlockDiagram = ({ units, title }: BlockDiagramProps) => {
  return (
    <div className="my-8">
      {title && <h3 className="text-xl font-bold text-foreground mb-6">{title}</h3>}
      
      <div className="space-y-6">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4 items-center">
            {units.map((unit, index) => (
              <div key={unit.id} className="flex flex-col items-center gap-4">
                <Card className="p-6 w-full bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 hover:shadow-soft-lg transition-all">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">
                        {unit.id === "input" && "📥"}
                        {unit.id === "processing" && "⚙️"}
                        {unit.id === "output" && "📤"}
                        {unit.id === "storage" && "💾"}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2">{unit.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{unit.description}</p>
                    <div className="text-xs text-foreground/70 italic mb-3">{unit.flow}</div>
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
                  <ArrowRight className="text-primary h-8 w-8 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {units.map((unit, index) => (
            <div key={unit.id} className="flex flex-col items-center gap-4">
              <Card className="p-6 w-full bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">
                      {unit.id === "input" && "📥"}
                      {unit.id === "processing" && "⚙️"}
                      {unit.id === "output" && "📤"}
                      {unit.id === "storage" && "💾"}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{unit.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{unit.description}</p>
                  <div className="text-xs text-foreground/70 italic mb-3">{unit.flow}</div>
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
                <ArrowDown className="text-primary h-8 w-8 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


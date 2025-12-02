import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

interface FlowchartStep {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  color?: string;
}

interface VisualFlowchartProps {
  steps: FlowchartStep[];
  title?: string;
  layout?: "horizontal" | "vertical";
}

export const VisualFlowchart: React.FC<VisualFlowchartProps> = ({ 
  steps, 
  title,
  layout = "horizontal" 
}) => {
  const getStepColor = (step: FlowchartStep, index: number) => {
    if (step.color) return step.color;
    
    const colors = [
      "bg-primary text-primary-foreground",
      "bg-secondary text-secondary-foreground",
      "bg-accent text-accent-foreground",
      "bg-success text-success-foreground",
    ];
    return colors[index % colors.length];
  };

  const getStepIcon = (step: FlowchartStep) => {
    if (step.icon) return step.icon;
    
    const iconMap: Record<string, string> = {
      input: "📥",
      process: "⚙️",
      processing: "⚙️",
      output: "📤",
      storage: "💾",
      storage1: "💾",
      storage2: "💾",
    };
    return iconMap[step.id.toLowerCase()] || "📋";
  };

  if (layout === "vertical") {
    return (
      <div className="my-8">
        {title && <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>}
        <div className="flex flex-col items-center gap-4 p-6 bg-muted/30 rounded-xl">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`px-8 py-6 rounded-lg font-semibold text-center min-w-[200px] shadow-soft transition-transform hover:scale-105 flex flex-col items-center gap-2 ${getStepColor(step, index)}`}>
                  <span className="text-3xl">{getStepIcon(step)}</span>
                  <span>{step.label}</span>
                  {step.description && (
                    <span className="text-xs opacity-80 mt-1">{step.description}</span>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowDown className="text-muted-foreground h-8 w-8 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      {title && <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>}
      <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-muted/30 rounded-xl">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`px-8 py-6 rounded-lg font-semibold text-center min-w-[160px] shadow-soft transition-transform hover:scale-105 flex flex-col items-center gap-2 ${getStepColor(step, index)}`}>
                <span className="text-3xl">{getStepIcon(step)}</span>
                <span>{step.label}</span>
                {step.description && (
                  <span className="text-xs opacity-80 mt-1 text-center">{step.description}</span>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="text-muted-foreground h-8 w-8 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Step descriptions below */}
      {steps.some(s => s.description) && (
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            step.description && (
              <div key={index} className="p-4 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{getStepIcon(step)}</span>
                  <h4 className="font-semibold text-foreground">{step.label}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};


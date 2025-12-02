import { ArrowRight } from "lucide-react";

interface FlowchartStep {
  id: string;
  label: string;
  color?: string;
}

interface FlowchartComponentProps {
  steps: FlowchartStep[];
  title?: string;
}

export const FlowchartComponent = ({ steps, title }: FlowchartComponentProps) => {
  return (
    <div className="my-8">
      {title && <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>}
      <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-muted/30 rounded-xl">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div 
              className={`px-6 py-4 rounded-lg font-semibold text-center min-w-[140px] shadow-soft transition-transform hover:scale-105 ${
                step.color || 'bg-primary text-primary-foreground'
              }`}
            >
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="text-muted-foreground h-6 w-6 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

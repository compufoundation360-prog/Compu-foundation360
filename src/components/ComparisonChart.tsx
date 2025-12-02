import React from "react";
import { Card } from "@/components/ui/card";

interface ComparisonItem {
  task?: string;
  human?: string;
  computer?: string;
  type?: string;
  size?: string;
  power?: string;
  users?: string;
  cost?: string;
  [key: string]: any;
}

interface ComparisonChartProps {
  title?: string;
  items: ComparisonItem[];
  type?: "speed" | "advantages" | "table";
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ 
  title, 
  items, 
  type = "table" 
}) => {
  if (type === "speed" && items[0]?.task) {
    return (
      <div className="my-8">
        {title && <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>}
        <Card className="p-8">
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">{item.task}</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-base font-medium text-muted-foreground w-28 flex-shrink-0">Human:</span>
                    <div className="flex-1 bg-muted/30 rounded-full h-8 relative overflow-hidden">
                      <div 
                        className="bg-destructive h-full rounded-full flex items-center justify-end pr-3"
                        style={{ width: "20%" }}
                      >
                        <span className="text-sm font-medium text-destructive-foreground">{item.human}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base font-medium text-muted-foreground w-28 flex-shrink-0">Computer:</span>
                    <div className="flex-1 bg-muted/30 rounded-full h-8 relative overflow-hidden">
                      <div 
                        className="bg-success h-full rounded-full flex items-center justify-end pr-3"
                        style={{ width: "95%" }}
                      >
                        <span className="text-sm font-medium text-success-foreground">{item.computer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="my-8">
        {title && <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>}
        <Card className="p-8 overflow-x-auto">
          <table className="w-full border-collapse min-w-full">
            <thead>
              <tr className="border-b-2 border-border">
                {Object.keys(items[0] || {}).map((key) => (
                  <th key={key} className="text-left p-4 font-bold text-base text-foreground">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                  {Object.values(item).map((value: any, j: number) => (
                    <td key={j} className="p-4 text-base text-foreground">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }

  return null;
};


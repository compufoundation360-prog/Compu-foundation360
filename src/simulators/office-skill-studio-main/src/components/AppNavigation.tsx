import { FileText, Table, Presentation } from "lucide-react";
import { cn } from "@/lib/utils";

type AppTab = "word" | "excel" | "powerpoint";

interface AppNavigationProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const tabs = [
  { id: "word" as const, label: "Word", icon: FileText, color: "text-word-accent" },
  { id: "excel" as const, label: "Excel", icon: Table, color: "text-excel-accent" },
  { id: "powerpoint" as const, label: "PowerPoint", icon: Presentation, color: "text-powerpoint-accent" },
];

export function AppNavigation({ activeTab, onTabChange }: AppNavigationProps) {
  return (
    <header className="bg-card border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14">
          <div className="flex items-center gap-2 mr-8">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MS</span>
            </div>
            <span className="font-semibold text-foreground">Office Simulator</span>
          </div>
          
          <nav className="flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive && tab.color)} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

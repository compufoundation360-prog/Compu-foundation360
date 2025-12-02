import React from "react";
import {
  Zap,
  Target,
  HardDrive,
  RefreshCw,
  Dumbbell,
  Bot,
  CheckCircle2,
  Monitor,
  Building2,
  Building,
  Rocket,
  Plug,
  MemoryStick,
  Cpu,
  BarChart3,
  Settings,
  Globe,
} from "lucide-react";

interface IconRendererProps {
  icon: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ icon, className = "h-5 w-5" }) => {
  // Map emoji icons to lucide-react icons
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

  const IconComponent = iconMap[icon];
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  // Fallback to emoji if no icon found
  return <span>{icon}</span>;
};


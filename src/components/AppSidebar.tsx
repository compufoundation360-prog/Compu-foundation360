import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Computer, Settings, Home, ChevronDown, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

type ModuleTopic = {
  id: string;
  title: string;
  summary: string;
  hash: string;
};

const modules = [
  { id: 1, title: "Digital Awareness & Foundation", path: "/module/1" },
  { id: 2, title: "Internal Components & Architecture", path: "/module/2" },
];

const moduleTopics: Record<number, ModuleTopic[]> = {
  1: [
    {
      id: "m1-t1",
      title: "What is a Computer?",
      summary: "",
      hash: "#topic-what-is-a-computer",
  },
  {
      id: "m1-t2",
      title: "Types of Computers",
      summary: "",
      hash: "#topic-types-of-computers",
    },
    {
      id: "m1-t3",
      title: "Hardware Basics",
      summary: "",
      hash: "#topic-hardware-basics",
    },
    {
      id: "m1-t4",
      title: "Software Basics",
      summary: "",
      hash: "#topic-software-basics",
  },
  {
      id: "m1-t5",
      title: "Hardware vs Software",
      summary: "",
      hash: "#topic-hardware-vs-software",
    },
    {
      id: "m1-t6",
      title: "Input Devices",
      summary: "",
      hash: "#topic-input-devices",
    },
    {
      id: "m1-t7",
      title: "Output Devices",
      summary: "",
      hash: "#topic-output-devices",
    },
    {
      id: "m1-t8",
      title: "I/O Devices",
      summary: "",
      hash: "#topic-io-devices",
  },
  ],
  2: [
    {
      id: "m2-t1",
      title: "CPU Basics",
      summary: "",
      hash: "#topic-cpu-basics",
    },
    {
      id: "m2-t2",
      title: "RAM Basics",
      summary: "",
      hash: "#topic-ram-basics",
    },
    {
      id: "m2-t3",
      title: "ROM Basics",
      summary: "",
      hash: "#topic-rom-basics",
    },
    {
      id: "m2-t4",
      title: "Storage Concepts",
      summary: "",
      hash: "#topic-storage-concepts",
    },
    {
      id: "m2-t5",
      title: "HDD",
      summary: "",
      hash: "#topic-hdd",
    },
    {
      id: "m2-t6",
      title: "SSD & NVMe",
      summary: "",
      hash: "#topic-ssd-nvme",
    },
    {
      id: "m2-t7",
      title: "Motherboard",
      summary: "",
      hash: "#topic-motherboard",
    },
    {
      id: "m2-t8",
      title: "Ports & Connectors",
      summary: "",
      hash: "#topic-ports-connectors",
    },
    {
      id: "m2-t9",
      title: "GPU Basics",
      summary: "",
      hash: "#topic-gpu-basics",
    },
    {
      id: "m2-t10",
      title: "ALU",
      summary: "",
      hash: "#topic-alu",
    },
    {
      id: "m2-t11",
      title: "CU",
      summary: "",
      hash: "#topic-cu",
    },
    {
      id: "m2-t12",
      title: "Firmware",
      summary: "",
      hash: "#topic-firmware",
    },
  ],
};

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  // Auto-expand Module 1 if on Module 1 pages
  const [isModule1Open, setIsModule1Open] = useState(location.pathname.startsWith("/module/1"));
  // Auto-expand Module 2 if on Module 2 pages
  const [isModule2Open, setIsModule2Open] = useState(location.pathname.startsWith("/module/2"));

  // Update Module 1 expansion when location changes
  useEffect(() => {
    setIsModule1Open(location.pathname.startsWith("/module/1"));
  }, [location.pathname]);

  // Update Module 2 expansion when location changes
  useEffect(() => {
    setIsModule2Open(location.pathname.startsWith("/module/2"));
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    // Extract module ID from path (e.g., "/module/2" -> "2")
    const moduleIdFromPath = path.split("/").pop();
    
    // Check if we're on the module page
    if (location.pathname.startsWith(path)) {
      return true;
    }
    
    // Check if we're on a lesson page for this module
    // Lesson paths are like "/lesson/2/1" where 2 is the module ID
    const lessonPathMatch = location.pathname.match(/^\/lesson\/(\d+)\//);
    if (lessonPathMatch) {
      const currentModuleId = lessonPathMatch[1];
      return currentModuleId === moduleIdFromPath;
    }
    
    return false;
  };

  return (
    <Sidebar className="hide-scrollbar">
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Computer className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground leading-tight">Compu-Foundation 360°</h2>
            <p className="text-xs text-muted-foreground">Learn & Master</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/dashboard")}
                  isActive={isActive("/dashboard")}
                  className={cn(
                    "h-10 px-3 gap-3 transition-all duration-200",
                    isActive("/dashboard") && "bg-primary/20 dark:bg-primary/30 shadow-sm"
                  )}
                >
                  <Home className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive("/dashboard") && "text-primary"
                  )} />
                  <span className={cn(
                    "font-medium",
                    isActive("/dashboard") && "text-primary font-semibold"
                  )}>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
                <span>Learning Modules</span>
            </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {modules.map((module) => {
                    const active = isActive(module.path) || location.pathname.startsWith(`/module/${module.id}/part`) || location.pathname.startsWith(`/module/${module.id}/topic`);
                    const moduleNumber = module.id.toString().padStart(2, "0");
                    const numberClasses = cn(
                      "text-[11px] font-semibold tracking-wider uppercase text-muted-foreground",
                      active && "text-primary"
                    );
                    const titleClasses = cn(
                      "text-sm leading-relaxed flex-1 text-left",
                      active && "text-primary font-semibold"
                    );
                    const topics = moduleTopics[module.id] ?? [];
                    const hasTopics = topics.length > 0;
                    
                    if ((module.id === 1 || module.id === 2) && hasTopics) {
                      const isModuleOpen = module.id === 1 ? isModule1Open : isModule2Open;
                      const setIsModuleOpen = module.id === 1 ? setIsModule1Open : setIsModule2Open;
                      
                      return (
                        <Collapsible
                          key={module.id}
                          open={isModuleOpen}
                          onOpenChange={setIsModuleOpen}
                        >
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton
                                isActive={active}
                                className={cn(
                                  "h-11 px-3 gap-3 transition-all duration-200 group w-full",
                                  "hover:bg-sidebar-accent/80 hover:shadow-sm",
                                  active && "bg-primary/20 dark:bg-primary/30 shadow-md font-semibold"
                                )}
                              >
                                <span className={numberClasses}>{moduleNumber}.</span>
                                <span className={titleClasses}>{module.title}</span>
                                {isModuleOpen ? (
                                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                                )}
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 pt-1 space-y-1 overflow-hidden">
                              {topics.map((topic, index) => {
                                // Extract topic number from topic.id (e.g., "m1-t1" -> 1, "m2-t1" -> 1)
                                const topicNumber = index + 1;
                                const topicPath = `${module.path}/topic/${topicNumber}`;
                                const isTopicActive = location.pathname === topicPath;
                                return (
                                  <SidebarMenuItem key={topic.id}>
                                    <SidebarMenuButton
                                      onClick={() => navigate(topicPath)}
                                      isActive={isTopicActive}
                                      className={cn(
                                        "w-full px-3 py-2 gap-2 rounded-md text-left transition-all duration-200",
                                        "hover:bg-sidebar-accent/60 hover:translate-x-1",
                                        isTopicActive && "bg-primary/10 text-primary shadow-sm"
                                      )}
                                    >
                                      <div className="flex flex-col">
                                        <span className="text-xs font-semibold">{topic.title}</span>
                                      </div>
                                    </SidebarMenuButton>
                                  </SidebarMenuItem>
                                );
                              })}
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    }
                    
                    // For modules without topics (shouldn't happen with only 1 and 2, but keeping for safety)
                    return (
                      <SidebarMenuItem key={module.id}>
                        <SidebarMenuButton
                          onClick={() => navigate(module.path)}
                          isActive={active}
                          className={cn(
                            "h-11 px-3 gap-3 transition-all duration-200 group",
                            "hover:bg-sidebar-accent/80 hover:shadow-sm",
                            active && "bg-primary/20 dark:bg-primary/30 shadow-md font-semibold"
                          )}
                        >
                          <span className={numberClasses}>{moduleNumber}.</span>
                          <span className={titleClasses}>{module.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => navigate("/settings")}
              isActive={isActive("/settings")}
              className={cn(
                "h-10 px-3 gap-3 transition-all duration-200",
                isActive("/settings") && "bg-primary/20 dark:bg-primary/30 shadow-sm"
              )}
            >
              <Settings className={cn(
                "h-4 w-4 shrink-0 transition-colors",
                isActive("/settings") && "text-primary"
              )} />
              <span className={cn(
                "font-medium",
                isActive("/settings") && "text-primary font-semibold"
              )}>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}


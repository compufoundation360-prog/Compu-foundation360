import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { modules, Module } from "@/config/sidebar-data";
import { CompuLogo } from "@/components/CompuLogo";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function NewAppSidebar() {
    const location = useLocation();
    // State for expanded module
    const [expandedModuleId, setExpandedModuleId] = React.useState<number | null>(null);

    // Derive active module from URL
    React.useEffect(() => {
        // Determine which module is active based on path
        // example: /module/3/...
        const match = location.pathname.match(/\/module\/(\d+)/);
        if (match && match[1]) {
            const id = parseInt(match[1], 10);
            setExpandedModuleId(id);
        }
    }, [location.pathname]);

    const toggleModule = (id: number) => {
        setExpandedModuleId((prev) => (prev === id ? null : id));
    };

    return (
        <Sidebar className="border-r border-border bg-sidebar" variant="inset" collapsible="icon">
            <SidebarHeader className="border-b border-border/50 p-4">
                <div className="flex items-center gap-3 px-1 group py-2 cursor-default select-none">
                    <div className="shrink-0">
                        <CompuLogo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />
                    </div>
                    <span className="font-bold text-sm tracking-tight leading-tight">Compu-Foundation360&deg;</span>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-0">
                <SidebarMenu className="gap-0.5 px-2 py-2">
                    {modules.map((module) => {
                        const isActive = location.pathname.startsWith(module.path);
                        const isOpen = expandedModuleId === module.id;
                        const moduleNumber = module.id.toString().padStart(2, "0");

                        return (
                            <Collapsible
                                key={module.id}
                                open={isOpen}
                                onOpenChange={(open) => setExpandedModuleId(open ? module.id : null)}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem className="mb-1">
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            isActive={isActive}
                                            className={cn(
                                                "w-full justify-between h-auto min-h-[40px] px-3 py-2 transition-all duration-200 select-none",
                                                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                                isActive && "bg-sidebar-accent font-medium text-primary shadow-sm"
                                            )}
                                        >
                                            <div className="flex items-start gap-3 overflow-hidden">
                                                <span className={cn(
                                                    "text-[10px] uppercase tracking-wider font-bold mt-0.5 text-muted-foreground/70",
                                                    isActive && "text-primary"
                                                )}>{moduleNumber}.</span>
                                                <span className="text-sm leading-tight break-words whitespace-normal text-left flex-1 font-medium">{module.title}</span>
                                            </div>
                                            {module.topics.length > 0 && (
                                                <div className="text-muted-foreground/50 shrink-0 ml-1 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90">
                                                    <ChevronRight className="h-4 w-4" />
                                                </div>
                                            )}
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    {/* Topics Tree */}
                                    {module.topics.length > 0 && (
                                        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                                            <div className="relative ml-[15px] mt-1 mb-2 pl-3 space-y-0.5">
                                                {module.topics.map((topic, index) => {
                                                    const topicNumber = index + 1;
                                                    const topicPath = `${module.path}/topic/${topicNumber}`;
                                                    const isTopicActive = location.pathname === topicPath;
                                                    const isLast = index === module.topics.length - 1;

                                                    return (
                                                        <div key={topic.id} className="relative group/topic">
                                                            {/* Vertical Trunk */}
                                                            <div className={cn(
                                                                "absolute -left-[1px] top-0 bottom-0 w-[1px] bg-border/60",
                                                                isLast && "h-[16px] bottom-auto"
                                                            )} />

                                                            {/* Horizontal Branch */}
                                                            <div className="absolute -left-[1px] top-[16px] h-[1px] w-[12px] bg-border/60" />

                                                            <Link to={topicPath} className="block pl-4">
                                                                <Button
                                                                    variant="ghost"
                                                                    className={cn(
                                                                        "w-full justify-start h-auto min-h-[32px] py-1 px-3 text-[13px] font-normal tracking-tight whitespace-normal text-left transition-colors",
                                                                        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                                                        isTopicActive ? "bg-sidebar-accent text-primary font-medium shadow-sm border-l-2 border-primary -ml-px" : "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {topic.title}
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </CollapsibleContent>
                                    )}
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="border-t border-border/50 p-4">
                <Link to="/settings">
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <Settings className="h-4 w-4" />
                        Settings
                    </Button>
                </Link>
            </SidebarFooter>
        </Sidebar>
    );
}

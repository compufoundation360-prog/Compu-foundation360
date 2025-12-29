import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Settings, ChevronRight, LayoutDashboard, LogOut } from "lucide-react";
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
import { modules } from "@/config/sidebar-data";
import { CompuLogo } from "@/components/CompuLogo";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export function NewAppSidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    // State for expanded module
    const [expandedModuleId, setExpandedModuleId] = React.useState<number | null>(null);

    // Derive active module from URL
    React.useEffect(() => {
        const match = location.pathname.match(/\/module\/(\d+)/);
        if (match && match[1]) {
            const id = parseInt(match[1], 10);
            setExpandedModuleId(id);
        }
    }, [location.pathname]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Successfully logged out");
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Failed to log out");
        }
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
                    {/* DASHBOARD LINK */}
                    <SidebarMenuItem>
                        <Link to="/dashboard">
                            <SidebarMenuButton
                                isActive={location.pathname === "/dashboard"}
                                className={cn(
                                    "w-full justify-start h-auto min-h-[40px] px-3 py-2 transition-all duration-200 select-none",
                                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                    location.pathname === "/dashboard" && "bg-sidebar-accent font-medium text-primary shadow-sm"
                                )}
                            >
                                <LayoutDashboard className="h-4 w-4 shrink-0" />
                                <span className="text-sm font-medium ml-3">Dashboard</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>

                    {/* MODULES HEADER */}
                    <div className="px-2 py-3 mt-2 mb-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 select-none">
                            Modules
                        </h4>
                    </div>

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
                                                    const isIntro = topic.id.endsWith("-intro");
                                                    let topicPath;

                                                    if (isIntro) {
                                                        topicPath = `${module.path}/topic/${topic.id}`;
                                                    } else {
                                                        const firstIsIntro = module.topics.length > 0 && module.topics[0].id.endsWith("-intro");
                                                        const effectiveNumber = firstIsIntro ? index : index + 1;
                                                        topicPath = `${module.path}/topic/${effectiveNumber}`;
                                                    }

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

            {/* Footer Removed as per request */}
            <SidebarFooter className="border-t border-border/50 p-4 space-y-2 hidden">
            </SidebarFooter>
        </Sidebar>
    );
}

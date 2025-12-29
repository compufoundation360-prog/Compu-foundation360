import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";

export function MobileBottomNav() {
    const location = useLocation();
    const { toggleSidebar, openMobile } = useSidebar();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-t border-border flex items-center justify-around z-50 pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
            <Link
                to="/dashboard"
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground transition-all duration-200 active:scale-95",
                    isActive("/dashboard") && "text-primary font-medium"
                )}
            >
                <LayoutDashboard className={cn("h-5 w-5", isActive("/dashboard") && "fill-current opacity-20")} />
                <span className="text-[10px]">Home</span>
            </Link>

            <button
                onClick={() => toggleSidebar()}
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground transition-all duration-200 active:scale-95",
                    openMobile && "text-primary font-medium"
                )}
            >
                <BookOpen className={cn("h-5 w-5", openMobile && "fill-current opacity-20")} />
                <span className="text-[10px]">Modules</span>
            </button>

            <Link
                to="/settings"
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground transition-all duration-200 active:scale-95",
                    isActive("/settings") && "text-primary font-medium"
                )}
            >
                <User className={cn("h-5 w-5", isActive("/settings") && "fill-current opacity-20")} />
                <span className="text-[10px]">Profile</span>
            </Link>
        </div>
    );
}

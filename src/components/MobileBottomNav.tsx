import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MobileBottomNav() {
    const location = useLocation();
    const { toggleSidebar, openMobile } = useSidebar();
    const { currentUser } = useAuth();

    const isActive = (path: string) => location.pathname === path;

    // Get user initials for fallback
    const userInitials = currentUser?.displayName
        ? currentUser.displayName.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
        : "U";

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-background/95 backdrop-blur-lg border-t border-border flex items-center justify-around z-50 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.1)] safe-area-bottom">
            <Link
                to="/dashboard"
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full min-h-[44px] space-y-1.5 px-4 py-2 text-muted-foreground transition-all duration-200 active:scale-95 active:bg-muted/50 rounded-lg",
                    isActive("/dashboard") && "text-primary font-semibold"
                )}
            >
                <LayoutDashboard className={cn("h-6 w-6 transition-all", isActive("/dashboard") && "fill-current scale-110")} />
                <span className="text-xs font-medium">Home</span>
            </Link>

            <button
                onClick={() => toggleSidebar()}
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full min-h-[44px] space-y-1.5 px-4 py-2 text-muted-foreground transition-all duration-200 active:scale-95 active:bg-muted/50 rounded-lg",
                    openMobile && "text-primary font-semibold"
                )}
            >
                <BookOpen className={cn("h-6 w-6 transition-all", openMobile && "fill-current scale-110")} />
                <span className="text-xs font-medium">Modules</span>
            </button>

            <Link
                to="/settings"
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full min-h-[44px] space-y-1.5 px-4 py-2 text-muted-foreground transition-all duration-200 active:scale-95 active:bg-muted/50 rounded-lg",
                    isActive("/settings") && "text-primary font-semibold"
                )}
            >
                <Avatar className={cn(
                    "h-7 w-7 border-2 transition-all",
                    isActive("/settings") ? "border-primary scale-110" : "border-border"
                )}>
                    <AvatarImage src={currentUser?.photoURL || ""} alt={currentUser?.displayName || "User"} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                        {userInitials}
                    </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium">Profile</span>
            </Link>
        </div>
    );
}

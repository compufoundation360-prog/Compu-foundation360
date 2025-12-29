import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { NewAppSidebar } from "@/components/NewAppSidebar";
import { MobileBottomNav } from "@/components/MobileBottomNav";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "14rem",
        } as React.CSSProperties
      }
    >
      <NewAppSidebar />
      <SidebarInset className="flex flex-col overflow-hidden w-full" style={{ overscrollBehavior: 'contain' }}>
        <div className="flex-1 w-full pb-16 md:pb-0 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
        <MobileBottomNav />
      </SidebarInset>
    </SidebarProvider>
  );
}


import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { NewAppSidebar } from "@/components/NewAppSidebar";

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
      <SidebarInset className="flex flex-col overflow-hidden" style={{ overscrollBehavior: 'contain' }}>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}


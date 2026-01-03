import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { NewAppSidebar } from "@/components/NewAppSidebar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import { useSidebar } from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { modules } from "@/config/sidebar-data";

interface AppLayoutProps {
  children: ReactNode;
}

// Inner component that uses sidebar hook (must be inside SidebarProvider)
function AppLayoutContent({ children }: AppLayoutProps) {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  // Function to navigate to next topic
  const navigateToNextTopic = () => {
    // Check if we're on a topic page (format: /module/{id}/topic/{topicId or topicNumber})
    const topicMatch = location.pathname.match(/\/module\/(\d+)\/topic\/(.+)/);
    if (topicMatch) {
      const moduleId = parseInt(topicMatch[1], 10);
      const topicIdentifier = topicMatch[2]; // Could be a number or topic id like "m1-intro"
      
      const module = modules.find(m => m.id === moduleId);
      if (module && module.topics.length > 0) {
        // Find current topic index
        let currentIndex = -1;
        
        // Check if it's an intro topic (has topic id in path)
        const introTopic = module.topics.find(t => topicIdentifier === t.id);
        if (introTopic) {
          currentIndex = module.topics.findIndex(t => t.id === introTopic.id);
        } else {
          // It's a numbered topic
          const topicNumber = parseInt(topicIdentifier, 10);
          if (!isNaN(topicNumber)) {
            // Account for intro topic when calculating index
            const firstIsIntro = module.topics[0]?.id.endsWith("-intro");
            if (firstIsIntro) {
              // If first is intro, topicNumber 1 = index 1, topicNumber 2 = index 2, etc.
              currentIndex = topicNumber;
            } else {
              // If no intro, topicNumber 1 = index 0, topicNumber 2 = index 1, etc.
              currentIndex = topicNumber - 1;
            }
          }
        }
        
        // Navigate to next topic if available
        if (currentIndex >= 0 && currentIndex < module.topics.length - 1) {
          const nextTopic = module.topics[currentIndex + 1];
          const isNextIntro = nextTopic.id.endsWith("-intro");
          
          let nextPath: string;
          if (isNextIntro) {
            nextPath = `${module.path}/topic/${nextTopic.id}`;
          } else {
            const firstIsIntro = module.topics[0]?.id.endsWith("-intro");
            const effectiveNumber = firstIsIntro ? currentIndex + 1 : currentIndex + 2;
            nextPath = `${module.path}/topic/${effectiveNumber}`;
          }
          
          navigate(nextPath);
        }
      }
    }
  };

  // Swipe gestures for mobile navigation
  useSwipeGesture({
    onSwipeRight: () => {
      if (isMobile) {
        toggleSidebar();
      }
    },
    onSwipeLeft: () => {
      if (isMobile) {
        // Check if we're on a topic page - navigate to next topic
        const topicMatch = location.pathname.match(/\/module\/(\d+)\/topic\/(\d+)/);
        if (topicMatch) {
          navigateToNextTopic();
        } else if (window.history.length > 1) {
          // Otherwise, go back
          navigate(-1);
        }
      }
    },
    enabled: isMobile,
    threshold: 50,
  });

  return (
    <>
      <NewAppSidebar />
      <SidebarInset className="flex flex-col overflow-hidden w-full" style={{ overscrollBehavior: 'contain' }}>
        <div className="flex-1 w-full pb-20 md:pb-0 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
        <MobileBottomNav />
      </SidebarInset>
    </>
  );
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
      <AppLayoutContent>{children}</AppLayoutContent>
    </SidebarProvider>
  );
}


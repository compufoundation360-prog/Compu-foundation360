import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 1. Reset standard window/document positions
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // 2. Target the main scrollable layout container
        // This is the specific div inside SidebarInset that handles your page content
        const mainContent = document.querySelector('main div.overflow-y-auto');
        if (mainContent) {
            mainContent.scrollTop = 0;
        }

        // 3. Disable browser's automatic scroll restoration to stop it from fighting us
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, [pathname]);

    return null;
}

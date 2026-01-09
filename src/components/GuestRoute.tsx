import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

/**
 * GuestRoute component
 * Redirects authenticated users to the dashboard.
 * Used for pages like Login, Signup, etc.
 */
const GuestRoute = () => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    // If user is logged in, redirect to dashboard
    return currentUser ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default GuestRoute;

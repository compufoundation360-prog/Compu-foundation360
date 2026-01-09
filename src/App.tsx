import { Suspense, lazy } from "react"; // Added Suspense, lazy
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppLayout } from "@/components/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

// Lazy Load Content Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ModuleDetail = lazy(() => import("./pages/ModuleDetail"));
const Lesson = lazy(() => import("./pages/Lesson"));
const Settings = lazy(() => import("./pages/Settings"));
const Quiz = lazy(() => import("./pages/Quiz"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SimulatorPage = lazy(() => import("./pages/SimulatorPage")); // Heavy!

import { AuthProvider } from "@/context/AuthContext";
import { SimulatorProvider } from "@/context/SimulatorContext";
import SimulatorModal from "@/components/SimulatorModal";
import ProtectedRoute from "@/components/ProtectedRoute";
import GuestRoute from "@/components/GuestRoute";
import { Loader2 } from "lucide-react"; // Import Loader

const queryClient = new QueryClient();

// Simple Full Page Loader for Transitions
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <SimulatorProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <SimulatorModal />
            <BrowserRouter>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public Routes (Guest Only - Redirects to Dashboard if Logged In) */}
                  <Route element={<GuestRoute />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                  </Route>

                  {/* Protected Routes (Lazy Loaded) */}
                  <Route element={<ProtectedRoute />}>
                    <Route path="/simulator/:id" element={<SimulatorPage />} />
                    <Route element={<AppLayout><Outlet /></AppLayout>}>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/module/:id" element={<ModuleDetail />} />
                      <Route path="/module/:id/part/:part" element={<ModuleDetail />} />
                      <Route path="/module/:id/topic/:topicId" element={<ModuleDetail />} />
                      <Route path="/lesson/:moduleId/:lessonId" element={<Lesson />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/module/:moduleId/quiz" element={<Quiz />} />
                    </Route>
                  </Route>

                  {/* Catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </SimulatorProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;

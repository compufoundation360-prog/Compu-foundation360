
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
import Dashboard from "./pages/Dashboard";
import ModuleDetail from "./pages/ModuleDetail";
import Lesson from "./pages/Lesson";
import Settings from "./pages/Settings";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import SimulatorPage from "./pages/SimulatorPage";

import { AuthProvider } from "@/context/AuthContext";
import { SimulatorProvider } from "@/context/SimulatorContext"; // NEW
import SimulatorModal from "@/components/SimulatorModal"; // NEW
import ProtectedRoute from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <SimulatorProvider> {/* WRAPPED PROVIDER */}
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <SimulatorModal /> {/* GLOBAL MODAL */}
            <BrowserRouter>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/simulator/:id" element={<SimulatorPage />} /> {/* Full Screen Simulator */}
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
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </SimulatorProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (email && password) {
      toast.success("Welcome back! Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      toast.error("Please enter your credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Globe Side */}
        <div className="hidden lg:flex flex-col items-center justify-center p-12 animate-fade-in relative">
          <div className="relative w-full max-w-lg h-[500px] flex flex-col items-center justify-center">
            {/* App Name with Professional Styling */}
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6 z-10 relative">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Compu-Foundation 360°
              </span>
          </h2>
            
            {/* Globe Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Globe className="top-0" />
            </div>
          </div>
        </div>

        {/* Login Form Side */}
        <Card className="p-8 lg:p-12 shadow-soft-lg animate-slide-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Sign In</h1>
              <p className="text-sm text-muted-foreground">Continue your learning journey</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-primary hover:text-primary-dark transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary-dark text-primary-foreground text-lg font-semibold"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Sign up for free
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;

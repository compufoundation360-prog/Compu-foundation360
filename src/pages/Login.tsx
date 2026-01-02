import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { GraduationCap, AlertCircle, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Automatically redirect if user is already logged in
  useEffect(() => {
    if (!loading && currentUser) {
      navigate("/dashboard", { replace: true });
    }
  }, [currentUser, loading, navigate]);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back! Redirecting to dashboard...");
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login Error:", err);
      let msg = "Failed to sign in. Please try again.";

      // Detailed Error Mapping
      switch (err.code) {
        case 'auth/invalid-email':
          msg = "Please enter a valid email address.";
          break;
        case 'auth/user-disabled':
          msg = "This account has been disabled.";
          break;
        case 'auth/user-not-found':
          msg = "No account found with this email.";
          break;
        case 'auth/wrong-password':
          msg = "Incorrect user ID or password."; // distinct from "wrong password" for security
          break;
        case 'auth/too-many-requests':
          msg = "Too many failed attempts. Please try again later.";
          break;
        case 'auth/network-request-failed':
          msg = "Network error. Please check your connection.";
          break;
        case 'auth/invalid-credential':
          msg = "Invalid credentials provided.";
          break;
      }

      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Successfully signed in with Google!");
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Google Login Error:", err);
      toast.error("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
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
            <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
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
            {error && (
              <div className="bg-destructive/15 p-4 rounded-lg flex items-center gap-3 text-destructive border border-destructive/20 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}
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
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-primary hover:bg-primary-dark text-primary-foreground text-lg font-semibold"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full h-11"
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => toast.info("Apple Sign In coming soon...")}
                disabled={isLoading}
                className="w-full h-11"
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                Apple
              </Button>
            </div>
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

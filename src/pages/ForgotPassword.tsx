import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      toast.success("Password reset link sent to your email!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-soft-lg animate-fade-in">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to login</span>
        </button>

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-foreground text-center mb-2">
            Forgot Password?
          </h1>
          <p className="text-muted-foreground text-center">
            {submitted 
              ? "Check your email for reset instructions" 
              : "Enter your email to receive reset instructions"}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <Button 
              type="submit" 
              className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-semibold"
            >
              Send Reset Link
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="p-4 bg-success/10 border-2 border-success rounded-lg">
              <p className="text-sm text-foreground">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
            </div>
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full h-12"
            >
              Return to Login
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ForgotPassword;

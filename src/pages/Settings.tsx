import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Camera,
  Loader2,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Card } from "@/components/ui/card";

const Settings = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (currentUser?.displayName) {
      setDisplayName(currentUser.displayName);
    }
  }, [currentUser]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    setIsLoading(true);
    try {
      await updateProfile(currentUser, {
        displayName: displayName,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  const userInitials = currentUser?.displayName
    ? currentUser.displayName.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
    : "U";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none">Profile Settings</h1>
            </div>
          </div>

          <Button variant="destructive" size="sm" onClick={handleSignOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Personal Information</h2>
              <p className="text-muted-foreground">
                Update your personal details here.
              </p>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-8">
              <div className="flex flex-col items-center gap-6">
                {/* Avatar Section */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group cursor-pointer">
                    <Avatar className="h-28 w-28 border-4 border-background shadow-lg">
                      <AvatarImage src={currentUser?.photoURL || ""} />
                      <AvatarFallback className="text-3xl bg-primary/10 text-primary">{userInitials}</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    Tap to change avatar
                  </p>
                </div>

                {/* Form Fields */}
                <div className="w-full space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input
                      id="name"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Your full name"
                      className="h-11"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      value={currentUser?.email || ""}
                      disabled
                      className="bg-muted text-muted-foreground h-11"
                    />
                    <p className="text-[0.8rem] text-muted-foreground">
                      Managed by authentication provider
                    </p>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" disabled={isLoading} className="w-full sm:w-auto min-w-[140px]">
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Settings;

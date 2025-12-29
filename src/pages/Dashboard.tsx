import { Computer, Cpu, Settings as SettingsIcon, BookOpen, TrendingUp, AlertTriangle, CheckCircle2, Clock, Gamepad2, ArrowRight, Shield, Globe, UserCheck, Layers, Lock, Wifi, Database, LayoutTemplate, Cloud, Bot, Smartphone, Link, Rocket, FileSpreadsheet, Code, Briefcase } from "lucide-react";
import { ModuleCard } from "@/components/ModuleCard";
import { ProgressCircle } from "@/components/ProgressCircle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { simulators } from "@/data/simulators";

import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // Determine if new user (creation time equals last sign in time roughly)
  // Fallback: If no name, just say "Hello there!"
  const displayName = currentUser?.displayName?.split(" ")[0] || "Learner";

  // Logic: If creationTime is same as lastSignInTime, it's likely a new signup.
  // Note: This is an approximation.
  const isNew = currentUser?.metadata.creationTime === currentUser?.metadata.lastSignInTime;
  const greeting = isNew ? "Welcome" : "Welcome back";

  const userInitials = currentUser?.displayName
    ? currentUser.displayName.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
    : "U";

  // Module data
  const modules = [
    {
      id: 1,
      title: "Digital Awareness & Foundation",
      description: "Learn what computers are, their characteristics, types, and basic components.",
      icon: <Computer />,
      progress: 80,
      lessons: 8,
    },
    {
      id: 2,
      title: "Internal Components & Architecture",
      description: "Explore physical components: CPU, motherboard, RAM, storage devices, and more.",
      icon: <Cpu />,
      progress: 50,
      lessons: 12,
    },
    // Pending Modules (3-8)
    {
      id: 3,
      title: "Operating Systems",
      description: "Understanding Windows, macOS, Linux, and system management.",
      icon: <SettingsIcon />,
      progress: 0,
      lessons: 0,
      locked: true,
    },
    {
      id: 4,
      title: "Data Representation",
      description: "Binary, Hexadecimal, ASCII, and digital formats.",
      icon: <FileSpreadsheet />,
      progress: 0,
      lessons: 0,
      locked: true,
    },
    {
      id: 5,
      title: "Networks Basics",
      description: "Introduction to connectivity and network types.",
      icon: <Wifi />,
      progress: 0,
      lessons: 0,
      locked: true,
    },
    {
      id: 6,
      title: "The Internet",
      description: "How the web works, browsers, and protocols.",
      icon: <Globe />,
      progress: 0,
      lessons: 0,
      locked: true,
    },
    {
      id: 7,
      title: "Productivity Software",
      description: "Word processing, spreadsheets, and presentations.",
      icon: <LayoutTemplate />,
      progress: 0,
      lessons: 0,
      locked: true,
    },
    {
      id: 8,
      title: "Digital Media",
      description: "Graphics, audio, and video fundamentals.",
      icon: <FileSpreadsheet />, // Reusing icon
      progress: 0,
      lessons: 0,
      locked: true,
    },
    // Completed/Available Modules (9-21)
    {
      id: 9,
      title: "Networking & Internet Deep Dive",
      description: "Advanced networking concepts, IP addressing, and DNS.",
      icon: <Globe />,
      progress: 0,
      lessons: 12,
      route: "/module/9"
    },
    {
      id: 10,
      title: "Cybersecurity Fundamentals",
      description: "Protecting digital assets, CIA triad, and safety.",
      icon: <Shield />,
      progress: 0,
      lessons: 8,
      route: "/module/10"
    },
    {
      id: 11,
      title: "Digital Citizenship",
      description: "Online identity, rights, and responsibilities.",
      icon: <UserCheck />,
      progress: 0,
      lessons: 3,
      route: "/module/11"
    },
    {
      id: 12,
      title: "Cloud Computing",
      description: "Cloud services, storage, and remote computing.",
      icon: <Cloud />,
      progress: 0,
      lessons: 5,
      route: "/module/12"
    },
    {
      id: 13,
      title: "Programming Logic",
      description: "Algorithms, flowcharts, and coding basics.",
      icon: <Code />,
      progress: 0,
      lessons: 5,
      route: "/module/13"
    },
    {
      id: 14,
      title: "Web Development",
      description: "HTML, CSS, and building for the web.",
      icon: <LayoutTemplate />,
      progress: 0,
      lessons: 5,
      route: "/module/14"
    },
    {
      id: 15,
      title: "Database Management",
      description: "SQL, data organization, and storage.",
      icon: <Database />,
      progress: 0,
      lessons: 5,
      route: "/module/15"
    },
    {
      id: 16,
      title: "Artificial Intelligence",
      description: "Machine learning, neural networks, and AI ethics.",
      icon: <Bot />,
      progress: 0,
      lessons: 5,
      route: "/module/16"
    },
    {
      id: 17,
      title: "Internet of Things (IoT)",
      description: "Smart devices, sensors, and connectivity.",
      icon: <Smartphone />,
      progress: 0,
      lessons: 5,
      route: "/module/17"
    },
    {
      id: 18,
      title: "Blockchain & Crypto",
      description: "Decentralized ledgers and digital currency.",
      icon: <Link />,
      progress: 0,
      lessons: 5,
      route: "/module/18"
    },
    {
      id: 19,
      title: "Future Technologies",
      description: "Quantum computing, VR/AR, and emerging tech.",
      icon: <Rocket />,
      progress: 0,
      lessons: 5,
      route: "/module/19"
    },
    {
      id: 20,
      title: "Tech Careers",
      description: "Pathways and opportunities in technology.",
      icon: <Briefcase />,
      progress: 0,
      lessons: 5,
      route: "/module/20"
    },
    {
      id: 21,
      title: "Virtualization",
      description: "Virtual Machines, Hypervisors, and Host vs Guest.",
      icon: <Layers />,
      progress: 0,
      lessons: 2,
      route: "/module/21"
    },
  ];

  // Calculate stats
  const overallProgress = modules.reduce((acc, m) => acc + m.progress, 0) / modules.length;
  const modulesStarted = modules.filter(m => m.progress > 0).length;
  const totalTopics = modules.reduce((acc, m) => acc + m.lessons, 0);
  const topicsCompleted = Math.round((overallProgress / 100) * totalTopics);
  const streakDays = 7; // Mock data

  // Learning performance chart data (last 7 months)
  const performanceData = [
    { month: "Jan", topicsCompleted: 4, studyHours: 8 },
    { month: "Feb", topicsCompleted: 3, studyHours: 6 },
    { month: "Mar", topicsCompleted: 10, studyHours: 12 },
    { month: "Apr", topicsCompleted: 4, studyHours: 10 },
    { month: "May", topicsCompleted: 5, studyHours: 15 },
    { month: "Jun", topicsCompleted: 4, studyHours: 14 },
    { month: "Jul", topicsCompleted: 4, studyHours: 12 },
  ];

  const chartConfig = {
    topicsCompleted: {
      label: "Topics Completed",
      color: "#3b82f6", // Blue color
    },
    studyHours: {
      label: "Study Hours",
      color: "#10b981", // Green color
    },
  };

  // Weak areas and strengths (mock data)
  const weakAreas = [
    { name: "CPU Architecture", score: 60, module: "Module 2", topic: "Topic 1" },
    { name: "Storage Concepts", score: 55, module: "Module 2", topic: "Topic 4" },
  ];

  const strengths = [
    { name: "RAM Basics", score: 95, module: "Module 2", topic: "Topic 2" },
    { name: "Input Devices", score: 90, module: "Module 1", topic: "Topic 6" },
  ];

  // Recently used (modules and topics)
  const recentlyUsed = [
    { type: "topic", moduleId: 2, topicId: "5", title: "HDD Basics", moduleTitle: "Internal Components", timeAgo: "2 hours ago" },
    { type: "topic", moduleId: 1, topicId: "3", title: "Hardware Basics", moduleTitle: "Introduction to Computers", timeAgo: "1 day ago" },
    { type: "topic", moduleId: 2, topicId: "1", title: "CPU Basics", moduleTitle: "Internal Components", timeAgo: "2 days ago" },
    { type: "module", moduleId: 1, title: "Introduction to Computers", timeAgo: "3 days ago" },
  ];

  // Get available simulators (first 6)
  const availableSimulators = simulators.filter(s => s.url && s.url !== "#").slice(0, 6);

  const handleSimulatorClick = (simulator: typeof simulators[0]) => {
    if (simulator.topicId) {
      navigate(`/module/${simulator.moduleId}/topic/${simulator.topicId}`);
    } else {
      navigate(`/module/${simulator.moduleId}`);
    }
  };

  const handleRecentlyUsedClick = (item: typeof recentlyUsed[0]) => {
    if (item.type === "topic") {
      navigate(`/module/${item.moduleId}/topic/${item.topicId}`);
    } else {
      navigate(`/module/${item.moduleId}`);
    }
  };

  return (
    <div className="min-h-screen bg-background hide-scrollbar">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="-ml-1 hidden md:flex" />
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Computer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Compu-Foundation 360°</h1>
                <p className="text-xs text-muted-foreground">Basic Computer Fundamentals</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9 border border-border">
                      <AvatarImage src={currentUser?.photoURL || ""} alt={displayName} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">{userInitials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{currentUser?.displayName}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {currentUser?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={async () => {
                      try {
                        await auth.signOut();
                        toast.success("Signed out successfully");
                        navigate("/");
                      } catch (error) {
                        toast.error("Error signing out");
                      }
                    }}
                    className="text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* SECTION 1: Welcome & Quick Stats */}
        <section>
          <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-2 border-primary/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {greeting}, {displayName}! 👋
                </h2>
                <p className="text-muted-foreground">
                  Continue your learning journey
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{Math.round(overallProgress)}%</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Progress</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">{modulesStarted}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Started</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{topicsCompleted}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Completed</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{streakDays}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Streak</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* SECTION 2 & 3: User Progress & Performance Chart */}
        <section className="grid lg:grid-cols-2 gap-6">
          {/* SECTION 2: User Progress */}
          <Card className="p-4 md:p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg md:text-xl font-bold text-foreground">Your Learning Progress</h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center py-2">
                <ProgressCircle progress={overallProgress} size={120} />
              </div>
              <div className="space-y-4">
                {modules.filter(m => m.progress > 0).map((module) => (
                  <div key={module.id} className="space-y-1.5">
                    <div className="flex justify-between items-end gap-2 text-sm">
                      <span className="text-foreground font-medium text-xs sm:text-sm leading-tight line-clamp-2">
                        {module.title}
                      </span>
                      <span className="text-muted-foreground text-xs font-mono shrink-0">
                        {module.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* SECTION 3: Performance Chart */}
          <Card className="p-4 md:p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg md:text-xl font-bold text-foreground">Learning Activity</h3>
            </div>
            <div className="w-full overflow-hidden">
              <ChartContainer config={chartConfig} className="h-[200px] md:h-[280px] w-full">
                <AreaChart data={performanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillTopics" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="fillHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    className="text-[10px] md:text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    className="text-[10px] md:text-xs"
                    domain={[0, 20]}
                    ticks={[0, 10, 20]}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    width={25}
                  />
                  <ChartTooltip
                    cursor={{ stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1, strokeDasharray: '4 4' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    type="monotone"
                    dataKey="topicsCompleted"
                    stroke="#3b82f6"
                    fill="url(#fillTopics)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="studyHours"
                    stroke="#10b981"
                    fill="url(#fillHours)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-xs text-muted-foreground">Topics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground">Hours</span>
              </div>
            </div>
          </Card>
        </section>

        {/* SECTION 4 & 5: Recommendations & Simulator Shortcuts */}
        <section className="grid lg:grid-cols-2 gap-6">
          {/* SECTION 4: Recommendations */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Recommendations & Weak Areas</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  Focus Areas
                </h4>
                <div className="space-y-3">
                  {weakAreas.map((area, index) => (
                    <div key={index} className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium text-foreground">{area.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{area.module} - {area.topic}</p>
                        </div>
                        <span className="text-sm font-semibold text-orange-500">{area.score}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                        <div
                          className="bg-orange-500 h-1.5 rounded-full"
                          style={{ width: `${area.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Strengths
                </h4>
                <div className="space-y-3">
                  {strengths.map((strength, index) => (
                    <div key={index} className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium text-foreground">{strength.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{strength.module} - {strength.topic}</p>
                        </div>
                        <span className="text-sm font-semibold text-green-500">{strength.score}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: `${strength.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/module/2")}
              >
                Review Weak Topics
              </Button>
            </div>
          </Card>

          {/* SECTION 5: Simulator Shortcuts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Quick Access to Simulators</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {availableSimulators.map((simulator) => (
                <button
                  key={simulator.id}
                  onClick={() => handleSimulatorClick(simulator)}
                  className="p-4 bg-muted/50 hover:bg-muted border border-border rounded-lg transition-colors text-left group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {simulator.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {simulator.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
            {availableSimulators.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Gamepad2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No simulators available yet</p>
              </div>
            )}
          </Card>
        </section>

        {/* SECTION 6: Recently Used */}
        <section>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Recently Accessed</h3>
              </div>
            </div>
            <div className="space-y-3">
              {recentlyUsed.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentlyUsedClick(item)}
                  className="w-full p-4 bg-muted/50 hover:bg-muted border border-border rounded-lg transition-colors text-left group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.type === "topic" ? (
                        <BookOpen className="h-5 w-5 text-primary" />
                      ) : (
                        <Cpu className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.type === "topic" ? (
                          <>
                            {item.moduleTitle}: {item.title}
                          </>
                        ) : (
                          item.title
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{item.timeAgo}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

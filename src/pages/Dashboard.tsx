import { Computer, Cpu, Settings as SettingsIcon, BookOpen, TrendingUp, AlertTriangle, CheckCircle2, Clock, Gamepad2, ArrowRight } from "lucide-react";
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

const Dashboard = () => {
  const navigate = useNavigate();

  // Module data - only Modules 1 and 2
  const modules = [
    {
      id: 1,
      title: "Digital Awareness & Foundation",
      description: "Learn what computers are, their characteristics, types, and basic components. Understand hardware, software, and I/O devices.",
      icon: <Computer />,
      progress: 80,
      lessons: 8,
    },
    {
      id: 2,
      title: "Internal Components & Architecture",
      description: "Explore physical components: CPU, motherboard, RAM, storage devices, GPU, ALU, CU, firmware, and more.",
      icon: <Cpu />,
      progress: 50,
      lessons: 12,
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
              <SidebarTrigger className="-ml-1" />
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
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/settings")}
              className="flex items-center gap-2"
            >
              <SettingsIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
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
                Welcome back, Learner! 👋
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
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Your Learning Progress</h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center">
                <ProgressCircle progress={overallProgress} size={120} />
              </div>
              <div className="space-y-3">
                {modules.filter(m => m.progress > 0).map((module) => (
                  <div key={module.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{module.title}</span>
                      <span className="text-muted-foreground">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* SECTION 3: Performance Chart */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Learning Activity</h3>
            </div>
            <div className="w-full overflow-hidden">
              <ChartContainer config={chartConfig} className="h-[280px] w-full">
                <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="month" 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    className="text-xs"
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    className="text-xs"
                    domain={[0, 20]}
                    ticks={[0, 5, 10, 15, 20]}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
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
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs text-muted-foreground">Topics Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground">Study Hours</span>
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

import { useState } from "react";
import { AppNavigation } from "@/components/AppNavigation";
import { WordSimulator } from "@/components/word/WordSimulator";
import { ExcelSimulator } from "@/components/excel/ExcelSimulator";
import { PowerPointSimulator } from "@/components/powerpoint/PowerPointSimulator";
import { Helmet } from "react-helmet";

type AppTab = "word" | "excel" | "powerpoint";

const Index = () => {
  const [activeTab, setActiveTab] = useState<AppTab>("word");

  return (
    <>
      <Helmet>
        <title>MS Office Skills Simulator - Learn Word, Excel & PowerPoint</title>
        <meta
          name="description"
          content="Interactive browser-based simulator to learn Microsoft Office skills. Practice Word document editing, Excel formulas and charts, and PowerPoint presentations."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <AppNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-1">
              {activeTab === "word" && "Word Simulator"}
              {activeTab === "excel" && "Excel Simulator"}
              {activeTab === "powerpoint" && "PowerPoint Simulator"}
            </h1>
            <p className="text-muted-foreground">
              {activeTab === "word" && "Practice document creation, formatting, and collaboration features"}
              {activeTab === "excel" && "Learn spreadsheet basics, formulas, and data visualization"}
              {activeTab === "powerpoint" && "Create professional presentations with slides and animations"}
            </p>
          </div>

          {activeTab === "word" && <WordSimulator />}
          {activeTab === "excel" && <ExcelSimulator />}
          {activeTab === "powerpoint" && <PowerPointSimulator />}
        </main>
      </div>
    </>
  );
};

export default Index;

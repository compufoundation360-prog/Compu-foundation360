import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { modules } from "@/config/sidebar-data";

interface TopicNavigationProps {
    currentModuleId: number;
    currentTopicId: string;
}

export function TopicNavigation({ currentModuleId, currentTopicId }: TopicNavigationProps) {
    const navigate = useNavigate();

    const module = modules.find(m => m.id === currentModuleId);
    if (!module) return null;

    const currentIndex = module.topics.findIndex(t => t.id === currentTopicId);
    if (currentIndex === -1) return null;

    const prevTopic = currentIndex > 0 ? module.topics[currentIndex - 1] : null;
    const nextTopic = currentIndex < module.topics.length - 1 ? module.topics[currentIndex + 1] : null;

    // Determine path for Previous
    // If no prev topic, maybe link to Module Intro? Or disable.
    // Sidebar data paths are like `/module/1/topic/1`.
    // Wait, sidebar-data topics only have `id` and `title`. Path is constructed.
    // Format: `/module/{moduleId}/topic/{topicIndex + 1}` ??
    // Let's check sidebar-data structure.

    // Actually, sidebar-data `topics` is just `{ id: "m1-t1", title: "..." }`.
    // The route logic in AppSidebar uses `${module.path}/topic/${index + 1}`.
    // So topic ID "m1-t1" corresponds to index 0 -> topic/1.

    // Let's rely on the INDEX to build paths, to be consistent with Sidebar.

    // URL Construction Helper
    const getTopicUrl = (index: number) => {
        const topic = module.topics[index];
        if (!topic) return "";

        if (topic.id.endsWith("-intro")) {
            return `/module/${currentModuleId}/topic/${topic.id}`;
        }

        const firstIsIntro = module.topics[0]?.id.endsWith("-intro");
        const effectiveNumber = firstIsIntro ? index : index + 1;
        return `/module/${currentModuleId}/topic/${effectiveNumber}`;
    };

    const handleNext = () => {
        if (nextTopic) {
            navigate(getTopicUrl(currentIndex + 1));
        } else {
            // End of module
            navigate("/dashboard");
        }
    };

    const handlePrev = () => {
        if (prevTopic) {
            navigate(getTopicUrl(currentIndex - 1));
        } else {
            navigate(`/module/${currentModuleId}`);
        }
    };

    return (
        <section className="container mx-auto px-4 pb-20 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">

                {/* PREVIOUS BUTTON */}
                {prevTopic ? (
                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full md:w-auto gap-2 group"
                        onClick={handlePrev}
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <div className="text-left">
                            <span className="block text-xs text-muted-foreground uppercase tracking-wider">Previous</span>
                            <span className="font-semibold">{prevTopic.title}</span>
                        </div>
                    </Button>
                ) : (
                    <Button variant="ghost" disabled className="invisible">Previous</Button>
                )}

                {/* NEXT BUTTON */}
                {nextTopic ? (
                    <Button
                        size="lg"
                        className="w-full md:w-auto gap-2 group h-auto py-3 px-6"
                        onClick={handleNext}
                    >
                        <div className="text-right">
                            <span className="block text-xs text-primary-foreground/70 uppercase tracking-wider">Next Topic</span>
                            <span className="font-bold">{nextTopic.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                ) : (
                    <Button
                        size="lg"
                        className="w-full md:w-auto gap-2 bg-green-600 hover:bg-green-700 h-auto py-3 px-6"
                        onClick={() => navigate("/modules")}
                    >
                        <div className="text-right">
                            <span className="block text-xs text-white/70 uppercase tracking-wider">Module Complete</span>
                            <span className="font-bold">Back to Dashboard</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4" />
                    </Button>
                )}

            </div>
        </section>
    );
}

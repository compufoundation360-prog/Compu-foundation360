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

    const handleNext = () => {
        if (nextTopic) {
            navigate(`/module/${currentModuleId}/topic/${currentIndex + 2}`); // +2 because index is 0-based, next is +1, and URL is 1-based.
        } else {
            // End of module
            navigate("/modules"); // Or next module?
        }
    };

    const handlePrev = () => {
        if (prevTopic) {
            navigate(`/module/${currentModuleId}/topic/${currentIndex}`); // URL is 1-based, so index (0-based) IS the previous topic number (e.g. index 1 is topic 2. Prev is topic 1).
        } else {
            // Start of topics. Go to Module Intro?
            // For now, let's just go to the module root dashboard or keep it disabled?
            // Usually "/module/X" is the dashboard.
            navigate(`/module/${currentModuleId}`);
        }
    };

    // URL Construction Helper
    const getTopicUrl = (index: number) => `/module/${currentModuleId}/topic/${index + 1}`;

    return (
        <section className="container mx-auto px-4 pb-20 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">

                {/* PREVIOUS BUTTON */}
                {prevTopic ? (
                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full md:w-auto gap-2 group"
                        onClick={() => navigate(getTopicUrl(currentIndex - 1))}
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
                        onClick={() => navigate(getTopicUrl(currentIndex + 1))}
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

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizzes, Question } from "@/data/quiz-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ArrowLeft,
    Trophy,
    RefreshCcw,
    ChevronRight,
    AlertCircle,
    Zap,
    XCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Fisher-Yates Shuffle Helper
function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function Quiz() {
    const { moduleId } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const quizId = parseInt(moduleId || "0");
    const quizData = quizzes[quizId];

    const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [isHardMode, setIsHardMode] = useState(false);
    const [showExitDialog, setShowExitDialog] = useState(false);

    // Initialize Quiz: Check for "Dirty" session and set Hard Mode if needed
    useEffect(() => {
        if (quizData && quizData.questions.length > 0) {
            const storageKey = `quiz_session_${quizId}_dirty`;
            const wasInterrupted = localStorage.getItem(storageKey);

            let finalPool: Question[] = [];

            if (wasInterrupted) {
                // HARD MODE: Prioritize Hard and Medium questions
                setIsHardMode(true);
                const hard = quizData.questions.filter(q => q.difficulty === 'Hard');
                const medium = quizData.questions.filter(q => q.difficulty === 'Medium');
                const easy = quizData.questions.filter(q => q.difficulty === 'Easy');

                // Build pool: All Hard -> All Medium -> Remaining Easy
                const weightedPool = [...shuffle(hard), ...shuffle(medium), ...shuffle(easy)];

                // Select top 15 from this weighted pool
                finalPool = weightedPool.slice(0, 15);

                // Shuffle the FINAL selection so they are mixed
                finalPool = shuffle(finalPool);

            } else {
                // NORMAL MODE: Pure random shuffle of everything
                setIsHardMode(false);
                const shuffled = shuffle(quizData.questions);
                finalPool = shuffled.slice(0, 15);
            }

            setActiveQuestions(finalPool);

            // Set dirty flag immediately - if they leave now, next time will be Hard Mode
            localStorage.setItem(storageKey, "true");

            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResults(false);
            setSelectedOption(null);
        }
    }, [quizId]);

    // Clear Dirty Flag ONLY when Quiz is Completed
    useEffect(() => {
        if (showResults) {
            const storageKey = `quiz_session_${quizId}_dirty`;
            localStorage.removeItem(storageKey);
            setIsHardMode(false); // Reset hard mode visual for the results screen
        }
    }, [showResults, quizId]);

    // Scroll to top when question changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentQuestionIndex, showResults]);

    const handleQuit = () => {
        // Just navigate away; the 'dirty' flag is already set in localStorage on mount, 
        // so leaving now guarantees Hard Mode next time.
        navigate("/dashboard");
    };

    if (!quizData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-background">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Quiz Not Found</h2>
                <p className="text-muted-foreground mb-6">There is no quiz data available for this module.</p>
                <Button onClick={() => navigate("/dashboard")}>Return to Dashboard</Button>
            </div>
        );
    }

    if (activeQuestions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-background">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-4 w-32 bg-muted rounded mb-4"></div>
                    <div className="h-8 w-48 bg-muted rounded"></div>
                </div>
            </div>
        );
    }

    const currentQuestion = activeQuestions[currentQuestionIndex];

    const handleOptionSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleNext = () => {
        if (selectedOption === null) return;

        // Check answer
        const isCorrect = selectedOption === currentQuestion.correctAnswer;

        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        if (currentQuestionIndex < activeQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        const storageKey = `quiz_session_${quizId}_dirty`;
        localStorage.removeItem(storageKey);

        setIsHardMode(false);
        const shuffled = shuffle(quizData.questions);
        const finalPool = shuffled.slice(0, 15);
        setActiveQuestions(finalPool);

        localStorage.setItem(storageKey, "true"); // Re-set dirty for this new session

        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowResults(false);
    };

    if (showResults) {
        const percentage = (score / activeQuestions.length) * 100;
        const isPassed = percentage >= 70;

        return (
            <div className="container max-w-2xl mx-auto px-4 py-8 md:py-16">
                <Card className="p-8 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 border-border/60 shadow-xl bg-card">
                    <div className="flex justify-center">
                        {isPassed ? (
                            <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center ring-1 ring-green-500/20">
                                <Trophy className="w-12 h-12 text-green-600 dark:text-green-500" />
                            </div>
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-orange-500/10 flex items-center justify-center ring-1 ring-orange-500/20">
                                <RefreshCcw className="w-12 h-12 text-orange-600 dark:text-orange-500" />
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">{isPassed ? "Assessment Complete!" : "Keep Practicing!"}</h2>
                        <p className="text-muted-foreground text-lg">
                            You scored {score} out of {activeQuestions.length}
                        </p>
                    </div>

                    <div className="flex justify-center items-end h-32 gap-1 mb-8">
                        <div className={cn("text-6xl font-bold tracking-tighter", isPassed ? "text-green-600 dark:text-green-500" : "text-orange-600 dark:text-orange-500")}>
                            {Math.round(percentage)}
                        </div>
                        <div className="text-lg font-medium text-muted-foreground mb-2">%</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="outline" size="lg" onClick={restartQuiz} className="gap-2 min-w-[160px]">
                            <RefreshCcw className="w-4 h-4" />
                            New Questions
                        </Button>
                        <Button size="lg" onClick={() => navigate("/dashboard")} className="gap-2 min-w-[160px]">
                            To Dashboard
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center py-6 md:py-12 px-4">

            {/* Exit Dialog */}
            <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to quit?</AlertDialogTitle>
                        <AlertDialogDescription className="space-y-4">
                            <p>Your current progress will be lost.</p>
                            <div className="flex items-start gap-3 text-orange-600 bg-orange-50 p-3 rounded-md border border-orange-100 dark:bg-orange-900/10 dark:text-orange-400 dark:border-orange-500/20">
                                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <span className="text-sm font-medium leading-tight">Warning: Quitting triggers <span className="font-bold underline">HARD MODE</span> for the next attempt.</span>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Continue Quiz</AlertDialogCancel>
                        <AlertDialogAction onClick={handleQuit} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Quit Quiz
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Header / Nav */}
            <div className="w-full max-w-3xl flex items-center justify-between mb-8">
                <Button variant="ghost" size="sm" onClick={() => setShowExitDialog(true)} className="gap-2 text-muted-foreground hover:text-destructive transition-colors">
                    <XCircle className="w-4 h-4" />
                    Quit Quiz
                </Button>
                <div className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestionIndex + 1} of {activeQuestions.length}
                </div>
            </div>

            {/* Smart Mode Banner */}
            {isHardMode && (
                <div className="w-full max-w-3xl mb-6 px-4 py-3 bg-red-500/5 border border-red-500/20 rounded-lg flex flex-col gap-1 text-red-600 dark:text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2 font-semibold">
                        <Zap className="w-4 h-4 fill-red-500/20" />
                        <span>Hard Mode Active</span>
                    </div>
                    <p className="pl-6 opacity-90">
                        You exited the previous session early. Questions are now harder to ensure mastery.
                    </p>
                </div>
            )}

            {/* Main Card */}
            <Card className={cn(
                "w-full max-w-3xl overflow-hidden shadow-lg border-border/60 bg-card transition-all duration-500",
                isHardMode && "shadow-orange-500/5 border-orange-500/10"
            )}>
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-muted/50">
                    <div
                        className={cn(
                            "h-full transition-all duration-300 ease-out",
                            isHardMode ? "bg-orange-500" : "bg-primary"
                        )}
                        style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                    />
                </div>

                <div className="p-6 md:p-10 space-y-8">
                    {/* Tags & Question */}
                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                                {quizData.title}
                            </span>
                            <span className={cn(
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase border",
                                currentQuestion.difficulty === 'Easy' && "bg-green-500/10 text-green-600 border-green-500/20",
                                currentQuestion.difficulty === 'Medium' && "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
                                currentQuestion.difficulty === 'Hard' && "bg-red-500/10 text-red-600 border-red-500/20",
                            )}>
                                {currentQuestion.difficulty}
                            </span>
                            {isHardMode && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 text-xs font-bold tracking-wide uppercase animate-pulse">
                                    <Zap className="w-3 h-3" /> Hard Mode
                                </span>
                            )}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-foreground">
                            {currentQuestion.question}
                        </h2>
                    </div>

                    {/* Options */}
                    <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedOption === index;
                            const label = String.fromCharCode(65 + index); // A, B, C, D...

                            return (
                                <div
                                    key={index}
                                    onClick={() => handleOptionSelect(index)}
                                    className={cn(
                                        "relative group flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 select-none",
                                        isSelected
                                            ? cn("shadow-sm", isHardMode ? "border-orange-500 bg-orange-500/5" : "border-primary bg-primary/5")
                                            : "border-border/50 hover:border-primary/50 hover:bg-muted/30"
                                    )}
                                >
                                    <div className={cn(
                                        "flex items-center justify-center w-8 h-8 rounded-full border border-border text-sm font-medium shrink-0 transition-colors",
                                        isSelected
                                            ? cn("text-primary-foreground", isHardMode ? "bg-orange-500 border-orange-500" : "bg-primary border-primary")
                                            : "bg-background text-muted-foreground group-hover:border-primary/50"
                                    )}>
                                        {label}
                                    </div>
                                    <div className={cn(
                                        "text-base md:text-lg flex-1 pt-0.5",
                                        isSelected ? cn("font-medium", isHardMode ? "text-orange-700 dark:text-orange-400" : "text-primary") : "font-normal text-foreground"
                                    )}>
                                        {option}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-muted/20 border-t border-border flex justify-end">
                    <Button
                        size="lg"
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className={cn(
                            "w-full md:w-auto min-w-[140px] text-base shadow-sm transition-colors",
                            isHardMode && "hover:bg-orange-600 bg-orange-500 text-white"
                        )}
                    >
                        {currentQuestionIndex === activeQuestions.length - 1 ? "Finish Assessment" : "Next Question"}
                    </Button>
                </div>
            </Card>
        </div>
    );
}

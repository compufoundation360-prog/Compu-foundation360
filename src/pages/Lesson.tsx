import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { QuizCard } from "@/components/QuizCard";
import { ContentRenderer } from "@/components/ContentRenderer";
import { module1Lessons, module2Lessons, module3Lessons, module4Lessons, module5Lessons, module6Lessons, module7Lessons, module8Lessons, module9Lessons, module10Lessons, module11Lessons } from "@/data/lessons";
import { toast } from "sonner";

const Lesson = () => {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Page transition effect
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Scroll to top immediately when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [moduleId, lessonId]);

  // Get lesson data based on module and lesson ID
  const lesson = useMemo(() => {
    const modId = parseInt(moduleId || "1");
    const lesId = parseInt(lessonId || "1");
    
    let lessonsArray;
    if (modId === 1) {
      lessonsArray = module1Lessons;
    } else if (modId === 2) {
      lessonsArray = module2Lessons;
    } else if (modId === 3) {
      lessonsArray = module3Lessons;
    } else if (modId === 4) {
      lessonsArray = module4Lessons;
    } else if (modId === 5) {
      lessonsArray = module5Lessons;
    } else if (modId === 6) {
      lessonsArray = module6Lessons;
    } else if (modId === 7) {
      lessonsArray = module7Lessons;
    } else if (modId === 8) {
      lessonsArray = module8Lessons;
    } else if (modId === 9) {
      lessonsArray = module9Lessons;
    } else if (modId === 10) {
      lessonsArray = module10Lessons;
    } else if (modId === 11) {
      lessonsArray = module11Lessons;
    } else {
      lessonsArray = module1Lessons; // fallback
    }
    
    return lessonsArray.find(l => l.id === lesId) || lessonsArray[0];
  }, [moduleId, lessonId]);

  const totalLessons = useMemo(() => {
    const modId = parseInt(moduleId || "1");
    if (modId === 1) return module1Lessons.length;
    if (modId === 2) return module2Lessons.length;
    if (modId === 3) return module3Lessons.length;
    if (modId === 4) return module4Lessons.length;
    if (modId === 5) return module5Lessons.length;
    if (modId === 6) return module6Lessons.length;
    if (modId === 7) return module7Lessons.length;
    if (modId === 8) return module8Lessons.length;
    if (modId === 9) return module9Lessons.length;
    if (modId === 10) return module10Lessons.length;
    if (modId === 11) return module11Lessons.length;
    return 5;
  }, [moduleId]);
  const quizQuestions = lesson?.quiz || [];

  const handleAnswer = (correct: boolean) => {
    setQuestionsAnswered(prev => prev + 1);
    if (correct) {
      setScore(prev => prev + 1);
    }

    if (questionsAnswered + 1 >= quizQuestions.length) {
      const finalScore = correct ? score + 1 : score;
      const percentage = (finalScore / quizQuestions.length) * 100;
      toast.success(`Quiz completed! Score: ${finalScore}/${quizQuestions.length} (${Math.round(percentage)}%)`);
    }
  };

  return (
    <div className={`min-h-screen bg-background hide-scrollbar ${isTransitioning ? 'page-enter' : ''}`}>
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1" />
            <button
              onClick={() => navigate(`/module/${moduleId}`)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Module</span>
            </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Lesson {lessonId} of {totalLessons}</span>
              {quizQuestions.length > 0 && (
              <Button 
                size="sm"
                onClick={() => setShowQuiz(!showQuiz)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {showQuiz ? "View Content" : "Take Quiz"}
              </Button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {!showQuiz ? (
          <div className="space-y-8 animate-fade-in">
            {/* Lesson Title */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{lesson?.title || "Lesson"}</h1>
              <p className="text-lg text-muted-foreground">
                {lesson?.description || "Learn about computer fundamentals"}
              </p>
            </div>

            {/* Render all content sections */}
            {lesson?.content.sections.map((section, index) => {
              // Generate illustration key based on lesson and section
              const illustrationKey = `lesson${lesson.id}-${section.type}-${index}`;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ContentRenderer section={section} illustrationKey={section.data.illustration} />
                </div>
              );
            })}

            {/* Key Takeaways */}
            <Card className="p-8 bg-gradient-to-br from-success/5 to-primary/5 border-2 border-success/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Takeaways 💡</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-success text-sm font-bold">✓</span>
                  </div>
                  <span>You've completed: {lesson?.title}</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-success text-sm font-bold">✓</span>
                    </div>
                  <span>Duration: {lesson?.duration}</span>
                  </li>
              </ul>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8">
              <div className="flex gap-2">
                {parseInt(lessonId || "1") > 1 && (
                  <Button 
                    variant="outline"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'auto' });
                      navigate(`/lesson/${moduleId}/${parseInt(lessonId || "1") - 1}`);
                    }}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                )}
              <Button 
                variant="outline"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'auto' });
                  navigate(`/module/${moduleId}`);
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Module
              </Button>
              </div>
              <div className="flex gap-2">
                {quizQuestions.length > 0 && (
              <Button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'auto' });
                  setShowQuiz(true);
                }}
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                Take Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
                )}
                {parseInt(lessonId || "1") < totalLessons && (
                  <Button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'auto' });
                      navigate(`/lesson/${moduleId}/${parseInt(lessonId || "1") + 1}`);
                    }}
                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    Next Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Test Your Knowledge</h1>
              <p className="text-lg text-muted-foreground mb-2">
                Answer these questions to check your understanding
              </p>
              <p className="text-sm text-muted-foreground">
                Score: {score}/{questionsAnswered} answered
              </p>
            </div>

            {quizQuestions[questionsAnswered] && (
              <QuizCard 
                question={quizQuestions[questionsAnswered]}
                onAnswer={handleAnswer}
              />
            )}

            {questionsAnswered >= quizQuestions.length && (
              <Card className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Quiz Completed! 🎉</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your final score: {score}/{quizQuestions.length} ({Math.round((score/quizQuestions.length)*100)}%)
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'auto' });
                      setShowQuiz(false);
                      setScore(0);
                      setQuestionsAnswered(0);
                    }}
                  >
                    Review Lesson
                  </Button>
                  {parseInt(lessonId || "1") < totalLessons ? (
                  <Button 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'auto' });
                        setShowQuiz(false);
                        setScore(0);
                        setQuestionsAnswered(0);
                        navigate(`/lesson/${moduleId}/${parseInt(lessonId || "1") + 1}`);
                      }}
                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    Next Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  ) : (
                    <Button 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'auto' });
                        navigate(`/module/${moduleId}`);
                      }}
                      className="bg-primary hover:bg-primary-dark text-primary-foreground"
                    >
                      Back to Module
                    </Button>
                  )}
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;

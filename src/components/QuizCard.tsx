import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
}

export const QuizCard = ({ question, onAnswer }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === question.correctAnswer;
    setShowFeedback(true);
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <Card className="p-6 animate-fade-in">
      <div className="flex items-start gap-3 mb-6">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <AlertCircle className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground flex-1">{question.question}</h3>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && setSelectedAnswer(index)}
            disabled={showFeedback}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedAnswer === index
                ? showFeedback
                  ? index === question.correctAnswer
                    ? "border-success bg-success/10"
                    : "border-destructive bg-destructive/10"
                  : "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 bg-background"
            } ${showFeedback && index === question.correctAnswer ? "border-success bg-success/10" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-foreground font-medium">{option}</span>
              {showFeedback && index === question.correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-success" />
              )}
              {showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
            </div>
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-lg mb-4 ${
          selectedAnswer === question.correctAnswer 
            ? "bg-success/10 border-2 border-success" 
            : "bg-destructive/10 border-2 border-destructive"
        }`}>
          <p className="text-sm font-medium mb-2 text-foreground">
            {selectedAnswer === question.correctAnswer ? "Correct! 🎉" : "Not quite right"}
          </p>
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      <Button
        onClick={showFeedback ? handleNext : handleSubmit}
        disabled={selectedAnswer === null && !showFeedback}
        className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
      >
        {showFeedback ? "Next Question" : "Submit Answer"}
      </Button>
    </Card>
  );
};

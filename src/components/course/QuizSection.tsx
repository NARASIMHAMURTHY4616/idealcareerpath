import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Trophy } from "lucide-react";
import { toast } from "sonner";

interface QuizSectionProps {
  courseId: string;
}

const pythonQuiz = {
  beginner: [
    {
      question: "What is the correct way to print 'Hello World' in Python?",
      options: [
        "echo('Hello World')",
        "print('Hello World')",
        "printf('Hello World')",
        "console.log('Hello World')",
      ],
      correct: 1,
      explanation: "In Python, the print() function is used to output text to the console. Unlike other languages that use printf, echo, or console.log, Python uses the simple and intuitive print() function.",
    },
    {
      question: "Which data type is used to store text in Python?",
      options: ["int", "float", "str", "bool"],
      correct: 2,
      explanation: "The 'str' (string) data type is used to store text in Python. Strings can be created using single quotes ('text') or double quotes (\"text\").",
    },
    {
      question: "What does the len() function do?",
      options: [
        "Returns the length of a string or list",
        "Converts to lowercase",
        "Adds numbers",
        "Deletes variables",
      ],
      correct: 0,
      explanation: "The len() function returns the number of items in an object. For strings, it returns the number of characters. For lists, it returns the number of elements.",
    },
  ],
  intermediate: [
    {
      question: "What is the output of: print(type([]))?",
      options: ["<class 'dict'>", "<class 'list'>", "<class 'tuple'>", "<class 'set'>"],
      correct: 1,
      explanation: "The square brackets [] create a list in Python. The type() function returns the class type of an object, so type([]) returns <class 'list'>.",
    },
    {
      question: "Which method adds an element to the end of a list?",
      options: ["add()", "append()", "push()", "insert()"],
      correct: 1,
      explanation: "The append() method adds a single element to the end of a list. Unlike push() in other languages, Python uses append(). The insert() method can add at any position.",
    },
  ],
};

const QuizSection = ({ courseId }: QuizSectionProps) => {
  const [selectedLevel, setSelectedLevel] = useState<"beginner" | "intermediate">("beginner");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const quiz = pythonQuiz[selectedLevel];
  const totalQuestions = quiz.length;

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    const isCorrect = selectedAnswer === quiz[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! Well done!");
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      const percentage = (score / totalQuestions) * 100;
      if (percentage >= 80) {
        toast.success("Excellent work! You've mastered this level!");
      } else if (percentage >= 60) {
        toast.success("Good job! Keep practicing to improve further.");
      } else {
        toast("Keep learning! Review the Learn section for better understanding.", {
          description: "Practice makes perfect!",
        });
      }
    }
  };

  const isQuizCompleted = currentQuestion === totalQuestions - 1 && showResult;

  return (
    <div className="space-y-6">
      {!quizStarted ? (
        <div className="space-y-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Python Quiz</CardTitle>
              <CardDescription>Test your knowledge and track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Select Difficulty Level</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedLevel === "beginner" ? "ring-2 ring-primary shadow-medium" : "hover:shadow-soft"
                      }`}
                      onClick={() => setSelectedLevel("beginner")}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">Beginner</CardTitle>
                        <CardDescription>
                          {pythonQuiz.beginner.length} questions - Fundamentals
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedLevel === "intermediate" ? "ring-2 ring-primary shadow-medium" : "hover:shadow-soft"
                      }`}
                      onClick={() => setSelectedLevel("intermediate")}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">Intermediate</CardTitle>
                        <CardDescription>
                          {pythonQuiz.intermediate.length} questions - Advanced concepts
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                <Button onClick={handleStartQuiz} className="w-full" size="lg">
                  Start Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Question {currentQuestion + 1} of {totalQuestions}</CardTitle>
                <CardDescription className="mt-1">
                  <Badge variant={selectedLevel === "beginner" ? "default" : "secondary"}>
                    {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}
                  </Badge>
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{score}/{totalQuestions}</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isQuizCompleted ? (
              <>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-lg font-medium">{quiz[currentQuestion].question}</p>
                </div>

                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                  disabled={showResult}
                >
                  <div className="space-y-3">
                    {quiz[currentQuestion].options.map((option, idx) => {
                      const isSelected = selectedAnswer === idx;
                      const isCorrect = idx === quiz[currentQuestion].correct;
                      const showCorrect = showResult && isCorrect;
                      const showWrong = showResult && isSelected && !isCorrect;

                      return (
                        <div
                          key={idx}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                            showCorrect
                              ? "border-green-500 bg-green-50 dark:bg-green-950"
                              : showWrong
                              ? "border-red-500 bg-red-50 dark:bg-red-950"
                              : isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                          <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                          {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>

                {showResult && (
                  <div className={`p-4 rounded-lg ${
                    selectedAnswer === quiz[currentQuestion].correct
                      ? "bg-green-50 dark:bg-green-950 border border-green-200"
                      : "bg-blue-50 dark:bg-blue-950 border border-blue-200"
                  }`}>
                    <h4 className="font-semibold mb-2">Explanation:</h4>
                    <p className="text-sm text-muted-foreground">
                      {quiz[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  {!showResult ? (
                    <Button onClick={handleAnswer} className="flex-1">
                      Submit Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNext} className="flex-1">
                      {currentQuestion < totalQuestions - 1 ? "Next Question" : "View Results"}
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                  <p className="text-lg text-muted-foreground">
                    Your Score: {score} out of {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
                  </p>
                </div>
                <Button onClick={() => setQuizStarted(false)} className="mt-6">
                  Take Another Quiz
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuizSection;

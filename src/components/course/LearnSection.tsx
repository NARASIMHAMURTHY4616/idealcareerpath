import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface LearnSectionProps {
  courseId: string;
}

const pythonContent = {
  topics: [
    { name: "Introduction to Python", level: "Beginner", description: "Python basics, syntax, and first program" },
    { name: "Data Types & Variables", level: "Beginner", description: "Numbers, strings, lists, tuples, dictionaries" },
    { name: "Control Flow", level: "Beginner", description: "If-else, loops, break, continue" },
    { name: "Functions", level: "Intermediate", description: "Function definition, parameters, return values" },
    { name: "Object-Oriented Programming", level: "Intermediate", description: "Classes, objects, inheritance" },
    { name: "File Handling", level: "Intermediate", description: "Reading and writing files" },
    { name: "Modules & Packages", level: "Advanced", description: "Importing modules, creating packages" },
    { name: "Error Handling", level: "Advanced", description: "Try-except blocks, custom exceptions" },
  ],
  syntax: [
    { title: "Print Statement", code: "print('Hello, World!')" },
    { title: "Variables", code: "name = 'John'\nage = 25\nheight = 5.9" },
    { title: "Lists", code: "fruits = ['apple', 'banana', 'orange']\nfruits.append('mango')" },
    { title: "For Loop", code: "for i in range(5):\n    print(i)" },
    { title: "Functions", code: "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Alice'))" },
    { title: "Dictionary", code: "person = {'name': 'John', 'age': 30}\nprint(person['name'])" },
  ],
  examples: [
    {
      title: "Hello World",
      description: "Your first Python program",
      code: "# This is a comment\nprint('Hello, World!')",
      output: "Hello, World!",
      explanation: "The print() function displays text to the console. Strings are enclosed in quotes.",
    },
    {
      title: "Variables and Math",
      description: "Working with numbers",
      code: "# Variables\nx = 10\ny = 5\n\n# Operations\nsum = x + y\nproduct = x * y\n\nprint(f'Sum: {sum}')\nprint(f'Product: {product}')",
      output: "Sum: 15\nProduct: 50",
      explanation: "Variables store values. Python supports basic math operations. F-strings format output.",
    },
    {
      title: "Working with Lists",
      description: "List operations",
      code: "# Create a list\nfruits = ['apple', 'banana', 'orange']\n\n# Add item\nfruits.append('mango')\n\n# Access items\nprint(fruits[0])  # First item\nprint(fruits[-1]) # Last item\n\n# Loop through list\nfor fruit in fruits:\n    print(f'I like {fruit}')",
      output: "apple\nmango\nI like apple\nI like banana\nI like orange\nI like mango",
      explanation: "Lists store multiple items. Use append() to add items. Access items by index (0-based).",
    },
  ],
  exercises: [
    {
      question: "Write a program that prints numbers from 1 to 10",
      hint: "Use a for loop with range()",
      solution: "for i in range(1, 11):\n    print(i)",
    },
    {
      question: "Create a function that calculates the area of a rectangle",
      hint: "Function should take length and width as parameters",
      solution: "def calculate_area(length, width):\n    return length * width\n\narea = calculate_area(5, 3)\nprint(f'Area: {area}')",
    },
  ],
};

const LearnSection = ({ courseId }: LearnSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Learn Programming & Tools</CardTitle>
          <CardDescription>Master languages, tools, and technologies step-by-step</CardDescription>
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search topics, languages, or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="python" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="java">Java</TabsTrigger>
          <TabsTrigger value="web">Web Dev</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="tools">AI Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="python" className="space-y-6 mt-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Topics & Exploration</CardTitle>
              <CardDescription>From fundamentals to advanced concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {pythonContent.topics.map((topic, idx) => (
                  <div key={idx} className="p-4 rounded-lg border hover:shadow-soft transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{topic.name}</h4>
                      <Badge variant={topic.level === "Beginner" ? "default" : topic.level === "Intermediate" ? "secondary" : "outline"}>
                        {topic.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Syntax Reference</CardTitle>
              <CardDescription>Quick reference for common Python syntax</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {pythonContent.syntax.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(item.code, idx)}
                      >
                        {copiedIndex === idx ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <pre className="text-sm font-mono bg-background p-3 rounded overflow-x-auto">
                      {item.code}
                    </pre>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Step-by-Step Examples</CardTitle>
              <CardDescription>Learn by doing with progressive examples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pythonContent.examples.map((example, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <div className="mb-3">
                      <h4 className="font-semibold text-lg mb-1">{example.title}</h4>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Code:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(example.code, idx + 100)}
                        >
                          {copiedIndex === idx + 100 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                      <pre className="text-sm font-mono bg-muted p-3 rounded overflow-x-auto">
                        {example.code}
                      </pre>
                    </div>

                    <div className="mb-3">
                      <span className="text-sm font-medium">Output:</span>
                      <pre className="text-sm font-mono bg-accent/10 p-3 rounded mt-2 overflow-x-auto">
                        {example.output}
                      </pre>
                    </div>

                    <div className="bg-primary/5 p-3 rounded">
                      <span className="text-sm font-medium">Why it works:</span>
                      <p className="text-sm text-muted-foreground mt-1">{example.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Mini Exercises</CardTitle>
              <CardDescription>Practice what you learned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pythonContent.exercises.map((exercise, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Exercise {idx + 1}</h4>
                    <p className="text-sm mb-2">{exercise.question}</p>
                    <details className="mt-3">
                      <summary className="text-sm text-primary cursor-pointer hover:underline">Show hint</summary>
                      <p className="text-sm text-muted-foreground mt-2">{exercise.hint}</p>
                    </details>
                    <details className="mt-2">
                      <summary className="text-sm text-primary cursor-pointer hover:underline">Show solution</summary>
                      <pre className="text-sm font-mono bg-muted p-3 rounded mt-2 overflow-x-auto">
                        {exercise.solution}
                      </pre>
                    </details>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="java" className="mt-6">
          <Card className="shadow-medium">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Java content coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="web" className="mt-6">
          <Card className="shadow-medium">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Web development content coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="mt-6">
          <Card className="shadow-medium">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Database content coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="mt-6">
          <Card className="shadow-medium">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">AI tools content coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearnSection;

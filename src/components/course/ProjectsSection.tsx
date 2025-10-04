import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Brain } from "lucide-react";

interface ProjectsSectionProps {
  courseId: string;
}

const projects = [
  {
    title: "Library Management System",
    description: "Build a complete system to manage books, members, and transactions",
    technologies: ["Python", "SQL", "Tkinter"],
    difficulty: "Intermediate",
    icon: Database,
  },
  {
    title: "E-Commerce Website",
    description: "Create a full-stack online shopping platform with cart and payment",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    difficulty: "Advanced",
    icon: Globe,
  },
  {
    title: "Student Attendance System",
    description: "Automated attendance tracking using facial recognition",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    difficulty: "Advanced",
    icon: Brain,
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio to showcase your projects and skills",
    technologies: ["HTML", "CSS", "JavaScript"],
    difficulty: "Beginner",
    icon: Code,
  },
];

const ProjectsSection = ({ courseId }: ProjectsSectionProps) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Course Projects</CardTitle>
          <CardDescription>Hands-on projects to apply your learning and build your portfolio</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <Card key={idx} className="shadow-medium hover:shadow-large transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant={
                        project.difficulty === "Beginner" ? "default" : 
                        project.difficulty === "Intermediate" ? "secondary" : 
                        "outline"
                      }>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;

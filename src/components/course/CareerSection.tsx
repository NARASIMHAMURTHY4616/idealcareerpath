import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Briefcase, DollarSign, Target } from "lucide-react";

interface CareerSectionProps {
  courseId: string;
}

const careerPaths = [
  {
    title: "Software Developer",
    description: "Design, develop, and maintain software applications",
    skills: ["Programming", "Problem Solving", "Version Control"],
    salaryRange: "$60,000 - $120,000",
    demand: "High",
  },
  {
    title: "Web Developer",
    description: "Build and maintain websites and web applications",
    skills: ["HTML/CSS", "JavaScript", "Frameworks"],
    salaryRange: "$50,000 - $100,000",
    demand: "Very High",
  },
  {
    title: "Data Analyst",
    description: "Analyze data and provide insights for business decisions",
    skills: ["SQL", "Python", "Data Visualization"],
    salaryRange: "$55,000 - $95,000",
    demand: "High",
  },
  {
    title: "Machine Learning Engineer",
    description: "Develop AI models and intelligent systems",
    skills: ["Python", "ML Algorithms", "Deep Learning"],
    salaryRange: "$80,000 - $150,000",
    demand: "Very High",
  },
  {
    title: "Full Stack Developer",
    description: "Work on both frontend and backend development",
    skills: ["Frontend", "Backend", "Database"],
    salaryRange: "$70,000 - $130,000",
    demand: "Very High",
  },
  {
    title: "Database Administrator",
    description: "Manage and optimize database systems",
    skills: ["SQL", "Database Design", "Performance Tuning"],
    salaryRange: "$60,000 - $110,000",
    demand: "High",
  },
];

const CareerSection = ({ courseId }: CareerSectionProps) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Career Opportunities & Paths</CardTitle>
          <CardDescription>Explore the diverse career options available after graduation</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-muted-foreground">Placement Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-xs text-muted-foreground">Partner Companies</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">$75K</div>
                <div className="text-xs text-muted-foreground">Avg. Starting Salary</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">15%</div>
                <div className="text-xs text-muted-foreground">Annual Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {careerPaths.map((career, idx) => (
          <Card key={idx} className="shadow-medium hover:shadow-large transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-lg">{career.title}</CardTitle>
                <Badge variant={career.demand === "Very High" ? "default" : "secondary"}>
                  {career.demand} Demand
                </Badge>
              </div>
              <CardDescription>{career.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, skillIdx) => (
                    <Badge key={skillIdx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Salary Range (Annual)</span>
                  <span className="text-sm font-semibold text-primary">{career.salaryRange}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-medium bg-gradient-card">
        <CardHeader>
          <CardTitle>Industry Insights</CardTitle>
          <CardDescription>Current trends and future outlook</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Growing Sectors</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cloud Computing</li>
                <li>• AI & Machine Learning</li>
                <li>• Cybersecurity</li>
                <li>• Mobile Development</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Top Recruiters</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tech Giants (Google, Microsoft)</li>
                <li>• Startups & Unicorns</li>
                <li>• Consulting Firms</li>
                <li>• Financial Services</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Career Growth</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Junior → Senior (3-5 years)</li>
                <li>• Tech Lead (5-7 years)</li>
                <li>• Architect (7-10 years)</li>
                <li>• Management Roles</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerSection;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Trophy, Users } from "lucide-react";

interface CourseOverviewProps {
  courseId: string;
}

const CourseOverview = ({ courseId }: CourseOverviewProps) => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Course Structure</CardTitle>
                <CardDescription>Comprehensive learning path</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 6 Semesters of intensive learning</li>
              <li>• Theory and practical sessions</li>
              <li>• Industry-relevant projects</li>
              <li>• Regular assessments and evaluations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Learning Objectives</CardTitle>
                <CardDescription>What you will achieve</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Master core programming concepts</li>
              <li>• Build real-world applications</li>
              <li>• Develop problem-solving skills</li>
              <li>• Industry-ready expertise</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Key Outcomes</CardTitle>
                <CardDescription>Skills you will gain</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Software development proficiency</li>
              <li>• Database management skills</li>
              <li>• Web and mobile development</li>
              <li>• Algorithm design and analysis</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Student Support</CardTitle>
                <CardDescription>Resources available</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Expert faculty guidance</li>
              <li>• Interactive learning materials</li>
              <li>• Peer collaboration opportunities</li>
              <li>• Career counseling services</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Major Subjects</CardTitle>
          <CardDescription>Core curriculum topics covered in this course</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">Programming Fundamentals</h4>
              <p className="text-sm text-muted-foreground">C, Python, Java, Data Structures</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">Web Technologies</h4>
              <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, Frameworks</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">Database Systems</h4>
              <p className="text-sm text-muted-foreground">SQL, NoSQL, Database Design</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">Software Engineering</h4>
              <p className="text-sm text-muted-foreground">SDLC, Testing, Version Control</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
              <p className="text-sm text-muted-foreground">ML Algorithms, Neural Networks</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">Tools & Platforms</h4>
              <p className="text-sm text-muted-foreground">Excel, PowerBI, Tableau, Canva</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseOverview;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase } from "lucide-react";

interface FacultySectionProps {
  courseId: string;
}

const faculty = [
  {
    name: "Dr. Sarah Johnson",
    designation: "Professor & Head of Department",
    specialization: "Artificial Intelligence & Machine Learning",
    experience: "15 years",
    email: "sarah.johnson@college.edu",
  },
  {
    name: "Prof. Michael Chen",
    designation: "Associate Professor",
    specialization: "Database Systems & Web Technologies",
    experience: "12 years",
    email: "michael.chen@college.edu",
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Assistant Professor",
    specialization: "Software Engineering & DevOps",
    experience: "8 years",
    email: "priya.sharma@college.edu",
  },
  {
    name: "Prof. David Lee",
    designation: "Assistant Professor",
    specialization: "Data Structures & Algorithms",
    experience: "10 years",
    email: "david.lee@college.edu",
  },
];

const FacultySection = ({ courseId }: FacultySectionProps) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Our Faculty</CardTitle>
          <CardDescription>Expert educators dedicated to your success</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {faculty.map((member, idx) => (
          <Card key={idx} className="shadow-medium hover:shadow-large transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-sm">{member.designation}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Specialization</h4>
                <p className="text-sm">{member.specialization}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span>{member.experience}</span>
                </div>
                <Badge variant="outline" className="text-xs">Experienced</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                  {member.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacultySection;

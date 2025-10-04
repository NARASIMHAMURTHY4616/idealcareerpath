import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, LogOut } from "lucide-react";
import { toast } from "sonner";
import collegeLogo from "@/assets/college-logo.png";
import CourseOverview from "@/components/course/CourseOverview";
import LearnSection from "@/components/course/LearnSection";
import QuizSection from "@/components/course/QuizSection";
import ProjectsSection from "@/components/course/ProjectsSection";
import FacultySection from "@/components/course/FacultySection";
import CareerSection from "@/components/course/CareerSection";

const courseData: Record<string, { name: string; description: string }> = {
  "bsc-cs": {
    name: "B.Sc. Computer Science",
    description: "Comprehensive study of computer systems, algorithms, and software development",
  },
  "bca": {
    name: "BCA",
    description: "Bachelor of Computer Applications - Practical computing and application development",
  },
  "bsc-ai": {
    name: "B.Sc. Artificial Intelligence",
    description: "Cutting-edge AI, machine learning, and intelligent systems",
  },
};

const Course = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  if (!user || !courseId || !courseData[courseId]) return null;

  const course = courseData[courseId];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <img src={collegeLogo} alt="College Logo" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-lg font-bold text-foreground">{course.name}</h1>
              <p className="text-xs text-muted-foreground">{course.description}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="career">Career Path</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <CourseOverview courseId={courseId} />
          </TabsContent>

          <TabsContent value="learn">
            <LearnSection courseId={courseId} />
          </TabsContent>

          <TabsContent value="quiz">
            <QuizSection courseId={courseId} />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsSection courseId={courseId} />
          </TabsContent>

          <TabsContent value="faculty">
            <FacultySection courseId={courseId} />
          </TabsContent>

          <TabsContent value="career">
            <CareerSection courseId={courseId} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Course;

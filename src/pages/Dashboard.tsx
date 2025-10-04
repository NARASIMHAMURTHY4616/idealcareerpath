import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, LogOut, Brain, Code, Cpu } from "lucide-react";
import { toast } from "sonner";
import collegeLogo from "@/assets/college-logo.png";

const courses = [
  {
    id: "bsc-cs",
    name: "B.Sc. Computer Science",
    description: "Comprehensive study of computer systems, algorithms, and software development",
    icon: Code,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "bca",
    name: "BCA",
    description: "Bachelor of Computer Applications - Practical computing and application development",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "bsc-ai",
    name: "B.Sc. Artificial Intelligence",
    description: "Cutting-edge AI, machine learning, and intelligent systems",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      
      setProfile(profileData);
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

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={collegeLogo} alt="College Logo" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-foreground">AcademiLearn</h1>
              <p className="text-sm text-muted-foreground">Student Learning Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{profile?.full_name || user.email}</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Select Your Course</h2>
            <p className="text-lg text-muted-foreground">Choose a course to access learning materials, projects, and more</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <Card
                  key={course.id}
                  className="cursor-pointer hover:shadow-large transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-medium`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{course.name}</CardTitle>
                    <CardDescription className="text-sm">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Enter Course
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

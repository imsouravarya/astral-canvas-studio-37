import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import TechSection from "../components/TechSection";
import ProjectsSection from "../components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <TechSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Index;

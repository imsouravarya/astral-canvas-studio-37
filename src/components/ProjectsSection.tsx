import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "NEXUS PLATFORM",
      category: "Web Application",
      description: "A revolutionary social platform that connects minds across dimensions using quantum entanglement protocols.",
      gradient: "bg-gradient-primary",
    },
    {
      title: "CYBER SHIELD",
      category: "Security System",
      description: "Advanced AI-powered cybersecurity solution that predicts and prevents attacks before they happen.",
      gradient: "bg-gradient-accent",
    },
    {
      title: "HOLO INTERFACE",
      category: "UI/UX Design",
      description: "Three-dimensional user interface that responds to gesture and thought patterns for seamless interaction.",
      gradient: "bg-gradient-primary",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className={`font-orbitron text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
          }`}>
            <span className="text-foreground">FEATURED</span>{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group relative overflow-hidden bg-card/30 backdrop-blur-sm border-border/50 
                         hover:border-neon-cyan/50 transition-all duration-500 cursor-pointer
                         ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 ${project.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className="mb-6">
                  <span className="text-sm font-orbitron text-neon-cyan tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-orbitron text-2xl font-bold mt-2 mb-4 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <Button 
                  asChild
                  variant="ghost" 
                  className="group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-all duration-300 font-orbitron"
                >
                  <Link to="/projects">EXPLORE PROJECT →</Link>
                </Button>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/30 group-hover:shadow-glow-accent transition-all duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-40 h-40 border border-neon-purple/10 rotate-45 animate-float" />
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-neon-cyan/10 rotate-12 animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

export default ProjectsSection;
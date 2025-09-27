import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import abstractTech from '@/assets/abstract-tech.jpg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      description: "A revolutionary social platform that connects minds across dimensions using quantum entanglement protocols. Built with React, Node.js, and quantum computing APIs.",
      technologies: ["React", "Node.js", "Quantum APIs", "WebGL"],
      status: "Live",
      gradient: "bg-gradient-primary",
    },
    {
      title: "CYBER SHIELD",
      category: "Security System", 
      description: "Advanced AI-powered cybersecurity solution that predicts and prevents attacks before they happen using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      status: "Beta",
      gradient: "bg-gradient-accent",
    },
    {
      title: "HOLO INTERFACE",
      category: "UI/UX Design",
      description: "Three-dimensional user interface that responds to gesture and thought patterns for seamless interaction in VR environments.",
      technologies: ["Unity", "C#", "AR/VR", "Brain-Computer Interface"],
      status: "Development",
      gradient: "bg-gradient-primary",
    },
    {
      title: "NEURAL NETWORK X",
      category: "AI Research",
      description: "Deep learning system capable of creative thinking and problem-solving across multiple domains simultaneously.",
      technologies: ["PyTorch", "CUDA", "Transformer", "GPT"],
      status: "Research",
      gradient: "bg-gradient-accent",
    },
    {
      title: "QUANTUM COMPILER",
      category: "Development Tool",
      description: "Revolutionary compiler that translates classical code into quantum algorithms automatically for quantum computers.",
      technologies: ["Rust", "LLVM", "Qiskit", "Assembly"],
      status: "Alpha",
      gradient: "bg-gradient-primary",
    },
    {
      title: "SPACE EXPLORER",
      category: "Simulation",
      description: "Immersive space exploration platform with realistic physics and procedurally generated galaxies.",
      technologies: ["C++", "OpenGL", "Physics Engine", "Procedural Gen"],
      status: "Live",
      gradient: "bg-gradient-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${abstractTech})` }}
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in font-inter max-w-4xl mx-auto">
            Explore our portfolio of cutting-edge projects that push the boundaries of technology and innovation
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={sectionRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group relative overflow-hidden bg-card/30 backdrop-blur-sm border-border/50 
                           hover:border-neon-cyan/50 transition-all duration-500 cursor-pointer
                           ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-orbitron font-bold ${
                    project.status === 'Live' ? 'bg-neon-cyan/20 text-neon-cyan' :
                    project.status === 'Beta' ? 'bg-neon-purple/20 text-neon-purple' :
                    project.status === 'Development' ? 'bg-neon-pink/20 text-neon-pink' :
                    'bg-muted/20 text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>

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
                    <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-muted/20 text-xs font-inter rounded border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-all duration-300 font-orbitron"
                  >
                    VIEW PROJECT →
                  </Button>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/30 group-hover:shadow-glow-accent transition-all duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-40 h-40 border border-neon-purple/10 rotate-45 animate-float" />
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-neon-cyan/10 rotate-12 animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
};

export default Projects;
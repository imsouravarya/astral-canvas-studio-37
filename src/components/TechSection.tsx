import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import abstractTech from '@/assets/abstract-tech.jpg';
import hologram from '@/assets/hologram.jpg';

const TechSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      title: "QUANTUM COMPUTING",
      description: "Harnessing quantum mechanics for unprecedented computational power",
      icon: "⚛️",
    },
    {
      title: "NEURAL NETWORKS",
      description: "Advanced AI systems that learn and adapt like the human brain",
      icon: "🧠",
    },
    {
      title: "HOLOGRAPHIC UI",
      description: "Three-dimensional interfaces that float in mid-air",
      icon: "🔮",
    },
    {
      title: "BLOCKCHAIN SECURITY",
      description: "Immutable data protection using distributed ledger technology",
      icon: "🔗",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${abstractTech})` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${hologram})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className={`font-orbitron text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
          }`}>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground font-inter max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            We leverage cutting-edge technologies to create immersive digital experiences 
            that push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-purple/50 
                         hover:shadow-neon transition-all duration-500 group cursor-pointer
                         ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-6 group-hover:animate-float">
                  {tech.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-4 text-neon-cyan group-hover:text-neon-purple transition-colors">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-neon-pink rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-neon-purple/30 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default TechSection;
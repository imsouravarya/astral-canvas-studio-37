import Navigation from '../components/Navigation';
import { Card } from '@/components/ui/card';
import abstractTech from '@/assets/abstract-tech.jpg';
import { useEffect, useRef, useState } from 'react';

const Tech = () => {
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

  const technologies = [
    {
      category: "ARTIFICIAL INTELLIGENCE",
      items: [
        {
          name: "Neural Networks",
          description: "Deep learning architectures that mimic human brain processing",
          icon: "🧠",
          applications: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"]
        },
        {
          name: "Machine Learning",
          description: "Algorithms that learn and improve from data without explicit programming",
          icon: "🤖",
          applications: ["Pattern Recognition", "Recommendation Systems", "Autonomous Systems"]
        },
        {
          name: "Quantum AI",
          description: "Fusion of quantum computing with artificial intelligence",
          icon: "⚛️",
          applications: ["Optimization Problems", "Cryptography", "Drug Discovery"]
        }
      ]
    },
    {
      category: "EXTENDED REALITY",
      items: [
        {
          name: "Virtual Reality",
          description: "Immersive digital environments that replace the physical world",
          icon: "🥽",
          applications: ["Training Simulations", "Entertainment", "Virtual Collaboration"]
        },
        {
          name: "Augmented Reality",
          description: "Digital overlays that enhance the real world with virtual elements",
          icon: "👓",
          applications: ["Navigation", "Industrial Maintenance", "Medical Visualization"]
        },
        {
          name: "Mixed Reality",
          description: "Seamless blend of physical and digital worlds",
          icon: "🌐",
          applications: ["Design Collaboration", "Remote Assistance", "Spatial Computing"]
        }
      ]
    },
    {
      category: "BLOCKCHAIN & WEB3",
      items: [
        {
          name: "Smart Contracts",
          description: "Self-executing contracts with terms directly written into code",
          icon: "📜",
          applications: ["DeFi Protocols", "NFT Marketplaces", "Supply Chain"]
        },
        {
          name: "Decentralized Apps",
          description: "Applications that run on blockchain networks",
          icon: "🔗",
          applications: ["Peer-to-Peer Trading", "Governance Systems", "Identity Management"]
        },
        {
          name: "Quantum Cryptography",
          description: "Ultra-secure communication using quantum mechanics principles",
          icon: "🔐",
          applications: ["Secure Communications", "Digital Signatures", "Key Distribution"]
        }
      ]
    }
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
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in font-inter max-w-4xl mx-auto">
            Explore the cutting-edge technologies we leverage to build the future of digital experiences
          </p>
        </div>
      </section>

      {/* Technologies Sections */}
      <section ref={sectionRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {technologies.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-12">
              <div className="text-center">
                <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
                }`} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                  <span className="text-neon-cyan">
                    {category.category}
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.items.map((tech, techIndex) => (
                  <Card 
                    key={tech.name}
                    className={`group p-8 bg-card/30 backdrop-blur-sm border-border/50 
                               hover:border-neon-purple/50 hover:shadow-neon transition-all duration-500
                               ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}
                    style={{ animationDelay: `${(categoryIndex * 3 + techIndex) * 0.1}s` }}
                  >
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4 group-hover:animate-float">
                        {tech.icon}
                      </div>
                      <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-purple group-hover:text-neon-cyan transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-orbitron text-sm font-bold text-neon-cyan mb-3 tracking-wider">
                        APPLICATIONS
                      </h4>
                      <div className="space-y-2">
                        {tech.applications.map((app) => (
                          <div key={app} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                            <span className="text-sm font-inter text-muted-foreground">
                              {app}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="font-orbitron text-4xl font-bold text-neon-cyan mb-2">500+</div>
              <div className="text-muted-foreground font-inter">AI Models Trained</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="font-orbitron text-4xl font-bold text-neon-purple mb-2">50TB</div>
              <div className="text-muted-foreground font-inter">Data Processed</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="font-orbitron text-4xl font-bold text-neon-pink mb-2">99.9%</div>
              <div className="text-muted-foreground font-inter">Uptime Guarantee</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="font-orbitron text-4xl font-bold text-neon-cyan mb-2">24/7</div>
              <div className="text-muted-foreground font-inter">Neural Network Support</div>
            </div>
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

export default Tech;
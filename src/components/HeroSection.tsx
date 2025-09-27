import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-neon-purple/40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-neon-pink/50 rotate-12 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-8 animate-slide-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            ASTRAL
          </span>
          <br />
          <span className="text-foreground">CANVAS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in font-inter" style={{ animationDelay: '0.3s' }}>
          Crafting the future of digital experiences with cutting-edge technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 font-orbitron text-lg px-8 py-4"
          >
            EXPLORE PROJECTS
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-accent transition-all duration-300 font-orbitron text-lg px-8 py-4"
          >
            CONTACT US
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
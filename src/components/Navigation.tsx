import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron text-2xl font-bold">
            <span className="text-neon-purple">ASTRAL</span>
            <span className="text-neon-cyan">CANVAS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-inter">
            <a href="#home" className="text-foreground hover:text-neon-cyan transition-colors">Home</a>
            <a href="#tech" className="text-foreground hover:text-neon-cyan transition-colors">Tech</a>
            <a href="#projects" className="text-foreground hover:text-neon-cyan transition-colors">Projects</a>
            <a href="#contact" className="text-foreground hover:text-neon-cyan transition-colors">Contact</a>
          </div>
          
          <Button 
            variant="outline" 
            className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-glow transition-all duration-300 font-orbitron"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
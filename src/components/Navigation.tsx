import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
          <Link to="/" className="font-orbitron text-2xl font-bold">
            <span className="text-neon-purple">ASTRAL</span>
            <span className="text-neon-cyan">CANVAS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 font-inter">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === '/' ? 'text-neon-cyan' : 'text-foreground hover:text-neon-cyan'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tech" 
              className={`transition-colors ${
                location.pathname === '/tech' ? 'text-neon-cyan' : 'text-foreground hover:text-neon-cyan'
              }`}
            >
              Tech
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors ${
                location.pathname === '/projects' ? 'text-neon-cyan' : 'text-foreground hover:text-neon-cyan'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                location.pathname === '/contact' ? 'text-neon-cyan' : 'text-foreground hover:text-neon-cyan'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <Button 
            asChild
            variant="outline" 
            className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-glow transition-all duration-300 font-orbitron"
          >
            <Link to="/get-started">GET STARTED</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
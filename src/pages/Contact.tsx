import Navigation from '../components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import hologram from '@/assets/hologram.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${hologram})` }}
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              CONTACT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in font-inter max-w-4xl mx-auto">
            Ready to embark on a journey to the future? Let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50 animate-scale-in">
              <h2 className="font-orbitron text-3xl font-bold mb-8 text-neon-cyan">
                SEND TRANSMISSION
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-orbitron text-muted-foreground mb-2">
                      NAME
                    </label>
                    <Input 
                      className="bg-muted/20 border-border/50 focus:border-neon-cyan transition-colors font-inter" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-orbitron text-muted-foreground mb-2">
                      EMAIL
                    </label>
                    <Input 
                      type="email"
                      className="bg-muted/20 border-border/50 focus:border-neon-cyan transition-colors font-inter" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-orbitron text-muted-foreground mb-2">
                    PROJECT TYPE
                  </label>
                  <select className="w-full p-3 bg-muted/20 border border-border/50 rounded-md focus:border-neon-cyan transition-colors font-inter text-foreground">
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>AI/ML Solution</option>
                    <option>Blockchain Project</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-orbitron text-muted-foreground mb-2">
                    MESSAGE
                  </label>
                  <Textarea 
                    className="bg-muted/20 border-border/50 focus:border-neon-cyan transition-colors font-inter min-h-[120px]" 
                    placeholder="Tell us about your project vision..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 font-orbitron text-lg"
                >
                  INITIATE CONTACT
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-purple/50 transition-all duration-300">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-purple">
                  DIRECT CHANNELS
                </h3>
                <div className="space-y-4 font-inter">
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-cyan">📧</span>
                    <span>contact@astralcanvas.dev</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-cyan">📱</span>
                    <span>+1 (555) QUANTUM</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-cyan">🌐</span>
                    <span>astralcanvas.dev</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-cyan/50 transition-all duration-300">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-cyan">
                  NEURAL NETWORKS
                </h3>
                <div className="space-y-4 font-inter">
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-purple">🔗</span>
                    <span>LinkedIn: /company/astral-canvas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-purple">🐙</span>
                    <span>GitHub: /astral-canvas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-purple">🐦</span>
                    <span>Twitter: @astralcanvas</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-pink/50 transition-all duration-300">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-pink">
                  LOCATION MATRIX
                </h3>
                <div className="font-inter">
                  <p className="text-muted-foreground mb-2">Primary Node:</p>
                  <p>Neo Tokyo, Cyberspace District</p>
                  <p>Sector 7, Block 2049</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Physical meetings available in the metaverse
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow" />
        <div className="absolute top-2/3 right-20 w-1 h-1 bg-neon-pink rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-purple/30 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Contact;
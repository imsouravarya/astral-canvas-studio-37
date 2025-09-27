import Navigation from '../components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import hologram from '@/assets/hologram.jpg';

const GetStarted = () => {
  const steps = [
    {
      number: "01",
      title: "CONSULTATION",
      description: "We analyze your vision and requirements to craft the perfect digital solution.",
      icon: "💭",
      duration: "1-2 weeks"
    },
    {
      number: "02", 
      title: "DESIGN & ARCHITECTURE",
      description: "Our team creates detailed blueprints and prototypes for your project.",
      icon: "🎨",
      duration: "2-3 weeks"
    },
    {
      number: "03",
      title: "DEVELOPMENT",
      description: "Using cutting-edge technologies, we bring your project to life.",
      icon: "⚡",
      duration: "4-12 weeks"
    },
    {
      number: "04",
      title: "TESTING & OPTIMIZATION",
      description: "Rigorous testing ensures your solution performs flawlessly at scale.",
      icon: "🔬",
      duration: "1-2 weeks"
    },
    {
      number: "05",
      title: "LAUNCH & SUPPORT",
      description: "We deploy your solution and provide ongoing maintenance and support.",
      icon: "🚀",
      duration: "Ongoing"
    }
  ];

  const packages = [
    {
      name: "STARTER",
      price: "$5,000",
      description: "Perfect for small projects and prototypes",
      features: [
        "Basic web application",
        "Responsive design",
        "Standard animations",
        "3 months support",
        "Source code included"
      ],
      gradient: "bg-gradient-primary",
      popular: false
    },
    {
      name: "PROFESSIONAL",
      price: "$15,000",
      description: "Ideal for medium-scale business solutions",
      features: [
        "Full-stack application",
        "Advanced animations",
        "Database integration",
        "API development",
        "6 months support",
        "Performance optimization",
        "Security implementation"
      ],
      gradient: "bg-gradient-accent",
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      description: "For large-scale, mission-critical systems",
      features: [
        "Scalable architecture",
        "AI/ML integration",
        "Blockchain features",
        "VR/AR capabilities",
        "12 months support",
        "DevOps setup",
        "24/7 monitoring",
        "Custom integrations"
      ],
      gradient: "bg-gradient-primary",
      popular: false
    }
  ];

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
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              GET STARTED
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in font-inter max-w-4xl mx-auto">
            Begin your journey into the future of digital experiences with our proven development process
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
              OUR PROCESS
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              A systematic approach to transforming your vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={step.number}
                className="group p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-purple/50 
                          hover:shadow-neon transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {step.icon}
                  </div>
                  <div className="font-orbitron text-sm text-neon-cyan mb-2 tracking-wider">
                    STEP {step.number}
                  </div>
                  <h3 className="font-orbitron text-xl font-bold mb-4 group-hover:text-neon-purple transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="text-xs text-neon-cyan font-orbitron">
                    {step.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-neon-purple">
              CHOOSE YOUR PACKAGE
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Select the perfect package for your project requirements and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`group relative p-8 bg-card/30 backdrop-blur-sm border-border/50 
                           hover:border-neon-cyan/50 hover:shadow-glow-accent transition-all duration-500
                           animate-scale-in ${pkg.popular ? 'ring-2 ring-neon-cyan/30' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-accent px-4 py-2 rounded-full text-sm font-orbitron font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`absolute inset-0 ${pkg.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="font-orbitron text-2xl font-bold mb-2 text-neon-cyan">
                      {pkg.name}
                    </h3>
                    <div className="font-orbitron text-4xl font-bold mb-4 text-neon-purple">
                      {pkg.price}
                    </div>
                    <p className="text-muted-foreground font-inter">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                        <span className="font-inter text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild
                    className={`w-full ${pkg.popular ? 'bg-gradient-accent' : 'bg-gradient-primary'} 
                               hover:shadow-neon transition-all duration-300 font-orbitron`}
                  >
                    <Link to="/contact">
                      SELECT PACKAGE
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl font-bold mb-8 animate-slide-up">
            READY TO START YOUR
            <span className="bg-gradient-primary bg-clip-text text-transparent"> DIGITAL TRANSFORMATION</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-inter animate-fade-in">
            Join hundreds of satisfied clients who have transformed their businesses with our cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 font-orbitron text-lg px-8 py-4"
            >
              <Link to="/contact">START YOUR PROJECT</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-accent transition-all duration-300 font-orbitron text-lg px-8 py-4"
            >
              <Link to="/projects">VIEW OUR WORK</Link>
            </Button>
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

export default GetStarted;
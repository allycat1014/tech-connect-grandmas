import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Heart, Users, Clock, Info } from "lucide-react";
import heroImage from "@/assets/hero-help.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* About Button - Top Left Corner */}
      <HoverCard openDelay={200} closeDelay={200}>
        <HoverCardTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute top-6 left-6 z-10 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/20"
          >
            <Info className="mr-2 h-4 w-4" />
            About Me
          </Button>
        </HoverCardTrigger>
        <HoverCardContent 
          side="bottom" 
          align="start" 
          className="w-96 p-6 animate-fade-in bg-card border-border shadow-lg"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Why I Created Tech Connect Grandmas
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hi, I'm Ananya, a high school student with a passion for bridging generations through technology. 
                This journey started when I began helping my grandma navigate her phone and other devices.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                What began as simple tech support became something much more meaningful. Those moments when she needed help 
                with her phone sparked new conversations and brought us closer together. Technology became our bridge - 
                a way to connect across generations and share in the digital world that shapes so much of our daily lives.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I realized that countless other seniors face similar challenges but may not have someone nearby to help. 
                That's why I created Tech Connect Grandmas - to ensure every senior has access to patient, caring support 
                as they navigate our increasingly digital world.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
              <h4 className="text-sm font-medium text-foreground mb-2">My Mission</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                To ensure that no senior feels left behind in our increasingly digital world. 
                Every person deserves to feel confident and connected, regardless of their age or tech experience.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Tech Help for 
              <span className="block text-warm"> Seniors</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl">
              Connect with friendly young volunteers who can help you navigate technology, 
              from smartphones to computers and everything in between.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 shadow-soft"
                onClick={() => scrollToSection('get-help')}
              >
                <Heart className="mr-2 h-5 w-5" />
                I Need Help
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground/30 text-foreground bg-primary-foreground/95 hover:bg-primary-foreground"
                onClick={() => scrollToSection('volunteer')}
              >
                <Users className="mr-2 h-5 w-5" />
                I Want to Help
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Patient volunteers</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">Safe & trusted</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Senior and volunteer working together on technology"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
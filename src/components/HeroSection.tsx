import { Button } from "@/components/ui/button";
import { Heart, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-help.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
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
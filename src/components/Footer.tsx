import { Heart, Mail, Phone, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              TechHelp Connect
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Bridging the digital divide by connecting seniors with young volunteers 
              for patient, friendly tech support.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Users className="h-4 w-4" />
              <span>Building stronger communities through technology</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>help@techhelp-connect.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-TECH-HELP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>
                <a href="#get-help" className="hover:text-primary-foreground transition-colors">
                  Request Tech Help
                </a>
              </div>
              <div>
                <a href="#volunteer" className="hover:text-primary-foreground transition-colors">
                  Become a Volunteer
                </a>
              </div>
              <div>
                <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 TechHelp Connect. Made with ❤️ to help seniors stay connected.</p>
        </div>
      </div>
    </footer>
  );
};
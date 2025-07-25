import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Calendar, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Seniors fill out a help request with their tech needs and preferred meeting time. Volunteers create a profile with their skills and availability.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Calendar,
    title: "Get Matched",
    description: "Our system automatically matches seniors with volunteers based on availability, skills, and location for the best possible help experience.",
    bgColor: "bg-trust/10",
    iconColor: "text-trust"
  },
  {
    icon: Users,
    title: "Connect & Learn",
    description: "Meet via video call or phone. Volunteers provide patient, friendly tech support tailored to each senior's learning style and comfort level.",
    bgColor: "bg-warm/20",
    iconColor: "text-warm-foreground"
  },
  {
    icon: CheckCircle,
    title: "Problem Solved",
    description: "Seniors gain confidence with technology and volunteers gain the satisfaction of helping their community. It's a win-win for everyone!",
    bgColor: "bg-secondary",
    iconColor: "text-secondary-foreground"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple process connects seniors who need tech help with patient young volunteers 
            who are eager to share their knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5 text-trust" />
            <span className="text-sm font-medium text-secondary-foreground">
              100% Free • Safe & Secure • Community Driven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
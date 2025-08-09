import React from "react";

export const AboutSection = () => (
  <section id="about" className="py-20 bg-muted/50">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Why I Created Tech Connect Grandmas
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Add your personal story here - perhaps about a grandparent who struggled with technology, 
            or your own experience helping seniors navigate the digital world]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Share what drives your passion for this cause and why you believe 
            technology should be accessible to everyone, regardless of age]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Explain your vision for bridging the digital divide and creating 
            meaningful connections between generations through technology]
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <h3 className="text-xl font-semibold text-foreground mb-4">My Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To ensure that no senior feels left behind in our increasingly digital world. 
            Every person deserves to feel confident and connected, regardless of their age or tech experience.
          </p>
        </div>
      </div>
    </div>
  </section>
);
import React from 'react';
import { Store, Shield, Package, Sparkles } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Store,
      title: "Storefronts",
      description: "Professional seller pages with clean, custom URLs.",
    },
    {
      icon: Shield,
      title: "Safe payments",
      description: "Stripe-based checkout; no risky DMs.",
    },
    {
      icon: Package,
      title: "Order tracking",
      description: "Clear buyer/seller status updates.",
    },
    {
      icon: Sparkles,
      title: "AI listings",
      description: "Photo → instant title, description, tags, category selection (≈10 seconds).",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-4">
            Everything you need to sell professionally
          </h2>
          <p className="text-xl text-muted-foreground font-manrope max-w-3xl mx-auto">
            Mezzo AI provides all the tools social sellers need to move from casual DMs to a professional marketplace experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-soft p-6 hover:shadow-medium transition-smooth border border-border/50"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-sora font-semibold text-primary">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-manrope text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
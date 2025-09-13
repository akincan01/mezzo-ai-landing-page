import React from 'react';
import { Upload, Sparkles, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Upload,
      title: "Upload a photo",
      description: "Simply take a photo of your item or upload from your gallery"
    },
    {
      number: "2", 
      icon: Sparkles,
      title: "AI generates listing (EN/FR)",
      description: "Our AI creates title, description, tags, and category in seconds"
    },
    {
      number: "3",
      icon: CreditCard,
      title: "Publish & get paid",
      description: "Go live instantly and receive secure payments through Stripe"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground font-manrope max-w-2xl mx-auto">
            From photo to sale in three simple steps. No complex setup, no hours of writing listings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-sora font-bold shadow-medium">
                {step.number}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
                <step.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-sora font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-manrope leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-24 h-px bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
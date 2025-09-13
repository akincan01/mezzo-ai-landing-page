import React from 'react';
import { MessageCircle, Eye, Clock } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: MessageCircle,
      title: "DM chaos",
      description: "Sellers stuck in DMs, no safe checkout."
    },
    {
      icon: Eye,
      title: "No visibility", 
      description: "No unified storefront/discovery."
    },
    {
      icon: Clock,
      title: "Manual grind",
      description: "Hours writing listings and pricing."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-4">
            The challenges facing social sellers
          </h2>
          <p className="text-xl text-muted-foreground font-manrope max-w-3xl mx-auto">
            Small social media sellers face real barriers that prevent them from scaling their businesses effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <problem.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-sora font-semibold text-primary">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground font-manrope leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
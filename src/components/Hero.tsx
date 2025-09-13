import React from 'react';
import { Button } from '@/components/ui/button';
import heroMockup from '@/assets/hero-mockup.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-sora font-bold text-primary leading-tight">
                AI-powered marketplace for small social sellers
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-manrope leading-relaxed">
                Sell faster with safe payments, order tracking, and AI-generated listings.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Join Waitlist
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Become a Pilot Seller
              </Button>
            </div>
          </div>

          {/* Right Column - MVP Preview */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-large overflow-hidden">
              <img 
                src={heroMockup}
                alt="Mezzo AI MVP UI Preview - Seller Dashboard"
                className="w-full h-auto"
              />
            </div>
            
            {/* Caption */}
            <p className="text-sm text-muted-foreground text-center mt-4 font-manrope">
              MVP UI preview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
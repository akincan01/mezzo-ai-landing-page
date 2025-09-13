import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Screenshots from '@/components/Screenshots';
import ForSellers from '@/components/ForSellers';
import Roadmap from '@/components/Roadmap';

import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Screenshots />
        <ForSellers />
        <Roadmap />
        
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

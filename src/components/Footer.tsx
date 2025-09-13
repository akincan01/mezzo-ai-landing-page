import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
          {/* Built with love */}
          <div className="flex items-center space-x-2 text-sm font-manrope">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>by Mezzo AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Heart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Footer = () => {
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left - Built with love */}
          <div className="flex items-center space-x-2 text-sm font-manrope">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>by Mezzo AI</span>
          </div>


          {/* Right - Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-secondary">
                <Globe className="h-4 w-4 mr-1" />
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('EN')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('FR')}>
                Français  
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'For sellers', href: '#for-sellers' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-sora font-bold text-primary">
              Mezzo AI
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-fast font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>{language}</span>
                  <ChevronDown className="h-3 w-3" />
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

            {/* CTA Button */}
            <Button variant="cta" size="sm">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
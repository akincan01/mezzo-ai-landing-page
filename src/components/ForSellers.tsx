import React from 'react';
import { Sparkles, Instagram, ShoppingBag, Store } from 'lucide-react';

const ForSellers = () => {
  const sellerTypes = [
    {
      icon: Sparkles,
      title: "Vintage & Antiques",
      description: "Perfect for unique, one-off finds"
    },
    {
      icon: ShoppingBag,
      title: "Home Decor & Accessories", 
      description: "Beautiful items for home and style"
    },
    {
      icon: Store,
      title: "Art & Handmade",
      description: "Creative works and crafted pieces"
    },
    {
      icon: Instagram,
      title: "Collectibles",
      description: "Rare finds and collector's items"
    }
  ];

  return (
    <section id="for-sellers" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary">
                Who it's for
              </h2>
              <p className="text-xl text-muted-foreground font-manrope leading-relaxed">
                Perfect for Instagram/TikTok sellers posting 5–20 items/week who find Shopify "overkill" for their one-off inventory.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-sora font-semibold text-primary">
                Product Categories:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {sellerTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow-soft border border-border/50">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary">
                        <type.icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sora font-medium text-primary text-sm">
                        {type.title}
                      </p>
                      <p className="text-xs text-muted-foreground font-manrope">
                        {type.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Why Now */}
          <div className="bg-card rounded-xl shadow-large p-8 border border-border/50">
            <div className="space-y-6">
              <h3 className="text-2xl font-sora font-semibold text-primary">
                Why Now
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-muted-foreground font-manrope">
                    <span className="font-medium text-primary">Social selling is booming</span> — More creators are monetizing their audiences than ever
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-muted-foreground font-manrope">
                    <span className="font-medium text-primary">Existing tools don't fit</span> — One-off inventory needs different solutions than traditional e-commerce
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-muted-foreground font-manrope">
                    <span className="font-medium text-primary">AI removes friction</span> — Listing creation speed directly impacts turnover and profitability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSellers;
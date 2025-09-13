import React from 'react';
import storefrontScreenshot from '@/assets/storefront-screenshot.jpg';
import aiListingScreenshot from '@/assets/ai-listing-screenshot.jpg';
import checkoutScreenshot from '@/assets/checkout-screenshot.jpg';

const Screenshots = () => {
  const screenshots = [
    {
      image: storefrontScreenshot,
      title: "Seller Storefront",
      caption: "Professional seller pages with all your listings in one place"
    },
    {
      image: aiListingScreenshot,
      title: "AI Listing Creation", 
      caption: "Upload a photo and watch AI generate your complete listing"
    },
    {
      image: checkoutScreenshot,
      title: "Secure Checkout",
      caption: "Stripe-powered payments with guest checkout and order tracking"
    }
  ];

  return (
    <section id="screenshots" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-4">
            Screenshots / MVP Preview
          </h2>
          <p className="text-xl text-muted-foreground font-manrope max-w-3xl mx-auto">
            See how Mezzo AI transforms the selling experience with professional storefronts, AI-powered listings, and secure checkout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="space-y-4">
              <div className="relative bg-card rounded-xl shadow-large overflow-hidden border border-border/50">
                <img 
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-lg font-sora font-semibold text-primary">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground font-manrope">
                  {screenshot.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
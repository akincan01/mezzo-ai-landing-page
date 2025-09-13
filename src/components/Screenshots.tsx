import React from 'react';
import dashboardScreenshot from '@/assets/dashboard-screenshot.png';
import listingScreenshot from '@/assets/listing-screenshot.png';
import listingAiScreenshot from '@/assets/listing-ai-screenshot.png';
import orderTrackingScreenshot from '@/assets/order-tracking-screenshot.png';

const Screenshots = () => {
  const screenshots = [
    {
      image: dashboardScreenshot,
      caption: "Complete seller dashboard to manage your listings and orders"
    },
    {
      image: listingScreenshot,
      caption: "Upload a photo and start creating your listing"
    },
    {
      image: listingAiScreenshot,
      caption: "AI generates complete listing details in seconds"
    },
    {
      image: orderTrackingScreenshot,
      caption: "Track orders and manage customer communications"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="space-y-4">
              <div className="relative bg-card rounded-xl shadow-large overflow-hidden border border-border/50 aspect-[4/3]">
                <img 
                  src={screenshot.image}
                  alt={`MVP Preview ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="text-center">
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
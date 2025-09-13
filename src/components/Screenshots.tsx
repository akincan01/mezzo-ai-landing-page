import React from 'react';
import aiListingScreenshot from '@/assets/ai-listing-screenshot.png';
import browseScreenshot from '@/assets/browse-screenshot.png';
import createListingScreenshot from '@/assets/create-listing-screenshot.png';
import dashboardScreenshot from '@/assets/dashboard-screenshot.png';
import orderTrackingScreenshot from '@/assets/order-tracking-screenshot.png';

const Screenshots = () => {
  const screenshots = [
    {
      image: aiListingScreenshot,
      title: "AI-Powered Listing Creation",
      caption: "Upload a photo and let AI create professional listings instantly"
    },
    {
      image: browseScreenshot,
      title: "Marketplace Browsing",
      caption: "Discover unique finds from sellers worldwide"
    },
    {
      image: createListingScreenshot,
      title: "Dual Creation Workflows",
      caption: "Choose between manual creation or AI-powered generation"
    },
    {
      image: dashboardScreenshot,
      title: "Seller Dashboard",
      caption: "Complete dashboard to manage your listings and orders"
    },
    {
      image: orderTrackingScreenshot,
      title: "Order Tracking & Management",
      caption: "Track orders and manage customer communications seamlessly"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center mb-3">
                <h3 className="text-lg font-sora font-semibold text-primary">
                  {screenshot.title}
                </h3>
              </div>
              
              <div className="relative bg-card rounded-xl shadow-large overflow-hidden border border-border/50 aspect-[4/3]">
                <img 
                  src={screenshot.image}
                  alt={screenshot.title}
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
import React from 'react';
import { DollarSign, MessageSquare, FileText, Truck, RefreshCw, RotateCw, Target, Shield, BarChart3 } from 'lucide-react';
const Roadmap = () => {
  const automations = [{
    icon: DollarSign,
    title: "Auto-pricing",
    description: "Comps-based price suggestions & dynamic pricing"
  }, {
    icon: MessageSquare,
    title: "Smart messaging",
    description: "Buyer replies, FAQs, follow-ups"
  }, {
    icon: FileText,
    title: "Invoices & receipts",
    description: "Auto-generated, tax-friendly"
  }, {
    icon: Truck,
    title: "Shipping labels",
    description: "Rates, label creation, tracking sync"
  }, {
    icon: RefreshCw,
    title: "Returns & disputes",
    description: "Guided flows, resolution assistance"
  }, {
    icon: RotateCw,
    title: "Inventory sync",
    description: "Cross-posting, status updates, sold-out protection"
  }, {
    icon: Target,
    title: "Buyer matching",
    description: "Alerts to known buyer interests"
  }, {
    icon: Shield,
    title: "Fraud checks",
    description: "Risk signals on orders"
  }, {
    icon: BarChart3,
    title: "Analytics",
    description: "GMV, sell-through, pricing insights"
  }];
  return <section id="roadmap" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-6">
            Where We're Going: Zero-Ops Selling
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground font-manrope leading-relaxed">After Phase 1 (MVP launch), Mezzo AI will automatically handle sellers' operational workflows so they can focus entirely on sourcing great products — not on admin, uncertainty, or hours of busywork.</p>
          </div>
        </div>

        {/* Future Automations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {automations.map((automation, index) => <div key={index} className="bg-card rounded-xl shadow-soft p-6 border border-border/50 hover:shadow-medium transition-smooth">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                    <automation.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sora font-semibold text-primary text-sm mb-1">
                    {automation.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-manrope leading-relaxed">
                    {automation.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-lg font-sora font-semibold text-accent">
              You source. We automate the rest.
            </span>
          </div>
        </div>
      </div>
    </section>;
};
export default Roadmap;
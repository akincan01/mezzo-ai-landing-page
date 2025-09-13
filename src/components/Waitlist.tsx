import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your form service
    console.log('Form submission:', { email, instagram, category });
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-4">
              Be one of the first 50 sellers on Mezzo AI
            </h2>
            <p className="text-xl text-muted-foreground font-manrope">
              Join the waitlist to get early access and help shape the future of social commerce.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-large p-8 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email (Required) */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-2 focus:border-accent"
                />
              </div>

              {/* Instagram Handle (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-primary font-medium">
                  Instagram Handle
                </Label>
                <Input
                  id="instagram"
                  type="text"
                  placeholder="@yourusername"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="h-12 border-2 focus:border-accent"
                />
              </div>

              {/* Product Category (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-primary font-medium">
                  Product Category
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12 border-2 focus:border-accent">
                    <SelectValue placeholder="What do you sell?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vintage">Vintage & Antiques</SelectItem>
                    <SelectItem value="decor">Home Decor</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="art">Art & Handmade</SelectItem>
                    <SelectItem value="collectibles">Collectibles</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full text-lg py-4"
              >
                Join Waitlist
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-4 font-manrope">
              We'll notify you when spots open up. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
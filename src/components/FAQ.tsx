import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need my own website?",
      answer: "Not at all! You get a professional Mezzo AI storefront at /s/{your-username}. This becomes your professional seller page where customers can browse all your items, make purchases, and track their orders."
    },
    {
      question: "How is payment done?",
      answer: "All payments are processed securely by Stripe, the world's most trusted online payment system. We never handle your money directly - it goes straight from your customers to your bank account, minus our small transaction fee."
    },
    {
      question: "How does AI listing generation work?",
      answer: "Simply upload a photo of your item and our AI analyzes it to generate professional titles, descriptions, pricing suggestions, and category classifications. You can edit everything before publishing to ensure it matches your style."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-sora font-semibold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground font-manrope">
              Everything you need to know about Mezzo AI
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-large border border-border/50 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-border/50 last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/30 transition-fast">
                    <span className="font-sora font-medium text-primary">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground font-manrope leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
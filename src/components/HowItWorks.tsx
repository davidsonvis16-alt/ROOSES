import React from 'react';
import { MessageCircle, Heart, Sparkles, Truck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Explore or Customise',
      description: 'Select a signature water bouquet or use our interactive customizer to pick stem count, palette, and gift add-ons.',
      icon: Sparkles,
    },
    {
      num: '02',
      title: 'WhatsApp Confirmation',
      description: 'Connect directly with our studio team on WhatsApp. We confirm recipient details, card message, and M-Pesa payment.',
      icon: MessageCircle,
    },
    {
      num: '03',
      title: 'Handcrafted in Embakasi',
      description: 'Our floral designers compose your order using fresh morning-cut Naivasha blooms, hydro-sealed in water reservoirs.',
      icon: Heart,
    },
    {
      num: '04',
      title: 'Same-Day Dispatch',
      description: 'Delivered in pristine condition by our dedicated courier to their doorstep in Embakasi, Nyayo, Utawala, or Westlands.',
      icon: Truck,
    },
  ];

  return (
    <section className="py-24 bg-[#F5F2EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C2D38] font-bold">
            Seamless Memory Creation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            From your heart to their hands in four simple, personal steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E7E2D8] space-y-4 hover:border-[#8C2D38] transition-all relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-3xl text-[#D9D2C5] group-hover:text-[#8C2D38] transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#EBE5DA] flex items-center justify-center text-[#8C2D38]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                  {step.title}
                </h3>

                <p className="text-xs text-[#57534E] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

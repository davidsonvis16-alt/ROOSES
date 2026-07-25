import React from 'react';
import { STUDIO_LOCATION, WHATSAPP_NUMBER } from '../data/flowerData';
import { MapPin, Clock, Phone, Mail, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

export const AboutStudioSection: React.FC = () => {
  return (
    <section id="our-story" className="py-24 bg-[#FAF8F5] relative border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#EBE5DA] aspect-[4/3]">
                <img
                  src="/src/assets/images/luxury_gift_box_1784989593332.jpg"
                  alt="Liebe & Roses Embakasi Studio"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 rounded-2xl bg-[#1C1917] text-[#FAF8F5] border border-[#2A2624] space-y-2">
                <div className="flex items-center gap-2 text-[#FDE68A] text-xs font-bold">
                  <MapPin className="w-4 h-4 text-[#8C2D38]" />
                  <span>Embakasi Studio Address</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {STUDIO_LOCATION.address}
                </p>
                <p className="text-xs text-[#A8A29E]">
                  Walk-ins & consultations welcome daily!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C2D38] font-bold">
                Our Story & Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
                Embakasi’s Premier Fresh Flower & Thoughtful Gift Studio
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Located right on Embakasi Road opposite Pride Center (next to Quickmart), Liebe & Roses was established to bring refined design, fresh highland roses, and genuine emotional connection to Eastlands and broader Nairobi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#F5F2EC] border border-[#E7E2D8] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#8C2D38] text-white flex items-center justify-center text-xs font-bold">
                  01
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1C1917]">Couple-Owned Loyalty</h3>
                <p className="text-xs text-[#78716C]">
                  We personally inspect every single stem, hand-write every card, and oversee every delivery.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F5F2EC] border border-[#E7E2D8] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#2E4839] text-white flex items-center justify-center text-xs font-bold">
                  02
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1C1917]">Highland Rose Farms</h3>
                <p className="text-xs text-[#78716C]">
                  Sourced from Naivasha and Mount Kenya farms every morning at dawn for maximum vase life.
                </p>
              </div>
            </div>

            {/* Hours & Direct Contacts */}
            <div className="p-6 rounded-2xl bg-[#FAF5EF] border border-[#E7E2D8] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#8C2D38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1917] block">Studio Opening Hours</span>
                    <span className="text-[#57534E]">{STUDIO_LOCATION.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#8C2D38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1917] block">Direct WhatsApp & Call</span>
                    <span className="text-[#57534E]">{STUDIO_LOCATION.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E7E2D8] flex items-center justify-between text-xs">
                <span className="text-[#78716C]">M-Pesa Till & Paybill numbers provided on WhatsApp order.</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Liebe & Roses! I would like directions to your Embakasi studio.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8C2D38] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

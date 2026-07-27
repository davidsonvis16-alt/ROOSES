import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import { WHATSAPP_NUMBER, STUDIO_LOCATION } from '../data/flowerData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCustomBuilderClick: () => void;
  onOpenAiConcierge: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCustomBuilderClick,
  onOpenAiConcierge,
}) => {
  const handleWhatsAppHero = () => {
    const text = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌹 I saw your website and would love to request a fresh bouquet delivery in Nairobi today.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-24 bg-[#FAF8F5]">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5EBE6] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#E8EFEA] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Studio Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-[#F5F2EC] border border-[#E7E2D8] text-xs text-[#57534E]">
              <span className="px-3 py-1 rounded-full bg-[#8C2D38] text-white font-semibold text-[11px] uppercase tracking-wider">
                Embakasi Studio
              </span>
              <span className="font-medium text-[#1C1917] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8C2D38]" />
                Opposite Pride Center, Next to Quickmart
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08]">
                We don’t just sell flowers.{' '}
                <span className="italic font-normal text-[#8C2D38] block mt-1">
                  We sell emotions.
                </span>
                <span className="text-[#2E4839] font-light block">
                  We create memories.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#57534E] max-w-2xl font-normal leading-relaxed">
                Handcrafted fresh Kenyan garden blooms, signature water bouquets, and thoughtful artisanal gifts — curated with love in our Embakasi studio for same-day Nairobi delivery.
              </p>
            </div>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleWhatsAppHero}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order via WhatsApp Direct</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1C1917] text-[#FAF8F5] font-semibold text-sm hover:bg-[#8C2D38] transition-all shadow-sm group"
              >
                <span>Explore Bouquets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E7E2D8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EBE5DA] flex items-center justify-center text-[#8C2D38]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1917]">Same-Day Express</p>
                  <p className="text-[11px] text-[#78716C]">Under 60m in Embakasi</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EBE5DA] flex items-center justify-center text-[#2E4839]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1917]">100% Water Hydrated</p>
                  <p className="text-[11px] text-[#78716C]">Zero transit wilting</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EBE5DA] flex items-center justify-center text-[#8C2D38]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1917]">Couple-Owned</p>
                  <p className="text-[11px] text-[#78716C]">Personal care in every stem</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Visual Composition (@uiuxzaid framing) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#FAF8F5] aspect-[4/5] group">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAYk1Uh09GBPXrtzoEs1Gu4DKSdo0NrUA_D4j-DV6xg&s=10"
                  alt="Liebe & Roses Signature Flower Arrangement"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />

                {/* Bottom Image Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest bg-[#8C2D38] px-2.5 py-0.5 rounded-full font-bold inline-block">
                    Studio Special
                  </span>
                  <h3 className="font-serif text-2xl font-bold">The Velvet Crimson Hydro-Bouquet</h3>
                  <p className="text-xs text-[#FAF8F5]/80">
                    Naivasha fresh roses in signature water packaging • KSh 4,500
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Live Studio Status */}
              <div className="absolute -top-4 -left-4 glass-panel p-3.5 rounded-2xl shadow-lg border border-[#E7E2D8] hidden sm:flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
                </span>
                <div>
                  <p className="text-xs font-bold text-[#1C1917]">Embakasi Studio Open</p>
                  <p className="text-[10px] text-[#78716C]">Preparing today's Nairobi orders</p>
                </div>
              </div>

              {/* Floating Badge 2: Memory Counter */}
              <div className="absolute -bottom-5 -right-4 bg-[#1C1917] text-[#FAF8F5] p-4 rounded-2xl shadow-xl border border-[#2A2624] space-y-1 max-w-[200px]">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold">
                  <Heart className="w-3.5 h-3.5 fill-current text-[#8C2D38]" />
                  <span>2,400+ Moments</span>
                </div>
                <p className="text-[11px] text-[#D6D3D1] leading-tight">
                  Delivered across Embakasi, Nyayo, Utawala & Westlands.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Heart, Droplets, Sparkles, Award, MapPin } from 'lucide-react';

export const LiebeExperience: React.FC = () => {
  return (
    <section id="water-bouquets" className="py-24 bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8C2D38]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2E4839]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C2D38]/40 border border-[#8C2D38] text-xs text-[#FDE68A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Liebe Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Crafted in Embakasi.{' '}
              <span className="italic font-normal text-[#E5D2C2] block">
                Delivered with emotion.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#D6D3D1] leading-relaxed font-light">
              Founded as a couple-owned boutique studio on Embakasi Road (opposite Pride Center, next to Quickmart), Liebe & Roses was born out of a desire to redefine floral gifting in Nairobi.
            </p>

            <blockquote className="p-6 rounded-2xl bg-[#2A2624] border-l-4 border-[#8C2D38] italic font-serif text-lg text-[#F5F2EC]">
              “Flowers fade, but the feeling of holding a beautifully presented bouquet with a handwritten card stays in someone’s memory forever.”
            </blockquote>

            <div className="pt-4 flex items-center gap-4 text-xs text-[#A8A29E]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#8C2D38]" />
                <span>Embakasi Road, Nairobi</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#8C2D38]" />
                <span>Hand-Arranged Daily</span>
              </div>
            </div>
          </div>

          {/* Right Visual Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Feature Card 1: Water Bouquet */}
            <div className="p-6 rounded-3xl bg-[#2A2624] border border-[#3E3835] space-y-3 hover:border-[#8C2D38] transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-[#8C2D38]/30 flex items-center justify-center text-[#FDE68A] group-hover:scale-110 transition-transform">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">Signature Water Pack</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Stems are sealed in a nutrient-rich hydro-gel water pouch. Your flowers stay hydrated in Nairobi traffic for over 48 hours.
              </p>
            </div>

            {/* Feature Card 2: Naivasha Harvest */}
            <div className="p-6 rounded-3xl bg-[#2A2624] border border-[#3E3835] space-y-3 hover:border-[#2E4839] transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-[#2E4839]/40 flex items-center justify-center text-[#A7F3D0] group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">Fresh Highland Cut</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Directly harvested every morning from cold-climate farms in Naivasha & Mount Kenya for vibrant color and long vase life.
              </p>
            </div>

            {/* Feature Card 3: Handwritten Card */}
            <div className="p-6 rounded-3xl bg-[#2A2624] border border-[#3E3835] space-y-3 hover:border-[#8C2D38] transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-[#8C2D38]/30 flex items-center justify-center text-[#FDE68A] group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">Calligraphy Card Note</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                We transcribe your heartfelt message word-for-word on luxury textured cardstock using gold ink calligraphic strokes.
              </p>
            </div>

            {/* Feature Card 4: White-Glove Courier */}
            <div className="p-6 rounded-3xl bg-[#2A2624] border border-[#3E3835] space-y-3 hover:border-[#2E4839] transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-[#2E4839]/40 flex items-center justify-center text-[#A7F3D0] group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">Discreet Same-Day Delivery</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Hand-delivered in pristine condition to homes, offices, hospitals, or surprise venues across Nairobi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

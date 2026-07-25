import React from 'react';
import { TESTIMONIALS } from '../data/flowerData';
import { Star, Heart, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F2EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C2D38] font-bold">
            Real Memory Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Loved Across Nairobi
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Hear from clients who trusted Liebe & Roses for their most delicate celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E7E2D8] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#8C2D38] transition-all"
            >
              <div className="space-y-4">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {t.verifiedBuyer && (
                    <span className="text-[10px] font-bold text-[#2E4839] bg-[#A7F3D0]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#2E4839]" />
                      Verified Order
                    </span>
                  )}
                </div>

                {/* Comment Body */}
                <p className="font-serif italic text-[#1C1917] text-base leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E7E2D8]">
                <p className="font-bold text-sm text-[#1C1917]">{t.author}</p>
                <div className="flex items-center justify-between text-xs text-[#78716C] mt-0.5">
                  <span>{t.location}</span>
                  <span className="text-[#8C2D38] font-medium">{t.occasion}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

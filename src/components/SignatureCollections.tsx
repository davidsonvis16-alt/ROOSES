import React, { useState } from 'react';
import { Arrangement } from '../types';
import { SAMPLE_ARRANGEMENTS, WHATSAPP_NUMBER } from '../data/flowerData';
import { Eye, MessageCircle, Plus, Sparkles, Droplets, Gift, Heart, Sun } from 'lucide-react';

interface SignatureCollectionsProps {
  onSelectArrangement: (arrangement: Arrangement) => void;
  onAddToCart: (arrangement: Arrangement) => void;
}

export const SignatureCollections: React.FC<SignatureCollectionsProps> = ({
  onSelectArrangement,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Collections', icon: Sparkles },
    { id: 'water-bouquets', label: 'Water Bouquets', icon: Droplets },
    { id: 'romance', label: 'Romance & Roses', icon: Heart },
    { id: 'gift-boxes', label: 'Floral & Gift Boxes', icon: Gift },
    { id: 'custom-celebrations', label: 'Celebrations & Joy', icon: Sun },
    { id: 'sympathy', label: 'Sympathy & Care', icon: Heart },
  ];

  const filteredArrangements = activeCategory === 'all'
    ? SAMPLE_ARRANGEMENTS
    : SAMPLE_ARRANGEMENTS.filter(item => item.category === activeCategory);

  const handleDirectWhatsAppOrder = (arrangement: Arrangement, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Liebe & Roses! 🌸 I would like to order "${arrangement.name}" (${arrangement.formattedPrice}). Please guide me on delivery to my location.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="collections" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C2D38] font-bold">
            Curated Floral Creations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Signature Collections
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Every arrangement is hand-composed using fresh morning-cut Kenyan blooms, tailored for maximum longevity and emotional resonance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-md'
                    : 'bg-[#F5F2EC] text-[#57534E] border-[#E7E2D8] hover:border-[#8C2D38] hover:text-[#8C2D38]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FDE68A]' : 'text-[#8C2D38]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArrangements.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArrangement(item)}
              className="group bg-[#FAF5EF] rounded-3xl overflow-hidden border border-[#E7E2D8] hover:border-[#8C2D38] transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE5DA]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Tag Badge */}
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-[#1C1917]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                    {item.tag}
                  </div>
                )}

                {/* Quick View Hover Button overlay */}
                <div className="absolute inset-0 bg-[#1C1917]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectArrangement(item);
                    }}
                    className="p-3 rounded-full bg-white text-[#1C1917] hover:bg-[#8C2D38] hover:text-white transition-colors shadow-lg"
                    title="Quick View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold">
                      {item.hydrationType.includes('Water') ? '💧 Water Bouquet' : '💐 Fresh Box/Vase'}
                    </span>
                    <span className="font-serif font-bold text-lg text-[#8C2D38]">
                      {item.formattedPrice}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#8C2D38] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Stems Preview */}
                <div className="pt-2 border-t border-[#E7E2D8] text-[11px] text-[#78716C] flex items-center justify-between">
                  <span className="truncate max-w-[180px]">
                    Includes {item.stems[0]}
                  </span>
                  <span className="text-[#8C2D38] font-medium">+ More</span>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(item);
                    }}
                    className="py-2.5 px-3 rounded-full border border-[#D9D2C5] text-[#1C1917] text-xs font-semibold hover:bg-[#1C1917] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={(e) => handleDirectWhatsAppOrder(item, e)}
                    className="py-2.5 px-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

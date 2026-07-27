import React from 'react';
import { WHATSAPP_NUMBER, STUDIO_LOCATION } from '../data/flowerData';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';

interface FooterSectionProps {
  onOpenCustomBuilder: () => void;
  onOpenAiConcierge: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenCustomBuilder,
  onOpenAiConcierge,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2A2624] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Callout Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2A2624] via-[#8C2D38]/30 to-[#2A2624] border border-[#3E3835] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#FDE68A] font-bold">
              Instant Nairobi Flower Delivery
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Send a Memory Today?
            </h3>
            <p className="text-xs text-[#D6D3D1] max-w-xl">
              Order via WhatsApp before 3:00 PM for same-day delivery across Embakasi, Nyayo Estate, Utawala, Donholm, and Greater Nairobi.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Liebe & Roses Studio! I would like to place a fresh flower order for delivery today.')}`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8C2D38] text-white flex items-center justify-center font-serif text-xl font-bold">
                L&R
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  LIEBE & ROSES
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A29E] font-semibold block mt-1">
                  Fresh Flowers • Thoughtful Gifts
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm font-light">
              We don’t just sell flowers. We sell emotions. We create memories. High-end fresh flower and gift studio based in Embakasi, Nairobi.
            </p>

            <div className="pt-2 text-xs text-[#D6D3D1] space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C2D38]" />
                <span>{STUDIO_LOCATION.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8C2D38]" />
                <span>{STUDIO_LOCATION.phone}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Studio Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Signature Collections
                </a>
              </li>
              <li>
                <a href="#water-bouquets" className="hover:text-white transition-colors">
                  Signature Water Bouquets
                </a>
              </li>
              <li>
                <button onClick={onOpenCustomBuilder} className="hover:text-white transition-colors text-left">
                  Build Custom Emotion
                </button>
              </li>
              <li>
                <a href="#delivery-zones" className="hover:text-white transition-colors">
                  Delivery Zones & Rates
                </a>
              </li>
              
            </ul>
          </div>

          {/* Delivery & Payment Note */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Accepted Payment & Delivery
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              M-Pesa Buy Goods Till, Paybill, Visa, Mastercard & Direct Bank Transfer accepted upon WhatsApp order confirmation.
            </p>

            <div className="p-4 rounded-2xl bg-[#2A2624] border border-[#3E3835] space-y-1">
              <span className="text-[10px] text-[#FDE68A] uppercase font-bold block">
                Primary Delivery Zones
              </span>
              <p className="text-[11px] text-[#D6D3D1]">
                Embakasi Road, Nyayo Estate, Utawala, Donholm, Fedha, Pipeline, South B, South C, Nairobi CBD, Kilimani, Lavington, Westlands.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#2A2624] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© {new Date().getFullYear()} Liebe & Roses Studio. All rights reserved. Embakasi, Nairobi.</p>

          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@liebeandroses</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2A2624] text-white hover:bg-[#8C2D38] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

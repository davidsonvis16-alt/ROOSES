import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, MapPin, Sparkles, Menu, X, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER, STUDIO_LOCATION } from '../data/flowerData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAiConcierge: () => void;
  onOpenCustomBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAiConcierge,
  onOpenCustomBuilder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌸 I would like to place a fresh flower order for delivery in Nairobi.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] py-2 px-4 text-xs font-medium text-center flex items-center justify-center gap-2 border-b border-[#2A2624]">
        <span className="inline-block w-2 h-2 rounded-full bg-[#34D399] animate-subtle-pulse" />
        <span className="tracking-wide">
          Same-Day Delivery in Embakasi, Nyayo Estate, Utawala, Donholm & Greater Nairobi
        </span>
        <span className="hidden md:inline-block text-[#A39E93]">•</span>
        <span className="hidden md:inline-block text-[#E5D2C2]">Order before 3 PM for today's delivery</span>
        <button
          onClick={onOpenAiConcierge}
          className="ml-3 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8C2D38] text-white hover:bg-[#A33845] transition-colors text-[11px] font-semibold"
        >
          <Sparkles className="w-3 h-3 text-[#FDE68A]" />
          Ask AI Concierge
        </button>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav className="glass-panel border-b border-[#E7E2D8] px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#8C2D38] text-[#FAF8F5] flex items-center justify-center font-serif text-xl font-bold tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              L&R
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917] block leading-none group-hover:text-[#8C2D38] transition-colors">
                LIEBE & ROSES
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#78716C] font-semibold block mt-0.5">
                Fresh Flowers • Embakasi Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#44403C]">
            <a href="#collections" className="hover:text-[#8C2D38] transition-colors py-1">
              Collections
            </a>
            <a href="#water-bouquets" className="hover:text-[#8C2D38] transition-colors py-1 flex items-center gap-1">
              Water Bouquets
              <span className="bg-[#EBE5DA] text-[#8C2D38] text-[10px] px-1.5 py-0.5 rounded-full font-bold">New</span>
            </a>
            <a href="#custom-builder" className="hover:text-[#8C2D38] transition-colors py-1">
              Custom Emotion
            </a>
            <a href="#delivery-zones" className="hover:text-[#8C2D38] transition-colors py-1">
              Delivery Zones
            </a>
            <a href="#our-story" className="hover:text-[#8C2D38] transition-colors py-1">
              Our Story
            </a>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* AI Assistant Button */}
            <button
              onClick={onOpenAiConcierge}
              className="sm:hidden p-2 rounded-full bg-[#F5F2EC] text-[#8C2D38] hover:bg-[#EBE5DA] transition-colors"
              title="AI Flower Assistant"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Custom Order Trigger */}
            <button
              onClick={onOpenCustomBuilder}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D9D2C5] text-[#1C1917] text-xs font-semibold hover:border-[#8C2D38] hover:text-[#8C2D38] transition-colors bg-[#FAF8F5]/80"
            >
              Custom Arrangement
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-all shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">WhatsApp Order</span>
            </button>

            {/* Shopping Cart Drawer Toggle */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#1C1917] text-white hover:bg-[#8C2D38] transition-colors shadow-sm"
              aria-label="View Order Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8C2D38] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#FAF8F5]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1917] hover:text-[#8C2D38] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-[#E7E2D8] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#1C1917]">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EBE5DA] hover:text-[#8C2D38]"
            >
              Signature Collections
            </a>
            <a
              href="#water-bouquets"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EBE5DA] hover:text-[#8C2D38] flex items-center justify-between"
            >
              <span>Water Bouquets</span>
              <span className="bg-[#8C2D38] text-white text-xs px-2 py-0.5 rounded-full">Fresh</span>
            </a>
            <a
              href="#custom-builder"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomBuilder();
              }}
              className="py-2 border-b border-[#EBE5DA] hover:text-[#8C2D38]"
            >
              Build Custom Emotion
            </a>
            <a
              href="#delivery-zones"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EBE5DA] hover:text-[#8C2D38]"
            >
              Delivery Zones & Fees
            </a>
            <a
              href="#our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EBE5DA] hover:text-[#8C2D38]"
            >
              About Studio
            </a>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiConcierge();
              }}
              className="w-full py-2.5 rounded-xl bg-[#F5F2EC] text-[#8C2D38] font-medium text-xs flex items-center justify-center gap-2 border border-[#E7E2D8]"
            >
              <Sparkles className="w-4 h-4 text-[#8C2D38]" />
              Ask AI Flower Concierge
            </button>

            <div className="text-xs text-[#78716C] pt-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#8C2D38]" />
              <span>{STUDIO_LOCATION.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

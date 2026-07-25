import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/flowerData';

export const FloatingWhatsAppBar: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌸 I am browsing your website and would like to ask a question or place an order.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 transition-transform flex items-center justify-center"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-xs w-full animate-in slide-in-from-bottom duration-300">
      <div className="glass-dark text-white p-4 rounded-2xl border border-white/10 shadow-2xl space-y-3 relative">
        
        {/* Minimize Button */}
        <button
          onClick={() => setMinimized(true)}
          className="absolute top-2 right-2 p-1 text-[#A8A29E] hover:text-white transition-colors"
          title="Minimize"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          <p className="text-xs font-bold text-white">Liebe & Roses Studio</p>
        </div>

        <p className="text-[11px] text-[#D6D3D1] leading-tight">
          "Need a quick recommendation or custom bouquet for today?"
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp Direct</span>
        </button>
      </div>
    </div>
  );
};

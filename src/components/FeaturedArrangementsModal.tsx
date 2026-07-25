import React, { useState } from 'react';
import { Arrangement, GiftAddon } from '../types';
import { GIFT_ADDONS, WHATSAPP_NUMBER } from '../data/flowerData';
import { X, Check, MessageCircle, ShoppingBag, Droplets, ShieldCheck, Heart } from 'lucide-react';

interface FeaturedArrangementsModalProps {
  arrangement: Arrangement | null;
  onClose: () => void;
  onAddToCart: (arrangement: Arrangement, selectedAddons: GiftAddon[], size: 'Classic' | 'Grand' | 'Imperial') => void;
}

export const FeaturedArrangementsModal: React.FC<FeaturedArrangementsModalProps> = ({
  arrangement,
  onClose,
  onAddToCart,
}) => {
  if (!arrangement) return null;

  const [selectedSize, setSelectedSize] = useState<'Classic' | 'Grand' | 'Imperial'>('Classic');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [customNote, setCustomNote] = useState<string>('');

  const sizeMultipliers = {
    Classic: 1,
    Grand: 1.5,
    Imperial: 2.1,
  };

  const calculatedBasePrice = Math.round(arrangement.price * sizeMultipliers[selectedSize]);
  const chosenAddons = GIFT_ADDONS.filter((a) => selectedAddonIds.includes(a.id));
  const addonsTotal = chosenAddons.reduce((sum, a) => sum + a.price, 0);
  const totalPrice = calculatedBasePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleWhatsAppQuickOrder = () => {
    const addonsString = chosenAddons.map((a) => a.name).join(', ') || 'None';
    const text = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌸 I'd like to order:\n\n` +
      `• Item: ${arrangement.name}\n` +
      `• Size: ${selectedSize}\n` +
      `• Add-ons: ${addonsString}\n` +
      `• Card Note: "${customNote || 'No custom note'}"\n\n` +
      `Total: KSh ${totalPrice.toLocaleString()}\n\n` +
      `Please assist with delivery and M-Pesa payment.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#E7E2D8] shadow-2xl relative flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1C1917]/80 text-white hover:bg-[#8C2D38] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Left: Product Image */}
        <div className="md:w-1/2 relative bg-[#EBE5DA] min-h-[300px]">
          <img
            src={arrangement.image}
            alt={arrangement.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {arrangement.tag && (
            <div className="absolute top-4 left-4 bg-[#1C1917] text-white text-[11px] font-bold px-3 py-1 rounded-full">
              {arrangement.tag}
            </div>
          )}
        </div>

        {/* Modal Right: Details & Customizer */}
        <div className="md:w-1/2 p-6 sm:p-8 space-y-6">
          
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8C2D38] font-bold">
              {arrangement.hydrationType}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
              {arrangement.name}
            </h2>
            <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
              {arrangement.description}
            </p>
          </div>

          {/* Stems List */}
          <div className="p-3 rounded-2xl bg-[#F5F2EC] border border-[#E7E2D8] text-xs space-y-1">
            <p className="font-bold text-[#1C1917]">Fresh Stems Composition:</p>
            <ul className="grid grid-cols-2 gap-1 text-[#57534E] text-[11px]">
              {arrangement.stems.map((stem, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C2D38]" />
                  {stem}
                </li>
              ))}
            </ul>
          </div>

          {/* Select Size */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1C1917]">Select Bouquet Volume:</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Classic', 'Grand', 'Imperial'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                    selectedSize === sz
                      ? 'border-[#8C2D38] bg-[#FAF5EF] text-[#8C2D38] ring-1 ring-[#8C2D38]'
                      : 'border-[#E7E2D8] text-[#57534E] bg-white'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Addons */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1C1917]">Pair with Gifts (Optional):</label>
            <div className="space-y-2 max-h-36 overflow-y-auto pr-1 custom-scrollbar">
              {GIFT_ADDONS.map((addon) => {
                const isSelected = selectedAddonIds.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-[#8C2D38] bg-[#FAF5EF]'
                        : 'border-[#E7E2D8] bg-white'
                    }`}
                  >
                    <span className="text-[#1C1917] font-medium">{addon.name}</span>
                    <span className="font-bold text-[#8C2D38]">+{addon.formattedPrice}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card Note Input */}
          <div>
            <label className="text-xs font-bold text-[#1C1917] block mb-1">
              Handwritten Card Note (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Happy Anniversary my love! Forever yours."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
            />
          </div>

          {/* Total & Action Buttons */}
          <div className="pt-4 border-t border-[#E7E2D8] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#78716C]">Total Price:</span>
              <span className="font-serif text-2xl font-bold text-[#8C2D38]">
                KSh {totalPrice.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onAddToCart(arrangement, chosenAddons, selectedSize);
                  onClose();
                }}
                className="py-3 px-4 rounded-full border border-[#1C1917] text-[#1C1917] font-semibold text-xs hover:bg-[#1C1917] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={handleWhatsAppQuickOrder}
                className="py-3 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

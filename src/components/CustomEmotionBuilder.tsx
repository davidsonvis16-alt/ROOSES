import React, { useState } from 'react';
import { GIFT_ADDONS, WHATSAPP_NUMBER } from '../data/flowerData';
import { GiftAddon } from '../types';
import { Sparkles, MessageCircle, Heart, Check, RefreshCw } from 'lucide-react';

export const CustomEmotionBuilder: React.FC = () => {
  const [style, setStyle] = useState<'water-bouquet' | 'ceramic-vase' | 'velvet-box' | 'hand-wrap'>('water-bouquet');
  const [palette, setPalette] = useState<'crimson' | 'pastel' | 'ivory' | 'sunshine'>('crimson');
  const [size, setSize] = useState<'classic' | 'grand' | 'imperial'>('classic');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['add-4']);
  const [cardMessage, setCardMessage] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');

  const styleOptions = [
    { id: 'water-bouquet', name: 'Signature Water Bouquet', desc: 'Hydro-gel water pack for long transit fresh blooms', basePrice: 3500 },
    { id: 'ceramic-vase', name: 'Nude Ceramic Hydration Vase', desc: 'Arranged in reusable matte ceramic vase', basePrice: 4200 },
    { id: 'velvet-box', name: 'Luxury Velvet Cylindrical Box', desc: 'Cylindrical velvet keepsake box with foam base', basePrice: 4800 },
    { id: 'hand-wrap', name: 'Classic Hand-Tied Kraft Wrap', desc: 'Eco-friendly textured paper with silk ribbon', basePrice: 3000 },
  ];

  const paletteOptions = [
    { id: 'crimson', name: 'Velvet Crimson Love', color: 'bg-[#8C2D38]', desc: 'Deep crimson red garden roses & eucalyptus' },
    { id: 'pastel', name: 'Soft Pastel Romance', color: 'bg-[#F472B6]', desc: 'Blush pink, peach, & cream spray carnations' },
    { id: 'ivory', name: 'Pure White & Cream Elegance', color: 'bg-[#F5F5F4] border border-[#E7E2D8]', desc: 'Ivory roses, casablanca white lilies, & baby’s breath' },
    { id: 'sunshine', name: 'Sunshine Meadow & Coral', color: 'bg-[#F59E0B]', desc: 'Coral roses, yellow spray lilies, & solidago' },
  ];

  const sizeMultipliers = {
    classic: { label: 'Classic (12 Stems)', multiplier: 1, text: 'Standard luxurious volume' },
    grand: { label: 'Grand (24 Stems)', multiplier: 1.6, text: 'Double volume for grand statements' },
    imperial: { label: 'Imperial (36 Stems)', multiplier: 2.2, text: 'Showstopping ultra-lavish statement' },
  };

  const selectedStyleObj = styleOptions.find((s) => s.id === style)!;
  const currentBasePrice = Math.round(selectedStyleObj.basePrice * sizeMultipliers[size].multiplier);

  const selectedAddons: GiftAddon[] = GIFT_ADDONS.filter((a) => selectedAddonIds.includes(a.id));
  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  const grandTotal = currentBasePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleCustomWhatsAppCheckout = () => {
    const selectedStyleName = selectedStyleObj.name;
    const selectedPaletteName = paletteOptions.find((p) => p.id === palette)?.name;
    const selectedSizeLabel = sizeMultipliers[size].label;
    const addonsText = selectedAddons.map((a) => a.name).join(', ') || 'None';

    const text = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌸 I designed a custom arrangement on your website:\n\n` +
      `• Style: ${selectedStyleName}\n` +
      `• Color Vibe: ${selectedPaletteName}\n` +
      `• Stem Volume: ${selectedSizeLabel}\n` +
      `• Add-ons: ${addonsText}\n` +
      `• Recipient Name: ${recipientName || 'Not specified'}\n` +
      `• Card Note: "${cardMessage || 'None provided'}"\n\n` +
      `Estimated Total: KSh ${grandTotal.toLocaleString()}\n\n` +
      `Please confirm availability and M-Pesa payment details for delivery in Nairobi!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="custom-builder" className="py-24 bg-[#F5F2EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5DA] text-[#8C2D38] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Customizer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Build Your Custom Emotion
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Tailor every petal, wrapping, palette, and gift add-on to match your exact sentiment. See real-time pricing and order instantly via WhatsApp.
          </p>
        </div>

        {/* Customizer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Choices */}
          <div className="lg:col-span-8 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-[#E7E2D8] shadow-sm space-y-10">
            
            {/* Step 1: Select Style */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8C2D38] text-white font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">Select Arrangement Container / Wrap</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {styleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setStyle(opt.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      style === opt.id
                        ? 'border-[#8C2D38] bg-[#FAF5EF] ring-1 ring-[#8C2D38]'
                        : 'border-[#E7E2D8] bg-white hover:border-[#D9D2C5]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-[#1C1917]">{opt.name}</span>
                      {style === opt.id && <Check className="w-4 h-4 text-[#8C2D38]" />}
                    </div>
                    <p className="text-xs text-[#78716C] mt-1">{opt.desc}</p>
                    <p className="text-xs font-bold text-[#8C2D38] mt-2">Base: KSh {opt.basePrice.toLocaleString()}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Color Palette */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8C2D38] text-white font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">Choose Color Mood & Vibe</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {paletteOptions.map((pal) => (
                  <button
                    key={pal.id}
                    onClick={() => setPalette(pal.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                      palette === pal.id
                        ? 'border-[#8C2D38] bg-[#FAF5EF] ring-1 ring-[#8C2D38]'
                        : 'border-[#E7E2D8] bg-white hover:border-[#D9D2C5]'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full shrink-0 shadow-sm mt-0.5 ${pal.color}`} />
                    <div className="flex-1">
                      <p className="font-serif font-bold text-sm text-[#1C1917]">{pal.name}</p>
                      <p className="text-xs text-[#78716C] mt-0.5">{pal.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Stem Volume */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8C2D38] text-white font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">Select Stem Density / Size</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(sizeMultipliers) as Array<keyof typeof sizeMultipliers>).map((szKey) => {
                  const szData = sizeMultipliers[szKey];
                  const szPrice = Math.round(selectedStyleObj.basePrice * szData.multiplier);
                  return (
                    <button
                      key={szKey}
                      onClick={() => setSize(szKey)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        size === szKey
                          ? 'border-[#8C2D38] bg-[#FAF5EF] ring-1 ring-[#8C2D38]'
                          : 'border-[#E7E2D8] bg-white hover:border-[#D9D2C5]'
                      }`}
                    >
                      <p className="font-serif font-bold text-sm text-[#1C1917] capitalize">{szKey}</p>
                      <p className="text-[11px] text-[#78716C] mt-0.5">{szData.label}</p>
                      <p className="text-xs font-bold text-[#8C2D38] mt-2">KSh {szPrice.toLocaleString()}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Add Gift Pairings */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8C2D38] text-white font-bold text-xs flex items-center justify-center">4</span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">Pair with Thoughtful Gifts</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GIFT_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'border-[#8C2D38] bg-[#FAF5EF]'
                          : 'border-[#E7E2D8] bg-white hover:border-[#D9D2C5]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={addon.image}
                          alt={addon.name}
                          className="w-10 h-10 rounded-xl object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="font-medium text-xs text-[#1C1917] line-clamp-1">{addon.name}</p>
                          <p className="text-[11px] font-bold text-[#8C2D38]">+{addon.formattedPrice}</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${isChecked ? 'bg-[#8C2D38] border-[#8C2D38] text-white' : 'border-[#D9D2C5]'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Recipient & Note */}
            <div className="space-y-4 pt-2 border-t border-[#E7E2D8]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#8C2D38] text-white font-bold text-xs flex items-center justify-center">5</span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">Handwritten Calligraphy Card Note</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Amani / My Love / Mom"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Your Card Message (Calligraphy Transcribed)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Happy 30th Birthday my darling! Here is to a lifetime of laughter and memories."
                    value={cardMessage}
                    onChange={(e) => setCardMessage(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Order Summary Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-[#1C1917] text-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#2A2624] shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#2A2624] pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FDE68A] font-bold">
                    Custom Creation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">Summary</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8C2D38] flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-3 text-xs text-[#D6D3D1]">
                <div className="flex justify-between py-1 border-b border-[#2A2624]">
                  <span>Arrangement Style:</span>
                  <span className="font-semibold text-white">{selectedStyleObj.name}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#2A2624]">
                  <span>Stem Size:</span>
                  <span className="font-semibold text-white">{sizeMultipliers[size].label}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#2A2624]">
                  <span>Base Flowers:</span>
                  <span className="font-semibold text-white">KSh {currentBasePrice.toLocaleString()}</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="py-1 border-b border-[#2A2624] space-y-1">
                    <div className="flex justify-between font-semibold text-[#FDE68A]">
                      <span>Add-ons ({selectedAddons.length}):</span>
                      <span>+KSh {addonsTotal.toLocaleString()}</span>
                    </div>
                    <ul className="pl-3 list-disc text-[11px] text-[#A8A29E] space-y-0.5">
                      {selectedAddons.map((a) => (
                        <li key={a.id}>{a.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {recipientName && (
                  <div className="flex justify-between py-1 border-b border-[#2A2624]">
                    <span>For:</span>
                    <span className="font-semibold text-[#FDE68A]">{recipientName}</span>
                  </div>
                )}
              </div>

              {/* Total Price */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#A8A29E]">Estimated Total</p>
                  <p className="font-serif text-3xl font-bold text-white">
                    KSh {grandTotal.toLocaleString()}
                  </p>
                </div>
                <span className="text-[10px] bg-[#2E4839] text-[#A7F3D0] px-2.5 py-1 rounded-full font-bold">
                  Same-Day Ready
                </span>
              </div>

              {/* Direct WhatsApp Trigger Button */}
              <button
                onClick={handleCustomWhatsAppCheckout}
                className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order Custom Creation via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#78716C]">
                Send design directly to our Embakasi studio team on WhatsApp for immediate confirmation & M-Pesa details.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

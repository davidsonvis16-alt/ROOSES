import React, { useState } from 'react';
import { Sparkles, X, MessageCircle, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { AiRecommendationResult } from '../types';
import { WHATSAPP_NUMBER } from '../data/flowerData';

interface AiFlowerConciergeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiFlowerConcierge: React.FC<AiFlowerConciergeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [recipient, setRecipient] = useState('');
  const [occasion, setOccasion] = useState('');
  const [budget, setBudget] = useState('KSh 3,500 - KSh 6,000');
  const [sentiment, setSentiment] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiRecommendationResult | null>(null);

  const handleGenerateRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/ai-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient,
          occasion,
          budget,
          sentiment,
        }),
      });

      const data = await response.json();
      if (data.recommendation) {
        setResult(data.recommendation);
      }
    } catch (err) {
      console.error('Failed to get AI recommendation:', err);
      // Fallback result
      setResult({
        title: "The Liebe Velvet Crimson Water Bouquet",
        flowers: ["Deep Crimson Kenyan Roses", "Eucalyptus Sprigs", "Baby's Breath"],
        vibe: "Passionate & Memory-Making",
        recommendedWrapping: "Matte Nude Water Reservoir Wrap",
        cardMessage: "To my love: every blossom represents a memory we cherish together. Happy Celebration!",
        giftAddon: "Lindt Swiss Chocolates & Calligraphy Card Note",
        priceEstimate: "KSh 4,500",
        designerNote: "Handcrafted in our Embakasi studio with Naivasha morning-cut roses."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendAiToWhatsApp = () => {
    if (!result) return;
    const text = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌸 I used your AI Concierge on the website and got this recommendation:\n\n` +
      `• Title: ${result.title}\n` +
      `• Vibe: ${result.vibe}\n` +
      `• Flowers: ${result.flowers.join(', ')}\n` +
      `• Suggested Note: "${result.cardMessage}"\n` +
      `• Estimated Price: ${result.priceEstimate}\n\n` +
      `Can you assemble this for delivery today in Nairobi?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-3xl border border-[#E7E2D8] shadow-2xl relative p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1C1917]/80 text-white hover:bg-[#8C2D38] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#8C2D38] text-white flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#FDE68A]" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
              Liebe AI Flower Concierge
            </h2>
            <p className="text-xs text-[#78716C]">
              Tell us the emotion, occasion & recipient. Our AI designer matches the perfect blooms & custom card note.
            </p>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleGenerateRecommendation} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                Who is this for?
              </label>
              <input
                type="text"
                placeholder="e.g. Wife, Boyfriend, Mom, Colleague, Friend"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                What is the occasion?
              </label>
              <input
                type="text"
                placeholder="e.g. 5th Anniversary, Birthday, Apology, Get Well"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                Desired Emotion / Message Vibe
              </label>
              <input
                type="text"
                placeholder="e.g. Deep passionate romance, Cheerful joy, Comfort"
                value={sentiment}
                onChange={(e) => setSentiment(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#57534E] mb-1">
                Budget Range (KES)
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
              >
                <option value="KSh 3,000 - KSh 4,500">KSh 3,000 - KSh 4,500 (Classic)</option>
                <option value="KSh 4,500 - KSh 6,500">KSh 4,500 - KSh 6,500 (Grand Signature)</option>
                <option value="KSh 6,500 - KSh 10,000+">KSh 6,500 - KSh 10,000+ (Imperial Luxe Box)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-[#1C1917] text-white font-bold text-xs hover:bg-[#8C2D38] transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#FDE68A]" />
                <span>Designing Custom Recommendation...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                <span>Generate Floral Recommendation & Card Note</span>
              </>
            )}
          </button>
        </form>

        {/* AI Result Card */}
        {result && (
          <div className="p-6 rounded-2xl bg-[#1C1917] text-[#FAF8F5] border border-[#2A2624] space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#2A2624] pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#FDE68A] font-bold">
                  Bespoke Recommendation
                </span>
                <h3 className="font-serif text-xl font-bold text-white">{result.title}</h3>
              </div>
              <span className="text-xs font-bold text-[#8C2D38] bg-[#FAF8F5] px-3 py-1 rounded-full">
                {result.priceEstimate}
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#D6D3D1]">
              <p>
                <strong className="text-white">Vibe:</strong> {result.vibe}
              </p>
              <p>
                <strong className="text-white">Fresh Flowers:</strong> {result.flowers.join(', ')}
              </p>
              {result.recommendedWrapping && (
                <p>
                  <strong className="text-white">Wrapping Style:</strong> {result.recommendedWrapping}
                </p>
              )}
              {result.giftAddon && (
                <p>
                  <strong className="text-[#FDE68A]">Suggested Gift Add-on:</strong> {result.giftAddon}
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl bg-[#2A2624] border-l-4 border-[#8C2D38] space-y-1">
              <span className="text-[10px] uppercase text-[#A8A29E] font-bold">Suggested Calligraphy Card Note:</span>
              <p className="font-serif italic text-sm text-[#F5F2EC]">"{result.cardMessage}"</p>
            </div>

            <button
              onClick={handleSendAiToWhatsApp}
              className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order This AI Design via WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

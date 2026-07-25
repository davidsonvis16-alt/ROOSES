import React, { useState } from 'react';
import { CartItem, DeliveryZone } from '../types';
import { DELIVERY_ZONES, WHATSAPP_NUMBER } from '../data/flowerData';
import { X, Trash2, ShoppingBag, MessageCircle, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [selectedZone, setSelectedZone] = useState<DeliveryZone>(DELIVERY_ZONES[0]);
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('Today (Same-Day)');

  const itemsSubtotal = cartItems.reduce((sum, item) => {
    const itemBase = Math.round(item.arrangement.price * item.priceMultiplier);
    const addonsBase = item.selectedAddons.reduce((aSum, a) => aSum + a.price, 0);
    return sum + itemBase + addonsBase;
  }, 0);

  const deliveryFee = selectedZone.fee;
  const grandTotal = itemsSubtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsFormatted = '';
    cartItems.forEach((item, idx) => {
      const addons = item.selectedAddons.map((a) => a.name).join(', ') || 'None';
      itemsFormatted += `${idx + 1}. *${item.arrangement.name}* (${item.selectedSize} Size)\n` +
        `   • Add-ons: ${addons}\n` +
        `   • Price: KSh ${Math.round(item.arrangement.price * item.priceMultiplier).toLocaleString()}\n`;
    });

    const text = encodeURIComponent(
      `Hello Liebe & Roses Studio! 🌸 I'd like to place an order from my Shopping Bag:\n\n` +
      `*Items Requested:*\n${itemsFormatted}\n` +
      `*Delivery Neighborhood:* ${selectedZone.name} (${selectedZone.formattedFee})\n` +
      `*Recipient Name:* ${recipientName || 'Not specified'}\n` +
      `*Recipient Phone:* ${recipientPhone || 'Not specified'}\n` +
      `*Target Delivery Date:* ${deliveryDate}\n\n` +
      `*Grand Total:* KSh ${grandTotal.toLocaleString()}\n\n` +
      `Please confirm availability & send M-Pesa payment instructions.`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#E7E2D8] relative overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E7E2D8] flex items-center justify-between bg-[#FAF5EF]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#1C1917] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1917]">Your Order Bag</h2>
              <p className="text-[11px] text-[#78716C]">{cartItems.length} arrangement(s)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#57534E] hover:text-[#1C1917] hover:bg-[#EBE5DA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Items List) */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6 custom-scrollbar">
          
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBE5DA] text-[#8C2D38] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-[#1C1917]">Your Bag is Empty</p>
                <p className="text-xs text-[#78716C] mt-1 max-w-xs mx-auto">
                  Explore our signature water bouquets or build a custom arrangement to start your memory.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#1C1917] text-white text-xs font-semibold hover:bg-[#8C2D38] transition-colors"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            <>
              {/* Item Cards */}
              <div className="space-y-4">
                {cartItems.map((item, index) => {
                  const itemPrice = Math.round(item.arrangement.price * item.priceMultiplier);
                  const addonsPrice = item.selectedAddons.reduce((s, a) => s + a.price, 0);
                  const totalItemPrice = itemPrice + addonsPrice;

                  return (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-white border border-[#E7E2D8] flex gap-3 relative group"
                    >
                      <img
                        src={item.arrangement.image}
                        alt={item.arrangement.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif font-bold text-sm text-[#1C1917] line-clamp-1">
                            {item.arrangement.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-[#A8A29E] hover:text-[#8C2D38] transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-[11px] text-[#78716C]">
                          Size: <span className="font-semibold text-[#1C1917]">{item.selectedSize}</span>
                        </p>

                        {item.selectedAddons.length > 0 && (
                          <p className="text-[10px] text-[#8C2D38]">
                            Add-ons: {item.selectedAddons.map((a) => a.name).join(', ')}
                          </p>
                        )}

                        <p className="font-serif font-bold text-sm text-[#8C2D38] pt-1">
                          KSh {totalItemPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery Zone Selector */}
              <div className="space-y-3 pt-4 border-t border-[#E7E2D8]">
                <label className="text-xs font-bold text-[#1C1917] block">
                  Select Delivery Zone:
                </label>
                <select
                  value={selectedZone.id}
                  onChange={(e) => {
                    const found = DELIVERY_ZONES.find((z) => z.id === e.target.value);
                    if (found) setSelectedZone(found);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
                >
                  {DELIVERY_ZONES.map((z) => (
                    <option key={z.id} value={z.id}>
                      {z.name} — {z.formattedFee} ({z.estimatedTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Recipient Details Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wanjiku / Grace"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Recipient Phone Number (for delivery courier)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 0712 345 678"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D9D2C5] bg-white text-xs focus:ring-1 focus:ring-[#8C2D38] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}

        </div>

        {/* Drawer Footer Summary & WhatsApp Order Button */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#E7E2D8] bg-[#FAF5EF] space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#57534E]">
                <span>Items Subtotal:</span>
                <span>KSh {itemsSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#57534E]">
                <span>Delivery ({selectedZone.name}):</span>
                <span>{selectedZone.formattedFee}</span>
              </div>
              <div className="flex justify-between font-serif text-lg font-bold text-[#1C1917] pt-2 border-t border-[#E7E2D8]">
                <span>Grand Total:</span>
                <span className="text-[#8C2D38]">KSh {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Checkout via WhatsApp Direct</span>
            </button>

            <p className="text-[10px] text-center text-[#78716C]">
              Order payload sent directly to Liebe & Roses studio on WhatsApp for M-Pesa payment link.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

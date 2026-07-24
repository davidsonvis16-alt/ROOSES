import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, Plus, Minus, ArrowRight, Truck, Gift, CheckCircle, Calendar } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    giftNote,
    setGiftNote,
    deliveryDate,
    setDeliveryDate,
    clearCart,
    showToast
  } = useShop();

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 150;
  const freeDeliveryProgress = Math.min(100, (cartTotal / freeDeliveryThreshold) * 100);
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - cartTotal);

  const getItemPrice = (item: any) => {
    let multiplier = 1;
    if (item.size === 'Deluxe') multiplier = 1.35;
    if (item.size === 'Grand') multiplier = 1.75;
    const base = Math.round(item.product.price * multiplier);
    const vaseFee = item.vaseIncluded ? 35 : 0;
    return (base + vaseFee) * item.quantity;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const randOrder = 'LR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randOrder);
    setCheckoutComplete(true);
  };

  const finishOrder = () => {
    clearCart();
    setCheckoutComplete(false);
    setIsCartOpen(false);
    showToast(`Order ${orderNumber} confirmed! Check your email for dispatch tracking.`);
  };

  return (
    <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h3 className="heading-sm">Your Shopping Bag</h3>
            <span className="badge-sage">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
          </div>
          <button className="icon-btn" onClick={() => setIsCartOpen(false)} aria-label="Close bag">
            <X size={20} />
          </button>
        </div>

        {checkoutComplete ? (
          /* Order Confirmation View */
          <div className="drawer-body" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--bg-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage)', marginBottom: '1.5rem' }}>
              <CheckCircle size={36} />
            </div>
            <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>Bespoke Order Confirmed</h3>
            <p className="text-meta" style={{ color: 'var(--accent-sage)', marginBottom: '1rem' }}>Order Reference: {orderNumber}</p>
            <p className="text-subhead" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
              Your fresh floral arrangement will be hand-crafted by our master florists and delivered in natural daylight conditioning on <strong>{deliveryDate}</strong>.
            </p>
            <button className="btn-primary" style={{ width: '100%' }} onClick={finishOrder}>
              Return to Studio
            </button>
          </div>
        ) : (
          /* Cart Items View */
          <>
            {/* Free Delivery Tracker */}
            <div style={{ padding: '1rem 2rem', backgroundColor: 'var(--bg-warm)', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Truck size={14} /> Complimentary Hand Delivery</span>
                <span>{cartTotal >= freeDeliveryThreshold ? 'Unlocked!' : `Add €${amountNeededForFreeDelivery} more`}</span>
              </div>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#E0DDD5', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${freeDeliveryProgress}%`, height: '100%', backgroundColor: 'var(--accent-sage)', transition: 'width 0.4s ease' }} />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="drawer-body">
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-secondary)' }}>
                  <p className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Your bag is currently empty</p>
                  <p className="text-subhead" style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Discover our seasonal botanical arrangements.</p>
                  <button className="btn-secondary" onClick={() => setIsCartOpen(false)}>
                    Explore Collection
                  </button>
                </div>
              ) : (
                <>
                  {cartItems.map((item, idx) => (
                    <div key={`${item.product.id}-${item.size}-${idx}`} className="cart-item-row">
                      <img src={item.product.image} alt={item.product.name} className="cart-item-img" />
                      <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item.product.name}</div>
                        <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                          Size: {item.size} {item.vaseIncluded && '• With Glass Vase'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            style={{ padding: '0.2rem 0.5rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ fontSize: '0.85rem' }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            style={{ padding: '0.2rem 0.5rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>€{getItemPrice(item)}</div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}
                          title="Remove"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Delivery Date Selection */}
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                      <Calendar size={14} /> Preferred Delivery Date
                    </label>
                    <input
                      type="date"
                      className="form-input"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      style={{ fontSize: '0.85rem', padding: '0.5rem' }}
                    />
                  </div>

                  {/* Gift Card Note */}
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                      <Gift size={14} /> Complimentary Handwritten Card
                    </label>
                    <textarea
                      rows={2}
                      className="form-textarea"
                      placeholder="Enter your personal gift message for the recipient..."
                      value={giftNote}
                      onChange={(e) => setGiftNote(e.target.value)}
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer Total */}
            {cartItems.length > 0 && (
              <div className="drawer-footer">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Subtotal</span>
                  <span>€{cartTotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  <span>Total</span>
                  <span>€{cartTotal}</span>
                </div>
                <button className="btn-primary" style={{ width: '100%' }} onClick={handleCheckout}>
                  Proceed to Bespoke Checkout <ArrowRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

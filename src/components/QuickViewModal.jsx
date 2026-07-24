import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { X, Truck, ShieldCheck, Sparkles } from 'lucide-react';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, deliveryDate, setDeliveryDate } = useShop();

  if (!quickViewProduct) return null;

  const [selectedImg, setSelectedImg] = useState(quickViewProduct.image);
  const [selectedSize, setSelectedSize] = useState('Classic');
  const [includeVase, setIncludeVase] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const getPrice = () => {
    let mult = 1;
    if (selectedSize === 'Deluxe') mult = 1.35;
    if (selectedSize === 'Grand') mult = 1.75;
    const base = Math.round(quickViewProduct.price * mult);
    const vaseFee = includeVase ? 35 : 0;
    return (base + vaseFee) * quantity;
  };

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize, includeVase, quantity);
    setQuickViewProduct(null);
  };

  return (
    <AnimatePresence>
      {quickViewProduct && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setQuickViewProduct(null)}
        >
          <motion.div
            className="modal-dialog"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={() => setQuickViewProduct(null)} aria-label="Close modal">
              <X size={18} />
            </button>

            {/* Gallery Image Left Column */}
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <img src={selectedImg} alt={quickViewProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {quickViewProduct.secondaryImage && (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => setSelectedImg(quickViewProduct.image)}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: selectedImg === quickViewProduct.image ? '2px solid var(--text-primary)' : '1px solid var(--border-light)'
                    }}
                  >
                    <img src={quickViewProduct.image} alt="Thumbnail 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                  <button
                    onClick={() => setSelectedImg(quickViewProduct.secondaryImage)}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: selectedImg === quickViewProduct.secondaryImage ? '2px solid var(--text-primary)' : '1px solid var(--border-light)'
                    }}
                  >
                    <img src={quickViewProduct.secondaryImage} alt="Thumbnail 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                </div>
              )}
            </div>

            {/* Details Right Column */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <span className="text-meta">{quickViewProduct.category}</span>
                  <span className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '500' }}>€{getPrice()}</span>
                </div>

                <h2 className="heading-md" style={{ marginBottom: '0.5rem' }}>{quickViewProduct.name}</h2>
                <p className="text-subhead" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {quickViewProduct.description}
                </p>

                {/* Size Selector */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Arrangement Size</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {['Classic', 'Deluxe', 'Grand'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`pill-btn ${selectedSize === sz ? 'active' : ''}`}
                        style={{ textAlign: 'center', padding: '0.75rem 0.5rem' }}
                      >
                        <div>{sz}</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.8, textTransform: 'none', marginTop: '0.1rem' }}>
                          {sz === 'Classic' ? '20-24 Stems' : sz === 'Deluxe' ? '30-34 Stems' : '42+ Stems'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vase Pairing Option */}
                <div
                  onClick={() => setIncludeVase(!includeVase)}
                  style={{
                    padding: '1rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: includeVase ? 'var(--bg-warm)' : 'transparent',
                    cursor: 'pointer',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeVase}
                    onChange={() => {}}
                    style={{ cursor: 'pointer', width: '18px', height: '18px', accentColor: 'var(--accent-sage)' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '500' }}>Add Smoked Fluted Glass Vase (+€35)</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Specially selected to complement stem proportions</div>
                  </div>
                </div>

                {/* Stem Breakdown */}
                <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Stem Composition Notes
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    {quickViewProduct.stemDetails.map((stem, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Sparkles size={12} color="var(--accent-sage)" /> {stem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{ padding: '0.75rem 1rem', fontSize: '1rem' }}
                    >
                      -
                    </button>
                    <span style={{ padding: '0.75rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      style={{ padding: '0.75rem 1rem', fontSize: '1rem' }}
                    >
                      +
                    </button>
                  </div>

                  <button className="btn-primary" style={{ flex: 1, padding: '0.9rem 1.5rem' }} onClick={handleAdd}>
                    Add to Bag • €{getPrice()}
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Truck size={14} /> Same-day delivery in Berlin & Paris</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><ShieldCheck size={14} /> 7-Day Freshness Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

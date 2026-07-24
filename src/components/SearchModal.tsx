import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Search, X, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useShop();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.stemDetails.some((s) => s.toLowerCase().includes(q))
    );
  });

  const popularTags = ['Peonies', 'Monochromatic', 'Tulips', 'Eucalyptus', 'Dried', 'Vase Arrangements'];

  return (
    <div className="modal-backdrop" onClick={() => setIsSearchOpen(false)}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          maxWidth: '720px',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow-modal)',
          padding: '2.5rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setIsSearchOpen(false)}
          aria-label="Close search"
        >
          <X size={18} />
        </button>

        <h3 className="heading-sm" style={{ marginBottom: '1.5rem' }}>Search Floral Atelier</h3>

        {/* Input */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search by flower type, arrangement name, or stem style..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ paddingLeft: '3rem', fontSize: '1rem', padding: '1rem 1rem 1rem 3rem' }}
            autoFocus
          />
        </div>

        {/* Popular Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="pill-btn"
              style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
              No floral arrangements found matching "{query}"
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setQuickViewProduct(product);
                  setIsSearchOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '0.75rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                <img src={product.image} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: '500' }}>{product.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{product.category} • {product.stemCount}</div>
                </div>
                <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>€{product.price}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, ArrowUpDown, Sparkles } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategoryParam = searchParams.get('cat') || 'All';

  const [activeCategory, setActiveCategory] = useState<string>(activeCategoryParam);
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low'>('featured');

  // Handle URL category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sortBy === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="section-spacing">
      <div className="page-container">
        {/* Shop Banner Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
          <span className="text-meta">The Botanical Collection</span>
          <h1 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Artisanal Floral Creations
          </h1>
          <p className="text-subhead">
            Hand-arranged daily using the finest European garden stems. Each creation arrives in our signature eco-luxury packaging with custom stem conditioning notes.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '2.5rem'
          }}
        >
          {/* Category Pill Buttons */}
          <div className="category-pills" style={{ margin: 0 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`pill-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown & Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'creation' : 'creations'}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowUpDown size={14} color="var(--text-secondary)" />
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                <option value="featured">Featured First</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-secondary)' }}>
            <p className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No creations found in this category</p>
            <button className="btn-secondary" onClick={() => handleCategoryChange('All')} style={{ marginTop: '1rem' }}>
              Show All Creations
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Care Banner at bottom */}
        <div
          style={{
            marginTop: '5rem',
            padding: '3rem 2.5rem',
            backgroundColor: 'var(--bg-warm)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          <div>
            <span className="badge-sage" style={{ marginBottom: '0.75rem' }}>Liebe & Roses Guarantee</span>
            <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Freshness & Care Guarantee</h3>
            <p className="text-subhead" style={{ fontSize: '0.875rem' }}>
              Every bouquet comes with our signature flower food formulation and a bespoke stem care card written by our master florists.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="/contact" className="btn-secondary" style={{ backgroundColor: '#FFFFFF' }}>
              Custom Floristry Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

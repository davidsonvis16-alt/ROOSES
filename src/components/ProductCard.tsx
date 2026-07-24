import React from 'react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Eye, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setQuickViewProduct, addToCart } = useShop();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.name} alternate view`}
            className="product-image-secondary"
            loading="lazy"
          />
        )}

        <div className="product-badge-group">
          {product.isBestSeller && <span className="badge-sage">Best Seller</span>}
          {product.isNew && (
            <span className="badge-sage" style={{ backgroundColor: 'var(--text-primary)', color: '#FFFFFF' }}>
              New Release
            </span>
          )}
        </div>

        <button
          className="quick-view-overlay-btn"
          onClick={() => setQuickViewProduct(product)}
        >
          Quick View
        </button>
      </div>

      <div className="product-info">
        <div className="product-header-row">
          <h3 className="product-title">{product.name}</h3>
          <span className="product-price">€{product.price}</span>
        </div>
        <p className="product-stem-note">{product.stemCount} • {product.category}</p>
        
        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
          <button
            className="btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', flex: 1 }}
            onClick={() => setQuickViewProduct(product)}
          >
            <Eye size={14} /> Details
          </button>
          <button
            className="btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            onClick={() => addToCart(product, 'Classic', false, 1)}
            title="Add to Bag"
          >
            <Plus size={14} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

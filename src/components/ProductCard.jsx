import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { Eye, Plus, Heart } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const badgeText = product.isBestSeller
    ? 'Best Seller'
    : product.isNew
    ? 'New Release'
    : null;

  return (
    <motion.div
      className="product-card"
      style={{ position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="product-image-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <motion.img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          {product.secondaryImage && (
            <motion.img
              src={product.secondaryImage}
              alt={`${product.name} alternate view`}
              className="product-image-secondary"
              loading="lazy"
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </motion.div>

        {/* Split Pill Badge */}
        <div className="product-badge-group">
          <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.75rem', fontWeight: 500 }}>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                color: 'var(--text-primary)',
                padding: '0.2rem 0.55rem',
                borderTopLeftRadius: '9999px',
                borderBottomLeftRadius: '9999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                backdropFilter: 'blur(4px)',
              }}
            >
              KSh{product.price}
            </span>
            {badgeText && (
              <span
                style={{
                  background: 'var(--accent-sage)',
                  color: '#FFFFFF',
                  padding: '0.2rem 0.55rem',
                  borderTopRightRadius: '9999px',
                  borderBottomRightRadius: '9999px',
                }}
              >
                {badgeText}
              </span>
            )}
          </div>
        </div>

        {/* Wishlist Heart */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.92)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            color: inWishlist ? 'var(--accent-sage)' : 'var(--text-secondary)',
            backdropFilter: 'blur(4px)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
        </motion.button>

        <motion.button
          className="quick-view-overlay-btn"
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Quick View
        </motion.button>
      </div>

      <div className="product-info" style={{ position: 'relative', zIndex: 1 }}>
        <div className="product-header-row">
          <h3 className="product-title">{product.name}</h3>
          <span className="product-price">KSh{product.price}</span>
        </div>
        <p className="product-stem-note">{product.stemCount} • {product.category}</p>

        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
          <motion.button
            className="btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', flex: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Eye size={14} /> Details
          </motion.button>
          <motion.button
            className="magnetic-btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 'Classic', false, 1);
            }}
            title="Add to Bag"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Plus size={14} /> Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

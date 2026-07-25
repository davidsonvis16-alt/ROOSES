import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HorizontalScroll = ({ title, products, onAddToCart, onQuickView }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="page-container">
        {title && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span className="text-meta">Curated Selection</span>
              <h2 className="heading-lg" style={{ marginTop: '0.35rem' }}>{title}</h2>
            </div>
          </div>
        )}

        <div style={{ position: 'relative' }}>
          {/* Desktop Arrows */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <motion.button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--border-light)',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                opacity: canScrollLeft ? 1 : 0.35,
                scale: canScrollLeft ? 1 : 0.9,
              }}
              whileHover={canScrollLeft ? { scale: 1.08, borderColor: 'var(--text-primary)' } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--border-light)',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canScrollRight ? 'pointer' : 'not-allowed',
                opacity: canScrollRight ? 1 : 0.35,
                scale: canScrollRight ? 1 : 0.9,
              }}
              whileHover={canScrollRight ? { scale: 1.08, borderColor: 'var(--text-primary)' } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="horizontal-scroll-container hide-scrollbar"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                style={{
                  flex: '0 0 auto',
                  width: '300px',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => onQuickView && onQuickView(product)}
                >
                  <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}>
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {product.isBestSeller && (
                      <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--accent-sage)', color: '#FFFFFF', padding: '0.2rem 0.6rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: 'var(--radius-sm)', zIndex: 2 }}>
                        Best Seller
                      </span>
                    )}
                    {product.isNew && (
                      <span style={{ position: 'absolute', top: '0.75rem', left: product.isBestSeller ? '5.5rem' : '0.75rem', background: 'var(--text-primary)', color: '#FFFFFF', padding: '0.2rem 0.6rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: 'var(--radius-sm)', zIndex: 2 }}>
                        New
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.3 }}>{product.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{product.stemCount} • {product.category}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 500, fontSize: '1rem' }}>KSh{product.price}</span>
                      <motion.button
                        className="magnetic-btn btn-primary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', whiteSpace: 'nowrap' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        Add to Bag
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

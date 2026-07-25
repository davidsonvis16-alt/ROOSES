import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PRODUCTS, INSTAGRAM_PHOTOS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { HorizontalScroll } from '../components/shop/HorizontalScroll';
import { useShop } from '../context/ShopContext';
import { ArrowRight, ShieldCheck, Heart, Truck, Instagram } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';

export const Home = () => {
  const { setQuickViewProduct, addToCart } = useShop();
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 6);
  const seasonal = PRODUCTS.filter((p) => p.category === 'Seasonal Atelier').slice(0, 6);
  const luxury = PRODUCTS.slice(0, 6);

  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="page-container">
          <div className="hero-grid">
            {/* Hero Left Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Reveal delay={0.15}>
                <span className="badge-sage" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                  Atelier Floristry • Nairobi
                </span>
              </Reveal>
              <Reveal delay={0.25}>
                <h1 className="heading-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  Sculpted by Nature.<br />Defined by Craft.
                </h1>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-subhead" style={{ marginBottom: '2.5rem', maxWidth: '480px' }}>
                  Liebe & Roses creates bespoke floral arrangements using fresh garden blooms sourced directly from sustainable European growers, conditioned in natural daylight.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="hero-ctas">
                  <Link to="/shop" className="magnetic-btn btn-primary">
                    Explore Shop <ArrowRight size={16} />
                  </Link>
                  <Link to="/about" className="magnetic-btn btn-secondary">
                    Our Craft
                  </Link>
                </div>
              </Reveal>
            </motion.div>

            {/* Hero Right Media */}
            <motion.div
              className="hero-media"
              style={{ y: heroY, opacity: heroOpacity }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <motion.div
                className="hero-img-frame"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcg36gs6xdQ7t0H62y-fj4xOnfsvA_m38GtgPSNAu6Bg&s=10"
                  alt="Elegant floral arrangement"
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Pillars Banner */}
      <section style={{ backgroundColor: 'var(--bg-warm)', padding: '2.5rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="page-container">
          <StaggerContainer stagger={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <StaggerItem>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Daily Harvest Stems
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Sourced fresh every morning from local garden estates</p>
              </StaggerItem>
              <StaggerItem>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Natural Daylight Care
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Conditioned without artificial chemical preservatives</p>
              </StaggerItem>
              <StaggerItem>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Handcrafted Delivery
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Same-day courier service in Embakasi Nairobi</p>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="section-spacing">
        <div className="page-container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
              <span className="text-meta">Curated Portfolios</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Featured Collections</h2>
              <p className="text-subhead" style={{ marginTop: '0.75rem' }}>
                Each collection embodies a distinct botanical mood, engineered with harmony, proportion, and balance.
              </p>
            </div>
          </Reveal>

          <StaggerContainer stagger={0.12}>
            <div className="collection-grid">
              {/* Card 1 */}
              <StaggerItem>
                <div className="collection-card">
                  <div className="collection-img-box">
                    <img src="data:image/webp;base64,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" alt=" Collection" loading="lazy" />
                  </div>
                  <div className="collection-meta">
                    <span className="text-meta">Pure Harmony</span>
                    <h3 className="heading-sm" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Monochromatic Botanicals</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                      Sculptural arrangements focusing purely on form, depth, and white garden textures.
                    </p>
                    <Link to="/shop?cat=Monochromatic" className="btn-text">
                      Explore Collection <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 2 */}
              <StaggerItem>
                <div className="collection-card">
                  <div className="collection-img-box">
                    <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop" alt="Signature Bouquets" loading="lazy" />
                  </div>
                  <div className="collection-meta">
                    <span className="text-meta">Atelier Masterpieces</span>
                    <h3 className="heading-sm" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Signature Bouquets</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                      Abundant, multi-layered floral compositions with garden peonies and blush roses.
                    </p>
                    <Link to="/shop?cat=Signature+Bouquets" className="btn-text">
                      Explore Collection <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 3 */}
              <StaggerItem>
                <div className="collection-card">
                  <div className="collection-img-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQ16bYiLI3ukwnBjhCFTzLRUjGJLwlvLSXT_0NUbydQ&s=10" alt="Architectural Vessels" loading="lazy" />
                  </div>
                  <div className="collection-meta">
                    <span className="text-meta">Living Sculpture</span>
                    <h3 className="heading-sm" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Vase Arrangements</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                      Pre-arranged botanical stems paired with handcrafted crystal and smoked glass vessels.
                    </p>
                    <Link to="/shop?cat=Vase+Arrangements" className="btn-text">
                      Explore Collection <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Best Sellers Horizontal Scroll */}
      <HorizontalScroll
        title="Best Sellers"
        products={bestSellers}
        onAddToCart={(product) => addToCart(product, 'Classic', false, 1)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* New Arrivals Horizontal Scroll */}
      <HorizontalScroll
        title="New Arrivals"
        products={newArrivals}
        onAddToCart={(product) => addToCart(product, 'Classic', false, 1)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* Seasonal Collection Horizontal Scroll */}
      <HorizontalScroll
        title="Seasonal Collection"
        products={seasonal}
        onAddToCart={(product) => addToCart(product, 'Classic', false, 1)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* Luxury Bouquets Horizontal Scroll */}
      <HorizontalScroll
        title="Luxury Bouquets"
        products={luxury}
        onAddToCart={(product) => addToCart(product, 'Classic', false, 1)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* Editorial About Preview Section */}
      <section className="story-section">
        <div className="page-container">
          <div className="story-grid">
            <Reveal>
              <motion.div
                className="story-media"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?q=80&w=800&auto=format&fit=crop"
                  alt="Florist hands conditioning stems"
                  className="story-img"
                  loading="lazy"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajNeR50hzAbGDWATPBiUJ37NrEQjX2KDet5j0u_JLZg&s=10"
                  alt="Botanical studio flowers"
                  className="story-img offset"
                  loading="lazy"
                />
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-meta">Our Philosophy</span>
                <h2 className="heading-lg" style={{ margin: '0.75rem 0 1.5rem' }}>
                  Crafted slowly. Sourced consciously.
                </h2>
                <p className="text-subhead" style={{ marginBottom: '1.25rem' }}>
                  At Liebe & Roses, we believe floristry is an intimate dialog between architectural balance and natural organic wildness.
                </p>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Founded in Nairobi, Embakasi, our master floral architects reject synthetic dyes, artificial foams, and forced hot-house blooms. Every stem is hand-selected at dawn for stem density, petal bloom state, and fragrance profile.
                </p>
                <Link to="/about" className="magnetic-btn btn-primary">
                  Read Full Story <ArrowRight size={16} />
                </Link>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Instagram Preview Section */}
      <section className="section-spacing">
        <div className="page-container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="text-meta">@LIEBEANDROSES</span>
              <h2 className="heading-md" style={{ marginTop: '0.5rem' }}>Atelier Journal on Instagram</h2>
            </div>
          </Reveal>

          <StaggerContainer stagger={0.08}>
            <div className="insta-grid">
              {INSTAGRAM_PHOTOS.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="insta-item">
                    <img src={item.url} alt={item.title} loading="lazy" />
                    <div className="insta-overlay">
                      <Instagram size={24} style={{ marginBottom: '0.5rem' }} />
                      <div style={{ fontSize: '0.85rem', fontWeight: '500' }}>{item.title}</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.25rem' }}>{item.likes} Likes</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="page-container">
          <Reveal>
            <motion.div
              className="newsletter-box"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-meta">Private Invitations</span>
              <h2 className="heading-md" style={{ margin: '0.5rem 0 1rem' }}>Join the Liebe & Roses Journal</h2>
              <p className="text-subhead" style={{ fontSize: '0.95rem' }}>
                Subscribers receive seasonal flower care guides, early access to limited floral drops, and invitations to private studio workshops.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to the Journal.');
                }}
                className="newsletter-form"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="magnetic-btn btn-primary">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

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
                  Atelier Floristry • Berlin & Paris
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
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1600&auto=format&fit=crop"
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
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Same-day courier service in Berlin & Paris</p>
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
                    <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000&auto=format&fit=crop" alt="Monochromatic Collection" loading="lazy" />
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
                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop" alt="Architectural Vessels" loading="lazy" />
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
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop"
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
                  Founded in Berlin with ateliers now in Paris, our master floral architects reject synthetic dyes, artificial foams, and forced hot-house blooms. Every stem is hand-selected at dawn for stem density, petal bloom state, and fragrance profile.
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

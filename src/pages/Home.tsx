import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, INSTAGRAM_PHOTOS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Truck, Instagram } from 'lucide-react';

export const Home: React.FC = () => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="page-container">
          <div className="hero-grid">
            {/* Hero Left Content */}
            <div className="hero-content">
              <span className="badge-sage" style={{ marginBottom: '1.25rem' }}>
                Atelier Floristry • Berlin & Paris
              </span>
              <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
                Sculpted by Nature. Defined by Craft.
              </h1>
              <p className="text-subhead" style={{ marginBottom: '2rem' }}>
                Liebe & Roses creates bespoke floral arrangements using fresh garden blooms sourced directly from sustainable European growers, conditioned in natural daylight.
              </p>
              <div className="hero-ctas">
                <Link to="/shop" className="btn-primary">
                  Explore Shop <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Our Craft
                </Link>
              </div>
            </div>

            {/* Hero Right Photography Frame */}
            <div className="hero-media">
              <div className="hero-img-frame">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwm61FZ7jxpw7nP3Ul_qmMLBQ0fQlbf9xdCKqK_Sgopw&s"
                  alt="Liebe & Roses signature daylight bouquet"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Banner */}
      <section style={{ backgroundColor: 'var(--bg-warm)', padding: '2.5rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="page-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.25rem' }}>
                Daily Harvest Stems
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>Sourced fresh every morning from local garden estates</p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.25rem' }}>
                Natural Daylight Care
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>Conditioned without artificial chemical preservatives</p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.25rem' }}>
                Handcrafted Delivery
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>Same-day courier service in Berlin & Paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="section-spacing">
        <div className="page-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
            <span className="text-meta">Curated Portfolios</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Featured Collections</h2>
            <p className="text-subhead" style={{ marginTop: '0.75rem' }}>
              Each collection embodies a distinct botanical mood, engineered with harmony, proportion, and balance.
            </p>
          </div>

          <div className="collection-grid">
            {/* Card 1 */}
            <div className="collection-card">
              <div className="collection-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpWtRKmXelfa65d0aX39R2-A2Uyi8eTkvInxOwC6Kcw&s=10" alt="Monochromatic Collection" />
              </div>
              <div className="collection-meta">
                <span className="text-meta">Pure Harmony</span>
                <h3 className="heading-sm" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Monochromatic Botanicals</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Sculptural arrangements focusing purely on form, depth, and white garden textures.
                </p>
                <Link to="/shop?cat=Monochromatic" className="btn-text">
                  Explore Collection <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="collection-card">
              <div className="collection-img-box">
                <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop" alt="Signature Bouquets" />
              </div>
              <div className="collection-meta">
                <span className="text-meta">Atelier Masterpieces</span>
                <h3 className="heading-sm" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Signature Bouquets</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Abundant, multi-layered floral compositions with garden peonies and blush roses.
                </p>
                <Link to="/shop?cat=Signature+Bouquets" className="btn-text">
                  Explore Collection <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="collection-card">
              <div className="collection-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OKZ2NXDmS6PO2a7UX0hHPD2x1WgQVvmKSFJt8YtuJg&s=10" alt="Architectural Vessels" />
              </div>
              <div className="collection-meta">
                <span className="text-meta">Living Sculpture</span>
                <h3 className="heading-sm" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Vase Arrangements</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Pre-arranged botanical stems paired with handcrafted crystal and smoked glass vessels.
                </p>
                <Link to="/shop?cat=Vase+Arrangements" className="btn-text">
                  Explore Collection <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="page-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span className="text-meta">Most Cherished</span>
              <h2 className="heading-lg" style={{ marginTop: '0.35rem' }}>Best Sellers</h2>
            </div>
            <Link to="/shop" className="btn-text">
              View All Creations <ArrowRight size={14} />
            </Link>
          </div>

          <div className="product-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial About Preview Section */}
      <section className="story-section">
        <div className="page-container">
          <div className="story-grid">
            <div className="story-media">
              <img
                src="https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?q=80&w=800&auto=format&fit=crop"
                alt="Florist hands conditioning stems"
                className="story-img"
              />
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop"
                alt="Botanical studio flowers"
                className="story-img offset"
              />
            </div>

            <div>
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
              <Link to="/about" className="btn-primary">
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview Section */}
      <section className="section-spacing">
        <div className="page-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="text-meta">@LIEBEANDROSES</span>
            <h2 className="heading-md" style={{ marginTop: '0.35rem' }}>Atelier Journal on Instagram</h2>
          </div>

          <div className="insta-grid">
            {INSTAGRAM_PHOTOS.map((item) => (
              <div key={item.id} className="insta-item">
                <img src={item.url} alt={item.title} />
                <div className="insta-overlay">
                  <Instagram size={24} style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: '500' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.25rem' }}>{item.likes} Likes</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="page-container">
          <div className="newsletter-box">
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
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

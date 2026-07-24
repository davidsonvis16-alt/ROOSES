import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Sun } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="section-spacing">
      <div className="page-container">
        {/* Editorial Story Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <span className="text-meta">Our Heritage & Craft</span>
          <h1 className="heading-xl" style={{ margin: '0.75rem 0 1.5rem' }}>
            Rooted in nature. Elevated by hand.
          </h1>
          <p className="text-subhead" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
            Liebe & Roses was born in Berlin from a simple desire: to honor the unadorned beauty of organic flora with architectural rigor, generous whitespace, and natural daylight care.
          </p>
        </div>

        {/* Full-bleed Photography Banner */}
        <div style={{ width: '100%', aspectRatio: '21/9', minHeight: '380px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '5rem', border: '1px solid var(--border-light)' }}>
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"
            alt="European botanical greenhouse garden in morning light"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Craftsmanship Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', marginBottom: '6rem' }}>
          <div>
            <span className="text-meta">01 • Direct Harvest</span>
            <h3 className="heading-sm" style={{ margin: '0.5rem 0 0.75rem' }}>Sustainable Sourcing</h3>
            <p className="text-subhead" style={{ fontSize: '0.925rem' }}>
              We collaborate exclusively with small, family-operated European flower farms that practice pesticide-free organic cultivation. Stems are harvested at dawn to preserve full vitality.
            </p>
          </div>

          <div>
            <span className="text-meta">02 • Architectural Form</span>
            <h3 className="heading-sm" style={{ margin: '0.5rem 0 0.75rem' }}>Master Floristry</h3>
            <p className="text-subhead" style={{ fontSize: '0.925rem' }}>
              Our florists study botanical architecture, arranging each stem to allow airflow, natural movement, and room for individual petals to unfurl in sequence.
            </p>
          </div>

          <div>
            <span className="text-meta">03 • Zero Synthetic Foam</span>
            <h3 className="heading-sm" style={{ margin: '0.5rem 0 0.75rem' }}>Eco-Conscious Packaging</h3>
            <p className="text-subhead" style={{ fontSize: '0.925rem' }}>
              We have eliminated single-use plastics and floral foam from our ateliers. All arrangements are bound in organic linen ribbons and biodegradable water wraps.
            </p>
          </div>
        </div>

        {/* Studio Dual Photo & Philosophy */}
        <div className="story-grid" style={{ marginBottom: '6rem' }}>
          <div>
            <span className="text-meta">Atelier Process</span>
            <h2 className="heading-lg" style={{ margin: '0.75rem 0 1.25rem' }}>
              Natural daylight is our only studio lighting.
            </h2>
            <p className="text-subhead" style={{ marginBottom: '1.25rem' }}>
              Artificial fluorescent bulbs distort flower colors and accelerate stem degradation. In our Berlin and Paris studios, every composition is created under high ceiling skylights in natural daylight.
            </p>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This ensures that when your bouquet arrives at your residence or venue, its natural tonal subtleties—from soft blush creams to pale sage greens—look vibrant and true.
            </p>
            <Link to="/shop" className="btn-primary">
              Explore Our Collection <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
            <img
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop"
              alt="Florist carefully selecting garden rose stems"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Commitment Quote Box */}
        <div
          style={{
            backgroundColor: 'var(--bg-warm)',
            padding: '4.5rem 3rem',
            borderRadius: 'var(--radius-sm)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <span className="text-meta" style={{ color: 'var(--accent-sage)' }}>Our Promise</span>
          <p className="font-serif" style={{ fontSize: '1.85rem', fontStyle: 'italic', margin: '1.5rem 0 1.5rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
            "Flowers should feel like they were gathered during a quiet walk through an untouched garden—spontaneous, graceful, and full of life."
          </p>
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600' }}>
            — Elena von Berg, Founder & Creative Director
          </span>
        </div>
      </div>
    </div>
  );
};

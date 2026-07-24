import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Truck, Sun } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';

export const About = () => {
  return (
    <div className="section-spacing">
      <div className="page-container">
        {/* Editorial Story Header */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
            <span className="text-meta">Our Heritage & Craft</span>
            <h1 className="heading-xl" style={{ margin: '0.75rem 0 1.5rem' }}>
              Rooted in nature. Elevated by hand.
            </h1>
            <p className="text-subhead" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              Liebe & Roses was born in Berlin from a simple desire: to honor the unadorned beauty of organic flora with architectural rigor, generous whitespace, and natural daylight care.
            </p>
          </div>
        </Reveal>

        {/* Full-bleed Photography Banner */}
        <Reveal>
          <motion.div
            style={{ width: '100%', aspectRatio: '21/9', minHeight: '380px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '6rem', border: '1px solid var(--border-light)' }}
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"
              alt="European botanical greenhouse garden in morning light"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </motion.div>
        </Reveal>

        {/* Craftsmanship Pillars */}
        <StaggerContainer stagger={0.15}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', marginBottom: '6rem' }}>
            <StaggerItem>
              <span className="text-meta">01 • Direct Harvest</span>
              <h3 className="heading-sm" style={{ margin: '0.5rem 0 0.75rem' }}>Sustainable Sourcing</h3>
              <p className="text-subhead" style={{ fontSize: '0.925rem' }}>
                We collaborate exclusively with small, family-operated European flower farms that practice pesticide-free organic cultivation. Stems are harvested at dawn to preserve full vitality.
              </p>
            </StaggerItem>

            <StaggerItem>
              <span className="text-meta">02 • Architectural Form</span>
              <h3 className="heading-sm" style={{ margin: '0.5rem 0 0.75rem' }}>Master Floristry</h3>
              <p className="text-subhead" style={{ fontSize: '0.925rem' }}>
                Our florists study botanical architecture, arranging each stem to allow airflow, natural movement, and room for individual petals to unfurl in sequence.
              </p>
            </StaggerItem>

            <StaggerItem>
              <span className="text-meta">03 • Zero Synthetic Foam</span>
              <h3 className="heading-sm" style={{ margin: '0.5rem 0 0.75rem' }}>Eco-Conscious Packaging</h3>
              <p className="text-subhead" style={{ fontSize: '0.925rem' }}>
                We have eliminated single-use plastics and floral foam from our ateliers. All arrangements are bound in organic linen ribbons and biodegradable water wraps.
              </p>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Studio Dual Photo & Philosophy */}
        <div className="story-grid" style={{ marginBottom: '6rem' }}>
          <Reveal>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
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
              <Link to="/shop" className="magnetic-btn btn-primary">
                Explore Our Collection <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-light)' }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop"
                alt="Florist carefully selecting garden rose stems"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </motion.div>
          </Reveal>
        </div>

        {/* Commitment Quote Box */}
        <Reveal>
          <motion.div
            style={{
              backgroundColor: 'var(--bg-warm)',
              padding: '5rem 3rem',
              borderRadius: 'var(--radius-sm)',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-meta" style={{ color: 'var(--accent-sage)' }}>Our Promise</span>
            <p className="font-serif" style={{ fontSize: '1.85rem', fontStyle: 'italic', margin: '1.5rem 0 1.5rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
              "Flowers should feel like they were gathered during a quiet walk through an untouched garden—spontaneous, graceful, and full of life."
            </p>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600' }}>
              — Elena von Berg, Founder & Creative Director
            </span>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

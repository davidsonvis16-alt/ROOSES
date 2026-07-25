import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, Phone, MapPin, Check, MessageSquare } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    showToast('Thank you for subscribing to the Liebe & Roses Journal.');
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div>
            <Link to="/" className="brand-logo" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              Liebe & Roses
            </Link>
            <p className="text-subhead" style={{ fontSize: '0.9rem', maxWidth: '320px', marginBottom: '1.5rem' }}>
              Artisanal luxury floristry crafted with natural daylight stems, timeless craftsmanship, and sustainable garden sourcing.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://wa.me/493089204110" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="WhatsApp">
                <MessageSquare size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:concierge@liebeandroses.com" className="icon-btn" aria-label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Botanical Shop</Link></li>
              <li><Link to="/about" className="footer-link">Our Atelier</Link></li>
              <li><Link to="/contact" className="footer-link">Concierge & Contact</Link></li>
            </ul>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="footer-col-title">Collections</h4>
            <ul className="footer-links">
              <li><Link to="/shop?cat=Signature+Bouquets" className="footer-link">Signature Bouquets</Link></li>
              <li><Link to="/shop?cat=Monochromatic" className="footer-link">Monochromatic</Link></li>
              <li><Link to="/shop?cat=Seasonal+Atelier" className="footer-link">Seasonal Atelier</Link></li>
              <li><Link to="/shop?cat=Dried+%26+Preserved" className="footer-link">Dried & Preserved</Link></li>
            </ul>
          </div>

          {/* Journal Newsletter Column */}
          <div>
            <h4 className="footer-col-title">The Journal</h4>
            <p className="text-subhead" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
              Receive seasonal floral notes, botanical care guides, and exclusive private atelier previews.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-sage)', fontSize: '0.875rem' }}>
                <Check size={16} /> Subscribed to Journal
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  style={{ padding: '0.7rem 0.9rem', fontSize: '0.85rem' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.7rem 1rem' }}>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} LIEBE & ROSES FLORAL STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Embakasi &bull; Nairobi</span>
            <span>|</span>
            <span>
              Designed by{' '}
              <a href="tel:0142624743" className="footer-link" style={{ textDecoration: 'underline' }}>
                Eden
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
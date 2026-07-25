import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Reveal } from '../components/animations/Reveal';

export const Contact = () => {
  const { showToast } = useShop();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Bouquet',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState('nairobi');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your concierge inquiry has been sent. We will respond within 2 hours.');
  };

  return (
    <div className="section-spacing">
      <div className="page-container">
        {/* Contact Banner Header */}
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="text-meta">Atelier Concierge</span>
            <h1 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              Connect with Our Florists
            </h1>
            <p className="text-subhead">
              Whether inquiring about custom wedding installations, weekly office subscriptions, or a personalized bouquet, our team is at your service.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Contact Form Left Column */}
          <Reveal delay={0.1}>
            <motion.div
              style={{ backgroundColor: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="heading-sm" style={{ marginBottom: '1.5rem' }}>Send a Message</h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--bg-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage)', margin: '0 auto 1.25rem' }}>
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Inquiry Received</h4>
                  <p className="text-subhead" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Thank you, {form.name}. Our head florist will review your {form.inquiryType.toLowerCase()} request and respond shortly.
                  </p>
                  <button
                    className="btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', inquiryType: 'Bespoke Bouquet', message: '' });
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Victoria Sterling"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="name@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+49 30 1234567"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Type</label>
                    <select
                      className="form-select"
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    >
                      <option value="Bespoke Bouquet">Bespoke Bouquet Order</option>
                      <option value="Wedding & Events">Wedding & Event Floristry</option>
                      <option value="Weekly Subscription">Weekly Atelier Subscription</option>
                      <option value="General Concierge">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      rows={4}
                      className="form-textarea"
                      placeholder="Describe your desired palette, date, vessel preferences, or event details..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="magnetic-btn btn-primary"
                    style={{ width: '100%' }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    Submit Inquiry <Send size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </Reveal>

          {/* Business Info & Map Right Column */}
          <Reveal delay={0.2}>
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Atelier Tabs */}
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <button
                    onClick={() => setActiveLocation('embakasi')}
                    className={`pill-btn ${activeLocation === 'embakasi' ? 'active' : ''}`}
                  >
                    Embakasi Flagship
                  </button>
                  <button
                    onClick={() => setActiveLocation('embakasi')}
                    className={`pill-btn ${activeLocation === 'embakasi' ? 'active' : ''}`}
                  >
                    Embakasi Atelier
                  </button>
                </div>

                {activeLocation === 'Embakasi' ? (
                  <div style={{ padding: '1.5rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 className="heading-sm" style={{ marginBottom: '1rem' }}>EMBAKASI Flagship Studio</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <MapPin size={18} style={{ color: 'var(--accent-sage)', marginTop: '0.2rem', flexShrink: 0 }} />
                        <div>Embakasi Road, Next to QuickMart, Nairobi</div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Phone size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                        <div>+254717315599</div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Mail size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                        <div>Emba.@liebeandroses.com</div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <Clock size={18} style={{ color: 'var(--accent-sage)', marginTop: '0.2rem', flexShrink: 0 }} />
                        <div>Mon - Sat: 08:30 - 19:00 • Sun: Closed</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '1.5rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 className="heading-sm" style={{ marginBottom: '1rem' }}>Embakasi Atelier</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <MapPin size={18} style={{ color: 'var(--accent-sage)', marginTop: '0.2rem', flexShrink: 0 }} />
                        <div>Embakasi Road, Next to QuickMart, Nairobi</div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Phone size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                        <div>+254726201738</div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Mail size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                        <div>zuripetals@gmail.com</div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <Clock size={18} style={{ color: 'var(--accent-sage)', marginTop: '0.2rem', flexShrink: 0 }} />
                        <div>Mon - Sat: 09:00 - 19:30 • Sun: Closed</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Action Buttons (WhatsApp & Concierge) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <motion.a
                  href="https://wa.me/254717315599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.9rem' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <MessageSquare size={16} /> WhatsApp Direct
                </motion.a>
                <motion.a
                  href="mailto:zuripetals@gmail.com"
                  className="magnetic-btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.9rem' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Mail size={16} /> Email Concierge
                </motion.a>
              </div>

              {/* Map Placeholder */}
              <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
                <div style={{ padding: '0.75rem 1rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="text-meta" style={{ fontSize: '0.75rem' }}>Map Location • {activeLocation === 'berlin' ? 'Kenyan Flowers' : 'Nairobi, Kenya'}</span>
                  <span className="badge-sage">Studio Open</span>
                </div>
                <div
                  style={{
                    height: '240px',
                    backgroundColor: '#F3F2EE',
                    backgroundImage: 'radial-gradient(#D6D4CE 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <MapPin size={20} />
                  </div>
                  <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>LIEBE & ROSES {activeLocation.toUpperCase()}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {activeLocation === 'embakasi' ? 'Nairobi, Embakasi' : 'Nairobi, Embakasi'}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Heart, Info, Mail } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const MobileBottomNav = () => {
  const { cartCount } = useShop();

  return (
    <nav style={{
      display: 'none',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--border-light)',
      zIndex: 50,
    }}>
      <style>{`
        @media (max-width: 767px) {
          nav[style*="position: fixed"][style*="bottom: 0"] { display: flex !important; }
          .mobile-bottom-nav-item { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; text-decoration: none; padding: 8px 0; }
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '64px' }}>
        <NavLink to="/" className="mobile-bottom-nav-item">
          {({ isActive }) => (
            <>
              <Home size={22} color={isActive ? 'var(--text-primary)' : 'var(--text-secondary)'} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>Home</span>
            </>
          )}
        </NavLink>

        <NavLink to="/shop" className="mobile-bottom-nav-item">
          {({ isActive }) => (
            <>
              <Heart size={22} color={isActive ? 'var(--text-primary)' : 'var(--text-secondary)'} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>Wishlist</span>
            </>
          )}
        </NavLink>

        <NavLink to="/shop" className="mobile-bottom-nav-item">
          {({ isActive }) => (
            <div style={{ position: 'relative' }}>
              <ShoppingBag size={22} color={isActive ? 'var(--text-primary)' : 'var(--text-secondary)'} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: 'var(--accent-sage)',
                  color: '#FFFFFF',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {cartCount}
                </span>
              )}
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>Bag</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/about" className="mobile-bottom-nav-item">
          {({ isActive }) => (
            <>
              <Info size={22} color={isActive ? 'var(--text-primary)' : 'var(--text-secondary)'} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>About</span>
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="mobile-bottom-nav-item">
          {({ isActive }) => (
            <>
              <Mail size={22} color={isActive ? 'var(--text-primary)' : 'var(--text-secondary)'} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>Contact</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

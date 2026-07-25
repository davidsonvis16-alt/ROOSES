import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import logo from '../assets/logo.png';

export const Header = () => {
  const { cartCount, setIsCartOpen, setIsSearchOpen, wishlist } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -80]);
  const headerBg = useTransform(scrollY, [0, 80], [1, 0.92]);
  const headerShadow = useTransform(scrollY, [0, 80], [0, 1]);

  const closeMobile = () => setMobileMenuOpen(false);

  useEffect(() => {
    closeMobile();
  }, [location.pathname]);

  return (
    <motion.header
      ref={headerRef}
      className="site-header"
      style={{
        y: headerY,
        backgroundColor: useTransform(headerBg, (v) => `rgba(255, 255, 255, ${v})`),
        boxShadow: useTransform(headerShadow, (v) => v > 0.5 ? '0 1px 0 rgba(0,0,0,0.06)' : 'none'),
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="page-container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMobile}>
            <img src={logo} alt="Liebe & Roses logo" className="brand-logo-img" />
            <span className="brand-logo-text">Liebe & Roses</span>
          </Link>

          {/* Desktop Navigation */}
          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <motion.button
              className="icon-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search collection"
              title="Search"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Search size={20} strokeWidth={1.5} />
            </motion.button>

            <motion.button
              className="icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Bag"
              title="Shopping Bag"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </motion.button>

            {/* Mobile Nav Toggle */}
            <motion.button
              className="icon-btn mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
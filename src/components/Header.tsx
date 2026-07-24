import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Header: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="page-container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMobile}>
            Liebe & Roses
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
            <button
              className="icon-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search collection"
              title="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              className="icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Bag"
              title="Shopping Bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Mobile Nav Toggle */}
            <button
              className="icon-btn mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

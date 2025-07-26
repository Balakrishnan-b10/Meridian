import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import QuoteModal from '../Quote/QuoteModal';
import logo from '../../assests/images/coco1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Product', 'Features', 'About', 'Testimonials', 'Contact'];

  return (
    <nav className={`header ${scrollY > 50 ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <div className="logo-icon">
              <img src={logo} alt="Logo" className="logo-icon-img" />
            </div>
            <span className={`logo-text ${scrollY > 50 ? 'logo-text-dark' : ''}`}>
              Meridian Machine Works
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`menu-link ${scrollY > 50 ? 'menu-link-dark' : ''}`}
              >
                {item}
              </a>
            ))}
            <button className="cta-button" onClick={() => setIsQuoteOpen(true)}>
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`mobile-menu-button ${scrollY > 50 ? 'mobile-menu-button-dark' : ''}`}
          >
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </nav>

  );
};

export default Header;
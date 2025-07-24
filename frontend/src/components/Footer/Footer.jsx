import React from 'react';
import { Recycle, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    products: [
      { name: " Meridian pro", href: "#" },
      { name: "Industrial Series", href: "#" },
      { name: "Enterprise Solutions", href: "#" },
      { name: "Spare Parts", href: "#" }
    ],
    support: [
      { name: "Installation", href: "#" },
      { name: "Maintenance", href: "#" },
      // { name: "Training", href: "#" },
      { name: "Warranty", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      // { name: "Careers", href: "#" },
      { name: "News", href: "#" },
      { name: "Contact", href: "#contact" }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Recycle className="footer-logo-svg" />
              </div>
              <span className="footer-logo-text">Meridian Machine Works</span>
            </div>
            <p className="footer-description">
              Leading manufacturer of coconut processing equipment with over 7 years of innovation and excellence.
            </p>
          </div>

          <div className="footer-links-section">
            <div className="footer-links-group">
              <h4 className="footer-links-title">Products</h4>
              <ul className="footer-links-list">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Support</h4>
              <ul className="footer-links-list">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2025 CocoTech Industries. All rights reserved.
          </p>
          <div className="footer-social-icons">
            <a href="nksmarty702@gmail.com" className="social-icon" aria-label="Mail"><Mail /></a>
            <a href="https://www.facebook.com" target="_blank" className="social-icon" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com" target="_blank" className="social-icon" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.twitter.com" target="_blank" className="social-icon" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
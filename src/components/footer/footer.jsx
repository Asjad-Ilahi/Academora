import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import './footer.css'; // Import the CSS file
import Logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo">
            <a href="/" className="footer-logo-a">
              <img src={Logo} alt="Academora Logo" width={32} height={32} />
              <span className="footer-logo-text">Academora</span>
            </a>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="footer-help">
            <h3 className="footer-help-title">GET HELP</h3>
            <ul className="footer-links">
              <li>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/articles" className="footer-link">
                  Latest Articles
                </a>
              </li>
              <li>
                <a href="/faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-contact-title">CONTACT US</h3>
            <div className="footer-contact-info">
              <p>Address: 2321 New Design St, Lorem Ipsum10 Hudson Yards, USA</p>
              <p>Tel: + (123) 2500-567-8988</p>
              <p>Mail: support@academora.com</p>
            </div>
            <div className="footer-socials">
              <a href="#" className="footer-social-link">
                <Facebook className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Youtube className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Academora | Powered by ThumPress</p>
        </div>
      </div>
    </footer>
  );
}

// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <span className="footer-copy">
        © 2025 Abhi. All rights reserved.
      </span>
      <div className="footer-links">
        <a
          href="https://linkedin.com/in/abhijith-saji-1b9735239"
          aria-label="LinkedIn"
          className="link-btn li"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://github.com/Abhijith834"
          aria-label="GitHub"
          className="link-btn gh"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.figma.com/"
          aria-label="E‑mail"
          className="link-btn gm"
        />
      </div>
    </div>
  </footer>
);

export default Footer;

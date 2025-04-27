// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="site-header">
    <div className="nav-pill">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
    <div className="header-pill">Profile</div>

    {/* Combined pill for narrow screens */}
    <div className="combined-pill">
      <div className="combined-item">Home</div>
      <div className="combined-item">About</div>
      <div className="combined-item">Contact</div>
      <div className="combined-item">Profile</div>
    </div>
  </header>
);

export default Header;

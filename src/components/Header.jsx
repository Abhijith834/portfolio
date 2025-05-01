import React, { useState, useEffect } from 'react';
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="nav-pill">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
      <div className="header-pill">Resume</div>

      <div className="combined-pill">
        <div className="combined-item">Home</div>
        <div className="combined-item">Projects</div>
        <div className="combined-item">Contact</div>
        <div className="combined-item">Resume</div>
      </div>
    </header>
  );
};
export default Header;

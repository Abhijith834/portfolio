import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ onContactClick, onResumeClick }) => {
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
          <li className="nav-item">
            <a href="#">Home </a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item" onClick={onContactClick}>Contact</li>
        </ul>
      </div>
      <div className="header-pill" onClick={onResumeClick}>Resume</div>

      <div className="combined-pill">
        <div className="combined-item"><a href="#">Home </a></div>
        <div className="combined-item"><a href="#projects">Projects</a></div>
        <div className="combined-item" onClick={onContactClick}>Contact</div>
        <div className="combined-item" onClick={onResumeClick}>Resume</div>
      </div>
    </header>
  );
};
export default Header;

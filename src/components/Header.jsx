import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = ({ onContactClick, onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Helper to smooth-scroll and offset by header height
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      <div className="nav-pill">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item" onClick={onContactClick}>
            Contact
          </li>
        </ul>
      </div>

      <div className="header-pill" onClick={onResumeClick}>
        Resume
      </div>

      <div className="combined-pill">
        <a
          className="combined-item"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          className="combined-item"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <div className="combined-item" onClick={onContactClick}>
          Contact
        </div>
        <div className="combined-item" onClick={onResumeClick}>
          Resume
        </div>
      </div>
    </header>
  );
};

export default Header;

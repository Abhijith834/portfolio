// src/components/Intro.jsx
import React, { useState, useEffect } from "react";
import "./Intro.css";
import locationIcon from "../assets/location.png";
import lowResPic from "../assets/pic_optimised.webp";
import highResPic from "../assets/pic_upscale.webp";

const Intro = () => {
  // start with the low-res image
  const [avatarSrc, setAvatarSrc] = useState(lowResPic);

  useEffect(() => {
    // preload the high-res image
    const img = new Image();
    img.src = highResPic;
    img.onload = () => {
      // once it’s ready, update the src
      setAvatarSrc(highResPic);
    };
  }, []);

  return (
    <section className="intro-wrapper">
      <div className="intro-row">
        <div className="intro-avatar">
          <img
            src={avatarSrc}
            alt="Abhi profile"
            className="intro-avatar-img"
          />
        </div>

        <div className="intro-greeting">
          <h1 className="intro-title">
            Hi, I am&nbsp;<span className="intro-name">Abhi</span>{" "}
            <span className="intro-wave">👋</span>
          </h1>

          <h2 className="intro-subtitle">AI Engineer / Front-end developer</h2>
          <div className="intro-location">
            <img src={locationIcon} alt="" className="intro-location-icon" />
            <span className="intro-location-text">Hertfordshire, UK</span>
          </div>
        </div>
      </div>

      <div className="intro-links">
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
          href="https://www.figma.com/proto/ot3MHxRX2t6Ovs5dSPKKj7/Venzini-Fanatic-2?node-id=81-352&starting-point-node-id=73%3A707&t=3ORoP08SFWN8H6fc-1"
          aria-label="Figma"
          className="link-btn gm"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <p className="intro-text">
        I'm a Full Stack AI Engineer and a tech hobbyist. I am specialised in
        crafting AI technologies, user-friendly experiences and building
        scalable systems that evolve with user needs. Check out some of my work
        or get in touch, I'm always happy to chat about tech!
      </p>
    </section>
  );
};

export default Intro;

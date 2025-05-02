import React from 'react';
import './Intro.css';
import locationIcon from '../assets/location.png';
import profilePic from '../assets/Frame 3.webp';

const Intro = () => {
  return (
    <section className="intro-wrapper">
      <div className="intro-row">
        <div className="intro-avatar">
          <img src={profilePic} alt="Abhi profile" />
        </div>

        <div className="intro-greeting">
          <h1 className="intro-title">
            Hi, I am&nbsp;<span className="intro-name">Abhi</span> <span className="intro-wave">👋</span>
          </h1>

          <h2 className="intro-subtitle">AI Engineer / Front-end developer</h2>
          <div className="intro-location">
            <img
              src={locationIcon}
              alt=""
              className="intro-location-icon"
            />
            <span className="intro-location-text">
              Hertfordshire, UK
            </span>
          </div>
        </div>
      </div>

      <div className="intro-links">
        <a href="https://linkedin.com/in/abhijith-saji-1b9735239" aria-label="LinkedIn" className="link-btn li" />
        <a href="https://github.com/Abhijith834"           aria-label="GitHub"   className="link-btn gh" />
        <a href="https://www.figma.com/"               aria-label="Figma"   className="link-btn gm" />
      </div>

      <p className="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
      </p>
    </section>
  );
};

export default Intro;

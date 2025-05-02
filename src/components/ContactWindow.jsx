import React, { useEffect, useState } from 'react';
import './ContactWindow.css';

import emailIcon    from '../assets/Figma.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon   from '../assets/github.png';

export default function ContactWindow({ open, onClose }) {
  /* keep the node mounted long enough for the exit animation */
  const [shouldRender, setShouldRender] = useState(open);

  /* lock body scroll only while visible */
  useEffect(() => {
    if (open) setShouldRender(true);
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleAnimEnd = () => {
    if (!open) setShouldRender(false);      // unmount after fade‑out
  };

  /* form state -------------------------------------------------- */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thanks for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`contact-overlay ${open ? 'open' : 'close'}`}
      data-role="overlay"
      onClick={e => e.target.dataset.role === 'overlay' && onClose()}
      onAnimationEnd={handleAnimEnd}
    >
      <div className={`contact-modal ${open ? 'open' : 'close'}`}>
        <button
          className="close-btn"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        {/* ---------- FORM ---------- */}
        <h3 className="contact-title">GET IN TOUCH</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send&nbsp;Message
          </button>
        </form>

        {/* ---------- SOCIAL LINKS ---------- */}
        <div className="contact-links">
          <a href="mailto:you@example.com" aria-label="Email">
            <img src={emailIcon} alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-id"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/your-id"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

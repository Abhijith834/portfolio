// src/components/ContactWindow.jsx

import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactWindow.css';

import emailIcon    from '../assets/email.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon   from '../assets/github.svg';

export default function ContactWindow({ open, onClose }) {
  /* keep the node mounted long enough for the exit animation */
  const [shouldRender, setShouldRender] = useState(open);
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  /* lock body scroll only while visible */
  useEffect(() => {
    if (open) setShouldRender(true);
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleAnimEnd = () => {
    if (!open) setShouldRender(false); // unmount after fade-out
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);

    // Load your Vite env vars (must start with VITE_)
    const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID     = import.meta.env.VITE_EMAILJS_USER_ID;

    console.log('SERVICE_ID ->', JSON.stringify(SERVICE_ID));
    console.log('TEMPLATE_ID ->', JSON.stringify(TEMPLATE_ID));
    console.log('USER_ID     ->', JSON.stringify(USER_ID));

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      alert(
        '⚠️ EmailJS config error: one or more environment variables are missing.\n' +
        'Please check your .env.local file at your project root.'
      );
      setSending(false);
      return;
    }

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      USER_ID
    )
    .then(() => {
      alert('✅ Message sent! Thanks for reaching out.');
      setSending(false);
      onClose();
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      alert('❌ Oops, something went wrong. Please try again later.');
      setSending(false);
    });
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
        >✕</button>

        {/* ---------- FORM ---------- */}
        <h3 className="contact-title">GET IN TOUCH</h3>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          {/* Hidden field: you can also hard-code your email in the EmailJS template */}
          <input
            type="hidden"
            name="to_email"
            value="your-email@example.com"
          />

          <div className="field-group">
            <label htmlFor="from_name">Name</label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="reply_to">Email</label>
            <input
              id="reply_to"
              name="reply_to"
              type="email"
              placeholder="your@example.com"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="What’s on your mind?"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        {/* ---------- SOCIAL LINKS ---------- */}
        <div className="contact-links">
          <a href="mailto:your-email@example.com" aria-label="Email">
            <img src={emailIcon} alt="Email" />
          </a>
          <a
            href="https://linkedin.com/in/your-id"
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

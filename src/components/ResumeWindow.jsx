import React, { useEffect, useState } from 'react';
import './ResumeWindow.css';

/* ---------------------------------------------------------------
   Grab every file named resume.* inside assets/resume/ at build‑time
   (works in Vite & other modern bundlers). Adjust glob if you keep
   your files elsewhere or use a different naming scheme.
---------------------------------------------------------------- */
const resumes = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/resume/resume.*', { eager: true, import: 'default' })
  ).map(([path, url]) => {
    const ext = path.split('.').pop().toLowerCase();   // "pdf", "docx", ...
    return [ext, url];
  })
);

const extensions = Object.keys(resumes);               // ["pdf", "docx", …]

export default function ResumeWindow({ open, onClose }) {
  /* keep node around for exit animation */
  const [shouldRender, setShouldRender] = useState(open);
  /* selected extension (first one by default) */
  const [selectedExt, setSelectedExt] = useState(extensions[0] ?? '');

  /* body‑scroll lock */
  useEffect(() => {
    if (open) setShouldRender(true);
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleAnimEnd = () => !open && setShouldRender(false);
  if (!shouldRender) return null;

  const downloadUrl = resumes[selectedExt];

  return (
    <div
      className={`resume-overlay ${open ? 'open' : 'close'}`}
      data-role="overlay"
      onClick={e => e.target.dataset.role === 'overlay' && onClose()}
      onAnimationEnd={handleAnimEnd}
    >
      <div className={`resume-modal ${open ? 'open' : 'close'}`}>
        <button className="close-btn" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <h3 className="resume-title">Resume download</h3>

        {/* ---------- selector + button ---------- */}
        <div className="controls">
          <select
            value={selectedExt}
            onChange={e => setSelectedExt(e.target.value)}
            className="ext-select"
            aria-label="Choose file format"
          >
            {extensions.map(ext => (
              <option key={ext} value={ext}>
                .{ext.toUpperCase()}
              </option>
            ))}
          </select>

          {/* anchor gives native “save as” download behaviour */}
          <a
            href={downloadUrl}
            download
            className="download-btn"
          >
            Download
          </a>
        </div>

        {/* helpful hint for empty folder */}
        {extensions.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '12px', opacity: 0.8 }}>
            No résumé files found in&nbsp;<code>assets/resume/</code>.
          </p>
        )}
      </div>
    </div>
  );
}

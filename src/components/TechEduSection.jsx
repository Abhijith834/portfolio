import React, { useState, useRef, useEffect } from "react";
import "./TechEduSection.css";

const techStack = Array.from({ length: 10 }, (_, i) => `Tech ${i + 1}`);

const education = [
  {
    title: "Lorem ipsum.",
    details: ["A-1", "A-2", "A-3", "A-4", "A-5", "A-6"],
  },
  { title: "Dolor sit.", details: ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6"] },
];
const certificates = [
  {
    title: "Lorem – 2024",
    details: ["Issued by Lorem Ipsum Academy", "sfgswgrwesgrswegrweg"],
  },
  {
    title: "Dolor – 2023",
    details: [
      "Issued by Dolor Institute",
      "Issued by Lorem Ipsum Academy",
      "sfgswgrwesgrswegrweg",
    ],
  },
];

export default function TechEduSection() {
  const FADE_OUT = 100; // ms to fade out completely
  const CONTENT_DELAY = FADE_OUT; // we’ll use same value to delay fade-in
  const SLIDE_DUR = 350; // unchanged

  const [tab, setTab] = useState("education");
  const [displayTab, setDisplayTab] = useState("education");
  const [fading, setFading] = useState(false);

  const measureRef = useRef(null);
  const [dotTops, setDotTops] = useState([]);
  useEffect(() => {
    if (!measureRef.current) return;
    const items = Array.from(
      measureRef.current.querySelectorAll(".timeline-item")
    );
    setDotTops(items.map((el) => el.offsetTop + 2));
  }, [displayTab]);

  const onClickTab = (newTab) => {
    if (newTab === tab) return;
    setTab(newTab);
    setFading(true);

    // Pre-measure the new list’s dot positions
    window.requestAnimationFrame(() => {
      const items = Array.from(
        measureRef.current.querySelectorAll(".timeline-item")
      );
      setDotTops(items.map((el) => el.offsetTop + 2));
    });

    // After fade-out (100ms), swap content and fade in
    setTimeout(() => {
      setDisplayTab(newTab);
      setFading(false);
    }, FADE_OUT);
  };

  const listForMeasure = tab === "education" ? education : certificates;
  const listForDisplay = displayTab === "education" ? education : certificates;

  // axis + padding logic unchanged
  const axisX = tab === "education" ? "16px" : "calc(100% - 16px)";
  const txtAlign = tab === "education" ? "left" : "right";
  const padLeft = tab === "education" ? "32px" : "0";
  const padRight = tab === "education" ? "0" : "32px";

  return (
    <section className="tech-edu-wrapper">
      <div className="tech-card">
        <h3 className="card-title">TECHNOLOGIES I USE</h3>
        <ul className="tech-list">
          {techStack.map((t) => (
            <li key={t} className="tech-item">
              <span className="tech-icon" />
              <span className="tech-bar" />
            </li>
          ))}
        </ul>
      </div>

      <div className="edu-card">
        <div className="tab-bar">
          <div
            className="tab-slider"
            style={{ left: tab === "education" ? "0%" : "50%" }}
          />
          <button className="tab" onClick={() => onClickTab("education")}>
            EDUCATION
          </button>
          <button className="tab" onClick={() => onClickTab("cert")}>
            CERTIFICATES
          </button>
        </div>

        {/* Visible timeline */}
        <div className="timeline" style={{ "--axis-x": axisX }}>
          {dotTops.map((top, i) => (
            <span
              key={i}
              className="timeline-dot"
              style={{ top: `${top}px`, left: axisX }}
            />
          ))}

          {listForDisplay.map(({ title, details }, i) => (
            <div
              className={`timeline-item ${fading ? "fade-out" : ""}`}
              key={`${displayTab}-${i}`}
            >
              <div
                className={`timeline-content ${
                  !fading
                    ? displayTab === "education"
                      ? "slide-in-left"
                      : "slide-in-right"
                    : ""
                }`}
                style={{
                  textAlign: txtAlign,
                  paddingLeft: padLeft,
                  paddingRight: padRight,
                  "--content-delay": `${CONTENT_DELAY}ms`,
                  "--slide-dur": `${SLIDE_DUR}ms`,
                }}
              >
                <h4>{title}</h4>
                <ul>
                  {details.map((d, di) => (
                    <li key={di}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden measurement container */}
        <div
          ref={measureRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            visibility: "hidden",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          <div className="timeline" style={{ "--axis-x": axisX }}>
            {listForMeasure.map(({ title, details }, i) => (
              <div className="timeline-item" key={`m-${i}`}>
                <div
                  className="timeline-content"
                  style={{
                    textAlign: txtAlign,
                    paddingLeft: padLeft,
                    paddingRight: padRight,
                  }}
                >
                  <h4>{title}</h4>
                  <ul>
                    {details.map((d, di) => (
                      <li key={di}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useRef, useEffect } from "react";
import "./TechEduSection.css";

const techStack = [
  { name: "Python", iconSrc: "src/assets/technologies/python.png" },
  { name: "Figma", iconSrc: "src/assets/technologies/figma.png" },
  { name: "Pytorch", iconSrc: "src/assets/technologies/pytorch.png" },
  { name: "React", iconSrc: "src/assets/technologies/react.png" },
  { name: "Numpy", iconSrc: "src/assets/technologies/numpy.jpg" },
  { name: "JavaScript", iconSrc: "src/assets/technologies/js.png" },
  { name: "Huggingface", iconSrc: "src/assets/technologies/huggingface.png" },
  { name: "ThreeJs", iconSrc: "src/assets/technologies/threejs.png" },
  { name: "Docker", iconSrc: "src/assets/technologies/docker.webp" },
  { name: "SQL", iconSrc: "src/assets/technologies/sql-server.png" },
  { name: "Ollama", iconSrc: "src/assets/technologies/ollama.webp" },
  { name: "Git", iconSrc: "src/assets/technologies/git.png" },
  { name: "OpenCv", iconSrc: "src/assets/technologies/opencv.jpg" },
  { name: "Java", iconSrc: "src/assets/technologies/java.png" },
  { name: "Tensorflow", iconSrc: "src/assets/technologies/tensorflow.png" },
  { name: "Keras", iconSrc: "src/assets/technologies/keras_black.png" },
];

const education = [
  {
    title: "Lorem ipsum.",
    details: ["A-1", "A-2", "A-3", "A-4", "A-5", "A-6", "A-7"],
  },
  { title: "Dolor sit.", details: ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7"] },
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
  const FADE_OUT = 100;
  const CONTENT_DELAY = FADE_OUT;
  const SLIDE_DUR = 350;

  // Tab state
  const [tab, setTab] = useState("education");
  const [displayTab, setDisplayTab] = useState("education");
  const [fading, setFading] = useState(false);

  // Timeline measurement
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
    window.requestAnimationFrame(() => {
      const items = Array.from(
        measureRef.current.querySelectorAll(".timeline-item")
      );
      setDotTops(items.map((el) => el.offsetTop + 2));
    });
    setTimeout(() => {
      setDisplayTab(newTab);
      setFading(false);
    }, FADE_OUT);
  };

  const listForMeasure = tab === "education" ? education : certificates;
  const listForDisplay = displayTab === "education" ? education : certificates;

  const axisX = tab === "education" ? "16px" : "calc(100% - 16px)";
  const txtAlign = tab === "education" ? "left" : "right";
  const padLeft = tab === "education" ? "32px" : "0";
  const padRight = tab === "education" ? "0" : "32px";

  // track width to conditionally duplicate
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isMarquee = width >= 601 && width <= 890;
  const techItems = isMarquee ? [...techStack, ...techStack] : techStack;

  // infinite scroll
  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMarquee) return;
    const SPEED = 0.5;
    let pos = 0;
    let frame;

    function step() {
      if (!(window.innerWidth >= 601 && window.innerWidth <= 890)) {
        cancelAnimationFrame(frame);
        return;
      }
      pos += SPEED;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isMarquee]);

  return (
    <section className="tech-edu-wrapper">
      <div className="tech-card">
        <h3 className="card-title">TECHNOLOGIES I USE</h3>

        {/* marquee wrapper */}
        <div className="tech-scroll" ref={scrollRef}>
          <ul className="tech-list">
            {techItems.map(({ name, iconSrc }, idx) => (
              <li key={idx} className="tech-item">
                <img
                  className="tech-icon"
                  src={iconSrc}
                  alt={`${name} logo`}
                  width={32}
                  height={32}
                />
                <span className="tech-title">{name}</span>
              </li>
            ))}
          </ul>
        </div>
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

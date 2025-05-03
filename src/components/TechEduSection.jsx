// src/components/TechEduSection.jsx
import React, { useState, useRef, useEffect } from "react";
import "./TechEduSection.css";

// Import each asset so the bundler emits the correct URL at build time
import pythonIcon     from "../assets/technologies/python.png";
import figmaIcon      from "../assets/technologies/figma.webp";
import pytorchIcon    from "../assets/technologies/pytorch.webp";
import reactIcon      from "../assets/technologies/react.webp";
import numpyIcon      from "../assets/technologies/numpy.webp";
import jsIcon         from "../assets/technologies/js.webp";
import huggingfaceIcon from "../assets/technologies/huggingface.webp";
import threejsIcon    from "../assets/technologies/threejs.webp";
import dockerIcon     from "../assets/technologies/docker.webp";
import sqlIcon        from "../assets/technologies/sql-server.webp";
import ollamaIcon     from "../assets/technologies/ollama.webp";
import gitIcon        from "../assets/technologies/git.webp";
import opencvIcon     from "../assets/technologies/opencv.jpg";
import javaIcon       from "../assets/technologies/java.webp";
import tensorflowIcon from "../assets/technologies/tensorflow.webp";
import kerasIcon      from "../assets/technologies/keras_black.png";

const techStack = [
  { name: "Python",     iconSrc: pythonIcon     },
  { name: "Figma",      iconSrc: figmaIcon      },
  { name: "Pytorch",    iconSrc: pytorchIcon    },
  { name: "React",      iconSrc: reactIcon      },
  { name: "Numpy",      iconSrc: numpyIcon      },
  { name: "JavaScript", iconSrc: jsIcon         },
  { name: "Huggingface",iconSrc: huggingfaceIcon},
  { name: "ThreeJs",    iconSrc: threejsIcon    },
  { name: "Docker",     iconSrc: dockerIcon     },
  { name: "SQL",        iconSrc: sqlIcon        },
  { name: "Ollama",     iconSrc: ollamaIcon     },
  { name: "Git",        iconSrc: gitIcon        },
  { name: "OpenCv",     iconSrc: opencvIcon     },
  { name: "Java",       iconSrc: javaIcon       },
  { name: "Tensorflow", iconSrc: tensorflowIcon },
  { name: "Keras",      iconSrc: kerasIcon      },
];

const education = [
  {
    title: "University of Hertfordshire (2022 - present)",
    details: ["A-1", "A-2", "A-3", "A-4", "A-5", "A-6", "A-7"],
  },
  {
    title: "Montfort School Anakkara (2019 - 2021)",
    details: ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7"],
  },
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

    // measure new dot positions
    window.requestAnimationFrame(() => {
      const items = Array.from(
        measureRef.current.querySelectorAll(".timeline-item")
      );
      setDotTops(items.map((el) => el.offsetTop + 2));
    });

    // swap content after fade-out
    setTimeout(() => {
      setDisplayTab(newTab);
      setFading(false);
    }, FADE_OUT);
  };

  const listForMeasure = tab === "education" ? education : certificates;
  const listForDisplay = displayTab === "education" ? education : certificates;

  const axisX    = tab === "education" ? "16px" : "calc(100% - 16px)";
  const txtAlign = tab === "education" ? "left"   : "right";
  const padLeft  = tab === "education" ? "32px"   : "0";
  const padRight = tab === "education" ? "0"      : "32px";

  // marquee logic
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isMarquee = width <= 890;
  const techItems = isMarquee ? [...techStack, ...techStack] : techStack;

  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMarquee) return;
    const SPEED = 0.1;
    let pos = 0, frame;
    function step() {

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

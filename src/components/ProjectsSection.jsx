// src/components/ProjectsSection.jsx
import React, { useState } from "react";
import "./ProjectsSection.css";

// local imports so webpack bundles them
import AIPocketTutorImg from "../assets/projects/AI_Pocket_Tutor.png";
import Dion from "../assets/projects/Dion.png";
import ASCII from "../assets/projects/ASCII.png";
import ASCII_GIF from "../assets/projects/ASCII.gif";
import Events from "../assets/projects/Events1.png";
import ParcelDepot from "../assets/projects/ParcelDepot.png";
import OldProtfolio from "../assets/projects/OldProtfolio.png";

const projects = [
  {
    title: "AI Pocket Tutor",
    imageSrc: AIPocketTutorImg,
    video: "https://youtu.be/RQLYF5g8T2U",
    description:
      "An AI tutor that transforms study materials into interactive lessons, answers queries, and generates quizzes. Implements RAG system, Agentric system",
    link: "https://github.com/Abhijith834/AI-Pocket-Tutor.git",
    viewLive: "https://www.tutorbot.online/",
  },
  {
    title: "Parcel Depot",
    imageSrc: ParcelDepot,
    video: "https://youtu.be/mHfeqaT6ZGY",
    description: "A Java program that simulates a Parcel Depot Company. This project demostrated the view from both the customers and workers",
    link: "https://github.com/Abhijith834/Parcel-Depot.git",
    viewLive: "",
  },
  {
    title: "Venzini Fanatic",
    imageSrc: Events,
    video: "https://youtu.be/PNdJRojRJ-I",
    description: "This is a webiste prototype made in figma.",
    link: "https://www.figma.com/design/ot3MHxRX2t6Ovs5dSPKKj7/Venzini-Fanatic-2?node-id=0-1&t=y58HOw7iqihKVum9-1",
    viewLive: "https://www.figma.com/proto/ot3MHxRX2t6Ovs5dSPKKj7/Venzini-Fanatic-2?node-id=73-707&p=f&t=DRX0vlCdiCHbsrnV-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=73%3A707",
  },
  {
    title: "Dion",
    imageSrc: Dion,
    video: "https://youtu.be/LVxSINacA9Q",
    description:
      "A front page created to showcase a CRM website. This is a mini project done in React.",
    link: "https://github.com/Abhijith834/Dion.git",
    viewLive: "https://abhijith834.github.io/Dion/",
  },
  {
    title: "ASCII Video",
    imageSrc: ASCII,
    video: ASCII_GIF,
    description:
      "A simple python program that converts live camera feed to ASCII art video. Uses python-opencv, numpy and pillow",
    link: "https://github.com/Abhijith834/ASCII-video.git",
    viewLive: "",
  },
  {
    title: "My first portfolio",
    imageSrc: OldProtfolio,
    video: "https://youtu.be/j4-JcvcIRGs",
    description: "This is my first portfolio made with bastic HTML, CSS and JavaScript",
    link: "https://github.com/Abhijith834/Abhijith834.github.io.git",
    viewLive: "https://abhijith834.github.io/",
  },
];

/**
 * Determine whether `url` is YouTube or a GIF.
 * Returns an object with `{ type, id?, src? }`:
 *  - type 'youtube' → id = the videoId
 *  - type 'gif'     → src = the gif path
 *  - type 'none'    → no video/gif
 */
function getMediaSource(url) {
  if (!url) return { type: "none" };

  // YouTube detection
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/
  );
  if (match?.[1]) {
    return { type: "youtube", id: match[1] };
  }

  // GIF detection (local or remote)
  if (url.toLowerCase().endsWith(".gif")) {
    return { type: "gif", src: url };
  }

  return { type: "none" };
}

const ProjectsSection = () => {
  // keep track of which card (by index) is “playing” right now
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section id="projects" className="projects-wrapper">
      <h3 className="projects-title">PROJECTS</h3>
      <div
        className="projects-grid"
        onMouseLeave={() => setPlayingIndex(null)}
      >
        {projects.map((proj, idx) => {
          const media = getMediaSource(proj.video);
          const isPlaying = idx === playingIndex;

          return (
            <div key={idx} className="project-card">
              {/* 1. Title */}
              <h4 className="project-name">{proj.title}</h4>

              {/* 2. Media */}
              <div
                className="project-media"
                onMouseEnter={() =>
                  media.type !== "none" && setPlayingIndex(idx)
                }
              >
                {media.type === "youtube" && isPlaying ? (
                <iframe
                  className="project-video"
                  src={`https://www.youtube-nocookie.com/embed/${media.id}?autoplay=1&controls=0&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={proj.title}
                />
                ) : media.type === "gif" && isPlaying ? (
                  <img
                    className="project-video"
                    src={media.src}
                    alt={proj.title}
                  />
                ) : (
                  <img
                    className="project-image"
                    src={proj.imageSrc}
                    alt={proj.title}
                    loading="lazy"
                  />
                )}
              </div>

              {/* 3. Description */}
              <p className="project-desc">{proj.description}</p>

              {/* 4. Links */}
              <a
                href={proj.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
              {proj.viewLive && (
                <a
                  href={proj.viewLive}
                  className="project-link project-live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

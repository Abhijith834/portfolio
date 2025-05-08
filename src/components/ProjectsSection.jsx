// src/components/ProjectsSection.jsx
import React, { useState } from "react";
import "./ProjectsSection.css";

// local imports so webpack bundles them
import AIPocketTutorImg from "../assets/projects/AI_Pocket_Tutor.png";
import Dion from "../assets/projects/Dion.png";
import ASCII from "../assets/projects/ASCII.png";
import ASCII_GIF from "../assets/projects/ASCII.gif";

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
    title: "Project Four",
    imageSrc: "https://via.placeholder.com/600x400",
    video: "",
    description: "A brief overview of what Project Four is about.",
    link: "https://example.com/project-four",
    viewLive: "",
  },
  {
    title: "Project Five",
    imageSrc: "https://via.placeholder.com/600x400",
    video: "",
    description: "A brief overview of what Project Five is about.",
    link: "https://example.com/project-five",
    viewLive: "",
  },
  {
    title: "Project Six",
    imageSrc: "https://via.placeholder.com/600x400",
    video: "",
    description: "A brief overview of what Project Six is about.",
    link: "https://example.com/project-six",
    viewLive: "",
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
                    src={`https://www.youtube.com/embed/${media.id}?autoplay=1&controls=0&mute=1`}
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

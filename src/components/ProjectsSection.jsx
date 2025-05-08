// src/components/ProjectsSection.jsx
import React, { useState } from "react";
import "./ProjectsSection.css";

// import your local image so webpack can bundle it
import AIPocketTutorImg from "../assets/projects/AI_Pocket_Tutor.png";
import Dion from "../assets/projects/Dion.png";

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
    description: "A front page created to showcase a CRM webiste. This is a min project done is react",
    link: "https://github.com/Abhijith834/Dion.git",
    viewLive: "https://abhijith834.github.io/Dion/",
  },
  {
    title: "Project Three",
    imageSrc: "https://via.placeholder.com/600x400",
    video: "",
    description: "A brief overview of what Project Three is about.",
    link: "https://example.com/project-three",
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

const extractYouTubeID = (url) =>
  url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/
  )?.[1] || "";

const ProjectsSection = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section id="projects" className="projects-wrapper">
      <h3 className="projects-title">PROJECTS</h3>
      <div className="projects-grid" onMouseLeave={() => setPlayingIndex(null)}>
        {projects.map((proj, idx) => {
          const videoId = extractYouTubeID(proj.video);
          const isPlaying = idx === playingIndex;

          return (
            <div key={idx} className="project-card">
              {/* 1. Title */}
              <h4 className="project-name">{proj.title}</h4>

              {/* 2. Media (hover to autoplay) */}
              <div
                className="project-media"
                onMouseEnter={() => videoId && setPlayingIndex(idx)}
              >
                {videoId && isPlaying ? (
                  <iframe
                    className="project-video"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={proj.title}
                  />
                ) : (
                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    className="project-image"
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

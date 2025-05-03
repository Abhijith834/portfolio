import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Project One',
    imageSrc: 'https://via.placeholder.com/600x400',
    description: 'A brief overview of what Project One is about.',
    link: 'https://example.com/project-one'
  },
  {
    title: 'Project Two',
    imageSrc: 'https://via.placeholder.com/600x400',
    description: 'A brief overview of what Project Two is about.',
    link: 'https://example.com/project-two'
  },
  {
    title: 'Project Three',
    imageSrc: 'https://via.placeholder.com/600x400',
    description: 'A brief overview of what Project Three is about.',
    link: 'https://example.com/project-three'
  },
  {
    title: 'Project Four',
    imageSrc: 'https://via.placeholder.com/600x400',
    description: 'A brief overview of what Project Four is about.',
    link: 'https://example.com/project-four'
  },
  {
    title: 'Project Five',
    imageSrc: 'https://via.placeholder.com/600x400',
    description: 'A brief overview of what Project Five is about.',
    link: 'https://example.com/project-five'
  },
  {
    title: 'Project Six',
    imageSrc: 'https://via.placeholder.com/600x400',
    description: 'A brief overview of what Project Six is about.',
    link: 'https://example.com/project-six'
  }
];

const ProjectsSection = () => (
  <section id="projects" className="projects-wrapper">
    <h3 className="projects-title">PROJECTS</h3>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div key={idx} className="project-card">
          {/* 1. Title */}
          <h4 className="project-name">{proj.title}</h4>

          {/* 2. Image */}
          <div className="project-image">
            <img src={proj.imageSrc} alt={proj.title} loading="lazy"/>
          </div>

          {/* 3. Description */}
          <p className="project-desc">{proj.description}</p>

          {/* 4. Link */}
          <a
            href={proj.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;

import React from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">ผลงานโปรเจกต์</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.number}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <span className="project-number">{project.number}</span>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-period">
                <i
                  className="fa-regular fa-calendar"
                  style={{ marginRight: '4px' }}
                />
                {project.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

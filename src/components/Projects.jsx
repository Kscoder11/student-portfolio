import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="skills">
      <h2 className="skills-title">Pinned <span className="gradient-text">Projects</span></h2>
      <div className="skills-grid">
        {projects.map((project, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{project.name}</h3>
            <p className="about-description" style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
              {project.description}
            </p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

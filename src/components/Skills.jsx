import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My <span className="gradient-text">Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

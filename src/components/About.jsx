import React from 'react';

const About = ({ name, title, description }) => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1 className="about-title">
          Hi, I'm <span className="gradient-text">{name}</span>
        </h1>
        <h2 className="about-subtitle">{title}</h2>
        <p className="about-description">{description}</p>
        <a href="#contact" className="btn">Let's Connect</a>
      </div>
      <div className="about-graphic">
        <div style={{
          width: '300px', height: '300px', borderRadius: '50%', 
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.2))',
          boxShadow: '0 0 50px rgba(56, 189, 248, 0.4)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}></div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Header = ({ name, title }) => {
  return (
    <header className="header">
      <div className="logo">
        <span className="gradient-text">{name}.</span>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ name, title }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="gradient-text">{name}.</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end style={({isActive}) => ({ color: isActive ? 'var(--accent-color)' : '' })}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" style={({isActive}) => ({ color: isActive ? 'var(--accent-color)' : '' })}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={({isActive}) => ({ color: isActive ? 'var(--accent-color)' : '' })}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({isActive}) => ({ color: isActive ? 'var(--accent-color)' : '' })}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

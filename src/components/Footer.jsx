import React from 'react';

const Footer = ({ name, socials }) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-socials">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.platform}>
            {social.platform}
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

import React from 'react';

interface NavbarProps {
  musicOn: boolean;
  toggleMusic: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ musicOn, toggleMusic }) => {
  return (
    <nav>
      <div className="nav-logo">Chin<em>mayi</em> Bhise</div>
      <ul className="nav-links">
        <li><a href="#about-s">About</a></li>
        <li><a href="#skills-s">Skills</a></li>
        <li><a href="#proj-s">Projects</a></li>
        <li><a href="#exp-s">Experience</a></li>
        <li><a href="#certs-s">Certifications</a></li>
        <li><a href="#contact-s">Contact</a></li>
      </ul>
      <button className="nav-music" id="music-btn" onClick={toggleMusic}>
        {musicOn ? '■ STOP BGM' : '♪ 8-BIT BGM'}
      </button>
    </nav>
  );
};

export default Navbar;

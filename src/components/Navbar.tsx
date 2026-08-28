import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <a href="#hero-s" className="nav-logo" onClick={closeMobileMenu}>
          CHIN<em>MAYI</em> BHISE
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#about-s">About</a></li>
          <li><a href="#domains-s">Domains</a></li>
          <li><a href="#skills-s">Skills</a></li>
          <li><a href="#proj-s">Projects</a></li>
          <li><a href="#exp-s">Experience</a></li>
          <li><a href="#certs-s">Certs</a></li>
          <li><a href="#edu-s">Education</a></li>
          <li><a href="#contact-s">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact-s" className="nav-cta-btn">
            Connect ⚡
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`nav-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mnd-header">
          <span className="mnd-title">⚔️ NAVIGATION</span>
          <button type="button" className="mnd-close" onClick={closeMobileMenu}>✕</button>
        </div>
        <ul className="mnd-links">
          <li><a href="#about-s" onClick={closeMobileMenu}>📜 About & Dossier</a></li>
          <li><a href="#domains-s" onClick={closeMobileMenu}>🛡️ Security Domains (SOC/VAPT/DFIR)</a></li>
          <li><a href="#skills-s" onClick={closeMobileMenu}>⚔️ Skills & Arsenal</a></li>
          <li><a href="#proj-s" onClick={closeMobileMenu}>🗺️ Projects (8)</a></li>
          <li><a href="#exp-s" onClick={closeMobileMenu}>🏛️ Experience & Internships</a></li>
          <li><a href="#certs-s" onClick={closeMobileMenu}>🏅 Certifications & Badges</a></li>
          <li><a href="#edu-s" onClick={closeMobileMenu}>🎓 Academic Foundation (NFSU)</a></li>
          <li><a href="#contact-s" onClick={closeMobileMenu}>📡 Get In Touch</a></li>
        </ul>
        <div className="mnd-footer">
          <a href="mailto:chinmayibhise2004@gmail.com" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Direct Email ✉️
          </a>
        </div>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div className="mnd-backdrop" onClick={closeMobileMenu} />
      )}
    </>
  );
};

export default Navbar;

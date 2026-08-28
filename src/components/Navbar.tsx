import React, { useState, useEffect } from 'react';

interface NavbarProps {
  scrollStage?: string;
  scrollProgress?: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollStage = 'Setting Sail', scrollProgress = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <div className="nav-brand-wrap">
          <a href="#hero-s" className="nav-logo" onClick={closeMobileMenu}>
            CHIN<em>MAYI</em> BHISE
          </a>
          
          {/* Integrated Grand Line Log Pose (Never overlaps buttons) */}
          {scrollProgress > 2 && (
            <div className="nav-log-pose-badge">
              <span className="nlp-icon">🧭</span>
              <span className="nlp-text">{scrollStage} · {scrollProgress}%</span>
            </div>
          )}
        </div>

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
          <a
            href="https://github.com/chinmayiM-bhise"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github-btn"
            title="GitHub Profile"
          >
            🐙 GitHub
          </a>
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

        {scrollProgress > 0 && (
          <div className="mnd-log-pose">
            <span>🧭 GRAND LINE LOG POSE:</span>
            <strong>{scrollStage} ({scrollProgress}%)</strong>
          </div>
        )}

        <ul className="mnd-links">
          <li><a href="#about-s" onClick={closeMobileMenu}>📜 About & Dossier</a></li>
          <li><a href="#domains-s" onClick={closeMobileMenu}>🛡️ Security Domains (SOC/VAPT/DFIR)</a></li>
          <li><a href="#skills-s" onClick={closeMobileMenu}>⚔️ Skills & Arsenal</a></li>
          <li><a href="#proj-s" onClick={closeMobileMenu}>🗺️ Projects (8)</a></li>
          <li><a href="#exp-s" onClick={closeMobileMenu}>🏛️ Experience & Internships</a></li>
          <li><a href="#certs-s" onClick={closeMobileMenu}>🏅 Certifications & Badges (12+)</a></li>
          <li><a href="#edu-s" onClick={closeMobileMenu}>🎓 Academic Foundation (NFSU)</a></li>
          <li><a href="#inv-s" onClick={closeMobileMenu}>🤝 Extracurricular & AWS</a></li>
          <li><a href="#contact-s" onClick={closeMobileMenu}>📡 Get In Touch</a></li>
        </ul>
        <div className="mnd-footer">
          <a
            href="https://github.com/chinmayiM-bhise"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '8px' }}
          >
            GitHub Profile 🐙
          </a>
          <a
            href="mailto:chinmayibhise2004@gmail.com"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
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

import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-name">⚔️ CHINMAYI BHISE ⚔️</div>
            <p className="footer-tagline">
              Cybersecurity Engineer · SOC & Threat Hunting · VAPT & AppSec · Malware RE · IoT/OT Security · DFIR
            </p>
          </div>

          <div className="footer-links-group">
            <a href="#about-s">About</a>
            <a href="#domains-s">Domains</a>
            <a href="#skills-s">Skills</a>
            <a href="#proj-s">Projects</a>
            <a href="#exp-s">Experience</a>
            <a href="#certs-s">Certifications</a>
            <a href="https://github.com/chinmayiM-bhise" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/chinmayi-bhise" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="#contact-s">Contact</a>
          </div>

          <button type="button" className="footer-back-top" onClick={scrollToTop}>
            ▲ Back to Top
          </button>
        </div>

        <div className="footer-bottom">
          <div className="footer-sub">
            National Forensic Sciences University (NFSU) · Maharashtra / Gujarat, India · <em>"Nothing happened."</em>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Chinmayi Bhise. Handcrafted with React & Three-Sword Cyber Discipline.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

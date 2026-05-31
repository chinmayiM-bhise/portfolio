import React, { useState, useEffect } from 'react';
import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const lines = [
  'Finding Artifacts. Following Evidence. 🔎',
  'Turning Logs into Stories 📜',
  'Clouds Secure. Threats Detected. ☁️',
  'Hunting Bugs Before They Hunt You 🐞',
  'Top 3% on TryHackMe 🏆',
  'Nothing happened. And that is the goal. 🛡️',
  ];

  useEffect(() => {
    const currentLine = lines[lineIndex];
    const typeSpeed = isDeleting ? 35 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex >= currentLine.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 2200); // Pause at end
        }
      } else {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex <= 0) {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    }, charIndex >= currentLine.length && !isDeleting ? 2200 : typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex, lines]);

  return (
    <section id="hero-s" style={{ position: 'relative', zIndex: 2 }}>
      <div id="hero">
        <div className="hero-left">
          <div className="wanted-wrap">
            <div className="wanted-glow"></div>
            <div className="tape tl"></div>
            <div className="tape tr"></div>
            <div className="wanted-poster">
              <div className="wp-swords">🗡️⚔️🗡️</div>
              <div className="wp-header">WANTED</div>
              <div className="wp-img">
                <img src={heroImg} alt="Chinmayi Bhise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="wp-name">CHINMAYI BHISE</div>
              <div className="wp-title">The Cyber Navigator</div>
              <div className="wp-bounty-lbl">Bounty</div>
              <div className="wp-bounty">₿ 878,000,000</div>
              <div className="wp-stamp">ALIVE</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-tag">Cybersecurity Engineer</div>
          <h1 className="hero-name">Building Shields.<br /><span>Breaking Barriers.</span></h1>
          <div className="hero-typing" id="hero-typ">
            {displayText}<span className="cursor-t"></span>
          </div>
          <p className="hero-bio">
            Integrated B.Tech + M.Tech student at <strong>National Forensic Sciences University</strong>, specializing in Cybersecurity. I work across digital forensics, cloud security, and vulnerability research — finding problems before the bad guys do.
          </p>
          <div className="hero-chips">
            <span className="chip">Digital Forensics</span>
            <span className="chip">Cloud Security</span>
            <span className="chip">Penetration Testing</span>
            <span className="chip">Top 3% TryHackMe</span>
          </div>
          <div className="hero-btns">
            <a href="#proj-s" className="btn btn-primary">View Projects ↗</a>
            <a href="#contact-s" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

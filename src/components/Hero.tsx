import React, { useState, useEffect, useRef } from 'react';
import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [posterMode, setPosterMode] = useState<'bounty' | 'tactical'>('bounty');
  const cardRef = useRef<HTMLDivElement>(null);

  const lines = [
    'SOC & SIEM Telemetry: Threats Detected, Neutralized. 🛡️',
    'VAPT & AppSec: Finding Zero-Days Before Adversaries Do. ⚔️',
    'Malware Analysis: Reverse Engineering Obfuscated Payloads. 🦠',
    'IoT & OT/ICS Security: Defending Smart Firmware & SCADA PLCs. 📡',
    'Digital Forensics: Chain of Custody & Judicial Artifact Triage. 🔬',
    'CNSP & CAP Certified: Network Defense & Application Hardening. 🌐',
    'Nothing happened. And that is the absolute goal. 🗡️',
  ];

  useEffect(() => {
    const currentLine = lines[lineIndex];
    const typeSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex >= currentLine.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex <= 0) {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    }, charIndex >= currentLine.length && !isDeleting ? 2400 : typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex]);

  // 3D Card Hover Perspective Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="hero-s" style={{ position: 'relative', zIndex: 2 }}>
      <div id="hero">
        <div className="hero-left">
          <div
            className="wanted-wrap"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.15s ease-out' }}
          >
            <div className="wanted-glow"></div>
            <div className="tape tl"></div>
            <div className="tape tr"></div>

            {posterMode === 'bounty' ? (
              <div className="wanted-poster anime-bounty-card">
                <div className="wp-swords">🗡️⚔️🗡️</div>
                <div className="wp-header">WANTED</div>
                <div className="wp-doa">DEAD OR ALIVE</div>
                <div className="wp-img">
                  <img
                    src={heroImg}
                    alt="Chinmayi Bhise"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="wp-img-overlay"></div>
                </div>
                <div className="wp-name">CHINMAYI BHISE</div>
                <div className="wp-title">THE CYBER NAVIGATOR</div>
                
                <div className="wp-bounty-container">
                  <div className="wp-bounty-symbol">฿</div>
                  <div className="wp-bounty">3,000,000,000-</div>
                </div>
                <div className="wp-bounty-clarity">
                  REWARD: 3 BILLION BERRIES (ONE PIECE LORE 🏴‍☠️)
                </div>

                <div className="wp-marine-footer">
                  <span>MARINE HQ</span>
                  <span>SPECIAL CYBER DIVISION</span>
                </div>
                <div className="wp-stamp">RECRUIT ALIVE</div>
              </div>
            ) : (
              <div className="tactical-id-card">
                <div className="tic-header">
                  <span className="tic-live-dot"></span>
                  <span>CYBER DEFENSE INTELLIGENCE · ID-PASS</span>
                </div>
                <div className="tic-img-wrap">
                  <img
                    src={heroImg}
                    alt="Chinmayi Bhise"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="tic-scanline"></div>
                </div>
                <div className="tic-name">CHINMAYI BHISE</div>
                <div className="tic-rank">CLEARANCE: LEVEL 5 (TOP SECRET)</div>
                <div className="tic-details">
                  <div className="tic-row">
                    <span className="tic-lbl">DOMAINS:</span>
                    <span className="tic-val">SOC · VAPT · MALWARE · IOT · OT</span>
                  </div>
                  <div className="tic-row">
                    <span className="tic-lbl">INSTITUTE:</span>
                    <span className="tic-val">NFSU (National Forensic Sciences Univ.)</span>
                  </div>
                  <div className="tic-row">
                    <span className="tic-lbl">CREDENTIALS:</span>
                    <span className="tic-val">CAP · CNSP · FORTINET NSE</span>
                  </div>
                  <div className="tic-row">
                    <span className="tic-lbl">STATUS:</span>
                    <span className="tic-val highlight">ACTIVE & DEPLOYABLE ✓</span>
                  </div>
                </div>
                <div className="tic-barcodes">
                  <div className="tic-bars"></div>
                  <span className="tic-code">NFSU-SEC-2026-CB</span>
                </div>
              </div>
            )}

            {/* Poster Mode Switcher */}
            <div className="poster-mode-switcher">
              <button
                type="button"
                className={`pms-btn ${posterMode === 'bounty' ? 'active' : ''}`}
                onClick={() => setPosterMode('bounty')}
              >
                🏴‍☠️ Luffy Bounty (3B ฿)
              </button>
              <button
                type="button"
                className={`pms-btn ${posterMode === 'tactical' ? 'active' : ''}`}
                onClick={() => setPosterMode('tactical')}
              >
                🛡️ Tactical Cyber ID
              </button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-tag">
            <span className="hero-tag-icon">⚡</span>
            <span>CYBERSECURITY ENGINEER · OFFENSIVE & DEFENSIVE</span>
          </div>

          <h1 className="hero-name">
            Building Shields.<br />
            <span>Breaking Adversaries.</span>
          </h1>

          <div className="hero-typing" id="hero-typ">
            {displayText}
            <span className="cursor-t"></span>
          </div>

          <p className="hero-bio">
            Integrated B.Tech + M.Tech Cybersecurity student at <strong>National Forensic Sciences University (NFSU)</strong>. Specializing in <strong>SOC operations, VAPT, malware reverse engineering, IoT/OT-ICS security</strong>, and <strong>digital forensics</strong>. Proven experience with Uttar Pradesh Police digital forensics casework and accredited with CAP, CNSP, and Fortinet certifications.
          </p>

          <div className="hero-chips">
            <span className="chip highlight">🛡️ SOC & Threat Hunting</span>
            <span className="chip highlight">⚔️ VAPT & AppSec</span>
            <span className="chip highlight">🦠 Malware Analysis</span>
            <span className="chip highlight">📡 IoT & Firmware</span>
            <span className="chip highlight">🏭 OT / SCADA Defense</span>
            <span className="chip highlight">🔬 Digital Forensics (DFIR)</span>
            <span className="chip">📜 CAP & CNSP Certified</span>
            <span className="chip">🎓 8.82 CGPA @ NFSU</span>
          </div>

          <div className="hero-btns">
            <a href="#domains-s" className="btn btn-primary">
              Explore Battle Stations ⚡
            </a>
            <a
              href="https://github.com/chinmayiM-bhise"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub 🐙
            </a>
            <a href="#proj-s" className="btn btn-outline">
              Projects (8) ↗
            </a>
            <a href="#contact-s" className="btn btn-outline">
              Contact 📡
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

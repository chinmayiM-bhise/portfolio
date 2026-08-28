import React from 'react';

const About: React.FC = () => {
  return (
    <section className="sec" id="about-s">
      <div className="sec-eyebrow">Dossier & Philosophy</div>
      <div className="sec-h">About Me</div>
      <div className="sec-rule"></div>
      
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a <strong>Cybersecurity Engineer & Researcher</strong> pursuing an Integrated B.Tech + M.Tech in Computer Science & Engineering (Specialization: Cybersecurity) at <strong>National Forensic Sciences University (NFSU)</strong>, maintaining an <strong>8.82 CGPA</strong>.
          </p>
          <p>
            My engineering mindset bridges <strong>offensive exploitation and rigorous defensive engineering</strong>. Inspired by Zoro's Three-Sword Style, I treat security as a tripartite discipline:
          </p>

          <div className="about-three-swords">
            <div className="sword-pillar">
              <span className="sp-icon">⚔️</span>
              <div>
                <strong>Offensive Prowess (VAPT & RE)</strong>
                <p>Proactively uncovering zero-day vulnerabilities, dissecting malware, and testing API/Web surfaces before attackers strike.</p>
              </div>
            </div>
            <div className="sword-pillar">
              <span className="sp-icon">🛡️</span>
              <div>
                <strong>Defensive Resilience (SOC & OT/ICS)</strong>
                <p>Deploying automated serverless threat hunting, tuning SIEM detection rules, and isolating critical SCADA infrastructure.</p>
              </div>
            </div>
            <div className="sword-pillar">
              <span className="sp-icon">🔬</span>
              <div>
                <strong>Forensic Integrity (DFIR & Evidence)</strong>
                <p>Grounded in real police casework at UP Police — preserving strict chain-of-custody and reconstructing breach timelines.</p>
              </div>
            </div>
          </div>

          <div className="about-quote">
            <p>"Nothing happened." — The ultimate testament of a world-class cybersecurity defense. Stay vigilant, stay silent, stay unbreakable.</p>
            <cite>— Roronoa Zoro's Philosophy applied to Cyber Defense ⚔️</cite>
          </div>
        </div>

        <div className="about-stats-container">
          <div className="stat-row">
            <div className="stat-cell">
              <span className="stat-n">8.82</span>
              <span className="stat-l">Academic CGPA (NFSU)</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">Top 3%</span>
              <span className="stat-l">TryHackMe Global</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">8+</span>
              <span className="stat-l">Security Projects</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">9</span>
              <span className="stat-l">Verified Certifications</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">6</span>
              <span className="stat-l">Core Cyber Domains</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">100+</span>
              <span className="stat-l">CTF Labs Solved</span>
            </div>
          </div>

          <div className="about-badges-callout">
            <div className="abc-title">⚡ Operational Readiness:</div>
            <div className="abc-tags">
              <span className="tag">✓ UP Police Forensics Alum</span>
              <span className="tag">✓ Certified AppSec (CAP)</span>
              <span className="tag">✓ Google Cybersecurity Spec</span>
              <span className="tag">✓ Security Blue Team Hunter</span>
              <span className="tag">✓ AWS Cloud Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

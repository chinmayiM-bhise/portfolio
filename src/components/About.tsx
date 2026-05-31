import React from 'react';

const About: React.FC = () => {
  return (
    <div className="sec" id="about-s">
      <div className="sec-eyebrow">Profile</div>
      <div className="sec-h">About Me</div>
      <div className="sec-rule"></div>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a <strong>cybersecurity student and researcher</strong> at National Forensic Sciences University, pursuing an Integrated B.Tech + M.Tech in Computer Science with a specialization in Cybersecurity.</p>
          <p>My work spans <strong>digital forensics</strong> (Windows artifacts, firmware analysis), <strong>cloud security</strong> (AWS-based intrusion detection), and <strong>cryptography</strong> (RSA implementations and MITM simulations).</p>
          <p>I interned with the <strong>Uttar Pradesh Police</strong>, handling real digital evidence — an experience that grounded my skills in real-world stakes and responsibility.</p>
          <div className="about-quote">
            <p>"Nothing happened." — the goal of every good security engineer. Stay ready, stay silent, stay strong.</p>
            <cite>— Inspired by Zoro's philosophy ⚔️</cite>
          </div>
        </div>
        <div>
          <div className="stat-row">
            <div className="stat-cell"><span className="stat-n">8.78</span><span className="stat-l">CGPA</span></div>
            <div className="stat-cell"><span className="stat-n">Top 3%</span><span className="stat-l">TryHackMe</span></div>
            <div className="stat-cell"><span className="stat-n">4+</span><span className="stat-l">Projects</span></div>
            <div className="stat-cell"><span className="stat-n">4</span><span className="stat-l">Certifications</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

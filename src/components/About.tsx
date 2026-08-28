import React, { useEffect, useState, useRef } from 'react';

const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stats, setStats] = useState({ cgpa: 0, certs: 0, projects: 0, internships: 0, domains: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1500;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setStats({
              cgpa: parseFloat((easeOut * 8.82).toFixed(2)),
              certs: Math.floor(easeOut * 12),
              projects: Math.floor(easeOut * 8),
              internships: Math.floor(easeOut * 4),
              domains: Math.floor(easeOut * 6),
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setStats({ cgpa: 8.82, certs: 12, projects: 8, internships: 4, domains: 6 });
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="sec" id="about-s" ref={sectionRef}>
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
                <p>Proactively uncovering zero-day vulnerabilities, reverse engineering malware, and auditing web/API attack surfaces before adversaries strike.</p>
              </div>
            </div>
            <div className="sword-pillar">
              <span className="sp-icon">🛡️</span>
              <div>
                <strong>Defensive Resilience (SOC & OT/ICS)</strong>
                <p>Deploying automated serverless threat hunting, tuning SIEM detection rules, and isolating critical SCADA/Modbus infrastructure.</p>
              </div>
            </div>
            <div className="sword-pillar">
              <span className="sp-icon">🔬</span>
              <div>
                <strong>Forensic Integrity (DFIR & Evidence)</strong>
                <p>Grounded in real police casework at Uttar Pradesh Police — preserving strict chain-of-custody and reconstructing breach timelines.</p>
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
              <span className="stat-n">{stats.cgpa.toFixed(2)}</span>
              <span className="stat-l">Academic CGPA (NFSU)</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">{stats.certs}+</span>
              <span className="stat-l">Industry Certifications</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">{stats.internships}</span>
              <span className="stat-l">Professional Internships</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">{stats.projects}+</span>
              <span className="stat-l">Security Deployments</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">{stats.domains}</span>
              <span className="stat-l">Core Cyber Battle Stations</span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">Top 3%</span>
              <span className="stat-l">Global Cyber Practitioner</span>
            </div>
          </div>

          <div className="about-badges-callout">
            <div className="abc-title">⚡ Verified Operational Accreditations:</div>
            <div className="abc-tags">
              <span className="tag">✓ UP Police Digital Forensics Alum</span>
              <span className="tag">✓ Certified AppSec Practitioner (CAP)</span>
              <span className="tag">✓ Certified Network Security (CNSP)</span>
              <span className="tag">✓ Fortinet Network Security Expert (NSE)</span>
              <span className="tag">✓ Google Cybersecurity Specialist</span>
              <span className="tag">✓ Security Blue Team Threat Hunter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

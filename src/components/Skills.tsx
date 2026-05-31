import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.xp-fill') as NodeListOf<HTMLElement>;
          fills.forEach((fill) => {
            const width = fill.getAttribute('data-w');
            if (width) fill.style.width = `${width}%`;
          });
        }
      });
    }, { threshold: 0.25 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sec" id="skills-s" ref={skillsRef}>
      <div className="sec-eyebrow">Capabilities</div>
      <div className="sec-h">Skills & Tools</div>
      <div className="sec-rule"></div>
      <div className="skills-grid">
        <div className="skill-block">
          <span className="sb-icon">🔐</span>
          <div className="sb-title">Security & Forensics</div>
          <div className="xp-item"><div className="xp-label"><span>Burp Suite</span><span>90%</span></div><div className="xp-track"><div className="xp-fill" data-w="90"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Wireshark</span><span>85%</span></div><div className="xp-track"><div className="xp-fill" data-w="85"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Autopsy</span><span>88%</span></div><div className="xp-track"><div className="xp-fill" data-w="88"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Metasploit</span><span>80%</span></div><div className="xp-track"><div className="xp-fill" data-w="80"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Nmap / Splunk</span><span>83%</span></div><div className="xp-track"><div className="xp-fill" data-w="83"></div></div></div>
        </div>
        <div className="skill-block">
          <span className="sb-icon">💻</span>
          <div className="sb-title">Programming</div>
          <div className="xp-item"><div className="xp-label"><span>Python</span><span>92%</span></div><div className="xp-track"><div className="xp-fill si" data-w="92"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Java</span><span>80%</span></div><div className="xp-track"><div className="xp-fill si" data-w="80"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>JavaScript</span><span>72%</span></div><div className="xp-track"><div className="xp-fill si" data-w="72"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Bash / Linux</span><span>85%</span></div><div className="xp-track"><div className="xp-fill si" data-w="85"></div></div></div>
        </div>
        <div className="skill-block">
          <span className="sb-icon">☁️</span>
          <div className="sb-title">Cloud & DevOps</div>
          <div className="xp-item"><div className="xp-label"><span>AWS Lambda</span><span>78%</span></div><div className="xp-track"><div className="xp-fill go" data-w="78"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>CloudWatch</span><span>75%</span></div><div className="xp-track"><div className="xp-fill go" data-w="75"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>EC2 / SNS</span><span>72%</span></div><div className="xp-track"><div className="xp-fill go" data-w="72"></div></div></div>
        </div>
        <div className="skill-block">
          <span className="sb-icon">🔬</span>
          <div className="sb-title">Forensics Tools</div>
          <div className="xp-item"><div className="xp-label"><span>Binwalk</span><span>88%</span></div><div className="xp-track"><div className="xp-fill re" data-w="88"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>MobSF</span><span>80%</span></div><div className="xp-track"><div className="xp-fill re" data-w="80"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>SQLite / MySQL</span><span>83%</span></div><div className="xp-track"><div className="xp-fill re" data-w="83"></div></div></div>
          <div className="xp-item"><div className="xp-label"><span>Win. Registry</span><span>87%</span></div><div className="xp-track"><div className="xp-fill re" data-w="87"></div></div></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

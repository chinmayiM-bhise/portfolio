import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    { ico: '🛡️', name: 'Certified AppSec Practitioner (CAP)', org: 'Application Security & Product Reliability' },
    { ico: '🔍', name: 'Google Cybersecurity Certificate', org: 'Cybersecurity & Data-Driven Insights' },
    { ico: '🎯', name: 'Threat Hunting — Security Blue Team', org: 'Proactive Threat Detection & Analysis' },
    { ico: '☁️', name: 'AWS Semester 1 Badge', org: 'Cloud Computing & Scalable Solutions' },
    { ico: '🧠', name: 'Threat Intelligence Analyst', org: 'arcX • Cyber Threat Intelligence' },
    { ico: '🏆', name: 'Career Essentials in Cybersecurity', org: 'Microsoft & LinkedIn' },
    { ico: '💉', name: 'SQL Injection Attacks', org: 'EC-Council • Web Application Security' },
    
  ];

  return (
    <div className="sec" id="certs-s">
      <div className="sec-eyebrow">Credentials</div>
      <div className="sec-h">Certifications</div>
      <div className="sec-rule"></div>
      <div className="certs-grid">
        {certs.map((c, i) => (
          <div className="cert-block" key={i}>
            <div className="cert-ico">{c.ico}</div>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

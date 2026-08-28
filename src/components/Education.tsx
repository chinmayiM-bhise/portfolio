import React from 'react';

const Education: React.FC = () => {
  const courses = [
    'Digital Forensics & Incident Response (DFIR)',
    'Malware Analysis & Reverse Engineering',
    'SCADA & Industrial Control Systems (ICS) Security',
    'Vulnerability Assessment & Penetration Testing (VAPT)',
    'SOC Architecture & SIEM Telemetry',
    'Cloud Security & Virtualization',
    'Cryptography & Network Security',
    'Embedded Systems & IoT Security',
    'Cyber Law, Ethics & Chain of Custody'
  ];

  return (
    <section className="sec" id="edu-s">
      <div className="sec-eyebrow">Academic Foundation</div>
      <div className="sec-h">Education & Institution</div>
      <div className="sec-rule"></div>

      <div className="edu-block">
        <div className="edu-emblem-wrap">
          <div className="edu-emblem">🏛️</div>
          <span className="edu-status-pill">INI Status</span>
        </div>

        <div className="edu-content">
          <div className="edu-header-row">
            <div>
              <h3 className="edu-school">National Forensic Sciences University</h3>
              <div className="edu-sub-inst">An Institution of National Importance under the Ministry of Home Affairs, Government of India</div>
            </div>
            <div className="edu-cgpa-box">
              <span className="edu-cgpa-val">8.82</span>
              <span className="edu-cgpa-lbl">CGPA / 10.0</span>
            </div>
          </div>

          <div className="edu-deg">
            <strong>Integrated B.Tech + M.Tech</strong> in Computer Science & Engineering (Specialization: <strong>Cybersecurity</strong>)
          </div>

          <div className="edu-meta">
            <span>📅 2022 – 2027 (5-Year Integrated Program)</span>
            <span>📍 Maharashtra / Gujarat, India</span>
            <span>🎯 Focus: Offensive & Defensive Cyber Operations</span>
          </div>

          <div className="edu-coursework">
            <div className="edu-coursework-title">Key Specialized Coursework & Laboratory Mastery:</div>
            <div className="edu-coursework-grid">
              {courses.map((c, i) => (
                <div className="edu-course-item" key={i}>
                  <span className="eci-bullet">✓</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

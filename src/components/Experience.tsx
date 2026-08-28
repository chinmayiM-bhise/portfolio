import React from 'react';

interface ExperienceItem {
  period: string;
  badge: string;
  role: string;
  organization: string;
  location: string;
  domain: string;
  points: string[];
  skills: string[];
  impact: string;
}

const experiences: ExperienceItem[] = [
  {
    period: 'July 2025',
    badge: 'LAW ENFORCEMENT INTERNSHIP',
    role: 'Digital Forensics Intern',
    organization: 'Uttar Pradesh Police, Amroha',
    location: 'Amroha, Uttar Pradesh, India',
    domain: 'Digital Forensics (DFIR) & Chain of Custody',
    points: [
      'Documented, acquired, and evaluated digital evidence handling procedures adhering strictly to ISO/IEC 27037 standards to ensure unimpeachable chain-of-custody for judicial proceedings.',
      'Extracted, preserved, and indexed forensic artifacts from seized storage drives and mobile devices, identifying critical file system anomalies and access timestamps.',
      'Analyzed active police case documentation workflows to identify evidence tracking bottlenecks, accelerating evidence traceability and legal report generation.',
      'Assisted senior forensic investigators with bit-stream disk imaging (raw DD & E01), write-blocking verification, and automated hashing (MD5/SHA256) validation.'
    ],
    skills: ['Evidence Handling', 'Chain of Custody', 'FTK Imager', 'Autopsy', 'Write Blockers', 'Forensic Reporting', 'Legal Documentation'],
    impact: 'Strengthened digital evidence traceability and compliance across active investigative casework.'
  },
  {
    period: '2024 – Present',
    badge: 'ACADEMIC & LAB PRACTICE',
    role: 'Security Operations & Threat Defense Researcher',
    organization: 'NFSU Cyber Defense & Forensics Labs',
    location: 'National Forensic Sciences University, India',
    domain: 'SOC Operations, Threat Hunting & Cloud Security',
    points: [
      'Deployed and configured multi-node SIEM environments (Splunk, Wazuh) to monitor simulated enterprise networks, ingesting Windows Event Logs, Sysmon, and firewall traffic.',
      'Crafted detection rules and hunting queries mapped directly to MITRE ATT&CK techniques (brute force, credential dumping, lateral movement, persistence).',
      'Developed serverless automated response scripts using AWS Lambda and CloudWatch to isolate compromised instances and revoke high-privilege IAM credentials within seconds.',
      'Executed industrial control system (ICS/SCADA) security simulations, auditing Modbus protocol communications for unauthorized PLC register tampering.'
    ],
    skills: ['Splunk', 'Wazuh', 'SIEM Rule Tuning', 'MITRE ATT&CK', 'AWS Cloud Security', 'Snort / Suricata', 'SCADA / Modbus'],
    impact: 'Engineered automated threat detection & incident triage workflows with zero-touch containment.'
  },
  {
    period: '2023 – Present',
    badge: 'GLOBAL COMPETITIVE DEFENSE',
    role: 'Vulnerability Researcher & Offensive Security Practitioner',
    organization: 'TryHackMe & Global Security Community',
    location: 'Global Platform',
    domain: 'VAPT, Web AppSec & CTF Operations',
    points: [
      'Achieved Top 3% Global Ranking on TryHackMe through rigorous hands-on execution across hundreds of real-world machines, CTF challenges, and red/blue team paths.',
      'Conducted deep vulnerability assessments against web applications and APIs, exploiting and mitigating OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF, IDOR, Broken Authentication).',
      'Performed static and dynamic binary reverse engineering using Ghidra and x64dbg, dissecting suspicious executables and writing custom YARA detection rules.',
      'Researched cryptographic implementations, demonstrating small-modulus RSA attacks and socket-level Man-in-the-Middle (MITM) packet tampering.'
    ],
    skills: ['Top 3% TryHackMe', 'Burp Suite Pro', 'Metasploit', 'Ghidra', 'x64dbg', 'YARA', 'Network Pentesting', 'Python'],
    impact: 'Consistently ranked in the top tier of worldwide cybersecurity practitioners with 100+ labs conquered.'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="sec" id="exp-s">
      <div className="sec-eyebrow">Professional History</div>
      <div className="sec-h">Experience & Internships</div>
      <div className="sec-rule"></div>
      <p className="exp-intro">
        From law enforcement forensics casework to offensive vulnerability research and cloud-native SOC engineering — grounded in rigorous standards and real-world execution.
      </p>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-card-header">
              <div className="exp-badge-group">
                <span className="exp-period-pill">{exp.period}</span>
                <span className="exp-badge-tag">{exp.badge}</span>
              </div>
              <span className="exp-domain-pill">{exp.domain}</span>
            </div>

            <div className="exp-org-row">
              <div>
                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-org-name">{exp.organization}</div>
              </div>
              <div className="exp-location-tag">📍 {exp.location}</div>
            </div>

            <ul className="exp-list">
              {exp.points.map((pt, j) => (
                <li key={j}>
                  <span className="exp-bullet">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="exp-skills-row">
              <span className="exp-skills-lbl">Applied Stack:</span>
              <div className="exp-skills-tags">
                {exp.skills.map((skill, k) => (
                  <span className="tag" key={k}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="exp-impact-banner">
              <strong>Impact:</strong> {exp.impact}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

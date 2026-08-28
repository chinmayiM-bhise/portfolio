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
    period: '2024',
    badge: 'INDUSTRY INTERNSHIP',
    role: 'Cybersecurity Intern',
    organization: 'ShadowFox',
    location: 'Remote, India',
    domain: 'Vulnerability Assessment & Threat Analysis',
    points: [
      'Conducted web and network penetration testing against target environments, discovering input sanitization flaws and authentication bypasses.',
      'Authored detailed vulnerability assessment reports with CVSS scoring, proof-of-concept exploit steps, and actionable remediation guidelines for engineering teams.',
      'Analyzed emerging malware indicators and threat intelligence feeds to develop endpoint detection signatures.'
    ],
    skills: ['VAPT', 'Web Security', 'Burp Suite', 'Vulnerability Assessment', 'Remediation Advisory', 'Report Writing'],
    impact: 'Identified and reported critical application vulnerabilities with prioritized patching playbooks.'
  },
  {
    period: '2024',
    badge: 'INDUSTRY INTERNSHIP',
    role: 'Cybersecurity Intern',
    organization: 'TechnoHacks EduTech',
    location: 'Remote, India',
    domain: 'Network Defense & Ethical Hacking',
    points: [
      'Implemented defensive firewall rules, network packet sniffing routines, and vulnerability scanning workflows using Nmap and Wireshark.',
      'Researched attack surfaces in web protocols, demonstrating SQL injection and Cross-Site Scripting (XSS) exploit mitigations.',
      'Collaborated on security hardening checklists for Linux server infrastructure and database access controls.'
    ],
    skills: ['Network Security', 'Nmap', 'Wireshark', 'Linux Hardening', 'SQL Injection Mitigation', 'Ethical Hacking'],
    impact: 'Audited simulated network perimeters and drafted enterprise security hardening guidelines.'
  },
  {
    period: '2024 – Present',
    badge: 'ACADEMIC & LAB RESEARCH',
    role: 'Security Operations & Threat Defense Researcher',
    organization: 'NFSU Cyber Defense & Forensics Labs',
    location: 'National Forensic Sciences University, India',
    domain: 'SOC Operations, Threat Hunting & Cloud Security',
    points: [
      'Configured and monitored multi-node SIEM environments (Splunk, Wazuh) to ingest Windows Event Logs, Sysmon telemetry, and firewall traffic.',
      'Crafted detection rules and hunting queries mapped directly to MITRE ATT&CK techniques (brute force, credential dumping, lateral movement, persistence).',
      'Developed serverless automated response scripts using AWS Lambda and CloudWatch to isolate compromised instances and revoke high-privilege IAM credentials within seconds.',
      'Executed industrial control system (ICS/SCADA) security simulations, auditing Modbus protocol communications for unauthorized PLC register tampering.'
    ],
    skills: ['Splunk', 'Wazuh', 'SIEM Rule Tuning', 'MITRE ATT&CK', 'AWS Cloud Security', 'Snort / Suricata', 'SCADA / Modbus'],
    impact: 'Engineered automated threat detection & incident triage workflows with zero-touch containment.'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="sec" id="exp-s">
      <div className="sec-eyebrow">Professional History</div>
      <div className="sec-h">Experience & Internships</div>
      <div className="sec-rule"></div>
      <p className="exp-intro">
        From law enforcement digital forensics casework at UP Police to industry cybersecurity internships and NFSU threat research.
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

import React, { useState } from 'react';

interface CertificationItem {
  id: string;
  ico: string;
  name: string;
  org: string;
  category: 'vapt' | 'soc' | 'cloud' | 'dfir' | 'general';
  categoryLabel: string;
  dateOrId?: string;
  skills: string[];
  status: 'VERIFIED' | 'ACCREDITED' | 'SPECIALIZATION';
  desc: string;
}

const certList: CertificationItem[] = [
  {
    id: 'cap',
    ico: '🛡️',
    name: 'Certified AppSec Practitioner (CAP)',
    org: 'The SecOps Group',
    category: 'vapt',
    categoryLabel: 'AppSec & VAPT',
    dateOrId: 'Credential ID: CAP-SEC',
    status: 'VERIFIED',
    skills: ['OWASP Top 10', 'Web Security', 'API Pentesting', 'Remediation Architecture', 'Secure Coding'],
    desc: 'Demonstrates professional mastery in identifying, exploiting, and defending against critical vulnerabilities in web applications and APIs.'
  },
  {
    id: 'google-cyber',
    ico: '🔍',
    name: 'Google Cybersecurity Professional Certificate',
    org: 'Google',
    category: 'soc',
    categoryLabel: 'SOC & Incident Response',
    dateOrId: 'Google Career Certificate',
    status: 'VERIFIED',
    skills: ['SIEM / Splunk', 'IDS / IPS', 'Incident Response Playbooks', 'Python Automation', 'Linux CLI', 'SQL'],
    desc: 'Comprehensive multi-course professional specialization covering 24/7 SOC operations, network telemetry monitoring, incident escalation, and Python automation.'
  },
  {
    id: 'threat-hunting',
    ico: '🎯',
    name: 'Threat Hunting Specialist',
    org: 'Security Blue Team',
    category: 'soc',
    categoryLabel: 'Threat Hunting & Blue Team',
    dateOrId: 'Security Blue Team Academy',
    status: 'VERIFIED',
    skills: ['Proactive Threat Hunting', 'MITRE ATT&CK', 'Sysmon Telemetry', 'Endpoint Detection (EDR)', 'Memory Analysis'],
    desc: 'Validates proactive identification of covert adversary presence before signature detection, analyzing endpoint anomalies and network egress.'
  },
  {
    id: 'arcx-cti',
    ico: '🧠',
    name: 'Threat Intelligence Analyst',
    org: 'arcX • Cyber Threat Intelligence',
    category: 'soc',
    categoryLabel: 'Threat Intelligence (CTI)',
    dateOrId: 'arcX Practitioner',
    status: 'VERIFIED',
    skills: ['CTI Lifecycle', 'STIX / TAXII', 'Threat Actor Attribution', 'OSINT Collection', 'TTP Mapping'],
    desc: 'Specialized certification in collecting, normalizing, and disseminating tactical, operational, and strategic cyber threat intelligence.'
  },
  {
    id: 'aws-cloud',
    ico: '☁️',
    name: 'AWS Cloud Security & Foundations (Semester 1 Badge)',
    org: 'Amazon Web Services (AWS)',
    category: 'cloud',
    categoryLabel: 'Cloud Security',
    dateOrId: 'AWS Academy',
    status: 'VERIFIED',
    skills: ['AWS IAM Security', 'VPC Architecture', 'CloudTrail / CloudWatch', 'Lambda Functions', 'S3 Bucket Hardening'],
    desc: 'Covers secure cloud architecture, least-privilege IAM policies, VPC security groups, and automated event-driven compliance monitoring.'
  },
  {
    id: 'ms-linkedin',
    ico: '🏆',
    name: 'Career Essentials in Cybersecurity',
    org: 'Microsoft & LinkedIn',
    category: 'general',
    categoryLabel: 'Enterprise Security',
    dateOrId: 'Microsoft Certified Path',
    status: 'VERIFIED',
    skills: ['Identity & Access Management', 'Zero Trust Architecture', 'Defensive Hardening', 'Risk Management'],
    desc: 'Professional grounding in Microsoft enterprise security frameworks, Zero Trust architecture, and modern threat defense strategies.'
  },
  {
    id: 'eccouncil-sqli',
    ico: '💉',
    name: 'Web Application Security & SQL Injection Defense',
    org: 'EC-Council',
    category: 'vapt',
    categoryLabel: 'Offensive Security',
    dateOrId: 'EC-Council CodeRed',
    status: 'VERIFIED',
    skills: ['SQL Injection (In-band, Blind, Time-based)', 'WAF Evasion', 'Prepared Statements', 'Database Forensics'],
    desc: 'Deep-dive mastery of database exploitation mechanics, automated SQLMap usage, second-order injections, and parameterized defensive coding.'
  },
  {
    id: 'nfsu-forensics',
    ico: '🔬',
    name: 'Digital Forensics & Chain-of-Custody Specialization',
    org: 'National Forensic Sciences University',
    category: 'dfir',
    categoryLabel: 'Digital Forensics & Legal Triage',
    dateOrId: 'NFSU Academic Credential',
    status: 'ACCREDITED',
    skills: ['Windows Artifacts', 'Mobile Forensics', 'Memory Triage', 'Volatility 3', 'Autopsy', 'Legal Chain of Custody'],
    desc: 'Advanced forensic laboratory qualification on extracting, validating, and presenting forensically sound digital evidence in legal contexts.'
  },
  {
    id: 'thm-top3',
    ico: '⚔️',
    name: 'Top 3% Global Ranking Achievement',
    org: 'TryHackMe Global Cybersecurity Platform',
    category: 'general',
    categoryLabel: 'Practical Combat Mastery',
    dateOrId: 'Global Top Tier',
    status: 'SPECIALIZATION',
    skills: ['100+ Challenge Labs Conquered', 'Offensive Pentesting', 'SOC Level 1', 'Privilege Escalation', 'Red Teaming'],
    desc: 'Continuous real-world hands-on validation across live target networks, active directory exploitation, and incident response CTF machines.'
  }
];

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'vapt' | 'soc' | 'cloud' | 'dfir'>('all');

  const filteredCerts = filter === 'all'
    ? certList
    : certList.filter(c => c.category === filter || (filter === 'vapt' && c.category === 'vapt'));

  return (
    <section className="sec" id="certs-s">
      <div className="sec-eyebrow">Credentials & Badges</div>
      <div className="sec-h">Certifications & Accreditations</div>
      <div className="sec-rule"></div>
      <p className="certs-intro">
        Industry-recognized certifications and professional credentials validating offensive prowess, SOC defense, cloud security, and digital forensics.
      </p>

      {/* Filter Tabs */}
      <div className="certs-filter-bar">
        <button
          type="button"
          className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Credentials ({certList.length})
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'vapt' ? 'active' : ''}`}
          onClick={() => setFilter('vapt')}
        >
          ⚔️ VAPT & AppSec
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'soc' ? 'active' : ''}`}
          onClick={() => setFilter('soc')}
        >
          🛡️ SOC & Threat Intel
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'cloud' ? 'active' : ''}`}
          onClick={() => setFilter('cloud')}
        >
          ☁️ Cloud Security
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'dfir' ? 'active' : ''}`}
          onClick={() => setFilter('dfir')}
        >
          🔬 Forensics & DFIR
        </button>
      </div>

      {/* Certifications Grid */}
      <div className="certs-grid">
        {filteredCerts.map((c) => (
          <div className="cert-block" key={c.id}>
            <div className="cert-top-row">
              <div className="cert-ico">{c.ico}</div>
              <span className={`cert-status-badge ${c.status.toLowerCase()}`}>
                ✓ {c.status}
              </span>
            </div>

            <div className="cert-content">
              <span className="cert-cat-pill">{c.categoryLabel}</span>
              <h3 className="cert-name">{c.name}</h3>
              <div className="cert-org">{c.org}</div>
              {c.dateOrId && <div className="cert-id-tag">{c.dateOrId}</div>}
              <p className="cert-desc">{c.desc}</p>

              <div className="cert-skills-wrap">
                <span className="cert-skills-lbl">Skills Validated:</span>
                <div className="cert-skills-tags">
                  {c.skills.map((skill, k) => (
                    <span className="tag" key={k}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

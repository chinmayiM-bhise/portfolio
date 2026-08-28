import React, { useState } from 'react';

export interface CertificationItem {
  id: string;
  ico: string;
  name: string;
  org: string;
  category: 'vapt' | 'network' | 'soc' | 'dfir' | 'cloud' | 'simulation';
  categoryLabel: string;
  dateOrId?: string;
  skills: string[];
  status: 'VERIFIED' | 'ACCREDITED' | 'SPECIALIZATION';
  desc: string;
  issuerLogoText?: string;
}

const certList: CertificationItem[] = [
  {
    id: 'cap',
    ico: '🛡️',
    name: 'Certified AppSec Practitioner (CAP)',
    org: 'The SecOps Group',
    category: 'vapt',
    categoryLabel: 'AppSec & VAPT',
    dateOrId: 'The SecOps Group · Accredited Credential',
    status: 'VERIFIED',
    skills: ['OWASP Top 10', 'Web Security', 'API Pentesting', 'Remediation Advisory', 'Secure Coding'],
    desc: 'Demonstrates verified professional competence in identifying, exploiting, and defending against high-severity web application and API vulnerabilities.',
    issuerLogoText: 'SECOPS GROUP'
  },
  {
    id: 'cnsp',
    ico: '🌐',
    name: 'Certified Network Security Practitioner (CNSP)',
    org: 'The SecOps Group',
    category: 'network',
    categoryLabel: 'Network Defense & Infrastructure',
    dateOrId: 'The SecOps Group · Professional Certificate',
    status: 'VERIFIED',
    skills: ['Network Architecture', 'Firewall Hardening', 'Packet Analysis', 'Intrusion Detection', 'VPN Protocols'],
    desc: 'Validates deep expertise in enterprise network security architecture, defense-in-depth perimeter design, and low-level protocol traffic auditing.',
    issuerLogoText: 'SECOPS GROUP'
  },
  {
    id: 'fortinet-nse',
    ico: '🏰',
    name: 'Fortinet Network Security Expert (NSE 1, 2 & 3)',
    org: 'Fortinet Training Institute',
    category: 'network',
    categoryLabel: 'Enterprise Security Architecture',
    dateOrId: 'Fortinet Certified Associate Levels 1-3',
    status: 'VERIFIED',
    skills: ['Threat Landscape (NSE 1)', 'Evolution of Cybersecurity (NSE 2)', 'Fortinet Core Architecture (NSE 3)', 'Endpoint Compliance', 'Web Traffic Protection'],
    desc: 'Multi-tiered certification from global cybersecurity leader Fortinet, covering threat evolution, zero-trust network access, and endpoint security enforcement.',
    issuerLogoText: 'FORTINET'
  },
  {
    id: 'google-cyber',
    ico: '🔍',
    name: 'Google Cybersecurity Professional Specialization',
    org: 'Google',
    category: 'soc',
    categoryLabel: 'SOC & Incident Response',
    dateOrId: 'Google Career Certificate (8-Course Program)',
    status: 'VERIFIED',
    skills: ['SIEM / Splunk', 'IDS / IPS', 'Incident Response Escalation', 'Python Automation', 'Linux CLI', 'SQL Database Forensics'],
    desc: 'Rigorous multi-course professional specialization covering 24/7 SOC operations, network telemetry monitoring, incident escalation, and security automation scripts in Python.',
    issuerLogoText: 'GOOGLE'
  },
  {
    id: 'threat-hunting',
    ico: '🎯',
    name: 'Threat Hunting Specialist',
    org: 'Security Blue Team',
    category: 'soc',
    categoryLabel: 'Proactive Threat Hunting',
    dateOrId: 'Security Blue Team Academy',
    status: 'VERIFIED',
    skills: ['Proactive Threat Hunting', 'MITRE ATT&CK', 'Sysmon Telemetry', 'Endpoint Detection (EDR)', 'Memory Analysis'],
    desc: 'Validates proactive identification of covert adversary presence before signature detection, analyzing endpoint anomalies, living-off-the-land binaries, and network egress.',
    issuerLogoText: 'BLUE TEAM'
  },
  {
    id: 'arcx-cti',
    ico: '🧠',
    name: 'Threat Intelligence Analyst (CTI 101)',
    org: 'arcX • Cyber Threat Intelligence',
    category: 'soc',
    categoryLabel: 'Threat Intelligence (CTI)',
    dateOrId: 'arcX Practitioner',
    status: 'VERIFIED',
    skills: ['CTI Lifecycle', 'STIX / TAXII Protocols', 'Threat Actor Attribution', 'OSINT Collection', 'TTP Mapping'],
    desc: 'Specialized training in collecting, normalizing, analyzing, and disseminating tactical, operational, and strategic cyber threat intelligence.',
    issuerLogoText: 'ARCX'
  },
  {
    id: 'eccouncil-sqli',
    ico: '💉',
    name: 'Web Application Security & SQL Injection Defense',
    org: 'EC-Council',
    category: 'vapt',
    categoryLabel: 'Offensive Security',
    dateOrId: 'EC-Council CodeRed Certification',
    status: 'VERIFIED',
    skills: ['SQL Injection (In-band, Blind, Time-based)', 'WAF Evasion', 'Prepared Statements', 'Database Forensics'],
    desc: 'Deep-dive mastery of database exploitation mechanics, automated SQLMap usage, second-order injections, and parameterized defensive coding.',
    issuerLogoText: 'EC-COUNCIL'
  },
  {
    id: 'deloitte-cyber',
    ico: '💼',
    name: 'Cybersecurity Virtual Job Simulation',
    org: 'Deloitte Australia',
    category: 'simulation',
    categoryLabel: 'Enterprise Incident Response',
    dateOrId: 'Deloitte Australia / Forage',
    status: 'SPECIALIZATION',
    skills: ['Security Assessment', 'Breach Containment', 'Forensic Analysis', 'Stakeholder Incident Briefing'],
    desc: 'Practical industry simulation handling real-world enterprise cyber incident response, telemetry analysis, and post-breach mitigation advisory.',
    issuerLogoText: 'DELOITTE'
  },
  {
    id: 'tata-cyber',
    ico: '🏢',
    name: 'Cybersecurity Analyst Job Simulation',
    org: 'Tata Group',
    category: 'simulation',
    categoryLabel: 'Security Operations & IAM',
    dateOrId: 'Tata Group / Forage',
    status: 'SPECIALIZATION',
    skills: ['Identity & Access Management (IAM)', 'Endpoint Defense', 'Security Policy Hardening', 'Risk Assessment'],
    desc: 'Executed defensive cyber operations, identity access verification, and security hygiene auditing across enterprise simulations.',
    issuerLogoText: 'TATA'
  },
  {
    id: 'nfsu-blockchain',
    ico: '⛓️',
    name: 'Blockchain Security & Cryptographic Forensics',
    org: 'National Forensic Sciences University',
    category: 'dfir',
    categoryLabel: 'Cryptography & Forensics',
    dateOrId: 'NFSU Certified Bootcamp',
    status: 'ACCREDITED',
    skills: ['Smart Contract Security', 'Cryptographic Hashing', 'Ledger Forensics', 'DeFi Attack Vectors'],
    desc: 'Specialized university qualification in blockchain consensus vulnerabilities, smart contract auditing, and transaction ledger forensics.',
    issuerLogoText: 'NFSU'
  },
  {
    id: 'nfsu-bigdata',
    ico: '📊',
    name: 'Big Data & Data Science in Cyber Intelligence',
    org: 'National Forensic Sciences University',
    category: 'dfir',
    categoryLabel: 'Cyber Intelligence & Analytics',
    dateOrId: 'NFSU Specialization',
    status: 'ACCREDITED',
    skills: ['Large-scale Log Analytics', 'Anomaly Detection', 'Behavioral Pattern Mining', 'Python Analytics'],
    desc: 'Advanced training in applying data science heuristics to massive security telemetry streams, accelerating intrusion detection pipelines.',
    issuerLogoText: 'NFSU'
  },
  {
    id: 'nfsu-ncsam',
    ico: '🏛️',
    name: 'National Cyber Security Awareness Specialization',
    org: 'National Forensic Sciences University (MHA)',
    category: 'dfir',
    categoryLabel: 'Cyber Law & Defense',
    dateOrId: 'NFSU SCSDF Certification',
    status: 'ACCREDITED',
    skills: ['Digital Evidence Admissibility', 'Cyber Law', 'Incident Escalation', 'Security Governance'],
    desc: 'Specialized national security certification covering digital governance, legal admissibility of digital evidence, and cyber awareness.',
    issuerLogoText: 'NFSU'
  }
];

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'vapt' | 'network' | 'soc' | 'dfir' | 'simulation'>('all');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const filteredCerts = filter === 'all'
    ? certList
    : certList.filter(c => c.category === filter);

  return (
    <section className="sec" id="certs-s">
      <div className="sec-eyebrow">Credentials & Badges</div>
      <div className="sec-h">Certifications & Accreditations</div>
      <div className="sec-rule"></div>
      <p className="certs-intro">
        12+ verified credentials spanning offensive application security (CAP), network defense (CNSP, Fortinet NSE 1-3), SOC operations (Google, Blue Team, arcX), and NFSU forensic specializations.
      </p>

      {/* Filter Tabs */}
      <div className="certs-filter-bar">
        <button
          type="button"
          className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          ⚡ All Credentials ({certList.length})
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'vapt' ? 'active' : ''}`}
          onClick={() => setFilter('vapt')}
        >
          ⚔️ AppSec & VAPT
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'network' ? 'active' : ''}`}
          onClick={() => setFilter('network')}
        >
          🌐 Network (CNSP / Fortinet)
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
          className={`filter-pill ${filter === 'dfir' ? 'active' : ''}`}
          onClick={() => setFilter('dfir')}
        >
          🔬 Forensics & NFSU
        </button>
        <button
          type="button"
          className={`filter-pill ${filter === 'simulation' ? 'active' : ''}`}
          onClick={() => setFilter('simulation')}
        >
          🏢 Enterprise Simulations
        </button>
      </div>

      {/* Certifications Grid */}
      <div className="certs-grid">
        {filteredCerts.map((c) => (
          <div
            className="cert-block"
            key={c.id}
            onClick={() => setSelectedCert(c)}
            style={{ cursor: 'pointer' }}
          >
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
                <span className="cert-skills-lbl">Validated Competencies:</span>
                <div className="cert-skills-tags">
                  {c.skills.slice(0, 3).map((skill, k) => (
                    <span className="tag" key={k}>{skill}</span>
                  ))}
                  {c.skills.length > 3 && (
                    <span className="tag-more">+{c.skills.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Cert Modal */}
      {selectedCert && (
        <div className="domain-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="domain-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dm-header">
              <div className="dm-title-wrap">
                <span className="dm-icon">{selectedCert.ico}</span>
                <div>
                  <span className="dm-badge">{selectedCert.categoryLabel}</span>
                  <h3 className="dm-title">{selectedCert.name}</h3>
                </div>
              </div>
              <button className="dm-close" onClick={() => setSelectedCert(null)}>✕</button>
            </div>

            <div className="dm-body">
              <div className="dm-meta-box">
                <span className="dm-meta-lbl">Issuing Body:</span>
                <span className="dm-meta-val">{selectedCert.org}</span>
              </div>

              {selectedCert.dateOrId && (
                <div className="dm-meta-box">
                  <span className="dm-meta-lbl">Accreditation:</span>
                  <span className="dm-meta-val">{selectedCert.dateOrId}</span>
                </div>
              )}

              <div className="dm-section">
                <h4>📜 Credential Scope & Description</h4>
                <p className="dm-desc">{selectedCert.desc}</p>
              </div>

              <div className="dm-section">
                <h4>⚔️ Key Skills & Technologies Validated</h4>
                <div className="dm-tools">
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="dm-footer">
              <button className="btn btn-outline" onClick={() => setSelectedCert(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

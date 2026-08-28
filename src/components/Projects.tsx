import React, { useState } from 'react';

export interface ProjectData {
  id: string;
  num: string;
  status?: string;
  icon: string;
  title: string;
  domain: string;
  domainId: 'soc' | 'vapt' | 'malware' | 'iot' | 'ot' | 'dfir';
  brief: string;
  fullDesc: string;
  highlights: string[];
  tags: string[];
  architecture?: string;
  impact: string;
  githubUrl?: string;
}

const allProjects: ProjectData[] = [
  {
    id: 'iot-firmware',
    num: '01',
    status: 'ACTIVE RESEARCH',
    icon: '📡',
    title: 'IoT Firmware Reverse Engineering & Vulnerability Pipeline',
    domain: 'IoT Security & Reverse Engineering',
    domainId: 'iot',
    brief: 'Automated static & dynamic security analysis pipeline for extracted IoT device firmware, uncovering hardcoded secrets, insecure daemons, and vulnerable architectures.',
    fullDesc: 'Engineered an automated triage framework for IoT firmware blobs. Extracted and reconstructed SquashFS and CramFS filesystems using Binwalk, performed automated signature scanning for private SSH keys, hardcoded API tokens, and insecure dropbear configurations, and emulated vulnerable MIPS/ARM binaries in QEMU for dynamic fuzzing.',
    highlights: [
      'Extracted & unpacked embedded firmware using Binwalk & custom Python wrappers',
      'Automated secret scanning: found hardcoded private keys & root password hashes',
      'Binary analysis in Ghidra to pinpoint buffer overflow surfaces in IoT web interfaces',
      'QEMU system-mode emulation for runtime inspection of network daemons'
    ],
    tags: ['Binwalk', 'QEMU', 'Ghidra', 'Linux', 'Python', 'ARM/MIPS', 'SquashFS'],
    impact: 'Automates discovery of top OWASP IoT Top 10 vulnerabilities in under 5 minutes per image.',
    architecture: 'Firmware Image → Binwalk Extraction → FileSystem Heuristics → Ghidra Decompilation → QEMU Emulation'
  },
  {
    id: 'ot-scada-monitor',
    num: '02',
    status: 'SPECIALIZED',
    icon: '🏭',
    title: 'OT / ICS Modbus & SCADA Cyber Attack Defense Platform',
    domain: 'OT / ICS Security & Critical Infrastructure',
    domainId: 'ot',
    brief: 'Industrial network monitor and anomaly detector defending Modbus TCP and DNP3 protocols against unauthorized PLC setpoint manipulation and injection attacks.',
    fullDesc: 'Simulated a multi-tier Purdue Model industrial network (Levels 0-3). Built a deep-packet inspection sensor in Python using Scapy and Wireshark to monitor Modbus TCP communication between human-machine interfaces (HMI) and Programmable Logic Controllers (PLCs), catching unauthorized function code injections (e.g. Force Multiple Coils, Preset Single Register) and abnormal packet frequency.',
    highlights: [
      'Purdue model architecture alignment for industrial network zone isolation',
      'Deep packet inspection of Modbus TCP (Port 502) Function Codes 0x05, 0x06, 0x0F, 0x10',
      'Detection of unauthorized coil writes, unauthorized register overrides, and replay attacks',
      'Rule-based ICS alert engine with threshold detection and automated syslog reporting'
    ],
    tags: ['Modbus TCP', 'Scapy', 'Python', 'Wireshark', 'Purdue Model', 'DNP3', 'ICS/SCADA'],
    impact: 'Protects simulated water-treatment / substation PLCs from unauthorized physical state modifications.',
    architecture: 'SCADA HMI / Master ↔ Modbus TCP Sensor (Deep Packet Inspection) ↔ Simulated PLC / Slave'
  },
  {
    id: 'dfir-artifacts',
    num: '03',
    status: 'PRODUCTION READY',
    icon: '🔬',
    title: 'Multi-Artifact Windows Forensic Investigator & Timeline Suite',
    domain: 'Digital Forensics (DFIR) & Incident Response',
    domainId: 'dfir',
    brief: 'Forensic parsing and correlation suite analyzing Windows Registry, Prefetch, LNK, and Shellbags to reconstruct adversary execution timelines during breaches.',
    fullDesc: 'Developed a comprehensive DFIR triage utility in Python with an interactive graphical interface. The tool automates extraction and temporal correlation across key evidentiary artifacts (UserAssist, AppCompatCache/Amcache, Shellbags, Prefetch, and Event Logs), providing forensic examiners with an exportable timeline of attacker presence and file execution history.',
    highlights: [
      'Automated parsing of NTUSER.DAT, SYSTEM, and SOFTWARE registry hives',
      'Prefetch and LNK parser tracking program execution counts and timestamps',
      'Shellbags folder traversal reconstruction showing accessed attacker directories',
      'Unified chronological timeline generation with SQLite storage and CSV/JSON reporting'
    ],
    tags: ['Python', 'SQLite', 'Tkinter', 'Win Registry', 'Prefetch', 'Shellbags', 'DFIR'],
    impact: 'Reduces manual artifact triage time by 75% for incident response forensic teams.',
    architecture: 'Raw Evidence Ingestion → Binary Hive Parsers → SQLite Correlation DB → Interactive Timeline GUI'
  },
  {
    id: 'cloud-soc-ids',
    num: '04',
    status: 'CLOUD DEPLOYED',
    icon: '🛡️',
    title: 'Cloud-Native Automated SOC & Real-Time Threat Hunting Engine',
    domain: 'SOC & Cloud Security',
    domainId: 'soc',
    brief: 'Event-driven SIEM & IDS pipeline deployed on AWS using GuardDuty, CloudWatch, and Lambda, providing automated alerting and quarantine for compromised instances.',
    fullDesc: 'Architected a scalable, serverless security monitoring and incident containment pipeline on AWS. Ingests VPC Flow Logs, CloudTrail audit logs, and GuardDuty findings to detect credential exfiltration, brute-force anomalies, and unauthorized IAM role assumptions. Triggers serverless containment scripts via AWS Lambda to instantly revoke IAM session tokens and isolate EC2 instances into a forensic quarantine security group.',
    highlights: [
      'Ingestion of CloudTrail, VPC Flow Logs, and GuardDuty threat findings',
      'Automated correlation against MITRE ATT&CK Cloud Matrix (T1078, T1110, T1530)',
      'Automated isolation & snapshotting of compromised EC2 instances via Lambda',
      'Multi-channel incident notification via SNS to Security Operations Discord/Slack webhooks'
    ],
    tags: ['AWS Lambda', 'CloudWatch', 'GuardDuty', 'VPC Flows', 'SNS', 'Splunk', 'Python'],
    impact: 'Zero-touch sub-second automated quarantine for compromised cloud workloads.',
    architecture: 'CloudTrail / FlowLogs → GuardDuty Threat Engine → EventBridge → Lambda Quarantine → SNS Alert'
  },
  {
    id: 'malware-triage',
    num: '05',
    status: 'SECURITY LAB',
    icon: '🦠',
    title: 'PE Ransomware & Behavioral Malware Triage Sandbox',
    domain: 'Malware Analysis & Reverse Engineering',
    domainId: 'malware',
    brief: 'In-depth static & dynamic analysis framework for Portable Executables (PE), analyzing import address tables, anti-analysis evasion, and generating YARA signatures.',
    fullDesc: 'Created an isolated malware analysis workflow to dissect suspicious Windows executables and ransomware samples. Utilized PEStudio and Ghidra for static triage (analyzing entropy, suspicious imports like VirtualAllocEx and WriteProcessMemory, and XOR obfuscation), complemented by dynamic execution in an air-gapped sandbox with Procmon and Wireshark to intercept C2 DNS beaconing and dropped payloads.',
    highlights: [
      'Static entropy calculation and section header inspection for packed/crypted binaries',
      'Disassembly in Ghidra and debugging in x64dbg to bypass basic debugger checks',
      'Extraction of hardcoded C2 IP addresses, encryption keys, and persistence mechanisms',
      'Authored custom YARA detection rules tested against live malware repositories'
    ],
    tags: ['Ghidra', 'x64dbg', 'PEStudio', 'YARA', 'Procmon', 'Wireshark', 'Python'],
    impact: 'Generates high-confidence IOC lists and YARA rules for enterprise SOC defense integration.',
    architecture: 'Sample Intake → Static Header / String Triage → Sandboxed Dynamic Execution → IOC / YARA Rule Output'
  },
  {
    id: 'vapt-mitm-rsa',
    num: '06',
    status: 'OFFENSIVE APPSEC',
    icon: '⚔️',
    title: 'Cryptographic Protocol Assessment & Socket MITM Interceptor',
    domain: 'VAPT & Cryptography',
    domainId: 'vapt',
    brief: 'Network socket encrypted protocol assessment suite with live Man-in-the-Middle (MITM) exploit demonstrating weak key factorization and ciphertext tampering.',
    fullDesc: 'Engineered a low-level cryptographic testing framework implementing custom RSA and AES encryption protocols over raw TCP sockets. Developed an adversary proxy module that captures in-flight handshakes, factors undersized modulus keys using Pollard’s rho algorithm, injects crafted malicious payloads, and re-signs packets transparently without client-server awareness.',
    highlights: [
      'Custom BigInteger RSA key-pair generation and PKCS#1 padding verification',
      'Passive and active socket interception proxy written in Java & Python',
      'Cryptographic attack demonstration: Small public exponent attacks and Wiener’s attack',
      'Web & API vulnerability validation with Burp Suite and OWASP testing checklists'
    ],
    tags: ['Java', 'BigInteger', 'Sockets', 'RSA/AES', 'Burp Suite', 'Python', 'MITM'],
    impact: 'Demonstrates real-world cryptographic implementation pitfalls and defense-in-depth hardening.',
    architecture: 'Client Endpoint ↔ MITM Interceptor / Key Factorizer ↔ Target Server Endpoint'
  },
  {
    id: 'soc-threat-intel',
    num: '07',
    status: 'BLUE TEAM',
    icon: '📊',
    title: 'Threat Intelligence Aggregator & MITRE ATT&CK Navigator',
    domain: 'SOC & Threat Intelligence',
    domainId: 'soc',
    brief: 'Automated threat intelligence feed aggregator normalizing IOC feeds (STIX/TAXII, AlienVault OTX, VirusTotal) and mapping observed adversary TTPs to MITRE matrices.',
    fullDesc: 'Built an automated Cyber Threat Intelligence (CTI) ingestion engine. Collects real-time feeds of malicious IP addresses, domain names, and file hashes from multiple open-source intelligence (OSINT) repositories. Enriches indicators with reputation scoring, correlates against known APT threat actor profiles, and maps observed Tactics, Techniques, and Procedures (TTPs) directly to MITRE ATT&CK layers.',
    highlights: [
      'STIX/TAXII standard compliance for indicator normalization and threat sharing',
      'Automated API integration with VirusTotal, AlienVault OTX, and abuse.ch',
      'Heuristic severity scoring to filter out low-confidence false positives',
      'Exportable MITRE ATT&CK Navigator JSON layers for security leadership briefing'
    ],
    tags: ['Python', 'STIX/TAXII', 'MITRE ATT&CK', 'Threat Intel', 'OSINT', 'APIs'],
    impact: 'Provides actionable CTI feeds for SOC analysts, reducing alert noise by over 40%.',
    architecture: 'OSINT Feeds (OTX/VT) → Normalization Engine → Reputation Scoring → MITRE Navigator Export'
  },
  {
    id: 'iot-ble-defense',
    num: '08',
    status: 'HARDWARE LAB',
    icon: '📻',
    title: 'BLE & Wireless Sensor Network Hardware Attack Surface Lab',
    domain: 'IoT & Wireless Security',
    domainId: 'iot',
    brief: 'Security audit of Bluetooth Low Energy (BLE) and wireless smart sensors, uncovering unauthenticated GATT read/write vulnerabilities and replay flaws.',
    fullDesc: 'Conducted comprehensive RF and protocol audits on smart IoT peripherals and microcontrollers. Intercepted BLE advertisement packets, enumerated generic attribute (GATT) services, and discovered unencrypted control characteristics that permitted unauthorized device actuation. Crafted countermeasure guidelines including authenticated pairing and payload encryption.',
    highlights: [
      'BLE packet sniffing using Ubertooth and Wireshark / nRF Connect',
      'Discovery of unauthenticated GATT characteristics allowing remote parameter modification',
      'Replay attack demonstration against unencrypted command transmissions',
      'Hardening guide authored for secure IoT firmware Bluetooth stack configuration'
    ],
    tags: ['BLE', 'GATT', 'Wireshark', 'nRF Connect', 'IoT Hardware', 'Python', 'RF Security'],
    impact: 'Audited and secured wireless protocols for smart environment sensor nodes.',
    architecture: 'RF Transceiver ↔ BLE Packet Sniffer ↔ GATT Characteristic Analyzer ↔ Device Actuator'
  }
];

const filterTabs = [
  { id: 'all', label: 'All Projects', count: allProjects.length, icon: '⚡' },
  { id: 'soc', label: 'SOC & Cloud', count: allProjects.filter(p => p.domainId === 'soc').length, icon: '🛡️' },
  { id: 'vapt', label: 'VAPT & AppSec', count: allProjects.filter(p => p.domainId === 'vapt').length, icon: '⚔️' },
  { id: 'malware', label: 'Malware & RE', count: allProjects.filter(p => p.domainId === 'malware').length, icon: '🦠' },
  { id: 'iot', label: 'IoT & Firmware', count: allProjects.filter(p => p.domainId === 'iot').length, icon: '📡' },
  { id: 'ot', label: 'OT / ICS Defense', count: allProjects.filter(p => p.domainId === 'ot').length, icon: '🏭' },
  { id: 'dfir', label: 'DFIR & Forensics', count: allProjects.filter(p => p.domainId === 'dfir').length, icon: '🔬' },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = activeTab === 'all'
    ? allProjects
    : allProjects.filter((p) => p.domainId === activeTab);

  return (
    <section className="sec" id="proj-s">
      <div className="sec-eyebrow">Tactical Work & Research</div>
      <div className="sec-h">Featured Security Projects</div>
      <div className="sec-rule"></div>
      <p className="projects-intro">
        Engineering resilient cyber shields and rigorous offensive audits across SOC operations, web/network penetration testing, malware reverse engineering, embedded IoT firmware, and industrial OT/ICS networks.
      </p>

      {/* Domain Filters */}
      <div className="projects-filter-bar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`filter-pill ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="fp-icon">{tab.icon}</span>
            <span className="fp-label">{tab.label}</span>
            <span className="fp-count">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div
            className="proj-card"
            key={p.id}
            onClick={() => setSelectedProject(p)}
          >
            <div className="proj-top-bar">
              <span className="proj-num">{p.num}</span>
              {p.status && <span className="proj-status-badge">{p.status}</span>}
            </div>

            <div className="proj-domain-tag">
              <span className="pdt-dot"></span>
              {p.domain}
            </div>

            <div className="proj-header-row">
              <span className="proj-icon">{p.icon}</span>
              <h3 className="proj-title">{p.title}</h3>
            </div>

            <p className="proj-desc">{p.brief}</p>

            <div className="proj-highlights-box">
              <div className="ph-title">Key Technical Accomplishments:</div>
              <ul className="ph-list">
                {p.highlights.slice(0, 2).map((hl, idx) => (
                  <li key={idx}>▸ {hl}</li>
                ))}
              </ul>
            </div>

            <div className="proj-tags">
              {p.tags.map((tag, j) => (
                <span className="tag" key={j}>{tag}</span>
              ))}
            </div>

            <div className="proj-card-footer">
              <span className="proj-impact-snippet">⚡ {p.impact}</span>
              <button
                type="button"
                className="proj-expand-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(p);
                }}
              >
                Deep Dive ↗
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Dive Project Modal */}
      {selectedProject && (
        <div className="domain-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="domain-modal project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dm-header">
              <div className="dm-title-wrap">
                <span className="dm-icon">{selectedProject.icon}</span>
                <div>
                  <div className="proj-modal-num-row">
                    <span className="proj-num">PROJECT {selectedProject.num}</span>
                    {selectedProject.status && (
                      <span className="proj-status-badge">{selectedProject.status}</span>
                    )}
                  </div>
                  <h3 className="dm-title">{selectedProject.title}</h3>
                  <span className="dm-badge">{selectedProject.domain}</span>
                </div>
              </div>
              <button className="dm-close" onClick={() => setSelectedProject(null)}>✕</button>
            </div>

            <div className="dm-body">
              <div className="dm-section">
                <h4>📜 Project Overview & Objective</h4>
                <p className="dm-desc">{selectedProject.fullDesc}</p>
              </div>

              {selectedProject.architecture && (
                <div className="dm-section">
                  <h4>📐 Architecture & Execution Flow</h4>
                  <div className="arch-flow-box">
                    <code>{selectedProject.architecture}</code>
                  </div>
                </div>
              )}

              <div className="dm-section">
                <h4>⚔️ In-Depth Technical Highlights</h4>
                <ul className="dm-list">
                  {selectedProject.highlights.map((hl, idx) => (
                    <li key={idx}>
                      <span className="dm-bullet" style={{ color: 'var(--zoro)' }}>▸</span>
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dm-section">
                <h4>🛠️ Tools & Technologies Stack</h4>
                <div className="dm-tools">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="dm-meta-box">
                <span className="dm-meta-lbl">🎯 Measurable Security Impact:</span>
                <span className="dm-meta-val">{selectedProject.impact}</span>
              </div>
            </div>

            <div className="dm-footer">
              <a href="#contact-s" className="btn btn-primary" onClick={() => setSelectedProject(null)}>
                Discuss This Project ↗
              </a>
              <button className="btn btn-outline" onClick={() => setSelectedProject(null)}>
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

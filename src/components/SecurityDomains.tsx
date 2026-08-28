import React, { useState } from 'react';

interface DomainInfo {
  id: string;
  icon: string;
  badge: string;
  title: string;
  tagline: string;
  desc: string;
  coreTools: string[];
  capabilities: string[];
  metrics: string;
  colorVar: string;
}

const domains: DomainInfo[] = [
  {
    id: 'soc',
    icon: '🛡️',
    badge: 'BLUE TEAM & SIEM',
    title: 'SOC & Threat Hunting',
    tagline: '24/7 Threat Detection, Log Telemetry & Automated Incident Triage',
    desc: 'Deep expertise in analyzing SIEM telemetry, tuning detection rules, correlating attack vectors against the MITRE ATT&CK matrix, and executing rapid incident response playbooks.',
    coreTools: ['Splunk', 'Wazuh', 'AWS GuardDuty', 'Wireshark', 'Snort / Suricata', 'CloudWatch'],
    capabilities: [
      'Log parsing & correlation across endpoints, VPC flows, and cloud trails',
      'MITRE ATT&CK framework mapping for proactive threat hunting',
      'Automated alerting & containment workflows via AWS Lambda / SNS',
      'Threat Intelligence integration (STIX/TAXII, AlienVault OTX, arcX)'
    ],
    metrics: 'Top 3% Global TryHackMe · Blue Team Specialist',
    colorVar: 'var(--zoro)'
  },
  {
    id: 'vapt',
    icon: '⚔️',
    badge: 'OFFENSIVE SECURITY',
    title: 'VAPT & AppSec',
    tagline: 'Vulnerability Assessment, Penetration Testing & Ethical Hacking',
    desc: 'Hands-on offensive testing across web applications, APIs, and enterprise networks. Identifying critical flaws before malicious adversaries can exploit them.',
    coreTools: ['Burp Suite Pro', 'Metasploit', 'Nmap', 'OWASP ZAP', 'SQLMap', 'Postman'],
    capabilities: [
      'OWASP Top 10 web and API vulnerability discovery & PoC development',
      'Network perimeter scanning, port reconnaissance & service banner grabbing',
      'Cryptographic analysis, socket interception & Man-in-the-Middle (MITM) simulations',
      'Remediation advisory and secure software development lifecycle (SSDLC) validation'
    ],
    metrics: 'Certified AppSec Practitioner (CAP) · Active Lab Researcher',
    colorVar: 'var(--gold)'
  },
  {
    id: 'malware',
    icon: '🦠',
    badge: 'REVERSE ENGINEERING',
    title: 'Malware Analysis & RE',
    tagline: 'Dissecting Malicious Payloads, PE Headers & Binary Behavior',
    desc: 'Static and dynamic triage of suspicious Windows executables and scripts. Unpacking obfuscated binaries, analyzing import address tables, and creating defensive YARA rules.',
    coreTools: ['Ghidra', 'x64dbg', 'PEStudio', 'Procmon', 'YARA', 'Wireshark'],
    capabilities: [
      'Static analysis of Portable Executable (PE) headers, strings, and sections',
      'Dynamic behavior monitoring in isolated sandboxes (Registry, Filesystem, Network)',
      'Reverse engineering disassembly & decompilation to uncover C2 callbacks',
      'Authoring YARA rules for signature-based detection and threat hunting'
    ],
    metrics: 'Heuristic & Sandbox Behavioral Analysis Workflows',
    colorVar: '#e74c3c'
  },
  {
    id: 'iot',
    icon: '📡',
    badge: 'EMBEDDED & HARDWARE',
    title: 'IoT & Firmware Security',
    tagline: 'Firmware Extraction, Hardware Interfaces & Reverse Engineering',
    desc: 'Specialized focus on dissecting IoT device firmware images, uncovering hardcoded cryptographic keys, backdoor services, and analyzing wireless protocols.',
    coreTools: ['Binwalk', 'QEMU', 'Firmware Analysis Toolkit (FAT)', 'Ghidra', 'Linux / Strings', 'GATT / BLE'],
    capabilities: [
      'Firmware extraction and squashfs/cramfs filesystem reconstruction using Binwalk',
      'Emulation of IoT binaries (MIPS / ARM) via QEMU for dynamic fuzzing',
      'Identification of hardcoded credentials, unpatched services, and exposed UART/JTAG interfaces',
      'Bluetooth Low Energy (BLE) packet sniffing and GATT characteristic analysis'
    ],
    metrics: 'Firmware Vulnerability Pipeline · Hardware Attack Surface',
    colorVar: '#00d2d3'
  },
  {
    id: 'ot',
    icon: '🏭',
    badge: 'CRITICAL INFRASTRUCTURE',
    title: 'OT / ICS & SCADA Defense',
    tagline: 'Industrial Control Systems, Modbus Protocol & Critical Asset Security',
    desc: 'Understanding cyber-physical systems, Purdue Enterprise Reference Architecture (PERA), and defending SCADA networks and PLCs against industrial cyber threats.',
    coreTools: ['Modbus TCP', 'Wireshark', 'Scapy / Python', 'Snort ICS Rules', 'Purdue Model', 'DNP3'],
    capabilities: [
      'Industrial protocol inspection (Modbus TCP, DNP3) and anomaly detection',
      'Purdue model architecture design and industrial network micro-segmentation',
      'Detection of unauthorized coil writes, setpoint tampering, and replay attacks',
      'ICS cyber defense compliance and industrial incident response planning'
    ],
    metrics: 'NFSU Specialized OT/ICS Coursework & Protocol Labs',
    colorVar: '#ff9f43'
  },
  {
    id: 'dfir',
    icon: '🔬',
    badge: 'DIGITAL FORENSICS',
    title: 'DFIR & Evidence Triage',
    tagline: 'Chain of Custody, Windows Artifacts & Forensic Investigation',
    desc: 'Grounded in real-world police investigations at Uttar Pradesh Police. Extracting evidence, analyzing forensic timelines, and preserving chain-of-custody integrity.',
    coreTools: ['Autopsy', 'Volatility 3', 'FTK Imager', 'Registry Parsers', 'SQLite', 'Tkinter/Python'],
    capabilities: [
      'Strict adherence to ISO/IEC 27037 chain-of-custody standards for physical and digital media',
      'Multi-artifact parsing: Registry keys, Prefetch files, LNK shortcuts, and Shellbags',
      'Memory forensics, process dump triage, and unallocated space recovery',
      'Automated artifact correlation scripts for timeline reconstruction'
    ],
    metrics: 'UP Police Cyber Forensics Internship · NFSU Forensics Core',
    colorVar: '#54a0ff'
  }
];

const SecurityDomains: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainInfo | null>(null);

  return (
    <section className="sec" id="domains-s">
      <div className="sec-eyebrow">Core Specialization</div>
      <div className="sec-h">Security Domains & Battle Stations</div>
      <div className="sec-rule"></div>
      <p className="domains-intro">
        Trained at the premier <strong>National Forensic Sciences University</strong> and tested in real-world environments. My technical pillars span proactive threat operations, deep offensive assessment, and digital forensics.
      </p>

      <div className="domains-grid">
        {domains.map((d) => (
          <div
            key={d.id}
            className="domain-card"
            style={{ '--domain-color': d.colorVar } as React.CSSProperties}
            onClick={() => setSelectedDomain(d)}
          >
            <div className="dc-header">
              <span className="dc-icon">{d.icon}</span>
              <span className="dc-badge">{d.badge}</span>
            </div>
            <h3 className="dc-title">{d.title}</h3>
            <p className="dc-tagline">{d.tagline}</p>
            <p className="dc-desc">{d.desc}</p>
            
            <div className="dc-tools-preview">
              <span className="dc-tools-lbl">Primary Arsenal:</span>
              <div className="dc-tools-tags">
                {d.coreTools.slice(0, 4).map((tool, idx) => (
                  <span key={idx} className="tag">{tool}</span>
                ))}
                {d.coreTools.length > 4 && (
                  <span className="tag-more">+{d.coreTools.length - 4} more</span>
                )}
              </div>
            </div>

            <div className="dc-footer">
              <span className="dc-metric">⚡ {d.metrics}</span>
              <button 
                type="button" 
                className="dc-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDomain(d);
                }}
              >
                Inspect Station ↗
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Domain Detail Modal */}
      {selectedDomain && (
        <div className="domain-modal-backdrop" onClick={() => setSelectedDomain(null)}>
          <div className="domain-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dm-header" style={{ borderBottomColor: selectedDomain.colorVar }}>
              <div className="dm-title-wrap">
                <span className="dm-icon">{selectedDomain.icon}</span>
                <div>
                  <span className="dm-badge">{selectedDomain.badge}</span>
                  <h3 className="dm-title">{selectedDomain.title}</h3>
                </div>
              </div>
              <button className="dm-close" onClick={() => setSelectedDomain(null)}>✕</button>
            </div>

            <div className="dm-body">
              <div className="dm-tagline">{selectedDomain.tagline}</div>
              <p className="dm-desc">{selectedDomain.desc}</p>

              <div className="dm-section">
                <h4>⚔️ Technical Capabilities & Methodologies</h4>
                <ul className="dm-list">
                  {selectedDomain.capabilities.map((cap, idx) => (
                    <li key={idx}>
                      <span className="dm-bullet" style={{ color: selectedDomain.colorVar }}>▸</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dm-section">
                <h4>🛠️ Tools & Technologies Mastered</h4>
                <div className="dm-tools">
                  {selectedDomain.coreTools.map((t, idx) => (
                    <span key={idx} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="dm-meta-box">
                <span className="dm-meta-lbl">Verified Milestone:</span>
                <span className="dm-meta-val">{selectedDomain.metrics}</span>
              </div>
            </div>

            <div className="dm-footer">
              <a href="#proj-s" className="btn btn-primary" onClick={() => setSelectedDomain(null)}>
                View Related Projects ↗
              </a>
              <button className="btn btn-outline" onClick={() => setSelectedDomain(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SecurityDomains;

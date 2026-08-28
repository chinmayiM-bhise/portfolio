import React, { useEffect, useRef, useState } from 'react';

interface SkillGroup {
  id: string;
  icon: string;
  title: string;
  domain: string;
  colorClass: string;
  skills: { name: string; level: number; proficiency: string }[];
}

const skillCategories: SkillGroup[] = [
  {
    id: 'soc-skills',
    icon: '🛡️',
    title: 'SOC, SIEM & Threat Hunting',
    domain: 'Defensive Operations',
    colorClass: '',
    skills: [
      { name: 'Splunk & Wazuh SIEM', level: 90, proficiency: 'Advanced Telemetry & Rule Tuning' },
      { name: 'Wireshark & Network Telemetry', level: 92, proficiency: 'Deep Packet Inspection & Flow Triage' },
      { name: 'MITRE ATT&CK Mapping', level: 88, proficiency: 'Adversary TTP Correlation' },
      { name: 'Snort / Suricata IDS/IPS', level: 84, proficiency: 'Signature & Anomaly Rules' },
      { name: 'Threat Intelligence (CTI)', level: 86, proficiency: 'STIX/TAXII, OTX & OSINT Feeds' },
    ]
  },
  {
    id: 'vapt-skills',
    icon: '⚔️',
    title: 'VAPT & Web / Network Pentesting',
    domain: 'Offensive Security',
    colorClass: 'go',
    skills: [
      { name: 'Burp Suite Professional', level: 94, proficiency: 'Web / API Vulnerability Interception' },
      { name: 'OWASP Top 10 & API Security', level: 92, proficiency: 'SQLi, XSS, SSRF, IDOR PoCs' },
      { name: 'Metasploit Framework', level: 85, proficiency: 'Exploit Execution & Payloads' },
      { name: 'Nmap & Network Recon', level: 90, proficiency: 'Port Scanning, Scripting & OS Fingerprinting' },
      { name: 'SQLMap & Fuzzing Tools', level: 88, proficiency: 'Automated Injection & Parameter Fuzzing' },
    ]
  },
  {
    id: 'malware-skills',
    icon: '🦠',
    title: 'Malware Analysis & Reverse Eng.',
    domain: 'Payload Dissection',
    colorClass: 're',
    skills: [
      { name: 'Ghidra Decompiler', level: 86, proficiency: 'Static Disassembly & Control Flow Graph' },
      { name: 'x64dbg / OllyDbg Debuggers', level: 82, proficiency: 'Dynamic Debugging & Breakpoints' },
      { name: 'PEStudio & Header Analysis', level: 88, proficiency: 'Entropy, IAT & Obfuscation Triage' },
      { name: 'YARA Rule Authoring', level: 85, proficiency: 'Custom Malicious Pattern Signatures' },
      { name: 'Sandbox Behavioral Triage', level: 87, proficiency: 'Procmon, Regshot & Network Tracing' },
    ]
  },
  {
    id: 'iot-skills',
    icon: '📡',
    title: 'IoT & Firmware Security',
    domain: 'Embedded & Hardware',
    colorClass: 'cy',
    skills: [
      { name: 'Binwalk & SquashFS Extraction', level: 90, proficiency: 'Filesystem Unpacking & Secret Scraping' },
      { name: 'QEMU Binary Emulation', level: 84, proficiency: 'ARM/MIPS Dynamic Execution' },
      { name: 'BLE & Wireless Packet Audits', level: 82, proficiency: 'GATT Interception & Replay Analysis' },
      { name: 'Hardware Interfaces (UART/JTAG)', level: 80, proficiency: 'Pinout Discovery & Serial Console Access' },
    ]
  },
  {
    id: 'ot-skills',
    icon: '🏭',
    title: 'OT / ICS & SCADA Security',
    domain: 'Critical Infrastructure',
    colorClass: 'or',
    skills: [
      { name: 'Modbus TCP / DNP3 Inspection', level: 86, proficiency: 'Industrial Protocol Frame Analysis' },
      { name: 'Purdue Model Architecture', level: 88, proficiency: 'Network Segmentation & Zone Conduits' },
      { name: 'PLC Anomaly & Setpoint Defense', level: 82, proficiency: 'Detecting Unauthorized Register Writes' },
      { name: 'Industrial Threat Mitigation', level: 84, proficiency: 'SCADA Incident Containment Standards' },
    ]
  },
  {
    id: 'dfir-skills',
    icon: '🔬',
    title: 'Digital Forensics & DFIR',
    domain: 'Investigation & Law Enforcement',
    colorClass: 'bl',
    skills: [
      { name: 'Autopsy & FTK Imager', level: 90, proficiency: 'Bitstream Disk Acquisition & Evidence Triage' },
      { name: 'Windows Artifact Analysis', level: 92, proficiency: 'Registry, Prefetch, LNK, Shellbags, $MFT' },
      { name: 'Volatility 3 Memory Forensics', level: 85, proficiency: 'RAM Dump Process & Injection Triage' },
      { name: 'Chain of Custody (ISO 27037)', level: 95, proficiency: 'Judicial Evidence Integrity & Reporting' },
    ]
  },
  {
    id: 'coding-skills',
    icon: '💻',
    title: 'Programming & Scripting Arsenal',
    domain: 'Development & Automation',
    colorClass: 'si',
    skills: [
      { name: 'Python (Security Scripting)', level: 95, proficiency: 'Automation, Sockets, Scapy, Exploit PoCs' },
      { name: 'Bash & Linux Shell Scripting', level: 88, proficiency: 'CLI Workflows, SysAdmin, Log Wrangling' },
      { name: 'Java (Sockets & Cryptography)', level: 82, proficiency: 'Custom RSA/AES Implementations' },
      { name: 'SQL & SQLite DB Forensics', level: 86, proficiency: 'Artifact Storage & Complex Queries' },
    ]
  },
  {
    id: 'cloud-skills',
    icon: '☁️',
    title: 'Cloud & Infrastructure Security',
    domain: 'Cloud Defense',
    colorClass: 'go',
    skills: [
      { name: 'AWS Lambda & Serverless', level: 85, proficiency: 'Event-driven Automated Quarantine' },
      { name: 'AWS CloudWatch & GuardDuty', level: 84, proficiency: 'Threat Telemetry & Metric Alarms' },
      { name: 'VPC Security Groups & IAM', level: 86, proficiency: 'Least Privilege Policy Hardening' },
      { name: 'Linux System Hardening', level: 90, proficiency: 'Kernel Security, SSH Keys, Permissions' },
    ]
  }
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
    }, { threshold: 0.15 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section className="sec" id="skills-s" ref={skillsRef}>
      <div className="sec-eyebrow">Technical Mastery</div>
      <div className="sec-h">Skills & Cyber Weapons</div>
      <div className="sec-rule"></div>
      <p className="skills-intro">
        Forged through continuous hands-on laboratory exploitation, NFSU coursework, and active research across defensive and offensive cybersecurity pillars.
      </p>

      {/* Category Pills */}
      <div className="skills-filter-bar">
        <button
          type="button"
          className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Weapons ({skillCategories.length})
        </button>
        {skillCategories.map(c => (
          <button
            key={c.id}
            type="button"
            className={`filter-pill ${activeCategory === c.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.icon} {c.title.split('&')[0]}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredCategories.map((group) => (
          <div className="skill-block" key={group.id}>
            <div className="sb-header">
              <span className="sb-icon">{group.icon}</span>
              <span className="sb-domain-tag">{group.domain}</span>
            </div>
            <h3 className="sb-title">{group.title}</h3>

            <div className="xp-list">
              {group.skills.map((item, j) => (
                <div className="xp-item" key={j}>
                  <div className="xp-label">
                    <span className="xp-skill-name">{item.name}</span>
                    <span className="xp-pct">{item.level}%</span>
                  </div>
                  <div className="xp-prof-hint">{item.proficiency}</div>
                  <div className="xp-track">
                    <div
                      className={`xp-fill ${group.colorClass}`}
                      data-w={item.level}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

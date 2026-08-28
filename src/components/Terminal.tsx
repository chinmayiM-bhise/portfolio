import React, { useState } from 'react';

interface CommandOutput {
  command: string;
  result: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'cat profile.json',
      result: (
        <div className="terminal-json">
          <div><span className="t-v">name</span>         → "Chinmayi Mahesh Bhise"</div>
          <div><span className="t-v">institution</span>  → "National Forensic Sciences University (NFSU)"</div>
          <div><span className="t-v">degree</span>       → "Integrated B.Tech + M.Tech in CSE (Cybersecurity)"</div>
          <div><span className="t-v">academic_cgpa</span>→ "8.82 / 10.0"</div>
          <div><span className="t-v">global_rank</span>  → <span className="t-out">"Top 3% — TryHackMe Worldwide 🏆"</span></div>
          <div><span className="t-v">core_domains</span> → ["SOC / SIEM", "VAPT", "Malware RE", "IoT Security", "OT/ICS SCADA", "DFIR"]</div>
          <div><span className="t-v">experience</span>   → "Digital Forensics Intern @ Uttar Pradesh Police"</div>
          <div><span className="t-v">status</span>       → <span className="t-out">"Available for Cybersecurity Roles ✓"</span></div>
        </div>
      )
    }
  ]);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let res: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        res = (
          <div className="t-help">
            <div className="t-line" style={{ color: 'var(--gold)' }}>Available Commands:</div>
            <div>▸ <span className="t-p">whoami</span>      - Display candidate dossier & background</div>
            <div>▸ <span className="t-p">domains</span>     - List all 6 cybersecurity specializations</div>
            <div>▸ <span className="t-p">soc</span>         - Blue team, SIEM & threat hunting capabilities</div>
            <div>▸ <span className="t-p">vapt</span>        - Offensive AppSec & network pentesting arsenal</div>
            <div>▸ <span className="t-p">malware</span>     - Reverse engineering & payload triage info</div>
            <div>▸ <span className="t-p">iot</span>         - IoT firmware extraction & hardware hacking</div>
            <div>▸ <span className="t-p">ot</span>          - OT/ICS & SCADA Modbus protocol defense</div>
            <div>▸ <span className="t-p">projects</span>    - Summary of all 8 core projects</div>
            <div>▸ <span className="t-p">certs</span>       - List of 9 verified credentials</div>
            <div>▸ <span className="t-p">contact</span>     - Direct contact channels & social links</div>
            <div>▸ <span className="t-p">clear</span>       - Clear terminal screen</div>
          </div>
        );
        break;

      case 'whoami':
        res = (
          <div>
            <div style={{ color: 'var(--zoro)', fontWeight: 'bold' }}>CHINMAYI BHISE — Cybersecurity Engineer</div>
            <div>Integrated B.Tech + M.Tech student at National Forensic Sciences University (NFSU).</div>
            <div>Specializing in both Offensive VAPT & Defensive SOC / DFIR with hands-on law enforcement casework.</div>
          </div>
        );
        break;

      case 'domains':
        res = (
          <div className="t-list">
            <div>1. 🛡️ <span className="t-p">SOC & Threat Hunting</span> (Splunk, Wazuh, MITRE ATT&CK, EDR)</div>
            <div>2. ⚔️ <span className="t-p">VAPT & AppSec</span> (Burp Suite Pro, OWASP Top 10, API Pentesting)</div>
            <div>3. 🦠 <span className="t-p">Malware Analysis & RE</span> (Ghidra, x64dbg, PEStudio, YARA)</div>
            <div>4. 📡 <span className="t-p">IoT & Firmware Security</span> (Binwalk, QEMU, UART/JTAG, BLE)</div>
            <div>5. 🏭 <span className="t-p">OT / ICS & SCADA Defense</span> (Modbus TCP, DNP3, Purdue Model)</div>
            <div>6. 🔬 <span className="t-p">Digital Forensics (DFIR)</span> (Windows Artifacts, Volatility, UP Police)</div>
          </div>
        );
        break;

      case 'soc':
        res = (
          <div>
            <div className="t-p">🛡️ SOC & Threat Operations:</div>
            <div>• SIEM Platforms: Splunk, Wazuh, AWS CloudWatch / GuardDuty</div>
            <div>• Automated Incident Response via AWS Lambda & SNS quarantine triggers</div>
            <div>• Threat Intelligence feeds: STIX/TAXII, AlienVault OTX, arcX certified</div>
          </div>
        );
        break;

      case 'vapt':
        res = (
          <div>
            <div className="t-p">⚔️ Vulnerability Assessment & Penetration Testing:</div>
            <div>• Certified AppSec Practitioner (CAP) · Web & API Security</div>
            <div>• Tools: Burp Suite Pro, Metasploit, Nmap, SQLMap, OWASP ZAP</div>
            <div>• Top 3% Global TryHackMe rank across hundreds of vulnerable target machines</div>
          </div>
        );
        break;

      case 'malware':
        res = (
          <div>
            <div className="t-p">🦠 Malware Analysis & Reverse Engineering:</div>
            <div>• Static & Dynamic analysis of Windows PE binaries using Ghidra, x64dbg, PEStudio</div>
            <div>• Behavioral monitoring in isolated sandboxes (Procmon, Wireshark, Regshot)</div>
            <div>• Authored YARA detection rules for IOC signature hunting</div>
          </div>
        );
        break;

      case 'iot':
        res = (
          <div>
            <div className="t-p">📡 IoT & Embedded Firmware Security:</div>
            <div>• Firmware extraction & SquashFS/CramFS unpacking via Binwalk</div>
            <div>• Binary emulation in QEMU for MIPS & ARM service fuzzing</div>
            <div>• BLE GATT characteristic sniffing & unauthenticated write remediation</div>
          </div>
        );
        break;

      case 'ot':
        res = (
          <div>
            <div className="t-p">🏭 OT / ICS & SCADA Security:</div>
            <div>• Industrial protocol packet inspection (Modbus TCP, DNP3)</div>
            <div>• Purdue Enterprise Reference Architecture (PERA) zone segmentation</div>
            <div>• Detection of unauthorized PLC coil writes & setpoint tampering</div>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div>
            <div className="t-p">🗺️ 8 Tactical Projects Indexed:</div>
            <div>01. IoT Firmware Reverse Engineering & Vuln Pipeline</div>
            <div>02. OT/ICS Modbus & SCADA Cyber Attack Defense Platform</div>
            <div>03. Multi-Artifact Windows Forensic Investigator & Timeline Suite</div>
            <div>04. Cloud-Native Automated SOC & Real-Time Threat Hunting Engine</div>
            <div>05. PE Ransomware & Behavioral Malware Triage Sandbox</div>
            <div>06. Cryptographic Protocol Assessment & Socket MITM Interceptor</div>
            <div>07. Threat Intelligence Aggregator & MITRE ATT&CK Navigator</div>
            <div>08. BLE & Wireless Sensor Network Hardware Attack Surface Lab</div>
          </div>
        );
        break;

      case 'certs':
        res = (
          <div>
            <div className="t-p">🏅 9 Verified Certifications:</div>
            <div>• Certified AppSec Practitioner (CAP) — The SecOps Group</div>
            <div>• Google Cybersecurity Professional Certificate</div>
            <div>• Threat Hunting Specialist — Security Blue Team</div>
            <div>• Threat Intelligence Analyst — arcX</div>
            <div>• AWS Cloud Security & Foundations (Semester 1 Badge)</div>
            <div>• Career Essentials in Cybersecurity — Microsoft & LinkedIn</div>
            <div>• Web Application Security & SQLi Defense — EC-Council</div>
            <div>• Digital Forensics & Chain-of-Custody — NFSU</div>
            <div>• TryHackMe Global Top 3% Combat Badge</div>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div>
            <div className="t-p">📡 Communication Channels:</div>
            <div>• Email: chinmayibhise2004@gmail.com</div>
            <div>• LinkedIn: linkedin.com/in/chinmayi-bhise</div>
            <div>• Phone: +91 9172650095</div>
            <div>• Location: Maharashtra, India / Open to Relocation</div>
          </div>
        );
        break;

      default:
        res = (
          <div style={{ color: '#e74c3c' }}>
            zsh: command not found: {cmdText}. Type <span style={{ color: 'var(--zoro)', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleCommand('help')}>help</span> to view valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdText, result: res }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <section className="terminal-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '0 1.5rem 4rem', position: 'relative', zIndex: 2 }}>
      <div className="terminal">
        <div className="t-bar">
          <div className="t-dot r"></div>
          <div className="t-dot y"></div>
          <div className="t-dot g"></div>
          <div className="t-title">chinmayi@cyber-navigator ~ zsh</div>
          <div className="t-telemetry">
            <span className="telemetry-live-dot"></span>
            <span>NODE: NFSU-CYBER-CORE</span>
            <span className="telemetry-pill">THREAT DEFENSE ACTIVE</span>
          </div>
        </div>

        {/* Quick Command Action Bar */}
        <div className="t-quick-bar">
          <span className="t-quick-lbl">EXECUTE:</span>
          {['help', 'whoami', 'domains', 'soc', 'vapt', 'malware', 'iot', 'ot', 'projects', 'certs', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="t-quick-btn"
              onClick={() => handleCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        <div className="t-body">
          {history.map((item, idx) => (
            <div key={idx} className="t-history-block">
              <div className="t-line">
                <span className="t-p">chinmayi@nfsu</span>:<span className="t-path-dir">~</span>$ <span className="t-cmd-text">{item.command}</span>
              </div>
              <div className="t-cmd-output">{item.result}</div>
            </div>
          ))}

          <div className="t-input-line">
            <span className="t-p">chinmayi@nfsu</span>:<span className="t-path-dir">~</span>${' '}
            <input
              type="text"
              className="t-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help' or click buttons above..."
              autoComplete="off"
              spellCheck="false"
            />
            <span className="t-c"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;

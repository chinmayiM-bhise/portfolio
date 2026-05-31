import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 4rem', position: 'relative', zIndex: 2 }}>
      <div className="terminal">
        <div className="t-bar">
          <div className="t-dot r"></div><div className="t-dot y"></div><div className="t-dot g"></div>
          <div className="t-path">chinmayi@cyber-navigator ~ zsh</div>
        </div>
        <div className="t-body">
          <div className="t-line"><span className="t-p">chinmayi@nfsu</span>:~$ <span style={{ color: '#e8ede0' }}>cat profile.json</span></div>
          <div className="t-line"><span className="t-v">name</span>       → Chinmayi Mahesh Bhise</div>
          <div className="t-line"><span className="t-v">university</span> → National Forensic Sciences University, Gujarat</div>
          <div className="t-line"><span className="t-v">degree</span>     → Integrated B.Tech + M.Tech, CSE (Cybersecurity)</div>
          <div className="t-line"><span className="t-v">cgpa</span>       → 8.82 / 10.0</div>
          <div className="t-line"><span className="t-v">rank</span>       → <span className="t-out">Top 3% — TryHackMe Global</span></div>
          <div className="t-line"><span className="t-v">focus</span>      → Digital Forensics · Incident Response · Vuln Research</div>
          <div className="t-line"><span className="t-v">status</span>     → <span className="t-out">Open to opportunities ✓</span></div>
          <div className="t-line" style={{ marginTop: '6px' }}><span className="t-p">chinmayi@nfsu</span>:~$ <span className="t-c"></span></div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

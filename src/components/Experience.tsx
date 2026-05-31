import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="sec" id="exp-s">
      <div className="sec-eyebrow">Experience</div>
      <div className="sec-h">Work History</div>
      <div className="sec-rule"></div>
      <div className="exp-block">
        <div className="exp-badge">July 2025</div>
        <div className="exp-org">Uttar Pradesh Police, Amroha</div>
        <div className="exp-role">Digital Forensics Intern</div>
        <ul className="exp-list">
          <li>Documented and evaluated digital evidence handling procedures to ensure strict adherence to chain-of-custody standards</li>
          <li>Analyzed case documentation workflows to identify inconsistencies and support evidence traceability in ongoing investigations</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

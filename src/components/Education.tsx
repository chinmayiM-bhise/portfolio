import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="sec" id="edu-s">
      <div className="sec-eyebrow">Education</div>
      <div className="sec-h">Academic Background</div>
      <div className="sec-rule"></div>
      <div className="edu-block">
        <div className="edu-emblem">🎓</div>
        <div>
          <div className="edu-school">National Forensic Sciences University</div>
          <div className="edu-deg">Integrated B.Tech + M.Tech · Computer Science & Engineering (Cybersecurity)</div>
          <div className="edu-meta">
            <span>2022 – 2027</span>
            <span>CGPA: <strong>8.78 / 10.0</strong></span>
            <span>Maharashtra, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

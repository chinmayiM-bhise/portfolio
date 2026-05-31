import React from 'react';

const Involvement: React.FC = () => {
  const involvement = [
    {
      icon: '📣',
      role: 'Social Media Manager · GDSC NFSU',
      desc: 'Drove content strategy and community engagement — boosted platform reach by 35% through consistent, tech-focused storytelling and campaign coordination.'
    },
    {
      icon: '🤝',
      role: 'Active NSS Candidate',
      desc: 'Participated in social outreach programs, building real-world teamwork, empathy, and problem-solving capabilities through community service initiatives.'
    },
    {
      icon: '🏆',
      role: 'Top 3% · TryHackMe Global',
      desc: 'Ranked in the top 3% of cybersecurity practitioners worldwide through consistent performance across CTF challenges, penetration testing labs, and practical security exercises.'
    }
  ];

  return (
    <div className="sec" id="inv-s">
      <div className="sec-eyebrow">Leadership</div>
      <div className="sec-h">Involvement</div>
      <div className="sec-rule"></div>
      <div className="inv-grid">
        {involvement.map((item, i) => (
          <div className="inv-block" key={i}>
            <span className="inv-icon">{item.icon}</span>
            <div className="inv-role">{item.role}</div>
            <div className="inv-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Involvement;

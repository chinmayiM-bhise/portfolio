import React from 'react';

const Involvement: React.FC = () => {
  const involvement = [
    {
      icon: '📣',
      badge: 'COMMUNITY & TECH LEADERSHIP',
      role: 'Social Media & Tech Outreach Lead · GDSC NFSU',
      org: 'Google Developer Student Clubs (GDSC)',
      desc: 'Directed digital content strategy, technical event promotion, and developer community engagement. Amplified social platform reach by 35% through consistent, tech-focused storytelling, workshop campaigns, and technical hackathon coordination.'
    },
    {
      icon: '🤝',
      badge: 'SOCIAL SERVICE & CITIZENSHIP',
      role: 'Active NSS Candidate & Social Outreach Volunteer',
      org: 'National Service Scheme (NSS)',
      desc: 'Spearheaded community service initiatives, cyber awareness sessions for students, and social impact drives. Fostered high-pressure crisis coordination, empathy, and collaborative problem-solving across multidisciplinary volunteer groups.'
    },
    {
      icon: '🏆',
      badge: 'GLOBAL COMPETITIVE DEFENSE',
      role: 'Top 3% Global Cybersecurity Ranker',
      org: 'TryHackMe Worldwide Platform',
      desc: 'Ranked in the top 3% of cybersecurity engineers globally. Solved over 100+ intensive labs spanning web exploitation, active directory attacks, blue team SOC telemetry analysis, network defense, and buffer overflows.'
    },
    {
      icon: '🛡️',
      badge: 'MENTORSHIP & WORKSHOPS',
      role: 'Cybersecurity Workshop Speaker & CTF Organizer',
      org: 'NFSU Student Cyber Cell',
      desc: 'Conducted hands-on sessions on basic digital forensics, password cracking countermeasures, and safe web practices for university peers, introducing newcomers to forensic tools and ethical hacking fundamentals.'
    }
  ];

  return (
    <section className="sec" id="inv-s">
      <div className="sec-eyebrow">Leadership & Impact</div>
      <div className="sec-h">Extracurricular & Community Involvement</div>
      <div className="sec-rule"></div>
      <p className="inv-intro">
        Beyond engineering — leading tech communities, mentoring peers in cyber defense, and participating in impactful social initiatives.
      </p>

      <div className="inv-grid">
        {involvement.map((item, i) => (
          <div className="inv-block" key={i}>
            <div className="inv-top">
              <span className="inv-icon">{item.icon}</span>
              <span className="inv-badge">{item.badge}</span>
            </div>
            <h3 className="inv-role">{item.role}</h3>
            <div className="inv-org">{item.org}</div>
            <p className="inv-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Involvement;

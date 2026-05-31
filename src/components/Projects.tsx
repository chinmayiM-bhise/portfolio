import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      num: '01 / ONGOING',
      icon: '🔬',
      title: 'IoT Firmware Security Analysis',
      desc: 'Static analysis of extracted IoT firmware images to identify hardcoded credentials, insecure configurations, and exposed services using reverse engineering techniques.',
      tags: ['Binwalk', 'Strings', 'Linux', 'Python']
    },
    {
      num: '02',
      icon: '🪟',
      title: 'Windows Artifacts Analysis Tool',
      desc: 'Python-based forensic tool to collect, parse, and visualize Windows artifacts — Registry, Prefetch, LNK, Shellbags — automating multi-artifact correlation for investigations.',
      tags: ['Python', 'SQLite', 'Tkinter', 'Registry']
    },
    {
      num: '03',
      icon: '☁️',
      title: 'Cloud-Based Intrusion Detection',
      desc: 'Event-driven IDS pipeline deployed on AWS using Lambda and CloudWatch, enabling automated alerting via SNS for suspicious EC2 activity detection.',
      tags: ['AWS Lambda', 'CloudWatch', 'EC2', 'SNS']
    },
    {
      num: '04',
      icon: '🔑',
      title: 'RSA Secure Chat & MITM Simulation',
      desc: 'Socket-based encrypted chat using a custom RSA implementation, with a live Man-in-the-Middle attack demo by factoring weak public keys and modifying intercepted messages.',
      tags: ['Java', 'BigInteger', 'Sockets', 'RSA']
    }
  ];

  return (
    <div className="sec" id="proj-s">
      <div className="sec-eyebrow">Work</div>
      <div className="sec-h">Projects</div>
      <div className="sec-rule"></div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="proj-card" key={i}>
            <div className="proj-num">{p.num}</div>
            <span className="proj-icon">{p.icon}</span>
            <div className="proj-title">{p.title}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-tags">
              {p.tags.map((tag, j) => <span className="tag" key={j}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

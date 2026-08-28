import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Canvas from './components/Canvas';
import Terminal from './components/Terminal';
import SecurityDomains from './components/SecurityDomains';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Involvement from './components/Involvement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AchievementToast from './components/AchievementToast';
import { SwordButton, SwordMessage } from './components/SwordElements';

const Wave: React.FC<{ inverted?: boolean }> = ({ inverted }) => (
  <div className="wave">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" height="50">
      {inverted ? (
        <path d="M0,25 C480,0 960,50 1440,25 L1440,0 L0,0 Z" fill="#111518" opacity="0.5" />
      ) : (
        <path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" fill="#111518" opacity="0.7" />
      )}
    </svg>
  </div>
);

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollStage, setScrollStage] = useState('Setting Sail');
  const [toast, setToast] = useState({ show: false, icon: '⚔️', msg: 'Nothing Happened' });
  const [swordMsg, setSwordMsg] = useState({ show: false, title: '', body: '' });
  const [mi, setMi] = useState(0);

  const seenSections = useRef(new Set<string>());

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const pct = totalScroll > 0 ? Math.round((window.scrollY / totalScroll) * 100) : 0;
      setScrollProgress(pct);
      const stages = ['Setting Sail', 'Calm Belt', 'Grand Line', 'New World', 'One Piece'];
      setScrollStage(stages[Math.min(4, Math.floor(pct / 22))]);
    };

    const handleClick = (e: MouseEvent) => {
      // Don't spawn sparkle if clicking interactive inputs or buttons
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON' || target.tagName === 'A') {
        return;
      }

      const items = ['⚔️', '🗡️', '✨', '🛡️', '⭐', '⚡'];
      const item = items[Math.floor(Math.random() * items.length)];
      const el = document.createElement('div');
      el.className = 'sfx';
      el.textContent = item;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.position = 'fixed';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 950);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);

    const achs = [
      { id: 'domains-s', ico: '🛡️', msg: 'Battle Stations Unlocked — SOC, VAPT, Malware, IoT, OT, DFIR' },
      { id: 'about-s', ico: '📜', msg: "Dossier Unlocked — The Cyber Navigator's Code" },
      { id: 'skills-s', ico: '⚔️', msg: 'Skill Tree Revealed — Three-Sword Cyber Mastery' },
      { id: 'proj-s', ico: '🗺️', msg: 'Projects Discovered — 8 Security Deployments Explored' },
      { id: 'exp-s', ico: '🏛️', msg: 'Arc Complete — UP Police Forensics & Lab Ops' },
      { id: 'certs-s', ico: '🏅', msg: 'Credentials Verified — CAP, Google, Blue Team, arcX' },
      { id: 'edu-s', ico: '🎓', msg: 'Academic Record — NFSU B.Tech + M.Tech (8.82 CGPA)' },
      { id: 'contact-s', ico: '📡', msg: "Den Den Mushi Active — Ready for Direct Dispatch" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !seenSections.current.has(e.target.id)) {
            seenSections.current.add(e.target.id);
            const a = achs.find((x) => x.id === e.target.id);
            if (a) {
              setToast({ show: true, icon: a.ico, msg: a.msg });
              setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3400);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    achs.forEach((a) => {
      const el = document.getElementById(a.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);

  const msgs = [
    { t: 'Welcome, Recruiter & Fellow Hacker!', b: "You've landed on the cyber battle station of Chinmayi Bhise. Ready to build unbreachable defenses! ⚔️" },
    { t: 'Three Swords, One Mission', b: 'VAPT for offensive testing, SOC for real-time threat hunting, and DFIR for unimpeachable forensics. 🗡️' },
    { t: 'Nothing Happened.', b: '...the hallmark of an exceptional security posture. Threats contained before breach. 🛡️' },
    { t: 'The Grand Line of Cybersecurity', b: 'From analyzing firmware binaries to defending SCADA Modbus PLCs, every attack vector is mapped.' },
    { t: 'TryHackMe Top 3%', b: 'Hundreds of challenge labs conquered. Hands-on muscle memory in active exploitation & defense. 🏆' },
    { t: 'National Forensic Sciences University', b: 'Trained at India premier forensic & cybersecurity institute under MHA. Rigorous standards. 🎓' },
    { t: 'Den Den Mushi Ready', b: 'Looking for a dedicated engineer in SOC, VAPT, Forensics, or OT/IoT? Let’s connect! 📡' }
  ];

  const handleSwordClick = () => {
    const m = msgs[mi % msgs.length];
    setMi((prev) => prev + 1);
    setSwordMsg({ show: true, title: m.t, body: m.b });

    for (let i = 0; i < 6; i++) {
      const el = document.createElement('div');
      el.className = 'sfx';
      el.textContent = ['⚔️', '🗡️', '✨', '⭐', '🛡️', '⚡'][Math.floor(Math.random() * 6)];
      el.style.right = `${90 + Math.random() * 100}px`;
      el.style.bottom = `${80 + Math.random() * 120}px`;
      el.style.left = 'auto';
      el.style.top = 'auto';
      el.style.position = 'fixed';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 950);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="prog-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div id="prog-label" style={{ opacity: scrollProgress > 2 ? 1 : 0 }}>
        {scrollStage} · {scrollProgress}%
      </div>

      {/* Cyber Constellation Background Canvas */}
      <Canvas />

      {/* Achievement Popup Toast */}
      <AchievementToast {...toast} />

      {/* Zoro Katana Action Button */}
      <SwordButton onClick={handleSwordClick} />
      <SwordMessage
        {...swordMsg}
        onClose={() => setSwordMsg((prev) => ({ ...prev, show: false }))}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <Wave />
        <Terminal />
        <Wave inverted />
        <SecurityDomains />
        <Wave />
        <About />
        <Wave inverted />
        <Skills />
        <Wave />
        <Projects />
        <Wave inverted />
        <Experience />
        <Certifications />
        <Wave />
        <Education />
        <Involvement />
        <Wave inverted />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;

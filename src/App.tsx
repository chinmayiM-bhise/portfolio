import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Canvas from './components/Canvas';
import Terminal from './components/Terminal';
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
  const [musicOn, setMusicOn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollStage, setScrollStage] = useState('Setting Sail');
  const [toast, setToast] = useState({ show: false, icon: '⚔️', msg: 'Nothing Happened' });
  const [swordMsg, setSwordMsg] = useState({ show: false, title: '', body: '' });
  const [mi, setMi] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const noteTimerRef = useRef<number | null>(null);
  const noteIdxRef = useRef(0);
  const seenSections = useRef(new Set<string>());

  const melody = [
    262, 294, 330, 349, 392, 440, 494, 523,
    494, 440, 392, 349, 330, 294, 262, 0,
    330, 392, 440, 494, 523, 587, 659, 698,
    659, 587, 523, 494, 440, 392, 330, 0
  ];

  const playNote = (freq: number, dur: number) => {
    if (!freq || !audioCtxRef.current) return;
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    osc.type = 'square';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.06, audioCtxRef.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + dur * 0.9);
    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);
    osc.start();
    osc.stop(audioCtxRef.current.currentTime + dur);
  };

  const tickMelody = () => {
    if (!musicOn) return;
    playNote(melody[noteIdxRef.current % melody.length], 0.18);
    noteIdxRef.current++;
    noteTimerRef.current = window.setTimeout(tickMelody, 200);
  };

  const toggleMusic = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    setMusicOn(!musicOn);
  };

  useEffect(() => {
    if (musicOn) {
      tickMelody();
    } else if (noteTimerRef.current) {
      clearTimeout(noteTimerRef.current);
    }
    return () => {
      if (noteTimerRef.current) clearTimeout(noteTimerRef.current);
    };
  }, [musicOn]);

  useEffect(() => {
    const handleScroll = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) || 0;
      setScrollProgress(pct);
      const stages = ['Setting Sail', 'Calm Belt', 'Grand Line', 'New World', 'One Piece'];
      setScrollStage(stages[Math.min(4, Math.floor(pct / 22))]);
    };

    const handleClick = (e: MouseEvent) => {
      const items = ['⚔️', '🗡️', '✨', '🌸', '⭐'];
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

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    const achs = [
      { id: 'about-s', ico: '📜', msg: "Profile Unlocked — The Navigator's Story" },
      { id: 'skills-s', ico: '⚔️', msg: 'Skill Tree Revealed — Three Sword Style' },
      { id: 'proj-s', ico: '🗺️', msg: 'Projects Discovered — Islands Conquered' },
      { id: 'exp-s', ico: '🏛️', msg: 'Arc Complete — Real World Experience' },
      { id: 'certs-s', ico: '🏅', msg: 'Haki Mastered — Credentials Verified' },
      { id: 'contact-s', ico: '📡', msg: "Den Den Mushi Ready — Let's Connect" },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !seenSections.current.has(e.target.id)) {
          seenSections.current.add(e.target.id);
          const a = achs.find((x) => x.id === e.target.id);
          if (a) {
            setToast({ show: true, icon: a.ico, msg: a.msg });
            setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3200);
          }
        }
      });
    }, { threshold: 0.4 });

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
    { t: 'Good Day, Navigator!', b: "You've landed on exactly the right page. Welcome aboard! ⚔️" },
    { t: 'Right Port, Right Time!', b: 'This portfolio was made for someone like you. Take a look around!' },
    { t: 'Nothing Happened.', b: '...just kidding. A lot happened. Scroll down and see! 🗡️' },
    { t: 'The Grand Line of Cyber', b: 'Every great security engineer started somewhere. This is where mine begins.' },
    { t: 'Three Swords, One Goal', b: 'Forensics. Cloud. Cryptography. Three specialties — one mission: security. ⚔️' },
    { t: 'You Found the Log Pose!', b: "The treasure you seek? It's right here — a dedicated cybersecurity engineer 🏴‍☠️" },
    { t: 'Zoro Would Approve', b: 'Getting lost is part of the journey. But you found the right place!' },
    { t: 'Hello, Nakama!', b: "Whether you're a recruiter, researcher, or fellow hacker — glad you're here!" },
  ];

  const handleSwordClick = () => {
    const m = msgs[mi % msgs.length];
    setMi((prev) => prev + 1);
    setSwordMsg({ show: true, title: m.t, body: m.b });

    for (let i = 0; i < 6; i++) {
      const el = document.createElement('div');
      el.className = 'sfx';
      el.textContent = ['⚔️', '🗡️', '✨', '⭐', '🌸', '💫'][Math.floor(Math.random() * 6)];
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
      <div id="prog-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div id="prog-label" style={{ opacity: scrollProgress > 2 ? 1 : 0 }}>
        {scrollStage} · {scrollProgress}%
      </div>

      <Canvas />

      <AchievementToast {...toast} />

      <SwordButton onClick={handleSwordClick} />
      <SwordMessage
        {...swordMsg}
        onClose={() => setSwordMsg((prev) => ({ ...prev, show: false }))}
      />

      <Navbar musicOn={musicOn} toggleMusic={toggleMusic} />

      <main>
        <Hero />
        <Wave />
        <Terminal />
        <Wave inverted />
        <About />
        <Education />
        <Wave />
        <Skills />
        <Wave inverted />
        <Projects />
        <Experience />
        <Certifications />
        <Wave />
        <Involvement />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;

import React, { useEffect, useRef } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    let W: number, H: number;
    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const petals: any[] = [];
    const stars: any[] = [];

    for (let i = 0; i < 35; i++) {
      petals.push({
        x: Math.random() * 2000,
        y: Math.random() * -1000,
        sz: Math.random() * 6 + 3,
        spd: Math.random() * 0.8 + 0.3,
        wind: Math.random() * 0.4 - 0.2,
        rot: Math.random() * 360,
        rs: Math.random() * 1.5 - 0.75,
        op: Math.random() * 0.25 + 0.1
      });
    }

    for (let i = 0; i < 60; i++) {
      stars.push({
        x: Math.random() * 2000,
        y: Math.random() * 1000,
        sz: Math.random() * 1.5 + 0.3,
        op: Math.random(),
        pulse: Math.random() * 0.015 + 0.003
      });
    }

    let fr = 0;
    const animate = () => {
      cx.clearRect(0, 0, W, H);
      fr++;

      stars.forEach((s) => {
        s.op += s.pulse;
        if (s.op > 0.6 || s.op < 0.05) s.pulse *= -1;
        cx.globalAlpha = Math.max(0, Math.min(0.6, s.op));
        cx.fillStyle = '#c9a84c';
        cx.beginPath();
        cx.arc(s.x % W, s.y % H, s.sz, 0, Math.PI * 2);
        cx.fill();
      });

      petals.forEach((p) => {
        p.y += p.spd;
        p.x += p.wind + Math.sin(fr * 0.008 + p.x * 0.01) * 0.2;
        p.rot += p.rs;

        if (p.y > H + 20) {
          p.y = -20;
          p.x = Math.random() * W;
        }
        if (p.x > W + 20) p.x = -20;
        if (p.x < -20) p.x = W + 20;

        cx.save();
        cx.globalAlpha = p.op;
        cx.translate(p.x, p.y);
        cx.rotate((p.rot * Math.PI) / 180);
        cx.fillStyle = '#d4a0b0';
        cx.beginPath();
        cx.ellipse(0, 0, p.sz, p.sz * 0.55, 0, 0, Math.PI * 2);
        cx.fill();
        cx.restore();
      });

      cx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="fx-canvas" ref={canvasRef} />;
};

export default Canvas;

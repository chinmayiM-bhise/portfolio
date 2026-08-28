import React, { useEffect, useRef } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    let W = (cv.width = window.innerWidth);
    let H = (cv.height = window.innerHeight);

    const handleResize = () => {
      if (!cv) return;
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive cyber constellation
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particles array
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }[] = [];

    const nodeCount = Math.min(45, Math.floor(window.innerWidth / 30));
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#6aab4e' : i % 3 === 1 ? '#c9a84c' : '#8a9fa6',
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    // Sakura / cyber ember petals
    const embers: {
      x: number;
      y: number;
      sz: number;
      spd: number;
      wind: number;
      rot: number;
      rs: number;
      op: number;
    }[] = [];

    for (let i = 0; i < 28; i++) {
      embers.push({
        x: Math.random() * W,
        y: Math.random() * -H,
        sz: Math.random() * 5 + 2.5,
        spd: Math.random() * 0.7 + 0.3,
        wind: Math.random() * 0.4 - 0.2,
        rot: Math.random() * 360,
        rs: Math.random() * 1.5 - 0.75,
        op: Math.random() * 0.25 + 0.1
      });
    }

    let fr = 0;
    let animId: number;

    const animate = () => {
      cx.clearRect(0, 0, W, H);
      fr++;

      // Draw cyber constellation network
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        // Draw node
        cx.save();
        cx.globalAlpha = n.alpha;
        cx.fillStyle = n.color;
        cx.beginPath();
        cx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        cx.fill();
        cx.restore();

        // Connect adjacent nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            cx.save();
            cx.globalAlpha = (1 - dist / 110) * 0.15;
            cx.strokeStyle = '#6aab4e';
            cx.lineWidth = 0.8;
            cx.beginPath();
            cx.moveTo(n.x, n.y);
            cx.lineTo(n2.x, n2.y);
            cx.stroke();
            cx.restore();
          }
        }

        // Connect to mouse if active
        if (mouse.active) {
          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 140) {
            cx.save();
            cx.globalAlpha = (1 - mdist / 140) * 0.35;
            cx.strokeStyle = '#c9a84c';
            cx.lineWidth = 1;
            cx.beginPath();
            cx.moveTo(n.x, n.y);
            cx.lineTo(mouse.x, mouse.y);
            cx.stroke();
            cx.restore();
          }
        }
      }

      // Draw floating cyber petals / sakura
      embers.forEach((p) => {
        p.y += p.spd;
        p.x += p.wind + Math.sin(fr * 0.008 + p.x * 0.01) * 0.25;
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

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas id="fx-canvas" ref={canvasRef} />;
};

export default Canvas;

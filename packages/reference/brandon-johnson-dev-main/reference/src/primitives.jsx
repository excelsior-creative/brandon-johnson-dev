/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Icons ----------
const Icon = ({ d, size = 18, stroke = "currentColor", fill = "none", sw = 1.6, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

const IconArrow = (p) => <Icon {...p}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></Icon>;
const IconPlay = (p) => <Icon {...p}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></Icon>;
const IconUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
const IconCode = (p) => <Icon {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Icon>;
const IconRocket = (p) => <Icon {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></Icon>;
const IconChevDown = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;
const IconGithub = (p) => <Icon {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></Icon>;
const IconLinkedin = (p) => <Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Icon>;
const IconX = (p) => <Icon {...p}><path d="M18 6L6 18"/><path d="M6 6l12 12"/></Icon>;
const IconYT = (p) => <Icon {...p}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></Icon>;

// ---------- Cosmic background (canvas starfield) ----------
function Starfield({ density = 180, showNebula = true, showGrid = true, nebulaIntensity = 0.7 }) {
  const cref = useRef(null);
  useEffect(() => {
    const c = cref.current; if (!c) return;
    const ctx = c.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w, h, stars;
    const init = () => {
      w = c.offsetWidth; h = c.offsetHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      stars = Array.from({length: density}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        r: Math.random()*1.3 + 0.2,
        o: Math.random()*0.7 + 0.2,
        s: Math.random()*0.02 + 0.005,
        tw: Math.random()*Math.PI*2,
      }));
    };
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      for (const s of stars) {
        s.tw += s.s;
        const o = s.o * (0.6 + 0.4 * Math.sin(s.tw));
        ctx.globalAlpha = o;
        ctx.fillStyle = '#dfe6ff';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    init();
    draw();
    const ro = new ResizeObserver(init);
    ro.observe(c);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [density]);

  return (
    <div className="space-bg" style={{ "--nebula-i": nebulaIntensity }}>
      {showNebula && <div className="nebula" />}
      {showGrid && <div className="grid" />}
      <canvas ref={cref} className="stars-canvas" />
    </div>
  );
}

window.Icon = Icon;
window.IconArrow = IconArrow;
window.IconPlay = IconPlay;
window.IconUsers = IconUsers;
window.IconCode = IconCode;
window.IconRocket = IconRocket;
window.IconChevDown = IconChevDown;
window.IconGithub = IconGithub;
window.IconLinkedin = IconLinkedin;
window.IconX = IconX;
window.IconYT = IconYT;
window.Starfield = Starfield;

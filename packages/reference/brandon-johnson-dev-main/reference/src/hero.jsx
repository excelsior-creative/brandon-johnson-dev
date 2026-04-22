/* global React */
const { useEffect, useState } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={"nav-wrap " + (scrolled ? "scrolled" : "")}>
      <div className="container nav">
        <div className="nav-brand">
          <div className="avatar">BJ</div>
          <div className="name">Brandon Johnson</div>
        </div>
        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#ai-labs">AI Labs</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Let's Connect <window.IconArrow size={14} />
        </a>
      </div>
    </div>
  );
}

function Hero({ tweaks }) {
  const { IconArrow, IconPlay, IconUsers, IconCode, IconRocket, IconChevDown, Starfield } = window;
  const headline = tweaks.headline || "Building the Future. Automating Everything.";
  const words = headline.split(/\s+/);
  // highlight last word as gradient
  const last = words.pop();

  return (
    <section className="hero" id="home" data-screen-label="01 Hero">
      <Starfield density={tweaks.starDensity} showGrid={tweaks.showGrid} nebulaIntensity={tweaks.nebulaIntensity} />
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="eyebrow">
            <span className="dot"></span>
            AI Automation &amp; Software Engineering
          </span>
          <h1>
            {words.join(' ')}{' '}
            <span className="emph">{last}</span>
          </h1>
          <p className="lede">
            I build AI agents, automation systems, and scalable software that turn ideas into impact.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">
              Explore My Work <IconArrow size={15} />
            </a>
            <a href="#ai-labs" className="btn btn-ghost">
              <IconPlay size={12} /> View AI Projects
            </a>
          </div>
          <div className="stat-row">
            <div className="stat">
              <IconUsers size={18} className="icon" />
              <div className="num">650K+</div>
              <div className="lbl">YouTube Subscribers</div>
            </div>
            <div className="stat">
              <IconCode size={18} className="icon" />
              <div className="num">10+</div>
              <div className="lbl">Years Building</div>
            </div>
            <div className="stat">
              <IconRocket size={18} className="icon" />
              <div className="num">AI-First</div>
              <div className="lbl">Automation Focused</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-art">
            <div className="portrait-ph">
              <HeroSceneSVG />
              <div className="ph-note">
                placeholder — drop a cinematic portrait here: you seated at a floating multi-monitor command center, deep space behind. aspect 1:1.
              </div>
            </div>
            <div className="hero-panel p1">
              <div className="label">AI Agent Performance</div>
              <div className="val">98.7%</div>
            </div>
            <div className="hero-panel p2">
              <div className="label">Active Agents</div>
              <div className="val">614</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="arrow"><IconChevDown size={14} /></div>
        Scroll to explore
      </div>
    </section>
  );
}

// Stylized SVG scene for the hero while awaiting real photography
function HeroSceneSVG() {
  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <defs>
        <radialGradient id="neb1" cx="0.7" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="neb2" cx="0.3" cy="0.85" r="0.5">
          <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#d946ef" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#353764"/>
          <stop offset="60%" stopColor="#0b0c22"/>
          <stop offset="100%" stopColor="#000"/>
        </radialGradient>
        <linearGradient id="monglow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      <rect width="600" height="600" fill="#05060f"/>
      <rect width="600" height="600" fill="url(#neb1)"/>
      <rect width="600" height="600" fill="url(#neb2)"/>

      {/* stars */}
      {Array.from({length: 70}).map((_,i) => {
        const x = (i*37) % 600 + (i%5)*7;
        const y = (i*71) % 600 + (i%3)*13;
        const r = (i%11 === 0) ? 1.6 : (i%5 === 0 ? 1 : 0.6);
        return <circle key={i} cx={x} cy={y} r={r} fill="#eaf0ff" opacity={0.4 + ((i*13)%60)/100}/>;
      })}

      {/* planet */}
      <circle cx="150" cy="150" r="58" fill="url(#planet)"/>
      <ellipse cx="140" cy="135" rx="16" ry="4" fill="#fff" opacity="0.06"/>

      {/* monitor array — six monitors arced */}
      <g transform="translate(330,240)">
        {/* back glow */}
        <rect x="-10" y="-10" width="280" height="170" rx="8" fill="url(#monglow)" opacity="0.15"/>
        {/* top row */}
        <g>
          <rect x="0" y="0" width="85" height="55" rx="4" fill="#0a0d20" stroke="#1a1d3a"/>
          <rect x="92" y="0" width="85" height="55" rx="4" fill="#0a0d20" stroke="#1a1d3a"/>
          <rect x="184" y="0" width="85" height="55" rx="4" fill="#0a0d20" stroke="#1a1d3a"/>
        </g>
        {/* bottom row */}
        <g transform="translate(0,60)">
          <rect x="0" y="0" width="85" height="55" rx="4" fill="#0a0d20" stroke="#1a1d3a"/>
          <rect x="92" y="0" width="85" height="55" rx="4" fill="#0a0d20" stroke="#1a1d3a"/>
          <rect x="184" y="0" width="85" height="55" rx="4" fill="#0a0d20" stroke="#1a1d3a"/>
        </g>
        {/* faux code lines */}
        {Array.from({length: 2}).map((_, row) =>
          Array.from({length: 3}).map((_, col) => (
            <g key={`${row}-${col}`} transform={`translate(${col*92+4}, ${row*60+6})`}>
              {[0,1,2,3,4,5,6].map(i => (
                <rect key={i} x={4} y={4 + i*6} width={40 + ((i*row+col*3)*7) % 35} height={2}
                  fill={i%3===0 ? '#22d3ee' : i%3===1 ? '#7c5cff' : '#d946ef'} opacity={0.7}/>
              ))}
            </g>
          ))
        )}
      </g>

      {/* figure silhouette at desk */}
      <g transform="translate(280,330)">
        {/* desk */}
        <rect x="0" y="110" width="300" height="14" rx="3" fill="#15182e"/>
        <rect x="14" y="124" width="6" height="80" fill="#0a0c1e"/>
        <rect x="280" y="124" width="6" height="80" fill="#0a0c1e"/>
        {/* chair */}
        <rect x="80" y="100" width="90" height="110" rx="20" fill="#0a0c1e" stroke="#1a1d3a"/>
        {/* figure - silhouette */}
        <g fill="#1a1d3a">
          <circle cx="130" cy="75" r="22"/>
          <path d="M 95 100 Q 95 85 130 85 Q 165 85 165 100 L 170 140 L 90 140 Z" />
          <rect x="155" y="115" width="60" height="10" rx="3"/>
        </g>
        {/* mug */}
        <rect x="200" y="105" width="14" height="12" rx="2" fill="#1a1d3a"/>
      </g>

      {/* floating island edge */}
      <path d="M 200 510 Q 300 470 400 500 Q 500 520 560 510 L 600 600 L 150 600 Z"
        fill="#0a0c1e" opacity="0.85"/>

      {/* gradient wash top */}
      <rect width="600" height="600" fill="url(#neb1)" opacity="0.3"/>
    </svg>
  );
}

window.Nav = Nav;
window.Hero = Hero;

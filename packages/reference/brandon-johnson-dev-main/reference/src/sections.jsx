/* global React */
const { useState } = React;

// ---------- Tech marquee ----------
const TECHS = [
  { name: "ElizaOS", icon: "◉" },
  { name: "Next.js", icon: "▲" },
  { name: "AWS", icon: "☁" },
  { name: "OpenAI", icon: "✦" },
  { name: "Solana", icon: "◈" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Python", icon: "{ }" },
  { name: "PostgreSQL", icon: "▮" },
  { name: "Anthropic", icon: "✺" },
];

function TechMarquee() {
  const row = [...TECHS, ...TECHS];
  return (
    <section className="tech-section" data-screen-label="02 Tech">
      <div className="container">
        <div className="section-head" style={{marginBottom: 24}}>
          <h2 style={{fontSize: 'clamp(28px,3.2vw,42px)'}}>Accelerating results with the latest tech</h2>
          <p>My software has been having an impact on clients for over twenty years — and it just keeps getting better.</p>
        </div>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {row.map((t, i) => (
            <div key={i} className="logo">
              <span style={{fontFamily:'JetBrains Mono, monospace', color:'var(--cyan)'}}>{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Capabilities ----------
const CAPS = [
  { t: "Front-End Engineering", d: "Crafting responsive, performant UIs with React, TypeScript, and modern web technologies.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  { t: "Full-Stack Development", d: "End-to-end solutions from database design to API development and front-end implementation.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>
  },
  { t: "Data Engineering", d: "Designing and implementing data pipelines, ETL processes, and analytics infrastructure.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v4M6 11v4M6 19v2"/><circle cx="6" cy="9" r="2"/><circle cx="6" cy="17" r="2"/><path d="M18 3v2M18 9v4M18 17v4"/><circle cx="18" cy="7" r="2"/><circle cx="18" cy="15" r="2"/></svg>
  },
  { t: "AI Development", d: "Implementing and deploying machine learning models and AI-powered solutions.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
  },
  { t: "Product Management", d: "Driving product strategy, roadmap planning, and cross-functional team leadership.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="10" r="2"/><circle cx="20" cy="14" r="2"/></svg>
  },
  { t: "Technical Architecture", d: "Designing scalable system architectures and making key technical decisions.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><line x1="10" y1="6.5" x2="14" y2="6.5"/><line x1="6.5" y1="10" x2="6.5" y2="14"/><line x1="17.5" y1="10" x2="17.5" y2="14"/><line x1="10" y1="17.5" x2="14" y2="17.5"/></svg>
  },
  { t: "Process Optimization", d: "Optimizing application performance, from front-end rendering to backend efficiency.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  },
  { t: "Technical Leadership", d: "Mentoring teams and driving technical excellence across projects.", icon:
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-3.5-3.5a2.5 2.5 0 1 1 3.5-3.5 2.5 2.5 0 1 1 3.5 3.5L12 15z"/></svg>
  },
];

function Capabilities() {
  return (
    <section data-screen-label="03 Capabilities">
      <div className="container">
        <div className="section-head">
          <span className="kicker">What I do</span>
          <h2>Versatile <span className="emph">tech professional</span></h2>
          <p>From front-end engineering to full-stack development, data engineering, AI, and product management — I bring a comprehensive technical perspective to every project.</p>
        </div>
        <div className="cap-grid">
          {CAPS.map((c, i) => (
            <div key={i} className="cap-cell">
              <div className="cap-icon">{c.icon}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Experience ----------
const EXPS = [
  { year: "2023 — Now", title: "AI Automation Lead", co: "Independent / Labs", desc: "Building 600+ AI agent fleets, multi-LLM orchestration, and automation tooling.", c1: "#2a2163", c2: "#05060f" },
  { year: "2016 — 2021", title: "Solutions Architect", co: "Excelsior Creative", desc: "Co-founded a creative dev agency delivering custom web solutions for SMBs.", c1: "#5b1a1f", c2: "#05060f" },
  { year: "2018 — 2021", title: "Software Engineering Lead", co: "OCERS", desc: "Led a team focused on business intelligence, analytics, and reporting.", c1: "#1a3b1f", c2: "#05060f" },
  { year: "2022 — 2025", title: "Senior Software Engineer", co: "Synctera", desc: "Built fintech infrastructure for banking-as-a-service products at scale.", c1: "#143653", c2: "#05060f" },
];

function Experience() {
  return (
    <section id="about" data-screen-label="04 Experience">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Track record</span>
          <h2>Work <span className="emph">experience</span></h2>
          <p>Over 15 years of experience in software development and technical leadership.</p>
        </div>
        <div className="exp-track">
          {EXPS.map((e, i) => (
            <div key={i} className="exp-card">
              <div className="ph-photo" style={{"--c1": e.c1, "--c2": e.c2}} />
              <div className="exp-fade" />
              <div className="year">{e.year}</div>
              <h4>{e.title}</h4>
              <div className="co">{e.co}</div>
              <div className="desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- AI Agents / Eliza ----------
function AgentsBlock() {
  return (
    <section id="ai-labs" data-screen-label="05 AI Labs">
      <div className="container">
        <div className="section-head">
          <span className="kicker">AI Labs</span>
          <h2>Pioneering AI agent development <br/>with the <span className="emph">Eliza framework</span></h2>
          <p>Expert in building sophisticated AI agents that automate complex tasks — from data processing to full system automation.</p>
        </div>

        <div className="agents-grid">
          <div className="agent-card">
            <h4>Leading Eliza framework contributor</h4>
            <p>Core contributor to the Eliza framework, pushing the boundaries of agent development and automation capabilities.</p>
            <div className="agent-vis">
              <div className="chat-pills">
                <div className="chat-pill">I need to generalize from the core.</div>
                <div className="chat-pill mine">Certainly. I'm sure there are more.</div>
                <div className="chat-pill">I don't know who you're talking about.</div>
                <div className="chat-pill mine">Are you sure?</div>
              </div>
            </div>
          </div>

          <div className="agent-card">
            <h4>Advanced agent architecture</h4>
            <p>Designed and implemented sophisticated agent systems capable of complex task automation and decision making.</p>
            <div className="agent-vis" style={{alignItems:'center'}}>
              <div style={{display:'flex', flexDirection:'column', gap:10, width:'100%', maxWidth: 320}}>
                <div className="chat-pill" style={{alignSelf:'flex-end'}}>Who do you think you are?</div>
                <div className="chat-pill mine" style={{alignSelf:'flex-end'}}>I, Batman.</div>
                <div className="chat-pill" style={{alignSelf:'flex-end', background:'rgba(124,92,255,0.08)', borderColor:'rgba(124,92,255,0.25)'}}>
                  <div style={{fontSize:10, color:'var(--ink-faint)', marginBottom:2}}>Now Playing</div>
                  Something in the way — Nirvana
                </div>
              </div>
            </div>
          </div>

          <div className="agent-card">
            <h4>Multi-model integration expert</h4>
            <p>Deep expertise integrating diverse LLM architectures and creating hybrid AI solutions for enterprise needs.</p>
            <div className="agent-vis">
              <div className="llm-stack">
                {[
                  { n: "Grok LLM", d: "23rd March", on: false },
                  { n: "OpenAI GPT-5", d: "21st March", on: true },
                  { n: "Claude Opus 4.5", d: "3rd May", on: true },
                  { n: "Llama 3", d: "1st April", on: true },
                ].map((r, i) => (
                  <div key={i} className="llm-row">
                    <div style={{display:'flex', alignItems:'center', gap:10}}>
                      <span className={"dot " + (r.on ? '' : 'off')}/>
                      <span>{r.n}</span>
                    </div>
                    <span style={{color:'var(--ink-faint)', fontSize:12}}>{r.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="agent-card">
            <h4>Production-ready solutions</h4>
            <p>Track record of deploying robust, scalable agent systems that handle mission-critical automation tasks.</p>
            <div className="agent-vis" style={{alignItems:'center'}}>
              <div className="globe"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Featured projects ----------
const PROJECTS = [
  { t: "Banking-as-a-Service Platform", d: "Enterprise-grade financial platform processing billions daily. Bridges banks to fintech startups with real-time settlement.", stack:["Node.js","TypeScript","PostgreSQL","Redis","AWS","Kubernetes"], c1: "#2a2558", c2: "#0a0d20" },
  { t: "Web3 DeFi Platform", d: "Decentralized finance platform scaled to $30M TVL within one year. Built with robust smart contracts and advanced trading features.", stack:["Solidity","React","Web3.js","TheGraph","Hardhat"], c1: "#1a3b58", c2: "#0a0d20" },
  { t: "Crypto Trading Bot Platform", d: "High-frequency trading bot orchestration platform for cryptocurrency markets. Features automated strategy execution and risk management.", stack:["Python","FastAPI","MongoDB","WebSocket","Docker"], c1: "#3b1a58", c2: "#0a0d20" },
  { t: "Shopify SaaS Platform", d: "Shopify app serving 2500+ merchants with 600+ daily active users. Provides advanced analytics, automation tools, and inventory features.", stack:["Next.js","GraphQL","Node.js","PostgreSQL","Redis"], c1: "#2a582a", c2: "#0a0d20" },
  { t: "Legal Review Portal", d: "Workflow management system for legal review processes, serving thousands of users handling document management and secure communication.", stack:["React","Node.js","SQL Server","Azure","Redux"], c1: "#583b1a", c2: "#0a0d20" },
  { t: "NASA Cost Tracking System", d: "Web-based cost reporting application used by NASA & DoD, tracking over $200M in annualized funding with interactive dashboards.", stack:["C#","SQL Server","SSRS","PowerBI",".NET"], c1: "#1a3658", c2: "#0a0d20" },
];

function Projects() {
  return (
    <section id="work" data-screen-label="06 Projects">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Selected work</span>
          <h2>Featured <span className="emph">projects</span></h2>
          <p>A showcase of enterprise-scale applications and platforms I've architected and delivered.</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="proj-card">
              <div className="proj-media" style={{background: `linear-gradient(135deg, ${p.c1}, ${p.c2})`}}>
                <ProjectArt index={i} />
              </div>
              <div className="proj-body">
                <h4>{p.t}</h4>
                <p>{p.d}</p>
                <div className="chip-row">
                  {p.stack.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArt({ index }) {
  // light decorative SVG per card
  const seed = (index * 37) % 100;
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      {Array.from({length: 30}).map((_, i) => {
        const x = (seed + i*23) % 400;
        const y = (seed + i*47) % 250;
        return <circle key={i} cx={x} cy={y} r={0.8 + (i%3)*0.6} fill="#fff" opacity={0.35 + (i%5)*0.1} />;
      })}
      <circle cx={60 + (seed%100)} cy={80 + (seed%60)} r={45} fill="rgba(124,92,255,0.25)" />
      <circle cx={300 - (seed%80)} cy={160 - (seed%40)} r={35} fill="rgba(56,189,248,0.25)" />
    </svg>
  );
}

// ---------- Testimonials ----------
const TESTIS = [
  { n: "Allan Browning", r: "Software Engineer", q: "Brandon is reliable, dedicated, and has an in-depth understanding of a vast array of technologies. His knowledge and development experience is second to none.", c1:"#7c5cff", c2:"#38bdf8" },
  { n: "Dr. Curtis Shull", r: "RF / IO / AI / ML / Cloud", q: "It was a pleasure to work with Brandon. Although the problem space was technically challenging, he developed a winning solution for the client.", c1:"#d946ef", c2:"#7c5cff" },
  { n: "Dan Barger", r: "CFO", q: "Brandon is a tremendously hard working and efficient engineer. I was proud to have worked with him. He is talented and dedicated. A professional through and through!", c1:"#38bdf8", c2:"#22d3ee" },
  { n: "Daniel Zorub", r: "Non-profit Technology Advisor", q: "I cannot recommend Brandon enough for any role, project, or team not only because of his expertise, but also because of the genuine person that he is.", c1:"#22d3ee", c2:"#7c5cff" },
  { n: "Jeff Hancock", r: "Software Engineer", q: "Brandon is one of the best developers I have ever worked with. He is extremely reliable and will figure anything out!", c1:"#7c5cff", c2:"#d946ef" },
  { n: "John Ingram", r: "Research Scientist", q: "Brandon is the pinnacle of software professionals. He is a standout in his field and a great asset to any company.", c1:"#38bdf8", c2:"#d946ef" },
  { n: "Nithin Jilla", r: "Educator, Entrepreneur, Philanthropist", q: "Brandon is a quick learner and an excellent communicator. What Brandon sets his mind to, he accomplishes — and he makes the people around him better along the way too.", c1:"#7c5cff", c2:"#38bdf8" },
  { n: "Scott Wickham", r: "Senior Software Engineer", q: "Brandon is customer-oriented with the ability to address a variety of audiences, from the non-technical to the executive, to the technical.", c1:"#d946ef", c2:"#38bdf8" },
  { n: "Allan Browning", r: "Software Engineer", q: "Brandon is reliable, dedicated, and has an in-depth understanding of a vast array of technologies. His knowledge is second to none.", c1:"#22d3ee", c2:"#7c5cff" },
];

function Testimonials() {
  return (
    <section data-screen-label="07 Testimonials">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Collaborators</span>
          <h2>Loved by people <span className="emph">across the universe</span></h2>
          <p>With boundless enthusiasm and contagious optimism, I bring transformative energy to every project. Passion for innovation and problem-solving creates an environment where challenges become opportunities.</p>
        </div>
        <div className="testi-grid">
          {TESTIS.map((t, i) => (
            <div key={i} className="testi">
              <div className="testi-head">
                <div className="testi-ava" style={{"--c1": t.c1, "--c2": t.c2}} />
                <div>
                  <div className="n">{t.n}</div>
                  <div className="r">{t.r}</div>
                </div>
              </div>
              <p className="q">{t.q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA + Footer ----------
function CTA() {
  const { IconArrow } = window;
  return (
    <section id="contact" data-screen-label="08 Contact">
      <div className="container">
        <div className="cta-card">
          <h3>Ready to connect?</h3>
          <p>Contact me today to discuss your next project and learn how I can support your team.</p>
          <div className="cta-ctas">
            <a href="mailto:hello@brandonjohnson.dev" className="btn btn-primary">Contact Me <IconArrow size={14}/></a>
            <a href="#work" className="btn btn-ghost">View My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { IconGithub, IconLinkedin, IconX, IconYT } = window;
  return (
    <footer data-screen-label="09 Footer">
      <div className="container">
        <div className="foot">
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:16}}>
              <div className="nav-brand">
                <div className="avatar">BJ</div>
                <div className="name">Brandon Johnson</div>
              </div>
            </div>
            <p style={{color:'var(--ink-faint)', fontSize:13, maxWidth:320, margin:0}}>
              Building the future. Automating everything. AI-first software engineer, technical leader, and creator.
            </p>
          </div>
          <div>
            <h5>Navigate</h5>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#ai-labs">AI Labs</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
            <a href="#">Resume</a>
            <a href="#">Press Kit</a>
          </div>
          <div>
            <h5>Find me</h5>
            <div style={{display:'flex', gap:10, marginTop:4}}>
              {[IconYT, IconGithub, IconLinkedin, IconX].map((I, i) => (
                <a key={i} href="#" style={{
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  width:36, height:36, borderRadius:10, border:'1px solid var(--border)',
                  background:'rgba(255,255,255,0.02)', color:'var(--ink-dim)'
                }}><I size={16}/></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bigmark" aria-hidden>BRANDON</div>
      <div className="container foot-bar">
        <div>© 2026 Brandon Johnson. All rights reserved.</div>
        <div className="mono" style={{fontSize:11}}>v.2 / cosmic</div>
      </div>
    </footer>
  );
}

window.Nav2 = Nav;
window.TechMarquee = TechMarquee;
window.Capabilities = Capabilities;
window.Experience = Experience;
window.AgentsBlock = AgentsBlock;
window.Projects = Projects;
window.Testimonials = Testimonials;
window.CTA = CTA;
window.Footer = Footer;

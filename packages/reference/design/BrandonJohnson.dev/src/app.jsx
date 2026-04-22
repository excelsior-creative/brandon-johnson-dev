/* global React, ReactDOM */
const { useState, useEffect } = React;

function TweaksPanel({ tweaks, setTweaks }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  if (!visible) return null;
  return (
    <div className="tweaks-panel">
      <h6>Tweaks</h6>
      <label>Headline</label>
      <textarea rows={2} value={tweaks.headline} onChange={e => update('headline', e.target.value)} />

      <label>Star density: {tweaks.starDensity}</label>
      <input type="range" min="40" max="400" step="20" value={tweaks.starDensity} onChange={e => update('starDensity', +e.target.value)} />

      <label>Nebula intensity: {tweaks.nebulaIntensity.toFixed(1)}</label>
      <input type="range" min="0" max="1.4" step="0.1" value={tweaks.nebulaIntensity} onChange={e => update('nebulaIntensity', +e.target.value)} />

      <label style={{display:'flex', alignItems:'center', gap:8, textTransform:'none', letterSpacing:0}}>
        <input type="checkbox" checked={tweaks.showGrid} onChange={e => update('showGrid', e.target.checked)} />
        Show grid overlay
      </label>
    </div>
  );
}

function App() {
  const [tweaks, setTweaks] = useState(window.__TWEAKS__);
  const { Nav, Hero, TechMarquee, Capabilities, Experience, AgentsBlock, Projects, Testimonials, CTA, Footer } = window;
  return (
    <>
      <Nav />
      <Hero tweaks={tweaks} />
      <TechMarquee />
      <Capabilities />
      <Experience />
      <AgentsBlock />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

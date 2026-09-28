'use strict';
(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const motionButton = document.getElementById('motion-toggle');
  const canvas = document.getElementById('ambient-particles');
  const context = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manualPause = false;
  try { manualPause = localStorage.getItem('winwise.motion') === 'paused'; } catch {}
  let width = 0, height = 0, frame = 0, lastFrame = 0, elapsed = 0, particles = [];
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };

  function updateControls() {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    themeButton.title = `Switch to ${nextTheme} mode`;
    themeButton.querySelector('.theme-toggle-label').textContent = nextTheme === 'light' ? 'Light mode' : 'Dark mode';
    const paused = root.dataset.motion === 'paused';
    const motionLabel = reducedMotion.matches ? 'Background paused by your reduced-motion preference' : `${paused ? 'Resume' : 'Pause'} background animation`;
    motionButton.setAttribute('aria-label', motionLabel);
    motionButton.title = motionLabel;
    motionButton.disabled = reducedMotion.matches;
  }

  function makeParticles() {
    // Fixed seed: stable, original abstract spiral, including its static fallback.
    let seed = 11971;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const count = width < 720 ? 250 : 680;
    particles = Array.from({length:count}, (_, i) => ({
      progress: random(), arm: i % 3, spread: (random() - .5) * .13,
      size: .45 + random() * 1.25, alpha: .16 + random() * .64,
      tint: Math.floor(random() * 4), phase: random() * Math.PI * 2
    }));
  }

  function draw(time) {
    if (!context || !width || !height) return;
    context.clearRect(0,0,width,height);
    const dark = root.dataset.theme === 'dark';
    const colors = dark ? ['218,229,244','198,211,255','150,194,209','231,208,184'] : ['24,32,43','36,43,54','45,54,64','57,62,70'];
    const radius = Math.min(width * .47, 650);
    const cx = width * .77, cy = Math.min(height * .3, 285);
    const tilt = -.48;
    // Charcoal threads keep the spiral visible on the light background.
    // Share the particles' motion clock so pause and reduced motion stop both.
    if (!dark) {
      context.strokeStyle = 'rgba(24,32,43,.12)';
      context.lineWidth = .85;
      for (let arm = 0; arm < 3; arm++) {
        context.beginPath();
        for (let step = 0; step <= 120; step++) {
          const progress = step / 120;
          const r = (progress * .91 + .07) * radius;
          const angle = progress * Math.PI * 3.6 + arm * Math.PI * 2 / 3 + time * .021;
          const u = Math.cos(angle) * r;
          const v = Math.sin(angle) * r * .58;
          const x = cx + u * Math.cos(tilt) - v * Math.sin(tilt);
          const y = cy + u * Math.sin(tilt) + v * Math.cos(tilt);
          if (step === 0) context.moveTo(x,y); else context.lineTo(x,y);
        }
        context.stroke();
      }
    }
    for (const p of particles) {
      const r = (p.progress * .91 + .07) * radius;
      const angle = p.progress * Math.PI * 3.6 + p.arm * Math.PI * 2 / 3 + p.spread + time * .021;
      const u = Math.cos(angle) * r;
      const v = Math.sin(angle) * r * .58;
      const x = cx + u * Math.cos(tilt) - v * Math.sin(tilt);
      const y = cy + u * Math.sin(tilt) + v * Math.cos(tilt) + Math.sin(p.phase + time * .15) * 3;
      const opacity = p.alpha * (dark ? .47 : .58);
      if (p.size > 1.5 && dark) {
        context.beginPath();context.arc(x,y,p.size * 3.2,0,Math.PI*2);
        context.fillStyle = `rgba(${colors[p.tint]},${opacity * .06})`;context.fill();
      }
      context.beginPath();context.arc(x,y,p.size,0,Math.PI*2);
      context.fillStyle = `rgba(${colors[p.tint]},${opacity})`;context.fill();
    }
  }

  function animate(timestamp) {
    frame = 0;
    if (document.hidden || root.dataset.motion === 'paused' || !context) return;
    // Cap drawing at 24 fps; no pointer tracking, WebGL, or external animation library.
    if (!lastFrame || timestamp - lastFrame >= 1000 / 24) {
      if (lastFrame) elapsed += Math.min((timestamp - lastFrame) / 1000, .1);
      lastFrame = timestamp;
      draw(elapsed);
    }
    frame = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    cancelAnimationFrame(frame);frame = 0;lastFrame = 0;
    root.dataset.motion = (manualPause || reducedMotion.matches) ? 'paused' : 'running';
    root.dataset.pageVisibility = document.hidden ? 'hidden' : 'visible';
    updateControls();
    if (document.hidden) return;
    draw(elapsed);
    if (context && root.dataset.motion === 'running') frame = requestAnimationFrame(animate);
  }

  function resize() {
    width = document.documentElement.clientWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);canvas.height = Math.round(height * ratio);
    if (context) context.setTransform(ratio,0,0,ratio,0,0);
    makeParticles();draw(elapsed);
  }

  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;save('winwise.theme',theme);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b0d10' : '#eef1f5';
    updateControls();draw(elapsed);
  });
  motionButton.addEventListener('click', () => {
    if (reducedMotion.matches) return;
    manualPause = !manualPause;save('winwise.motion',manualPause ? 'paused' : 'running');syncAnimation();
  });
  reducedMotion.addEventListener('change', syncAnimation);
  document.addEventListener('visibilitychange', syncAnimation);
  window.addEventListener('resize', resize, {passive:true});
  window.addEventListener('pagehide', () => {cancelAnimationFrame(frame);frame=0;});
  window.addEventListener('pageshow', syncAnimation);
  resize();syncAnimation();
})();

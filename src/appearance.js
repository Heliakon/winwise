'use strict';
(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const motionButton = document.getElementById('motion-toggle');
  const canvas = document.getElementById('ambient-particles');
  const context = canvas.getContext('2d');
  const galaxy = window.WinwiseGalaxy;
  const stars = context && galaxy.painter(context);
  const nebula = document.createElement('canvas');
  const haze = nebula.getContext('2d');
  let cloudKey = '';
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
    particles = galaxy.particles(width < 720 ? 2600 : 6400);
  }

  function draw(time) {
    if (!context || !width || !height) return;
    context.clearRect(0,0,width,height);
    const light = root.dataset.theme === 'light';
    const radius = Math.min(width * .47,650);
    // Keep the established page background position; only its visual style changes.
    const cx = width * .77, cy = Math.min(height * .3,285);
    const key = `${width}:${height}:${light}`;
    if (key !== cloudKey && haze) {
      const scale = Math.min(1,1200 / width,800 / height);
      nebula.width = Math.round(width * scale);nebula.height = Math.round(height * scale);
      haze.setTransform(scale,0,0,scale,0,0);
      galaxy.haze(haze,cx,cy,radius,light,.68);
      cloudKey = key;
    }
    if (haze) context.drawImage(nebula,0,0,width,height);
    const view = galaxy.camera(time,cx,cy,radius), point = {};
    stars.begin(light);
    for (const p of particles) {
      galaxy.project(p,view,point);
      if (point.x < -5 || point.x > width + 5 || point.y < -5 || point.y > height + 5) continue;
      const alpha = galaxy.opacity(p,time) * (light ? .62 : .53);
      const size = p.size * (width < 720 ? .60 : .72);
      stars.dot(point.x,point.y,size,p.tint,alpha);
      if (!light && p.size > 1.35) stars.dot(point.x,point.y,size * 2.1,p.tint,alpha * .09);
    }
    stars.flush(light);
  }

  function animate(timestamp) {
    frame = 0;
    if (document.hidden || root.dataset.motion === 'paused' || root.dataset.intro !== 'ready' || !context) return;
    // Keep the ambient scene quiet at 24 fps; the nebula is cached between resizes and theme changes.
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
    if (context && root.dataset.motion === 'running' && root.dataset.intro === 'ready') frame = requestAnimationFrame(animate);
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
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0a101b' : '#e8eef6';
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
  new MutationObserver(syncAnimation).observe(root, {attributes:true, attributeFilter:['data-intro']});
  resize();syncAnimation();
})();

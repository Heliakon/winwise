'use strict';
(() => {
  const root = document.documentElement;
  const welcome = document.getElementById('welcome');
  const button = document.getElementById('start-directory');
  const directory = document.getElementById('directory');
  const overview = document.querySelector('.overview');
  const canvas = document.getElementById('launch-effects');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const DURATION = 3800;
  const animations = [];
  const edgeLights = [];
  let clippedTable = null;
  let phase = root.dataset.intro === 'waiting' ? 'waiting' : 'ready';
  let timer = 0, frame = 0, keyboardStart = false;
  let context = null;

  function captureGalaxyCenter() {
    // Measure before the welcome panel moves or disappears, including a scrolled start.
    const box = welcome.querySelector('.launch-focus').getBoundingClientRect();
    const state = window.WinwiseWelcomeGalaxy?.snapshot();
    const center = box.width && box.height
      ? {x:box.left + box.width / 2,y:box.top + box.height / 2}
      : {x:root.clientWidth * .5,y:window.innerHeight * .44};
    return {...center,time:state?.time || 0,radius:state?.radius || Math.min(root.clientWidth * .23,480)};
  }

  function finish(focus = false) {
    if (phase === 'ready') return;
    phase = 'ready';
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    animations.splice(0).forEach(animation => animation.cancel());
    edgeLights.splice(0).forEach(({light,host,position}) => {
      light.remove();
      host.style.position = position;
    });
    root.dataset.intro = 'ready';
    welcome.hidden = true;
    welcome.inert = true;
    canvas.hidden = true;
    // Release the temporary full-screen drawing buffer after the reveal.
    canvas.width = canvas.height = 0;
    overview.inert = directory.inert = false;
    directory.style.maxHeight = '';
    if (clippedTable) {clippedTable.style.maxHeight = '';clippedTable = null;}
    directory.removeAttribute('aria-busy');
    if (focus) {
      const heading = document.getElementById('directory-title');
      heading.setAttribute('tabindex', '-1');
      heading.focus({preventScroll:true});
    }
  }

  function lightEdges(element, delay, duration, strength = 1, assembleAt = delay + duration) {
    if (!element) return;
    const normal = getComputedStyle(element);
    const dark = root.dataset.theme !== 'light';
    const border = dark ? `rgba(215,233,243,${.95 * strength})` : 'rgba(255,255,255,1)';
    const glow = dark ? `rgba(171,205,235,${.2 * strength})` : `rgba(94,122,148,${.23 * strength})`;
    // Rasterize the border glow once, then animate only its composited opacity.
    // Native select controls cannot contain an overlay, so use their existing wrapper.
    const host = element.tagName === 'SELECT' ? element.parentElement : element;
    const position = host.style.position;
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    // Use a neutral decorative element, separate from the buttons' count spans.
    const light = document.createElement('i');
    light.className = 'intro-edge-glow';
    light.setAttribute('aria-hidden','true');
    light.style.borderColor = border;
    light.style.borderRadius = normal.borderRadius;
    light.style.boxShadow = `0 0 0 1px ${glow}, 0 0 ${28 * strength}px ${glow}, inset 0 0 ${16 * strength}px ${glow}`;
    host.append(light);
    edgeLights.push({light,host,position});
    const lightDuration = Math.min(3650,assembleAt + 650) - delay;
    const peak = Math.min(.8,(assembleAt - delay) / lightDuration);
    animations.push(light.animate([
      {opacity:0, offset:0},
      {opacity:0, offset:peak * .55},
      {opacity:1, offset:peak},
      {opacity:0, offset:1}
    ], {delay, duration:lightDuration, easing:'ease-in-out', fill:'backwards'}));
  }

  function move(element, from, delay, duration = 800, edgeStrength = 0, assembleAt = delay + duration) {
    if (!element) return;
    animations.push(element.animate([
      {opacity:0, transform:from},
      {opacity:1, transform:'translate3d(0,0,0) scale(1) rotate(0deg)'}
    ], {duration, delay, easing:'cubic-bezier(.16,1,.3,1)', fill:'both'}));
    if (edgeStrength) lightEdges(element, delay, duration, edgeStrength, assembleAt);
  }

  function borderTarget(element, weight, assembleAt, topOnly = false) {
    if (!element) return null;
    const box = element.getBoundingClientRect();
    if (box.width < 4 || box.height < 4 || box.top >= window.innerHeight || box.bottom <= 0) return null;
    const width = box.width - 1, height = box.height - 1;
    const radius = topOnly ? 0 : Math.max(0,Math.min(parseFloat(getComputedStyle(element).borderTopLeftRadius) || 0,width / 2,height / 2) - .5);
    const length = topOnly ? width : 2 * (width + height - 4 * radius) + 2 * Math.PI * radius;
    return {x:box.left + .5, y:box.top + .5, width, height, radius, length, weight, assembleAt, topOnly};
  }

  // Sample the actual rounded border, so the last dot position is never an approximation.
  function borderPoint(target, progress) {
    const {x,y,width:w,height:h,radius:r} = target;
    if (target.topOnly) return {x:x + w * progress, y};
    const horizontal = w - 2 * r, vertical = h - 2 * r, arc = Math.PI * r / 2;
    let distance = progress * target.length;
    if (distance < horizontal) return {x:x + r + distance,y};
    distance -= horizontal;
    if (distance < arc) {const a = distance / r - Math.PI / 2;return {x:x + w - r + Math.cos(a) * r,y:y + r + Math.sin(a) * r};}
    distance -= arc;
    if (distance < vertical) return {x:x + w,y:y + r + distance};
    distance -= vertical;
    if (distance < arc) {const a = distance / r;return {x:x + w - r + Math.cos(a) * r,y:y + h - r + Math.sin(a) * r};}
    distance -= arc;
    if (distance < horizontal) return {x:x + w - r - distance,y:y + h};
    distance -= horizontal;
    if (distance < arc) {const a = distance / r + Math.PI / 2;return {x:x + r + Math.cos(a) * r,y:y + h - r + Math.sin(a) * r};}
    distance -= arc;
    if (distance < vertical) return {x,y:y + h - r - distance};
    distance -= vertical;
    const a = distance / r + Math.PI;
    return {x:x + r + Math.cos(a) * r,y:y + r + Math.sin(a) * r};
  }

  function stardust(targets, galaxy) {
    try { context = canvas.getContext('2d', {alpha:true}); } catch { return; }
    if (!context) return;
    const width = root.clientWidth;
    const height = window.innerHeight;
    // Bound the temporary effects buffer independently of monitor resolution.
    // DOM text and controls retain their native resolution.
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5, Math.sqrt(3686400 / (width * height)));
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio,0,0,ratio,0,0);
    canvas.hidden = false;
    const model = window.WinwiseGalaxy;
    const {smooth} = model;
    const painter = model.painter(context);
    let seed = 70311;
    const random = () => {seed = (seed * 1664525 + 1013904223) >>> 0;return seed / 4294967296;};
    // Keep smaller-screen budgets, but extra monitor area needs no extra particles.
    const budget = width < 760 ? 2100 : Math.min(5200,Math.round(5200 * Math.sqrt(width * height / 2073600)));
    const field = model.particles(budget);
    const totalWeight = targets.reduce((total,target) => total + target.length * target.weight,0);
    const particles = [];
    for (const target of targets) {
      const count = Math.max(18,Math.round(budget * target.length * target.weight / totalWeight));
      for (let index = 0; index < count; index++) {
        const end = borderPoint(target,(index + .5) / count);
        if (end.x < 0 || end.x > width || end.y < 0 || end.y > height) continue;
        particles.push({
          ...field[particles.length % field.length],end,
          release:Math.max(450,target.assembleAt - 1150) + random() * 220,
          land:target.assembleAt + random() * 190,
          phase:random() * Math.PI * 2,curl:40 + random() * 120
        });
      }
    }
    const started = performance.now();
    const expandedRadius = Math.max(galaxy.radius,Math.min(width * .48,1100));
    const viewAt = time => model.camera(galaxy.time + time * .011,galaxy.x,galaxy.y,
      galaxy.radius + (expandedRadius - galaxy.radius) * smooth(time / 1350));
    // The same star field zooms out of the welcome scene, then assembles the UI.
    particles.forEach(p => {p.departure = model.project(p,viewAt(p.release));});
    const light = root.dataset.theme === 'light';
    const nebula = document.createElement('canvas');nebula.width = nebula.height = 1024;
    const haze = nebula.getContext('2d');
    model.haze(haze,512,512,400,light);
    const dot = (point,size,tint,alpha) => {
      if (point.x > -8 && point.x < width + 8 && point.y > -8 && point.y < height + 8) painter.dot(point.x,point.y,size,tint,alpha);
    };
    function draw(now) {
      if (phase !== 'revealing') return;
      const elapsed = now - started, view = viewAt(elapsed);
      context.clearRect(0,0,width,height);
      const fadeIn = smooth(elapsed / 160);
      const openingScale = 1 + .45 * (1 - smooth(elapsed / 1350));
      if (haze && elapsed < 1800) {
        const extent = view.radius * 1.28;
        context.save();context.globalAlpha = fadeIn * (1 - smooth((elapsed - 450) / 1350));
        context.drawImage(nebula,galaxy.x - extent,galaxy.y - extent,extent * 2,extent * 2);context.restore();
      }
      painter.begin(light);
      const point = {};
      for (const p of particles) {
        if (elapsed >= p.land + 370) continue;
        const progress = Math.max(0,Math.min(1,(elapsed - p.release) / (p.land - p.release)));
        const capture = smooth(progress);
        if (elapsed < p.release) model.project(p,view,point);
        else {
          const curl = Math.sin(progress * Math.PI) * Math.pow(1 - progress,2) * p.curl;
          const angle = p.phase + progress * Math.PI * 3;
          point.x = p.departure.x + (p.end.x - p.departure.x) * capture + Math.cos(angle) * curl;
          point.y = p.departure.y + (p.end.y - p.departure.y) * capture + Math.sin(angle) * curl * .54;
        }
        // Each star touches its own border and fades immediately after landing.
        const edgeFade = 1 - smooth((elapsed - p.land - 70) / 300);
        const alpha = (model.opacity(p,view.time) * (1 - capture) + .88 * capture) * fadeIn * edgeFade * (light ? .8 : .88);
        const size = Math.min(p.size * .78,1.15) * (openingScale * (1 - capture) + .72 * capture);
        dot(point,size,p.tint,alpha);
        if (!light && p.size > 1.35) dot(point,size * 2.1,p.tint,alpha * .09);
      }
      painter.flush(light);
      if (elapsed < DURATION) frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
  }

  function start(event) {
    if (phase !== 'waiting') return;
    keyboardStart = event?.detail === 0;
    if (reducedMotion.matches || root.dataset.motion === 'paused' || !welcome.animate) {
      finish(keyboardStart);
      return;
    }
    const galaxy = captureGalaxyCenter();
    phase = 'revealing';
    root.dataset.intro = 'revealing';
    welcome.inert = true;
    directory.setAttribute('aria-busy', 'true');
    // Set the cleanup deadline before any effect so an interrupted reveal cannot trap the page.
    timer = setTimeout(() => finish(keyboardStart), DURATION);
    try {
      // Measure once at the final layout, before transforms. Never read layout in a drawing frame.
      const top = directory.getBoundingClientRect().top;
      directory.style.maxHeight = `${Math.max(600, window.innerHeight - top + 160)}px`;
      // Clip the table itself as well: clipping only its parent still leaves a
      // many-thousand-pixel table and stretched sidebar to rasterize and animate.
      clippedTable = directory.querySelector('.service-table');
      if (clippedTable) {
        const tableTop = clippedTable.getBoundingClientRect().top;
        clippedTable.style.maxHeight = `${Math.max(160,window.innerHeight - tableTop + 160)}px`;
      }
      const cards = [...overview.children];
      const rows = [...directory.querySelectorAll('.service-row')].filter(row => row.getBoundingClientRect().top < window.innerHeight).slice(0,12);
      const categories = [...directory.querySelectorAll('.category-nav button')];
      const filters = [...directory.querySelectorAll('.recommendation-filters button')];
      const targets = [
        ...cards.map((card,index) => borderTarget(card,2.4,1780 + index * 100)),
        borderTarget(directory,.18,2340),
        borderTarget(directory.querySelector('.search-box'),.85,2300),
        borderTarget(document.getElementById('sort'),1,2300),
        ...categories.map((element,index) => borderTarget(element,1.25,2340 + index * 35)),
        ...filters.map((element,index) => borderTarget(element,1.1,2400 + index * 40)),
        ...rows.map((row,index) => borderTarget(row,.55,2620 + index * 25,true))
      ].filter(Boolean);
      animations.push(welcome.animate([
        {opacity:1, transform:'translateY(0) scale(1)'},
        {opacity:.25, transform:'translateY(-20px) scale(.98,.65)', offset:.6},
        {opacity:0, transform:'translateY(-40px) scale(.94,.06)'}
      ], {duration:340, easing:'cubic-bezier(.65,0,.35,1)', fill:'forwards'}));
      move(document.querySelector('.intro-action'),'translate3d(0,-14px,0)',550,700);
      cards.forEach((card,index) => {
        const box = card.getBoundingClientRect();
        const x = index === 0 ? -box.right - 36 : index === 2 ? root.clientWidth - box.left + 36 : 0;
        move(card,`translate3d(${x}px,${index === 1 ? 135 : 40}px,0) scale(.87) rotate(${index === 0 ? -5 : index === 2 ? 5 : -3}deg)`,600 + index * 120,900,1,1780 + index * 100);
      });
      // Animate only the first screen; restore the complete directory in finish().
      move(directory,'translate3d(0,85px,0) scale(.97)',930,900,1,2340);
      move(directory.querySelector('.sidebar'),`translate3d(${-Math.min(root.clientWidth * .26,520)}px,0,0)`,1060,800,.6,2440);
      ['.directory-heading','.directory-toolbar','.filter-row','.context-note','.results-meta','.table-head'].forEach((selector,index) => {
        move(directory.querySelector(selector),`translate3d(${110 - index * 10}px,14px,0)`,1150 + index * 60,680,selector === '.context-note' ? .6 : 0,2420);
      });
      lightEdges(directory.querySelector('.search-box'),1210,680,.65,2300);
      lightEdges(document.getElementById('sort'),1210,680,.65,2300);
      categories.forEach((element,index) => lightEdges(element,1100,680,.45,2340 + index * 35));
      filters.forEach((element,index) => lightEdges(element,1270,680,.5,2400 + index * 40));
      move(directory.querySelector('.service-table'),'translate3d(0,0,0)',1450,650,.6,2700);
      rows.forEach((row,index) => {
        move(row,'translate3d(65px,18px,0)',1510 + index * 50,560,.4,2620 + index * 25);
      });
      move(document.querySelector('.site-footer'),'translate3d(0,16px,0)',2050,600);
      stardust(targets, galaxy);
    } catch {
      finish(keyboardStart);
    }
  }

  welcome.hidden = phase !== 'waiting';
  welcome.inert = phase !== 'waiting';
  overview.inert = directory.inert = phase === 'waiting';
  button.addEventListener('click', start);
  // Existing navigation remains available; the introduction never blocks another page.
  document.querySelector('.skip-link').addEventListener('click', () => finish());
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches && phase === 'revealing') finish(keyboardStart); });
  new MutationObserver(records => {
    if (phase === 'revealing' && (root.dataset.motion === 'paused' || records.some(record => record.attributeName === 'data-theme'))) finish(keyboardStart);
  }).observe(root,{attributes:true,attributeFilter:['data-motion','data-theme']});
  document.addEventListener('visibilitychange', () => { if (document.hidden && phase === 'revealing') finish(); });
  window.addEventListener('resize', () => { if (phase === 'revealing') finish(keyboardStart); },{passive:true});
  window.addEventListener('scroll', () => { if (phase === 'revealing') finish(); },{passive:true});
  window.addEventListener('pagehide', () => { if (phase === 'revealing') finish(); });
  window.WinwiseIntro = Object.freeze({dismiss:() => finish()});
})();

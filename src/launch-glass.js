'use strict';
// The START screen: a luminous particle galaxy with interlocking gears in the corner.
(() => {
  const root = document.documentElement;
  const panel = document.getElementById('welcome');
  const glow = document.getElementById('launch-glass');
  const universe = document.getElementById('launch-universe');
  let canvas = document.getElementById('launch-orbits');
  const mechanics = document.getElementById('launch-gears');
  if (!panel || !glow || !universe || !canvas || !mechanics || root.dataset.intro !== 'waiting') return;
  const haze = glow.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const opaque = window.matchMedia('(prefers-reduced-transparency: reduce)');
  const TAU = Math.PI * 2;
  const point = (r, a) => `${(Math.cos(a) * r).toFixed(3)} ${(Math.sin(a) * r).toFixed(3)}`;
  const circle = r => `M ${r} 0 A ${r} ${r} 0 1 0 ${-r} 0 A ${r} ${r} 0 1 0 ${r} 0 Z`;
  function gearPath(radius, teeth, spokes) {
    const pitch = TAU / teeth;
    let path = '';
    // All wheels share the same tooth pitch. Tapered tips fit the neighbouring gaps.
    for (let tooth = 0; tooth < teeth; tooth++) {
      for (const [offset, r] of [[-.5,radius-10],[-.35,radius-10],[-.19,radius+10],[.19,radius+10],[.35,radius-10]]) {
        path += `${path ? ' L ' : 'M '}${point(r, (tooth + offset) * pitch)}`;
      }
    }
    path += ' Z ' + circle(radius * .12);
    // Open spokes keep the assembly light and let the liquid reflections show through.
    const inner = radius * .30, outer = radius * .76;
    for (let spoke = 0; spoke < spokes; spoke++) {
      const a = spoke * TAU / spokes + .13, b = (spoke + 1) * TAU / spokes - .13;
      path += ` M ${point(inner,a)} L ${point(outer,a+.045)} A ${outer} ${outer} 0 0 1 ${point(outer,b-.045)} L ${point(inner,b)} A ${inner} ${inner} 0 0 0 ${point(inner,a)} Z`;
    }
    return path;
  }
  const gears = [
    {x:280,y:300,r:150,teeth:30,spokes:6,ratio:1,phase:14},
    {r:100,teeth:20,spokes:5,angle:-50},
    {r:70,teeth:14,spokes:4,angle:52}
  ];
  for (const gear of gears.slice(1)) {
    const angle = gear.angle * Math.PI / 180;
    gear.x = 280 + Math.cos(angle) * (150 + gear.r);
    gear.y = 300 + Math.sin(angle) * (150 + gear.r);
    gear.ratio = -30 / gear.teeth;
    gear.phase = gear.angle + 180 + 30 / gear.teeth * (gear.angle - 14) - 180 / gear.teeth;
  }
  mechanics.innerHTML = `<defs>
    <linearGradient id="gear-metal" x1="0" y1="0" x2="1" y2="1">
      <stop class="gear-stop-bright" offset="0"/><stop class="gear-stop-mid" offset=".32"/>
      <stop class="gear-stop-dark" offset=".56"/><stop class="gear-stop-mid" offset=".78"/>
      <stop class="gear-stop-bright" offset="1"/>
    </linearGradient>
    <linearGradient id="gear-bevel" x1="0" y1="0" x2=".85" y2="1">
      <stop class="gear-stop-edge" offset="0"/><stop class="gear-stop-shadow" offset=".5"/>
      <stop class="gear-stop-edge" offset="1"/>
    </linearGradient>
  </defs><g class="launch-gear-assembly" transform="rotate(90 340 275)">` + gears.map(gear => {
    const path = gearPath(gear.r, gear.teeth, gear.spokes);
    let marks = '', screws = '';
    for (let i = 0; i < gear.teeth; i++) {
      const a = i * TAU / gear.teeth;
      marks += `M ${point(gear.r*.865,a)} L ${point(gear.r*.895,a)}`;
    }
    for (let i = 0; i < gear.spokes; i++) {
      const a = i * TAU / gear.spokes, r = gear.r * .39;
      screws += `<circle cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" r="2.3"/>`;
    }
    return `<g transform="translate(${gear.x} ${gear.y})"><g class="launch-gear-rotor">
      <path class="gear-depth" d="${path}" fill-rule="evenodd" transform="translate(0 3)"/>
      <path class="gear-face" d="${path}" fill-rule="evenodd"/>
      <circle class="gear-etch" r="${gear.r*.83}"/><circle class="gear-etch" r="${gear.r*.92}"/>
      <circle class="gear-bearing" r="${gear.r*.205}"/><circle class="gear-bearing-inner" r="${gear.r*.145}"/>
      <path class="gear-ticks" d="${marks}"/><g class="gear-screws">${screws}</g>
    </g></g>`;
  }).join('') + '</g>';
  mechanics.querySelectorAll('.launch-gear-rotor').forEach((element, index) => gears[index].element = element);

  const smooth = n => {const t = Math.max(0, Math.min(1, n)); return t * t * (3 - 2 * t);};
  let scene, frame = 0, lastFrame = 0, elapsed = 0, inView = true, disposed = false;
  let age = root.dataset.motion === 'paused' || reduced.matches || opaque.matches ? 3 : 0;
  let gl, context, program, buffer;
  const shaders = [], uniforms = {};
  const galaxy = window.WinwiseGalaxy;
  const particles = galaxy.particles(9000);
  const {darkPalette,lightPalette} = galaxy;
  // The reveal starts at the current welcome angle and radius, before cleanup.
  window.WinwiseWelcomeGalaxy = Object.freeze({snapshot:() => scene ? {time:elapsed,radius:scene.radius} : null});

  const vertexSource = `
    attribute vec4 a_orbit;
    attribute vec2 a_style;
    uniform vec2 u_resolution, u_center;
    uniform float u_radius, u_ratio, u_time, u_age, u_light, u_size;
    uniform vec4 u_quiet[4];
    varying vec3 v_color;
    varying float v_alpha;
    void main() {
      float r = a_orbit.x;
      float angle = a_orbit.y + u_time * (.055 + .034 * (1. - min(r, 1.)));
      vec2 plane = vec2(cos(angle) * r, sin(angle) * r * .54 + a_orbit.z);
      float tilt = .38 + sin(u_time * .10) * .018;
      vec2 point = vec2(plane.x * cos(tilt) - plane.y * sin(tilt),
        plane.x * sin(tilt) + plane.y * cos(tilt)) * u_radius + u_center;
      gl_Position = vec4(point.x / u_resolution.x * 2. - 1., 1. - point.y / u_resolution.y * 2., 0., 1.);
      gl_PointSize = max(2., a_orbit.w * 6. * u_ratio * u_size);
      float entrance = smoothstep(.10 + r * .42, 1.60 + r * .42, u_age);
      float quiet = 1.;
      for (int i = 0; i < 4; i++) {
        vec2 distance = max(max(u_quiet[i].xy - point, point - u_quiet[i].zw), vec2(0.));
        quiet *= smoothstep(0., 38., length(distance));
      }
      float edge = 1. - smoothstep(.81, 1.05, r);
      float twinkle = .90 + .10 * sin(a_orbit.y * 7. + u_time * .7);
      v_alpha = a_style.x * entrance * edge * quiet * twinkle;
      vec3 night, day;
      if (a_style.y < .5) {night = vec3(1.,.57,.16); day = vec3(.53,.29,.075);}
      else if (a_style.y < 1.5) {night = vec3(1.,.82,.47); day = vec3(.57,.40,.16);}
      else if (a_style.y < 2.5) {night = vec3(.43,1.,.81); day = vec3(.075,.40,.32);}
      else if (a_style.y < 3.5) {night = vec3(.70,.49,1.); day = vec3(.39,.23,.62);}
      else {night = vec3(.68,.88,1.); day = vec3(.17,.35,.46);}
      v_color = mix(night, day, u_light);
      v_alpha *= mix(.84, .82, u_light);
    }
  `;
  const fragmentSource = `
    precision mediump float;
    varying vec3 v_color;
    varying float v_alpha;
    void main() {
      vec2 point = gl_PointCoord * 2. - 1.;
      float d = dot(point, point);
      if (d > 1.) discard;
      float star = exp(-d * 18.) + .16 * exp(-d * 4.) * (1. - d);
      float alpha = star * v_alpha;
      gl_FragColor = vec4(v_color * alpha, alpha);
    }
  `;
  function releaseGL() {
    if (!gl) return;
    if (buffer) gl.deleteBuffer(buffer);
    if (program) gl.deleteProgram(program);
    shaders.forEach(shader => gl.deleteShader(shader));
    buffer = program = null;
    shaders.length = 0;
  }
  function useFallback() {
    releaseGL();
    gl = null;
    // A canvas with a WebGL context cannot become a 2D canvas.
    const replacement = canvas.cloneNode(false);
    canvas.removeEventListener('webglcontextlost', contextLost);
    canvas.replaceWith(replacement);
    canvas = replacement;
    context = canvas.getContext('2d');
  }
  try {
    gl = canvas.getContext('webgl', {alpha:true, premultipliedAlpha:true,
      antialias:false, depth:false, stencil:false, powerPreference:'low-power'});
    if (gl) {
      const compile = (type, source) => {
        const shader = gl.createShader(type); shaders.push(shader);
        gl.shaderSource(shader, source); gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Galaxy shader unavailable');
        return shader;
      };
      program = gl.createProgram();
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Galaxy renderer unavailable');
      gl.useProgram(program);
      buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particles.flatMap(p => [p.r,p.angle,p.depth,p.size,p.alpha,p.tint])), gl.STATIC_DRAW);
      for (const [name, count, offset] of [['a_orbit',4,0],['a_style',2,16]]) {
        const location = gl.getAttribLocation(program, name);
        gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location, count, gl.FLOAT, false, 24, offset);
      }
      for (const name of ['resolution','center','radius','ratio','time','age','light','size']) uniforms[name] = gl.getUniformLocation(program, 'u_' + name);
      uniforms.quiet = gl.getUniformLocation(program, 'u_quiet[0]');
      gl.enable(gl.BLEND); gl.disable(gl.DEPTH_TEST);
      canvas.addEventListener('webglcontextlost', contextLost);
    } else useFallback();
  } catch { useFallback(); }

  function drawHaze() {
    if (!scene || !haze) return;
    const light = root.dataset.theme === 'light';
    const {localX:x, localY:y, radius:r, panelWidth:w, panelHeight:h} = scene;
    haze.clearRect(0, 0, w, h);
    galaxy.haze(haze,x,y,r,light);
    glow.classList.add('is-ready');
  }
  const buckets = Array.from({length:120}, () => []);
  function drawFallback(revealAge) {
    if (!context) return;
    const {width,height,cx,cy,radius,quiet,mobile} = scene;
    context.clearRect(0,0,width,height);
    const light = root.dataset.theme === 'light';
    const palette = light ? lightPalette : darkPalette;
    buckets.forEach(bucket => {bucket.length = 0;});
    const tilt = .38 + Math.sin(elapsed * .10) * .018, ct = Math.cos(tilt), st = Math.sin(tilt);
    const limit = mobile ? 2600 : 4800;
    for (let i = 0; i < limit; i++) {
      const p = particles[i], angle = p.angle + elapsed * (.055 + .034 * (1 - Math.min(p.r,1)));
      const px = Math.cos(angle) * p.r, py = Math.sin(angle) * p.r * .54 + p.depth;
      const x = cx + (px * ct - py * st) * radius, y = cy + (px * st + py * ct) * radius;
      let alpha = p.alpha * smooth((revealAge - .10 - p.r * .42) / 1.5) * (1 - smooth((p.r - .81) / .24));
      for (const box of quiet) alpha *= smooth(Math.hypot(Math.max(box[0] - x,0,x - box[2]),Math.max(box[1] - y,0,y - box[3])) / 38);
      const level = Math.min(23, Math.round(alpha * 23));
      if (level) buckets[p.tint * 24 + level].push(x,y,p.size * (mobile ? .75 : 1));
    }
    context.globalCompositeOperation = light ? 'source-over' : 'lighter';
    buckets.forEach((points,index) => {
      if (!points.length) return;
      context.beginPath();
      for (let i = 0; i < points.length; i += 3) {context.moveTo(points[i] + points[i+2],points[i+1]);context.arc(points[i],points[i+1],points[i+2],0,TAU);}
      const color = palette[Math.floor(index / 24)].map(n => Math.round(n * 255));
      context.fillStyle = `rgba(${color.join(',')},${index % 24 / 23})`; context.fill();
    });
  }
  function draw() {
    if (!scene || disposed) return;
    gears.forEach(gear => gear.element.setAttribute('transform', `rotate(${gear.phase + elapsed * 4.4 * gear.ratio})`));
    const revealAge = reduced.matches || opaque.matches ? 3 : age;
    if (!gl) {drawFallback(revealAge); return;}
    const light = root.dataset.theme === 'light';
    gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.blendFuncSeparate(gl.ONE, light ? gl.ONE_MINUS_SRC_ALPHA : gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.uniform2f(uniforms.resolution, scene.width, scene.height);
    gl.uniform2f(uniforms.center, scene.cx, scene.cy);
    gl.uniform1f(uniforms.radius, scene.radius); gl.uniform1f(uniforms.ratio, scene.ratio);
    gl.uniform1f(uniforms.time, elapsed); gl.uniform1f(uniforms.age, revealAge);
    gl.uniform1f(uniforms.light, light ? 1 : 0); gl.uniform1f(uniforms.size, scene.mobile ? .78 : 1);
    gl.uniform4fv(uniforms.quiet, new Float32Array(scene.quiet.flat()));
    gl.drawArrays(gl.POINTS, 0, scene.mobile ? 3800 : particles.length);
  }
  function size() {
    if (disposed || root.dataset.intro !== 'waiting') return;
    const width = panel.clientWidth, height = panel.clientHeight;
    if (!width || !height) return;
    const box = panel.getBoundingClientRect(), focus = panel.querySelector('.launch-focus').getBoundingClientRect();
    const localX = focus.left - box.left - panel.clientLeft + focus.width / 2;
    const localY = focus.top - box.top - panel.clientTop + focus.height / 2;
    const mobile = window.innerWidth <= 760;
    const radius = mobile ? Math.min(focus.width * 1.12, 190)
      : Math.min(focus.width * 1.10, Math.max(focus.height * .80,280), window.innerHeight * .39,540);
    const left = Math.max(0, Math.min(box.left, radius * 1.12 - localX + 20));
    const right = Math.max(0, Math.min(window.innerWidth - box.right, localX + radius * 1.12 - width + 20));
    const top = Math.max(0, Math.min(85, box.top - 90));
    const bottom = Math.max(0, Math.min(85, window.innerHeight - box.bottom));
    const sceneWidth = width + left + right, sceneHeight = height + top + bottom;
    universe.style.left = `${-left}px`; universe.style.top = `${-top}px`;
    universe.style.width = `${sceneWidth}px`; universe.style.height = `${sceneHeight}px`;
    const quiet = ['.launch-copy','.launch-action','.launch-bottom'].map(selector => {
      const r = panel.querySelector(selector).getBoundingClientRect();
      return [r.left-box.left+left-8,r.top-box.top+top-8,r.right-box.left+left+8,r.bottom-box.top+top+8];
    });
    const heading = document.querySelector('.intro').getBoundingClientRect();
    quiet.push([heading.left-box.left+left,heading.top-box.top+top,heading.right-box.left+left,heading.bottom-box.top+top+14]);
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    scene = {width:sceneWidth,height:sceneHeight,cx:localX+left,cy:localY+top,localX,localY,
      panelWidth:width,panelHeight:height,radius,mobile,ratio,quiet};
    canvas.width = Math.round(sceneWidth * ratio); canvas.height = Math.round(sceneHeight * ratio);
    if (gl) gl.viewport(0,0,canvas.width,canvas.height);
    else context?.setTransform(ratio,0,0,ratio,0,0);
    const scale = Math.min(1, 1200 / width, 650 / height);
    glow.width = Math.round(width * scale); glow.height = Math.round(height * scale);
    haze?.setTransform(scale,0,0,scale,0,0);
    drawHaze(); draw();
  }
  function canAnimate() {
    return !disposed && !document.hidden && inView && root.dataset.intro === 'waiting'
      && root.dataset.motion !== 'paused' && !reduced.matches && !opaque.matches;
  }
  function tick(now) {
    frame = 0;
    if (!canAnimate()) {lastFrame = 0; return;}
    if (!lastFrame || now - lastFrame >= 1000 / 30) {
      if (lastFrame) {const dt = (now-lastFrame)/1000; elapsed += Math.min(dt,.12); age += dt;}
      lastFrame = now; draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (disposed) return;
    cancelAnimationFrame(frame); frame = 0; lastFrame = 0;
    if (root.dataset.intro !== 'waiting') {dispose(); return;}
    drawHaze(); draw();
    if (canAnimate()) frame = requestAnimationFrame(tick);
  }
  function contextLost(event) {
    event.preventDefault();
    if (disposed) return;
    useFallback(); size(); sync();
  }
  function dispose() {
    if (disposed) return;
    disposed = true; cancelAnimationFrame(frame); frame = 0;
    mutation.disconnect(); resize?.disconnect(); visibility?.disconnect();
    document.removeEventListener('visibilitychange',sync);
    reduced.removeEventListener('change',sync); opaque.removeEventListener('change',sync);
    window.removeEventListener('resize',size);
    window.removeEventListener('pagehide',sync); window.removeEventListener('pageshow',sync);
    canvas.removeEventListener('webglcontextlost',contextLost);
    releaseGL(); canvas.width = canvas.height = glow.width = glow.height = 0;
    universe.hidden = true;
  }
  const mutation = new MutationObserver(sync);
  mutation.observe(root,{attributes:true,attributeFilter:['data-intro','data-theme','data-motion']});
  const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(size) : null;
  resize?.observe(panel);
  const visibility = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting; sync();
  }) : null;
  visibility?.observe(panel);
  reduced.addEventListener('change',sync); opaque.addEventListener('change',sync);
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('resize',size,{passive:true});
  window.addEventListener('pagehide',sync); window.addEventListener('pageshow',sync);
  size(); sync();
})();

'use strict';
// One star field, palette, and projection for the welcome, reveal, and background.
(() => {
  const TAU = Math.PI * 2;
  const smooth = value => {const t = Math.max(0,Math.min(value,1));return t * t * (3 - 2 * t);};
  const darkPalette = [[1,.57,.16],[1,.82,.47],[.43,1,.81],[.70,.49,1],[.68,.88,1]];
  const lightPalette = [[.53,.29,.075],[.57,.40,.16],[.075,.40,.32],[.39,.23,.62],[.17,.35,.46]];
  const colors = [darkPalette,lightPalette].map(palette => palette.map(color => color.map(n => Math.round(n * 255)).join(',')));

  function particles(count, seed = 47291) {
    const random = () => {seed = (seed * 1664525 + 1013904223) >>> 0;return seed / 4294967296;};
    const normal = () => Math.sqrt(-2 * Math.log(Math.max(.00001,random()))) * Math.cos(random() * TAU);
    return Array.from({length:count}, (_,i) => {
      const kind = random();
      let r, angle, depth, size, alpha, tint;
      if (kind < .27) {
        r = .19 * Math.pow(random(),.82);
        angle = random() * TAU;
        depth = normal() * .045 * (1 - r / .25);
        size = .32 + random() * .68;
        alpha = .28 + random() * .40;
        tint = random() < .77 ? 0 : 1;
      } else {
        r = .13 + Math.pow(random(),.92) * .91;
        const dust = kind > .80;
        angle = r * 8.6 + (i % 2) * Math.PI + normal() * (dust ? .70 : .19 + r * .13);
        depth = normal() * (dust ? .045 : .012 + r * .018);
        size = dust ? .22 + random() * .48 : .38 + Math.pow(random(),3) * 1.50;
        alpha = dust ? .10 + random() * .23 : .36 + random() * .55;
        tint = r < .29 && random() < .52 ? 1 : random() < .68 ? 2 : random() < .66 ? 3 : 4;
      }
      return {r,angle,depth,size,alpha,tint};
    });
  }

  function camera(time,cx,cy,radius) {
    const tilt = .38 + Math.sin(time * .10) * .018;
    return {time,cx,cy,radius,ct:Math.cos(tilt),st:Math.sin(tilt)};
  }
  function project(p,view,out = {}) {
    const angle = p.angle + view.time * (.055 + .034 * (1 - Math.min(p.r,1)));
    const x = Math.cos(angle) * p.r, y = Math.sin(angle) * p.r * .54 + p.depth;
    out.x = view.cx + (x * view.ct - y * view.st) * view.radius;
    out.y = view.cy + (x * view.st + y * view.ct) * view.radius;
    return out;
  }
  function opacity(p,time) {
    return p.alpha * (1 - smooth((p.r - .81) / .24)) * (.90 + .10 * Math.sin(p.angle * 7 + time * .7));
  }

  function haze(context,cx,cy,radius,light,opacity = 1) {
    if (!context) return;
    const cloud = (dx,dy,rx,ry,color,alpha) => {
      context.save();context.translate(cx + dx * radius,cy + dy * radius);context.rotate(.38);context.scale(rx * radius,ry * radius);
      const gradient = context.createRadialGradient(0,0,0,0,0,1);
      gradient.addColorStop(0,`rgba(${color},${alpha * opacity})`);
      gradient.addColorStop(.36,`rgba(${color},${alpha * opacity * .45})`);
      gradient.addColorStop(1,`rgba(${color},0)`);
      context.fillStyle = gradient;context.fillRect(-1,-1,2,2);context.restore();
    };
    cloud(.24,-.13,.86,.67,light ? '110,86,146' : '99,51,165',light ? .11 : .18);
    cloud(-.33,.12,.70,.50,light ? '78,134,129' : '37,125,153',light ? .10 : .17);
    cloud(0,0,.39,.25,light ? '170,115,55' : '255,159,52',light ? .20 : .30);
  }

  // Round star cores are grouped by color/opacity; no glow filter per particle.
  function painter(context) {
    const buckets = Array.from({length:120},() => []);
    let palette = colors[0];
    return {
      begin(light) {buckets.forEach(bucket => {bucket.length = 0;});palette = colors[light ? 1 : 0];},
      dot(x,y,size,tint,alpha) {
        const level = Math.max(0,Math.min(23,Math.round(alpha * 23)));
        if (level && size > 0) buckets[tint * 24 + level].push(x,y,size);
      },
      flush(light) {
        context.save();context.globalCompositeOperation = light ? 'source-over' : 'lighter';
        buckets.forEach((points,index) => {
          if (!points.length) return;
          context.beginPath();
          for (let i = 0; i < points.length; i += 3) {
            context.moveTo(points[i] + points[i+2],points[i+1]);
            context.arc(points[i],points[i+1],points[i+2],0,TAU);
          }
          context.fillStyle = `rgba(${palette[Math.floor(index / 24)]},${index % 24 / 23})`;context.fill();
        });
        context.restore();
      }
    };
  }
  window.WinwiseGalaxy = Object.freeze({particles,camera,project,opacity,haze,painter,smooth,darkPalette,lightPalette});
})();

'use strict';
// Apply preferences before styles load so the default never flashes light.
(() => {
  let theme = 'dark';
  let motion = 'running';
  try {
    if (localStorage.getItem('winwise.theme') === 'light') theme = 'light';
    if (localStorage.getItem('winwise.motion') === 'paused') motion = 'paused';
  } catch { /* The default also works when browser storage is unavailable. */ }
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) motion = 'paused';
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.motion = motion;
  // Hide the directory before the first paint on a fresh homepage visit.
  document.documentElement.dataset.intro = !location.hash || location.hash === '#directory' ? 'waiting' : 'ready';
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b0d10' : '#eef1f5';
})();

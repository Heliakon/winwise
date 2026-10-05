# START transition review — October 5, 2026

The reported symptom is uneven START-transition playback in Chrome on a powerful Windows PC with a 4K display, while playback on a MacBook Pro is smooth. The source inspection identified resolution-dependent rendering costs. The user's Windows hardware, Chrome GPU configuration, display scaling, and refresh rate were not available for direct measurement.

## Findings

- The transition used a Canvas 2D particle renderer. Its desktop particle budget grew from 5,200 at a 1920 × 1080 CSS viewport to 7,200 at 3840 × 2160. The welcome scene uses a different, WebGL-capable renderer.
- The effects canvas multiplied viewport dimensions by a device-pixel ratio capped at 1.5, without a total-pixel limit. A 3840 × 2160 viewport at DPR 1 required an 8.29-million-pixel buffer. A 2560 × 1440 viewport at DPR 1.5 required the same buffer size.
- The directory's parent was clipped during the reveal, but its 145-row table and stretched sidebar remained approximately 15,000 pixels tall. Both were animated; clipping the parent alone did not constrain these child surfaces.
- Up to 30 elements at the 4K test viewport animated border colors and blurred box shadows. Those properties introduce painting work while the particle canvas is also being redrawn.
- The outgoing welcome panel also animated blur. The ambient star animation itself was already suspended during the transition.

These are concrete code-level costs, not proof that the user's PC has a particular GPU or driver problem. Different viewport scaling, refresh rates, GPU acceleration, and drivers can make two Chrome installations behave differently.

## Changes

- Cap the desktop particle budget at 5,200, retaining lower budgets for smaller desktop viewports and the existing 2,100 mobile budget.
- Cap the temporary effects buffer at approximately 3.69 million pixels. At a 3840 × 2160 viewport, its backing size is 2560 × 1440, reducing pixel count by about 56%. Text and controls retain their native resolution.
- Temporarily constrain the service table as well as the directory, so the sidebar no longer stretches across the full service list during animation. Restore both height constraints when the transition completes or is interrupted.
- Paint each border glow once on a temporary decorative overlay and animate only its opacity. Preserve the timing of particles arriving at the borders.
- Use opacity and transforms for the outgoing welcome panel, and stop processing particles after their final fade.
- Remove temporary overlays, drawing buffers, and height constraints during cleanup. The transition's 3.8-second deadline is unchanged.

The established welcome scene, ambient background position, service data, search behavior, and script-builder logic are unchanged.

## Validation scope

Local Chromium checks use software rendering (SwiftShader). Frame timings from this environment are not a benchmark of either user device, and no smooth-playback guarantee is inferred from them. The useful comparison is the bounded canvas size, reduced animated surface heights, removal of paint-property animations, correct appearance, and complete cleanup.

Checks passed at 1920 × 1080 / DPR 1, 3840 × 2160 / DPR 1, 2560 × 1440 / DPR 1.5, and 1728 × 1117 / DPR 2. Each run restored all 145 rows, removed temporary overlays and height constraints, released the transition buffer, and reported no page errors. Theme changes, resizing, navigation, paused animation, and reduced motion also passed cleanup checks. Dark and light screenshots were inspected during particle arrival at the borders; labels remained readable.

## References

- [Google: How to create high-performance CSS animations](https://web.dev/articles/animations-guide) — prefer transform and opacity; blurred shadows cost more to paint.
- [MDN: Optimizing canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas) — batch drawing operations and account for high-resolution backing buffers.
- [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) — callback frequency generally follows the display refresh rate.
- [Chrome: RenderingNG architecture](https://developer.chrome.com/docs/chromium/renderingng-architecture) — rendering stages and GPU/driver dependencies.

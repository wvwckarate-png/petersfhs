// Figures for AP Physics 2 material added 2026-11-18 (batch C: Units 13-14).
import { FIGS } from "./phys2_figs_c.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, gap, after) => ({ hub: "physics2", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  at(13, "ray-wavefronts", "p2-ray-model", `<p><strong>What a ray actually is.</strong> Light is a wave, and its crests spread out as <strong>wavefronts</strong>. A <strong>ray</strong> is a straight line drawn perpendicular to the wavefronts, pointing in the direction the light travels. As the figure shows, flat (plane) wavefronts give parallel rays, and the circular wavefronts around a point source give rays that fan straight outward. Every ray diagram in this unit is a drawing of these lines, showing the path of light before and after it meets a mirror, a lens, or a boundary.</p>`),
  at(13, "convex-mirror-rays", "p2-mirror-principal-rays", `Their dashed extensions behind the mirror meet at the image, which is virtual, upright, reduced, and between the mirror and F.</p>`),
  at(13, "snell-sine-graph", "p2-snell-graph", `Plotting θ₁ against θ₂ (the angles themselves) does not give a straight line, because Snell's law relates the sines, not the angles.</p>`),
  at(13, "lens-data-graphs", "p2-lens-graphs", `and levels off toward s<sub>i</sub> = f as s<sub>o</sub> becomes very large.</p>`),
  at(14, "sound-pressure-amplitude", "p2-amplitude-energy", `The <strong>pressure amplitude</strong> is the maximum increase (or decrease) in pressure from the equilibrium pressure, as the figure shows.</p>`),
  at(14, "wave-yt-yx", "p2-sinusoid-equations", `is the length of one full cycle on that graph's axis.</p>`),
  at(14, "string-junction", "p2-two-string-boundary", `Whether the reflected pulse flips depends on the wave speed in the second string:</p>`),
  at(14, "pulse-superposition", "p2-superposition-pulses", `After they pass, each pulse continues unchanged, as if the other had never been there.</p>`),
  at(14, "beats-envelope", "p2-beats", `the <strong>beat frequency</strong>, is the difference between the two frequencies.</p>`),
  at(14, "single-slit-intensity", "p2-single-slit", `a smaller opening compared with λ means more spreading.</p></div>`),
  at(14, "slit-envelope-missing", "p2-slit-envelope"),
  at(14, "white-light-grating", "p2-white-light-grating"),
];

// Renders a slowly turning 3D form as ASCII into <pre id="field">.
// Each character cell casts one ray into a signed-distance scene (a rippling
// sphere fused with a tilted ring) and picks a glyph by how brightly it's lit.
// The light follows the pointer.

(() => {
  const el = document.getElementById('field');
  if (!el) return;

  const RAMP = ' .,:;-=+*ox%#@';
  const STILL = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FRAME_MS = 1000 / 30;
  const BOUND = 1.9; // radius of a sphere that contains the whole form

  let cols = 0, rows = 0, cellW = 7, cellH = 14, scale = 1, cx = 0, cy = 0;
  let lightX = -0.5, lightY = 0.6, aimX = lightX, aimY = lightY;

  // Per-frame rotation terms, shared by every call to dist().
  let t = 0, ca = 1, sa = 0, cb = 1, sb = 0, cc = 1, sc = 0;

  function measure() {
    const probe = document.createElement('span');
    probe.textContent = 'M'.repeat(100);
    el.textContent = '';
    el.appendChild(probe);
    cellW = probe.getBoundingClientRect().width / 100;
    cellH = parseFloat(getComputedStyle(el).lineHeight);
    el.textContent = '';

    const w = innerWidth, h = innerHeight;
    cols = Math.ceil(w / cellW);
    rows = Math.ceil(h / cellH);
    scale = 2 / Math.min(w * 0.9, h);
    // Sit the form right of centre on wide screens so the intro text has room.
    cx = w > 900 ? w * 0.6 : w / 2;
    cy = h * 0.47;
  }

  function smin(a, b, k) {
    const h = Math.max(k - Math.abs(a - b), 0) / k;
    return Math.min(a, b) - h * h * k * 0.25;
  }

  function dist(x, y, z) {
    // Turn the whole form about y, then tilt it about x.
    const x1 = x * ca - z * sa;
    const z1 = x * sa + z * ca;
    const y1 = y * cb - z1 * sb;
    const z2 = y * sb + z1 * cb;

    const ripple = 0.07 * Math.sin(5 * x1 + t * 1.7) * Math.sin(5 * y1 + t * 1.1) * Math.sin(5 * z2 + t * 1.3);
    const sphere = Math.sqrt(x1 * x1 + y1 * y1 + z2 * z2) - 0.85 + ripple;

    // The ring spins on its own axis.
    const rx = x1 * cc - y1 * sc;
    const ry = x1 * sc + y1 * cc;
    const ring = Math.hypot(Math.hypot(rx, z2) - 1.45, ry) - 0.11;

    return smin(sphere, ring, 0.45);
  }

  function shade(px, py, pz, dx, dy, dz) {
    const e = 0.003;
    let nx = dist(px + e, py, pz) - dist(px - e, py, pz);
    let ny = dist(px, py + e, pz) - dist(px, py - e, pz);
    let nz = dist(px, py, pz + e) - dist(px, py, pz - e);
    const nl = Math.hypot(nx, ny, nz) || 1;
    nx /= nl; ny /= nl; nz /= nl;

    let lx = lightX, ly = lightY, lz = -0.9;
    const ll = Math.hypot(lx, ly, lz);
    lx /= ll; ly /= ll; lz /= ll;

    const ndl = nx * lx + ny * ly + nz * lz;
    const diffuse = Math.max(ndl, 0);
    // Reflect the light about the normal and compare with the view ray.
    const rdotv = -((2 * ndl * nx - lx) * dx + (2 * ndl * ny - ly) * dy + (2 * ndl * nz - lz) * dz);
    const spec = Math.pow(Math.max(rdotv, 0), 24);
    const rim = Math.pow(1 - Math.abs(nx * dx + ny * dy + nz * dz), 3);

    return 0.06 + 0.72 * diffuse + 0.45 * spec + 0.3 * rim;
  }

  function background(u, v, row, col) {
    // Faint rings pulse outward from the form, like sonar.
    const r = Math.hypot(u, v);
    if (r < 1.05) return ' ';
    const wave = Math.sin(r * 7 - t * 1.4);
    const fade = 1 / (r * r);
    if (wave > 0.97 && ((row * 7 + col * 5) % 6) / 6 < fade * 1.6) return wave > 0.995 && fade > 0.4 ? ':' : '.';
    return ' ';
  }

  function frame(now) {
    t = now / 1000;
    ca = Math.cos(t * 0.3); sa = Math.sin(t * 0.3);
    const tilt = 0.45 + 0.25 * Math.sin(t * 0.21);
    cb = Math.cos(tilt); sb = Math.sin(tilt);
    cc = Math.cos(t * 0.55); sc = Math.sin(t * 0.55);

    lightX += (aimX - lightX) * 0.08;
    lightY += (aimY - lightY) * 0.08;

    // Fade in over the first second and a half.
    const boot = STILL ? 1 : Math.min(1, now / 1500);
    const top = RAMP.length - 1;
    const camZ = -4.2, focal = 2.3;
    const lines = new Array(rows);

    for (let r = 0; r < rows; r++) {
      let line = '';
      const v = (cy - (r + 0.5) * cellH) * scale;
      for (let c = 0; c < cols; c++) {
        const u = ((c + 0.5) * cellW - cx) * scale;

        let dx = u, dy = v, dz = focal;
        const dl = Math.hypot(dx, dy, dz);
        dx /= dl; dy /= dl; dz /= dl;

        // Skip rays that miss the bounding sphere entirely.
        const b = camZ * dz;
        const disc = b * b - (camZ * camZ - BOUND * BOUND);
        if (disc < 0) { line += background(u, v, r, c); continue; }

        const root = Math.sqrt(disc);
        let d = -b - root;
        const far = -b + root;
        let hit = false;
        for (let i = 0; i < 48 && d < far; i++) {
          const s = dist(dx * d, dy * d, camZ + dz * d);
          if (s < 0.004) { hit = true; break; }
          d += s * 0.9;
        }

        if (!hit) { line += background(u, v, r, c); continue; }

        const lum = shade(dx * d, dy * d, camZ + dz * d, dx, dy, dz) * boot;
        line += RAMP[Math.max(1, Math.min(top, Math.round(lum * top)))];
      }
      lines[r] = line;
    }
    el.textContent = lines.join('\n');
  }

  let last = -Infinity;
  function loop(now) {
    if (now - last >= FRAME_MS) { last = now; frame(now); }
    requestAnimationFrame(loop);
  }

  addEventListener('pointermove', (e) => {
    aimX = (e.clientX / innerWidth - 0.5) * 2.4;
    aimY = (0.5 - e.clientY / innerHeight) * 2.4;
  }, { passive: true });

  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { measure(); if (STILL) frame(8000); }, 100);
  });

  document.fonts.ready.then(() => {
    measure();
    if (STILL) {
      lightX = aimX; lightY = aimY;
      frame(8000);
    } else {
      requestAnimationFrame(loop);
    }
  });
})();

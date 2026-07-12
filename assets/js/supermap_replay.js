// Preview-card grid + Rerun replay modal for the SuperMap site.
//
// Reads segments.json (via window.superMapViewer once the viewer is ready),
// builds one preview card per dynamic replay segment, and wires:
//   * hover a card  -> superMapViewer.highlightSegment(bit) lights up the
//                      matching trajectory + covered points in the big map.
//   * click a card  -> plays the segment's .rrd in an EMBEDDED Rerun web viewer
//                      (@rerun-io/web-viewer from the CDN, pinned to the sdk
//                      version that wrote the recordings). The viewer fetches the
//                      .rrd from seg.rrd_url, which can be a same-origin relative
//                      path (local testing) or the GitHub Release URL (production).
//   * "Open in new tab" + "Download .rrd" fallbacks are always present, and any
//     load failure is surfaced in the modal with those links.
//
// RERUN_VERSION is substituted at build time from site.yaml.

const RERUN_VERSION = '0.22.1';
// Use jsDelivr's `/+esm` bundle, NOT the raw index.js: index.js imports its
// sibling module as `./re_viewer` (no extension), which jsDelivr won't resolve
// (404 -> "Failed to fetch dynamically imported module"). The +esm bundle
// rewrites that internal import to a resolvable URL and re-exports WebViewer.
const WEB_VIEWER_URL = `https://cdn.jsdelivr.net/npm/@rerun-io/web-viewer@${RERUN_VERSION}/+esm`;
const HOSTED_BASE = `https://app.rerun.io/version/${RERUN_VERSION}`;

// Absolute URL for the "open in new tab" hosted-viewer fallback. Needs an
// absolute rrd URL, so resolve relative rrd_url against the page origin.
function hostedUrl(rrdUrl) {
  const abs = new URL(rrdUrl, window.location.href).href;
  return `${HOSTED_BASE}/index.html?url=${encodeURIComponent(abs)}`;
}

// ---- Modal (built once, reused) ----
let modal, modalBody, modalTitle, modalOpen, modalDl, modalStatus, modalLoading;
let WebViewerClass = null;   // lazily imported once
let viewerInstance = null;   // current live WebViewer

function buildModal() {
  modal = document.createElement('div');
  modal.id = 'rerun-modal';
  modal.className = 'rr-modal';
  modal.innerHTML = `
    <div class="rr-modal-bar">
      <span class="rr-modal-title"></span>
      <span class="rr-modal-actions">
        <span class="rr-status"></span>
        <a class="rr-open" target="_blank" rel="noopener">Open in new tab ↗</a>
        <a class="rr-dl">Download .rrd</a>
        <button class="rr-close" title="Close (Esc)">✕</button>
      </span>
    </div>
    <div class="rr-modal-body">
      <div class="rr-loading">
        <div class="rr-spinner"></div>
        <div class="rr-loading-text">Loading replay…</div>
        <div class="rr-loading-sub">streaming the recording (200–400&nbsp;MB) — this can take a few seconds</div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modalBody = modal.querySelector('.rr-modal-body');
  modalLoading = modal.querySelector('.rr-loading');
  modalTitle = modal.querySelector('.rr-modal-title');
  modalOpen = modal.querySelector('.rr-open');
  modalDl = modal.querySelector('.rr-dl');
  modalStatus = modal.querySelector('.rr-status');
  modal.querySelector('.rr-close').onclick = closeModal;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
}

// Remove any previous Rerun canvas / error, but keep the loading overlay element.
function clearModalBody() {
  Array.from(modalBody.children).forEach((el) => {
    if (el !== modalLoading) el.remove();
  });
}

let loadToken = 0;   // guards against races when a card is clicked mid-load

async function openModal(seg) {
  if (!modal) buildModal();
  const myToken = ++loadToken;
  const badge = segLabel(seg);
  modalTitle.textContent = (badge ? badge + ' · ' : '') + cleanTitle(seg);
  modalOpen.href = hostedUrl(seg.rrd_url);
  modalDl.href = seg.rrd_url;
  clearModalBody();
  // Show the loading overlay and keep it up until the recording is actually fed
  // into the viewer (see below). We do NOT rely on the viewer's own events —
  // they fire during its welcome screen, before any data is loaded.
  modalLoading.style.display = 'flex';
  modalLoading.classList.remove('rr-hidden');
  modalStatus.textContent = 'loading…';
  setLoadingText('Loading replay…', 'downloading the recording…');
  modal.classList.add('open');
  document.body.classList.add('modal-open');

  const hideLoading = () => {
    modalLoading.classList.add('rr-hidden');
    modalStatus.textContent = '';
    setTimeout(() => { if (modalLoading) modalLoading.style.display = 'none'; }, 350);
  };

  try {
    if (!WebViewerClass) {
      const mod = await import(WEB_VIEWER_URL);
      WebViewerClass = mod.WebViewer;
    }
    if (myToken !== loadToken) return;   // superseded by a newer click

    // 1) Fetch the .rrd bytes ourselves, so the overlay reflects the REAL
    //    download and we control exactly when "loaded" happens. Show progress
    //    when the server provides a content-length.
    const bytes = await fetchRrd(seg.rrd_url, (frac, mb, totalMb) => {
      if (myToken !== loadToken) return;
      setLoadingText('Loading replay…',
        totalMb ? `downloading ${mb} / ${totalMb} MB (${Math.round(frac * 100)}%)`
                : `downloading… ${mb} MB`);
    });
    if (myToken !== loadToken) return;

    // 2) Start the viewer WITHOUT a url (so it doesn't kick off its own fetch),
    //    then push the fetched bytes through a log channel. The overlay covers
    //    the brief welcome screen until we send the data.
    setLoadingText('Loading replay…', 'decoding & rendering…');
    viewerInstance = new WebViewerClass();
    await viewerInstance.start(null, modalBody, { width: '100%', height: '100%' });
    if (myToken !== loadToken) { try { viewerInstance.stop(); } catch (e) {} return; }

    const channel = viewerInstance.open_channel('supermap-replay');
    channel.send_rrd(bytes);
    // The recording is now in the viewer. Give it a beat to build the UI, then
    // reveal it. (send_rrd is synchronous into wasm; the frame paints next tick.)
    setTimeout(() => { if (myToken === loadToken) hideLoading(); }, 400);
  } catch (err) {
    if (myToken !== loadToken) return;
    // Most likely cause: the .rrd URL is not publicly reachable, or a network
    // error. Surface the always-available fallbacks.
    console.error('Rerun embed failed:', err);
    modalStatus.textContent = 'embed failed';
    modalLoading.style.display = 'none';
    clearModalBody();
    const errBox = document.createElement('div');
    errBox.className = 'rr-error';
    errBox.innerHTML =
      `<p>Couldn't load the replay inline.</p>
       <p class="muted">If this persists, use the links above to open it in a new tab, or
          download the <code>.rrd</code> and run <code>rerun &lt;file&gt;.rrd</code> locally.</p>
       <p class="muted">${(err && err.message) || err}</p>`;
    modalBody.appendChild(errBox);
  }
}

// Fetch an .rrd into a Uint8Array, reporting download progress when possible.
async function fetchRrd(url, onProgress) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} fetching the recording`);
  const total = Number(resp.headers.get('content-length')) || 0;
  const totalMb = total ? (total / 1e6).toFixed(0) : null;
  if (!resp.body || !total) {
    // No streaming / no length: fall back to a single buffered read.
    const buf = await resp.arrayBuffer();
    return new Uint8Array(buf);
  }
  const reader = resp.body.getReader();
  const chunks = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    if (onProgress) onProgress(received / total, (received / 1e6).toFixed(0), totalMb);
  }
  const out = new Uint8Array(received);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}

function setLoadingText(main, sub) {
  const m = modalLoading.querySelector('.rr-loading-text');
  const s = modalLoading.querySelector('.rr-loading-sub');
  if (m) m.textContent = main;
  if (s) s.textContent = sub;
}

function closeModal() {
  if (!modal) return;
  loadToken++;   // cancel any in-flight fetch/start for the previous segment
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (viewerInstance) {
    try { viewerInstance.stop(); } catch (e) { /* ignore */ }
    viewerInstance = null;
  }
  clearModalBody();   // free the canvas / WASM viewer, keep the loading overlay element
}

// "segment_03" -> "Seg 03"; falls back to parsing the name if `segment` absent.
function segLabel(seg) {
  const src = seg.segment || seg.name || '';
  const m = String(src).match(/(\d+)/);
  return m ? `Seg ${m[1].padStart(2, '0')}` : '';
}

// Human title with any ad-hoc "(Seg N)" suffix stripped — the badge carries the
// segment index consistently instead.
function cleanTitle(seg) {
  return (seg.title || seg.name || '').replace(/\s*\((?:seg|segment)\s*\d+\)\s*$/i, '').trim();
}

// ---- Card grid ----
function buildCards(viewer) {
  const grid = document.getElementById('segment-grid');
  if (!grid) return;
  const segments = viewer.segments || [];
  if (!segments.length) {
    grid.innerHTML = '<p class="muted">No replay segments configured.</p>';
    return;
  }
  for (const seg of segments) {
    const card = document.createElement('div');
    card.className = 'seg-card';
    const thumb = seg.preview
      ? `<video class="seg-thumb" src="${seg.preview}" ${seg.thumbnail ? `poster="${seg.thumbnail}"` : ''} muted loop playsinline preload="none"></video>`
      : seg.thumbnail
        ? `<img class="seg-thumb" src="${seg.thumbnail}" alt="${cleanTitle(seg)}" loading="lazy">`
        : `<div class="seg-thumb seg-thumb-missing">no preview</div>`;
    const badge = segLabel(seg);
    card.innerHTML = `
      ${thumb}
      <div class="seg-meta">
        <span class="seg-title">${badge ? `<span class="seg-idx">${badge}</span> ` : ''}${cleanTitle(seg)}</span>
        <span class="seg-play">▶ play</span>
      </div>`;

    card.addEventListener('mouseenter', () => {
      viewer.highlightSegment(seg.seg_bit);
      card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
      viewer.clearHighlight();
      card.classList.remove('active');
    });
    card.addEventListener('click', () => openModal(seg));
    grid.appendChild(card);
  }

  // Play preview videos only while visible, and cap concurrent playback —
  // starting a dozen decoders at once exhausts media resources and janks
  // scrolling. Closest-to-center cards win.
  if ('IntersectionObserver' in window) {
    const MAX_PLAYING = 4;
    const visible = new Set();
    let timer = null;
    const schedule = () => {
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        const mid = window.innerHeight / 2;
        const sorted = Array.from(visible).sort((a, b) => {
          const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
          return Math.abs((ra.top + ra.bottom) / 2 - mid) - Math.abs((rb.top + rb.bottom) / 2 - mid);
        });
        sorted.forEach((v, i) => {
          if (i < MAX_PLAYING) { if (v.paused) { v.muted = true; v.play().catch(() => {}); } }
          else if (!v.paused) v.pause();
        });
      }, 150);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting) visible.add(v);
        else { visible.delete(v); v.pause(); }
      });
      schedule();
    }, { threshold: 0.15 });
    grid.querySelectorAll('video.seg-thumb').forEach((v) => io.observe(v));
    window.addEventListener('scroll', schedule, { passive: true });
  }
}

// The viewer module (viewer_app.js) publishes window.superMapViewer and calls
// whenReady once segments.json + geometry are loaded.
function start() {
  const v = window.superMapViewer;
  if (v) v.whenReady(buildCards);
  else setTimeout(start, 100);   // viewer module still importing
}
start();

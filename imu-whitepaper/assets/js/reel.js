/* Demo: real footage of the four kinds of platform. The IMU strip along the bottom is baked into the video
   (tools/render/scope_overlay.py), so the page draws nothing: a clip plays only while it is on screen, and the badge
   shows the playback rate of the source video, read from the clip's own clock (it changes where the source changes
   speed). With reduced motion the clips wait for a click. */
(function () {
  "use strict";
  const reel = document.getElementById("reel");
  if (!reel) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>';
  const clips = [...reel.querySelectorAll(".clip")].map(fig => ({
    fig, video: fig.querySelector("video"), rateEl: fig.querySelector(".clip-rate"), btn: fig.querySelector(".vctl"),
    rates: fig.dataset.rates.split(",").map(s => s.split(":").map(Number)), rate: null, userPaused: reduce, visible: false,
  }));

  function setRate(c) {
    const t = c.video.currentTime || 0;
    let r = c.rates[0][1];
    for (const [s, v] of c.rates) if (t >= s - 0.03) r = v;
    if (r === c.rate) return;
    c.rate = r;
    c.rateEl.textContent = r === 1 ? "real time" : `${r}× speed`;
    c.rateEl.classList.toggle("fast", r !== 1);
  }
  function sync(c) {
    if (c.visible && !c.userPaused && !document.hidden) c.video.play().catch(() => {}); else c.video.pause();
    c.fig.classList.toggle("paused", c.userPaused);
    if (c.btn) { c.btn.innerHTML = c.userPaused ? PLAY : PAUSE; c.btn.setAttribute("aria-label", c.userPaused ? "Play" : "Pause"); }
  }

  for (const c of clips) {
    c.video.addEventListener("timeupdate", () => setRate(c));       // a few times a second, no drawing loop
    c.fig.addEventListener("click", () => { c.userPaused = !c.userPaused; sync(c); });
    sync(c);
    setRate(c);
  }
  document.addEventListener("visibilitychange", () => clips.forEach(sync));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      const c = clips.find(x => x.fig === e.target);
      if (c) { c.visible = e.isIntersecting; sync(c); }
    }), { threshold: 0.3 });
    clips.forEach(c => io.observe(c.fig));
  } else clips.forEach(c => { c.visible = true; sync(c); });
})();

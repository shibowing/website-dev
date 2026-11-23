/* Page behaviour: author list, hero video, top bar and section highlighting, scroll reveals, counters, citation. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = id => document.getElementById(id);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- links that exist only after the arXiv release ----------
  // set each to its URL when it is public; until then the link is disabled and carries a "soon" badge
  const LINKS = {
    paper: null,                                // the arXiv version
    package: null,                              // https://huggingface.co/datasets/Tartan-IMU/whitepaper-reproducibility
  };
  const WAIT = { paper: "The arXiv version will be linked here", package: "The reproducibility package becomes public with the arXiv version" };
  for (const [key, url] of Object.entries(LINKS)) {
    document.querySelectorAll(`[data-link="${key}"]`).forEach(a => {
      if (url) { a.href = url; return; }
      a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.title = WAIT[key];
    });
    if (url) document.querySelectorAll(`[data-soon="${key}"]`).forEach(x => x.remove());
  }

  // ---------- authors and affiliations ----------
  // Sources: the author footnote of the paper (teams), the team reports, the workshop organizer page; names without
  // a confirmed affiliation carry "?" until it is filled in (see README.md).
  const INST = ["Carnegie Mellon University", "Amazon FAR", "Shanghai Innovation Institute", "University at Buffalo",
    "The Pennsylvania State University", "Marco Intelligence", "Inha University", "Independent researchers", "RaydioTek",
    "POSTECH", "University of Michigan", "Tunghai University", "Bangladesh University of Engineering and Technology"];
  // Organizers: the challenge's organizer page (2026-11-20), the ICRA 2027 workshop proposal (Xiang Fei; Shibo Zhao at
  // Amazon FAR, confirmed by Yi Zhao 2026-11-22), the AirLab Slack (Yutian Chen "MSR '27"; Maxim Yagnyatinskiy, Mahati
  // Manda and Chris Shi are AirLab members with CMU accounts). Teams: the author footnote of the paper.
  const AFF = {
    "Yi Zhao": [1], "Maxim Yagnyatinskiy": [1], "Xiang Fei": [1], "Mahati Manda": [1], "Chris Shi": [1], "Haomin Wen": [3], "Rana Alkhoury Maroun": [6], "Korab Berisha": [6],
    "Jiwon Choi": [7], "Hogyun Kim": [7], "Jungwoo Lee": [7], "Geonmo Yang": [7], "Seunghee Yun": [7], "Haozhe Zhou": [1],
    "Sanjayan Pradeep Kumar Sreekala": [8], "Chinmayan Pradeep Kumar Sreekala": [8], "Ssu-Rui Lee": [9],
    "Sanghyun Park": [10], "Seongjun Kim": [10], "Avantika Rattan": [11], "Chankyo Kim": [11], "Hao-Ting Ho": [12],
    "Mohosin Mahmud": [13], "Yutian Chen": [1], "Muqing Cao": [1], "Yuheng Qiu": [2], "Sifan Zhou": [1], "Junbin Yuan": [1],
    "Younggun Cho": [7], "Soohee Han": [10], "Mohammed Imamul Hassan Bhuiyan": [13], "Junyi Geng": [5], "Wenshan Wang": [1],
    "Chen Wang": [4], "Guanya Shi": [1], "Maani Ghaffari": [11], "Sebastian Scherer": [1], "Shibo Zhao": [2],
  };
  const CORR = "Shibo Zhao";
  if (S && $("authors")) {
    const box = $("authors");
    box.innerHTML = S.authors.map(n => {
      const a = AFF[n];
      return `<span class="a">${n}<sup${a ? "" : ' title="affiliation to be confirmed"'}>${a ? a.join(",") : "?"}${n === CORR ? "*" : ""}</sup></span>`;
    }).join(", ");
    $("affils").innerHTML = INST.map((x, i) => `<span><sup>${i + 1}</sup>${x}</span>`).join(" ") + ` <span><sup>*</sup>corresponding author</span>`;
  }

  // ---------- citation: a formatted reference, BibTeX (highlighted) or plain text, and a copy button ----------
  if (S && $("bibtex")) {
    const bibForm = {};
    S.teams.forEach(t => t.report.authors.forEach((n, i) => { bibForm[n] = t.report.authors_bib[i]; }));
    const toBib = n => bibForm[n] || (() => { const w = n.split(" "); return w.slice(-1)[0] + ", " + w.slice(0, -1).join(" "); })();
    const forms = S.authors.map(toBib);                                     // "Last, First"
    const initials = f => { const [last, first] = f.split(", "); return first.split(/\s+/).map(w => w.split("-").map(x => x[0] + ".").join("-")).join(" ") + " " + last; };
    const short = forms.map(initials);
    const TITLE = "Toward IMU Foundation Models: A White Paper on Cross-Embodiment Inertial Odometry";
    const KEY = "zhao2026imufoundation";
    const fields = [["title", "Toward {IMU} Foundation Models: A White Paper on Cross-Embodiment Inertial Odometry"],
      ["author", forms.join(" and\n             ")], ["journal", "arXiv preprint"], ["year", "2026"]];
    const bib = `@article{${KEY},\n` + fields.map(([k, v]) => `  ${k.padEnd(7)} = {${v}}`).join(",\n") + "\n}";
    const esc = x => x.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const bibHtml = `<span class="k">@article</span><span class="p">{</span><span class="id">${KEY}</span><span class="p">,</span>\n` +
      fields.map(([k, v]) => `  <span class="f">${k.padEnd(7)}</span><span class="p"> = {</span><span class="v">${esc(v)}</span><span class="p">}</span>`).join('<span class="p">,</span>\n') +
      '\n<span class="p">}</span>';
    const plain = `${short.slice(0, -1).join(", ")} and ${short[short.length - 1]}, “${TITLE},” arXiv preprint, 2026.`;
    $("cite-ref").innerHTML = `<b>${TITLE}</b><br>${short.slice(0, 5).join(", ")}, … , ${short.slice(-2).join(" and ")} (${short.length} authors) · <i>arXiv preprint</i>, 2026`;
    let fmt = "bibtex";
    const show = () => { if (fmt === "bibtex") $("bibtex").innerHTML = bibHtml; else $("bibtex").textContent = plain; };
    show();
    $("cite-fmt").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      fmt = b.dataset.v;
      $("cite-fmt").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      show();
    });
    $("copy-bib").addEventListener("click", async e => {
      const b = e.currentTarget, lab = b.querySelector("span");
      let ok = true;
      try { await navigator.clipboard.writeText(fmt === "bibtex" ? bib : plain); } catch (err) {
        ok = false;
        const r = document.createRange(); r.selectNodeContents($("bibtex")); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
      }
      lab.textContent = ok ? "Copied" : "Selected: press Ctrl/⌘+C"; b.classList.add("done");
      setTimeout(() => { lab.textContent = "Copy"; b.classList.remove("done"); }, 2400);
    });
  }

  // ---------- hero background: one video of the four platforms, rendered in advance; it plays only while on screen ----------
  const hv = $("hero-video"), hp = $("hero-pause");
  if (hv) {
    const PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
    const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>';
    // the size that matches the screen: 4K for large high-density screens, 720p (30 fps) for phones and data-saving mode.
    // data-v: raise it in index.html when the video is rendered again, so that browsers fetch the new file
    const px = window.innerWidth * (window.devicePixelRatio || 1), save = navigator.connection && navigator.connection.saveData;
    const size = window.matchMedia("(max-width: 720px)").matches || save ? 720 : px >= 2800 ? 2160 : 1440;
    hv.src = `assets/video/hero_${size}.mp4?v=${hv.dataset.v || 1}`;
    let userPaused = reduce, vis = true;
    const sync = () => (!userPaused && vis && !document.hidden ? hv.play().catch(() => {}) : hv.pause());
    const label = () => {
      hp.innerHTML = userPaused ? PLAY : PAUSE;
      hp.setAttribute("aria-label", userPaused ? "Play the background video" : "Pause the background video");
      hp.title = hp.getAttribute("aria-label");
    };
    if ("IntersectionObserver" in window) new IntersectionObserver(es => { vis = es[0].isIntersecting; sync(); }, { threshold: 0.05 }).observe(hv);
    document.addEventListener("visibilitychange", sync);
    if (hp) { label(); hp.addEventListener("click", () => { userPaused = !userPaused; sync(); label(); }); }
    sync();
  }

  // ---------- top bar and active section ----------
  const bar = $("topbar"), hero = $("top");
  if (bar && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(es => bar.classList.toggle("show", !es[0].isIntersecting), { rootMargin: "-60px 0px 0px 0px" }).observe(hero);
    const links = [...bar.querySelectorAll("nav a")];
    const secs = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(s => io.observe(s));
  }

  // ---------- reveals ----------
  const rev = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) rev.forEach(e => e.classList.add("in"));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    rev.forEach(e => io.observe(e));
  }

  // ---------- counters ----------
  const nums = document.querySelectorAll("[data-count]");
  function count(elm) {
    const to = +elm.dataset.count, t0 = performance.now(), dur = 1300;
    const step = now => { const u = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - u, 3); elm.textContent = Math.round(to * e).toLocaleString("en-US"); if (u < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { count(e.target); io.unobserve(e.target); } }), { threshold: 0.6 });
    // the real values stay in the page; only counters that start below the first screen count up when they arrive
    nums.forEach(n => { if (n.getBoundingClientRect().top > window.innerHeight) { n.textContent = "0"; io.observe(n); } });
  }
})();

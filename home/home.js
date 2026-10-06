// neocello landing — notes.json 하나로 영어(/)·한국어(/ko/) 대문을 그린다.
(() => {
  const html = document.documentElement;
  const LANG = html.lang.startsWith("ko") ? "ko" : "en";
  const ROOT = document.body.dataset.root || "";          // 데이터·글 주소 기준 ("" 또는 "../")
  const SITE = document.body.dataset.site || "";          // 이 언어 사이트의 글 주소 앞부분 ("" 또는 "ko/")
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const T = {
    en: { ok: "Matches", cond: "With conditions", no: "No evidence", claims: "claims checked", notes: "notes", video: "video",
          checks: (n) => `${n} checks`, of: (i, n) => `${i} / ${n}`, from: "from" },
    ko: { ok: "일치", cond: "조건 있음", no: "근거 없음", claims: "주장 확인", notes: "글", video: "영상",
          checks: (n) => `팩트체크 ${n}줄`, of: (i, n) => `${i} / ${n}`, from: "출처" },
  }[LANG];
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString(LANG === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "short", day: "numeric" });

  // ---------- theme (Quartz와 같은 localStorage 키를 써서 글 페이지와 맞춘다) ----------
  try { const t = localStorage.getItem("theme"); if (t === "dark" || t === "light") html.dataset.theme = t; } catch {}
  $("#theme")?.addEventListener("click", () => {
    const dark = html.dataset.theme ? html.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    html.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", html.dataset.theme); } catch {}
  });

  // ---------- dot field (hero background) ----------
  const cv = $("#field");
  if (cv && !reduce) {
    const ctx = cv.getContext("2d");
    let W, H, dpr, mx = -999, my = -999, raf = 0;
    const GAP = 26;
    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr;
      draw();
    };
    const draw = () => {
      raf = 0;
      const rgb = getComputedStyle(html).getPropertyValue("--dot").trim();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      for (let y = GAP / 2; y < H; y += GAP) {
        for (let x = GAP / 2; x < W; x += GAP) {
          const d = Math.hypot(x - mx, y - my);
          const k = Math.max(0, 1 - d / 180);
          ctx.fillStyle = `rgba(${rgb},${0.07 + k * 0.35})`;
          ctx.beginPath(); ctx.arc(x, y, 1 + k * 1.6, 0, 6.283); ctx.fill();
        }
      }
    };
    const hero = cv.parentElement;
    hero.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; raf ||= requestAnimationFrame(draw); });
    hero.addEventListener("pointerleave", () => { mx = my = -999; raf ||= requestAnimationFrame(draw); });
    new ResizeObserver(size).observe(cv);
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
    new MutationObserver(draw).observe(html, { attributes: true, attributeFilter: ["data-theme"] });
  }

  // ---------- data ----------
  fetch(ROOT + "home/notes.json", { cache: "no-cache" })
    .then((r) => r.json())
    .then((all) => render(all.filter((n) => n[LANG]).sort((a, b) => b.date.localeCompare(a.date) || (b.sourceDate || "").localeCompare(a.sourceDate || ""))))
    .catch(() => {});

  function render(notes) {
    const facts = notes.flatMap((n) => (n[LANG].facts || []).map((f) => ({ ...f, note: n })));
    const count = { ok: 0, cond: 0, no: 0 };
    facts.forEach((f) => (count[f.v] = (count[f.v] || 0) + 1));

    // ledger
    countUp($("#n-notes"), notes.length);
    countUp($("#n-claims"), facts.length);
    countUp($("#n-no"), count.no);
    const bar = $("#dist");
    if (bar) {
      bar.innerHTML = ["ok", "cond", "no"].map((k) => `<span class="${k}" style="flex-grow:0" title="${T[k]} ${count[k]}"></span>`).join("");
      requestAnimationFrame(() => requestAnimationFrame(() => bar.querySelectorAll("span").forEach((s, i) => (s.style.flexGrow = count[["ok", "cond", "no"][i]]))));
      $("#dist-legend").innerHTML = ["ok", "cond", "no"].map((k) => `<span><i style="background:var(--${k})"></i>${T[k]}<b>${count[k]}</b></span>`).join("");
    }

    // notes grid
    const grid = $("#notes");
    if (grid) grid.innerHTML = notes.slice(0, 6).map((n) => {
      const L = n[LANG], fs = L.facts || [];
      const c = { ok: 0, cond: 0, no: 0 }; fs.forEach((f) => c[f.v]++);
      const mini = fs.length ? ["ok", "cond", "no"].map((k) => c[k] ? `<span class="${k}" style="flex:${c[k]}"></span>` : "").join("") : "";
      return `<a class="note" href="${ROOT}${SITE}trends/${n.id}">
        <div class="note-meta"><span class="field">${esc(L.field)}</span><span>·</span><span>${fmtDate(n.date)}</span></div>
        <h3>${esc(L.title)}</h3>
        <p>${esc(L.verdict)}</p>
        <div class="note-foot">
          ${n.video ? `<span class="chip"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 2l7 4-7 4z" fill="currentColor"/></svg>${T.video}</span>` : ""}
          ${fs.length ? `<span class="chip">${T.checks(fs.length)}</span><span class="mini" aria-hidden="true">${mini}</span>` : ""}
        </div></a>`;
    }).join("");

    // live fact-check
    if (facts.length) checker(facts);
  }

  // ---------- essays ----------
  fetch(ROOT + "home/essays.json", { cache: "no-cache" })
    .then((r) => r.json())
    .then((all) => {
      const list = $("#essays-list");
      const items = all.filter((e) => e[LANG]).sort((a, b) => b.date.localeCompare(a.date));
      if (!list || !items.length) { list?.closest("section")?.setAttribute("hidden", ""); return; }
      list.innerHTML = items.slice(0, 5).map((e) => `<a class="essay" href="${ROOT}${SITE}essays/${e.id}">
        <span class="essay-date">${fmtDate(e.date)}</span>
        <span class="essay-main"><span class="essay-title">${esc(e[LANG].title)}</span>
        <span class="essay-desc">${esc(e[LANG].description)}</span>
        <span class="essay-tags">${(e.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</span></span>
        <span class="essay-go" aria-hidden="true">→</span></a>`).join("");
    })
    .catch(() => {});

  function countUp(el, n) {
    // 타이머 방식: 미리보기·스크린샷에서도 최종 숫자로 끝난다
    if (!el) return;
    if (reduce || n < 2) { el.textContent = n; return; }
    const steps = 14;
    for (let k = 1; k <= steps; k++) setTimeout(() => { el.textContent = Math.round(n * (1 - Math.pow(1 - k / steps, 3))); }, k * 55);
  }

  function checker(facts) {
    const body = $("#check-body"), stamp = $("#stamp"), dots = $("#dots"), rule = $("#rule");
    let i = 0, timer = 0, paused = false;
    const DUR = 6500;
    dots.innerHTML = facts.map((f, k) => `<button type="button" class="${f.v}" aria-label="${k + 1}"></button>`).join("");
    const show = (k, animate = true) => {
      i = (k + facts.length) % facts.length;
      const f = facts[i], L = f.note[LANG];
      $("#claim").textContent = f.claim;
      $("#finding").textContent = f.result;
      const src = $("#check-src");
      src.textContent = L.short || L.title;
      src.href = `${ROOT}${SITE}trends/${f.note.id}`;
      $("#counter").textContent = T.of(i + 1, facts.length);
      stamp.className = "stamp " + f.v;
      stamp.textContent = T[f.v];
      dots.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-current", j === i ? "true" : "false"));
      if (animate && !reduce) {
        body.classList.remove("swap"); stamp.classList.remove("hit"); void body.offsetWidth;
        body.classList.add("swap"); setTimeout(() => stamp.classList.add("hit"), 380);
      }
      restart();
    };
    let raf = 0;
    const stop = () => { clearTimeout(timer); cancelAnimationFrame(raf); };
    const restart = () => {
      stop();
      rule.style.setProperty("--p", reduce ? 1 : 0);
      if (reduce || paused) return;
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min(1, (t - t0) / DUR); rule.style.setProperty("--p", p); if (p < 1) raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
      timer = setTimeout(() => show(i + 1), DUR);
    };
    $("#prev").addEventListener("click", () => show(i - 1));
    $("#next").addEventListener("click", () => show(i + 1));
    dots.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) show([...dots.children].indexOf(b)); });
    const card = $("#check");
    card.addEventListener("pointerenter", () => { paused = true; stop(); });
    card.addEventListener("pointerleave", () => { paused = false; restart(); });
    card.addEventListener("focusin", () => { paused = true; stop(); });
    card.addEventListener("focusout", () => { paused = false; restart(); });
    show(0, false);
    if (!reduce) setTimeout(() => stamp.classList.add("hit"), 250);
  }
})();

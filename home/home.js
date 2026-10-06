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

    // hero hook: 실제 숫자
    const eb = $("#eyebrow-stats");
    if (eb && facts.length) eb.innerHTML = LANG === "ko"
      ? `주장 <b>${facts.length}</b>개를 확인했고, <b class="no">${count.no}</b>개는 근거가 없었습니다`
      : `<b>${facts.length}</b> claims checked. <b class="no">${count.no}</b> had no evidence.`;

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

    // timeline rail
    rail(notes);

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

  // ---------- 타임라인 레일: 원문 날짜순 + 이어진 노트 곡선 + 분야 색 ----------
  function rail(notes) {
    const svg = $("#railsvg"); if (!svg || !notes.length) return;
    const items = notes.filter((n) => n.sourceDate).map((n) => ({ ...n, L: n[LANG] }));
    const byId = Object.fromEntries(items.map((n) => [n.id, n]));
    const fields = [...new Set(items.map((n) => n.L.field))];
    const color = (f) => `var(--f${(fields.indexOf(f) % 6) + 1})`;
    $("#legend").innerHTML = fields.map((f) => `<span><i style="background:${color(f)}"></i>${esc(f)}</span>`).join("");
    const W = 1000, L = 70, R = 70, base = 165, MAXGAP = 6;
    const dates = [...new Set(items.map((n) => n.sourceDate))].sort();
    const dayN = (d) => Date.parse(d) / 864e5;
    const units = [0], breaks = [];
    for (let k = 1; k < dates.length; k++) {
      const gap = dayN(dates[k]) - dayN(dates[k - 1]);
      if (gap > MAXGAP) breaks.push(k);
      units.push(units[k - 1] + Math.min(gap, MAXGAP));
    }
    const span = Math.max(units[units.length - 1], 1);
    const pos = Object.fromEntries(dates.map((d, k) => [d, L + (units[k] / span) * (W - L - R)]));
    const fmtS = (d) => new Date(d + "T00:00:00").toLocaleDateString(LANG === "ko" ? "ko-KR" : "en-US", { month: "short", day: "numeric" });
    let s = `<line x1="${L - 30}" x2="${W - R + 30}" y1="${base}" y2="${base}" stroke="var(--line)" stroke-width="2"/>`;
    breaks.forEach((k) => {
      const bx = (pos[dates[k - 1]] + pos[dates[k]]) / 2, days = Math.round(dayN(dates[k]) - dayN(dates[k - 1]));
      s += `<rect x="${bx - 10}" y="${base - 9}" width="20" height="18" fill="var(--surface)"/>`;
      s += `<path d="M${bx - 9} ${base + 6} l6 -12 M${bx + 3} ${base + 6} l6 -12" stroke="var(--muted)" stroke-width="2" fill="none"/>`;
      s += `<text x="${bx}" y="${base + 30}" text-anchor="middle" font-size="12" fill="var(--muted)">${LANG === "ko" ? days + "일" : days + " days"}</text>`;
    });
    const seen = new Set();
    items.forEach((a) => (a.related || []).forEach((rid) => {
      const key = [a.id, rid].sort().join("|"); if (seen.has(key) || !byId[rid]) return; seen.add(key);
      const x1 = pos[a.sourceDate], x2 = pos[byId[rid].sourceDate], h = Math.min(120, 30 + Math.abs(x2 - x1) * 0.35);
      s += `<path class="arc" d="M${x1} ${base} C ${x1} ${base - h}, ${x2} ${base - h}, ${x2} ${base}" fill="none" stroke="var(--muted)" stroke-opacity=".5" stroke-width="1.5"/>`;
    }));
    const sorted = [...items].sort((a, b) => a.sourceDate.localeCompare(b.sourceDate));
    const lastX = { up: -1e9, down: -1e9 }, tier = { up: 0, down: 0 };
    sorted.forEach((it, idx) => {
      const xx = pos[it.sourceDate], up = idx % 2 === 0, side = up ? "up" : "down";
      tier[side] = xx - lastX[side] < 140 ? (tier[side] + 1) % 2 : 0;
      lastX[side] = xx;
      const ly = up ? base - 130 + tier[side] * 34 : base + 66 + tier[side] * 34;
      const href = `${ROOT}${SITE}trends/${it.id}`;
      // 양 끝 근처 라벨은 안쪽으로 정렬해 잘리지 않게
      const anchor = xx > W - 150 ? "end" : xx < 150 ? "start" : "middle";
      const tx = anchor === "end" ? xx + 14 : anchor === "start" ? xx - 14 : xx;
      s += `<a href="${href}" class="node" aria-label="${esc(it.L.title)}, ${fmtS(it.sourceDate)}">
        <line x1="${xx}" x2="${xx}" y1="${up ? ly + 6 : base + 9}" y2="${up ? base - 9 : ly - 15}" stroke="${color(it.L.field)}" stroke-opacity=".55" stroke-dasharray="2 3"/>
        <circle class="dot" cx="${xx}" cy="${base}" r="8" fill="var(--surface)" stroke="${color(it.L.field)}" stroke-width="3"/>
        <text x="${tx}" y="${ly}" text-anchor="${anchor}" font-size="14" font-weight="600" fill="var(--ink)">${esc(it.L.short || it.L.title)}</text>
        <text x="${tx}" y="${ly + (up ? -18 : 18)}" text-anchor="${anchor}" font-size="12" fill="var(--muted)">${fmtS(it.sourceDate)}</text></a>`;
    });
    svg.setAttribute("viewBox", `0 0 ${W} ${base + 140}`);
    svg.innerHTML = s;
    const sc = svg.parentElement; requestAnimationFrame(() => { sc.scrollLeft = sc.scrollWidth; });
  }

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

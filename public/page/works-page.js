/* Works：依頼絵リスト・検索・ページ切り替え */
(function () {
  "use strict";
  const esc = Parts.esc;
  const norm = (s) => String(s).normalize("NFKC").toLowerCase();
  const $ = (id) => document.getElementById(id);

  const perPage = WORKS.perPage || 10;
  const works = WORKS.items.slice().sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

  /* ① 説明文と受付状況 */
  $("works-desc").innerHTML = WORKS.description.map((t) => `<p>${esc(t)}</p>`).join("");
  const st = WORKS.status;
  if (st) {
    const label = st.label || (st.open ? "受付中" : "受付停止中");
    $("works-status").innerHTML =
      `<p class="status-head"><span class="status-title">依頼の受付状況</span><span class="status-badge ${st.open ? "open" : "closed"}">${esc(label)}</span></p>
       ${st.note ? `<p class="status-note">${esc(st.note)}</p>` : ""}
       ${(st.links || []).length ? `<p class="shop-links">${st.links.map(Parts.pill).join("")}</p>` : ""}`;
  } else {
    $("works-status").hidden = true;
  }

  /* ② リスト */
  const params = new URLSearchParams(location.search);
  const state = { q: params.get("q") || "", p: parseInt(params.get("p"), 10) || 1 };
  const q = $("q");
  q.value = state.q;

  const haystack = (w) => norm([w.title, w.type, w.client, w.text, w.date, Parts.looseDate(w.date),
    ...(w.links || []).map((l) => l.label)].filter(Boolean).join(" "));

  const render = () => {
    const words = norm(state.q).split(/\s+/).filter(Boolean);
    const hit = words.length ? works.filter((w) => { const h = haystack(w); return words.every((x) => h.includes(x)); }) : works;
    const total = Math.max(1, Math.ceil(hit.length / perPage));
    state.p = Math.min(Math.max(1, state.p), total);
    const view = hit.slice((state.p - 1) * perPage, state.p * perPage);

    $("result").textContent = hit.length ? `${words.length ? "該当 " : "全 "}${hit.length.toLocaleString()} 件` : "";

    $("work-list").innerHTML = view.length
      ? view.map((w) => Parts.workRow(w)).join("")
      : `<li class="empty">該当する依頼絵がありません。</li>`;

    const html = pagerHtml(state.p, total);
    $("pager-top").innerHTML = html;
    $("pager-bottom").innerHTML = html;

    const next = new URLSearchParams();
    if (state.q) next.set("q", state.q);
    if (state.p > 1) next.set("p", state.p);
    try {
      history.replaceState(null, "", location.pathname + (next.toString() ? "?" + next : ""));
    } catch (e) { /* file:// では無効なので無視 */ }
  };

  q.addEventListener("input", () => { state.q = q.value; state.p = 1; render(); });
  document.addEventListener("click", (ev) => {
    const pg = ev.target.closest(".pager button[data-page]");
    if (pg && !pg.disabled) {
      state.p = parseInt(pg.dataset.page, 10);
      render();
      $("h-works").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  render();
})();

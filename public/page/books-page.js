/* Books：既刊リスト・検索・ページ切り替え */
(function () {
  "use strict";
  const esc = Parts.esc;
  const norm = (s) => String(s).normalize("NFKC").toLowerCase();
  const $ = (id) => document.getElementById(id);

  const perPage = BOOKS.perPage || 10;
  const books = BOOKS.items.slice().sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))); /* 新しい順 */

  $("books-desc").innerHTML = BOOKS.description.map((t) => `<p>${esc(t)}</p>`).join("");

  const params = new URLSearchParams(location.search);
  const state = { q: params.get("q") || "", p: parseInt(params.get("p"), 10) || 1 };
  const q = $("q");
  q.value = state.q;

  const haystack = (b) => norm([b.title, b.category, b.event, ...(b.tags || []), b.size,
    Parts.looseDate(b.date), b.date, Parts.price(b.price), b.text,
    ...(b.links || []).map((l) => l.label)].filter(Boolean).join(" "));

  const render = () => {
    const words = norm(state.q).split(/\s+/).filter(Boolean);
    const hit = words.length ? books.filter((b) => { const h = haystack(b); return words.every((w) => h.includes(w)); }) : books;
    const total = Math.max(1, Math.ceil(hit.length / perPage));
    state.p = Math.min(Math.max(1, state.p), total);
    const view = hit.slice((state.p - 1) * perPage, state.p * perPage);

    $("result").textContent = hit.length ? `${words.length ? "該当 " : "全 "}${hit.length.toLocaleString()} 冊` : "";

    $("book-list").innerHTML = view.length
      ? view.map((b) => Parts.bookRow(b)).join("")
      : `<li class="empty">該当する本がありません。</li>`;

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
      $("h-books").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const tag = ev.target.closest(".g-tag[data-tag]");
    if (tag) {                                  /* タグをクリックで、そのタグで絞り込み */
      q.value = state.q = tag.dataset.tag;
      state.p = 1;
      render();
      $("h-books").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  render();
})();

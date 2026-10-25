/* Gallery：一覧・検索・ページ切り替え */
(function () {
  "use strict";
  const esc = Parts.esc;
  const norm = (s) => String(s).normalize("NFKC").toLowerCase();
  const $ = (id) => document.getElementById(id);

  const perPage = GALLERY.perPage || 100;
  const items = GALLERY.items.slice().sort((a, b) => b.no - a.no); /* 新しい順 */

  /* 説明文・進捗 */
  $("gallery-desc").innerHTML = GALLERY.description.map((t) => `<p>${esc(t)}</p>`).join("");
  const done = items.length ? items[0].no : 0;   /* 現在の枚数 = 一番大きい no */
  const goal = GALLERY.goal || done;
  $("progress").innerHTML =
    `<p class="progress-text"><strong>${done.toLocaleString()}</strong> / ${goal.toLocaleString()} 枚</p>
     <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${done}"><span style="width:${Math.min(100, done / goal * 100)}%"></span></div>`;

  /* 状態（URLの ?q=…&p=… と連動） */
  const params = new URLSearchParams(location.search);
  const state = { q: params.get("q") || "", p: parseInt(params.get("p"), 10) || 1 };
  const q = $("q");
  q.value = state.q;

  const matches = (it, words) => words.every((w) => {
    const m = w.match(/^(?:no\.?|#)?(\d+)$/);
    if (m) return it.no === parseInt(m[1], 10);           /* 数字だけなら番号で完全一致 */
    return norm([it.title || "", ...(it.tags || [])].join(" ")).includes(w);
  });

  const renderPager = (cur, total) => {
    const html = pagerHtml(cur, total);
    $("pager-top").innerHTML = html;
    $("pager-bottom").innerHTML = html;
  };

  const render = () => {
    const words = norm(state.q).split(/\s+/).filter(Boolean);
    const hit = words.length ? items.filter((it) => matches(it, words)) : items;
    const total = Math.max(1, Math.ceil(hit.length / perPage));
    state.p = Math.min(Math.max(1, state.p), total);
    const view = hit.slice((state.p - 1) * perPage, state.p * perPage);

    $("result").textContent = !hit.length ? "" :
      `${words.length ? `該当 ${hit.length.toLocaleString()} 枚　` : ""}No.${view[0].no}〜No.${view[view.length - 1].no} を表示`;

    $("gallery-grid").innerHTML = view.length
      ? view.map((it) => Parts.galleryItem(it)).join("")
      : `<li class="empty">該当するイラストがありません。</li>`;

    renderPager(state.p, total);

    const next = new URLSearchParams();
    if (state.q) next.set("q", state.q);
    if (state.p > 1) next.set("p", state.p);
    try {                                        /* URLを現在の検索・ページに合わせる（file:// では無効なので無視） */
      history.replaceState(null, "", location.pathname + (next.toString() ? "?" + next : ""));
    } catch (e) { /* 何もしない */ }
  };

  q.addEventListener("input", () => { state.q = q.value; state.p = 1; render(); });

  document.addEventListener("click", (ev) => {
    const pg = ev.target.closest(".pager button[data-page]");
    if (pg && !pg.disabled) {
      state.p = parseInt(pg.dataset.page, 10);
      render();
      $("h-gallery").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const tag = ev.target.closest(".g-tag[data-tag]");
    if (tag) {                                  /* タグをクリックで、そのタグで絞り込み */
      q.value = state.q = tag.dataset.tag;
      state.p = 1;
      render();
      $("h-gallery").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  render();
})();

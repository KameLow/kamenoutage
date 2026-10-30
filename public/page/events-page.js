/* Events：次回参加予定・イベント一覧・絞り込み・ページ切り替え */
(function () {
  "use strict";
  const esc = Parts.esc;
  const norm = (s) => String(s).normalize("NFKC").toLowerCase();
  const $ = (id) => document.getElementById(id);
  const { isUpcoming, endOf } = Parts;

  const perPage = EVENTS.perPage || 10;
  const all = EVENTS.items.filter((e) => e && String(e.name || "").trim());
  const upcomingAll = all.filter(isUpcoming).sort((a, b) => a.date.localeCompare(b.date));   /* 近い順 */

  $("events-desc").innerHTML = EVENTS.description.map((t) => `<p>${esc(t)}</p>`).join("");

  /* ② 次回参加予定（ページ上部） */
  const featured = upcomingAll.slice(0, EVENTS.featured ?? 1);
  $("next-event").innerHTML = featured.length
    ? `<ul class="event-rows feature-list">${featured.map((e) => Parts.eventRow(e, true)).join("")}</ul>`
    : `<p class="empty-msg">現在、参加予定のイベントはありません。</p>`;

  /* ③ 一覧・絞り込み */
  const years = [...new Set(all.map((e) => e.date.slice(0, 4)))].sort().reverse();
  $("year").innerHTML = `<option value="">すべての年</option>` + years.map((y) => `<option value="${y}">${y}年</option>`).join("");

  const q = $("q"), year = $("year"), status = $("status");

  /* 状態（URLの ?q=…&y=…&s=…&p=… と連動） */
  const params = new URLSearchParams(location.search);
  const state = { p: parseInt(params.get("p"), 10) || 1 };
  q.value = params.get("q") || "";
  year.value = years.includes(params.get("y")) ? params.get("y") : "";
  status.value = ["upcoming", "past"].includes(params.get("s")) ? params.get("s") : "";

  const render = () => {
    const words = norm(q.value).split(/\s+/).filter(Boolean);
    const hit = all.filter((e) => {
      if (year.value && !(e.date.slice(0, 4) === year.value || endOf(e).slice(0, 4) === year.value)) return false;
      if (status.value === "upcoming" && !isUpcoming(e)) return false;
      if (status.value === "past" && isUpcoming(e)) return false;
      const h = norm([e.name, e.place, e.space, ...(e.newBooks || []), ...(e.links || []).map((l) => l.label)].join(" "));
      return words.every((w) => h.includes(w));
    });
    const up = hit.filter(isUpcoming).sort((a, b) => a.date.localeCompare(b.date));
    const past = hit.filter((e) => !isUpcoming(e)).sort((a, b) => endOf(b).localeCompare(endOf(a)));  /* 新しい順 */

    /* 参加予定 → 終了 の順に並べてから、ページで区切る */
    const ordered = [...up, ...past];
    const total = Math.max(1, Math.ceil(ordered.length / perPage));
    state.p = Math.min(Math.max(1, state.p), total);
    const view = ordered.slice((state.p - 1) * perPage, state.p * perPage);
    const vUp = view.filter(isUpcoming);
    const vPast = view.filter((e) => !isUpcoming(e));

    $("result").textContent = hit.length ? `${hit.length.toLocaleString()} 件` : "";
    let html = "";
    if (vUp.length) html += `<ul class="event-rows">${vUp.map((e) => Parts.eventRow(e, false)).join("")}</ul>`;
    if (vPast.length) html += `<h3 class="group-heading">終了したイベント</h3><ul class="event-rows">${vPast.map((e) => Parts.eventRow(e, false)).join("")}</ul>`;
    $("event-list").innerHTML = html || `<p class="empty-msg">該当するイベントがありません。</p>`;

    const pager = pagerHtml(state.p, total);
    $("pager-top").innerHTML = pager;
    $("pager-bottom").innerHTML = pager;

    const next = new URLSearchParams();
    if (q.value) next.set("q", q.value);
    if (year.value) next.set("y", year.value);
    if (status.value) next.set("s", status.value);
    if (state.p > 1) next.set("p", state.p);
    try {
      history.replaceState(null, "", location.pathname + (next.toString() ? "?" + next : ""));
    } catch (e) { /* file:// では無効なので無視 */ }
  };

  const refilter = () => { state.p = 1; render(); };
  q.addEventListener("input", refilter);
  year.addEventListener("change", refilter);
  status.addEventListener("change", refilter);

  document.addEventListener("click", (ev) => {
    const pg = ev.target.closest(".pager button[data-page]");
    if (pg && !pg.disabled) {
      state.p = parseInt(pg.dataset.page, 10);
      render();
      $("h-eventlist").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  render();
})();

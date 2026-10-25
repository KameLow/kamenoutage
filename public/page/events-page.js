/* Events：次回参加予定・イベント一覧・絞り込み */
(function () {
  "use strict";
  const esc = Parts.esc;
  const norm = (s) => String(s).normalize("NFKC").toLowerCase();
  const $ = (id) => document.getElementById(id);
  const { isUpcoming, endOf } = Parts;

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

    $("result").textContent = hit.length ? `${hit.length.toLocaleString()} 件` : "";
    let html = "";
    if (up.length) html += `<ul class="event-rows">${up.map((e) => Parts.eventRow(e, false)).join("")}</ul>`;
    if (past.length) html += `<h3 class="group-heading">終了したイベント</h3><ul class="event-rows">${past.map((e) => Parts.eventRow(e, false)).join("")}</ul>`;
    $("event-list").innerHTML = html || `<p class="empty-msg">該当するイベントがありません。</p>`;
  };

  q.addEventListener("input", render);
  year.addEventListener("change", render);
  status.addEventListener("change", render);
  render();
})();

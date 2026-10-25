/* 共通：ページ切り替えボタンのHTMLを作る（Gallery・Booksで使用） */
function pagerHtml(cur, total) {
  if (total <= 1) return "";
  const set = new Set([1, total]);
  for (let i = cur - 2; i <= cur + 2; i++) if (i >= 1 && i <= total) set.add(i);
  const arr = [...set].sort((a, b) => a - b);
  const nums = [];
  arr.forEach((n, i) => { if (i && n - arr[i - 1] > 1) nums.push("…"); nums.push(n); });
  return `<button type="button" data-page="${cur - 1}" ${cur === 1 ? "disabled" : ""}>&lsaquo; 前へ</button>` +
    nums.map((n) => n === "…"
      ? `<span class="gap">…</span>`
      : `<button type="button" data-page="${n}" ${n === cur ? 'aria-current="page"' : ""}>${n}</button>`).join("") +
    `<button type="button" data-page="${cur + 1}" ${cur === total ? "disabled" : ""}>次へ &rsaquo;</button>`;
}

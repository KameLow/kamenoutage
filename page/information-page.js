/* Information：一覧・検索・詳細の表示 */
(function () {
  "use strict";
  const esc = Parts.esc;
  const norm = (s) => String(s).normalize("NFKC").toLowerCase();
  const posts = INFORMATION.slice().sort((a, b) => b.date.localeCompare(a.date));

  /* ---------- 一覧ページ ---------- */
  const list = document.getElementById("info-list");
  if (list) {
    document.getElementById("info-desc").innerHTML =
      INFORMATION_DESCRIPTION.map((t) => `<p>${esc(t)}</p>`).join("");
    const q = document.getElementById("q");
    const cat = document.getElementById("cat");
    const count = document.getElementById("count");

    [...new Set(posts.map((p) => p.category))].forEach((c) => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c;
      cat.appendChild(o);
    });

    const render = () => {
      const words = norm(q.value).split(/\s+/).filter(Boolean);
      const hit = posts.filter((p) => {
        if (cat.value && p.category !== cat.value) return false;
        const text = norm(Parts.infoText(p));
        return words.every((w) => text.includes(w));
      });
      count.textContent = hit.length ? `${hit.length}件` : "";
      list.innerHTML = hit.length
        ? hit.map((p) => Parts.infoRow(p)).join("")
        : `<li class="empty">該当するお知らせがありません。</li>`;
    };

    q.addEventListener("input", render);
    cat.addEventListener("change", render);
    render();
  }

  /* ---------- 詳細ページ ---------- */
  const art = document.getElementById("info-article");
  if (art) {
    const id = new URLSearchParams(location.search).get("id");
    const p = posts.find((x) => x.id === id);
    if (p) {
      document.title = `${p.title} | かめの宴`;
      art.innerHTML =
        `<p class="info-meta"><time datetime="${esc(p.date)}">${esc(Parts.dot(p.date))}</time><span class="tag">${esc(p.category)}</span></p>
         <h1 class="article-title">${esc(p.title)}</h1>
         <div class="article-body">${Parts.infoBody(p.body)}
           ${Parts.isExt(p.url) ? `<p>この記事は外部サイト（${esc(Parts.siteOf(p))}）に掲載されています。</p>
           <p><a class="pill-link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">外部サイトで読む &nearr;</a></p>` : ""}</div>
         <p class="back"><a href="information.html">&larr; お知らせ一覧へ戻る</a></p>`;
    } else {
      art.innerHTML =
        `<h1 class="article-title">お知らせが見つかりません</h1>
         <p class="back"><a href="information.html">&larr; お知らせ一覧へ戻る</a></p>`;
    }
  }
})();

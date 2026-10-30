/* 共通部品：一覧の「1件分」のHTMLを作ります。
   各ページとトップページで同じ見た目にするため、ここにまとめています。 */
const Parts = (function () {
  "use strict";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(4, "0");
  const pad2 = (n) => String(n).padStart(2, "0");
  const dot = (d) => String(d ?? "").replace(/-/g, ".");
  const isExt = (u) => /^https?:\/\//.test(u || "");
  const attrs = (u) => isExt(u) ? ' target="_blank" rel="noopener noreferrer"' : "";
  const pill = (l) => `<a class="pill-link" href="${esc(l.url)}"${attrs(l.url)}>${esc(l.label)}</a>`;
  const row = (label, html) => html ? `<div><dt>${esc(label)}</dt><dd>${html}</dd></div>` : "";
  const looseDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d || "") ? dot(d) : (d || "");
  const price = (v) => typeof v === "number" ? (v === 0 ? "無料" : v.toLocaleString() + "円") : (v || "");

  /* タグ：page を渡すとそのページの検索へのリンク、なければ（そのページ内で絞り込む）ボタン */
  const tagHtml = (t, page) => page
    ? `<a class="g-tag" href="${page}?q=${encodeURIComponent(t)}">${esc(t)}</a>`
    : `<button type="button" class="g-tag" data-tag="${esc(t)}">${esc(t)}</button>`;

  /* ---------- Information ---------- */
  const siteOf = (p) => {
    if (p.site) return p.site;
    try { return new URL(p.url).hostname.replace(/^www\./, ""); } catch (e) { return "外部サイト"; }
  };

  const infoRow = (p) => {
    const head = `<time datetime="${esc(p.date)}">${esc(dot(p.date))}</time>
               <span class="tag">${esc(p.category)}</span>
               <span class="info-title">${esc(p.title)}</span>`;
    return isExt(p.url)
      ? `<li><a class="is-external" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
           ${head}
           <span class="ext-mark">外部サイト：${esc(siteOf(p))} &nearr;<span class="visually-hidden">（新しいタブで開きます）</span></span>
         </a></li>`
      : `<li><a href="information-detail.html?id=${encodeURIComponent(p.id)}">${head}</a></li>`;
  };

  /* 本文の文章：URL（http…）と [表示名](URL) を自動でリンクにする */
  const linkify = (text) => String(text ?? "")
    .split(/(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|https?:\/\/[^\s<>"'）)」』、。]+)/)
    .map((tok, i) => {
      if (i % 2 === 0) return esc(tok);
      const m = tok.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
      return m
        ? `<a href="${esc(m[2])}" target="_blank" rel="noopener noreferrer">${esc(m[1])}</a>`
        : `<a href="${esc(tok)}" target="_blank" rel="noopener noreferrer">${esc(tok)}</a>`;
    }).join("");

  const bodyBlock = (b) => {
    if (typeof b === "string") return `<p>${linkify(b)}</p>`;
    if (!b) return "";
    if (b.img) {
      const alt = b.alt || b.caption || "";
      return `<figure class="article-figure">
        <button type="button" class="thumb-btn" data-full="${esc(b.full || b.img)}" data-alt="${esc(alt)}" aria-label="画像を拡大して見る">
          <img src="${esc(b.img)}" alt="${esc(alt)}" loading="lazy" decoding="async">
        </button>
        ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}
      </figure>`;
    }
    if (b.url) {
      return `<p class="article-link"><a class="pill-link" href="${esc(b.url)}"${attrs(b.url)}>${esc(b.label || b.url)}${isExt(b.url) ? " &nearr;" : ""}</a>${b.text ? ` <span>${esc(b.text)}</span>` : ""}</p>`;
    }
    return b.text ? `<p>${linkify(b.text)}</p>` : "";
  };
  const infoBody = (arr) => (arr || []).map(bodyBlock).join("");
  const infoText = (p) => [p.title, p.category, p.site, ...(p.body || []).map((b) =>
    typeof b === "string" ? b : [b && b.text, b && b.caption, b && b.alt, b && b.label].filter(Boolean).join(" "))]
    .filter(Boolean).join(" ");

  /* ---------- Gallery ---------- */
  const thumbOf = (it) => it.thumb || `${GALLERY.thumbDir}${pad(it.no)}${GALLERY.thumbExt}`;
  /* 拡大表示に使う画像：full があればそれ、なければ fullDir（設定時）、どちらもなければサムネイル */
  const fullOf = (it) => it.full ||
    (GALLERY.fullDir ? `${GALLERY.fullDir}${pad(it.no)}${GALLERY.fullExt || GALLERY.thumbExt}` : thumbOf(it));
  /* サムネイルはクリックで拡大表示。url があれば、拡大表示に「元画像を開く」ボタンが出る */
  const galleryThumb = (it, cls) => {
    const label = `${it.no}番${it.title ? " " + esc(it.title) : ""}`;
    const img = `<img src="${esc(thumbOf(it))}" alt="${it.no}番" loading="lazy" decoding="async">`;
    return `<div class="${cls}"><button type="button" class="thumb-btn" data-full="${esc(fullOf(it))}" data-alt="${it.no}番${it.title ? "：" + esc(it.title) : ""}"${it.url ? ` data-open="${esc(it.url)}"` : ""} aria-label="${label}を拡大して見る">${img}</button></div>`;
  };
  const galleryItem = (it, o = {}) => `<li class="g-item">
             ${galleryThumb(it, "g-thumb")}
             <p class="g-no"><span>${pad(it.no)}</span>${it.date ? `<time datetime="${esc(it.date)}">${esc(dot(it.date))}</time>` : ""}</p>
             ${(it.tags || []).length ? `<p class="g-tags">${it.tags.map((t) => tagHtml(t, o.tagPage)).join("")}</p>` : ""}
           </li>`;
  const galleryMini = (it) => `<li>${galleryThumb(it, "mini-thumb")}</li>`;

  /* ---------- Books ---------- */
  const bookRow = (b, o = {}) => {
    const cover = b.cover || "images/books/placeholder-book.svg";
    const links = (b.links || []).map(pill).join("");
    const cat = (b.category ? `<span class="book-cat">${esc(b.category)}</span>` : "") +
      ((b.tags || []).length ? `<span class="g-tags">${b.tags.map((t) => tagHtml(t, o.tagPage)).join("")}</span>` : "");
    return `<li class="book">
             <div class="book-cover">
               <button type="button" class="thumb-btn" data-full="${esc(b.full || cover)}" data-alt="${esc(b.title)}" aria-label="${esc(b.title)}の表紙を拡大して見る">
                 <img src="${esc(cover)}" alt="${esc(b.title)}の表紙" loading="lazy" decoding="async">
               </button>
             </div>
             <div class="book-info">
               <h3 class="book-title">${esc(b.title)}</h3>
               <dl class="book-spec">
                 ${row("カテゴリ", cat ? `<span class="book-cats">${cat}</span>` : "")}
                 ${row("サイズ", esc(b.size))}
                 ${row("発行日", b.date ? `<time datetime="${esc(b.date)}">${esc(looseDate(b.date))}</time>${b.event ? `<span class="book-event">${esc(b.event)}</span>` : ""}` : "")}
                 ${row("価格", esc(price(b.price)))}
                 ${row("通販", links ? `<span class="shop-links">${links}</span>` : "")}
               </dl>
               ${b.text ? `<p class="book-text">${esc(b.text)}</p>` : ""}
             </div>
           </li>`;
  };

  /* ---------- Works ---------- */
  const workRow = (w) => {
    const img = w.image || "images/works/placeholder.svg";
    return `<li class="work">
             <div class="work-thumb">
               <button type="button" class="thumb-btn" data-full="${esc(w.full || img)}" data-alt="${esc(w.title)}" aria-label="${esc(w.title)}を拡大して見る">
                 <img src="${esc(img)}" alt="${esc(w.title)}" loading="lazy" decoding="async">
               </button>
             </div>
             <div class="work-info">
               <h3 class="work-title">${esc(w.title)}</h3>
               <p class="work-meta">
                 ${w.type ? `<span class="tag">${esc(w.type)}</span>` : ""}
                 ${w.date ? `<time datetime="${esc(w.date)}">${esc(looseDate(w.date))}</time>` : ""}
                 ${w.client ? `<span>依頼主：${esc(w.client)}</span>` : ""}
               </p>
               ${w.text ? `<p class="work-text">${esc(w.text)}</p>` : ""}
               ${(w.links || []).length ? `<p class="shop-links">${w.links.map(pill).join("")}</p>` : ""}
             </div>
           </li>`;
  };

  /* ---------- Events ---------- */
  const now = new Date();
  const today = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
  const endOf = (e) => e.dateEnd || e.date;
  const isUpcoming = (e) => endOf(e) >= today;
  const WD = ["日", "月", "火", "水", "木", "金", "土"];
  const fmt1 = (s, withYear) => {
    const [y, m, d] = s.split("-").map(Number);
    return `${withYear ? y + "." : ""}${pad2(m)}.${pad2(d)}（${WD[new Date(y, m - 1, d).getDay()]}）`;
  };
  const eventDate = (e) => {
    if (!e.dateEnd || e.dateEnd === e.date) return fmt1(e.date, true);
    const sameYear = e.date.slice(0, 4) === e.dateEnd.slice(0, 4);
    return `${fmt1(e.date, true)}〜${fmt1(e.dateEnd, !sameYear)}`;
  };
  /* 開催日までの日数（今日が開催日なら0、開催中ならマイナス）。日付だけで数えます */
  const daysUntil = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    const [ty, tm, td] = today.split("-").map(Number);
    return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(ty, tm - 1, td)) / 86400000);
  };
  const countdown = (e) => {
    if (!isUpcoming(e)) return "";
    const n = daysUntil(e.date);
    const text = n > 0 ? `あと${n}日` : (n === 0 ? "本日開催" : "開催中");
    return `<span class="days-left">${text}</span>`;
  };
  const eventRow = (e, feature) => {
    const cut = e.circleCut || "images/events/circlecut-placeholder.svg";
    const links = (e.links || []).map(pill).join("");
    const books = (e.newBooks || []).length
      ? `<ul class="plain-list">${e.newBooks.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : "";
    return `<li class="event-row${feature ? " feature" : ""}">
       <div class="event-cut">
         <button type="button" class="thumb-btn" data-full="${esc(e.circleCutFull || cut)}" data-alt="${esc(e.name)}のサークルカット" aria-label="${esc(e.name)}のサークルカットを拡大して見る">
           <img src="${esc(cut)}" alt="${esc(e.name)}のサークルカット" loading="lazy" decoding="async">
         </button>
       </div>
       <div class="event-body">
         <h3 class="event-title">${esc(e.name)}${isUpcoming(e) ? ' <span class="tag">参加予定</span>' : ""}</h3>
         <dl class="spec">
           ${row("開催日", `<time datetime="${esc(e.date)}">${esc(eventDate(e))}</time>${countdown(e)}`)}
           ${row("会場", esc(e.place))}
           ${row("スペース", esc(e.space))}
           ${row("リンク", links ? `<span class="shop-links">${links}</span>` : "")}
           ${row("新刊", books)}
         </dl>
       </div>
     </li>`;
  };

  return { esc, pad, dot, isExt, attrs, pill, row, looseDate, price, tagHtml,
    siteOf, infoRow, linkify, infoBody, infoText,
    galleryThumb, galleryItem, galleryMini, bookRow, workRow,
    endOf, isUpcoming, daysUntil, countdown, eventDate, eventRow };
})();

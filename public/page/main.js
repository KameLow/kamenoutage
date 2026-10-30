/* トップページ：各ページのデータから、最新の情報を取り出して表示します */
(function () {
  "use strict";
  const esc = Parts.esc;
  const $ = (id) => document.getElementById(id);
  const byDateDesc = (a, b) => String(b.date || "").localeCompare(String(a.date || ""));
  const cfg = LATEST.display || {};
  const none = `<p class="empty-msg">まだありません。</p>`;

  /* ① プロフィール */
  const p = LATEST.profile;
  $("profile").innerHTML =
    `<img src="${esc(p.image)}" alt="${esc(p.name)}のイラスト">
     <div>
       <h3 class="intro-name">${esc(p.name)}</h3>
       ${p.text.map((t) => `<p>${esc(t)}</p>`).join("")}
       ${(p.links || []).length ? `<p class="profile-links">${p.links.map((l) =>
         `<a class="pill-link" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`).join("")}</p>` : ""}
     </div>`;

  /* ② 最新のお知らせ（Informationのデータから。形はInformationの一覧と同じ） */
  $("news").innerHTML = INFORMATION.slice().sort(byDateDesc).slice(0, cfg.news || 3)
    .map((p) => Parts.infoRow(p)).join("");

  /* ③ 最新の更新（Gallery・Books・Works の最新1件ずつ：サムネイル・タイトル・日付） */
  const g = GALLERY.items.slice().sort((a, b) => b.no - a.no)[0];
  const bk = BOOKS.items.slice().sort(byDateDesc)[0];
  const w = WORKS.items.slice().sort(byDateDesc)[0];
  const thumb = (src, full, alt) =>
    `<div class="latest-thumb"><button type="button" class="thumb-btn" data-full="${esc(full || src)}" data-alt="${esc(alt)}" aria-label="${esc(alt)}を拡大して見る"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"></button></div>`;
  const caption = (title, date) =>
    `<h4 class="latest-title">${esc(title)}</h4>` +
    (date ? `<p class="latest-date"><time datetime="${esc(date)}">${esc(Parts.looseDate(date))}</time></p>` : "");
  const cols = [
    { kind: "Gallery", href: "gallery.html", link: "ギャラリーへ", cls: "latest-gallery",
      html: g ? Parts.galleryThumb(g, "latest-thumb") + caption(g.title || Parts.pad(g.no), g.date) : none },
    { kind: "Books", href: "books.html", link: "同人誌一覧へ", cls: "latest-books",
      html: bk ? thumb(bk.cover || "images/books/placeholder-book.svg", bk.full, bk.title) + caption(bk.title, bk.date) : none },
    { kind: "Works", href: "works.html", link: "依頼絵・合同一覧へ", cls: "latest-works",
      html: w ? thumb(w.image || "images/works/placeholder.svg", w.full, w.title) + caption(w.title, w.date) : none }
  ];
  $("latest").innerHTML = cols.map((c) =>
    `<div class="latest-col ${c.cls}">
       <h3 class="latest-kind">${c.kind}</h3>
       <div class="latest-box">${c.html}</div>
       <p class="latest-link"><a href="${c.href}">${c.link} &rarr;</a></p>
     </div>`).join("");

  /* ④ 次回参加予定のイベント（Eventsのデータから。開催日・会場・スペースだけを表示） */
  const dateText = (e) => {
    if (!e.dateEnd || e.dateEnd === e.date) return Parts.dot(e.date);
    const sameYear = e.date.slice(0, 4) === e.dateEnd.slice(0, 4);
    return `${Parts.dot(e.date)}〜${sameYear ? Parts.dot(e.dateEnd.slice(5)) : Parts.dot(e.dateEnd)}`;
  };
  const events = EVENTS.items
    .filter((e) => e && String(e.name || "").trim() && Parts.isUpcoming(e))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, cfg.events || 2);
  $("events").innerHTML = events.length
    ? `<div class="event-list">${events.map((e) => {
        const cut = e.circleCut || "images/events/circlecut-placeholder.svg";
        return `<article class="event">
           <button type="button" class="thumb-btn" data-full="${esc(e.circleCutFull || cut)}" data-alt="${esc(e.name)}のサークルカット" aria-label="${esc(e.name)}のサークルカットを拡大して見る">
             <img src="${esc(cut)}" alt="${esc(e.name)}のサークルカット" loading="lazy" decoding="async">
           </button>
           <div>
             <h3 class="event-name">${esc(e.name)}</h3>
             <ul class="event-info">
               <li>${esc(dateText(e))}${Parts.countdown(e)}</li>
               ${e.place ? `<li>${esc(e.place)}</li>` : ""}
               ${e.space ? `<li>${esc(e.space)}</li>` : ""}
             </ul>
           </div>
         </article>`;
      }).join("")}</div>`
    : `<p class="empty-msg">現在、参加予定のイベントはありません。</p>`;

  /* ⑤ 最近のつぶやき（3つの表示方法。上にあるものが優先されます）
     1. cards … 自分で書いた文章を、サイトのデザインで表示（Xの表示制限の影響を受けないので確実です）
     2. posts … 特定のポストを、Xの埋め込みで表示
     3. account のみ … Xのタイムライン埋め込み（Xの側の制限で、表示されないことがあります） */
  const tw = LATEST.twitter || {};
  const limit = Math.min(20, Math.max(1, parseInt(tw.limit, 10) || 3));   /* 表示するポスト数（1〜20） */
  const user = tw.account ? encodeURIComponent(tw.account) : "";
  const cards = (tw.cards || []).filter((c) => c && (c.text || c.url))
    .sort(byDateDesc).slice(0, limit);
  const posts = (tw.posts || []).filter(Boolean).slice(0, limit);
  const moreLink = user
    ? `<p class="tweets-more"><a href="https://x.com/${user}" target="_blank" rel="noopener noreferrer">Xでもっと見る &rarr;</a></p>` : "";

  if (cards.length) {
    $("tweets").innerHTML =
      `<ul class="tweet-cards">${cards.map((c) => {
        const inner = `<p class="tweet-meta">${tw.account ? `<span class="tweet-account">@${esc(tw.account)}</span>` : ""}${c.date ? `<time datetime="${esc(c.date)}">${esc(Parts.looseDate(c.date))}</time>` : ""}</p>
           ${c.text ? `<p class="tweet-text">${esc(c.text)}</p>` : ""}
           ${c.image ? `<img class="tweet-img" src="${esc(c.image)}" alt="" loading="lazy" decoding="async">` : ""}`;
        return c.url
          ? `<li><a class="tweet-card" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${inner}<span class="ext-mark">Xで見る &nearr;</span></a></li>`
          : `<li><div class="tweet-card">${inner}</div></li>`;
      }).join("")}</ul>` + moreLink;
  } else if (user || posts.length) {
    const body = posts.length
      ? posts.map((u) =>
          `<blockquote class="twitter-tweet" data-theme="dark" data-lang="ja" data-dnt="true"><a href="${esc(String(u).replace("://x.com/", "://twitter.com/"))}">ポストを見る</a></blockquote>`).join("")
      : `<a class="twitter-timeline" data-theme="dark" data-lang="ja" data-chrome="nofooter" data-tweet-limit="${limit}" href="https://x.com/${user}">@${esc(tw.account)} のポストを読み込み中…</a>`;
    $("tweets").innerHTML = body + moreLink;

    const s = document.createElement("script");
    s.async = true;
    s.charset = "utf-8";
    s.src = "https://platform.twitter.com/widgets.js";
    s.onerror = () => { $("tweets-note").hidden = false; };
    document.body.appendChild(s);

    /* 10秒たっても表示されなければ、お知らせの文を出す */
    setTimeout(() => {
      if (!$("tweets").querySelector("iframe")) $("tweets-note").hidden = false;
    }, 10000);
  } else {
    $("tweets-section").hidden = true;
  }
})();

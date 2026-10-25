/* 全ページ共通：ヘッダー・フッターの表示、メニュー、画像の拡大表示、ページ先頭へ戻るボタン */
(function () {
  "use strict";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const target = (u) => /^https?:\/\//.test(u) ? ' target="_blank" rel="noopener noreferrer"' : "";

  /* ---------- ヘッダー・フッター（設定は lastest/SITE.js） ---------- */
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (typeof SITE !== "undefined") {
    const here = location.pathname.split("/").pop() || "index.html";
    const isHere = (it) => it.href === here || (it.match || []).includes(here);

    const item = (it) => it.children
      ? `<li class="has-sub">
           <button type="button" class="sub-toggle" aria-expanded="false" aria-haspopup="true">${esc(it.label)}</button>
           <ul class="sub">${it.children.map((c) => `<li><a href="${esc(c.url)}"${target(c.url)}>${esc(c.label)}</a></li>`).join("")}</ul>
         </li>`
      : `<li><a href="${esc(it.href)}"${isHere(it) ? ' aria-current="page"' : ""}${target(it.href)}>${esc(it.label)}</a></li>`;

    if (header) {
      header.innerHTML =
        `<a class="logo" href="index.html"><img src="${esc(SITE.logo)}" alt="${esc(SITE.name)} トップページへ"></a>
         <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="gnav">メニュー</button>
         <nav id="gnav" class="gnav" aria-label="メインメニュー"><ul>${SITE.nav.map(item).join("")}</ul></nav>`;
    }
    if (footer) {
      footer.innerHTML =
        ((SITE.footerLinks || []).length
          ? `<p class="footer-links">${SITE.footerLinks.map((l) => `<a class="pill-link" href="${esc(l.url)}"${target(l.url)}>${esc(l.label)}</a>`).join("")}</p>` : "") +
        `<small>${esc(SITE.copyright || "")}</small>`;
    }
  }

  /* ---------- メニューの開閉 ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("gnav");
  const sub = document.querySelector(".has-sub");
  const subBtn = sub ? sub.querySelector(".sub-toggle") : null;

  const closeMenu = () => {
    if (!toggle) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const closeSub = () => {
    if (!sub) return;
    sub.classList.remove("open");
    subBtn.setAttribute("aria-expanded", "false");
  };

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (ev) => { if (ev.target.closest("a")) closeMenu(); });  /* リンクを押したら閉じる */
  }
  if (sub) {
    subBtn.addEventListener("click", () => {
      const open = sub.classList.toggle("open");
      subBtn.setAttribute("aria-expanded", String(open));
    });
  }
  document.addEventListener("click", (ev) => { if (sub && !sub.contains(ev.target)) closeSub(); });

  /* ---------- 画像の拡大表示 ----------
     class="thumb-btn"（data-full / data-alt）をクリックで開き、
     右上の×・背景クリック・Escで閉じる */
  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "画像の拡大表示");
  box.innerHTML = `<div class="lightbox-inner"><img alt=""><button type="button" class="lightbox-close" aria-label="閉じる">&times;</button><a class="lightbox-open" target="_blank" rel="noopener noreferrer" hidden>元画像を開く &nearr;</a></div>`;
  document.body.appendChild(box);
  const boxImg = box.querySelector("img");
  const boxClose = box.querySelector(".lightbox-close");
  const boxOpen = box.querySelector(".lightbox-open");   /* 「元画像を開く」（data-open があるときだけ表示） */
  let lastFocus = null;

  const closeBox = () => {
    box.hidden = true;
    boxImg.removeAttribute("src");
    boxOpen.hidden = true;
    boxOpen.removeAttribute("href");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  };
  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".thumb-btn");
    if (!btn) return;
    lastFocus = btn;
    boxImg.src = btn.dataset.full;
    boxImg.alt = btn.dataset.alt || "";
    if (btn.dataset.open) { boxOpen.href = btn.dataset.open; boxOpen.hidden = false; }
    else { boxOpen.hidden = true; boxOpen.removeAttribute("href"); }
    box.hidden = false;
    document.body.classList.add("no-scroll");
    boxClose.focus();
  });
  boxClose.addEventListener("click", closeBox);
  box.addEventListener("click", (ev) => { if (ev.target === box) closeBox(); });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      if (!box.hidden) closeBox();
      closeSub();
      closeMenu();
    } else if (ev.key === "Tab" && !box.hidden) {
      ev.preventDefault();             /* 拡大表示中は、フォーカスを×ボタンと「元画像を開く」の間で回す */
      const list = boxOpen.hidden ? [boxClose] : [boxClose, boxOpen];
      const i = list.indexOf(document.activeElement);
      list[(i + (ev.shiftKey ? -1 : 1) + list.length) % list.length].focus();
    }
  });

  /* ---------- ページの先頭へ戻るボタン ---------- */
  const up = document.createElement("button");
  up.type = "button";
  up.className = "to-top";
  up.hidden = true;
  up.setAttribute("aria-label", "ページの先頭へ戻る");
  up.innerHTML = "&uarr;";
  document.body.appendChild(up);
  window.addEventListener("scroll", () => { up.hidden = window.scrollY < 600; }, { passive: true });
  up.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

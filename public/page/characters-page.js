/* Characters：キャラクター選択・設定画の切り替え・詳細表示 */
(function () {
  "use strict";
  const { esc, attrs, row } = Parts;
  const $ = (id) => document.getElementById(id);

  const items = CHARACTERS.items;
  $("chars-desc").innerHTML = CHARACTERS.description.map((t) => `<p>${esc(t)}</p>`).join("");

  const sel = $("char-select");
  const detail = $("char-detail");
  if (!items.length) {
    sel.hidden = true;
    detail.innerHTML = `<p class="empty-msg">キャラクターは準備中です。</p>`;
    return;
  }

  const colorStyle = (c) => c.color ? ` style="--char:${esc(c.color)}"` : "";
  const fromHash = () => {
    let id = "";
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { /* 無視 */ }
    const i = items.findIndex((c) => c.id === id);
    return i >= 0 ? i : 0;
  };
  let cur = fromHash();
  let slide = 0;

  /* 設定画（images）。なければ image の1枚だけ */
  const slidesOf = (c) => (c.images && c.images.length ? c.images : [{ src: c.image, full: c.full }])
    .map((s) => typeof s === "string" ? { src: s } : s)
    .filter((s) => s && s.src);

  /* 上の選択欄（最初に1回だけ作る） */
  sel.innerHTML = items.map((c, i) =>
    `<li><button type="button" class="char-tab" data-i="${i}" aria-pressed="false"${colorStyle(c)}>
       <img src="${esc(c.icon || (slidesOf(c)[0] || {}).src || c.image)}" alt="" loading="lazy" decoding="async">
       <span>${esc(c.name)}</span>
     </button></li>`).join("");

  const mark = () => {
    sel.querySelectorAll(".char-tab").forEach((b, i) => b.setAttribute("aria-pressed", String(i === cur)));
  };

  /* 設定画の切り替え（画面全体は作り直さず、表示だけ切り替える） */
  const showSlide = (i) => {
    const slides = slidesOf(items[cur]);
    slide = (i + slides.length) % slides.length;
    detail.querySelectorAll(".slide").forEach((el, k) => { el.hidden = k !== slide; });
    detail.querySelectorAll(".slide-dot").forEach((el, k) => el.setAttribute("aria-current", String(k === slide)));
    const lab = detail.querySelector(".slide-label");
    if (lab) lab.textContent = slides[slide].label || "";
  };

  const show = () => {
    const c = items[cur];
    const q = encodeURIComponent(c.tag || c.name);
    const links = [
      ...(CHARACTERS.relatedLinks !== false
        ? [{ label: "Galleryで見る", url: `gallery.html?q=${q}` }, { label: "Booksで見る", url: `books.html?q=${q}` }]
        : []),
      ...(c.links || [])
    ];
    const prev = items[(cur - 1 + items.length) % items.length];
    const next = items[(cur + 1) % items.length];
    const slides = slidesOf(c);
    const many = slides.length > 1;
    slide = 0;

    /* Galleryの、このキャラのタグが付いた最新のイラスト（3枚まで） */
    const tag = c.tag || c.name;
    const minis = (typeof GALLERY !== "undefined" ? GALLERY.items : [])
      .filter((it) => (it.tags || []).includes(tag))
      .sort((a, b) => b.no - a.no)
      .slice(0, 3);

    detail.innerHTML =
      `<article class="char"${colorStyle(c)} data-bg="${esc(c.reading || c.name)}">
       ${items.length > 1 ? `<div class="char-nav">
         <button type="button" class="char-step" data-step="-1">&lsaquo; ${esc(prev.name)}</button>
         <button type="button" class="char-step" data-step="1">${esc(next.name)} &rsaquo;</button>
       </div>` : ""}
         <div class="char-visual">
           <div class="char-stage">
             ${slides.map((s, k) =>
               `<button type="button" class="thumb-btn slide"${k ? " hidden" : ""} data-full="${esc(s.full || s.src)}" data-alt="${esc(c.name)}${s.label ? "（" + esc(s.label) + "）" : ""}" aria-label="${esc(c.name)}の画像を拡大して見る">
                  <img src="${esc(s.src)}" alt="${esc(c.name)}の${esc(s.label || "立ち絵")}" decoding="async"${k ? ' loading="lazy"' : ""}>
                </button>`).join("")}
             ${many ? `<button type="button" class="slide-arrow prev" data-step="-1" aria-label="前の画像">&lsaquo;</button>
                       <button type="button" class="slide-arrow next" data-step="1" aria-label="次の画像">&rsaquo;</button>` : ""}
           </div>
           ${many ? `<div class="slide-dots" role="group" aria-label="画像の切り替え">
             ${slides.map((s, k) => `<button type="button" class="slide-dot" data-slide="${k}" aria-label="${k + 1}枚目${s.label ? "：" + esc(s.label) : ""}" aria-current="${k === 0}"></button>`).join("")}
           </div>` : ""}
           ${slides.some((s) => s.label) ? `<p class="slide-label">${esc(slides[0].label || "")}</p>` : ""}
         </div>
         <div class="char-body">
           ${c.reading ? `<p class="char-reading">${esc(c.reading)}</p>` : ""}
           <h3 class="char-name">${esc(c.name)}</h3>
           ${c.catch ? `<p class="char-catch">${esc(c.catch)}</p>` : ""}
           ${(c.profile || []).length ? `<dl class="spec char-spec">${c.profile.map(([k, v]) => row(k, esc(v))).join("")}</dl>` : ""}
           ${c.text ? `<p class="char-text">${esc(c.text)}</p>` : ""}
           ${minis.length ? `<div class="char-gallery">
             <p class="char-sub">Galleryの最新イラスト</p>
             <ul class="mini-thumbs">${minis.map((it) => Parts.galleryMini(it)).join("")}</ul>
           </div>` : ""}
           <p class="shop-links">${links.map((l) => `<a class="pill-link" href="${esc(l.url)}"${attrs(l.url)}>${esc(l.label)}</a>`).join("")}</p>
         </div>
       </article>`;
    mark();
  };

  const go = (i) => {
    cur = (i + items.length) % items.length;
    show();
    try { history.replaceState(null, "", "#" + encodeURIComponent(items[cur].id)); } catch (e) { /* file:// では無効なので無視 */ }
    const tab = sel.querySelectorAll(".char-tab")[cur];
    if (tab && tab.scrollIntoView) tab.scrollIntoView({ block: "nearest", inline: "center" });
  };

  document.addEventListener("click", (ev) => {
    const tab = ev.target.closest(".char-tab");
    if (tab) { go(parseInt(tab.dataset.i, 10)); return; }
    const step = ev.target.closest(".char-step");
    if (step) { go(cur + parseInt(step.dataset.step, 10)); return; }
    const arrow = ev.target.closest(".slide-arrow");
    if (arrow) { showSlide(slide + parseInt(arrow.dataset.step, 10)); return; }
    const dotBtn = ev.target.closest(".slide-dot");
    if (dotBtn) showSlide(parseInt(dotBtn.dataset.slide, 10));
  });

  /* 左右キー・スワイプでも設定画を切り替える */
  detail.addEventListener("keydown", (ev) => {
    if ((ev.key === "ArrowLeft" || ev.key === "ArrowRight") && ev.target.closest(".char-visual")) {
      showSlide(slide + (ev.key === "ArrowRight" ? 1 : -1));
    }
  });
  let touchX = null;
  detail.addEventListener("touchstart", (ev) => {
    touchX = ev.target.closest(".char-stage") ? ev.touches[0].clientX : null;
  }, { passive: true });
  detail.addEventListener("touchend", (ev) => {
    if (touchX === null) return;
    const dx = ev.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) showSlide(slide + (dx < 0 ? 1 : -1));
  });

  window.addEventListener("hashchange", () => { cur = fromHash(); show(); });

  show();
})();

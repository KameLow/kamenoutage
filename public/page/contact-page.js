/* Contact：フォームの表示と送信（Formspree） */
(function () {
  "use strict";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const attrs = (u) => /^https?:\/\//.test(u) ? ' target="_blank" rel="noopener noreferrer"' : "";

  /* 説明・注意事項・プライバシー */
  $("contact-desc").innerHTML = CONTACT.description.map((t) => `<p>${esc(t)}</p>`).join("");
  $("contact-notice").innerHTML =
    `<p class="status-head"><span class="status-title">ご連絡の前にお読みください</span></p>
     <ul class="notice-list">${CONTACT.notices.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
     ${(CONTACT.altLinks || []).length
       ? `<p class="notice-alt">フォーム以外では、こちらでも受け付けています：</p>
          <p class="shop-links">${CONTACT.altLinks.map((l) => `<a class="pill-link" href="${esc(l.url)}"${attrs(l.url)}>${esc(l.label)}</a>`).join("")}</p>`
       : ""}`;
  $("privacy-text").innerHTML = CONTACT.privacy.map((t) => `<p>${esc(t)}</p>`).join("");

  /* お問い合わせの種類 */
  const cat = $("f-category");
  cat.innerHTML = `<option value="">選択してください</option>` +
    CONTACT.categories.map((c) => `<option value="${esc(c.value)}">${esc(c.value)}</option>`).join("");

  const isWork = () => !!(CONTACT.categories.find((c) => c.value === cat.value) || {}).work;

  const refresh = () => {
    const work = isWork();
    const box = $("work-fields");
    box.hidden = !work;
    box.querySelectorAll("input,select,textarea").forEach((el) => { el.disabled = !work; });   /* 非表示の間は送信しない */
    $("msg-label").textContent = work ? "ご依頼の内容" : "お問い合わせ内容";

    /* お仕事の受付状況（Works の設定と連動） */
    const st = $("work-state");
    const ws = typeof WORKS !== "undefined" ? WORKS.status : null;
    if (work && ws) {
      st.hidden = false;
      st.className = "form-hint work-state " + (ws.open ? "open" : "closed");
      st.textContent = ws.open
        ? "現在、お仕事のご依頼を受け付けています。"
        : "現在、お仕事のご依頼の受付を停止しています。" + (ws.note ? ws.note : "");
    } else {
      st.hidden = true;
    }
  };
  cat.addEventListener("change", refresh);
  refresh();

  /* 送信 */
  const form = $("contact-form");
  const status = $("form-status");
  const btn = $("submit-btn");
  const say = (msg, isError) => {
    status.hidden = !msg;
    status.textContent = msg || "";
    status.className = "form-status" + (isError ? " error" : "");
  };

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    if (!/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(CONTACT.endpoint || "")) {
      say("送信先が設定されていません。lastest/CONTACT.js の endpoint に、FormspreeのURLを設定してください。", true);
      return;
    }
    const fd = new FormData(form);
    fd.set("_subject", `${CONTACT.subjectPrefix || ""}${cat.value}（${$("f-name").value}）`);

    btn.disabled = true;
    say("送信中です…", false);
    try {
      const res = await fetch(CONTACT.endpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (res.ok) {
        say("", false);
        form.hidden = true;
        const done = $("form-done");
        done.hidden = false;
        done.focus();
        done.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      let detail = "";
      try {
        const data = await res.json();
        detail = (data.errors || []).map((e) => e.message).filter(Boolean).join(" / ");
      } catch (e) { /* 無視 */ }
      say("送信できませんでした。" + (detail ? `（${detail}）` : "入力内容を確認して、もう一度お試しください。"), true);
    } catch (e) {
      say("送信できませんでした。通信状況を確認して、もう一度お試しください。", true);
    } finally {
      btn.disabled = false;
    }
  });

  $("again-btn").addEventListener("click", () => {
    form.reset();
    refresh();
    say("", false);
    $("form-done").hidden = true;
    form.hidden = false;
    $("f-name").focus();
  });
})();

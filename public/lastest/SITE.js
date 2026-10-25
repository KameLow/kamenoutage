/* ==========================================================
   SITE.js : サイト全体の共通設定（ヘッダー・フッター）
   ヘッダーのメニュー名やリンク先、フッターは、すべてのページでここを使います。
   ここを書き換えるだけで、全ページに反映されます。

   ・nav の並びがヘッダーのメニューの並びです
   ・href が http で始まるリンクは、自動で新しいタブで開きます
   ・children を持つ項目は、カーソルを当てると枠が出るメニューになります（Shop）
   ・match は「このページを見ているときも、この項目を光らせる」ページ名です
   ========================================================== */
const SITE = {
  name: "カメロー",
  logo: "images/common/logo.png",

  nav: [
    { label: "Top", href: "index.html" },
    { label: "Information", href: "information.html", match: ["information-detail.html"] },
    { label: "Gallery", href: "gallery.html" },
    { label: "Books", href: "books.html" },
    { label: "Works", href: "works.html" },
    { label: "Events", href: "events.html" },
    { label: "Characters", href: "characters.html" },
    {
      label: "Shop",
      children: [
        { label: "BOOTH", url: "https://kamelow.booth.pm/" },
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/circle/index.php?circle_id=101226" }
      ]
    },
    { label: "Blog", href: "https://kamelow.fanbox.cc/" },
    { label: "Contact", href: "contact.html" }
  ],

  /* フッターに並べるリンク（不要なら [] ） */
  footerLinks: [
    { label: "X", url: "https://x.com/Kame_Low" },
    { label: "pixiv", url: "https://www.pixiv.net/users/9861985" }
  ],

  copyright: "© Kame_Low All rights reserved."
};

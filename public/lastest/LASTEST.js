/* ==========================================================
   LASTEST.js : トップページの「自己紹介」と「Xのポスト」の設定
   ※ お知らせ・最新の更新（Gallery / Books / Works）・次回参加予定のイベントは、
     各ページのデータから自動で取り出して表示します（ここには書きません）。
       お知らせ        … lastest/INFORMATION.js（日付の新しい3件）
       最新の更新      … lastest/GALLERY.js・BOOKS.js・WORKS.js（それぞれ最新1件）
       参加予定イベント … lastest/EVENTS.js（開催日が近い参加予定の2件）
   ・image は images/lastest フォルダ内のファイルを指定します
   ========================================================== */
const LATEST = {

  /* 表示する件数（変えたいときだけ書き換えます） */
  display: {
    news: 3,        // お知らせの件数
    events: 2       // 次回参加予定のイベントの件数
  },

  /* ① ページと本人の紹介 */
  profile: {
    name: "",
    image: "images/lastest/icon.jpg",
    text: [
      "お疲れ様です！かめの宴のカメローです！",
      "おこがましくも公式サイトを作らせていただきました。イラストや同人誌、イベント等の実績をまとめています。"
    ],
    /* 紹介文の下に並べるリンク（X・pixivなど）。不要な行は消してOK */
    links: [
      { label: "X", url: "https://x.com/Kame_Low" },
      { label: "pixiv", url: "https://www.pixiv.net/users/9861985" },
      { label: "FANBOX", url: "https://kamelow.fanbox.cc/" }
    ]
  },

  /* ⑤ 最近のつぶやき（Xのポストを載せます）
     表示方法は3つあります。上にあるものが優先されます。
     1. cards … 自分で書いた文章を、サイトのデザインで表示します（おすすめ）
        ※ Xの埋め込みは、X側の制限で表示されないことがあるため、確実に表示したいときはこれを使います
        例）cards: [ { date: "2026-10-20", text: "ポストの文章", url: "https://x.com/ユーザー名/status/…", image: "" } ]
        ・date は日付、url はそのポストのURL（書くと、カードをクリックでXへ移動します）
        ・image は画像のパス（なくてOK。images/lastest フォルダに置きます）
        ・新しい日付が上に表示されます
     2. posts … 特定のポストを、Xの埋め込みで表示します
        例）posts: ["https://x.com/ユーザー名/status/1234567890123456789"]
     3. account だけ … Xのタイムライン（最新のポスト）の埋め込みです。X側の制限で、表示されないことがあります
     ・account は、Xのユーザー名（@なし）。「Xでもっと見る」のリンクにも使います
     ・limit は表示する件数（1〜20）
     cards・posts・account のすべてが空だと、この項目は非表示になります */
  twitter: {
    account: "Kame_Low",       // 例："your_account"
    limit: 3,
    cards: [
      // { date: "2026-10-20", text: "ここにポストの文章を書きます。", url: "https://x.com/", image: "" }
    ],
    posts: []
  }
};

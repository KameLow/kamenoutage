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

  /* ⑤ 最近のつぶやき（Xの埋め込み）
     ・account : Xのユーザー名（@なし）。最新のポストを自動で表示します
     ・limit   : 表示するポスト数（1〜20。account でも posts でも効きます）
     ・posts   : 特定のポストのURLを並べると、そのポストだけを表示します（account より優先）
                 例）posts: ["https://x.com/ユーザー名/status/1234567890123456789"]
     account も posts も空にすると、この項目は非表示になります */
  twitter: {
    account: "kame_low",       // 例："your_account"
    limit: 3,
    posts: []
  }
};

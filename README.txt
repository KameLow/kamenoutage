■ サイトのファイル構成と、更新のしかた

illustrator-site/
├─ index.html ほか *.html     各ページ（普段は触りません）
├─ style.css                  全ページ共通のデザイン
├─ _headers                   公開先（Cloudflare）への指示ファイル（キャッシュの設定）
├─ images/                    画像
│   ├─ common/                ロゴ(logo.png)・ファビコン・共通の仮画像
│   ├─ information/           お知らせの本文に入れる画像
│   ├─ lastest/               トップページの画像
│   ├─ gallery/               thumbs/ サムネイル(0001.webp…)、full/ 拡大用
│   ├─ books/                 表紙
│   ├─ works/                 依頼絵
│   ├─ events/                サークルカット
│   └─ characters/            立ち絵・アイコン
├─ lastest/                   ★ 更新するときに書き換えるファイル
│   ├─ SITE.js                ヘッダーのメニュー名・リンク先、フッター（全ページ共通）
│   ├─ LASTEST.js             トップページの自己紹介・Xのポストの設定
│   │                         （お知らせ・最新の更新・イベントは、各ページのデータから自動で表示されます）
│   ├─ INFORMATION.js         お知らせの記事
│   ├─ GALLERY.js             Galleryの設定とイラストのデータ（items）
│   ├─ BOOKS.js               既刊
│   ├─ WORKS.js               依頼絵・お仕事の受付状況
│   ├─ EVENTS.js              イベント（参加予定・終了は日付で自動に振り分け）
│   ├─ CHARACTERS.js          キャラクター
│   └─ CONTACT.js             お問い合わせフォーム（FormspreeのURLなど）
├─ tools/                     ★ 公開しなくてよい作業用ファイル
│   ├─ gallery.csv            イラストのデータ（Excel・スプレッドシートで編集）
│   └─ csv-to-js.html         CSV → items に変換するツール（ブラウザで開く）
└─ page/                      ページを表示するためのプログラム（普段は触りません）
    （parts.js は、一覧の1件分の見た目をまとめた共通部品です）
    （boot.js は、JavaScriptを毎回新しい版で読み込む仕組みです。lastest の更新が、ブラウザに残った古いファイルに邪魔されず反映されます）

■ よく使う更新
・メニュー名やBlog・Shopのリンク先を変える → lastest/SITE.js
・お知らせを足す → lastest/INFORMATION.js
・イラストを足す → images/gallery/thumbs に 0001.webp のように画像を置き、tools/gallery.csv に1行足す
   → tools/csv-to-js.html で変換 → できた items: [ … ] を lastest/GALLERY.js の items に貼り付けて置き換える
・新刊を足す → lastest/BOOKS.js
・イベントを足す → lastest/EVENTS.js
・トップページの自己紹介・Xのポストを変える → lastest/LASTEST.js
・トップページの「最新」は自動です（お知らせ・イラスト・本・依頼絵・イベントを足すと、自動で最新が表示されます）

■ 注意
・読み込むJavaScriptは、各HTMLの下の方にある page/boot.js の data-load に、書いた順に並んでいます。
  新しいJavaScriptのファイルを足したときは、ここに追記してください
・ファイル名・フォルダ名の大文字小文字は、そのままにしてください
・変更したら、ブラウザで Ctrl+F5（Macは Cmd+Shift+R）で再読み込みして確認します

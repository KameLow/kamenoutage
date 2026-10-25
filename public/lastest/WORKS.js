/* ==========================================================
   WORKS.js : Worksページ（依頼絵）の設定とデータ
   新しい依頼絵は、items の先頭に { ... } を1つ足すだけです。
   （一覧は日付の新しい順に自動で並びます）

   【受付状況 status】
   ・open  : true なら「受付中」、false なら「受付停止中」の表示になります
   ・label : バッジの文字を変えたいときだけ書きます（例："一部受付中"）
   ・note  : 受付状況の補足（納期の目安、受付枠など）
   ・links : リクエストページなどへのリンク

   【依頼絵 items】
   ・title  : タイトル
   ・type   : 依頼の種類（"直接" / "Skeb" / "pixivリクエスト" など）
   ・date   : 納品・公開日（2026-09-20 の形式）
   ・client : 依頼主のクレジット（許可がある場合のみ。書かなければ表示しません）
   ・image  : サムネイル画像（images/works フォルダ）
   ・full   : 拡大表示用の画像（省略すると image を拡大）
   ・text   : 説明文（改行したいときは \n を入れます）
   ・links  : 作品ページへのリンク { label: "Skebで見る", url: "..." }（なければ []）
   ※ 依頼絵は、依頼主の許可がある作品だけを載せてください
   ========================================================== */
const WORKS = {
  perPage: 10,       // 1ページに表示する件数

  /* ページの説明文（1要素 = 1段落） */
  description: [
    "これまでに制作した依頼絵や参加させて頂いた合同誌の一覧です。",
    "直接のご依頼のほか、Skebやpixivリクエストのご依頼も掲載しています。"
  ],

  status: {
    open: true,
    note: "現在、ご依頼を受け付けています。",
    links: [
      { label: "Skeb", url: "https://skeb.jp/" },
      { label: "pixivリクエスト", url: "https://www.pixiv.net/request" },
      { label: "直接のご依頼（Contact）", url: "contact.html" }
    ]
  },

  items: [
    {
      title: "雛菊書房の異書奇譚 イラスト合同",
      type: "寄稿",
      date: "2026-05-24",
      image: "images/works/20260524_雛菊書房の異書奇譚イラスト合同.jpg",
      text: "小鳥遊 昴先生の主催する合同誌に参加させていただきました！\nありえないくらい分厚い本に仕上がってます…！",
      links: [{ label: "告知ポスト", url: "https://x.com/HinagikuBooks/status/2035313339031859226?s=20" }]
    },
    {
      title: "ふたばすてっぷ3 キービジュアル",
      type: "イベント",
      date: "2026-03-29",
      client: "",
      image: "images/works/20260329_ふたばすてっぷ3.jpg",
      text: "ふたばすてっぷ3のキービジュアルを描かせていただきました！\nイベントも盛り上がって楽しかったです！",
      links: [{ label: "イベントページ", url: "https://tokyo.souzou-palettes.net/2026/join/fts3/" }]
    },
    {
      title: "OUR COLLECTION2",
      type: "寄稿",
      date: "2026-03-29",
      client: "",
      image: "images/works/20260329_OUR COLLECTION2.jpg",
      text: "uboar先生の主催する合同誌に参加させていただきました！\n詞音ちゃんが色んな衣装に身を包むイラスト本になってます！",
      links: [{ label: "告知ポスト", url: "https://x.com/_uboar_/status/2031686567539192120?s=20" }]
    },
    {
      title: "東北イタコ抱き枕カバー(裏面)",
      type: "Skeb",
      date: "2025-10-10",
      client: "イタコずんだもんSTUDIO 様",
      image: "images/works/20251010_Skeb44.jpg",
      text: "イタコ姉さまの抱き枕カバーを描かせていただきました！\n裏面なのでﾁｮｯﾄｴｯﾁに…",
      links: [{ label: "Skebで見る", url: "https://skeb.jp/@Kame_Low/works/44" }]
    },
    {
      title: "東北イタコ抱き枕カバー",
      type: "Skeb",
      date: "2025-10-06",
      client: "イタコずんだもんSTUDIO 様",
      image: "images/works/20251006_Skeb43.jpg",
      text: "イタコ姉さまの抱き枕カバーを描かせていただきました！",
      links: [{ label: "Skebで見る", url: "https://skeb.jp/@Kame_Low/works/43" }]
    },
    {
      title: "Voice's Acter Collection夏号",
      type: "寄稿",
      date: "2025-08-17",
      client: "",
      image: "images/works/20250817_Voices Acter Collection夏号.png",
      text: "藤杜錬先生の主催する合同誌に参加させていただきました！\n夏らしい星尘ちゃんを描かせていただきました！",
      links: [{ label: "告知ポスト", url: "https://x.com/fujimori_r/status/1951562348722078129?s=20" }]
    }
  ]
};

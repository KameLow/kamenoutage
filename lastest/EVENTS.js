/* ==========================================================
   EVENTS.js : Eventsページの設定とデータ
   イベントが決まったら、items に { ... } を1つ足すだけです。
   「参加予定」か「終了」かは、日付を見て自動で振り分けられます
   （開催日を過ぎると、自動で「終了したイベント」に移ります）。

   ・name       : イベント名
   ・date       : 開催日（2026-11-23 の形式）
   ・dateEnd    : 複数日開催のときの最終日（1日だけなら書かなくてOK）
   ・place      : 会場
   ・space      : スペース番号（例："A-00"。決まっていなければ書かなくてOK）
   ・circleCut  : サークルカット画像（images/events フォルダ）
   ・circleCutFull : 拡大表示用の画像（省略すると circleCut を拡大）
   ・links      : リンク { label: "イベント公式", url: "..." }（なければ []）
   ・newBooks   : 新刊のタイトル ["新刊A", "新刊B"]（なければ []）
   ========================================================== */
const EVENTS = {
  featured: 1,       // ページ上部に大きく表示する「次回参加予定」の件数

  /* ページの説明文（1要素 = 1段落） */
  description: [
    "参加予定のイベントと、これまでに参加したイベントの一覧です。",
    ""
  ],

  items: [
    {
      name: "九州コミティア11",
      date: "2027-03-28",
      place: "北九州メッセ(旧西日本総合展示場)",
      space: "申し込み中…",
      circleCut: "images/events/20270328_九州コミティア11.png",
      links: [
        { label: "イベント公式", url: "https://www.q-comitia.com/event/11_2027/" }
      ],
      newBooks: ["アイドル×百合本"]
    },
    {
      name: "声音の宴7次会",
      date: "2026-09-13",
      place: "けいはんなプラザ",
      space: "D-24",
      circleCut: "images/events/20260913_声音の宴7次会.png",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/7th/" },
        { label: "お品書き", url: "https://example.com/menu" }
      ],
      newBooks: ["イタあか短編集6"]
    },
    {
      name: "COMITIA157",
      date: "2026-08-23",
      place: "東京ビッグサイト",
      space: "西1 E15a",
      circleCut: "images/events/20260823_COMITIA157.png",
      links: [
        { label: "イベント公式", url: "https://www.comitia.co.jp/html/157.html" }
      ],
      newBooks: ["れぷトラ！ZERO"]
    },
    {
      name: "ふたばフラット",
      date: "2026-06-28",
      place: "みやこめっせ",
      space: "A-12",
      circleCut: "images/events/20260628_ふたばフラット.png",
      links: [
        { label: "イベント公式", url: "https://futaba-flat.com/" }
      ],
      newBooks: ["空よりも青い少女"]
    }
  ]
};

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
  perPage: 10,       // 一覧に1ページで表示するイベントの件数（これを超えるとページ切り替えが出ます）

  /* ページの説明文（1要素 = 1段落） */
  description: [
    "参加予定のイベントと、これまでに参加したイベントの一覧です。",
    ""
  ],

  items: [
    {
      name: "九州コミティア11",
      date: "2027-03-28",
      place: "北九州メッセ(旧西日本総合展示場 新館)",
      space: "申し込み中…",
      circleCut: "images/events/20270328_QCOMITIA11.jpg",
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
      circleCut: "images/events/20260913_kowane7.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/7th/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20260913_kowane7.jpg" }
      ],
      newBooks: ["イタあか短編集6"]
    },
    {
      name: "COMITIA157",
      date: "2026-08-23",
      place: "東京ビッグサイト",
      space: "西1 E15a",
      circleCut: "images/events/20260823_COMITIA157.jpg",
      links: [
        { label: "イベント公式", url: "https://www.comitia.co.jp/html/157.html" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20260823_COMITIA157.jpg" }
      ],
      newBooks: ["れぷトラ！ZERO"]
    },
    {
      name: "ふたばフラット",
      date: "2026-06-28",
      place: "みやこめっせ",
      space: "A-12",
      circleCut: "images/events/20260628_futabaflat.jpg",
      links: [
        { label: "イベント公式", url: "https://futaba-flat.com/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20260628_futabaflat.jpg" }
      ],
      newBooks: ["空よりも青い少女"]
    },
    {
      name: "声音の宴6次会",
      date: "2026-05-24",
      place: "大田区産業プラザPiO",
      space: "I-20",
      circleCut: "images/events/20260524_kowane6.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/6th/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20260524_kowane6.jpg" }
      ],
      newBooks: ["声の子達に劣情を催すな！"]
    },
    {
      name: "九州コミティア10",
      date: "2026-05-03",
      place: "北九州メッセ(旧西日本総合展示場 新館)",
      space: "H-15",
      circleCut: "images/events/20260503_QCOMITIA10.jpg",
      links: [
        { label: "イベント公式", url: "https://www.q-comitia.com/event/10_2026/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20260503_QCOMITIA10.jpg" }
      ],
      newBooks: ["トカゲの恩返し"]
    },
    {
      name: "ふたばすてっぷ3",
      date: "2026-03-29",
      place: "東京たま未来メッセ",
      space: "せ-01",
      circleCut: "images/events/20260329_futabastep3.jpg",
      links: [
        { label: "イベント公式", url: "https://futabastep.net/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20260329_futabastep3.jpg" }
      ],
      newBooks: ["ヌヌコレ"]
    },
    {
      name: "声音の宴5次会",
      date: "2025-09-14",
      place: "けいはんなプラザ",
      space: "3F-う09",
      circleCut: "images/events/20250914_kowane5.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/5th/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20250914_kowane5.jpg" }
      ],
      newBooks: ["名探偵モカ"]
    },
    {
      name: "ふたばすてっぷ2",
      date: "2025-06-01",
      place: "川崎市産業振興会館",
      space: "B-03",
      circleCut: "images/events/20250601_futabastep2.jpg",
      links: [
        { label: "イベント公式", url: "https://futabastep.net/fts2/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20250601_futabastep2.jpg" }
      ],
      newBooks: ["つのふたば～す！"]
    },
    {
      name: "うちのこどーぞ！",
      date: "2025-04-06",
      place: "川崎市産業振興会館",
      space: "う-04",
      circleCut: "images/events/20250406_uchidozo.jpg",
      links: [
        { label: "イベント公式", url: "https://douzo.nectarition.jp/und1/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20250406_uchidozo.jpg" }
      ],
      newBooks: ["TheMSGM"]
    },
    {
      name: "よかろいど福岡",
      date: "2025-03-09",
      place: "福岡県中小企業振興センター",
      space: "C-11",
      circleCut: "images/events/20250309_yokaroid2.jpg",
      links: [
        { label: "イベント公式", url: "https://yokarloid.com/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20250309_yokaroid2.jpg" }
      ],
      newBooks: ["弓鶴くんコスプレ二百景"]
    },
    {
      name: "九州コミティア9",
      date: "2025-03-02",
      place: "西日本総合展示場 新館",
      space: "J-15",
      circleCut: "images/events/20250302_QCOMITIA9.jpg",
      links: [
        { label: "イベント公式", url: "https://www.q-comitia.com/event/9_2025/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20250302_QCOMITIA9.jpg" }
      ],
      newBooks: ["亀の恩返し2"]
    },
    {
      name: "声音の宴4次会",
      date: "2025-02-01",
      place: "大田区産業プラザPiO",
      space: "D-26",
      circleCut: "images/events/20250201_kowane4.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/4th/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20250201_kowane4.jpg" }
      ],
      newBooks: ["宙は星で満たされて"]
    },
    {
      name: "コトノハーズフェスタ8",
      date: "2024-11-10",
      place: "大田区産業プラザPIO",
      space: "D-03",
      circleCut: "images/events/20241110_kotofes8.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20241110_kotofes8.jpg" }
      ],
      newBooks: ["イタあか短編集5"]
    },
    {
      name: "ふたばすてっぷ",
      date: "2024-06-02",
      place: "川崎市産業振興会館",
      space: "C-10",
      circleCut: "images/events/20240602_futabastep.jpg",
      links: [
        { label: "イベント公式", url: "https://futabastep.net/fts1/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20240602_futabastep.jpg" }
      ],
      newBooks: ["進○ゼミつのふた講座！"]
    },
    {
      name: "声音の宴3次会",
      date: "2024-05-03",
      place: "大田区産業プラザPiO",
      space: "A-30",
      circleCut: "images/events/20240503_kowane3.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/3rd/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20240503_kowane3.jpg" }
      ],
      newBooks: ["あなたの姉になれたなら"]
    },
    {
      name: "よかろいど福岡",
      date: "2024-03-16",
      place: "福岡県中小企業振興センター",
      space: "C15",
      circleCut: "images/events/20240316_yokaroid.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20240316_yokaroid.jpg" }
      ],
      newBooks: ["SmileMAKERS!2"]
    },
    {
      name: "九州コミティア8",
      date: "2024-03-10",
      place: "西日本総合展示場 新館",
      space: "B-24",
      circleCut: "images/events/20240310_QCOMITIA8.jpg",
      links: [
        { label: "イベント公式", url: "https://www.q-comitia.com/event/8_2024/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20240310_QCOMITIA8.jpg" }
      ],
      newBooks: ["亀の恩返し"]
    },
    {
      name: "ボイスコネクト3",
      date: "2023-09-30",
      place: "大田区産業プラザPiO",
      space: "G-25",
      circleCut: "images/events/20230930_voiceconnect3.jpg",
      links: [
        { label: "イベント公式", url: "http://voiceconnect.fun/#/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20230930_voiceconnect3.jpg" }
      ],
      newBooks: ["いつかのなつのふたり"]
    },
    {
      name: "声音の宴2次会",
      date: "2023-07-09",
      place: "ポートメッセなごや",
      space: "B-6",
      circleCut: "images/events/20230709_kowane2.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/2nd/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20230709_kowane2.jpg" }
      ],
      newBooks: ["イタあか短編集4"]
    },
    {
      name: "コトノハーズフェスタ7",
      date: "2023-05-05",
      place: "東京都立産業貿易センター台東館",
      space: "C-12",
      circleCut: "images/events/20230505_kotofes7.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20230505_kotofes7.jpg" }
      ],
      newBooks: ["桜が二人を分つまで"]
    },
    {
      name: "声音の宴",
      date: "2022-11-20",
      place: "けいはんなオープンイノベーションセンター",
      space: "B-3",
      circleCut: "images/events/20221120_kowane.jpg",
      links: [
        { label: "イベント公式", url: "https://kowa-uta.com/1st/" },
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20221120_kowane.jpg" }
      ],
      newBooks: ["SmileMAKERS!"]
    },
    {
      name: "Each of Voice.2022",
      date: "2022-09-04",
      place: "横浜産貿ホールマリネリア",
      space: "E-25",
      circleCut: "images/events/20220904_EofV2022.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20220904_EofV2022.jpg" }
      ],
      newBooks: ["君色のようなアオイ空2"]
    },
    {
      name: "ボイスコネクト2",
      date: "2022-03-27",
      place: "大田区産業プラザPiO",
      space: "J-09",
      circleCut: "images/events/20220327_voiceconnect2.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20220327_voiceconnect2.jpg" }
      ],
      newBooks: ["イタあか短編集3"]
    },
    {
      name: "コトノハくらぶ",
      date: "2021-04-11",
      place: "御堂会館",
      space: "コト-15",
      circleCut: "images/events/20210411_kotonohaclub.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20210411_kotonohaclub.jpg" }
      ],
      newBooks: ["コトノハ健全本"]
    },
    {
      name: "ボイスロイドマーチ5",
      date: "2021-03-27",
      place: "ポートメッセなごや",
      space: "H-29",
      circleCut: "images/events/20210327_voiceroidmarch5.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20210327_voiceroidmarch5.jpg" }
      ],
      newBooks: ["イタあか(一人)合同"]
    },
    {
      name: "ボイスコネクト",
      date: "2020-08-01",
      place: "東京流通センター",
      space: "H-09",
      circleCut: "images/events/20200801_voiceconnect.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20200801_voiceconnect.jpg" }
      ],
      newBooks: ["イタあか短編集2 / イタあか短編集2.18"]
    },
    {
      name: "この声届け、月までも六",
      date: "2020-02-11",
      place: "大田区産業プラザPiO",
      space: "Q-08",
      circleCut: "images/events/20200211_koetsuki6.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20200211_koetsuki6.jpg" }
      ],
      newBooks: ["君色のようなアオイ空"]
    },
    {
      name: "うさぎの宴 2次会",
      date: "2019-10-20",
      place: "多治見市産業文化センター",
      space: "月-09",
      circleCut: "images/events/20191020_usauta2.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20191020_usauta2.jpg" }
      ],
      newBooks: ["ロリゆかりんとあかりお姉ちゃん"]
    },
    {
      name: "コトノハーズフェスタ3(Each of Voice.)",
      date: "2019-10-05",
      place: "横浜産貿ホールマリネリア",
      space: "B-7",
      circleCut: "images/events/20191005_kotofes3.jpg",
      links: [
        { label: "お品書き", url: "https://kamelow.com/events/oshinagaki/20191005_kotofes3.jpg" }
      ],
      newBooks: ["イタあか短編集"]
    }
  ]
};

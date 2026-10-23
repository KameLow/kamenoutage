/* ==========================================================
   BOOKS.js : Booksページの設定と既刊データ
   新刊が出たら、items に { ... } を1つ足すだけです。
   （一覧は発行日の新しい順に自動で並びます）

   ・title : 本のタイトル
   ・cover : 表紙画像のパス（縦長の画像）。画像は images/books フォルダに置きます
   ・full  : 拡大表示用の表紙画像（省略すると cover を拡大）
   ・category : カテゴリの文字（例："イラスト集"）
   ・tags  : タグ（キャラクター名など）。クリックで検索できます。なければ []
   ・size  : サイズ（例："A5 / 40P"）
   ・date  : 発行日（2026-10-10 の形式）
   ・event : 発行したイベント名（発行日の後ろに表示。なければ書かなくてOK）
   ・price : 価格（数字なら「1,000円」と表示。文字なら例："無料" のままそのまま表示）
   ・links : 通販リンク。{ label: "BOOTH", url: "..." } を並べる（なければ []）
   ・text  : 説明文（改行したいときは \n を入れます）
   ※ カテゴリ・サイズ・発行日・価格・通販・説明は、書かなければその行を表示しません
   ========================================================== */
const BOOKS = {
  perPage: 20,       // 1ページに表示する冊数

  /* Booksページの説明文（1要素 = 1段落） */
  description: [
    "これまでに頒布した同人誌の一覧です。",
    "価格は頒布価格となります。"
  ],

  items: [
    {
      id: 33,
      title: "イタあか短編集6",
      cover: "images/books/20260913_イタあか短編集6.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 20 / モノクロ",
      date: "2026-09-13",
      event: "声音の宴7次会",
      price: 500,
      links: [],
      text: "イタあか冬編！\n雪の日の二人のお話を収録しています！"
    },
    {
      id: 32,
      title: "レプトラ！ZERO",
      cover: "images/books/20260823_れぷトラZERO.jpg",
      category: "オリジナル",
      tags: ["コミック", "メスガメ", "くぇ", "ヒモノ"],
      size: "B5 / 32P / モノクロ",
      date: "2026-08-23",
      event: "COMITIA157",
      price: 500,
      links: [],
      text: "恩返しシリーズのキャラクター達のゆるい日常を描いた短編集です！"
    },
    {
      id: 31,
      title: "空よりも青い少女",
      cover: "images/books/20260628_空よりも青い少女.jpg",
      category: "合成音声",
      tags: ["コミック", "双葉湊音", "唯世かのん"],
      size: "B5 / 20 / モノクロ",
      date: "2026-06-28",
      event: "ふたばすてっぷ3",
      price: 500,
      links: [],
      text: "雨に降られ、バス停で雨宿りしていた唯世かのん。\nそこに一人の少女がやって来て…？"
    },
    {
      id: 30,
      title: "声の子に劣情を催すな！",
      cover: "images/books/20260524_声の子に劣情を催すな！.jpg",
      category: "合成音声",
      tags: ["イラスト本", "R-18"],
      size: "B5 / 20P / フルカラー",
      date: "2026-05-24",
      event: "声音の宴6次会",
      price: 800,
      links: [],
      text: "声の子達の日常の一コマを切り取ったイラスト本！\nただの日常なので劣情を催してはいけない…！"
    },
    {
      id: 29,
      title: "トカゲの恩返し",
      cover: "images/books/20260503_トカゲの恩返し.jpg",
      category: "オリジナル",
      tags: ["コミック", "秋吉真奈", "ヒモノ"],
      size: "B5 / 48P / モノクロ",
      date: "2026-05-03",
      event: "九州コミティア10",
      price: 500,
      links: [],
      text: "かつて頂点を極めたアイドルグループのリーダーだった秋吉真奈。\nしかし解散後ソロ活動を始めてからは人気が低迷していた。\nある夏の地方ライブ会場で干からびたトカゲを発見し、助けたところ…？"
    },
    {
      id: 28,
      title: "ヌヌコレ",
      cover: "images/books/20260329_ヌヌコレ.jpg",
      category: "合成音声",
      tags: ["イラスト本", "双葉湊音"],
      size: "B5 / 20P / フルカラー",
      date: "2026-03-29",
      event: "ふたばすてっぷ3",
      price: 800,
      links: [],
      text: "湊音ちゃんがいろんな衣装に身を包むイラスト本！"
    },
    {
      id: 27,
      title: "名探偵モカ",
      cover: "images/books/20250914_名探偵モカ.jpg",
      category: "合成音声",
      tags: ["コミック", "宮舞モカ", "弦巻マキ"],
      size: "B5 / 28P / モノクロ",
      date: "2025-09-14",
      event: "声音の宴5次会",
      price: 500,
      links: [],
      text: "「喫茶店マキ」で(勝手に)放課後探偵部を立ち上げた宮舞モカ。\nマキの依頼で猫を探すことになり、相棒のワトソンくんと共に解決を目指す！"
    },
    {
      id: 26,
      title: "つのふたば～す！",
      cover: "images/books/20250601_つのふたばーす.jpg",
      category: "合成音声",
      tags: ["コミック", "双葉湊音", "紡乃世詞音"],
      size: "B5 / 28P / モノクロ",
      date: "2025-06-01",
      event: "ふたばすてっぷ2",
      price: 500,
      links: [],
      text: "1名くらいで集まって出来たつのふた合同です！イラスト3枚と漫画3本を収録しています！\nカメローさんやカメローさん、カメローさんなどが参加しています！！"
    },
    {
      id: 25,
      title: "TheMSGM",
      cover: "images/books/20250406_TheMSGM.jpg",
      category: "オリジナル",
      tags: ["イラスト本", "メスガメ"],
      size: "B5 / 20P / フルカラー",
      date: "2025-04-06",
      event: "うちのこどーぞ！",
      price: 500,
      links: [],
      text: "初のメスガメイラスト本！\nメスガメの日常の一コマから、あんな秘密やこんな秘密まで…？！"
    },
    {
      id: 24,
      title: "弓鶴くんコスプレ二百景",
      cover: "images/books/20250309_弓鶴くんコスプレ二百景.jpg",
      category: "合成音声",
      tags: ["イラスト本", "伊織弓鶴", "東北きりたん"],
      size: "B5 / 28P / フルカラー",
      date: "2025-03-09",
      event: "よかろいど福岡2",
      price: 700,
      links: [],
      text: "(元)新人ボイスロイドの伊織弓鶴の元に先輩ボイスロイドの東北きりたんが訪れる。きりたんのスーツケースには色々な声の子の衣装が入っており…？"
    },
    {
      id: 23,
      title: "亀の恩返し2",
      cover: "images/books/20250302_亀の恩返し2.jpg",
      category: "オリジナル",
      tags: ["コミック", "椿木優", "くぇ"],
      size: "B5 / 40P / モノクロ",
      date: "2025-03-02",
      event: "九州コミティア9",
      price: 500,
      links: [],
      text: "爬虫類飼育系ユーチューバーYuUはある野外収録後に1匹の亀を拾った。\n餓死しかけていたその亀はすくすく元気になっていったのだが…？"
    },
    {
      id: 22,
      title: "宙は星で満たされて",
      cover: "images/books/20250201_宙は星で満たされて.jpg",
      category: "合成音声",
      tags: ["コミック", "紲星あかり", "OИE"],
      size: "B5 / 40P / モノクロ",
      date: "2025-02-01",
      event: "声音の宴4次会",
      price: 700,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2769054" }
      ],
      text: "ゆかりと喧嘩して家を飛び出した紲星あかり。夜道で一人の女の子と出会い、物語が始まる。"
    },
    {
      id: 21,
      title: "イタあか短編集5",
      cover: "images/books/20241110_イタあか短編集5.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 48P / モノクロ",
      date: "2024-11-10",
      event: "コトノハーズフェスタ8",
      price: 700,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2652860" }
      ],
      text: "イタあか秋編！\n『とある雨の日』『熱とお熱』『小旅行』の3話を収録しています！"
    },
    {
      id: 20,
      title: "進○ゼミつのふた講座！",
      cover: "images/books/20240602_進○ゼミつのふた講座！.jpg",
      category: "合成音声",
      tags: ["コミック", "双葉湊音", "紡乃世詞音"],
      size: "B5 / 20P / モノクロ",
      date: "2024-06-02",
      event: "ふたばすてっぷ",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2421604" }
      ],
      text: "青春活動に勤しむごく普通の中学生、双葉湊音はテストの点数が伸び悩み苦しんでいた。成績優秀な幼馴染の紡乃世詞音にその秘訣を聞くと、進○ゼミをやっているとの事！"
    },
    {
      id: 19,
      title: "あなたの姉になれたなら",
      cover: "images/books/20240503_あなたの姉になれたなら.jpg",
      category: "合成音声",
      tags: ["コミック", "結月ゆかり", "紲星あかり"],
      size: "B5 / 32P / モノクロ",
      date: "2024-05-03",
      event: "声音の宴3次会",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2384754" }
      ],
      text: "ルームシェアをしているボイスロイドの結月ゆかりと紲星あかり。\nある日ゆかりが起動しなくなり、あかりは修理を呼ぶが…。"
    },
    {
      id: 18,
      title: "SmileMAKERS!2",
      cover: "images/books/20240316_SmileMAKERS!2.jpg",
      category: "合成音声",
      tags: ["コミック", "鳴花ヒメ", "鳴花ミコト"],
      size: "B5 / 20P / モノクロ",
      date: "2024-03-16",
      event: "よかろいど福岡",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2341957" }
      ],
      text: "人間界での生活に慣れてきたヒメとミコト。\n特にミコトはガソリンスタンドでバイトしている内に車に詳しくなり、欲しいとねだり始めた。ヒメはどうする…？！"
    },
    {
      id: 17,
      title: "亀の恩返し",
      cover: "images/books/20240310_亀の恩返し.jpg",
      category: "オリジナル",
      tags: ["コミック", "上田香苗", "メスガメ"],
      size: "B5 / 36P / モノクロ",
      date: "2024-03-10",
      event: "九州コミティア8",
      price: 500,
      links: [],
      text: "ごく普通の女子高校生香苗。人間嫌いな性格故に同級生の優から一緒に下校しようと誘われるも逃亡する。\nそんな帰り道、たまたまトラックにひかれそうになった1匹の亀を助けた。"
    },
    {
      id: 16,
      title: "いつかのなつのふたり",
      cover: "images/books/20230930_いつかのなつのふたり.jpg",
      category: "合成音声",
      tags: ["コミック", "双葉湊音", "紡乃世詞音"],
      size: "B5 / 34P / モノクロ",
      date: "2023-09-30",
      event: "ボイスコネクト3",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2099974" }
      ],
      text: "いつかの夏休み、喧嘩別れしてしまった詞音と湊音。\n大人になってから二人は偶然再会し、止まっていた青春が動き始める。"
    },
    {
      id: 15,
      title: "イタあか短編集4",
      cover: "images/books/20230709_イタあか短編集4.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 32P / モノクロ",
      date: "2023-07-09",
      event: "声音の宴2次会",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2004450" }
      ],
      text: "イタあか夏編！\n『イタコ姉さまの誕生日』『イタあかと海』の2話を収録しています！"
    },
    {
      id: 14,
      title: "桜が二人を分つまで",
      cover: "images/books/20230505_桜が二人を分かつまで.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "琴葉葵"],
      size: "B5 / 20P / モノクロ",
      date: "2023-05-05",
      event: "コトノハーズフェスタ7",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1922502" }
      ],
      text: "春からの新生活に向けて引っ越し準備をする葵。\nその最中、姉の茜が話しかけてきて……"
    },
    {
      id: 13,
      title: "コトノハ健全本2",
      cover: "images/books/20230122_コトノハ健全本2.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "琴葉葵"],
      size: "B5 / 20P / モノクロ",
      date: "2023-01-22",
      event: "コトノハーズフェスタ京都2023",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1822476" }
      ],
      text: "靴にシャンパンを入れて飲む「シューイ」という行為を知ってしまった葵ちゃん。\n茜ちゃんの靴でそれを実行するために頑張るらしい……。"
    },
    {
      id: 12,
      title: "SmileMAKERS!",
      cover: "images/books/20221120_SmileMAKERS!.jpg",
      category: "合成音声",
      tags: ["コミック", "鳴花ヒメ", "鳴花ミコト"],
      size: "B5 / 40P / モノクロ",
      date: "20242-11-20",
      event: "声音の宴",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1702327" }
      ],
      text: "精霊界でやらかしすぎて、更生の為に人間界のガソリンスタンドでアルバイトをさせられることになったヒメミコ。\nそこで先輩のflowerや心華と過ごしている内に人間界に馴染んでいき…？"
    },
    {
      id: 11,
      title: "君色のようなアオイ空2",
      cover: "images/books/20220904_君色のようなアオイ空2.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉葵", "音街ウナ"],
      size: "B5 / 52P / モノクロ",
      date: "2022-09-04",
      event: "Each of Voice.2022",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1618450" }
      ],
      text: "アルバイトをする葵ちゃんと歌のレッスンをするウナちゃん。\n同棲しながらすれ違い気味な二人。お互いに目的があるがそれが実る時は…？！"
    },
    {
      id: 10,
      title: "イタあか短編集3",
      cover: "images/books/20220327_イタあか短編集3.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 62P / モノクロ",
      date: "2022-03-27",
      event: "ボイスコネクト2",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1419495" }
      ],
      text: "春はイタあか！\n『イタあかと着物』『茜ちゃんの誕生日』『イタコさんの出張』『二人の夜』の4話を収録しています！"
    },
    {
      id: 9,
      title: "コトノハ健全本",
      cover: "images/books/20210411_コトノハ健全本.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "琴葉葵"],
      size: "B5 / 20P / モノクロ",
      date: "2021-04-11",
      event: "コトノハくらぶ",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=889264" }
      ],
      text: "葵ちゃんが「ピンク髪で左側に髪飾りを付けた同い年くらいの関西弁を喋る女の子」のえっちな絵を描いているのを見てしまった茜ちゃん。\nちょっと引きながらも色々あって絵のお手伝いをすることに……"
    },
    {
      id: 8,
      title: "イタあか(一人)合同",
      cover: "images/books/20210327_イタあか合同.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 36P / モノクロ",
      date: "2021-03-27",
      event: "ボイスロイドマーチ5",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=825607" }
      ],
      text: "1名くらいで集まってできたイタあかの合同誌です！イラスト6枚と漫画3話収録しました！\nカメローさんとカメローさんとカメローさんの作品がオススメです！"
    },
    {
      id: 7,
      title: "イタあか短編集2.18",
      cover: "images/books/20200801_イタあか短編集2.18.png",
      category: "合成音声",
      tags: ["コミック", "R-18", "琴葉茜", "東北イタコ"],
      size: "B5 / 16P / モノクロ",
      date: "2020-08-01",
      event: "ボイスコネクト",
      price: 500,
      links: [
        { label: "BOOTH", url: "https://kamelow.booth.pm/items/2461244" }
      ],
      text: "『イタあか短編集2』の後日談。\n急接近した二人の秘密の夜のお話…。"
    },
    {
      id: 6,
      title: "イタあか短編集2",
      cover: "images/books/20200801_イタあか短編集2.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 32P / モノクロ",
      date: "2020-08-01",
      event: "ボイスコネクト",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=697481" },
        { label: "BOOTH", url: "https://kamelow.booth.pm/items/6280085" }
      ],
      text: "『イタコさんの愛称』『イタあかの日常？』を収録しています！\nあだ名を考えたり、お泊りしたりで二人の「姉」は距離を急接近させていく……！"
    },
    {
      id: 5,
      title: "弓鶴くんコスプレ百景",
      cover: "images/books/20200405_弓鶴くんコスプレ百景.jpg",
      category: "合成音声",
      tags: ["イラスト本", "伊織弓鶴", "東北きりたん"],
      size: "B5 / 16P / フルカラー",
      date: "2020-04-05",
      event: "",
      price: 500,
      links: [
        { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=658787" }
      ],
      text: "新人ボイスロイド、伊織弓鶴は華奢な体に中性的な顔立ちの男の子。\nそれに目を付けた東北きりたんはある日家に弓鶴を呼び出して……？"
    },
    {
      id: 4,
      title: "AoiChang伝説vol.1",
      cover: "images/books/20200405_AoiChang伝説.jpg",
      category: "合成音声",
      tags: ["コミック", "R-18", "琴葉葵", "弦巻マキ", "OИE"],
      size: "B5 / 28P / モノクロ",
      date: "2020-04-05",
      event: "",
      price: 500,
      links: [
        { label: "メロンブックス", url: "" }
      ],
      text: "声の子を食い荒らすと噂のAoiChang。\nバンドガール弦巻マキと宇宙人OИEにAoiChangの魔の手が迫る…！"
    },
    {
      id: 3,
      title: "君色のようなアオイ空",
      cover: "images/books/20200211_君色のようなアオイ空.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉葵", "音街ウナ"],
      size: "B5 / 44P / モノクロ",
      date: "2020-02-11",
      event: "この声届け、月までも六",
      price: 500,
      links: [
        { label: "メロンブックス", url: "" }
      ],
      text: "アルバイトの帰りに酔っ払いに絡まれていた女の子を助けた琴葉葵。\nどこか見覚えのあるその子は現役アイドル、音街ウナだった！"
    },
    {
      id: 2,
      title: "ロリゆかりんとあかりお姉ちゃん",
      cover: "images/books/20191020_ロリゆかりんとあかりお姉ちゃん.jpg",
      category: "合成音声",
      tags: ["コミック", "結月ゆかり", "紲星あかり"],
      size: "B5 / 20P / モノクロ",
      date: "2019-10-20",
      event: "うさぎの宴2次会",
      price: 500,
      links: [
        { label: "BOOTH", url: "https://kamelow.booth.pm/items/1717991" }
      ],
      text: "ある日突然小さくなったゆかりさんと、それに戸惑いながらも「お姉ちゃん」らしく頑張るあかりちゃんのお話です！"
    },
    {
      id: 1,
      title: "イタあか短編集",
      cover: "images/books/20191005_イタあか短編集.jpg",
      category: "合成音声",
      tags: ["コミック", "琴葉茜", "東北イタコ"],
      size: "B5 / 52P / モノクロ",
      date: "2019-10-05",
      event: "コトノハーズフェスタ3",
      price: 500,
      links: [
        { label: "BOOTH", url: "https://kamelow.booth.pm/items/1717799" }
      ],
      text: "琴葉家に転がり込んできたイタコ。\n理由は妹たちが外泊してしまい一人でいるのが怖いとのこと。\n琴葉姉妹(主に茜)と東北イタコの共同生活が始まる…⁉"
    }
  ]
};

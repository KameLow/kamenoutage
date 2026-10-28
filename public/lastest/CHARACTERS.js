/* ==========================================================
   CHARACTERS.js : Charactersページ（オリジナルキャラクター）のデータ
   キャラクターが増えたら、items に { ... } を1つ足すだけです。
   （表示は書いた順です。一番上のキャラが最初に表示されます）

   ・id      : 重複しない英数字（URLの #id でそのキャラを直接開けます）
   ・name    : キャラクター名
   ・reading : 読みやローマ字（名前の上と、背景の大きな文字に使われます）
   ・catch   : キャッチコピー・一言（なければ書かなくてOK）
   ・color   : イメージカラー（例："#4ee07f"）。名前まわりや背景の光の色になります
   ・image   : 立ち絵（縦長で、背景透過のPNG/WebPがおすすめ）。画像が1枚だけのときはこれだけでOK
   ・full    : 立ち絵をクリックしたときの拡大画像（省略すると image）
   ・images  : 設定画などを複数枚並べて、左右の矢印・ドットで切り替えたいときに書きます
               { src: "画像", full: "拡大用の画像（省略可）", label: "立ち絵・表情差分などの名前（省略可）" } を並べます
               （書いた場合は image より優先されます。1枚目が最初に表示されます）
   ・icon    : 上の選択欄に並ぶ顔アイコン（正方形。省略すると image の上部を切り出します）
   ・profile : プロフィール表。[ "項目名", "内容" ] を好きなだけ並べられます
   ・text    : 紹介文（改行したいときは \n を入れます）
   ・tag     : Galleryなどで探すときの名前（省略すると name を使います）。
               Galleryの同じタグが付いた最新のイラスト（3枚まで）が、紹介文の下に表示されます
   ・links   : 追加のリンク { label: "...", url: "..." }（なければ []）
   画像は images/characters フォルダに置きます
   ========================================================== */
const CHARACTERS = {
  /* true にすると、各キャラに「Galleryで見る」「Booksで見る」のリンクを自動で付けます */
  relatedLinks: true,

  /* ページの説明文（1要素 = 1段落） */
  description: [
    "オリジナルキャラクターの紹介ページです。",
    "二次創作はご自由にどうぞ！描いてもらえたらとても喜びます！"
  ],

  items: [
    {
      id: "1",
      name: "上田 香苗",
      reading: "Kanae UEDA",
      catch: "「人間は苦手だ…」",
      color: "#536af0",
      image: "images/characters/kanae_stand.png",
      images: [
        { src: "images/characters/kanae_stand.png", label: "立ち絵" },
        { src: "images/characters/kanae_stand2.png", label: "表情" },
      ],
      icon: "images/characters/kanae_icon.png",
      profile: [
        ["年齢", "15歳"],
        ["誕生日", "9月5日"],
        ["身長", "153cm"],
        ["好きなもの", "動物"],
        ["苦手なもの", "人間"]
      ],
      text: "ごく普通の人間不信気味の女子高生だったが、メスガメと出会ってから色々と変わっていく。振り回されがちな苦労人…\n",
      tag: "上田香苗",
      links: []
    },
    {
      id: "2",
      name: "メスガメ",
      reading: "msgm",
      catch: "「名前はないのでメスガメとでも呼んで下さい！」",
      color: "#1aff94",
      image: "images/characters/msgm_stand.png",
      images: [
        { src: "images/characters/msgm_stand.png", label: "立ち絵" },
        { src: "images/characters/msgm_stand2.png", label: "表情" },
      ],
      icon: "images/characters/msgm_icon.png",
      profile: [
        ["年齢", "10歳(人間換算はNG)"],
        ["誕生日", "6月24日"],
        ["身長", "167cm"],
        ["好きなもの", "香苗さん"]
      ],
      text: "トラックに轢かれそうになっていたところを香苗に助けられて恩返しにきているミシシッピアカミミガメ。",
      tag: "メスガメ",
      links: []
    },
    {
      id: "3",
      name: "椿木 優",
      reading: "Yuu TSUBAKI",
      catch: "「香苗ちゃんのプライベートを覗けるこの瞬間が楽しいから」",
      color: "#ff7ddc",
      image: "images/characters/yuu_stand.png",
      icon: "images/characters/yuu_icon.png",
      profile: [
        ["年齢", "15歳"],
        ["誕生日", "4月20日"],
        ["身長", "163cm"],
        ["好きなもの", "爬虫類、エナジードリンク(Red Beco)"]
      ],
      text: "香苗と友達になろうとしつこく絡んでいた女の子。\n結局折れた香苗と友達になる。\nまた、爬虫類飼育系YouTuberのYuUとしての顔も持つ。",
      tag: "椿木優",
      links: []
    },
    {
      id: "4",
      name: "くぇ",
      reading: "Kue",
      catch: "「あーっ！あの時のクソミドリガメ！」",
      color: "#bea28b",
      image: "images/characters/kue_stand.png",
      icon: "images/characters/kue_icon.png",
      profile: [
        ["年齢", "不明"],
        ["誕生日", "9月9日"],
        ["身長", "163cm"],
        ["好きなもの", "エナジードリンク(魔剤)"]
      ],
      text: "餓死しかかっていたところを優に助けられたクサガメ。\n美少女の姿になって恩返しをしている。",
      tag: "くぇ",
      links: []
    },
    {
      id: "5",
      name: "秋吉 真奈",
      reading: "Mana AKIYOSHI",
      catch: "「Re:HEAT…ちょっとかっこいいかも」",
      color: "#ff981a",
      image: "images/characters/mana_stand.png",
      icon: "images/characters/mana_icon.png",
      profile: [
        ["年齢", "15歳"],
        ["誕生日", "2月22日"],
        ["身長", "160cm"],
        ["好きなもの", "歌うこと、ランニング"]
      ],
      text: "かつてトップアイドルとして活躍していたが、\n現在はソロ活動で低迷気味…。",
      tag: "秋吉真奈",
      links: []
    },
    {
      id: "6",
      name: "ヒモノ",
      reading: "Himono",
      catch: "「ヒモノ…！素敵な名前です！ありがとうございます！」",
      color: "#e8e8e8",
      image: "images/characters/himono_stand.png",
      icon: "images/characters/himono_icon.png",
      profile: [
        ["年齢", "不明"],
        ["誕生日", "8月1日"],
        ["身長", "170cm"],
        ["好きなもの", "真奈さん、ガジェット、ゲーム"]
      ],
      text: "とある真夏のライブ会場で干からびていたところを真奈に助けられたトカゲ。\nアルビノのニホントカゲという珍しい個体だったりする。",
      tag: "ヒモノ",
      links: []
    },
    {
      id: "7",
      name: "椿木 麗",
      reading: "Rei TSUBAKI",
      catch: "「いい方法があるんだけど…どうかしら？」",
      color: "#6d2caa",
      image: "images/characters/rei_stand.png",
      icon: "images/characters/rei_icon.png",
      profile: [
        ["年齢", "26歳"],
        ["誕生日", "6月30日"],
        ["身長", "172cm"],
        ["好きなもの", "アイドルを輝かせること、クルマ"]
      ],
      text: "真奈のマネージャー兼プロデューサー兼その他諸々。\n抜群の手腕で様々なアイドルを成功させてきた。",
      tag: "椿木麗",
      links: []
    }
  ]
};

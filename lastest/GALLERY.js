/* ==========================================================
   GALLERY.js : Galleryの設定とイラストデータ
   1枚描くたびに、items の先頭に1行足すだけで更新できます。
   （一覧は番号の新しい順に自動で並びます）

   ・no   : イラストの通し番号（1〜2310）。「現在の枚数」は一番大きい no が使われます
   ・date : 描いた（公開した）日。2026-10-16 の形式
   ・url  : 元画像のURL（別サービスの画像ページ）。サムネイルをクリックすると拡大表示になり、
            その画面の「元画像を開く」ボタンで、このURLが新しいタブで開きます
            書かない（空にする）場合は、「元画像を開く」ボタンは出ません
   ・full : 拡大表示する画像のパス（images/gallery/full/0012.webp や、外部のURLなど）
            省略すると、下の fullDir から自動で決まり、fullDir も空ならサムネイルを拡大します
   ・tags : タグ（キャラクター名など）。なければ [] のままでOK
   ・thumb: サムネイルのパス。通常は書かなくて構いません。
            省略すると thumbDir + 4桁の番号 + thumbExt を使います
            例）no:12 → images/gallery/thumbs/0012.webp
            ※下のサンプルは仮画像を使うため thumb を指定しています。
              本番用に差し替えるときは thumb の部分を消してください。

   ※ 数が多いときは、tools/csv-to-js.html で、CSV（Excelなど）から
     items をまとめて作れます。できた items: [ … ] を、下の items: [ … ] に
     貼り付けて置き換えてください。
   ========================================================== */
const GALLERY = {
  goal: 2310,        // 目標枚数
  perPage: 100,      // 1ページに表示する枚数
  thumbDir: "images/gallery/thumbs/",
  thumbExt: ".webp",
  /* 拡大表示用の画像の置き場所（任意）。番号から自動で読み込みます（例：0012 → fullDir + "0012" + fullExt）
     自分のサイト内なら "images/gallery/full/"、外部のサービスなら "https://（ドメイン）/full/" のように書きます。
     空のままなら、full を書いた作品以外は、サムネイルが拡大表示されます */
  fullDir: "",
  fullExt: ".webp",

  /* Galleryの説明文（1要素 = 1段落） */
  description: [
    "ここではXで実施している2310枚企画で描いたイラストをまとめています。",
    "数が多いので過去分はぼちぼち更新していきます…。"
  ],

  items: [
  { no: 1166, date: "2026-10-14", url: "https://kamelow.com/gallery/20261014_1166.jpg", tags: ["くぇ"], thumb: "images/gallery/20261014_1166.jpg" },
  { no: 1165, date: "2026-10-09", url: "https://kamelow.com/gallery/20261009_1165.jpg", tags: ["秋吉真奈"], thumb: "images/gallery/20261009_1165.jpg" },
  { no: 1164, date: "2026-10-04", url: "https://kamelow.com/gallery/20261004_1164.jpg", tags: ["秋吉真奈"], thumb: "images/gallery/20261004_1164.jpg" },
  { no: 1163, date: "2026-09-28", url: "https://kamelow.com/gallery/20260928_1163.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260928_1163.jpg" },
  { no: 1162, date: "2026-09-25", url: "https://kamelow.com/gallery/20260925_1162.jpg", tags: ["秋吉真奈"], thumb: "images/gallery/20260925_1162.jpg" },
  { no: 1161, date: "2026-09-24", url: "https://kamelow.com/gallery/20260924_1161.jpg", tags: ["上田香苗"], thumb: "images/gallery/20260924_1161.jpg" },
  { no: 1160, date: "2026-09-23", url: "https://kamelow.com/gallery/20260923_1160.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260923_1160.jpg" },
  { no: 1159, date: "2026-09-21", url: "https://kamelow.com/gallery/20260921_1159.jpg", tags: ["くぇ"], thumb: "images/gallery/20260921_1159.jpg" },
  { no: 1158, date: "2026-09-19", url: "https://kamelow.com/gallery/20260919_1158.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260919_1158.jpg" },
  { no: 1157, date: "2026-09-15", url: "https://kamelow.com/gallery/20260915_1157.jpg", tags: ["上田香苗"], thumb: "images/gallery/20260915_1157.jpg" },
  { no: 1156, date: "2026-09-12", url: "https://kamelow.com/gallery/20260912_1156.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260912_1156.jpg" },
  { no: 1155, date: "2026-09-11", url: "https://kamelow.com/gallery/20260911_1155.jpg", tags: ["上田香苗","メスガメ"], thumb: "images/gallery/20260911_1155.jpg" },
  { no: 1154, date: "2026-09-08", url: "https://kamelow.com/gallery/20260908_1154.jpg", tags: ["秋吉真奈"], thumb: "images/gallery/20260908_1154.jpg" },
  { no: 1153, date: "2026-08-31", url: "https://kamelow.com/gallery/20260831_1153.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260831_1153.jpg" },
  { no: 1152, date: "2026-08-26", url: "https://kamelow.com/gallery/20260826_1152.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260826_1152.jpg" },
  { no: 1151, date: "2026-08-21", url: "https://kamelow.com/gallery/20260821_1151.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260821_1151.jpg" },
  { no: 1150, date: "2026-07-31", url: "https://kamelow.com/gallery/20260731_1150.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260731_1150.jpg" },
  { no: 1149, date: "2026-07-25", url: "https://kamelow.com/gallery/20260725_1149.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260725_1149.jpg" },
  { no: 1148, date: "2026-07-23", url: "https://kamelow.com/gallery/20260723_1148.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260723_1148.jpg" },
  { no: 1147, date: "2026-07-21", url: "https://kamelow.com/gallery/20260721_1147.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260721_1147.jpg" },
  { no: 1146, date: "2026-07-19", url: "https://kamelow.com/gallery/20260719_1146.jpg", tags: ["上田香苗","メスガメ"], thumb: "images/gallery/20260719_1146.jpg" },
  { no: 1145, date: "2026-07-16", url: "https://kamelow.com/gallery/20260716_1145.jpg", tags: ["椿木優","くぇ"], thumb: "images/gallery/20260716_1145.jpg" },
  { no: 1144, date: "2026-07-13", url: "https://kamelow.com/gallery/20260713_1144.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260713_1144.jpg" },
  { no: 1143, date: "2026-07-11", url: "https://kamelow.com/gallery/20260711_1143.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260711_1143.jpg" },
  { no: 1142, date: "2026-07-07", url: "https://kamelow.com/gallery/20260707_1142.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260707_1142.jpg" },
  { no: 1141, date: "2026-07-06", url: "https://kamelow.com/gallery/20260706_1141.jpg", tags: ["くぇ"], thumb: "images/gallery/20260706_1141.jpg" },
  { no: 1140, date: "2026-07-04", url: "https://kamelow.com/gallery/20260704_1140.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260704_1140.jpg" },
  { no: 1139, date: "2026-07-02", url: "https://kamelow.com/gallery/20260702_1139.jpg", tags: ["上田香苗","メスガメ"], thumb: "images/gallery/20260702_1139.jpg" },
  { no: 1138, date: "2026-06-30", url: "https://kamelow.com/gallery/20260630_1138.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260630_1138.jpg" },
  { no: 1137, date: "2026-06-26", url: "https://kamelow.com/gallery/20260626_1137.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260626_1137.jpg" },
  { no: 1136, date: "2026-06-24", url: "https://kamelow.com/gallery/20260624_1136.jpg", tags: ["東北イタコ"], thumb: "images/gallery/20260624_1136.jpg" },
  { no: 1135, date: "2026-06-23", url: "https://kamelow.com/gallery/20260623_1135.jpg", tags: ["くぇ"], thumb: "images/gallery/20260623_1135.jpg" },
  { no: 1134, date: "2026-06-16", url: "https://kamelow.com/gallery/20260616_1134.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260616_1134.jpg" },
  { no: 1133, date: "2026-06-10", url: "https://kamelow.com/gallery/20260610_1133.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260610_1133.jpg" },
  { no: 1132, date: "2026-06-06", url: "https://kamelow.com/gallery/20260606_1132.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260606_1132.jpg" },
  { no: 1131, date: "2026-06-06", url: "https://kamelow.com/gallery/20260606_1131.jpg", tags: ["析易葵"], thumb: "images/gallery/20260606_1131.jpg" },
  { no: 1130, date: "2026-06-03", url: "https://kamelow.com/gallery/20260603_1130.jpg", tags: ["唯世かのん"], thumb: "images/gallery/20260603_1130.jpg" },
  { no: 1129, date: "2026-05-31", url: "https://kamelow.com/gallery/20260531_1129.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260531_1129.jpg" },
  { no: 1128, date: "2026-05-29", url: "https://kamelow.com/gallery/20260529_1128.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260529_1128.jpg" },
  { no: 1127, date: "2026-05-28", url: "https://kamelow.com/gallery/20260528_1127.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260528_1127.jpg" },
  { no: 1126, date: "2026-05-26", url: "https://kamelow.com/gallery/20260526_1126.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260526_1126.jpg" },
  { no: 1125, date: "2026-05-23", url: "https://kamelow.com/gallery/20260523_1125.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260523_1125.jpg" },
  { no: 1124, date: "2026-05-16", url: "https://kamelow.com/gallery/20260516_1124.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260516_1124.jpg" },
  { no: 1123, date: "2026-05-14", url: "https://kamelow.com/gallery/20260514_1123.jpg", tags: ["くぇ"], thumb: "images/gallery/20260514_1123.jpg" },
  { no: 1122, date: "2026-05-13", url: "https://kamelow.com/gallery/20260513_1122.jpg", tags: ["秋吉真奈","ヒモノ"], thumb: "images/gallery/20260513_1122.jpg" },
  { no: 1121, date: "2026-05-10", url: "https://kamelow.com/gallery/20260510_1121.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260510_1121.jpg" },
  { no: 1120, date: "2026-05-07", url: "https://kamelow.com/gallery/20260507_1120.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260507_1120.jpg" },
  { no: 1119, date: "2026-05-06", url: "https://kamelow.com/gallery/20260506_1119.jpg", tags: ["上田香苗","メスガメ"], thumb: "images/gallery/20260506_1119.jpg" },
  { no: 1118, date: "2026-05-05", url: "https://kamelow.com/gallery/20260505_1118.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260505_1118.jpg" },
  { no: 1117, date: "2026-05-05", url: "https://kamelow.com/gallery/20260505_1117.jpg", tags: ["双葉湊音"], thumb: "images/gallery/20260505_1117.jpg" },
  { no: 1116, date: "2026-05-04", url: "https://kamelow.com/gallery/20260504_1116.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260504_1116.jpg" },
  { no: 1115, date: "2026-05-02", url: "https://kamelow.com/gallery/20260502_1115.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260502_1115.jpg" },
  { no: 1114, date: "2026-05-01", url: "https://kamelow.com/gallery/20260501_1114.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260501_1114.jpg" },
  { no: 1113, date: "2026-04-29", url: "https://kamelow.com/gallery/20260429_1113.jpg", tags: ["秋吉真奈"], thumb: "images/gallery/20260429_1113.jpg" },
  { no: 1112, date: "2026-04-27", url: "https://kamelow.com/gallery/20260427_1112.jpg", tags: ["ヒモノ"], thumb: "images/gallery/20260427_1112.jpg" },
  { no: 1111, date: "2026-04-01", url: "https://kamelow.com/gallery/20260401_1111.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260401_1111.jpg" },
  { no: 1110, date: "2026-03-29", url: "https://kamelow.com/gallery/20260329_1110.jpg", tags: ["双葉湊音"], thumb: "images/gallery/20260329_1110.jpg" },
  { no: 1109, date: "2026-03-28", url: "https://kamelow.com/gallery/20260328_1109.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260328_1109.jpg" },
  { no: 1108, date: "2026-03-27", url: "https://kamelow.com/gallery/20260327_1108.jpg", tags: ["彩澄りりせ"], thumb: "images/gallery/20260327_1108.jpg" },
  { no: 1107, date: "2026-02-20", url: "https://kamelow.com/gallery/20260220_1107.jpg", tags: ["メスガメ"], thumb: "images/gallery/20260220_1107.jpg" },
  { no: 1106, date: "2026-02-16", url: "https://kamelow.com/gallery/20260216_1106.jpg", tags: ["心華"], thumb: "images/gallery/20260216_1106.jpg" },
  { no: 1105, date: "2026-02-14", url: "https://kamelow.com/gallery/20260214_1105.jpg", tags: ["くぇ"], thumb: "images/gallery/20260214_1105.jpg" },
  { no: 1104, date: "2026-02-08", url: "https://kamelow.com/gallery/20260208_1104.jpg", tags: ["双葉湊音"], thumb: "images/gallery/20260208_1104.jpg" },
  { no: 1103, date: "2026-02-02", url: "https://kamelow.com/gallery/20260202_1103.jpg", tags: ["双葉湊音"], thumb: "images/gallery/20260202_1103.jpg" },
  { no: 1102, date: "2026-02-02", url: "https://kamelow.com/gallery/20260202_1102.png", tags: ["メスガメ","くぇ","ヒモノ"], thumb: "images/gallery/20260202_1102.jpg" },
  { no: 1101, date: "2026-02-01", url: "https://kamelow.com/gallery/20260201_1101.jpg", tags: ["彩澄りりせ"], thumb: "images/gallery/20260201_1101.jpg" },
  { no: 1100, date: "2026-01-27", url: "https://kamelow.com/gallery/20260127_1100.jpg", tags: ["メスガメ","くぇ","ヒモノ"], thumb: "images/gallery/20260127_1100.jpg" }
  ]
};

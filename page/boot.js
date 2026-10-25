/* 全ページ共通：JavaScript を読み込む仕組み
   読み込むたびに、ファイル名の後ろに「毎回変わる番号」（?v=…）を付けます。
   ブラウザに古いファイルが残っていても、必ず最新のファイルを取りにいくので、
   lastest フォルダのデータなどを更新したとき、強制再読み込み（Ctrl+F5）をしなくても反映されます。
   読み込むファイルの一覧は、各HTMLの data-load に書いてあります（書いた順に実行されます）。 */
(function () {
  "use strict";
  var me = document.currentScript;
  var list = (me.getAttribute("data-load") || "").split(/\s+/).filter(Boolean);
  var v = Date.now();
  list.forEach(function (src) {
    var s = document.createElement("script");
    s.src = src + (src.indexOf("?") < 0 ? "?" : "&") + "v=" + v;
    s.async = false;                 /* 書いた順に実行する */
    document.body.appendChild(s);
  });
})();

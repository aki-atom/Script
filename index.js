/*イベントの操作
イベント処理・・・イベントリスナー
   →addEventListenerメソッド
   要素.addEventListener(イベント種類, 処理, 方向)
        mouseenter,mouseleave,click,change,focus
*/

let img = document.getElementById("pic");
//マウスポインターが画像に乗ったとき
img.addEventListener("mouseenter", function () {
    this.src = "luffy2.png"
    //this・・・    img
});
//マウスポインターが画像から外れたとき
img.addEventListener("mouseleave", function () {
    this.src = "luffy.png"
});
//clickイベント
let btn = document.getElementById("btn");
let reset = document.getElementById("reset");
btn.addEventListener("click", function () {
    img.src = "luffy.png"
})
reset.addEventListener("click", function () {
    img.src = ""
});
//changeイベント
let select = document.getElementById("select");
select.addEventListener("change", function () {
    img.src = "zoro.png"
})
//focusイベント
let input = document.getElementById("input");
input.addEventListener("focus", function () {
    img.src = "sanji.png"
})
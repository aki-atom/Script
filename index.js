let btn = document.getElementById("btn");
let reset = document.getElementById("reset");
let list = document.getElementById("list");
//ルフィを取得
let luffy = list.firstElementChild;

btn.addEventListener(
  "click",
  change_backgound_color
);

reset.addEventListener(
  "click",
  reset_backgound_color
);

function change_backgound_color(){
  //styleプロパティを利用する
  luffy.style.backgroundColor = "red";
}

function reset_backgound_color() {
  //スタイルプロパティの初期化 null
  luffy.style.backgroundColor = null;
}

let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let list2 = document.getElementById("list2");

//ナミを取得
let nami = list2.firstElementChild;

btn2.addEventListener(
  "click",
  toggle_pink_class
);

function toggle_pink_class() {
  //classListプロパティ
  //toggleはクラスのオンオフを切り替え
  nami.classList.toggle("pink");
}

//classNameプロパティ (上書き)
// nami.className = "pink"

btn3.addEventListener(
  "click",
  () => { //add クラスを追加
    nami.classList.add("blue");
  }
);

btn4.addEventListener(
  "click",
    () => { //add クラスを削除
    nami.classList.remove("blue");
  }
);

btn5.addEventListener(
  "click",
    () => { //replace(old, new) 置き換える
    nami.classList.replace("pink", "blue");
  }
);
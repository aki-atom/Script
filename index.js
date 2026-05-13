//setTimeout(function, delay, params)
//一定時間のあとで、処理を実行する
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let list = document.getElementById("list");

function add_img(path){
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = path;
  li.appendChild(img);
  list.appendChild(li);
}

btn.addEventListener("click", () => {
  setTimeout(() => {
    add_img("img/luffy.png");
  }, 2000);
});
//引数を渡すやり方
let fun = function add_img(path) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = path;
  li.appendChild(img);
  list.appendChild(li);
}

btn2.addEventListener("click", () => {
  setTimeout(fun, 2000, "img/nami.png");
});

//非同期処理
btn3.addEventListener("click", () => {
  fun("img/luffy.png");
  setTimeout(fun, 0, "img/nami.png"); //キュー(待ち行列)
  fun("img/zoro.png");
});
//重い処理は,setTimeoutを介すると良い！！

//setInterval(function, delay)
//一定時間おきに、処理を実行する
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let stop = document.getElementById("stop");
let list4 = document.getElementById("list4");

function add_text(text){
  let li = document.createElement("li");
  li.textContent = text;
  list4.appendChild(li);
}

//clearIntervalで止めることができる
let sanji;

btn4.addEventListener("click", () => {
  sanji = setInterval(() => {
    add_text("サンジ");
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(sanji);
});

//重い処理の場合は、setTimeoutを使う
function add_usopp(){
  setTimeout(() => {
    add_text("ウソップ");
    add_usopp();
  }, 1000)
}

btn5.addEventListener("click", () => {
  add_usopp();
});
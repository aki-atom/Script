//独自データ属性　タグに対して任意に付与できる属性　data-xxxx
let data = document.querySelectorAll("button[data-src]");
let list = document.getElementById("list");

for (let i = 0; i < data.length; i++){
  data[i].addEventListener(
    "click",
    add_img
  );
}

function add_img(){
  let li = document.createElement("li");
  let img = document.createElement("img");
  //data-xxxx属性の値は,getAttributeメソッドで取得
  img.src = this.getAttribute("data-src");
  li.appendChild(img);
  list.appendChild(li);
}

//パラメータをイベントリスナーに渡す方法
let btn2 = document.getElementById("btn2");
let list2 = document.getElementById("list2");
//パラメータの中に「handleEventメソッド」を持たせること
//イベントリスナーを登録したイベントが発生する度に呼び出すメソッド
let params = {
  src : "img/usopp.png",
  handleEvent: function(){
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = this.src;
    li.appendChild(img);
    list2.appendChild(li);
  }
}

btn2.addEventListener("click", params);
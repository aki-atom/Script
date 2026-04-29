//動的に生成される要素のイベントの登録をする方法
let btns = document.querySelectorAll(".btn");
let list = document.getElementById("list");
let btn_area = document.getElementById("btn_area");

/*
btns.forEach(function(btn){
  btn.addEventListener("click", add_img_btn)
});
*/

function add_img_btn(){
  //画像を追加
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = "img/luffy.png";
  li.appendChild(img);
  list.appendChild(li);
  //ボタンを追加
  let button = document.createElement("button");
  button.className = "btn btn-info mb-3 ml-1";
  button.textContent = "ルフィ";
  btn_area.appendChild(button);
}
//親要素に対してイベントリスナーを登録する
btn_area.addEventListener("click", function(e){
  //登録したい場所を指定する
  if(e.target.classList.contains("btn")){
    add_img_btn();
  }
});
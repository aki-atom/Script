let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", change_elements);

function change_elements(){
  //ルフィを複製
  let luffy = list.firstElementChild.cloneNode(true);
  //ナミを複製
  let nami = list.lastElementChild.cloneNode(true);

  //ナミとルフィ(複製)を置き換える
  list.replaceChild(luffy, list.lastElementChild);
  //ルフィとナミ(複製)を置き換える
  list.replaceChild(nami, list.firstElementChild);
}

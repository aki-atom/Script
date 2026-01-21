/* ①要素の属性名をセットする方法
   ②要素の属性を取得する方法
   ③要素の属性を削除する方法

*/

//①要素の属性名をセットしたい
// setAttribute(属性名, 値)
let luffy_input = document.getElementById("luffy");
setTimeout(
  () => { luffy_input.setAttribute("placeholder", "当たり前だ！！！") }
  , 2000
);
setTimeout(
  () => { luffy_input.setAttribute("style", "background-color: pink;") }
  , 4000
);

//②要素の属性を取得したい
// getAttribute(属性名, 値) / attributes
let nami_input = document.getElementById("nami");
let nami_placeholder = nami_input.getAttribute("placeholder");
console.log("--getAttribute--")
console.log(nami_placeholder);
console.log("--attributes--")
let nami_attributes = nami_input.attributes;
for (let i = 0; i < nami_attributes.length ; i++){
  console.log(nami_attributes[i]);
}

//③要素の属性を削除したい
// removeAttribute(属性名)
let zoro_input = document.getElementById("zoro");
setTimeout(
  () => { zoro_input.removeAttribute("placeholder") }
  , 3000
);
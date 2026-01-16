/* DOM操作(HTML文書をオブジェクトデータとして)
①id属性による検索
②タグ名による検索
③name属性による検索
④class属性による検索
⑤セレクター式で検索
*/
//①id属性による検索 getElementById
console.log("--getElementById--");
let title = document.getElementById("title");
console.log(title);
console.log("--textContent--");
console.log(title.textContent);

//②タグ名による検索 getElementsByTagName
console.log("--getElementsByTagName--");
let h2_elems = document.getElementsByTagName("h2");
console.log(h2_elems);
console.log("--textContent--");
//console.log(h2_elems.textContent);
for (let i = 0; i < h2_elems.length; i++) {
    console.log(h2_elems[i].textContent);
}

//③name属性による検索　getElementsByName
console.log("--getElementsByName--");
let name_elems = document.getElementsByName("fruits");
console.log(name_elems);
console.log("--value--");
for (let i = 0; i < name_elems.length; i++) {
    console.log(name_elems[i].value);
}

//④class属性による検索 getElementsByClassName
console.log("--getElementsByClassName--");
let class_elems = document.getElementsByClassName("man");
console.log(class_elems);
console.log("--textContent--");
for (let i = 0; i < class_elems.length; i++) {
    console.log(class_elems[i].textContent);
}

//⑤セレクター式で検索 querySelector
//CSSに準じる　※getElement..と比べると低速
console.log("--querySelector--");
let elems = document.querySelector("form input");
console.log(elems);
console.log("--value--");
console.log(elems.value);

//⑤セレクター式で検索 querySelectorAll
console.log("--querySelectorAll--");
elems = document.querySelectorAll("form input");
console.log(elems);
console.log("--value--");
for (let i = 0; i < elems.length; i++) {
    console.log(elems[i].value);
}
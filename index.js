// 親要素：parentElement
let luffy = document.getElementById("luffy");
luffy.parentElement.style.backgroundColor = "pink";

// 子要素：children
let parent = document.getElementById("parent");
for(let i = 0; i < parent.children.length; i++){
    parent.children[i].style.backgroundColor = "azure";
}
//子要素の一番最初：firstElementChild
parent.firstElementChild.textContent = "firstElementChild => イチジ";
//子要素の一番最後：lastElementChild
parent.lastElementChild.textContent = "lastElementChild => ヨンジ";

//前の要素：previousElementSibling
//次の要素：nextElementSibling
let zoro = document.getElementById("zoro");
zoro.previousElementSibling.textContent = "previousElementSibling => ナミ"
zoro.nextElementSibling.textContent = "nextElementSibling => ウソップ"

//要素の作成：createElement
let frineds = document.getElementById("frineds");
let div = document.createElement("div");
div.textContent = "appendChild => チョッパー";
frineds.appendChild(div);

//要素の置き換え：replaceChild(new_emperor, old)
let emperors = document.getElementById("emperors");
let old = document.getElementById("old");
let new_emperor = document.createElement("div");
new_emperor.textContent = "replaceChild => 黒ひげ";
emperors.replaceChild(new_emperor, old);

//要素の複製：cloneNode(子も含むか)
let partner = document.getElementById("partner");
let nami = document.getElementById("nami");
let bon = nami.cloneNode(true);
//falseだとナミというテキストが得られないから
partner.appendChild(bon);

//要素の削除：removeChild(子要素)
partner.removeChild(nami);
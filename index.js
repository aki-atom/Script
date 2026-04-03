let chara_images = [
    "img/nami.png",
    "img/zoro.png",
    "img/sanji.png",
];

let btn = document.getElementById("btn");
let list = document.getElementById("list");

//btn.addEventListener("click", NG_createlist);
btn.addEventListener("click", OK_createlist);

//何度も再描画(リストを追加)して負荷が高くなる
function NG_createlist() {
    chara_images.forEach(
        function(path){
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = path;
            li.appendChild(img);
            list.appendChild(li);
        }
    );
}

function OK_createlist() {
    //フラグメントを生成する
    let fragment = document.createDocumentFragment();
    chara_images.forEach(
        function (path) {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = path;
//            img.width = 300;
//            img.height = 300;
            li.appendChild(img);
            //一時的にフラグメントに格納
            fragment.appendChild(li);
        }
    );
    //まとめてページに反映させる
    list.appendChild(fragment);
}


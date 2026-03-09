/*フォームの操作
①テキストボックス/テキストエリア
②選択ボックス
③ラジオボタン
④チェックボックス
*/
//①テキストボックス/テキストエリア valueで取得
let profile = document.getElementById("profile");
let textarea_value = document.getElementById("textarea_value");
let textarea_btn = document.getElementById("textarea_btn");
textarea_btn.addEventListener("click", function (e) {
    e.preventDefault();
    textarea_value.textContent = profile.value;
});

let chara_name = document.getElementById("name");
let name_btn = document.getElementById("name_btn");
name_btn.addEventListener("click", function (e) {
    e.preventDefault();
    chara_name.value = "フランキー"
});
//②選択ボックス　value
let admiral_members = document.getElementById("admiral_members");
let select_value = document.getElementById("select_value");
admiral_members.addEventListener("change", function (e) {
    console.log(admiral_members.value);
    switch (admiral_members.value) {
        case "赤犬":
            select_value.src = "img/akainu.png"
            break;
        case '青雉':
            select_value.src = "img/aokiji.png"
            break;
        default:
            select_value.src = "img/kizaru.png"
            break;
    }
});
//③ラジオボタン checked
let getRadioChecked = function (radio_name) {
    let result = "";
    let elems = document.getElementsByName(radio_name);
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            result = elems[i].value;
        }
    }
    let radio_value = document.getElementById("radio_value");
    radio_value.textContent = result;
};
let four_emperors_btn = document.getElementById("four_emperors_btn");
four_emperors_btn.addEventListener("click", function (e) {
    e.preventDefault();
    getRadioChecked("four_emperors");
})

//④チェックボックス checked
let getCheckbox = function (checkbox_name) {
    let result = [];
    let elems = document.getElementsByName(checkbox_name);
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            result.push(elems[i].value);
        }
    }
    let devil_fruits_value = document.getElementById("devil_fruits_value");
    devil_fruits_value.textContent = result;
};
let devil_fruits_btn = document.getElementById("devil_fruits_btn");
devil_fruits_btn.addEventListener("click", function (e) {
    e.preventDefault();
    getCheckbox("devil_fruits");
})
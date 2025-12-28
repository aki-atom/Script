/* 配列(array)
  ①追加・削除
  ②配列に配列を連結
  ③配列の要素位置を検索
  ④配列を検索
  ⑤配列の要素を結合
  ⑥配列の一部を抜き出す
  ⑦配列の内容を書き換える
  ⑧特定の値で統一する
*/
console.log("--初期化--");
let straw_hat_pirates = ["ルフィー", "ゾロ", "ナミ", "ボン"];
console.log(straw_hat_pirates);

https://qiita.com/fuuchin/items/3081c84b5659b3d78bf6#copywithin
console.log("--copyWithin(3, 2, 3)--");
console.log(straw_hat_pirates.copyWithin(3, 2, 3));
console.log("--copyWithin(3, 2, 3)--");
console.log(straw_hat_pirates.copyWithin(3, 0, 1));

//配列の中身を順に処理したい forEach
// 配列.forEach(関数(要素)
console.log("--forEach--");
straw_hat_pirates.forEach(
  (value) => console.log(value)
);

let admiral_members = [
    { name: "赤犬", devil_fruit: "マグマグの実" },
    { name: "青雉", devil_fruit: "ヒエヒエの実" },
    { name: "黄猿", devil_fruit: "ピカピカの実" },
];
console.log("--forEach--");
admiral_members.forEach(function (value) {
  console.log(value.name + "は" + value.devil_fruit);
});

//③配列の中身を加工して新しい配列を作成したい map
//配列(関数(要素))
console.log("--devil_fruits初期化--");
let devil_fruits = ["マグ", "ヒエ", "ピカ"];
console.log(devil_fruits);
//devil_fruitsをmapでupdateし、新しい配列に格納
let new_devil_fruits = devil_fruits.map(function(value){
    return value.repeat(2) + "の実"
});
console.log("--map後--");
console.log(new_devil_fruits);

//④特定の条件で絞り込む filter(関数(要素))
  //true のものだけ返し新しい配列を作成
console.log("--初期化--");
let devil_fruit_and_character = [
    "バクバクの実",
    "メロメロの実",
    "チョッパー",
    "イトイトの実",
    "パンダマン"
];
console.log(devil_fruit_and_character);
let devil_fruit_only =
  devil_fruit_and_character.filter(function(value){
    return (value.includes("実"))
  });
console.log("--filter後--");
console.log(devil_fruit_only);

//⑤条件にすべて合致するか判定したい every
console.log("--初期化--");
devil_fruit_and_character = [
    "バクバクの実",
    "メロメロの実",
    "チョッパー",
    "イトイトの実",
    "パンダマン"
];
console.log(devil_fruit_and_character);
let result = 
  devil_fruit_and_character.every(function (value) {
    return (value.includes("実"))
  });
console.log("--everyの結果--");
console.log(result);
console.log("--devil_fruit_only--");
console.log(devil_fruit_only);
console.log("--everyの結果--");
result =
  devil_fruit_only.every(function (value) {
    return (value.includes("実"))
  });
console.log(result);

//⑥条件に１つでも合致するか判定したい some
console.log("--devil_fruit_and_character--");
console.log(devil_fruit_and_character);
result =
  devil_fruit_and_character.some(function (value) {
    return (value.includes("実"))
  });
console.log("--someの結果--");
console.log(result);
let character = ["チョッパー", "パンダマン"];
console.log("--character--");
console.log(character);
result =
    character.some(function (value) {
        return (value.includes("実"))
    });
console.log("--someの結果--");
console.log(result);

//⑦任意の条件で検索したい find
//最初に合致した要素を取得

console.log("--devil_fruit_and_character--");
console.log(devil_fruit_and_character);
result =
    devil_fruit_and_character.find(function (value) {
        return (value.includes("実"))
    });
console.log("--findの結果--");
console.log(result);

//⑧要素を順に処理して、１つの結果にまとめたい reduce
//  配列.reduce(関数(result, value))
//          resultに直前行った関数の結果が入っている
devil_fruits = [
    "バクバクの実",
    "メロメロの実",
    "イトイトの実"
];
// 「バクバクの実」「メロメロの実」「イトイトの実」
console.log("--reduceの結果--")
result =
    devil_fruits.reduce(function (result, value) {
        return (result + "「" + value + "」")
    });
console.log(result);
console.log("--検索値の初めには「」が付かない--");
/* １回目        result
             "バクバクの実" + "「" + "メロメロの実" + "」"
   ２回目        result
   "バクバクの実「メロメロの実」"+ "「" + "イトイトの実" + "」"
*/
console.log("--初期値設定--")
result =
    devil_fruits.reduce(function (result, value) {
        return (result + "「" + value + "」")
    }, "");
console.log(result);
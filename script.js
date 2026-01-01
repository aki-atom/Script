/* 関数の引数
　①名前付き引数を受け取る方法
　②可変長引数の関数を定義する方法
　③可変長引数(配列)の関数を定義する方法
*/
//名前付き引数 ハッシュ形式で関数に引き渡せる引数
let character = function (age, bust, waist, hip) {
  console.log("年齢：" + age);
  console.log("バスト：" + bust);
  console.log("ウエスト：" + waist);
  console.log("ヒップ：" + hip);
}
console.log("--普通の引数--")
character(20, 98, 58 ,88);
//何を引数で渡すかわからない
//{},でわかりやすくすると
function new_character({age, bust, waist,hip,}) {
  console.log("年齢：" + age);
  console.log("バスト：" + bust);
  console.log("ウエスト：" + waist);
  console.log("ヒップ：" + hip);
}

console.log("--名前付き引数--")
new_character({age: 20, bust: 98, waist: 58, hip: 88});

let nami = {
    age: 20,
    bust: 98,
    waist: 58,
    hip: 88,
};
console.log("--名前付き引数(変数)--")
new_character(nami);
// {}を変数に付けて渡す
console.log("--特定のプロパティのみ--");
function character_bust({ bust }) {
  console.log("バスト：" + bust + "です！");
}
character_bust(nami);

//可変長引数 引数の個数が決まっていない関数
//スプレッド構文
function total(...bounty) {
  let result = 0;
  for (let num of bounty ){
    result += num
  }
  return result
}
console.log("--懸賞金の合計2人--");
console.log(total(30, 11)+"億");

console.log("--懸賞金の合計3人--");
console.log(total(30, 11, 5)+"億");
//配列の場合は、...を付ける
console.log("--配列の場合--");
console.log(total(...[30, 11, 5]) + "億");
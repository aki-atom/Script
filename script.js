// for..in / for..of / for
// for..in オブジェクトのプロパティ(キー)を順に取り出す
/*
  for ( prop(仮変数) in object(オブジェクト)) {
    処理
    オブジェクトからキーを取り出し、順番に仮変数に入る
  }
*/
let Arlong = {    //アーロン
    age: 39,
    height: 263,
    bounty: "200万",
    laughter: "シャハハハ"
};
//propにキーが順番に入る、iでも良い
for ( prop in Arlong) {
  console.log(prop);
}
//キーと値を表示
console.log("---for in(オブジェクト)---");
for ( i in Arlong) {
  console.log(`アーロンの${i}は「${Arlong[i]}」`);
}

//for..of 配列などの内容を取り出したい時に利用
/*
  for ( element(仮変数) of array(配列)) {
    処理
    配列から要素を取り出し、順番に変数に入る
  }
*/

//海軍大将
let admiral_members = ["赤犬", "青雉", "黄猿"];
console.log("--for of (配列)---");
for ( value of admiral_members) {
  console.log(value);
}

admiral_members = ["赤犬", "青雉", "黄猿"];
console.log("--for ofを使わない---");
for ( i = 0; i < 3; i++ ) {
  console.log(admiral_members[i]);
}
admiral_members = ["赤犬", "青雉", "黄猿", "藤虎", "緑牛"];
console.log("--for---");
for ( i = 0; i < 5; i++ ) {
  console.log(admiral_members[i]);
}
//ループから抜け出したいとき
console.log("--for(breakあり)---");
for ( i = 0; i < 5; i++ ) {
  if (admiral_members[i] == "藤虎") {
    break;   //ループ終了
  }
  console.log(admiral_members[i]);
}
//特定のループをスキップしたいとき
console.log("--for(continueあり)---");
for ( i = 0; i < 5; i++ ) {
  if (admiral_members[i] == "赤犬" ||
      admiral_members[i] == "青雉") {
    continue;   //現在のループのみスキップ
  }
  console.log(admiral_members[i]);
}

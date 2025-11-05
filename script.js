//分割代入(配列の内容を別々の変数に代入)
let devil_fruits = ["ゴムゴム","バラバラ","スベスベ"];
let [Luffy, buggy, Alvida] = devil_fruits;
console.log(Luffy);
console.log(buggy);
console.log(Alvida);

[Luffy, buggy, Alvida, Usopp] = devil_fruits;
console.log(Usopp);

devil_fruits = ["ゴムゴム","バラバラ","スベスベ","ヤミヤミ","グラグラ"];
[Luffy, buggy, Alvida, Teach] = devil_fruits;
console.log(Teach);

// ...で残りのものを全て代入する
[Luffy, buggy, Alvida, ...Teach] = devil_fruits;
console.log(Teach);
//変数のスワップ(2つの変数の中身を入れ替える)
let sanji = "非能力者";
let Absalom = "スケスケの実";
console.log(sanji);
console.log(Absalom);
[sanji, Absalom] = [Absalom, sanji];
console.log(sanji);
console.log(Absalom);

//オブジェクト(連想配列)でも分割代入は利用できる
let Crocodile = {
    age: 44, height: 253, devil_fruit: "スナスナの実"
};
//console.log(age); --> Errorになる
//代入先は[]も(ブレケットではなく){}
let { age, height, devil_fruit } = Crocodile;
//キーと名前(中身)は一致させる
console.log(age);
console.log(height);
console.log(devil_fruit);

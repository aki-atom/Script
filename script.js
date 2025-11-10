/* 条件分岐 if. else if, else
if(条件1) {         条件1がtureなら処理1を実行
    処理1            (それ以下は実行されない)
} else if(条件2) {  条件2がtureなら処理2を実行
    処理2            (それ以下は実行されない)
} else {            どの行も満たさないとき処理3を実行
    処理3
} */

let episode;
let chopper_bounty;
// episode = 100;
// episode = 500;
// episode = 900;
episode = 1100;
if (episode <=435) {
    chopper_bounty = 0;
} else if (episode <= 800) {
    chopper_bounty = 50;
} else if (episode <= 1057) {
    chopper_bounty = 100;
} else {
    chopper_bounty = 1000;
}
console.log(`${episode}話のチョッパーの懸賞金は`);
console.log(`${chopper_bounty}ベリー`);

/* switch 変数の値で処理を切り分ける
switch (式) {
  case 値1 :
    処理1
  case 値2 :
    処理2
  default :         合致するケースが見つからなかったとき
    処理3
}
*/

let luffy    = { name: "ルフィ", gender: "男"};
let nami     = { name: "ナミ", gender: "女"};
let vegapunk = { name: "ベガバンク", gender: "不明"};

let person_gender = luffy.gender;
console.log(luffy.name);
switch (person_gender) {
    case "男":
        console.log("あなたは男です");
        break;
    case "女":
        console.log("あなたは女です");
        break;
    default:
        console.log("あなたは何者ですか?");
        break;
}
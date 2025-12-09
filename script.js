//関数   再利用したい処理をまとめておきたいとき
/* funcution 関数名(引数名) {
        処理(必要であれば引数を入れる)
    }
*/


//ルフィの名言を言う関数
//funcution命令  関数を直接定義
function  luffy_saying() {
    return "生きたいと言え!";
}
console.log("--function luffy_saying--");
console.log(luffy_saying());
//関数リテラル 名前のない関数を定義し、変数に代入
let luffy_saying2 = function() {
    return "ほらな折れねぇ!";
};
console.log("--関数リテラル luffy_saying2--");
console.log(luffy_saying2());

//違い
console.log("--function命令 定義後ろ--");
console.log(luffy_saying3());
function  luffy_saying3() {
    return "仲間がいる`よ!!!";
}
console.log("--匿名関数 定義後ろ--");
//console.log(luffy_saying4());
let luffy_saying4 = function() {
    return "死ぬことは恩返しじゃねえぞ!!!";
};
console.log(luffy_saying4());

//悪魔の実の名前を作成する関数
function devil_fruit(word) {
    return word.repeat(2) + "の実";
}
console.log("--devil_fruit関数--");
console.log(devil_fruit("ゴム"));
console.log(devil_fruit("オペ"));

//関数リテラル  よりシンプルに!
let luffy_saying5 = function () {
    return "うるせぇ!!いこーーーう!";
};

//アロー関数
let luffy_saying6 = () => {
    return "うるせぇ!!いこーーーう!";
};
console.log(luffy_saying5());
console.log("--アロー関数--");
console.log(luffy_saying6());
//一行なら{},rerurnも省略可能
let luffy_saying7 = () => "うるせぇ!!いこーーーう!";
console.log("--アロー関数省略ver--");
console.log(luffy_saying7());

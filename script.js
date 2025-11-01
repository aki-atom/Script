// コンソールに表示する
console.log("この帽子をお前に預ける");
//変数let を利用
let luffy; //letは変数宣言
luffy = "人間";
console.log(luffy);
luffy = "ゴム人間";
console.log(luffy);

let bounty = 3000000;
bounty = 100000000;
console.log(bounty);

//変数const 再代入できない
const pirate_king = "ルフィ";
console.log(pirate_king);

//文字列に改行を含める
console.log("一番イカつい\nクソババあ");

//バッククォートを使うとそのまま改行できる
let message;
message = `いつかきっと返しに来い
立派な海賊になってな`;
console.log(message);

//文字列に変数を埋め込む
console.log(`おれは${luffy}だ!!`);
//比較演算子

let zoro  = { age:21, height: 181 };
let sanji = { age:21, height: 180 };
// ==:値が等しいかどうか
console.log("21 == 21 の結果");
console.log( zoro.age == sanji.age );
console.log("181 == 180 の結果");
console.log( zoro.height == sanji.height );
// ==:値が等しくないかどうか
console.log("21 != 21 の結果");
console.log( zoro.age != sanji.age );
console.log("181 != 180 の結果");
console.log( zoro.height != sanji.height );
// < 左辺が右辺より小さいか
console.log("181 < 180 の結果");
console.log( zoro.height < sanji.height );
console.log("180 < 181 の結果");
console.log( sanji.height < zoro.height );
console.log("21 < 21 の結果");
console.log( zoro.age < sanji.age );
// < 左辺が右辺以下
console.log("21 <= 21 の結果");
console.log( zoro.age <= sanji.age );

// ===:値が等しくて、データの方も等しい
console.log("21(数値) === 21(数値) の結果");
console.log( zoro.age === sanji.age );
console.log("21(文字列) === 21(数値) の結果");
console.log( String(zoro.age) === sanji.age );
console.log("21(文字列) == 21(数値) の結果_型は違ってもOK");
console.log( String(zoro.age) == sanji.age );
// == は内部変換してデータの型が違っても比較する
// !== 値が等しくない または データの型が等しくない
console.log("21(数値) !== 21(数値) の結果");
console.log( zoro.age !== sanji.age );
console.log("21(文字列) !== 21(数値) の結果_型は違ってもOK");
console.log( String(zoro.age) !== sanji.age );

// ?: 条件演算子
//条件によって値を切り替えたいときに利用
// (条件式) ? 値1 : 値2
//条件式がtrueなら値1、falseなら値2
let volume = 30;
let chopper_bounty;
chopper_bounty = (volume <=44) ? 0:50
console.log(`${volume}巻のときの懸賞金は`)
console.log(chopper_bounty+"ベリー");
volume = 47;
chopper_bounty = (volume <=44) ? 0:50
console.log(`${volume}巻のときの懸賞金は`)
console.log(chopper_bounty+"ベリー");
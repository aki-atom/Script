//論理演算子(&&, ||, !)
// && 左側がtrueなら  右側を返す
// && 左側がfalseなら 左側を返す
let zoro =  { age: 21, height: 181};
let sanji = { age: 21, height: 180};
let luffy = { age: 19, height: 174};
let usopp = { age: 19, height: 176};

console.log("21 == 21 && 19 == 19 の結果");
console.log(zoro.age == sanji.age && luffy.age == usopp.age);
console.log("21 == 21 && 19 < 19 の結果");
console.log(zoro.age == sanji.age && luffy.age < usopp.age);
console.log("21 < 21 && 19 == 19 の結果");
console.log(zoro.age < sanji.age && luffy.age == usopp.age);
console.log("21 == 21 && 174 の結果");
console.log(zoro.age == sanji.age && luffy.height);
// false:0, null, undefined, NaN, 空文字etc
console.log("0 && 174 の結果");
console.log(0 && luffy.height);
// || 左側がtrueなら  左側を返す
// || 左側がfalseなら 右側を返す
console.log("21 == 21 || 19 == 19 の結果");
console.log(zoro.age == sanji.age || luffy.age == usopp.age);
console.log("21 < 21 || 19 == 19 の結果");
console.log(zoro.age < sanji.age || luffy.age == usopp.age);
console.log("21 < 21 || 19 < 19 の結果");
console.log(zoro.age < sanji.age || luffy.age < usopp.age);
console.log("21 < 21 || 174 の結果");
console.log(zoro.age < sanji.age || luffy.height);
console.log("0 || 174 の結果");
console.log(0 || luffy.height);
console.log("176 || 174 の結果");
console.log(usopp.height || luffy.height);

let pirate_king = "";
pirate_king = pirate_king || "ルフィ";
console.log(`海賊王になるのは ${pirate_king} だ!`);

pirate_king = "白ひげ";
pirate_king = pirate_king || "ルフィ";
console.log(`海賊王になるのは ${pirate_king} だ!`);

//!式がfalseの場合はtrue、trueの場合はfalse
console.log("!(21 == 21) の結果");
console.log(!(zoro.age == sanji.age));
console.log("!(19 < 19) の結果");
console.log(!(zoro.age < sanji.age));
console.log("!(174) の結果");
console.log(!(luffy.height));
console.log("!(0) の結果");
console.log(!(0));

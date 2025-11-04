//演算子
let luffy_bounty = 100000000;
let zoro_bounty = 60000000;
let chopper_bounty = 50;

console.log(luffy_bounty + zoro_bounty);
console.log(luffy_bounty - zoro_bounty);
console.log(luffy_bounty * 2);
console.log((luffy_bounty + zoro_bounty) / 2);
console.log(luffy_bounty % zoro_bounty);
console.log(chopper_bounty ** 2);
console.log(chopper_bounty + chopper_bounty);
chopper_bounty = "50";
//文字列の場合は連結する
console.log(chopper_bounty + chopper_bounty);
console.log("バギー" + "海賊団");
//インクリメント演算子
let chopper_age1 = 15;
let chopper_age2 = chopper_age1++;  //代入してから加算
console.log(chopper_age1);
console.log(chopper_age2);

chopper_age1 = 15;
chopper_age2 = ++chopper_age1;  //加算してから代入
console.log(chopper_age1);
console.log(chopper_age2);
//演算した結果を代入する
luffy_bounty = 100000000;
luffy_bounty += 200000000;   //加算した結果を代入
console.log(luffy_bounty);
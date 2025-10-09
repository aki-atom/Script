console.log("算術演算子");
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log("代入演算子");
const number = 2 + 3;
console.log(number);
console.log("比較演算子");
const a = 5 == 5;
console.log(a);
const a2 = 5 != 5;
console.log(a2);
const a3 = 5 > 3;
console.log(a3);
const a4 = 5 < 3;
console.log(a4);
console.log("比較演算子(データとデータ型を含めて)");
const a5 = 5 === "5";
console.log(a5);
const a6 = 5 === 5;
console.log(a6);
const a7 = 5 !== 5;
console.log(a7);
console.log("論理演算子");
const firstScore = 85;
const secondScore = 79;
const isPassed = firstScore >= 80 && secondScore >= 80;

console.log(isPassed);

const firstScore2 = 85;
const secondScore2 = 79;
const isPassed2 = firstScore2 >= 80 && !(secondScore2 >= 80);

console.log(isPassed2);

const firstScore3 = 85;
const secondScore3 = 79;
const isPassed3 = firstScore3 >= 80 || secondScore3 >= 80;

console.log(isPassed3);

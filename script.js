//配列
let buggy_piraties = ["バギー","モージ","カバジ"];

console.log(buggy_piraties[0]);
console.log(buggy_piraties[1]);
console.log(buggy_piraties[2]);
console.log(buggy_piraties[3]);
console.log(buggy_piraties[-1]);

//連想配列(ハッシュ) キーでアクセス
let buggy = { age: 37,devil_fruit: "バラバラの実"};
//参照：ブラケット記法
console.log(buggy["age"]);
console.log(buggy["devil_fruit"]);
//参照：ドット記法
console.log(buggy.age);
console.log(buggy.devil_fruit);

//文字列を数値に変換
//Number()     数値以外を含む文字列はNaN(Not a Number)
//parseInt()   数値に変換 数値以外を含む文字列はOK
//parseFloat() 数値に変換 数値以外を含む文字列はOK
let buggy_bounty = "15000000ベリー";
console.log(Number(buggy_bounty));
console.log(parseInt(buggy_bounty));
console.log("型", typeof parseInt(buggy_bounty));

console.log(parseInt("50.9ベリー"));
console.log(parseFloat("50.9ベリー"));
//値を文字列に変換 String()
console.log(String(buggy["age"]));
console.log("型", typeof String(buggy["age"]));

//整数値であるかの判定 Number.isInteger()
console.log(Number.isInteger(buggy["age"]));
console.log(Number.isInteger(buggy_bounty));

//配列であるかの判定 Array.isArray()
console.log(Array.isArray(buggy_bounty));
console.log(Array.isArray(buggy_piraties));
console.log(Array.isArray(buggy));

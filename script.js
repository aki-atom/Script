//日付  Dateオブジェクト

let date = new Date();
console.log(date);
//日付・時刻の要素を取得
console.log("--getfullYear 年を取得");
console.log(date.getFullYear());
console.log("--getMonth 月を取得 (現在月-1)");
console.log(date.getMonth());

//形式を変換したい  toXxxxxxString()
console.log("--toLocaleString--");
console.log(date.toLocaleString());

console.log("--toLocaleDateString--");
console.log(date.toLocaleDateString());

console.log("--toLocaleTimeString--");
console.log(date.toLocaleTimeString());

//加算・減算したい
//getで取得し、setする
console.log("--本日--");
console.log(date.toLocaleDateString());
console.log("--一ヶ月前--");
date.setMonth(date.getMonth() - 1);
console.log(date.toLocaleDateString());
console.log("--3日後--");
date.setDate(date.getDate() + 3);
console.log(date.toLocaleDateString());
console.log("--2年後--");
date.setYear(date.getFullYear() + 2);
console.log(date.toLocaleDateString());

//あと何日あるか知りたい
let today = new Date(2022, 9, 9);
//ワンピース104巻 発売日(11/4)
let Release_date = new Date(2022, 10, 4);
console.log("--104巻の発売日");
console.log(Release_date.toLocaleDateString());

//タイムスタンプを利用 getTime()
//1970年1月1日からこれまでに経過した時間をミリ秒に変換した値
console.log("--本日(2022/9/9)--");
console.log(today.getTime());
console.log("--発売日--");
console.log(Release_date.getTime());
let diff = Release_date.getTime() - today.getTime();
console.log("--差は--");
console.log(diff);
console.log("--あと何日--");
// 1000(秒) * 60(分) * 60(時間) * 24(日)
let how_many_days = diff / (1000 * 60 * 60 * 24);
console.log(how_many_days);
console.log(`ワンピース発売日まであと${how_many_days}日`);

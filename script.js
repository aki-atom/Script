/* Promise / async / await
 非同期処理 ある処理が終了するのを待たずに、別の処理を実行すること
*/
console.log("１人目ゾロ");
console.log("２人目ナミ");
console.log("３人目ウソップ");
console.log("４人目サンジ");
//上から順に表示

console.log("--setTimeoutを利用");
console.log("１人目ゾロ");
//setTimeout(関数, 時間)
setTimeout(() => console.log("２人目ナミ"), 3000);
console.log("３人目ウソップ");
console.log("４人目サンジ");
//JavaScriptは処理を待てない!

/*
setTimeout(() => {
  console.log("5 秒待ちました。");
}, 5000);
*/


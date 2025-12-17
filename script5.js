//.thenは続けることが出来る
console.log("--Promiseを利用");
console.log("１人目ゾロ");
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("２人目ナミ");
    //resolve();   .then～は実行しない
    reject();
  },3000);
}).then(() => {console.log("３人目ウソップ");})
  .then(() => {console.log("俺がキャップテンだ！");})
  .catch(() => {console.log("３人目はまだです"); })
  .finally(() => {console.log("仲間が増えた！!"); });
/*
new Promise((resolve, reject) => { 非同期処理の本体 });
    resolve 成功を通知する関数
    reject  失敗を通知する関数
  非同期処理の本体の中で resolve() reject()を呼び出す
  非同期処理の結果を受け取るメソッド
      then: 成功した時の処理(resolve()が呼び出されたとき)
    catch:  失敗した時の処理(reject()が呼び出されたとき)
  finally: 成功／失敗に関わらず、完了の処理
*/

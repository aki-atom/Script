//async, await
/* Promiseを利用した構文よりも、簡素に非同期処理が書ける
async 非同期処理を定義する関数宣言 ! 
  ex) async function sample() {}
    async functionは呼び出されるとPromiseを返す。
      値をreturnした場合、Promiseは戻り値をresolve
      例外、throwした場合、その値をreject
*/
straw_hat_pirates = async () => {
  await become_member("１人目ゾロ"); //関数の前にawaitがあるので
  await become_member("２人目ナミ"); //Promiseの結果がくるまで待つ
  await become_member("３人目ウソップ");
  await become_member("４人目サンジ");
};

const become_member = (member) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(member);
      resolve();
    }, 1000);
  });
};
console.log("--async awaitを利用--")
straw_hat_pirates();
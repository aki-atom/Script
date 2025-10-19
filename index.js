function sayhello(callback) {
  callback();
}

sayhello(function () {
  console.log("Hello");
});

console.log("1．データを取得中...");

setTimeout(function () {
  console.log("2．データが取得されました!");
}, 2000);

console.log("3．他の作業を続けます。");
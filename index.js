function confirmed(fn) {
  const input = window.prompt("実行しますか?");
  fn(input);
}

confirmed(function(input) {
  if (input === "実行") {
    document.getElementById("title1").innerText = "実行しました。";
    console.log("リポジトリを削除");
  }
});

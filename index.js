//フォームの検証(独自のエラー検証)
let button = document.getElementById("button");
let text = document.getElementById("text");
let textError = document.getElementById("text_error");

button.addEventListener("click", function (e) {
  if (text.validity.valueMissing) {  //入力必須で値がないとtrue
    textError.innerHTML = "入力しないと作成できないよ〜";
    resultForm.textContent = "";
  } else if (text.validity.tooShort) {  //下限を下回るときにtrue
    textError.innerHTML = "文字数が少ないよ〜"
    resultForm.textContent = "";
  } else if (text.validity.patternMismatch){  //パターンに一致しないときに
    textError.innerHTML = "すべて全角カタカナじゃないよ〜"
    resultForm.textContent = "";
  } else {
  textError.innerHTML = ""
  let textVlaue = text.value;
  let result = textVlaue.repeat(2) + "の実"
  let resultForm = document.getElementById("resultForm");
  resultForm.textContent = `『${result}』`;
  }
  e.preventDefault();
});
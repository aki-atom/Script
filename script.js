const text = document.querySelector(".text");
const string = document.querySelector(".string");
// keyupでキーボードから手が離れた回数を文字の入力と判断
text.addEventListener("keyup", ()=> {
  // 入力された値を取得
  const inputText = text.value;
  // 入力された値の長さを取得して表示
  string.innerHTML = inputText.length;
});
// keydownでキーボードを押したときのイベントを取得
text.addEventListener("keydown", (e) => {
  const key = e.keyCode;
  console.log(key);
  if (key === 39) {
    console.log("右");
  }
  if (key === 37) {
    console.log("左");
  }
  if (key === 13) {
    console.log("Enter");
  }
  // shiftを押しながら Enterを押す
  if (e.shiftKey && e.key === "Enter") {
    console.log("shiftを押しながらEnter")
  }
});
const container = document.querySelector("#container");
const inputForm = document.querySelector("#inputForm");
const saveBtn = document.querySelector("#saveBtn");
const backBtn = document.querySelector("#backBtn");
const deleteBtn = document.querySelector("#deleteBtn");

// console.log(container);
// console.log(inputForm);
// console.log(saveBtn);

saveBtn.addEventListener("click", ()=> {
  const inputData = inputForm.value;
  console.log(inputData);
  localStorage.setItem("key", inputData);
  inputForm.value = "";
  // ブラウザを閉じてもデータは残る
  // sessionStorageを使うと期限付きで残す事ができる
});

backBtn.addEventListener("click", () => {
  const savedData = localStorage.getItem("key");
  // console.log(savedData);
  inputForm.value = savedData;
});

deleteBtn.addEventListener("click", ()=> {
  localStorage.removeItem("key");
  // 複数のkeyを削除する場合
  // localStorage.clear();
})
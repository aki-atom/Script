const container = document.querySelector("#container");
const inputForm = document.querySelector("#inputForm");
const saveBtn = document.querySelector("#saveBtn");

// console.log(container);
// console.log(inputForm);
// console.log(saveBtn);

saveBtn.addEventListener("click", ()=> {
  const inputData = inputForm.value;
  console.log(inputData);
  localStorage.setItem("key", inputData);
  inputForm.value = "";
});
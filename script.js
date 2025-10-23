const container = document.querySelector(".container");
// console.log(container);
const btn = document.querySelector(".btn");
// console.log(btn);
btn.addEventListener("click", ()=>{
  if (container.classList.contains(".show") == false) {
    container.classList.add("show");
  }
});

container.addEventListener("transitionend", (e) => {
  btn.textContent = "クリックされた!";
});

const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

async function getUsers() {
  // データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();

  // DOM操作
  users.forEach(function(user) {
    const list = document.createElement("li"); // "list" を "li" に修正
    list.innerText = user.name;
    lists.appendChild(list);
  });
}

button.addEventListener("click", listUsers);

window.addEventListener("load", listUsers);

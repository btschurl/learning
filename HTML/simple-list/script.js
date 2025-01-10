const form = document.querySelector(".form");
const inputValue = document.querySelector(".addList");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.textContent = inputValue.value;
  list.appendChild(newItem);
});

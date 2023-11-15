const nav = document.querySelector('.nav');
const navListItems = document.querySelectorAll('.nav-listitem');

navListItems.forEach((item) =>
  item.addEventListener("click", listActive));

function listActive() {
  navListItems.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

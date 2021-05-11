const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

toggleTag.addEventListener("click", () => {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="./img/close.svg"/>Close`;
  } else {
    toggleTag.innerHTML = `<img src="./img/menu.svg" />Menu`;
  }
});

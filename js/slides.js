const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", function () {
  currentSlide += 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z += 1;
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.3s";
});

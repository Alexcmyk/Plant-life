const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll('img');

let currentSlide = 0;
let z = 1;

<<<<<<< HEAD
// Click slideshow

slideArea.addEventListener('click', function () {
    currentSlide += 2;

    if (currentSlide > images.length - 1) {
        currentSlide = 0;
    }
=======
slideArea.addEventListener("click", () => {
  currentSlide += 1;
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }
>>>>>>> 3687471a267bbd0c6b643e50be0096eb28deebb5

    z += 1;

<<<<<<< HEAD
    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = 'fade 0.3s';
});

// Mouse over to random transfom

slideArea.addEventListener('mouseover', function () {
    images.forEach((image) => {
        const x = 25 * Math.floor(Math.random() * 5) - 50;
        const y = 25 * Math.floor(Math.random() * 5) - 50;

        image.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Mouse out to reset

slideArea.addEventListener('mouseout', function () {
    images.forEach((image) => {
        const y = 0;
        const x = 0;

        image.style.transform = '';
    });
=======
  images.forEach((image) => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", () => {
  images.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px,${y}px)`;
  });
});

slideArea.addEventListener("mouseout", () => {
  images.forEach((image) => {
    image.style.transform = "";
  });
>>>>>>> 3687471a267bbd0c6b643e50be0096eb28deebb5
});

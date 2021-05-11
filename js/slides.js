const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll('img');

let currentSlide = 0;
let z = 1;

// Click slideshow

slideArea.addEventListener('click', () => {
    currentSlide += 1;

    if (currentSlide > images.length - 1) {
        currentSlide = 0;
    }

    z += 1;

    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = 'fade 0.4s';
});

// Mouse over to random transfom

slideArea.addEventListener('mouseover', () => {
    images.forEach((image) => {
        const x = 20 * Math.floor(Math.random() * 5 - 2);
        const y = 20 * Math.floor(Math.random() * 5 - 2);

        image.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Mouse out to reset

slideArea.addEventListener('mouseout', () => {
    images.forEach((image) => {
        image.style.transform = '';
    });
});

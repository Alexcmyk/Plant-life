const toggleTag = document.querySelector('a.toggle-nav');
const mainTag = document.querySelector('main');
const navTag = document.querySelector('nav');

toggleTag.addEventListener('click', () => {
    // Toggle the open class on click
    mainTag.classList.toggle('open');
    navTag.classList.toggle('open');

    // Change inner HTML for the src image and the text
    if (mainTag.classList.contains('open')) {
        toggleTag.innerHTML = `<img src="./img/close.svg"/>Close`;
    } else {
        toggleTag.innerHTML = `<img src="./img/menu.svg" />Menu`;
    }
});

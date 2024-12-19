// const bookWrapper = document.getElementById('bookWrapper');
// let scrollAmount = 0;
// const scrollStep = 400; // Шаг прокрутки в пикселях

// function scrollBooks(direction) {
//     const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;

//     if (direction === 'right') {
//         scrollAmount += scrollStep;
//         if (scrollAmount > maxScroll) scrollAmount = maxScroll;
//     } else if (direction === 'left') {
//         scrollAmount -= scrollStep;
//         if (scrollAmount < 0) scrollAmount = 0;
//     }
//     bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;
// }

// document.querySelector('.left').onclick = function() {
//     scrollBooks('left');
// };
// document.querySelector('.right').onclick = function() {
//     scrollBooks('right');
// };

const bookWrapper = document.getElementById('bookWrapper');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
let scrollAmount = 0;
const scrollStep = 400; // Шаг прокрутки в пикселях

function updateButtons() {
    const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;
    leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';
    rightButton.style.display = scrollAmount < maxScroll ? 'block' : 'none';
}

function scrollBooks(direction) {
    const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;

    if (direction === 'right') {
        scrollAmount += scrollStep;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    } else if (direction === 'left') {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) scrollAmount = 0;
    }

    bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    updateButtons();
}

leftButton.onclick = () => scrollBooks('left');
rightButton.onclick = () => scrollBooks('right');

updateButtons();
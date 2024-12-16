const bookWrapper = document.getElementById('bookWrapper');
let scrollAmount = 0;
const scrollStep = 400; // Шаг прокрутки в пикселях

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
}
// const menuBurger = document.getElementById("menuBurger");
// const menu = document.getElementById("menu");
// const menuClose = document.getElementById("menuClose");

// menuBurger.addEventListener("click", () => {
//   menu.classList.add("menu-active");
//   menuBurger.style.display = "none";
// });

// menuClose.addEventListener("click", () => {
//   menu.classList.remove("menu-active");
//   menuBurger.style.display = "block";
// });

const menuBurger = document.getElementById('menuBurger');
        const menu = document.getElementById('menu');
        const menuClose = document.getElementById('menuClose');

        // Показать меню и скрыть надпись "МЕНЮ"
        menuBurger.addEventListener('click', () => {
            menu.classList.add('menu-active');
            menuBurger.style.display = 'none';
        });

        // Закрыть меню и вернуть надпись "МЕНЮ"
        menuClose.addEventListener('click', () => {
            menu.classList.remove('menu-active');
            menuBurger.style.display = 'block';
        });
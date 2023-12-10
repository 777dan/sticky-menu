window.onload = function () {
    const nav = document.querySelector("nav");
    const up = document.querySelector("#up");
    let menuBottom = 100; // значення відступу від верхнього краю при прокрутці
    window.onscroll = function () {
        if (document.documentElement.scrollTop < menuBottom) {
            // або document.body.scrollTop > menuBottom
            up.style.opacity = "0";
            nav.classList.remove("fixed"); // видаляємо клас 'fixed'
        } else {
            up.style.opacity = "1";
            nav.classList.add("fixed"); // додаємо клас 'fixed'
        }
    };
};
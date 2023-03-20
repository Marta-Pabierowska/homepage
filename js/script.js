console.log("Cześć!");

let heading = document.querySelector(".heading");
let headerColorButton = document.querySelector(".js-toggleHeaderColorButton");

headerColorButton.addEventListener("click", () => {
    heading.classList.toggle("color")
});

let themeColorButton = document.querySelector(".js-toggleThemeColorButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

themeColorButton.addEventListener("click", () => {
    body.classList.toggle("body--darkTheme");

    themeName.innerText = body.classList.contains("body--darkTheme") ? "Jasny" : "Ciemny";
});
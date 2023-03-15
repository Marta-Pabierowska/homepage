console.log("Cześć!");

let heading = document.querySelector(".heading");
let button__title = document.querySelector(".button__title");

button__title.addEventListener("click", () => {
    heading.classList.toggle("color")
});

let button__body = document.querySelector(".button__body");
let body = document.querySelector(".body");
let color__name = document.querySelector(".color__name");

button__body.addEventListener("click", () => {
    body.classList.toggle("dark");

    color__name.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemny";
});
{
    const welcome = () => {
        console.log("WELCOME!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--darkTheme");
        themeName.innerText = body.classList.contains("body--darkTheme") ? "Jasny" : "Ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-togglechangeBackgroundButton");

        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
{
    const toggleHeaderColor = () => {
        const heading = document.querySelector(".heading");
        const headingName = document.querySelector(".js-headingName");

        heading.classList.toggle("header--color");
        headingName.innerText = heading.classList.contains("header--color") ? "Czerwony" : "Zielony";
    };

    const other = () => {
        const headerColorButton = document.querySelector(".js-toggleHeaderColorButton");

        headerColorButton.addEventListener("click", toggleHeaderColor);
    };

    other();
}
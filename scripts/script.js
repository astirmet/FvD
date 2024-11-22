// select hamburger menu button
const menuOpen = document.querySelector("header > button:nth-of-type(1)");

// select close button
const closeButton = document.querySelector("header nav:nth-of-type(1) button");

const heartBtn = document.querySelectorAll("main section:nth-of-type(2) ul li button svg");

const listSection = document.querySelector("main section:nth-of-type(2) ul");

// select menu
const navMenu = document.querySelector("header nav");

heartBtn.forEach((heart) => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("added");
    });
});

const flexBtn = document.querySelector("main section:nth-of-type(1) button:nth-of-type(2)");
const gridBtn = document.querySelector("main section:nth-of-type(1) button:nth-of-type(1)");

function setFlex() {
    listSection.classList.remove("grid"); 
    listSection.classList.add("flex"); 
}

function setGrid() {
    listSection.classList.remove("flex"); 
    listSection.classList.add("grid"); 
}

flexBtn.addEventListener("click", setFlex);
gridBtn.addEventListener("click", setGrid);

menuOpen.onclick = openMenu;
closeButton.onclick = sluitMenu;

function openMenu() {
    navMenu.classList.add("toonMenu");
}

function sluitMenu() {
    navMenu.classList.remove("toonMenu");
}
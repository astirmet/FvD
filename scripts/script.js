// JavaScript Document
console.log("hi");


// JavaScript om de header tekst elke 5 seconden te veranderen
// REMINDER MEHMET JAAR 2 JAVASCRIPT Const zorgt ervoor dat je de variabel-
// zelf niet kan veranderen maar het object daarin wel zoals text etc.

// const texts = ["DADDY'S HOME", "10% STUDENTENKORTING", "GRATIS STANDAARD LEVERING VANAF $70",
//     "BINNEN 30 DAGEN GRATIS RETOURENEREN. *UITZONDERINGEN VAN TOEPASSING"
// ];

// // REMINDER JAAR 2 Function 
// function changeText() {
//     const h1 = document.getElementById("header-text");
//     index = (index + 1) % texts.length;
//     headerText.textContent = texts[index];
// }
// // Verander de tekst elke 5 seconden
// setInterval(changeText, 5000);





// const menuOpenButton = document.querySelector("li > button");
// const deNav = document.querySelector("header nav");



// menuOpenButton.onclick = openMenu;


// function openMenu(){
//   deNav.classList.add("toonMenu")
  
// }


// sluiten button

const menuOpen = document.querySelector("header button");
const navMenu = document.querySelector('header nav')


menuOpen.addEventListener('click', openMenu)


function openMenu(){
    navMenu.classList.add('toonMenu')
}

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}
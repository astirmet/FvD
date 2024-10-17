// JavaScript Document
console.log("hi");

// sluiten button

// select hamburger menu button
const menuOpen = document.querySelector("header button");

// select close button
const closeButton = document.querySelector("header nav button");

// select menu
const navMenu = document.querySelector('header nav')


menuOpen.onclick = openMenu;
closeButton.onclick = sluitMenu;

function openMenu(){
    navMenu.classList.add('toonMenu')
}

function sluitMenu() {
    navMenu.classList.remove("toonMenu");
}


// JavaScript om de header tekst elke 5 seconden te veranderen
// REMINDER MEHMET JAAR 2 JAVASCRIPT Const zorgt ervoor dat je de variabel-
// zelf niet kan veranderen maar het object daarin wel zoals text etc.

// const texts = ["DADDY'S HOME", "10% STUDENTENKORTING", "GRATIS STANDAARD LEVERING VANAF $70",
//     "BINNEN 30 DAGEN GRATIS RETOURENEREN. *UITZONDERINGEN VAN TOEPASSING"];
    

// // // REMINDER JAAR 2 Function 
// function changeText() {
// const h1 = document.getElementById("header-text");
// index = (index + 1) % texts.length;
// headerText.textContent = texts[index];}
// Verander de tekst elke 5 seconden
// setInterval(changeText, 5000);

// // Functie om de tekst te veranderen met behulp van CHATGPT doorgevoerd met mijn eigen code die ik al had!
// function changeText() {
//     const h1 = document.querySelector("h1");  // Selecteer de eerste h1 in het document
//     index = (index + 1) % texts.length;  // Verhoog de index en reset indien nodig
//     h1.textContent = texts[index];  // Verander de tekst
// }

// // Verander de tekst elke 5 seconden
// setInterval(changeText, 5000);
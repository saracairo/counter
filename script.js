//  creazione elementi DOM

function createElement(tagname, id, text) {
  element = document.createElement(tagname);
  element.id = id;
  element.innerHTML = text;
  return element;
}


//  definizione variabili di elementi esistenti

const mainContainer = document.getElementById("main-container");
const display = document.getElementById("display");
const restart = document.getElementById("restart-button");
const settingsButton = document.getElementById("settings-button");
const colorMenu = document.getElementById("color-menu");


//  definizione variabili di elementi creati dinamicamente

const primaryButtonsSection = createElement("section", "primary-buttons-section", "");
mainContainer.append(primaryButtonsSection);

const decrement = createElement("button", "decrement-button", "-");
primaryButtonsSection.append(decrement);

const increment = createElement("button", "increment-button", "+");
primaryButtonsSection.append(increment);

const counterNumber = createElement("div", "counter-number", "0");
display.append(counterNumber);


//  funzioni pulsanti + / - / restart
  
let count = 0;

decrement.onclick = () => {
  count -=1;
  counterNumber.innerHTML = count;
};

restart.onclick = () => {
  count = 0;
  counterNumber.innerHTML = count;
};

increment.onclick = () => {
  count += 1;
  counterNumber.innerHTML = count;
};


//  funzione cambio colore

settingsButton.onclick = () => {
  colorMenu.style.display = (colorMenu.style.display == "none") ? "block" : "none";
};

let themeButton = document.querySelectorAll(".theme-button");

themeButton.forEach(color => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document.querySelector(":root").style.setProperty("--main-color", dataColor);
  })
});
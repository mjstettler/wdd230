const hamButton = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')

document.getElementById("currentyear").innerText = new Date().getFullYear();

document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`

hamButton.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'Welcome first time visitor!';
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits)
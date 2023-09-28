const hamButton = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')

document.getElementById("currentyear").innerText = new Date().getFullYear();

document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`

hamButton.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})
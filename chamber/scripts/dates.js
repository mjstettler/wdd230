document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`;

document.getElementById("currentyear").innerText = new Date().getFullYear();

const today = new Date();
const lastVisit = '';

console.log(today);

if (today == lastVisit) {
    document.querySelector('#date').textContent = 'Welcome! Let us know if you have an questions.';
}


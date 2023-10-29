document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`;

document.getElementById("currentyear").innerText = new Date().getFullYear();

const msInDay = 84600000;
const today = Date.now();
const lastVisit = localStorage.getItem('visit');
const daysAgo = today-lastVisit;

console.log(daysAgo);
console.log(today);
localStorage.setItem('visit', today)

if (lastVisit == 0) {
    document.querySelector('#date').textContent = 'Welcome! Let us know if you have an questions.';
} else if (lastVisit < msInDay) {
    document.querySelector('#date').textContent = 'Back so soon! Awesome!';
} else {
    if (lastVisit > (lastVisit+msInDay) && lastVisit < (lastVisit+msInDay*2)) {
        document.querySelector('#date').textContent = 'You last visited '+ lastVisit + ' day ago.';
    } else {
        document.querySelector('#date').textContent = 'You last visited ' + lastVisit + ' days ago.';
    }
};


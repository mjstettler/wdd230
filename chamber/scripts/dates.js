document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`;

document.getElementById("currentyear").innerText = new Date().getFullYear();

const msInDay = 84600000;
const today = Date.now();
const lastVisit = localStorage.getItem('visit');
const timeBetween = today-lastVisit;


function daysAgo(msInDay, timeBetween) {
    if (Math.floor((timeBetween*2)/msInDay) < 1) {
        return 0;
    } else {
        return Math.floor(timeBetween/msInDay);
    }
    
}

localStorage.setItem('visit', today)

if (lastVisit == 0) {
    document.querySelector('#date').textContent = 'Welcome! Let us know if you have an questions.';
} else if (timeBetween < msInDay) {
    document.querySelector('#date').textContent = 'Back so soon! Awesome!';
} else {
    if (timeBetween > msInDay && timeBetween < (msInDay*2)) {
        document.querySelector('#date').textContent = 'You last visited '+ daysAgo(msInDay, timeBetween) + ' day ago.';
    } else {
        document.querySelector('#date').textContent = 'You last visited ' + daysAgo(msInDay, timeBetween) + ' days ago.';
    }
};




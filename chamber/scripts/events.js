const hamButton = document.querySelector('#menu')
const navigation = document.querySelector('.navbar')
const darkButton = document.querySelector('#darkButton').textContent
const darkMode = document.querySelector("#darkButton")

// Variables for changing border color 
const box1 = document.querySelector('.weather');
const box2 = document.querySelector('.events');
const box3 = document.querySelector('#spotlight1');
const box4 = document.querySelector('#spotlight2');
const box5 = document.querySelector('#spotlight3');
const box6 = document.querySelector('#spotlight4');
    
const boxes = Array(box1,box2,box3,box4,box5,box6);

console.log(darkButton)

hamButton.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
})

darkMode.addEventListener('click', ()=> {
    if (darkButton == "🔆") {
    document.querySelector('#darkButton').textContent = "🌙";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    boxes.forEach((box) => {
        box.style.borderColor = "white";
    });

    } else {
        document.querySelector("#darkButton").textContent = '🔆';
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    console.log(darkButton)
})

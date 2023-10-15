const hamButton = document.querySelector('#menu')
const navigation = document.querySelector('.navbar')
const darkButton = document.querySelector('#darkButton')
const Icon = document.querySelector('#darkIcon')


hamButton.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
})

darkButton.addEventListener('click', ()=> {
    if (Icon.classList.value == 'fa fa-sun-o') {
    darkIcon.classList.value = 'fa fa-moon-o';
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    } else  {
        darkIcon.classList.value = 'fa fa-sun-o';
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})

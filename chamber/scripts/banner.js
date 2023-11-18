// Meet and Greet banner
const banner = document.querySelector('.banner')
const closeBtn = document.querySelector('#close')

const weekDay = new Date().toLocaleDateString('en-us', {weekday:"long",})

closeBtn.addEventListener('click', () => {

    banner.classList.toggle('hide');
})



if (weekDay == 'Monday' || weekDay == "Tuesday" || weekDay == "Wednesday"){
    banner.classList.remove('hide')
} else {
    banner.classList.toggle('hide');
    
}

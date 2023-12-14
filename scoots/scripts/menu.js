const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const currentPage = document.title;
const navLinks = document.querySelectorAll('nav a')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navLinks.forEach(link =>{
    if (link.textContent === currentPage) {
        link.classList.add('current');
    }
})
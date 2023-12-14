const banner = document.querySelector('.banner')
const closeBtn = document.querySelector('#closeBtn')

closeBtn.addEventListener('click', () => {

    banner.classList.toggle('hide');
})

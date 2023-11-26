const listBtn = document.querySelector('#list')
const gridBtn = document.querySelector('#grid')

gridBtn.addEventListener('click', () => {
    businessCards.classList.add("grid");
    businessCards.classList.remove("list");
});

listBtn.addEventListener('click', () => {
    businessCards.classList.add('list');
    businessCards.classList.remove('grid');

});

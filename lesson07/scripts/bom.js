const input =  document.querySelector('#favchap');
const  button = document.querySelector('button');
const  list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

button.addEventListener('click', ()=>{
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else [
        alert("Please enter your favorite Book and Chapter")
    ]
});

function displayList(chapterItem) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = chapterItem;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('bomFavList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('bomFavList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}



chaptersArray.forEach(chapter => {
    displayList(chapter);
});












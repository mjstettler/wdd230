const url = "https://mjstettler.github.io/wdd230/data/links.json";
const links = document.querySelector('#links');

async function getLinks() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.lessons);
        displayLinks(data.lessons);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let li = document.createElement('li');
        li.textContent = week.lesson;

        week.links.forEach((link) => {
            let linkElement = document.createElement('a');
            linkElement.setAttribute("href", link.url);
            linkElement.textContent = link.title;

            li.appendChild(linkElement);
        });
        links.appendChild(li);
    });
}


// const displayLinks = (weeks) => {
//     weeks.forEach((week) => {
//         let li = document.createElement('li');
//         week.lesson.links.forEach((link) => {
//             console.log(link.title)
//         });
//         let link = document.createElement('a');
//         li.textContent = week.lesson;
//         link.textContent = week.lesson.links.title;
//         link.setAttribute('href', week.lesson.links.url)


//         li.appendChild(link);
//         links.appendChild(li);

//     })
// }

getLinks();
const url = "https://mjstettler.github.io/wdd230/data/links.json";
const links = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.lessons);

    displayLinks(data.lessons)
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let li = document.createElement('li');
        let link = document.createElement('a');
        li.textContent = week;
        link.textContent = week.links.title;
        link.setAttribute('href', week.links.url)


        li.appendChild(link);
        links.appendChild(li);

    })
}

getLinks();
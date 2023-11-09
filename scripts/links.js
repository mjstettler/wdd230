const url = "https://mjstettler.github.io/wdd230/scripts/links.json";
const links = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayLinks(data)
}

const displayLinks = (weeks) => {
    weeks.foreach(week => {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = week.title;
        link.setAttribute('href', week.url)

    })
}

getLinks();
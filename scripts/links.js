const url = "https://mjstettler.github.io/wdd230/scripts/links.js";

async function getLinks() {
    const response = await fetch(url);
    const links = await response.json();
    console.log(data)
}

getLinks();
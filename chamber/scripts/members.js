const cards = document.querySelector("#directoryCards");
const url = "https://mjstettler.github.io/wdd230/chamber/data/members.json";

function displayMembers(members) {
    members.forEach((member) => {
        let cardElement = document.createElement('div');
        let name = document.createElement('p');
        let phoneNum = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');
        let level = document.createElement('p');
        let opHours = document.createElement('p');

        console.log(member.business);

        cardElement.setAttribute('class', 'card')
        name.textContent = member.business;
        phoneNum.textContent = member.phone;
        website.textContent = member.url;
        website.setAttribute('href', member.url);
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.business} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', 'auto');
        level.textContent = member.memberLevel;
        opHours.textContent = member.hours;

        cardElement.appendChild(logo, name)

        member.address.forEach((building) => {
            let locationElement = document.createElement('p');
            locationElement.textContent = building.location;

            cardElement.appendChild(locationElement)
        });

        cardElement.appendChild(phoneNum, opHours, website)

        cards.appendChild(cardElement);
    });
}


async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('member data fetch success!')

        displayMembers(data.commerceMembers)
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

getMembers();
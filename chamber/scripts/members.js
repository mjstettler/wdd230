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
        

        

        cardElement.setAttribute('class', 'card directoryCard')
        name.textContent = member.business;
        phoneNum.textContent = member.phone;
        website.textContent = member.url;
        website.setAttribute('href', member.url);
        website.setAttribute('target', '_blank')
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.business} logo`);
        logo.setAttribute('class', 'hide')
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', 'auto');
        level.textContent = member.memberLevel;
        level.setAttribute('class', 'hide')
        opHours.textContent = member.hours;
        // opHours.setAttribute('class', 'hide')
        // 
        
        

        cardElement.appendChild(logo);
        cardElement.appendChild(name);

        member.address.forEach((building) => {
            let locationElement = document.createElement('p');
            locationElement.textContent = building.location;
            locationElement.setAttribute('class', 'hide')

            cardElement.appendChild(locationElement);
        });


        cardElement.append(phoneNum, opHours, website, level);
        cards.appendChild(cardElement);
    });
}


async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        displayMembers(data.commerceMembers)
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

getMembers();
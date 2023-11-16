const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windDir = document.querySelector('#windDir');
const windSpeed = document.querySelector('#windSpeed');
const gusts = document.querySelector('#gust');
const lat = 49.75;
const lon = 6.64;
const apiKey = '73aa596fb18d463b4b8ca95bea98c9ac';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`; //Call Current weather data


function displayResults(data) {
    tempNum = (data.main.temp).toFixed();
    currentTemp.innerHTML = `${tempNum} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${data.weather[0].description} icon`);

    const description = data.weather[0].description.toString();
    captionDesc.textContent = titleCase(description);

    let windDirection = getDirection(data.wind.deg); //convert degrees into cardinal directions
    windDir.textContent = windDirection;
    windSpeed.innerHTML = `${data.wind.speed} mph`;
    gusts.innerHTML = `${data.wind.gust} mph`;

}


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayResults(data);
        } else {
            // console.log(response.text());
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching or parsing API data', error)
    }
}

function getDirection(deg) { // Convert directional degrees to cardinal directions.
    if (deg >= 338 || deg <= 22) {
        return "N";
    } else if (deg >= 23 && deg <= 68) {
        return 'NE';
    } else if (deg >= 69 && deg <= 112) {
        return 'E';
    } else if (deg >= 113 && deg <= 158) {
        return 'SE';
    } else if (deg >= 159 && deg <= 202) {
        return 'S';
    } else if (deg >= 203 && deg <= 248) {
        return 'SW';
    } else if (deg >= 249 && deg <= 292) {
        return 'W';
    } else if (deg >= 293 && deg <= 337) {
        return 'NW';
    }
}

function titleCase(msg) {
    return msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');
}

apiFetch();
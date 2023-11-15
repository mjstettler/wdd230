const key = 'ca435a5cb47568ff3e42bb226cd6287b';
const day = document.querySelector('#weatherDay');
const currentWeather = document.querySelector('#currentWeather');
const icon = document.querySelector('#weather-icon');
const iconCap = document.querySelector('figcaption');
const lat = 41.06;
const lon = -111.95;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

function displayWeather(data) {
    day.textContent = new Date(data.dt * 1000).toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"}) //Convert to java day time. seconds to milliseconds
    currentWeather.innerHTML = `Current Temp: ${(data.main.temp).toFixed()} &deg;F`
    const iconHttp = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconHttp);
    icon.setAttribute('alt', `${data.weather[0].description} icon`)

    const caption = data.weather[0].description.toString();
    iconCap.textContent = titleCase(caption);
}

async function fetchData() {
    try {
        const response = await fetch(weatherURL);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching or parsing data', error)
    }
}

function titleCase(msg) {
    return msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');
}

fetchData();
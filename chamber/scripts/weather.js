const apiKey = '54be84b4b741cc25e4358e57a2cae7be';
const weatherCard = document.querySelector('.weatherTiles');
const lat = 41.06;
const lon = -111.95;
const part = "minutely,alerts"
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const days = [0, 12, 18]

async function getWeather() {
    try {
        const response = await fetch(weatherURL);

        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.error("Error parsing or fetching data", error)
    }
}

function displayForecast(data) {
    days.forEach((dayNum) => {
        const forecastCard = document.createElement('div');
        forecastCard.setAttribute('class', 'card')
        const iconsrc = `https://openweathermap.org/img/wn/${data.list[dayNum].weather[0].icon}@2x.png`;
        const compassDir = getDirection(data.list[dayNum].wind.deg);

        const condition= titleCase(data.list[dayNum].weather[0].description.toString());
        

        forecastCard.innerHTML = `
        <p><span>${new Date(data.list[dayNum].dt * 1000).toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></p>
        <img src="${iconsrc}" alt="${data.list[dayNum].weather[0].description}">
        <h3>${condition}</h3>
        <p>Temperature: <span id="temp">${data.list[dayNum].main.temp}</span>&deg;F</p>
        <p>Wind Speed: <span id="wind">${data.list[dayNum].wind.speed}</span> mph, ${compassDir}</p>`
        const wind = document.createElement('p')
        if (data.list[dayNum].main.temp <= 50 && data.list[dayNum].wind.speed > 3.0) {
            const chill = windChillFactor(data.list[dayNum].main.temp, data.list[dayNum].wind.speed)
            wind.innerHTML=`<p>Wind Chill: <span id="chill">${chill}&deg;F</span></p>`
        }else {
            wind.innerHTML=`<p>Wind Chill: <span id="chill">N/A</span></p>`
        }
        
        forecastCard.appendChild(wind)
        weatherCard.appendChild(forecastCard)
    })

}

function windChillFactor(temp, wind) {
    const chill = 35.74+0.6215*temp-35.75*Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind,0.16)

    return chill.toFixed(1)
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

getWeather();



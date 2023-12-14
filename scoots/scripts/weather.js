const todayWeather = document.querySelector('#todayWeather');
const tomorrowWeather = document.querySelector('#tomorrowWeather');

// Lat and Lon for Cozumel Mexico
const lat = '20.51';
const lon = '-86.95';
const apiKey = '00af0e061d7e41f5810fb098df1c753b';

// Current weather and 5 day forecast api call
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&cnt=11&appid=${apiKey}`;
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Get tomorrow's date
const date = new Date();
date.setDate(date.getDate() + 1);
const tomorrowDate = date.toISOString().split('T')[0];

// Set the target time to 15:00
const targetTime = `${tomorrowDate} 15:00:00`;






async function getWeather() {
    try {
        const response = await fetch(apiUrl);

        if (response.ok) {
            const data = await response.json();
            

            displayWeather(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.error("Error fetching or parsing data", error)
    }
}

async function getCurrent() {
    try {
        const response = await fetch(currentWeather);

        if (response.ok) {
            const cData = await response.json();
            
            displayCurrentWeather(cData);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error('Error fetching or parsing data', error);
    }
}

function displayWeather(weather) {
    const icon = document.querySelector('#tIcon');
    const temp = document.querySelector('#tomorrowTemp');
    const condition = document.querySelector('#tomorrowCondition')
    const sea = document.querySelector('#seaLevel')
    const humidity = document.querySelector('#tHumidity')


    const targetForecast = weather.list.find(item => item.dt_txt === targetTime);
    if (targetForecast) {
        const temperature = Math.round(targetForecast.main.temp);
        temp.innerHTML = `${temperature} &deg;F`
        
        const iconsrc = `https://openweathermap.org/img/wn/${targetForecast.weather[0].icon}@4x.png`;
        icon.setAttribute("src", iconsrc);

        condition.textContent = targetForecast.weather[0].description;
        humidity.innerHTML = `${targetForecast.main.humidity}%`

        sea.textContent =  'Sea level: '+targetForecast.main.sea_level;

    } else {
        throw Error('Day could not be found')
    }




}

function displayCurrentWeather(current) {
    const icon = document.querySelector('#cIcon');
    const temp = document.querySelector('#currentTemp');
    const condition = document.querySelector('#currentCondition');
    const tempHi = document.querySelectorAll('.cTempMax');
    const tempLow = document.querySelectorAll('.cTempLow');
    const humidity = document.querySelector('#cHumidity');

    const iconsrc = `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', `${current.weather[0].description} icon`)

    const temperature = Math.round(current.main.temp)
    const feelTemp = Math.round(current.main.feels_like)
    temp.innerHTML = `${temperature}&deg;F <br><span>Real Feel: ${feelTemp}&deg;F</span>`;

    condition.textContent = current.weather[0].description;

    // Setting High and Low temp for weather card and banner
    tempHi.forEach(temp => {
        const high = Math.round(current.main.temp_max);
        temp.innerHTML = `${high}&deg;F`
    })
    
    tempLow.forEach(temp => {
        const low = Math.round(current.main.temp_min);
        temp.innerHTML = `${low}&deg;F`
    })


    humidity.innerHTML = `${current.main.humidity}%`

}

getWeather();
getCurrent();

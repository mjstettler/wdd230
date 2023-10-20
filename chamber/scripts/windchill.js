let temp = document.querySelector('#temp').textContent;
let wind = document.querySelector('#wind').textContent;
let windChill = document.querySelector('#chill');

if (temp <= 50 && wind > 3.0) {
    const result = windChillFactor(temp, wind)
    
    windChill.textContent = result
} else {
    windChill.textContent = "N/A"
}

function windChillFactor(temp, wind) {
    const chill = 35.74+0.6215*temp-35.75*Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind,0.16)

    return chill.toFixed(1)
}

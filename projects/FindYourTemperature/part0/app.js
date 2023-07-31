const API_KEY = "YOUR_OPEN-WEATHER-MAP_API_KEY";
window.addEventListener('load', () => {
    let data;
    let lat;
    let long;

    const temperatureDescription = document.querySelector('.temperature-description');
    const temperatureDegree = document.querySelector('.temperature-degree');
    const locationName = document.querySelector('.location-name');
    const iconImg = document.querySelector(".icon");
    const temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            let URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
            const response = await fetch(URI)
            data = await response.json();
            console.log(data);
            const { temp } = data.main;
            const { name } = data;
            const { description, icon } = data.weather[0];

            // set DOM elements with values from the API
            temperatureDegree.textContent = Math.floor(convertTemperature('K', 'F', temp));
            temperatureDescription.textContent = description;
            locationName.textContent = name;
            const iconURI = `http://openweathermap.org/img/wn/${icon}@2x.png`
            iconImg.setAttribute("src", iconURI);

            temperatureSection.addEventListener("click", () => {
                if (temperatureSpan.textContent === "F") {
                    temperatureDegree.textContent = Math.floor(convertTemperature("K", "C", temp));
                    temperatureSpan.textContent = "C";
                } else {
                    temperatureDegree.textContent = Math.floor(convertTemperature("K", "F", temp));
                    temperatureSpan.textContent = "F";
                }
            })

        });
    }
});


/**
 * @param {string} temperatureUnitFrom example: K
 * @param {string} temperatureUnitTo example: F
 * @param {number} value example: 270
 * @return {number} the converted temperature
 */
function convertTemperature(temperatureUnitFrom, temperatureUnitTo, value) {
    let convertedTemperature;
    if (temperatureUnitFrom === "K" && temperatureUnitTo === "F") {
        convertedTemperature = (value - 273.15) * 9 / 5 + 32;
    } else if (temperatureUnitFrom === "K" && temperatureUnitTo === "C") {
        convertedTemperature = (value - 273.15);
    } else {
        throw new Error("we don't support this unit conversion yet");
    }

    return convertedTemperature;
}

/**
 * @param {number} lat latitude
 * @param {number} long longitude
 * @param {string} apiKey your api key
 * @returns your openWeatherMapAPI URI 
 */
function buildLatLongRequest(lat, long, apiKey) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
}
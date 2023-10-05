/**
 * @param {string} temperatureUnitFrom example: K
 * @param {string} temperatureUnitTo example: F
 * @param {number} value example: 273.15
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

module.exports = convertTemperature;
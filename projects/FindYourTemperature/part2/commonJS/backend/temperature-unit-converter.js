/**
 * convert temperature units
 * @param {string} temperatureUnitFrom example: "K"
 * @param {string} temperatureUnitTo example: "F"
 * @param {number} value this value you want converted
 * @returns the converted temperature
 */
const temperatureUnitConverter = (temperatureUnitFrom, temperatureUnitTo, value) => {
    let convertedTemperature;
    if (temperatureUnitFrom === "K" && temperatureUnitTo === "F") {
        convertedTemperature = (value - 273.15) * 9 / 5 + 32;
        return convertedTemperature;
    }
}

module.exports = temperatureUnitConverter;
const temperatureUnitConverter = require("./temperature-unit-converter.js");

test("kelvin to fehrenheit", () => {
    // Arrange
    const expected = 32;
    const kelvinTemp = 273.15
    // Act
    const actual = temperatureUnitConverter("K", "F", kelvinTemp);
    // Assert
    expect(actual).toBe(expected);
})
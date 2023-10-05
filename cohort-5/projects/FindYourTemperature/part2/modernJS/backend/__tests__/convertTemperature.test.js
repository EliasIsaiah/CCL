import { convertTemperature } from "../convertTemperature";

test("kelvin to fahrenheit", () => {
    // Arrange
    const expected = 32;
    const kelvinTemp = 273.15
    // Act
    const actual = convertTemperature("K", "F", kelvinTemp);
    // Assert
    expect(actual).toBe(expected);
})

test("kelvin to celsius", () => {
    // Arrange
    const expected = 0;
    const kelvinTemp = 273.15
    // Act
    const actual = convertTemperature("K", "C", kelvinTemp);
    // Assert
    expect(actual).toBe(expected);
})

test("fahrenheit to celsius throws error", () => {
    expect(() => convertTemperature("F", "C", 100)).toThrow("we don't support this unit conversion yet");
})
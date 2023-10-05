const reverseString = require("./reverseString");

test('reverse a string', () => {
    expect(reverseString("shoe")).toBe("eohs");
});

test('reverse a string', () => {
    // Arrange
    const input = "crab";
    const expected = "barc";
    // Act
    const actual = reverseString(input);
    // Assert
    expect(expected).toBe(actual);
});
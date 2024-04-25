/**
 * Given parameters length, caseChoice, and includeSpecialChars, generates a password to fit the specifications
 *
 * @param {number} length
 * @param {string} caseChoice
 * @param {boolean} includeSpecialChars
 * @returns {string} generated password
 */

function generatePassword(length, caseChoice, includeSpecialChars) {
  return "strong password";
}

// minimum 5 characters, uppercase, lowercase, special characters, and digit
function testPassword(password) {
  //   const re =
  //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{5,}$/;
  const containsDigits = /(?=.*\d)/.test(password);
  const containsLowerCase = /(?=.*[a-z])/.test(password);
  const containsUpperCase = /(?=.*[A-Z])/.test(password);
  const containsSpecialCharacter = /(?=.*[$&+,:;=?@#|'<>.^*()%!-])/.test(
    password
  );
  const isAtLeastFiveChars = /^.{5,}$/.test(password);
  return {
    password,
    containsDigits,
    containsLowerCase,
    containsUpperCase,
    containsSpecialCharacter,
    isAtLeastFiveChars,
  };
}

testPassword(generatePassword(20, "random", true));

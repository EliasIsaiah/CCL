/**
 * Given parameters length, caseChoice, and includeSpecialChars, generates a password to fit the specifications
 *
 * @param {number} length
 * @param {string} caseChoice
 * @param {boolean} includeSpecialChars
 * @returns {string} generated password
 */

function generatePassword(length, caseChoice, includeSpecialChars) {
  if (!length || !caseChoice || typeof includeSpecialChars !== "boolean")
    return "invalid input parameters";

  let desiredPassordLength = length;
  let generatedPassword = [];
  let doSpecialCharacters = includeSpecialChars;

  let doSpecialCharacterInThisLoop = false;

  for (i = 0; i < desiredPassordLength; i++) {
    if (doSpecialCharacters) doSpecialCharacterInThisLoop = Math.random() > 0.5;

    if (doSpecialCharacterInThisLoop) {
      let randomSpecialCharCode = randomIntFromInterval(33, 64);
      generatedPassword.push(String.fromCharCode(randomSpecialCharCode));
    } else {
      let randomChar;
      let randomCharUpperCase = String.fromCharCode(
        randomIntFromInterval(65, 90)
      );
      let randomCharLowerCase = String.fromCharCode(
        randomIntFromInterval(97, 122)
      );

      if (caseChoice === "random") {
        if (Math.random() > 0.5) {
          randomChar = randomCharLowerCase;
        } else {
          randomChar = randomCharUpperCase;
        }
      } else if (caseChoice === "upper") {
        randomChar = randomCharUpperCase;
      } else if (caseChoice === "lower") {
        randomChar = randomCharLowerCase;
      }

      generatedPassword.push(randomChar);
    }
  }
  return generatedPassword.join("");
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

// testing

let password0Result = testPassword(generatePassword(50, "random", true));
let password1Result = testPassword(generatePassword(50, "random", false));
let password2Result = testPassword(generatePassword(50, "lower", true));
let password3Result = testPassword(generatePassword(50, "lower", false));
let password4Result = testPassword(generatePassword(50, "upper", true));
let password5Result = testPassword(generatePassword(50, "upper", false));

console.log(password0Result);
console.log(password1Result);
console.log(password2Result);
console.log(password3Result);
console.log(password4Result);
console.log(password5Result);

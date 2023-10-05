// i want to generate a password
/* password properties:
* length // NUMBER
* does it contain special characters? // BOOLEAN
* does it contain numbers? // BOOLEAN
*/

// let passwordLength = 0; // INPUT
// let containsSpecialCharacters = false; // INPUT
// let containsNumbers = false; // INPUT

const passwordLengthInput = document.getElementById("lengthInput");

// passwordLength = passwordLengthInput.value;

const specialCharCheckBox = document.getElementById("specialCharCheckbox");
const containsNumbersCheckBox = document.getElementById("containsNumbersCheckbox");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlphabet = [];
const specialCharacters = ["/", "-", "?", "+", "=", "`", "~"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



let possiblePasswordChars = [];




// generatePassword(passwordLengthInput.value, specialCharCheckBox.value, containsNumbersCheckBox.value);

// generatePassword(10, true, true);

function generatePassword(length, hasSpecialChars, hasNumbers, hasAlphabet = true, randomizeCase) {

    let password = [];

    if (length > 0) {

        if (hasAlphabet) {

            possiblePasswordChars = possiblePasswordChars.concat(alphabet);
        }

        if (hasSpecialChars === true) {
            possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
        }

        if (hasNumbers) {
            possiblePasswordChars = possiblePasswordChars.concat(numbers);
        }

        // every element in an Array is identified by its Index
        // Index is a NUMBER
        // NUMBERS can be randomized with Javascript's math library

        // let possibleCharacters = ["a","b","c","1","2","3","?","-","="];

        for (i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * possiblePasswordChars.length);
            password.push(possiblePasswordChars[randomIndex]);
        }

        console.log(password.join(""));

        // there's a pool of possible characters that a password
        // can consist of. 
        // depending on what the user has selected,
        // that pool of possible password characters either will
        // or will NOT contain special characters and numbers
    } else {
        console.log("length must be greater than 0!");
        return;
    }
}

const numbersArray = [1, 2, 3, 10, 20, 30];

numbers.filter(isEvenAndGreaterThanTen)
numbers.filter(number => { number % 2 === 0 && number > 10 })

function isEvenAndGreaterThanTen(number) {
    let isEven = number % 2 === 0;
    let isGreaterThanTen = number > 10;
    return isEven && isGreaterThanTen;
}


/* initialize these variables with values, and then override them with the values in the input elements when we trigger the function.

// how do i accept user input?
// we need a form element with inputs = REFERENCE TO DOM OBJECT VALUE

// how do I kick off the password generate function?
// we need a button that triggers a function = EVENT LISTENER */
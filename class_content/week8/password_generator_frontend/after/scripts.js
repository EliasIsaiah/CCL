// Attach event listener to the form submit event
const passwordForm = document.getElementById('password-form');
passwordForm.addEventListener('submit', submitPasswordRequest);

const passwordDiv = document.getElementById("passwordResult");

function submitPasswordRequest(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form);
    const entries = formData.entries();

    // Convert the form data to a JSON object
    const data = Object.fromEntries(entries);
    console.log(data);
    const length = parseInt(data.length);
    const includeSpecialCharacters = data.includeSpecialCharacters === "on";
    const caseChoice = calculateCaseChoice(data);
    const password = generatePassword(length,caseChoice,includeSpecialCharacters)
    passwordDiv.innerText = password;
}

function calculateCaseChoice({ lowercase, uppercase }) {
    let caseChoice = "";
    const doLowercase = lowercase === "on";
    const doUppercase = uppercase === "on";
    if (doLowercase && doUppercase) caseChoice = "random";
    else if (doLowercase) caseChoice = "lower";
    else if (doUppercase) caseChoice = "upper";
    else caseChoice = "random";

    return caseChoice;
}


/**
 * Given parameters length, caseChoice, and includeSpecialChars, generates a password to fit the specifications
 * 
 * @param {number} length 
 * @param {string} caseChoice 
 * @param {boolean} includeSpecialChars 
 * @returns {string} generated password
 */

function generatePassword(length, caseChoice, includeSpecialChars) {

    if (!length || !caseChoice || typeof (includeSpecialChars) !== "boolean") return "invalid input parameters";

    let desiredPassordLength = length;
    let generatedPassword = [];
    let doSpecialCharacters = includeSpecialChars;

    let doSpecialCharacterInThisLoop = false;

    for (i = 0; i < desiredPassordLength; i++) {

        if (doSpecialCharacters) doSpecialCharacterInThisLoop = Math.random() > .5

        if (doSpecialCharacterInThisLoop) {
            let randomSpecialCharCode = randomIntFromInterval(33, 64);
            generatedPassword.push(String.fromCharCode(randomSpecialCharCode));

        } else {
            let randomChar;
            let randomCharUpperCase = String.fromCharCode(randomIntFromInterval(65, 90));
            let randomCharLowerCase = String.fromCharCode(randomIntFromInterval(97, 122));

            if (caseChoice === "random") {
                if (Math.random() > .5) {
                    randomChar = randomCharLowerCase;
                } else {
                    randomChar = randomCharUpperCase;
                }
            }
            else if (caseChoice === "upper") {
                randomChar = randomCharUpperCase;
            } else if (caseChoice === "lower") {
                randomChar = randomCharLowerCase;
            }

            generatedPassword.push(randomChar);
        }
    }
    return generatedPassword.join("");
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// testing

let password0 = generatePassword(50, "random", true);
let password1 = generatePassword(50, "random", false);
let password2 = generatePassword(50, "lower", true);
let password3 = generatePassword(50, "lower", false);
let password4 = generatePassword(50, "upper", true);
let password5 = generatePassword(50, "upper", false);

console.log(`password with random case and special characters: \n${password0}`);
console.log(`password with random case and no special characters: \n${password1}`);
console.log(`password with all lowercase and special characters: \n${password2}`);
console.log(`password with all lowercase and no special characters: \n${password3}`);
console.log(`password with all uppercase and special characters: \n${password4}`);
console.log(`password with all uppercase and no special characters: \n${password5}`);
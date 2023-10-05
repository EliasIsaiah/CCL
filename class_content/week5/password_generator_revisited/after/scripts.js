function generatePassword(length, randomCase, includeSpecialChars) {

    let desiredPassordLength = length;
    let generatedPassword = [];
    let randomizeCharCase = randomCase;
    let doSpecialCharacters = includeSpecialChars;

    let doSpecialCharacterInThisLoop = false;

    for (i = 0; i < desiredPassordLength; i++) {

        if (doSpecialCharacters) doSpecialCharacterInThisLoop = Math.random() > .5

        if (doSpecialCharacterInThisLoop) {
            let randomSpecialCharCode = randomIntFromInterval(33, 64);
            generatedPassword.push(String.fromCharCode(randomSpecialCharCode));

        } else {
            let randomCharCode = randomIntFromInterval(65, 90);
            let randomChar = String.fromCharCode(randomCharCode).toLowerCase();

            if (randomizeCharCase) {
                if (Math.random() > .5) {
                    randomChar = String.fromCharCode(randomIntFromInterval(65, 90));
                } else {
                    randomChar = String.fromCharCode(randomIntFromInterval(97, 122));
                }
            }

            generatedPassword.push(randomChar);
        }
        // console.log(`current password value as it is getting built: \n${generatedPassword.join('')}`);
    }
    console.log(`password value: \n${generatedPassword.join('')}`);
}

generatePassword(50, true, true);
generatePassword(50, false, true);
generatePassword(50, false, false);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

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
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{5,}$/;
    
    const matches = re.test(password);
    
    matches ? console.log("congratulations, your password passes the test!") : console.log("womp womp. you have more work to do");
}

testPassword(generatePassword(20, "random", true));
/**
 * take in input string, reverse, and return it
 * 
 * @param {string} string 
 * @returns reversed string
 */
function reverseString(string){
    return string.split('').reverse().join('');
}

module.exports = reverseString;
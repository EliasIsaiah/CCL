'i ate an apple'
['i', ' ', 'a','t','e',' ','a', 'n'].filter(char => char != ' ');


// 1. Split the string into an array of characters
// 2. pick the appropriate array method for the job and filter out your space characters
// 3. use the filter array method to filter out space characters
// 4. use the join array method to turn your resultant array back into a string

function removeSpaces(myString) {
    let charArray = myString.split("");
    let chars = charArray.filter(char => char != " ");
    let newString = chars.join('');
    return newString
 }
 
'i ate an apple'.split(" ").join('') // iateanapple
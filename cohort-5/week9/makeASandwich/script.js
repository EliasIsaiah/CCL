function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

/**
 * @param {string[]} toppings 
 * @param {function} successCallback 
 * @param {function} failureCallback 
 * @returns 
 */
function makeASandwich(toppings, successCallback, failureCallback) {
    // build a sandwich code
    //.
    //.
    //.
    //.
    console.log("make a sandwith with toppings: " + toppings);
    if(sandwichIsMade) {
        // sandwich made successfully
        successCallback();
        return;
    } else {
        // sandwich was not made successfully
        failureCallback();
        return
    }
}

makeASandwich(["tomato", "peppers"], successCallback, failureCallback);

makeASandwich(["tomatoes","peppers"]).then(successCallback, failureCallback);
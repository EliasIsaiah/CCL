function successCallback(result) {
  console.log("hooray, you made a sandwich!");
}

function failureCallback(error) {
  console.error(`Error making sandwich: ${error}`);
}

/**
 * @param {function} successCallback 
 * @param {function} failureCallback 
 * @returns 
 */
function makeASandwich(successCallback, failureCallback) {
    sandwichIsMade = true;
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

makeASandwich(successCallback, failureCallback);
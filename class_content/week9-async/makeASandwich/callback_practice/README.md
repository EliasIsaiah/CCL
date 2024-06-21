# Callback Practice
The given javascript is a function that accepts a success callback function, and a failure callback function. 

* Write a new success callback function.
* Write a new failure callback function.

```javascript
function successCallback() {
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
        failureCallback("invalid sandwich parameters!");
        return
    }
}

makeASandwich(successCallback, failureCallback);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>makeASandwich</title>
</head>
<body>
    
<script src="script.js"></script>
</body>
</html>
```
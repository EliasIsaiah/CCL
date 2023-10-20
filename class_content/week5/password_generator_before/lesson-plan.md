## Friday
### Charcode and Random Numbers
### Math. resources
* Math.floor(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
* Math.random(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
### Charcode Resources:
* https://unicodelookup.com/#latin/1
### Random Number generator function with Min and Max value parameters:
```javascript
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
```
### Project: password generator
### Password Generator
Write a program that randomly generates a password given specific user-specified parameters:
* use `String.fromCharCode`
* use arrays
* use Math.random

### Your function should take the following parameters:
* length | number
* caseChoice        | string: ["upper", "lower", "random"]
* specialCharacters | boolean
* returns: password | string

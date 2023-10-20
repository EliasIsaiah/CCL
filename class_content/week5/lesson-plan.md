# Week 5

## Thursday
### Exercise: Array Filter Method:
* write a method that filters out words that start with the letter "a"
  * `const words = ["apple","orange","pears", "amoeba", "angry", "bicycle"]`
* write a method that filters out numbers that are greater than 100
  * `const numbers = [1,2,3,4,5,101,102,103,104,105]`
### Lecture: Regular Expressions
* Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. - __MDN__
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
* learn regular expressions: https://regexone.com/
* https://regexr.com/
### Activity: Pig Latin
* https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039
### Lecture: Math.random

## Friday
### Charcode and Random Numbers
### Charcode Resources:
* Math.floor(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
* Math.random(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
### Random Number generator function with Min and Max value parameters:
```javascript
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
```
### Project: password generator
### Password Generator
Write a program that generates a password given specific user-specified parameters:

### Parameters:
* length | number
* caseChoice | string: ["upper", "lower", "random"]
* include special characters? | boolean
* returns: password (string)

## Wednesday

## Personal Assistant

### MVP Features
* What is your name?
  * "My name is <NAME_HERE>
* greeting
  * "Hello <NAME>! The current date is <SOME_DATE>, and it is <CURRENT_TEMPERATURE> and <CURRENT_WEATHER_CONDITION>.
* add to shopping/todo/etc LIST
  * I want add something to an existing list
  * "Add potatoes to the shopping list"
* basic math
  * Addition:
    * "What's 2 + 2?"
      * "2 + 2 is 4."
  * Subtraction

### Sretch Goals
* What is the current time?
  * format can be 24h or 12h
* Unit Conversion
  * C to F
  * mph kph
  * $ to Euros

## Thursday
### Scope
* const + let are block scoped
  * The variables declared via const and let are called block-scoped because their scopes are always the innermost surrounding blocks.

```javascript
{ // Scope A. Accessible: x
  const x = "x";
  console.log(`x is accessbile: ${x}`);
  { // Scope B. Accessible: x, y
    const y = "y";
    console.log(`both x and y are accessible: ${x}, ${y}`);
    { // Scope C. Accessible: x, y, z
      const z = "z";
      console.log(`x, y, and z are accessible: ${x}, ${y}, ${z}`);
    }
  }
}
// Outside. Not accessible: x, y, z
function notAccessible() {
  console.log(`x, y and z are not accessbile: ${x}, ${y}, ${z}`);
}
```
## Template Literals
* allow you to easily insert variables in strings
* allow you evaluate javascript code in strings
* preserve the formatting of whatever is contained in the backticks

## Lists (Arrays)

* create a list of your favorite foods
  * add an item to your list using `push`
  * add an item using `unshift`
  * remove an item using `pop`
  * remove an item using `shift`

### Bonus challenge: 
* turn a string into an array using the `split` method
* turn an array into a string using the `join` method

### Loops
### Switch
### Chrome developer tools
* context: javascript debugging

## Name Badge Function
* Given these parameters:
  * first name
  * middle name
  * last name

You are to combine them in one string, and then add to an array of names.

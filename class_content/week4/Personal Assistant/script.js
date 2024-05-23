// const MY_NAME = "Apricot";

// function sayName() {
//     console.log("My name is " + MY_NAME);
// }

// sayName();

// /**
//  * Returns the sum of num1 and num2
//  * @param {number} num1 - the first number
//  * @param {number} num2 - the second number
//  * @returns {number} Sum of num1 and num2
//  */

// function add(num1, num2) {
//     return num1 + num2
// }

// let sumOfTwoAndThree = add(2, 3);
// console.log("sum of 2 and 3 is: " + sumOfTwoAndThree);

// function askWhatsUp() {
//     return "What's up?"
// }

// console.log(askWhatsUp());

{
  // // Scope A. Accessible: x
  const x = "x";
  console.log(`x is accessible: ${x}`);
  {
    // Scope B. Accessible: x, y
    const y = "y";
    console.log(`both x and y are accessible: ${x}, ${y}`);
    {
      // Scope C. Accessible: x, y, z
      const z = "z";
      console.log(`x, y, and z are accessible: ${x}, ${y}, ${z}`);
    }
  }
}
// Outside. Not accessible: x, y, z
function notAccessible() {
  console.log(`x, y and z are not accessbile: ${x}, ${y}, ${z}`);
}

notAccessible();

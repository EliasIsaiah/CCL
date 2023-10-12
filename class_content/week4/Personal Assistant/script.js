const MY_NAME = "Apricot";

function sayName() {
    console.log("My name is " + MY_NAME);
}

sayName();

/**
 * Returns the sum of num1 and num2
 * @param {number} num1 - the first number 
 * @param {number} num2 - the second number
 * @returns {number} Sum of num1 and num2
 */

function add(num1, num2) {
   return num1 + num2; 
}

let sumOfTwoAndThree = add(2, 3);
console.log("sum of 2 and 3 is: " + sumOfTwoAndThree);
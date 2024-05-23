/** This is a description of Years on Earth function
 * @param {string} howOld
 * @return {boolean} whether or not you've chosen a good way to measure years
 */

function yearOnEarth(howOld) {
  if (howOld === "year") {
    return true;
  }
  if (howOld === "month") return false;
}

const YEAR = "year";
const MONTH = "month";

console.log(yearOnEarth(YEAR));
console.log(yearOnEarth(MONTH));

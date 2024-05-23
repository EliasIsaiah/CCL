/**
 * Tells you if the inputted day is on the weekend.
 *
 * @param {string} dayOfTheWeek
 * @returns {boolean} true if day is saturday or sunday, false otherwise
 */
function isTodayTheWeekend(dayOfTheWeek) {
  const cleansedDayOfTheWeek = dayOfTheWeek.toLowerCase();

  if (cleansedDayOfTheWeek == "saturday") return true;
  if (cleansedDayOfTheWeek == "sunday") return true;

  return false;
}

const SATURDAY = "SATURDAY";
const SUNDAY = "sunday";
const MONDAY = "monday";

console.log(isTodayTheWeekend(SATURDAY));
console.log(isTodayTheWeekend(SUNDAY));
console.log(isTodayTheWeekend(MONDAY));

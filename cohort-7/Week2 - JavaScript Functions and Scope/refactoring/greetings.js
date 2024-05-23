// hello, Sandy

function helloSandy() {
  return "hello, Sandy!";
}

// hello, Paul

function helloPaul() {
  return "hello, Paul!";
}

// hello, Filmon

function helloFilmon() {
  return "I'm going to need that Figma prototype by End of Day, please!";
}

// write ONE function that can takes one parameter (Name) and returns the appropriate message string for that person

/**
 * Accepts a parameter that is the person's name, and returns a unique response
 *
 * @param {string} name
 * @returns {string} this is the special message for that person
 */

function getMessage(name) {
  if (name === "Filmon")
    return "I'm going to need that Figma prototype by End of Day, please!";
  else return `hello, ${name}!`;
}

let sandyMessage = getMessage("Sandy");
let paulMessage = getMessage("Paul");
let filmonMessage = getMessage("Filmon");

let result = `sandyMessage: ${sandyMessage}
paulMessage: ${paulMessage}
filmonMessage: ${filmonMessage}`;

console.log(result);

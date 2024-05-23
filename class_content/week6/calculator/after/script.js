let operands = [];
let operator = "";
let result = "";

const display = document.getElementById("display");
const equalsButton = document.getElementById("equals");

const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementById("clear");

for (button of numberButtons) {
  button.addEventListener("click", onOperandPressed);
}

for (button of operatorButtons) {
  button.addEventListener("click", onOperatorPressed);
}

clearButton.addEventListener("click", clearDisplay);

function clearDisplay() {
  operands = [];
  operator = "";
  display.value = "";
  equalsButton.removeAttribute("disabled");
}

function onOperandPressed(event) {
  let operand = event.target.value;
  operands.push(operand);
  display.value = operands.join("");
}

function onOperatorPressed(event) {
  let operator = event.target.value;
  if (operator === "=") {
    display.value = eval(operands[0] + operands[1] + operands[2]); // 1 + 2, 1 * 2, 1 / 2
    equalsButton.setAttribute("disabled", "");
  } else {
    operands.push(operator);
    display.value = operands.join("");
  }
}

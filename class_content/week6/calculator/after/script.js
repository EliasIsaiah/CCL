let operands = [];
let operator = "";
let result = "";

let display = document.getElementById("display");
let equalsButton = document.getElementById("equals");

function clearDisplay() {
    operands = [];
    operator = "";
    display.value = "";
    equalsButton.removeAttribute("disabled");
}

function onOperandPressed(operand) {
    operands.push(operand);
    display.value = operands.join("");
}

function onOperatorPressed(operator) {
    if (operator === "=") {
        display.value = eval(operands[0] + operands[1] + operands[2]); // 1 + 2, 1 * 2, 1 / 2 
        equalsButton.setAttribute("disabled", "");
    } else {
        operands.push(operator);
        display.value = operands.join("");
    }
}
const container = document.getElementsByClassName("container")[0];

function clearBackground() {
    container.className = "container";
}

function turnBlue() {
    container.classList.add("blue");
}

function turnRed() {
    container.classList.add("red");
}

function turnPurple() {
    container.classList.add("purple");
}
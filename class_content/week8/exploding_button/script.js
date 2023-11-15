let button = document.getElementById("button");

button.style.width = "100px";
button.style.height = "20px";

button.addEventListener("click", () => {
    let currentwidth = button.style.width; // "40px"
    let widthNumber = parseInt(currentwidth.substring(0,currentwidth.length - 2));
    let currentheight = button.style.height;
    let heightNumber = parseInt(currentheight.substring(0,currentheight.length - 2));
    button.style.width = `${widthNumber += 10}px`;
    button.style.height = `${heightNumber += 10}px`;
})
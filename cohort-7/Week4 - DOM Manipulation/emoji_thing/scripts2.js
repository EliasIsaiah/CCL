// Get the button element
const button = document.getElementById("button");

// Add an event listener to the button that listens for the click event
button.addEventListener("click", function () {
  // Display the prompt when the button is clicked
  const userInput = prompt("Please enter some text:");
  console.log(userInput);
});

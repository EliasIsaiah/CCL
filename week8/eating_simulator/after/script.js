[{
    id: "sandwich",
    name: "turkey sandwich",
    sugarContent: 30,
    image: "assets/images/sandwich.PNG",
    audio: "assets/sounds/win.mp3",
},
{
    id: "fish",
    name: "fish sticks",
    sugarContent: 10,
    image: "assets/images/fish_sticks.PNG",
    audio: "assets/sounds/BabyCrying.mp3",
},
{
    id: "cake",
    name: "carrot cake",
    sugarContent: 30,
    image: "assets/images/cake.PNG",
    audio: "assets/sounds/Farm-Animals.mp3",
}]

// initialize our DOM elements

let container = document.getElementById("container");

let sandwichDiv = document.createElement("div");
sandwichDiv.style.backgroundImage = "url('assets/images/sandwich.PNG')";
sandwichDiv.style.backgroundSize = "cover";
sandwichDiv.setAttribute("class", "dish");
sandwichDiv.onclick = () => choose("sandwich");

let fishsticksDiv = document.createElement("div");
fishsticksDiv.style.backgroundImage = "url('assets/images/fish_sticks.PNG')";
fishsticksDiv.style.backgroundSize = "cover";
fishsticksDiv.setAttribute("class", "dish");
fishsticksDiv.onclick = () => choose("fish");

let cakeDiv = document.createElement("div");
cakeDiv.style.backgroundImage = "url('assets/images/cake.PNG')";
cakeDiv.style.backgroundSize = "cover";
cakeDiv.setAttribute("class", "dish");
cakeDiv.onclick = function () { choose("cake") }
// () => choose("cake");

container.appendChild(sandwichDiv);
container.appendChild(cakeDiv);
container.appendChild(fishsticksDiv);


// const winSound = new Audio('assets/sounds/win.mp3');
const baby = new Audio('assets/sounds/BabyCrying.mp3');
// const audio = new Audio('KatyPerryFirework.mp3');

// function toggleSound() {
//     if (winSound.paused) {
//         winSound.play();
//     } else {
//         winSound.pause();
//     }
// }

// function toggleSoundThreeSeconds() {
//     baby.play();
//     setTimeout(function () {
//         audio.pause();
//     }, 1000); // Set timeout to pause after 3 seconds (3000 milliseconds)
//     baby.currentTime = 0;
// }

function choose(dish) {
    // sandwich
    if (dish === "sandwich") {
        // win the game
        // winSound.play();
        // fish
    } else if (dish === "fish") {
        // lose the game
        alert("you lose");
        // cake
    } else if (dish === "cake") {
        // lose the game
        alert("you lose");
    } else {
        alert("how did you even get here");
    }
}
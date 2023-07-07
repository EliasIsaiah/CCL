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


let dishesDiv = document.createElement("div");
dishesDiv.setAttribute("class", "dishes");
container.appendChild(dishesDiv);

let messageDiv = document.createElement("div");
messageDiv.setAttribute("class", "message");
container.appendChild(messageDiv);
messageDiv.innerText = "choose a dish to eat";

let sandwichDiv = createDishDiv("sandwich","sandwich_image");

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

dishesDiv.appendChild(sandwichDiv);
dishesDiv.appendChild(cakeDiv);
dishesDiv.appendChild(fishsticksDiv);


const babySound = new Audio('assets/sounds/BabyCrying.mp3');
const winSound = new Audio('assets/sounds/win.mp3');
const animalSound = new Audio('assets/sounds/Farm-Animals.mp3');

function createDishDiv(dishName, imageName) {
    let sandwichDiv = document.createElement("div");
    sandwichDiv.style.backgroundImage = `url('assets/images/${imageName}.PNG')`;
    sandwichDiv.style.backgroundSize = "cover";
    sandwichDiv.setAttribute("class", "dish");
    sandwichDiv.onclick = () => choose(dishName);
    return sandwichDiv;
}

function makeAnimalSound() {
    animalSound.play();
    setTimeout(() => animalSound.pause(), 3000);
    animalSound.currentTime = 0;
}

function makeBabySound() {
    babySound.play();
    setTimeout(function () {
        babySound.pause();
    }, 3000); // Set timeout to pause after 3 seconds (3000 milliseconds)
    babySound.currentTime = 0;
}

function makeWinSound() {
    winSound.play();
    setTimeout(function () {
        winSound.pause();
    }, 3000); // Set timeout to pause after 3 seconds (3000 milliseconds)
    winSound.currentTime = 0;
}

function makeAnimalSound() {
    animalSound.play();
    setTimeout(function () {
        animalSound.pause();
    }, 3000); // Set timeout to pause after 3 seconds (3000 milliseconds)
    animalSound.currentTime = 0;
}

function choose(dish) {
    // sandwich
    if (dish === "sandwich") {
        // win the game
        makeWinSound();
    } else if (dish === "fish") {
        // lose the game
        makeAnimalSound();
        console.log("you lose");
    } else if (dish === "cake") {
        // lose the game
        makeBabySound();
        console.log("you lose");
    } else {
        console.log("how did you even get here");
    }
}
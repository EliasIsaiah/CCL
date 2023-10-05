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

/**
 * 
 * @param {string} dishName 
 * @param {string} imagePath 
 * @returns {HTMLDivElement}
 */
function createDishDiv(dishName, imagePath) {
    let dishDiv = document.createElement("div");
    dishDiv.style.backgroundImage = `url('${imagePath}')`;
    dishDiv.style.backgroundSize = "cover";
    dishDiv.setAttribute("class", "dish");
    dishDiv.onclick = () => choose(dishName);
    return dishDiv;
}

let sandwichDiv = createDishDiv("sandwich","assets/images/sandwich.PNG");
let fishsticksDiv = createDishDiv("fish","assets/images/fish_sticks.PNG");
let cakeDiv = createDishDiv("cake","assets/images/fish_sticks.PNG");

// dishesDiv.appendChild(sandwichDiv);
// dishesDiv.appendChild(cakeDiv);
// dishesDiv.appendChild(fishsticksDiv);

const babySound = new Audio('assets/sounds/BabyCrying.mp3');
const winSound = new Audio('assets/sounds/win.mp3');
const animalSound = new Audio('assets/sounds/Farm-Animals.mp3');
babySound.currentTime;

/**
 * @param {HTMLAudioElement} sound 
 * @param {Number} durationInSeconds 
 */
function makeSound(sound, durationInSeconds) {
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => sound.pause(), durationInSeconds * 1000)
}

let myString = "string";
let myObject = {objectKey: "value"};

function choose(dish) {
    // sandwich
    if (dish === "sandwich") {
        // win the game
        makeSound(winSound, 3);
    } else if (dish === "fish") {
        // lose the game
        makeSound(animalSound, 3);
        console.log("you lose");
    } else if (dish === "cake") {
        // lose the game
        makeSound(babySound, 2);
        console.log("you lose");
    } else {
        console.log("how did you even get here");
    }
}


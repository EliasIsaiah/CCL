const dishes = [{
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
// function: convert string into uppercase
// function: convert string into lowercase

let webpage = document.getElementById("webpage");

function convertToUppercase(string) {
    return string.toUpperCase();
}

function convertToLowercase(string) {
    return string.toLowerCase();
}

function makeItalic(string) {
    webpage.innerHTML += "<p><i>" + string + "</i></p>";
}

function makeAParagraph(string) {
    webpage.innerHTML += "<p>" + string + "</p>";
}

function makeAnHtmlElementWithText(startingTag, text, endingTag) {
    webpage.innerHTML += startingTag + text + endingTag;
}

function createThreeItemList(listItemsArray) {
    webpage.innerHTML += `<ul><li>${listItemsArray[0]}</li><li>${listItemsArray[1]}</li><li>${listItemsArray[2]}</li></ul>`
}

function createList(createOrderedList, listItems, makeBold) {
    listMarkupString = "";
    for (item of listItems) {
        let listItem = "";
        // if (makeBold) { // makeBold === true
        //     listItem = `<li><b>${item}</b></li>`; 
        // } else {
        //     listItem = `<li>${item}</li>`; 
        // }
        listItem = makeBold ? `<li><b>${item}</b></li>` : `<li>${item}</li>`;
        listMarkupString += listItem;
    }
    if (createOrderedList) webpage.innerHTML += "<ol>" + listMarkupString + "</ol>";
    if (!createOrderedList) webpage.innerHTML += "<ul>" + listMarkupString + "</ul>";
}

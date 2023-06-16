// function: convert string into uppercase
// function: convert string into lowercase

function convertToUppercase(string) {
    return string.toUpperCase();
}

function convertToLowercase(string) {
    return string.toLowerCase();
}

function makeItalic(string) {
     return "<i>"+string+"</i>";
}

function makeAParagraph(string) {
    return "<p>"+string+"</p>";
}

function makeAnHtmlElementWithText(startingTag,text,endingTag) {
    return startingTag+text+endingTag;
}

function createThreeItemList(listItemsArray) {
    return `<ul><li>${listItemsArray[0]}</li><li>${listItemsArray[1]}</li><li>${listItemsArray[2]}</li></ul>`
}

function createList(createOrderedList,listItems, makeBold) {
    listMarkupString = "";
    for (item of listItems) {
        listItem = "";
        // if (makeBold) { // makeBold === true
        //     listItem = `<li><b>${item}</b></li>`; 
        // } else {
        //     listItem = `<li>${item}</li>`; 
        // }
        let listItem = makeBold ? `<li><b>${item}</b></li>` : `<li>${item}</li>`;
        listMarkupString += listItem;
    }
    if(createOrderedList) return "<ol>" + listMarkupString + "</ol>";  
    if(!createOrderedList) return "<ul>" + listMarkupString + "</ul>";  
}

let webpage = document.getElementById("webpage");
webpage.innerHTML = makeItalic("my my that's a-lovely pizza");
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

function createList(createOrderedList,listItems) {
    listMarkupString = "";
    for (item of listItems) {
        let listItem = `<li>${item}</li>`;
        listMarkupString += listItem;
    }
    if(createOrderedList) return "<ol>" + listMarkupString + "</ol>";  
    if(!createOrderedList) return "<ul>" + listMarkupString + "</ul>";  
}

// <ul>
//     <li>my list item 1</li>
//     <li>my list item 2</li>
//     <li>my list item 3</li>
//     <li>my list item 4</li>
// </ul>
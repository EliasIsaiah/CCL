let theGreatGatsby = {
    title: "The Great Gatsby",
    author: "Elias Roussos",
    favoriteQuote: "yeehaw charlie brown!",
    price: 6372, 
};

let charlottesWeb = {
    title: "Charlotte's Web",
    author: "Cornelia Funke",
    favoriteQuote: "That's a spicy meatball?",
    price: 2, 
};

let theBookThief = {
    title: "The Book Thief",
    author: "Christopher Paolini",
    favoriteQuote: "uh oh! I left the oven on.",
    price: 81, 
};

let myCoolArray = [theGreatGatsby, charlottesWeb, theBookThief];

for(let i = 0; i < myCoolArray.length; i++) {
    console.log(`this is the current value of i: ${i}`);
    console.log(`this is the book title ${myCoolArray[i].title}`);
    console.log(`this is the book author ${myCoolArray[i].author}`);
    console.log(`this is my favorite quote from the book: ${myCoolArray[i].favoriteQuote}`);
    console.log(`this is the book price $${myCoolArray[i].price}`);
}
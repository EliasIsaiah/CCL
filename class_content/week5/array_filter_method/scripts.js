// this is a sample posts array which we will manipulate

let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 2,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 3,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
]

// if the passed-in post has userID === 1, return true, otherwise, return false
function isEliasPost(post) {
    if (post.userId === 1) { return true }
    else { return false; }
}

// filter the posts based off of the conditional isEliasPost function defined above (line 31)
const eliasPosts = posts.filter(isEliasPost);

// this is an array of numbers to test out more filtering scenarios
const numbers = [1, 2, 3, 4, 10, 20, 30, 16, 15, 26];


// array filter example using an anonymous function.
// console.log(numbersDivisibleByFiveOrThree) to see the result
const numbersDivisibleByFiveOrThree = numbers.filter(
    function (banjo) {
        if (banjo % 5 === 0) { return true }
        else if (banjo % 3 === 0) { return true }
        else { return false }
    }
)

// example of filtering an array using a named function
const example2 = numbers.filter(filterNumbers);

function filterNumbers(number) {
    console.log("i'm inside the filter function! wow!", number);
    if (number % 5 === 0) { return true }
    else if (number % 3 === 0) { return true }
    else if (number % 13 === 0) { return true }
    else { return false }
}

// this logs out the output of filtering our numbers using our named function
console.log(example2);

// advanced content: iterating through objects (we don't like doing this it can be a pain)
let myNewObj = {
    car: "aston martin vanquish S",
    coffeeMaker: "mr coffee 3000",
    fruits: {
        banana: "i hate bananas",
        apples: "i love aples"
    }
}

for (const property in myNewObj) {
  console.log(`${property}: ${myNewObj[property]}`);
}
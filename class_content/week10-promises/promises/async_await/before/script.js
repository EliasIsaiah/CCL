// do not edit this code
const likesDrSeuss = true;

const doYouLikeGreenEggs = new Promise((resolve, reject) => {
    if (likesDrSeuss) {
        resolve("I like green eggs!")
    } else {
        reject("I don't like green eggs :(")
    }
})
const doYouLikeHam = new Promise((resolve, reject) => {
    if (likesDrSeuss) {
        resolve("I like ham!");
    } else {
        reject("I don't like ham :(")
    }
})

// edit this code
const main = () => {
    doYouLikeGreenEggs
        .then(message => console.log(message))
        .catch(message => console.error(message))

    doYouLikeHam
        .then(message => console.log(message))
        .catch(message => console.error(message))
}

main();
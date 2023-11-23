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

const main = async () => {
    try {
        let likesGreenEggs = await doYouLikeGreenEggs;
        let likesHam = await doYouLikeHam;
        console.log(likesGreenEggs);
        console.log(likesHam);
    } catch (error) {
        console.error(error);
    }
}

main();
function sleep(milliseconds) { // taken from https://rauschma.github.io/async-examples/blocking.html
    const start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);
const BAKE_TIME = 60;

function bakeCookies(bakeTime, callback) {
    let error = undefined;
    sleep(2000);
    if (bakeTime > 60) error = new Error("that bake time is too long! you'll burn the cookies!");
    callback(error, "🍪🍪🍪");
}

console.log("first console.log!")

function main() {
    console.log("second console.log!")
    bakeCookies(BAKE_TIME, (error, result) => {
        if (error) {
            console.error(error)
        } else {
            bakedCookies = result;
            console.log(`cookies baked! ${bakedCookies}`);
        }
    })
}

main();

console.log("third console.log!")
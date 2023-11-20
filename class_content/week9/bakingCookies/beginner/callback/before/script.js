function sleep(milliseconds) { // taken from https://rauschma.github.io/async-examples/blocking.html
    const start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);
const BAKE_TIME = 60;

function bakeCookies(bakeTime, callback) {
    sleep(2000);
    let error = undefined;
    if (bakeTime > 60) {
        error = new Error("You're gonna burn your cookies 💀");
    }
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
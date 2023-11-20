function sleep(milliseconds) { // taken from https://rauschma.github.io/async-examples/blocking.html
    const start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

const bakeCookies = new Promise((resolve) => {
    sleep(5000);
    resolve("🍪🍪🍪");
});

console.log("first console.log!")

function main() {
    bakeCookies.then(cookies => {
        console.log("second console.log!");
        bakedCookies = cookies
        console.log(`cookies baked! ${bakedCookies}`);
    });
}

main();

console.log("third console.log!")
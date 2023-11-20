function sleep(milliseconds) { // taken from https://rauschma.github.io/async-examples/blocking.html
    const start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

const bakeCookies = () => new Promise((resolve) => {
    sleep(2000);
    resolve("🍪🍪🍪");
});

console.log("first console.log!")

async function main() {
    console.log("second console.log!");
    bakedCookies = await bakeCookies();
    console.log("baked cookies: ", bakedCookies);
}

main();

console.log("third console.log!")
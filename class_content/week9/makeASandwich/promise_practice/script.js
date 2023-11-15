let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

let oven = new Promise((resolve) => {
    setTimeout(() => resolve("🍪🍪🍪"), 5000)
});

oven.then(cookies => {
    console.log(cookies);
    bakedCookies = cookies
});
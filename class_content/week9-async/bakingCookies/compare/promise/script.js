let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

console.log("first console.log!");

const bakeCookies = new Promise((resolve) => {
  setTimeout(() => {
    console.log("second console.log!");
    resolve("🍪🍪🍪");
  }, 2000);
});

bakeCookies.then((cookies) => {
  bakedCookies = cookies;
  console.log(`cookies baked! ${bakedCookies}`);
});

console.log("third console.log!");

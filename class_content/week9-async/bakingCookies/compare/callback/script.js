let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

console.log("first console.log!");

function bakeCookies(callback) {
  setTimeout(() => {
    console.log("second console.log!");
    callback("🍪🍪🍪");
  }, 2000);
}

bakeCookies((result) => {
  bakedCookies = result;
  console.log(`cookies baked! ${bakedCookies}`);
});

console.log("third console.log!");

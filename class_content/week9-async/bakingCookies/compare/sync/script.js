let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

console.log("first console.log!");

setTimeout(() => {
  console.log("second console.log!");
  bakedCookies = "🍪🍪🍪";
}, 2000);

console.log(bakedCookies);

console.log("third console.log!");

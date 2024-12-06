let bakedCookies = "cookies not baked yet";
console.log(bakedCookies);

console.log("first console.log!");

const bakeCookies = new Promise((resolve) => {
  setTimeout(() => {
    console.log("second console.log!");
    resolve("🍪🍪🍪");
  }, 2000);
});

async function main() {
  bakedCookies = await bakeCookies;
  console.log(`cookies baked! ${bakedCookies}`);
}

main();

console.log("third console.log!");

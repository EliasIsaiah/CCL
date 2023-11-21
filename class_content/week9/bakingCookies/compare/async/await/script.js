let bakedCookies = "cookies not baked yet"
console.log(bakedCookies)

const bakeCookies = new Promise(resolve => {
    setTimeout(() => { resolve("🍪🍪🍪") }, 2000)
})

console.log("first console.log!")

async function main() {
    console.log("second console.log!")
    bakedCookies = await bakeCookies
    console.log("baked cookies: ", bakedCookies)
}

main()

console.log("third console.log!")
let bakedCookies = "cookies not baked yet"
console.log(bakedCookies)

const bakeCookies = new Promise(resolve => {
    setTimeout(() => { resolve("🍪🍪🍪") }, 2000)
})

console.log("first console.log!")

function main() {
    console.log("second console.log!")
    bakeCookies.then(cookies => {
        bakedCookies = cookies
        console.log(`cookies baked! ${bakedCookies}`)
    })
}

main()

console.log("third console.log!")
let bakedCookies = "cookies not baked yet"
console.log(bakedCookies)

function bakeCookies(callback) {
    setTimeout(() => { callback("🍪🍪🍪") }, 2000)
}

console.log("first console.log!")

function main() {
    console.log("second console.log!")
    bakeCookies(result => {
        bakedCookies = result
        console.log(`cookies baked! ${bakedCookies}`)
    })
}

main()

console.log("third console.log!")
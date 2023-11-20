function singleDigitSlowAdd(a, b, cb) {
    let error = undefined;
    let params = [a, b];
    let sum = undefined;
    invalidParams = params.filter(param => param > 9);
    if (invalidParams.length > 0) {
        error = new Error(`param(s) too big: ${invalidParams.toString()}. Params must be <= 9`);
    } else {
        sleep(2000);
        sum = a + b
    }
    cb(error, sum)
}

function sleep(milliseconds) { // taken from https://rauschma.github.io/async-examples/blocking.html
    const start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

function main() {
    console.log("i'm on line 21!");
    singleDigitSlowAdd(1, 2, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`result: ${result}`);
        }
    })

    singleDigitSlowAdd(42, 28, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`result: ${result}`);
        }
    })
}
console.log("i'm on line 38!");

main();
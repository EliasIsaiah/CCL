{ // Scope A. Accessible: x
    const x = "x";
    console.log(`x is accessbile: ${x}`);
    { // Scope B. Accessible: x, y
        const y = "y";
        console.log(`both x and y are accessible: ${x}, ${y}`);
        { // Scope C. Accessible: x, y, z
            const z = "z";
            console.log(`x, y, and z are accessible: ${x}, ${y}, ${z}`);
        }
    }
}
const g = "g";
// Outside. Not accessible: x, y, z
function accessibleChecker() {
    let elias = "elias";
    console.log(`g is accessible: ${g}`);
    // console.log("is potatoes accessible?", potatoes);
    
    {
        const apples = "apples";
        // console.log("can I access apples?", apples);
    }
}

function myPotatoes() {
    // const potatoes = "potatoes";
    // console.log("can I see apples?", apples);
    console.log("can I see elias?", elias);
}


myPotatoes();

accessibleChecker();
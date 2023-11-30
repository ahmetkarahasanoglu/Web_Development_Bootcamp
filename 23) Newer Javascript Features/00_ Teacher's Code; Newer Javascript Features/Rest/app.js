// function sum() {
//     return arguments.reduce((total, el) => total + el)  // "arguments" means all the arguments that the user will pass in. But
// }                                                       // it doesn't work with "reduce".

// COLLECT THE "REST" IN NUMS:
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

// REST MEANS "AND THE REST OF PARAMETERS":
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

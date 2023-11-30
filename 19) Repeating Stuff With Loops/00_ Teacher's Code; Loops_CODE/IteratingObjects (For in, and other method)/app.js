// "for...in"  is used for objects; it is used for iterating over objects' elements.

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

// THERE ARE 2 WAYS TO DO THIS. THE FIRST WAY IS: ####
for (let person in testScores) {  // "person" represents the key (for example the person "keenan")
    console.log(`${person} scored ${testScores[person]}`);  // testScores[person] --> represents the value; for example 80.
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

console.log("----------------------------------------------");
// THE SECOND WAY: ####
let total = 0;
let scores = Object.values(testScores); // Object.values is an ARRAY of values, of the "testScores" object.
for (let score of scores) {
    total += score;
}
console.log("Average score is:")
console.log(total / scores.length)

console.log("----------------------------------------------");
let myKeys = Object.keys(testScores); // Object.keys --> is an ARRAY of keys, of the "testScores" object.
console.log(myKeys);
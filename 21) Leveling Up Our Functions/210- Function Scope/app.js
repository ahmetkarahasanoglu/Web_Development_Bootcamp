let totalEggs = 0;

function collectEggs() {
    totalEggs = 6;       // This is not very common in Javascript: updating a global variable from within a function. Usually in functions, we have internal variables. Like: there is a bubble, surrounding the function.
}

console.log(totalEggs);  // 0
collectEggs();
console.log(totalEggs);  // 6


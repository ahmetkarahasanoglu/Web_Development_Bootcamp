let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(true) {
    guess = Math.floor(Math.random() * 10);
    if (guess === targetNum) {
        console.log(`CORRECT! Guessed: ${guess}. Target was: ${targetNum}`);
        break;
    }
    else {
        console.log(`Guessed ${guess} - Incorrect!`);
    }
}

// // THE BELOW IS A DIFFERENT VERSION of the above code; I wrote it. The if-else block's are interchanged. The break keyword is again on the SUCCESS ("Correct!") case.
// let targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(true) {
//     guess = Math.floor(Math.random() * 10);
//     if(guess !== targetNum) {
//         console.log(`Guessed ${guess} - Incorrect!`);
//     }    
//     else {
//         console.log(`CORRECT! Guessed: ${guess}. Target was: ${targetNum}`);
//         break;
//     }   
// }


// ----------------------------------------------------------
//(teacher coded):
let input = prompt("Hey, say something!");
while (true) {
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me!") {
        break;
    }    
}
console.log("Ok, you win. (copying stopped)");
// ((↑)teacher coded)
// // MY CODE BELOW. IT HAS PROBLEMS, MISSING PARTS.    **** Refactored Code is in "Teacher's Code --> While Loop --> Guessing Game Refactored
// let max = prompt("Welcome. Enter your max number");
// let min = 1;
// let targetNumber = Math.floor(Math.random() * (max - min + 1)) + min ;

// let guess = prompt("Enter your first guess");
// let count = 0;
// while(true) {    
//     count++;
//     if (guess === "quit") {  // input olarak "quit" yazdığımda sonlandırma özelliği
//         break;
//     }    
//     if (guess === targetNumber) {
//         console.log(`It took you ${count} times to find the number`);
//         break;
//     }
//     else if (guess < targetNumber) {
//         guess = prompt("Too low. Try again");
//     }
//     else if (guess > targetNumber) {
//         guess = prompt("Too high. Try again");
//     }
// }
//----------------------------------------------------------------------
// I MADE MODIFICATIONS TO THIS CODE. THERE IS PROBLEM WHEN ENTERING "QUIT" FOR THE THIRD INPUT THAT IT ASKS US IN THE BROWSER. THE VERSION IN THE TEACHER'S CODE FOLDER ALSO HAS FLAWS.
let maximum = prompt("Enter the maximum number!");
if (maximum !== "quit") {
    maximum = parseInt(maximum);
    while(!maximum || maximum<0) {  // !maximum -->  means falsy expression, like: NaN, null, 0
    maximum = parseInt(prompt("Invalid entrance! Please enter a valid number for the maximum number!"));
    }
    const targetNum = Math.floor(Math.random() * maximum) + 1;
    // console.log(targetNum);

    let guess = prompt("Enter your first guess!");
    if (guess !== "quit") {
        guess = parseInt(guess);
        while(!guess || guess<0) {
        maximum = parseInt(prompt("Invalid entrance! Please enter a valid number for your guess!"));
        }
        let attempts = 1;
        while(guess !== targetNum) {    
            attempts++;
            if(guess > targetNum) {
                guess = parseInt(prompt("Too high! Enter a new guess:"));
            }else {
                guess = parseInt(prompt("Too low! Enter a new guess!"));
            }    
        }
        console.log(`YOU GOT IT, correct number is ${targetNum}. It took you ${attempts} guesses to find the number`);

    }else if (guess === "quit") {
        console.log("Quitted by the user (when asking the guess)");
    }
}else if(maximum === "quit"){
    console.log("Quitted by the user (when asking the maximum)");
}
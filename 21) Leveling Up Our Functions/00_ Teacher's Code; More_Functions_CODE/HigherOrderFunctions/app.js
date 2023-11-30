// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie);

// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

console.log("---------------------------------------------");


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc(0,18);
const isAdult = makeBetweenFunc(19,65);
const isSenior = makeBetweenFunc(65,100);

isChild(10);  // true 
isSenior(40); // false
isSenior(90); // true
isAdult(90);  // false
isAdult(50);  // true

makeBetweenFunc(0,18)(10); // true  (this syntax also works. [I figured out by myself])

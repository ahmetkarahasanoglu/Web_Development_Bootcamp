// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;       // This is not very common in Javascript: updating a global variable from within a function. Usually in functions, we have internal variables. Like: there is a bubble, surrounding the function.
}
console.log(totalEggs);  // 0
collectEggs();
console.log(totalEggs);  // 6    (value changed because totalEggs was defined as 'LET totalEggs' on the most above(↑), not as 'const')

// --------------------------------------------------

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);  // Great Blue Heron
}
console.log(bird);  // Scarlet Macaw
birdWatch();
console.log(bird);  // Scarlet Macaw   (value didn't change because bird was defined as 'CONST bird' at top of this block, not as 'let')

// --------- Or, Let's Remove the "const bird = 'Great Blue Heron " :
const bird2 = 'Scarlet Macaw';
function birdWatch2() {
    // // const bird2 = 'Great Blue Heron'
    console.log(bird2);  // Scarlet Macaw
}
birdWatch2();
// ---------------------------------------------------

// ==============
// BLOCK SCOPE
// ==============
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!'
}
console.log(radius);
// console.log(PI);           // "Error: PI is not defined"
// console.log(msg);          // "Error: msg is not defined"

for (let i = 0; i < 5; i++) {
    let msg2 = "ASKLDJAKLSJD";     // var msg2  şeklinde tanımlarsak msg2'ye fonksiyonun dışından da erişebiliyoruz.
    console.log(msg2);
}
// console.log(msg2);         // "Error: msg2 is not defined"
// console.log(i);            // "Error: i is not defined"


// ==============
// LEXICAL SCOPE
// ==============
console.log("--------------------------------");
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {  // We can reach the variables of parent functions. (but it doesn't work the other way).
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}
bankRobbery();
// inner();   - will not work.

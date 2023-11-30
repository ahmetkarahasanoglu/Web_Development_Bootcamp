const isEven =  function (num) { // regular function expression
    return num % 2 === 0;
}
const isEven2 = (num) => { // arrow function with paranthesis around parameter
    return num % 2 === 0;
}
const isEven3 = num => { // no paranthesis around the parameter
    return num % 2 === 0;
}
const isEven4 = num => (  // implicit return  (implicit return only works with arrow function; it doesn't work on typical function expression)
    num % 2 === 0
);
const isEven5 = num => num % 2 === 0; // one-liner implicit return (we got rid of the paranthesis here)

// -----------------------------------------------------------------------------------------------


// const rollDie = () => {                         // If we're gonna use implicit return (which is omitting the "return" keyword); we must use normal parentheses, instead of curly paranthesis [shown in the below block].
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1    // NOTE: Implicit return only works if there is one and only one expression in the body of the function. For example; if there was another line, right below this line, saying like: "let msg = 'asdf' "  then the implicit return wouldn't work. We would get error.
)
const person = {
    firstName   : "Mick" ,
    lastName    : "Jagger" ,
};

// There are 2 ways to access data that is inside of an object:
console.log(person.firstName);     // "Mick"
console.log(person["firstName"]);  // "Mick"

// ---------------------------
const years = {
    1999 : "Good" ,  // In objects, all keys are converted to strings. For example 1999. (except for symbols, which we haven't covered yet.)
    2000 : "Bad"
};

let birthYear = "1999";
console.log(years[birthYear]);  // "Good" (the output)
console.log(years.birthYear);   // undefined.   Doesn't work with dot usage.

console.log(years["1999"]);  // "Good" (the output).   We can reach like this; just like reaching an item of an array. Here, an important point is: in the object, the value 1999 is converted to string (not a number or another type); so, 1999 became similar to just like a key of "color".
// console.log(years.1999);  // this doesn't work, gives an error.

// ---------------------------
const dumbdumb = {
    true: "dat" ,
    null: "asdf"
};

console.log(dumbdumb.true);     // dat
console.log(dumbdumb["true"]);  // dat

console.log(dumbdumb.null);    // asdf
console.log(dumbdumb["null"]); // asdf

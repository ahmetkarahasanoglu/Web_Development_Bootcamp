let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// SLICE:
console.log(colors.slice());  // Gives us a copy of colors array.
console.log(colors.slice(4));  // ["blue", "indigo", "violet"]

let coolColors = colors.slice(3); 
console.log(coolColors); // ["green", "blue", "indigo", "violet"]

let warmColors = colors.slice(0, 3);
console.log(warmColors); // ["red", "orange", "yellow"]

console.log(colors.slice(-2)); // Gives us last two elements: ["indigo", "violet"]

console.log(colors); // original array remains unchanged.

// ------------------------------------------------------------------------------------------

// SPLICE: takes 3 parameters (x,y,z) [or, z can be multiple items to be inserted; use coma between them]  x is which index to be inserted, y is how many elements to be removed after the x, z is the new element (or can be multiple elements) to be inserted.
colors.splice(5,1,"Aaa");
console.log(colors); // ['red', 'orange', 'yellow', 'green', 'blue', 'Aaa', 'violet']


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months); // ["Jan", "Feb", "March", "April", "May"]

// NOTE: Original array changes with every splice command (I think).

// ------------------------------------------------------------------------------------------

// SORT() Method: It converts all the items to string, then sorts them by comparing UTF-16 code values. So this is NOT A RELIABLE numeric sort.
const months_ = ['March', 'Jan', 'Feb', 'Dec'];
months_.sort();
console.log(months_); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);  // [1, 100000, 21, 30, 4]   (not reliable)
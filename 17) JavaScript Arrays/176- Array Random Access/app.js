// NOTE: For strings, when we try to change one letter of a string, we actually cannot modify the original string. Ex:
let firstName = "Ahmet";
firstName[0] = "w";
console.log("The first name is: " + firstName); // Ahmet .   the original firstName variable's content cannot be changed.

// BUT FOR ARRAYS, WE CAN MODIFY THE ORIGINAL ARRAY:
let colors = ["rad", "orange", "green", "yellow"];

colors[0] = "red"; // we modified it.

colors[2] = "yellow";
colors[3] = "green";

colors[4]; // undefined
colors[4] = "blue";
console.log(colors); // ["red", "orange", "yellow", "green", "blue"];

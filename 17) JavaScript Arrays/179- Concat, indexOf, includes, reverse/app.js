// concat - merge arrays
// includes - look for a value
// indexOf - just like string.indexOf
// join - creates a string from an array
// reverse - reverses an array
// slice - copies a portion on an array
// splice - removes/replaces elements
// sort - sorts an array

// CONCAT:
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3); // ["a", "b", "c", "d", "e", "f"]

// INCLUDES:
result = array3.includes("e");  
console.log(result);  // true

// INDEXOF:
console.log(array3.indexOf("d"));  // 3
console.log(array3.indexOf("asdfasdfas"));  // -1
// When there are two same elements in the array:
array3.push("b"); // we added one more element that is same with one of the present ones.
console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f', 'b']
let index = array3.indexOf("b");
console.log(index); // 1 . Because it only considers the first position that it finds the element at.
array3.pop(); // I erased the lastly added "b" at the end.

// REVERSE:  (Reverse is a destructive method, IT CHANGES THE ORIGINAL ARRAY !!!)
const theReversed = array3.reverse();
console.log(theReversed);  // ['f', 'e', 'd', 'c', 'b', 'a']
// Keeping a copy of original array with slice() method [slice() method returns a copy of the array, not affected from reverse method's changing of the original array]:
const array = ["a", "b", "c", "d", "e", "f"];
const copyOfArray = array.slice();
console.log(array);  // ["a", "b", "c", "d", "e", "f"]
const reversed = array.reverse();
console.log(array);  // ["f", "e", "d", "c", "b", "a"]
console.log(array[0]);  // "f"
console.log(copyOfArray);  // ["a", "b", "c", "d", "e", "f"]
console.log(reversed);  // ["f", "e", "d", "c", "b", "a"]
const secondCopyOfArray = array.slice();
const reversedTheSecond = array.reverse();
console.log(array);  // ["a", "b", "c", "d", "e", "f"]
console.log(secondCopyOfArray);  // ["f", "e", "d", "c", "b", "a"]
console.log(copyOfArray);  // ["a", "b", "c", "d", "e", "f"]
console.log(reversed);  // ["a", "b", "c", "d", "e", "f"]
console.log(reversedTheSecond);  // ["a", "b", "c", "d", "e", "f"]
// '--> here, "reversed" and "reversedTheSecond" points to the same place in memory.
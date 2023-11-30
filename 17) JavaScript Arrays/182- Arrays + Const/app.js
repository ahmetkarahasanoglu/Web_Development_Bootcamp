const PI = 3.1415;
// PI += 1;  // Gives error: Assignment to constant variable.

// WHY CONST CAN BE USED FOR ARRAYS:
const nums = [1, 2, 3];  // ↓ We use const. The shell remains the same, but the content can change. The reference to the array does not change; the address of the array remains same.
nums.push(4); // we had used const, but we can change the content of array, no problem.
console.log(nums); // [1, 2, 3, 4]

nums = [1, 2, 3, 4]; // !!!! Error: Even completely different items, we cannot assign this array to the variable "nums". Because in javascript's eyes this new array is a completely different array. In memory, they have different address.






// WE CAN ADD ITEMS to the constant-defined array, but we cannot assign a completely different array to that variable:
const myEggs = ["brown", "brown"];
myEggs.push("purple");  // ["brown", "brown", "purple"]
console.log(myEggs);

myEggs[0] = "green";  // ["green", "brown", "purple"]
console.log(myEggs);

myEggs = ["blue", "pink"]; // !!!! Error: Assignment to constant variable.

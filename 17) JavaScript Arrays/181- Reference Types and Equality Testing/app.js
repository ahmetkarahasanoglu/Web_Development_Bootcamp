console.log("hi" === "hi");  // true
console.log(["hi", "bye"] === ["hi", "bye"]);  // false. Because references in memory are different.
console.log([1] === [1]);  // false.
console.log([1] == [1]);  // false.
console.log([] == []);  // false.

let nums = [1, 2, 3];
let numsCopy = nums;
console.log(nums);
console.log(numsCopy);
nums.push(4);
console.log(nums); // it has 4 in the end;  [1, 2, 3, 4]
console.log(numsCopy); // this also has 4 in the end; [1, 2, 3, 4]
numsCopy.pop();
console.log(nums);  // [1, 2, 3]
console.log(numsCopy);  // [1, 2, 3]

console.log(nums === numsCopy);  // true

let greeting = "hi";
let salutation = "hi";
console.log(greeting === salutation);  // true.
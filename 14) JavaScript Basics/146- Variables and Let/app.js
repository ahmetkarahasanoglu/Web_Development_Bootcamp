let numHens = 5;
let numRoosters = 1;

totalChickens = numHens + numRoosters;

numHens = numHens + 1;
console.log(numHens); // 6

console.log(totalChickens); // 6 (not 7) . IMPORTANT NOTE: The command lines are like a snapshot in that moment. The variables are not automatically synchronized in the future. Just like in this example.

totalChickens = numHens + numRoosters;  //  (now I synchronized manually)
console.log(totalChickens); // 7
// My Notes From The Video "What On Earth Are Prototypes"

const arr = [1,2,3];
console.log(arr);

arr.sing = function() {
    console.log("LA LA LA LA!");
}
arr.sing();

arr.push(5);  // push() function is inherently defined in prototype. Prototypes are template objects in objects.
console.log(arr);

console.log(arr.includes(5) );

const body = document.body;
console.dir(body);

console.log(Array.prototype);
console.log(String.prototype);


String.prototype.grumpus = () => console.log("Go away!")
String.prototype.grumpus();  // "Go away!"
const cat = "Blue";
cat.grumpus();  // "Go away!"  // Every string that I create will have access to a function 'grumpus()'. Because we defined it to the prototype at 3 lines above(↑).

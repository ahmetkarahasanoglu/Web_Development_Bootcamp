let myArray = ["a", "b", "c", "d", "e", "f"];
// myArray.splice(1, 1);
// console.log(myArray);

for(let element of myArray) {
    console.log(`${myArray.indexOf(element)}: ${element}`);
}
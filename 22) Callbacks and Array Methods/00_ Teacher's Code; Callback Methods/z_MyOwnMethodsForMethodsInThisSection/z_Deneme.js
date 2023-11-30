// "forEach" FUNCTION AND MY OWN SUBSTITUTE FOR IT:
const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function(n) {
    console.log(n*n);
});

// My Own Substitute For "forEach":
console.log("My Own Substitute Method for 'forEach' function")
const func = function(array) {
    for(let n of array) {
        console.log(n*n);
    }
}

func(nums);
console.log("----------------------------------------")
// MAP FUNCTION AND MY OWN SUBSTITUTE:
const texts = ["rofl", "lol", "omg", "ttyl"];

const caps = texts.map(function(t){
    return t.toUpperCase();
})
console.log(texts),
console.log(caps);

// My Own Substitute For "map()":
console.log("My Own Substitute For 'map()':");
const capitalize = function(array) {    
    const capitalsArray = [];
    for(element of array) {        
        capitalsArray.push(element.toUpperCase());
    }
    return capitalsArray;
}
console.log(capitalize(texts));
console.log("---------------------------------------")
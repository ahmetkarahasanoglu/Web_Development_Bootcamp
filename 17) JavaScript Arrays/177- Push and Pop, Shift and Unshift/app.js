let movieLine = ["tom", "nancy", "pablo"]
console.log("In the beginning, the movieLine is: ");
console.log(movieLine);

// PUSH:
movieLine.push("jack");
console.log("One item has been added to the end. The movie line: ");
console.log(movieLine);

// POP:
movieLine.pop();
console.log("One item deleted from the end. The movie line: ");
console.log(movieLine);

// SHIFT (deleting from the beginning):
movieLine.shift();
console.log("One item deleted from the beginning. The movie line: ");
console.log(movieLine);

// UNSHIFT (adding to the beginning);
movieLine.unshift("simon");
console.log("One item added to the beginning. The movie line: ");
console.log(movieLine);
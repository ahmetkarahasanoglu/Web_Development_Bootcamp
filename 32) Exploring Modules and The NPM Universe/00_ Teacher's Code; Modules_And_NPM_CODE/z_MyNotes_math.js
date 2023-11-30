const add = (x, y) => x + y;
const square = x => x * x;
const PI = 3.14159;

// module.exports = "HELLOOOOO";   // [such a thing is not used, we're just showing what it can do]. When I run z_MyNotes_app.js on Terminal [ > node z_MyNotes_app.js ], the terminal prints "HELLOOOO"; owing to the line of 'console.log(math)' in z_MyNotes_app.js



const math = {
    add: add,
    square: square,  // In terminal, when we write [ > node z_MyNotes_app.js ], terminal prints '81' ; owing to the line 'console.log(math.square(9))' in z_MyNotes_app.js.
    PI: PI
}
module.exports = math;


// This (↓) is long and clunky form of the above block.
// module.exports.square = square;  
// module.exports.add = add;        
// module.exports.PI = PI;



// Another Option [clunky, I think]:
// Instead of writing these 2 blocks above, there is another option: we can directly 
// add the functions and properties at the top of this page to the 'module.exports' object; like this: 
// (this should rather be written at the top of this page, on the place of the top block):
/* module.exports.add = (x, y) => x + y;
   module.exports.PI = 3.14159;
   module.exports.square = x => x * x;
*/
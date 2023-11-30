const square = x => x * x;
const add = (x, y) => x + y;
const PI = 3.14159;


exports.square = square;
exports.PI = PI;

// =========================
// module.exports.square = square;  // 'module.exports' is an object. We're adding new methods to that object.
// module.exports.add = add;        
// module.exports.PI = PI;


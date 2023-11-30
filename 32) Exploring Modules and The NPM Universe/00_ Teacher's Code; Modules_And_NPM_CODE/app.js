const { PI, square } = require('./math');

const cats = require('./shelter')  // Inside 'shelter' folder; Node will automatically go find the 'index.js' in there.
// console.log(PI)

// console.log(square(9))
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)

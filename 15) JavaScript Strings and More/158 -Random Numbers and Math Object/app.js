// MATH OBJECT: Contains properties and methods for mathematical constants and fuctions.

Math.PI  // 3.141592653589793
Math.round(4.9)  // 5
Math.abs(-456)  // 456
Math.pow(2,5)  // 32
Math.floor(3.99999)  // 3

Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity

// RANDOM NUMBERS:
// Math.random() gives us a random decimal between 0 and 1 (non-inclusive):
Math.random();  // 0.145626326252

//HOW TO GENERATE A RANDOM NUMBER BETWEEN TWO SPECIFIC NUMBERS:
Math.floor(Math.random() * (max - min + 1)) + min
// There is only 1 property of string, which is: thing.length . And there are lots of methods of string, for example: thing.charAt(0) , thing.search() , thing.replace() , thing.replaceAll()

// CASING:
let msg = 'I am king';
let yellMsg = msg.toUpperCase(); // 'I AM KING'
let angry = 'LeAvE mE aLoNe!';
angry.toLowerCase(); // 'leave me alone!'
// the value in angry is unchanged
angry; // 'LeAvE mE aLoNe!'

// TRIM:
let greeting = '   leave me alone   ';
greeting.trim() // 'leave me alone'

// Methods one after another (chain):
greeting.trim().toUpperCase();
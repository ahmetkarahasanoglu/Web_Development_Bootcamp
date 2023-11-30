const math = require('./z_MyNotes_math.js');  
// '--> If we only wanted to use PI and square(); we can destructure 'math' on this line like this:  
// const { PI, square } = require('./z_MyNotes_math.js');    //  In that case, when we execute the functions down below on this file here, we must write like this:  console.log(PI);  and  console.log(square(4));

console.log(math);
console.log(math.square(9));
console.log(math.add(3,4));
console.log(math.PI);

// An Array that has objects as its items:
const shoppingCart = [
    {
        product : "Jenga Classic",
        price   : 6.88,
        quantity: 1
    },
    {
        product : "Echo Dot",
        price   : 29.99,
        quantity: 3
    },
    {
        product : "Fire Stick",
        price   : 39.99,
        quantity: 2
    }
]
console.log(shoppingCart);
console.log(shoppingCart[2].price);  // 39.99
// -------------------------------------------------------------------

// An Object that has: properties, an array, and an object:
const student = {
    firstName   : "David" ,
    lastName    : "Jones" ,
    strengths   : ["Music", "Art"] ,
    exams: {
        midterm: 92 ,
        final: 88 
    }
}
console.log(student);
console.log(student.strengths[1]);  // Art
console.log(student.exams.midterm); // 92
// -------------------------------------------------------------------

// We use backtick character to make this.
`I counted ${3 + 4} sheep`; // I counted 7 sheep.

// Another Example:
let product = "Apple";
let price = 2.25;
let qty = 5;
let summary = `You bought ${qty} ${product}s. Total price is: ${price * qty}`;  // You bought 5 Apples. Total price is: 11.25

// we can even call a method inside the curly brackets: `${product.toUpperCase()}`
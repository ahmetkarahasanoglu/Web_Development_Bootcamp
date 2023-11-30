// helpful source:  react - updating arrays in state:  https://react.dev/learn/updating-arrays-in-state

// NOTE: We need to use setSomething() function that comes from the useState() method. (for the methods on this page.)

// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
  { id: 1, product: "HDMI Cable", price: 4 },
  { id: 2, product: "Easy Bake Oven", price: 28 },
  { id: 3, product: "Peach Pie", price: 6.5 },
];

// ADDING TO AN ARRAY:
[...shoppingCart, { id: 4, product: "Coffee Mug", price: 7.99 }];

// REMOVING AN ELEMENT:
shoppingCart.filter((item) => item.id !== 2);

// UPDATING ALL ELEMENTS IN AN ARRAY:
shoppingCart.map((item) => {
  return {
    ...item,                              // '...item' means for example:    id: 1, product: "HDMI Cable", price: 4
    product: item.product.toLowerCase(),  // we're overwriting 'product:   '
  };
});

// MODIFYING A PARTICULAR ELEMENT IN AN ARRAY:
shoppingCart.map((item) => {
  if (item.id === 3) {
    return { ...item, price: 10.99 };
  } else {
    return item;
  }
});

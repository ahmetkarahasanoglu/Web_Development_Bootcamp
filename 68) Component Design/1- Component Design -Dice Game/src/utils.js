/** Gets random integer: [1..6]. */

function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

/** Get n rolls => [num, ...]. */

function getRolls(n) {                           // this function returns sth like: [4,6,3] or [2,3,5,1,4]
  return Array.from({ length: n }, () => d6());  // (the second argument applies map function to each element of the n-length array.
}

/** Get sum of nums. */

function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };

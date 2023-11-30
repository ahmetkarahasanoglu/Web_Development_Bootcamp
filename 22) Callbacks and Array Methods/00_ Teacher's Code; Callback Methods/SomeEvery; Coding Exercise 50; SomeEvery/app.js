/* Some/Every Exercise

Define a function called allEvens that accepts a single array of numbers. 
If the array contains all even numbers, return true.  Otherwise, return false.  
Use some or every to help you do this!  (only one of them is actually useful here)

    allEvens([2,4,6,8]) //true
    allEvens([1,4,6,8]) //false
    allEvens([1,2,3]) //false


HINT:
Use the 'every' method to check if every element in the array meets a certain condition.
Use the modulus operator '%' to check if a number is even.
Define a function named 'allEvens' that accepts one parameter, an array of numbers.
Call the 'every' method on the array and pass a function to it as an argument, which 
returns true if the element is even and false otherwise.
If every element in the array returns true, then the 'every' method will return true 
and the whole allEvens function should return true as well in that case. Otherwise, 
the every method will return false which we should also return from the allEvents function.
*/

function allEvens(arr) {
    return arr.every(function (num) {  // the function here is a parameter; it's the syntax of 'every' method. ('some' method has the same syntax too)
      return (num%2 === 0);            // the result of inside the paranthesis can be: 'true' or 'false'.
    });
  }

/* OTHER FORMS OF SOLUTION:

*** SOLUTION 2: ***

    const allEvens = function (arr) {
      return arr.every(num => num % 2 === 0);
    }

*** SOLUTION 3: ***
(Concise full arrow function syntax approach):

    const allEvens = arr => arr.every(num => num % 2 === 0);

*/
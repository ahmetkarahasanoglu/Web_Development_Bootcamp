const firstLi = document.querySelector("li");
// To use removeChild, first we need to get to the parent element and then do the removeChild:
const ul = firstLi.parentElement;
ul.removeChild(firstLi); // or, instead of firstLi, we could write:  document.querySelector("li")


const firstBold = document.querySelector("b");
// firstBold.parentElement.removeChild(firstBold); // this is long, absurd, not useful. Instead of removeChild, we can use remove():
                                                   // removeChild is an older method. remove() is newer.

firstBold.remove(); // we directly removed it. This is more useful.
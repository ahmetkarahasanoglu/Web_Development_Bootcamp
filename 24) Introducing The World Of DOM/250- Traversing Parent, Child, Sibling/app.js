const firstBold = document.querySelector("b");
console.log(firstBold); // "b"  (Silkie)
console.log( firstBold.parentElement ); // "p"
console.log( firstBold.parentElement.parentElement ); // body
console.log( firstBold.parentElement.parentElement.parentElement ); // html

const paragraph = firstBold.parentElement;
console.log( paragraph.childElementCount ); // 8
console.log( paragraph.children ); // returns an HTMLCollection that consists of 8 elements. It does not have array methods. But it has indices, and it is iterable.
console.log( paragraph.children[0] ); // "b"  (Silkie)

const firstSquareImage = document.querySelector(".square");
console.log( firstSquareImage.parentElement ); // body
console.log( firstSquareImage.children); // no element (html collection; length:0)

console.log( firstSquareImage.nextSibling ); // text. (this text is a return character [ \n ]. Browser read it like this. We don't need to 
                                             // worry about it. It is not an html element; it is a DOM node. We don't really use this "nextSibling". Instead 
                                             // we generally use the "nextElementSibling"
console.log( firstSquareImage.previousSibling ); // text.
console.log( firstSquareImage.nextElementSibling ); // img (which happens to be the next image)
console.log( firstSquareImage.previousElementSibling ); // p
// Things like ID, class, title, href, src, type  are considered attribtues.
// An href on an anchor tag, a src on an image, the type of an input   are attributes.

document.querySelector("#banner").id = "whoops"; // we change the ID attribute of it to whoops.
document.querySelector("#whoops").id = "banner"; // we returned to its old value.

console.log( document.querySelector("#banner").src ); // we view the src of it.


console.log( document.querySelector("a").title ); // we view the title of "a".
console.log( document.querySelector("a").href ); // we view the href of "a" (anchor tag):  http://127.0.0.1:5500/wiki/List_of_chicken_breeds

console.log( document.querySelector("a").getAttribute("href")); // /wiki/List_of_chicken_breeds  (similar to above line's output, but http:/... part in the beginning is not present here)

console.log( document.querySelector("a").setAttribute("href", "http://www.google.com")); // make the href's value "http://www.google.com".


const input = document.querySelector("input[type='text']"); // select the INPUT of which type is "text".
console.log(input);
console.log(input.type); // 'text' (the output we get)
input.type = "password"; // the text input became a password input.
input.type = "color"; // became a color input; that we can select a color.
input.setAttribute("type", "text"); // became a text.
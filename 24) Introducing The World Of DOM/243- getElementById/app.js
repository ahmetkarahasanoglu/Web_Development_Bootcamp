console.log(document.getElementById("chicken")); // we get "null" because there is no such ID in HTML.

console.log(document.getElementById("banner")); // shows the properties of the image with the ID "banner" (img id, src, alt etc.)
const banner = document.getElementById("banner");
console.dir(banner); // we see the properties of "banner"

const toc = document.getElementById("toc");
console.dir(toc); // we see the properties of the "div" with the ID "toc". Example:  childElementCount: 3

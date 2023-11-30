const h1 = document.querySelector("h1");
console.log(console.dir(h1)); // to view h1's all attributes




const p = document.querySelector("p"); // selects the first paragraph
// innerHTML:
console.log(p.innerHTML); // shows the text in the HTML file, including tags and link addresses "<a href=... ", anchors "a" and enter charachters ( \n )
// textContent:
console.log(p.textContent); // shows the text with the enter characters ( \n ) that the HTML file's text has.
// innerText:
console.log(p.innerText); // shows only the text that we see in the webpage.



// p.innerText = "lololololololol";  // böyle yazarsam, webpage'de paragrafın içeriği "lololol..." olur. (index.html dosyasının içeriği değişmez ama)



// let allLinks = document.querySelectorAll("a");  // we selected all the anchor tags
// for(let link of allLinks) {
//     link.innerText = "I AM A LINK!";   // all the links in webpage says (writes) "I AM A LINK!". Their text content is overwritten with "I AM A LINK".
// }


// h1.innerHTML = "<i>This is italic text</i>";   // Writes: 'This is italic text' in the h1.

// h1.innerHTML += "<sup>This is superscript</sup>"  // superscript olarak yazı yazar (üstüne yazar; üssü 2 derkenki gibi; mesela, örnek verdik.)

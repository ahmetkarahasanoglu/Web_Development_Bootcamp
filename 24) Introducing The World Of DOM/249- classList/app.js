const h2 = document.querySelector("h2");
console.log( h2.getAttribute("class") ); // "null" (currently there is no class assigned to it)

h2.setAttribute("class", "purple"); 
console.log( h2.getAttribute("class") ); // "purple"

h2.setAttribute("class", "border"); // now the class is overwritten. It became border, but I lost purple.
                                    // to fix this, we can do this:
let currentClasses = h2.getAttribute("class"); // ("border")
h2.setAttribute("class", `${currentClasses} purple`); // the way to have more than one class in css is using a space between them (there is a space between 
                                                      // currentClasses and purple).
console.log( h2.getAttribute("class") ); // "border purple" (there are two classes applied)

// THERE IS A BETTER WAY TO WORK WITH CLASSES; CLASSLIST:
h2.classList
console.log(h2.classList); // border, purple (as a list)
h2.classList.add("line_through");
h2.classList.remove("purple");
console.log( h2.classList.contains("purple")); // false
h2.classList.toggle("purple");
h2.classList.toggle("italic");
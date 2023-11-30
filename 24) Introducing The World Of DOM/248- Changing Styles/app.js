const h1 = document.querySelector("h1");
console.log(h1.style);

console.log(h1.style.color);  /* we gave h1 a color in app.css to see if we can view the color attribute via writing 
                                 h1.style.color in app.js --> output in browser console will be "" empty string (nothing). 
                                 Because we cannot view it by h1.style.color. But the things I write in 'style' attribute inside the h1 tag in HTML 
                                 file can be seen via h1.style.color */
 
 const h2 = document.querySelector("h2"); // selects the first h2.
 console.log(h2.style.color);             /* this time we can view the color is red on console. [info: but later 
                                             in below block here, we overwrote it with 'magenta' color] (yeah, we view it 
                                             'red' on console, because we made it red in HTML file -> style attribute in the h2.
                                             but using style tags of HTML is not a good idea generally; using
                                             CSS is the proper way. Because in CSS we can apply one value to multiple 
                                             attributes (to the attributes we see in HTML). */
                            

// But we can use "style" attribute to change those colors. But we couldn't view it above on this page. So, it cannot
// be viewed, but it can be changed:
 h2.style.color = "magenta";

 h1.style.fontSize = "3em";      // we can change fontSize also.
 h1.style.border = "2px solid pink";



 const allLinks = document.querySelectorAll("a");  // we selected all anchors
 for (let link of allLinks) {  // we're changing properties of all anchors together (here below)
    link.style.color = "green";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
 }

 console.log(h2.style.fontSize); // it doesn't show us (in browser's console). shows empty string (nothing)

 console.log(window.getComputedStyle(h2).fontSize); // this shows the calculated attribute by the browser 
 console.log(window.getComputedStyle(h2).color);
 console.log(window.getComputedStyle(h2).fontFamily);
 console.log(window.getComputedStyle(h1).fontFamily);
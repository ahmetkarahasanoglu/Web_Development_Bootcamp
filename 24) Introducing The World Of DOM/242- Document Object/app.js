console.log(document); // shows the layout of html, line by line; head, body, html

console.dir(document); // shows all attributes of the document; location, URL, activeElement, anchors...
                       // Important point: we view the console.dir(document); we see objects, and there are more objects inside these objects. 
                       // For example: "all" has objects inside, suchas as meta, title, link, body, h1, img, p, b. And also b has lots of objects inside it.


// Example for DOM Manipulation:
document.title = "DOM Introduct." // we changed the title by DOM Manipulation

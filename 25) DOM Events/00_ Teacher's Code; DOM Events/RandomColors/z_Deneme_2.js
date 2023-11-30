const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function(){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if( r<50 || g<50 || b<50 ) {            // (I wrote this line) [condition is if the background color is a dark color].
        document.body.style.backgroundColor = "white";    
    } 
})

let r;
let g;
let b;

const makeRandomColor = function() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${b}, ${b})`;
}

// This is a Constructor Function...
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;  // there is no return value at the end (in constructor functions).
}	

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************
// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;   // If we write the first block code on top of this file, to the browser console, and after that, there, if we write  'new Color(100, 150, 200)'  we will be shown an object. Under the object, -> under the proto, we will see   constructor: f Color(r,g,b)  [--> this is about 2nd item on this 4-item list we're talking about]. This allows us that we can add properties and methods to the prototype.
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function() {  // This is the way how we add a function to prototype. Here, we're defining rgb function to the prototype. Because this cannot be done inside the Constructor Function Description (top of this file) in Javascript.
	const { r, g, b } = this;  // this is 'destructuring'. We do this so that we can use a short-hand syntax on below line.  Destructuring means:  r = this.r  etc
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

document.body.style.backgroundColor = color1.rgba(0.6);  // we used alpha channel ('a') to make it transparent a little.
/* In Factory Functions, which we saw on the last video, when I compare two 
functions that have same name; which are under two different objects:

firstColor.hex === black.hex  // the result is 'false'. (pay attention: we're not using paranthesis here for hex function)

But if I compare two same functions that belongs to a String:
"hi".slice === "bye".slice  // the result is 'true'. Because these two functions are defined in the prototype of those Strings.
*/
// ----------------------------
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;  // there is no return value at the end (in constructor functions).
    this.yell = function (){ 
        console.log("AAAAAAAHH!")
    }
}	
 
Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color1 = new Color(40, 255, 60);
const color2 = new Color(205, 90, 160);

console.log( color1.yell === color2.yell );  // false.  'yell' is a function inside the Constructor Function 'Color'. So these two 'yell' functions belong to two different object. So the two functions are not equal. [Pay attention: we didn't use paranthesis '()' for yell function; we're not executing them, we're just comparing the references]
console.log( color1.hex === color2.hex );    // true.   'hex' is a function we had put in the prototype of Color (above); thats why these two 'hex' functions are same (equal).

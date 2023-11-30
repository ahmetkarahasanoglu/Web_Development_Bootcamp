// *** FACTORY FUNCTIONS ***

// This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;  // 'this' refers to the left of the dot, which is 'color' (on the above line).  |||  Syntax on this line is 'destructuring'. We wrote this line, to use a short-hand writing on the below line. Otherwise on the below line we would have to use  `rgb(${this.r}, ${this.g}, ${this.b})`;  . So,  const { r, g, b } = this;  means something like:  r = this.r ,  g = this.g ,  b = this.b
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)  // Colt copy-pasted this from Stackoverflow.com
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

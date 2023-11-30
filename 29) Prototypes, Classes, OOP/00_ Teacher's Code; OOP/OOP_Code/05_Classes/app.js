class Color {
	constructor(r, g, b, name) {  // the constructor is executed whenever we create a new object from Color class.
		this.r = r;				  // these will be the normal properties of a new color object. We can also add function here. Also, we can add a property like:  this.specification = "Nice";
		this.g = g;
		this.b = b;
		this.name = name;
	}
	innerRGB() {				// These methods outside the constructor will be placed in the prototype.
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');


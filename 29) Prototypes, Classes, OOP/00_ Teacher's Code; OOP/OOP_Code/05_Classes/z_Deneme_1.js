class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.colorName = name;  // [this is not common to apply]: We can name the property as different than the parameter. We can write 'this.colorName' , instead of 'this.name'. That way the object's property will be named 'colorName'. But this is not common.
        this.specification = "Nice";
        this.sayHello = function(){
            console.log(`Hello from ${name}`);
        }
        this.showProperties = function() {
            return `${this.r}, ${this.g}, ${this.b}, ${this.name}`;
        }
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;  // We used method within a method [innerRGB() in rgba()]
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const color1 = new Color();
const color2 = new Color(124,23,43,"brown");

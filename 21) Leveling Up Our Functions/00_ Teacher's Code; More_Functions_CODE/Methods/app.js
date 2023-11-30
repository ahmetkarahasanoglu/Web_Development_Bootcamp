// Method is a function, added as a property on an object.

const math = {
    multiply : function(x,y) {
        return x * y;
    },
    divide : function(x,y) {
        return x / y;
    },
    square : function(x) {  // Actually, we don't need to write the word "function"; the shorthand writing is in the below block.
        return x * x;
    }
};

// -----------------------------------------

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this);
        console.log(`${this.name} says MEOWWWW`);  // "this" refers to the parent object (cat).
    }
}

const meow2 = cat.meow;  // But here, for meow2()  "this" refers to the Window object. (if you run the meow2() function you will understand)
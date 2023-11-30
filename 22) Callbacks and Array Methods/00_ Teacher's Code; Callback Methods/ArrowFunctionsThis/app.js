// If you get confused, just know that the keyword 'this' behaves differently in arrow function.

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {                         // TRADITIONAL FUNCTION
        return `${this.firstName} ${this.lastName}` // Returns: "Viggo Mortensen"  (here, the keyword "this" refers to the "person" object)
    },
    fullNameOther: () => {                          // ARROW FUNCTION
        console.log(this);                          // prints 'Window object'
        return `${this.firstName} ${this.lastName}` // Returns: undefined undefined  (because the keyword "this" behaves differently in arrow functions: it refers to the Window object.)
    },
    shoutName: function () {            // TRADITIONAL FUNCTION
        setTimeout(function () {            
            console.log(this);          // prints window object. Because setTimeout() [as its rule] is a method of 'window object'.
            console.log(this.fullName()) // Error: "this.fullName is not a function"
        }, 2000)
    },
    shoutNameOther: function () {
        setTimeout(() => {              // ARROW FUNCTION            
            console.log(this);          // prints 'person object'.  the keyword 'this' in arrow functions refers to the value of 'this' where the function is created.
            console.log(this.fullName());
        }, 2000)
    }
}


console.log( person.fullName() );
console.log( person.fullNameOther() );

person.shoutName();
person.shoutNameOther();
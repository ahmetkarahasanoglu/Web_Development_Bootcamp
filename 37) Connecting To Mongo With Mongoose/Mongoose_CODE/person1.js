// VIRTUALS: Virtuals give us the ability to add properties to a schema, but those properties don't actually exist in the database itself.
// (on the line marked with red dot)

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })  // Instead of '127.0.0.1', originally it was written as 'localhost:27017'. But since it gave an error on terminal, I searched on internet and corrected it.
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema);

const tammy = new Person({first: 'Tammy', last: 'Chow'})
console.log(tammy.fullName);  // Tammy Chow . the 'fullName' property was not defined in the database (it was not defined for an instance of Person). But it acts like as if it was defined.
tammy.save();

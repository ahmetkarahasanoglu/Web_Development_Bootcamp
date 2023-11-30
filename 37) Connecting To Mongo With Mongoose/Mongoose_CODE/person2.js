// ~ DEFINING MONGOOSE MIDDLEWARE (on the lines marked with red dot)

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

personSchema.pre('save', async function () {  // [marked -red dot]
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
personSchema.post('save', async function () {  // [marked -red dot]
    console.log("JUST SAVED!!!!")
})


const Person = mongoose.model('Person', personSchema);

const k = new Person({first: 'Kristen', last: 'Sun'})
k.save();

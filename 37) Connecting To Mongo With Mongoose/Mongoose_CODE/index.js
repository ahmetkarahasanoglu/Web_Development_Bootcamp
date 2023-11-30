// index2_Deneme.js file also has important terminal commands in comment lines.

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })  // Instead of '127.0.0.1', originally it was written as 'localhost:27017'. But since it gave an error on terminal, I searched on internet and corrected it.
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });   //  amadeus.save() : saves the 'amadeus' object to the database named 'movies'  --> without this save() method, it doesn't save it to database.   When saved, Mongoose will take this 'Movie' and it will create a collection named 'movies' (plural and starts with small letter)



Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })


/* 

*********** FINDING WITH MONGOOSE (ON TERMINAL) **************
$ cd "This File's Directory"
$ node -i -e "$(< index.js)"    (Actually Colt writes:  $ node   -->  .load index.js    But this doesn't work in new version of mongo, so instead of this, we wrote:   $ node -i -e "$(< index.js)"   -->  This code doesn't work if there are comment lines in the file. So, use a copy of this file like:  indexToRunOnTerminal.js  --> Delete all comment lines in this file. Use the command on this line with this file, it will work.
> Movie.find({}).then(data => console.log(data))    : shows all objects in 'Movie' model.
> Movie.find({rating: 'PG-13'}).then(data => console.log(data))
> Movie.find({year: {$lte: 1990}}).then(data => console.log(data))   : finds object of which year is less than or equal to 1990.
> Movie.findOne({}).then(m => console.log(m))   : prints the first movie it finds.
> Movie.findById('5f3r0c2d838e3725b55202c7').then(m => console.log(m))   : finds by id.

*********** UPDATING WITH MONGOOSE **************
> Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.0}, {new: true}).then(m => console.log(m))   : update the object where title is 'The Iron Giant', set score to 7.0, and return the new updated object (if we don't write {new: true}, it will return the not-updated (old) object)
(these two methods below(↓) doesn't return the updated object)
> Movie.updateOne({title: "Alien"}, {year: 1978}).then(data => console.log(data))   : update the object where title is "Alien", set the year 1978. (this method doesn't return the updated object)
> Movie.updateMany({title: {$in ['Amadeus', 'Stand By Me']}}, {score:10}.then(res => console.log(res))   : update the objects where the title is 'Amadeus' or 'Stand By Me'; set their score to 10. (this method doesn't return the updated object)

*********** DELETING WITH MONGOOSE **************
> Movie.deleteOne({title: 'Amelie'}).then(msg => console.log(msg))   : returns 'deletedCount: 1'
> Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))   : deletes the objects of which year is greater than or equal to 1999. Returns 'deletedCount: x'
> Movie.findOneAndDelete({title: 'Alien'}).then(msg => console.log(msg))   : deletes one object of which title is 'Alien'. Returns the deleted object.

*/

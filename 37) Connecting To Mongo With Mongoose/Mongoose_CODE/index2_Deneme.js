const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })  // '/movieApp' means it's going to use 'movieApp' database. If it doesn't exist, it will create it.
.then(() => {
    console.log("CONNECTION OPEN !!!!")
})
.catch(err => {
    console.log("OH NO ERROR !!!!!!")
    console.log(err);
})



const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});
// Models are similar to classes of javascript:
const Movie = mongoose.model('Movie', movieSchema);  // 'Movie' (the first parameter in paranthesis) must begin with a capital letter, and must be singular.  |||  Mongoose will take this 'Movie' and it will create a collection named 'movies' (plural and starts with small letter)
const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

/* TERMINAL COMMANDS:
$ cd "This File's Directory"
$ node -i -e "$(< index2_Deneme.js)"    (Actually Colt writes:  $ node   /  .load index2_Deneme.js    But this doesn't work in new version of mongo, so instead of this, we wrote:   $ node -i -e "$(< index2_Deneme.js)"    --> this also gave an error when I tried. Instead, I wrote:    mongosh index2_Deneme.js    and:    mongosh
> amadeus   (shows amadeus object)
> amadeus.save()    (saves amadeus object to:  movieApp(database) -> movies(collection) -> amadeus(object))   . We can also change a value:   > amadeus.score = 9.5    amadeus.save()
Ctrl+D   (to get out of node shell) OR open another terminal window
$ mongosh   (to get into mongo shell)
> use movieApp   (movieApp is a database we had created)
> db.movies.find()   (shows content of 'movies' collection: amadeus object)
*/

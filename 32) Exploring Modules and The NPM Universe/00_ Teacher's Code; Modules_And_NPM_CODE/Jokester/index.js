/* CODES TO RUN IN TERMINAL:

To Install give-me-a-joke package:
> npm install give-me-a-joke        // this will add a line of 'give-me-a-joke' to the dependencies in package.json

To run index.js [in 32)-->00_Teacher's Code-->Jokester]:
> node index.js

And then, we wanted to install 'colors' package:
> npm install colors
*/


const jokes = require("give-me-a-joke");
const colors = require("colors");

// console.log(jokes);  // shows us 4 methods of the give-me-a-joke from npm: getRandomCNJoke: [Function (anonymous)], getCustomJoke: [Function (anonymous)], getRandomDadJoke: [Function (anonymous)], getRandomJokeOfTheDay: [Function (anonymous)]

jokes.getRandomDadJoke(function (joke) {  // In terminal, we must write '> node index.js' to run this file (index.js) in terminal.
    console.log(joke);
});

// jokes.getRandomDadJoke(function (joke) {
//     console.log(joke.rainbow);         // rainbow is a method of 'colors' package. Rainbow method was added to the String prototype. That's how we can use it here like this. (joke is a string by the way).
// });
// Or, we have a more logical, reasonable option [ colors.rainbow(joke) ] which doesn't use String prototype:
jokes.getRandomDadJoke(function (joke) {
    console.log(colors.rainbow(joke));
})

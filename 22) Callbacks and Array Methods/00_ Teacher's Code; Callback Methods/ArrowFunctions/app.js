// const add = function(x,y) {
//     return x + y;
// }

// // YUKARIDAKİ YAZIM ŞEKLİYLE AŞAĞIDAKİ ARROW'LU YAZIM ŞEKLİNİN İŞLEVİ AYNI.

// const add = (x, y) => {   // "ARROW FUNCTION" yazım şekli.
//     return x + y;
// }

const add = (a, b) => a + b;


const square = num => {  // When the function takes only one argument (here it's "num"), we don't have to use paranthesis surrounding it. But I think it's better to use paranthesis, because it's easier to understand.
    return num * num;
}

// const rollDie = () => {                         // If we're gonna use implicit return (which is omitting the "return" keyword); we must use normal parentheses, instead of curly paranthesis [shown in the below block].
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)




const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

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

// const myMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

const myMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score/10}`;
})

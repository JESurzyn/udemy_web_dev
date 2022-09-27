const numbers = [1, 2, 3, 4, 5, 6, 7]

let odds = numbers.filter(function (x) {
    return x % 2 !== 0;
})

const odds2 = numbers.filter(x => (
    x % 2 !== 0
))

const odds3 = numbers.filter(n => n % 2 === 1)

// a more complicated version below

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    { 
        title: 'Alien',
         score: 92,
         year:1988
    },
    { 
        title: 'Star Wars',
        score: 89,
        year:1978 
    },
    { 
        title: 'Saving Private Ryan',
        score: 95,
        year: 1999 
    }
]

const excellentMovies = movies.filter(movie => movie.score >= 95)
const excellentTitles = excellentMovies.map(m => m.title)

//combining the above into one line using method chaining
movies.filter(movie => movie.score >=95).map(m=>m.title);

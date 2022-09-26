// no longer used that often because of the newer for of loop

const numbers = [1,2,3,4,5,6,7]

numbers.forEach(function(el){
    if(el%2===0){
        console.log(el)
    }
})

// below is the same in a for of loop format

for (let el of numbers) {
    if(el%2===0){
        console.log(el)
    }
}

// a more complicated version below

const movies = [
    {title:'Amadeus', score:99},
    {title:'Alien', score:92},
    {title:'Star Wars', score:89},
    {title:'Saving Private Ryan', score:95}
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})

//rewwriting something like the above with arrow syntax

const newMoview = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
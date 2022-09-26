const numbers = [1,2,3,4,5,6,7]

let odds = numbers.filter(function(x) {
    return x % 2 !== 0;
})

const odds2 = numbers.filter(x => (
    x % 2 !== 0
))

const odds3 = numbers.filter(n => n%2 === 1)

// a more complicated version below

const movies = [
    {title:'Amadeus', score:99},
    {title:'Alien', score:92},
    {title:'Star Wars', score:89},
    {title:'Saving Private Ryan', score:95}
]

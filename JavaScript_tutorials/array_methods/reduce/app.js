const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// same as above but using reduce array method
//total is the "accumulator" in this case and price is the "currentValue"
const total = prices.reduce((total, price) => {
    return total + price
})

// finding min value in the above array
const minimum = prices.reduce((min,price)=>{
    if(price < min) {
        return price;
    }
    return min;
})


//finding the max rated movie

const movies = [
    {title:'Amadeus', score:99},
    {title:'Alien', score:92},
    {title:'Star Wars', score:89},
    {title:'Saving Private Ryan', score:95}
]

const highestRated = movies.reduce((bestMovie, currMovie)=>{
    if(currMovie.score > bestMovie.score){
        return currMovie.title
    }
    return bestMovie.title;
})

//using reduce with an initial or explicit accumulator value -> in the below example it is 100, so we start
//adding at 100 -> the result being 120 rather than simply 20
const evens = [2,4,6,8];
evens.reduce((sum, num) => sum + num, 100)
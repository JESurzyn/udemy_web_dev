//------------destructuring Arrays-----------------

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [fastest, ...everyoneElse] = raceResults;
fastest;//'Eliud Kipchoge'
everyoneElse; //['Feyisa Lelisa', 'Galen Rupp'] //here we also used the rest operator


//-------------destructuring objects---------------------

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politicaian and the first openly gay',
    city: 'San Francisco',
    state: 'California'
}

// const email1 = user.email;
// const { email } = user;
//the above are equivalent

// the below will allow you to make separate variables for each key in the above object in one line
const { email, firstName, lastName, city } = user;

//if you want to rename the variable
const { born: birthYear, died:deathYear } = user;

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// getting default values
const { city:city2, state:state2, died = 'N/A'} = user2;

//-------------destructuring parameters---------------------
// using the above user2 object

// the standar way to get first name and last name out but a bit unwieldly if we needed to use
// firstName and lastName a lot in the function because we'd always have to preface with user.
function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

// a better way
function fullName2(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

//an even better way, destructuring in the params itself
//the below will accept an object and will just pull out
//the values needed from the keys in the params
function fullName3({firstName, lastName = 'assfdfs'}) {
    return `${firstName} ${lastName}`
}

// using destructuring params with array methods
const movies = [
    {title:'Amadeus', score:99},
    {title:'Alien', score:92},
    {title:'Star Wars', score:89},
    {title:'Saving Private Ryan', score:95}
]

movies.filter((movie) => movie.score >=90)//standard
movies.filter(({score}) => score >= 90) //usering destructuring

movies.map(({title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
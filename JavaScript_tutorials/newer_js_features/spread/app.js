//spread syntax -> ...
// using spread during a function call

nums = [13,4,5,21,3,3,1,2,7,6,4,2,5343]

console.log(Math.max(nums))  //this will return undefined because we are passing a single array

console.log(Math.max(...nums)) //this will essentially drop the brackets and pass each element in, so max will work as we hope

// can be used for strings as well
console.log(...'hello')


// using spread with array literals

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs =- ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]
// above will make an entirely new arrary with the elements from the previous arrays spread out
const allPets2 = [...cats, ...dogs, 1,3, 'Speedy'] //just demonstrating that you can other non-spread elements too

// works with strings too
console.log(['hello']);
console.log([...'hello']);



// using spread with objects

const feline = {legs: 4, family:'Felidae'};
const canine = {isFurry: true, family:'Caninae'}

const catDog = {...feline, ...canine}
// the above will return {legs:4, family:'Caninae', isFurry:true}
// note that canine family key-value overwrites the feline key-value because it comes later in the new object
// const catDog = {...feline, ...canine, family:'Surzyn'} would return {legs:4, family:'Surzyn', isFurry:true}
// again because the custome key-value pair family:'Surzyn' comes latest in the the new object

// for pausing some code
//requires a callback function as the first argument
console.log("HELLO")
setTimeout(() => {
    console.log("....are you still there")
}, 3000) // 3000 miliseconds = 3 seconds

console.log('GOODBYE') //note this will run right after hello, with the are you still there following after 3 sec


// calling something via set interval

const id = setInterval(() => {
    console.log(Math.random())
},2000);

//in order to clear the interval, pass the id (as defined above)
clearInterval(id)
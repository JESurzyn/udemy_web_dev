// most basic function
function singSong(){
    console.log('DO');
    console.log('RE');
    console.log('ME');
}

// defining a function with a parameter
function greet(firstName) {
    console.log(`firstname is ${firstName}`)
    console.log('Hi!')
}

// defining a function with multiple parameters
function greet2(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}`)
}

// another function with multiple params

function repeat(str, numTimes) {
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}

// functions that return a value
function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x+y;
}

// function expression version of a squaring function
// this syntax is somewhat similar to a python lambda expression

const square = function(num) {return num*num;}


///////// examples of higher order functions//////
// - functions that accept functions as arguments
function callTwice(func) {
    func();
    func();
}

function callTen(func) {
    for (let i = 0; i < 10; i++) {
        func();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() *6) +1
    console.log(roll)
}

callTwice(rollDie)
callTen(rollDie)

// - functions that return functions
// 1. a silly version

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
            return function() {
                console.log("CONGRATS, I AM A GOOD FUNCTION!");
                console.log("YOU WIN A MILLION DOLLARS!!");
            }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTRER VIRUS!");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            }
        }
    }
// 2. a more reasonable version - returning one function or another
// based on certain conditions -- a factory function

function makeBetweenFunc(min, max) {
    return function(num) {
        if(num >= min && num <= max) {
            return true;
        } else {
            return false;
        }
    }
}
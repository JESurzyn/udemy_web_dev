// two versions of how to create methods
//basically just create an object - almost everything is technically and object in js

// 1. explicit
const myMath = {
    PI:3.14159,
    square: function(num) {
        return num*num;
    },
    cube: function(num) {
        return num**3;
    }
}

// 2. shorthand
const myMath2 = {
    PI: 3.14159,
    square(num) {
        return num*num;
    },
    cube(num) {
        return num**3;
    }
}

// a look at the this keyword
//the value of 'this' is depedent on the context of invocation
//if cat.meow() 'this' refers to the cat object,
//if meow2() is called, 'this' refers to the window object

const cat = {
    name:'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWW`);
    }
}

const meow2 = cat.meow;


//return of the 'this' keyword
//below is just to illustrate that 'this' works differently when called in an arrow function vs.
//when referred to in regular function syntax

//for arrow functions 'this' is defined by the scope where the function in defined
//for normal function syntax 'this' is defined by the scope where the function is executed
const person = {
    firstName: 'Viggo',
    lastName: 'Mortenson',
    fullNameWorks: function() {
        return `${this.firstName} ${this.lastName}`
    },
    fullNameUndefined: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this); 
            console.log(this.fullNameWorks());
            console.log(this.fullNameUndefined());
        }, 3000)
    }

}
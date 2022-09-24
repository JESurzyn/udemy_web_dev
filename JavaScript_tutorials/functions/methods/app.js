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
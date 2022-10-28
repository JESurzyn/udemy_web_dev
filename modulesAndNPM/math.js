const add = (x, y) => x+y

const pi = 3.14

const square = x => x*x

//===============
//explicit way to add to
// module.exports.add = add
// module.exports.pi = pi
// module.exports.square = square

//===============
//shortcut syntax
// exports.add = add
// exports.pi = pi
// exports.square = square


//===============
//alternative way to add to
const math = {
    add:add,
    pi:pi,
    square:square
}

module.exports = math;


//==================
//another way would just be defining with the exports in mind
// module.exports.add = (x, y) => x+y

// module.exports.pi = 3.14

// module.exports.square = x => x*x
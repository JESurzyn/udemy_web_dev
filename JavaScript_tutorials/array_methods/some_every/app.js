// some and every are boolean methods that return true or false depending on the callback function they are passed

const exams = [80,98,92,78,77,90,89,84,81,77]

let allPassed = exams.every(score => score >=75) //this is exhaustive

let somePassed = exams.some(score => score >=75) //this isn't
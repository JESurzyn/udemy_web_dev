// function sum() {
//     // console.log(arguments)
//     return arguments.reduce((total,el)=> total+el)
// }

//arguments is not an array but acts like one is some ways

function sum(...nums){
    // console.log(nums)
    return nums.reduceRight((total,el)=>total+el)
}

//in the above case, if there are multiple arguments passed to sum, it will collect them
//in an array called nums when using the ... "rest" syntax

const raceResults = function(gold, silver, ...everyoneElse) {
    console.log(`GOLD GOES TO ${gold}`)
    console.log(`SILVER GOES TO ${silver}`)
    console.log(`THANKS TO EVERYONE ELSE ${everyoneElse}`)//this will print as an array
}

raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis')
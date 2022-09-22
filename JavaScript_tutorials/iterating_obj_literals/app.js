const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon:72
}

// for in loop
// for (let st in testScores) {
//     console.log(`${st} scored ${testScores[st]}`);
// }

// for (let score of Object.values(testScores)) {
//     console.log(score)
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}

console.log(total/scores.length)

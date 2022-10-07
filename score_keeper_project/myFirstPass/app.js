//buttons
const pOne = document.querySelector('#p1');
const pTwo = document.querySelector('#p2');
const resetB = document.querySelector('#reset');

const scoreOne = document.querySelector('#scoreOne');
const scoreTwo = document.querySelector('#scoreTwo');
const scoreLimit = document.querySelector('#scoreLimit');

let pOneScore = 0;
let pTwoScore = 0;
let winScore = scoreLimit.value;

function trackLimit(e) {
    console.log(scoreLimit.value)
    winScore = scoreLimit.value
}

// function addPoint(playerScore) {
//     playerScore += 1
//     // return player
// }

scoreLimit.addEventListener('input',trackLimit);

pOne.addEventListener('click', function () {
    pOneScore += 1;
    console.log(pOneScore);
    scoreOne.innerText = `${pOneScore}`;
    if (pOneScore === parseInt(winScore)) {
        pOne.disabled = true;
        pTwo.disabled = true;
        scoreOne.style.color = 'green'
        scoreTwo.style.color = 'red'
    }
})

pTwo.addEventListener('click', function () {
    pTwoScore += 1;
    console.log(pTwoScore);
    scoreTwo.innerText = `${pTwoScore}`;
    if (pTwoScore === parseInt(winScore)) {
        pOne.disabled = true;
        pTwo.disabled = true;
        scoreTwo.style.color = 'green'
        scoreOne.style.color = 'red'
    }
})

resetB.addEventListener('click', function () {
    pOneScore = 0;
    pTwoScore = 0;
    scoreOne.innerText = `${pOneScore}`;
    scoreTwo.innerText = `${pTwoScore}`;
    pOne.disabled = false;
    pTwo.disabled = false;
    scoreTwo.style.color = 'black'
    scoreOne.style.color = 'black'
})


//buttons
const pOne = document.querySelector('#p1');
const pTwo = document.querySelector('#p2');
const resetB = document.querySelector('#reset');

const scoreBoard = document.querySelector('h1');
const scoreLimit = document.querySelector('#scoreLimit');

let pOneScore = 0;
let pTwoScore = 0;
let winScore = scoreLimit.value;

function trackLimit(e) {
    console.log(scoreLimit.value)
    winScore = scoreLimit.value
}

scoreLimit.addEventListener('input',trackLimit)
// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// const SECRET = 'babyhippo';
// let guess = prompt('enter the secret code...');
// while (guess !== SECRET) {
//     guess = prompt('enter the secret code...');
// }
// console.log('congrats you got the secret')


// break

// let input = prompt('Hey, say something');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') {
//         break;
//     }
// }
// console.log('Ok you win')

// guessing game

let maximum =  parseInt(prompt('Pick a maximum number'));
while(!maximum) {
    maximum = parseInt(prompt('please enter a valid number'));
}

const targetNum = Math.floor((Math.random() * maximum)) + 1;
console.log(targetNum);
let attempt = 1;

let guess = parseInt(prompt('Enter your first guess!'));
while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    attempt++
    if(guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else {
        guess = prompt('Too low! Enter a new guess:')
    }
}
if(guess === 'q') {
    console.log('you quit');
} else {
    console.log(`you got it! it took yout ${attempt} guesses`);
}
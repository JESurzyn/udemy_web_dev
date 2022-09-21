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

let input = prompt('Hey, say something');
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me') {
        break;
    }
}
console.log('Ok you win')
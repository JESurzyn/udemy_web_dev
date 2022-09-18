// const userPassword = prompt('What is your password?');

// if (userPassword.length >= 6 && userPassword.indexOf(' ') === -1) {
//     console.log('Valid');
// } else {
//     console.log('INVALID PW');
// }

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = 25;
// if ((age >= 0 && age <= 5) || age >=65) {
//     console.log('Free');
// } else if (age >= 5 && age < 10 ) {
//     console.log('$10');
// } else if (age >= 10 && age < 65) {
//     console.log('$20');
// } else {
//     console.log('Invalid Age')
// }

// let firstName = prompt('enter your first name');
// if (!firstName) {
//     firstName = prompt('Try Again!!');
// }

const age = 8;
if (!((age >= 0 && age <= 5) || age >=65)) {
    console.log('YOu are not a baby or a senior')
}
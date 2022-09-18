// console.log("BEFORE CONDITIONAL")
// let rand = Math.random();
// if (rand < 0.5) {
//     console.log('Your number is less than 0.5')
// } else {
//     console.log('Your number is greater (or equal) than 0.5')
// }
//     console.log(rand);

// console.log("AFTER CONDITIONAL")

// const dayOfWeek = 'Sunday';
// const dayOfWeek = prompt('Enter a day').toLowerCase()

// if(dayOfWeek === 'monday') {
//     console.log('UGHHH I HATE MONDAYS!');
// } else if (dayOfWeek === 'saturday') {
//     console.log('YAY I LOVE SATURDAYS!');
// } else if (dayOfWeek === 'friday') {
//     console.log('Fridays are decent, especially after work');
// } else {
//     console.log('MEH');
// } 

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10-65 ADULT $20 
// 65+ SENIOR $10

// const age = 2;

// if (age < 5) {
//     console.log('You are a baby, you get in for free')
// } else if (age < 10) {
//     console.log('You are a child, you pay $10')
// } else {
//     console.log('You are an adult, you pay $20')
// }

const password = prompt('please enter a new password');

// password must be 6+ characters
if(password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log('Valid');
    } else {
        console.log('Password cannot contain spaces!');
    }
} else {
    console.log("PASSWORD TOO SHORT, Must be 6+ characters ");
}

//declaring a function as async automatically returns a promise
// async function hello() {

// }

//arrow function syntax for declaring async functions
// const sing = async () => {
//     // throw new Error("UH OH");
//     throw "OH NO PROBLEM";
//     return 'LALALALA';
// }

// sing()
//     .then(data => {
//     console.log('Promise resolved with:', data)
//     })
//     .catch(err => {
//         console.log('OH NO, PROMISE REJECTED')
//         console.log(err)
//     })

// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Credentials'
//     if(password === 'corgifeetarecute') return 'WELCOME!'
//     throw 'Invalid Password'
// }

// login('askdfs', 'corgifeetarecute')
//     .then (msg => {
//         console.log('LOGGED IN!')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('ERROR')
//         console.log(err)
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(()=>{
//         return delayedColorChange('orange', 1000)
//     })
//     .then(() => delayedColorChange('yellow', 1000)) //implicit return syntax
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


//await keyword
// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return "ALL DONE"
// }

// // rainbow().then(() => console.log("END OF RAINBOW!"))
// async function printRainbow() {
//     await rainbow();
//     console.log('END OF RAINBOW')
// }

// printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random()* (4500)) + 500;
        setTimeout(()=> {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//catching errors for async functions
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log('CAUGHT an error')
        console.log('Error IS:', e)
    }

}

// try {
//     asdfsdf.log('sdffsd')
// } catch(e) {
//     console.log('ITS OK', e)
// }
// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("REPSONSE:", res)
// })
// .catch((e) => {
//     console.log("ERROR", e);
// });

// const getstarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data)
//     } catch(e) {
//         console.log("Error:", e);
//     }
// };

// getstarWarsPerson(5);
// getstarWarsPerson(10);

//setting headers with AXIOS

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    // console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)
// getDadJoke();
// try {
//     hello.toUpperCase();
// } catch {
//     console.log('Error!');
// }

// console.log('After')


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e); //e here represents the variable caught and the log will print the error
        console.log("Please pass a string next time!")
    }
    
}
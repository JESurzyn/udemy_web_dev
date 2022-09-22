const subreddits = ['cringe', 'books', 'chickens', 'funny']

// traditional for loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(`visit reddit.com/r/${subreddits[i]}`);
}

// for_of loop
for (let sub of subreddits) {
    console.log(`visit reddit.com/r/${sub}`);
}
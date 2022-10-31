const express = require('express');
const app = express();
// console.dir(app)

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
    // console.log(req)
    // res.send("HELLO WE GOT YOUR REQUEST!! THIS IS A RESPONSE") 
    // res.send("<h1>This is my webpage</h1>") 
// })


//routes to build
// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.get('/', (req, res) => {
    res.send("This is the home page!!!")
})

//using path parameters when defining a route
app.get('/r/:subreddit/:postID', (req, res) => {
    // res.send('THIS IS A SUBREDDIT')
    //getting the subreddit via path parameters
    // console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1> Viewing ${postId} on the subreddit ${subreddit}</h1>`)
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!")
})
app.post('/cats', (req, res) => {
    res.send("POST REQUEST to /cats !!!! THIS IS DIFFERNT THAN A GET REQUEST")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!")
})

app.get('/search', (req,res) => {
    // console.log(req.query);
    // res.send('HI!')
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})
//matches everything - make sure to place at the end because routes
//are matched in order
app.get('*', (req, res) => {
    res.send("I DON'T KNOW THAT PATH")
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
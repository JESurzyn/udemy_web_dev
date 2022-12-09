const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')

//the app.use method -> middleware
// app.use(() =>{
//     console.log("HEYYY!!!!")
// })

//middleware
// app.use(morgan('common'))
// app.use((req, res, next)=>{
//     // res.send('HIJACKED BY MY APP.USE!')
//     console.log('THIS IS MY FIRST MIDDLEWARE!!!')
//     return next();//-> using next is essential to move on to whatever is next
//     console.log('THIS IS MY LOG AFTER NEXT() IN FIRST MIDDLEWARE')
// })
// app.use((req, res, next)=>{
//     // res.send('HIJACKED BY MY APP.USE!')
//     console.log('THIS IS MY SECOND MIDDLEWARE!!!')
//     next();
// })
// app.use((req, res, next)=>{
//     // res.send('HIJACKED BY MY APP.USE!')
//     console.log('THIS IS MY THIRD MIDDLEWARE!!!')
//     next();
// })
app.use(morgan('tiny'))
app.use((req, res, next) => {
    // req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path)
    next();
})
app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS")
    next();
})

//password middleware
// app.use((req, res, next) => {
//     const {password} = req.query;
//     if (password === 'chickennugget') {
//         next();
//     }
//     res.send('SORRY YOU NEED A PASSWORD!!!!')
// })
//this middleware as function instead
const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!!!')
}


//routes
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req, res) =>{
    res.send('MY SECRET IS: Sometimes I wear headphones is public so I don\'t have to talk to people')
})

//error code middleware at the end of the file
app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

// app.use((req, res, next) => {
//     // req.method = 'GET';
//     req.requestTime = Date.now();
//     console.log(req.method.toUpperCase(), req.path)
//     next();
// })

app.listen(3000, () => {
    console.log('APP RUNNING ON localhost:3000')
})
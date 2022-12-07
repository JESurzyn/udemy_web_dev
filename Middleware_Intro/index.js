const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')

//the app.use method -> middleware
// app.use(() =>{
//     console.log("HEYYY!!!!")
// })

app.use(morgan('common'))
app.use((req, res, next)=>{
    // res.send('HIJACKED BY MY APP.USE!')
    console.log('THIS IS MY FIRST MIDDLEWARE!!!')
    return next();//-> using next is essential to move on to whatever is next
    console.log('THIS IS MY LOG AFTER NEXT() IN FIRST MIDDLEWARE')
})
app.use((req, res, next)=>{
    // res.send('HIJACKED BY MY APP.USE!')
    console.log('THIS IS MY SECOND MIDDLEWARE!!!')
    next();
})
app.use((req, res, next)=>{
    // res.send('HIJACKED BY MY APP.USE!')
    console.log('THIS IS MY THIRD MIDDLEWARE!!!')
    next();
})

app.get('/', (req, res) => {
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.listen(3000, () => {
    console.log('APP RUNNING ON localhost:3000')
})
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');


const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

//promise structure below is for initial connection error handling
mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch((e) => {
        console.log("MONGO CONNECTION FAILED!!")
        console.log(e);
    });

//TODO: look up the block of code below -> tutorials haven't used this before
//--documentation indicates this block is for handling errors after the initial connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public'))) //for serving static directories

const sessionConfig = {
    secret: 'thisisabadsecret',
    resave:false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }

}
app.use(session(sessionConfig));
app.use(flash());

app.use((req,res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);

app.get('/', (req, res) => {
    res.render('home')
})


//for every request (all) for each route (*)
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

//basic error handler
app.use((err, req, res, next)=>{
    const { statusCode = 500 } = err;
    if(!err.message) err.message = 'Oh No!! Something went wrong' 
    res.status(statusCode).render('error', { err });
})

const port = 3000
app.listen(port, ()=> {
    console.log(`Serving on port ${port}`)
})

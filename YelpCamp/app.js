const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const Campground = require('./models/campground');

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


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', { campgrounds })
})
app.get('/campgrounds/:id', async (req, res) => {
    const {id} = req.params
    const campgrounds = await Campground.findById(id)
    res.render('campgrounds/show', { campgrounds })
})


const port = 3000
app.listen(port, ()=> {
    console.log(`Serving on port ${port}`)
})

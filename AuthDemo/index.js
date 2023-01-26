const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(e => {
        console.log('OH NO MONGO CONNECTION ERRORR!!!')
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended:true}))
app.use(session({secret:'notagoodsecret'}))

//login middleware
const requireLogin = (req, res, next) => {
    if(!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE')
})

app.get('/register', (req, res) => {
    res.render('register')
})

// app.post('/register', async (req, res) => {
//     const {username, password} = req.body;
//     const hash = await bcrypt.hash(password, 12);
//     const user = new User({
//         username,
//         password: hash
//     })
//     await user.save();
//     // const foundUser = await User.findOne({username});
//     req.session.user_id = user._id;
//     res.redirect('/secret')
// })

//refactored to move password hashing to user model via Mongoose middleware
app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    // const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, password})
    await user.save();
    // const foundUser = await User.findOne({username});
    req.session.user_id = user._id;
    res.redirect('/secret')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    // res.send(req.body)
    const {username, password} = req.body;
    // const user = await User.findOne({username});
    // const validPassword = await bcrypt.compare(password, user.password);
    const foundUser = await User.findAndValidate(username, password); //method created on user model using statics
    // if(validPassword) {
    //     req.session.user_id = user._id;
    //     // res.send("YAY WELCOME!!!")
    //     res.redirect('/secret');
    // } else {
    //     res.redirect('/login');
        // res.send('TRY AGAIN')
    // }
    if(foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    //req.session.user_id = null; //minimum
    req.session.destroy(); //if you have more session info that you need to get rid of
    res.redirect('/login')
})

// app.get('/secret', (req, res) => {
//     if(!req.session.user_id) {
//         res.redirect('/login')
//     }
//     res.render('secret')
// })
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('TOP SECRET')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
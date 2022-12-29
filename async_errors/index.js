const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError = require('./AppError')


const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(e => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({extended: true})) //what does this do again?
app.use(methodOverride('_method'))

//additional logics
const categories = ['fruit', 'vegetable', 'dairy'];

//async utility - catches errors, removes need to wrap all async functions in a try except
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

//routes
app.get('/products', wrapAsync(async (req, res, next) => {
        const {category} = req.query;
        if(category) {
            const products = await Product.find({category})
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({})
            res.render('products/index', { products, category: 'All' })
        }
        // console.log(products)
}))

app.get('/products/new', wrapAsync((req, res) => {
    // throw new AppError('NOT ALLOWED', 401)
    res.render('products/new', { categories })
}))

app.post('/products', wrapAsync(async (req, res, next) => {
    // console.log(req.body)
        const newProduct = new Product(req.body)
        await newProduct.save();
        console.log(newProduct)
        // res.send('making your product')
        res.redirect(`/products/${newProduct._id}`)
}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {
        const {id} = req.params;
        const product = await Product.findById(id)
        if(!product) {
            // return next(new AppError('Product Not Found', 404));
            throw new AppError('Product Not Found', 404);
        }
        // console.log(product);
        res.render('products/show', { product })
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/edit', { product, categories })
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new:true});
        res.redirect(`/products/${product._id}`)
        // console.log(req.body);
        // res.send('PUT!!!!');
}))

app.delete('/products/:id', wrapAsync(async (req, res, next) => {
        // console.log('YOU MADE IT!!');
        // res.send('YOU MADE IT!!')
        const { id } = req.params;
        const delProd = await Product.findByIdAndDelete(id);
        res.redirect('/products');
}));

const handleValidationErr = err => {
    console.log(err);
    return new AppError(`Validation Failed...${err.message}`, 400)
}

//error handling middleware with (mongoose) name
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
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

//routes
app.get('/products', async (req, res) => {
    const {category} = req.query;
    if(category) {
        const products = await Product.find({category})
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
    // console.log(products)
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    // console.log(req.body)
    const newProduct = new Product(req.body)
    await newProduct.save();
    console.log(newProduct)
    // res.send('making your product')
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id)
    // console.log(product);
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new:true});
    res.redirect(`/products/${product._id}`)
    // console.log(req.body);
    // res.send('PUT!!!!');
})

app.delete('/products/:id', async (req, res) => {
    // console.log('YOU MADE IT!!');
    // res.send('YOU MADE IT!!')
    const { id } = req.params;
    const delProd = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})
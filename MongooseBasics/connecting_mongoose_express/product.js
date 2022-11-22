const mongoose = require('mongoose');

//connecting to the mongo with db named shopApp
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log('OH NO ERROR!!!!')
    console.log(err)
})

//schema validations
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});


//------------------------------------------------------------------------------------------------

//model instance methods
productSchema.methods.greet = function() {
    console.log("HELLO!! HI! HOWDY!!")
    console.log(`- from ${this.name}`)
}

//toggle save
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

//add new categories
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

//------------------------------------------------------------------------------------------------
//static methods -- on the model itself
productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0});
}


//------------------------------------------------------------------------------------------------

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    // foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res))

// findProduct();

// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
// .then(data => {
//     console.log("IT WORKED");
//     console.log(data)
// })
// .catch(err => {
//     console.log("OH NO ERROR!")
//     console.log(err)
// })
// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -19.99}, {new: true, runValidators: true})
// .then(data => {
//     console.log("IT WORKED");
//     console.log(data)
// })
// .catch(err => {
//     console.log("OH NO ERROR!")
//     console.log(err)
// })

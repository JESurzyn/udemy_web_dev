const mongoose = require('mongoose')
const Product = require('./product');
const {Schema} = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Farm must have a name']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Product'
        }
    ]
})

//mongoose middleware for deleting

// //illustrating pre and post mongoose query middleware

// farmSchema.pre('findOneAndDelete', async function(data) {
//     console.log('PRE MIDDLEWARE!!!!')
//     console.log(data)
// })

// farmSchema.post('findOneAndDelete', async function(data) {
//     console.log('POST MIDDLEWARE!!!!')
//     console.log(data)
// })

farmSchema.post('findOneAndDelete', async function(farm) {
    if(farm.products.length){
        const res = await Product.deleteMany({_id: { $in: farm.products }})
        console.log(res)
    }
    console.log('POST MIDDLEWARE!!!!')
    console.log(farm)
})



const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;

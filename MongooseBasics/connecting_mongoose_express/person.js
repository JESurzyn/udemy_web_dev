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

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//creating virtuals
//virtuals are properties of data that basically live in Mongoose rather than the db itself, derrived from the data
//in the database
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

//defining some middleware examples
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!")
})

personSchema.post('save', async function () {
    console.log("JUST SAVED!!")
})

const Person = mongoose.model('Person', personSchema);
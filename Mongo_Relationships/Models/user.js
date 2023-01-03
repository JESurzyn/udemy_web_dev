const mongoose = require('mongoose');
//promise structure below is for initial connection error handling
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
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

// One to Few Relationships in Mongo - embed in same document
const userSchema = new mongoose.Schema(
{
    first: String,
    last: String,
    address: [
        {
            _id: { id: false }, //mongoose will automatically create id for subschema, this turns that off
            street:String,
            city: String,
            state: String,
            country: String
            
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first:'Harry',
        last : 'Potter'
    })
    u.address.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
} 

// makeUser();
addAddress('63b4572fa7ed19cc9c2d0c8f');
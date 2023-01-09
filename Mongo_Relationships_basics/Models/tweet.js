const mongoose = require('mongoose');
const {Schema} = mongoose;
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


//example of making a one to "bajillions" model
//essentially we are going to put a reference to the parent on the child
//instead of a reference to the child on the parent
const userSchema = new Schema({
    username:String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'} //this is a reference to the model 'User'
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     const user = new User({username: 'chickenfan99', age: 61});
//     const tweet1 = new Tweet({text: 'omg I Love my chicken family', likes: 0})
//     tweet1.user = user;
//     user.save();
//     tweet1.save();
// }
// const makeTweets = async () => {
//     const user = await User.findOne({username: 'chickenfan99'});
//     const tweet2 = new Tweet({text: 'bock bock bock is the sound my chicken makes', likes: 1245})
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();

//querying a tweet to get full data for a user

//this will only show the user id
const findTweet1 = async () => {
    const t = await Tweet.findOne({})
    console.log(t);
}

//this will show fully populated user data
const findTweet2 = async () => {
    const t = await Tweet.findOne({}).populate('user')
    console.log(t);
}

//this will show user data populated with only a set field
const findTweet3 = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username')
    console.log(t);
}

findTweet1();
findTweet2();
findTweet3();
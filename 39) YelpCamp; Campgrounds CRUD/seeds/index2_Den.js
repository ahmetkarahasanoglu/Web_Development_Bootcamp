// We will run this file on its own, seperately from our node app, anytime we want to seed our database.

const mongoose = require('mongoose');
const cities = require('./cities.js')
const { descriptors, places } = require('./seedHelpers.js')
const Campground = require('../models/campground2_Den.js')  //we're going one level up on the directory by typing '../'

mongoose.connect('mongodb://127.0.0.1/yelp-camp_Deneme', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const sample = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i=0; i<50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})